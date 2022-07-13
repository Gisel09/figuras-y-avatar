function formarCuadrado() {
    document.getElementById("figura").className = "";
    document.getElementById("figura").classList.toggle("cuadrado");
}

function formarCirculo() {
    document.getElementById("figura").className = "";
    document.getElementById("figura").classList.toggle("circulo");
}

function trasladarFiguraArriba() {
    document.getElementById("figura").className = "";
    document.getElementById("figura").classList.toggle("arriba");
}

function trasladarFiguraAbajo() {
    document.getElementById("figura").className = "";
    document.getElementById("figura").classList.toggle("abajo");
}

function trasladarFiguraIzquierda() {
    document.getElementById("figura").className = "";
    document.getElementById("figura").classList.toggle("izquierda");
}

function trasladarFiguraDerecha() {
    document.getElementById("figura").className = "";
    document.getElementById("figura").classList.toggle("derecha");
}

function cambiarImagen() {
    document.getElementById("figura").className = "";
    document.getElementById("figura").classList.toggle("imagen");
}

function trasladarsuperiorIzquierda() {
    document.getElementById("figura").className = "";
    document.getElementById("figura").classList.toggle("supizq");
}

function trasladarInferiorDerecha() {
    document.getElementById("figura").className = "";
    document.getElementById("figura").classList.toggle("infder");
}

function formarRectanguloHorizontal() {
    document.getElementById("figura").className = "";
    document.getElementById("figura").classList.toggle("rectanguloHorizontal");
}

function formarRectanguloVertical() {
    document.getElementById("figura").className = "";
    document.getElementById("figura").classList.toggle("rectanguloVertical");
}

function formarRombo() {
    document.getElementById("figura").className = "";
    document.getElementById("figura").classList.toggle("rombo");
}

function irAlFormularioAvatar() {
    document.getElementById("figuras").style.display = 'none';
    document.getElementById("formulario").style.display = 'block';
}

function regresarAFiguras() {
    document.getElementById("figuras").style.display = 'block';
    document.getElementById("formulario").style.display = 'none';
}

function capturarDatos() {
    var nombres = document.getElementById("nombres").value;
    if (nombres == null || nombres.trim() == "") {
        alert("El campo nombres es obligatorio");
        return;
    }
    var edad = document.getElementById("edad").value;
    if (edad == null || edad < 1) {
        alert("El campo edad es obligatorio y debe ser mayor a cero");
        return;
    }

    var fechaNacimiento = document.getElementById("fechaNacimiento").value;
    if (fechaNacimiento == null) {
        alert("El campo Fecha de Nacimiento es obligatorio.");
        return;
    }

    var correo = document.getElementById("correo").value;
    if (correo == null || correo.trim() == "") {
        alert("El campo correo electrónico es obligatorio.");
        return;
    }

    if (!(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
        .test(correo))) {
        alert("El formato de correo es incorrecto");
        return;
    }

    var genero = document.getElementById("genero").value;

    switch (genero) {
        case "m": document.getElementById("generoOutput").value = "Hombre";
            document.getElementById("iconoAvatar").src = "img/hombre.png";
            break;
        case "f": document.getElementById("generoOutput").value = "Mujer";
            document.getElementById("iconoAvatar").src = "img/mujer.png";
            break;
        case "o": document.getElementById("generoOutput").value = "Otro";
            document.getElementById("iconoAvatar").src = "img/otro.png";
            break;
        default:
            alert("El campo género es obligatorio");
            return;
    }

    var descripcion = document.getElementById("descripcion").value;
    if (descripcion == null || descripcion.trim() == "") {
        alert("El campo descripción personal es obligatorio.");
        return;
    }

    var color = document.getElementById("color").value;
    switch (color) {
        case "r": document.getElementById("avatar").style.backgroundColor = "red";
            document.getElementById("colorOutput").value = "Rojo";
            break;
        case "a": document.getElementById("avatar").style.backgroundColor = 'blue';
            document.getElementById("colorOutput").value = "Azul";
            break;
        case "v": document.getElementById("avatar").style.backgroundColor = 'green';
            document.getElementById("colorOutput").value = "Verde";
            break;
    }

    document.getElementById("nombresOutput").value = nombres;
    document.getElementById("edadOutput").value = edad;
    document.getElementById("fechaNacimientoOutput").value = fechaNacimiento;
    document.getElementById("correoOutput").value = correo;
    document.getElementById("descripcionOutput").value = descripcion;

}

