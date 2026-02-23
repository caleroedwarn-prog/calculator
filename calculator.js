let base = "";
let exponent = "";
let numbers = "";
let angle = "";
let result = "";
let radians = "";

const Display = document.getElementById("display");

function pressDisplay(input){
    Display.value += input;
}
function clearDisplay(){
    Display.value = Display.value.slice(0, -1); 
}
function pressDisplay1(){
    Display.value = "";
}
function calculate(){
    try{
        if(Display.value.includes('^')){
            let numbers = Display.value.split("^")
            let base = parseFloat(numbers[0]);
            let exponent = parseFloat(numbers[1]);
            Display.value = Math.pow(base, exponent);
            Display.value = eval(Display.value);
        }
        else if(Display.value.startsWith('sin')){
            numbers = Display.value.slice(3);
            radians = parseFloat(numbers) * (Math.PI / 180);
            result = Math.sin(radians);
            Display.value = result;
        }
        else if(Display.value.startsWith('cos') ){
            numbers = Display.value.slice(3);
            radians = parseFloat(numbers) * (Math.PI / 180);
            result = Math.cos(radians);
            Display.value = result;
        }
        else if(Display.value.startsWith('tan')){
            numbers = Display.value.slice(3);
            radians = parseFloat(numbers) * (Math. PI / 180);
            result = Math.tan(radians);
            Display.value = result
        }
        else{
            Display.value = eval(Display.value);

        }   
    } 
    catch(error){
        Display.value = "Error";
    }

}