const StorageKey = {
  token: 'access_token',
}

export class Storage {
  static setToken(token: string) {
    localStorage.setItem(StorageKey.token, token)
  }

  static getToken() {
    return localStorage.getItem(StorageKey.token)
  }

  static deleteToken() {
    localStorage.removeItem(StorageKey.token)
  }
}
