window.onload = () => {
  //CARGAR PERIO TABLE JSON . JSON

  let arElem = [];

  var xobjeto = new XMLHttpRequest();
  xobjeto.overrideMimeType("application/json");
  xobjeto.open("GET", "./js/PerioTable.json", true);
  xobjeto.onreadystatechange = function () {
    if (xobjeto.readyState == 4 && xobjeto.status == "200") {
      let json = JSON.parse(xobjeto.responseText);
      //console.log(arElem);
      //07angru
      arElem = json.elementosss;
      let toall = "";
      arElem.forEach((elmt) => {
        toall += `<li id="${elmt.name}"
                class="${elmt.category}" 
                data-id="${elmt.number}" 
                data-sym="${elmt.symbol}" 
                data-name="${elmt.name}"
                data-summ="${elmt.summary}"
                onclick="crear()">
                <abbr title="${elmt.name}">${elmt.symbol}</abbr>
            </li>`;
      }); //arElem
      document.getElementsByClassName("perio-table")[0].innerHTML = toall;
      crear();
    }
  };
  xobjeto.send(null);
};

function crear() {
    //PARA MOSTRAR EN DATA
    //07angru
    let elm = document.getElementsByTagName('li');
    //console.log(elm.length);
    for(let x=0; x<elm.length; x++){
        elm[x].addEventListener('click',(e)=>{
            //console.log(elm[x].innerHTML);
            let nom = elm[x].getAttribute("data-name");
            let des = elm[x].getAttribute("data-summ");
            let sim = elm[x].getAttribute("data-sym");
            document.getElementById("txtName").innerText=nom;
            document.getElementById("txtSym").innerText=sim;
            document.getElementById("txtSumm").innerText=des;
        });//elm

    };//for


}
