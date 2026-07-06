const images = [
    { src: 'images/Nature-11.jpg', alt: 'Misty forest', category: 'nature' },
    { src: 'images/Nature-12.jpg', alt: 'Sunlit trees', category: 'nature' },
    { src: 'images/Nature-13.jpg', alt: 'River in woods', category: 'nature' },
    { src: 'images/Architecture-11.jpg', alt: 'Modern glass building', category: 'architecture' },
    { src: 'images/Architecture-12.jpg', alt: 'Historic dome', category: 'architecture' },
    { src: 'images/Architecture-13.jpg', alt: 'Urban structure', category: 'architecture' },
    { src: 'images/food-11.jpg', alt: 'Fresh salad', category: 'food' },
    { src: 'images/food-12.jpg', alt: 'Dessert plate', category: 'food' },
    { src: 'images/food-13.jpg', alt: 'Gourmet meal', category: 'food' },
    { src: 'images/Travel-11.jpg', alt: 'Mountain village', category: 'travel' },
    { src: 'images/Travel-12.jpg', alt: 'Sunset beach', category: 'travel' },
    { src: 'images/Travel-13.jpg', alt: 'City skyline', category: 'travel' }
];

const gallery = document.getElementById('gallery');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const closeBtn = document.getElementById('closeBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const filterBtns = document.querySelectorAll('.filter-btn');

let currentIndex = 0;
let currentFilter = 'all';

function renderGallery(filter) {
    const filtered = filter === 'all'
        ? images
        : images.filter(img => img.category === filter);

    gallery.innerHTML = filtered.map((img, idx) => {
        const actualIndex = images.indexOf(img);
        const catLabel = img.category.charAt(0).toUpperCase() + img.category.slice(1);
        return `
            <div class="gallery-item" data-index="${actualIndex}">
                <img src="${img.src}" alt="${img.alt}" loading="lazy">
                <div class="overlay">
                    <span>${catLabel}</span>
                </div>
            </div>
        `;
    }).join('');

    document.querySelectorAll('.gallery-item').forEach(item => {
        item.addEventListener('click', () => {
            openLightbox(parseInt(item.dataset.index));
        });
    });
}

function openLightbox(index) {
    currentIndex = index;
    const img = images[index];
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
}

function changeImage(direction) {
    const filtered = currentFilter === 'all'
        ? images
        : images.filter(img => img.category === currentFilter);

    const currentFilteredIndex = filtered.indexOf(images[currentIndex]);
    let newFilteredIndex = currentFilteredIndex + direction;

    if (newFilteredIndex < 0) newFilteredIndex = filtered.length - 1;
    if (newFilteredIndex >= filtered.length) newFilteredIndex = 0;

    const newIndex = images.indexOf(filtered[newFilteredIndex]);
    openLightbox(newIndex);
}

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentFilter = btn.dataset.filter;
        renderGallery(currentFilter);
    });
});

closeBtn.addEventListener('click', closeLightbox);

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
});

prevBtn.addEventListener('click', () => changeImage(-1));
nextBtn.addEventListener('click', () => changeImage(1));

document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') changeImage(-1);
    if (e.key === 'ArrowRight') changeImage(1);
});

renderGallery('all');