import React, { useEffect, useState } from "react";

export default function BookList() {
  //create state to store our book list
  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function loadBooks() {
      //fetch the book list
      const request = await fetch("http://192.168.204.186:4000/tareas", {
        //use the authorization
        headers: {
          Authorization: "Bearer " + localStorage.getItem("@token"),
        },
      });

      const allBooks = await request.json();
      console.log(localStorage.getItem("@token"));
      //set the book list on state
      setBooks(allBooks.tareas);
    }
    //invoke the function
    loadBooks();
  }, []);

  return (
    <div className="container">
      <h1>TaskList</h1>
      {/* map the book list to show book name and image */}
      {books.map((book) => (
        <div key={book.id} className="booklist">
          <h3>{book.name}</h3>
        </div>
      ))}
    </div>
  );
}
