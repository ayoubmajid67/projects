const ApiResources = {
	baseUrl: "https://api.football-data.org/v4/",
	standingsEndPoint: "competitions/2000/standings",
	standingUrl: "",
	token: "4f4fc5cc642046548b5f1da34eb969aa",
	matchesEndPoint: "competitions/2000/matches",
	matchesUrl: "",
};

ApiResources.standingUrl = ApiResources.baseUrl + ApiResources.standingsEndPoint;
async function getStandingResponse() {
	try {
		const config = {
			headers: {
				"X-Auth-Token": ApiResources.token,
			},
		};

		// Await the response from the axios.get method
		let response = await axios.get(ApiResources.standingUrl, config);

		return response.data.standings;
	} catch (error) {
		if (error.response) {
			// The request was made and the server responded with a status code
			console.error("Server responded with status:", error.response.status);
			console.error("Response data:", error.response.data);
		} else if (error.request) {
			// The request was made but no response was received
			console.error("No response received:", error.request);
		} else {
			// Something else happened while setting up the request
			console.error("Error setting up the request:", error.message);
		}
	}
}

function getGroupHtmlContent(standing) {
	let TableContent = `<div class="box">
	<div class="groupTitle">
		<h3>${standing.group}</h3>
	</div>
	<table>
					   <thead>
						   <td>Team</td>
						   <td id="won">W</td>
						   <td id="lost">L</td>
						   <td id="draw">D</td>
						   <td id="points">P<span>1s</span></td>
					   </thead>
	`;

	for (team of standing.table) {
		TableContent += `
	   <tr>
						   <td class="TeamContainer">
							   <img src="${team.team.crest}" alt="${team.team.name} Flag Img" class="teamImg  " />
							   <h4>${team.team.tla}</h4>
						   </td>
						   <td class="won">${team.won}</td>
						   <td class="lost">${team.lost}</td>
						   <td class="draw">${team.draw}</td>
						   <td class="points">${team.points}</td>
	   </tr>
	   `;
	}
	TableContent += `</table></div>`;
	return TableContent;
}

async function fillStandingToDom() {
	let standings = await getStandingResponse();

	let TableContent = "";

	for (let standing of standings) {
		TableContent += getGroupHtmlContent(standing);
	}
	let standingDom = document.querySelector(".standing");
	standingDom.innerHTML = "";
	standingDom.innerHTML = TableContent;
}

// start matches logic :
let obStages = {
	group: "GROUP_STAGE",
	quarter: "QUARTER_FINALS",
	semiFinal: "SEMI_FINALS",
	third: "THIRD_PLACE",
	final: "FINAL",
};

ApiResources.matchesUrl = ApiResources.baseUrl + ApiResources.matchesEndPoint;
async function getMatchesResponse(stage) {
	try {
		const config = {
			headers: {
				"X-Auth-Token": ApiResources.token,
			},
		};

		// Await the response from the axios.get method
		let fullUrl = ApiResources.matchesUrl + `?stage=${stage}`;
		let response = await axios.get(fullUrl, config);

		return response.data.matches;
	} catch (error) {
		if (error.response) {
			// The request was made and the server responded with a status code
			console.error("Server responded with status:", error.response.status);
			console.error("Response data:", error.response.data);
		} else if (error.request) {
			// The request was made but no response was received
			console.error("No response received:", error.request);
		} else {
			// Something else happened while setting up the request
			console.error("Error setting up the request:", error.message);
		}
	}
}
function getMatchHtmlContent(match) {
	let matchContent = `
<div class="matchbox">

  <div class="homeTeam ${match.score.winner == "AWAY_TEAM" ? "loser" : "winner"}">
	   <div class="content">
		   <img src="${match.homeTeam.crest}" alt="${match.homeTeam.name} Flag Img" />
		   <h4 class="teamName">${match.homeTeam.tla}</h4>
	   </div>
   </div>
   
   <div class="resultsContainer">
	   <h1 class="homePoints">${match.score.fullTime.home}</h1>
	   <div class="result">
		   <h4 class="groupName">${match.group ? match.group : ""}</h4>
		   <h1>X</h1>
		   <h4 class="mathDate">${match.utcDate.substr(0, 10)}<span> ${match.utcDate.substr(11, 5)}</span></h4>
	   </div>
	   <h1 class="awayPoints">${match.score.fullTime.away}</h1>
	</div>
	
	<div class="awayTeam ${match.score.winner == "AWAY_TEAM" ? "winner" : "loser"}">
	   <div class="content">
			   <img src="${match.awayTeam.crest}" alt="${match.awayTeam.name} Flag Img" />
			   <h4 class="teamName">${match.awayTeam.tla}</h4>
	   </div>
	</div>
	 
</div>
	`;

	return matchContent;
}
async function fillMatchesDateToDom(stage = obStages.group) {
	let matches = await getMatchesResponse(stage);

	let matchesContent = "";

	for (let match of matches) {
		matchesContent += getMatchHtmlContent(match);
	}

	let matchParentDom = document.querySelector(".matches");

	matchParentDom.innerHTML = "";

	matchParentDom.innerHTML = matchesContent;
}
// Get a reference to the select element
const selectStage = document.getElementById("tournamentStage");

selectStage.addEventListener("change", function (event) {
	// Get the selected option's value
	const selectedValue = event.target.value;

	selectStage.blur();
	window.matches.scrollIntoView({ behavior: 'smooth', block: 'start' });
	// Log the selected value to the console (you can do whatever you want with it)
	if (obStages[selectedValue]) {
		fillMatchesDateToDom(obStages[selectedValue]);
	} else {
		fillMatchesDateToDom();
	}
});

// initial Load :
 fillMatchesDateToDom();
fillStandingToDom();
