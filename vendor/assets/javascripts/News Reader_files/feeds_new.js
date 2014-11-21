NewsReader.Views.FeedNew = Backbone.View.extend({
    template: JST["feeds/new"],
    
    events: {
        "submit form": "createFeed"
    },
    
    initialize: function () {
        this.model = new NewsReader.Models.Feed();
    },
    
    render: function(errors){
        var renderedContent = this.template({
            feed: this.model,
            errors: errors
        })
        
        this.$el.html(renderedContent)
        
        return this;
    },
    
    createFeed: function(event){
        event.preventDefault();
        var attrs = $(event.currentTarget).serializeJSON();
        this.model.set(attrs);
        this.model.save({}, {
            success: function () {
                NewsReader.feeds.add(this.model);
                Backbone.history.navigate("", { trigger: true });
            }.bind(this)    
        });
        
    }
})
;
