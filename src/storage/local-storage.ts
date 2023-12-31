import Storage from "./storage"
import StorageData from "./storage-data"

export default class LocalStorage extends Storage {
    constructor() {
        super(localStorage)
    }
}