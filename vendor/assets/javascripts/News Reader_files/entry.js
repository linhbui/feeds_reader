NewsReader.Models.Entry = Backbone.Model.extend({
    urlRoot: "/api/entries",
    
    description: function(){
        return this._description;
    },
    parse: function(JSONresp){
        var jsonText = JSONresp.json;
        var json = JSON.parse(jsonText);
        this._description = json.description
        
        return JSONresp
    }
})
;
