declare module 'smooth-scroll' {
  interface SmoothScrollOptions {
    speed?: number;
    speedAsDuration?: boolean;
    durationMax?: number;
    durationMin?: number;
    clip?: boolean;
    offset?: number | (() => number);
    easing?: string;
    customEasing?: (time: number) => number;
    updateURL?: boolean;
    popstate?: boolean;
    emitEvents?: boolean;
    header?: string;
  }

  export default class SmoothScroll {
    constructor(selector: string, options?: SmoothScrollOptions);
    animateScroll(anchor: Element | number, toggle?: Element, options?: SmoothScrollOptions): void;
    cancelScroll(): void;
    init(): void;
    destroy(): void;
  }
} 