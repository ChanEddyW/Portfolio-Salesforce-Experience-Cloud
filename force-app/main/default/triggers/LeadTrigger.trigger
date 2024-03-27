trigger LeadTrigger on Lead (after insert) {
    switch on Trigger.operationType {
        when AFTER_INSERT {
            LeadTriggerHandler.updateLeadToTriggerAssignmentRuleAndEmail(Trigger.new);
        }
    }
}