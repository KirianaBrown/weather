export default class Saved {
    constructor() {
        this.saved = [];
    }

    addSaved(id, location, temp, img) {
        const savedItem = {
            id,
            location,
            temp,
            img,
        };

        this.saved.push(savedItem);

        // Update local storage
        this.updateLocalStorage();

        return savedItem;
    }

    deleteSaved(id) {
        const index = this.saved.findIndex((el) => el.id === id);
        this.saved.splice(index, 1);

        // update local storage
        this.updateLocalStorage();
    }

    isSaved(id) {
        // Return True or False
        return this.saved.findIndex((el) => el.id === id) !== -1;
    }

    updateSaved(id) {
        // Find element by id
        const element = this.saved.find((el) => el.id === id);

        // update local storage
        this.updateLocalStorage();
    }

    updateLocalStorage() {
        localStorage.setItem("saved", JSON.stringify(this.saved));
    }

    readStorage() {
        const storage = JSON.parse(localStorage.getItem("saved"));

        if (storage) {
            this.saved = storage;
        }
    }
}