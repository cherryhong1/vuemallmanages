import Cookies from 'js-cookie'

const TokenKey = 'token'

export function getToken() {
    return Cookies.get(TokenKey)
}

export function setToken(token) {
    return Cookies.set(TokenKey, token)
}

export function removeToken() {
    return Cookies.remove(TokenKey)
}
export function getCookies(item) {
    return Cookies.get(item)
}

export function setCookies(itemName, item) {
    return Cookies.set(itemName, item)
}

export function removeCookies(item) {
    return Cookies.remove(item)
}