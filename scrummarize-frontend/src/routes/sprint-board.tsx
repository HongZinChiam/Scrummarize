import { createFileRoute } from '@tanstack/react-router'
import "../SprintBoard.css"
import SprintCard from '../SprintCard'

export const Route = createFileRoute('/sprint-board')({
  component: SprintBoard,
})

function SprintBoard() {
  const sprints = [
    {
      sprintID: "1",
      name: "sprint hehe",
      startDate: new Date(2025, 3, 15),
      endDate: new Date(2025, 6, 29),
      status: "Not Started"
    },
    {
      sprintID: "2",
      name: "sprint 22222",
      startDate: new Date(2025, 7, 20),
      endDate: new Date(2025, 9, 1),
      status: "Not Started"
    }
  ]


  return (
    <section className="main__section">
      <h2>Sprint Board</h2>

      <div className="main__section__list">
        {
          sprints.map(sprint => <SprintCard key={sprint.sprintID} sprint={sprint} />)
        }
      </div>

    </section>
  )
}
