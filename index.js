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
  var lis=document.getElementById("grand-node").querySelectorAll("div");
  var output;
  for(let i=0;i<lis.length-1;i++) {
    output=lis[i].querySelector("div");
  }
return output;
}

