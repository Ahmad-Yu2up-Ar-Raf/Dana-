import { THEME } from '@/lib/theme';

/**
 * ✅ LIGHT MODE ONLY THEME HOOK
 *
 * This app only supports light mode.
 * Dark mode functionality has been removed.
 */
export function useTheme() {
  return {
    // Always light mode
    theme: 'light' as const,
    isDark: false,
    isLight: true,

    // No-op functions (kept for backward compatibility)
    setTheme: () => {},
    toggleTheme: () => {},
    setLight: () => {},
    setDark: () => {},
    setSystem: () => {},
  };
}

/**
 * ✅ ALWAYS RETURNS 'light'
 */
export function useThemeMode() {
  return 'light' as const;
}

/**
 * ✅ ALWAYS RETURNS false (never dark)
 */
export function useIsDark() {
  return false;
}

/**
 * ✅ THEME COLORS - LIGHT MODE ONLY
 *
 * Returns theme colors from THEME.light
 * Kept for backward compatibility with existing components.
 *
 * RECOMMENDED: Use Tailwind classes instead!
 * <View className="bg-background" /> is better than:
 * const { background } = useThemeColors();
 * <View style={{ backgroundColor: background }} />
 */
export function useThemeColors() {
  // Always use light theme
  const token = (key: keyof typeof THEME.light) => THEME.light[key];

  return {
    // Basic colors
    background: token('background'),
    foreground: token('foreground'),

    // Card colors
    card: token('card'),
    cardForeground: token('cardForeground'),

    // Primary colors
    primary: token('primary'),
    primaryForeground: token('primaryForeground'),

    // Secondary colors
    secondary: token('secondary'),
    secondaryForeground: token('secondaryForeground'),

    // Muted colors
    muted: token('muted'),
    mutedForeground: token('mutedForeground'),

    // Accent colors
    accent: token('accent'),
    accentForeground: token('accentForeground'),

    // Destructive colors
    destructive: token('destructive'),
    destructiveForeground: token('destructiveForeground'),

    // Border & Input
    border: token('border'),
    input: token('input'),
    ring: token('ring'),

    // Popover
    popover: token('popover'),
    popoverForeground: token('popoverForeground'),

    // Chart colors
    chart1: token('chart1'),
    chart2: token('chart2'),
    chart3: token('chart3'),
    chart4: token('chart4'),
    chart5: token('chart5'),

    // Aliases
    textColor: token('foreground'),
    mutedColor: token('muted'),
    borderColor: token('border'),
    backgroundColor: token('background'),
  };
}

/**
 * ✅ GET SINGLE COLOR - LIGHT MODE ONLY
 *
 * Usage: const primary = useThemeColor('primary');
 */
export function useThemeColor(key: keyof typeof THEME.light) {
  return THEME.light[key];
}

/**
 * ✅ ALWAYS RETURNS 'light'
 */
export function useCurrentColorScheme() {
  return 'light' as const;
}

// Export default as useTheme for convenience
export default useTheme;
