import axios from 'axios';

export async function fetchData(): Promise<string> {
  const response = await axios.get('https://api.example.com/data&#39');
  return response.data;
}
