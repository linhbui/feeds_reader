NewsReader.Views.FeedShow = Backbone.View.extend({
    template: JST["feeds/show"],
    
    events: {
        "click button.refresh": "refreshFeed"
    },
    
    refreshFeed: function(event){
        event.preventDefault();
        this.model.fetch();
    },
    
    initialize: function () {
        this.listenTo(this.model, "sync", this.render);
    },
    
    render: function(){
        var renderedContent = this.template({
            feed: this.model,
            entries: this.model.entries()
        })
        this.$el.html(renderedContent);
        return this;
    }
})