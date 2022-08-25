import React from 'react'
import { render, screen, waitForElementToBeRemoved, waitFor } from '@testing-library/react'
import App from './App'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
const queryClient = new QueryClient()

const server = setupServer(
  rest.get('https://pokeapi.co/api/v2/pokemon/ditto', async (req, res, ctx) => {
    return res(
      ctx.json({
        name: 'Hello',
        description: 'Text',
      })
    )
  })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('renders mock data "Hello"', async () => {
  render(
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  )

  await waitFor(() => expect(screen.getByText(/loading.../i)).toBeInTheDocument())
})
