import axios from 'axios'
import { useQuery, useMutation } from '@tanstack/react-query'

export const customGet = () => {
  return axios.get('https://pokeapi.co/api/v2/pokemon/ditto').then((res) => res.data)
}

// eslint-disable-next-line react-hooks/rules-of-hooks
export const customReactQuery = (opts) =>
  useMutation(customGet, {
    ...opts,
  })
