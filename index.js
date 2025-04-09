    function runSpeechRecognition() {
        var output = document.getElementById("output");
        var action = document.getElementById("action");

        // Check if browser supports SpeechRecognition
        var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (SpeechRecognition) {
            var recognition = new SpeechRecognition();

            // Log recognition object (for debugging)
            console.log(recognition);

            // Start event
            recognition.onstart = function () {
                action.innerHTML = "<small>Listening, please speak...</small>";
            };

            // End event
            recognition.onspeechend = function () {
                action.innerHTML = "<small>Stopped listening. Hope you're done speaking!</small>";
                recognition.stop();
            };

            // Result event
            recognition.onresult = function (event) {
                var transcript = event.results[0][0].transcript;
                var confidence = event.results[0][0].confidence;

                console.log("Transcript:", transcript);
                console.log("Confidence:", confidence);

                output.innerHTML = `<b>Text:</b> ${transcript}<br><b>Confidence:</b> ${confidence}`;
            };

            // Start recognition
            recognition.start();
        } else {
            action.innerHTML = "Speech recognition is not supported in this browser.";
        }
    }
