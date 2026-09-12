import styles from "./ToolItem.module.css";

export default function ToolItem({ name, icon }) {
  return (
    <li className={styles.toolItem}>
      {icon && <img src={icon} alt="" className={styles.icon} />}
      <span>{name}</span>
    </li>
  );
}
