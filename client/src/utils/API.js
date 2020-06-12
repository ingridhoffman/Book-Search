// Global
import axios from "axios";

// API functions
export default {
	// Google search
	search: (searchFor) => {
		return axios.get("/google/" + searchFor);
	},
};
