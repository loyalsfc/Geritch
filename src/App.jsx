import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import { QueryClient, QueryClientProvider } from "react-query"

const queryClient = new QueryClient();

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <Outlet />
    </QueryClientProvider>
  )
}

export default App
