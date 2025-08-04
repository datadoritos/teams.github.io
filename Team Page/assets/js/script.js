// Start Navbar
const toggleBtn = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');

toggleBtn.addEventListener('click', () => {
   navLinks.classList.toggle('show');
});

// End Navbar


// Start Hero Banner 


let index = 0;
const bgSlides = document.querySelectorAll('.bg-slide');
const textSlides = document.querySelectorAll('.text-slide');
const imgSlides = document.querySelectorAll('.hero-image img');

function showSlide(i) {
   bgSlides.forEach(slide => slide.classList.remove('active'));
   textSlides.forEach(slide => slide.classList.remove('active'));
   imgSlides.forEach(slide => slide.classList.remove('active'));

   bgSlides[i].classList.add('active');
   textSlides[i].classList.add('active');
   imgSlides[i].classList.add('active');
}

function startCarousel() {
   showSlide(index);
   index = (index + 1) % bgSlides.length;
}

showSlide(0);
setInterval(startCarousel, 5000); // slowed down for smoother loop


// End Hero Banner


// Start Team Grid

// Filtering
const filterButtons = document.querySelectorAll('.filter-btn');
const teamCards = document.querySelectorAll('.team-card');

filterButtons.forEach(button => {
   button.addEventListener('click', () => {
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      const role = button.getAttribute('data-role');

      teamCards.forEach(card => {
         if (role === 'all' || card.getAttribute('data-role') === role) {
            card.style.display = 'block';
         } else {
            card.style.display = 'none';
         }
      });
   });
});

// Modal
function openModal(card) {
   const name = card.querySelector('h3').textContent;
   const role = card.querySelector('.role').textContent;
   const imgSrc = card.querySelector('img').src;
   const desc = card.querySelector('.overlay p').textContent;

   const modalContent = `
    <img src="${imgSrc}" alt="${name}" style="width: 100%; border-radius: 12px; margin-bottom: 20px;">
    <h2 style="color:#FF5101;">${name}</h2>
    <p><strong>${role}</strong></p>
    <p style="margin-top: 15px;">${desc}</p>
  `;

   document.getElementById('modal-details').innerHTML = modalContent;
   document.getElementById('team-modal').style.display = 'block';
}

function closeModal() {
   document.getElementById('team-modal').style.display = 'none';
}


// End Team Grid