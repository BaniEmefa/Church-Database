document.addEventListener("DOMContentLoaded", function() {
    const genderCtx = document.getElementById("genderChart").getContext("2d");
    const placeOfWorshipCtx = document.getElementById("placeOfWorshipChart").getContext("2d");
    const dayBornsCtx = document.getElementById("dayBornsChart").getContext("2d");
    const societiesCtx = document.getElementById("societiesChart").getContext("2d");

    new Chart(genderCtx, {
        type: 'doughnut',
        data: {
            labels: ['Male', 'Female'],
            datasets: [{
                data: [66, 34],
                backgroundColor: ['#36A2EB', '#FF6384']
            }]
        }
    });

    new Chart(placeOfWorshipCtx, {
        type: 'doughnut',
        data: {
            labels: ['St. Francis', 'Nanakrom'],
            datasets: [{
                data: [60, 40],
                backgroundColor: ['#FFCE56', '#FF6384']
            }]
        }
    });

    new Chart(dayBornsCtx, {
        type: 'bar',
        data: {
            labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            datasets: [{
                label: 'Birth Count',
                data: [12, 19, 3, 5, 2, 3, 7],
                backgroundColor: '#36A2EB'
            }]
        }
    });

    new Chart(societiesCtx, {
        type: 'bar',
        data: {
            labels: ['Society A', 'Society B', 'Society C', 'Society D', 'Society E'],
            datasets: [{
                label: 'Membership Count',
                data: [10, 15, 7, 20, 13],
                backgroundColor: '#FF6384'
            }]
        }
    });
});
