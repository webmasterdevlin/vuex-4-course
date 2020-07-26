import { store } from '../store'
import { isValidTokenFromLocalStorage } from './auth.service'

export const authGuard = (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (store.getters["authModule/isAuthenticated"]) {
      next()
      return
    } else if (isValidTokenFromLocalStorage()) {
      next('/continue-as')
    }

    next('/login')
  }

  next()
};
