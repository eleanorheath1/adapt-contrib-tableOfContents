define([
  'core/js/adapt',
  './TableOfContentsView'
], function(Adapt, TableOfContentsView) {

  var TableOfContents = Backbone.Controller.extend({

    initialize: function() {
      Adapt.on({
        'app:dataReady': this.onDataReady.bind(this)
      });
    },

    onDataReady: function() {
      var courseTOCConfig = this.getCourseConfig();
      if (!courseTOCConfig || !courseTOCConfig._isEnabled) {
        return;
      }
      this.setUpEventListeners();
    },

    getCourseConfig: function() {
      return Adapt.course.get('_tableOfContents');
    },

    setUpEventListeners: function() {
      var headerIndicatorTypes = [
        'menu',
        'page',
        'article',
        'block'
      ];

      var headerIndicatorEventNames = headerIndicatorTypes
        .concat(['']).join('View:render ');

      this.listenTo(Adapt, headerIndicatorEventNames, this.renderTableOfContentsView);
    },

    renderTableOfContentsView: function(view) {
      var $courseContent = view.$el;
      if($courseContent.hasClass('course')) {
        var model = view.model;
        var tableOfContentsView = new TableOfContentsView({
          model: model
        });
        $courseContent.prepend(tableOfContentsView.$el);
      }
    },

  });

  Adapt.tableOfContents = new TableOfContents();

});
