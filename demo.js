var result = 1;
var misli = 3;

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("kbedeli").innerHTML = "K. Bedeli "+ (misli + " TL").bold();
    result = result * misli;
    for(var i = 0; i < document.getElementsByClassName("mbutton").length; i++)
    {
        document.getElementsByClassName("mbutton")[i].onclick = function(){
            let k = parseFloat(this.childNodes[1].innerHTML.replace(",", "."));
            if(this.childNodes[1].style.backgroundColor !== "rgb(250, 205, 0)") {
                kontrol(this.id);
                this.childNodes[1].style.backgroundColor = "#FACD00";
                result = result * k;
            }else{
                this.childNodes[1].style.backgroundColor = "#FFFFFF";
                result = result / k;
            }

            if(result.toFixed(2)/misli === 1) {
                document.getElementById("mkazanc").innerHTML = "M. Kazanç " + ("0 TL").bold();
            }else{
                document.getElementById("mkazanc").innerHTML = "M. Kazanç "+ (result.toFixed(2) + " TL").bold();
            }

        };
    }


    document.getElementById("mselect").onchange = function () {
        result = result / misli;
        misli = this.value;
        result = result * misli;
        document.getElementById("kbedeli").innerHTML = "K. Bedeli "+ (misli + " TL").bold();
        //document.getElementById("mkazanc").innerHTML = "M. Kazanç "+ (result.toFixed(2) + " TL").bold();
        if(result.toFixed(2)/misli === 1) {
            document.getElementById("mkazanc").innerHTML = "M. Kazanç " + ("0 TL").bold();
        }else{
            document.getElementById("mkazanc").innerHTML = "M. Kazanç "+ (result.toFixed(2) + " TL").bold();
        }
    }
});


function kontrol(a){

    if(a%3 === 0){//i+1 ve i+2 yi kontrol et
        let item1 = document.getElementById(parseInt(a)+1);
        let item2 = document.getElementById(parseInt(a)+2);
        if(item1.childNodes[1].style.backgroundColor === "rgb(250, 205, 0)"){
            item1.childNodes[1].style.backgroundColor = "#FFFFFF";
            let m1 = parseFloat(item1.childNodes[1].innerHTML.replace(",", "."));
            result = result / m1;
        }
        if(item2.childNodes[1].style.backgroundColor === "rgb(250, 205, 0)"){
            item2.childNodes[1].style.backgroundColor = "#FFFFFF";
            let m2 = parseFloat(item2.childNodes[1].innerHTML.replace(",", "."));
            result = result / m2;
        }
    }else if(a%3 === 1){//i-1 ve i+1 i kontrol et
        let item3 = document.getElementById(parseInt(a)-1);
        let item4 = document.getElementById(parseInt(a)+1);
        if(item3.childNodes[1].style.backgroundColor === "rgb(250, 205, 0)"){
            item3.childNodes[1].style.backgroundColor = "#FFFFFF";
            let m3 = parseFloat(item3.childNodes[1].innerHTML.replace(",", "."));
            result = result / m3;
        }
        if(item4.childNodes[1].style.backgroundColor === "rgb(250, 205, 0)"){
            item4.childNodes[1].style.backgroundColor = "#FFFFFF";
            let m4 = parseFloat(item4.childNodes[1].innerHTML.replace(",", "."));
            result = result / m4;
        }
    }else if(a%3 === 2){// i-1 ve i-2 yi kontrol et
        let item5 = document.getElementById(parseInt(a)-1);
        let item6 = document.getElementById(parseInt(a)-2);
        if(item5.childNodes[1].style.backgroundColor === "rgb(250, 205, 0)"){
            item5.childNodes[1].style.backgroundColor = "#FFFFFF";
            let m5 = parseFloat(item5.childNodes[1].innerHTML.replace(",", "."));
            result = result / m5;
        }
        if(item6.childNodes[1].style.backgroundColor === "rgb(250, 205, 0)"){
            item6.childNodes[1].style.backgroundColor = "#FFFFFF";
            let m6 = parseFloat(item6.childNodes[1].innerHTML.replace(",", "."));
            result = result / m6;
        }
    }
}