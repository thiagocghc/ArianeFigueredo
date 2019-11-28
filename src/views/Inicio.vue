<template>
  <v-hover>
    <v-card
      slot-scope="{ hover }"
      class="mx-auto"
      color="#3d85c6ff lighten-4"
      max-width="600"
    >
      <v-img
        :aspect-ratio="16/9"
        url="C:\Users\Convidado\Documents\Ariane Figueredo\Projeto\projeto\logo.jpg"
      >
        <v-expand-transition>
          <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out blue darken-2 v-card--reveal display-3 white--text"
            style="height: 100%;"
          >
            Saber preço por Consulta!
          </div>
        </v-expand-transition>
      </v-img>
      <v-card-text
        class="pt-4"
        style="position: relative;"
      >
        <v-btn
          absolute
          color="#3d85c6ff"
          class="white--text"
          fab
          large
          right
          top
        >
          <v-icon>attach_money</v-icon>
        </v-btn>
        <h3 class="display-1 font-weight-light blue--text mb-2">Pet Jr.!</h3>
        <div class="font-weight-light title mb-2">
        O Pet Jr. é um aplicativo gratuito!<br>
        Mas você precisa saber quanto irá pagar ao Vet. que irá atende-lo(a)!
        </div>
      </v-card-text>
    </v-card>
  </v-hover>
</template>
<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .5;
  position: absolute;
  width: 100%;
}
</style>