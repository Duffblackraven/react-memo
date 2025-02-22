import { useNavigate } from "react-router-dom";
import styles from "./SelectLevelPage.module.css";
import { Button } from "../../components/Button/Button";
import { useContext } from "react";
import { ModeContext } from "../../context/ModeContext";

export function SelectLevelPage() {
  const { isEnabled, setIsEnabled, level, setLevel } = useContext(ModeContext);
  const navigate = useNavigate();

  const handleLevelClick = value => {
    setLevel(value);
  };

  const handlePlayClick = () => {
    navigate(`/game/${level}`);
    console.log(level);
  };

  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <h1 className={styles.title}>Выберите сложность</h1>
        <ul className={styles.levels}>
          <li className={styles.level}>
            <input type="radio" name="level" value="3" checked={level === "3"} onChange={() => {}} />
            <div
              className={level === "3" ? `${styles.levelText} ${styles.checked}` : styles.levelText}
              onClick={() => handleLevelClick("3")}
            >
              1
            </div>
          </li>
          {/* <li className={styles.level}>
            <input type="radio" value="3" checked={level === 3} onChange={e => setLevel(e.target.value)} />
            <span className={styles.levelText}>1</span>
          </li> */}
          <li className={styles.level}>
            <input type="radio" name="level" value="6" checked={level === "6"} onChange={() => {}} />
            <div
              className={level === "6" ? `${styles.levelText} ${styles.checked}` : styles.levelText}
              onClick={() => handleLevelClick("6")}
            >
              2
            </div>
          </li>
          <li className={styles.level}>
            <input type="radio" name="level" value="9" checked={level === "9"} onChange={() => {}} />
            <div
              className={level === "9" ? `${styles.levelText} ${styles.checked}` : styles.levelText}
              onClick={() => handleLevelClick("9")}
            >
              3
            </div>
          </li>
        </ul>
        <div>
          <input type="checkbox" checked={isEnabled} onChange={() => setIsEnabled(!isEnabled)} />
          <span className={styles.span}>Легкий режим (3 жизни)</span>
        </div>
        <Button onClick={handlePlayClick}>Играть</Button>
        {/* <Button onClick={() => setIsEnabled(!isEnabled)}>Переключить режим</Button>
        {isEnabled === true && <div className={styles.active}>Выбран легкий режим</div>}
        {isEnabled === false && <div className={styles.inactive}>Выбран сложный режим</div>} */}
      </div>
    </div>
  );
}
