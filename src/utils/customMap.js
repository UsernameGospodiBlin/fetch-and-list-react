// Реализация customMap
function customMap(array, callback) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
      result.push(callback(array[i], i, array));
    }
    return result;
  }
  
  // Замена стандартной функции map
  Array.prototype.map = function(callback) {
    return customMap(this, callback);
  };
  