$(document).ready(function() {

    var config = {
        apiKey: "AIzaSyDAa0-9MEDQJ0Jr1BVu6m_r0mgw2FV84Y4",
        authDomain: "train-schedule-92d98.firebaseapp.com",
        databaseURL: "https://train-schedule-92d98.firebaseio.com",
        projectId: "train-schedule-92d98",
        storageBucket: "",
        messagingSenderId: "570898962232"
    };
    firebase.initializeApp(config);

    var database = firebase.database();


    // add train button
    $("addTrainButton").on("click", function() {

        var trainName = $("#trainNameInput").val().trim();
        var destination = $("#destinationInput").val().trim();
        var firstTime = $("#timeInput").val().trim();
        var frequency = $("#frequencyInput").val().trim();

        console.log(trainName);
        console.log(destination);
        console.log(firstTime);
        console.log(frequency);




        // push into firebase
        var newTrain = {
            name: trainName,
            destination: destination,
            trainTime: firstTime,
            frequency: frequency,
        };

        database.push(newTrain);



    });


});