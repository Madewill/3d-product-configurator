import { HexColorPicker } from "react-colorful";
import { useSnapshot } from "valtio";

export default function ColorPicker(props) {
  const snap = useSnapshot(props.state);
  return (
    <div
      className={snap.current !== null ? "color-picker" : "color-picker hidden"}
    >
      <HexColorPicker
        color={snap.colors[snap.current]}
        onChange={(color) => props.updateColor(snap.current, color)}
      />
      <h1>{snap.current}</h1>
    </div>
  );
}
