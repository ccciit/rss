// Generated by CoffeeScript 1.6.3
test('get rss from url', function() {
  var url;
  url = Reader.get_rss('techcrunch.com');
  return ok(1, 'Rss retriving result:' + url);
});

test('get feeds', function() {
  var url;
  url = Reader.get_rss('techcrunch.com');
  return Reader.get_feeds(url, function(data) {});
});

test('get icon', function() {
  return Reader.get_icon('http://techcrunch.com', function(icon) {});
});

test('get first image', function() {});
