NewsReader.Collections.Feeds = Backbone.Collection.extend({
    url: "/api/feeds",
    model: NewsReader.Models.Feed,
    
    getOrFetch: function (id) {
        var feed = this.get(id),
            feeds = this;
        if (feed) {
            feed.fetch();
        } else {
            feed = new NewsReader.Models.Feed({ id: id });
            feed.fetch({
                success: function () {
                    feeds.add(feed);
                },
                errors: function () {
                    alert("Feed doesn't exist... :( )");
                }
            });
        }
        return feed;
    }
      
});
