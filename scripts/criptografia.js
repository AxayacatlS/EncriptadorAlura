var mensaje = document.getElementById("txt-entrada");
var texto_encriptado = "";
var texto_desencriptado = "";

mensaje.addEventListener('input', function () {
    const originalValue = this.value;
    const lowercaseValue = originalValue.toLowerCase();
    const cleanValue = lowercaseValue.replace(/[^a-z\s\n]/g, '');
    this.value = cleanValue;
});

function cambiarContenido(miTexto) {
    var contenedor = document.getElementById('contenedor');
    var lblSalida = document.getElementById('lbl-salida');

    // Datos que deseas mostrar
    //var datos = "¡Estos son mis datos personalizados!";

    // Cambiar el contenido del contenedor con los datos personalizados
    contenedor.innerHTML = `
        <label id="lbl-salida" class="place">
            ${miTexto}
        </label>
    `;

    // Crear y agregar el botón "Copiar"
    var btnCopiar = document.createElement('button');
    btnCopiar.className = 'copiar';
    btnCopiar.onclick = Portapapeles;
    btnCopiar.innerText = 'Copiar';

    var divCopiar = document.createElement('div');
    divCopiar.id = 'btn-copiar';
    divCopiar.className = 'boton-copiar';
    divCopiar.appendChild(btnCopiar);
    contenedor.appendChild(divCopiar);
}

function EntradaVacia(mitexto) {
    return mitexto == "";
}

function Encriptar() {
    texto_encriptado = "";
    var texto = mensaje.value;
    if (!EntradaVacia(texto)) {
        for (var i = 0; i < texto.length; i++) {
            var letra = texto.charAt(i);
            switch (letra) {
                case "a":
                    texto_encriptado = texto_encriptado + "ai";
                    break;
                case "e":
                    texto_encriptado = texto_encriptado + "enter";
                    break;
                case "i":
                    texto_encriptado = texto_encriptado + "imes";
                    break;
                case "o":
                    texto_encriptado = texto_encriptado + "ober";
                    break;
                case "u":
                    texto_encriptado = texto_encriptado + "ufat";
                    break;
                default:
                    texto_encriptado = texto_encriptado + letra;
                    break;
            }
        }

        console.log(texto_encriptado);
        cambiarContenido(texto_encriptado);
    }
}
function Desencriptar() {
    texto_desencriptado = "";
    var texto = mensaje.value;
    var i = 0;
    if (!EntradaVacia(texto)) {
        while (i < texto.length) {
            var letra = texto.charAt(i);
            var auxiliar = "";
            switch (letra) {
                case "a":
                    auxiliar = texto.substring(i, (i + 2));
                    texto_desencriptado = texto_desencriptado + letra;
                    if (auxiliar == "ai") {
                        i = i + 1;
                    }
                    break;
                case "e":
                    auxiliar = texto.substring(i, (i + 5));
                    texto_desencriptado = texto_desencriptado + letra;
                    if (auxiliar == "enter") {
                        i = i + 4;
                    }
                    break;
                case "i":
                    auxiliar = texto.substring(i, (i + 4));
                    texto_desencriptado = texto_desencriptado + letra;
                    if (auxiliar == "imes") {
                        i = i + 3;
                    }
                    break;
                case "o":
                    auxiliar = texto.substring(i, (i + 4));
                    texto_desencriptado = texto_desencriptado + letra;
                    if (auxiliar == "ober") {
                        i = i + 3;
                    }
                    break;
                case "u":
                    auxiliar = texto.substring(i, (i + 4));
                    texto_desencriptado = texto_desencriptado + letra;
                    if (auxiliar == "ufat") {
                        i = i + 3;
                    }
                    break;
                default:
                    texto_desencriptado = texto_desencriptado + letra;
                    break;
            }
            i++;

            cambiarContenido(texto_desencriptado);
        }
        console.log(texto_desencriptado);
    }
}
function Portapapeles() {
    var copiarTexto = document.getElementById("btn-copiar");
    var textoLabel = document.getElementById("lbl-salida");
    var textToCopy = textoLabel.innerText;

    /* Crea un elemento de input temporal */
    var tempInput = document.createElement("input");
    tempInput.style.opacity = 0; // Hace que el input sea invisible
    tempInput.value = textToCopy;

    /* Agrega el elemento de input temporal al documento */
    document.body.appendChild(tempInput);

    /* Selecciona el texto dentro del elemento de input temporal */
    tempInput.select();
    tempInput.setSelectionRange(0, tempInput.value.length);

    /* Copia el texto al portapapeles */
    var copySuccessful = document.execCommand("copy");

    /* Remueve el elemento de input temporal */
    document.body.removeChild(tempInput);

    /* Alerta o mensaje de éxito o error */
    if (copySuccessful) {
        //alert("¡Texto copiado al portapapeles!");
    } else {
        //alert("Error al copiar el texto. Por favor, copia manualmente.");
    }
}
