function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.getElementById('nested').querySelector('.target');
}

function increaseRankBy(n){
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li');
  var output;
  for(var i=0; i<lis.length; i++){
    output=lis[i].innerHTML =parseInt(lis[i].innerHTML)+n ;
  }
  return output;
}

function deepestChild(){
  const lis = document.getElementById('grand-node').querySelectorAll('div');
  for(var i=0; i<lis.length; i++){
  if(i===lis.lengh-1){
  console.log(lis[i].innerHTML);
  }
  }
}

