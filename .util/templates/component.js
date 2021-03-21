module.exports = (componentName) => ({
  content: `
import styles from "./${componentName}.module.scss";

const ${componentName} = ({}) => {
  return (
    <div className={styles["${componentName}_container"]}>${componentName}</div>
  )
}

export default ${componentName};
`,
  extension: `.tsx`,
});
