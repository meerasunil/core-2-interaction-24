const fetchMoonPhaseData = () => {
    return fetch("https://moon-phase.p.rapidapi.com/basic", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "moon-phase.p.rapidapi.com",
            "x-rapidapi-key": "fb17a5b661mshd65f0506b9963c2p1e4e6djsn1174d5435dae"            
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log(data)
    })
    .catch(error => {
        console.error("Error fetching data:", error);
        
    });
};

fetchMoonPhaseData();
