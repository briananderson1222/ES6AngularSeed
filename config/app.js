/**
 * The SOLSTICE object serves as a global app config separate from
 * the application logic.
 */
if (typeof window.SOLSTICE === 'undefined') { window.SOLSTICE = {}; }

window.SOLSTICE = {
	API_URI: 'http://solstice-consulting.com',  // API ENDPOINT URL
	ENDPOINTS: {
		ENDPOINT: '/api/endpoint'
	}
};
