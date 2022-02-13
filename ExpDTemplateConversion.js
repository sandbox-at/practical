var myConfig = {
  img1: "https://www.lloydsbank.com/assets/media/car-finance/car_finance_banner_final_d_2x.jpg",
  elementToReplace: ".hero-image",
  bgColor: "#005eb8",
};

(function () {
  var template = ` <section class="att_hero">
      <div class="att_hero_content">
        <div class="container-fluid">
          <h1 class="att_header_text">Car Finance</h1>
          <br /><br />
          <div class="row">
            <div class="col-sm-6">
              <div class="number number-price">
                <label for="budget">Price of car</label>
                <div>
                  <span class="minus pre minus-price">-</span>
                  <span class="txt">
                    <input type="text" id="budgetprice" value="13000"
                  /></span>
                  <span class="plus plus-price">+</span>
                </div>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="number number-repay">
                <label for="repay">Repayment</label>
                <div>
                  <span class="minus minus-repay">-</span>
                  <span class="txt2">
                    <input type="text" id="repay" value="48"
                  /></span>

                  <span class="plus plus-repay">+</span>
                </div>
              </div>
            </div>

            <div class="col-sm-12" id="fullcol">
              <div class="number number-deposit">
                <label for="deposit">Deposit</label>
                <div>
                  <span class="minus minus-deposit">-</span>
                  <span class="txt">
                    <input type="text" id="deposit" value="3000" />
                  </span>
                  <span class="plus plus-deposit">+</span>
                </div>
              </div>
            </div>
          </div>
          <br />
          <a
            class="att_btn att_btn-primary"
            data-selector="cta-item-"
            href="https://secure.halifax-online.co.uk/personal/a/car_finance_hub/"
            itemprop="url"
            data-tealium-event="External Click"
            data-tealium-narrative="Get started here"
            ><span class="btn-text" itemprop="name">Get a quote</span></a
          >

          <p class="legal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
            repellendus.
          </p>
        </div>
      </div>

      <img
        class="att_hero_mobile_image"
        src="https://www.lloydsbank.com/assets/media/car-finance/car_finance_banner_final_d_2x.jpg"
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
        background: #005eb8;
        max-width: 1100px;
        min-width: 0;
        padding: 8px 10px 8px;
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
        padding: 15px;
        border-radius: 28px;
        display: inline-block;
        font-size: 14px;
        font-weight: 600;
        line-height: 1.5rem;
        margin-top: 1rem;
        color: #005eb8;
        word-break: break-word;
      }

      a:link {
        text-decoration: none;
      }

      a:hover {
        text-decoration: underline;
        color: #071d49;
      }

      .legal {
        margin-top: 3rem;
        font-size: 12px;
      }

      label {
        display: block;
        font-weight: 400;
        font-size: 16px;
      }

      input[type="text"] {
        padding: 0.6rem 0.6rem;
        color: #000;
      }

      span {
        cursor: pointer;
      }

      .number {
        margin: 100px;
      }

      .minus {
        margin-right: -4px;
      }

      .plus {
        margin-left: -4px;
      }

      .minus,
      .plus,
      .pre {
        width: 20px;
        height: 34px;
        background: #f2f2f2;
        padding: 8px 0 8px 0;
        border: 1px solid #ddd;
        display: inline-block;
        vertical-align: middle;
        text-align: center;
        color: #005eb8;
        top: -2px;
      }

      input {
        height: 34px;
        width: 100px;
        text-align: center;
        font-size: 16px;
        border: 1px solid #ddd;
        display: inline-block;
        vertical-align: middle;
      }

      .number {
        display: inline;
      }
      /* Done */

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
        /* Done */
        .att_hero_content {
          margin-left: 30px;
          zoom: 1;
          background: #005eb8;
          border-radius: 6px;

          /* padding: 20px 30px 30px; */
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

        input[type="text"] {
          display: inline-block;
        }
      }

      span.txt {
        position: relative;
      }

      span.txt input {
        padding-left: 15px;
      }

      span.txt:after {
        position: absolute;
        left: 6px;
        top: -5.5px;
        content: "£";
        color: #000;
        font-size: 20px;
        font-family: sans-serif;
      }

      span.txt2 {
        position: relative;
      }

      span.txt2 input {
        padding-left: 15px;
      }

      span.txt2:after {
        position: absolute;
        right: 6px;
        top: 0;
        content: "Months";
        color: #000;
        font-size: 12px;
        font-family: sans-serif;
      }

      #fullcol {
        margin: 30px 0 30px 0 !important;
      }

      #repay {
        text-align: left;
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
