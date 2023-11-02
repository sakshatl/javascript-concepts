const fileInput = document.querySelector('#file-input');

async function uploadFileInChunks(file) {
  const CHUNK_SIZE = 5 * 1024 * 1024; // 5 MB (in bytes)
  const TOTAL_CHUNKS = Math.ceil(file.size / CHUNK_SIZE);
  
  let currentChunk = 0;

  function uploadNextChunk() {
    const start = currentChunk * CHUNK_SIZE;
    const end = Math.min(start + CHUNK_SIZE, file.size);
    const chunk = file.slice(start, end);

    const formData = new FormData();
    formData.append('chunk', chunk);
    formData.append('chunkNumber', currentChunk);
    formData.append('totalChunks', TOTAL_CHUNKS);

    // Make an HTTP request to upload the chunk
    fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'POST',
      body: formData,
    })
    .then((response) => {
      if(response.ok) {
        currentChunk++;
        if(currentChunk < TOTAL_CHUNKS) {
          uploadNextChunk();
        } else {
          console.log('File upload complete');
        }
      } else {
        console.error('Error uploading chunk');
      }
    })
    .catch((error) => {
      console.log('Error uploading chunk', error);
    })
  }

  // Start upload process by uploading first chunk
  uploadNextChunk();
}

function handleFileChange(e) {
  console.log(e);
  const selectedFile = e.target.files[0];
  if(selectedFile) {
    console.log('File selected', selectedFile);
    uploadFileInChunks(selectedFile);
  } else {
    console.log('No file selected');
  }
}

fileInput.addEventListener('change', handleFileChange);