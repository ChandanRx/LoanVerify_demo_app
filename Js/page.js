const validation_button = document.querySelector('button[type="submit"]')
const otp_input = document.querySelector('#otp')
const successMsg = document.querySelector('strong')
const userName = document.querySelector("#userName")
const email = document.querySelector("#email")

const storedName = sessionStorage.getItem('fullname')
const storedEmail = sessionStorage.getItem('email')

userName.innerHTML = storedName
email.innerHTML = storedEmail

validation_button.addEventListener("click", (e) => {
    const enteredOTP = otp_input.value.trim()
    const storedOTP = sessionStorage.getItem('bank_otp')


    if (enteredOTP === storedOTP) {
        successMsg.textContent = "VALIDATION SUCCESSFUL ✅";
        successMsg.style.color = "green";
    } else {
        successMsg.textContent = "INVALID OTP ❌";
        successMsg.style.color = "red";
    }
})


