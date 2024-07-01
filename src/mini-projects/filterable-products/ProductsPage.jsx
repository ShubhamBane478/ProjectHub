import React, { useState, useEffect } from 'react';
import './Products.css';
import { fetchProducts } from './api';
import ProductCard from './ProductCard';


function ProductCategoryRow({ category }) {
  return (
    <tr>
      <th colSpan={2}>{category}</th>
    </tr>
  );
}

function ProductRow({ product }) {
  const name = product.stock ? product.title : (
    <span style={{ color: 'red' }}>
      {product.title}
    </span>
  );

  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
}

function ProductTable({ products, filterText, inStockOnly }) {
  const filteredProducts = products.filter((product) => {
    if (product.title.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
      return false;
    }
    if (inStockOnly && product.stock === 0) {
      return false;
    }
    return true;
  });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

function SearchBar({
  filterText,
  inStockOnly,
  onFilterTextChange,
  onInStockOnlyChange
}) {
  return (
    <form className="flex flex-col mb-3 gap-1">
      <input
        className="border-black border"
        type="text"
        placeholder="Search..."
        value={filterText}
        onChange={(e) => {
          onFilterTextChange(e.target.value);
        }}
      />
      <label>
        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={(e) => {
            onInStockOnlyChange(e.target.checked);
          }}
        />
        {' '}
        Only show products in stock
      </label>
    </form>
  );
}

function FilterableProductTable({ products, filterText, inStockOnly, setFilterText, setInStockOnly }) {
  return (
    <>
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={(text) => setFilterText(text)}
        
        onInStockOnlyChange={(checked) => setInStockOnly(checked)}
      />
      <ProductTable
        products={products}
        filterText={filterText}
        inStockOnly={inStockOnly}
      />
    </>
  );
}


export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);

  const PRODUCTS_PER_PAGE = 5;

  useEffect(() => {
    async function loadProducts() {
      const { products, total } = await fetchProducts(PRODUCTS_PER_PAGE, (page - 1) * PRODUCTS_PER_PAGE);
      setProducts(products);
      setTotal(total);
    }

    loadProducts();
  }, [page]);

  const totalPages = Math.ceil(total / PRODUCTS_PER_PAGE);

  return (
    <div className="flex items-center justify-start h-screen flex-col">
      <FilterableProductTable
        products={products}
        filterText={filterText}
        inStockOnly={inStockOnly}
        setFilterText={setFilterText}
        setInStockOnly={setInStockOnly}
      />
      <div className="mt-4">
        <button onClick={() => setPage(page - 1)} disabled={page === 1} className="mr-2 px-4 py-2 bg-blue-500 text-white rounded-md">
          Previous
        </button>
        <span>{page} / {totalPages}</span>
        <button onClick={() => setPage(page + 1)} disabled={page === totalPages} className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md">
          Next
        </button>
      </div>
    </div>
  );
}
