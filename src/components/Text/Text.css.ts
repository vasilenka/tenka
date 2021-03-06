
import { defineProperties, createSprinkles, } from '@vanilla-extract/sprinkles'
import { tokens } from '../../styles.css'
import { breakpoints, breakpointNames } from '../../styles/variables'

const textColors = {
  primary: tokens.dark[70],
  secondary: tokens.dark[50],
  light: tokens.light[100],
  'light-secondary': tokens.light[70],
  ...tokens.tone
} as const

export type TextColor = keyof typeof textColors

export const responsiveProps = defineProperties({
  conditions: breakpoints,
  defaultCondition: 'sphone',
  responsiveArray: breakpointNames,
  properties: {
    fontWeight: tokens.weight,
    fontSize: tokens.size,
    lineHeight: tokens['line-height'],
    color: textColors
  },
})

export const textStyles = createSprinkles(responsiveProps)
