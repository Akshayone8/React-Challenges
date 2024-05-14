import { useEffect, useState } from "react";
import { FAKE_STORE_API } from "./constants";

const SortUser = () => {
  const [productData, setProductData] = useState([]);
  const [filterProduct, setFilterProduct] = useState("");

  useEffect(() => {
    fetchProductData();
  }, [filterProduct]);

  const fetchProductData = async () => {
    const getProductList = await fetch(FAKE_STORE_API + filterProduct);
    const data = await getProductList.json();
    console.log(data);
    setProductData(data);
  };

  return (
    <div>
      <select onChange={(e) => setFilterProduct(e.target.value)}>
        <option value={"asc"}>Ascending</option>
        <option value={"desc"}>Descendig</option>
      </select>
      <ul>
        {productData.map((product) => (
          <li key={product.id}>
            {product.title}
            <b
              style={{
                display: "inline-block",
                margin: "10px",
                border: "1px solid black",
                padding: "10px",
              }}
            >
              $ {product.price}
            </b>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SortUser;
