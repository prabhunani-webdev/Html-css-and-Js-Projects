console.log("Shreya Shree");

const colorCode = document.getElementById('color-code')

const getColor = () =>{
  const randomNumber =Math.floor( Math.random() * 16777215);
  const randomCode = "#" + randomNumber.toString(16);
  colorCode.innerHTML = randomCode
  document.body.style.backgroundColor = randomCode;

  navigator.clipboard.writeText(randomCode)
}
document.getElementById('btn').addEventListener(
  'click',
  getColor
)

getColor()