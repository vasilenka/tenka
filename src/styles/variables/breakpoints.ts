/*
  Breakpoints
*/

import { width } from './layout'

export const breakpointNames = [
  'phone',
  'tablet',
  'desktop',
] as const

export const breakpointsValue = {
  sphone: '',
  'only-phone': `screen and (min-width: ${width['min-375']}) and (max-width: ${width['max-744']})`,
  'max-phone': `screen and (max-width: ${width['max-375']})`,
  phone: `screen and (min-width: ${width['min-375']})`,
  'only-tablet': `screen and (min-width: ${width['min-744']}) and (max-width:${width['max-1128']})`,
  'max-tablet': `screen and (max-width: ${width['max-744']})`,
  tablet: `screen and (min-width: ${width['min-744']})`,
  'only-tablet-landscape': `screen and (min-width: ${width['min-950']}) and (max-width: ${width['max-1128']})`,
  'max-tablet-landscape': `screen and (max-width: ${width['max-950']})`,
  'tablet-landscape': `screen and (min-width: ${width['min-950']})`,
  'only-desktop': `screen and (min-width: ${width['min-1128']}) and (max-width: ${width['max-1440']})`,
  'max-desktop': `screen and (max-width: ${width['max-1128']})`,
  desktop: `screen and (min-width: ${width['min-1128']})`,
  'max-wide': `screen and (max-width: ${width['max-1440']})`,
  wide: `screen and (min-width: ${width['min-1440']})`,
}

export const breakpoints = {
  phone: {},
  tablet: { '@media': `screen and (min-width: 600px)` },
  desktop: { '@media': `screen and (min-width: 1136px)` },
} as const