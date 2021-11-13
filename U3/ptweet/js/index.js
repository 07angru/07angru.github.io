window.onload=()=>{
    let usuario = JSON.parse(localStorage.getItem("usuario"));
    document.getElementById("imgUser").src="./img/"+usuario.imagen;
    let arrayTw= [];

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET','./js/tweets.json',true);
    xobj.onreadystatechange = function(){
        if(xobj.readyState == 4 && xobj.status == '200'){
            arrayTw = JSON.parse(xobj.responseText);
            console.log(arrayTw);
            crearPost();
        }
    }
    xobj.send(null);

    //console.log(usuario);
    //document.getElementById("usuario").innerHTML="Hola "+usuario.nombre;
    let txtTweet = document.getElementById("txtTweet");
    let btnTweet = document.getElementById("btnTweet");

    btnTweet.addEventListener('click',(evt)=>{
        //console.log(txtTweet.value);
        if(txtTweet.value.trim() != ""){
            let obj = {
                img: usuario.imagen,
                nombre: usuario.nombre,
                mensaje: txtTweet.value,
                username: usuario.username,
                likes: 0,
                retweets: 0
            };
            arrayTw.push(obj);
            crearPost();
            txtTweet.value="";
        }
    });

    txtTweet.addEventListener('keyup',(evt)=>{

    });

    function crearPost(){
        console.log(arrayTw);
        var todo = "";
        arrayTw.forEach(el=>{
            todo+=`<div class="post">
                <div>
                    <img src="img/${el.img}" alt="" class="imgUser">
                </div>
                <div>
                    <h2> 
                        <span>${el.nombre}</span>
                        <span>@${el.username}</span>
                    </h2>
                    <div class="textTweet">
                        ${el.tweet}
                    </div>

                    <div class="icons">
                        <div>
                            <i class = "fa fa-heart"></i> ${el.likes}
                        </div>

                        <div>
                            <i class = "fa fa-share"></i> ${el.retweets}
                        </div>

                    </div>`;

            el.comentarios.forEach(comentario=>{
                todo += `<div class="comentarios">
                    <div>
                        <img src="./img/${comentario.img}" alt="" class="imgUser" />
                    </div>
                    <div>
                        <h2>
                            <span>${comentario.nombre}</span>
                            <span>@${comentario.username}</span>
                        </h2>
                        <div class="textTweet">
                            ${comentario.comentario}
                        </div>
                    </div>
                </div>`;
            });

            todo +=`</div>
            </div>`;

        });

        document.getElementById("posts").innerHTML = todo;
    };

}