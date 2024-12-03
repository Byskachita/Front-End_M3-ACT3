document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#contactForm");
    const feedback = document.querySelector("#formFeedback");

    form.addEventListener("submit", (e) => {
        e.preventDefault(); // Evita el envío por defecto

        // Capturar los valores de los campos
        const name = form.querySelector("#name").value.trim();
        const email = form.querySelector("#email").value.trim();
        const phone = form.querySelector("#phone").value.trim();
        const message = form.querySelector("#message").value.trim(); // Nuevo campo

        let isValid = true; // Estado general de validación
        let validationMessage = "Datos ingresados:\n";

        // Validar nombre
        if (!name) {
            console.log("Error: El nombre no puede estar vacío.");
            validationMessage += "Nombre: No ingresado o inválido.\n";
            isValid = false;
        } else {
            console.log("Nombre ingresado:", name);
            validationMessage += `Nombre: ${name}\n`;
        }

        // Validar email
        if (!email || !email.includes("@") || !email.includes(".")) {
            console.log("Error: El email no es válido.");
            validationMessage += "Email: No ingresado o inválido.\n";
            isValid = false;
        } else {
            console.log("Email ingresado:", email);
            validationMessage += `Email: ${email}\n`;
        }

        // Validar número de teléfono
        if (!phone || isNaN(phone) || phone.length < 7) {
            console.log("Error: El teléfono no es válido.");
            validationMessage += "Teléfono: No ingresado o inválido.\n";
            isValid = false;
        } else {
            console.log("Teléfono ingresado:", phone);
            validationMessage += `Teléfono: ${phone}\n`;
        }

        // Validar mensaje
        if (!message) {
            console.log("Error: El mensaje no puede estar vacío.");
            validationMessage += "Mensaje: No ingresado.\n";
            isValid = false;
        } else {
            console.log("Mensaje ingresado:", message);
            validationMessage += `Mensaje: ${message}\n`;
        }

        // Mostrar retroalimentación al usuario
        if (isValid) {
            feedback.textContent = "Formulario enviado exitosamente.";
            feedback.classList.add("text-success");
            feedback.classList.remove("text-danger");

            alert("¡Gracias por proporcionar tus datos!\n" + validationMessage);
            console.log("Datos validados y correctos:", { name, email, phone, message });
            form.reset(); // Limpia el formulario
        } else {
            feedback.textContent = "Por favor, revise los datos ingresados.";
            feedback.classList.add("text-danger");
            feedback.classList.remove("text-success");

            alert("Por favor, revisa los datos ingresados:\n" + validationMessage);
        }
    });
});