// Initialize and add the map
function initMap() {
// The location of Uluru
const uluru = { lat: -25.344, lng: 131.036 };
// The map, centered at Uluru
const map = new google.maps.Map(document.getElementById("map"), {
zoom: 4,
center: uluru,
});
// The marker, positioned at Uluru
const marker = new google.maps.Marker({
position: uluru,
map: map,
});
}

// get my location 

// vue js 

var modelvue = new Vue ({
    el: '#modalv',
    data:{
        
        count_order_modal : 0,
        
    }
}) 
