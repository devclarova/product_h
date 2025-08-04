import { useEffect } from "react";
import { getProducts } from "./apis/productAPI";
import ProductListPage from "./pages/ProductListPage";

function App() {
  // js 자리
  // 할일 목록 비동기 통신 함수

  useEffect(() => {
    getProducts();
  }, []);
  // jsx 자리
  return (
    <>
      <ProductListPage />
    </>
  );
}

export default App;
