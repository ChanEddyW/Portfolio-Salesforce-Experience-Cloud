public with sharing class ContactMeController {
    // public class ContactMeException extends Exception {}

    @AuraEnabled
    public static void createLead(
        String firstName, 
        String lastName, 
        String company, 
        String phone, 
        String email, 
        String linkedInProfileURL, 
        String msg
    ) {
        // List<Group> groups = [
        //     SELECT 
        //         Id, 
        //         Name 
        //     FROM Group 
        //     WHERE Name = 'Queue Lead' 
        //         AND Type = 'Queue' 
        //     WITH USER_MODE 
        //     LIMIT 1
        // ];

        // Id queueLeadId;

        // for (Group grp : groups) {
        //     if (grp.Name == 'Queue Lead') {
        //         queueLeadId = grp.Id;

        //         break;
        //     }
        // }

        // List<User> users = [
        //     SELECT 
        //         Id, 
        //         Profile.Name 
        //     FROM User 
        //     WHERE Profile.Name = 'System Administrator' 
        //     WITH USER_MODE 
        //     LIMIT 1
        // ];

        // Id sysAdminId;

        // for (User user : users) {
        //     if (user.Profile.Name == 'System Administrator') {
        //         sysAdminId = user.Id;

        //         break;
        //     }
        // }

        Lead leadToInsert = new Lead(
            FirstName = firstName, 
            LastName = lastName, 
            Company = company, 
            Phone = phone, 
            Email = email, 
            Status = 'Open - Not Contacted', 
            LeadSource = 'Web', 
            // OwnerId = queueLeadId, 
            // OwnerId = sysAdminId, 
            LinkedIn_Profile_URL__c = linkedInProfileURL, 
            Message__c = msg
        );

        insert as system leadToInsert;

        // if (Schema.sObjectType.Lead.isCreateable()) {
        //     insert as user leadToInsert;
        // }

        System.debug('leadToInsert = ' + leadToInsert);
    }
}