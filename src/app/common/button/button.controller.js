class ButtonController {
	constructor() {
		'ngInject';
		this.name = 'button';
		this.clicks = 0;
	}

	handleClicks() {
		if (this.clicks === 1) {
			this.visible = true;
			return;
		}

		this.clicks++;
	}
}

export default ButtonController;
