import { codes } from "../codes-book-data.js";
console.log(codes);

document.title = `${codes[1].title}` + " | Систематизоване законодавство України";

// var titlePage = document.title;
// console.log(titlePage=`${codes[1].title}`)

const cardProduct = document.querySelector('.card-product');
const prodEll = `
          <div class="card-product__wrapper">
            <div class="card-product__wrapper-img card-product__wrapper-img--folders">
              <img class="card-product__img" src="${codes[1].url_big_f}" alt="${codes[1].title}" />
            </div>
            <div class="card-product__wrapper-description">
              <h3 class="card-product__title">${codes[1].title}</h3>
              <ul class="card-product__list list-no-marker">
                <li class="card-product__item">
                  <p class="card-product__description">${codes[1].date_f}</p>
                </li>
                <li class="card-product__item">
                  <p class="card-product__description">Обкладинка: М’яка</p>
                </li>
                <li class="card-product__item">
                  <p class="card-product__description">Папір: Офсетний Формат: 60х90 1/16</p>
                </li>
                <li class="card-product__item">
                  <p class="card-product__description">Кількість сторінок: ${codes[1].pages_q_f}</p>
                </li>
                <li class="card-product__item">
                  <p class="card-product__description">Додаткова інформація: ${codes[1].information}</p>
                </li>
              </ul>
              <div class="card-product__wrapper-order">
                <p class="card-product__prise">${codes[1].price_f} грн</p>
                <p class="card-product__description--order">Для замовлення звертайтесь:</p>
                <ul class="card-product__list list-no-marker">
                  <li class="card-product__item">
                    <a class="card-product__link link-no-decor" href="tel:+380674745955">(067) 474-59-55</a>
                  </li>
                  <li class="card-product__item">
                    <a class="card-product__link link-no-decor" href="tel:+380506996454">(050) 699-64-54</a>
                  </li>
                  <li class="card-product__item">
                    <a class="card-product__link link-no-decor" href="mailto:zou3@ukr.net">zou3@ukr.net</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>`;
cardProduct.insertAdjacentHTML('beforeend', `${prodEll}`);
console.log(prodEll)

{/* <div class="card-product__wrapper-prise">
              <p class="card-product__prise">300.00 грн</p>
              <button class="btn" type="submit" data-modal-open="">Замовити</button>
            </div> */}

