import Styles from "./innercontainer.module.css";
export default function InnerContainer({ children }) {
  return <div className={Styles.innercontainer}>{children}</div>;
}
