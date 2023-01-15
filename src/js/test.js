import {fetchPictures} from "./fetch";
import {createMarkup} from './markup';

// import Notiflix from 'notiflix';
import debounce from "lodash.debounce";
// import SimpleLightbox from "simplelightbox";

const form = document.querySelector('#search-form');
const searchBtn = form.querySelector('.search-btn');

const DEBOUNCE_DELAY = 300;
let formData;

form.addEventListener('input', debounce(onInput, DEBOUNCE_DELAY));
form.addEventListener('submit', onFormSubmit);

function onInput(evt) {
    formData = evt.target.value;
}

function onFormSubmit (evt){
    evt.preventDefault();
    fetchPictures(formData).then(obj => {createMarkup(obj)}).catch(error => console.log(error));
}

