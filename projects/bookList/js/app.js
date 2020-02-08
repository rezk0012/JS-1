//Book Class : Represent Book
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.date = new Date();
  }
}

//UI Class: Handle UI Tasks

class UI {
  static displayBooks() {
    const books = [
      {
        title: "Book One",
        author: "John Doe",
        isbn: "34668564",
        date: new Date("4-15-2019")
      },
      {
        title: "Book two",
        author: "Steve Martin",
        isbn: "3464884",
        date: new Date("5-18-2019")
      }
    ];

    books.forEach(book => UI.addBook(book));
  }

  static addBook(book) {
    const list = document.querySelector("#book-list");
    const row = document.createElement("tr");
    const header = document.querySelector("h5");

    if (header.innerText === "EDIT BOOK") {
      const box = document.getElementById("add-book");
      const btn = document.querySelector("input[type='submit']");
      header.classList.add("bg-primary");
      header.innerText = "ADD BOOK";
      header.classList.remove("bg-success");
      box.classList.remove("border-success");
      btn.value = "ADD";
      btn.classList.add("btn-primary");
      btn.classList.remove("btn-success");
    }
   
    row.innerHTML = `
   <td>${book.title}</td>
   <td>${book.author}</td>
   <td>${book.isbn}</td>
   <td>${book.date.toLocaleDateString()}</td>
   <td>
     <a href="#" class=" mx-1 btn btn-success btn-sm edit">
     <i class="fa fa-pencil"></i>
     </a>
     <a href="#" class="mx-1 btn btn-danger btn-sm delete">
      <i class="fa fa-trash"></i>
     </a>
   </td>
   `;
    list.appendChild(row);
  }

  static showAlert(msg, className) {
    const container = document.querySelector("div");
    const form = document.querySelector("#add-book");
    const div = document.createElement("div");
    div.className = `alert alert-${className} text-center`;
    div.appendChild(document.createTextNode(msg));
    container.insertBefore(div, form);
    setTimeout(() => document.querySelector(".alert").remove(), 2000);
  }

  static clearFields() {
    document.querySelector("#title").value = "";
    document.querySelector("#author").value = "";
    document.querySelector("#isbn").value = "";
  }

  static deleteBook(el) {
    if (el.classList.contains("delete")) {
      el.parentElement.parentElement.remove();
    }
    if (el.classList.contains("fa-trash")) {
      el.parentElement.parentElement.parentElement.remove();
    }
  }

  static editBook(el) {
    let row;
    if (el.classList.contains("edit")) {
      row = el.parentElement.parentElement.children;
      el.parentElement.parentElement.remove();
    }

    if (el.classList.contains("fa-pencil")) {
      row = el.parentElement.parentElement.parentElement.children;
      el.parentElement.parentElement.parentElement.remove();
    }
    if (row) {
      //Grap Data to form
      document.querySelector("#title").value = row[0].innerText;
      document.querySelector("#author").value = row[1].innerText;
      document.querySelector("#isbn").value = row[2].innerText;

      //Change UI
      const btn = document.querySelector("input[type='submit']");
      const header = document.querySelector("h5");
      const box = document.getElementById("add-book");

      header.classList.remove("bg-primary");
      header.innerText = "EDIT BOOK";
      header.classList.add("bg-success");
      box.classList.add("border-success");

      btn.value = "EDIT";
      btn.classList.remove("btn-primary");
      btn.classList.add("btn-success");
    }
  }
}

//Store Class: Handle storage

//Event: Display Books
document.addEventListener("DOMContentLoaded", UI.displayBooks);

//Event: Add a book
document.querySelector("#book-form").addEventListener("submit", e => {
  e.preventDefault();
  //Get Form Values
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const isbn = document.querySelector("#isbn").value;
  //validate
  if (title === "" || author === "" || isbn === "") {
    UI.showAlert("Please fill all the fields", "danger");
  } else {
    //Instatiate book

    const book = new Book(title, author, isbn);
    console.log(book);
    //Add Book to UI
    UI.addBook(book);
    UI.showAlert("Book Successfully Added", "success");
    //clear fields
    UI.clearFields();
  }
});

//Event: Remove a book
document.querySelector("#book-list").addEventListener("click", e => {
  // console.log(e.target);
  UI.deleteBook(e.target);
});

//Event: Edit a book
document.querySelector("#book-list").addEventListener("click", e => {
  // console.log(e.target);
  UI.editBook(e.target);
});
