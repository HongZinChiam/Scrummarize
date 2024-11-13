import { Outlet } from "react-router-dom"
import Header from "./Header"
import './App.css'

function RootLayout() {
  return (
    <>
      <Header />
      <main className="main">
        <Outlet />
      </main>
    </>
  )
}

export default RootLayout
