import { verify_URL } from "../components/apiRoutes";

/**
 * Only for use in useEffect hook.
 * Checks if the user is verified.
 *
 * @return {Promise<boolean>} - Returns true if the user is verified, otherwise false.
 */
export const isVerified = async () => {
  const token = localStorage.getItem("token");
  let isVerified = false;

  try {
    if (token) {
      const response = await fetch(verify_URL, {
        method: "POST",
        headers: {
          authorization: token,
        },
      });
      const data = await response.json();
      isVerified = data.success === true;
    }
  } catch (error) {
    console.log("network error");
  }

  return isVerified;
};
