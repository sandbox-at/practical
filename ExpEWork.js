var myConfig = {
  img1: "https://www.lloydsbank.com/assets/media/car-finance/car_finance_banner_final_d_2x.jpg",
  elementToReplace: ".hero-image",
  bgColor: "#005eb8",
};

(function () {
  var template = `<section class="att_hero">
      <div class="att_hero_content">
        <h1 class="att_header_text">Car Finance</h1>
        <p class="att_sub_header_text">
          If you're a Halifax current account holder and want to buy a car, or
          switch your current car finance to us, it's simple.
        </p>
        <label for="budget">Your monthly budget</label>
        <input type="text" id="budgetprice" value="£ 160" />
        <a
          class="att_btn att_btn-primary"
          data-selector="cta-item-"
          href="https://secure.halifax-online.co.uk/personal/a/car_finance_hub/"
          itemprop="url"
          data-tealium-event="External Click"
          data-tealium-narrative="Get started here"
          ><span class="btn-text" itemprop="name">Get a quote</span></a
        >
        <p class="legal">Rates from 3.4% APR, No impact on your credit score</p>
      </div>

      <img
        class="att_hero_mobile_image"
        src=${myConfig.img1}
        alt="bannerimgaes"
      />
    </section>`;

  var css = `
      body {
        box-sizing: border-box;
      }

      .att_hero {
        background: none;
        display: flex;
        flex-direction: column;
        height: 488px;
        position: relative;
        color: white;
      }

      .att_hero_content {
        background: ${myConfig.bgColor};
        max-width: 1100px;
        min-width: 0;
        padding: 10px 18px 10px;
      }
      .att_header_text {
        line-height: 2.889rem;
        margin-bottom: 12px;
        max-width: 100%;
        text-transform: none;
        width: 100%;
        font-size: 2.666rem;
      }
      .att_sub_header_text {
        font-size: 1.333rem;
        line-height: 1.888rem;
        margin-bottom: 24px;
        max-width: 100%;
      }
      .att_hero_mobile_image {
        height: 320px;
        object-fit: cover;
        display: block;
        width: 100%;
        border-style: none;
      }
      .att_btn-primary {
        background-color: #fff;
        max-width: 278px;
        min-width: 168px;
        text-align: center;
        padding: 8px 12px;
        border-radius: 28px;
        display: inline-block;
        font-size: 1rem;
        font-weight: 600;
        line-height: 1.5rem;
        margin-top: 1rem;
        color: #005eb8;
        word-break: break-word;
      }
      a.att_btn:link {
        text-decoration: none;
      }
      a.att_btn:hover {
        text-decoration: underline;
        color: #071d49;
      }
      .legal {
        margin-top: 3rem;
        font-size: 0.75em;
      }
      label {
        display: block;
        font-weight: 600;
      }
      input[type="text"] {
        padding: 0.6rem 0.6rem;
      }
      @media (min-width: 768px) {
        .att_hero {
          background-image: url(https://www.lloydsbank.com/assets/media/car-finance/car_finance_banner_final_d_2x.jpg);
          background-position: 50%;
          background-repeat: no-repeat;
          background-size: cover;
          width: 1040px;
          display: block;
          margin: 0 auto;
        }
        .att_hero_content {
          margin-left: 30px;
          zoom: 1;
          background: ${myConfig.bgColor};
          border-radius: 6px;

          padding: 20px 30px 30px;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 480px;
        }
        .att_btn-primary {
          display: inline-block;
        }

        .att_hero_mobile_image {
          display: none;
        }
      }
    `;

  var element = document.createElement("link");
  element.setAttribute("rel", "stylesheet");
  element.setAttribute("type", "text/css");
  element.setAttribute(
    "href",
    "https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"
  );
  document.getElementsByTagName("head")[0].appendChild(element);

  var head = document.head || document.getElementsByTagName("head")[0];
  var style = document.createElement("style");

  head.appendChild(style);

  style.type = "text/css";
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }

  var s = document.createElement("script");
  s.type = "text/javascript";
  s.src = "https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js";
  $("head").append(s);

  document.querySelector(myConfig.elementToReplace).innerHTML = template;
})();
