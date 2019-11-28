import Vue from 'vue'
import Router from 'vue-router'
import Inicio from './views/Inicio.vue'
import Perfil from './views/Perfil.vue'
import Add from './views/Add.vue'
import Clinicas from './views/Clinicas.vue'
import Solicitar from './views/Solicitar.vue'
import Trocar from './views/Trocar.vue'
import Excluir from './views/Excluir.vue'
import Atividade from './views/Atividade.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/inicio',
      name: 'Início',
      component: Inicio
    },
    {
      path: '/perfil',
      name: 'Perfil',
      component: Perfil
    },
    {
      path: '/add',
      name: 'Adicionar Perfil',
      component: Add
    },
    
    {
      path: '/clinicas',
      name: 'Clínicas Próximas',
      component: Clinicas
    },
    {
      path: '/solicitar',
      name: 'Solicitar Vet.',
      component: Solicitar
    },
    {
      path: '/trocar',
      name: 'Trocar de Perfil',
      component: Trocar
    },
    {
      path: '/excluir',
      name: 'Excluir perfil',
      component: Excluir
    },
    {
      path: '/atividade',
      name: 'Atividade Avaliativa',
      component: Atividade
    },
  ]
})