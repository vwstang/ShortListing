import axios from "axios";

/**
 * Retrieve HTML of website at passed URL
 * @property {string} url = URL of website to retrieve
 * @returns {Promise<string>} HTML, or string "NOT_HTML" if URL could not be accessed
 */
export const getHtmlFromUrl = async (url) => {
  try {
    const result = await axios.get(url);
    console.log(result);
  } catch (err) {
    console.error(err.message);
    console.error("[Occurrence]: controllers.services.scretch.getHtmlFromUrl");
    return "NOT_HTML";
  }
};
