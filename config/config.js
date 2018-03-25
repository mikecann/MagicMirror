/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "localhost", // Address to listen on, can be:
	// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	// - another specific IPv4/6 to listen on a specific interface
	// - "", "0.0.0.0", "::" to listen on any interface
	// Default, when address config is left out, is "localhost"
	port: 8080,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], // Set [] to allow all IP addresses
	// or add a specific IPv4 of 192.168.1.5 :
	// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	language: "en",
	timeFormat: 24,
	units: "metric",

	modules: [
		{
			module: "internet-monitor",
			position: "top_center",
			header: "Internet Monitor",
			config:{
				type: "",
				maxTime: 10000,
				updateInterval: 240000,
				verbose: false,
				displayStrength: true,
				displaySpeed: true,
				strengthIconSize: 80,
				maxGaugeScale: 100,
			},
		},
		// {
		// 	module: "MMM-SystemStats",
		// 	position: "top_center", // This can be any of the regions.
		// 	classes: "small dimmed", // Add your own styling. Optional.
		// 	config: {
		// 		updateInterval: 10000,
		// 		animationSpeed: 0,
		// 		align: "right", // align labels
		// 		//header: 'System Stats', // This is optional
		// 	},
		// },
		{
			module: "mmm-weatherchart",
			position: "bottom_left", // this can be any of the regions
			config: {
				country: "Australia", // as determined above
				area: "Western_Australia", // as determined above
				city: "South_Perth", // as determined above
				updateInterval: 60 * 60 * 1000, // update every hour
				hideBorder: true, // whether or not a border with city name should be shown
				negativeImage: true, // whether or not the default white image should be inverted
				mmDirectory: "./" // required for caching; adjust if it differs
			}
		},
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left"
		},
		{
			module: "DailyXKCD",
			position: "top_left",
			config: {
				invertColors: true,
				title: true,
				altText: true
			}
		},
		// {
		// 	module: "compliments",
		// 	position: "lower_third"
		// },
		{
			module: "currentweather",
			position: "top_right",
			config: {
				location: "New York",
				locationID: "",  //ID from http://www.openweathermap.org/help/city_list.txt
				appid: "YOUR_OPENWEATHER_API_KEY"
			}
		},
		{
			module: "weatherforecast",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				location: "New York",
				locationID: "5128581",  //ID from http://www.openweathermap.org/help/city_list.txt
				appid: "YOUR_OPENWEATHER_API_KEY"
			}
		},
		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "New York Times",
						url: "http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml"
					}
				],
				showSourceTitle: true,
				showPublishDate: true
			}
		},
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") { module.exports = config; }
