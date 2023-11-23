@IsTest
private class TriggerRuleAutoResponseTest {
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
        TriggerRuleAutoResponse.updateLead(leadIds);
        Test.stopTest();
        
        // THEN
        Lead leadUpdated = [
            SELECT Id 
            FROM Lead 
            WHERE Id IN :leadIds
        ];

        System.assertNotEquals(null, leadUpdated, 'Error');
    }

    // @IsTest
    // static void testNegativeUpdateLead() {}
}