import axios from 'axios';
import Mapper from './mapper';

class Service {
  constructor(userId) {
    this.userId = userId;
    this.mapper = new Mapper();
    this.instance = axios.create({
      baseURL: process.env.REACT_APP_BASE_URL,
      timeout: 1000,
      headers: {},
    });
  }

  /**
   * Get data
   * @param {('activity'|'average-sessions'|'performance')} [option]
   * @returns {Promise<Object>} fetched data
   */
  async get(option) {
    const optionsList = [ 'activity', 'average-sessions', 'performance' ];

    return this.instance
      .get(`/user/${this.userId}/${optionsList.includes(option) ? option : ''}`)
      .then(res => res.data);
  }

  /**
   * get User info
   * @returns {object}
   */
  async getUser() {
    return this.mapper.getUser(
      await this.get(),
    );
  }

    /**
   * get user's sessions
   * @returns {object[]}
   */
  async getSessions() {
    return this.mapper.getSessions(
      await this.get('activity'),
    );
  }

  /**
   * get user's session durations
   * @returns {object[]}
   */
  async getDurations() {
    return this.mapper.getDurations(
      await this.get('average-sessions'),
    );
  }

  /**
   * get user's performance by type of activity
   * @returns {object}
   */
  async getPerformance() {
    return this.mapper.getPerformance(
      await this.get('performance'),
    );
  }

  /**
   * get user's score
   * @returns {number}
   */
  async getScore() {
    return this.mapper.getScore(
      await this.get(),
    );
  }

  /**
   * get user's keyData
   * @returns {object}
   */
  async getKeyData() {
    return this.mapper.getKeyData(
      await this.get(),
    );
  }

}

export default Service;
