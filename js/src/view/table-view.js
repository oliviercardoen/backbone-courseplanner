// Table View
// Contains all logic for displaying a table and table header.
// Table body will be appended into view.$el.
App.View.TableView = Backbone.View.extend({

    thead:     "",
    tagName:   "table",
    className: "table",

    header: function (arr) {
        var header = arr;
        _.each(arr, this.cell, this);
    },

    cell: function (text) {
        this.thead += "<th>" + text + "</th>";
    },

    render: function() {
        this.$el.append("<thead><tr>" + this.thead + "</tr></thead>");
        return this;
    }

});
