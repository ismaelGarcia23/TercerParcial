function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        let cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            let cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

function validarFormulario(event) {
    event.preventDefault();  // Prevenir la recarga del formulario

    let claveNueva = document.getElementById("claveNueva").value;
    let confirmarClave = document.getElementById("confirmarClave").value;
    let email = document.getElementById('correo').value;
    let expendiente = document.getElementById('expendiente').value;

    if (claveNueva.length < 8 || claveNueva.length > 16) {
        mostrarError("La clave debe tener entre 8 y 16 caracteres");
        return false; 
    }

    if (claveNueva !== confirmarClave) {
        mostrarError("Las claves no coinciden");
        return false; 
    }

    let regexMayusculas = /[A-Z]/;
    let regexMinusculas = /[a-z]/;
    let regexNumeros = /[0-9]/;

    if (!regexMayusculas.test(claveNueva) || !regexMinusculas.test(claveNueva) || !regexNumeros.test(claveNueva)) {
        mostrarError("La clave debe contener al menos una mayúscula, una minúscula y un número");
        return false; 
    }

    let formData = new FormData();
    formData.append('correo', email);
    formData.append('expendiente', expendiente);
    formData.append('claveNueva', claveNueva);

    fetch('/myapp/guardar-usuario/', {
        method: 'POST',
        body: formData,
        headers: {
            'X-CSRFToken': getCookie('csrftoken')
        }
    })
    .then(response => {
        if (response.ok) {
            return response.text(); // Leer el texto de la respuesta
        } else {
            throw new Error('Hubo un problema al intentar guardar el usuario');
        }
    })
    .then(data => {
        if (data === 'ok') {
            alert('Usuario guardado correctamente');
            // Aquí puedes añadir más acciones si es necesario, como redireccionar
        } else {
            alert('Hubo un error al intentar guardar el usuario');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Hubo un error al intentar guardar el usuario');
    });
    

    return false;
}