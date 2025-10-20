import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

export default async function executeCommand(
  command: string, 
  count: number = 1
): Promise<string[]> {
  if (count < 1 || count > 10) {
    throw new Error('Count must be between 1 and 10');
  }

  const results: string[] = [];
  
  for (let i = 0; i < count; i++) {
    try {
      const { stdout, stderr } = await execAsync(command);
      
      if (stderr) {
        console.warn(`Command execution warning: ${stderr}`);
      }
      
      results.push(stdout.trim());
    } catch (error) {
      throw new Error(`Command execution failed: ${error instanceof Error ? error.message : String(error)}`);
    }
  }

  return results;
}
