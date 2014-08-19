templateAttach = function(template, callback, data) {
	if (typeof template === "string") template = Template[template];
	if (!template) return false;
	if (data)
		UI.insert(UI.renderWithData(template, data), document.body);
	else
		UI.insert(UI.render(template), document.body);
	return callback && callback.apply(this, arguments);
};

confirmModal = function(options, postRender) {
	templateAttach(
		Template.generalConfirmModalWrapper, 
		function() {
		  $('#generalConfirmModal').modal('setting', {
		    onHide: function() {
		      $('.ui.dimmer.page').remove();
		      $('#generalConfirmModal').remove();
		    },
		    debug: false,
		    verbose: false,
		    closable: options ? options.noButtons : null
		  }).modal('show');
		  postRender && postRender.apply(this, arguments);
		},
		{
			message: options && options.message,
			header: options && options.header,
			callback: options && options.callback,
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
			      $('.ui.dimmer.page').remove();
			      $('#generalModal').remove();
			    },
			    debug: false,
			    verbose: false
		  }))
		  .modal('show')
		  .modal('refresh');
		  console.log(this);
			options && options.postRender && options.postRender.apply(this, arguments);
		},
		{
			dataContext: data,
			templateName: template,
			modalClass: options && options.modalClass
		}
	)
}

Template.generalConfirmModal.events({
	'click #generalConfirmCancel': function(event, template) {
		$(template.firstNode.offsetParent).modal('hide');
	},
	'click #generalConfirmOkay': function(event, template) {
		this.callback && this.callback.apply(this, arguments);
		$(template.firstNode.offsetParent).modal('hide');		
	}
});

SemanticModal = {
	confirmModal: confirmModal,
	generalModal: generalModal
};