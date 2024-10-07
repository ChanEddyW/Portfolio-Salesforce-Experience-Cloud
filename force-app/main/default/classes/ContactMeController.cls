public with sharing class ContactMeController {
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
        Lead leadToInsert = new Lead(
            FirstName = firstName, 
            LastName = lastName, 
            Company = company, 
            Phone = phone, 
            Email = email, 
            Status = 'Open - Not Contacted', 
            LeadSource = 'Web', 
            LinkedIn_Profile_URL__c = linkedInProfileURL, 
            Message__c = msg
        );

        insert as system leadToInsert;
    }
}