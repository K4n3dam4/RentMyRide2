export const ColorPrimary = 'rgba(71, 23, 244)';
export const ColorSecondary = 'rgba(162, 57, 202)';
export const ColorTertiary = 'rgba(14, 11, 22)';

export const useColor = (color = 'primary', opacity = 1) => {
  switch (color) {
    case 'primary':
      return ColorPrimary.replace(')', `, ${opacity})`);
    case 'secondary':
      return ColorSecondary.replace(')', `, ${opacity})`);
    case 'tertiary':
      return ColorTertiary.replace(')', `, ${opacity})`);
  }
};