

//Ingresa un nombre de empleado/a y su fecha de nacimiento y la de ingreso a la empresa
//calcular su edad, y los dias de vacaciones que le corresponden en un año determinado
//calcular el año en que se jubila
//calcula en que año cobra el premio especial por antiguedad

//CALCULO EN QUE AÑO RECIBIRIA UN PREMIO POR ANTIGUEDAD EN LA EMPRESA
function premio(anio_ingreso, sexo) {

    if (sexo == "F") {
        console.log("Primer premio especial por antiguedad en el año: ", (anio_ingreso + 17));
        console.log("Segundo premio en el año: ", (anio_ingreso + 22));
        console.log("Tercer premio en el año: ", (anio_ingreso + 27));

    } else {
        console.log("Primer premio especial  por antiguedad en el año: ", (anio_ingreso + 20));
        console.log("Segundo premio por antiguedad en el año: ", (anio_ingreso + 25));
        console.log("Tercer premio en el año: ", (anio_ingreso + 30));
    }
}


// CALCULO LOS DIAS DE VACACIONES QUE LE CORRESPONDE POR SU ANTIGUEDAD
function dias_vacaciones(anio_actual, anio_ingreso) {
    anio_actual = parseInt(anio_actual);
    anio_ingreso = parseInt(anio_ingreso);
    let trabajados = anio_actual - anio_ingreso;


    if (trabajados >= 0 && trabajados <= 5) {
        return "10";

    } else if (trabajados > 5 && trabajados <= 10) {
        return "15";

    } else if (trabajados >= 0 && trabajados <= 15) {
        return "20";

    } else if (trabajados >= 0 && trabajados <= 20) {
        return "25";
    } else if (trabajados > 20) {
        return "30";

    }
}



//INICIALIZO VARIABLES
let fecha_ingreso = "";
let hoy = "2023";
let fecha_nacido = "0000";
let sexo = "";
let edad = "0";


fecha_ingreso = prompt("Ingrese la fecha de Ingreso a la Empresa XX  o ingrese SALIR para finalizar");

while (fecha_ingreso != "SALIR") {


    fecha_nacido = prompt("Ingrese la fecha de su nacimiento: ");
    sexo = "";
    edad = hoy - fecha_nacido;

    if (fecha_nacido > 1960 && fecha_ingreso <= hoy && fecha_nacido < 2006) {
        let nombre = prompt("Ingrese su Nombre: ");
        console.log("***************Bienvenido ", nombre, "  **************");
        do {
            sexo = prompt("Ingrese el sexo F o M: ");

        } while (sexo != "F" && sexo != "M");


        //MUESTRO LOS DATOS

        console.log(nombre, "Tiene ", edad, " años");
        fecha_ingreso = parseInt(fecha_ingreso);
        console.log(nombre, "tiene ", dias_vacaciones(hoy, fecha_ingreso), "DIAS HABILES DE VACACIONES");


        console.log(nombre, "se podria jubilar el año:", fecha_ingreso + 30);
        premio(fecha_ingreso, sexo);
        fecha_ingreso = prompt("Ingrese la fecha de Ingreso a la Empresa XX  o ingrese SALIR para finalizar");

    }


}







