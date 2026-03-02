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
            <a href="#contact" className="btn-ghost">
              Prenota Tavolo
            </a>
          </div>
        </div>
      </section>

      {/* MENU PREMIUM */}
      <section id="menu" className="section">
        <div className="container">
          <h2 className="section-title">Signature Collection</h2>

          <div className="card-grid">
            {[
              {
                name: "Margherita Reale",
                price: "€14",
                img: "https://images.unsplash.com/photo-1601924638867-3ec6c0e6f6b6",
              },
              {
                name: "Tartufo Nero",
                price: "€18",
                img: "https://images.unsplash.com/photo-1548365328-9f547fb0953a",
              },
              {
                name: "Burrata Suprema",
                price: "€19",
                img: "https://images.unsplash.com/photo-1594007654729-407eedc4be65",
              },
            ].map((pizza, i) => (
              <div className="card" key={i}>
                <img src={pizza.img} />
                <div className="card-body">
                  <h3>{pizza.name}</h3>
                  <span className="price">{pizza.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    <section id="impasti" className="craft-section">
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
      <section id="about" className="philosophy">
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

      {/* CONTACT */}
      <section id="contact" className="reservation">
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

    <div>
      <h3>L'Alternativa 0.1</h3>
      <p>
        Pizza artigianale contemporanea.
        Tradizione italiana, visione moderna.
      </p>
    </div>

    <div>
      <h4>Navigazione</h4>
      <ul>
        <li><a href="#menu">Menù</a></li>
        <li><a href="#impasti">Impasti</a></li>
        <li><a href="#about">Filosofia</a></li>
      </ul>
    </div>

    <div>
      <h4>Seguici</h4>
      <ul>
        <li><a href="#">Instagram</a></li>
        <li><a href="#">Facebook</a></li>
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