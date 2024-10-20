

function init() {

    let content1 = document.getElementById('content1');
    let content2 = document.getElementById('content2');
    let form = document.getElementById('guestbookForm');
    let textarea = document.getElementById('textarea');
    let currentpage = 1;

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        addInput(textarea.value);
        textarea.value = "";
    });

}
window.addEventListener("load", init);

function addInput(inputValue) {

    let content1 = document.getElementById('content1');
    let content2 = document.getElementById('content2');

    let text1 = document.getElementById("text1");
    let text2 = document.getElementById("text2");
    text1.textContent = inputValue;




}