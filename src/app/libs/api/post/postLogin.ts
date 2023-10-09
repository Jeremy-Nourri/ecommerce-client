import axios, { AxiosResponse } from "axios";
import LoginUserInterface from "@/interfaces/loginUser.interface";

export default async function postLogin(loginUser: LoginUserInterface): Promise<AxiosResponse> {
  try {
    const response = await axios.post<AxiosResponse>(
      `http://localhost:4000/login`,
      loginUser,
      { withCredentials: true }
    );
    console.log(response.headers['set-cookie']);
    return response
  }
  catch (error) {
    console.log(error)
    if (axios.isAxiosError(error)) {
      return error.response as AxiosResponse<any>
    }
    else {
      return error as AxiosResponse<any>
    }
  }
}

