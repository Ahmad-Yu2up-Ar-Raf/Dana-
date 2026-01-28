import { ColorValue } from 'react-native';
import { useColorScheme } from 'nativewind';

type AdaptiveColor = ColorValue | { light: ColorValue; dark: ColorValue };

function isAdaptiveColor(c: any): c is { light: ColorValue; dark: ColorValue } {
  return c != null && typeof c === 'object' && 'light' in c && 'dark' in c;
}

/**
 * Resolve a color token according to the active color scheme.
 * - If `color` is a plain ColorValue (string or opaque), it is returned as-is.
 * - If `color` is an adaptive object, returns the matching `light` or `dark` value.
 */
export function useThemeColor(color: AdaptiveColor): ColorValue {
  const { colorScheme } = useColorScheme();

  if (!isAdaptiveColor(color)) return color as ColorValue;
  return (colorScheme === 'dark' ? color.dark : color.light) as ColorValue;
}

export default useThemeColor;
