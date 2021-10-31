// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

console.log(galleryItems);

const divGalleryEl = document.querySelector('.gallery')

function galleryMarkup() {
       return galleryItems.map(( {preview, original, description} ) => {
        return `<li><a class="gallery__item" href=${original}>
        <img class="gallery__image" loading="lazy" src=${preview} alt=${description} title=${description}/>
      </a></li>`
    }).join('')
}


divGalleryEl.insertAdjacentHTML('beforeend', galleryMarkup(galleryItems))

let gallery = new SimpleLightbox('.gallery a', { captionDelay: 250 });
gallery.on('show.simplelightbox', function () {})