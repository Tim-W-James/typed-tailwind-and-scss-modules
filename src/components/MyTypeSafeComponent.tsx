import { cnScoped } from "../styles/cssUtils";
import styles from "./MyTypeSafeComponent.module.scss";

const MyTypeSafeComponent: React.FC = () => (
  <div
    className={cnScoped(styles)(
      styles._myClass,
      // Can be mixed with Tailwind classes
      "container p-5"
    )}
  >
    Type Safe SCSS Modules!
  </div>
);

export default MyTypeSafeComponent;
