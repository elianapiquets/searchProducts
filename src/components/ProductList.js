import React, { useState } from "react";

export const ProductList = ({ products, columns }) => {
  const items = products.length;

  return (
    <div id="product-list">
      <header>
        <strong>Product List ({items} items)</strong>
      </header>
      <table>
        <thead>
          <tr>
            {columns.id && <th>ID </th>}
            {columns.name && <th>Name </th>}
            {columns.department && <th>Department </th>}
            {columns.price && <th>Price </th>}
            {columns.currency && <th>Currency </th>}
          </tr>
        </thead>
        <tbody>
          {products.map((p) => {
            return (
              <tr key={p.id}>
                {columns.id && <td>{p.id}</td>}
                {columns.name && <td>{p.name}</td>}
                {columns.department && <td>{p.department}</td>}
                {columns.currency && <td>{p.currency}</td>}
                {columns.price && <td>{p.price}</td>}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
