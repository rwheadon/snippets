//EXPORTS SCREEN
AdSel.views.exporthistoryToolbar = new Ext.Toolbar({
    id: 'jobsToolbar'
    ,ui: 'light'
    ,defaults: {
        iconMask: true
        ,ui: 'plain'
    }
    ,title: 'Export History'
    ,items: [
        {
            iconCls: 'home',
            handler: function () {
                AdSel.views.viewport.setActiveItem('homeMenuPanel', {type: 'slide', direction: 'right'});
            }
        }
    ]
});


AdSel.views.exporthistoryList = new Ext.List({
    id: 'exporthistoryList'
    ,store: 'ExportHistoryStore'
    ,disableSelection: true
    ,itemTpl: '<div class="list-item-title">{date_exported} exported job# {job_id} to {careersite} (ranked {rank})</div>'
});