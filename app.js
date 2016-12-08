$(document).ready(function() {

  $('.box').on('click', function() {
      $(this).addClass('white');
    })

$('.box').on('dblclick', function() {
  $(this).removeClass('white');
})
$('#reset').on('click', function() {
  $('.box').removeClass('white')
})
$('#red').on('click', function() {
  color = 'red';
})
// $('#red').hover('handlerIn', function() {
//   color = 'red';
// })
$('#blue').on('click', function () {
  color = 'blue';
})
$('#green').on('click', function () {
  color = 'green';
})
$('#yellow').on('click', function () {
  color = 'yellow';
})
$('#white').on('click', function() {
  color = 'white';
})
$('#purple').on('click', function(){
  color = 'purple';
})
$('#pink').on('click', function(){
    color = 'pink';
  })
$('#gold').on('click', function(){
      color = 'gold';
    })
$('#silver').on('click', function(){
        color = 'silver';
})
$('#black').on('click', function(){
        color = 'black';
})
$('.box').hover('', function() {
  $(this).addClass(color);
})
var color = 'white green red blue yellow purple pink gold silver black'

$('.box').on('dblclick', function() {
  $(this).removeClass(color);
})
$('#reset').on('click', function() {
  $('.box').removeClass(color)
})
})
