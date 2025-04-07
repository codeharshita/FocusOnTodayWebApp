const firstInputfield = document.getElementById("text-box-1");
const secondInputfield = document.getElementById("text-box-2");
const thirdInputfield = document.getElementById("text-box-3");
const selectCheckBox1 = document.getElementById("checkbox-1");
const selectCheckBox2 = document.getElementById("checkbox-2");
const selectCheckBox3 = document.getElementById("checkbox-3");
const errorMessage = document.querySelector(".mandatory-text");
const trackProgressValue = document.querySelector(".progress-bar-value");
const tasKstatus = document.getElementById("status");
const selectAllClass = document.getElementsByClassName("task-rect");
const resetBtn = document.getElementById("resetButton");
const congratulateGif = document.getElementsByClassName("hurray");

// const res = [...congratulateGif];
// const getImg = res[0].children[0];
// console.log(getImg);

errorMessage.style.visibility = "hidden";

const classOutput = [...selectAllClass];


classOutput.forEach((item) => {
  item.addEventListener("click", () => {
    const checkbox = item.children[0]; 
    const input = item.children[1]; 

    if (input.value) {
      if (checkbox.src.includes("tickImg.png")) {
        checkbox.src = "./images/Ellipse1.png";
        input.style.color = "";
        input.style.textDecoration = "";
      } else {
        checkbox.src = "./images/tickImg.png";
        input.style.color = "#4caf50";
        input.style.textDecoration = "line-through";
      }

      checkAllTasksCompleted();
      progressBarStatus();
    } else {
      checkbox.src = "./images/Ellipse1.png";
    }
  });
});

resetBtn.addEventListener('click', ()=>{
  classOutput.forEach((item) => {
    const checkbox = item.children[0];
    const input = item.children[1];
    checkbox.src = "./images/Ellipse1.png";
    input.value = "";
    input.style.color = "";
    input.style.textDecoration = "";
    trackProgressValue.style.width = "0%";
    trackProgressValue.style.height = "30px";
    trackProgressValue.style.background = "#48A3001A";
    tasKstatus.innerText = "";
  }
)
})


function checkAllTasksCompleted() {
  if (
    selectCheckBox1.src.includes("tickImg.png") &&
    selectCheckBox2.src.includes("tickImg.png") &&
    selectCheckBox3.src.includes("tickImg.png")
  ) {
    console.log("All tasks are done.");
    errorMessage.style.visibility = "hidden";
    getImg.src = "./images/congratulations.gif";
    getImg.width="100%";
   
    
  } else {
    errorMessage.style.visibility = "visible";
  }
}

function progressBarStatus() {
  let tickedCount = 0;

  if (selectCheckBox1.src.includes("tickImg.png")) {
    tickedCount++;
  }
  if (selectCheckBox2.src.includes("tickImg.png")) {
    tickedCount++;
  }
  if (selectCheckBox3.src.includes("tickImg.png")) {
    tickedCount++;
  }

  if (tickedCount === 3) {
    trackProgressValue.style.background = "#4CAF50";
    trackProgressValue.style.width = "100%";
    trackProgressValue.style.height = "30px";
    tasKstatus.innerText = "3/3";
  } else if (tickedCount === 2) {
    trackProgressValue.style.background = "#4CAF50";
    trackProgressValue.style.width = "50%";
    trackProgressValue.style.height = "30px";
     tasKstatus.innerText = "2/3";
  } else if (tickedCount === 1) {
    trackProgressValue.style.background = "#4CAF50";
    trackProgressValue.style.width = "25%";
    trackProgressValue.style.height = "30px";
     tasKstatus.innerText = "1/3";
  } else {
    trackProgressValue.style.width = "0%";
    trackProgressValue.style.height = "30px";
  }
}


