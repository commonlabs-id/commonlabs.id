export const systemColors = {
  black: '#000',
  white: '#fff',
  grey: {
    '50': '#f2f2f3',
    '100': '#d8d8da',
    '200': '#bfbfc1',
    '300': '#a5a5a8',
    '400': '#8b8b8f',
    '500': '#717176',
    '600': '#58585d',
    '700': '#3e3e44',
    '800': '#24242b',
    '900': '#16161d',
  },
  blue: {
    '50': '#e6f3ff',
    '100': '#b3dcff',
    '200': '#80c2ff',
    '300': '#4da6ff',
    '400': '#1a88ff',
    '500': '#0076ff',
    '600': '#0050b6',
    '700': '#003986',
    '800': '#002356',
    '900': '#000e25',
  },
  purple: {
    '50': '#f4ebfa',
    '100': '#dec2f0',
    '200': '#c599e6',
    '300': '#ab70dc',
    '400': '#8f47d2',
    '500': '#7928ca',
    '600': '#581e98',
    '700': '#3f1670',
    '800': '#260e47',
    '900': '#10061f',
  },
  magenta: {
    '50': '#ffe6fa',
    '100': '#ffb3ee',
    '200': '#ff80df',
    '300': '#ff4dcd',
    '400': '#ff1ab8',
    '500': '#ff00a8',
    '600': '#b60073',
    '700': '#860050',
    '800': '#560030',
    '900': '#250014',
  },
  red: {
    '50': '#fde7e7',
    '100': '#fab7b7',
    '200': '#f78787',
    '300': '#f45858',
    '400': '#f12828',
    '500': '#ee0000',
    '600': '#b60000',
    '700': '#860000',
    '800': '#550000',
    '900': '#250000',
  },
  orange: {
    '50': '#fff3e6',
    '100': '#ffddb3',
    '200': '#ffc680',
    '300': '#ffae4d',
    '400': '#ff971a',
    '500': '#ff8a00',
    '600': '#b66200',
    '700': '#864800',
    '800': '#562d00',
    '900': '#251400',
  },
  yellow: {
    '50': '#ffffe6',
    '100': '#fffeb3',
    '200': '#fffc80',
    '300': '#fffa4d',
    '400': '#fff71a',
    '500': '#fff500',
    '600': '#b6ae00',
    '700': '#868000',
    '800': '#565100',
    '900': '#252200',
  },
  green: {
    '50': '#eaffe6',
    '100': '#c0ffb3',
    '200': '#96ff7f',
    '300': '#6aff4d',
    '400': '#32ff0d',
    '500': '#29dc0b',
    '600': '#1fae09',
    '700': '#158006',
    '800': '#0d5204',
    '900': '#052401',
  },
  cyan: {
    '50': '#e6feff',
    '100': '#b3feff',
    '200': '#80fffe',
    '300': '#4dfffb',
    '400': '#1afff6',
    '500': '#00fff0',
    '600': '#00b6a9',
    '700': '#00867a',
    '800': '#00564c',
    '900': '#002521',
  },
};

export const colors = {
  ...systemColors,
  background: systemColors.white,
  foreground: systemColors.black,
};

export const fonts = {
  sansSerif: "'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif",
  monospace: `Menlo, Monaco, 'Lucida Console', 'Liberation Mono', 'DejaVu Sans Mono',
    'Bitstream Vera Sans Mono', 'Courier New', monospace, monospace`,
};

export const space = {
  /** Equivalent to 2px */
  xxxs: 2,
  /** Equivalent to 4px */
  xxs: 4,
  /** Equivalent to 8px */
  xs: 8,
  /** Equivalent to 12px */
  sm: 12,
  /** Equivalent to 16px */
  md: 16,
  /** Equivalent to 24px */
  lg: 24,
  /** Equivalent to 32px */
  xl: 32,
  /** Equivalent to 48px */
  xxl: 48,
};

export const breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
};

export const widths = {
  md: 750,
  lg: 970,
  xl: 1140,
};
