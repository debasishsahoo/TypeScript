import { DisposableMixin, ActivateableMixin } from './mixin';

class Disposable {
  IDisposable: boolean = false;
  Disposed() {
    this.IDisposable = true;
  }
}

class Activatele {
  IActivateble: boolean = false;
  Activateable() {
    this.IActivateble = true;
  }
  Dectivate() {
    this.IActivateble = false;
  }
}

const Emp = DisposableMixin(ActivateableMixin(class {}));

const expl = new Emp();
