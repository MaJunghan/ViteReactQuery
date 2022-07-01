import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import ProductDetail from "../../component/product/detail";
import { fetcher, QueryKeys } from "../../queryClient";
import { Product } from "../../types";

const ProductDetailPage = () => {
  const { id } = useParams();
  const { data } = useQuery<Product>([QueryKeys.PRODUCTS, id], () =>
    fetcher({
      method: "GET",
      path: `/products/${id}`,
    })
  );
  console.log(data);

  if (!data) return null;

  return (
    <ul>
      <ProductDetail item={data} />
    </ul>
  );
};

export default ProductDetailPage;
