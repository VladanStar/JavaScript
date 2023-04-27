function pokreniMe(dugme){
let nazivDugmeta = dugme.innerText;
// let klasaDugmeta = dugme.classList.value;
let klasaDugmeta = dugme.className;
    let message = document.querySelector('#kliknuto_dugme')
    message.innerText = "Pozdrav";
console.log(klasaDugmeta)
    console.log(this)

    // this je prenela celu funkciju
}