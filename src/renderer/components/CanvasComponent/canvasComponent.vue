<template>
  <div>
    <!-- TODO: Add canvasHeigt and with to state and set it from engraving board size -->
    <canvas id="canvas" width="800" height="600"></canvas>
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
        exampleContent: "HEj"
      }
    },
    methods: {
      getScaleFactor: function ( svgData, scaleTo ) {
        return scaleTo / Math.min( svgData.width, svgData.height );
      },
      updateCanvas: function ( svgData ) {
        let canvas = document.getElementById( 'canvas' )
        let ctx = canvas.getContext( '2d' )
        ctx.clearRect( 0, 0, canvas.width, canvas.height )
        ctx.fillStyle = "black"
        const path = new Path2D( svgData.d );
        let scaleFactor = this.getScaleFactor( svgData, 800 )
        ctx.scale( scaleFactor, scaleFactor );
        ctx.fill( path );
      }
    },
    watch: {
      exampleContent: function( val, oldVal ) {
        this.updateCanvas( this.getSvgData );
      },
      getRendering: function( val ,oldVal ) {
        this.updateCanvas( this.getSvgData )
      }
    },
    mounted: function () {
      this.updateCanvas( this.getSvgData );
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

canvas{
  width:800px;
  height:600px;
}
</style>

