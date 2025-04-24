const form = document.querySelector('form')


form.addEventListener("submit", (e) => {
    e.preventDefault()

    const fullName = document.querySelector("#fullname").value
    const Email = document.querySelector("#email").value
    const Pan = document.querySelector("#pan").value
    const loanAmount = document.querySelector("#loan-amount").value
    const loanTime = document.querySelector("#loan-time").value

    const otp = Math.floor(1000 + Math.random() * 9000)


    sessionStorage.setItem('bank_otp', otp);
    sessionStorage.setItem('fullname', fullName);
    sessionStorage.setItem('email', Email);



    alert(`Your OTP is ${otp}`)
    window.location.href = 'page.html'

})

const loanAmount = document.querySelector("#loan-amount")
const loanTime = document.querySelector("#loan-time")
const calculateBtn = document.querySelector('button[type="button"]')
const EmiValue = document.querySelector('#emi-display')

calculateBtn.addEventListener("click", (e) => {
    const P = parseFloat(loanAmount.value) //Loan Amount
    const N = parseFloat(loanTime.value) * 12 // Loan Time in months
    const AnnualRate = 10; // annual rate in %
    const R = AnnualRate / 12 / 100 // Monthly interest 

    if (isNaN(P) || isNaN(N) || P <= 0 || N <= 0) {
        EmiValue.textContent = "Please enter valid loan amount and tenure.";
        EmiValue.style.color = "red";
        return;
    }

    //EMI = P*R*(1+R)^n/(1+R)^n-1

    const EMI = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1)

    const EMI_Rounded = Math.round(EMI)

    EmiValue.textContent = `Estimated EMI : ₹${EMI_Rounded} /Months`
    EmiValue.style.color = 'green'
})