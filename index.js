var Benchmark = require('benchmark');
var tb = require('travis-benchmark');
var _ = require('lodash');
var async = require('async');

var underscore = require('underscore');

var arrayFilter = require('array-filter');

async.timesSeries(
  15,
  function(t, next) {
    var count = Math.pow(2, t);
    var suite = new Benchmark.Suite(`${count} array.length`);
    
    function newArray() {
      return _.times(count, function(t) {
        var str = _.toString(t);
        return { number: str[str.length - 1] };
      });
    };

    (function() {
      var array = newArray();
      var option = function(value) { return value.number === 1 };
      suite.add('lodash@4.17.10 filter function', function() {
        _.filter(array, option);
      });
    })();

    (function() {
      var array = newArray();
      var option = { number: 1 };
      suite.add('lodash@4.17.10 filter matches', function() {
        _.filter(array, option);
      });
    })();

    (function() {
      var array = newArray();
      var option = ['number', 1];
      suite.add('lodash@4.17.10 filter matchesProperty', function() {
        _.filter(array, option);
      });
    })();

    (function() {
      var array = newArray();
      suite.add('filter for', function() {
        var results = [];
        for (var i = 0; i < array.length; i++) {
          if (array[i].number === 1) {
            results.push(array[i]);
          }
        }
      });
    })();

    (function() {
      var array = newArray();
      var option = function(value) { return value.number === 1 };
      suite.add('array-filter@1.0.0 filter function', function() {
        arrayFilter(array, option);
      });
    })();

    (function() {
      var array = newArray();
      var option = function(value) { return value.number === 1 };
      suite.add('underscore@1.9.1 filter function', function() {
        underscore.filter(array, option);
      });
    })();
    
    (function() {
      var array = newArray();
      var option = function(value) { return value.number === 1 };
      suite.add('filter function', function() {
        array.filter(option);
      });
    })();

    (function() {
      var array = newArray();
      var option = function(value) { return value.number; };
      suite.add('lodash@4.17.10 map function', function() {
        _.map(array, option);
      });
    })();

    (function() {
      var array = newArray();
      var option = 'number';
      suite.add('lodash@4.17.10 map property', function() {
        _.map(array, option);
      });
    })();

    (function() {
      var array = newArray();
      var option = function(value) { return value.number; };
      suite.add('map function', function() {
        array.map(option);
      });
    })();

    (function() {
      var array = newArray();
      suite.add('map for', function() {
        var results = [];
        for (var i = 0; i < array.length; i++) {
          results.push(array[i].number);
        }
      });
    })();

    (function() {
      var array = newArray();
      var option = function(value) { return value.number; };
      suite.add('underscore@1.9.1 map function', function() {
        underscore.map(array, option);
      });
    })();

    (function() {
      var array = newArray();
      var option = function(value) { return value.number === 1 };
      suite.add('lodash@4.17.10 find function', function() {
        _.find(array, option);
      });
    })();

    (function() {
      var array = newArray();
      var option = { number: 1 };
      suite.add('lodash@4.17.10 find matches', function() {
        _.find(array, option);
      });
    })();

    (function() {
      var array = newArray();
      var option = ['number', 1];
      suite.add('lodash@4.17.10 find matchesProperty', function() {
        _.find(array, option);
      });
    })();

    (function() {
      var array = newArray();
      var option = function(value) { return value.number === 1 };
      suite.add('find function', function() {
        array.find(option);
      });
    })();

    (function() {
      var array = newArray();
      suite.add('find for', function() {
        var founded;
        for (var i = 0; i < array.length; i++) {
          if (array[i].number === 1) {
            founded = array[i];
            break;
          }
        }
      });
    })();

    (function() {
      var array = newArray();
      var option = function(value) { return value.number === 1 };
      suite.add('underscore@1.9.1 find function', function() {
        underscore.find(array, option);
      });
    })();

    (function() {
      var array = newArray();
      var option = function(value) { return value.number === 1 };
      suite.add('lodash@4.17.10 remove function', function() {
        _.remove(array, option);
      });
    })();

    (function() {
      var array = newArray();
      var option = { number: 1 };
      suite.add('lodash@4.17.10 remove matches', function() {
        _.remove(array, option);
      });
    })();

    (function() {
      var array = newArray();
      var option = ['number', 1];
      suite.add('lodash@4.17.10 remove matchesProperty', function() {
        _.remove(array, option);
      });
    })();

    (function() {
      var array = newArray();
      suite.add('remove for', function() {
        for (var i = 0; i < array.length; i++) {
          if (array[i] === 2) {
            array.splice(i, 1);
            i--;
          }
        }
      });
    })();

    (function() {
      var array = newArray();
      var option = function(value) { return value.number; };
      suite.add('lodash@4.17.10 sortBy function', function() {
        _.sortBy(array, option);
      });
    })();

    (function() {
      var array = newArray();
      var option = ['number'];
      suite.add('lodash@4.17.10 sortBy array', function() {
        _.sortBy(array, option);
      });
    })();

    (function() {
      var array = newArray();
      var option = function(a,b) {
        if (a.number > b.number) return 1;
        if (a.number < b.number) return -1;
        return 0;
      };
      suite.add('sort function', function() {
        array.sort(option);
      });
    })();

    (function() {
      var array = newArray();
      var option1 = function(value) { return value.number === 1; };
      var option2 = function(value) { return value.number; };
      suite.add('lodash@4.17.10 filter+map', function() {
        _.map(_.filter(array, option1), option2);
      });
    })();

    (function() {
      var array = newArray();
      suite.add('filter+map for', function() {
        var results = [];
        for (var i = 0; i < array.length; i++) {
          if (array[i].number === 1) {
            results.push(array[i].number);
          }
        }
      });
    })();

    tb.wrapSuite(suite, () => next());
    suite.run({ async: true });
  }
);
