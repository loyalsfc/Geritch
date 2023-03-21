import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import { QueryClient, QueryClientProvider } from "react-query"

const queryClient = new QueryClient();

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <div className="overflow-hidden relative">
        <Header />
        <Outlet />
      </div>
    </QueryClientProvider>
  )
}

export default App
