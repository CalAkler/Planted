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
  date = today.toLocaleDateString(undefined, options);

  // call printToPage function
  printToPage(date, name, comment);

  // clear user input
  form.reset();
});

const printToPage = (dateSubmitted, userName, userComment) => {
  const newComment = document.createElement('div');
  console.log(dateSubmitted, userName, userComment);
  newComment.innerHTML = `
    <div class="comment">
      <div class="commentImage"> 
      <img src="../assets/default-profile.png" alt="Default profile image.">
      </div>
      <div class="commentText">
        <h6></h6>
        <p></p>
      </div>
    </div>
  `;

  // add user text to new elements
  const newHeader = document.createElement('h6');
  newHeader.textContent = `${dateSubmitted} by ${userName}`;

  const newParagraph = document.createElement('p');
  newParagraph.textContent = `${userComment}`;

  // 
  const commentSection = document.querySelector('.commentSection');
  commentSection.appendChild(newHeader);
  commentSection.appendChild(newParagraph);



  // get comment section div from page and append new comment inside  
  const commentText = document.querySelector('.comment');
  commentText.appendChild(newComment);
  


}

