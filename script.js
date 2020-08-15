const image = document.querySelector('.image');
const labelText = document.querySelector('.label-text');
const accuracyText = document.querySelector('.accuracy-text');
const predictBtn = document.querySelector('.predict-btn');

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
            labelText.innerText = label;
            accuracyText.innerText = `Accuracy: ${accuracy}%`;
        }
    });
}