import { toastify } from "./toastify.js"
const myHeaders = {
    "Content-Type": "application/json",
};

const ul = document.querySelector(".products-ul");
async function renderProducts() {
    ul.innerHTML = ""

    const loja = "loja"
}

async function comprar() {
    const inputEmail = document.querySelector("#input-email")
    const inputPassword = document.querySelector("#input-password")
    const user = {
        email: inputEmail.value,
        password: inputPassword.value
    }
    const bodyJson = JSON.stringify(user)
    const res = await fetch(
        "http://localhost:3001/login",
        {

            headers: myHeaders,
            method: "POST",
            body: bodyJson
        }
    )
    if (res.status == 200) {
        const resJson = await res.json()
        toastify("Ok, login efetuado com sucesso!", "ok")
        localStorage.setItem("@token-exemplo", resJson.accessToken)
        localStorage.setItem("@user-exemplo", JSON.stringify(resJson.user))
        setTimeout(() => {
            window.location.href = "./home"
        }, 3000)
    } else {
        toastify("Email ou senha incorretos", "error")
    }
}

const form = document.querySelector("form")
form.addEventListener("submit", (event) => {
    event.preventDefault()
    comprar()
})