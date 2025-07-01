import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  return <div>Product Details for Product ID: {id}</div>;
};

export default ProductDetails;
