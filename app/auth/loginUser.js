import { login_URL } from "../components/apiRoutes";
/**
 * Logs in a user with the given username and password.
 *
 * @param {string} username - The username of the user.
 * @param {string} password - The password of the user.
 * @return {Promise<"feed" | "signup" | "login Error">} The page to redirect to after login.
 */
export async function loginUser(username, password) {
  const url = login_URL;
  const data = { id: username, password };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      console.log("Error:", response);
    }

    const responseData = await response.json();

    if (responseData.success) {
      localStorage.setItem("token", responseData.token);
      return "feed";
    } else {
      return "signup";
    }
  } catch (error) {
    console.error("Error:", error);
    return "login Error";
  }
}
