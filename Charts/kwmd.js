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
         [{v:'KEMD Pastor', f:'<div class="node" onclick="showDetails(\'Pastor Peter Tembo\', \'Kabwe West Mission District\', \'images/executive/KWMD Pastor.jpg\', \'+260977993025\')"><img src="images/executive/KEMD Pastor.jpg" class="node-image"><div class="node-label">KEMD Pastor</div></div>'}, '', 'KEMD Pastor', 'images/executive/KEMD Pastor.jpg'],
            
         // President
   		[{v:'President', f:'<div class="node" onclick="showDetails(\'Morris Chibale\', \'Lukanga Main SDA Church\', \'images/executive/KWMDPresident.jpg\', \'+260977510189\')"><img src="images/executive/KEMDPresident.jpg" class="node-image"><div class="node-label">President</div></div>'}, 'KEMD Pastor', 'KEMD President', 'images/executive/KEMDPresident.jpg'],
   		
   		// Vice President
   		[{v:'Vice President A', f:'<div class="node" onclick="showDetails(\'Mwangelwa Siliimi\', \'Kohima SDA Church\', \'images/executive/PresidentA.jpg\', \'+260770173321\')"><img src="images/executive/PresidentA.jpg" class="node-image"><div class="node-label">Vice President A</div></div>'}, 'President', 'KEMD-Zone A Vice President', 'images/executive/PresidentA.jpg'],
   		[{v:'Vice President B', f:'<div class="node" onclick="showDetails(\'Jere Beatrice\', \'Rockside SDA Church\', \'images/executive/PresidentB.jpg\', \'+260967809417\')"><img src="images/executive/PresidentB.jpg" class="node-image"><div class="node-label">Vice President B</div></div>'}, 'President', 'KEMD-Zone B Vice President', 'images/executive/PresidentB.jpg'],
   		
   		// Secretary
   		[{v:'Secretary A', f:'<div class="node" onclick="showDetails(\'Loveness Mwanza\', \'SDA Church\', \'images/executive/SecretaryA.jpg\', \'+260972411610\')"><img src="images/executive/SecretaryA.jpg" class="node-image"><div class="node-label">Secretary A</div></div>'}, 'Vice President A', 'KEMD-Zone A Secretary', 'images/executive/SecretaryA.jpg'],
   		[{v:'Secretary B', f:'<div class="node" onclick="showDetails(\'Emma\', \'Luanshimba SDA Church\', \'images/executive/SecretaryB.jpg\', \'+260763673672\')"><img src="images/executive/SecretaryB.jpg" class="node-image"><div class="node-label">Secretary B</div></div>'}, 'Vice President B', 'KEMD-Zone B Secretary', 'images/executive/SecretaryB.jpg'],

   		// Treasurer
   		[{v:'Treasurer A', f:'<div class="node" onclick="showDetails(\'Elizabeth Choolwe Maila\', \'SDA Church\', \'images/executive/TreasurerA.jpg\', \'+260978858087\')"><img src="images/executive/TreasurerA.jpg" class="node-image"><div class="node-label">Treasurer A</div></div>'}, 'Vice President A', 'KEMD-Zone A Treasurer', 'images/executive/TreasurerA.jpg'],
   		[{v:'Treasurer B', f:'<div class="node" onclick="showDetails(\'Muuka Bridget\', \'Rockside SDA Church\', \'images/executive/TreasurerB.jpg\', \'+260967703883\')"><img src="images/executive/TreasurerB.jpg" class="node-image"><div class="node-label">Treasurer B</div></div>'}, 'Vice President B', 'KEMD-Zone B Treasurer', 'images/executive/TreasurerB.jpg'],

   		// Parliamentarian
   		[{v:'Parliamentarian A', f:'<div class="node" onclick="showDetails(\'Morris Chibale\', \'Lukanga Main SDA Church\', \'images/executive/ParliamentarianA.jpg\', \'+260977510189\')"><img src="images/executive/ParliamentarianA.jpg" class="node-image"><div class="node-label">Parliamentarian A</div></div>'}, 'Vice President A', 'KEMD-Zone A Parliamentarian', 'images/executive/ParliamentarianA.jpg'],
   		[{v:'Parliamentarian B', f:'<div class="node" onclick="showDetails(\'Marvin\', \'Muteteshi SDA Church\', \'images/executive/ParliamentarianB.jpg\', \'+260000000000\')"><img src="images/executive/ParliamentarianB.jpg" class="node-image"><div class="node-label">Parliamentarian B</div></div>'}, 'Vice President B', 'KEMD-Zone B Parliamentarian', 'images/executive/ParliamentarianB.jpg'],
   		  
   		// Chaplain
   		[{v:'Chaplain A', f:'<div class="node" onclick="showDetails(\'Melvin Mwila\', \'SDA Church\', \'images/executive/ChaplainA.jpg\', \'+260975962320\')"><img src="images/executive/ChaplainA.jpg" class="node-image"><div class="node-label">Chaplain A</div></div>'}, 'Vice President A', 'KEMD-Zone A Chaplain', 'images/executive/ChaplainA.jpg'],
   		[{v:'Chaplain B', f:'<div class="node" onclick="showDetails(\'Elvis Munengo\', \'Luanshimba SDA Church\', \'images/executive/ChaplainB.jpg\', \'+260969607361\')"><img src="images/executive/ChaplainB.jpg" class="node-image"><div class="node-label">Chaplain B</div></div>'}, 'Vice President B', 'KEMD-Zone B Chaplain', 'images/executive/ChaplainB.jpg'],

   		  
   		// Ambassador Ministry
   		[{v:'Ambassador A', f:'<div class="node" onclick="showDetails(\'Steady Chibela\', \'Lukanga SDA Church\', \'images/executive/AmbassadorA.jpg\', \'+260978640579\')"><img src="images/executive/AmbassadorA.jpg" class="node-image"><div class="node-label">Ambassador A</div></div>'}, 'Secretary A', 'KEMD-Zone A Ambassador', 'images/executive/AmbassadorA.jpg'],
   		[{v:'Vice Ambassador A', f:'<div class="node" onclick="showDetails(\'Stainly Mubenga\', \'SDA Church\', \'images/executive/Vice AmbassadorA.jpg\', \'+260772678431\')"><img src="images/executive/Vice AmbassadorA.jpg" class="node-image"><div class="node-label">Vice Ambassador A</div></div>'}, 'Ambassador A', 'KEMD-Zone A Vice Ambassador', 'images/executive/Vice AmbassadorA.jpg'],
   		  
   		// Pathfinder Ministry
   		[{v:'Pathfinder', f:'<div class="node" onclick="showDetails(\'Mwangelwa Siliimi\', \'Kohima SDA Church\', \'images/executive/PathfinderA.jpg\', \'+260770173321\')"><img src="images/executive/PathfinderA.jpg" class="node-image"><div class="node-label">Pathfinder A</div></div>'}, 'Secretary A', 'KEMD-Zone A Pathfinder', 'images/executive/PathfinderA.jpg'],
   		[{v:'Vice Pathfinder A', f:'<div class="node" onclick="showDetails(\'Emeldah Hansebele\', \'SDA Church\', \'images/executive/vicePathfinderA.jpg\', \'+260974406185\')"><img src="images/executive/vicePathfinderA.jpg" class="node-image"><div class="node-label">Vice Pathfinder A</div></div>'}, 'Pathfinder A', 'KEMD-Zone A Vice Pathfinder', 'images/executive/vicePathfinderA.jpg'],
   		  
   		// Adventurer Ministry
   		[{v:'Adventurer A', f:'<div class="node" onclick="showDetails(\'Chipo Musonda\', \'SDA Church\', \'images/executive/AdventurerA.jpg\', \'+260978973834\')"><img src="images/executive/AdventurerA.jpg" class="node-image"><div class="node-label">Adventurer A</div></div>'}, 'Secretary A', 'KEMD-Zone A Adventurer', 'images/executive/AdventurerA.jpg'],
   		[{v:'Vice Adventurer A', f:'<div class="node" onclick="showDetails(\'Morriah Tina Mahundu\', \'SDA Church\', \'images/executive/Vice AdventurerA.jpg\', \'+260776830890\')"><img src="images/executive/Vice AdventurerA.jpg" class="node-image"><div class="node-label">Vice Adventurer A</div></div>'}, 'Adventurer A', 'KEMD-Zone A Vice Adventurer', 'images/executive/Vice AdventurerA.jpg'],
   		
   		// Communication
   		[{v:'Communication A', f:'<div class="node" onclick="showDetails(\'Joshua Mbuzi\', \'SDA Church\', \'images/executive/CommunicationA.jpg\', \'+260978396867\')"><img src="images/executive/CommunicationA.jpg" class="node-image"><div class="node-label">Communication A</div></div>'}, 'Secretary A', 'KEMD-Zone A Communication', 'images/executive/CommunicationA.jpg'],
   		[{v:'Communication B', f:'<div class="node" onclick="showDetails(\'Siachona Cecil\', \'Green Leaf SDA Church\', \'images/executive/CommunicationB.jpg\', \'+260977971795\')"><img src="images/executive/CommunicationB.jpg" class="node-image"><div class="node-label">Communication B</div></div>'}, 'Secretary B', 'KEMD-Zone B Communication', 'images/executive/CommunicationB.jpg'],

   		// Education
   		[{v:'Education', f:'<div class="node" onclick="showDetails(\'Douglas Musonda\', \'SDA Church\', \'images/executive/KWMDEducation.jpg\', \'+260000000000\')"><img src="images/executive/KWMDEducation.jpg" class="node-image"><div class="node-label">Education</div></div>'}, 'Secretary', 'KWMD Education', 'images/executive/KWMDEducation.jpg'],
   		[{v:'Education Secretary A', f:'<div class="node" onclick="showDetails(\'Stainly\', \'Lukanga SDA Church\', \'images/executive/EducationSecretaryA.jpg\', \'+260971458416\')"><img src="images/executive/EducationSecretaryA.jpg" class="node-image"><div class="node-label">Education Secretary A</div></div>'}, 'Education A', 'KEMD-Zone A Education Secretary', 'images/executive/EducationSecretaryA.jpg'],
   		  
   		// Field Marshal
   		[{v:'Field Marshal A', f:'<div class="node" onclick="showDetails(\'Owen Thomas\', \'SDA Church\', \'images/executive/Field MarshalA.jpg\', \'+260750498756\')"><img src="images/executive/Field MarshalA.jpg" class="node-image"><div class="node-label">Field Marshal A</div></div>'}, 'Parliamentarian A', 'KEMD-Zone A Field Marshal', 'images/executive/Field MarshalA.jpg'],
   		[{v:'Field Marshal B', f:'<div class="node" onclick="showDetails(\'Joe\', \'Kamukuyu SDA Church\', \'images/executive/Field MarshalB.jpg\', \'+260976526331\')"><img src="images/executive/Field MarshalB.jpg" class="node-image"><div class="node-label">Field Marshal B</div></div>'}, 'Parliamentarian B', 'KEMD-Zone B Field Marshal', 'images/executive/Field MarshalB.jpg'],
   		  
   		// Music Director
   		[{v:'Music Director A', f:'<div class="node" onclick="showDetails(\'Kelister Mudenda\', \'SDA Church\', \'images/executive/Music DirectorA.jpg\', \'+260760982401\')"><img src="images/executive/Music DirectorA.jpg" class="node-image"><div class="node-label">Music Director A</div></div>'}, 'Vice Ambassador A', 'KEMD-Zone A Music Director', 'images/executive/Music DirectorA.jpg'],
   		[{v:'Music Director B', f:'<div class="node" onclick="showDetails(\'Habachela Daniel\', \'Kalama Branch SDA Church\', \'images/executive/Music DirectorB.jpg\', \'+260978234727\')"><img src="images/executive/Music DirectorB.jpg" class="node-image"><div class="node-label">Music Director B</div></div>'}, 'Vice Ambassador B', 'KEMD-Zone B Music Director', 'images/executive/Music DirectorB.jpg'],

   		// Planning / Projects
   		[{v:'Planning/Projects A', f:'<div class="node" onclick="showDetails(\'Given Mate\', \'SDA Church\', \'images/executive/ProjectsA.jpg\', \'+260972331861\')"><img src="images/executive/ProjectsA.jpg" class="node-image"><div class="node-label">Planning/Projects A</div></div>'}, 'Vice Education A', 'KEMD-Zone A Planning and Project Coordinator', 'images/executive/ProjectsA.jpg'],
   		[{v:'Planning/Projects B', f:'<div class="node" onclick="showDetails(\'Evans Nzima\', \'Rockside SDA Church\', \'images/executive/ProjectsB.jpg\', \'+260975224553\')"><img src="images/executive/ProjectsB.jpg" class="node-image"><div class="node-label">Planning/Projects B</div></div>'}, 'Vice Education B', 'KEMD-Zone B Planning and Project Coordinator', 'images/executive/ProjectsB.jpg'],


         
           // ... (similar lines for other positions)
         ]);
   
         var chart = new google.visualization.OrgChart(document.getElementById('chart_div'));
         chart.draw(data, {allowHtml:true});
       }