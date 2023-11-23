@IsTest
private class ContactMeControllerTest {
    // @TestSetup
    // static void testSetup() {}

    @IsTest
    static void testPositiveCreateLead() {
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
        
        // WHEN
        Test.startTest();
        ContactMeController.createLead(
            leadToInsert.FirstName, 
            leadToInsert.LastName, 
            leadToInsert.Company, 
            leadToInsert.Phone, 
            leadToInsert.Email, 
            leadToInsert.LinkedIn_Profile_URL__c, 
            leadToInsert.Message__c
        );
        Test.stopTest();
        
        // THEN
        Integer numLead = [
            SELECT COUNT() 
            FROM Lead 
            WHERE FirstName = :leadToInsert.FirstName AND LastName = :leadToInsert.LastName
        ];

        System.assertEquals(1, numLead, 'Error');
    }

    // @IsTest
    // static void testNegativeCreateLead() {}
}