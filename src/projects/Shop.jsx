import { useState } from "react";
import { Link } from "react-router";
import "./Shop.css";

const products = [
  {
    id: 1,
    name: "Red Runner",
    category: "Чоловічі",
    price: 3200,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=85",
  },
  {
    id: 2,
    name: "Classic White",
    category: "Жіночі",
    price: 2800,
    image:
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=700&q=85",
  },
  {
    id: 3,
    name: "Street Black",
    category: "Чоловічі",
    price: 3500,
    image:
      "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=700&q=85",
  },
  {
    id: 4,
    name: "Urban Style",
    category: "Жіночі",
    price: 2990,
    image:
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=700&q=85",
  },
  {
    id: 5,
    name: "Daily Classic",
    category: "Чоловічі",
    price: 2600,
    image:
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=700&q=85",
  },
  {
    id: 6,
    name: "Soft Step",
    category: "Жіночі",
    price: 3100,
    image:
      "https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?auto=format&fit=crop&w=700&q=85",
  },
  {
    id: 7,
    name: "Sport Pro",
    category: "Чоловічі",
    price: 3900,
    image:
      "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=700&q=85",
  },
  {
    id: 8,
    name: "Street Pink",
    category: "Жіночі",
    price: 2750,
    image:
      "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&w=700&q=85",
  },
];

function Shop() {
  const [category, setCategory] = useState("Усі");
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  const filteredProducts =
    category === "Усі"
      ? products
      : products.filter((product) => product.category === category);

  const totalPrice = cart.reduce((sum, product) => sum + product.price, 0);

  function addToCart(product) {
    setCart((currentCart) => [...currentCart, product]);
  }

  function removeFromCart(indexToRemove) {
    setCart((currentCart) =>
      currentCart.filter((_, index) => index !== indexToRemove),
    );
  }

  return (
    <div className="shop-page">
      <header className="shop-header">
        <Link to="/" className="shop-logo">
          STEP<span>.</span>
        </Link>

        <nav className="shop-nav">
          <a href="#catalog">Каталог</a>
          <a href="#about">Про магазин</a>
        </nav>

        <button
          className="shop-cart-button"
          onClick={() => setCartOpen(!cartOpen)}
        >
          Кошик <span>{cart.length}</span>
        </button>
      </header>

      <main>
        <section className="shop-hero">
          <div className="shop-hero-content">
            <p className="shop-label">STEP — YOUR EVERYDAY STYLE</p>

            <h1>
              Знайди свій
              <br />
              <span>наступний крок.</span>
            </h1>

            <p className="shop-subtitle">
              Кросівки для міста, спорту та кожного дня. Обирай свою пару та
              створюй власний стиль.
            </p>

            <a href="#catalog" className="shop-button">
              Дивитися каталог ↗
            </a>
          </div>

          <div className="shop-hero-decoration">
            <img
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=85"
              alt="Червоні кросівки"
            />
            <span>NEW COLLECTION</span>
          </div>
        </section>

        <section className="shop-catalog" id="catalog">
          <div className="shop-section-heading">
            <div>
              <p className="shop-label">НАША КОЛЕКЦІЯ</p>
              <h2>Популярні моделі</h2>
            </div>

            <p>{filteredProducts.length} моделей</p>
          </div>

          <div className="shop-filters">
            {["Усі", "Чоловічі", "Жіночі"].map((item) => (
              <button
                key={item}
                className={category === item ? "active" : ""}
                onClick={() => setCategory(item)}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="shop-grid">
            {filteredProducts.map((product) => (
              <article className="shop-product" key={product.id}>
                <div className="shop-product-image">
                  <img src={product.image} alt={product.name} />
                  <span>{product.category}</span>
                </div>

                <div className="shop-product-info">
                  <h3>{product.name}</h3>

                  <div className="shop-product-bottom">
                    <strong>{product.price.toLocaleString("uk-UA")} ₴</strong>

                    <button onClick={() => addToCart(product)}>
                      + У кошик
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {cartOpen && (
          <div className="shop-cart-panel">
            <div className="shop-cart-panel-heading">
              <div>
                <p className="shop-label">ТВОЄ ЗАМОВЛЕННЯ</p>
                <h2>Кошик ({cart.length})</h2>
              </div>

              <button
                className="shop-close-button"
                onClick={() => setCartOpen(false)}
                aria-label="Закрити кошик"
              >
                ✕
              </button>
            </div>

            {cart.length === 0 ? (
              <p className="shop-empty-cart">Твій кошик поки порожній.</p>
            ) : (
              <>
                <div className="shop-cart-items">
                  {cart.map((product, index) => (
                    <div
                      className="shop-cart-item"
                      key={`${product.id}-${index}`}
                    >
                      <img src={product.image} alt={product.name} />

                      <div>
                        <h3>{product.name}</h3>
                        <p>{product.price.toLocaleString("uk-UA")} ₴</p>
                      </div>

                      <button
                        onClick={() => removeFromCart(index)}
                        aria-label={`Видалити ${product.name}`}
                      >
                        Видалити
                      </button>
                    </div>
                  ))}
                </div>

                <div className="shop-cart-total">
                  <span>Разом</span>
                  <strong>{totalPrice.toLocaleString("uk-UA")} ₴</strong>
                </div>

                <p className="shop-cart-note">
                  Це демоверсія кошика. Оформлення та оплата замовлень ще не
                  підключені.
                </p>

                <button className="shop-clear-cart" onClick={() => setCart([])}>
                  Очистити кошик
                </button>
              </>
            )}
          </div>
        )}

        <section className="shop-benefits">
          <div>
            <span>01</span>
            <h3>Сучасний стиль</h3>
            <p>Моделі для повсякденних образів.</p>
          </div>

          <div>
            <span>02</span>
            <h3>Зручний вибір</h3>
            <p>Каталог із фільтрами за категоріями.</p>
          </div>

          <div>
            <span>03</span>
            <h3>Простий кошик</h3>
            <p>Додавай моделі та рахуй загальну суму.</p>
          </div>
        </section>

        <section className="shop-about" id="about">
          <p className="shop-label">ПРО STEP</p>

          <h2>
            Твій стиль.
            <br />
            Твій рух.
          </h2>

          <p>
            STEP — демонстраційний магазин сучасного взуття. Цей проєкт показує,
            як можуть виглядати каталог, фільтри та кошик інтернет-магазину.
          </p>

          <Link to="/" className="shop-back">
            ← Повернутися до портфоліо
          </Link>
        </section>
      </main>

      <footer className="shop-footer">
        <Link to="/" className="shop-logo">
          STEP<span>.</span>
        </Link>

        <p>© 2026 STEP. Демонстраційний проєкт.</p>

        <a href="#catalog">До каталогу ↑</a>
      </footer>
    </div>
  );
}

export default Shop;
