import { createNVA } from "@/packages/native-variants"
import { Dimensions } from "react-native"

const { width } = Dimensions.get('screen')

export const { styled, theme } = createNVA({
  theme: {
    colors: {
      background: '#F3F3F3',
      foreground: '#58595B',
      card: '#F3F3F3',
      cardForeground: '#58595B',
      primary: '#E30613',
      primaryForeground: '#FBFBFB',
      secondary: '#E8E9EB',
      secondaryForeground: '#E30613',
      muted: '#E8E9EB',
      mutedForeground: '#8e8e8e',
      accent: '#E8E9EB', // is not being used.
      accentForeground: '#E30613', // is not being used.
      destructive: '#c43d40', // is not being used.
      border: '#D2D3D6',
      input: '#D2D3D6',
      ring: '#58595B',
      white: '#FFFFFF',
      black: '#000000', // is not being used.
      transparent: 'transparent',
      rating: '#FFCF21',
    },
    radii: {
      none: 2,
      sm: 2,
      base: 4,
      md: 6,
      lg: 8,
      xl: 16,
      '2xl': 24,
      full: 9999,
    },
    fontSizes: {

    },
    fontWeights: {
      thin: '100',
      extraLight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semiBold: '600',
      bold: '700',
      extraBold: '800',
      black: '900',
    },
    lineHeights: {
      none: 1,
      tight: 1.25,
      snug: 1.375,
      normal: 1.5,
      relaxed: 1.625,
      loose: 2,
    },
    spacing: {
      0: 0,
      px: 1,
      0.5: 2,
      1: 4,
      1.5: 6,
      2: 8,
      2.5: 10,
      3: 12,
      3.5: 14,
      4: 16,
      5: 20,
      6: 24,
      7: 28,
      8: 32,
      9: 36,
      10: 40,
      11: 44,
      12: 48,
      14: 56,
      16: 64,
      20: 80,
      '1/2': '50%',
      '1/3': '33.333%',
      '2/3': '66.666%',
      '1/4': '25%',
      '2/4': '50%',
      '3/4': '75%',
      full: '100%',
    },
    zIndex: {
      1: 1,
      10: 10,
      20: 20,
      30: 30,
      40: 40,
      50: 50,
      99999: 9999,
    },
    opacity: {
      0: 0,
      25: 0.25,
      50: 0.5,
      75: 0.75,
      100: 1,
    },
    breakpoints: {
      sm: width <= 320,
    },
  },
})
