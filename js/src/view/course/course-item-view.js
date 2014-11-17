// Course Item View
// Contains all UI logic related to a single course.
App.View.CourseItemView = App.View.ItemView.extend({
    tagName:   "tr",
    className: "collection-item course-item",
    template:  App.Template.compile("course-item-tpl")
});