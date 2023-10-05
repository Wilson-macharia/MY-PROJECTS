let map;

async function initMap() {
    const { Map } = await google.maps.importLibrary("maps");

    map = new Map(document.getElementById("map"), {
        center: { lat: 0.4832, lng: 37.1274 },
        zoom: 8,
    });
    new google.maps.Marker({
        position: { lat: 0.4832, lng: 37.1274 },
        map: map,
    })
}

initMap();





document.querySelector(".contact-in-btn").onclick = function() {
    const userInput = document.querySelector(".contact-in-input");
    alert("Tankyou, " + userInput.value + " for messaging Nordvtech.");

}