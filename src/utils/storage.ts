enum StorageType {
    l = 'localStorage',
    s = 'sessionStorage'
}

class MyStorage {
    storage: Storage

    constructor(type: StorageType) {
        this.storage = type === StorageType.l ? window.localStorage : window.sessionStorage
    }

    set(
        key: string,
        value: any
    ) {
        const data = JSON.stringify(value)
        this.storage.setItem(key, data)
    }

    get(key: string) {
        const value = this.storage.getItem(key)
        if (value) {
            return JSON.parse(value)
        }
    }

    delete(key: string) {
        this.storage.removeItem(key)
    }

    clear() {
        this.storage.clear()
    }
}

const LocalStorage = new MyStorage(StorageType.l)
const SessionStorage = new MyStorage(StorageType.s)
export { LocalStorage, SessionStorage }
