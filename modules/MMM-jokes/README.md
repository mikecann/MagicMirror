# Module: MMM-jokes
The `MMM-jokes` module is similar to the complements module but it loads its data from a web API for random jokes

## Using the module

To use this module, add it to the modules array in the `config/config.js` file:
````javascript
modules: [
	{
		module: 'MMM-jokes',
		position: 'lower_third',	// This can be any of the regions.
						// Best results in one of the middle regions like: lower_third
		config: {
		    api: 'icndb' //required
		}
	}
]
````

## Configuration options

The following properties can be configured:


<table width="100%">
	<!-- why, markdown... -->
	<thead>
		<tr>
			<th>Option</th>
			<th width="100%">Description</th>
		</tr>
	<thead>
	<tbody>

	  <tr>
		  <td><code>api</code></td>
		  <td>What API are we going to use?<br>
		 	  <br><b>Possible values:</></b> <code>ticndb</code> (http://www.icndb.com/) ,<code>tambal</code> (http://tambal.azurewebsites.net/)
		 	  <br><b>Default value:</b> <code>ticndb</code>
		  </td>
	  </tr>

		<tr>
			<td><code>updateInterval</code></td>
			<td>How often does the joke have to change? (Milliseconds)<br>
				<br><b>Possible values:</b> <code>1000</code> - <code>86400000</code>
				<br><b>Default value:</b> <code>600000</code> (10 minutes)
			</td>
		</tr>
		<tr>
			<td><code>fadeSpeed</code></td>
			<td>Speed of the update animation. (Milliseconds)<br>
				<br><b>Possible values:</b><code>0</code> - <code>5000</code>
				<br><b>Default value:</b> <code>4000</code> (4 seconds)
			</td>
		</tr>
	</tbody>
</table>
