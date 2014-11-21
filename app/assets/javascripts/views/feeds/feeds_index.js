NewsReader.Views.FeedsIndex = Backbone.CompositeView.extend({
    template: JST['feeds/index'],
    
    events: {
        "click button.delete-feed": "deleteFeed"
    },
    
    deleteFeed: function(event){
        event.preventDefault();
        var $button = $(event.currentTarget);
        var feedId = $button.data("id");
        var feed = this.collection.get(feedId);
        feed.destroy();
    },
    
    initialize: function () {
        this.listenTo(this.collection, "add", this.addView);
        this.listenTo(this.collection, "sync", this.render);
        this.listenTo(this.collection, "remove", this.removeView);
        
        this.collection.each(function(feed){
            this.addView(feed)
        }.bind(this))
    },
    
    addView: function(model){
        var feedItemView = new NewsReader.Views.FeedItem({
            model: model
        })
        this.addSubview("ul.feed-items", feedItemView)
    },
    
    removeView: function(model){
        var subview = _.find(this.subviews("ul.feed-items"), function(subview){
            if(subview.model.id === model.id){
                return true;
            }
        })
        this.removeSubview("ul.feed-items", subview);
    },

    
    render: function () {
        var content = this.template();
        this.$el.html(content);
        this.attachSubviews();
        return this;
    },
    

});
