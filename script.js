const productData = {};

document.querySelectorAll('.buy-button').forEach(button => {
    button.addEventListener('click', function() {
        const product = this.closest('.product');
        const name = product.getAttribute('data-name');
        const price = product.getAttribute('data-price');
        productData[name] = { name, price };
        alert(`Produk ${name} dengan harga Rp ${price} telah ditambahkan.`);
        localStorage.setItem('productData', JSON.stringify(productData));
    });
});

document.getElementById('go-to-hasil').addEventListener('click', function() {
    window.location.href = 'beli.html';
});

let slideIndex = 0;
showSlides();

function changeSlide(n) {
  showSlides(slideIndex += n);
}

function showSlides() {
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slideIndex = (slideIndex + slides.length) % slides.length;
  slides[slideIndex].style.display = "block"; 
  dots[slideIndex].className += " active";
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}

// Add dots dynamically based on the number of slides
const dotsContainer = document.querySelector(".dots-container");
const slides = document.querySelectorAll(".slide");
for (let i = 0; i < slides.length; i++) {
  let dot = document.createElement("span");
  dot.className = "dot";
  dot.onclick = () => changeSlide(i - slideIndex);
  dotsContainer.appendChild(dot);
}