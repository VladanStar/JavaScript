// window.alert("Pozdrav");
// document.write("Pozdrav");
// console.l

// or("Vladan Cupric")
// console.error('Error');
// console.warn("Error Warn")

function inflationCalculator() {
    let stopaInflacije = document.querySelector("#inflationRate").value;
    console.log(stopaInflacije);
    let money = document.querySelector("#money").value;
  
    let sabiranje = parseInt(stopaInflacije) + parseInt(money);
    console.log(sabiranje);
  
    let years = document.querySelector('#years').value;
    years = parseFloat(years);
  
    let worth = parseFloat(money);
    console.log(worth);
    for(let i = 0; i<years;i++){
      worth += worth*(stopaInflacije/100);
    }
    worth = parseFloat(worth.toFixed(2));
    console.log(worth);
  
    let newElement = document.createElement('div');
    newElement.className = 'new-value';
    newElement.innerText = `Današnjih ${money} evra vredi isto kao i ${worth} evra za ${years} godina.`;
    document.querySelector('.container').appendChild(newElement);
  }
  
