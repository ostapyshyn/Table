import styles from './Button.module.scss'

const Button = ({ onClick, children }) => {
  return (
    <button type="button" onClick={onClick} className={styles.button}>
      {children.toUpperCase()}
    </button>
  )
}
export default Button
