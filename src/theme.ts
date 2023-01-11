import { colors } from '../src/variables';

// theme.ts
export default interface ThemeInterface {
  fontColor?: string;
  cardBackgroundColor?: string;
  primaryColor?: string;
  primaryColorInverted?: string;
  primaryShadow?: string;
  transitionSlow?: string;
  transitionMedium?: string;
  transitionFast?: string;
}

export const lightTheme = {
  fontColor: `${colors._dark}`,
  cardBackgroundColor: `${colors._white}`,
};

export const darkTheme = {
  fontColor: `${colors._white}`,
  cardBackgroundColor: `${colors._white}`,
};
