import "./TaskEditor.css"

function TaskEditor() {

  const priorityRatings = ["Low", "Medium", "Important", "Urgent"]
  const tags = ["Frontend", "Backend", "API", "Database", "Framework", "Testing", "UI", "UX"]

  return (
    <section className="main-component">
      <label htmlFor="task-name" className="task-editor__heading">Task Name</label>
      <input id="task-name" className="task-editor__input task-editor__input--text blue-container" />

      <label htmlFor="description" className="task-editor__heading">Description</label>
      <textarea id="description" className="task-editor__input task-editor__input--text blue-container"></textarea>

      <label htmlFor="story-point" className="task-editor__heading">Story Point</label>
      <input id="story-point" className="task-editor__input task-editor__input--normal blue-container" type="number" min="0" />

      <label htmlFor="priority-rating" className="task-editor__heading">Priority Rating</label>
      <select id="priority-rating" className="task-editor__input task-editor__input--normal blue-container">
        {priorityRatings.map((priorityRating, index) => (
          <option key={index}>{priorityRating}</option>
        ))}
      </select>

      <label className="task-editor__heading">Tags</label>
      <div className="task-editor__input blue-container">
        {tags.map((tag, index) => (
          <div key={index} className="task-editor__tag">
            <label htmlFor={tag.toLowerCase()}>{tag}</label>
            <input id={tag.toLowerCase()} className="task-editor__input--checkbox" type="checkbox" />
          </div>
        ))}
      </div>

      <label htmlFor="assignee" className="task-editor__heading">Assignee</label>
      <select id="assignee" className="task-editor__input task-editor__input--normal blue-container">
        <option>None</option>
      </select>

      <label className="task-editor__heading">Status</label>
      <p className="task-editor__input task-editor__input--normal blue-container">Not Started</p>

      <label className="task-editor__heading">Stage</label>
      <p className="task-editor__input task-editor__input--normal blue-container">Planning</p>
    </section>
  )
}

export default TaskEditor
