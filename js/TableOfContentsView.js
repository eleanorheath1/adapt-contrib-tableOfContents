define([
  'core/js/adapt'
], function(Adapt) {

  var TableOfContentsView = Backbone.View.extend({

    events: {
      'click .tableOfContents-pages': 'scrollToPageElement', 
      'click .tableOfContents-articles' : 'navigateToArticleSection', 
      'click .tableOfContents-blocks' : 'navigateToBlockSection',
    },

    initialize: function(options) {
      this.listenTo(Adapt, 'remove', this.remove);
      this.options = options || {};
      this.type = options.type || this.model.get('_type');
      this.setTableOfContents();
      this.render();
    },

    scrollToPageElement: function(event) {
      this.preventDefault(event);

      var $target = $(event.currentTarget);
      if ($target.is('.is-disabled')) return;

      var currentComponentSelector = '.' + $target.attr('data-pagelevelprogress-id');

      Adapt.scrollTo(currentComponentSelector, { duration: 400 });
    },

    navigateToArticleSection: function(event) {
      var $target = $(event.currentTarget);
      var dataSelector = $target.attr('data-articlelevelprogress-id');
      this.preventDefault(event);
      if (this.model.get('_isLocked')) return;
      Backbone.history.navigate('#/id/' + dataSelector, {trigger: true});
    },

    navigateToBlockSection: function(event) {
      var $target = $(event.currentTarget);
      var dataSelector = $target.attr('data-blocklevelprogress-id');
      this.preventDefault(event);
      if (this.model.get('_isLocked')) return;
      Backbone.history.navigate('#/id/' + dataSelector, {trigger: true});
    },

    preventDefault: function(event) {
      if (event && event.preventDefault) event.preventDefault();
    },

    setTableOfContents: function() {
      var tableOfContentsPages =  this.options.model.get('_children').models;
      this.model.set('tableOfContents', tableOfContentsPages);
      return tableOfContentsPages;
    }, 

    render: function() {
      var data = this.getRenderData();
      var template = Handlebars.templates[this.constructor.template];
      this.$el.html(template(data));
    },
    
    getRenderData: function() {
      return this.model.toJSON();
    }
  },
  {
    template: 'tableOfContents'
  });

  return TableOfContentsView;

});
