import { BsBoxes } from "react-icons/bs";

export default function UserMenu({ name }) {
  return (
    <div>
      <p>
        <BsBoxes className="my-icon" size="25" /> {name}
      </p>
    </div>
  );
}
