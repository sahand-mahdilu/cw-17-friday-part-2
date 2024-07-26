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
        console.log(e);
      }
    },
  });

  if (isLoading) {
    return <div>loading</div>;
  } else if (isError) {
    return toast.error(`${error.message}`)
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
