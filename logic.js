function display(value) {
    document.getElementById("result").value += value;
}
function calculate() {
    var a = document.getElementById("result").value;
    var b = eval(a);
    document.getElementById("result").value = b;
}
function clearScreen() {
    document.getElementById("result").value = "";
}

function backspaceBtn(){
    let res=document.getElementById('result');
    res.value=res.value.slice(0,res.value.length-1);
}
