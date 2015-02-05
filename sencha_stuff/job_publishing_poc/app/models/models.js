Ext.regModel('JobModel', {
    idProperty: 'id'
    ,fields: [
        {type: 'int', name: 'id', field: 'id'}
        ,{type: 'string', name: 'market', field: 'market'}
        ,{type: 'string', name: 'client', field: 'client'}
        ,{type: 'string', name: 'title', field: 'title'}
        ,{type: 'string', name: 'owner', field: 'owner'}
    ]
});

Ext.regModel('ExportHistoryModel', {
    idProperty: 'id'
    ,fields: [
        {type: 'int', name: 'id', field: 'id'}
        ,{type: 'string', name: 'date_exported', field: 'date_exported'}
        ,{type: 'int', name: 'rank', field: 'rank'}
        ,{type: 'string', name: 'careersite', field: 'careersite'}
        ,{type: 'int', name: 'job_id', field: 'job_id'}
    ]
});

Ext.regModel('MenuModel', {
    idProperty: 'id',
    fields: [
        { name: 'id', type: 'int' }
        ,{ name: 'title', type: 'string' }
        ,{ name: 'target', type: 'string' }
    ]
});
