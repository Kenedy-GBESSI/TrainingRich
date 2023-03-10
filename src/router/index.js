import { createRouter, createWebHistory } from 'vue-router'
import Inscription from "../components/Inscription.vue"
import SignUp from '../views/SignUp.vue'
import CodeConfirmation from '../views/CodeConfirmation.vue'
import DashboardLayout from '../components/DashboardLayout.vue'
import ActiverCompte from '../views/Comptes/ActiverCompte.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Inscription,
      children: [
        {
          path: '/',
          name: 'signup',
          component: SignUp
        },
        {
          path: '/code-confirmation',
          name: 'confirmation-code',
          component: CodeConfirmation
        }
      ]
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardLayout,
      children: [
        {
          path: '',
          name: 'activer-compte',
          component: ActiverCompte
        }
      ]
    }
  ]
})

export default router
