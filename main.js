var Moment = Backbone.Model.extend({});
var moment = new Moment({
    thing: "try backbone",
    time: "2014/07/22",
    where: "detroit",
    id: 1
});

var MomentView = Backbone.View.extend({
    render: function() {
        var html = '<h3>' + this.model.get('thing') + '</h3>';
        $(this.el).html(html);

    }
});
var momentView = new MomentView({
    model: moment
});

momentView.render();

$(function() {
    $("#app").append(momentView.el);
})