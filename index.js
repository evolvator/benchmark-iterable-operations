var Benchmark = require('benchmark');
var tb = require('travis-benchmark');
var _ = require('lodash');
var async = require('async');

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
      suite.add('lodash@4.17.10 filter function', function() {
        _.filter(array, function(value) { return value.number === 1 });
      });
    })();

    (function() {
      var array = newArray();
      suite.add('lodash@4.17.10 filter matches', function() {
        _.filter(array, { number: 1 });
      });
    })();

    (function() {
      var array = newArray();
      suite.add('lodash@4.17.10 filter matchesProperty', function() {
        _.filter(array, ['number', 1]);
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
      suite.add('lodash@4.17.10 map function', function() {
        _.map(array, function(value) { return value.number; });
      });
    })();

    (function() {
      var array = newArray();
      suite.add('lodash@4.17.10 map property', function() {
        _.map(array, 'number');
      });
    })();

    (function() {
      var array = newArray();
      suite.add('lodash@4.17.10 map property', function() {
        _.map(array, 'number');
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
      suite.add('lodash@4.17.10 find function', function() {
        _.find(array, function(value) { return value.number === 1 });
      });
    })();

    (function() {
      var array = newArray();
      suite.add('lodash@4.17.10 find matches', function() {
        _.find(array, { number: 1 });
      });
    })();

    (function() {
      var array = newArray();
      suite.add('lodash@4.17.10 find matchesProperty', function() {
        _.find(array, ['number', 1]);
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
      suite.add('lodash@4.17.10 remove function', function() {
        _.remove(array, function(value) { return value.number === 1 });
      });
    })();

    (function() {
      var array = newArray();
      suite.add('lodash@4.17.10 remove matches', function() {
        _.remove(array, { number: 1 });
      });
    })();

    (function() {
      var array = newArray();
      suite.add('lodash@4.17.10 remove matchesProperty', function() {
        _.remove(array, ['number', 1]);
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
      suite.add('lodash@4.17.10 sortBy function', function() {
        _.sortBy(array, function(value) { return value.number; });
      });
    })();

    (function() {
      var array = newArray();
      suite.add('lodash@4.17.10 sortBy array', function() {
        _.sortBy(array, ['number']);
      });
    })();

    (function() {
      var array = newArray();
      suite.add('sort', function() {
        array.sort(function(a,b) {
          if (a.number > b.number) return 1;
          if (a.number < b.number) return -1;
          return 0;
        });
      });
    })();

    (function() {
      var array = newArray();
      suite.add('lodash@4.17.10 filter+map', function() {
        _.map(_.filter(array, function(value) { return value.number === 1; }), function(value) { return value.number; });
      });
    })();

    (function() {
      var array = newArray();
      suite.add('filter+map', function() {
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
