public class TriggerRuleAssignment {
    @InvocableMethod
    public static void leadUpdate(List<Id> LeadIds)
    {
        AssignmentRule assignmentRuleActive = [SELECT Id FROM AssignmentRule WHERE SobjectType = 'Lead' AND Active = true Limit 1];
        
        Database.DMLOptions dmo = new Database.DMLOptions();
        // dmo.assignmentRuleHeader.useDefaultRule = true;
        dmo.assignmentRuleHeader.assignmentRuleId = assignmentRuleActive.Id;
        Lead leads = [SELECT Id FROM Lead WHERE Lead.Id IN :LeadIds];
        leads.setOptions(dmo);
        update leads;
    }
}