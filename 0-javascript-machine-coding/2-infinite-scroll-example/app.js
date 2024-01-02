const imageListContainer = document.querySelector('#image__list');

async function fetchImages() {
  try {
    const response = await fetch('https://source.unsplash.com/random/');
    return { url: response.url, error: null };
  } catch (err) {
    console.log(err);
    return { url: null, error: err.message };
  }
}

async function renderImages() {
  let imageCount = 5;
  
  for(let i = 0; i <= imageCount; i++) {
    const { url, error } = await fetchImages();
    if(url) {
      const img = document.createElement('img');
      img.src = url;
      img.alt = url;
      img.setAttribute('class', 'image__list--img')
      imageListContainer.appendChild(img);
    }
  }
}

// window.onscroll= () => {
//   const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

//   if(scrollTop + clientHeight + 1 >= scrollHeight) {
//     renderImages();
//     console.log('load more...')
//   }
// }


renderImages();
