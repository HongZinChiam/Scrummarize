import "./TaskCard.css"

function TaskCard({ task }) {

    const getTagClass = tag => {
        return "task-card__tag--" + tag.toLowerCase();
    }

    const getPriorityRatingClass = priorityRating => {
        return "task-card__priority-rating--" + priorityRating.toLowerCase();
    }

    return (
        <div className="task-card">
            <h3 className="task-card__row">{task.name}</h3>
            <div className="task-card__info task-card__row">
                <p className="task-card__story-point flex-center">{task.storyPoint}</p>
                <p className={`task-card__priority-rating ${getPriorityRatingClass(task.priorityRating)}`}>{task.priorityRating}</p>
            </div>
            <div className="task-card__tags task-card__row">
                {task.tags.map((tag, index) => (
                    <p key={index} className={`task-card__tag ${getTagClass(tag)}`}>{tag}</p>
                ))}
            </div>
        </div>
    )
}

export default TaskCard
