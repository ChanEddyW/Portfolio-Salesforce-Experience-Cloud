global class ContactMeController {
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
        // Group groupQueueLead = [SELECT Id FROM Group WHERE Name = 'Queue Lead' AND Type = 'Queue' Limit 1];
        // User userSysAdmin = [SELECT Id FROM User WHERE Profile.Name = 'System Administrator' Limit 1];
        
        // List<Id> LeadIds = New List<Id>();
        
        Lead lead = new Lead();

        lead.Status = 'Open - Not Contacted';
        lead.LeadSource = 'Web';
        // lead.OwnerId = groupQueueLead.Id;
        // lead.OwnerId = userSysAdmin.Id;
        lead.FirstName = firstname;
        lead.LastName = lastname;
        lead.Company = company;
        lead.Phone = phone;
        lead.Email = email;
        lead.LinkedIn_Profile_URL__c = linkedinprofileurl;
        lead.Message__c = message;

        insert lead;

        // LeadIds.add(lead.Id);

        // TriggerRuleAssignment.leadUpdate(LeadIds);
        // TriggerRuleAutoResponse.leadUpdate(LeadIds);
    }
}