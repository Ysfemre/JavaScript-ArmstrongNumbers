function CheckArmstrong() {
    let EnteredNumber = document.getElementById('inputArmstrong').value;

    let Total = 0;
    for (let i = 0; i < EnteredNumber.length; i++) {
        let x = Number(EnteredNumber[i]);
        Total += x * x * x;
    }

    if(EnteredNumber === ""){
        document.getElementById('CheckResult').innerHTML = `Please Enter a Number`;
        setTimeout(() => {
            document.getElementById('CheckResult').innerHTML = "";
        }, 500)
    }

    else if (Total === Number(EnteredNumber)) {
        document.getElementById('CheckResult').innerHTML = `${EnteredNumber} is a Armstrong Number...`;
        document.getElementById('CheckResult').style.color = "#0fb900ff";
        setTimeout(() => {
            document.getElementById('CheckResult').innerHTML = "";
            document.getElementById('CheckResult').style.color = "#000000ff";
        }, 1200)
    }
    
    else {
        document.getElementById('CheckResult').innerHTML = `${EnteredNumber} is NOT a Armstrong Number...`;
        document.getElementById('CheckResult').style.color = "#d90000ff";
        setTimeout(() => {
            document.getElementById('CheckResult').innerHTML = "";
            document.getElementById('CheckResult').style.color = "#000000ff";

        }, 1200)
    }
}
