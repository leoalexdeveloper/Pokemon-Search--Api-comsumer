import axios from 'axios'

export const Api = {
  async get(url: string){
    return await axios.get(url).then(response => response.data)
  }
}
