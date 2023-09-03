function display(val) {
    
   
    document.getElementById("box").value += val
    return val
    
}
function backSpace() {
    var len=document.getElementById("box").value.length
    document.getElementById("box").value = document.getElementById("box").value.slice(0,len-1)
}
function allClear() {
    document.getElementById("box").value=""
}

function solve() {
    var exp = document.getElementById("box").value;
    var res="";
    for(var i=0;i<exp.length;i++){
        var t = exp.charAt(i);
        if(t==='x'){
            res+="*";
        }
        else{
            res+=t;
        }
    }
    document.getElementById("box").value = eval(res);
}