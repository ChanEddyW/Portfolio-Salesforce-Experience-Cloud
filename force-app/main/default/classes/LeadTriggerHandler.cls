public without sharing class LeadTriggerHandler {
    public void updateLeadToTriggerAssignmentRuleAndEmail(List<Lead> triggerDotNew) {
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
    }

    private Database.DMLOptions getDMLOptions() {
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
                activeLeadAssignmentRuleId = assignmentRule.Id;

                break;
            }
        }

        dmlOptions.assignmentRuleHeader.assignmentRuleId = activeLeadAssignmentRuleId;

        dmlOptions.DuplicateRuleHeader.AllowSave = true;

        dmlOptions.EmailHeader.triggerAutoResponseEmail = true;

        dmlOptions.optAllOrNone = true;

        return dmlOptions;
    }
}