import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import ProductDetail from "../../component/Product/Detail";
import { grapqhFetcher, QueryKeys } from "../../queryClient";
import { GET_PRODUCT, Product } from "../../graphql/product";

const ProductDetailPage = () => {
  const { id } = useParams();
  const { data } = useQuery<Product>([QueryKeys.PRODUCTS, id], () =>
    grapqhFetcher(GET_PRODUCT, { id })
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
