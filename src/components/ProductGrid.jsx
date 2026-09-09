import ProductCard from "./ProductCard";

export default function ProductGrid({ products, onAdd }) {
  if (!products.length) {
    return <div className="empty-state">No products match your search.</div>;
  }

  return (
    <div className="product-grid">
      {products.map(product => (
        <ProductCard key={product.id} product={product} onAdd={onAdd} />
      ))}
    </div>
  );
}
