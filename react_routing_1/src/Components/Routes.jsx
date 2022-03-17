import { Route, Routes } from "react-router-dom";
import { ProductsPage } from './ProductsPage'
import { Navbar } from './Navbar'
import { HomePage } from './HomePage'
import { ProductsDetailsPage } from './ProductsDetailsPage'
import { NotFoundPage } from './NotFoundPage'


export const AllRoutes = () => {
  
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path='/products' element={<ProductsPage/>}/>
        <Route path='/products/:id' element={<ProductsDetailsPage/>}/>
        <Route path='*' element={<NotFoundPage/>}/>
      </Routes>
    </>
  );
};
