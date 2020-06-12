// Global
import axios from "axios";

// API functions
export default {
	// Google search
	search: (searchFor) => axios.get("/google/" + searchFor),
	// Save book to database
	save: (bookData) => axios.post("/db/", bookData),
};
