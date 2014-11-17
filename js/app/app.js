var App = App || {};

// Namespace objects and variables.
(function($){

    App = {

        event: _.extend({}, Backbone.Events),

        Model: {},
        Collection: {},
        View: {},
        Message: {
            Error: {
                empty: function (field) {
                    return String("%field% can not be left empty.").replace("%field%", field);
                },
                negative: function (field) {
                    return String("Value of %field% can not be negative integer/float.").replace("%field%", field);
                }
            }
        },
        Alert: {
            error:   _.template("<div class=\"alert alert-danger\"><%= message %></div>"),
            success: _.template("<div class=\"alert alert-success\"><%= message %></div>")
        },
        Template: {
            compile: function (id) {
                return _.template($("#" + id).html());
            }
        }

    };

})(jQuery);