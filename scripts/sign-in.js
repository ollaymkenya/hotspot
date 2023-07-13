document.addEventListener('DOMContentLoaded', () => {
  const signinForm = document.getElementById('signinForm');
  console.log({ signinForm });

  signinForm.addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    const formData = new FormData(signinForm);
    var formDataObj = {};
    formData.forEach((value, key) => (formDataObj[key] = value));

    try {
      const response = await fetch(signinForm.action, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formDataObj),
      });

      if (response.ok) {
        const data = await response.json();
        console.log({data});
        alert('You have successfully paid');
      } else {
        // If the request failed, display an error message
        alert('Failed to create user. Please try again.');
      }
    } catch (error) {
      console.error('Error occurred during form submission:', error);
      alert('An unexpected error occurred. Please try again later.');
    }
  });
});
