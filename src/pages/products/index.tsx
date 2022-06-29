import { useQuery } from "react-query";
import { fetcher, QueryKeys } from "../../queryClient";
import { Product } from "../../types";

const ProductListPage = () => {
  const { data } = useQuery<Product[]>(QueryKeys.PRODUCTS, () =>
    fetcher({
      method: "GET",
      path: "/products",
    })
  );
  console.log(data);

  const listItem = data?.map((product) => {
    return (
      <li key={product.id} className="product-item">
        <p className="product-item-cetegory">{product.category}</p>
        <p className="product-item-title">{product.title}</p>
        <p className="product-item-description">{product.description}</p>
        <img className="product-item-image" src={product.image} />
        <span className="product-item-price">{product.price}</span>
        <span className="product-item-rate">{product.rating.rate}</span>
      </li>
    );
  });

  return (
    <div>
      <ul className="products">{listItem}</ul>
    </div>
  );
};

export default ProductListPage;
