// Generated by CoffeeScript 1.6.3
(function() {
  QUnit.begin(function() {
    test('get rss from url', function() {
      var url;
      url = Reader.get_rss('techcrunch.com');
      return ok(1, 'Rss retriving result:' + url);
    });
    test('get feeds', function() {
      var url;
      url = Reader.get_rss('techcrunch.com');
      return Reader.get_feeds(url, function(data) {
        if (data) {
          return ok(1, 'feed content length: ' + data.length);
        } else {
          return ok(0, 'get feeds failed');
        }
      });
    });
    test('get icon', function() {
      return Reader.get_icon('http://techcrunch.com', function(icon) {
        if (icon) {
          return ok(1, 'icon retrived :' + icon);
        } else {
          return ok(0, 'icon retrive failed');
        }
      });
    });
    return test('get first image', function() {
      return ok(1, 'wait for test');
    });
  });

}).call(this);
