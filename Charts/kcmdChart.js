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
         [{v:'KCMD Pastor', f:'<div class="node" onclick="showDetails(\'Pastor Michael Mukenda\', \'Kabwe Central Mission District\', \'../images/KCMD/KCMDPastor.jpg\', \'+260979454997\')"><img src="../images/KCMD/KCMDPastor.jpg" class="node-image"><div class="node-label">KCMD Pastor</div></div>'}, '', 'KCMD Pastor', '../images/KCMD/KCMDPastor.jpg'],
          
         // President
   		[{v:'President', f:'<div class="node" onclick="showDetails(\'SEBBASTIAN HIMACHOMPA\', \'Kabwe Central SDA Church\', \'../images/KCMD/KCMDPresident.jpg\', \'+260972878169\')"><img src="../images/KCMD/KCMDPresident.jpg" class="node-image"><div class="node-label">President</div></div>'}, 'KCMD Pastor', 'KCMD President', '../images/KCMD/KCMDPresident.jpg'],
   		
   		// Vice President
   		[{v:'Vice President', f:'<div class="node" onclick="showDetails(\'Collins Mumpasha\', \'Kabwe Central SDA Church\', \'../images/KCMD/PresidentA.jpg\', \'+260000000000\')"><img src="../images/KCMD/PresidentA.jpg" class="node-image"><div class="node-label">Vice President</div></div>'}, 'President', 'KCMD-Zone A Vice President', '../images/KCMD/PresidentA.jpg'],

   		// Secretary
   		[{v:'Secretary', f:'<div class="node" onclick="showDetails(\'Ketty Kaunda Kalobwe\', \'Kabwe Central SDA Church\', \'../images/KCMD/KCMDSecretary.jpg\', \'+260971831886\')"><img src="../images/KCMD/KCMDSecretary.jpg" class="node-image"><div class="node-label">Secretary</div></div>'}, 'Vice President', 'KCMD - Secretary', '../images/KCMD/KCMDSecretary.jpg'],
   		[{v:'Associate Secretary', f:'<div class="node" onclick="showDetails(\'MAYUKA CHIBWE\', \'Kabwe Central SDA Church\', \'../images/KCMD/KCMDAssociateSecretary.jpg\', \'+260000000000\')"><img src="../images/KCMD/KCMDAssociateSecretary.jpg" class="node-image"><div class="node-label">Associate Secretary</div></div>'}, 'Secretary', 'KCMD - Associate Secretary', '../images/KCMD/KCMDAssociateSecretary.jpg'],

   		// Treasurer
   		[{v:'Treasurer', f:'<div class="node" onclick="showDetails(\'MUCHANETA MUGOBA\', \'Kabwe Central SDA Church\', \'../images/KCMD/KCMDTreasurer.jpg\', \'+260000000000\')"><img src="../images/KCMD/KCMDTreasurer.jpg" class="node-image"><div class="node-label">Treasurer</div></div>'}, 'Vice President', 'KCMD - Treasurer', '../images/KCMD/KCMDTreasurer.jpg'],
   		[{v:'Vice Treasurer', f:'<div class="node" onclick="showDetails(\'ELDER ALFRED SILILO\', \'Kabwe Central SDA Church\', \'../images/KCMD/KCMDViceTreasurer.jpg\', \'+260000000000\')"><img src="../images/KCMD/KCMDViceTreasurer.jpg" class="node-image"><div class="node-label">Vice Treasurer</div></div>'}, 'Treasurer', 'KCMD - Vice Treasurer', '../images/KCMD/KCMDViceTreasurer.jpg'],

   		// Parliamentarian
   		[{v:'Parliamentarian', f:'<div class="node" onclick="showDetails(\'GISPER KUMASA\', \'Kabwe Central SDA Church\', \'../images/KCMD/KCMDParliamentarian.jpg\', \'+260000000000\')"><img src="../images/KCMD/KCMDParliamentarian.jpg" class="node-image"><div class="node-label">Parliamentarian</div></div>'}, 'Vice President', 'KCMD - Parliamentarian', '../images/KCMD/KCMDParliamentarian.jpg'],

   		// Education
   		[{v:'Education Director', f:'<div class="node" onclick="showDetails(\'Elder Peter Mayuya\', \'Kabwe Central SDA Church\', \'../images/KCMD/KCMDEducationDirector.jpg\', \'+260000000000\')"><img src="../images/KCMD/KCMDEducationDirector.jpg" class="node-image"><div class="node-label">Education Director</div></div>'}, 'Associate Secretary', 'KCMD - Education Director', '../images/KCMD/KCMDEducation Director.jpg'],
   		[{v:'Education Secretary', f:'<div class="node" onclick="showDetails(\'Sharon Bwalya\', \'Kabwe Central SDA Church\', \'../images/KCMD/KCMDEducationSecretary.jpg\', \'+260770018328\')"><img src="../images/KCMD/KCMDEducationSecretary.jpg" class="node-image"><div class="node-label">Education Secretary</div></div>'}, 'Education Director', 'KCMD - Education Secretary', '../images/KCMD/KCMDEducationSecretary.jpg'],

   		// Young Adult Ministry
   		[{v:'Young Adults Leader', f:'<div class="node" onclick="showDetails(\'ONIEIL HANSINGA\', \'Kabwe Central SDA Church\', \'../images/KCMD/KCMDYoungAdult.jpg\', \'+260000000000\')"><img src="../images/KCMD/KCMDYoungAdult.jpg" class="node-image"><div class="node-label">Young Adults Leader</div></div>'}, 'Secretary', 'KCMD - Young Adults Leader', '../images/KCMD/KCMDYoungAdult.jpg'],
   		[{v:'Young Adult Secretary', f:'<div class="node" onclick="showDetails(\'SIEJUMBA MUNYANSU\', \'Kabwe Central SDA Church\', \'../images/KCMD/KCMDYoungAdultSecretary.jpg\', \'+260000000000\')"><img src="../images/KCMD/KCMDYoungAdultSecretary.jpg" class="node-image"><div class="node-label">Young Adult Secretary</div></div>'}, 'Young Adults Leader', 'KCMD - Young Adult Secretary', '../images/KCMD/KCMDYoungAdultSecretary.jpg'],
   		  
   		// Ambassador Ministry
   		[{v:'Ambassador', f:'<div class="node" onclick="showDetails(\'MUSONDA MWAPE\', \'Kabwe Central SDA Church\', \'../images/KCMD/KCMDAmbassador.jpg\', \'+260000000000\')"><img src="../images/KCMD/KCMDAmbassador.jpg" class="node-image"><div class="node-label">Ambassador</div></div>'}, 'Secretary', 'KCMD - Ambassador', '../images/KCMD/KCMDAmbassador.jpg'],
   		[{v:'Ambassador Secretary', f:'<div class="node" onclick="showDetails(\'KETHNESS MULULWE\', \'Kabwe Central SDA Church\', \'../images/KCMD/KCMDAmbassadorSecretary.jpg\', \'+260000000000\')"><img src="../images/KCMD/KCMDAmbassadorSecretary.jpg" class="node-image"><div class="node-label">Ambassador Secretary</div></div>'}, 'Ambassador', 'KCMD - Ambassador Secretary', '../images/KCMD/KCMDAmbassadorSecretary.jpg'],

   		// Pathfinder Ministry
   		[{v:'Pathfinder Director', f:'<div class="node" onclick="showDetails(\'Hermes Malele\', \'Kabwe Central SDA Church\', \'../images/KCMD/KCMDPathfinderDirector.jpg\', \'+260000000000\')"><img src="../images/KCMD/KCMDPathfinderDirector.jpg" class="node-image"><div class="node-label">Pathfinder Director</div></div>'}, 'Secretary', 'KCMD - Pathfinder Director', '../images/KCMD/KCMDPathfinderDirector.jpg'],
   		[{v:'Pathfinder Secretary', f:'<div class="node" onclick="showDetails(\'Lyness Pungwa\', \'Kabwe Central SDA Church\', \'../images/KCMD/KCMDPathfinderSecretary.jpg\', \'+260000000000\')"><img src="../images/KCMD/KCMDPathfinderSecretary.jpg" class="node-image"><div class="node-label">Pathfinder Secretary</div></div>'}, 'Pathfinder Director', 'KCMD - Pathfinder Secretary', '../images/KCMD/KCMDPathfinderSecretary.jpg'],

   		// Field Marshal
   		[{v:'Field Marshal', f:'<div class="node" onclick="showDetails(\'Charles Semembe\', \'Kabwe Central SDA Church\', \'../images/KCMD/KCMDFieldMarshal.jpg\', \'+260000000000\')"><img src="../images/KCMD/KCMDFieldMarshal.jpg" class="node-image"><div class="node-label">Field Marshal</div></div>'}, 'Pathfinder Secretary', 'KCMD - Field Marshal', '../images/KCMD/KCMDFieldMarshal.jpg'],
         
   		// Adventurer Ministry
   		[{v:'Adventurer Director', f:'<div class="node" onclick="showDetails(\'Longowe Kangwenda\', \'Kabwe Central SDA Church\', \'../images/KCMD/KCMDAdventurer.jpg\', \'+260000000000\')"><img src="../images/KCMD/KCMDAdventurer.jpg" class="node-image"><div class="node-label">Adventurer Director</div></div>'}, 'Secretary', 'KCMD - Adventurer Director', '../images/KCMD/KCMDAdventurer.jpg'],
   		[{v:'Adventurer Secretary', f:'<div class="node" onclick="showDetails(\'Alex Sinkala\', \'Kabwe Central SDA Church\', \'../images/KCMD/KCMDAdventurerSecretary.jpg\', \'+260000000000\')"><img src="../images/KCMD/KCMDAdventurerSecretary.jpg" class="node-image"><div class="node-label">Adventurer Secretary</div></div>'}, 'Adventurer Director', 'KCMD - Adventurer Secretary', '../images/KCMD/KCMDAdventurerSecretary.jpg'],
         
   		// Music Director
   		[{v:'Music Director', f:'<div class="node" onclick="showDetails(\'Hilgard Munyenya\', \'Kabwe Central SDA Church\', \'../images/KCMD/KCMDMusicDirector.jpg\', \'+260000000000\')"><img src="../images/KCMD/KCMDMusicDirector.jpg" class="node-image"><div class="node-label">Music Director</div></div>'}, 'Associate Secretary', 'KCMD - Music Director', '../images/KCMD/KCMDMusicDirector.jpg'],
   		[{v:'Vice Music Director', f:'<div class="node" onclick="showDetails(\'George Mwanza\', \'Kabwe Central SDA Church\', \'../images/KCMD/KCMDViceMusicDirector.jpg\', \'+260000000000\')"><img src="../images/KCMD/KCMDViceMusicDirector.jpg" class="node-image"><div class="node-label">Vice Music Director</div></div>'}, 'Music Director', 'KCMD - Vice Music Director', '../images/KCMD/KCMDViceMusicDirector.jpg'],
         
   		// Communication
   		[{v:'Media Director', f:'<div class="node" onclick="showDetails(\'Herold Blessed Kalawela\', \'Kabwe Central SDA Church\', \'../images/KCMD/KCMDMediaDirector.jpg\', \'+260770023995\')"><img src="../images/KCMD/KCMDMediaDirector.jpg" class="node-image"><div class="node-label">Media Director</div></div>'}, 'Associate Secretary', 'KCMD - Media Director', '../images/KCMD/KCMDMediaDirector.jpg'],
         
   		// Projects
   		[{v:'Projects Coordinator', f:'<div class="node" onclick="showDetails(\'Hirah Malambo\', \'Kabwe Central SDA Church\', \'../images/KCMD/KCMDProjectsCoordinator.jpg\', \'+260973801744\')"><img src="../images/KCMD/KCMDProjectsCoordinator.jpg" class="node-image"><div class="node-label">Projects Coordinator</div></div>'}, 'Vice Treasurer', 'KCMD - Projects Coordinator', '../images/KCMD/KCMDProjectsCoordinator.jpg'],
   		[{v:'Projects Secretary', f:'<div class="node" onclick="showDetails(\'Skinner Tembo\', \'Kabwe Central SDA Church\', \'../images/KCMD/KCMDProjectsSecretary.jpg\', \'+260000000000\')"><img src="../images/KCMD/KCMDProjectsSecretary.jpg" class="node-image"><div class="node-label">Projects Secretary</div></div>'}, 'Projects Coordinator', 'KCMD - Projects Secretary', '../images/KCMD/KCMDProjectsSecretary.jpg'],
         
   		// Matron / Patron / Advisor
   		[{v:'Youth Matron', f:'<div class="node" onclick="showDetails(\'MERCY MUGOBA\', \'Kabwe Central SDA Church\', \'../images/KCMD/KCMDMatron.jpg\', \'+260000000000\')"><img src="../images/KCMD/KCMDMatron.jpg" class="node-image"><div class="node-label">Youth Matron</div></div>'}, 'Parliamentarian', 'KCMD - Youth Matron', '../images/KCMD/KCMDMatron.jpg'],
   		[{v:'Youth Patron', f:'<div class="node" onclick="showDetails(\'ELDER WORLD NALIPAPA\', \'Kabwe Central SDA Church\', \'../images/KCMD/KCMDPatron.jpg\', \'+260000000000\')"><img src="../images/KCMD/KCMDPatron.jpg" class="node-image"><div class="node-label">Youth Patron</div></div>'}, 'Youth Matron', 'KCMD - Youth Patron', '../images/KCMD/KCMDPatron.jpg'],
   		[{v:'Youth Advisor', f:'<div class="node" onclick="showDetails(\'ELDER VUTTA\', \'Kabwe Central SDA Church\', \'../images/KCMD/KCMDAdvisor.jpg\', \'+260000000000\')"><img src="../images/KCMD/KCMDAdvisor.jpg" class="node-image"><div class="node-label">Youth Advisor</div></div>'}, 'Youth Patron', 'KCMD - Youth Advisor', '../images/KCMD/KCMDAdvisor.jpg'],
         
   		// Chaplain
   		[{v:'Chaplain', f:'<div class="node" onclick="showDetails(\'ELDER CHANDA\', \'Kabwe Central SDA Church\', \'../images/KCMD/KCMDChaplain.jpg\', \'+260000000000\')"><img src="../images/KCMD/KCMDChaplain.jpg" class="node-image"><div class="node-label">Chaplain</div></div>'}, 'Youth Advisor', 'KCMD - Chaplain', '../images/KCMD/KCMDChaplain.jpg'],


         
           // ... (similar lines for other positions)
         ]);
   
         var chart = new google.visualization.OrgChart(document.getElementById('chart_div'));
         chart.draw(data, {allowHtml:true});
       }