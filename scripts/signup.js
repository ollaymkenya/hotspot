document.addEventListener('DOMContentLoaded', () => {
  const signupForm = document.getElementById('signupForm');
  console.log({ signupForm });

  signupForm.addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    const formData = new FormData(signupForm);
    var formDataObj = {};
    formData.forEach((value, key) => (formDataObj[key] = value));

    try {
      const response = await fetch(signupForm.action, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formDataObj),
      });

      if (response.ok) {
        // If the request was successful, redirect the user to the success page
        window.location.href = '/hotspot/create-user-success.html'; // Replace with the URL of your success page
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
