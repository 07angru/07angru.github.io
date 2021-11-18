window.onload = () => {
  //CARGAR JSON
  let arrayElem = [];

  var xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  xobj.open("GET", "./js/PeriodicTableJSON.json", true);
  xobj.onreadystatechange = function () {
    if (xobj.readyState == 4 && xobj.status == "200") {
      let json = JSON.parse(xobj.responseText);
      //console.log(arrayElem);
      arrayElem = json.elements;
      let todo = "";
      arrayElem.forEach((element) => {
        todo += `<li id="${element.name}"
                class="${element.category}" 
                data-id="${element.number}" 
                data-sim="${element.symbol}" 
                data-name="${element.name}"
                data-descr="${element.summary}"
                onclick="crear()">
                <abbr title="${element.name}">${element.symbol}</abbr>
            </li>`;
      }); //arrayElem
      document.getElementsByClassName("periodic-table")[0].innerHTML = todo;
    }
  };
  xobj.send(null);
};

function crear() {
    //CREAR EVENTOS

    let elem = document.getElementsByTagName('li');
    //console.log(elem.length);
    for(let x=0; x<elem.length; x++){
        elem[x].addEventListener('click',(e)=>{
            //console.log(elem[x].innerHTML);
            let nom = elem[x].getAttribute("data-name");
            let des = elem[x].getAttribute("data-descr");
            let sim = elem[x].getAttribute("data-sim");
            document.getElementById("txtElemento").innerText=nom;
            document.getElementById("txtSimbolo").innerText=sim;
            document.getElementById("txtDescr").innerText=des;
        });//elem

    };//for


}
