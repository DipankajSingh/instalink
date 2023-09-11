import { login_URL } from "../components/apiRoutes";
export async function loginUser(username, password) {
  const url = login_URL;

  const data = {
    id: username,
    password,
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("HTTP Error " + response.status);
    }

    const responseData = await response.json();
    console.log(responseData);

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
