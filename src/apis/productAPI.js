import axios from "axios";

// API 주소
const productURL = "https://dummyjson.com/products";

// 전체 호출하기
const getProducts = async () => {
  try {
    const res = await axios.get(productURL);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export { getProducts };
