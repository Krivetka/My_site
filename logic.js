
function button() {
    document.getElementById('move').innerHTML = `
<button onclick="nameMe()" class="start" >CLICK!</button>
`;
};



    function nameMe() {
        document.getElementById('move').innerHTML = `
        <div class="d1">
        <h1 class="title">
            <span class="title-part line-1">Ivan</span>
            <span class="title-part line-2">Kuleshov</span>
            <span class="title-part line-3">wants to be</span>
            <span class="title-part line-4">a frontend </span>
            <span class="title-part line-5">developer</span>
        </h1>
    </div>
        `;
        setTimeout( function (){
            document.body.innerHTML = `<canvas id="q"></canvas>`;
            var s = window.screen;  //Переменная для выясняющая размер вашего экрана
            var width = q.width = s.width;
            var height = q.height = s.height;
            var letters = Array(256).join(1).split('');

            var draw = function () {
                q.getContext('2d').fillStyle='rgba(0,0,0,.05)'; //Тут цвет фона
                q.getContext('2d').fillRect(0,0,width,height);
                q.getContext('2d').fillStyle='#03ff1c'; //Тут цвет букв
                letters.map(function(y_pos, index){
                    text = String.fromCharCode(65+Math.random()*33);
                    x_pos = index * 10;
                    q.getContext('2d').fillText(text, x_pos, y_pos);
                    letters[index] = (y_pos > 758 + Math.random() * 1e4) ? 0 : y_pos + 10;
                });
            };
            setInterval(draw, 33);
            setTimeout( function (){
                document.body.innerHTML = `<pre id="move"></pre>`;
                writeTextByJS(
                    "move",
                    [
                        "*****************************\n",
                        "\n",
                        "Hi, my name is Ivan.\n",
                        "Oh, sorry, the site is broken\n",
                        "Now fix it.\n",
                        "\n",
                        "******************************\n"

                    ], 80
                );
                setTimeout( function (){
                    document.body.innerHTML = `<pre id="window"></pre> `;
                    setTimeout( function (){
                        writeTextByJS(
                            "window",
                            [
                                "Hi, my name is Ivan.\n",
                                "I am a student of BSUIR.\n",
                                "About age I can say that I am 10010.\n",
                                "I can't say for myself that I am very friendly with languages, \n",
                                "but I have a certificate confirming that my knowledge of English \n",
                                "is not lower than A2.\n",
                                "With programming things are better, I know: C++, SQL, HTML,\n",
                                "CSS and a little JS. \n",
                                "And now I will show my hobby"
                            ], 80
                        );
                        setTimeout(function () {
                            document.body.innerHTML += `
                         <div class="gallery">
                            <a tabindex="1"><img src="img/2.jpg"></a>
                            <a tabindex="2"><img src="img/3.jpg"></a>
                            <a tabindex="3"><img src="img/4.jpg"></a>
                         </div>
                         `;
                            setTimeout(function () {
                                document.body.innerHTML += `<pre id="card"><img src="img/1.jpg"></pre>`;
                                writeTextByJS(
                                    "card",
                                    [
                                        "My E-mail: dfyreybr@gmail.com\n",
                                        "+375(29)5132302\n",
                                        "I would like to continue working \n",
                                        "with you after the course, and the course \n",
                                        "itself will be useful as learning something new.  \n"

                                    ], 80
                                );
                            }, 3000);
                        }, 28000);
                    },2000);
                },11000);
            },6000);
        }, 5500 );
    };



function writeTextByJS( id, text, speed){

    var ele = document.getElementById(id),
        txt = text.join("").split("");

    var interval = setInterval(function(){

        if(!txt[0]){

            return clearInterval(interval);
        };

        ele.innerHTML +=  txt.shift();
    },  speed );

    return false;
};

