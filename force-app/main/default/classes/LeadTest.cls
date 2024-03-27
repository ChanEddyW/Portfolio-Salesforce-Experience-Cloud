@IsTest
private class LeadTest {
    // @TestSetup
    // private static void setup() {}

    @IsTest
    private static void insertLead_ExpectOneLeadAssignedToQueue() {
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

        System.debug('leadToInsert = ' + leadToInsert);

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
                System.debug('grp = ' + grp);

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