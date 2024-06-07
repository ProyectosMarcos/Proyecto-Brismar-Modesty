const d = document;
export default function slider() {
  const prevBtn = d.querySelector('.slider__btns .prev'),
    nextBtn = d.querySelector('.slider__btns .next'),
    sliders = d.querySelectorAll('.slider__slide');

  let i = 0;

  d.addEventListener('click', (e) => {
    if (e.target === prevBtn) {
      e.preventDefault();
      sliders[i].classList.remove('active');
      i--;
    }

    if (i < 0) {
      i = sliders.length - 1;
    }
    sliders[i].classList.add('active');
    if (e.target === nextBtn) {
      e.preventDefault();
      sliders[i].classList.remove('active');
      i++;
    }
    if (i >= sliders.length) {
      i = 0;
    }
    sliders[i].classList.add('active');
  });
}
