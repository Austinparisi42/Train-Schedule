$(document).ready(function() {

    var config = {
        apiKey: "AIzaSyDAa0-9MEDQJ0Jr1BVu6m_r0mgw2FV84Y4",
        authDomain: "train-schedule-92d98.firebaseapp.com",
        databaseURL: "https://train-schedule-92d98.firebaseio.com",
        projectId: "train-schedule-92d98",
        storageBucket: "train-schedule-92d98.appspot.com",
        messagingSenderId: "570898962232"
    };
    firebase.initializeApp(config);

    var database = firebase.database();


    // add train button
    $("#addTrainButton").on("click", function(event) {
        event.preventDefault();

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
            frequency: frequency
        };

        database.ref().push(newTrain);

        // clear inputs 

        $("#trainNameInput").val("");
        $("#destinationInput").val("");
        $("#timeInput").val("");
        $("#frequencyInput").val("");


        //     // post to html
        $("#name").html(snapshot.val().name);
        $("#destination").html(snapshot.val().destination);
        $("#time").html(snapshot.val().trainTime);
        $("#frequency").html(snapshot.val().frequency);
    });
            // firebase snapshot stuff
    database.ref().on("child_added", function(childSnapshot) {

        console.log(childSnapshot.val());

        var firebaseName = childSnapshot.val().name;
        var firebaseDestination = childSnapshot.val().destination;
        var firebaseTrainTime = childSnapshot.val().trainTime;
        var firebaseFrequency = childSnapshot.val().frequency;

        // full list of items to the well
        $("#trainTable").append("<div class='well'><span id='name'> " + firebaseName +
            " </span><span id='destination'> " + firebaseDestination +
            " </span><span id='frequency'> " + firebaseFrequency +
            " </span><span id='next'> " + firebaseNext + " </span><span id='minutesAway'> " + firebaseAway + " </span></div>");

        // moment stuff

        }, function(errorObject) {
            console.log("Errors handled: " + errorObject.code);
        }
    );
});