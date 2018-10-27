window.onload = function () {

    snum = 5;
    stars = new Array();
    words = new Array();
    words[0] = "你的評價為1顆星";
    words[1] = "你的評價為2顆星";
    words[2] = "你的評價為3顆星";
    words[3] = "你的評價為4顆星";
    words[4] = "你的評價為5顆星";


    for (var i = 0; i < snum; i++) {
        document.getElementsByName("star")[i].onmouseover = Over;
        document.getElementsByName("star")[i].onmouseout = Out;
        document.getElementsByName("star")[i].onclick = Click;
        document.getElementsByName("star")[i].ondblclick = Dblclick;
        stars[i] = document.getElementsByName("star")[i];
    }


    function Over() {
        var num;
        for (var i = 0; i < snum; i++) {
            if (stars[i] == event.target) {
                num = i;
                document.getElementById("word").innerHTML = words[num];
                break;
            }
        }

        for (var i = num; i >= 0; i--) {
            document.getElementsByName("star")[i].className = "s";
        }

        //this.src = "../images/chngstar.gif";
    }


    function Out() {
        var num;
        for (var i = 0; i < snum; i++) {
            if (stars[i] == event.target) {
                num = i;
                break;
            }
        }
        for (var i = num; i >= 0; i--) {
            document.getElementsByName("star")[i].className = "c";
        }
        //this.src = "../images/star.gif";
    }


    function Click() {
        var num;

        for (var i = 0; i < snum; i++) {
            if (stars[i] == event.target) {
                num = i;
                document.getElementById("word").innerHTML = words[num];
                break;
            }
        }
        for (var i = 4; i >= 0; i--) {
            document.getElementsByName("star")[i].className = "c";
        }

        for (var i = num; i >= 0; i--) {
            document.getElementsByName("star")[i].className = "s";
        }

        for (var i = 0; i < snum; i++) {
            document.getElementsByName("star")[i].onmouseout = null;
            document.getElementsByName("star")[i].onmouseover = null;
        }

    }

    function Dblclick() {
        document.getElementById("word").innerHTML = "";
        for (var i = 0; i < snum; i++) {

            document.getElementsByName("star")[i].className = "s";
            document.getElementsByName("star")[i].onmouseout = mouseOut;
            document.getElementsByName("star")[i].onmouseover = mouseOver;
        }

    }
}