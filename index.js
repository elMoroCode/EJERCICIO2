function programa () {
    let flagPrograma = 0;

    let nombrePasta;
    let tipoPasta;
    let precioPasta = 0;
    let pesoPasta = 0;
    let totalDinero = 0;
    let menorPeso = 0;
    let mayorPeso = 0;

    let contadorVueltas = 0;

    while ( flagPrograma == 0){
        nombrePasta = prompt ("Ingrese el nombre de la pasta");

        pesoPasta = prompt ("Ingrese peso en gramos (minimo 100g)");
        while (pesoPasta < 100 || pesoPasta == null || pesoPasta == "" || /\D/.test(pesoPasta)){
                pesoPasta = prompt ("Error. Ingrese peso en gramos (minimo 100g)");
        }

        tipoPasta = prompt ("Ingrese tipo de pasta (Con relleno, Sin relleno)").toLowerCase();
        while (tipoPasta != "con relleno" && tipoPasta != "sin relleno"){
             tipoPasta = prompt ("Error. Ingrese tipo de pasta (Con relleno, sin Relleno)").toLowerCase();
        }

        precioPasta = parseInt(prompt ("Ingrese precio mayor a 0"));
        while (precioPasta < 1 || precioPasta == null || precioPasta == "" || /\D/.test(precioPasta)) {
            precioPasta = prompt("Error.Ingrese precio mayor a 0");
        }


        switch (tipoPasta){
            case "sin relleno":
                
                if (contadorVueltas == 0){
                    menorPeso = pesoPasta;
                }else if (pesoPasta < menorPeso){
                    menorPeso = pesoPasta;
                }
            
                break;
             
            case "con relleno":
                if (contadorVueltas == 0){
                    mayorPeso = pesoPasta;
                }else if (pesoPasta > mayorPeso){
                    mayorPeso = pesoPasta;
                }

                break;

        }
        contadorVueltas = contadorVueltas + 1;

        flagPrograma = prompt ("Desea seguir. Ingrese 0, de lo contrario finalizara el programa.");

        totalDinero = totalDinero + precioPasta;
    }  
    
document.getElementById ("resultado").innerHTML = "El menor peso de las pastas sin relleno es: " + menorPeso + "\nEl mayor peso de las pastas con relleno es: \n" + mayorPeso + "\n- Dinero recaudado: \n" + totalDinero; 
}
