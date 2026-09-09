import { ShoppingBag } from "lucide-react";

export default function ProductCard({ product, onAdd }) {
  return (
    <article className="product-card">
      <div className="product-image-wrap">
        <img src={product.image} alt={product.name} className="product-image"/>
        {product.badge && <span className="badge">{product.badge}</span>}
      </div>

      <div className="product-info">
        <p className="product-kicker">
          {product.category}{product.color ? ` • ${product.color}` : ""}
        </p>
        <h3>{product.name}</h3>

        <div className="product-bottom">
          <strong>₹{product.price.toLocaleString("en-IN")}</strong>
          <button onClick={() => onAdd(product)}>
            <ShoppingBag size={15}/> Add
          </button>
        </div>
      </div>
    </article>
  );
}
