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
 var node = document.getElementById('grand-node').querySelector('');
var nextNode = node.firstChild;
while(nextNode){
  node = nextNode.innerHTML;
 return  node.firstChild.innerHTML;
 }
}

