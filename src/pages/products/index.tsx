import { useQuery } from "react-query";
import { grapqhFetcher, QueryKeys } from "../../queryClient";
import { Products } from "../../graphql/product";
import ProductItem from "../../component/Product/ProductItem";
import GET_PRODUCTS from "../../graphql/product";

const ProductListPage = () => {
  const { data } = useQuery<Products>(QueryKeys.PRODUCTS, () =>
    grapqhFetcher(GET_PRODUCTS)
  );

  return (
    <div>
      <ul className="products">
        {data?.products?.map((product: any) => (
          <ProductItem {...product} key={product.id} />
        ))}
      </ul>
    </div>
  );
};

export default ProductListPage;
