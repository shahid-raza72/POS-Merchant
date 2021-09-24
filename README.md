# POS-Merchant

This a very simple POS system in which you can show all the listed products in backend to frontend and add them to to billing table and also you can inc the qty and dec the qty.
clone the git repository using command git clone
client folder structure:
	public folder contain the static html and css file.
	src folder contain:
		component folder
			header file
			screen folder
				product list screen file
		app.js file is the main file where all screen and component embedded.
		
server folder structure:
	server file is main file
	seeder file importing data into database
	config folder
		database connection
	model folder
		product schema file
	route folder
		routes to navigate
	controller
		function of product routes describe in it
		
RUN npm install  to install all packages
RUN npm start to client folder 
RUN node server.js to run server in server folder
		
