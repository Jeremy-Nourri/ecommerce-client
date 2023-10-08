import axios from "axios";
import NewUserInterface from "@/interfaces/newUser.interface";

export default async function postNewUser(newUser: NewUserInterface): Promise<number> {
  try {
    const response = await axios.post<number>(
      `http://localhost:4000/signup`,
      newUser,
      { withCredentials: true }

    );

    response.headers['set-cookie'];

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
