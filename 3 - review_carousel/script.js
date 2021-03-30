var naam = document.querySelector('.name')
var img = document.querySelector('.main-review-img')
var review = document.querySelector('.review')
 
var items = [
    {
        name: "anirudh sharma",
        review: "lorem ipisicing elit. Sapiente cum iste deleniti quos, nisi blanditiis sit corporis fugit    luta eius corrupti ut ea. Labore voluptatum impedit",
        img: "https://www.w3schools.com/images/w3lynx_200.png"
    },
    {
        name: "ganesh yadav",
        review: "	Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente cum iste deleniti quos, nisi   sit corporis fugit dolores soluta eius ",
        img: "https://www.w3schools.com/images/colorpicker.gif"
    },
    {
        name: "ramesh sharma",
        review: "tetur adipisicing elit. Sapiente cum iste deleniti quos, nisi blanditiis sit corporis fugit dolores soluta eius onsequatur laudantium.",
        img: "https://www.w3schools.com/js/pic_bulboff.gif"
    },
    {
        name: "riya sharma",
        review: "amet consectetur adipisicing elit. Sapiente cum iste deleniti quos, nisi blanditiis sit corporis fugit dolores",
        img: "https://www.w3schools.com/js/pic_bulbon.gif"
    }
]
var nextbtn = document.querySelector('.next')
var prevbtn = document.querySelector('.prev')

let currentitem = 0;
function showperson(person){
img.src = person.img;
review.textContent = person.review;
naam.textContent = person.name;
}


nextbtn.addEventListener('click', () => {
    if(currentitem + 1    <items.length){
        currentitem++;
        showperson(items[currentitem])
     }else{
        currentitem = 0;
        showperson(items[currentitem])
     }
 })
prevbtn.addEventListener('click', () => {
    if(currentitem>0){
        currentitem--;
        showperson(items[currentitem])
     }else{
        currentitem = items.length-1;
        showperson(items[currentitem])
     }
 })
 