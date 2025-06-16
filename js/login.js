document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('loginForm');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = document.getElementById('inputEmail').value;
        const password = document.getElementById('inputPassword').value;
        
        // Validar campos vacíos
        if (!email || !password) {
            Swal.fire({
                icon: 'warning',
                title: 'Campos requeridos',
                text: 'Por favor completa todos los campos'
            });
            return;
        }
        
        // Simular login
        if (email === 'usuario@ejemplo.com' && password === '123456') {
            // Login exitoso
            Swal.fire({
                icon: 'success',
                title: '¡Bienvenido!',
                text: 'Redirigiendo a la pagina principal...',
                timer: 2000,
                showConfirmButton: false,
                allowOutsideClick: false
            }).then(() => {
                // Redireccionar al dashboard
                window.location.href = './html/pagina_principal.html';
            });
        } else {
            // Login fallido
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Credenciales incorrectas!",
                footer: '<a href="html/Recuperar.html">¿Olvidaste tu contraseña?</a>'
            });
        }
    });
});