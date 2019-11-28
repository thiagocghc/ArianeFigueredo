<template>
  <v-card
    max-width="500"
    class="mx-auto"
  >
    <v-toolbar
      color="indigo"
      dark
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Clínicas mais próximas</v-toolbar-title>
      
    </v-toolbar>
    <v-list>
      <v-list-item
        v-for="item in items"
        :key="item.title"
        @click=""
      >
        <v-list-item-avatar>
          <v-img :src="item.avatar"></v-img>
        </v-list-item-avatar>
      </v-list-item>
    </v-list>
  </v-card>
</template>
<script>
  export default {
    data () {
      return {
        items: [
          {avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT9F1f4ytQs3U1uyKEnJBm-VfI_u-xxMaTC3Gk0eGq4l_Ub5Iuy' },
          {avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRJcsS3ryXyeITfxJq6X0-JIW2BCLUWRhIqVEXF5j4vgYqm4_NK' },
          {avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQStXOKFk0F8BId1QDKcFt_uTMgxSxtht6oS6azcIgXyd8lRZia' },
        ],
      }
    },
  }
</script>