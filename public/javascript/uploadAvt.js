function previewFile(){
    var preview = document.querySelector('#my-avatar'); //selects the query named img
    var file    = document.querySelector('#to-hide').files[0]; //sames as here
    var reader  = new FileReader();
  
    reader.onloadend = function () {
      preview.src = reader.result;
    }
  
    if (file) {
      reader.readAsDataURL(file); //reads the data as a URL
    } else {
      preview.src = "https://i.redd.it/62fgxocnur901.jpg";
    }
  }
  
    previewFile();  //calls the function named previewFile()
    