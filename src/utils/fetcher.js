import axios from 'axios';

class Fetcher {
  constructor() {
    this.instance = axios.create({
      baseURL: process.env.REACT_APP_BASE_URL,
      timeout: 1000,
      headers: {},
    });
  }

  async get(userId, option) {
    const optionsList = [ 'activity', 'average-sessions', 'performance' ];

    return this.instance
      .get(`/user/${userId}/${optionsList.includes(option) ? option : ''}`)
      .then(res => res.data);
  }
}

export default Fetcher;
