const input = document.querySelector("#input");
const conditional = document.querySelector(".conditional");
const gms = document.querySelector("#gms");
const kgs = document.querySelector("#kgs");
const select = document.querySelector("#select");

select.addEventListener("input", () => {
    //Get value from Select
    const val = select.value;
    //Check if weight is selected
    if (val === "weight") {
        input.placeholder = "Enter weight in pounds...";

        const availVal = input.value;
        console.log(availVal);
        //Conversion Process
        let grams = availVal * 453.592;
        grams = grams.toFixed(2);
        console.log(grams);
        let kilograms = availVal / 2.205;
        kilograms = kilograms.toFixed(2);
        //Check if input is not empty
        if (availVal != "") {
            conditional.style.display = "block";
            gms.innerHTML = `Grams : ${grams} gms`;
            kgs.innerHTML = `Kilograms : ${kilograms} kgs`;
        } else {
            conditional.style.display = "none";
        }

        input.addEventListener("input", () => {
            const inputValue = input.value;
            let grams = inputValue * 453.592;
            grams = grams.toFixed(2);
            console.log(grams);
            let kilograms = inputValue / 2.205;
            kilograms = kilograms.toFixed(2);

            //Check if input is not empty
            if (inputValue != "") {
                conditional.style.display = "block";
                gms.innerHTML = `Grams : ${grams} gms`;
                kgs.innerHTML = `Kilograms : ${kilograms} kgs`;
            } else {
                conditional.style.display = "none";
            }
        });
    } else if (val === 'length') {
        input.placeholder = "Enter length in inches...";
        const availVal = input.value;
        console.log(availVal);

        let feet = availVal / 12;
        feet = feet.toFixed(2);
        console.log(feet);
        let meters = availVal / 39.37;
        meters = meters.toFixed(2);
        //check if input is not empty
        if (availVal != "") {
            conditional.style.display = "block";
            gms.innerHTML = `Feet : ${feet} feet`;
            kgs.innerHTML = `Meters : ${meters} m`;
        } else {
            conditional.style.display = "none";
        }

        input.addEventListener("input", () => {
            const inputValue = input.value;

            let feet = inputValue / 12;
            feet = feet.toFixed(2);
            console.log(feet);
            let meters = inputValue / 39.37;
            meters = meters.toFixed(2);
            //check if input is not empty
            if (inputValue != "") {
                conditional.style.display = "block";
                gms.innerHTML = `Feet : ${feet} feet`;
                kgs.innerHTML = `Meters : ${meters} m`;
            } else {
                conditional.style.display = "none";
            }
        });
    } else if (val === 'temperature') {
        input.placeholder = "Enter temperature in fahrenheit...";
        const availVal = input.value;
        console.log(availVal);

        let celsius = (availVal - 32) * (5 / 9);
        celsius = celsius.toFixed(2);
        console.log(celsius);
        let kelvin = (availVal - 32) * (5 / 9) + 273.15;
        kelvin = kelvin.toFixed(2);
        //Check if input is not empty
        if (availVal != "") {
            conditional.style.display = "block";
            gms.innerHTML = `Celsius : ${celsius} C`;
            kgs.innerHTML = `Kelvin : ${kelvin} K`;
        } else {
            conditional.style.display = "none";
        }

        input.addEventListener("input", () => {
            const inputValue = input.value;

            let celsius = (inputValue - 32) * (5 / 9);
            celsius = celsius.toFixed(2);
            console.log(celsius);
            let kelvin = (inputValue - 32) * (5 / 9) + 273.15;
            kelvin = kelvin.toFixed(2);
            //Check if input is not empty
            if (inputValue != "") {
                conditional.style.display = "block";
                gms.innerHTML = `Celsius : ${celsius} C`;
                kgs.innerHTML = `Kelvin : ${kelvin} K`;
            } else {
                conditional.style.display = "none";
            }
        });
    }
})



