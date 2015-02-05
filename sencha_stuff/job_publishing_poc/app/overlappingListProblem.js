var App;

// new Ext.Application({
new Ext.Application({
    name : 'AdSel',
    useLoadMask : true,
	launch: function (){
    App = this;
//initialization
            AdSel.views.homeMenuPanel = new Ext.Panel({
                id: 'homeMenuPanel'
                ,layout: 'fit'
                ,dockedItems: [
                        AdSel.views.consoleBar
                ]
                ,items: [
                        AdSel.views.consoleList
                ]
            });

            AdSel.views.jobListPanel = new Ext.Panel({
                id: 'jobListPanel'
                ,layout: 'fit'
                ,dockedItems: [
                        AdSel.views.jobsToolbar
                ]
                ,items: [
                        AdSel.views.jobList
                ]
            });
            
            AdSel.views.exportListPanel = new Ext.Panel({
                id: 'exportListPanel'
                ,layout: 'fit'
                ,dockedItems: [
                        AdSel.views.exporthistoryToolbar
                ]
                ,items: [
                        AdSel.views.exporthistoryList
                ]
            });
            
            AdSel.views.jobExportSearchPanel = new Ext.Panel({
                id: 'jobExportSearchPanel'
				,layout: 'fit'
                ,dockedItems: [
                        AdSel.views.jobHistoryCheckerToolbar
                        ,AdSel.views.joborderHistoryCheckForm
                        ,AdSel.views.joborderPostingHistoryHeaderInfo
                ]
                ,items: [
                        AdSel.views.joborderPostingHistoryResultList
                ]
            });

//render
			AdSel.views.viewport = new Ext.Panel({
	             fullscreen : true
	             ,layout : 'card'
	             ,cardAnimation : 'slide'
	             ,items: [
						
	                    AdSel.views.homeMenuPanel
	                    ,AdSel.views.jobListPanel
	                    ,AdSel.views.exportListPanel
	                    ,AdSel.views.jobExportSearchPanel
					]
	       	})
	}
});