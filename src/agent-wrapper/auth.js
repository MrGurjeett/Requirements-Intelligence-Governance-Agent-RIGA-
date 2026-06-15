const axios = require('axios');

class Auth {
  constructor(directLineSecret) {
    this.directLineSecret = directLineSecret;
    this.baseUrl = 'https://directline.botframework.com/v3/directline';
  }

  // Generate a Direct Line token
  async getToken() {
    try {
      const response = await axios.post(
        `${this.baseUrl}/tokens/generate`,
        {},
        {
          headers: {
            'Authorization': `Bearer ${this.directLineSecret}`,
            'Content-Type': 'application/json'
          }
        }
      );
      return response.data.token;
    } catch (error) {
      console.error('Auth error:', error.message);
      throw error;
    }
  }

  // Refresh an existing token
  async refreshToken(token) {
    try {
      const response = await axios.post(
        `${this.baseUrl}/tokens/refresh`,
        {},
        {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        }
      );
      return response.data.token;
    } catch (error) {
      console.error('Token refresh error:', error.message);
      throw error;
    }
  }
}

module.exports = Auth;
