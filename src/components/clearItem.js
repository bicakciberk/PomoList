function ClearItem({ deleteAllItems }) {
  return (
    <div
      className="text-[#8284fa] font-medium cursor-pointer"
      onClick={() => deleteAllItems()}
    >
      Clear
    </div>
  );
}
export default ClearItem;
