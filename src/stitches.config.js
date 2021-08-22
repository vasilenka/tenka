import { createCss } from '@stitches/react'

export const { styled, css, global, keyframes, getCssString, theme } =
  createCss({
    prefix: 'tenka',
    theme: {
      zIndices: {},
      radius: {},
      space: {
        base: '16px',
        none: '0rem',
        xxs: '0.125rem',
        xs: '0.25rem',
        s: '0.5rem',
        sm: '0.75rem',
        m: '1rem',
        ml: '1.25rem',
        l: '1.5rem',
        xl: '2rem',
        xxl: '3rem',
        xxxl: '4rem',
        huge: '6rem',
        extra: '9rem',
        field: '1.25rem',
      },
      primary: {
        // COLOR PRIMARY
        300: 'hsl(358, 75%, 58%)' /* #E44449 */,
        200: 'hsl(358, 83%, 64%)' /* #ef585d */,
        100: 'hsl(349, 100%, 61%)' /* #ff385d */,
        10: 'hsla(358, 100%, 68%, 0.1)',
        20: 'hsla(358, 100%, 68%, 0.2)',
        30: 'hsla(358, 100%, 68%, 0.3)',
        40: 'hsla(358, 100%, 68%, 0.4)',
        50: 'hsla(358, 100%, 68%, 0.5)',
        60: 'hsla(358, 100%, 68%, 0.6)',
        70: 'hsla(358, 100%, 68%, 0.7)',
        80: 'hsla(358, 100%, 68%, 0.8)',
        90: 'hsla(358, 100%, 68%, 0.9)',
      },
      secondary: {
        // COLOR SECONDARY
        300: 'hsl(182, 100%, 22%)' /* #006c6f */,
        200: 'hsl(186, 100%, 26%)' /* #007986 */,
        100: 'hsl(181, 100%, 27%)' /* #008689 */,
        10: 'hsla(181, 100%, 27%, 0.1)',
        20: 'hsla(181, 100%, 27%, 0.2)',
        30: 'hsla(181, 100%, 27%, 0.3)',
        40: 'hsla(181, 100%, 27%, 0.4)',
        50: 'hsla(181, 100%, 27%, 0.5)',
        60: 'hsla(181, 100%, 27%, 0.6)',
        70: 'hsla(181, 100%, 27%, 0.7)',
        80: 'hsla(181, 100%, 27%, 0.8)',
        90: 'hsla(181, 100%, 27%, 0.9)',
      },
      maroon: {
        // BRAND MAROON
        10: 'hsla(335, 70%, 38%, 0.1)' /* #a41d55 */,
        100: 'hsl(343, 70%, 46%)' /* #C72352 */,
        200: 'hsl(335, 70%, 38%)' /* #a41d55 */,
        300: 'hsl(337, 71%, 32%)' /* #8c1845 */,
      },
      accent: {
        // BRAND ACCENT
        scarlet: '#ff1623' /* #ff1623; */,
        navy: '#0f083c' /* #0f083c; */,
        yellow: '#ffdc4a' /* #ffdc4a; */,
        peach: '#f7e0d0' /* #f7e0d0; */,
        rose: '#ffa78f' /* #ffa78f; */,
        pink: '#ff9e9f' /* #ff9e9f; */,
        sky: '#b3d9da' /* #b3d9da; */,
      },
      tone: {
        // TONE CRITICAL
        'critical-10': 'rgba(255, 93, 61, 0.11)',
        'critical-100': '#ff603f',
        'critical-200': '#e42700',
        'critical-300': '#940d00',
        // TONE WARNING
        'warning-10': 'hsl(40, 100%, 91%)' /* #ffefcf */,
        'warning-100': 'hsl(42, 100%, 50%)' /* #ffb200 */,
        'warning-200': 'hsl(40, 100%, 48%)' /* #f5a300 */,
        'warning-300': 'hsl(32, 100%, 32%)' /* #A35700 */,
        // TONE POSITIVE
        'positive-100': '#57d9a3',
        'positive-200': '#00875a',
        'positive-300': '#006644',
      },
      color: {
        // BRAND PRIMARY
        'primary-300': 'hsl(358, 75%, 58%)' /* #E44449 */,
        'primary-200': 'hsl(358, 83%, 64%)' /* #ef585d */,
        'primary-100': 'hsl(349, 100%, 61%)' /* #ff385d */,
        'primary-10': 'hsla(358, 100%, 68%, 0.1)',
        'primary-20': 'hsla(358, 100%, 68%, 0.2)',
        'primary-30': 'hsla(358, 100%, 68%, 0.3)',
        'primary-40': 'hsla(358, 100%, 68%, 0.4)',
        'primary-50': 'hsla(358, 100%, 68%, 0.5)',
        'primary-60': 'hsla(358, 100%, 68%, 0.6)',
        'primary-70': 'hsla(358, 100%, 68%, 0.7)',
        'primary-80': 'hsla(358, 100%, 68%, 0.8)',
        'primary-90': 'hsla(358, 100%, 68%, 0.9)',
        // BRAND SECONDARY
        'secondary-300': 'hsl(182, 100%, 22%)' /* #006c6f */,
        'secondary-200': 'hsl(186, 100%, 26%)' /* #007986 */,
        'secondary-100': 'hsl(181, 100%, 27%)' /* #008689 */,
        'secondary-10': 'hsla(181, 100%, 27%, 0.1)',
        'secondary-20': 'hsla(181, 100%, 27%, 0.2)',
        'secondary-30': 'hsla(181, 100%, 27%, 0.3)',
        'secondary-40': 'hsla(181, 100%, 27%, 0.4)',
        'secondary-50': 'hsla(181, 100%, 27%, 0.5)',
        'secondary-60': 'hsla(181, 100%, 27%, 0.6)',
        'secondary-70': 'hsla(181, 100%, 27%, 0.7)',
        'secondary-80': 'hsla(181, 100%, 27%, 0.8)',
        'secondary-90': 'hsla(181, 100%, 27%, 0.9)',
        // BRAND MAROON
        'maroon-10': 'hsla(335, 70%, 38%, 0.1)' /* #a41d55 */,
        'maroon-100': 'hsl(343, 70%, 46%)' /* #C72352 */,
        'maroon-200': 'hsl(335, 70%, 38%)' /* #a41d55 */,
        'maroon-300': 'hsl(337, 71%, 32%)' /* #8c1845 */,
        // BRAND ACCENT
        'accent-scarlet': '#ff1623' /* #ff1623; */,
        'accent-navy': '#0f083c' /* #0f083c; */,
        'accent-yellow': '#ffdc4a' /* #ffdc4a; */,
        'accent-peach': '#f7e0d0' /* #f7e0d0; */,
        'accent-rose': '#ffa78f' /* #ffa78f; */,
        'accent-pink': '#ff9e9f' /* #ff9e9f; */,
        'accent-sky': '#b3d9da' /* #b3d9da; */,
        // TONE CRITICAL
        'critical-10': 'rgba(255, 93, 61, 0.11)',
        'critical-100': '#ff603f',
        'critical-200': '#e42700',
        'critical-300': '#940d00',
        // TONE WARNING
        'warning-10': 'hsl(40, 100%, 91%)' /* #ffefcf */,
        'warning-100': 'hsl(42, 100%, 50%)' /* #ffb200 */,
        'warning-200': 'hsl(40, 100%, 48%)' /* #f5a300 */,
        'warning-300': 'hsl(32, 100%, 32%)' /* #A35700 */,
        // TONE POSITIVE
        'positive-100': '#57d9a3',
        'positive-200': '#00875a',
        'positive-300': '#006644',
      },
      dark: {
        100: 'rgba(0, 0, 0, 1)',
        90: 'rgba(0, 0, 0, 0.94)',
        80: 'rgba(0, 0, 0, 0.84)',
        70: 'rgba(0, 0, 0, 0.72)',
        60: 'rgba(0, 0, 0, 0.54)',
        50: 'rgba(0, 0, 0, 0.44)',
        40: 'rgba(0, 0, 0, 0.2)',
        30: 'rgba(0, 0, 0, 0.12)',
        20: 'rgba(0, 0, 0, 0.08)',
        10: 'rgba(0, 0, 0, 0.04)',
      },
      'dark-hex': {
        100: '#000000' /* Heading */,
        90: '#000100' /* Heading */,
        80: '#272727' /* Heading and Body text in text-heavy page such as blog post */,
        70: '#484848' /*Body text */,
        60: '#767676' /* Caption and subtitle */,
        50: '#8f8f8f',
        40: '#cccccc',
        30: '#e0e0e0',
        20: '#ebebeb',
        10: '#f5f5f5',
      },
      light: {
        100: 'rgba(255, 255, 255, 1)',
        90: 'rgba(255, 255, 255, 0.84)',
        80: 'rgba(255, 255, 255, 0.71)',
        70: 'rgba(255, 255, 255, 0.54)',
        60: 'rgba(255, 255, 255, 0.4)',
        50: 'rgba(255, 255, 255, 0.2)',
        40: 'rgba(255, 255, 255, 0.16)',
        30: 'rgba(255, 255, 255, 0.1)',
        20: 'rgba(255, 255, 255, 0.06)',
        10: 'rgba(255, 255, 255, 0.02)',
      },
      'light-hex': {
        100: '#ffffff',
        90: '#dcdcdc',
        80: '#c0c0c0',
        70: '#9c9c9c',
      },
      gutter: {
        xsmall: 24,
        small: 30,
        tablet: 50,
        desktop: 56,
        wide: 64,
      },
      size: {
        'display-1': '128px',
        'display-2': '96px',
        'display-3': '64px',
        'heading-1': '48px',
        'heading-2': '32px',
        'heading-3': '24px',
        'heading-4': '19px',
        'heading-5': '17px',
        'heading-6': '15px',
        xlarge: '22px',
        large: '19px',
        medium: '17px',
        small: '15px',
        'caption-1': '14px',
        'caption-2': '12px',
      },
      weight: {
        100: 100,
        200: 200,
        300: 300,
        400: 400,
        500: 500,
        600: 600,
        700: 700,
        800: 800,
        900: 900,
      },
    },
    media: {
      onlyPhone: `(420px <= width < 720px)`,
      maxPhone: `(width < 420px)`,
      phone: `(420px <= width)`,
      onlyTablet: `(720px <= width < 1024px)`,
      maxTablet: `(width < 720px)`,
      tablet: `(720px <= width)`,
      onlyLandscapeTablet: `(840px <= width < 1024px)`,
      maxLandscapeTablet: `(width < 840px)`,
      landscapeTablet: `(840px <= width)`,
      onlyDesktop: `(1024px <= width < 1536px)`,
      maxDesktop: `(width < 1024px)`,
      desktop: `(1024px <= width)`,
      maxWide: `(width < 1536px)`,
      wide: `(1536px <= width)`,
    },
  })
