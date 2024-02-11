// Dear programmer:
// When I wrote this code, only god and
// I knew how it worked
//
// Therefore, if you are trying to optimize
// this routine and it fails (most surely),
// please increase this counter as a
// warning for the next person:
//
// total hours wasted here = 9
//

import Input from "./components/input";
import Btn from "./components/btn";
import Counter from "./components/counter";
import Todos from "./components/todos";
import Stats from "./components/stats";
import { useState, useEffect, useRef } from "react";
import Navbar from "./components/navbar";
import ClearItemMenu from "./components/clearItemMenu";
import Settings from "./components/settings";

function App() {
  const [value, setValue] = useState("");
  const [newArr, setNewArr] = useState([]);
  const [isChecked, setIsChecked] = useState(false);
  const [second, setSecond] = useState(0);
  const [minute, setMinute] = useState(40);
  const [startText, setStarText] = useState("START");
  // eslint-disable-next-line no-unused-vars
  const [isOpen, setIsOpen] = useState(false);
  const [count, setCount] = useState(0);

  let localItems = JSON.parse(localStorage.getItem("myLocalTodos")) || [];
  let intervalRef = useRef(null);

  if (newArr.length > 0 || newArr.length === 0) {
    localStorage.setItem("myLocalTodos", JSON.stringify(newArr));
  }

  function addTodo() {
    if (value === "") {
      return;
    } else if (value.length === 0) {
      return;
    } else if (value === " ") {
    } else {
      setNewArr((it) => [...it, value]);
      setValue(" ");
    }
  }

  function deleteAllItems() {
    setNewArr([]);
  }
  function deleteTodo(id) {
    setNewArr(newArr.filter((item) => item[1] !== id));
  }

  function start() {
    if (count % 2 !== 0) {
      intervalRef.current = setInterval(() => {
        setSecond((e) => e - 1);
      }, 1000);
      setStarText("STOP");
    } else if (count % 2 === 0) {
      setStarText("START");
      clearInterval(intervalRef.current);
    }
    setCount(() => count + 1);
  }

  useEffect(() => {
    start();
  }, []);

  useEffect(() => {
    setNewArr(localItems);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="h-screen overflow-hidden">
      <div className="top h-[30vh] bg-dark flex items-center flex-col justify-center">
        <div className="w-[653px] 750px:w-[368px] 460px:w-[218px] flex flex-col justify-center items-center">
          <Navbar isOpen={isOpen} setIsOpen={setIsOpen}></Navbar>
          <Counter
            second={second}
            minute={minute}
            setSecond={setSecond}
            setMinute={setMinute}
          ></Counter>
          <Btn
            onclick={start}
            text={startText}
            fontWeight="500"
            px="30px"
            mt="10px"
            ml="0px"
          ></Btn>
        </div>
      </div>
      <div className="bottom flex flex-col items-center h-full bg-grey">
        <div className="flex w-full justify-center pt-[20px] items-center pb-[20px]">
          <Input
            isChecked={isChecked}
            value={value[0]}
            setValue={setValue}
          ></Input>
          <Btn onclick={addTodo} text="Add +" mt="0px" ml="8px"></Btn>
        </div>
        <ClearItemMenu deleteAllItems={deleteAllItems}></ClearItemMenu>

        <Stats total={newArr.length}></Stats>
        <Todos
          isChecked={isChecked}
          setIsChecked={setIsChecked}
          items={newArr}
          deleteTodo={deleteTodo}
        ></Todos>
        <Settings
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          minute={minute}
          setMinute={setMinute}
        ></Settings>
      </div>
    </div>
  );
}

export default App;
