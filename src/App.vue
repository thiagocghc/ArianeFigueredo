<template>
  <v-app>
    <v-toolbar color="#3d85c6ff" dark>
        <v-toolbar-side-icon color="white--text" @click="mostra = true"></v-toolbar-side-icon>
        <v-toolbar-title class="white--text">Pet Jr.</v-toolbar-title>
    </v-toolbar>
    <v-navigation-drawer
      v-model="mostra"
      absolute
      temporary
    >
      <v-list>
        <v-list-tile  v-for="(item, i) in itensMenu"
            :key="i" :to="item.rota">
          <v-list-tile-action>
            <v-icon>{{item.icone}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>{{item.texto}}</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>
<script>
  export default {
    data: () => ({
      mostra: false,
      itensMenu:  [
        {
          icone: "home",
          texto: "Início",
          rota: "/inicio"
        },

        {
          icone: "pets",
          texto: "Perfil",
          rota: "/perfil"
        },

        {
          icone: "person_add_disabled",
          texto: "Adicionar perfil",
          rota: "/add"
        },
        
        

        {
          icone: "local_hospital",
          texto: "Clínicas próximas",
          rota: "/clinicas"
        },

        {
          icone: "local_taxi",
          texto: "Solicitar Vet.",
          rota: "/solicitar"
        },
        
        {
          icone: "supervisor_account",
          texto: "Trocar de Perfil",
          rota: "/trocar"
        },

        {
          icone: "delete_outline",
          texto: "Excluir perfil",
          rota: "/excluir"
        },
      ],
      
    })
  }
</script>
