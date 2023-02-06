import Messenger from "@/components/organisms/Messenger/Messenger";
import styles from "./Index.module.scss";
import MessageIcon from "@mui/icons-material/Message";
import Logo from "@/components/atoms/Logo/Logo";

const Index = () => {
  return (
    <div id={styles.template_index}>
      <Logo />
      <Messenger />
    </div>
  );
};
export default Index;
