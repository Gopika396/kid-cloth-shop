import { useMemo, useState } from "react";
import { Link, NavLink, useSearchParams } from "react-router-dom";

import iconInstagram from "../assets/image/icon_instagram.png";
import iconFacebook from "../assets/image/icon_facebook.png";
import iconPinterest from "../assets/image/icon_pinterest.png";
import iconYoutube from "../assets/image/icon_youtube.png";
import iconVisa from "../assets/image/icon_visa.png";
import iconMastercard from "../assets/image/icon_mastercard.png";
import iconPaypal from "../assets/image/icon_paypal.png";

function Logo({ size = 40 }) {
  return (
    <svg
      className="ls-logo-svg"
      width={size}
      height={size}
      viewBox="0 0 40 40"
      role="img"
      aria-label="LittleSteps logo"
    >
      <rect width="40" height="40" rx="12" fill="#367d9a" />
      <g fill="#ffffff">
        <ellipse cx="14" cy="26" rx="4.2" ry="5.6" transform="rotate(-12 14 26)" />
        <circle cx="10" cy="17.5" r="1.7" />
        <circle cx="13.8" cy="16" r="1.7" />
        <circle cx="17.6" cy="17" r="1.7" />
        <ellipse cx="27" cy="18" rx="4.2" ry="5.6" transform="rotate(12 27 18)" />
        <circle cx="23.2" cy="9.5" r="1.7" />
        <circle cx="27" cy="8" r="1.7" />
        <circle cx="30.8" cy="9" r="1.7" />
      </g>
    </svg>
  );
}

function Navbar({ cartCount }) {
  const navClass = ({ isActive }) => "nav-link" + (isActive ? " active" : "");

  return (
    <nav className="navbar navbar-expand-lg ls-navbar">
      <div className="container">
        <Link className="navbar-brand ls-brand" to="/">
          <Logo />
          <span>
            LittleSteps<span className="brand-dot">.</span>
          </span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#lsNav"
          aria-controls="lsNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="lsNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item"><NavLink end className={navClass} to="/">Home</NavLink></li>
            <li className="nav-item"><NavLink className={navClass} to="/products">Shop</NavLink></li>
            <li className="nav-item"><NavLink className={navClass} to="/about">Our Story</NavLink></li>
            <li className="nav-item"><NavLink className={navClass} to="/contact">Contact</NavLink></li>
          </ul>

          <Link to="/cart" className="ls-cart-link">
            <i className="bi bi-bag-heart"></i>
            <span>Bag</span>
            <span className="ls-cart-count">{cartCount}</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="ls-footer">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-4">
            <Link className="footer-brand" to="/">
              <Logo size={34} /> LittleSteps.
            </Link>
            <p>
              Little clothes for big adventures. Comfortable styles made for
              every little milestone.
            </p>
            <div className="ls-pay-icons">
              <img src={iconVisa} alt="Visa" />
              <img src={iconMastercard} alt="Mastercard" />
              <img src={iconPaypal} alt="PayPal" />
            </div>
          </div>

          <div className="col-6 col-lg-2">
            <h6>Explore</h6>
            <Link to="/">Home</Link>
            <Link to="/products">Shop All</Link>
            <Link to="/about">Our Story</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <div className="col-6 col-lg-3">
            <h6>Customer Care</h6>
            <Link to="/contact">Help &amp; Support</Link>
            <Link to="/products">Size Guide</Link>
            <Link to="/cart">Shopping Bag</Link>
            <a href="mailto:hello@littlesteps.example">Email Us</a>
          </div>

          <div className="col-lg-3">
            <h6>Stay in the loop</h6>
            <p>New collections, happy little styles, and more.</p>
            <div className="ls-socials">
              <a href="https://www.instagram.com/" aria-label="Instagram"><img src={iconInstagram} alt="" /></a>
              <a href="https://www.facebook.com/" aria-label="Facebook"><img src={iconFacebook} alt="" /></a>
              <a href="https://www.pinterest.com/" aria-label="Pinterest"><img src={iconPinterest} alt="" /></a>
              <a href="https://www.youtube.com/" aria-label="YouTube"><img src={iconYoutube} alt="" /></a>
            </div>
          </div>
        </div>

        <div className="ls-footer-bottom">
          <span>© 2026 LittleSteps Kidswear. All rights reserved.</span>
          <span>Made with love for little ones.</span>
        </div>
      </div>
    </footer>
  );
}

