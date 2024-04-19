var shareImageButton = document.querySelector('#share-image-button');
var createPostArea = document.querySelector('#create-post');
var closeCreatePostModalButton = document.querySelector('#close-create-post-modal-btn');

function openCreatePostModal() {
  createPostArea.style.display = 'block';
  console.log("inside")
  if (defferedPrompt) {
    defferedPrompt.prompt();
    console.log(defferedPrompt)
    defferedPrompt.userChoise.then(function (choice) {
      console.log(choice.outcome);
      if (choice.outcome === "dismissed") {
        console.log("user cancelled installation")
      } else {
        console.log("user added to homescreen")
      }
    });
    defferedPrompt = null;
  }
}

function closeCreatePostModal() {
  createPostArea.style.display = 'none';
}

shareImageButton.addEventListener('click', openCreatePostModal);

closeCreatePostModalButton.addEventListener('click', closeCreatePostModal);
