export class Api {
  static async getAllAgents() {
    try {
      const data = await fetch('https://valorant-api.com/v1/agents');
      const agents = data.json();
      return agents;
    } catch (err) {
      console.log(err);
    }
  }
}
