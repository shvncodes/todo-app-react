import styles from "./dropdown.module.css";

function Dropdown(props) {
  const { label, id, options = [], value, setValue } = props;

  return (
    <div className={styles["main"]}>
      <label htmlFor={id}>{label}</label>
      <select
        className={styles["dropdown"]}
        id={id}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      >
        <option value="">Select</option>
        {options.map((opt) => {
          return (
            <option key={opt} value={opt}>
              {opt}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default Dropdown;
