import styles from "./Logo.module.scss";
import MessageIcon from "@mui/icons-material/Message";

const Logo = () => {
  return (
    <div id={styles.atom_logo}>
      <p>
        Messenger <MessageIcon />
      </p>
    </div>
  );
};
export default Logo;
