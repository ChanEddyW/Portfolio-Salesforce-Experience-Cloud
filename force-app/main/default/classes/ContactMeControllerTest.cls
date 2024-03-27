@IsTest
private class ContactMeControllerTest {
    // @TestSetup
    // private static void setup() {}

    @IsTest
    private static void createLead_ExpectOneLeadCreated() {
        // GIVEN

        // WHEN
        Test.startTest();

        ContactMeController.createLead(
            'Alex', 
            'Doe', 
            'Salesforce', 
            '123 456 7890', 
            'adoe@example.com', 
            'linkedin.com/in/adoe', 
            'msg'
        );

        Test.stopTest();

        // THEN
        List<Lead> retrievedLeads = [
            SELECT Id 
            FROM Lead 
            WITH USER_MODE
        ];

        System.assertEquals(1, retrievedLeads.size(), 'Expect 1 lead to be created');
    }
}