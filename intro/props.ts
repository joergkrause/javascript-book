var passcode = "secret passcode";

class SecretEmployee {
  private _fullName: string;

  get fullName(): string {
    return this._fullName;
  }
	
  set fullName(newName: string) {
    if (passcode && passcode == "secret passcode") {
      this._fullName = newName;
    } else {
      alert("Error: Unauthorized update of employee!");
    }
  }
}

var secret = new SecretEmployee();
secret.fullName = "Bob Smith";
if (secret.fullName) {
  console.log(secret.fullName);
}