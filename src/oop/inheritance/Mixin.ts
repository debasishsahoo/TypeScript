export type Class = new (...args: any[]) => any;

export function DisposableMixin<Base extends Class>(base: Base) {
  return class extends base {
    IDisposable: boolean = false;
    Disposed() {
      this.IDisposable = true;
    }
  };
}

export function ActivateableMixin<Base extends Class>(base: Base) {
  return class extends base {
    IActivateble: boolean = false;
    Activate() {
      this.IDisposable = true;
    }
    Dectivate() {
      this.IDisposable = false;
    }
  };
}
