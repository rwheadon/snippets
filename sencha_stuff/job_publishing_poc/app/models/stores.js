Ext.regStore('JobStore', {
    model: 'JobModel'
    ,sorters: [{
        property: 'id',
        direction: 'ASC'
    }]
    ,proxy: {
        type: 'localstorage',
        id: 'adsel-app-jobstore'
    }
    ,data: [
    {id: 1, market: 'Boston', client: 'Creme Co.', title: 'Baker', owner: 'rwheadon'}
    ,{id: 2, market: 'Miami', client: 'Vice Inc.', title: 'Administrative Asst.', owner: 'rwheadon'}
    ,{id: 3, market: 'Dallas', client: 'Cowboy LLC', title: 'Customer Service', owner: 'rwheadon'}
    ,{id: 4, market: 'Chicago', client: 'Family Care DDM', title: 'Hygenist', owner: 'rwheadon'}
    ,{id: 6, market: 'Fargo', client: 'Brokers Ltd.', title: 'Sales Associate', owner: 'rwheadon'}
    ,{id: 10, market: 'Boise', client: 'Tate R. Well Co.', title: 'Customer Service Representative', owner: 'rwheadon'}
    ,{id: 21, market: 'Miami2', client: 'Vice Inc.', title: 'Administrative Asst.', owner: 'rwheadon'}
    ,{id: 31, market: 'Dallas2', client: 'Cowboy LLC', title: 'Customer Service', owner: 'rwheadon'}
    ,{id: 41, market: 'Chicago2', client: 'Family Care DDM', title: 'Hygenist', owner: 'rwheadon'}
    ,{id: 61, market: 'Fargo2', client: 'Brokers Ltd.', title: 'Sales Associate', owner: 'rwheadon'}
    ,{id: 101, market: 'Boise2', client: 'Tate R. Well Co.', title: 'Customer Service Representative', owner: 'rwheadon'}
    ,{id: 22, market: 'Miami3', client: 'Vice Inc.', title: 'Administrative Asst.', owner: 'rwheadon'}
    ,{id: 32, market: 'Dallas3', client: 'Cowboy LLC', title: 'Customer Service', owner: 'rwheadon'}
    ,{id: 42, market: 'Chicago3', client: 'Family Care DDM', title: 'Hygenist', owner: 'rwheadon'}
    ,{id: 62, market: 'Fargo3', client: 'Brokers Ltd.', title: 'Sales Associate', owner: 'rwheadon'}
    ,{id: 102, market: 'Boise3', client: 'Tate R. Well Co.', title: 'Customer Service Representative', owner: 'rwheadon'}
    ,{id: 23, market: 'Miami4', client: 'Vice Inc.', title: 'Administrative Asst.', owner: 'rwheadon'}
    ,{id: 33, market: 'Dallas4', client: 'Cowboy LLC', title: 'Customer Service', owner: 'rwheadon'}
    ,{id: 43, market: 'Chicago4', client: 'Family Care DDM', title: 'Hygenist', owner: 'rwheadon'}
    ,{id: 63, market: 'Fargo4', client: 'Brokers Ltd.', title: 'Sales Associate', owner: 'rwheadon'}
    ,{id: 103, market: 'Boise4', client: 'Tate R. Well Co.', title: 'Customer Service Representative', owner: 'rwheadon'}
    ]
});

Ext.regStore('exactMatchJobStore', {
    model: 'JobModel'
    ,sorters: [{
        property: 'id',
        direction: 'ASC'
    }]
    ,proxy: {
        type: 'localstorage',
        id: 'adsel-app-exactmatchjobstore'
    }
});

