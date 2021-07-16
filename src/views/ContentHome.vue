<template>
  <div class="pt-5">
      <h1 class="mt-5">Gallary</h1>
    <mdb-carousel
      :items="9"
      multi
      slide
      indicators
      indicatorsColor="secondary-color"
      navColor="secondary"
      :interval="8000"
    >
      <template v-for="(i, index) in items" #[index+1]>
        <div :key="index" style="cursor: pointer">
          <mdb-row
            md="4"
            class="d-md-inline-block px-2"
            @click.native="showLightbox(i)"
          >
            <figure>
              <img :src="imgs[i]" class="img-fluid" alt />
            </figure>
          </mdb-row>
          <mdb-row
            md="4"
            class="d-md-inline-block px-2"
            @click.native="showLightbox(i + 1)"
          >
            <figure>
              <img :src="imgs[i+1]" class="img-fluid" alt />
            </figure>
          </mdb-row>
        </div>
      </template>
    </mdb-carousel>

    <mdb-lightbox
      :visible="visible"
      :imgs="imgs"
      :index="index"
      @hide="handleHide"
    ></mdb-lightbox>
  </div>
</template>
<script>
  import { mdbCarousel, mdbLightbox, mdbRow } from "mdbvue";
  export default {
    name: "CarouselPage",
    components: {
      mdbCarousel,
      mdbLightbox,
      mdbRow
    },
    data() {
      return {
        imgs: [
          "https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(2).jpg",
          "https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(3).jpg",
          "https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(4).jpg",
          "https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(5).jpg",
          "https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(6).jpg",
          "https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(7).jpg",
          "https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(8).jpg",
          "https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(9).jpg",
          "https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(10).jpg",
          "https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(11).jpg",
          "https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(12).jpg",
          "https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(13).jpg",
          "https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(14).jpg",
          "https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(15).jpg",
          "https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(16).jpg",
          "https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(17).jpg",
          "https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(18).jpg",
          "https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(19).jpg"
        ],
        visible: false,
        index: 0
      };
    },
    methods: {
      showLightbox(index) {
        this.index = index;
        this.visible = true;
      },
      handleHide() {
        this.visible = false;
      }
    },
    computed: {
      items() {
        return this.imgs
          .map((_, i) => i)
          .filter((_, i) => i % 2 === 0);
      }
    }
  };
</script>