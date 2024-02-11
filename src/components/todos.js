import Todo from "./todo";

function Todos({ items, isChecked, setIsChecked, deleteTodo }) {
  // let localItems = JSON.parse(localStorage.getItem("myLocalTodos")) || [];

  return (
    <div className="w-[653px] 750px:w-[368px] 460px:w-[218px] mt-[10px]">
      {items.map((item, i) => (
        <div key={i * 0.5}>
          <Todo
            isChecked={isChecked}
            setIsChecked={setIsChecked}
            item={item[0]}
            id={item[1]}
            completed={item[2]}
            deleteTodo={deleteTodo}
          ></Todo>
        </div>
      ))}
    </div>
  );
}
export default Todos;
