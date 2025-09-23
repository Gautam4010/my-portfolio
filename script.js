const cards = document.querySelectorAll('.project-card');

cards.forEach(card => {
  const header = card.querySelector('.card-header');
  const wrapper = card.querySelector('.card-body-wrapper');
  const arrow = card.querySelector('.arrow');

  header.addEventListener('click', () => {
    // Close other cards
    cards.forEach(otherCard => {
      if(otherCard !== card) {
        const otherWrapper = otherCard.querySelector('.card-body-wrapper');
        const otherArrow = otherCard.querySelector('.arrow');
        otherWrapper.style.maxHeight = null;
        otherArrow.classList.remove('rotate');
      }
    });

    // Toggle current card
    if(wrapper.style.maxHeight){
      wrapper.style.maxHeight = null;
      arrow.classList.remove('rotate');
    } else {
      wrapper.style.maxHeight = wrapper.scrollHeight + "px";
      arrow.classList.add('rotate');
    }
  });
});

const form = document.getElementById('feedbackForm');
const thankYou = document.getElementById('thankYou');

form.addEventListener('submit', function(e){
  e.preventDefault(); 
  form.reset();
  thankYou.style.display = 'block';
  setTimeout(() => {
    thankYou.style.display = 'none';
  }, 4000);
});
