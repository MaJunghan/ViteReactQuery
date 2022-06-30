import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
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

  const {
    category,
    title,
    image,
    price,
    description,
    rating: { rate },
  } = data;

  return (
    <div>
      <ul>
        <div className="product-detail">
          <p className="product-detail-cetegory">{category}</p>
          <p className="product-detail-title">{title}</p>
          <img className="product-detail-image" src={image} />
          <p className="product-detail-description">{description}</p>
          <span className="product-detail-price">{price}</span>
          <span className="product-detail-rate">{rate}</span>
        </div>
      </ul>
    </div>
  );
};

export default ProductDetailPage;
