<template>
    <div class="matrix-canvas">
     <canvas ref="matrixCanvas" />
   </div>
 </template>
 
 <script lang="ts">
 export default {
   name: 'MatrixView'
 }
 </script>
 
 <script setup lang="ts" >
 import run from "utils/run.ts";
 import { onBeforeUnmount, onMounted, ref } from "vue";
 
 const matrixCanvas = ref(null);
 const handleResize = () => {
   if (matrixCanvas.value) {
     run(matrixCanvas.value);
   }
 };
 
 onMounted(() => {
   window.addEventListener('resize', handleResize);
   handleResize(); // Initial call to set up the canvas correctly.
 });
 
 onBeforeUnmount(() => {
   window.removeEventListener('resize', handleResize);
 });
 </script>
 
 <style scoped>
 .matrix-canvas {
   position: absolute;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
 }
 </style>
 