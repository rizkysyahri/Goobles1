const button = document.querySelector("button");
const inputHexa = document.getElementById("inputHexa");

button.addEventListener("click",  ubahLatar)

function ubahLatar() {
    const targetObject = document.getElementById("targetObject")
    targetObject.style.backgroundColor = inputHexa.value
}
 

// versi mang dea

// const targetObject = document.getElementById("targetObject")
// const inputHexa = document.getElementById("inputHexa");


// const ubahLatar = () => {
    
//     targetObject.style.backgroundColor = inputHexa.value
// }
