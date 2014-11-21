NewsReader.Models.Entry = Backbone.Model.extend({
    urlRoot: "/api/entries",
    
    description: function(){
        return this._description;
    },
    link: function(){
        return this._link;
    },
    date: function(){
        if(!!this._date){
            return new Date(this._date);
        } else {
            return this._date
        }
    },
    parse: function(JSONresp){
        var jsonText = JSONresp.json;
        var json = JSON.parse(jsonText);
        this._description = json.description;
        this._link = json.link;
        this._date = json.pubDate;
        
        delete JSONresp.json
        return JSONresp;
    }
})