public without sharing class TriggerRuleAutoResponse {
    // public class TriggerRuleAutoResponseException extends Exception {}

    @InvocableMethod
    public static void updateLead(Id[] leadIds)
    {
        Database.DMLOptions dlo = new Database.DMLOptions();

        dlo.EmailHeader.triggerAutoResponseEmail = true;

        Lead leadToUpdate = [
            SELECT Id 
            FROM Lead 
            WHERE Id IN :LeadIds 
            LIMIT 1
        ];

        leadToUpdate.setOptions(dlo);

        update leadToUpdate;
    }
}