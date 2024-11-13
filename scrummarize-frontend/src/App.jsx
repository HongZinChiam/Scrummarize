import ProductBacklog from './ProductBacklog.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import RootLayout from './RootLayout.jsx'
import TaskEditor from './TaskEditor.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="product-backlog">
        <Route index element={<ProductBacklog />} />
        <Route path="task-editor" element={<TaskEditor />} />
      </Route>
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
