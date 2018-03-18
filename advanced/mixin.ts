import applyMixins from './globals/applyMixins';

class Disposable {
  isDisposed: boolean;
  dispose() {
      this.isDisposed = true;
  }

}

class Activatable {
  isActive: boolean;
  activate() {
      this.isActive = true;
  }
  deactivate() {
      this.isActive = false;
  }
}

class SmartObject implements Disposable, Activatable {
  constructor() {
    setInterval(() => console.log(this.isActive + " : " 
                                + this.isDisposed), 500);
  }

  interact() {
      this.activate();
  }

  // Klasse 1
  isDisposed: boolean = false;
  dispose: () => void;
  // Klasse 2
  isActive: boolean = false;
  activate: () => void;
  deactivate: () => void;
}
applyMixins(SmartObject, [Disposable, Activatable])

var smartObj = new SmartObject();
setTimeout(() => smartObj.interact(), 1000);