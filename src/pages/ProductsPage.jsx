import React from "react";
import { Link } from "react-router-dom";


const DUMMY_PRODUCTS=[
  {id:'p-1',title:'product one'},
  {id:'p-2',title:'product tow'},
  {id:'p-3',title:'product tow'},
]
function ProductsPage() {
  return (
    <main>
      <h1>ProductsPage</h1>

      <div className="mt">
        <ul>
          {DUMMY_PRODUCTS.map((product)=>(
          <li key={product.id}>
            <h3>
              <Link to={product.id}>this is {product.title}</Link>
            </h3>
          </li>

          ))}
        </ul>
      </div>
    </main>
  );
}

export default ProductsPage;
