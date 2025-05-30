const style = document.createElement("style");
style.textContent = `
  .header-mobile-button {
    display: none;
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
    background-color: #000000;
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

  @media (max-width: 1023px) {
    .header-mobile-button {
      display: flex !important;
    }

    .nav-bar {
      width: calc(100% - 40px);
      margin: 0 20px;
      display: flex;
      flex-direction: column;
      overflow: hidden; 
      max-height: 0;
      max-width: none;
      transition: max-height 0.3s ease, padding 0.3s ease;
      position: absolute;
      top: 86%;
      left: 0;
      padding-left: 20px;
      padding-right: 20px;
      align-items: center;
      background: rgba(255, 255, 255, 0.95);
      border-radius: 16px;
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(6.5px);
      border: 1px solid rgba(255, 255, 255, 0.3);
    }
  }

  @media (min-width: 1024px) {
    .header-mobile-button {
      display: none !important;
    }

    .nav-bar {
      display: flex;
      overflow: visible;
      flex-direction: row;
    }
  }

  .nav-link {
    transition: color 200ms;
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
    } else {
      list.style.paddingTop = "";
      list.style.paddingBottom = "";
      list.style.maxHeight = "";
    }
  });
};
handleHeaderMobile();