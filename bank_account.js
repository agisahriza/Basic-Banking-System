const myAccount = new BankAccount();

const triggerWindowPrompt = (text) => {
  return new Promise((resolve, reject) => {
    resolve(Number(window.prompt(text)));
  });
}

async function deposit() {
  try {
    const amount = await triggerWindowPrompt("Masukan saldo yang ingin ditambah");
    document.getElementById('loading').style.display = 'flex';
    const newBalance = await myAccount.deposit(amount);
    document.getElementById("saldo").innerText = newBalance;
  } catch (error) {
    alert(error);
  } finally {
    document.getElementById('loading').style.display = 'none';
  }
}

async function withdraw() {
  try {
    const amount = await triggerWindowPrompt("Masukan saldo yang ingin ditarik");
    document.getElementById('loading').style.display = 'flex';
    const newBalance = await myAccount.withdraw(amount);
    document.getElementById("saldo").innerText = newBalance;
  } catch (error) {
    alert(error);
  } finally {
    document.getElementById('loading').style.display = 'none';
  }
}

const btnTambah = document.getElementById("btn-tambah");
const btnKurang = document.getElementById("btn-kurang");

btnTambah.addEventListener("click", deposit)
btnKurang.addEventListener("click", withdraw)
