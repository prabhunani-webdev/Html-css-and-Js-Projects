console.log("Shreya Shree");


let isdobOpen = false;
let dateofBirth;
const settingCog = document.querySelector('#setting-icon');
const settingContent = document.querySelector('#setting-content');
const initialText = document.querySelector('#initialText');
const afterDob = document.querySelector('#afterDob');
const dobButton = document.querySelector('#dob-button');
const dobInput = document.querySelector('#dobInput');

// Input Id

let yearsEl = document.querySelector('#years')
let monthEl = document.querySelector('#months')
let daysEl = document.querySelector('#days')
let hoursEl = document.querySelector('#hours')
let minutesEl = document.querySelector('#minutes')
let secondsEl = document.querySelector('#seconds')

const toggledob = () =>{
  
  if(isdobOpen){
    settingContent.classList.add('hide');
  }
  else{
    settingContent.classList.remove('hide');
  }
  isdobOpen = !isdobOpen;

  console.log("Toggle is open");

}

const updateAge = () =>{
  const currentDate = new Date();
  const dateDiff = currentDate - dateofBirth;
  let year = Math.floor(dateDiff / (1000 * 60 * 60 * 24 * 365));
  let month = Math.floor((dateDiff / (1000 * 60 * 60 * 24 * 30.44)) % 12);
  let day = Math.floor((dateDiff / (1000 * 60 * 60 * 24)) % 30.44);
  let hour = Math.floor((dateDiff / (1000 * 60 * 60)) % 24);
  let minute = Math.floor((dateDiff / (1000 * 60)) % 60);
  let second = Math.floor((dateDiff / 1000) % 60);
  
  if (day < 0) day += 30.44; // Approximate number of days in a month
  if (month < 0) month += 12; // 12 months in a year
  

  yearsEl.innerHTML = makeTwoDigitNum (year);
  monthEl.innerHTML =  (month);
  daysEl.innerHTML =  (day);
  hoursEl.innerHTML =  (hour);
  minutesEl.innerHTML =  (minute);
  secondsEl.innerHTML =  (second);

}

const makeTwoDigitNum = (number) =>{
  return number > 9 ? number : `0 ${number}`
}

const setDOBhadler = () => {
  const dateString = dobInput.value;

  dateofBirth = dateString ? new Date(dateString) : null;

  // const year = localStorage.getItem('year')
  // const month = localStorage.getItem('month')
  // const day = localStorage.getItem('date')
  // // const hour = localStorage.getItem('minute')
  // // const minute = localStorage.getItem('day')
  // // const second = localStorage.getItem('second')

  // if(year && month && day){
  //   dateofBirth = new Date(year,month,day)
  // }

  if(dateofBirth){
    
    localStorage.setItem('year', dateofBirth.getFullYear())
    localStorage.setItem('month', dateofBirth.getMonth())
    localStorage.setItem('date', dateofBirth.getDate())
    localStorage.setItem('hour', dateofBirth.getHours())
    localStorage.setItem('minute', dateofBirth.getMinutes())
    localStorage.setItem('second', dateofBirth.getSeconds())

    initialText.classList.add('hide')
    afterDob.classList.remove('hide')
    // updateAge()
    setInterval( () => updateAge(), 1000);
  }
  else{
    
    afterDob.classList.add('hide')
    initialText.classList.remove('hide')

  }
}
setDOBhadler()






settingCog.addEventListener('click', toggledob);

// settingCog.addEventListener('click', ()=>{
//   settingCog.classList.add('remove');
// });

dobButton.addEventListener('click', setDOBhadler);
