import type { CSSProperties } from './types';
/**
 * Remove undefined values
 */
export declare function removeUndefined(style: CSSProperties): CSSProperties;
/**
 * Warn overlapping props
 */
export declare function notifyOverlapping(propName: string, ...props: (boolean | undefined)[]): void;
//# sourceMappingURL=utils.d.ts.map