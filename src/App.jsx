import { useMemo, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import ProductGrid from "./components/ProductGrid";
import { categories, products } from "./data/products";

const gemNames = [
  { name: "Emerald", image: "/assets/gem-emerald.jpg" },
  { name: "Blue Sapphire", image: "/assets/gem-blue-sapphire.jpg" },
  { name: "Ruby", image: "/assets/gem-ruby.jpg" },
  { name: "Citrine", image: "/assets/gem-citrine.jpg" },
  { name: "Amethyst", image: "/assets/gem-amethyst.jpg" },
  { name: "Rose Quartz", image: "/assets/gem-rose-quartz.jpg" },
  { name: "Aquamarine", image: "/assets/gem-aquamarine.jpg" },
  { name: "Black Onyx", image: "/assets/gem-black-onyx.jpg" },
];

export default function App() {
  const [category, setCategory] = useState("all");
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);

  const filtered = useMemo(() => products.filter(p => {
    const c = category === "all" || p.category === category;
    const q = p.name.toLowerCase().includes(search.toLowerCase());
    return c && q;
  }), [category, search]);

  return (
    <>
      <Header cartCount={cart.length} onSearch={setSearch}/>
      <main>
        <Hero/>
        <Benefits/>

        <section id="shop" className="section">
          <div className="section-heading ornamental">
            <h2>Featured Collections</h2>
            <p>Discover our most loved gemstone jewelry and spiritual pieces.</p>
          </div>

          <div className="filters">
            {categories.map(item => (
              <button key={item.id} className={category === item.id ? "active" : ""} onClick={() => setCategory(item.id)}>
                {item.label}
              </button>
            ))}
          </div>

          <ProductGrid products={filtered} onAdd={p => setCart(prev => [...prev, p])}/>
        </section>

        <section id="categories" className="category-section">
          <article>
            <img src="/assets/mixed-gemstones.jpg" alt="Mixed gemstones"/>
            <h3>Gemstones</h3><a href="#gemstones">Explore →</a>
          </article>
          <article>
            <img src="/assets/sapphire-ring.jpg" alt="Gemstone jewelry"/>
            <h3>Gemstone Jewelry</h3><a href="#shop">Shop Now →</a>
          </article>
          <article>
            <img src="/assets/god-idols.jpg" alt="God idols"/>
            <h3>God Idols</h3><a href="#shop" onClick={() => setCategory("idol")}>View Collection →</a>
          </article>
          <article>
            <img src="/assets/gem-bracelet.jpg" alt="Gemstone accessories"/>
            <h3>Gemstone Accessories</h3><a href="#shop">Discover →</a>
          </article>
        </section>

        <section id="gemstones" className="gem-explorer">
          <div className="section-heading ornamental">
            <h2>Explore Gemstones</h2>
            <p>Discover the natural beauty and vibrant character of authentic gemstones.</p>
          </div>
          <div className="gem-grid">
            {gemNames.map((gem) => (
              <div className="gem-item" key={gem.name}>
                <div className="gem-photo-wrap">
                  <img src={gem.image} alt={gem.name} className="gem-photo" />
                </div>
                <span>{gem.name}</span>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer id="about">
        <div>
          <a className="brand" href="#home"><span className="brand-mark">✦</span>AURELIA GEMS</a>
          <p>Gemstones, jewelry & sacred art.</p>
        </div>
        <small>© 2026 AURELIA GEMS. All rights reserved.</small>
      </footer>
    </>
  );
}
