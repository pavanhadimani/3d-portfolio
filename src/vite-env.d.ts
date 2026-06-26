/// <reference types="vite/client" />

declare module 'gsap/SplitText' {
  export class SplitText {
    constructor(target: any, vars: any);
    chars: any[];
    lines: any[];
    words: any[];
    revert(): void;
  }
}

declare module 'gsap/ScrollSmoother' {
  export class ScrollSmoother {
    static create(vars: any): ScrollSmoother;
    paused(value: boolean): void;
    scrollTop(value: number): void;
    scrollTo(target: any, smooth?: boolean, position?: string): void;
    static refresh(value: boolean): void;
  }
}
