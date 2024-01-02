
// Constants and Global Variables
const LIMIT = 5;

// DOM Elements
const app = document.getElementById('app');
const postContainerElement = document.getElementById('post-container');

// API Calls and Services
async function fetchPosts() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    return { data, error: null };
  } catch (err) {
    return { data: null, error: err.message };
  }
};

// Rendering DOM Elements
(
  async function renderPaginationUI() {
    const { data, error } = await fetchPosts();
    
    // Render Posts
    function renderPosts(startIndex = 0, endIndex = LIMIT) {
      postContainerElement.innerHTML = null;
      if(data && data.length > 0) {
        for (let post of data.slice(startIndex, endIndex)) {
          const postCard = document.createElement('div');
          postCard.innerHTML = `
            <div>
              <h3>${post.id} - ${post.title}</h3>
              <p>${post.body}</p>
            </div>
          `;
          postContainerElement.append(postCard);
        }
      }
    }

    // Render Buttons
    function renderButtons() {
      const buttonsContainer = document.createElement('div');

      if(data && data.length > 0) {
        const count = Math.ceil(data.length / LIMIT); // logic for button count
        for(i = 1; i <= count; i++) {
          let button = document.createElement('button');
          button.innerText = i;
          button.setAttribute("id", `button-${i}`);
          button.addEventListener('click', handleButtonClick);
          buttonsContainer.appendChild(button);
        }
      }
    
      app.append(buttonsContainer);
    }

    // Event handlers
    function handleButtonClick(e) {
      const pageNumber = Number(e.target.innerText);
      const startIndex = (pageNumber - 1) * LIMIT;
      const endIndex = startIndex + LIMIT

      renderPosts(startIndex, endIndex);
    }

    // Call the render functions that need to show up on first load
    renderPosts();
    renderButtons();
  }
)();


