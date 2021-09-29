const galleryArray = [
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg",
    description: "Hokkaido Flower",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
    description: "Container Haulage Freight",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",
    description: "Aerial Beach View",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
    description: "Flower Blooms",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
    description: "Alpine Mountains",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
    description: "Mountain Lake Sailing",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    description: "Alpine Spring Meadows",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    description: "Nature Landscape",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    description: "Lighthouse Coast Sea",
  },
];

// Refs

const galleryRef = document.querySelector(".js-gallery");
const lightbox = document.querySelector(".js-lightbox");
const lightboxImage = document.querySelector(".lightbox__image");

// Creation of gallery function

const galleryItemCreate = function (array, gallery) {
  
  array.forEach(photo => {
    const galleryItem = document.createElement("li");

    galleryItem.classList.add("gallery__item");

    const galleryItemLink = document.createElement("a");

    galleryItemLink.classList.add("gallery__link");

    const galleryItemImg = document.createElement("img");

    galleryItemImg.classList.add("gallery__image");

    galleryItemImg.src = photo.preview;

    galleryItemImg.dataset.source = photo.preview;

    
      galleryItemImg.alt = photo.description;
  

    galleryItemLink.appendChild(galleryItemImg);

    galleryItem.appendChild(galleryItemLink);

    gallery.appendChild(galleryItem);
  }) 
};

galleryItemCreate(galleryArray, galleryRef);

// Refs for modal

const allGalleryItems = document.querySelectorAll(".gallery__item");
const galleryImage = document.querySelectorAll(".gallery__image");
const closeBtn = document.querySelector(".lightbox__button");
const lightboxOverlay = document.querySelector(".lightbox__overlay");

// Modal function
  const previewPhotosArray = galleryArray.map(
    (arrayItem) => arrayItem.preview
  );

  const originalPhotosArray = galleryArray.map(
    (arrayItem) => arrayItem.original
  );

  const descriptionArray = galleryArray.map(
    (arrayItem) => arrayItem.description
  );

  galleryRef.addEventListener("click", function (event) {

    lightbox.classList.add("is-open");

    
    if (previewPhotosArray.includes(event.target.src)) {
      lightboxImage.src =
        originalPhotosArray[previewPhotosArray.indexOf(event.target.src)];
      lightboxImage.alt =
        descriptionArray[previewPhotosArray.indexOf(event.target.src)];
    }

    closeBtn.addEventListener("click", function () {
      lightbox.classList.remove("is-open");
      lightboxImage.src = "";
    });

    lightboxOverlay.addEventListener("click", function () {
      lightbox.classList.remove("is-open");
      lightboxImage.src = "";
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        lightbox.classList.remove("is-open");
        lightboxImage.src = "";
      }
    });
  });

