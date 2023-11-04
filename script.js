function calc() {
    var type_flowers = document.getElementById("type_flowers");
    var count = document.getElementById("count").value;
    if(count==""){alert("Вы не указали количество");}
    else if(count<0){alert("Количество не может быть отрицательным");}
    else{
      var price = 0;
      price += parseInt(type_flowers.options[type_flowers.selectedIndex].value);
      price = parseInt(count) * price;
      document.getElementById('result').innerHTML = "Стоимость равна: "+ price +" р.";
    }
}

document.addEventListener("DOMContentLoaded", function(){
    but.addEventListener('click', calc);
});
