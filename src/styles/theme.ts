import { DefaultTheme } from 'styled-components';

interface StyleType {
  [key: string]: string;
}

interface FontType {
  family: string;
  weight: number;
  size: number;
  lineHeight: number;
}

const colors: StyleType = {
  yellow100: '#ffd600',
  yellow200: '#fae15f',
  yellow300: '#fde982',
  disable_yellow100: '#ede5bc',
  white: '#ffffff',
};

function FONT({ family, weight, size, lineHeight }: FontType): string {
  return `
  font-family:${family};
    font-weight : ${weight};
    font-size : ${size}rem;
    line-height : ${lineHeight}rem;
    `;
}

const fonts: StyleType = {
  h1: FONT({
    family: 'Noto Sans KR, sans-serif',
    weight: 600,
    size: 4,
    lineHeight: 5.8,
  }),
};

export const theme: DefaultTheme = {
  colors,
  fonts,
};
