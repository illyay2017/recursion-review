// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {

  var results =[];

  var search = function(node){

    if(node.classList !== undefined && node.classList.length > 0){
      var list = Array.prototype.slice.apply(node.classList);
      if(list.includes(className)){
        results.push(node);        
      }
    }

    for(var i = 0; i < node.childNodes.length; i ++){
      search(node.childNodes[i]);
    }
  } 

  search(document.body);
  return results;
};
