"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="container nav-inner">
          <div className="logo">L'Alternativa 0.1</div>
          <nav>
            <a href="/">IT</a>
            <a href="#menu">Menu</a>
            <a href="#impasti">Dough</a>
            <a href="#about">Philosophy</a>
            <a href="#contact" className="cta-small">Book</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="hero-overlay" />
        <div className="hero-content container">
          <h1>
            The art of pizza,
            <br />
            elevated to perfection.
          </h1>

          <p>
            Long-fermented doughs, carefully selected ingredients and
            a gastronomic experience without compromise.
          </p>

          <div className="hero-buttons">
            <a href="#menu" className="btn-primary">
              Explore the Menu
            </a>

            <a
              href="https://wa.me/393508841001?text=Hello,%20I%20would%20like%20to%20book%20a%20table"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary btn-whatsapp"
            >
              Book via WhatsApp
            </a>

            <a href="tel:051540977" className="btn-primary">
              Call Now
            </a>
          </div>

          <div className="hero-rating">
            <span className="stars">★★★★★</span>
            <span className="rating-text">4.8/5 on Google</span>
          </div>
        </div>
      </section>

      {/* MENU */}
      <section id="menu" className="section">
        <div className="container">
          <h2 className="section-title">Signature Collection</h2>

          <p className="section-text">
            Time is our secret ingredient.
            Every dough rests slowly to develop
            lightness, structure and character.
          </p>

          <div className="card-grid">
            {[
              {
                name: "Royal Margherita",
                price: "€14",
                ingredients: "San Marzano tomato, mozzarella fior di latte, basil, extra virgin olive oil",
                img: "https://www.ricettealvolo.it/wp-content/uploads/2023/03/pizza-margherita1.jpg",
              },
              {
                name: "Black Truffle",
                price: "€18",
                ingredients: "Mozzarella, black truffle cream, porcini mushrooms, Parmesan cheese",
                img: "https://www.foodblog.it/wp-content/uploads/2019/10/zaid-hussain-sayed-hgplnmepmaa-unsplash.jpg",
              },
              {
                name: "Burrata Supreme",
                price: "€19",
                ingredients: "Tomato, fresh burrata, confit cherry tomatoes, basil",
                img: "https://images.unsplash.com/photo-1594007654729-407eedc4be65",
              },
            ].map((pizza, i) => (
              <div className="card" key={i}>
                <img src={pizza.img} />
                <div className="card-body">
                  <h3>{pizza.name}</h3>
                  <p className="pizza-ingredients">
                    {pizza.ingredients}
                    </p>
                  <span className="price">{pizza.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DOUGH */}
      <section id="impasti" className="craft-section">
        <div className="craft-overlay" />
        <div className="container craft-inner">
          <div className="craft-header">
            <span className="craft-label">The Art of Dough</span>
            <h2>48 hours natural fermentation</h2>

            <p>
              Time is our secret ingredient.
              Every dough rests slowly to develop
              lightness, structure and character.
            </p>
          </div>

          <div className="craft-grid">
            <div className="craft-card">
              <h3>Time</h3>
              <p>Controlled fermentation for 48 hours.</p>
            </div>

            <div className="craft-card">
              <h3>Technique</h3>
              <p>Balanced hydration and artisanal craftsmanship.</p>
            </div>

            <div className="craft-card">
              <h3>Purity</h3>
              <p>Selected flours and natural fermentation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section id="about" className="philosophy">
        <div className="container philosophy-grid">
          <div className="philosophy-image">
            <div className="image-overlay" />
          </div>

          <div className="philosophy-content">
            <span className="section-eyebrow">Our Philosophy</span>

            <h2>Tradition elevated to perfection.</h2>

            <p>
              Every pizza is born from an obsessive search for balance.
              We select exceptional ingredients and treat them with respect.
              No shortcuts. No compromises.
            </p>

            <div className="philosophy-points">
              <div>
                <strong>01</strong>
                <span>Certified DOP ingredients</span>
              </div>

              <div>
                <strong>02</strong>
                <span>Local producers and short supply chain</span>
              </div>

              <div>
                <strong>03</strong>
                <span>An immersive gastronomic experience</span>
              </div>
            </div>

            <a href="#contact" className="btn-primary glow">
              Book Your Experience
            </a>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="reviews-section">
        <div className="container">
          <span className="section-eyebrow">Reviews</span>
          <h2 className="section-title">What our guests say</h2>

          <div className="reviews-grid">
            <div className="review-card">
              <p>"Exceptional pizza! Fresh ingredients and amazing service."</p>
              <div className="review-footer">
                <span className="stars">★★★★★</span>
                <span className="review-author">Marco R.</span>
              </div>
            </div>

            <div className="review-card">
              <p>"The best place in Bologna for artisanal pizza."</p>
              <div className="review-footer">
                <span className="stars">★★★★½</span>
                <span className="review-author">Lucia F.</span>
              </div>
            </div>

            <div className="review-card">
              <p>"Unique experience, fantastic atmosphere and perfect dough."</p>
              <div className="review-footer">
                <span className="stars">★★★★★</span>
                <span className="review-author">Alessandro P.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="map-section">
        <div className="container">
          <span className="section-eyebrow">Location</span>
          <h2 className="map-title">How to find us</h2>

          <div className="map-wrapper">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2846.635189030854!2d11.389199976212323!3d44.48165007107485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477e2b048dd17253%3A0x809cbd6d346b1741!2sL%E2%80%99ALTERNATIVA%200.1!5e0!3m2!1sru!2sit!4v1772636107989!5m2!1sru!2sit"
              width="100%"
              height="400"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>

          <a
            href="https://www.google.com/maps/dir/?api=1&destination=Viale+Abramo+Lincoln+78A+Bologna"
            target="_blank"
            className="btn-primary"
          >
            Open Directions in Google Maps
          </a>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="reservation">
        <div className="reservation-overlay" />
        <div className="container reservation-inner">

          <span className="section-eyebrow light">Reservation</span>
          <h2>Reserve Your Table</h2>

          <p className="reservation-sub">
            Enjoy an exclusive culinary experience in the heart of Bologna.
          </p>

          <div className="reservation-grid">
            <div>
              <h4>Address</h4>
              <p>Viale Abramo Lincoln 78A<br/>Bologna</p>
            </div>

            <div>
              <h4>Contacts</h4>
              <p>051 540977<br/>info.alternativa0.1@gmail.com</p>
            </div>

            <div>
              <h4>Opening Hours</h4>
              <p>Mon - Sun<br/>18:30 – 23:30</p>
            </div>
          </div>

          <a href="tel:051540977" className="btn-primary glow large">
            Call Now
          </a>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer-premium">
        <div className="container footer-grid">

          <div className="footer-brand">
            <h3>L'Alternativa 0.1</h3>
            <p>
              Contemporary artisanal pizza.<br/>
              Italian tradition, modern vision.
            </p>
          </div>

          <div className="footer-nav">
            <h4>Navigation</h4>
            <ul>
              <li><a href="#menu">Menu</a></li>
              <li><a href="#impasti">Dough</a></li>
              <li><a href="#about">Philosophy</a></li>
            </ul>
          </div>

          <div className="footer-social">
            <h4>Follow us</h4>
            <ul>
              <li><a href="#"><span className="social-icon">📷</span> Instagram</a></li>
              <li><a href="#"><span className="social-icon">📘</span> Facebook</a></li>
            </ul>
          </div>

        </div>

        <div className="footer-bottom">
          © {new Date().getFullYear()} L'Alternativa 0.1 — All rights reserved
        </div>
      </footer>
    </>
  );
}