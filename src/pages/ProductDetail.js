import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const params = useParams(); // key value pairs; key is dynamic value of the route url

  // example /product-detail/:productId for http://localhost:3000/product-detail/vvv
  // key=productId, value=vvv
  // {productId: "vvv"}
  console.log(params);

  return (
    <section>
      <h2>Product Detail</h2>
      <p>{params.productId}</p>
    </section>
  );
};

export default ProductDetail;
