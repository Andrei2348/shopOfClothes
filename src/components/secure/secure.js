import axios from 'axios'
import store from './../../store/index.js'

export const saveJWT = (jwtData) => {
  localStorage.setItem('shopOfClothes', jwtData)
}

export const removeJWT = () => {
  localStorage.removeItem('shopOfClothes')
}

export const checkJWT = () => {
  if (localStorage.getItem('shopOfClothes')) {
    return checkIsValidJWT()
  } else {
    return false
  }
}


let person = {}

const checkIsValidJWT = async () => {
  try {
    await axios
      .get('https://78f27ce1435ab43d.mokky.dev/auth_me', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('shopOfClothes')}`,
        },
      })
      .then((response) => {
        console.log(response.data)
        person = response.data
        // store.commit('setPersonObject', person);
      })
      .then(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
  } catch (error) {
    console.log(error);
  } finally {
    store.commit('setPersonObject', person);
  
  }
};