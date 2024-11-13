import { useState } from "react"
import "./ProductBacklog.css"
import TaskCard from "./TaskCard.jsx"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus, faUpDownLeftRight } from "@fortawesome/free-solid-svg-icons"

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
    <section className="main-component">
        <h2>Product Backlog</h2>

        <div className="product-backlog__section">
          {tasks.map(task => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>

        <div className="product-backlog__section product-backlog__section--buttons">
          <button className="product-backlog__button">
            <FontAwesomeIcon icon={faPlus} />
            <p>Add</p>
          </button>

          <button className="product-backlog__button">
            <FontAwesomeIcon icon={faUpDownLeftRight} />
            <p>Move</p>
          </button>
        </div>
    </section>
  )
}

export default ProductBacklog
