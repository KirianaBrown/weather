export default class Saved {
    constructor() {
        this.saved = []
    }

    addSaved(id, location, temp, img) {
        const savedItem = {
            id,
            location,
            temp,
            img
        }

        this.saved.push(savedItem);

        return savedItem;
    }

    deleteSaved(id) {
        const index = this.saved.findIndex(el => el.id === id)
        this.saved.splice(index, 1);
    }

    isSaved(id) {
        // Return True or False
        return this.saved.findIndex(el => el.id === id) !== -1;
    }
}