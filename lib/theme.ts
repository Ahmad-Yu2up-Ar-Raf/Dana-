import { DefaultTheme, type Theme } from '@react-navigation/native';

// ✅ LIGHT MODE ONLY - Dark mode completely removed
export const THEME = {
  light: {
    radius: '0.65rem',
    background: 'hsl(0, 0%, 96%)',
    foreground: 'hsl(222.2 84% 4.9%)',
    card: 'hsl(130, 100%, 99%)',
    cardForeground: 'hsl(222.2 84% 4.9%)',
    popover: 'hsl(130, 100%, 99%)',
    popoverForeground: 'hsl(222.2 84% 4.9%)',
    primary: 'hsl(206, 87%, 49%)',
    primaryForeground: 'hsl(130, 100%, 99%)',
    secondary: 'hsl(210 40% 96.1%)',
    secondaryForeground: 'hsl(222.2 47.4% 11.2%)',
    muted: 'hsl(210 40% 96.1%)',
    mutedForeground: 'hsl(215.4 16.3% 46.9%)',
    accent: 'hsl(210 40% 96.1%)',
    accentForeground: 'hsl(222.2 47.4% 11.2%)',
    destructive: 'hsl(0 84.2% 60.2%)',
    destructiveForeground: 'hsl(130, 100%, 99%)',
    border: 'hsl(214.3 31.8% 91.4%)',
    input: 'hsl(214.3 31.8% 91.4%)',
    ring: 'hsl(206, 87%, 49%)',
    chart1: 'hsl(12 76% 61%)',
    chart2: 'hsl(173 58% 39%)',
    chart3: 'hsl(197 37% 24%)',
    chart4: 'hsl(43 74% 66%)',
    chart5: 'hsl(27 87% 67%)',
    sidebar: 'hsl(0 0% 97%)',
    sidebarForeground: 'hsl(222.2 84% 4.9%)',
    sidebarPrimary: 'hsl(206, 87%, 49%)',
    sidebarPrimaryForeground: 'hsl(130, 100%, 99%)',
    sidebarAccent: 'hsl(210 40% 96.1%)',
    sidebarAccentForeground: 'hsl(222.2 47.4% 11.2%)',
    sidebarBorder: 'hsl(214.3 31.8% 91.4%)',
    sidebarRing: 'hsl(206, 87%, 49%)',
  },
  // ✅ REMOVED: dark theme object - No longer needed
};

// ✅ NAV_THEME - Light mode only
export const NAV_THEME: Record<'light', Theme> = {
  light: {
    ...DefaultTheme,
    colors: {
      background: THEME.light.background,
      border: THEME.light.border,
      card: THEME.light.card,
      notification: THEME.light.destructive,
      primary: THEME.light.primary,
      text: THEME.light.foreground,
    },
  },
  // ✅ REMOVED: dark theme - No longer needed
};
