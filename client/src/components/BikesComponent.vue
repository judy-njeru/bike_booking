<template>
    <div class="container">
        <h2 class="text-center mt-5 mb-5">Bikes</h2>
        <div class="row bikes">
            <div class="box-bike d-flex justify-content-between col-12 col-lg-8 offset-lg-2 flex-wrap"
                v-bind:member="bike"
                v-for="(bike, index) in bikes"
                v-bind:item="bike"
                v-bind:index="index"
                v-bind:key="bike._id"> 
                <img :src="bike.image" alt="me"/>
                <p>{{bike.name}}</p>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

    export default {
        name: 'BikesComponent',
        data(){
            return {
                bikes: []
            }
        },

        mounted() {
            axios
            .get('http://localhost:3001/api/bikes')
            .then(response => (this.bikes = response.data)) 
        }
    }
</script>

<style scoped>
    div.container {
        margin: 0 auto;
        max-width: 850px;
    }

    div.bikes {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 70px;
        grid-row-gap: 70px;
    }

    div.box-bike {
        padding:20px;
        box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);

    }

    img {
        width: 300px;
    }
    
</style>
