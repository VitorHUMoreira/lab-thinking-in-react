import ProductRow from '../ProductRow';

function ProductTable({ products, search }) {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>

        <tbody>
          {products
            .filter((product) => {
              return (
                product.name.toLowerCase().includes(search.toLowerCase()) ||
                product.price.includes(search.toLowerCase())
              );
            })
            .map((product) => {
              return <ProductRow key={product.name} product={product} />;
            })}
        </tbody>
      </table>
    </div>
  );
}

export default ProductTable;
