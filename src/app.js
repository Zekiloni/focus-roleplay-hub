

let documentation = null;

fetch('https://api.github.com/repos/Zekiloni/focus-roleplay-hub/contents/documentation', { method: 'get', headers: new Headers({ 'Authorization': 'token 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', 'Content-Type': 'none' }) }) 
    .then(response => response.json())
    .then(data => console.log(data));