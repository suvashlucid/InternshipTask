import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const eye = <FontAwesomeIcon icon={faEye} />;
interface VisibilityProps {
  isVisible: boolean;
  toggleVisibility: () => void;
}

const Visibility: React.FC<VisibilityProps> = ({ toggleVisibility }) => {
  return (
    <button
      type="button"
      onClick={toggleVisibility}
      className="absolute right-3 top-1/2 transform -translate-y-1/2"
    >
      {eye}
    </button>
  );
};

export default Visibility;
