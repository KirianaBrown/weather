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


    deleteItem(id) {
        // 1. Get index of item based on ID from array
        const index = this.saved.findIndex(el => el.id === id);
        // 2. Slice array at index to remove item and mutate orig Arr
        this.saved.splice(index, 1);
    }

}