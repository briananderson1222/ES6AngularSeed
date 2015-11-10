/**
 * Constructor for the application environmental configuration.
 * The application gets certain configurable parameters from the external environment.
 * Instantiation reads data from global JS variables and sets instance properties accordingly.
 *
 * The environment module encapsulates the external environment property injection mechanism
 * and abstracts it from the rest of the application.
 *
 */
class Environment {
	constructor() {
		this.setProperty('endpoint', 'MYAPP.ENDPOINTS.ENDPOINT');
		this.setProperty('apiUri', 'MYAPP.API_URI');
	}

	setProperty(name, path) {
		this[name] = readProperty(path);
	}
}

function readProperty(path) {
	const parts = path.split('.');
	let ref = window;
	while (parts.length > 0) {
		const part = parts.shift();
		if (ref.hasOwnProperty(part)) {
			ref = ref[part];
		} else {
			ref = undefined;
			break;
		}
	}

	return ref;
}

export default Environment;
