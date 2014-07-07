App.Base.View.CourseCollectionView = Backbone.View.extend({

    tagName:   "tbody",
    className: "course-collection",

    initialize: function () {
        this.collection.on("add", this.addItem, this);
    },

    addItem: function (course) {
        var itemView = new App.Base.View.CourseItemView({model: course});
        this.$el.append(itemView.render().el);
    },

    render: function () {
        this.collection.each(this.addItem, this);
        return this;
    }

});