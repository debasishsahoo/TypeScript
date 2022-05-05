import { DisposableMixin, ActivateableMixin } from './Mixin';

class Disposable {
  IDisposable: boolean = false;
  Disposed() {
    this.IDisposable = true;
  }
}

class Activateable {
  IActivateble: boolean = false;
  Activate() {
    this.IActivateble = true;
  }
  Dectivate() {
    this.IActivateble = false;
  }
}

const Employee = DisposableMixin(ActivateableMixin(class {}));

const example = new Employee();
//example.

//function takeExample(Ex: example) {}
//'example' refers to a value, but is being used as a type here. Did you mean 'typeof example'?ts(2749)
type example = InstanceType<typeof example>;

function takeExample(Ex: example) {}
