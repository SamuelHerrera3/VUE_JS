<template>
  <div>
      <div id="contenedor">
      <div v-for="obj in arreglo" :key="obj.nombre">
          <tarjeta 
          :url="obj.url" 
          :nombre="obj.nombre" 
          :descripcion="obj.descripcion"
          :imagenes="imagenes"/>

      </div>
     </div>
     <button  type="button" class="btn btn-outline-success" v-on:click="cargarArreglo">Cargar arreglo</button>
  </div>
</template>

<script>
import tarjeta from './tarjeta.vue'
export default {
    components:{
        tarjeta
    },
    data: () => {
        return{
            arreglo: [],
            imagenes:["https://images.stockx.com/images/Air-Jordan-1-Mid-Tan-Gum-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&auto=compress&trim=color&q=90&dpr=1&updated_at=1633023775&fm=webp",
                        "https://images.stockx.com/images/Air-Jordan-1-Mid-Barcelona-Sweater.jpg?fit=fill&bg=FFFFFF&w=140&h=75&auto=compress&trim=color&q=90&dpr=1&updated_at=1634029234&fm=webp",
                        "https://images.stockx.com/images/Air-Jordan-1-Mid-Black-Gym-Red-GS-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&auto=compress&trim=color&q=90&dpr=1&updated_at=1620058916&fm=webp",
                        "https://images.stockx.com/images/Air-Jordan-1-Mid-Chicago-Toe-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&auto=compress&trim=color&q=90&dpr=1&updated_at=1616187353&fm=webp",
                        "https://images.stockx.com/images/Air-Jordan-3-Retro-Racer-Blue-GS-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&auto=compress&trim=color&q=90&dpr=1&updated_at=1629139705&fm=webp",
                        "https://images.stockx.com/images/Air-Jordan-3-Retro-Laser-Orange-W-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&auto=compress&trim=color&q=90&dpr=1&updated_at=1606316857&fm=webp",
                        "https://images.stockx.com/images/Jordan-3-Retro-Infrared-23-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&auto=compress&trim=color&q=90&dpr=1&updated_at=1607662894&fm=webp",
                        "https://images.stockx.com/images/Air-Jordan-3-Retro-Pine-Green-GS.jpg?fit=fill&bg=FFFFFF&w=140&h=75&auto=compress&trim=color&q=90&dpr=1&updated_at=1634728087&fm=webp",
                        "https://images.stockx.com/images/Air-Jordan-4-Retro-Off-White-Sail-W-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&auto=compress&trim=color&q=90&dpr=1&updated_at=1607655526&fm=webp",
                        "https://images.stockx.com/images/Air-Jordan-4-Retro-PSG-Paris-Saint-Germain-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&auto=compress&trim=color&q=90&dpr=1&updated_at=1607050018&fm=webp",
                        "https://images.stockx.com/images/Air-Jordan-4-Retro-White-Pine-Green-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&auto=compress&trim=color&q=90&dpr=1&updated_at=1607650045&fm=webp",
                        "https://images.stockx.com/images/Air-Jordan-4-Retro-Royalty-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&auto=compress&trim=color&q=90&dpr=1&updated_at=1607657202&fm=webp",]
        }
    },

    methods:{
        cargarArreglo(){
            console.log("cargando arreglo...")
            let obj1 = {
                url: "https://images.stockx.com/images/Air-Jordan-1-Low-Black-Toe-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&auto=compress&trim=color&q=90&dpr=1&updated_at=1606320100&fm=webp",
                nombre: "retro1",
                descripcion: "Retro 1"
            }

            let obj2 = {
                url: "https://images.stockx.com/images/Air-Jordan-3-Retro-Fire-Red-2013-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1607663379",
                nombre: "retro3",
                descripcion: "Retro 3 fire red"
            }

            let obj3 = {
                url: "https://media.revistagq.com/photos/5f59f96803497885f5f831d7/master/w_1600%2Cc_limit/airjordan4firered.jpg",
                nombre: "retro4",
                descripcion: "Retro 4 fire red"
            }
            this.arreglo.push(obj1);
            this.arreglo.push(obj2);
            this.arreglo.push(obj3);
        }
        
    },

    created: ()=>{
    }

}
</script>
    
<style>
#contenedor{
    display: grid;
    grid-template-columns: repeat(3, 1fr) ;
}
</style>