App.View.CourseCollectionView = Backbone.View.extend({

    tagName:   "tbody",
    className: "course-collection",
    template:  App.Template.compile("course-collection-tpl"),

    initialize: function () {
        this.collection.on("add", this.addItem, this);
    },

    addItem: function (course) {
        var itemView = new App.View.CourseItemView({model: course});
        this.$el.append(itemView.render().el);
    },

    render: function () {
        this.$el.html(this.template());
        this.collection.each(this.addItem, this);
        return this;
    }

});