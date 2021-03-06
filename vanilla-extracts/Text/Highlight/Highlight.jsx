import styles from './Highlight.module.css'
import React from 'react'
import cx from 'clsx'

const Highlight = ({ children, className, ...restProps }) => {
  return (
    <mark {...restProps} className={cx(styles.root)}>
      {children}
    </mark>
  )
}

export default Highlight
