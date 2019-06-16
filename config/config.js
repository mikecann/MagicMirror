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
    // {
    // 	module: "internet-monitor",
    // 	position: "top_center",
    // 	header: "Internet Monitor",
    // 	config: {
    // 		type: "",
    // 		maxTime: 10000,
    // 		updateInterval: 240000,
    // 		verbose: false,
    // 		displayStrength: true,
    // 		displaySpeed: true,
    // 		strengthIconSize: 80,
    // 		maxGaugeScale: 100,
    // 	},
    // },
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
    // {
    // 	module: 'MMM-YrThen',
    // 	position: 'top_right',
    // 	config: {
    // 		location: '1-2820936',
    // 	}
    // },
    {
      module: "alert"
    },
    {
      module: "clock",
      position: "top_left"
    },
    {
      module: "MMM-DailyDilbert",
      position: "bottom_right",
      config: {
        updateInterval: 36000000
      }
    },
    {
      module: "DailyXKCD",
      position: "bottom_right",
      config: {
        invertColors: true,
        showTitle: true,
        showAltText: false
      }
    },

    // {
    //   module: 'MMM-SystemStats',
    //   position: 'top_center', // This can be any of the regions.
    //   // classes: 'small dimmed', // Add your own styling. OPTIONAL.
    //   // header: 'System Stats', // Set the header text OPTIONAL
    //   config: {
    //     updateInterval: 10000, // every 10 seconds
    //     align: 'right', // align labels
    //     //header: 'System Stats', // This is optional
    //     units: 'metric', // default, metric, imperial
    //     view: 'textAndIcon',
    //   },
    // },

    // {
    //   module: "MMM-windy",
    //   position: "fullscreen_above", // this must be set to 'fullscreen_above'
    //   config: {
    //     apiKey: "vOU9f9x6Ve1GHktLvdErnhcu6aIDjS7d",
    //     initLoadDelay: 50 // optional, default is 50 milliseconds
    //   }
    // }

    // {
    //   module: "MMM-AssistantMk2",
    //   position: "top_left",
    //   config: {
    //     useWelcomeMessage: "brief today"
    //   }
    // },

    // {
    // 	module: 'MMM-jokes',
    // 	position: 'bottom',	// This can be any of the regions.
    // 	// Best results in one of the middle regions like: lower_third
    // 	config: {
    // 		api: 'icndb' //required
    // 	}
    // }

    // {
    // 	module: 'MMM-fitbit',
    // 	position: 'top_center',
    // 	config: {
    // 		credentials: {
    // 			client_id: "22CTGR",
    // 			client_secret: "a3d5317d7709ca744eefdc867cea4253"
    // 		},
    // 		resources: [
    // 			'steps',
    // 			'floors',
    // 			'caloriesOut',
    // 			'distance',
    // 			'activeMinutes',
    // 			'sleep',
    // 			'heart'
    // 		],
    // 		update_interval: 60
    // 	}
    // },

    // {
    //   module: "newsfeed",
    //   position: "bottom_bar",
    //   config: {
    //     feeds: [
    //       {
    //         title: "New York Times",
    //         url: "http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml"
    //       }
    //     ],
    //     showSourceTitle: true,
    //     showPublishDate: true
    //   }
    // }
  ]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {
  module.exports = config;
}
