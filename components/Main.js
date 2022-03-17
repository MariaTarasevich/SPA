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
    const slugOfHash = hash ? hash.slice(1) : "home"; //подумать как избавиться от дубликата страницы
    if (slugOfHash == "cart") {
      import('./Cart.js').then(cartData => {
          const cart = cartData.default.init()
          this.main.innerHTML = cart.outerHTML
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

      if (slugOfHash.includes("catalog")) {
        import("./Catalog.js").then((responseCatalog) => {
          responseCatalog.default.init().then((catalogData) => {
            this.main.appendChild(catalogData);
            import("../utils/UtilsCart.js");
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
