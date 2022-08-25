import React, { useEffect } from 'react'
import './App.css'
import { customReactQuery } from './customHook'

function App() {
  const { mutate, data, status, isLoading, isError } = customReactQuery()
  console.log('STATUS: ', status)

  useEffect(() => {
    mutate()
  }, [])

  if (isLoading) return 'Loading...'

  if (isError) return 'An error has occurred: '

  return (
    <div className='App'>
      <h1>Name: {data?.name}</h1>
      <p>{data?.description}</p>
    </div>
  )
}

export default App
