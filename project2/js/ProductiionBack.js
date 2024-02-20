const ApiResources = {
	baseUrl: "https://api.football-data.org/v4/",
	standingsEndPoint: "competitions/2000/standings",
	standingUrl: "",
	token: "4f4fc5cc642046548b5f1da34eb969aa",
	matchesEndPoint: "competitions/2000/matches",
	matchesUrl: "",
};

ApiResources.standingUrl = ApiResources.baseUrl + ApiResources.standingsEndPoint;
function getStandingResponse() {
	try {
		const config = {
			headers: {
				"X-Auth-Token": ApiResources.token,
			},
			withCredentials: false,
		};

		// Await the response from the axios.get method
		let response ={
            "filters": {
                "season": "2022"
            },
            "area": {
                "id": 2267,
                "name": "World",
                "code": "INT",
                "flag": null
            },
            "competition": {
                "id": 2000,
                "name": "FIFA World Cup",
                "code": "WC",
                "type": "CUP",
                "emblem": "https://crests.football-data.org/qatar.png"
            },
            "season": {
                "id": 1382,
                "startDate": "2022-11-20",
                "endDate": "2022-12-18",
                "currentMatchday": 8,
                "winner": {
                    "id": 762,
                    "name": "Argentina",
                    "shortName": "Argentina",
                    "tla": "ARG",
                    "crest": "https://crests.football-data.org/762.png",
                    "address": "Viamonte 1366/76 Buenos Aires, Buenos Aires 1053",
                    "website": "http://www.afa.org.ar",
                    "founded": 1893,
                    "clubColors": "Sky Blue / White / Black",
                    "venue": null,
                    "lastUpdated": "2022-05-17T21:09:25Z"
                }
            },
            "standings": [
                {
                    "stage": "GROUP_STAGE",
                    "type": "TOTAL",
                    "group": "Group A",
                    "table": [
                        {
                            "position": 1,
                            "team": {
                                "id": 8601,
                                "name": "Netherlands",
                                "shortName": "Netherlands",
                                "tla": "NED",
                                "crest": "https://crests.football-data.org/8601.svg"
                            },
                            "playedGames": 3,
                            "form": null,
                            "won": 2,
                            "draw": 1,
                            "lost": 0,
                            "points": 7,
                            "goalsFor": 5,
                            "goalsAgainst": 1,
                            "goalDifference": 4
                        },
                        {
                            "position": 2,
                            "team": {
                                "id": 804,
                                "name": "Senegal",
                                "shortName": "Senegal",
                                "tla": "SEN",
                                "crest": "https://crests.football-data.org/senegal.svg"
                            },
                            "playedGames": 3,
                            "form": null,
                            "won": 2,
                            "draw": 0,
                            "lost": 1,
                            "points": 6,
                            "goalsFor": 5,
                            "goalsAgainst": 4,
                            "goalDifference": 1
                        },
                        {
                            "position": 3,
                            "team": {
                                "id": 791,
                                "name": "Ecuador",
                                "shortName": "Ecuador",
                                "tla": "ECU",
                                "crest": "https://crests.football-data.org/791.svg"
                            },
                            "playedGames": 3,
                            "form": null,
                            "won": 1,
                            "draw": 1,
                            "lost": 1,
                            "points": 4,
                            "goalsFor": 4,
                            "goalsAgainst": 3,
                            "goalDifference": 1
                        },
                        {
                            "position": 4,
                            "team": {
                                "id": 8030,
                                "name": "Qatar",
                                "shortName": "Qatar",
                                "tla": "QAT",
                                "crest": "https://crests.football-data.org/8030.svg"
                            },
                            "playedGames": 3,
                            "form": null,
                            "won": 0,
                            "draw": 0,
                            "lost": 3,
                            "points": 0,
                            "goalsFor": 1,
                            "goalsAgainst": 7,
                            "goalDifference": -6
                        }
                    ]
                },
                {
                    "stage": "GROUP_STAGE",
                    "type": "TOTAL",
                    "group": "Group B",
                    "table": [
                        {
                            "position": 1,
                            "team": {
                                "id": 770,
                                "name": "England",
                                "shortName": "England",
                                "tla": "ENG",
                                "crest": "https://crests.football-data.org/770.svg"
                            },
                            "playedGames": 3,
                            "form": null,
                            "won": 2,
                            "draw": 1,
                            "lost": 0,
                            "points": 7,
                            "goalsFor": 9,
                            "goalsAgainst": 2,
                            "goalDifference": 7
                        },
                        {
                            "position": 2,
                            "team": {
                                "id": 771,
                                "name": "United States",
                                "shortName": "USA",
                                "tla": "USA",
                                "crest": "https://crests.football-data.org/usa.svg"
                            },
                            "playedGames": 3,
                            "form": null,
                            "won": 1,
                            "draw": 2,
                            "lost": 0,
                            "points": 5,
                            "goalsFor": 2,
                            "goalsAgainst": 1,
                            "goalDifference": 1
                        },
                        {
                            "position": 3,
                            "team": {
                                "id": 840,
                                "name": "Iran",
                                "shortName": "Iran",
                                "tla": "IRN",
                                "crest": "https://crests.football-data.org/iran.svg"
                            },
                            "playedGames": 3,
                            "form": null,
                            "won": 1,
                            "draw": 0,
                            "lost": 2,
                            "points": 3,
                            "goalsFor": 4,
                            "goalsAgainst": 7,
                            "goalDifference": -3
                        },
                        {
                            "position": 4,
                            "team": {
                                "id": 833,
                                "name": "Wales",
                                "shortName": "Wales",
                                "tla": "WAL",
                                "crest": "https://crests.football-data.org/833.svg"
                            },
                            "playedGames": 3,
                            "form": null,
                            "won": 0,
                            "draw": 1,
                            "lost": 2,
                            "points": 1,
                            "goalsFor": 1,
                            "goalsAgainst": 6,
                            "goalDifference": -5
                        }
                    ]
                },
                {
                    "stage": "GROUP_STAGE",
                    "type": "TOTAL",
                    "group": "Group C",
                    "table": [
                        {
                            "position": 1,
                            "team": {
                                "id": 762,
                                "name": "Argentina",
                                "shortName": "Argentina",
                                "tla": "ARG",
                                "crest": "https://crests.football-data.org/762.png"
                            },
                            "playedGames": 3,
                            "form": null,
                            "won": 2,
                            "draw": 0,
                            "lost": 1,
                            "points": 6,
                            "goalsFor": 5,
                            "goalsAgainst": 2,
                            "goalDifference": 3
                        },
                        {
                            "position": 2,
                            "team": {
                                "id": 794,
                                "name": "Poland",
                                "shortName": "Poland",
                                "tla": "POL",
                                "crest": "https://crests.football-data.org/794.svg"
                            },
                            "playedGames": 3,
                            "form": null,
                            "won": 1,
                            "draw": 1,
                            "lost": 1,
                            "points": 4,
                            "goalsFor": 2,
                            "goalsAgainst": 2,
                            "goalDifference": 0
                        },
                        {
                            "position": 3,
                            "team": {
                                "id": 769,
                                "name": "Mexico",
                                "shortName": "Mexico",
                                "tla": "MEX",
                                "crest": "https://crests.football-data.org/769.svg"
                            },
                            "playedGames": 3,
                            "form": null,
                            "won": 1,
                            "draw": 1,
                            "lost": 1,
                            "points": 4,
                            "goalsFor": 2,
                            "goalsAgainst": 3,
                            "goalDifference": -1
                        },
                        {
                            "position": 4,
                            "team": {
                                "id": 801,
                                "name": "Saudi Arabia",
                                "shortName": "Saudi Arabia",
                                "tla": "KSA",
                                "crest": "https://crests.football-data.org/saudi_arabia.svg"
                            },
                            "playedGames": 3,
                            "form": null,
                            "won": 1,
                            "draw": 0,
                            "lost": 2,
                            "points": 3,
                            "goalsFor": 3,
                            "goalsAgainst": 5,
                            "goalDifference": -2
                        }
                    ]
                },
                {
                    "stage": "GROUP_STAGE",
                    "type": "TOTAL",
                    "group": "Group D",
                    "table": [
                        {
                            "position": 1,
                            "team": {
                                "id": 773,
                                "name": "France",
                                "shortName": "France",
                                "tla": "FRA",
                                "crest": "https://crests.football-data.org/773.svg"
                            },
                            "playedGames": 3,
                            "form": null,
                            "won": 2,
                            "draw": 0,
                            "lost": 1,
                            "points": 6,
                            "goalsFor": 6,
                            "goalsAgainst": 3,
                            "goalDifference": 3
                        },
                        {
                            "position": 2,
                            "team": {
                                "id": 779,
                                "name": "Australia",
                                "shortName": "Australia",
                                "tla": "AUS",
                                "crest": "https://crests.football-data.org/779.svg"
                            },
                            "playedGames": 3,
                            "form": null,
                            "won": 2,
                            "draw": 0,
                            "lost": 1,
                            "points": 6,
                            "goalsFor": 3,
                            "goalsAgainst": 4,
                            "goalDifference": -1
                        },
                        {
                            "position": 3,
                            "team": {
                                "id": 802,
                                "name": "Tunisia",
                                "shortName": "Tunisia",
                                "tla": "TUN",
                                "crest": "https://crests.football-data.org/tunisia.svg"
                            },
                            "playedGames": 3,
                            "form": null,
                            "won": 1,
                            "draw": 1,
                            "lost": 1,
                            "points": 4,
                            "goalsFor": 1,
                            "goalsAgainst": 1,
                            "goalDifference": 0
                        },
                        {
                            "position": 4,
                            "team": {
                                "id": 782,
                                "name": "Denmark",
                                "shortName": "Denmark",
                                "tla": "DEN",
                                "crest": "https://crests.football-data.org/782.svg"
                            },
                            "playedGames": 3,
                            "form": null,
                            "won": 0,
                            "draw": 1,
                            "lost": 2,
                            "points": 1,
                            "goalsFor": 1,
                            "goalsAgainst": 3,
                            "goalDifference": -2
                        }
                    ]
                },
                {
                    "stage": "GROUP_STAGE",
                    "type": "TOTAL",
                    "group": "Group E",
                    "table": [
                        {
                            "position": 1,
                            "team": {
                                "id": 766,
                                "name": "Japan",
                                "shortName": "Japan",
                                "tla": "JPN",
                                "crest": "https://crests.football-data.org/766.svg"
                            },
                            "playedGames": 3,
                            "form": null,
                            "won": 2,
                            "draw": 0,
                            "lost": 1,
                            "points": 6,
                            "goalsFor": 4,
                            "goalsAgainst": 3,
                            "goalDifference": 1
                        },
                        {
                            "position": 2,
                            "team": {
                                "id": 760,
                                "name": "Spain",
                                "shortName": "Spain",
                                "tla": "ESP",
                                "crest": "https://crests.football-data.org/760.svg"
                            },
                            "playedGames": 3,
                            "form": null,
                            "won": 1,
                            "draw": 1,
                            "lost": 1,
                            "points": 4,
                            "goalsFor": 9,
                            "goalsAgainst": 3,
                            "goalDifference": 6
                        },
                        {
                            "position": 3,
                            "team": {
                                "id": 759,
                                "name": "Germany",
                                "shortName": "Germany",
                                "tla": "GER",
                                "crest": "https://crests.football-data.org/759.svg"
                            },
                            "playedGames": 3,
                            "form": null,
                            "won": 1,
                            "draw": 1,
                            "lost": 1,
                            "points": 4,
                            "goalsFor": 6,
                            "goalsAgainst": 5,
                            "goalDifference": 1
                        },
                        {
                            "position": 4,
                            "team": {
                                "id": 793,
                                "name": "Costa Rica",
                                "shortName": "Costa Rica",
                                "tla": "CRC",
                                "crest": "https://crests.football-data.org/costa_rica.svg"
                            },
                            "playedGames": 3,
                            "form": null,
                            "won": 1,
                            "draw": 0,
                            "lost": 2,
                            "points": 3,
                            "goalsFor": 3,
                            "goalsAgainst": 11,
                            "goalDifference": -8
                        }
                    ]
                },
                {
                    "stage": "GROUP_STAGE",
                    "type": "TOTAL",
                    "group": "Group F",
                    "table": [
                        {
                            "position": 1,
                            "team": {
                                "id": 815,
                                "name": "Morocco",
                                "shortName": "Morocco",
                                "tla": "MAR",
                                "crest": "https://crests.football-data.org/morocco.svg"
                            },
                            "playedGames": 3,
                            "form": null,
                            "won": 2,
                            "draw": 1,
                            "lost": 0,
                            "points": 7,
                            "goalsFor": 4,
                            "goalsAgainst": 1,
                            "goalDifference": 3
                        },
                        {
                            "position": 2,
                            "team": {
                                "id": 799,
                                "name": "Croatia",
                                "shortName": "Croatia",
                                "tla": "CRO",
                                "crest": "https://crests.football-data.org/799.svg"
                            },
                            "playedGames": 3,
                            "form": null,
                            "won": 1,
                            "draw": 2,
                            "lost": 0,
                            "points": 5,
                            "goalsFor": 4,
                            "goalsAgainst": 1,
                            "goalDifference": 3
                        },
                        {
                            "position": 3,
                            "team": {
                                "id": 805,
                                "name": "Belgium",
                                "shortName": "Belgium",
                                "tla": "BEL",
                                "crest": "https://crests.football-data.org/805.svg"
                            },
                            "playedGames": 3,
                            "form": null,
                            "won": 1,
                            "draw": 1,
                            "lost": 1,
                            "points": 4,
                            "goalsFor": 1,
                            "goalsAgainst": 2,
                            "goalDifference": -1
                        },
                        {
                            "position": 4,
                            "team": {
                                "id": 828,
                                "name": "Canada",
                                "shortName": "Canada",
                                "tla": "CAN",
                                "crest": "https://crests.football-data.org/canada.svg"
                            },
                            "playedGames": 3,
                            "form": null,
                            "won": 0,
                            "draw": 0,
                            "lost": 3,
                            "points": 0,
                            "goalsFor": 2,
                            "goalsAgainst": 7,
                            "goalDifference": -5
                        }
                    ]
                },
                {
                    "stage": "GROUP_STAGE",
                    "type": "TOTAL",
                    "group": "Group G",
                    "table": [
                        {
                            "position": 1,
                            "team": {
                                "id": 764,
                                "name": "Brazil",
                                "shortName": "Brazil",
                                "tla": "BRA",
                                "crest": "https://crests.football-data.org/764.svg"
                            },
                            "playedGames": 3,
                            "form": null,
                            "won": 2,
                            "draw": 0,
                            "lost": 1,
                            "points": 6,
                            "goalsFor": 3,
                            "goalsAgainst": 1,
                            "goalDifference": 2
                        },
                        {
                            "position": 2,
                            "team": {
                                "id": 788,
                                "name": "Switzerland",
                                "shortName": "Switzerland",
                                "tla": "SUI",
                                "crest": "https://crests.football-data.org/788.svg"
                            },
                            "playedGames": 3,
                            "form": null,
                            "won": 2,
                            "draw": 0,
                            "lost": 1,
                            "points": 6,
                            "goalsFor": 4,
                            "goalsAgainst": 3,
                            "goalDifference": 1
                        },
                        {
                            "position": 3,
                            "team": {
                                "id": 781,
                                "name": "Cameroon",
                                "shortName": "Cameroon",
                                "tla": "CMR",
                                "crest": "https://crests.football-data.org/cameroon.svg"
                            },
                            "playedGames": 3,
                            "form": null,
                            "won": 1,
                            "draw": 1,
                            "lost": 1,
                            "points": 4,
                            "goalsFor": 4,
                            "goalsAgainst": 4,
                            "goalDifference": 0
                        },
                        {
                            "position": 4,
                            "team": {
                                "id": 780,
                                "name": "Serbia",
                                "shortName": "Serbia",
                                "tla": "SRB",
                                "crest": "https://crests.football-data.org/780.svg"
                            },
                            "playedGames": 3,
                            "form": null,
                            "won": 0,
                            "draw": 1,
                            "lost": 2,
                            "points": 1,
                            "goalsFor": 5,
                            "goalsAgainst": 8,
                            "goalDifference": -3
                        }
                    ]
                },
                {
                    "stage": "GROUP_STAGE",
                    "type": "TOTAL",
                    "group": "Group H",
                    "table": [
                        {
                            "position": 1,
                            "team": {
                                "id": 765,
                                "name": "Portugal",
                                "shortName": "Portugal",
                                "tla": "POR",
                                "crest": "https://crests.football-data.org/765.svg"
                            },
                            "playedGames": 3,
                            "form": null,
                            "won": 2,
                            "draw": 0,
                            "lost": 1,
                            "points": 6,
                            "goalsFor": 6,
                            "goalsAgainst": 4,
                            "goalDifference": 2
                        },
                        {
                            "position": 2,
                            "team": {
                                "id": 772,
                                "name": "South Korea",
                                "shortName": "Korea Republic",
                                "tla": "KOR",
                                "crest": "https://crests.football-data.org/772.png"
                            },
                            "playedGames": 3,
                            "form": null,
                            "won": 1,
                            "draw": 1,
                            "lost": 1,
                            "points": 4,
                            "goalsFor": 4,
                            "goalsAgainst": 4,
                            "goalDifference": 0
                        },
                        {
                            "position": 3,
                            "team": {
                                "id": 758,
                                "name": "Uruguay",
                                "shortName": "Uruguay",
                                "tla": "URU",
                                "crest": "https://crests.football-data.org/758.svg"
                            },
                            "playedGames": 3,
                            "form": null,
                            "won": 1,
                            "draw": 1,
                            "lost": 1,
                            "points": 4,
                            "goalsFor": 2,
                            "goalsAgainst": 2,
                            "goalDifference": 0
                        },
                        {
                            "position": 4,
                            "team": {
                                "id": 763,
                                "name": "Ghana",
                                "shortName": "Ghana",
                                "tla": "GHA",
                                "crest": "https://crests.football-data.org/ghana.svg"
                            },
                            "playedGames": 3,
                            "form": null,
                            "won": 1,
                            "draw": 0,
                            "lost": 2,
                            "points": 3,
                            "goalsFor": 5,
                            "goalsAgainst": 7,
                            "goalDifference": -2
                        }
                    ]
                }
            ]
        }

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
	let standings = getStandingResponse();

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
function getMatchesResponse(stage) {
	try {
		const config = {
			headers: {
				"X-Auth-Token": ApiResources.token,
			},
			withCredentials: false,
		};

		// Await the response from the axios.get method
		let fullUrl = ApiResources.matchesUrl + `?stage=${stage}`;
  let response=""; 
        if(stage===obStages.group) response=""; 
        if(stage===obStages.quarter) response=""; 
        if(stage===obStages.semiFinal) response=""; 
        if(stage===obStages.third) response=""; 
        if(stage===obStages.final) response=""; 
;

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

	// Log the selected value to the console (you can do whatever you want with it)
	if (obStages[selectedValue]) {
		fillMatchesDateToDom(obStages[selectedValue]);
	} else {
		fillMatchesDateToDom();
	}

	selectStage.blur();

	setTimeout(() => {
		window.matches.scrollIntoView({ behavior: "smooth" });
	}, 200);
});

// initial Load :
fillMatchesDateToDom();
fillStandingToDom();
