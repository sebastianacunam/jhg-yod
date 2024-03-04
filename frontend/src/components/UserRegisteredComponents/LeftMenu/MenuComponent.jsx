import { AiOutlineMenu } from "react-icons/ai";

//eslint-disable-next-line
function MenuButton({ onToggle }) {
  return (
    <button onClick={onToggle}>
      <AiOutlineMenu />
    </button>
  );
}

export default MenuButton;
