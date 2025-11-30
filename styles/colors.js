// Modern Red-Black-Gray-White Color Palette
export const colors = {
  // Primary - Red tones
  primary: {
    50: '#FEF2F2',   // Lightest red
    100: '#FEE2E2',
    200: '#FECACA',
    300: '#FCA5A5',
    400: '#F87171',
    500: '#EF4444',  // Main red
    600: '#DC2626',  // Darker red
    700: '#B91C1C',
    800: '#991B1B',
    900: '#7F1D1D',  // Darkest red
    DEFAULT: '#EF4444'
  },

  // Secondary - Black tones
  black: {
    pure: '#000000',
    light: '#1A1A1A',
    DEFAULT: '#0A0A0A'
  },

  // Neutral - Gray scale
  gray: {
    50: '#F9FAFB',
    100: '#F3F4F6',
    200: '#E5E7EB',
    300: '#D1D5DB',
    400: '#9CA3AF',
    500: '#6B7280',  // Mid gray
    600: '#4B5563',
    700: '#374151',
    800: '#1F2937',
    900: '#111827',
    DEFAULT: '#6B7280'
  },

  // White tones
  white: {
    pure: '#FFFFFF',
    off: '#F8F9FA',
    DEFAULT: '#FFFFFF'
  },

  // Semantic colors
  background: {
    primary: '#FFFFFF',    // White background
    secondary: '#F9FAFB',  // Light gray
    dark: '#0A0A0A',       // Dark background
    darker: '#000000'      // Pure black
  },

  text: {
    primary: '#0A0A0A',    // Main text (black)
    secondary: '#6B7280',  // Secondary text (gray)
    tertiary: '#9CA3AF',   // Tertiary text (light gray)
    inverse: '#FFFFFF',    // White text on dark bg
    accent: '#EF4444'      // Red accent text
  },

  border: {
    light: '#E5E7EB',      // Light border
    default: '#D1D5DB',    // Default border
    dark: '#374151',       // Dark border
    accent: '#EF4444'      // Red accent border
  },

  // UI States
  hover: {
    red: '#DC2626',
    gray: '#F3F4F6',
    dark: '#1F2937'
  },

  active: {
    red: '#B91C1C',
    gray: '#E5E7EB'
  },

  focus: {
    ring: '#EF4444',
    ringOffset: '#FFFFFF'
  }
};

// CSS Variables for easy theming
export const cssVariables = `
  :root {
    /* Primary Colors */
    --color-primary: ${colors.primary[500]};
    --color-primary-hover: ${colors.primary[600]};
    --color-primary-active: ${colors.primary[700]};
    
    /* Background Colors */
    --color-bg-primary: ${colors.background.primary};
    --color-bg-secondary: ${colors.background.secondary};
    --color-bg-dark: ${colors.background.dark};
    --color-bg-darker: ${colors.background.darker};
    
    /* Text Colors */
    --color-text-primary: ${colors.text.primary};
    --color-text-secondary: ${colors.text.secondary};
    --color-text-tertiary: ${colors.text.tertiary};
    --color-text-inverse: ${colors.text.inverse};
    --color-text-accent: ${colors.text.accent};
    
    /* Border Colors */
    --color-border-light: ${colors.border.light};
    --color-border-default: ${colors.border.default};
    --color-border-dark: ${colors.border.dark};
    --color-border-accent: ${colors.border.accent};
    
    /* Grays */
    --color-gray-50: ${colors.gray[50]};
    --color-gray-100: ${colors.gray[100]};
    --color-gray-200: ${colors.gray[200]};
    --color-gray-300: ${colors.gray[300]};
    --color-gray-400: ${colors.gray[400]};
    --color-gray-500: ${colors.gray[500]};
    --color-gray-600: ${colors.gray[600]};
    --color-gray-700: ${colors.gray[700]};
    --color-gray-800: ${colors.gray[800]};
    --color-gray-900: ${colors.gray[900]};
  }
`;

export default colors;
