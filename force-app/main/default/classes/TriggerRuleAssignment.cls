public without sharing class TriggerRuleAssignment {
    // public class TriggerRuleAssignmentException extends Exception {}

    @InvocableMethod
    public static void updateLead(Id[] leadIds)
    {
        Database.DMLOptions dmo = new Database.DMLOptions();

        AssignmentRule assignmentRuleActive = [
            SELECT Id 
            FROM AssignmentRule 
            WHERE Active = true AND SobjectType = 'Lead' 
            LIMIT 1
        ];

        // dmo.assignmentRuleHeader.useDefaultRule = true;
        dmo.assignmentRuleHeader.assignmentRuleId = assignmentRuleActive.Id;

        Lead leadToUpdate = [
            SELECT Id 
            FROM Lead 
            WHERE Id IN :leadIds 
            LIMIT 1
        ];

        leadToUpdate.setOptions(dmo);

        update leadToUpdate;
    }
}