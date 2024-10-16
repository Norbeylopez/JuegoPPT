class Login {

    constructor() {
        this.registro = JSON.parse(localStorage.getItem('registro')); // Captura los datos del localStorage
    }

    validarCredenciales() {
        let username = document.getElementById('username').value;
        let password = document.getElementById('password').value;
        let errorMessage = document.getElementById('error-message');

        if (this.registro && this.registro.length > 0) {
            let storedUser = this.registro[0].username;
            let storedPassword = this.registro[0].password;

            // Validar que los datos ingresados coincidan con los registrados
            if (username === storedUser && password === storedPassword) {
                alert('Inicio de sesión exitoso');
                // Redirigir a otra página si es necesario:
                // window.location.href = 'dashboard.html';
            } else {
                errorMessage.textContent = 'Usuario o contraseña incorrectos';
            }
        } else {
            errorMessage.textContent = 'No hay usuarios registrados.';
        }
    }

    generarEvento() {
        let btn = document.getElementById('btn-login');
        btn.addEventListener('click', (e) => {
            e.preventDefault(); // Evitar el envío del formulario
            this.validarCredenciales();
            window.location.href="index.html";
        });
    }
}

let login = new Login();
login.generarEvento();
