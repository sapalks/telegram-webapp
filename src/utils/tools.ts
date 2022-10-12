import { withNaming } from '@bem-react/classname';

export const createCn = withNaming({
  e: '__',
  m: '_',
  v: '_',
});

export const btn = createCn('btn');

export function btnPrimary(options: { disable?: boolean } = {}) {
  return btn('', { primary: true, ...options });
}

export class VVP {
  enabled: boolean;

  styleTag: HTMLElement;

  id = 'viewport_fix_variables';

  vp: { w: number, h: number }

  vvp: { w: number, h: number }

  constructor() {
    this.enabled = typeof (window.visualViewport) === 'object';
    if (!this.enabled) {
      console.error('Visual Viewport is not available in this browser.');
    }
    this.vvp = { w: 0, h: 0 };
    this.vp = { w: 0, h: 0 };
    this.styleTag = document.createElement('style');
    this.styleTag.id = this.id;
    document.head.prepend(this.styleTag);
    this.refresh();

    (window as any).visualViewport.addEventListener('resize', this.refresh.bind(this));
  }

  get calculateViewport() {
    return new Promise<void>((resolve, reject) => {
      if (!this.enabled) {
        // eslint-disable-next-line prefer-promise-reject-errors
        return reject('Could not calculate window.visualViewport');
      }
      this.vvp.w = (window as any).visualViewport.width;
      this.vvp.h = (window as any).visualViewport.height;

      this.vp.w = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
      this.vp.h = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
      return resolve();
    });
  }

  refresh() {
    return this.calculateViewport
      .then(() => { this.setViewport(); })
      .catch((e) => console.error(e));
  }

  setViewport() {
    this.styleTag.innerHTML = `
      :root {
        --100vvw: ${this.vvp.w}px;
        --100vvh: ${this.vvp.h}px;
        
        --offset-w: ${this.vp.w - this.vvp.w}px;
        --offset-h: ${this.vp.h - this.vvp.h}px;
      }
    `;
  }

  destroy() {
    document.head.removeChild(this.styleTag);
    (window as any).visualViewport.removeEventListener('resize', this.refresh.bind(this));
  }
}
