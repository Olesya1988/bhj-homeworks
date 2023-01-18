const editor = document.getElementById('editor');

let savedText = localStorage.getItem('key');

if (savedText) {
    editor.value = JSON.parse(savedText);
};

editor.oninput = function() {
    let text = JSON.stringify(editor.value);
    localStorage.setItem('key', text);
};