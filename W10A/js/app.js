

// 1. querySelector()
var firstPTag = document.querySelector('p');
firstPTag.innerText = "This is a first paragraph.";


// 2. querySelectorAll()
var allPTags = document.querySelectorAll('p');
for (var i=0; i<allPTags.length;i++){
    allPTags[i].innerText = "All of those are P Tags.";
}


// 3. getElementById()
var specialPTag = document.getElementById('special');
specialPTag.innerText = "A special paragraph.";


// 4. getElementByClassName()
var niceClass = document.getElementsByClassName('better');
for (var i=0; i<niceClass.length;i++){
    niceClass[i].innerText = "This is something very special! Check it out.";
}


// 5. getElementByTagName
function addText(){
    document.getElementsByTagName('p')[1].innerHTML = "If you see this. Congratulations!"
}


// 6. createElement()
var newElement = document.createElement('p');
var oldElement = document.getElementById('special');
oldElement.append(newElement);
newElement.innerText= "Hello World! Welcome to my site.";


// appendChild
function addTextNode() {
    var text = document.createTextNode("It is our story. ");
    document.body.appendChild(text);
}


// removeChild
function removeItem() {
    let menu = document.getElementById('menu-item');
    menu.removeChild(menu.firstElementChild);
}


// 7. classList.add()
function addStyle() {
    document.getElementById("menu").classList.add("mystyle");
}


// 7. classList.remove()
function removeStyle() {
    document.getElementById("remove").classList.remove("style");
}


// 7. classList.toggle()
function toggleStyle() {
    document.getElementById("toggle").classList.toggle("my-new-style");
}