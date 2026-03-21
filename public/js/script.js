(() => {
  'use strict'

  // Bootstrap 5 validation
  const forms = document.querySelectorAll('.needs-validation');

  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      // Check validity
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }

      // Add Bootstrap validation class to show red/green borders
      form.classList.add('was-validated');
    }, false);
  });
})();