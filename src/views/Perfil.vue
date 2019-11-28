<template>
  <v-layout justify-center align-center>
    <v-flex xs10 sm7 md4 class="text-xs-center">
    <form>
        <v-text-field
          v-model="name"
          
          label="Nome do pet"
          required
          
        ></v-text-field>
        <v-select
          v-model="select"
          :items="animal"
        
          label="Tipo do Pet"
          required 
           >
        </v-select>
        
 <v-text-field
          v-model="raça"
          
          label="Digite a raça"
          required
          
        ></v-text-field>

        <v-text-field
        v-model="Sexo"
        
        label="Sexo do Pet"
        required
        
      ></v-text-field>

      <v-text-field
      v-model="peso"
      
      label="Peso do Pet"
      required
      
    ></v-text-field>

        <v-checkbox
          v-model="checkbox"
          
          label="Deseja criar perfil?"
          required
         
        ></v-checkbox>

        <v-btn @click="submit">Adicionar</v-btn>
        <v-btn @click="clear">Excluir</v-btn>
    </form> 
    </v-flex>
  </v-layout> 
</template>
<script>
  export default {
    
    data: () => ({
      name: '',
      text: '',
      select: null,
      animal: [
        'Cachorro',
        'Gato',
        'Coelho',
        'Aves'
        ],
      checkbox: false
    }),
  }
</script>
