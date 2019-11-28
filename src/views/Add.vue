<template>
  <v-layout justify-center align-center>
    <v-flex xs10 sm7 md4 class="text-xs-center">
    <form>
        <v-text-field
          v-model="name"
          
          label="Nome do novo pet"
          required
          
        ></v-text-field>
        <v-select
          v-model="select"
          :items="animal"
        
          label="Selecione o pet"
          required 
           >
        </v-select>
        <v-select
          v-model="select"
          :raca="raca"
        
          label="Selecione a raça"
          required
           >
        </v-select>
        <v-checkbox
          v-model="checkbox"
          
          label="Deseja mesmo adicionar este novo perfil?"
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
        'Hamster',
        'Porquinho da Índia',
        'Aves'
        ],
      cachorro: [
        'Akita',
        'Basset hound',
        'Beagle',
        'Bichon frisé',
        'Boiadeiro australiano',
        'Border collie',
        'Boston terrier',
        'Boxer',
        'Buldogue francês',
        'Buldogue inglês',
        'Bull terrier',
        'Cane corso',
        'Cavalier king charles spaniel',
        'Chihuahua',
        'Chow chow',
        'Cocker spaniel inglês',
        'Dachshund',
        'Dálmata',
        'Doberman',
        'Dogo argentino',
        'Dogue alemão',
        'Fila brasileiro',
        'Golden retriever',
        'Husky siberiano',
        'Jack russell terrier',
        'Labrador retriever',
        'Lhasa apso',
        'Lulu da pomerânia',
        'Maltês',
        'Mastiff inglês',
        'Mastim tibetano',
        'Pastor alemão',
        'Pastor australiano',
        'Pastor de Shetland',
        'Pequinês',
        'Pinscher',
        'Poodle',
        'Pug',
        'Rottweiler',
        'Schnauzer',
        'Shar-pei',
        'Shiba',
        'Shih tzu',
        'Staffordshire bull terrier',
        'Weimaraner',
        'Yorkshire'
      ],
      gato: [
        'Abissínio',
        'American Curl',
        'American Curl Longhair',
        'American Curl Shorthair',
        'American Shorthair',
        'American Wirehair',
        'Anatolian Cat/ Turkish Shorthair',
        'Angorá',
        'Arabian Mau',
        'Asian Semi-long Hair',
        'Australian Mist',
        'Azul Russo',
        'Balinês',
        'Bobtail Americano',
        'Bobtail Japones',
        'Bombaim',
        'Brazilian Shorthair',
        'British Longhair',
        'British Shorthair/ British Longhair',
        'Burmilla',
        'Burmês',
        'Califórnia Spangled Cat',
        'Ceylon',
        'Chausie',
        'Cheetoh / Cheetah',
        'Chinchilla Longhair',
        'Colorpoint Shorthair',
        'Cornish Rex',
        'Cymric',
        'Devon Rex',
        'Don Hairless / Donskoy / Don Sphynx',
        'European Shorthair',
        'Exotic Longhair',
        'Gato Chartreux',
        'Gato Himalaio',
        'Gato Persa',
        'Gato Siberiano',
        'Gato Singapura',
        'Gato exótico',
        'Gato-de-bengala',
        'German Rex',
        'Gato Javanês',
        'Japanese Bobtail',
        'Havana Brown',
        'Highland Fold',
        'Highland Lynx',
        'Highlander',
        'Highlander Shorthair',
        'Honey Bear',
        'House Cat / Domestic / Household',
        'House Cat Shorthair/ Domestic',
        'Kanaani',
        'Karelian Bobtail',
        'Karelian Bobtail Shorthair',
        'Khao Manee',
        'Korat',
        'Kurilian Bobtail',
        'Kurilian Bobtail Shorthair',
        'LaPerm',
        'LaPerm Longhair',
        'LaPerm Shorthair',
        'Lykoi',
        'Maine Coon',
        'Manx',
        'Mau Egípcio',
        'Mekong Bobtail',
        'Minskin',
        'Munchkin',
        'Nebelung',
        'Neva Masquerade',
        'Norwegian Forest / Wegie',
        'Ocicat',
        'Ojos Azules',
        'Ojos Azules Longhair',
        'Oriental Shorthair',
        'Peterbald',
        'Pixiebob',
        'Pixiebob Shorthair',
        'Ragamuffin',
        'Ragdoll',
        'Sagrado da Birmânia',
        'Savannah',
        'Scottish Fold',
        'Selkirk Rex',
        'Selkirk Rex Longhair',
        'Selkirk Rex Shorthair',
        'Serengeti',
        'Seychellois / Balinese bicolour / Siamese bicolour',
        'Seychellois Shortghair / Siamese bicolour',
        'Siamês',
        'Snowshoe',
        'Sokoke',
        'Somali',
        'Sphynx',
        'Thai',
        'Tiffany / Chantilly',
        'Tonkinese Longhair',
        'Tonkinese Shorthair',
        'Tonquinês',
        'Toyger',
        'Turkish Van',
        'Turkish Vankedisi',
        'Ural Rex',
        'Ural Rex Shorthair',
        'York',
        'Yugoslav Shepherd'
        ],
      coelho:[
        'Angorá: Francês, Inglês, Gigante e Cetim',
        'Anão Holandês ou Netherland Dwarf',
        'Argente Bleu',
        'Argente Brun',
        'Beveren',
        'Branco De Florida',
        'Britannia Petite',
        'Coelho Alaska',
        'Coelho Americano',
        'Califórnia',
        'Canela ou Cinnamom',
        'Chinchila',
        'D’Argente de Nata',
        'D’Argente de Champagne',
        'English Spot',
        'Fuzzy Lop Americano',
        'Gigante Britânico',
        'Gigante De Checkered',
        'Gigante Flemish ou Flamengo',
        'Hare Belgas',
        'Harlequin',
        'Havana',
        'Himalaio',
        'Holandês',
        'Hotot Anão',
        'Jersey Wooly',
        'Lilac',
        'Lionhead',
        'Lop',
        'Lustrador',
        'Mini Lop',
        'Mini Rex',
        'Mini Teddy',
        'Nova Zelândia',
        'Palomino',
        'Pérola Do Fumo',
        'Prata',
        'Raposa De Prata',
        'Raposa Suíça',
        'Rex',
        'Rhinelander',
        'Sable Americano',
        'Satin',
        'Siberiano',
        'Sussex',
        'Tan',
        'Thuringer',
        'Viena'
      ],
      porquinho: [
        'Porquinho da Índia selvagem',
        'Porquinho da índia doméstico',
        'Porquinho da Índia raça Abissínio',
        'Porquinho da Índia raça Coroado Inglês e Coroado Americano',
        'Porquinho da Índia de pelo curto (Inglês)',
        'Porquinho da Índia Peruano',
        'Porquinho da Índia Rex',
        'Porquinho da Índia Somali',
        'Raça de porquinho da Índia Ridgeback',
        'Porquinho da Índia raça Teddy Americano',
        'Porquinho da Índia raça Teddy Suiço',
        'Porquinho da Índia raça Alpaca',
        'Porquinho da Índia raça Angorá',
        'Porquinho da Índia raça Coronet',
        'Porquinho da Índia raça Lunkarya e porquinho da Índia Curly',
        'Porquinho da Índia raça Merino',
        'Porquinho da Índia raça Mohair',
        'Porquinho da Índia Raça Sheltie',
        'Porquinho da Índia raça texel',
        'Porquinho da Índia raça Skinny e da raça Baldwin'
      ],
      checkbox: false
    }),
  }
</script>
