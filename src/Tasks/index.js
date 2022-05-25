import "./style.css";

const Tasks = (props) => (
  <ul className="tasks">
    {props.tasks.map((task) => (
      <li
        key={task.id}
        className={`"tasks__item {
        task.done && props.hideDoneTasks ? "tasks__item--hidden" : ""
      }`}
      >
        <button class="tasks__button tasks__button--done js-done">
          {task.done ? "✔" : " "}
        </button>
        <span
          class={`"tasks__content${task.done ? " tasks__content--done" : ""}"`}
        >
          {task.content}
        </span>
        <button class="tasks__button tasks__button--remove js-remove">🗑</button>
      </li>
    ))}
  </ul>
);

export default Tasks;
