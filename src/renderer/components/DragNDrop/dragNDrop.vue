<template>
    <div
        class="drag-n-drop-area">

        <div class="drag-input">
            <input type="file" accept="image/*" v-on:change="handleImageChange">

            <div class="camera-img">
              <!-- <Camera /> -->
              Camera Image goes here!
            </div>
            <p>Drag and trop text here!</p>

            <!-- TODO: implement "show original image" -->
            <!-- <img v-bind:src="getDataURL"/> -->

        </div>
    </div>
</template>

<script>
import Image from './../../store/modules/Image.js'
import { renderSVG } from './../renderSVG'
import { mapGetters } from 'vuex'
export default {
  data () {
    return {

      handleImageChange: (e) => {
        console.log(e.target.files[0])
        console.log(this.$store)
        Image.actions.setImagePath(this.$store, e.target.files[0].path)
        Image.actions.setRendering(this.$store, true)
        renderSVG(e.target.files[0], {threshold: 128, scale: 1.0}, this.setSvgData)
        this.readImageFile(e.target.files[0])
      }
    }
  },
  methods: {
    readImageFile (file) {
      console.log(file)
      let reader = new FileReader()
      reader.onload = (img) => {
        console.log(img.currentTarget)
        console.log(this.$store)
        Image.actions.setDataURL(this.$store, img.currentTarget.result)
      }
      reader.readAsDataURL(file)
    },
    setSvgData (svgData) {
      Image.actions.setSvgData(this.$store, svgData)
      Image.actions.setRendering(this.$store, false)
    }
  },
  computed: {
    ...mapGetters([
      'getPath',
      'getDataURL'])
  }

}
</script>

<style lang='scss'>
@import '../../globals.scss';


.drag-n-drop-area {
  border: 2pt dashed #1c1c1c;
  text-align: center;

  .camera-img {
    display: inline-block;
    width: 35%;
  }

  &:hover {
    cursor: pointer;
  }
}

.drag-input {
  position: relative;
  width: 100%;
  height: 100%;
  &:hover {
    cursor: pointer;
  }

  img{
    width: 100%
  }

  input[type='file'] {
    opacity: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
    position: absolute;
    top: 0;
    left: 0;
    &:hover {
      cursor: pointer;
    }
  }
}
</style>
