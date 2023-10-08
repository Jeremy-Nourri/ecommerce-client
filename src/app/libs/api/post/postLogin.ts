import axios from "axios";
import LoginUser from "@/interfaces/loginUser.interface";

export default async function postLogin(loginUser: LoginUser): Promise<number> {
  try {
    const response = await axios.post<number>(
      `http://localhost:4000/login`,
      loginUser
    );

    return response.status

  }
  catch (error) {
    if (axios.isAxiosError(error)) {
      return error.response!.status
    }
    else {
      return 500
    }
  }
}