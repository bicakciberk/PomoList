import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function Todo({ item, setIsChecked, isChecked, id, deleteTodo, completed }) {
  return (
    <div
      className="text-white w-full flex justify-between items-center mb-[10px]"
      id={id}
      value={completed}
    >
      <div className="left">
        <input
          className="cursor-pointer h-[20px] w-[20px] appearance-none bg-transparent border-2 rounded-full checked:border-transparent"
          style={
            completed
              ? { backgroundColor: "#8284fa", border: "1px solid #8284fa" }
              : { border: "1px solid #8284fa" }
          }
          type="checkbox"
          onChange={() => setIsChecked(!isChecked)}
        />
      </div>
      <div
        className="center"
        style={completed ? { textDecorationLine: "line-through" } : {}}
      >
        {item}
      </div>

      <FontAwesomeIcon
        onClick={() => deleteTodo(id)}
        className="right cursor-pointer"
        icon={faTrash}
      />
    </div>
  );
}
export default Todo;
