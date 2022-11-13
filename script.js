(function () {
  var count1 = 0;
  var count2 = 0;
  var count3 = 0;
  var count4 = 0;
  var count5 = 0;
  var count6 = 0;
  var count7 = 0;
  var count8 = 0;

  $('#p1').on('click',function () {
    count1 += 1;
    
    $('#sp1').html(count1);
  });
  $('#p6').on('click',function () {
    count2 += 1;
    
    $('#sp6').html(count2);
  });
  $('#p7').on('click',function () {
    count3 += 1;
    
    $('#sp7').html(count3);
  });
  $('#p8').on('click',function () {
    count4 += 1;
    
    $('#sp8').html(count4);
  });
  $('#p2').on('click',function () {
    count5 += 1;
    
    $('#sp2').html(count5);
  });
  $('#p3').on('click',function () {
    count6 += 1;
    
    $('#sp3').html(count6);
  });
  $('#p4').on('click',function () {
    count7 += 1;
    
    $('#sp4').html(count7);
  });
  $('#p5').on('click',function () {
    count8 += 1;
    
    $('#sp5').html(count8);
  });

  
  
  
  
  $('#bt1').on('click',function () {
    count1 = -1;
    
    $('#sp1').html(count1);
  });
  $('#bt2').on('click',function () {
    count5 = -1;
    
    $('#sp2').html(count5);
  });
  $('#bt3').on('click',function () {
    count6 = -1;
    
    $('#sp3').html(count6);
  });
  $('#bt4').on('click',function () {
    count7 = -1;
    
    $('#sp4').html(count7);
  });
  $('#bt5').on('click',function () {
    count8 = -1;   
    $('#sp5').html(count8);
  });
  $('#bt6').on('click',function () {
    count2 = -1;
    
    $('#sp6').html(count2);
  });
  $('#bt7').on('click',function () {
    count3 = -1;
    
    $('#sp7').html(count3);
  });
  $('#bt8').on('click',function () {
    count4 = -1;
    
    $('#sp8').html(count4);
  });
})();