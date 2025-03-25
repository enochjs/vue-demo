import { createRouter, createWebHistory } from 'vue-router'
import PropsView from '@/pages/props/index.vue'
import CustomView from '@/pages/customEvent/father.vue'
import MittVue from '@/pages/mitt.vue'
import PiniaView from '@/pages/pinia.vue'
import ProviderView from '@/pages/provider.vue'
import SlotView from '@/pages/slot.vue'
import VModalView from '@/pages/vModal.vue'
import AttrView from '@/pages/attrs.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/props',
    },
    {
      path: '/props',
      name: 'props',
      component: PropsView,
    },
    {
      path: '/custom',
      name: 'custom',
      component: CustomView,
    },
    {
      path: '/mitt',
      name: 'mitt',
      component: MittVue,
    },
    {
      path: '/vModal',
      name: 'vModal',
      component: VModalView,
    },
    {
      path: '/attr',
      name: 'attr',
      component: AttrView,
    },
    {
      path: '/pinia',
      name: 'pinia',
      component: PiniaView,
    },
    {
      path: '/provider',
      name: 'provider',
      component: ProviderView,
    },
    {
      path: '/slot',
      name: 'slot',
      component: SlotView,
    },

  ],
})

export default router
