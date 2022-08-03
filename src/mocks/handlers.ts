import GET_PRODUCTS from "../graphql/product";
// src/mocks/handlers.js
import { graphql } from "msw";
import { v4 as uuid } from "uuid";

const mock_products = Array.from({ length: 20 }).map((_, i) => ({
  id: uuid(),
  imageUrl: `https://placeimg.com/640/480/${i + 1}`,
  price: 50000,
  title: `임시상품 타이틀 ${i + 1}`,
  description: `임시상세내용 ${i + 1}`,
  createAt: new Date(1645735501883 + i * 1000 * 60 * 60 * 24).toString(),
}));

export const handlers = [
  graphql.query(GET_PRODUCTS, (req, res, ctx) => {
    return res(
      ctx.data([
        {
          product: mock_products,
        },
      ])
    );
  }),
];
