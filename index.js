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
 var node = document.getElementById('grand-node');
var nextNode = node.children[0];
while(nextNode){
  node = nextNode;
  node.children[0];
 }
 return node.children[0];
}

