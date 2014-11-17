// Modal View
// Contains all logic for displaying a modal. Content
// will be appended into modal body.
App.View.ModalView = Backbone.View.extend({

    el:    "#modal",
    $body: this.$("#modal-body"),

    initialize: function(options) {
        if (typeof options.body !== "undefined" && options.body !== "") {
            this.$body.append(options.body);
        }
    },

    render: function() {
        return this;
    },

    show: function() {
        this.$el.modal();
    },

    hide: function() {
        this.$el.modal('hide');
    }

});
