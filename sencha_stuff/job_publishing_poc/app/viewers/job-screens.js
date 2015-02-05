//JOBS SCREEN
AdSel.views.jobsToolbar = new Ext.Toolbar({
    id: 'jobsToolbar'
    ,ui: 'light'
    ,defaults: {
        iconMask: true
        ,ui: 'plain'
    }
    ,title: 'Jobs'
    ,items: [
        {
            iconCls: 'home',
            handler: function () {
                AdSel.views.viewport.setActiveItem('homeMenuPanel', {type: 'slide', direction: 'right'});
            }
        }
    ]
});

AdSel.views.jobList = new Ext.List({
    id: 'jobList'
    ,store: 'JobStore'
    ,disableSelection: true
    ,itemTpl: '<div class="list-item-title">{title} ({client}) in {market} entered by {owner}</div>'
});

//JOB EXPORTHISTORY SEARCH SCREEN
/*
 * *********************************************** *
 * *********************************************** *
 * *********************************************** *
 *                  JOB HISTORY                    *
 * *********************************************** *
 * *********************************************** *
 * *********************************************** *
 */
AdSel.views.jobHistoryCheckerToolbar = new Ext.Toolbar({
    id: 'jobHistoryCheckerToolbar'
    ,ui: 'light'
    ,dock: 'top'
    ,defaults: {
        iconMask: true
        ,ui: 'plain'
    }
//    ,title: 'Job Posting History'
    ,title: 'Job Export History'
    ,items: [
        {
            iconCls: 'home'
            ,id: 'jobhistorycheckerHomeBtn'
            ,handler: function(){
                AdSel.views.joborderHistoryCheckForm.reset();
                Ext.getStore('JobStore').clearFilter();
                Ext.getStore('ExportHistoryStore').clearFilter();
                AdSel.views.viewport.setActiveItem('homeMenuPanel', {type: 'slide', direction: 'right'});
            }
        }
        ,{xtype: 'spacer'}
        ,{
            text: 'Check it!'
            ,ui: 'action'
            ,handler: function () {
                    var ovrEditor = AdSel.views.joborderHistoryCheckForm;
                    var filterid = ovrEditor.getValues().joborderid;
                    var theHeaderStore = Ext.getStore('JobStore');

                    theHeaderStore.clearFilter();
					theHeaderStore.filter({property:'id', value: filterid, exactMatch: true});

                    var theHistoryStore = Ext.getStore('ExportHistoryStore');
                    theHistoryStore.clearFilter();
					theHistoryStore.filter({property:'job_id', value: filterid, exactMatch: true});
					

                    var theHeaderList = AdSel.views.joborderPostingHistoryHeaderInfo;
                    theHeaderList.refresh();
                    var theHistoryList = AdSel.views.joborderPostingHistoryResultList;
                    theHistoryList.refresh();
					AdSel.views.jobExportSearchPanel.doLayout();
                }

        }

    ]
});

AdSel.views.joborderHistoryCheckForm = new Ext.form.FormPanel({
    id: 'joborderHistoryCheckForm'
    ,standardSubmit: false
    ,submitOnAction: false
    ,items: [
        {
            xtype: 'textfield'
            ,id: 'joborderhistorycheckform-joborderid'
            ,name: 'joborderid'
            ,label: 'JO Number'
        }
    ]
});

AdSel.views.joborderPostingHistoryHeaderInfo = new Ext.List({
    id: 'joborderPostingHistoryHeaderInfo'
	// ,layout: 'fit'
    ,store: 'JobStore'
    ,disableSelection: true
    ,itemTpl: '<div class="list-item-title-dark"><b>Job Order: </b>{id}<br/>' +
            '<b>Title: </b>{title}<br/><b>Client: </b>{client}</div>'

});

AdSel.views.joborderPostingHistoryResultList = new Ext.List({
    id: 'joborderPostingHistoryResultList'
	// ,layout: 'fit'
    ,store: 'ExportHistoryStore'
    ,disableSelection: true
    ,itemTpl: '<div class="list-item-title">Runtime: {date_exported}<br/>' +
            'Career Site: {careersite}<br/>Rank: {rank}</div>'
});







