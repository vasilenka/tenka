import styles from './Inline.module.css'
import React, { Children, useEffect } from 'react'
import cx from 'clsx'
import flattenChildren from 'react-keyed-flatten-children'
import { Box } from './../Box/Box'
import { withGapProps } from './libs'

const orderChildren = (children, reverse) => {
  const childrenArray = Children.toArray(children)
  return reverse ? childrenArray.reverse() : childrenArray
}

const InlineNoModifier = ({
  as,
  gap,
  isList,
  children,
  reverse,
  className,
  ...restProps
}) => {
  const inlineItemComponent = isList ? 'li' : 'div'

  useEffect(() => {
    if (gap) {
      document.documentElement.style.setProperty(
        '--tenka-inline-space',
        `var(--tenka-space-${gap})`
      )
    }
  }, [gap])

  return (
    <Box
      as={as}
      className={cx(styles.root, {
        [className]: className,
      })}
      {...restProps}
    >
      {Children.map(
        orderChildren(flattenChildren(children, reverse)),
        (child) =>
          child !== null && child !== undefined ? (
            <Box as={inlineItemComponent} inline>
              {child}
            </Box>
          ) : null
      )}
    </Box>
  )
}

InlineNoModifier.displayName = 'Inline'

export const Inline = withGapProps(InlineNoModifier)

export default Inline
