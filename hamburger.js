

let ham = document.getElementById("hamMenu");

const goToHam = () => {
    ham.style.display = `flex`;
    ham.style.left = 0;
}

const backToHome = () => {
    ham.style.left = `100%`;
    ham.style.display = `hidden`;
}