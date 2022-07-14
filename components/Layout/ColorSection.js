export default function ColorSection(props) {
  return (
    <div
      className="h-screen w-screen mx-auto relative "
      style={{ backgroundColor: props.color }}
    >
      <div
        className="absolute w-screen h-20 -top-20 rounded-t-full "
        style={{ backgroundColor: props.color }}
      ></div>
      {props.children}
    </div>
  );
}
