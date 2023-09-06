export async function loginUser() {
    try {
      // Define the URL for the login endpoint
      const loginUrl = 'https://example.com/api/login';
  
      // Create an object with the login credentials (username and password)
      const loginData = {
        username: 'your_username',
        password: 'your_password'
      };
  
      // Create a POST request with the fetch API
      const response = await fetch(loginUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Set the content type to JSON
        },
        body: JSON.stringify(loginData), // Convert the login data to JSON
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json(); // Parse the response as JSON
  
      // Handle the successful login response
      console.log('Login successful:', data);
      // You can perform further actions here, like redirecting the user.
  
    } catch (error) {
      // Handle errors, such as network issues or authentication failures
      console.error('Login failed:', error);
    }
  }
  
  