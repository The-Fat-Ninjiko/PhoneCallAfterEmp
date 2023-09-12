/**
 * @NApiVersion 2.x
 * @NScriptType UserEventScript
 */

define(['N/record'], 
/**
 * @param {record} record 
 */
function(record) {
    function afterSubmit (context){

        var emp = context.newRecord;
            
        if(context.type == context.UserEventType.CREATE)
        {
            var phoneCall = record.create({
                    type : record.Type.PHONE_CALL,
                    defaultValues : {
                      customform : -150
                    },
                    isDynamic : true
                });
            log.debug('runned');
            phoneCall.setValue('title', 'Call HR for benefits');
            phoneCall.setValue('assigned', emp.id);
            phoneCall.save();
        }
    }
    
    return {
        afterSubmit : afterSubmit
    };
});