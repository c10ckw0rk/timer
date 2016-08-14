

class Timer {

	constructor(options) {
		this.options = options;
	}

	getCounter() {

		const currentTime = new Date();
		const orderDiff = [];
		let orderTime = [];

		const convertToLeadingZero = (val) => {

			val = val.toString();
			return val.length === 1 ? '0' + val : val;

		};

		for (let i = 0; i < 7; i++) {

			const date = new Date();

			Date.UTC();

			date.setDate(date.getDate() + i);
			date.setHours(this.options.hours);
			date.setMinutes(0);
			date.setSeconds(0);

			if (date.getDay() !== 6 && date.getDay() !== 0) {

				const diff = date.getTime() - currentTime.getTime();

				if (diff > 0) {
					orderDiff.push(date.getTime() - currentTime.getTime());
					orderTime.push({date: date, diff: date.getTime() - currentTime.getTime()});
				}

			}

		}

		orderTime = orderTime.filter((item) => {
			return Math.min.apply(Math, orderDiff) === item.diff;
		});

		const dateDiff = new Date(orderTime[0].date.getTime() - currentTime.getTime());
		const adjustment = - 10;
		const extraHours = (dateDiff.getDate() - 1) * 24;

		return {
			timer: convertToLeadingZero((dateDiff.getHours() + adjustment) + extraHours) + ':' + convertToLeadingZero(dateDiff.getMinutes()) + ':' + convertToLeadingZero(dateDiff.getSeconds()),
			tomorrow: currentTime.getHours() > this.options.hours,
			day: currentTime.getDay()
		};

	}

}
