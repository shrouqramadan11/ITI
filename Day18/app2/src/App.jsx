import { createBrowserRouter , RouterProvider } from "react-router-dom"
import Layout from "./Layout"
import Home from "./components/Home/Home"
import About from "./components/About/About"
import Gallery from "./components/Gallery/Gallery"

export default function App() {
  const routes=createBrowserRouter([
    {path:`/` , element:<Layout /> ,children: [
      {index: true , element:<Home />},
      {path:`/about` , element:<About />},
      {path:`/gallery` , element:<Gallery />},
    ]}
  ])
  return (
    <>
    <RouterProvider router={routes} />
    </>
  )
}
