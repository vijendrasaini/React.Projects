import { BookCard } from "../BookCard/BookCard";
import { SortAndFilterButtons } from "../SortAndFilterButtons/SortAndFilterButtons";
import styled from "styled-components";
import { useEffect, useState } from "react";

export const Home = () => {
  // get all books when user lands on the page
  // populate them as mentioned below

  const Main = styled.div`
    /* Apply some responsive styling to children */
    display : flex;
    flex-wrap : wrap;
    gap : 20px
  `;

  const [books, setBooks] = useState([])
  useEffect(()=>{
    getData()
  },[])
  async function getData(){
    const a = await fetch('http://localhost:8080/books')
    const b = await a.json()
    setBooks(b)
  }
  function handleSort(base,type){
    const arr = [...books]
    if(base == "price" && type == "asc")
      arr.sort((a,b)=>(a.price - b.price))
    else if(base == "price" && type == "des")
    arr.sort((a,b)=>(-a.price + b.price))
    else if(base == "title" && type == "asc")
    arr.sort((a,b)=>{
      if(a.title > b.title) return 1
      if(a.title < b.title) return -1
      return 0
    })
    else if(base == "title" && type == "des")
    arr.sort((a,b)=>{
      if(a.title > b.title) return -1
      if(a.title < b.title) return +1
      return 0
    })
    setBooks(arr)
  }
  return (
    <div className="homeContainer">
      <h2 style={{ textAlign: "center" }}>Home</h2>
      <SortAndFilterButtons
        handleSort={
          handleSort
          // "give handleSort function to this component, that sorts books"
        }
      />

      <Main className="mainContainer">
        {/* 
            Iterate over books that you get from network
            populate a <BookCard /> component
            pass down books id, imageUrl, title, price and anything else that you want to 
            show in books Card.
        */}
      { books.map((book)=><BookCard key={book.id} id={book.id} imageUrl={book.imageUrl} title={book.title} price={book.price} />)}
      </Main>
    </div>
  );
};
