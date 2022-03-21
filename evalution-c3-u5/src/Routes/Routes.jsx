import { Routes, Route } from "react-router-dom";
import { Home } from "../Components/Home/Home";
import { Section } from "../Components/Section/Section";
import { BookDetailsPage } from "../Components/BookDetailsPage/BookDetailsPage";
import { NotFound } from "../Components/NotFound/NotFound";
import { Navbar } from "../Components/Navbar/Navbar";

export const AllRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* Create other routes here: Section, bookdetailspage and 404 */}
        {/*  */}
        <Route path="/section/:section" element={<Section/>}/>
        <Route path="/bookdetailspage/:id" element={<BookDetailsPage/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </>
  );
};


