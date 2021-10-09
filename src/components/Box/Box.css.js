// import { recipe } from '@vanilla-extract/recipes'
import { defineProperties, createSprinkles } from '@vanilla-extract/sprinkles'
import { responsiveProperties } from '../../styles/atoms/atomicProperties'
import { breakpoints, breakpointNames } from '../../styles/tokens'

const boxProperties = defineProperties({
  conditions: breakpoints,
  defaultCondition: 'small-phone',
  responsiveArray: breakpointNames,
  properties: responsiveProperties,
  shorthands: {
    marginX: ['marginInline'],
    mX: ['marginInline'],
    mx: ['marginInline'],
    marginY: ['marginBlock'],
    mY: ['marginBlock'],
    my: ['marginBlock'],
    mT: ['marginTom'],
    mt: ['marginTom'],
    mR: ['marginRight'],
    mr: ['marginRight'],
    mB: ['marginBottom'],
    mb: ['marginBottom'],
    mL: ['marginLeft'],
    ml: ['marginLeft'],
    paddingX: ['paddingInline'],
    pX: ['paddingInline'],
    px: ['paddingInline'],
    paddingY: ['paddingBlock'],
    pY: ['paddingBlock'],
    py: ['paddingBlock'],
    pT: ['paddingTop'],
    pt: ['paddingTop'],
    pR: ['paddingRight'],
    pr: ['paddingRight'],
    pB: ['paddingBottom'],
    pb: ['paddingBottom'],
    pL: ['paddingLeft'],
    pl: ['paddingLeft'],
    justify: ['justifyContent'],
    align: ['alignItems'],
  },
})

export const boxStyles = createSprinkles(boxProperties)
