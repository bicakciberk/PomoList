import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
function Navbar({ isOpen, setIsOpen }) {
  return (
    <div className="flex items-center justify-between w-full relative">
      <p className="text-[#8284fa] font-medium z-[10]">PomoList</p>
      <div className="flex w-full items-center justify-center absolute right-2/4 left-2/4 -translate-x-2/4">
        <p className="text-[#8284fa] font-medium cursor-pointer">Focus</p>
        <p className="text-[#8284fa] font-medium ml-[10px] cursor-pointer">
          Break
        </p>
      </div>
      <FontAwesomeIcon
        icon={faGear}
        style={{ cursor: "pointer", zIndex: 10 }}
        className="text-white hover:text-[#8284fa] duration-150"
        onClick={() => setIsOpen(true)}
      />
    </div>
  );
}
export default Navbar;
