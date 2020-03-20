
class Observer {
    constructor () {
        this.observers = [];
    }
    subscribe (fn) {
        this.observers.push(fn);
    }

    broadcast (data) {
        this.observers.forEach(subscriber => subscriber(data))
    }
}

export const formSendObserver = new Observer();
export const winnerObserver = new Observer();