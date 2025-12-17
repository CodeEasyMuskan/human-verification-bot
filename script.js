const emoji = document.getElementById("emoji");
const message = document.getElementById("message");
const inputBox = document.getElementById("text");
const button = document.querySelector("button");
const card = document.querySelector(".card"); // CARD ELEMENT

const happyWords = ["cute","nice","sweet","good","awesome","beautiful","lovely","amazing","Lovely idea","Good job"];
const badWords = ["fat","bad","ugly","stupid","hate","mad","mindless","lazy","hate","crazy","Useless","Annoying"];

function speak(text){
  const msg = new SpeechSynthesisUtterance(text);
  msg.lang = "en-US";
  msg.pitch = 1.2;
  msg.rate = 1;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(msg);
}

function checkText(){
  const input = inputBox.value.toLowerCase();

  // Animate card up on click
  card.classList.add("up");
  setTimeout(() => card.classList.remove("up"), 400);

  // Reset emoji classes
  emoji.classList.remove("glow","shake","fail","pop");

  // SUCCESS
  if(happyWords.some(word => input.includes(word))){
    emoji.textContent = "😊";
    emoji.classList.add("glow","pop");
    message.textContent = "Login successful ✅";
    speak("Login successful. You are human.");

    inputBox.disabled = true;
    button.disabled = true;
    button.textContent = "Verified";
  }
  // FAIL
  else if(badWords.some(word => input.includes(word))){
    emoji.textContent = "😒";
    emoji.classList.add("shake","fail","pop");
    message.textContent = "Verification failed ❌ Try again";
    speak("That was not nice. Try again.");
  }
  // NEUTRAL / ANY OTHER INPUT
  else{
    emoji.textContent = "😐";
    emoji.classList.add("pop");
    message.textContent = "Verification incomplete… say something nice 🙂";
    speak("Say something nicer.");
  }
}
