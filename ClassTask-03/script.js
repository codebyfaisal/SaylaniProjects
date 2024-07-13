const signUp = document.getElementById("sign-up");
const signIn = document.getElementById("sign-in");

signUp.addEventListener("click", function () {
    this.classList.toggle("none")
    signIn.classList.toggle("none")
    document.querySelector(".form-img").style.transform = "translateX(100%)"
    document.querySelector(".form").style.transform = "translateX(-100%)"
})

signIn.addEventListener("click", function () {
    this.classList.toggle("none")
    signUp.classList.toggle("none")
    document.querySelector(".form-img").style.transform = "translateX(0)"
    document.querySelector(".form").style.transform = "translateX(0)"
})
