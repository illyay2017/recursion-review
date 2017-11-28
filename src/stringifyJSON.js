// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  // handle array
  // var result = [];
  var output = '';
  if (typeof obj === 'string') {
    output += '"' + obj + '"';
    return output;
  }
  if (Array.isArray(obj) && obj.length >= 0) {
    output = [];
    for (var i = 0; i < obj.length; i++){
      output.push(stringifyJSON(obj[i]));
    }
    return '[' + output + ']'; 
  }

  if(obj === null) {
    return '' + null;
  }

  if (typeof obj === 'object') {
    if (Object.keys(obj).length === 0) {
    // if (obj.length === undefined) {
      return '{' + output + '}';
    }
    output = [];
    for (var key in obj) {
      if (typeof obj[key] === 'function' || typeof obj[key] === 'undefined'){
        return '{}';
      }
      // output[stringifyJSON(key)] = stringifyJSON(obj[key]);
      output.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
    
    }
    return '{' + output + '}';
  }

  
//   // return obj.toString();
  output = '' + obj;
  return output;
}
  
// var stringifiableObjects = [
//   9,
//   null,
//   true,
//   false,
//   'Hello world',
//   [],
//   [8],
//   ['hi'],
//   [8, 'hi'],
//   [1, 0, -1, -0.3, 0.3, 1343.32, 3345, 0.00011999999999999999],
//   [8, [[], 3, 4]],
//   [[[['foo']]]],
//   {},
//   {'a': 'apple'},
//   {'foo': true, 'bar': false, 'baz': null},
//   {'boolean, true': true, 'boolean, false': false, 'null': null },
//   // basic nesting
//   {'a': {'b': 'c'}},
//   {'a': ['b', 'c']},
//   [{'a': 'b'}, {'c': 'd'}],
//   {'a': [], 'c': {}, 'b': true}
// ];

// // used for stringifyJSON spec
// // hint: JSON does not allow you to stringify functions or
// // undefined values, so you should skip those key/value pairs.
// unstringifiableValues = [
//   {
//     'functions': function() {},
//     'undefined': undefined
//   }
// ];
// var input = {'a': 'apple'};
// console.log(stringifyJSON(input));
//   // return output;

//   // handle obj

//   // handle string   ''+'"xx"'  'xx'

//   // use + method

// };

// // context free grammar