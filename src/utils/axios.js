const axios = require("axios");

const apiCall = () => {
	return new Promise((resolve, reject) => {
		axios
			.get("https://dog.ceo/api/breeds/list/all")
			.then(function (response) {
				if (response.status === 200) {
					resolve(response.data.message);
				} else {
					reject(response);
				}
			})
			.catch(function (error) {
				reject(error);
			});
	});
};

export default apiCall;
