function fetchTeams(){
    fetch('api/teams/all')
        .then(response => response.json())
        .then(data => {
            
        })
        .catch(error => {
            console.error('Error fetching teams', error);
        });
}