App.View.FormView = Backbone.View.extend({

    events: {
        "submit": "submit"
    },

    formData: function() {},

    redirect: function() {},

    render: function () {
        if (typeof this.model !== "undefined") {
            this.$el.html(this.template(this.model.toJSON()));
        } else {
            this.$el.html(this.template());
        }
        return this;
    },

    submit: function (e) {
        e.preventDefault();
        console.log(this.formData());
        if (typeof this.model === "undefined") {
            this.collection.create(this.formData(), { wait: true });
        } else {
            this.collection.get(this.model.get("id")).save(this.formData());
        }
        this.redirect();
    }

});