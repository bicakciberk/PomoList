import ClearItem from "./clearItem";

function ClearItemMenu({ deleteAllItems }) {
  return (
    <div className="flex justify-end w-[653px] 750px:w-[368px] 460px:w-[218px] pb-[20px]">
      <ClearItem deleteAllItems={deleteAllItems}></ClearItem>
    </div>
  );
}
export default ClearItemMenu;
