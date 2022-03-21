import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
// import axios from "axios";
import { BookCard } from "../BookCard/BookCard";
import { SortAndFilterButtons } from "../SortAndFilterButtons/SortAndFilterButtons";
import styled from "styled-components";

export const Section = () => {
  // you will receive section name from URL here.
  // Get books for only this section and show
  //   Everything else is same as Home page

  const Main = styled.div`
    /* Same as Homepage */
  `;

  const { section }  = useParams()

  const [books, setBooks] = useState([])
  useEffect(()=>{
    getData()
  },[])
  async function getData(){
    console.log(section)
    const a = await fetch('http://localhost:8080/books')
    const b = await a.json()
    const sbooks = b.filter((el)=>{
      return (el.section == section)
    })
    
    setBooks(sbooks)
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
    <>
      <h2 style={{ textAlign: "center" }}>
        {
          //   Show section name here
          section
        }
      </h2>
      <SortAndFilterButtons handleSort={
        // "give sorting function to component"
        handleSort
        } />

      <Main className="sectionContainer">
        {/* SHow same BookCard component here, just like homepage but with books only belong to this Section */}
        { books.map(book=> <BookCard key={book.id} id={book.id} imageUrl={book.imageUrl} title={book.title} price={book.price} />)}
      </Main>
    </>
  );
};
