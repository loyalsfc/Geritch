import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import { QueryClient, QueryClientProvider } from "react-query"
import { getUserDetail } from "./app/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getSaveMeal } from "./app/savesSlice";

const queryClient = new QueryClient();

function App() {
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getUserDetail())
  }, [])

  useEffect(()=>{
    if(user?.user){
      const userId = user?.user?.id
      dispatch(getSaveMeal(userId))
    }
  }, [user])

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
