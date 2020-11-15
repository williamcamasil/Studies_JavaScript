
fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits')
.then(response => response.json())
.then(myJson => document.querySelector("#ipText").innerHTML = myJson[0].author.id);