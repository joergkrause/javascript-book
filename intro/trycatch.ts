function ZeroDivException (msg?: string): void {

  const name = 'ZeroDivException';
  this.message = msg ? msg : 'Division durch Null!';

  this.toString = () => { 
    return this.name + ': ' + this.message 
  };
}

// Funktion dividiert a durch b und gibt das Ergebnis zurück
function div (a: number, b: number): number {
  if (b == 0) {
      throw new ZeroDivException ();
  }
  return a / b;
}

// Try-Catch-Block zum Abfangen von Ausnahmen
try {
  console.log('10 / 2 = ' + div (10, 2));
  console.log('5 / 0 = ' + div (5, 0));
} catch (e) {
  console.log('Exception aufgetreten: ' + e);
} finally {
  console.log("Fertig");
}