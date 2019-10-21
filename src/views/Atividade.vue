<template>
    <div class="text-xs-center">
        <v-dialog
      v-model="dialog"
      width="500"
        >
        <template v-slot:activator="{ on }">
            <v-btn
          color="red lighten-2"
          dark
          v-on="on"
         >
          Clique aqui!
            </v-btn>
      </template>

      <v-card>
        <v-card-title
          class="headline grey lighten-2"
          primary-title
        >
          O que foi estudado no 2º Bimestre:
        </v-card-title>

        <v-card-text>
          Nesse bimestre aprendemos sobre a Linguagem de Programação VUE, e a usar os seus componentes de VUEtify (layout).
          Aprendemos a direcionar rotas e a criar novas paginas, ex.: <br>
        <br>
          Ir no SRC, abrir pasta VIWES!<br>
          Criar novo arquivo > Nomear e adicionar ".vue" > Salvar<br>
        <br>
          Ir em ROUTER.js e configurar a rota da nova página criada! <br>
          import Atividade from > './views/Atividade.vue' (direcionar a rota)<br>
        <br>
          Direcionar o nome do link para abrir a nova página!<br>
        <br>
            export default new Router({ <br>
            mode: 'history', <br>
            base: process.env.BASE_URL, <br>
            routes: [ <br>
            { <br>
            path: '/atividade', <br>
            name: 'Atividade Avaliativa', <br>
            component: Atividade <br>
            }, <br>
        <br>
        path (http://localhost:8080/atividade) <br>
        name: Nome da página <br>
        component: Nome da rota <br>
        <br>
        Aprendemos a usar os componentes da pagina do VueTify, inseri-los no código e também adaptá-los ao nosso
        desejo, fomatando-o e personalizando-o. <br>
        <br>
        Já o Node.js cria as aplicações JavaScript, que é o que iremos utilizar ao longo do desenvolvimento do projeto,
        ele vai auxiliar na funcionalidade do aplicativo e/ou página, junto com o JavaScript.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            flat
            @click="dialog = false"
          >
            Dez!
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
    data () {
      return {
        dialog: false
      }
    }
}
</script>

