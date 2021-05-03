<template>
    <div id="mapContainer"></div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import L from "leaflet";
export default {

    data: function(){
        return{
            map: null,
            marker: null
        }
    },

    // ideas: https://blog.logrocket.com/building-an-interactive-map-with-vue-and-leaflet/
    // and Leaflet docs.
    methods:{
        // creates the map
        setUpLeafLetMap: function(){

            this.map = L.map('mapContainer').setView([30,0], 2)
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(this.map);

            // on click, gets the coordinates and updates the values in the store
            this.map.on('click', (event)=>{
                let latitude = event.latlng.lat;
                let longitude = event.latlng.lng;
                
                this.$store.commit('updateLatitude', Number(latitude));
                this.$store.commit('updateLongitude', Number(longitude));
            });
            
        },
        addMarker: function(){
            // adds the marker to the map
            if (this.latitude != null && this.longitude != null){
                // removes the previous marker
                if (this.marker != null){
                    this.map.removeLayer(this.marker);
                }
                this.marker = L.marker([this.latitude, this.longitude]);
                this.marker.addTo(this.map);
            }
        }
    },
    computed:{
        latitude: function(){
            return this.$store.getters.getLatitude;
        },
        longitude: function(){
            return this.$store.getters.getLongitude;
        }
    },
    mounted(){
        this.setUpLeafLetMap();
    },
    // update the marker when the coords change
    watch:{
        latitude: function(){
            this.addMarker();
        },
        longitude: function(){
            this.addMarker();
        }
    }
}
</script>

<style scoped>

div{
    border: 2px solid;
    width: 40%;
    height: 400px;
    padding: 10px;
}

</style>