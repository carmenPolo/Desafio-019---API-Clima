//ELEMENT
//** var element = document.getElementById('box');
//element.style.backgroundColor = 'green';

//CREANDO UN OBJETO CON MÉTODOS
var myBox = {
  element:document.getElementById('box'), //ELEMENT pasa a ser una PROPIEDAD DEL OBJETO que queda UNDEFINED si se llama en un scope mayor al del objeto)

  paintRed:function(){
    this.element.style.backgroundColor='red'},
  paintGold:function(){
    this.element.style.backgroundColor='gold'}
};
//llamando al MÉTODO
myBox.paintRed();
