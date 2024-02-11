import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function Settings({ isOpen, setIsOpen, minute, setMinute }) {
  return (
    <div
      className="bg-dark settings rounded-md flex-col p-[20px] absolute text-[#D3D3D3] w-[653px] 750px:w-[368px] 460px:w-[218px]"
      style={isOpen ? { display: "flex" } : { display: "none" }}
    >
      <div className="top w-full flex justify-between items-center pb-[10px] mb-[10px]">
        <p className="text-lg w-full">Settings</p>
        <FontAwesomeIcon
          className="hover:text-[#8284fa] duration-150 cursor-pointer text-[#D3D3D3] text-lg"
          icon={faXmark}
          onClick={() => setIsOpen(false)}
        />
      </div>
      <div className="main flex flex-col">
        <div className="card flex justify-between max-w-min">
          <p className="whitespace-nowrap">Theme:</p>
          <div className="box ml-[10px] flex cursor-pointer">
            <div className="moon w-2/4 bg-dark p-[5px]"></div>
            <div className="moon w-2/4 bg-grey p-[5px]"></div>
          </div>
          <div className="box ml-[10px] flex cursor-pointer">
            <div className="moon w-2/4 bg-[#ba4949] p-[5px]"></div>
            <div className="moon w-2/4 bg-grey p-[5px]"></div>
          </div>
          {/* <div className="box ml-[10px] flex cursor-pointer">
            <div className="moon w-2/4 bg-slate-600 p-[5px]"></div>
            <div className="moon w-2/4 bg-blue-600 p-[5px]"></div>
          </div> */}
        </div>
        <div className="card">
          <p>
            Focus:{" "}
            <input
              type="number"
              className="bg-transparent outline-none max-w-[40px]"
              value={minute}
              onChange={(e) => setMinute(e.target.value)}
            />
          </p>
        </div>
        <div className="card">
          <p>
            Break:{" "}
            <input
              type="number"
              className="bg-transparent outline-none max-w-[40px]"
              value={10}
            />
          </p>
        </div>
      </div>
    </div>
  );
}

export default Settings;
