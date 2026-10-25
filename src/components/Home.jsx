import { Link, NavLink } from "react-router-dom";

import heroBanner from "../assets/image/hero_banner.jpg";
import bannerNewborn from "../assets/image/banner_newborn.jpg";
import bannerToddler from "../assets/image/banner_toddler.jpg";
import bannerKids from "../assets/image/banner_kids.jpg";
import bannerPreteen from "../assets/image/banner_preteen.jpg";
import featureSoft from "../assets/image/feature_soft_fabric.jpg";
import featureDelivery from "../assets/image/feature_delivery.jpg";
import featureSafe from "../assets/image/feature_safe.jpg";
import featureCustomers from "../assets/image/feature_customers.jpg";
import saleBanner from "../assets/image/sale_banner.jpg";
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
      <Link to="/products" className="ls-product-image">
        <img src={product.image} alt={product.name} loading="lazy" />
      </Link>

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

function Home({ products, addToCart, cartCount }) {
  const ages = [
    { title: "Newborns", range: "0-12 Months", image: bannerNewborn, className: "age-peach" },
    { title: "Toddlers", range: "1-3 Years", image: bannerToddler, className: "age-mint" },
    { title: "Little Kids", range: "4-7 Years", image: bannerKids, className: "age-blue" },
    { title: "Big Kids", range: "8-12 Years", image: bannerPreteen, className: "age-lilac" }
  ];

  const features = [
    { label: "Soft, comfy fabrics", image: featureSoft },
    { label: "Fast & reliable delivery", image: featureDelivery },
    { label: "Safe for little ones", image: featureSafe },
    { label: "Happy customers", image: featureCustomers }
  ];

  return (
    <>
      <Navbar cartCount={cartCount} />

      <main className="ls-home">
        <section className="ls-hero container">
          <div className="row align-items-center g-4 g-lg-5">
            <div className="col-lg-5" data-aos="fade-right">
              <span className="ls-eyebrow">
                <i className="bi bi-stars"></i> MADE FOR LITTLE MOMENTS
              </span>

              <h1>
                Small clothes.
                <br />
                <span>Big adventures.</span>
              </h1>

              <p className="ls-hero-description">
                Discover soft fabrics, playful prints, and everyday outfits
                for every stage of growing up.
              </p>

              <div className="ls-hero-actions">
                <Link to="/products" className="ls-btn-primary">
                  Shop the Collection <i className="bi bi-arrow-right"></i>
                </Link>
                <Link to="/about" className="ls-btn-secondary">
                  Our Story
                </Link>
              </div>

              <div className="ls-hero-note">
                <i className="bi bi-heart-fill"></i>
                Comfy fits, happy little hearts.
              </div>
            </div>

            <div className="col-lg-7" data-aos="fade-left">
              <div className="ls-hero-art">
                <img src={heroBanner} alt="Children's clothing collection" />
              </div>
              <div className="ls-hero-badges">
                <div className="ls-hero-badge">
                  <i className="bi bi-heart-fill"></i>
                  <span>Little joys, every day</span>
                </div>
                <div className="ls-hero-badge">
                  <i className="bi bi-stars"></i>
                  <span>Styles for growing up</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="ls-feature-section">
          <div className="container">
            <div className="row g-3 g-lg-4">
              {features.map((feature) => (
                <div className="col-6 col-lg-3" key={feature.label}>
                  <div className="ls-feature-card">
                    <img src={feature.image} alt={feature.label} loading="lazy" />
                    <span>{feature.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="ls-section container">
          <div className="ls-section-heading">
            <div>
              <span className="ls-eyebrow">SHOP BY AGE</span>
              <h2>Every age, its own little style.</h2>
              <p>Find the right outfits for your child's next adventure.</p>
            </div>
            <Link to="/products" className="ls-text-link">
              Explore all <i className="bi bi-arrow-up-right"></i>
            </Link>
          </div>

          <div className="row g-3 g-lg-4">
            {ages.map((age) => (
              <div className="col-6 col-lg-3" key={age.title}>
                <Link
                  to={`/products?age=${encodeURIComponent(age.range)}`}
                  className={`ls-age-card ${age.className}`}
                >
                  <div className="ls-age-image">
                    <img src={age.image} alt={`${age.title} ${age.range}`} loading="lazy" />
                  </div>
                  <div className="ls-age-content">
                    <div>
                      <h5>{age.title}</h5>
                      <span>{age.range}</span>
                    </div>
                    <span className="ls-circle-arrow">
                      <i className="bi bi-arrow-up-right"></i>
                    </span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section className="ls-section ls-featured">
          <div className="container">
            <div className="ls-section-heading">
              <div>
                <span className="ls-eyebrow">LITTLE FAVOURITES</span>
                <h2>Made for play, made for smiles.</h2>
                <p>Comfy everyday picks for their biggest little adventures.</p>
              </div>
              <Link to="/products" className="ls-text-link">
                Shop all styles <i className="bi bi-arrow-up-right"></i>
              </Link>
            </div>

            <div className="row g-3 g-lg-4">
              {products.slice(0, 4).map((product) => (
                <div className="col-6 col-lg-3" key={product.id}>
                  <ProductCard product={product} addToCart={addToCart} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="container ls-promo-section">
          <div className="ls-promo">
            <div className="ls-promo-text">
              <span className="ls-eyebrow">GROWING UP IN STYLE</span>
              <h2>Little outfits for every big milestone.</h2>
              <p>
                From first cuddles to first-day adventures, find their
                next favourite outfit here.
              </p>
              <Link to="/products" className="ls-btn-primary">
                Find Their Style <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
            <div className="ls-promo-image">
              <img src={saleBanner} alt="Special offer on kidswear" loading="lazy" />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Home;