"use strict";
var FMT_NUMERO = "0,0.00",
 FMT_PORCENTAJE="%0",
 forma = document.getElementById("forma"),
salidaOp1 = document.getElementById("salidaOp1"),
salidaOp2 = document.getElementById("salidaOp2"),
salidaOp3 = document.getElementById("salidaOp3"),
salidaOp5= document.getElementById("salidaOp4"),
salidaIMC = document.getElementById("salidaIMC"),
salidaPorcentaje = document.getElementById("salidaGrasa"),
salidaCalorias = document.getElementById("salidaCalorias");

function procesa(){
    var operador1 = numeral().unformat(forma["estatura"].value),
        operador2 = numeral().unformat(forma["peso"].value),
        operador5= numeral().unformat(forma["edad"].value),
        operador3= numeral().unformat(forma["cintura"].value);
        var cal =((operador1)*(operador2*.16)),
            imc=((operador3/100)*(operador1)),
            grasa=((operador5)-(operador1)*(operador2*.16));
        salidaCalorias.value =numeral(cal).format(FMT_NUMERO); 
        salidaIMC.value =numeral(imc).format(FMT_NUMERO);
        salidaPorcentaje.value =numeral(grasa).format(FMT_NUMERO);
    }

