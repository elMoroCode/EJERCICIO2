var Alert = new CustomAlert();

function CustomAlert(){
  this.render = function(){
      
      let popUpBox = document.getElementById('popUpBox');
      popUpBox.style.display = "block";
      
      document.getElementById('closeModal').innerHTML = '<button onclick="Alert.ok()">OK</button>';
  }
  
this.ok = function(){
  document.getElementById('popUpBox').style.display = "none";
  document.getElementById('popUpOverlay').style.display = "none";
}
}