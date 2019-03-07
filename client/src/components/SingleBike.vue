<template>
    <div>
        <div class="box-bike-inner" v-on:click='viewBike(bicycle._id)'>
            <img :src="bicycle.image" alt="bike image">
            <h2>{{bicycle.name}}</h2>
        </div> 
    </div>
</template>

<script>
    import bikeService from '../bikeService.js'
    import {eventBus} from "../main";

    export default {
        name: 'BikeComponent',
        props: ['bike'],
        data() {
            return {
                bicycle: this.bike,
                memberInfo: null,
            }
        },

        methods: {
            async viewBike(bikeID){
                await bikeService.viewBike(bikeID)
                this.memberInfo = await bikeService.viewBike(bikeID);
                eventBus.$emit('selectedBikeDetails', this.bicycle);
            },
        }
    } 
</script>

<style scoped>
    
    div.box-bike-inner {
        padding:20px;
    }

    img {
        width: 300px;
    }

    h2 {
        font-size: 14px;
        padding-top: 30px;
    }
    
</style>
