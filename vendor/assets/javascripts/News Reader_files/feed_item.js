(function() { this.JST || (this.JST = {}); this.JST["feeds/feed_item"] = function(obj){var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<li>\n    <a href="#/feeds/',  feed.id ,'">',  feed.escape("title") ,'</a>\n    <button class="delete-feed" data-id="',  feed.id ,'">Delete Feed</button>\n</li>\n');}return __p.join('');};
}).call(this);
