import React from "react";
import { Link, useParams } from "react-router-dom";

function ProductDetailPage() {

  const params=useParams()
  return (
    <main>
      <h1>Product Detail Page Of {params.productId}</h1>

      <div className="mt">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, quam? Recusandae illum deserunt neque temporibus similique labore a officiis saepe distinctio nemo? Veritatis voluptatibus quidem, nesciunt ipsum molestiae ab autem.</p>
        <p className="mt">
          <Link to={".."} relative="path">back to products</Link>
        </p>
      </div>

    </main>
  );
}

export default ProductDetailPage;
