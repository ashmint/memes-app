let meme = document.getElementById("meme");
let title = document.getElementById("title");
let getMemeBtn = document.getElementById("get-meme-btn");
let saveMemeBtn = document.getElementById("save-meme-btn");
//API URL
let url = " https://meme-api.com/gimme/";
//Array of subreddits of your choice
let subreddits = ["catmemes", "wholesomemes", "dogmemes", "me_irl"];

//Function To Get Random Meme
let getMeme = () => {
  //Choose a random subreddit from the subreddits array
  let randomSubreddit =
    subreddits[Math.floor(Math.random() * subreddits.length)];
  //Fetch data from the api
  fetch(url + randomSubreddit)
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data)
      let memeImg = new Image();
      //Display meme image and title only after the image loads
      memeImg.onload = () => {
        meme.src = data.url;
        title.innerHTML = data.title;
      };
      memeImg.src = data.url;
    });
};

async function saveMeme(){
  try{
    const response = await fetch('/savememe', {
        method: 'post',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify({
            'meme': meme.src,
            'title': title.textContent,
        })
    })
    const data = await response.json()
    console.log(data)
    location.reload()
}catch(err){
    console.log(err)
}    
}

//Call the getMeme() on button click and on window load
getMemeBtn.addEventListener("click", getMeme);
saveMemeBtn.addEventListener("click", saveMeme)
window.addEventListener("load", getMeme);
