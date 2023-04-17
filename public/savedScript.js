let meme = document.getElementById("meme");
let title = document.getElementById("title");
let nextMemeBtn = document.getElementById("next-meme-btn");
let previousMemeBtn = document.getElementById("previous-meme-btn");
let counter = 0;


if(parsed_data.length == 0){
  title.textContent = " No saved memes found";
  meme.remove();
  nextMemeBtn.remove();
}

else{
  
  //Function To Get Random Meme
  let getMeme = () => {
        if (counter >= parsed_data.length){
          counter = 0;
        }
        console.log(counter)
        console.log(parsed_data.length)
          meme.src = parsed_data[counter].memeUrl;
          title.innerHTML = parsed_data[counter].memeDesc;

      

        
        
          counter++;
        

        console.log(counter)
      };

  window.addEventListener("load", getMeme);    
  //Call the getMeme() on button click and on window load
  nextMemeBtn.addEventListener("click", getMeme);

 

}