function demo(){
    var result2 = document.getElementById('result');
    var today = new Date();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    
    result2.innerHTML = time;
}
setInterval(demo,1000);