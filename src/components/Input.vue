<template>

    <div id="mainContainer">
        <p>Päeva pikkuse arvutamiseks sisestage kuupäev ning koordinaadid
            või valige asukoht klikkides kaardile.
        </p>
        <form>
            <label>Kuupäev</label><br>
            <input type="date" id="fromDate" v-model="dateInput">
            <input type="date" id="toDate" v-model="endDateInput" v-if="graphMode">
            <br>
            <label>Laiuskraad</label><br>
            <input type="text" id="latitudeInputField" placeholder="58.3831" v-model="latitudeInput">N<br>
            <label>Pikkuskraad</label><br>
            <input type="text" id="longitudeInputField" placeholder="26.7245" v-model="longitudeInput">E<br>
            <input id="submitButton" type="button" value="Ok" @click="submitForm()">
            <input type="button" value="Puhasta" id="clearButton" @click="clearForm()"><br>
            <br>
            <input type="checkbox" id="graphModeCheckbox" v-model="graphMode">
            <label for="graphModeCheckbox"> Sisesta ajavahemik ja kuva graafik</label>
        </form>
    </div>
    
</template>

<script>
export default {


    data: function(){
        return{
            // form input fields
            latitudeInput: null,
            longitudeInput: null,
            dateInput: null,
            endDateInput: null,
            // true, if the user has checked the option "Sisesta ajavahemik ja kuva graafik"
            graphMode: false,
        }
    },

    methods:{
        // the method run when the user submits the form
        submitForm: function(){
            // input checks
            if (this.dateInput == null){
                alert("Palun sisestage kuupäev!");
                return;
            }
            if (this.graphMode && this.endDateInput == null){
                alert("Palun sisestage ajavahemik!");
                return;
            }
            if (this.longitudeInput === null || this.latitudeInput === null){
                alert("Palun sisestage koordinaadid!");
                return;
            }
            if ( isNaN(this.latitudeInput) || isNaN(this.longitudeInput) ){
                alert("Koordinaadid peavad oleama arvulised väärtused!");
                return;
            }
            if (this.graphMode){
                let date1 = new Date(this.dateInput);
                let date2 = new Date(this.endDateInput);
                if (date1 > date2){
                    alert("Lõppkuupäev peab olema alguskuupäevast hilisem!")
                    return;
                }
            }

            if (Number(this.latitudeInput) >= -90 && Number(this.latitudeInput) <= 90
            && Number(this.longitudeInput) >= -180 && Number(this.longitudeInput) <= 180){

                // update the variables in the vue store
                this.$store.commit('updateLatitude', Number(this.latitudeInput));
                this.$store.commit('updateLongitude', Number(this.longitudeInput));
                this.$store.commit('setStartDate', this.dateInput);
                this.$store.commit('setGraphMode', this.graphMode);
                this.$store.commit('setOutPutVisible', true); // makes the output area visible
                this.$store.commit('setEndDate', this.endDateInput);

            }else{
                alert("Koordinaadid lubatud vahemikest väljas!");
            }
        },
        // when the user clicks the button "Puhasta"
        clearForm: function(){
            this.latitudeInput = null;
            this.longitudeInput = null;
            this.dateInput = null;
            this.endDateInput = null;
            this.$store.commit('setOutPutVisible', false);
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
    watch:{
        // update the input fields if the coordinates change
        // for example, if the user clicked on the map
        latitude: function(){
            this.latitudeInput = this.$store.getters.getLatitude;
        },
        longitude: function(){
            this.longitudeInput = this.$store.getters.getLongitude;
        }
    }
    
}
</script>

<style scoped>

#mainContainer{
    width: 40%;
    border: 2px solid;
    padding: 10px;
}
#clearButton,#submitButton{
    margin-top: 10px;
    width: 80px;
    height: 30px;
}

</style>