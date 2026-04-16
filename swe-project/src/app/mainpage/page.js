import Image from "next/image";
import styles from "./../page.module.css";

export default function Page() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.intro}>
          <h1>Spare page</h1>
        </div>
      </main>
    </div>
  );
}
