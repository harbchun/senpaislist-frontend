import { init } from '@rematch/core'
import pageModels from '../models'

const store = (initialState = {}) => {
  return init({
    models: {
      ...pageModels
    },
    redux: {
      initialState,
      rootReducers: { RESET_APP: () => undefined }
    }
  })
}

export default store
