function runSpeechRecognition() {
    var output = document.getElementById("output");
    var action = document.getElementById("action");
    var imageContainer = document.getElementById("imageContainer");

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
            action.innerHTML = "<small>Stopped listening. Processing...</small>";
            recognition.stop();
        };

        // Result event
        recognition.onresult = function (event) {
            var transcript = event.results[0][0].transcript.toLowerCase();
            var confidence = event.results[0][0].confidence;

            console.log("Transcript:", transcript);
            console.log("Confidence:", confidence);

            output.innerHTML = `<b>Text:</b> ${transcript}<br><b>Confidence:</b> ${confidence}`;
            displayImage(transcript); // Call displayImage function with recognized text
        };

        // Start recognition
        recognition.start();
    } else {
        action.innerHTML = "Speech recognition is not supported in this browser.";
    }
}

function displayImage(userInput) {
    const imageContainer = document.getElementById("imageContainer");

    imageContainer.innerHTML = ""; // Clear the container

    // Mapping keywords to image file paths
    const keywordToImage = {
        "hi.": "C:/png1english/hi.png",
        hi: "C:/png1english/hi.png",
        "hello.": "C:/png1english/hello.png",
        hello: "C:/png1english/hello.png",
        "bye.": "C:/png1english/bye.png",
        bye: "C:/png1english/bye.png", 
        stop: "C:/png1english/stop.png",
        "stop.": "C:/png1english/stop.png", 
        friends: "C:/png1english/friends.png",
        "friends.": "C:/png1english/friends.png",
        dad: "C:/png1english/dad.png",
        "dad.": "C:/png1english/dad.png",
        mom: "C:/png1english/mom.png",
        "mom.": "C:/png1english/mom.png",
        goodbye: "C:/png1english/goodbye.png",
        "goodbye.": "C:/png1english/goodbye.png",
        thankyou: "C:/png1english/thnkyou.png",
        "thankyou.": "C:/png1english/thankyou.png",
        share: "C:/png1english/share.png",
        "share.": "C:/png1english/share.png",
        water: "C:/png1english/water.png",
        "water.": "C:/png1english/water.png",
        youarewelcome: "C:/png1english/youarewelcome.png",
        "youarewelcome.": "C:/png1english/youarewelcome.png",              //"C:\png1english\stop.jpg"

        "fine.": "C:/png1english/fine.png",
        fine: "C:/png1english/fine.png",
        "a.": "C:/png1english/A.png",  
        a: "C:/png1english/A.png",    // Combined path for "a"
        "b.": "C:/png1english/B.png", // Combined path for "b"
        b: "C:/png1english/B.png",    // Combined path for "b"
        "c.": "C:/png1english/C.png",
        c: "C:/png1english/C.png",
        "d.": "C:/png1english/D.png",
        d: "C:/png1english/D.png",
        "e.": "C:/png1english/E.png",
        e: "C:/png1english/E.png",
        "f.": "C:/png1english/F.png",
        f: "C:/png1english/F.png",
        "g.": "C:/png1english/G.png",
        g: "C:/png1english/G.png",
        "h.": "C:/png1english/H.png",
        h: "C:/png1english/H.png",
        "i.": "C:/png1english/I.png",
        i: "C:/png1english/I.png",
        "j.": "C:/png1english/J.png",
        j: "C:/png1english/J.png",
        "k.": "C:/png1english/K.png",
        k: "C:/png1english/K.png",
        "l.": "C:/png1english/L.png",
        l: "C:/png1english/L.png",
        "m.": "C:/png1english/M.png",
        m: "C:/png1english/M.png",
        "n.": "C:/png1english/N.png",
        n: "C:/png1english/N.png",
        "o.": "C:/png1english/O.png",
        o: "C:/png1english/O.png",
        "p.": "C:/png1english/P.png",
        p: "C:/png1english/P.png",
        "q.": "C:/png1english/Q.png",
        q: "C:/png1english/Q.png",
        "r.": "C:/png1english/R.png",
        r: "C:/png1english/R.png",
        "s.": "C:/png1english/S.png",
        s: "C:/png1english/S.png",
        "t.": "C:/png1english/T.png",
        t: "C:/png1english/T.png",
        "u.": "C:/png1english/U.png",
        u: "C:/png1english/U.png",
        "v.": "C:/png1english/V.png",
        v: "C:/png1english/V.png",
        "w.": "C:/png1english/W.png",
        w: "C:/png1english/W.png",
        "x.": "C:/png1english/X.png",
        x: "C:/png1english/X.png",
        "y.": "C:/png1english/Y.png",
        y: "C:/png1english/Y.png",
        "z.": "C:/png1english/Z.png",
        z: "C:/png1english/Z.png",
        "1.": "C:/png1english/hi.png",
        "2.": "C:/png1english/hi.png",
        "3.": "C:/png1english/hi.png",
        "4.": "C:/png1english/hi.png",
        "5.": "C:/png1english/hi.png",
        "6.": "C:/png1english/hi.png",
        "7.": "C:/png1english/hi.png",
        "8.": "C:/png1english/hi.png",
        "9.": "C:/png1english/hi.png",
        "10.": "C:/png1english/hi.png",

        // Add other keywords as needed
    };

    if (keywordToImage[userInput]) {
        const img = document.createElement("img");
        img.src = keywordToImage[userInput]; // Set the image path dynamically
        img.alt = `${userInput} Image`;
        img.style.maxWidth = "200px"; // Optional: Limit the image size for better display
        img.style.height = "auto";

        imageContainer.appendChild(img);
    } else {
        imageContainer.innerHTML = "<p>No matching input....</p>";
    }
    for (let char of userInput) {
        if (keywordToImage[char]) {
            const img = document.createElement("img");
            img.src = keywordToImage[char]; // Set the image path dynamically
            img.alt = `${char} Image`;
            img.style.maxWidth = "200px"; // Optional: Limit the image size for better display
            img.style.height = "auto";
            img.style.margin = "10px";

            imageContainer.appendChild(img); // Append image to the container
        }
    }

    // If no valid alphabet is found
    if (imageContainer.innerHTML === "") {
        imageContainer.innerHTML = "<p>No matching input. Try saying combinations of alphabets (e.g., 'ab', 'abc').</p>";
    }
}
