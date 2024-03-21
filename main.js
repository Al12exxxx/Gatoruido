function startClassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/Pqd3KcwuP/model.json', modelReady);
}

function modelReady(){
  classifier.classify( gotResults);
}

function gotResults(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;

    document.getElementById("result_label").innerHTML = 'Escucho - '+ results[0].label;
    document.getElementById("result_confidence").innerHTML = 'Precisión - '+ (results[0].confidence*100).toFixed(2)+" %";
    document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
    document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";

    img = document.getElementById('gato-1') 
    img1 = document.getElementById('gato-2')
    img2 = document.getElementById('gato-3')
    img3 = document.getElementById('gato-4')

    if (results[0].label == "Sillonasos") {
      img.src = 'gato 1.gif';
      img1.src = 'Gato 2.png';
      img2.src = 'Gato 3.png';
      img3.src = 'Gato 4.png';
    } else if (results[0].label == "Papel") {
      img.src = 'Gato 1.png';
      img1.src = 'gato 2.gif';
      img2.src = 'Gato 3.png';
      img3.src = 'Gato 4.png';
    } else if (results[0].label == "Aplausos") {
      img.src = 'Gato 1.png';
      img1.src = 'Gato 2.png';
      img2.src = 'gato 3.gif';
      img3.src = 'Gato 4.png';
    }else{
      img.src = 'Gato 1.png';
      img1.src = 'Gato 2.png';
      img2.src = 'Gato 3.png';
      img3.src = 'gato 4.gif';
    }
  }
}


