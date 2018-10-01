function CoffeMachine(power) {
    const Q = 4200;
    const maxTemp = 90;

    let waterAmount = 0;
    let coffeeAmount = 0;
    let timerStart = 0;

    this.setWaterAmount = (amount) => {
        if (amount >= 50) {
            waterAmount = amount;
        } else {
            console.error('Мало воды.');
        }
    }

    this.setCoffeeAmount = (amount) => {
        if (amount >= 25) {
            coffeeAmount = amount;
        } else {
            console.error('Мало кофе');
        }
    }

    const timerWork = () => {
        return (waterAmount * Q * maxTemp) / power + (coffeeAmount * waterAmount);
    }

    this.launch = () => {
        if (waterAmount == 0 || coffeeAmount == 0) {
            console.error(`У вас пустая кофеварка, проверьте воду и кофе!`);
        } else {
            timerStart = setTimeout(() => {
                console.log('ваш кофе готов');
            }, timerWork());
            console.info(`ваш кофе будет готов через ${timerWork()/1000} секунд`);
        }
    }

    this.stop = () => {
        clearTimeout(timerStart);
        console.info('Вы остановили кофеварку')
    }
}

const vitek = new CoffeMachine(3000);
//vitek.setWaterAmount(100);
//vitek.setCoffeeAmount(50);
//vitek.launch();
