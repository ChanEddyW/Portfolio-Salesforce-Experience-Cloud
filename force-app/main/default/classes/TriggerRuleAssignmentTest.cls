@IsTest
private class TriggerRuleAssignmentTest {
    // @TestSetup
    // static void testSetup() {}

    @IsTest
    static void testPositiveUpdateLead() {
        // GIVEN
        Lead leadToInsert = new Lead(
            FirstName = 'Alex', 
            LastName = 'Doe', 
            Company = 'Salesforce', 
            Phone = '123 456 7890', 
            Email = 'adoe@example.com', 
            LinkedIn_Profile_URL__c = 'linkedin.com/in/adoe', 
            Message__c = 'test message'
        );
        insert leadToInsert;

        Id[] leadIds = new List<Id>{leadToInsert.Id};

        // WHEN
        Test.startTest();
        TriggerRuleAssignment.updateLead(leadIds);
        Test.stopTest();

        // THEN
        Group groupQueueLead = [
            SELECT Id 
            FROM Group 
            WHERE Type = 'Queue' AND Name = 'Queue Lead' 
            LIMIT 1
        ];

        Lead leadUpdated = [
            SELECT Id 
            FROM Lead 
            WHERE Id IN :leadIds AND OwnerId = :groupQueueLead.Id
        ];

        System.assertNotEquals(null, leadUpdated, 'Error');
    }

    // @IsTest
    // static void testNegativeUpdateLead() {}
}