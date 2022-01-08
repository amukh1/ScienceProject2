
function goPLS() {
    fetch(`https://aaa.amukh1.dev/newFact?fact=${document.getElementById("fact").value}&name=${document.getElementById("name").value}`)
    .then(response => response.json())
    .then(data => {
data = JSON.parse(data);
console.log(data)
    })
    document.getElementById("cri").innerHTML = "Submitted!";
    document.getElementById("cri").style.color = "rgb(30, 255, 0)";
    let mt = setTimeout(backk, 2000);
}


function backk() {
    document.getElementById("cri").innerHTML = "Science Fact!";
    document.getElementById("cri").style.color = "white";
}