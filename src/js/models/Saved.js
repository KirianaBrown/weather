import uniqid from 'uniqid';

export default class Saved {
    constructor() {
        this.saved = []
    }

    addItem(img, location, temp) {
        const item = {
            id: uniqid()
            img,
            location,
            temp,
        }

        this.saved.push(item);
        return item;
    }

}