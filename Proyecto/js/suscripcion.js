window.addEventListener('load', init, false);

function init() {
  const form = document.getElementById('form2');
  const emailInput = document.getElementById('inscriptionTxt');
  const alerta = document.getElementById('mensajeAlert');
  const expressionEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

  form.addEventListener('submit', function(e) {
    e.preventDefault(); // evita recargar la página

    const emailValue = emailInput.value.trim();

    if (emailValue === '') {
      alerta.textContent = 'El campo email está vacío';
      alerta.classList.add('alertaRoja');
      alerta.classList.remove('alertaVerde');
      return;
    }

    if (!expressionEmail.test(emailValue)) {
      alerta.textContent = 'El email no es válido';
      alerta.classList.add('alertaRoja');
      alerta.classList.remove('alertaVerde');
      return;
    }

    emailjs.sendForm('service_zu9vtqx', 'template_k3k4nl9', '#form2', 'VFHykJaacYKWKWlnL')
      .then(() => {
        alerta.textContent = 'La suscripción fue exitosa';
        alerta.classList.add('alertaVerde');
        alerta.classList.remove('alertaRoja');
        form.reset();
      }, (error) => {
        alerta.textContent = 'Hubo un error al enviar la suscripción';
        alerta.classList.add('alertaRoja');
        alerta.classList.remove('alertaVerde');
        console.error('Error al enviar:', error);
      });
  });
}
