import React from "react"
import { Link } from "gatsby"

import styles from "./headerSmall.module.css"

const Header = ({ title }) => {
  return (
    <h3 id={styles.headerTitle}>
      <Link className={styles.headerLink} to={`/`}>
        {title}
      </Link>
    </h3>
  )
}

export default Header
