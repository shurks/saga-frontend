import Emitter from "../utils/reactive/emitter";
import StorageData from "./storage-data";

export default abstract class Storage {
    /**
     * Fires when this storage has been updated.
     * This can be listened to in a React Component constructor,
     * to automatically update the state with for example `this.forceUpdate()`
     */
    public updated = new Emitter<StorageData>()

    /**
     * The raw data
     */
    private _data!: StorageData

    /**
     * Gets the current sub domain
     */
    private get subDomain() {
        const currentURL = window.location.hostname
        const hostnameParts = currentURL.split('.')
        if (hostnameParts.length > 2) {
            return hostnameParts.filter((v, i, a) => i < a.length - 3).join('.')
        }
        else {
            return null
        }
    }

    /**
     * Creates a proxy that automatically updates the storage,
     * upon changes
     */
    public get data(): StorageData {
        const data = this.type.getItem(`data${this.subDomain ? `.${this.subDomain}` : ''}`)
        if (data) {
            try {
                this._data = JSON.parse(data)
            }
            catch (err) {
                console.error(err)
                this._data = new StorageData()
            }
        }
        else {
            this._data = new StorageData()
        }
        const createRecursiveProxy = (obj: object) => {
            return new Proxy(obj, {
                get(target, prop): any {
                    const value = (target as any)[prop]
                    if (typeof value === 'object' && value !== null) {
                        return createRecursiveProxy(value) 
                    }
                    return value
                },
                set: (target, prop, value) => {
                    (target as any)[prop] = value
                    this.type.setItem(`data${this.subDomain ? `.${this.subDomain}` : ''}`, JSON.stringify(this._data))
                    return true
                }
            })
        }
        return createRecursiveProxy(this._data)
    }

    /**
     * Replaces the storage data
     */
    public set data(data: StorageData) {
        this._data = data
        this.type.setItem(`data${this.subDomain ? `.${this.subDomain}` : ''}`, JSON.stringify(this._data))
    }

    constructor(
        /**
         * The type of storage
         */
        protected type: typeof localStorage
    ) {}
}