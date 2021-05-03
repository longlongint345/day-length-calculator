<template>

    <div id="mainContainer">

        <div id="dataContainer">
            <div id="startDateData">
                <p>Kuupäev: {{startDate}}</p>
                <p>Päikesetõus (UTC): {{timePrettyPrint(sunrise)}}</p>
                <p>Loojang (UTC): {{timePrettyPrint(sunset)}}</p>
                <p>Päeva pikkus: {{timePrettyPrint(lengthOfDay)}}</p>
            </div>
            <img src="../assets/sun.jpg">
            <div id="endDateData" v-if="graphMode">
                <p>Kuupäev: {{endDate}}</p>
                <p>Päikesetõus (UTC): {{timePrettyPrint(sunriseEndDate)}}</p>
                <p>Loojang (UTC): {{timePrettyPrint(sunsetEndDate)}}</p>
                <p>Päeva pikkus: {{timePrettyPrint(lengthOfDayEndDate)}}</p>
            </div>
        </div>

        <div id="plotContainer" v-if="graphMode">

            <Plot :suriseSunset="calcSunriseSunset" :isLeapYear="isLeapYear"
            :calcDoy="calcDayOfYear"/>

        </div>

    </div>
    
</template>

<script>
import Plot from './Plot';
export default {

    components:{
        Plot,
    },

    methods:{
        // calculates the UTC time (in minutes) of sunrise and sunset, based on day of year and location
        // source of the formula: https://www.esrl.noaa.gov/gmd/grad/solcalc/solareqns.PDF 
        calcSunriseSunset: function(latitude, longitude, day_of_year, hour){
            
            // for readability
            const pi = Math.PI;
            let sin = Math.sin;
            let cos = Math.cos;
            let tan = Math.tan;
            let acos = Math.acos;

            // fractional year
            let y = (2*pi/365)*(day_of_year-1+((hour-12)/24));
            // equation of time (in minutes)
            const eqtime = 229.18*(0.000075+0.001868*cos(y)-0.032077*sin(y)-0.014615*cos(2*y)-0.040849*sin(2*y))
            // solar declination
            const decl = 0.006918-0.399912*cos(y)+0.070257*sin(y)-0.006758*cos(2*y)+0.000907*sin(2*y)-0.002697*cos(3*y)+0.00148*sin(3*y)
        
            latitude = latitude * (pi/180) // to radians

            // hour angle
            const ha_sunrise = acos((cos(1.5853)/(cos(latitude)*cos(decl)))-(tan(latitude)*tan(decl))) * (180/pi)
            const ha_sunset = -ha_sunrise
        
            // UTC time of sunrise and sunset in minutes
            const sunrise = 720-4*(longitude+ha_sunrise)-eqtime
            const sunset = 720-4*(longitude+ha_sunset)-eqtime
            
            return [sunrise, sunset]
        },
        // converts the time in minutes to "hours:minutes"
        timePrettyPrint: function(value){
            if (isNaN(value)) return "polaarpäev/-öö"
            let hours = Math.floor(value/60);
            let minutes = Math.round((value/60 - hours) * 60);
            if (minutes < 10) minutes = "0" + minutes;
            if (hours < 0) hours = 24+hours; // for polar areas when the sun rises before "midnight"
            return hours + ":" + minutes;
        },
        // this method returns the sequence number of a day in a year
        // in [1-365] or [1-366] in case of a leap year
        calcDayOfYear: function(dateInput){
            let dateSegments = dateInput.split("-");
            let year = Number(dateSegments[0]);
            let month = Number(dateSegments[1]);
            let day = Number(dateSegments[2]);

            let daysInMonth = [31,28,31,30,31,30,31,31,30,31,30,31]
            if (this.isLeapYear(year)) daysInMonth[1] = 29;
            let sum = 0;
            for (let i = 0; i < month-1; i++){
                sum += daysInMonth[i];
            }
            sum += day;
            return sum;
        },
        // the method return true if a given year is a leap year, false otherwise
        isLeapYear: function(year){
            if ((year % 100) == 0) return (year % 400) == 0;
            else return (year % 4) == 0;

        }
        
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
        dayOfYear: function(){
            return this.calcDayOfYear(this.startDate);
        },
        dayOfYearEndDate: function(){
            return this.calcDayOfYear(this.endDate);
        },
        sunrise: function(){
            let sunrise = this.calcSunriseSunset(this.latitude, this.longitude, this.dayOfYear, 12)[0];
            return sunrise;
        },
        sunriseEndDate: function(){
            let sunrise = this.calcSunriseSunset(this.latitude, this.longitude, this.dayOfYearEndDate, 12)[0];
            return sunrise;
        },
        sunset: function(){
            return this.calcSunriseSunset(this.latitude, this.longitude, this.dayOfYear, 12)[1];
        },
        sunsetEndDate: function(){
            return this.calcSunriseSunset(this.latitude, this.longitude, this.dayOfYearEndDate, 12)[1];
        },
        lengthOfDay: function(){
            return this.sunset - this.sunrise;
        },
        lengthOfDayEndDate: function(){
            return this.sunsetEndDate - this.sunriseEndDate;
        },
        // true is the user has chosen the option to display a plot
        graphMode: function(){
            return this.$store.getters.getGraphMode;
        }
        
    }
    
}
</script>

<style scoped>

#mainContainer{
    width: 88%;
    /* border: 2px solid; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

#dataContainer{
    display: flex;
    justify-content: space-between;
}
img{
    height: 90px;
}
</style>