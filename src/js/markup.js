import Notiflix from 'notiflix';


function createMarkup (obj){
  const gallery = document.querySelector('.gallery');

  const images = obj.data.hits;

  if (images.length === 0) {
    Notiflix.Notify.failure("Sorry, there are no images matching your search query. Please try again.");
  }
else {
  const markup = images.map(obj =>
 `<div class="photo-card">
    <div class="wrapper">
     <img src="${obj.webformatURL}" alt="${obj.tags}" loading="lazy" />
    </div>
     <div class="info">
       <p class="info-item">
         <b>Likes: ${obj.likes}</b>
       </p>
       <p class="info-item">
         <b>Views: ${obj.views}</b>
       </p>
       <p class="info-item">
         <b>Comments: ${obj.comments}</b>
       </p>
       <p class="info-item">
         <b>Downloads: ${obj.downloads}</b>
       </p>
     </div>
  </div>`).join('');
  
  gallery.insertAdjacentHTML('beforeend', markup);

   }
}

export {createMarkup};