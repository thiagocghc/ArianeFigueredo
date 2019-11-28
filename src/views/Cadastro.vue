<template>
  <v-layout justify-center align-center>
    <v-flex xs10 sm7 md4 class="text-xs-center">
    <form>
        <v-text-field
          v-model="cliente"
          
          label="Nome do Cliente"
          required
          
        ></v-text-field>

<v-select
   v-model="select"
          :items="sexo"
        
          label="Sexo"
          required 
           >
        </v-select>
        
           <v-text-field
          v-model="telefone"
          
          label="Número de Telefone"
          required
          
        ></v-text-field>

         <v-text-field
          v-model="endereco"
          
          label="Endereço"
          required
          
        ></v-text-field>

<v-text-field
          v-model="email"
          
          label="Digite seu email"
          required
          
        ></v-text-field>

<v-text-field
          v-model="password"
          label="Senha"
          type = "password"
          
          required
          
        ></v-text-field>
  

        <v-btn @click="submit">Entrar</v-btn>
        <v-btn @click="clear">Cancelar</v-btn>
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

      sexo: [
        'Masculino',
        'Feminino',
        'Indefinido'
      ],
      checkbox: false
    }),
  }
</script>
