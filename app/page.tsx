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
useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.2 }
  );

  const elements = document.querySelectorAll(".fade-in");
  elements.forEach((el) => observer.observe(el));

  return () => observer.disconnect();
}, []);

  return (
    <>
      {/* NAVBAR */}
      <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="container nav-inner">
          <div className="logo">L'Alternativa 0.1</div>
          <nav>
            <a href="/en">EN</a>
            <a href="#menu">Menù</a>
            <a href="#impasti">Impasti</a>
            <a href="#about">Filosofia</a>
            <a href="#contact" className="cta-small">Prenota</a>
          </nav>
        </div>
      </header>

     {/* HERO */}
<section className="hero">
  <div className="hero-overlay" />
  <div className="hero-content container">
    <h1>
      L’arte della pizza,
      <br />
      elevata al sublime.
    </h1>
    <p>
      Impasti a lunga lievitazione, ingredienti selezionati e
      un’esperienza gastronomica senza compromessi.
    </p>

    <div className="hero-buttons">
      <a href="#menu" className="btn-primary">
        Esplora il Menù
      </a>

      <a
        href="https://wa.me/393508841001?text=Buongiorno,%20vorrei%20prenotare%20un%20tavolo"
        target="_blank"
        rel="noopener noreferrer"
        className="btn-primary btn-whatsapp"
      >
        Prenota What's App
      </a>

      <a href="#menu" className="btn-primary">
        Chiama Ora
      </a>

    </div>

    {/* Добавляем рейтинг */}
    <div className="hero-rating">
      <span className="stars">★★★★★</span>
      <span className="rating-text">4,8/5 su Google</span>
    </div>
  </div>
</section>

      {/* MENU PREMIUM */}
      <section id="menu" className="section fade-in">
        <div className="container">
          <h2 className="section-title">Raccolta Firme</h2>
      <p className="section-text">
        Il tempo è il nostro ingrediente segreto.
        Ogni impasto riposa lentamente per sviluppare
        leggerezza, struttura e carattere.
      </p>
          <div className="card-grid">
            {[
                {
                  name: "Margherita Reale",
                  price: "€14",
                  ingredients: "Pomodoro San Marzano, mozzarella fior di latte, basilico, olio EVO",
                  img: "https://www.ricettealvolo.it/wp-content/uploads/2023/03/pizza-margherita1.jpg",
                },
                {
                  name: "Tartufo Nero",
                  price: "€18",
                  ingredients: "Mozzarella, crema di tartufo nero, funghi porcini, parmigiano",
                  img: "https://www.foodblog.it/wp-content/uploads/2019/10/zaid-hussain-sayed-hgplnmepmaa-unsplash.jpg",
                },
                {
                  name: "Burrata Suprema",
                  price: "€19",
                  ingredients: "Pomodoro, burrata fresca, pomodorini confit, basilico",
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

    <section id="impasti" className="craft-section fade-in">
  <div className="craft-overlay" />
  <div className="container craft-inner">
    <div className="craft-header">
      <span className="craft-label">Arte Bianca</span>
      <h2>48h di lievitazione naturale</h2>
      <p>
        Il tempo è il nostro ingrediente segreto.
        Ogni impasto riposa lentamente per sviluppare
        leggerezza, struttura e carattere.
      </p>
    </div>

    <div className="craft-grid">
      <div className="craft-card">
        <h3>Tempo</h3>
        <p>Lievitazione controllata per 48 ore.</p>
      </div>

      <div className="craft-card">
        <h3>Tecnica</h3>
        <p>Idratazione calibrata e lavorazione artigianale.</p>
      </div>

      <div className="craft-card">
        <h3>Purezza</h3>
        <p>Farine selezionate e fermentazione naturale.</p>
      </div>
    </div>
  </div>
</section>

      {/* ABOUT */}
      <section id="about" className="philosophy fade-in">
  <div className="container philosophy-grid">
    
    <div className="philosophy-image">
      <div className="image-overlay" />
    </div>

    <div className="philosophy-content">
      <span className="section-eyebrow">La Filosofia</span>
      <h2>Tradizione, elevata alla perfezione.</h2>

      <p>
        Ogni pizza nasce da una ricerca ossessiva dell’equilibrio.
        Selezioniamo materie prime eccellenti e le trattiamo con rispetto.
        Nessuna scorciatoia. Nessun compromesso.
      </p>

      <div className="philosophy-points">
        <div>
          <strong>01</strong>
          <span>Ingredienti certificati DOP</span>
        </div>
        <div>
          <strong>02</strong>
          <span>Filiera corta e produttori locali</span>
        </div>
        <div>
          <strong>03</strong>
          <span>Esperienza gastronomica immersiva</span>
        </div>
      </div>

      <a href="#contact" className="btn-primary glow">
        Prenota la tua esperienza
      </a>
    </div>

  </div>
</section>
      
       {/* REVIEW */}
      <section className="reviews-section">
  <div className="container">
    <span className="section-eyebrow">Recensioni</span>
    <h2 className="section-title">Cosa dicono i nostri clienti</h2>

    <div className="reviews-grid">
      <div className="review-card">
        <p>"Pizza eccezionale! Ingredienti freschissimi e servizio top."</p>
        <div className="review-footer">
          <span className="stars">★★★★★</span>
          <span className="review-author">Marco R.</span>
        </div>
      </div>

      <div className="review-card">
        <p>"Il miglior ristorante di Bologna per la pizza artigianale."</p>
        <div className="review-footer">
          <span className="stars">★★★★½</span>
          <span className="review-author">Lucia F.</span>
        </div>
      </div>

      <div className="review-card">
        <p>"Esperienza unica, atmosfera fantastica e impasti perfetti."</p>
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
    <span className="section-eyebrow">Dove siamo</span>
    <h2 className="map-title">Come raggiungerci</h2>

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
      Apri Indicazioni su Google Maps
    </a>
  </div>
</section>

      {/* CONTACT */}
      <section id="contact" className="reservation fade-in">
  <div className="reservation-overlay" />
  <div className="container reservation-inner">

    <span className="section-eyebrow light">Prenotazione</span>
    <h2>Riserva il tuo tavolo</h2>

    <p className="reservation-sub">
      Vivi un’esperienza culinaria esclusiva nel cuore di Bologna.
    </p>

    <div className="reservation-grid">
      <div>
        <h4>Indirizzo</h4>
        <p>Viale Abramo Lincoln 78A<br/>Bologna</p>
      </div>

      <div>
        <h4>Contatti</h4>
        <p>051 540977<br/>info.alternativa0.1@gmail.com</p>
      </div>

      <div>
        <h4>Orari</h4>
        <p>Lun - Dom<br/>18:30 – 23:30</p>
      </div>
    </div>

    <a href="tel:051540977" className="btn-primary glow large">
      Chiama Ora
    </a>

  </div>
</section>

      <footer className="footer-premium">
  <div className="container footer-grid">

    {/* Логотип и описание */}
    <div className="footer-brand">
      <h3>L'Alternativa 0.1</h3>
      <p>
        Pizza artigianale contemporanea.<br/>
        Tradizione italiana, visione moderna.
      </p>
    </div>

    {/* Навигация */}
    <div className="footer-nav">
      <h4>Navigazione</h4>
      <ul>
        <li><a href="#menu">Menù</a></li>
        <li><a href="#impasti">Impasti</a></li>
        <li><a href="#about">Filosofia</a></li>
      </ul>
    </div>

    {/* Соцсети */}
    <div className="footer-social">
      <h4>Seguici</h4>
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