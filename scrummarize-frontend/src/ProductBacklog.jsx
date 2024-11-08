import { useState } from "react"
import "./ProductBacklog.css"
import TaskCard from "./TaskCard"

function ProductBacklog() {

  const [tasks, setTasks] = useState([
    {
      id: 1,
      name: "Task #1",
      storyPoint: 100,
      priorityRating: "Important",
      tags: [
        "Frontend", "Backend", "API", "Database", 
        "Framework", "Testing", "UI", "UX"
      ]
    },
    {
      id: 2,
      name: "Task #2",
      storyPoint: 1,
      priorityRating: "Urgent",
      tags: [
        "Frontend"
      ]
    }
  ])

  return (
    <section className="product-backlog">
        <h2>Product Backlog</h2>
        <div className="product-backlog__task-list">
          {tasks.map(task => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
    </section>
  )
}

export default ProductBacklog
