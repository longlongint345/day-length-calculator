import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'

// https://github.com/vue-leaflet/Vue2Leaflet/issues/96
import L from 'leaflet';
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

const store = createStore({
    state:{
        // data from the input fields
        longitude: null,
        latitude: null,
        displayOutput: false,
        graphMode: false, // true, if the user has chosen to enter a date range and display a plot

        startDate: null,
        endDate: null, // for the plot
    },
    mutations:{
        updateLongitude: function(state, longitude){
            state.longitude = longitude;
        },
        updateLatitude: function(state, latitude){
            state.latitude = latitude;
        },
        setOutPutVisible: function(state, visibility){
            state.displayOutput = visibility;
        },
        setGraphMode: function(state, value){
            state.graphMode = value;
        },
        setStartDate: function(state, value){
            state.startDate = value;
        },
        setEndDate: function(state, value){
            state.endDate = value;
        }
    },
    getters:{
        getLatitude: function(state){
            return state.latitude;
        },
        getLongitude: function(state){
            return state.longitude;
        },
        getDisplayOutput: function(state){
            return state.displayOutput;
        },
        getGraphMode: function(state){
            return state.graphMode;
        },
        getStartDate: function(state){
            return state.startDate;
        },
        getEndDate: function(state){
            return state.endDate;
        }
    }
});
const app = createApp(App);
app.use(store);
app.mount('#app')
