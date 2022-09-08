import ProductTable from '../ProductTable';
import SearchBar from '../SearchBar';
import productsJSON from '../../data.json';
import { useState } from 'react';

function ProductsPage() {
  const [products, setProducts] = useState(productsJSON);
  const [search, setSearch] = useState('');
  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar search={search} setSearch={setSearch} />
      <ProductTable products={products} search={search} />
    </div>
  );
}

export default ProductsPage;
