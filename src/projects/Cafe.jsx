import { Link } from "react-router";
import "./Cafe.css";

const menu = [
  {
    name: "Cappuccino",
    description: "Еспресо, молоко та ніжна молочна піна",
    price: "95 ₴",
  },
  {
    name: "Matcha Latte",
    description: "Японська матча з ніжним молоком",
    price: "120 ₴",
  },
  {
    name: "Flat White",
    description: "Подвійний еспресо та шовковисте молоко",
    price: "105 ₴",
  },
  {
    name: "Croissant",
    description: "Свіжий французький круасан",
    price: "85 ₴",
  },
];

function Cafe() {
  return (
    <div className="cafe-page">
      {/* HEADER */}
      <header className="cafe-header">
        <div className="cafe-container cafe-header-inner">
          <Link to="/" className="back-link">
            ← Портфоліо
          </Link>

          <div className="cafe-logo">MORNING</div>

          <nav className="cafe-nav">
            <a href="#about">Про нас</a>
            <a href="#menu">Меню</a>
            <a href="#atmosphere">Атмосфера</a>
            <a href="#contact">Контакти</a>
          </nav>

          <a href="#menu" className="cafe-header-button">
            Меню
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="cafe-hero">
        <div className="cafe-hero-overlay"></div>

        <div className="cafe-container cafe-hero-content">
          <p className="cafe-label">COFFEE • BRUNCH • GOOD MOOD</p>

          <h1>
            Свіжа кава.
            <br />
            Повільні ранки.
          </h1>

          <p>
            Місце, де можна зупинитися на годину, випити хорошу каву та нікуди
            не поспішати.
          </p>

          <div className="cafe-hero-buttons">
            <a href="#menu" className="cafe-button cafe-button-dark">
              Переглянути меню
            </a>

            <a href="#contact" className="cafe-button cafe-button-light">
              Знайти нас
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="cafe-section cafe-about" id="about">
        <div className="cafe-container cafe-two-columns">
          <div>
            <p className="cafe-label">01 — ПРО НАС</p>

            <h2>
              Твій маленький
              <br />
              ранковий ритуал.
            </h2>
          </div>

          <div className="cafe-text">
            <p>
              MORNING — невелика міська кав'ярня для тих, хто любить якісну
              каву, свіжу випічку та спокійну атмосферу.
            </p>

            <p>
              Ми готуємо каву з зерен свіжого обсмаження та кожного ранку
              випікаємо круасани.
            </p>
          </div>
        </div>
      </section>

      {/* MENU */}
      <section className="cafe-section cafe-menu" id="menu">
        <div className="cafe-container">
          <div className="cafe-section-heading">
            <div>
              <p className="cafe-label">02 — МЕНЮ</p>

              <h2>Наші фаворити</h2>
            </div>

            <p>Просте меню, де кожен продукт ми справді любимо.</p>
          </div>

          <div className="menu-list">
            {menu.map((item) => (
              <div className="menu-item" key={item.name}>
                <div>
                  <h3>{item.name}</h3>

                  <p>{item.description}</p>
                </div>

                <strong>{item.price}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ATMOSPHERE */}
      <section className="cafe-section atmosphere" id="atmosphere">
        <div className="cafe-container">
          <div className="cafe-section-heading">
            <div>
              <p className="cafe-label">03 — АТМОСФЕРА</p>

              <h2>Залишайся довше</h2>
            </div>
          </div>

          <div className="atmosphere-grid">
            <div
              className="atmosphere-photo atmosphere-photo-1"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1000&q=85)",
              }}
            ></div>

            <div
              className="atmosphere-photo atmosphere-photo-2"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=1000&q=85)",
              }}
            ></div>

            <div
              className="atmosphere-photo atmosphere-photo-3"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1000&q=85)",
              }}
            ></div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="cafe-section reviews">
        <div className="cafe-container">
          <p className="cafe-label">04 — ВІДГУКИ</p>

          <div className="review">
            <div className="review-stars">★★★★★</div>

            <blockquote>
              “Найкращий капучино в місті. Тут реально хочеться залишитися ще на
              одну чашку.”
            </blockquote>

            <p>— Анна, постійна гостя</p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="cafe-contact" id="contact">
        <div className="cafe-container contact-grid">
          <div>
            <p className="cafe-label">05 — ЗНАЙДИ НАС</p>

            <h2>
              Заходь
              <br />
              на каву.
            </h2>
          </div>

          <div className="contact-info">
            <div>
              <span>АДРЕСА</span>
              <p>
                вул. Кавова, 12
                <br />
                Львів, Україна
              </p>
            </div>

            <div>
              <span>ГОДИНИ</span>
              <p>
                Пн–Пт: 08:00–21:00
                <br />
                Сб–Нд: 09:00–22:00
              </p>
            </div>

            <div>
              <span>КОНТАКТИ</span>
              <p>
                +380 67 123 45 67
                <br />
                hello@morning.cafe
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="cafe-footer">
        <div className="cafe-container cafe-footer-inner">
          <div className="cafe-logo">MORNING</div>

          <p>coffee & brunch</p>

          <Link to="/" className="footer-back">
            ← Повернутися до портфоліо
          </Link>
        </div>
      </footer>
    </div>
  );
}

export default Cafe;
