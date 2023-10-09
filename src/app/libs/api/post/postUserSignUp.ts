import axios from "axios";
import UserSignUpInterface from "@/interfaces/userSignUp.interface";

export default async function postUserSignUp(newUser: UserSignUpInterface): Promise<number> {
  try {
    const response = await axios.post<number>(
      `http://localhost:4000/signup`,
      newUser,
      { withCredentials: true }

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
