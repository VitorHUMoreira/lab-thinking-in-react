import ProductTable from '../ProductTable';
import SearchBar from '../SearchBar';
import productsJSON from '../../data.json';
import { useState } from 'react';

function ProductsPage() {
  const [products, setProducts] = useState(productsJSON);
  const [search, setSearch] = useState('');
  const [stock, setStock] = useState(false);

  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar
        search={search}
        setSearch={setSearch}
        stock={stock}
        setStock={setStock}
      />
      <ProductTable products={products} search={search} stock={stock} />
    </div>
  );
}

export default ProductsPage;
