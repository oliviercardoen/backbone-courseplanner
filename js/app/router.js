var App = App || {};

(function($) {

    App.Router = Backbone.Router.extend({

        routes: {
            "":            "showIndex",
            "index":       "showIndex",
            "courses":     "showCourseCollection",
            "courses/:id": "showCourse",
            "curriculums": "showCurriculumCollection",
            "*other":       "show404"
        },

        showIndex: function () {
            App.event.trigger('app:index');
            console.log('app:index');
        },

        showCourseCollection: function () {
            App.event.trigger('course:showAll');
            console.log('course:showAll');
        },

        showCourse: function (id) {
            App.event.trigger('course:show', id);
            console.log('course:show ' + id);
        },

        showCurriculumCollection: function () {
            console.log('curriculum:showAll');
        },

        show404: function () {
            console.log('app:404');
        }

    });

})(jQuery);
