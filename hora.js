// La siguiente seccion es a cargo de Alan Alejandro Cabrera Solis
// Jesus Ernesto Cisneros Valenzuela, Alejandra Leal Armenta 
// y Regina Palomares Quintero
// Hace la funcion para visualizar dia y hora en tiempo real

setInterval(function() {
    var fecha1 = new Date();
    var min = fecha1.getMinutes();
    var sec = fecha1.getSeconds();
    if (sec < 10) sec = "0" + sec;
    if (min <10) min="0"+min;
    
    var diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", 
    "Octubre", "Noviembre", "Diciembre"];
    
    var resultado =  diasSemana[fecha1.getDay()]+" " + fecha1.getDate() + " de " 
    + meses[fecha1.getMonth()] + " de " + fecha1.getFullYear() + ". " + fecha1.getHours() + ":" 
    + min + ":" + sec;
    
    document.getElementById("reloj").innerHTML = resultado;
},1000);