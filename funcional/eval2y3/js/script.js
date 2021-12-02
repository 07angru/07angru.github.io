window.onload = ()=>{
    //CARGAR ZODIAC . JSON

    let signs = [];

    var xobjeto = new XMLHttpRequest();
    xobjeto.overrideMimeType("application/json");

    //Aclaro que yo le hice modificaciones al JSON y le agregué imagenes con un link
    //el original es de https://github.com/dariusk/corpora/blob/master/data/divination/zodiac.json

    /*¿Qué se puede hacer?
    1. Se puede buscar el signo y aparece su contenido de información.
    2. Se pueden filtrar los signos por medio de su elemento.
    3. Se puede dar clic en los botones de cada signo (también se puede aunque esten filtrados)
    y aparecerá su contenido de información.
    */
    xobjeto.open("GET", "./js/zodiac.json", true);
    xobjeto.onreadystatechange = function () {
        if (xobjeto.readyState == 4 && xobjeto.status == "200") {
        let json = JSON.parse(xobjeto.responseText);
        //console.log(signs);
        
        signs = json.western_zodiac;
        let toall = "";
        signs.forEach((sign) => {
            toall += `
            <button type="button" 
            name="${sign.name}"
            class="btn btn-primary btn-lg"
            style="margin-bottom: 20px;"
            onclick="crear()"
            >${sign.name}</button>
            `
        }); //signs


        document.getElementById("signos").innerHTML = toall;
        crear();
    }
    };
    xobjeto.send(null);

    filtrar = ()=>{
        indice = document.getElementById("combo").selectedIndex;
        let filtrado;

        switch (indice) {
            case 1:
            
                filtrado = signs.filter( (signo) => signo.element == "Fire");

                toall = "";
                filtrado.forEach((filtrado) => {
                    toall += `
                    <button type="button"
                    name="${filtrado.name}"
                    class="btn btn-primary btn-lg"
                    style="margin-bottom: 20px;"
                    onclick="crear()"
                    >${filtrado.name}</button>
                    `
                }); //filtrado

                document.getElementById("signos").innerHTML = toall;
                crear();
            
              break;
            case 2:
                filtrado = signs.filter( (signo) => signo.element == "Earth");

                toall = "";
                filtrado.forEach((filtrado) => {
                    toall += `
                    <button type="button"
                    name="${filtrado.name}"
                    class="btn btn-primary btn-lg"
                    style="margin-bottom: 20px;"
                    onclick="crear()"
                    >${filtrado.name}</button>
                    `
                }); //filtrado

                document.getElementById("signos").innerHTML = toall;
                crear();

              break;
            case 3:
                filtrado = signs.filter( (signo) => signo.element == "Air");

                toall = "";
                filtrado.forEach((filtrado) => {
                    toall += `
                    <button type="button"
                    name="${filtrado.name}"
                    class="btn btn-primary btn-lg"
                    style="margin-bottom: 20px;"
                    onclick="crear()"
                    >${filtrado.name}</button>
                    `
                }); //filtrado

                document.getElementById("signos").innerHTML = toall;
                crear();
              break;
            case 4:
                filtrado = signs.filter( (signo) => signo.element == "Water");

                toall = "";
                filtrado.forEach((filtrado) => {
                    toall += `
                    <button type="button"
                    name="${filtrado.name}"
                    class="btn btn-primary btn-lg"
                    style="margin-bottom: 20px;"
                    onclick="crear()"
                    >${filtrado.name}</button>
                    `
                }); //filtrado

                document.getElementById("signos").innerHTML = toall;
                crear();
              break;
            case 5:
                toall = "";
                signs.forEach((filtrado) => {
                    toall += `
                    <button type="button"
                    name="${filtrado.name}"
                    class="btn btn-primary btn-lg"
                    style="margin-bottom: 20px;"
                    onclick="crear()"
                    >${filtrado.name}</button>
                    `
                }); //filtrado

                document.getElementById("signos").innerHTML = toall;
                crear();
                break;
            default:
              break;
          }

    }
    
    

    search = ()=>{
        let txt = document.getElementById("search").value;
        let found = signs.find( (signo) => signo.name == txt);
        //console.log(found);

        if(found != null){
            let union = found.name + " " + found.unicode_symbol;
            document.getElementById("nameSign").innerHTML= union;
            document.getElementById("imgSign").src=found.img;
            document.getElementById("glossSign").innerHTML= "<b>Gloss:</b> " + found.gloss;
            document.getElementById("elemSign").innerHTML= "<b>Element:</b> " + found.element;
            document.getElementById("rulingSign").innerHTML= "<b>Ruling body:</b> " + found.ruling_body_modern;
            document.getElementById("tablita").style.display = "block";
            document.getElementById("keywords").innerHTML= "Characteristics";
            document.getElementById("key1").innerHTML= capitalize(found.keywords[0]);
            document.getElementById("key2").innerHTML= capitalize(found.keywords[1]);
            document.getElementById("key3").innerHTML= capitalize(found.keywords[2]);
        
        }
    };

    crear = ()=>{
        let nombre;

        let elm = document.getElementsByTagName('button');
        for(let x=0; x<elm.length; x++){
            elm[x].addEventListener('click',(e)=>{
            nombre = elm[x].getAttribute("name");

            let found = signs.find( (signo) => signo.name == nombre);
            //console.log(found);

            if(found != null){
                let union = found.name + " " + found.unicode_symbol;
                document.getElementById("nameSign").innerHTML= union;
                document.getElementById("imgSign").src=found.img;
                document.getElementById("glossSign").innerHTML= "<b>Gloss:</b> " + found.gloss;
                document.getElementById("elemSign").innerHTML= "<b>Element:</b> " + found.element;
                document.getElementById("rulingSign").innerHTML= "<b>Ruling body:</b> " + found.ruling_body_modern;
                document.getElementById("tablita").style.display = "block";
                document.getElementById("keywords").innerHTML= "Characteristics";
                document.getElementById("key1").innerHTML= capitalize(found.keywords[0]);
                document.getElementById("key2").innerHTML= capitalize(found.keywords[1]);
                document.getElementById("key3").innerHTML= capitalize(found.keywords[2]);
                }
            });//elm
        }
        
    };

    function capitalize(word) {
        return word[0].toUpperCase() + word.slice(1);
      }

}//llave load