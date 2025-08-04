import { useEffect, useState } from "react";
import Container from "../components/Container";
import ItemList from "../components/ItemList";
import { getProducts } from "../apis/productAPI";
import Header from "../components/Header";

function ProductListPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getProducts();
      setProducts(res.products);
      console.log(res.products);
    };

    fetchData();
  }, []);
  return (
    <>
      <Header />
      <Container>
        {products.map(item => (
          <ItemList
            key={item.id}
            title={item.title}
            price={item.price}
            thumbnail={item.thumbnail}
            description={item.description}
          />
        ))}
      </Container>
    </>
  );
}

export default ProductListPage;
