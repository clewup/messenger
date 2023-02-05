import Messenger from "@/components/organisms/Messenger/Messenger";
import styles from "./Index.module.scss";
import MessageIcon from "@mui/icons-material/Message";

const Index = () => {
  return (
    <div id={styles.template_index}>
      <p className={styles.title}>
        Messenger <MessageIcon />
      </p>
      <Messenger />
    </div>
  );
};
export default Index;
