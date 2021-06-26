"use strict";
var FMT_NUMERO = "0,0.00",
 FMT_PORCENTAJE="%0",
 forma = document.getElementById("forma"),
salidaMerca = document.getElementById("salidaMerca"),
salidaPrecio = document.getElementById("salidaPrecio"),
salidaDesc = document.getElementById("salidaDesc"),
salidaRobado= document.getElementById("salidaRobado"),
salidaUtilidad = document.getElementById("salidaUtilidad"),
salidaDescuento = document.getElementById("salidaDescuento"),
salidaExtraviado = document.getElementById("salidaExtraviado");

function procesa(){
    var operador1 = numeral().unformat(forma["mercancia"].value),
        operador2 = numeral().unformat(forma["precio"].value),
        operador5= numeral().unformat(forma["robo"].value),
        operador3= numeral().unformat(forma["descuento"].value);
        var uti =((operador1)*(operador2*.16)),
            des=((operador3/100)*(operador1)),
            extra=((operador5)-(operador1)*(operador2*.16));
        salidaUtilidad.value =numeral(uti).format(FMT_NUMERO); 
        salidaDescuento.value =numeral(des).format(FMT_NUMERO);
        salidaExtraviado.value =numeral(extra).format(FMT_NUMERO);
    }

