let currentIndex = 2;  

document.addEventListener('DOMContentLoaded', () => {
    showCountry('england');  
});

function showCountry(countryId) {
    const items = document.querySelectorAll('.carousel-item');
     items.forEach((item, index) => {
        item.classList.remove('active');
        if (item.id === countryId) {
            currentIndex = index;
         }
    });

    updateCarousel();
}

function updateCarousel() {
    const items = document.querySelectorAll('.carousel-item');
    const itemCount = items.length;

    items.forEach((item, index) => {
           item.classList.remove('active');
    });

    
     currentIndex = (currentIndex + itemCount) % itemCount;

    items[currentIndex].classList.add('active');
 
    const carouselInner = document.querySelector('.carousel-inner');
    const itemWidth = 20;  
    const offset = (2 - currentIndex)* itemWidth;  
    carouselInner.style.transform = `translateX(${offset}%)`;
} 