import { theme } from '../styles/theme'
type BP = keyof typeof theme.breakpoints
/** Usage inside styled-components: ${down('md')} { ... }  (max-width) */
export const down = (k: BP) => `@media (max-width: ${theme.breakpoints[k] - 1}px)`
export const up = (k: BP) => `@media (min-width: ${theme.breakpoints[k]}px)`
