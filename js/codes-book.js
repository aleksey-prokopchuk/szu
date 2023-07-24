import { codes } from './codes-book-data.js'

// console.log(codes);

const imageGallery = document.querySelector('.codes-list');
const imgEll = codes
  .map(codes => {
    return `<li class="codes-list__item">
        <a class="codes-list__link link-no-decor" href="${codes.url_page}">
        <div class="codes-list__wrapper">
          <img
            class="codes-list__img-thumbs img-thumbs"
            src='${codes.url}'
            alt='${codes.title}';
          />
          <h3 class="codes-list__name">${codes.title}</h3>
          <p class="codes-list__part">${codes.part}</p>
        </div>
        <div class="codes-list__order">
        <p class="codes-list__details">Детальніше...</p>  
        </div>
        </a>
      </li>`;
  })
  .join(' ');
imageGallery.insertAdjacentHTML('beforeend', `${imgEll}`);