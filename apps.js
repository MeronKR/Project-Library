//Library Functions
const myLibrary = [];
function Book(title, author, pages){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = "UNREAD"
 }

 Book.prototype.info = function(){
    let info = `${this.title} by ${this.author}, ${this.pages}, ${this.read}`
    console.log(info)
 }

 Book.prototype.addToLibrary = function(){
    myLibrary.push(this)
    return myLibrary
 }

 let book = new Book("The Hobbit", "J.R.R Tolkein", 295)
 let book2 = new Book("Pride & Prejudice", "Jane Austen", 490)
 let book3 = new Book("To Kill a Mockingbird", "Harper Lee", 384)
 let book4 = new Book("The Book Thief", "Markus Zusak", 592)
 
let add = document.querySelectorAll(".addBtn")
add.forEach((item)=> {
   item.addEventListener("click", startAdd);
})


//Layout Change Functions
let cta = document.querySelector(".callToAction")

/** @type {HTMLFormElement}*/
let form = document.getElementById("form")

function startAdd(){
   if(myLibrary.length == 0){
      promptForm();
   }else {
      const main = document.querySelector(".main")
}}

function promptForm(){
   deleteChildren(); 
}

function deleteChildren(){
   while (cta.hasChildNodes()) { 
      cta.removeChild(cta.firstChild)
  } 
  form.style.display = "block";
}
