import axios from 'axios';
axios.defaults.withCredentials = true;
import UserAccountInterface from '@/interfaces/userAccount.interface';
import { cookies } from 'next/headers';

export default async function getUserAccount(): Promise<UserAccountInterface> {

  const cookieStore = cookies()
  const token = cookieStore.get('accessToken')

  try {
    const headers: { withCredentials: boolean; Cookie?: string } = { withCredentials: true };
    if (token) {
      headers['Cookie'] = `accessToken=${token.value}`;
    }
    const { data } = await axios.get<UserAccountInterface>(
      `http://localhost:4000/account`,
      { headers }
    );
    return data;
  }
  catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}