/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const   convertButton = document.getElementById("btn")
const   refreshButton = document.getElementById("refreshBtn")
const   lengthParagraph = document.getElementById("Length")
const   volumeParagraph = document.getElementById("volume")
const   massParagraph = document.getElementById("mass")
const   inputField = document.getElementById("input")

convertButton.addEventListener("click", function(){

    const Input = document.getElementById("input").value


    if (isValidNumber(Input)) {
        const InputAsFloat = parseFloat(Input)
    
        const InputvalueInFeet = (InputAsFloat*3.281).toFixed(3)
        const InputvalueInMetersFromFeet = (InputAsFloat/3.281).toFixed(3)

        const result = 
       
        `${Number(InputAsFloat).toFixed(0)} meters = ${InputvalueInFeet} feet | 
        ${Number(InputAsFloat).toFixed(0)} feet = ${InputvalueInMetersFromFeet} meters`

         lengthParagraph.innerHTML = result

         const InputValueinGallons = (InputAsFloat*0.264).toFixed(3)
         const InputValueinLitersFromGallons = (InputAsFloat/0.264).toFixed(3)

         const result2 = `${Number(InputAsFloat).toFixed(0)} liters = ${InputValueinGallons} gallons | 
         ${Number(InputAsFloat).toFixed(0)} gallons = ${InputValueinLitersFromGallons} liters`

         volumeParagraph.innerHTML = result2 

         const InputValueinPounds = (InputAsFloat*2.204).toFixed(3)
         const InputValueinKgFromPounds = (InputAsFloat/2.204).toFixed(3)

         const result3 = `${Number(InputAsFloat).toFixed(0)} kilos = ${InputValueinPounds} pounds | 
         ${Number(InputAsFloat).toFixed(0)} pounds = ${InputValueinKgFromPounds} kilos`

         massParagraph.innerHTML = result3 

    } else {
        alert('Please enter a valid number for conversion.')
        // Clear previous results if input is not a valid number
        lengthParagraph.innerHTML = '';
        volumeParagraph.innerHTML = '';
        massParagraph.innerHTML = '';
    }
})
function isValidNumber(value) {
    return !isNaN(parseFloat(value)) && isFinite(value)
}
refreshButton.addEventListener("click", function() {
    // Clear all paragraphs
    lengthParagraph.innerHTML = '';
    volumeParagraph.innerHTML = '';
    massParagraph.innerHTML = '';

    // Clear the input field
    inputField.value = '';
});