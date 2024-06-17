console.log("Nani Shree");

const bDate = "19 JULY 2024 12:00"


document.getElementById('end-Date').innerText = bDate;
const inputs = document.querySelectorAll('input')
const show = document.querySelector(".show-text")


const clock = () => {
   const end = new Date(bDate);
   const now = new Date()

   const diffrent = (end - now)/ 1000;
   
   if(diffrent< 0) return;
   //Converted into days
   inputs[0].value = Math.floor(diffrent / 3600/ 24);
   //Converted into Hours
   inputs[1].value = Math.floor(diffrent / 3600) % 24;
   //Converted into Minutes
   inputs[2].value = Math.floor(diffrent / 60) % 60;
   //Converted into Seconds
   inputs[3].value = Math.floor(diffrent) % 60;
   

   // Covert into days

}
clock()
 setInterval(() => {
  clock()
}, 1000);

// 1 Day = 24hrs; 1 Hour = 60min; 60 Minutes = 60sec;