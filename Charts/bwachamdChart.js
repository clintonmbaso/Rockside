       google.charts.load('current', {packages:["orgchart"]});
       google.charts.setOnLoadCallback(drawChart);
   
       function drawChart() {
         var data = new google.visualization.DataTable();
         data.addColumn('string', 'Name');
         data.addColumn('string', 'Manager');
         data.addColumn('string', 'ToolTip');
         data.addColumn('string', 'ImageURL');
   
         // Add data rows
         data.addRows([

         // Pastor
         [{v:'BMD Pastor', f:'<div class="node" onclick="showDetails(\'Pastor Bright Hamuntili\', \'Kabwe Central Mission District\', \'images/BMD/BMDPastor.jpg\', \'+260977667747\')"><img src="images/BMD/BMDPastor.jpg" class="node-image"><div class="node-label">BMD Pastor</div></div>'}, '', 'BMD Pastor', 'images/BMD/BMDPastor.jpg'],
            
         // President
   		[{v:'President', f:'<div class="node" onclick="showDetails(\'William\', \'SDA Church\', \'images/BMD/BMDPresident.jpg\', \'+260000000000\')"><img src="images/BMD/BMDPresident.jpg" class="node-image"><div class="node-label">President</div></div>'}, 'BMD Pastor', 'BMD President', 'images/BMD/BMDPresident.jpg'],
   		
   		// Vice President
   		[{v:'Vice President', f:'<div class="node" onclick="showDetails(\'Name\', \'Kabwe Central SDA Church\', \'images/BMD/PresidentA.jpg\', \'+260000000000\')"><img src="images/BMD/PresidentA.jpg" class="node-image"><div class="node-label">Vice President</div></div>'}, 'President', 'BMD-Zone A Vice President', 'images/BMD/PresidentA.jpg'],

   		// Secretary
   		[{v:'Secretary', f:'<div class="node" onclick="showDetails(\'Ketty Kaunda Kalobwe\', \'Kabwe Central SDA Church\', \'images/BMD/BMDSecretary.jpg\', \'+260971831886\')"><img src="images/BMD/BMDSecretary.jpg" class="node-image"><div class="node-label">Secretary</div></div>'}, 'Vice President', 'BMD - Secretary', 'images/BMD/BMDSecretary.jpg'],

   		// Treasurer
   		[{v:'Treasurer', f:'<div class="node" onclick="showDetails(\'Name\', \'Kabwe Central SDA Church\', \'images/BMD/BMDTreasurer.jpg\', \'+260000000000\')"><img src="images/BMD/BMDTreasurer.jpg" class="node-image"><div class="node-label">Treasurer</div></div>'}, 'Vice President', 'BMD - Treasurer', 'images/BMD/BMDTreasurer.jpg'],

   		// Parliamentarian
   		[{v:'Parliamentarian', f:'<div class="node" onclick="showDetails(\'Name\', \'Kabwe Central SDA Church\', \'images/BMD/BMDParliamentarian.jpg\', \'+260000000000\')"><img src="images/BMD/BMDParliamentarian.jpg" class="node-image"><div class="node-label">Parliamentarian</div></div>'}, 'Vice President', 'BMD-Zone A Parliamentarian', 'images/BMD/BMDParliamentarian.jpg'],

   		// Chaplain
   		[{v:'Chaplain', f:'<div class="node" onclick="showDetails(\'Name\', \'Kabwe Central SDA Church\', \'images/BMD/BMDChaplain.jpg\', \'+260000000000\')"><img src="images/BMD/BMDChaplain.jpg" class="node-image"><div class="node-label">Chaplain</div></div>'}, 'Vice President', 'BMD - Chaplain', 'images/BMD/BMDChaplain.jpg'],

   		  
   		// Ambassador Ministry
   		[{v:'Ambassador', f:'<div class="node" onclick="showDetails(\'Name\', \'Kabwe Central SDA Church\', \'images/BMD/BMDAmbassador.jpg\', \'+260000000000\')"><img src="images/BMD/BMDAmbassador.jpg" class="node-image"><div class="node-label">Ambassador</div></div>'}, 'Secretary', 'BMD - Ambassador', 'images/BMD/BMDAmbassador.jpg'],
   		[{v:'Vice Ambassador', f:'<div class="node" onclick="showDetails(\'Name\', \'Kabwe Central SDA Church\', \'images/BMD/BMDViceAmbassador.jpg\', \'+260000000000\')"><img src="images/BMD/BMDViceAmbassador.jpg" class="node-image"><div class="node-label">Vice Ambassador</div></div>'}, 'Ambassador', 'BMD - Vice Ambassador', 'images/BMD/BMDViceAmbassador.jpg'],

   		// Pathfinder Ministry
   		[{v:'Pathfinder', f:'<div class="node" onclick="showDetails(\'Name\', \'Kabwe Central SDA Church\', \'images/BMD/BMDPathfinder.jpg\', \'+260000000000\')"><img src="images/BMD/BMDPathfinder.jpg" class="node-image"><div class="node-label">Pathfinder</div></div>'}, 'Secretary', 'BMD - Pathfinder', 'images/BMD/BMDPathfinder.jpg'],
   		[{v:'Vice Pathfinder', f:'<div class="node" onclick="showDetails(\'Name\', \'Kabwe Central SDA Church\', \'images/BMD/BMDVicePathfinder.jpg\', \'+260000000000\')"><img src="images/BMD/BMDVicePathfinder.jpg" class="node-image"><div class="node-label">Vice Pathfinder</div></div>'}, 'Pathfinder', 'BMD - Vice Pathfinder', 'images/BMD/BMDVicePathfinder.jpg'],

   		// Adventurer Ministry
   		[{v:'Adventurer', f:'<div class="node" onclick="showDetails(\'Name\', \'Kabwe Central SDA Church\', \'images/BMD/BMDAdventurer.jpg\', \'+260000000000\')"><img src="images/BMD/BMDAdventurer.jpg" class="node-image"><div class="node-label">Adventurer</div></div>'}, 'Secretary', 'BMD - Adventurer', 'images/BMD/BMDAdventurer.jpg'],
   		[{v:'Vice Adventurer', f:'<div class="node" onclick="showDetails(\'Name\', \'Kabwe Central SDA Church\', \'images/BMD/BMDViceAdventurer.jpg\', \'+260000000000\')"><img src="images/BMD/BMDViceAdventurer.jpg" class="node-image"><div class="node-label">Vice Adventurer</div></div>'}, 'Adventurer', 'BMD - Vice Adventurer', 'images/BMD/BMDViceAdventurer.jpg'],

   		// Communication
   		[{v:'Communication', f:'<div class="node" onclick="showDetails(\'Name\', \'Kabwe Central SDA Church\', \'images/BMD/BMDCommunication.jpg\', \'+260000000000\')"><img src="images/BMD/BMDCommunication.jpg" class="node-image"><div class="node-label">Communication</div></div>'}, 'Secretary', 'BMD - Communication', 'images/BMD/BMDCommunication.jpg'],

   		// Education
   		[{v:'Education', f:'<div class="node" onclick="showDetails(\'Mupeta Ilard\', \'SDA Church\', \'images/BMD/BMDEducation.jpg\', \'+260979671498\')"><img src="images/BMD/BMDEducation.jpg" class="node-image"><div class="node-label">Education</div></div>'}, 'Secretary', 'BMD - Education', 'images/BMD/BMDEducation.jpg'],
   		[{v:'Education Secretary', f:'<div class="node" onclick="showDetails(\'Name\', \'SDA Church\', \'images/BMD/BMDEducationSecretary.jpg\', \'+260000000000\')"><img src="images/BMD/BMDEducationSecretary.jpg" class="node-image"><div class="node-label">Education Secretary</div></div>'}, 'Education', 'BMD - Education Secretary', 'images/BMD/BMDEducationSecretary.jpg'],

   		// Field Marshal
   		[{v:'Field Marshal', f:'<div class="node" onclick="showDetails(\'Name\', \'SDA Church\', \'images/BMD/BMDFieldMarshal.jpg\', \'+260000000000\')"><img src="images/BMD/BMDFieldMarshal.jpg" class="node-image"><div class="node-label">Field Marshal</div></div>'}, 'Pathfinder', 'BMD - Field Marshal', 'images/BMD/BMDFieldMarshal.jpg'],

   		// Music Director
   		[{v:'Music Director', f:'<div class="node" onclick="showDetails(\'Name\', \'SDA Church\', \'images/BMD/BMDMusicDirector.jpg\', \'+260000000000\')"><img src="images/BMD/BMDMusicDirector.jpg" class="node-image"><div class="node-label">Music Director</div></div>'}, 'Ambassador', 'BMD - Music Director', 'images/BMD/BMDMusicDirector.jpg'],

   		// Planning / Projects
   		[{v:'Planning/Projects', f:'<div class="node" onclick="showDetails(\'Hirah Malambo\', \'Kabwe Central SDA Church\', \'images/BMD/BMDProjects.jpg\', \'+260973801744\')"><img src="images/BMD/BMDProjects.jpg" class="node-image"><div class="node-label">Planning/Projects</div></div>'}, 'President', 'BMD - Planning and Project Coordinator', 'images/BMD/BMDProjects.jpg'],


         
           // ... (similar lines for other positions)
         ]);
   
         var chart = new google.visualization.OrgChart(document.getElementById('chart_div'));
         chart.draw(data, {allowHtml:true});
       }