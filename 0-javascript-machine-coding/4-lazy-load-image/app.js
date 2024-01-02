function loadImages() {
  let imageElements = document.querySelectorAll('img');
  console.log(imageElements);
  Array.from(imageElements).forEach((image) => {
    function handleImageLoad() {
      console.log('loaded');
      image.classList.add('loaded');
    }

    if(image.complete) {
      handleImageLoad();
    } else {
      image.addEventListener('load', handleImageLoad)
    }
  })
}

loadImages();