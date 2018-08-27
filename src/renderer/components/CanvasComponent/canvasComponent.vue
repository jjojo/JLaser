<template>
  <div>
    <!-- TODO: Add canvasHeight and with to state and set it from engraving board size -->
    <canvas id="canvas" ref="canvas" width="800" height="600"></canvas>
    <input type="text" v-model="exampleContent" />
    <span> {{ exampleContent }} </span>
  </div>
</template>

<script>
  import Image from './../../store/modules/Image.js'
  import { mapGetters } from 'vuex'

  export default {
    data () {
      return {
        exampleContent: 'Hej'
      }
    },
    methods: {
      getScaleFactor: function (svgData, scaleTo) {
        return scaleTo / Math.max(svgData.width, svgData.height)
      },
      updateCanvas: function (svgData) {
        let ctx = this.$refs.canvas.getContext('2d')
        ctx.clearRect(0, 0, this.$refs.canvas.width, this.$refs.canvas.height)
        this.$refs.canvas.width = 800
        this.$refs.canvas.height = 600
        ctx.fillStyle = 'black'

        const path = new Path2D(svgData.d)
        if( Math.min(svgData.width, svgData.height)
        > Math.min(this.$refs.canvas.width, this.$refs.canvas.height)){
          let scaleFactor = this.getScaleFactor(svgData, 800)
          console.log(scaleFactor);
          ctx.scale(scaleFactor, scaleFactor)
        }
        ctx.fill(path)
      }
    },
    watch: {
      exampleContent: function (val, oldVal) {
        this.updateCanvas(this.getSvgData)
      },
      getRendering: function (val, oldVal) {
        if (oldVal && !val) {
          this.updateCanvas(this.getSvgData)
        }
      }
    },
    mounted: function () {
      this.updateCanvas(this.getSvgData)
  },
    computed: {
      ...mapGetters([
        'getSvgData',
        'getRendering'
      ])
    }
  }
</script>

<style lang='scss'>
@import '../../globals.scss';

canvas {
  width: 800px;
  height: 600px;
}
</style>
