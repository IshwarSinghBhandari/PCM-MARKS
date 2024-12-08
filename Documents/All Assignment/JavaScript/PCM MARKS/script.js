

window.addEventListener('keyup', function(){
    let P =Number(document.querySelector('#Phy').value);

    let C =Number(document.querySelector('#Che').value);
    
    let M =Number(document.querySelector('#Mat').value);
   
    let Total=P+C+M;
    let Percentage= ((Total/300)*100).toFixed(2);
    document.querySelector('#total').innerHTML=`Total Marks : ${Total}/300`;
    document.querySelector('#Percentage').innerHTML=`Percentage : ${Percentage}%`;
});



  function enforceMinMax(input) {
    const min = parseInt(input.min, 10);
    const max = parseInt(input.max, 10);

    if (input.value < min) {
      input.value = min;
    }

    if (input.value > max) {
      input.value = max;
    }
  }

