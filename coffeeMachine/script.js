function CoffeMachine(power) {
    const Q = 4200;
    const maxTemp = 90;

    let watterAmoun = 0;
    let coffeeAmount = 0;
    let timerStart = 0;

    this.setWatterAmount = (amount) => {
        if (amount >= 50) {
            watterAmoun = amount;
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
        return (watterAmoun * Q * maxTemp) / power + (coffeeAmount*watterAmoun);
    }

    this.launch =  () => {
        timerStart = setTimeout(() => {
            console.log('ваш кофе готов');
        }, timerWork());
        console.log(timerWork());
        console.info(`ваш кофе будет готов через ${timerWork()/1000} секунд`);
    }

    this.stop = () => {
        clearTimeout(timerStart);
        console.info('Вы остановили кофеварку')
    }
}

const vitek = new CoffeMachine(3000);
vitek.setWatterAmount(100);
vitek.setCoffeeAmount(50);
vitek.launch();
