// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line
const galleryBox = document.querySelector('.gallery');
const items = creatGalleryItems(galleryItems);

galleryBox.insertAdjacentHTML('beforeend', items);
let gallery = new SimpleLightbox('.gallery a',
    { captionDelay: 250, captionsData: 'alt', captionPosition: 'bottom'});

    //new SimpleLightbox({elements: '.imageGallery1 a'});
function creatGalleryItems(items) {
    return items.map(({ preview, original, description }) => {
        return ` 
        <div class="gallery__item">       
            <a class="gallery__link" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}">
            </a>
        </div>`;
    }).join('');
};

