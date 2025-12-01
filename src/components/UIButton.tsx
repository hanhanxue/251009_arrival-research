import styles from "./UIButton.module.scss"

export default function UIButton({

    children,
}: {
    children: React.ReactNode;
}) {


  return (
    <button className={styles.button}>
      <span>{children}</span>
    </button>
  )
}