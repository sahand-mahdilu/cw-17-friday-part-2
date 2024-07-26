export default function ProductsRow({ data }) {
  console.log(data);
  return (
    <>
      {data?.map((d) => (
        <tr key={d.price}>
          <td>{d.name}</td>
          <td>{d.price}</td>
        </tr>
      ))}
    </>
  );
}
