// Single View
// Contains all UI logic related to a single model on a single page.
App.View.SingleView = Backbone.View.extend({

    events: {
        'click .edit':   'edit',
        'click .delete': 'destroy'
    },

    edit: function() {},

    save: function () {
        console.log("saved...");
    },

    initialize: function () {
        this.model.on("invalid", this.showError, this);
        this.model.on("change",  this.render, this);
        this.model.on("destroy", this.remove, this);
    },

    destroy: function () {
        this.model.destroy();
    },

    render: function () {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    },

    show: function(id) {
        console.log("must show me ingredient " + id);
    },

    showError: function (model, error) {
        App.event.trigger("app:error", App.Alert.error({message: error}));
    },

    // Remove model when view has received confirmation event.
    remove: function () {
        this.$el.remove();
    }

});