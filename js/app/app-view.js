var App = App || {};

(function($) {

    App.View.AppView = Backbone.View.extend({

        el:        "#app",
        view:      {},
        $alert:    this.$("#alert"),
        $masthead: this.$("#masthead"),
        $primary:  this.$("#primary"),

        initialize: function () {
            // Create data source objects.
            this.courses = new App.Collection.CourseCollection();

            // Register router triggered events.
            App.event.on("app:index",     this.showIndexView,            this);

            App.event.on("course:show",    this.showCourseView,           this);
            App.event.on("course:showAll", this.showCourseCollectionView, this);
            App.event.on("course:add",     this.showCourseFormView,       this);
            App.event.on("course:edit",    this.showCourseFormView,       this);

            App.event.on("app:error",   this.showError,   this);
            App.event.on("app:success", this.showSuccess, this);
        },

        showIndexView: function () {
            this.$masthead.find("#title").text("Salut, User!");
            this.showTableView(this.courses, "CourseCollectionView", ["Code", ""]);
        },

        showCourseFormView: function(id) {
            this.showFormView(id, this.courses, "CourseFormView");
        },

        showCourseView: function (id) {
            this.showSingleView(id, this.courses, "CourseSingleView");
        },

        showCourseCollectionView: function () {
            this.$masthead.find("#title").text("Tous mes cours");
            this.showTableView(this.courses, "CourseCollectionView", ["Code", ""]);
        },

        showSingleView: function (id, collection, view) {
            if (0 < id) {
                collection.fetch();
                var single = collection.get(id);
                if (single !== undefined) {
                    var singleView = new App.View[view]({
                        model: single
                    });
                    this.showView(singleView);
                } else {
                    this.showError("The resquested model don't exist.");
                }
            } else {
                this.showError("The resquested model has no valid ID.");
            }
        },

        showFormView: function(id, collection, view) {
            var formView;
            if (typeof(id) === "undefined") {
                formView = new App.View[view]({
                    collection: collection
                });
            } else {
                formView = new App.View[view]({
                    model:      collection.get(id),
                    collection: collection
                });
            }
            this.showView(formView);
        },

        showCollectionView: function(collection, view) {
            var collectionView = new App.View[view]({
                collection: collection
            });
            collection.fetch();
            this.showView(collectionView);
        },

        showTableView: function(collection, view, labels) {
            // Create table and give table headers.
            var tableView = new App.View.TableView();
            tableView.header(labels);

            // Render and show table before appending data.
            this.showView(tableView);

            // Fetch collection data.
            var collectionView = new App.View[view]({
                collection: collection
            });
            collection.fetch();

            // Append collection data to table.
            tableView.$el.append(collectionView.render().el);
        },

        showView: function(view) {
            this.$alert.empty();
            if (! $.isEmptyObject(this.view)) {
                this.view.remove();
            }
            this.view = view;
            view.render();
            view.$el.hide();
            this.$primary.html(view.el);
            view.$el.fadeIn();
        },

        showError: function (text) {
            this.$alert.append(App.Alert.error({message: text}));
        },

        showSuccess: function (text) {
            this.$alert.append(App.Alert.success({message: text}));
        }

    });

})(jQuery);
