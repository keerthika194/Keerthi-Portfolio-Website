async function handleSubmit(event) {
  event.preventDefault();

  const form = event.target;
  const submitBtn = document.getElementById('submit-btn');
  const submitText = document.getElementById('submit-text');
  const modal = document.getElementById('success-modal');

  // Remove any previous error message
  const prevError = document.getElementById('contact-error');
  if (prevError) prevError.remove();

  // Show loading state (just disable the button)
  submitText.textContent = 'Sending...';
  submitBtn.disabled = true;

  const formData = new FormData();
  formData.append('name', form.name.value);
  formData.append('email', form.email.value);
  formData.append('message', form.message.value);

  try {
    const response = await fetch('https://script.google.com/macros/s/AKfycbxP93T06NfPkGdIlUAyT1OVIosRuWblKcEhkiGUKqahxA-kQ_c75LuEY68yhpGkFE_Q/exec', {
      method: 'POST',
      body: formData
    });

    if (response.ok) {
      form.reset();
      modal.classList.remove('hidden');
    } else {
      alert("Failed to submit. Please try again.");
    }
  } catch (error) {
    console.error("Submission error:", error);
    alert("An error occurred. Please try again.");
  } finally {
    // Reset button state
    submitText.textContent = 'Send Message';
    submitBtn.disabled = false;
  }
} 