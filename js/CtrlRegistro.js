"use strict";
var FMT_NUMERO = "0,0.00",
 FMT_PORCENTAJE="%0",
 forma = document.getElementById("forma"),
registro = document.getElementById("salidaRegistro"),
precio = document.getElementById("salidaPrecio"),
descuento = document.getElementById("salidaDescuento"),
extraviada= document.getElementById("salidaExtraviada"),
salidaUtilidad = document.getElementById("salidaUtilidad"),
salidaUDesc = document.getElementById("salidaUDesc"),
salidaRobada = document.getElementById("salidaRobada");

function procesa(){
    var operacion1 = numeral().unformat(forma["registro"].value),
        operacion2 = numeral().unformat(forma["precio"].value),
        operacion3= numeral().unformat(forma["descuento"].value),
        operacion4= numeral().unformat(forma["extraviada"].value);
        var uti = (operacion1)*(operacion2),
            desc=(operacion1)*(operacion2)*(operacion3),
            rob=(operacion1)-(operacion4)*(operacion2);
        salidaUtilidad.value =numeral(uti).format(FMT_NUMERO); 
        salidaUDesc.value =numeral(desc).format(FMT_NUMERO);
        salidaRobada.value =numeral(rob).format(FMT_NUMERO);
    }
