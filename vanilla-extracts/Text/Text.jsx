/**
 * Display text on the page using well-defined typographic styles.
 *
 * @component
 * @example
 * <Text heading1 as="h1" align="center" info />
 *
 * This code heavily-inspired and modified from SEEK OSS Styleguide
 * Source: https://github.com/seek-oss/seek-style-guide
 */

import styles from './Text.module.css'
import React from 'react'
import {
  bool,
  node,
  object,
  string,
  oneOf,
  oneOfType,
  number,
} from 'prop-types'
import cx from 'clsx'

import {
  withTextSizeProps,
  sizes,
  modifiers,
  withTextModifierProps,
} from './libs'

import stylesStrong from './Strong/Strong.module.css'
import stylesRegular from './Regular/Regular.module.css'
import stylesLight from './Light/Light.module.css'

import stylesSecondary from './Secondary/Secondary.module.css'
import stylesPositive from './Positive/Positive.module.css'
import stylesCritical from './Critical/Critical.module.css'
import stylesHighlight from './Highlight/Highlight.module.css'
import stylesInfo from './Info/Info.module.css'
import stylesWhite from './White/White.module.css'
import stylesWhiteSecondary from './WhiteSecondary/WhiteSecondary.module.css'
import stylesAccent from './Accent/Accent.module.css'
import stylesAccentSecondary from './AccentSecondary/AccentSecondary.module.css'

const textStyleModifier = {
  secondary: stylesSecondary?.root,
  positive: stylesPositive?.root,
  critical: stylesCritical?.root,
  highlight: stylesHighlight?.root,
  info: stylesInfo?.root,
  white: stylesWhite?.root,
  whiteSecondary: stylesWhiteSecondary?.root,
  accent: stylesAccent?.root,
  accentSecondary: stylesAccentSecondary?.root,
}

const combineStyleProps = (truncate, style) => {
  return typeof truncate === 'number' && truncate
    ? {
        WebkitLineClamp: truncate,
        ...style,
      }
    : style
}

export const TextNoModifier = React.forwardRef(
  (
    {
      as,
      children,
      className,
      size,
      modifier,
      align,
      strong,
      regular,
      light,
      truncate,
      breakWord,
      childStyle,
      childInitial,
      childAnimate,
      prewrap,
      style,
      ...restProps
    },
    forwardedRef
  ) => {
    const Component = as || 'span'
    const styleProps = React.useMemo(
      () => combineStyleProps(truncate, style),
      [truncate, style]
    )

    return (
      <Component
        ref={forwardedRef}
        className={cx({
          [styles[size]]: size,
          [styles[align]]: align,
          [textStyleModifier[modifier]]: modifier,
          [styles.truncate]: typeof truncate === 'boolean' && truncate,
          [styles.clamp]: typeof truncate === 'number' && truncate,
          [styles.breakWord]: breakWord,
          [stylesLight.root]: light,
          [stylesStrong.root]: strong,
          [stylesRegular.root]: regular,
          [styles.prewrap]: prewrap,
          [className]: className,
        })}
        style={styleProps}
        {...restProps}
      >
        {children}
      </Component>
    )
  }
)

TextNoModifier.displayName = 'Text'

TextNoModifier.defaultProps = {
  as: 'span',
  size: 'medium',
  breakWord: false,
  regular: false,
  light: false,
  strong: false,
  prewrap: false,
}

TextNoModifier.propTypes = {
  children: node.isRequired,
  /** Rendering the component as specific html tag */
  as: string,
  /**
   * Additional className for Text component
   */
  className: oneOfType([string, object]),
  /** Indicating whether the Text should truncate with ellipsis when overflow */
  truncate: oneOfType([bool, number]),
  /** Indicating whether the Text should move to new line and break word when overflow */
  breakWord: bool,
  /**
   * Alignment of text
   * Use directly as a prop
   */
  align: oneOf(['left', 'right', 'center', 'justify']),
  /**
   * Size of text
   * Use directly as a prop
   */
  size: oneOf(sizes),
  // size: oneOf([...modifiedSizes]),
  /**
   * Modifiers of text styles
   * Use directly as a prop
   */
  modifier: oneOf(modifiers),

  /**
   * Apply designated strong font-weight to text
   */
  strong: bool,
  /**
   * Apply designated regular font-weight to text
   */
  regular: bool,
  /**
   * Apply designated light font-weight to text
   */
  light: bool,
  prewrap: bool,
}

export const Text = withTextSizeProps(withTextModifierProps(TextNoModifier))

export default Text
