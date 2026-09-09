import { Menu, Search, ShoppingBag, X } from "lucide-react";
import { useState } from "react";

export default function Header({ cartCount, onSearch }) {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      <div className="topbar">
        <span>Free Shipping on Orders Above ₹1,999</span>
        <div><a href="#track">Track Order</a><span>|</span><a href="#help">Help</a><span>|</span><a href="#signin">Sign In</a></div>
      </div>
      <header className="site-header">
        <div className="header-inner">
          <button className="icon-button mobile-menu" onClick={() => setOpen(v => !v)} aria-label="Toggle menu">
            {open ? <X size={20}/> : <Menu size={20}/>}
          </button>

          <a className="brand" href="#home"><span className="brand-mark">✦</span>AURELIA GEMS</a>

          <nav className={`nav ${open ? "open" : ""}`}>
            <a href="#home">Home</a>
            <a href="#gemstones">Gemstones</a>
            <a href="#shop">Jewelry</a>
            <a href="#categories">God Idols</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>

          <div className="header-actions">
            <button className="icon-button" onClick={() => setSearchOpen(v => !v)} aria-label="Search"><Search size={20}/></button>
            <button className="icon-button cart-button" aria-label="Cart">
              <ShoppingBag size={20}/>
              {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
            </button>
          </div>
        </div>
        {searchOpen && (
          <div className="search-panel">
            <Search size={18}/>
            <input autoFocus placeholder="Search gemstones and jewelry..." onChange={e => onSearch(e.target.value)} />
          </div>
        )}
      </header>
    </>
  );
}
