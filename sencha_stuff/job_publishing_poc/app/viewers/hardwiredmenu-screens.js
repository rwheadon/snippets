    //MAIN SCREEN (HOME)
	AdSel.views.consoleBar = new Ext.Toolbar({
	    id: 'consoleBar',
	    title: 'Job Management Console'
	});

	AdSel.views.consoleList = new Ext.List({
	    id: 'consoleList'
	    ,store: 'HomeMenuStore'
        ,disableSelection: true
	    ,itemTpl: '<div class="list-item-title">{title}</div>'
		,onItemDisclosure: function (record) {
			var selectedNote=record;
			var theTarget = selectedNote.data.target;
			if( theTarget == 'jobExportSearchPanel') {
				Ext.getStore('JobStore').filter({property:'id', value: 0, exactMatch: true});
				Ext.getStore('ExportHistoryStore').filter({property:'job_id', value: 0, exactMatch: true});
	            AdSel.views.viewport.setActiveItem(theTarget, {type: 'slide', direction: 'left'})
			} else {
	            AdSel.views.viewport.setActiveItem(theTarget, {type: 'slide', direction: 'left'});				
			}
			

	    }
	});