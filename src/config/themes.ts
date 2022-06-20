export const colors = {
  white: '#FFFFFF',
  black: '#1E1E1E',

  red: '#DD4747',
  green: '#24BE52',
  light: '#F8F8F8',
  lightGrey: '#BEBEBE',
  grey: '#9C9C9C',
  darkGrey: '#434343',
  dark: '#404040',
}

export const darkTheme = {
  palette: {
    text: {
      primary: colors.white,
      secondary: colors.dark,
      p1: colors.darkGrey,
      p2: colors.grey,
      p3: colors.lightGrey,
      p4: colors.light,
    },
    info: {
      success: colors.green,
      error: colors.red,
    },
    common: {
      white: colors.white,
      black: colors.black,
      background: colors.darkGrey,
    },
    action: {
      hover: 'rgba(0, 0, 0, 0.54)',
      hoverOpacity: 0.04,
      selected: 'rgba(0, 0, 0, 0.08)',
      selectedOpacity: 0.08,
      disabled: colors.grey,
      disabledBackground: colors.lightGrey,
      background: colors.darkGrey,
    },
  },
  spacing: {
    xs: 4,
    s: 8,
    m: 16,
    l: 24,
    xl: 28,
    xxl: 40,
  },
}

export type PaletteType = typeof darkTheme.palette
export type SpacingType = typeof darkTheme.spacing

export type TextColorType = typeof darkTheme.palette.text
