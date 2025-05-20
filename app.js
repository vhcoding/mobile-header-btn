const style = document.createElement("style");
style.textContent = `
  .header-mobile-button {
    display: flex;
    flex-shrink: 0;
    padding: 0;
    background: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3px;
    width: 27px;
    border: none;
  }

  .header-mobile-button span {
    width: 100%;
    height: 5px;
    border-radius: 4px;
    background-color:#000000;
    display: block;
    transition: 0.2s;
  }

  .header-mobile-button.header-mobile-button-active span:nth-child(2) {
    width: 0;
  }

  .header-mobile-button.header-mobile-button-active span:nth-child(1) {
    transform: translateY(9px) rotate(-45deg);
  }

  .header-mobile-button.header-mobile-button-active span:nth-child(3) {
    transform: translateY(-7px) rotate(45deg);
  }

  @media (min-width: 1024px) {
    .header-mobile-button {
      display: none;
    }
  }

  .nav-link {
    transition: color 200ms;
  }

  @media (max-width: 1023px) {
    .nav-bar {
      max-width: none;
      max-height: 0;
      overflow: hidden;
      padding-left: 20px;
      padding-right: 20px;
      flex-direction: column;
      position: absolute;
      top: 100%;
      left: 0;
    }
  }
`;

document.head.appendChild(style);

const button = document.querySelector(".header-mobile-button");
for (let i = 0; i < 3; i++) {
  button.appendChild(document.createElement("span"));
}

const handleHeaderMobile = () => {
  const btn = document.querySelector(".header-mobile-button");
  const list = document.querySelector(".nav-bar");
  btn.addEventListener("click", () => {
    btn.classList.toggle("header-mobile-button-active");
    if (btn.classList.contains("header-mobile-button-active")) {
      list.style.paddingTop = "20px";
      list.style.paddingBottom = "20px";
      list.style.maxHeight = "100vh";
    } else list.style = "";
  });
};
handleHeaderMobile();