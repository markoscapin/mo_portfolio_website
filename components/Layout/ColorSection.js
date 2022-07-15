import { useEffect, useState } from "react";
export default function ColorSection(props) {
  const [color, setColor] = useState("#fff");
  const [children, setChildren] = useState("<></>");

  useEffect(() => {
    setColor(props.color);
    setChildren(props.children);
  }, [props]);
  return (
    <div
      className="h-screen w-screen mx-auto relative "
      style={{ backgroundColor: color }}
    >
      <div
        className="absolute w-screen h-20 -top-20 rounded-t-full"
        style={{ backgroundColor: color }}
      ></div>
      {children}
    </div>
  );
}
