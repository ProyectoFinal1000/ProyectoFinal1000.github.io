"use strict";
var FMT_NUMERO = "0,0.00",
 FMT_PORCENTAJE="%0",
 forma = document.getElementById("forma"),
salidaRegistro = document.getElementById("salidaRegistro"),
salidaPrecio = document.getElementById("salidaPrecio"),
salidaDescuento = document.getElementById("salidaDescuento"),
salidaExtraviada = document.getElementById("salidaExtraviada"),
salidaUtilidad = document.getElementById("salidaUtilidad"),
salidaUDesc = document.getElementById("salidaUDesc"),
salidaRobada = document.getElementById("salidaRobada");

function procesa(){
    var operador1 = numeral().unformat(forma["registro"].value),
        operador2 = numeral().unformat(forma["precio"].value),
        operador5= numeral().unformat(forma["extraviada"].value),
        operador3= numeral().unformat(forma["descuento"].value);
        var uti = (66+(13.7*operador2) +(5*operador1)-(6.8*operador5))*1.2,
            desc=(operador2*10000)/(operador1*operador1),
            rob=0.64-(0.20*operador1/operador3);
        salidaUtilidad.value =numeral(uti).format(FMT_NUMERO); 
        salidaUDesc.value =numeral(desc).format(FMT_NUMERO);
        salidaRobada.value =numeral(rob).format(FMT_NUMERO);
    }
