function FormularioEnviar(){
    var nombre=document.getElementById("name").value;
    var correo=document.getElementById("user").value;
    var tel=document.getElementById("number").value;

    if(nombre!="" && correo!="" && tel!=""){
        var form=document.getElementById("Formulario");
        form.style.display="none";
        
        var form2=document.getElementById("Formulario2");
        form2.style.display="none";

        var datos=document.getElementById("mostrar");
        datos.style.display="";

        var title=document.getElementById("titulo2")

        document.getElementById("nombre2").value=nombre;
        document.getElementById("correo2").value=correo;
        document.getElementById("tel2").value=tel;
    }else{
        alert("Favor de llenar todos los campos");
    }
}

function DeAcuerdo(){
    var nombre=document.getElementById("name").value="";
    var correo=document.getElementById("user").value="";
    var tel=document.getElementById("number").value="";

    var form=document.getElementById("Formulario");
    form.style.display="";
    var form2=document.getElementById("Formulario2");
    form2.style.display="";

    var datos=document.getElementById("mostrar");
    datos.style.display="none";
}

function Editar(){
    var form=document.getElementById("Formulario");
    form.style.display="";

    var form2=document.getElementById("Formulario2");
    form2.style.display="";

    var datos=document.getElementById("mostrar");
    datos.style.display="none";
}