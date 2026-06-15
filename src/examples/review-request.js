const EnterpriseRequirementsAgent = require('../agent-wrapper/agent');
const config = require('../agent-wrapper/config');

async function main() {
  const agent = new EnterpriseRequirementsAgent(config);

  try {
    // Start conversation
    await agent.startConversation();

    // Example requirement
    const requirement = `
      As an authenticated customer, I want to transfer 
      funds between my accounts quickly and securely 
      so that I can manage my finances easily.
    `;

    console.log('========================================');
    console.log('Submitting requirement for review...');
    console.log('========================================');

    // Submit and get review
    const review = await agent.reviewRequirement(requirement);

    console.log('========================================');
    console.log('GOVERNANCE REVIEW RESULT:');
    console.log('========================================');
    console.log(review);

    // End conversation
    await agent.endConversation();

  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}

main();
