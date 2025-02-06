const books = [
  {id:1, title: "book 1", price: 9.99, isFree : false},
  {id:2, title: "book 2", price: 0.00, isFree : true},
  {id:3, title: "book 3", price: 19.99, isFree : false},
  {id:4, title: "book 4", price: 0.00, isFree : true},

]

const bookListContainer = document.querySelector("#bookList")
const isFreeCheckbox = document.querySelector("#isFreeCheckbox")

function renderBooks(filterOnlyFree){

  const filteredBooks = filterOnlyFree ? books.filter( book => book.isFree) : books 

  const bookListHTML = filteredBooks.map(book => `
    <li>
    <strong>ID:</strong> ${book.id}<br>
    <strong>Title:</strong> ${book.title}<br>
    <strong>Price: </strong> ${book.price}<br>
    </li>
    <hr>
    `)
  
    bookListContainer.innerHTML = bookListHTML.join('') 
}
renderBooks(false)

  isFreeCheckbox.addEventListener("change",function(){
renderBooks(isFreeCheckbox.checked)
  })