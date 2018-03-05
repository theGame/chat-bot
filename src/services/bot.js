
const accessToken = ''; //here should be token
const baseUrl = 'https://api.api.ai/v1/query?v=20150910';

class BotServiceClasss {
  getHeader () {
    return new Headers({
      'Content-Type': `application/json`,
      'Authorization': `Bearer ${accessToken}`
    });
  }

  getBody (message) {
    return JSON.stringify({
      query: message,
      lang: 'en',
      sessionId: 'somerandomthing'
    });
  }

  getConfig (message) {
    return {
      headers: this.getHeader(),
      method: 'POST',
      dataType: 'json',
      body: this.getBody(message)
    }
  }

  getRequest (message) {
    return new Request(baseUrl, this.getConfig(message))
  }
}

const BotService = new BotServiceClasss();

export default BotService;
