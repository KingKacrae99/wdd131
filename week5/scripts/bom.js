const input = document.querySelector('#favchap');
const button= document.querySelector('button');
const list = document.querySelector('#list');

let chapterArray = getChapterList() || [];

chapterArray.forEach(chapter => {
    displayList(chapter);
});

button.addEventListener('click',function(){
    if (input.value.trim() !== ''){
        displayList(input.value);
        chapterArray.push(input.value);
        setChapterList();
        input.value = '';
        input.focus();
    }
});
function displayList(item){
    let li = document.createElement('li');
    const deleteButton = document.createElement('button');

    li.textContent = item;
    deleteButton.textContent = '❌';
    deleteButton.classList.add('delete');
    li.append(deleteButton);
    list.append(li);

    deleteButton.addEventListener('click', function() {
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();
    });
}
function setChapterList() {
    localStorage.setItem('myfavBomList', JSON.stringify(chapterArray));
}
function getChapterList(){
    return JSON.parse(localStorage.getItem("myfavBomList"));
}
function deleteChapter(chapter){
    chapter = chapter.slice(0,chapter.length - 1);
    chapterArray = chapterArray.filter((item) => item !== chapter);
    setChapterList();
}

