<template>
    <v-card style="align-items: flex-start"
      max-width="600"
      class="mx-auto"
    >
      <v-toolbar
        color="#3d85c6ff"
        dark
      >
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
  
        <v-toolbar-title style="align-self: auto">Veterinários disponíveis</v-toolbar-title>
  
        <v-btn icon search>
          <v-icon>mx-auto</v-icon>
        </v-btn>
      </v-toolbar>
  
        <v-list-item
          v-for="item in items"
          :key="item.title"
          @click=""
        >
          <v-list-item-avatar>
            <v-img :src="item.avatar"></v-img>
          </v-list-item-avatar>
  
          <v-list-item-content>
            <v-list-item-title v-text="item.title" style="align-content: center"></v-list-item-title>
          </v-list-item-content>
  
          <v-list-item-icon style="align-content: center">
            <v-icon :color="item.active ? '#3d85c6ff' : 'grey'">chat_bubble</v-icon>
          </v-list-item-icon>
        </v-list-item>
      </v-list>
  
      <v-divider></v-divider>
  
      <v-list subheader>
        <v-subheader>Conversas anteriores</v-subheader>
  
        <v-list-item
          v-for="item in items2"
          :key="item.title"
          @click=""
        >
          <v-list-item-avatar>
            <v-img :src="item.avatar"></v-img>
          </v-list-item-avatar>
  
          <v-list-item-content>
            <v-list-item-title v-text="item.title" style="align-content: center"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
  </template>

  <script>
      export default {
        data: () => ({
          items: [
            { active: true, title: 'Fábio Elias - Clubet - 10 anos de profissão', avatar: 'https://2.bp.blogspot.com/-c--m_WovCnc/Wrpjj6NNyNI/AAAAAAAAADw/0lCCmOje2lwwF8W6I6lQkAkNjJ0q-7dRACLcBGAs/s1600/naelton.png' },
            { active: true, title: 'Alice Medeiros - ClinVet - 7 anos de profissão', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSCNyTrsF3UPXm9bdbz6WsbIL8viusyue7S5md1G37x4-VIPLSB' },
          ],
          items2: [
            { title: 'Anderson Farias - MedVet - 5 ano de profissão', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSFb5LyVXN9tdKi7GVbDjPNU3RDH_BPUh0YZS3cmM1uRLrrfVRA' },
          ],
        }),
      }
    </script>
