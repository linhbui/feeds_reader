NewsReader.Views.FeedItem = Backbone.View.extend({
    template: JST["feeds/feed_item"],
    
    render: function(){
        var renderedContent = this.template({
            feed: this.model
        })
        this.$el.html(renderedContent)
        
        return this;
    }
    
})