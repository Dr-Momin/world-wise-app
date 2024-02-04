import styles from "../../css/Message.module.css";

function Message(props: Record<string, string>) {
  const { message } = props;
  return (
    <p className={styles.message}>
      <span role="img">👋</span> {message}
    </p>
  );
}

export default Message;
