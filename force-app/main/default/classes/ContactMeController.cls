public with sharing class ContactMeController {
    // public class ContactMeException extends Exception {}

    @AuraEnabled
    public static void createLead(
        String firstname, 
        String lastname, 
        String company, 
        String phone, 
        String email, 
        String linkedinprofileurl, 
        String message
    ) {
        // Group groupQueueLead = [
             // SELECT Id 
             // FROM Group 
             // WHERE Type = 'Queue' AND Name = 'Queue Lead' 
             // LIMIT 1
         // ];

        // User userSysAdmin = [
             // SELECT Id 
             // FROM User 
             // WHERE Profile.Name = 'System Administrator' 
             // LIMIT 1
         // ];

        // Id[] leadIds = new List<Id>();

        Lead leadToInsert = new Lead(
            Status = 'Open - Not Contacted', 
            LeadSource = 'Web', 
            // OwnerId = groupQueueLead.Id, 
            // OwnerId = userSysAdmin.Id, 
            FirstName = firstname, 
            LastName = lastname, 
            Company = company, 
            Phone = phone, 
            Email = email, 
            LinkedIn_Profile_URL__c = linkedinprofileurl, 
            Message__c = message
        );
        insert leadToInsert;

        // leadIds.add(leadToInsert.Id);

        // TriggerRuleAssignment.leadUpdate(leadIds);
        // TriggerRuleAutoResponse.leadUpdate(leadIds);
    }
}