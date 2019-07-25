({
    init : function(cmp, event, helper) {
        cmp.set('v.contactColumns', [
            { label: 'CONTACT NAME', fieldName: 'LinkName', type: 'url', typeAttributes: {label: { fieldName: 'Name' }, target: '_top'} },
            { label: 'Title', fieldName: 'Title', type: 'text' },
            { label: 'Email', fieldName: 'Email', type: 'email'},
            { label: 'Phone', fieldName: 'Phone', type:"phone" }
        ])
    },

    handleComponentEvent : function(component, event, helper) {
        var eventData = event.getParam('json');
        var eventDataType = event.getParam('dataType');
        if(eventDataType == component.get('v.typeOfData')){
        component.set('v.data',JSON.parse(eventData));
        }
    }
})
