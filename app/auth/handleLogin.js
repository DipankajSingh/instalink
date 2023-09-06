import { useDispatch } from "react-redux";
import { login } from "../data/authSlice";

export async function loginUser({userId,password}) {
    const dispatch=useDispatch()
    try {
      const loginUrl = 'http://localhost:80/login';
  
      const loginData = {
        username: 'your_username',
        password: 'your_password'
      };
  
      const response = await fetch(loginUrl);
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json(); 
  
      dispatch(login())
      console.log(userId,password)

      console.log('Login successful:', data.data);
  
    } catch (error) {
      console.error(error);
    }
  }
  
  