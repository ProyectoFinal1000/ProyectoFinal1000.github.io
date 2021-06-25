"use strict";
var FMT_NUMERO = "0,0.00",
 FMT_PORCENTAJE="%0",
 forma = document.getElementById("forma"),
salidaOp1 = document.getElementById("salidaOp1"),
salidaOp2 = document.getElementById("salidaOp2"),
salidaOp3 = document.getElementById("salidaOp3"),
salidaOp5 = document.getElementById("salidaOp4"),
salidaUtilidad = document.getElementById("salidaUtilidad"),
salidaPorcentaje = document.getElementById("salidaUDesc"),
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
        salidaRobada.value =numeral(desc).format(FMT_NUMERO);
        salidaPorcentaje.value =numeral(rob).format(FMT_NUMERO);
    }
