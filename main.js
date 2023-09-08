
      
 

function take_snapshot()
{


      
}

  console.log('ml5 version:', ml5.version);
  classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/VK6X7UYHV/model.json',modelLoaded);

  // When the model is loaded
  function modelLoaded() {
    console.log('Model Loaded!');
  }
      
  function check()
  {



        
  }


// A function to run when we get any errors and the results
function gotResult(error, results) {


}
