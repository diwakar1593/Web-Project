const btn = document.getElementById("submit")
let value2 = document.getElementById("temp2")

btn.addEventListener("click", () => {
    let value1 = Number(document.getElementById("temp1").value)
    let option1 = document.getElementById("option1").value
    let option2 = document.getElementById("option2").value

    if (option1 === 'cel' && option2 === 'fah') {
        value2.value = (value1 * 9 / 5) + 32;
    } else if (option1 === 'fah' && option2 === 'cel') {
        value2.value = (value1 - 32) * 5 / 9;
    } else if (option1 === 'cel' && option2 === 'kel') {
        value2.value = value1 + 273;
    } else if (option1 === 'kel' && option2 === 'cel') {
        value2.value = value1 - 273;
    } else if (option1 === 'fah' && option2 === 'kel') {
        value2.value = (value1 - 32) * 5 / 9 + 273;
    } else if (option1 === 'kel' && option2 === 'fah') {
        value2.value = (value1 - 273) * 9 / 5 + 32;
    }
})

let crntyear = new Date().getFullYear()
let nextyear = crntyear + 1

document.getElementById("crntyear").innerHTML = crntyear + " - " + nextyear