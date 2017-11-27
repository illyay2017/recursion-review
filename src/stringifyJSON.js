// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  // handle array
  // var result = [];
  var output = '';
  if (typeof obj === 'string') {
    output += obj;
  }

  if (Array.isArray(obj)){
    for (var i = 0; i < obj.length; i++){
      result.push(stringifyJSON(obj[i]));
    }
    return result;
  }
  
  return output;

  // handle obj

  // handle string   ''+'"xx"'  'xx'

  // use + method

};
