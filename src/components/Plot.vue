<template>
    <div id="plotDiv" ref="plotDiv"></div>
</template>

<script>
import Plotly from 'plotly.js'
export default {

    props:{
        suriseSunset: Function,
        isLeapYear: Function,
        calcDoy: Function
    },

    computed:{
        startDate: function(){
            return this.$store.getters.getStartDate;
        },
        endDate: function(){
            return this.$store.getters.getEndDate;
        },
        latitude: function(){
            return this.$store.getters.getLatitude;
        },
        longitude: function(){
            return this.$store.getters.getLongitude;
        },
        startDoy: function(){
            return this.calcDoy(this.startDate);
        },
        endDoy: function(){
            return this.calcDoy(this.endDate);
        },
        startYear: function(){
            return Number(this.startDate.split("-")[0]);
        },
        endYear: function(){
            return Number(this.endDate.split("-")[0]);
        },
        // this property helps updating the map when data changes occur
        changeTracker: function(){
            return [this.startDate,this.endDate,this.longitude,this.latitude].join();
        }
    },

    methods:{
        // creates the plot
        initializePlot: function(){
            let datePieces = this.startDate.split("-");
            let date = new Date(datePieces[0], datePieces[1]-1, datePieces[2]);
            let dayLengths = []; // y-axis
            let xAxis = [];
            // calculates the x and y-axis
            for (let year = this.startYear; year <= this.endYear; year++){
                let limit;
                if (year === this.endYear) limit = this.endDoy;
                else if (this.isLeapYear(year)) limit = 366;
                else limit = 365;

                let start;
                if (year === this.startYear) start = this.startDoy;
                else start = 0;


                for (let doy = start; doy <= limit ; doy++){
                    let sun = this.suriseSunset(this.latitude, this.longitude, doy, 12);
                    let dayLength = sun[1] - sun[0];
                    dayLengths.push(dayLength/60);
                    xAxis.push(date.toISOString().substring(0,10));
                    date.setDate(date.getDate()+1);
                }
            }

            var trace = {
                x: xAxis,
                y: dayLengths,
                mode: 'lines'
            };

            var data = [trace];

            var layout = {
                xaxis:{
                    type: 'date'
                },
                title:'Päeva pikkuse muutus',
            };

            var config = {
                responsive: true,
                staticPlot: true
            }

            Plotly.newPlot('plotDiv', data, layout, config);
        }
    },


    mounted(){
        this.initializePlot();
    },
    watch:{
        // update the plot if data changes occur
        changeTracker: function(){
            this.initializePlot();
        }
    }
 
    
}
</script>

<style scoped>


</style>