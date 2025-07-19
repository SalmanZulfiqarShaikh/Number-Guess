document.addEventListener("DOMContentLoaded", ()=>{

   const submitButton = document.getElementById("submit-btn");
   const form = document.querySelector(".form");
   const userInput    = document.getElementById("userInput");
   let ComputerMove = Math.floor(Math.random() *10)+1;  // let coz we will regreneate number on reset
   const result = document.getElementById("Result");
   const reset = document.getElementById("reset-button");


   reset.style.display = "none"  //reset option will show only upon some action

  //result is hidden
   result.classList.add("hidden");
   const warningText = document.createElement("span");
   warningText.style.color = "red";
   warningText.textContent = "❌ Please enter a number between 1 and 10.";
   warningText.style.fontWeight = "bold";
   warningText.style.display = "none";
   form.appendChild(warningText);

   submitButton.addEventListener("click",(e)=>{
      e.preventDefault(); // submit buttons reloads page on default

      const value = parseInt(userInput.value);


      if (isNaN(value) || value < 1 || value > 10) {
        warningText.style.display = "block";
        userInput.disabled = true;
        submitButton.style.display = "none"
        reset.style.display = "block";
      } else {
        warningText.style.display = "none";
      

      if (value > ComputerMove) {
        result.classList.remove("hidden");
        result.classList.add("show");
        userInput.disabled = true;
        result.innerHTML =`Your Number is too big😵‍💫 <br> The computer number was😁  ${ComputerMove}`;
       submitButton.style.display = "none";
      } else if (value < ComputerMove) {
        result.classList.remove("hidden");
        result.classList.add("show");userInput.disabled = true;
        result.innerHTML =`Your Number is too small😕 <br> The computer number was😁  ${ComputerMove}`;
        submitButton.style.display = "none";
      } else if (value == ComputerMove) {
        result.classList.remove("hidden");
        result.classList.add("show");
        userInput.disabled = true;
        result.innerHTML = "🎉 Yay! You guessed the number!";
        submitButton.style.display = "none";
      }
      reset.style.display = "block";  // show reset button only if user has a result
      }
   })

    reset.addEventListener("click",()=>{
        userInput.value = "";
userInput.disabled = false;
submitButton.style.display = "inline-block";
reset.style.display = "none";
result.classList.add("hidden");
result.classList.remove("show");
warningText.style.display = "none";

// Regenerate new number
ComputerMove = Math.floor(Math.random() * 10) + 1;
 // to load everything from scratch
    })

})