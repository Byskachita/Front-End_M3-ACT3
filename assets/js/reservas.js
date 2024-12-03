// Validación del formulario

document.addEventListener("DOMContentLoaded", () => {
    const medicalCenters = [
      { id: "1", name: "Divem Providencia" },
      { id: "2", name: "Divem Santiago" },
      { id: "3", name: "Divem Macul" },
      { id: "4", name: "Divem Ñuñoa" },
      { id: "5", name: "Divem La Florida" }
    ];
  
    const specialties = [
      { id: "1", centerId: "1", name: "Cardiología" },
      { id: "2", centerId: "1", name: "Ginecología" },
      { id: "3", centerId: "2", name: "Ortopedia" },
      { id: "4", centerId: "3", name: "Pediatría" },
      { id: "4", centerId: "4", name: "Pediatría" },
      { id: "1", centerId: "2", name: "Cardiología" },
      { id: "3", centerId: "4", name: "Ortopedia" }
    ];
  
    const doctors = [
      { id: "1", specialtyId: "1", name: "Dr. Martínez" },
      { id: "2", specialtyId: "2", name: "Dra. López" },
      { id: "3", specialtyId: "3", name: "Dr. Pérez" },
      { id: "4", specialtyId: "4", name: "Dra. Gómez" },
      { id: "5", specialtyId: "1", name: "Dra. Pérez" },
      { id: "6", specialtyId: "3", name: "Dra. Torres" },
      { id: "7", specialtyId: "4", name: "Dra. González" }
    ];
  
    const medicalCenterSelect = document.querySelector("#selectMedicalCenter");
    const specialtySelect = document.querySelector("#selectSpecialty");
    const doctorSelect = document.querySelector("#selectDoctor");
  
    // Llenar centros médicos
    medicalCenters.forEach((center) => {
      const option = document.createElement("option");
      option.value = center.id;
      option.textContent = center.name;
      medicalCenterSelect.appendChild(option);
    });
  
    // Cambiar especialidades al seleccionar un centro médico
    medicalCenterSelect.addEventListener("change", () => {
      const selectedCenterId = medicalCenterSelect.value;
  
      // Limpiar especialidades y doctores
      specialtySelect.innerHTML = `<option value="" selected>Seleccionar</option>`;
      doctorSelect.innerHTML = `<option value="" selected>Seleccionar</option>`;
  
      // Filtrar y mostrar especialidades del centro seleccionado
      const filteredSpecialties = specialties.filter(
        (specialty) => specialty.centerId === selectedCenterId
      );
  
      filteredSpecialties.forEach((specialty) => {
        const option = document.createElement("option");
        option.value = specialty.id;
        option.textContent = specialty.name;
        specialtySelect.appendChild(option);
      });
    });
  
    // Cambiar doctores al seleccionar una especialidad
    specialtySelect.addEventListener("change", () => {
      const selectedSpecialtyId = specialtySelect.value;
  
      // Limpiar doctores
      doctorSelect.innerHTML = `<option value="" selected>Seleccionar</option>`;
  
      // Filtrar y mostrar doctores de la especialidad seleccionada
      const filteredDoctors = doctors.filter(
        (doctor) => doctor.specialtyId === selectedSpecialtyId
      );
  
      filteredDoctors.forEach((doctor) => {
        const option = document.createElement("option");
        option.value = doctor.id;
        option.textContent = doctor.name;
        doctorSelect.appendChild(option);
      });
    });

    // Validación del formulario con try/catch
  document.querySelector("#hospitalForm").addEventListener("submit", (event) => {
    event.preventDefault(); // Evita el envío automático del formulario

    try {
      const ageInput = document.querySelector("#age").value;
      const emailInput = document.querySelector("#email").value;

      // Validar edad
      if (!ageInput || isNaN(ageInput) || ageInput <= 0 || ageInput > 100) {
        throw new Error("La edad ingresada no es válida. Debe ser un número entre 1 y 120.");
      }

      // Validar email
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(emailInput)) {
        throw new Error("El correo electrónico ingresado no tiene un formato válido.");
      }

      // Validar selección de médico
      if (!doctorSelect.value) {
        throw new Error("Por favor, seleccione un doctor.");
      }

      // Mostrar éxito
      formFeedback.textContent = "Formulario enviado con éxito.";
      formFeedback.classList.remove("text-danger");
      formFeedback.classList.add("text-success");

      alert("Formulario enviado correctamente.");
    } catch (error) {
      // Mostrar error
      formFeedback.textContent = error.message;
      formFeedback.classList.remove("text-success");
      formFeedback.classList.add("text-danger");

      alert(`Error: ${error.message}`);

      // Usar debugger para rastrear errores
      debugger;
    }
  });
});

 