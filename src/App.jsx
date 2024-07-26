import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";
import ProductsTable from "./components/ProductsTable";

function App() {
  const notify = () => toast("Wow so easy!");

  return (
    <>
      <ProductsTable />
      <ToastContainer />
    </>
  );
}

export default App;
