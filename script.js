let $ = document
const weightInput = $.querySelector('#weight')
const heightInput = $.querySelector('#height')
const weightVal = $.querySelector('#weight-val')
const heightVal = $.querySelector('#height-val')
const result = $.querySelector('#result')
const category = $.querySelector('#category')

result.style.color = '#0be881'

function bmiCalc(){
    let weightInputVal = weightInput.value
    let heightInputVal = heightInput.value
    weightVal.innerHTML = weightInputVal + ' kg'
    heightVal.innerHTML = heightInputVal + ' cm'
    let bmiVal = (weightInputVal / (Math.pow(heightInputVal/100, 2))).toFixed(1)
    result.innerHTML = bmiVal

    if(bmiVal < 18.5){
        category.innerHTML = 'UnderWeight'
        result.style.color = '#ffc44d'
    }
    else if(bmiVal >= 18.5 && bmiVal <= 24.9){
        category.innerHTML = 'Normal Weight'
        result.style.color = '#0be881'
    }
    else if(bmiVal >= 25 && bmiVal < 29.9){
        category.innerHTML = 'OverWeight'
        result.style.color = '#ff884d'
    }
    else{
        category.innerHTML = 'Obese'
        result.style.color = '#ff5e4d'
    }

}

weightInput.addEventListener('input', bmiCalc)
heightInput.addEventListener('input', bmiCalc)
