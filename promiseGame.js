let turn = Math.floor(Math.random() * 5000);

const myPromise = (resolve, reject) => {
    if (turn < 3000){
      setTimeout(resolve, turn);
    }
    else{
      setTimeout(reject, turn);
    }
  };

const fight = new Promise(myPromise);

fight.then((res) => {
    console.log('Você derrotou o inimigo');
});

fight.catch((err) => {
    console.log('G4m3 0v3r');
});