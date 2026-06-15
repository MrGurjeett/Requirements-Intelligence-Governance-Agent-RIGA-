const axios = require('axios');
const Auth = require('./auth');

class EnterpriseRequirementsAgent {
  constructor(config) {
    this.config = config;
    this.auth = new Auth(config.directLineSecret);
    this.baseUrl = 'https://directline.botframework.com/v3/directline';
    this.token = null;
    this.conversationId = null;
    this.watermark = null;
  }

  // Start a new conversation
  async startConversation() {
    try {
      this.token = await this.auth.getToken();
      const response = await axios.post(
        `${this.baseUrl}/conversations`,
        {},
        {
          headers: {
            'Authorization': `Bearer ${this.token}`,
            'Content-Type': 'application/json'
          }
        }
      );
      this.conversationId = response.data.conversationId;
      console.log(`Conversation started: ${this.conversationId}`);
      return this.conversationId;
    } catch (error) {
      console.error('Failed to start conversation:', error.message);
      throw error;
    }
  }

  // Submit requirement for review
  async reviewRequirement(requirementText) {
    try {
      await axios.post(
        `${this.baseUrl}/conversations/${this.conversationId}/activities`,
        {
          type: 'message',
          from: { id: 'user', name: 'User' },
          text: requirementText
        },
        {
          headers: {
            'Authorization': `Bearer ${this.token}`,
            'Content-Type': 'application/json'
          }
        }
      );
      console.log('Requirement submitted. Waiting for review...');
      return await this.getResponse();
    } catch (error) {
      console.error('Failed to submit requirement:', error.message);
      throw error;
    }
  }

  // Get agent response with retry
  async getResponse() {
    let attempts = 0;
    const maxAttempts = 15;

    while (attempts < maxAttempts) {
      await this.sleep(3000);

      try {
        const url = this.watermark
          ? `${this.baseUrl}/conversations/${this.conversationId}/activities?watermark=${this.watermark}`
          : `${this.baseUrl}/conversations/${this.conversationId}/activities`;

        const response = await axios.get(url, {
          headers: {
            'Authorization': `Bearer ${this.token}`
          }
        });

        this.watermark = response.data.watermark;

        const botMessages = response.data.activities
          .filter(a => a.from.role === 'bot' || a.from.id !== 'user');

        if (botMessages.length > 0) {
          const fullResponse = botMessages
            .map(m => m.text || '')
            .filter(Boolean)
            .join('\n\n');

          if (fullResponse.trim()) {
            return fullResponse;
          }
        }
      } catch (error) {
        console.error('Error getting response:', error.message);
      }

      attempts++;
      console.log(`Waiting for response... attempt ${attempts}/${maxAttempts}`);
    }

    throw new Error('No response received from agent after maximum attempts');
  }

  // End conversation
  async endConversation() {
    this.conversationId = null;
    this.token = null;
    this.watermark = null;
    console.log('Conversation ended.');
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

module.exports = EnterpriseRequirementsAgent;
