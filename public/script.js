const imageUrl = 'https://source.unsplash.com/random/300x300?';
const swipeCard = document.querySelector('.swipe-card');
const swipeCardImage = swipeCard.querySelector('.swipe-card__image');
const shuffleButton = swipeCard.querySelector('button');

async function shuffleImages() {
  try {
    const response = await fetch(imageUrl);
    const redirectedUrl = response.url;
    swipeCardImage.style.backgroundImage = `url(${redirectedUrl})`;
  } catch (error) {
    console.error(error);
  }
}

shuffleImages();
shuffleButton.addEventListener('click', () => {
  swipeCardImage.classList.add('animate-shuffle');
  setTimeout(() => {
    swipeCardImage.classList.remove('animate-shuffle');
    shuffleImages();
  }, 500);
});
