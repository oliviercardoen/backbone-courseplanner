// Item View
// Contains all UI logic related to an item into a table or a list.
App.View.ItemView = Backbone.View.extend({

    tagName:   "tr",

    events: {
        'click .delete': 'destroy'
    },

    initialize: function () {
        this.model.on("invalid", this.showError, this);
        this.model.on("change", this.render, this);

        // Listen for deletion confirmation event into model (i.e. from database).
        this.model.on("destroy", this.remove, this);
    },

    save: function () {
        console.log("saved...");
    },

    edit: function () {
        var title = prompt("Ingredient name:")
        this.model.set({"name": title}, {validate: true});
        this.model.save();
    },

    destroy: function () {
        this.model.destroy();
    },

    render: function () {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    },

    showError: function (model, error) {
        App.event.trigger("error:show", error);
    }

});
