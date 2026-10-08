import { Link } from "react-router";
import "./Gym.css";

const programs = [
  {
    number: "01",
    title: "Силові тренування",
    text: "Набирай силу, працюй з вагою та розвивай кожну групу м'язів.",
  },
  {
    number: "02",
    title: "Функціональний тренінг",
    text: "Розвивай витривалість, швидкість, координацію та силу.",
  },
  {
    number: "03",
    title: "Персональні тренування",
    text: "Індивідуальна програма та тренер, який допоможе досягти результату.",
  },
];

const prices = [
  {
    name: "START",
    price: "599",
    description: "Для тих, хто тільки починає",
    features: ["Доступ до залу", "Роздягальня", "Кардіозона"],
  },
  {
    name: "PRO",
    price: "999",
    description: "Для регулярних тренувань",
    features: ["Безлімітний доступ", "Усі тренажери", "Групові заняття", "Душ"],
    popular: true,
  },
  {
    name: "ELITE",
    price: "1799",
    description: "Максимум можливостей",
    features: [
      "Усе з PRO",
      "4 персональні тренування",
      "Індивідуальна програма",
      "Консультація тренера",
    ],
  },
];

function Gym() {
  return (
    <div className="gym-page">
      <header className="gym-header">
        <Link to="/" className="gym-back">
          ← Повернутися до портфоліо
        </Link>

        <div className="gym-logo">
          FIT<span>ZONE</span>
        </div>

        <nav className="gym-nav">
          <a href="#programs">Програми</a>
          <a href="#prices">Абонементи</a>
          <a href="#about">Про нас</a>
          <a href="#contacts">Контакти</a>
        </nav>

        <a href="#prices" className="gym-header-button">
          Почати
        </a>
      </header>

      <main>
        <section className="gym-hero">
          <div className="gym-hero-content">
            <p className="gym-label">FITNESS / PERFORMANCE / ENERGY</p>

            <h1>
              СТАНЬ
              <br />
              <span>СИЛЬНІШИМ.</span>
            </h1>

            <p className="gym-hero-text">
              Простір для тих, хто хоче більше. Тренуйся, розвивайся та досягай
              своїх цілей разом із FITZONE.
            </p>

            <div className="gym-hero-buttons">
              <a href="#prices" className="gym-button gym-button-dark">
                Обрати абонемент →
              </a>

              <a href="#programs" className="gym-button gym-button-light">
                Наші програми
              </a>
            </div>
          </div>

          <div className="gym-hero-image">
            <img
              src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=90"
              alt="Тренування"
            />

            <div className="gym-hero-badge">
              <strong>24/7</strong>
              <span>ДОСТУП ДО ЗАЛУ</span>
            </div>
          </div>
        </section>

        <section className="gym-stats">
          <div>
            <strong>2 500+</strong>
            <span>КЛІЄНТІВ</span>
          </div>

          <div>
            <strong>15+</strong>
            <span>ТРЕНЕРІВ</span>
          </div>

          <div>
            <strong>2</strong>
            <span>ЛОКАЦІЇ</span>
          </div>

          <div>
            <strong>24/7</strong>
            <span>ДОСТУП</span>
          </div>
        </section>

        <section className="gym-programs" id="programs">
          <div className="gym-section-heading">
            <p className="gym-label">01 / TRAINING</p>

            <h2>
              ОБИРАЙ СВІЙ
              <br />
              <span>ФОРМАТ.</span>
            </h2>

            <p>
              Тренування для будь-якого рівня підготовки — від першого заняття
              до професійного результату.
            </p>
          </div>

          <div className="gym-program-grid">
            {programs.map((program) => (
              <article className="gym-program-card" key={program.title}>
                <div className="gym-program-number">{program.number}</div>

                <h3>{program.title}</h3>

                <p>{program.text}</p>

                <a href="#contacts">Дізнатися більше →</a>
              </article>
            ))}
          </div>
        </section>

        <section className="gym-about" id="about">
          <div className="gym-about-image">
            <img
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=90"
              alt="FITZONE"
            />
          </div>

          <div className="gym-about-content">
            <p className="gym-label">02 / ABOUT FITZONE</p>

            <h2>
              НЕ ПРОСТО
              <br />
              <span>СПОРТЗАЛ.</span>
            </h2>

            <p>
              FITZONE — це сучасний простір для тренувань, де все створено для
              твого результату.
            </p>

            <p>
              Нове обладнання, сильна команда тренерів, комфортна атмосфера та
              програми під різні цілі.
            </p>

            <div className="gym-about-list">
              <div>
                <span>01</span>
                <strong>Сучасне обладнання</strong>
              </div>

              <div>
                <span>02</span>
                <strong>Професійні тренери</strong>
              </div>

              <div>
                <span>03</span>
                <strong>Зручний графік</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="gym-prices" id="prices">
          <div className="gym-section-heading center">
            <p className="gym-label">03 / MEMBERSHIP</p>

            <h2>
              ОБЕРИ СВІЙ
              <br />
              <span>РІВЕНЬ.</span>
            </h2>
          </div>

          <div className="gym-price-grid">
            {prices.map((plan) => (
              <article
                className={`gym-price-card ${plan.popular ? "popular" : ""}`}
                key={plan.name}
              >
                {plan.popular && <div className="gym-popular">ПОПУЛЯРНИЙ</div>}

                <p className="gym-price-name">{plan.name}</p>

                <h3>
                  {plan.price}
                  <span> ₴ / МІС</span>
                </h3>

                <p className="gym-price-description">{plan.description}</p>

                <ul>
                  {plan.features.map((feature) => (
                    <li key={feature}>✓ {feature}</li>
                  ))}
                </ul>

                <a href="#contacts">Обрати план →</a>
              </article>
            ))}
          </div>
        </section>

        <section className="gym-motivation">
          <div>
            <p className="gym-label">NO EXCUSES</p>

            <h2>
              ТВОЄ ТІЛО.
              <br />
              <span>ТВІЙ РЕЗУЛЬТАТ.</span>
            </h2>

            <a href="#contacts" className="gym-button gym-button-dark">
              Записатися на тренування →
            </a>
          </div>
        </section>

        <section className="gym-contact" id="contacts">
          <div>
            <p className="gym-label">04 / CONTACT</p>

            <h2>
              ГОТОВИЙ
              <br />
              <span>ПОЧАТИ?</span>
            </h2>
          </div>

          <div className="gym-contact-info">
            <p>
              вул. Спортивна, 24
              <br />
              Львів, Україна
            </p>

            <p>
              +380 67 123 45 67
              <br />
              hello@fitzone.ua
            </p>

            <a href="mailto:hello@fitzone.ua">Написати нам →</a>
          </div>
        </section>
      </main>

      <footer className="gym-footer">
        <div className="gym-logo">
          FIT<span>ZONE</span>
        </div>

        <p>© 2026 FITZONE. DEMO WEBSITE.</p>

        <Link to="/">← Портфоліо</Link>
      </footer>
    </div>
  );
}

export default Gym;
