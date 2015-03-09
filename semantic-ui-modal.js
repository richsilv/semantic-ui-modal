templateAttach = function(template, callback, data) {
	var instance;
	if (typeof template === "string") template = Template[template];
	if (!template) return false;
	if (data)
		instance = Blaze.renderWithData(template, data, document.body);
	else
		instance = Blaze.render(template, document.body);
	return callback && callback.call(this, instance);
};

confirmModal = function(options, postRender) {
	templateAttach(
		Template.confirmModalWrapper,
		function(instance) {
	  		$('#confirmModal').modal('setting', {
		    	onHide: function() {
		      		Meteor.setTimeout(function() {
			    		$('.ui.dimmer.page').remove();
			    		$('#confirmModal').remove();
		  	  		}, $(this).modal('setting', 'duration'));
		    	},
	    		debug: false,
	    		verbose: false,
	    		closable: options ? options.noButtons : null
	  		}).modal('show');
		  	postRender && postRender.call(instance, options);
		},
		{
			message: options && options.message,
			header: options && options.header,
			callback: options && options.callback,
			delay: options && options.delay,
			noButtons: options && options.noButtons
		}
	);
};

generalModal = function(template, data, options) {
	templateAttach(
		Template.generalModalWrapper,
		function() {
		  $('#generalModal').modal('setting', _.extend( (options ? options.modalSettings : {}) || {}, {
			    onHide: function() {
			      Meteor.setTimeout(function() {
				    $('.ui.dimmer.page').remove();
				    $('#generalModal').remove();
				  }, $(this).modal('setting', 'duration'));
			    },
			    debug: false,
			    verbose: false
		  }))
		  .modal('show')
		  .modal('refresh');
			options && options.postRender && options.postRender.call(this, options);
		},
		{
			dataContext: data,
			templateName: template,
			modalClass: options && options.modalClass,
			modal: $('#generalModal')[0]
		}
	)
}

Template.confirmModal.events({
	'click #confirmCancel': function(event, template) {
		$(template.firstNode.offsetParent).modal('hide');
	},
	'click #confirmOkay': function(event, template) {
		var _this = this,
			instance = Template.instance(),
			delayTime = $(template.firstNode.offsetParent).modal('setting', 'duration');

		this.callback && this.callback.apply(this, arguments);
		this.delay && Meteor.setTimeout(function() {
			_this.delay.apply(_this, arguments)
		}, delayTime);
		template.$(template.firstNode.offsetParent).modal('hide');
	}
});

SemanticModal = {
  confirmModal: confirmModal,
  generalModal: generalModal
};
