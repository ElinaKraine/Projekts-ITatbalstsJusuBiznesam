const zils = document.querySelector("#zils")
const violets = document.querySelector("#violets")
const melns = document.querySelector("#melns")
const dzeltans = document.querySelector("#dzeltans")

document.documentElement.style.setProperty('--viss', localStorage.getItem('kraineViss') || ' ')
document.documentElement.style.setProperty('--tipaFooter', localStorage.getItem('kraineTipaF') || ' ')

violets.addEventListener('click', function(){
    document.documentElement.style.setProperty('--viss', '#902094');
    document.documentElement.style.setProperty('--tipaFooter', '#b752bb');
    
    localStorage.setItem('kraineViss', '#902094')
    localStorage.setItem('kraineTipaF', '#b752bb')
})

console.log(localStorage.getItem('kraineViss'))
console.log(localStorage.getItem('kraineTipaF'))

melns.addEventListener('click', function(){
    document.documentElement.style.setProperty('--viss', '#1b1b1b');
    document.documentElement.style.setProperty('--tipaFooter', '#5b5b5b');

    localStorage.setItem('kraineViss', '#1b1b1b')
    localStorage.setItem('kraineTipaF', '#5b5b5b')
})

dzeltans.addEventListener('click', function(){
    document.documentElement.style.setProperty('--viss', '#cabe11');
    document.documentElement.style.setProperty('--tipaFooter', '#dfd762');

    localStorage.setItem('kraineViss', '#cabe11')
    localStorage.setItem('kraineTipaF', '#dfd762')
})

zils.addEventListener('click', function(){
    document.documentElement.style.setProperty('--viss', '#04436e');
    document.documentElement.style.setProperty('--tipaFooter', '#2b73a3');

    localStorage.setItem('kraineViss', '#04436e')
    localStorage.setItem('kraineTipaF', '#2b73a3')
})




let slideIndex = 0;
showSlide(slideIndex);

function changeSlide(n) {
    showSlide((slideIndex += n));
}

function showSlide(n) {
    const slides = document.getElementsByClassName("slide");
    if (n >= slides.length) {
        slideIndex = 0;
    }
    if (n < 0) {
        slideIndex = slides.length - 1;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
}

function autoSlide() {
    changeSlide(1);
}

let slideInterval = setInterval(autoSlide, 5000);

const slideshowContainer = document.querySelector(".slideshow-container");
slideshowContainer.addEventListener("mouseover", () => {
    clearInterval(slideInterval);
});

slideshowContainer.addEventListener("mouseleave", () => {
    slideInterval = setInterval(autoSlide, 5000);
});





const scrollToTopButton = document.getElementById('scrollToTopButton');

window.addEventListener('scroll', function() {
    if (window.scrollY > 200) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});
