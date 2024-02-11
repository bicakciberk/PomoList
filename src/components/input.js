import uniqid from "uniqid";

function Input({ value, setValue, isChecked }) {
  return (
    <div>
      <input
        type="text"
        className="p-[8px] bg-[#262626] outline-none text-[#808080] placeholder:text-[#808080] rounded-md w-[585px] 750px:w-[300px] 460px:w-[150px]"
        placeholder="Add To-do"
        onChange={(e) => setValue([e.target.value, uniqid(), isChecked])}
        value={value}
      />
    </div>
  );
}
export default Input;
