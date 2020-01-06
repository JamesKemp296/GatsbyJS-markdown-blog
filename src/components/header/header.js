import React from "react"
import { Link } from "gatsby"

import styles from "./header.module.css"

const HeaderSmall = ({ title }) => {
  return (
    <h1 id={styles.headerTitle}>
      <Link className={styles.headerLink} to={`/`}>
        {title}
      </Link>
    </h1>
  )
}

export default HeaderSmall
