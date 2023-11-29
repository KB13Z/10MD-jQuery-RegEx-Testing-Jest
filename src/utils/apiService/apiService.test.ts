import axios from 'axios';
import { fetchData } from './apiService';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('fetchData', () => {
  test('fetches erroneously data from an API', async () => {
    const errorMessage = 'Network error';
    mockedAxios.get.mockImplementationOnce(() => Promise.reject(new Error(errorMessage)));
    await expect(fetchData()).rejects.toThrow(errorMessage);
  });
});
