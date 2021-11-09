import Axios, { AxiosResponse } from 'axios'
import Bot from 'models/Bot'

const axios = Axios.create({
  baseURL: 'https://backend.isbotdown.com',
  headers: {
    'Content-Type': 'application/json',
  },
})

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error(error)
    throw error
  }
)

export async function getBots(skip: number, limit: number) {
  const { data }: AxiosResponse<Bot[]> = await axios.get(
    `/bots?skip=${skip}&limit=${limit}`
  )
  return data
}

export async function getBot(username: string) {
  const { data }: AxiosResponse<Bot> = await axios.get(`/bots/${username}`)
  return data
}
