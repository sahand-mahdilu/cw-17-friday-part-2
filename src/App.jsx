import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";
import ProductsTable from "./components/ProductsTable";
import NewProduct from "./components/NewProduct";

function App() {
  

  return (
    <>
      <ProductsTable />
      <NewProduct/>
      <ToastContainer />
    </>
  );
}

export default App;