function ProductCard({ product, addToCart }) {
  return (
    <div className="ls-product-card" data-aos="fade-up">
      <div className="ls-product-image">
        <img src={product.image} alt={product.name} loading="lazy" />
      </div>

      <div className="ls-product-info">
        <div className="ls-product-meta">
          <span className="ls-product-age">{product.age}</span>
          <span className="ls-product-tag">{product.tag}</span>
        </div>
        <h6>{product.name}</h6>
        <div className="ls-product-price">
          <strong>₹{product.price.toLocaleString("en-IN")}</strong>
          <del>₹{product.oldPrice.toLocaleString("en-IN")}</del>
        </div>
        <button className="ls-add-btn" onClick={() => addToCart(product)}>
          <i className="bi bi-bag-plus"></i> Add to Bag
        </button>
      </div>
    </div>
  );
}

function Products({ products, addToCart, cartCount }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("featured");
  const [category, setCategory] = useState("All");

  const selectedAge = searchParams.get("age") || "All Ages";

  const ages = ["All Ages", "0-12 Months", "1-3 Years", "4-7 Years", "8-12 Years"];
  const categories = ["All", ...new Set(products.map((p) => p.category))];

  const filteredProducts = useMemo(() => {
    const result = products.filter((product) => {
      const matchesAge = selectedAge === "All Ages" || product.age === selectedAge;
      const matchesCategory = category === "All" || product.category === category;
      const matchesSearch = `${product.name} ${product.category} ${product.age}`
        .toLowerCase()
        .includes(search.toLowerCase());

      return matchesAge && matchesCategory && matchesSearch;
    });

    if (sort === "low") result.sort((a, b) => a.price - b.price);
    if (sort === "high") result.sort((a, b) => b.price - a.price);
    if (sort === "name") result.sort((a, b) => a.name.localeCompare(b.name));

    return result;
  }, [products, selectedAge, category, search, sort]);

  const changeAge = (age) => {
    if (age === "All Ages") {
      setSearchParams({});
    } else {
      setSearchParams({ age });
    }
  };

  const resetAll = () => {
    setSearch("");
    setCategory("All");
    setSort("featured");
    setSearchParams({});
  };

  return (
    <>
      <Navbar cartCount={cartCount} />

      <main className="ls-page">
        <section className="ls-page-banner products-banner">
          <div className="container text-center">
            <span className="ls-eyebrow">THE LITTLEST WARDROBE</span>
            <h1>Shop LittleSteps.</h1>
            <p>Thoughtful styles for every stage of growing up.</p>
            <div className="ls-breadcrumb">
              <Link to="/">Home</Link> <i className="bi bi-chevron-right"></i> Shop
            </div>
          </div>
        </section>

        <section className="container ls-products-layout">
          <aside className="ls-filter-panel">
            <h5><i className="bi bi-sliders"></i> Filter your finds</h5>

            <div className="ls-filter-group">
              <h6>Shop by age</h6>
              {ages.map((age) => (
                <button
                  key={age}
                  className={`ls-filter-option ${selectedAge === age ? "active" : ""}`}
                  onClick={() => changeAge(age)}
                >
                  <span>{age}</span>
                  {selectedAge === age && <i className="bi bi-check-circle-fill"></i>}
                </button>
              ))}
            </div>

            <div className="ls-filter-group">
              <h6>Category</h6>
              {categories.map((item) => (
                <button
                  key={item}
                  className={`ls-filter-option ${category === item ? "active" : ""}`}
                  onClick={() => setCategory(item)}
                >
                  <span>{item}</span>
                  {category === item && <i className="bi bi-check-circle-fill"></i>}
                </button>
              ))}
            </div>

            <button className="ls-reset-btn" onClick={resetAll}>
              <i className="bi bi-arrow-counterclockwise"></i> Reset filters
            </button>
          </aside>

          <div className="ls-products-main">
            <div className="ls-shop-toolbar">
              <div>
                <span className="ls-eyebrow">FIND THEIR FAVOURITE</span>
                <h2>{selectedAge === "All Ages" ? "All Kidswear" : selectedAge}</h2>
                <p>{filteredProducts.length} styles to explore</p>
              </div>

              <div className="ls-shop-controls">
                <div className="ls-search-box">
                  <i className="bi bi-search"></i>
                  <input
                    type="search"
                    placeholder="Search styles..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    aria-label="Search products"
                  />
                </div>

                <select
                  className="form-select ls-sort-select"
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  aria-label="Sort products"
                >
                  <option value="featured">Featured</option>
                  <option value="low">Price: Low to High</option>
                  <option value="high">Price: High to Low</option>
                  <option value="name">Name: A to Z</option>
                </select>
              </div>
            </div>

            {filteredProducts.length ? (
              <div className="row g-3 g-lg-4">
                {filteredProducts.map((product) => (
                  <div className="col-6 col-xl-4" key={product.id}>
                    <ProductCard product={product} addToCart={addToCart} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="ls-empty-state">
                <i className="bi bi-emoji-frown"></i>
                <h4>No little finds yet!</h4>
                <p>Try another search or change your filters.</p>
                <button className="ls-btn-primary" onClick={resetAll}>
                  Show All Products
                </button>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Products;