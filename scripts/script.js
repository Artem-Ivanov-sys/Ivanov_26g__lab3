function task2() {
    let temp = document.getElementById("x").value;
    document.getElementById("x").value = document.getElementById("y").value;
    document.getElementById("y").value = temp;
}
function task3() {
    function S(x1, y1, x2, y2) {
        return (y1+y2)/2 * (x2-x1);
    }
    let [x1, y1, x2, y2, x3, y3, x4, y4, x5, y5] = [Math.floor(Math.random()*100), Math.floor(Math.random()*100), Math.floor(Math.random()*100), Math.floor(Math.random()*100), Math.floor(Math.random()*100), Math.floor(Math.random()*100), Math.floor(Math.random()*100), Math.floor(Math.random()*100), Math.floor(Math.random()*100), Math.floor(Math.random()*100)];
    document.getElementById("s1").textContent = x1+" "+y1;
    document.getElementById("s2").textContent = x2+" "+y2;
    document.getElementById("s3").textContent = x3+" "+y3;
    document.getElementById("s4").textContent = x4+" "+y4;
    document.getElementById("s5").textContent = x5+" "+y5;
    let s = S(x1, y1, x2, y2) + S(x2, y2, x3, y3) + S(x3, y3, x4, y4) + S(x4, y4, x5, y5) + S(x5, y5, x1, y1);
    document.getElementById("ans").textContent = "Площа "+Math.abs(s);
}
function task4() {
    if (!document.getElementsByTagName("form")[0]) {
        document.getElementsByClassName("b4")[0].innerHTML += "<form><input type='text' id='number'><input onclick='submit_()' type='button' value='OK'></form>"
    }
}
function submit_() {
    let data = document.getElementById("number").value;
    let res = parseInt(data.split("").reduce((a, b)=>b+a, ""));
    alert(`Результат ${res}`);
    document.cookie = "res="+res;
}
window.onbeforeunload = () => {
    console.log(1);
    return confirm(`Дані ${document.cookie}. Локальне сховище буде очищено`);
}
