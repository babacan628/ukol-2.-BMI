
let height;
let weight;
let BMI;
let result
function handleClick(){

    weight = document.getElementById("weight").value;
    height = document.getElementById("height").value;

    weight = parseFloat(weight);
    height = parseFloat(height);
    BMI = weight / (height ** 2)

    console.log(`The calculated BMI is: ${BMI.toFixed(2)}`);

    if (BMI <= 18.5) {

        result = "podváha"
        
    }else if (BMI <= 24.9){

        result = "normální váha"

    }else if (BMI <= 29.9){

        result = "nadváha"

    }else if (BMI >= 29.9001){

        result = "obesita"
    }


    


    document.getElementById("BMI").textContent = "Vaše BMI je: " + BMI + " " + result

    console.log(result)
}

    


