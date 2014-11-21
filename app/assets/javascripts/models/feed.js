NewsReader.Models.Feed = Backbone.Model.extend({
    urlRoot: "/api/feeds",
    entries: function(){
        if (!this._entries){
            this._entries = new NewsReader.Collections.Entries([],{
                feed: this
            })
        }
        return this._entries
    },
    parse: function(JSONresp){
        if(JSONresp.latest_entries){
            this.entries().set(JSONresp.latest_entries, {parse: true})
        }
        
        //finished with entries4
        
        delete JSONresp.latest_entries
        return JSONresp
    }
});
