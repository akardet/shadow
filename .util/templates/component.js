module.exports = (componentName) => ({
  content: `
import styles from "./${componentName}.module.scss";

export const ${componentName} = ({}) => {
  return (
    <div className={styles["${componentName}_container"]}>${componentName}</div>
  )
}

`,
  extension: `.tsx`,
});
