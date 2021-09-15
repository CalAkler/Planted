// The styles of the appended comment got messed up somewhere along the way. I'm going to leave it for now though, since the actual JS is working fine. 

// listen for user submitting form
  // - grab user comment input and name, date submitted, then add them to the page

const form = document.querySelector('.commentForm');


form.addEventListener('submit', (e) => {
  e.preventDefault();
  // get comment
  const commentInput = document.querySelector('#userComment');
  const comment = commentInput.value;

  // get name
  const nameInput = document.querySelector('#userName');
  const name = nameInput.value;

  // get date
  const today = new Date;
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const date = today.toLocaleDateString(undefined, options);

  // call printToPage function
  printToPage(date, name, comment);

  // clear user input
  form.reset();
});

const printToPage = (dateSubmitted, userName, userComment) => {
  const newComment = document.createElement('div');
  newComment.innerHTML = `
    <article class="comment">
      <div class="commentImage"> 
        <img src="../assets/default-profile.png" alt="Default profile image.">
      </div>
    </article>
  `;

  // add user text to new elements
  const newHeader = document.createElement('h6');
  newHeader.textContent = `${dateSubmitted} by ${userName}`;

  const newParagraph = document.createElement('p');
  newParagraph.textContent = `${userComment}`;

  // append user text to newComment element
  const commentText = document.querySelector('.commentText');
  newComment.appendChild(newHeader);
  newComment.appendChild(newParagraph);
  

  
  
  // get comment section article from page and append new comment inside  
  const commentSection = document.querySelector('.commentSection');
  commentSection.appendChild(newComment);
}

