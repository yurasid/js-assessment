exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    return arr.indexOf(item);
  },

  sum : function(arr) {
    return arr.reduce(function(sum, elem) {
      return sum + elem;
    });
  },

  remove : function(arr, item) {
    return arr.filter(function(e) {
      return e !== item;
    });
  },

  removeWithoutCopy : function(arr, item) {
    var index = arr.indexOf(item);
    while ( index > 0 ) {
      if (index > 0) arr.splice(index, 1);
      index = arr.indexOf(item);
    }
    return arr;
  },

  append : function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate : function(arr) {
    arr.pop();
    return arr;
  },

  prepend : function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail : function(arr) {
    arr.shift();
    return arr;
  },

  concat : function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert : function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count : function(arr, item) {
    return arr.reduce(function(acc, elem) {
      return elem === item ? ++acc : acc;
    }, 0);
  },

  duplicates : function(arr) {
    arr.sort();
    return arr.reduce( function (acu, e, i) {
      if ( arr.indexOf(e, i+1) !== -1 && acu.indexOf(e) === -1 ) {
        acu.push(e);
      }
      return acu;
    }, [] );
  },

  square : function(arr) {
    return arr.map( function (e) {
      return e*e;
    } );
  },

  findAllOccurrences : function(arr, target) {
    return arr.reduce( function (acu, e, i) {
      if ( e === target ) acu.push(i);
      return acu;
    }, [] );
  }
};
