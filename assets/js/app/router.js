App.Router = Backbone.Router.extend({

    routes: {
        "":            "showAllCourses",
        "index":       "showAllCourses",
        "courses":     "showAllCourses",
        "courses/:id": "showCourse",
        "curriculums": "showAllCurriculums",
        "*other":      "show404"
    },

    index: function () {
        console.log("index page...");
    },

    showAllCourses: function () {
        App.Event.router.trigger('course:showAll');
    },

    showCourse: function (courseId) {
        App.Event.router.trigger('course:show', courseId);
    },

    showAllCurriculums: function () {
        console.log("curriculums page...");
    },

    show404: function () {
        console.log("404 page...");
    }

});
