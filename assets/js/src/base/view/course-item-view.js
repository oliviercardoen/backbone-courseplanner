// Course Item View
// Contains all UI logic related to a single course.
App.Base.View.CourseItemView = Backbone.View.extend({

    tagName:   "tr",
    className: "course-item",

    initialize: function () {
        this.model.on("invalid", this.showError, this);
        this.model.on("change", this.render, this);

        // Listen for deletion confirmation event into model (i.e. from database).
        this.model.on("destroy", this.remove, this);
    },

    template: App.Template.compile("course-list-item"),

    events: {
        'click .edit':   'edit',
        'click .delete': 'destroy'
    },

    save: function () {
        console.log("saved...");
    },

    edit: function () {
        var title = prompt("Comment s'appelle le cours ?")
        this.model.set({"name": title}, {validate: true});
    },

    destroy: function () {
        this.model.destroy();
        alert(this.model.get("name") + " has been destroyed");
    },

    render: function () {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    },

    showError: function (model, error) {
        $("#primary").prepend(App.Alert.error({message: error}));
    },

    // Remove model when view has received confirmation event.
    remove: function () {
        this.$el.remove();
    }

});