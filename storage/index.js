export const set = (key, value) => {
  return uni.setStorageSync(key, value);
}

export const get = (key) => {
  return uni.getStorageSync(key);
}

export default {
  get,
  set
}
