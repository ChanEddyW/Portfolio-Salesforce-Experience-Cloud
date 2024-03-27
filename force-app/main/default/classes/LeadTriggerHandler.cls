public without sharing class LeadTriggerHandler {
    // @InvocableMethod
    public static void updateLeadToTriggerAssignmentRuleAndEmail(List<Lead> triggerDotNew) {
        Database.DMLOptions dmlOptions = getDMLOptions();

        List<Lead> leadsToUpdate = [
            SELECT Id 
            FROM Lead 
            WHERE Id IN :triggerDotNew 
            WITH SYSTEM_MODE 
            LIMIT 1
        ];

        for (Lead leadToUpdate : leadsToUpdate) {
            leadToUpdate.setOptions(dmlOptions);
        }

        update as system leadsToUpdate;

        // if (Schema.sObjectType.Lead.isUpdateable()) {
        //     update as user leadsToUpdate;
        // }
    }

    private static Database.DMLOptions getDMLOptions() {
        Database.DMLOptions dmlOptions = new Database.DMLOptions();

        List<AssignmentRule> assignmentRules = [
            SELECT 
                Id, 
                Active, 
                SobjectType 
            FROM AssignmentRule 
            WHERE Active = TRUE 
                AND SobjectType = 'Lead' 
            WITH SYSTEM_MODE 
            LIMIT 1
        ];

        Id activeLeadAssignmentRuleId;

        for (AssignmentRule assignmentRule : assignmentRules) {
            if (assignmentRule.Active == true && assignmentRule.SobjectType == 'Lead') {
                System.debug('assignmentRule = ' + assignmentRule);

                activeLeadAssignmentRuleId = assignmentRule.Id;

                break;
            }
        }

        dmlOptions.assignmentRuleHeader.assignmentRuleId = activeLeadAssignmentRuleId;

        // dmlOptions.assignmentRuleHeader.useDefaultRule = true;

        dmlOptions.DuplicateRuleHeader.AllowSave = true;

        dmlOptions.EmailHeader.triggerAutoResponseEmail = true;

        // dmlOptions.EmailHeader.triggerOtherEmail = true;

        // dmlOptions.EmailHeader.triggerUserEmail = true;

        dmlOptions.optAllOrNone = true;

        System.debug('dmlOptions = ' + dmlOptions);

        return dmlOptions;
    }
}