// window.alert("Pozdrav");
// document.write("Pozdrav");
// console.l

// or("Vladan Cupric")
// console.error('Error');
// console.warn("Error Warn")

function inflationCalculator() {

  let stopaInflacije= document.querySelector('#inflationRate').value
  console.log("stopaInflacije");
  let money = document.querySelector('#money').value;

  let sabiranje = stopaInflacije+ money;
  console.log(sabiranje)
}
