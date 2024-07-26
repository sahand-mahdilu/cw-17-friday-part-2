import axios from "axios";
import ProductsRow from "./ProductsRow";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";

export default function ProductsTable() {
  const { isLoading, data, isError, error } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      try {
        const res = await axios.get(" http://localhost:3000/products");

        return res.data;
      } catch (e) {
       
      }
    },
  });

  if (isLoading) {
    return <div>loading</div>;
    
  } else if (isError) {
    
     toast.error(`${error.message}`)
     return <></>
  } else {
    return (
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>price</th>
          </tr>
        </thead>
        <tbody>
          <ProductsRow data={data} />
        </tbody>
      </table>
    );
  }
}
