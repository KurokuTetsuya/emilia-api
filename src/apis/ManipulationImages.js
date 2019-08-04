const { get } = require("superagent");
const version = require("../../package.json").version; // eslint-disable-line prefer-destructuring

/**
 * @class ManipulationImages
 */
class ManipulationImages {
  /**
   * @author Fatir | Sakuta#4350
   * @constructor
   * @param {string} token - The token to pass the authentication api.
   * @param {string} url - Base api url to make a http request.
   */
  constructor(token, url) {
    /**
     * @param {string} image - The image to be used in the returned image results
     * @returns {Promise<Buffer>}
     */
    this.pokemon3000Years = async image => {
      if (typeof image !== "string")
        throw new Error(
          "[EMILIA-API-ERROR] Missing parameter image or that image isn't a string."
        );
      const result = await get(`${url}/api/3000-years/`)
        .set("Authorization", `Bearer ${token}`)
        .set("User-Agent", `Emilia-API Wrapper ${version}`)
        .query({ image });
      return result.body;
    };

    /**
     * @param {string} text - The text to be used in the returned image results
     * @returns {Promise<Buffer>}
     */
    this.achievement = async text => {
      if (typeof text !== "string")
        throw new Error(
          "[EMILIA-API-ERROR] Missing parameter image or that image isn't a string."
        );
      const result = await get(`${url}/api/achievement/`)
        .set("Authorization", `Bearer ${token}`)
        .set("User-Agent", `Emilia-API Wrapper ${version}`)
        .query({ text });
      return result.body;
    };

    /**
     * @param {string} image - The image to be used for the background
     * @returns {Promise<Buffer>}
     */
    this.approved = async image => {
      if (typeof image !== "string")
        throw new Error(
          "[EMILIA-API-ERROR] Missing parameter image or that image isn't a string."
        );
      const result = await get(`${url}/api/approved/`)
        .set("Authorization", `Bearer ${token}`)
        .set("User-Agent", `Emilia-API Wrapper ${version}`)
        .query({ image });
      return result.body;
    };

    /**
     * @param {string} image - The image to be used for the meme
     * @returns {Promise<Buffer>}
     */
    this.beautiful = async image => {
      if (typeof image !== "string")
        throw new Error(
          "[EMILIA-API-ERROR] Missing parameter image or that image isn't a string."
        );
      const result = await get(`${url}/api/beautiful/`)
        .set("Authorization", `Bearer ${token}`)
        .set("User-Agent", `Emilia-API Wrapper ${version}`)
        .query({ image });
      return result.body;
    };

    /**
     * @param {string} image - The image to be used for the background
     * @returns {Promise<Buffer>}
     */
    this.brazzers = async image => {
      if (typeof image !== "string")
        throw new Error(
          "[EMILIA-API-ERROR] Missing parameter image or that image isn't a string."
        );
      const result = await get(`${url}/api/brazzers/`)
        .set("Authorization", `Bearer ${token}`)
        .set("User-Agent", `Emilia-API Wrapper ${version}`)
        .query({ image });
      return result.body;
    };

    /**
     * @param {string} image - The image to be used in the returned image results
     * @param {boolean} silhouetted Whether the image should be silhouetted or no, default to false
     * @returns {Promise<Buffer>}
     */
    this.challenger = async (image, silhouetted = false) => {
      if (typeof image !== "string")
        throw new Error(
          "[EMILIA-API-ERROR] Missing parameter image or that image isn't a string."
        );
      const result = await get(`${url}/api/challenger/`)
        .set("Authorization", `Bearer ${token}`)
        .set("User-Agent", `Emilia-API Wrapper ${version}`)
        .query({ image, silhouetted });
      return result.body;
    };

    /**
     * @param {string} title - The title for poster
     * @param {string} text - The text as the poster description
     * @param {string} image - The image to be used in the returned image results
     * @returns {Promise<Buffer>}
     */
    this.demotivational = async (title, text, image) => {
      if (
        typeof title !== "string" ||
        typeof text !== "string" ||
        typeof image !== "string"
      )
        throw new Error(
          "[EMILIA-API-ERROR] Missing parameter image/title/text or that image/title/text isn't a string."
        );
      const result = await get(`${url}/api/demotivational/`)
        .set("Authorization", `Bearer ${token}`)
        .set("User-Agent", `Emilia-API Wrapper ${version}`)
        .query({ title, text, image });
      return result.body;
    };

    /**
     * @param {string} image - The image to be used in the returned image results
     * @returns {Promise<Buffer>}
     */
    this.fire = async image => {
      if (typeof image !== "string")
        throw new Error(
          "[EMILIA-API-ERROR] Missing parameter image or that image isn't a string."
        );
      const result = await get(`${url}/api/fire/`)
        .set("Authorization", `Bearer ${token}`)
        .set("User-Agent", `Emilia-API Wrapper ${version}`)
        .query({ image });
      return result.body;
    };

    /**
     * @param {string} baseImage - The 1st image
     * @param {string} overlayImage - The 2nd image
     * @returns {Promise<Buffer>}
     */
    this.fusion = async (baseImage, overlayImage) => {
      if (typeof baseImage !== "string" || typeof overlayImage !== "string")
        throw new Error(
          "[EMILIA-API-ERROR] Missing parameter baseImage/overlayImage or that baseImage/overlayImage isn't a string."
        );
      const result = await get(`${url}/api/fusion/`)
        .set("Authorization", `Bearer ${token}`)
        .set("User-Agent", `Emilia-API Wrapper ${version}`)
        .query({ baseImage, overlayImage });
      return result.body;
    };

    /**
     * @param {string} image - The image to be used in the returned image results
     * @returns {Promise<Buffer>}
     */
    this.thugLife = async image => {
      if (typeof image !== "string")
        throw new Error(
          "[EMILIA-API-ERROR] Missing parameter image or that image isn't a string."
        );
      const result = await get(`${url}/api/thug-life/`)
        .set("Authorization", `Bearer ${token}`)
        .set("User-Agent", `Emilia-API Wrapper ${version}`)
        .query({ image });
      return result.body;
    };

    /**
     * @param {string} image - The image to be used in the returned image results
     * @returns {Promise<Buffer>}
     */
    this.toBeContinued = async image => {
      if (typeof image !== "string")
        throw new Error(
          "[EMILIA-API-ERROR] Missing parameter image or that image isn't a string."
        );
      const result = await get(`${url}/api/to-be-continued/`)
        .set("Authorization", `Bearer ${token}`)
        .set("User-Agent", `Emilia-API Wrapper ${version}`)
        .query({ image });
      return result.body;
    };

    /**
     * @param {string} image - The image to be used in the returned image results
     * @returns {Promise<Buffer>}
     */
    this.wanted = async image => {
      if (typeof image !== "string")
        throw new Error(
          "[EMILIA-API-ERROR] Missing parameter image or that image isn't a string."
        );
      const result = await get(`${url}/api/wanted/`)
        .set("Authorization", `Bearer ${token}`)
        .set("User-Agent", `Emilia-API Wrapper ${version}`)
        .query({ image });
      return result.body;
    };
  }
}

module.exports = ManipulationImages;
