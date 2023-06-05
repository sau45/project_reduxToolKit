import Product from "./Component/product/Product";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, createBrowserRouter, createRoutesFromElements,RouterProvider } from "react-router-dom";
import DetailProduct from "./Component/detail/DetailProduct";
import Cart from "./Component/cart/Cart";
import RootLayout from './Component/root/RootLayout'


function App() {
  const router= createBrowserRouter(createRoutesFromElements(
     <Route path='/' Component={RootLayout}>
      <Route path='/product' Component={Product}/>
      <Route path="/detail" Component={DetailProduct}/>
      <Route path='/cart' Component={Cart}/>
     </Route>
  ))

  return (
  <>

  <RouterProvider router={router}/>

  </>
  );
}

export default App;
