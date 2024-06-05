export const saveJWT = (jwtData) => {
  document.cookie = `shopOfClothes=${jwtData}; path=/;`
}

export const checkCookie = () => {
  let cookieValue = document.cookie
  if(cookieValue){
    cookieValue
    .split('; ')
    .find((row) => row.startsWith('shopOfClothes'))
    .split('=')[1]
    return true
  } else {
    return false
  }
}
