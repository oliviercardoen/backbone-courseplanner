App.Base.View.CourseFormView = Backbone.View.extend({

    el: "#course-form",

    events: {
        'submit': 'submit'
    },

    initialize: function () {
        this.$name               = this.$("#course-name");
        this.$code               = this.$("#course-code");
        this.$start_date         = this.$("#course-start_date");
        this.$end_date           = this.$("#course-end_date");
        this.$reference_document = this.$("#course-reference_document");
    },

    submit: function (e) {
        e.preventDefault();
        this.collection.create({
            name:               this.$name.val(),
            start_date:         this.$start_date.val(),
            end_date:           this.$end_date.val(),
            reference_document: this.$reference_document.val(),
            curriculums:        {},
            code:               this.$code.val(),
            lesson_number:      10
        });
        this.$name.val("");
        this.$code.val("");
        this.$start_date.val("");
        this.$end_date.val("");
        this.$reference_document.val("");
        $('#myModal').modal('hide');
    }

});