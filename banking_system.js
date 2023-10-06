class BankAccount {
  #balance = 0;

  constructor() {
    document.getElementById("saldo").innerText = this.#balance;
  }

  deposit(amount) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (isNaN(amount)) {
          reject("Nilai yang dimasukan harus berupa angka!");
        }

        if (amount < 0) {
          reject("Nilai tidak boleh kurang dari 1!");
        }

        if (!Number.isInteger(amount)) {
          reject("Nilai harus bilangan bulat!")
        }

        this.#balance += amount;
        resolve(this.#balance);
      }, 1000);
    });
  }

  withdraw(amount) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (isNaN(amount)) {
          reject("Nilai yang dimasukan harus berupa angka!");
        }

        if (amount < 0) {
          reject("Nilai tidak boleh kurang dari 1!");
        }

        if (!Number.isInteger(amount)) {
          reject("Nilai harus bilangan bulat!")
        }

        if (this.#balance >= amount) {
          this.#balance -= amount;
          resolve(this.#balance);
        } else {
          reject("Saldo tidak mencukupi");
        }
      }, 1000);
    });
  }
}