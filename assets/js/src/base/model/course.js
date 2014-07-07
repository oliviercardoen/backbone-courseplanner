// Course Model
// Contains all logic related to the course database entity.
// Abstract the "/courses/:id" route.
App.Base.Model.Course = Backbone.Model.extend({

    defaults: {
        name:               "",
        start_date:         "",
        end_date:           "",
        reference_document: "",
        curriculums:        {},
        code:               "",
        lesson_number:      0
    },

    validate: function (attrs) {
        var error = "";
        if (! _.str.trim(attrs.name)) {
            error += App.Message.Error.empty(_.str.capitalize("course name"));
        }
        /*if ("" === attrs.startDate) {
         error += App.Message.Error.empty(_.str.capitalize("course start date"));
         }
         if ("" === attrs.endDate) {
         error += App.Message.Error.empty(_.str.capitalize("course end date"));
         }
         if (0 > attrs.lessonNumber) {
         error += App.Message.Error.negative("course lesson number");
         }*/
        return error;
    }

});