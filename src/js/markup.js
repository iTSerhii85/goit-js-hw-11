import Notiflix from 'notiflix';

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.css";
let gallery = new SimpleLightbox('.gallery a');


function createMarkup (obj){
  const galleryEl = document.querySelector('.gallery');

  const images = obj.data.hits;

  if (images.length === 0) {
    Notiflix.Notify.failure("Sorry, there are no images matching your search query. Please try again.");
  }
else {
  const markup = images.map(obj =>
 `<a class="gallery__item" href="${obj.largeImageURL}">
   <div class="photo-card">
    <div class="wrapper">
     <img src="${obj.webformatURL}" alt="${obj.tags}" loading="lazy" />
    </div>
     <div class="info">
       <p class="info-item">
         <b>❤ Likes: ${obj.likes}</b>
       </p>
       <p class="info-item">
         <b>👀Views: ${obj.views}</b>
       </p>
       <p class="info-item">
         <b>💬 Comments: ${obj.comments}</b>
       </p>
       <p class="info-item">
         <b> ⭳ Downloads: ${obj.downloads}</b>
       </p>
     </div>
   </div>
   </a>`).join('');
  
  galleryEl.innerHTML = markup;
  Notiflix.Notify.success(`Hooray! We found ${obj.data.totalHits} images.`);
  gallery.refresh();
   }
}

function createMoreMarkup (obj){
  const galleryEl = document.querySelector('.gallery');

  const images = obj.data.hits;

  if (images.length === 0) {
    Notiflix.Notify.failure("Sorry, there are no images matching your search query. Please try again.");
  }
else {
  const markup = images.map(obj =>
 `<a class="gallery__item" href="${obj.largeImageURL}">
   <div class="photo-card">
    <div class="wrapper">
     <img src="${obj.webformatURL}" alt="${obj.tags}" loading="lazy" />
    </div>
     <div class="info">
       <p class="info-item">
         <b>❤ Likes: ${obj.likes}</b>
       </p>
       <p class="info-item">
         <b>👀Views: ${obj.views}</b>
       </p>
       <p class="info-item">
         <b>💬 Comments: ${obj.comments}</b>
       </p>
       <p class="info-item">
         <b> ⭳ Downloads: ${obj.downloads}</b>
       </p>
     </div>
  </div>
  </a>`).join('');
  
  galleryEl.insertAdjacentHTML('beforeend', markup);
  gallery.refresh();
   }
}

export {createMarkup, createMoreMarkup};