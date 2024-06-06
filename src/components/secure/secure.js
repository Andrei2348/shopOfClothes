export const saveJWT = (jwtData) => {
  localStorage.setItem('shopOfClothes', jwtData)
}

export const removeJWT = () => {
  localStorage.removeItem('shopOfClothes')
}

export const checkCookie = () => {
  if (localStorage.getItem('shopOfClothes')) {
    return true
  } else {
    return false
  }
}
