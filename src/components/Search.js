import React, { useState, useEffect } from "react";

import "../styles/Search.css";
import { ToggleColumns } from "./ToggleColumns";
import { ProductList } from "./ProductList";
import { FilterForm } from "./FilterForm";
import products from "../assets/products.json";

export const Search = (props) => {
  const [price, setPrice] = useState({ priceFrom: "", priceTo: "" });

  const [columns, setColumns] = useState({
    id: true,
    name: true,
    department: true,
    price: true,
    currency: true,
  });

  const [filteredProducts, setFilteredProducts] = useState(products);

  const onPriceInputChange = (name, value) => {
    setPrice({
      ...price,
      [name]: value,
    });
  };

  const onCheckboxClick = (name, checked) => {
    setColumns({
      ...columns,
      [name]: checked,
    });
  };

  useEffect(() => {
    const filterProducts = () => {
      return products.filter((p) => {
        const from = price.priceFrom === "" ? 0 : price.priceFrom;
        const to = price.priceTo === "" ? 10000000 : price.priceTo;
        return p.price >= from && p.price <= to;
      });
    };

    setFilteredProducts(filterProducts());
  }, [price.priceFrom, price.priceTo]);

  return (
    <div className="Products">
      <FilterForm
        priceFrom={price.priceFrom}
        priceTo={price.priceTo}
        onPriceInputChange={onPriceInputChange}
      />

      <ToggleColumns onCheckboxClick={onCheckboxClick} columns={columns} />

      <ProductList products={filteredProducts} columns={columns} />
    </div>
  );
};

export default Search;

/*


Pass the prideFRom and the priceto attributes to the  component as props.
Implement the change input and submit the form handlers to the  component.
Change the filtered products that are displayed in the , so that it only contains the products with a price within the specified range.*/
