function habilitar(){
    var siRadio = document.getElementById("si");
    if (siRadio.checked){
        document.getElementById("codigoInput").disabled=false;
        document.getElementById("btnAceptar").disabled=false;
        document.getElementById("btnAceptar").style.opacity = "1";
    }
    
}

function deshabilitar(){
    var noRadio = document.getElementById("no");
    if (noRadio.checked){
        document.getElementById("codigoInput").disabled=true;
        document.getElementById("btnAceptar").disabled=false;
        document.getElementById("btnAceptar").style.opacity = "1";
    }
}

function aceptar() {
    var siRadio = document.getElementById("si");
    var noRadio = document.getElementById("no");
    var costoInput = document.getElementById("costo2").value;

    if (siRadio.checked) {
        var codigoDesc = document.getElementById("codigoInput").value;
        if(codigoDesc==="SMSC"){
            var Descuento=costoInput*.25;
            var TotalDesc = costoInput - Descuento;
            alert("El total con descuento es de: $"+TotalDesc);
        }else{
            alert("El código de descuento no existe");
        }
    } else if(noRadio.checked) {
        alert("El total del servicio es de: $"+costoInput);
    }
}