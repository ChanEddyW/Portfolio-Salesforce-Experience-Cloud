trigger LeadTrigger on Lead (after insert) {
    LeadTriggerHandler leadTriggerHandler = new LeadTriggerHandler();

    switch on Trigger.operationType {
        when AFTER_INSERT {
            leadTriggerHandler.updateLeadToTriggerAssignmentRuleAndEmail(Trigger.new);
        }
    }
}