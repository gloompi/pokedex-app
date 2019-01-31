import axios from 'axios'

export const pokeServer = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
})