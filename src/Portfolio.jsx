import { Link } from "react-router";
import "./App.css";

function Portfolio() {
  const projects = [
    {
      number: "01",
      title: "MORNING",
      category: "Сайт кафе",
      description:
        "Сучасний сайт для кафе з меню, атмосферою, відгуками та контактами.",
      image:
        "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1000&q=85",
      link: "/project/cafe",
    },
    {
      number: "02",
      title: "STEP",
      category: "Інтернет-магазин",
      description: "Магазин кросівок із каталогом, фільтрами та кошиком.",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1000&q=85",
      link: "/project/shop",
    },
    {
      title: "FITZONE",
      category: "GYM / FITNESS",
      description:
        "Сучасний сайт спортивного залу з програмами тренувань та абонементами.",
      image:
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=85",
      link: "/project/gym",
    },
  ];

  const services = [
    {
      title: "Сайт-візитка",
      price: "від 1000₴",
      text: "Невеликий сучасний сайт для бізнесу або особистого бренду.",
    },
    {
      title: "Landing Page",
      price: "від 1500₴",
      text: "Односторінковий сайт для продажу товару, послуги або реклами.",
    },
    {
      title: "React сайт",
      price: "від 2500₴",
      text: "Повноцінний сучасний сайт на React з інтерактивністю.",
    },
  ];

  return (
    <div className="portfolio">
      {/* HEADER */}
      <header className="header">
        <div className="container header-inner">
          <a href="/" className="logo">
            luk<span>.dev</span>
          </a>

          <nav className="nav">
            <a href="#about">Про мене</a>
            <a href="#projects">Проєкти</a>
            <a href="#services">Послуги</a>
            <a href="#contacts">Контакти</a>
          </nav>

          <a
            href="https://t.me/LukianS11"
            target="_blank"
            rel="noreferrer"
            className="header-button"
          >
            Написати
          </a>
        </div>
      </header>

      {/* HERO */}
      <main>
        <section className="hero">
          <div className="container hero-content">
            <div className="hero-text">
              <p className="eyebrow">WEB DEVELOPER • REACT</p>

              <h1>
                Створюю сайти,
                <br />
                які <span>виділяють</span>
                <br />
                твій бізнес.
              </h1>

              <p className="hero-description">
                Сучасні, швидкі та адаптивні сайти для бізнесу, брендів та
                особистих проєктів.
              </p>

              <div className="hero-buttons">
                <a href="#projects" className="button button-primary">
                  Переглянути роботи
                </a>

                <a href="#contacts" className="button button-secondary">
                  Замовити сайт
                </a>
              </div>
            </div>

            <div className="hero-card">
              <div className="code-window">
                <div className="code-top">
                  <div className="dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>

                  <span>portfolio.jsx</span>
                </div>

                <div className="code-content">
                  <p>
                    <span className="purple">const</span>{" "}
                    <span className="blue">website</span> = {"{"}
                  </p>

                  <p className="indent">
                    <span className="green">design</span>:{" "}
                    <span className="orange">"modern"</span>,
                  </p>

                  <p className="indent">
                    <span className="green">responsive</span>:{" "}
                    <span className="orange">true</span>,
                  </p>

                  <p className="indent">
                    <span className="green">technology</span>:{" "}
                    <span className="orange">"React"</span>
                  </p>

                  <p>{"}"}</p>

                  <p className="cursor-line">
                    <span className="purple">return</span> website;
                    <span className="cursor"></span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section className="about section" id="about">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">01 — ПРО МЕНЕ</p>
              <h2>Роблю не просто сайти.</h2>
            </div>

            <div className="about-grid">
              <div>
                <p className="big-text">
                  Я створюю сайти, які допомагають бізнесу виглядати професійно
                  та сучасно.
                </p>
              </div>

              <div>
                <p className="about-text">
                  Працюю з HTML, CSS, JavaScript та React. Створюю адаптивні
                  інтерфейси, які добре виглядають на телефоні, планшеті та
                  комп'ютері.
                </p>

                <p className="about-text">
                  Моя ціль — зробити сайт красивим, зрозумілим та зручним для
                  клієнтів.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section className="projects section" id="projects">
          <div className="container">
            <div className="section-heading projects-heading">
              <div>
                <p className="eyebrow">02 — ПРОЄКТИ</p>
                <h2>Мої роботи</h2>
              </div>

              <p className="heading-description">
                Приклади сайтів, які можна створити для різних типів бізнесу.
              </p>
            </div>

            <div className="projects-grid">
              {projects.map((project) => (
                <div className="project-card" key={project.number}>
                  <div
                    className="project-image"
                    style={{
                      backgroundImage: `url(${project.image})`,
                    }}
                  >
                    <span className="project-number">{project.number}</span>
                  </div>

                  <div className="project-info">
                    <p className="project-category">{project.category}</p>

                    <h3>{project.title}</h3>

                    <p>{project.description}</p>

                    {project.link.startsWith("/") ? (
                      <Link to={project.link} className="project-link">
                        Переглянути сайт ↗
                      </Link>
                    ) : (
                      <a href={project.link} className="project-link">
                        Замовити подібний ↗
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="services section" id="services">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">03 — ПОСЛУГИ</p>
              <h2>Що я можу зробити</h2>
            </div>

            <div className="services-list">
              {services.map((service, index) => (
                <div className="service" key={service.title}>
                  <div className="service-number">0{index + 1}</div>

                  <div className="service-main">
                    <h3>{service.title}</h3>
                    <p>{service.text}</p>
                  </div>

                  <div className="service-price">{service.price}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACTS */}
        <section className="contacts section" id="contacts">
          <div className="container contact-box">
            <div>
              <p className="eyebrow">04 — КОНТАКТИ</p>

              <h2>
                Є ідея?
                <br />
                <span>Давай зробимо.</span>
              </h2>

              <p className="contact-description">
                Напиши мені, розкажи про свій проєкт і я допоможу перетворити
                ідею на сучасний сайт.
              </p>
            </div>

            <div className="contact-actions">
              <a
                href="https://t.me/LukianS11"
                target="_blank"
                rel="noreferrer"
                className="button button-primary"
              >
                Написати в Telegram
              </a>

              <a
                href="mailto:lukiansolodkyy11@gmail.com"
                className="contact-email"
              ></a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container footer-inner">
          <p>© 2026 luk.dev</p>

          <p>Made with React</p>
        </div>
      </footer>
    </div>
  );
}

export default Portfolio;
