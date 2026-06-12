class BaseService {
    #client;

  constructor(client) {
    this.#client = client;
  }

  get client() {
    return this.#client;
  }

  /**
   * Validates API response for errors and throws if found.
   * 
   * @param {Object} response - The API response object
   * @param {Object} options - Optional configuration
   * @param {boolean} options.validateStructure - If true, validates response.data exists before checking errors
   * @throws {Error} If response.data.errors exists or (if validateStructure=true) if response.data is missing
   */
  throwIfErrors(response, options = {}) {
    const { validateStructure = false } = options;

    if (validateStructure) {
      if (!response || !response.data) {
        throw new Error("Invalid response format: 'data' field is missing");
      }
    }

    if (response && response.data && response.data.errors) {
      throw new Error(`API Error: ${JSON.stringify(response.data.errors)}`);
    }
  }
}

module.exports = BaseService;