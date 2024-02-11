function Btn(props) {
  return (
    <div>
      <button
        style={{
          marginTop: props.mt,
          marginLeft: props.ml,
          paddingLeft: props.px,
          paddingRight: props.px,
          fontWeight: props.fontWeight,
        }}
        className="bg-[#1E6F9F] text-white p-[8px] rounded-md hover:bg-[#4EA8DE] duration-150"
        onClick={props.onclick}
      >
        {props.text}
      </button>
    </div>
  );
}

export default Btn;
