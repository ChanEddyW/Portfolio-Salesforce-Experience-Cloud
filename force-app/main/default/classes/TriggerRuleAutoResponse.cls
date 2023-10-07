public class TriggerRuleAutoResponse {
    @InvocableMethod
    public static void leadUpdate(List<Id> LeadIds)
    {
        Database.DMLOptions dlo = new Database.DMLOptions();
        dlo.EmailHeader.triggerAutoResponseEmail = true;
        Lead leads = [SELECT Id FROM Lead WHERE Lead.Id IN :LeadIds];
        leads.setOptions(dlo);
        update leads;
    }
}