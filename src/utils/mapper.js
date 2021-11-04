export default class Mapper {

  /**
   * get User info
   * @param {object} json 
   * @returns {object}
   */
  getUser(json) {
    return json.data.userInfos;
  }

  /**
   * get user's sessions
   * @param {object} json 
   * @returns {object[]}
   */
  getSessions(json) {
    return json.data.sessions;
  }

  /**
   * get user's session durations
   * @param {object} json 
   * @returns {object[]}
   */
  getDurations(json) {
    return json.data.sessions;
  }

  /**
   * get user's performance by type of activity
   * @param {object} json 
   * @returns {object}
   */
  getPerformance(json) {
    return {
      data: json.data.data,
      kind: json.data.kind,
    };
  }

  /**
   * get user's score
   * @param {object} json 
   * @returns {number}
   */
  getScore(json) {
    return json.data.score;
  }

  /**
   * get user's keyData
   * @param {object} json 
   * @returns {object}
   */
  getKeyData(json) {
    return json.data.keyData;
  }

};
