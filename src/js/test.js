import {fetchPictures, loadMore} from "./fetch";
import {createMarkup, createMoreMarkup} from './markup';

import Notiflix from 'notiflix';
import debounce from "lodash.debounce";
import SimpleLightbox from "simplelightbox";

const form = document.querySelector('#search-form');
const loadMoreBtn = document.querySelector('.load-more');
const img = document.querySelector('.img');

const DEBOUNCE_DELAY = 300;
let formData;
let page = 1;

form.addEventListener('input', debounce(onInput, DEBOUNCE_DELAY));
form.addEventListener('submit', onFormSubmit);
loadMoreBtn.addEventListener('click', onLoadMore);

function onInput(evt) {
    formData = evt.target.value;
}

function onFormSubmit (evt){
    loadMoreBtn.hidden = true;
    img.hidden = true;
    evt.preventDefault();
    fetchPictures(formData).then(obj => {
        createMarkup(obj)
        loadMoreBtn.hidden = false;
    }).catch(error => console.log(error));
    page = 1;
}

function onLoadMore () {
    page += 1;
    loadMore(formData, page).then(obj => {
        createMoreMarkup(obj);
        if (page*40 >= obj.data.totalHits){
            loadMoreBtn.hidden = true;
            Notiflix.Notify.info("We're sorry, but you've reached the end of search results.");
        }
    }).catch(error => console.log(error));
}