Ext.regStore('ExportHistoryStore', {
    model: 'ExportHistoryModel'
    ,sorters: [{
        property: 'rank',
        direction: 'ASC'
    },
	{property: 'job_id', direction: 'ASC'}
	,{property: 'id', direction:'ASC'}]
    ,proxy: {
        type: 'localstorage',
        id: 'adsel-app-exporthistorystore'
    }
    ,data: [
        {id: 1, date_exported: '2012-03-26 08:53:00', rank: 1, careersite: 'Monster', job_id: 1}
        ,{id: 2, date_exported: '2012-03-26 08:53:00', rank: 2, careersite: 'Monster', job_id: 2}
        ,{id: 3, date_exported: '2012-03-26 08:53:00', rank: 3, careersite: 'Dice', job_id: 1}
        ,{id: 4, date_exported: '2012-03-26 08:53:00', rank: 4, careersite: 'Dice', job_id: 2}
       ,{id: 5, date_exported: '2012-03-26 08:53:00', rank: 5, careersite: 'Dice', job_id: 3}
       ,{id: 6, date_exported: '2012-03-26 08:53:00', rank: 6, careersite: 'Dice', job_id: 4}
       ,{id: 7, date_exported: '2012-03-26 08:53:00', rank: 7, careersite: 'Monster', job_id: 3}
       ,{id: 8, date_exported: '2012-03-26 08:53:00', rank: 8, careersite: 'Monster', job_id: 4}
       ,{id: 9, date_exported: '2012-03-26 08:53:00', rank: 9, careersite: 'Monster', job_id: 5}
       ,{id: 10, date_exported: '2012-03-26 08:53:00', rank: 10, careersite: 'Monster', job_id: 10}
        ,{id: 21, date_exported: '2012-03-26 09:53:00', rank: 2, careersite: 'Monster', job_id: 2}
        ,{id: 31, date_exported: '2012-03-26 09:53:00', rank: 3, careersite: 'Dice', job_id: 1}
        ,{id: 41, date_exported: '2012-03-26 09:53:00', rank: 4, careersite: 'Dice', job_id: 2}
       ,{id: 51, date_exported: '2012-03-26 09:53:00', rank: 5, careersite: 'Dice', job_id: 3}
       ,{id: 61, date_exported: '2012-03-26 09:53:00', rank: 6, careersite: 'Dice', job_id: 4}
       ,{id: 71, date_exported: '2012-03-26 09:53:00', rank: 7, careersite: 'Monster', job_id: 3}
       ,{id: 81, date_exported: '2012-03-26 09:53:00', rank: 8, careersite: 'Monster', job_id: 4}
       ,{id: 91, date_exported: '2012-03-26 09:53:00', rank: 9, careersite: 'Monster', job_id: 5}
       ,{id: 101, date_exported: '2012-03-26 09:53:00', rank: 10, careersite: 'Monster', job_id: 10}
        ,{id: 22, date_exported: '2012-03-26 09:53:00', rank: 2, careersite: 'Monster', job_id: 2}
        ,{id: 32, date_exported: '2012-03-26 11:53:00', rank: 3, careersite: 'Dice', job_id: 1}
        ,{id: 42, date_exported: '2012-03-26 11:53:00', rank: 4, careersite: 'Dice', job_id: 2}
       ,{id: 52, date_exported: '2012-03-26 11:53:00', rank: 5, careersite: 'Dice', job_id: 3}
       ,{id: 62, date_exported: '2012-03-26 11:53:00', rank: 6, careersite: 'Dice', job_id: 4}
       ,{id: 72, date_exported: '2012-03-26 11:53:00', rank: 7, careersite: 'Monster', job_id: 3}
       ,{id: 82, date_exported: '2012-03-26 11:53:00', rank: 8, careersite: 'Monster', job_id: 4}
       ,{id: 92, date_exported: '2012-03-26 11:53:00', rank: 9, careersite: 'Monster', job_id: 5}
       ,{id: 102, date_exported: '2012-03-26 11:53:00', rank: 10, careersite: 'Monster', job_id: 10}
        ,{id: 23, date_exported: '2012-03-26 11:53:00', rank: 2, careersite: 'Monster', job_id: 2}
        ,{id: 33, date_exported: '2012-03-26 13:53:00', rank: 3, careersite: 'Dice', job_id: 1}
        ,{id: 43, date_exported: '2012-03-26 13:53:00', rank: 4, careersite: 'Dice', job_id: 2}
       ,{id: 53, date_exported: '2012-03-26 13:53:00', rank: 5, careersite: 'Dice', job_id: 3}
       ,{id: 63, date_exported: '2012-03-26 13:53:00', rank: 6, careersite: 'Dice', job_id: 4}
       ,{id: 73, date_exported: '2012-03-26 13:53:00', rank: 7, careersite: 'Monster', job_id: 3}
       ,{id: 83, date_exported: '2012-03-26 13:53:00', rank: 8, careersite: 'Monster', job_id: 4}
       ,{id: 93, date_exported: '2012-03-26 13:53:00', rank: 9, careersite: 'Monster', job_id: 5}
       ,{id: 103, date_exported: '2012-03-26 13:53:00', rank: 10, careersite: 'Monster', job_id: 10}
        ,{id: 24, date_exported: '2012-03-26 13:53:00', rank: 2, careersite: 'Monster', job_id: 2}
        ,{id: 34, date_exported: '2012-03-26 15:53:00', rank: 3, careersite: 'Dice', job_id: 1}
        ,{id: 44, date_exported: '2012-03-26 15:53:00', rank: 4, careersite: 'Dice', job_id: 2}
       ,{id: 54, date_exported: '2012-03-26 15:53:00', rank: 5, careersite: 'Dice', job_id: 3}
       ,{id: 64, date_exported: '2012-03-26 15:53:00', rank: 6, careersite: 'Dice', job_id: 4}
       ,{id: 74, date_exported: '2012-03-26 15:53:00', rank: 7, careersite: 'Monster', job_id: 3}
       ,{id: 84, date_exported: '2012-03-26 15:53:00', rank: 8, careersite: 'Monster', job_id: 4}
       ,{id: 94, date_exported: '2012-03-26 15:53:00', rank: 9, careersite: 'Monster', job_id: 5}
       ,{id: 104, date_exported: '2012-03-26 15:53:00', rank: 10, careersite: 'Monster', job_id: 10}
        ,{id: 25, date_exported: '2012-03-26 15:53:00', rank: 2, careersite: 'Monster', job_id: 2}
        ,{id: 35, date_exported: '2012-03-26 20:53:00', rank: 3, careersite: 'Dice', job_id: 1}
        ,{id: 45, date_exported: '2012-03-26 20:53:00', rank: 4, careersite: 'Dice', job_id: 2}
       ,{id: 55, date_exported: '2012-03-26 20:53:00', rank: 5, careersite: 'Dice', job_id: 3}
       ,{id: 65, date_exported: '2012-03-26 20:53:00', rank: 6, careersite: 'Dice', job_id: 4}
       ,{id: 75, date_exported: '2012-03-26 20:53:00', rank: 7, careersite: 'Monster', job_id: 3}
       ,{id: 85, date_exported: '2012-03-26 20:53:00', rank: 8, careersite: 'Monster', job_id: 4}
       ,{id: 95, date_exported: '2012-03-26 20:53:00', rank: 9, careersite: 'Monster', job_id: 5}
       ,{id: 106, date_exported: '2012-03-26 20:53:00', rank: 10, careersite: 'Monster', job_id: 10}
       ,{id: 1116, date_exported: '2012-03-26 08:53:00', rank: 11, careersite: 'Craigslist', job_id: 10}
       ,{id: 1216, date_exported: '2012-03-26 08:53:00', rank: 12, careersite: 'Craigslist', job_id: 6}
       ,{id: 1316, date_exported: '2012-03-26 08:53:00', rank: 13, careersite: 'Craigslist', job_id: 3}
       ,{id: 1416, date_exported: '2012-03-26 08:53:00', rank: 14, careersite: 'Craigslist', job_id: 1}
       ,{id: 1516, date_exported: '2012-03-26 08:53:00', rank: 15, careersite: 'Craigslist', job_id: 4}
       ,{id: 1616, date_exported: '2012-03-26 08:53:00', rank: 16, careersite: 'Monster', job_id: 6}
    ]
});

Ext.regStore('ExportHistoryResultStore', {
    model: 'ExportHistoryModel'
    ,sorters: [{
        property: 'rank',
        direction: 'ASC'
    }]
    ,proxy: {
        type: 'localstorage',
        id: 'adsel-app-exporthistoryresultstore'
    }
});



Ext.regStore('HomeMenuStore', {
    model: 'MenuModel'
    ,sorters: [{
        property: 'title',
        direction: 'ASC'
    }]
    ,proxy: {
        type: 'localstorage',
        id: 'adsel-app-homemenustore'
    }
    ,data: [
//    {id: 1, title: 'Status', targetMenu: 'statusList'}
    {id:2, title:'Jobs', target: 'jobListPanel'}
    ,{id:3, title:'Export History', target: 'exportListPanel'}
    ,{id:4, title: 'Job Export Search', target: 'jobExportSearchPanel'}
    ]
});

