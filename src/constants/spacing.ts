/**
  Use these spacings for margins/paddings and other whitespace throughout your app.
 */
  export const spacing = {
    xxs: 4,
    xs: 8,
    sm: 12,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 56,
  } as const
  
  export type Spacing = keyof typeof spacing
  