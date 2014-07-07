App.Base.View.CourseCollectionView = Backbone.View.extend({

    tagName:   "tbody",
    className: "course-collection",

    initialize: function () {
        this.collection.on("add", this.addItem, this);

        // Listen for custom events.
        App.Event.router.on('course:show',    this.show, this);
        App.Event.router.on('course:showAll', this.showAll, this);
    },

    addItem: function (course) {
        var itemView = new App.Base.View.CourseItemView({model: course});
        this.$el.append(itemView.render().el);
    },

    render: function () {
        //this.collection.empty();
        this.collection.each(this.addItem, this);
        return this;
    },

    show: function (id) {
        if ( 0 < id ) {
            var itemView = new App.Base.View.CourseView({
                model: this.collection.get(id)
            });
            App.ViewManager.$primary.html(itemView.render().el);
        }
    },

    showAll: function () {
        var block = App.Template.compile("course-block-index");
        App.ViewManager.$primary.html(block({title: "<h2 class=\"mb-medium mt-none\">Mes cours</h2>"}));
        App.ViewManager.$primary.find("#course-table").append(this.render().el);
    }

});