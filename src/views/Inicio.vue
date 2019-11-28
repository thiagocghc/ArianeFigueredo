<template>
    <v-carousel>
      <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
      ></v-carousel-item>
    </v-carousel>
  </template>

  <script>
      export default {
        data () {
          return {
            items: [
              {
                src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSrpNkNPDdz-surFPYDqsru5VGpV9VRxX8XWFSQPPVeGHpQ7g9U',
              },
              {
                src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRxl61FPB6cmoI8ONc8nEv7UldfFCJRS_fP8ZiGP3mUCMyF45eg',
              },
              {
                src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQpEDzL0I3Kc2uqHVWq_4RLJyr0QW_sSU49ydnBXI0_Y2Wq6D0n',
              },
              {
                src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSeIDYherIf5250YULElsRcZVfJHKKQtvrhXFBk6Z0OsUKHxHK9',
              },
            ],
          }
        },
      }
    </script>