import {fetchPictures} from "./fetch";
import {createMarkup} from './markup';

import Notiflix from 'notiflix';
import debounce from "lodash.debounce";
import SimpleLightbox from "simplelightbox";

const form = document.querySelector('#search-form');
const loadMoreBtn = document.querySelector('.load-more');

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
    evt.preventDefault();
    fetchPictures(formData).then(obj => {
        createMarkup(obj)
        loadMoreBtn.hidden = false;
    }).catch(error => console.log(error));

}

function onLoadMore () {
    page += 1;
    fetchPictures(formData, page).then(obj => {
        createMarkup(obj);
        if (page*40 >= obj.data.totalHits){
            loadMoreBtn.hidden = true;
        }
    }).catch(error => console.log(error));
}