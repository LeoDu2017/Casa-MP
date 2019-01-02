export function formatNumber (n) {
  const str = n.toString()
  return str[1] ? str : `0${str}`
}
export function isPhoneNo (phone) {
  var pattern = /^1[34578]\d{9}$/
  return pattern.test(phone)
}
export function isEmail (email) {
  var pattern = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/
  return pattern.test(email)
}
export function formatTime (date) {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  const t1 = [year, month, day].map(formatNumber).join('/')
  const t2 = [hour, minute, second].map(formatNumber).join(':')

  return `${t1} ${t2}`
}
export default {
  formatNumber,
  formatTime,
  isPhoneNo,
  isEmail
}
