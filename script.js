const image = document.querySelector('.image');
const labelText = document.querySelector('.label-text');
const accuracyText = document.querySelector('.accuracy-text');
const predictBtn = document.querySelector('.predict-btn');
const uploadBtn = document.querySelector('.upload-btn');

const model = ml5.imageClassifier("MobileNet", modelLoaded)

function modelLoaded() {
    console.log("Model loaded.");
    predictBtn.disabled = false;
    predictBtn.addEventListener('click', predict);
}

function predict() {
    model.classify(image, function (error, results) {
        if (error) {
            console.log(`Error: ${error}`)
        } else {
            const label = results[0].label.toUpperCase();
            const accuracy = (results[0].confidence * 100).toFixed(2);
            console.log(accuracy)
            labelText.innerText = label;
            accuracyText.innerText = `Accuracy: ${accuracy}%`;
        }
    });
}

uploadBtn.addEventListener('change', function(event) {
    if (event.target.files[0]) {
        const objectURL = URL.createObjectURL(event.target.files[0]);
        image.src = objectURL;
    }
})