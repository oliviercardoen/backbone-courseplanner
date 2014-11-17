// Course Collection
// Contains all logic for handling a defined set of database entities.
// Abstract the "/courses/" route.
App.Collection.CourseCollection = Backbone.Collection.extend({
    model: App.Model.Course,
    url:   "http://sites/php/courseplanner-api/courses"
});