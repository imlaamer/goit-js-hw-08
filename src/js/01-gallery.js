import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryList = document.querySelector(".gallery");

let markup = "";
galleryItems.forEach(
  ({ preview, original, description }) =>
    (markup += `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img class="gallery__image" src="${preview}" alt="${description}" width="300" />
        </a>
      </li>`)
);
galleryList.innerHTML = markup;

const lightbox = new SimpleLightbox(".gallery a", {
  overlayOpacity: 0.98,
  captionsData: "alt",
  captionDelay: 250,
});
