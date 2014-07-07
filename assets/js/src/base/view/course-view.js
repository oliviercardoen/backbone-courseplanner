// Course View
// Contains all UI logic related to a single course on a single page.
App.Base.View.CourseView = Backbone.View.extend({

    className: "course",

    initialize: function () {
        this.model.on("invalid", this.showError, this);
        this.model.on("change",  this.render, this);
        this.model.on("destroy", this.remove, this);
    },

    template: App.Template.compile("course-block-show"),

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
        App.ViewManager.$primary.prepend(App.Alert.error({message: error}));
    },

    // Remove model when view has received confirmation event.
    remove: function () {
        this.$el.remove();
    }

});