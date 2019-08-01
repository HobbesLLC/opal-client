import config from '../config.js'

const AnimationApiService = {
  getAnimations() {
    return fetch(`${config.API_ENDPOINT}/animations`)
      .then(res =>
        (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
      )
  },
  getGrid() {
    return fetch(`${config.API_ENDPOINT}/grid`)
      .then(res =>
        (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
      )
  },
  getById(id) {
    return fetch(`${config.API_ENDPOINT}/animations/${id}`)
      .then(res =>
        (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
      )
  },
  saveAnimation(lottieColor, duration, stroke, scale) {
    return fetch(`${config.API_ENDPOINT}/animations`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${config.API_KEY}`
      },
      body: JSON.stringify({
        lottieColor: lottieColor,
        duration: duration,
        stroke: stroke,
        scale: scale
      })
    })
    .then(res => {
      if (!res.ok) {
       return res.json().then(e => Promise.reject(e)) //Notice the return
     }
     return res.json()

    })
  }
}

export default AnimationApiService
