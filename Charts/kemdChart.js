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
         [{v:'KEMD Pastor', f:'<div class="node" onclick="showDetails(\'Pastor Prince Hankwebe\', \'Kabwe East Mission District\', \'../images/KEMD/KEMDPastor.jpg\', \'+260976102728\')"><img src="../images/KEMD/KEMDPastor.jpg" class="node-image"><div class="node-label">KEMD Pastor</div></div>'}, '', 'KEMD Pastor', '../images/KEMD/KEMDPastor.jpg'],
            
         // President
   		[{v:'President', f:'<div class="node" onclick="showDetails(\'Morris Chibale\', \'Lukanga Main SDA Church\', \'../images/KEMD/KEMDPresident.jpg\', \'+260977510189\')"><img src="../images/KEMD/KEMDPresident.jpg" class="node-image"><div class="node-label">President</div></div>'}, 'KEMD Pastor', 'KEMD President', '../images/KEMD/KEMDPresident.jpg'],
   		
   		// Vice President
   		[{v:'Vice President A', f:'<div class="node" onclick="showDetails(\'Mwangelwa Siliimi\', \'Kohima SDA Church\', \'../images/KEMD/PresidentA.jpg\', \'+260770173321\')"><img src="../images/KEMD/PresidentA.jpg" class="node-image"><div class="node-label">Vice President A</div></div>'}, 'President', 'KEMD-Zone A Vice President', '../images/KEMD/PresidentA.jpg'],
   		[{v:'Vice President B', f:'<div class="node" onclick="showDetails(\'Mbaso Clinton\', \'Rockside SDA Church\', \'../images/KEMD/PresidentB.jpg\', \'+260968084570\')"><img src="../images/KEMD/PresidentB.jpg" class="node-image"><div class="node-label">Vice President B</div></div>'}, 'President', 'KEMD-Zone B Vice President', '../images/KEMD/PresidentB.jpg'],
   		
   		// Secretary
   		[{v:'Secretary A', f:'<div class="node" onclick="showDetails(\'Loveness Mwanza\', \'SDA Church\', \'../images/KEMD/SecretaryA.jpg\', \'+260972411610\')"><img src="../images/KEMD/SecretaryA.jpg" class="node-image"><div class="node-label">Secretary A</div></div>'}, 'Vice President A', 'KEMD-Zone A Secretary', '../images/KEMD/SecretaryA.jpg'],
   		[{v:'Secretary B', f:'<div class="node" onclick="showDetails(\'Masumo Gift\', \'Mapulu SDA Church\', \'../images/KEMD/SecretaryB.jpg\', \'+260968622698\')"><img src="../images/KEMD/SecretaryB.jpg" class="node-image"><div class="node-label">Secretary B</div></div>'}, 'Vice President B', 'KEMD-Zone B Secretary', '../images/KEMD/SecretaryB.jpg'],
   		[{v:'Vice Secretary B', f:'<div class="node" onclick="showDetails(\'Emma Muleya\', \'Luanshimba SDA Church\', \'../images/KEMD/ViceSecretaryB.jpg\', \'+260763673672\')"><img src="../images/KEMD/ViceSecretaryB.jpg" class="node-image"><div class="node-label">Vice Secretary B</div></div>'}, 'Secretary B', 'KEMD-Zone B Vice Secretary', '../images/KEMD/ViceSecretaryB.jpg'],

   		// Treasurer
   		[{v:'Treasurer A', f:'<div class="node" onclick="showDetails(\'Elizabeth Choolwe Maila\', \'SDA Church\', \'../images/KEMD/TreasurerA.jpg\', \'+260978858087\')"><img src="../images/KEMD/TreasurerA.jpg" class="node-image"><div class="node-label">Treasurer A</div></div>'}, 'Vice President A', 'KEMD-Zone A Treasurer', '../images/KEMD/TreasurerA.jpg'],
   		[{v:'Treasurer B', f:'<div class="node" onclick="showDetails(\'Muuka Bridget\', \'Rockside SDA Church\', \'../images/KEMD/TreasurerB.jpg\', \'+260967703883\')"><img src="../images/KEMD/TreasurerB.jpg" class="node-image"><div class="node-label">Treasurer B</div></div>'}, 'Vice President B', 'KEMD-Zone B Treasurer', '../images/KEMD/TreasurerB.jpg'],

   		// Parliamentarian
   		[{v:'Parliamentarian A', f:'<div class="node" onclick="showDetails(\'Morris Chibale\', \'Lukanga Main SDA Church\', \'../images/KEMD/ParliamentarianA.jpg\', \'+260977510189\')"><img src="../images/KEMD/ParliamentarianA.jpg" class="node-image"><div class="node-label">Parliamentarian A</div></div>'}, 'Vice President A', 'KEMD-Zone A Parliamentarian', '../images/KEMD/ParliamentarianA.jpg'],
   		[{v:'Parliamentarian B', f:'<div class="node" onclick="showDetails(\'Marvin Miyoba\', \'Muteteshi SDA Church\', \'../images/KEMD/ParliamentarianB.jpg\', \'+260975174686\')"><img src="../images/KEMD/ParliamentarianB.jpg" class="node-image"><div class="node-label">Parliamentarian B</div></div>'}, 'Vice President B', 'KEMD-Zone B Parliamentarian', '../images/KEMD/ParliamentarianB.jpg'],
   		  
   		// Chaplain
   		[{v:'Chaplain A', f:'<div class="node" onclick="showDetails(\'Melvin Mwila\', \'SDA Church\', \'../images/KEMD/ChaplainA.jpg\', \'+260975962320\')"><img src="../images/KEMD/ChaplainA.jpg" class="node-image"><div class="node-label">Chaplain A</div></div>'}, 'Secretary A', 'KEMD-Zone A Chaplain', '../images/KEMD/ChaplainA.jpg'],
   		[{v:'Chaplain B', f:'<div class="node" onclick="showDetails(\'Lucky Ngandu\', \'Luanshimba SDA Church\', \'../images/KEMD/ChaplainB.jpg\', \'+260974712906\')"><img src="../images/KEMD/ChaplainB.jpg" class="node-image"><div class="node-label">Chaplain B</div></div>'}, 'Secretary B', 'KEMD-Zone B Chaplain', '../images/KEMD/ChaplainB.jpg'],

   		  
   		// Ambassador Ministry
   		[{v:'Ambassador A', f:'<div class="node" onclick="showDetails(\'Steady Chibela\', \'Lukanga SDA Church\', \'../images/KEMD/AmbassadorA.jpg\', \'+260978640579\')"><img src="../images/KEMD/AmbassadorA.jpg" class="node-image"><div class="node-label">Ambassador A</div></div>'}, 'Secretary A', 'KEMD-Zone A Ambassador', '../images/KEMD/AmbassadorA.jpg'],
   		[{v:'Ambassador B', f:'<div class="node" onclick="showDetails(\'Kebby Chimbulu\', \'Muteteshi SDA Church\', \'../images/KEMD/AmbassadorB.jpg\', \'+260777900745\')"><img src="../images/KEMD/AmbassadorB.jpg" class="node-image"><div class="node-label">Ambassador B</div></div>'}, 'Vice Secretary B', 'KEMD-Zone B Ambassador', '../images/KEMD/AmbassadorB.jpg'],
   		[{v:'Vice Ambassador A', f:'<div class="node" onclick="showDetails(\'Stainly Mubenga\', \'SDA Church\', \'../images/KEMD/Vice AmbassadorA.jpg\', \'+000000\')"><img src="../images/KEMD/Vice AmbassadorA.jpg" class="node-image"><div class="node-label">Vice Ambassador A</div></div>'}, 'Ambassador A', 'KEMD-Zone A Vice Ambassador', '../images/KEMD/Vice AmbassadorA.jpg'],
   		[{v:'Vice Ambassador B', f:'<div class="node" onclick="showDetails(\'Radson Maswini\', \'Luanshimba SDA Church\', \'../images/KEMD/Vice AmbassadorB.jpg\', \'+000000\')"><img src="../images/KEMD/Vice AmbassadorB.jpg" class="node-image"><div class="node-label">Vice Ambassador B</div></div>'}, 'Ambassador B', 'KEMD-Zone B Vice Ambassador', '../images/KEMD/Vice AmbassadorB.jpg'],
   		  
   		// Pathfinder Ministry
   		[{v:'Pathfinder A', f:'<div class="node" onclick="showDetails(\'Mwangelwa Siliimi\', \'Kohima SDA Church\', \'../images/KEMD/PathfinderA.jpg\', \'+260770173321\')"><img src="../images/KEMD/PathfinderA.jpg" class="node-image"><div class="node-label">Pathfinder A</div></div>'}, 'Secretary A', 'KEMD-Zone A Pathfinder', '../images/KEMD/PathfinderA.jpg'],
   		[{v:'Pathfinder B', f:'<div class="node" onclick="showDetails(\'Bwalya Moris\', \'Rockside SDA Church\', \'../images/KEMD/PathfinderB.jpg\', \'+260766613234\')"><img src="../images/KEMD/PathfinderB.jpg" class="node-image"><div class="node-label">Pathfinder B</div></div>'}, 'Vice Secretary B', 'KEMD-Zone B Pathfinder', '../images/KEMD/PathfinderB.jpg'],
   		[{v:'Vice Pathfinder A', f:'<div class="node" onclick="showDetails(\'Emeldah Hansebele\', \'SDA Church\', \'../images/KEMD/vicePathfinderA.jpg\', \'+260974406185\')"><img src="../images/KEMD/vicePathfinderA.jpg" class="node-image"><div class="node-label">Vice Pathfinder A</div></div>'}, 'Pathfinder A', 'KEMD-Zone A Vice Pathfinder', '../images/KEMD/vicePathfinderA.jpg'],
   		[{v:'Vice Pathfinder B', f:'<div class="node" onclick="showDetails(\'Cheelo Japhet\', \'Kamiswa SDA Church\', \'images/KEMD/vicePathfinderB.jpg\', \'+260764346785\')"><img src="images/KEMD/vicePathfinderB.jpg" class="node-image"><div class="node-label">Vice Pathfinder B</div></div>'}, 'Pathfinder B', 'KEMD-Zone B Vice Pathfinder', 'images/KEMD/vicePathfinderB.jpg'],
   		  
   		// Adventurer Ministry
   		[{v:'Adventurer A', f:'<div class="node" onclick="showDetails(\'Chipo Musonda\', \'SDA Church\', \'images/KEMD/AdventurerA.jpg\', \'+260978973834\')"><img src="images/KEMD/AdventurerA.jpg" class="node-image"><div class="node-label">Adventurer A</div></div>'}, 'Secretary A', 'KEMD-Zone A Adventurer', 'images/KEMD/AdventurerA.jpg'],
   		[{v:'Adventurer B', f:'<div class="node" onclick="showDetails(\'Nelson Tapheni\', \'Mapulu SDA Church\', \'images/KEMD/AdventurerB.jpg\', \'+260974835595\')"><img src="images/KEMD/AdventurerB.jpg" class="node-image"><div class="node-label">Adventurer B</div></div>'}, 'Vice Secretary B', 'KEMD-Zone B Adventurer', 'images/KEMD/AdventurerB.jpg'],
   		[{v:'Vice Adventurer A', f:'<div class="node" onclick="showDetails(\'Morriah Tina Mahundu\', \'SDA Church\', \'../images/KEMD/Vice AdventurerA.jpg\', \'+260776830890\')"><img src="../images/KEMD/Vice AdventurerA.jpg" class="node-image"><div class="node-label">Vice Adventurer A</div></div>'}, 'Adventurer A', 'KEMD-Zone A Vice Adventurer', '../images/KEMD/Vice AdventurerA.jpg'],
   		[{v:'Vice Adventurer B', f:'<div class="node" onclick="showDetails(\'Emeldah Sebela\', \'Muteteshi SDA Church\', \'../images/KEMD/Vice AdventurerB.jpg\', \'+260767761843\')"><img src="../images/KEMD/Vice AdventurerB.jpg" class="node-image"><div class="node-label">Vice Adventurer B</div></div>'}, 'Adventurer B', 'KEMD-Zone B Vice Adventurer', '../images/KEMD/Vice AdventurerB.jpg'],
   		
   		// Communication
   		[{v:'Communication A', f:'<div class="node" onclick="showDetails(\'Joshua Mbuzi\', \'SDA Church\', \'../images/KEMD/CommunicationA.jpg\', \'+260978396867\')"><img src="../images/KEMD/CommunicationA.jpg" class="node-image"><div class="node-label">Communication A</div></div>'}, 'Secretary A', 'KEMD-Zone A Communication', '../images/KEMD/CommunicationA.jpg'],
   		[{v:'Communication B', f:'<div class="node" onclick="showDetails(\'Daswell Muzyamba\', \'Kabufumu SDA Church\', \'../images/KEMD/CommunicationB.jpg\', \'+260770758088\')"><img src="../images/KEMD/CommunicationB.jpg" class="node-image"><div class="node-label">Communication B</div></div>'}, 'Vice Secretary B', 'KEMD-Zone B Communication', '../images/KEMD/CommunicationB.jpg'],

   		// Education
   		[{v:'Education A', f:'<div class="node" onclick="showDetails(\'Maxwell Mwiinga\', \'SDA Church\', \'../images/KEMD/EducationA.jpg\', \'+260761468300\')"><img src="../images/KEMD/EducationA.jpg" class="node-image"><div class="node-label">Education A</div></div>'}, 'Secretary A', 'KEMD-Zone A Education', '../images/KEMD/EducationA.jpg'],
   		[{v:'Education B', f:'<div class="node" onclick="showDetails(\'Njele Vincent\', \'Mapulu SDA Church\', \'../images/KEMD/EducationB.jpg\', \'+260977774423\')"><img src="../images/KEMD/EducationB.jpg" class="node-image"><div class="node-label">Education B</div></div>'}, 'Vice Secretary B', 'KEMD-Zone B Education', '../images/KEMD/EducationBp.jpg'],
   		[{v:'Education Secretary A', f:'<div class="node" onclick="showDetails(\'Stainly\', \'Lukanga SDA Church\', \'../images/KEMD/EducationSecretaryA.jpg\', \'+260971458416\')"><img src="../images/KEMD/EducationSecretaryA.jpg" class="node-image"><div class="node-label">Education Secretary A</div></div>'}, 'Education A', 'KEMD-Zone A Education Secretary', '../images/KEMD/EducationSecretaryA.jpg'],
   		[{v:'Education Secretary B', f:'<div class="node" onclick="showDetails(\'Maimbo Malambo\', \'Muteteshi SDA Church\', \'../images/KEMD/EducationSecretaryB.jpg\', \'+260974712906\')"><img src="../images/KEMD/EducationSecretaryB.jpg" class="node-image"><div class="node-label">Education Secretary B</div></div>'}, 'Education B', 'KEMD-Zone B Education Secretary', '../images/KEMD/EducationSecretaryB.jpg'],
   		  
   		// Field Marshal
   		[{v:'Field Marshal A', f:'<div class="node" onclick="showDetails(\'Owen Thomas\', \'SDA Church\', \'../images/KEMD/Field MarshalA.jpg\', \'+260750498756\')"><img src="../images/KEMD/Field MarshalA.jpg" class="node-image"><div class="node-label">Field Marshal A</div></div>'}, 'Vice Pathfinder A', 'KEMD-Zone A Field Marshal', '../images/KEMD/Field MarshalA.jpg'],
   		[{v:'Field Marshal B', f:'<div class="node" onclick="showDetails(\'Joseph Peche\', \'Muteteshi SDA Church\', \'../images/KEMD/fieldMarshalB.jpg\', \'+260760163228\')"><img src="../images/KEMD/fieldMarshalB.jpg" class="node-image"><div class="node-label">Field Marshal B</div></div>'}, 'Vice Pathfinder B', 'KEMD-Zone B Field Marshal', '../images/KEMD/fieldMarshalB.jpg'],
   		  
   		// Music Director
   		[{v:'Music Director A', f:'<div class="node" onclick="showDetails(\'Steady Chibela\', \'Lukanga SDA Church\', \'../images/KEMD/musicDirectorA.jpg\', \'+260978640579\')"><img src="../images/KEMD/musicDirectorA.jpg" class="node-image"><div class="node-label">Music Director A</div></div>'}, 'Vice Ambassador A', 'KEMD-Zone A Music Director', '../images/KEMD/musicDirectorA.jpg'],
   		[{v:'Music Director B', f:'<div class="node" onclick="showDetails(\'Habachela Daniel\', \'Kalama Branch SDA Church\', \'../images/KEMD/musicDirectorB.jpg\', \'+260772781267\')"><img src="../images/KEMD/Music DirectorB.jpg" class="node-image"><div class="node-label">Music Director B</div></div>'}, 'Vice Ambassador B', 'KEMD-Zone B Music Director', '../images/KEMD/Music DirectorB.jpg'],

   		// Planning / Projects
   		[{v:'Planning/Projects A', f:'<div class="node" onclick="showDetails(\'Given Mate\', \'SDA Church\', \'../images/KEMD/ProjectsA.jpg\', \'+260972331861\')"><img src="../images/KEMD/ProjectsA.jpg" class="node-image"><div class="node-label">Planning/Projects A</div></div>'}, 'Treasurer A', 'KEMD-Zone A Planning and Project Coordinator', '../images/KEMD/ProjectsA.jpg'],
   		[{v:'Planning/Projects B', f:'<div class="node" onclick="showDetails(\'Evans Nzima\', \'Rockside SDA Church\', \'../images/KEMD/ProjectsB.jpg\', \'+260975224553\')"><img src="../images/KEMD/ProjectsB.jpg" class="node-image"><div class="node-label">Planning/Projects B</div></div>'}, 'Treasurer B', 'KEMD-Zone B Planning and Project Coordinator', '../images/KEMD/ProjectsB.jpg'],


         
           // ... (similar lines for other positions)
         ]);
   
         var chart = new google.visualization.OrgChart(document.getElementById('chart_div'));
         chart.draw(data, {allowHtml:true});
       }