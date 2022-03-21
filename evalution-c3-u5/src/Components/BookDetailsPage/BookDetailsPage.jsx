import { useEffect, useState } from "react";
import { useParams } from "react-router";

export const BookDetailsPage = () => {
  // Get book details based on ID whenever user lands on the page
  // ID will come from route

  const {id } = useParams()
  const [book, setBook] = useState("")
  useEffect(()=>{
    getData()
  },[])
  async function getData(){
    console.log(id)
    const a = await fetch(`http://localhost:8080/books/${id}`)
    const b = await a.json()
    console.log(b)
    setBook(b)
  }
  return (
    <>
      <div className="bookContainer">
        <h2 className="title">{book.title}</h2>
        <img className="image" src={book.imageUrl} alt="#" />
        <div className="author">{book.author}</div>
        <div className="description">{book.description}</div>
        <div className="price">{book.price}</div>
        <div className="section">{book.section}</div>
        <div className="isbnNumber">{book.isbnNumber}</div>
        <ul className="reviews">
          {/* Reviews will be an array, iterate over them and create a new <li> for every review */}
        { book.reviews?.map(review => <li>{review}</li>)}
        </ul>
      </div>
    </>
  );
};


// author: "Maximo Hullins"
// description: "Huels, Wiegand and Rolfson"
// id: 1
// imageUrl: "https://robohash.org/aliquidautsed.png?size=50x50&set=set1"
// isbnNumber: "602185185-4"
// price: 2003
// reviews: "Alcohol hand sanitizer"
// section: "mystery"
// title: "Blackbird, red-winged"