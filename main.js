;(() => {
  const sliderContainer = document.querySelector('.testi-slider-container')
  const slides = sliderContainer.querySelectorAll('.testi-item')
  const prevBtn = document.querySelector('.testi-nav .prev')
  const nextBtn = document.querySelector('.testi-nav .next')
  let activeSlide = sliderContainer.querySelector('.testi-item.active')
  let slideIndex = Array.from(slides).indexOf(activeSlide)
  let slideWidth = sliderContainer.offsetWidth
  slider()
  slides.forEach((slide) => {
    slide.style.width = slideWidth + 'px'
    sliderContainer.style.width = slideWidth * slides.length + 'px'
  })

  nextBtn.addEventListener('click', function () {
    if (slideIndex == slides.length - 1) {
      slideIndex = 0
    } else {
      slideIndex++
    }
    slider()
  })

  prevBtn.addEventListener('click', function () {
    if (slideIndex == 0) {
      slideIndex = slides.length - 1
    } else {
      slideIndex--
    }
    slider()
  })

  function slider() {
    document.querySelector('.testi-item.active').classList.remove('active')
    slides[slideIndex].classList.add('active')
    sliderContainer.style.marginLeft = -(slideIndex * slideWidth) + 'px'
  }
})()
