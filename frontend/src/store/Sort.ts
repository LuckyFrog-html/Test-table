import { makeAutoObservable } from "mobx";

class Sort {
    type: string = "id";
    isIncreasing: Boolean = true;
    lastTarget: string = "id";
    smt: any;

    constructor() {
        makeAutoObservable(this);
    }

    changeType(type: string) {
        this.type = type;
    }

    changeOrder(order: Boolean) {
        this.isIncreasing = order;
    }

    changeLastTarget(lastTarget: string) {
        this.lastTarget = lastTarget;
    }

    changeSmt(smt: string) {
        this.smt = smt;
    }
}

export default new Sort();
