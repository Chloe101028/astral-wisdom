// --------------------
// 記事スライダー
// --------------------

document.querySelectorAll(".slider").forEach(slider => {

    const slides = slider.querySelectorAll(".slide");
    const nextButton = slider.querySelector(".next");
    const prevButton = slider.querySelector(".prev");

    let startIndex = 0;
    const visibleCount = 3;

function updateSlides() {

    const parent = slides[0].parentNode;

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (let i = 0; i < visibleCount; i++) {

        const index = (startIndex + i) % slides.length;

        slides[index].style.display = "block";
        parent.appendChild(slides[index]);
    }
}

    nextButton.addEventListener("click", () => {

        startIndex++;

        if (startIndex >= slides.length) {
            startIndex = 0;
        }

        updateSlides();
    });

    prevButton.addEventListener("click", () => {

        startIndex--;

        if (startIndex < 0) {
            startIndex = slides.length - 1;
        }

        updateSlides();
    });

    updateSlides();
});


// --------------------
// 画像スライダー
// --------------------

const imageLinks = document.querySelectorAll(".images a");
const images = document.querySelectorAll(".image");
const galleryNext = document.querySelector(".gallery-next");
const galleryPrev = document.querySelector(".gallery-prev");

if (images.length > 0 && galleryNext && galleryPrev) {

    let imageIndex = 0;
    const imageVisibleCount = 3;

function updateImages() {

    imageLinks.forEach(link => {
    link.style.display = "none";
});

for (let i = 0; i < Math.min(imageVisibleCount, imageLinks.length); i++) {

    const index = (imageIndex + i) % imageLinks.length;

    imageLinks[index].style.display = "flex";
    imageLinks[index].style.order = i;
}
}

    galleryNext.addEventListener("click", () => {

        imageIndex = (imageIndex + 1) % images.length;
        updateImages();
    });

    galleryPrev.addEventListener("click", () => {

        imageIndex = (imageIndex - 1 + images.length) % images.length;
        updateImages();
    });

    updateImages();
}

function copyGuid(guid){

    navigator.clipboard.writeText(guid);

    const button = event.currentTarget;

    const original = button.textContent;

    button.textContent = "コピーしました！";

    setTimeout(() => {
        button.textContent = original;
    }, 1500);
}


/* ---------------- */
/* サブメニュー */
/* ---------------- */

document.querySelectorAll("details").forEach((details, index) => {

    const key = "menu-state-" + index;

    const state = localStorage.getItem(key);

    if (state === "open") {
        details.open = true;
    }

    if (state === "closed") {
        details.open = false;
    }

    details.addEventListener("toggle", () => {
        localStorage.setItem(
            key,
            details.open ? "open" : "closed"
        );
    });
});