import catalog from "./Catalog.js";
import { title as pageTitle } from "./Head.js";

function Main() {
  this.main;
  this.data = JSON.parse(localStorage.getItem("data"));
  this.create = () => {
    this.main = document.createElement("main");
    this.main.classList.add("main");
    window.addEventListener("hashchange", () => {
      this.render(location.hash);
    });
  };
  this.render = (hash) => {
    const slugOfHash = hash ? hash.slice(1) : "home";
    if (slugOfHash == "cart") {
      import('./Cart.js').then(cartData => {
          const cart = cartData.default.init()
          this.main.innerHTML = cart.outerHTML
      })
      import("../utils/UtilsCart.js").then(util => {
        util.default.init()
      })
    } else {
      const componentData = this.data.filter(({ slug }) =>
        slugOfHash.includes(slug)
      );
      const { content, title } = componentData[0];

      pageTitle.innerHTML = title;
      if(!slugOfHash.includes("/")){
        this.main.innerHTML = `<div class="container">
          <h1>${title}</h1>
          <p>${content}</p>
        </div>`;
      } else {
        this.main.innerHTML = `<div class="container">
      </div>`;
      }

      if (slugOfHash.includes("home")){
        this.main.innerHTML = `
        <div class="home__wrap">
            <h1 class="home__title">wondershop</h1>
            <p class="home__text">онлайн-магазин дизайнерской одежды</p>
        </div>
        `
      }
      if (slugOfHash.includes("contact")){
        this.main.innerHTML = `
        <div class="contacts__wrap">
            <h1 class="contacts__title">Свяжитесь с нами</h1>
            <div class="contacts__info-wrap">
              <h3>Минск</h3>
              <p>ул. Куйбышева 38, офис 16
                  <br>
                  Телефон: <a href="tel:+375(29)903-84-29">+375(44)903-84-29</a>
              </p>
              <h3>Витебск</h3>
              <p>ул. Правды 44, офис 33
                  <br>
                  Телефон: <a href="tel:+375(33)356-98-23">+375(33)356-98-23</a>
              </p>
              <h3>Брест</h3>
              <p>
                  ул. Янки Купалы 108 , офис 747
                  <br>
                  Телефон: <a href="tel:+375(44)343-56-78">+375(44)343-56-78</a>
              </p>
            </div>
            <div class="contacts-app">
            <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A552d78f4a7335866152659bb52b66b97b57c898b6442ba047f6ef79a67430e33&amp;source=constructor" width="700" height="400" frameborder="0"></iframe>
            </div>
        </div>
        `
      }

      if(slugOfHash.includes("about")){
        this.main.innerHTML = `<div class="about__wrap">
                                  <h1 class="about__title">О нас</h1>
                                  <p class="about__text">Большой выбор качественной и удобной брендовой одежды и аксессуаров по доступным ценам. WONDERSHOP предлагает интересную молодежную одежду с ярким современным дизайном, выполненным по последним модным тенденциям. Мы внимательно и с удовольствием следим за веяниями моды и стараемся подобрать для вас "золотую середину", с точки зрения цены и качества. Осуществляем доставку почтой по всей Беларуси, а курьером и самовывоз только для Минска.</p>
                                  <div class="about__partners-wrap">
                                    <h2 class="about__partners-title">Наши партнеры:</h2>
                                    <div class="about__partners-links">
                                        <a href="https://www.versace.com/international/en/home/" class="about__partners-link"><img src="../img/8ee4ccedbb5fb39bec8c2af6c0bc5e26.jpg" alt="" class="about__partners-img"></a>
                                        <a href="https://www.prada.com/ww/en.html" class="about__partners-link"><img src="../img/prada-logo.jpg" alt="" class="about__partners-img"></a>
                                        <a href="https://eu.louisvuitton.com/eng-e1/homepage" class="about__partners-link"><img src="../img/louis-vuitton-logo-v-vinyl-decal-sticker__50089.1507851119.jpg" alt="" class="about__partners-img"></a>
                                        <a href="https://www.chanel.com/us/" class="about__partners-link"><img src="../img/acc4e7c15022af824432fa8eea7b9d53.jpeg" alt="" class="about__partners-img"></a>
                                        <a href="https://www.hermes.com/us/en/" class="about__partners-link"><img src="../img/hermes-paris-vector-illustration-hermes-paris-vector-illustration-editorial-loog-clothing-brand-136940586.jpg" alt="" class="about__partners-img"></a>
                                    </div>
                                  </div>
                                  </div>`
      }

      if (slugOfHash.includes("catalog")) {
        import("./Catalog.js").then((responseCatalog) => {
          responseCatalog.default.init().then((catalogData) => {
            this.main.appendChild(catalogData);
            import("../utils/UtilsCart.js").then(util => {
              util.default.init()
            })
          });
        });
      } 
    }
  };

  this.init = () => {
    this.create();
    this.render(location.hash);
    return this.main;
  };
}

const main = new Main().init();
export default main;
