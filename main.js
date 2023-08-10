//https://teachablemachine.withgoogle.com/models/ttvlpdDcl/


function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    clssifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/ttvlpdDcl/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}