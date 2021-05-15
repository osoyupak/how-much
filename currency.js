class Currency {
    constructor (firstCurrency, secondCurrency) {
        this.firstCurrency = firstCurrency;
        this.secondCurrency =secondCurrency;
        //this.url = "http://www.http://www.floatrates.com/daily/usd.json";
        this.amount = null;
    }

    exchange() {
        return new Promise((resolve, reject)=>{
            fetch("http://www.floatrates.com/daily/"+this.firstCurrency+".json")
            .then(response => response.json())
            .then(data => {
                const sec = this.secondCurrency.toLowerCase();
                const parity = Number(data[sec].rate);
                const amount2 = Number(this.amount);
                const total = parity*amount2;
                resolve(total);
            })
            .catch(err => reject(err));
        })
    }

    changeAmount(amount) {
        this.amount=amount;
    }

    changeFirstCurrency(newFirstCurrency) {
        this.firstCurrency = newFirstCurrency;
    }

    changeSecondCurrency(newSecondCurrency) {
        this.secondCurrency = newSecondCurrency;
    }
}