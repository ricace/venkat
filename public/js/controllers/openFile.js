var openFile = function(event) {
    var input = event.target;

    var reader = new FileReader();
    reader.onload = function(){
      var text = reader.result;
      console.log(reader.result);
      var output=document.getElementById('output');
      output.innerHTML=reader.result;
    };
    reader.readAsText(input.files[0]);
    };
