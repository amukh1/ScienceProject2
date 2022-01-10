function epik(e) {
    // console.log(e.style.backgroundColor)
  if(e.style.backgroundColor == 'rgb(219, 255, 87)'){
    del(e)
  }else{
    e.style.backgroundColor = 'rgb(219, 255, 87)'
    e.style.color = 'black'
  }

}

function del(i) {
    i.style.opacity = '0'
    ltr(i)
}


function ltr(e) {
    e.style.display = 'none'
}

var intervalID = setInterval(myCallback, 500);
let lf = null
function myCallback(){
    var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
         var data = JSON.parse(xhr.responseText)
     console.log(data)
     if(data.fact == lf){
            return
     }else {
         lf = data.fact
     let div = document.createElement('div');
     div.classList.add('post');
     div.setAttribute("id", "post");
      div.setAttribute("onClick", "epik(this)")
      document.getElementById('content').appendChild(div)
      let fact = document.createElement('div');
      fact.classList.add('fact')
      fact.innerHTML = data.fact
      div.appendChild(fact)
        let author = document.createElement('div');
        author.classList.add('name')
        author.innerHTML = data.user
        div.appendChild(author)
    }}
};
xhr.open("GET", "https://aaa.amukh1.dev/fact", true);
xhr.send();
}





function clear() {
    window.location.reload();
}

setInterval(iint, 1000);

function start() {

    document.getElementById("numb").innerHTML = document.getElementById('numb').innerHTML - 1
}

function iint() {

    let numm = document.getElementById("numb").innerHTML - 0
if(numm != 30 && numm != 0){
    document.getElementById("numb").innerHTML = document.getElementById("numb").innerHTML - 1
}
    
}

function restart() {
    document.getElementById("numb").innerHTML = "30";
}