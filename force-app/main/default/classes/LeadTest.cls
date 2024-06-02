@IsTest
private class LeadTest {
    @IsTest
    private static void assign_one_lead_to_queue() {
        // GIVEN
        Lead leadToInsert = new Lead(
            FirstName = 'Alex', 
            LastName = 'Doe', 
            Company = 'Salesforce', 
            Phone = '123 456 7890', 
            Email = 'adoe@example.com', 
            LinkedIn_Profile_URL__c = 'linkedin.com/in/adoe', 
            Message__c = 'msg'
        );

        // WHEN
        Test.startTest();

        if (Schema.sObjectType.Lead.isCreateable()) {
            insert as user leadToInsert;
        }

        Test.stopTest();

        // THEN
        List<Group> groups = [
            SELECT 
                Id, 
                Name 
            FROM Group 
            WHERE Name = 'Queue Lead' 
                AND Type = 'Queue' 
            WITH USER_MODE 
            LIMIT 1
        ];

        Id queueLeadId;

        for (Group grp : groups) {
            if (grp.Name == 'Queue Lead') {     
                queueLeadId = grp.Id;

                break;
            }
        }

        List<Lead> retrievedLeads = [
            SELECT Id 
            FROM Lead 
            WHERE Id = :leadToInsert.Id 
                AND OwnerId = :queueLeadId 
            WITH USER_MODE
        ];

        System.assertEquals(1, retrievedLeads.size(), 'Expect 1 lead assigned to queue');
    }
}