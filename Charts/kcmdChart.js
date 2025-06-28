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
            
   		// Matron / Patron / Advisor
   		[{v:'Patron', f:'<div class="node" onclick="showDetails(\'ELDER WORLD NALIPAPA\', \'Kabwe Central SDA Church\', \'../images/KCMD/KCMDPatron.jpg\', \'+260000000000\')"><img src="../images/KCMD/KCMDPatron.jpg" class="node-image"><div class="node-label">Patron</div></div>'}, 'KCMD Pastor', 'KCMD - Youth Patron', '../images/KCMD/KCMDPatron.jpg'],
   		[{v:'Advisor', f:'<div class="node" onclick="showDetails(\'ELDER VUTTA*\', \'Kabwe Central SDA Church\', \'../images/KCMD/KCMDAdvisor.jpg\', \'+260000000000\')"><img src="../images/KCMD/KCMDAdvisor.jpg" class="node-image"><div class="node-label">Youth Advisor</div></div>'}, 'KCMD Pastor', 'KCMD - Youth Advisor', '../images/KCMD/KCMDAdvisor.jpg'],
   		[{v:'Matron', f:'<div class="node" onclick="showDetails(\'MERCY MUGOBA\', \'Kabwe Central SDA Church\', \'../images/KCMD/KCMDMatron.jpg\', \'+260000000000\')"><img src="../images/KCMD/KCMDMatron.jpg" class="node-image"><div class="node-label">Matron</div></div>'}, 'KCMD Pastor', 'KCMD - Youth Matron', '../images/KCMD/KCMDMatron.jpg'],

          
         // President
   		[{v:'President', f:'<div class="node" onclick="showDetails(\'SEBBASTIAN HIMACHOMPA\', \'Kabwe Central SDA Church\', \'../images/KCMD/KCMDPresident.jpg\', \'+260972878169\')"><img src="../images/KCMD/KCMDPresident.jpg" class="node-image"><div class="node-label">President</div></div>'}, 'Advisor', 'KCMD President', '../images/KCMD/KCMDPresident.jpg'],
   		
   		// Vice President
   		[{v:'Vice President', f:'<div class="node" onclick="showDetails(\'COLLINS MUMPASHA\', \'Kabwe Central SDA Church\', \'../images/KCMD/PresidentA.jpg\', \'+260000000000\')"><img src="../images/KCMD/PresidentA.jpg" class="node-image"><div class="node-label">Vice President</div></div>'}, 'President', 'KCMD-Zone A Vice President', '../images/KCMD/PresidentA.jpg'],

   		// Secretary
   		[{v:'Secretary', f:'<div class="node" onclick="showDetails(\'Ketty Kaunda Kalobwe\', \'Kabwe Central SDA Church\', \'../images/KCMD/KCMDSecretary.jpg\', \'+260971831886\')"><img src="../images/KCMD/KCMDSecretary.jpg" class="node-image"><div class="node-label">Secretary</div></div>'}, 'Vice President', 'KCMD - Secretary', '../images/KCMD/KCMDSecretary.jpg'],
   		[{v:'Vice Secretary', f:'<div class="node" onclick="showDetails(\'MAYUKA CHIBWE\', \'Kabwe Central SDA Church\', \'../images/KCMD/KCMDViceSecretary.jpg\', \'+260000000000\')"><img src="../images/KCMD/KCMDViceSecretary.jpg" class="node-image"><div class="node-label">Vice Secretary</div></div>'}, 'Secretary', 'KCMD - Vice Secretary', '../images/KCMD/KCMDViceSecretary.jpg'],

   		// Treasurer
   		[{v:'Treasurer', f:'<div class="node" onclick="showDetails(\'MUCHANETA MUGOBA\', \'Kabwe Central SDA Church\', \'../images/KCMD/KCMDTreasurer.jpg\', \'+260000000000\')"><img src="../images/KCMD/KCMDTreasurer.jpg" class="node-image"><div class="node-label">Treasurer</div></div>'}, 'Vice President', 'KCMD - Treasurer', '../images/KCMD/KCMDTreasurer.jpg'],
   		[{v:'Vice Treasurer', f:'<div class="node" onclick="showDetails(\'ELDER ALFRED SILILO\', \'Kabwe Central SDA Church\', \'../images/KCMD/KCMDViceTreasurer.jpg\', \'+260000000000\')"><img src="../images/KCMD/KCMDViceTreasurer.jpg" class="node-image"><div class="node-label">Vice Treasurer</div></div>'}, 'Treasurer', 'KCMD - Vice Treasurer', '../images/KCMD/KCMDViceTreasurer.jpg'],

   		// Parliamentarian
   		[{v:'Parliamentarian', f:'<div class="node" onclick="showDetails(\'GISPER KUMASA\', \'Kabwe Central SDA Church\', \'../images/KCMD/KCMDParliamentarian.jpg\', \'+260000000000\')"><img src="../images/KCMD/KCMDParliamentarian.jpg" class="node-image"><div class="node-label">Parliamentarian</div></div>'}, 'Vice President', 'KCMD-Zone A Parliamentarian', '../images/KCMD/KCMDParliamentarian.jpg'],

   		// Chaplain
   		[{v:'Chaplain', f:'<div class="node" onclick="showDetails(\'ELDER CHANDA\', \'Kabwe Central SDA Church\', \'../images/KCMD/KCMDChaplain.jpg\', \'+260000000000\')"><img src="../images/KCMD/KCMDChaplain.jpg" class="node-image"><div class="node-label">Chaplain</div></div>'}, 'Vice President', 'KCMD - Chaplain', '../images/KCMD/KCMDChaplain.jpg'],

   		// Young Adult Ministry
   		[{v:'Young Adult', f:'<div class="node" onclick="showDetails(\'ONIEIL HANSINGA\', \'Kabwe Central SDA Church\', \'../images/KCMD/KCMDYoungAdult.jpg\', \'+260000000000\')"><img src="../images/KCMD/KCMDYoungAdult.jpg" class="node-image"><div class="node-label">Ambassador</div></div>'}, 'Secretary', 'KCMD - Young Adult', '../images/KCMD/KCMDYoungAdult.jpg'],
   		[{v:'Vice Young Adult', f:'<div class="node" onclick="showDetails(\'JOSHUA KUNDA\', \'Kabwe Central SDA Church\', \'../images/KCMD/KCMDViceYoungAdult.jpg\', \'+260000000000\')"><img src="../images/KCMD/KCMDViceYoungAdult.jpg" class="node-image"><div class="node-label">Vice Ambassador</div></div>'}, 'Young Adult', 'KCMD - Vice Young Adult', '../images/KCMD/KCMDViceYoungAdult.jpg'],
   		  
   		// Ambassador Ministry
   		[{v:'Ambassador', f:'<div class="node" onclick="showDetails(\'MUSONDA MWAPE\', \'Kabwe Central SDA Church\', \'../images/KCMD/KCMDAmbassador.jpg\', \'+260000000000\')"><img src="../images/KCMD/KCMDAmbassador.jpg" class="node-image"><div class="node-label">Ambassador</div></div>'}, 'Secretary', 'KCMD - Ambassador', '../images/KCMD/KCMDAmbassador.jpg'],
   		[{v:'Vice Ambassador', f:'<div class="node" onclick="showDetails(\'KETHNESS MULULWE\', \'Kabwe Central SDA Church\', \'../images/KCMD/KCMDViceAmbassador.jpg\', \'+260000000000\')"><img src="../images/KCMD/KCMDViceAmbassador.jpg" class="node-image"><div class="node-label">Vice Ambassador</div></div>'}, 'Ambassador', 'KCMD - Vice Ambassador', '../images/KCMD/KCMDViceAmbassador.jpg'],

   		// Pathfinder Ministry
   		[{v:'Pathfinder', f:'<div class="node" onclick="showDetails(\'HERMES MALELE\', \'Kabwe Central SDA Church\', \'../images/KCMD/KCMDPathfinder.jpg\', \'+260000000000\')"><img src="../images/KCMD/KCMDPathfinder.jpg" class="node-image"><div class="node-label">Pathfinder</div></div>'}, 'Secretary', 'KCMD - Pathfinder', '../images/KCMD/KCMDPathfinder.jpg'],
   		[{v:'Vice Pathfinder', f:'<div class="node" onclick="showDetails(\'LYNESS PUNGWA\', \'Kabwe Central SDA Church\', \'../images/KCMD/KCMDVicePathfinder.jpg\', \'+260000000000\')"><img src="../images/KCMD/KCMDVicePathfinder.jpg" class="node-image"><div class="node-label">Vice Pathfinder</div></div>'}, 'Pathfinder', 'KCMD - Vice Pathfinder', '../images/KCMD/KCMDVicePathfinder.jpg'],

   		// Adventurer Ministry
   		[{v:'Adventurer', f:'<div class="node" onclick="showDetails(\'LONGOWE KANGWENDA\', \'Kabwe Central SDA Church\', \'../images/KCMD/KCMDAdventurer.jpg\', \'+260000000000\')"><img src="../images/KCMD/KCMDAdventurer.jpg" class="node-image"><div class="node-label">Adventurer</div></div>'}, 'Secretary', 'KCMD - Adventurer', '../images/KCMD/KCMDAdventurer.jpg'],
   		[{v:'Vice Adventurer', f:'<div class="node" onclick="showDetails(\'ALEX SINKALA\', \'Kabwe Central SDA Church\', \'../images/KCMD/KCMDViceAdventurer.jpg\', \'+260000000000\')"><img src="../images/KCMD/KCMDViceAdventurer.jpg" class="node-image"><div class="node-label">Vice Adventurer</div></div>'}, 'Adventurer', 'KCMD - Vice Adventurer', '../images/KCMD/KCMDViceAdventurer.jpg'],

   		// Communication
   		[{v:'Communication', f:'<div class="node" onclick="showDetails(\'Herold Blessed Kalawela\', \'Kabwe Central SDA Church\', \'../images/KCMD/KCMDCommunication.jpg\', \'+260770023995\')"><img src="../images/KCMD/KCMDCommunication.jpg" class="node-image"><div class="node-label">Communication</div></div>'}, 'Secretary', 'KCMD - Communication', '../images/KCMD/KCMDCommunication.jpg'],

   		// Education
   		[{v:'Education', f:'<div class="node" onclick="showDetails(\'ELDER PETER MAYUYA\', \'Kabwe Central SDA Church\', \'../images/KCMD/KCMDEducation.jpg\', \'+260000000000\')"><img src="../images/KCMD/KCMDEducation.jpg" class="node-image"><div class="node-label">Education</div></div>'}, 'Secretary', 'KCMD - Education', '../images/KCMD/KCMDEducation.jpg'],
   		[{v:'Education Secretary', f:'<div class="node" onclick="showDetails(\'Sharon Bwalya\', \'Kabwe Central SDA Church\', \'../images/KCMD/KCMDEducationSecretary.jpg\', \'+260770018328\')"><img src="../images/KCMD/KCMDEducationSecretary.jpg" class="node-image"><div class="node-label">Education Secretary</div></div>'}, 'Education', 'KCMD - Education Secretary', '../images/KCMD/KCMDEducationSecretary.jpg'],

   		// Field Marshal
   		[{v:'Field Marshal', f:'<div class="node" onclick="showDetails(\'CHARLES SEMEMBE\', \'Kabwe Central SDA Church\', \'../images/KCMD/KCMDFieldMarshal.jpg\', \'+260000000000\')"><img src="../images/KCMD/KCMDFieldMarshal.jpg" class="node-image"><div class="node-label">Field Marshal</div></div>'}, 'Pathfinder', 'KCMD - Field Marshal', '../images/KCMD/KCMDFieldMarshal.jpg'],

   		// Music Director
   		[{v:'Music Director', f:'<div class="node" onclick="showDetails(\'NCHIMUNYA CHALEKWA\', \'Kabwe Central SDA Church\', \'../images/KCMD/KCMDMusicDirector.jpg\', \'+260000000000\')"><img src="../images/KCMD/KCMDMusicDirector.jpg" class="node-image"><div class="node-label">Music Director</div></div>'}, 'Ambassador', 'KCMD - Music Director', '../images/KCMD/KCMDMusicDirector.jpg'],
   		[{v:'Vice Music Director', f:'<div class="node" onclick="showDetails(\'GEORGE MWANZA\', \'Kabwe Central SDA Church\', \'../images/KCMD/KCMDViceMusicDirector.jpg\', \'+260000000000\')"><img src="../images/KCMD/KCMDViceMusicDirector.jpg" class="node-image"><div class="node-label">Vice Music Director</div></div>'}, 'Music Director', 'KCMD - Vice Music Director', '../images/KCMD/KCMDViceMusicDirector.jpg'],

   		// Planning / Projects
   		[{v:'Planning/Projects', f:'<div class="node" onclick="showDetails(\'Hirah Malambo\', \'Kabwe Central SDA Church\', \'../images/KCMD/KCMDProjects.jpg\', \'+260973801744\')"><img src="../images/KCMD/KCMDProjects.jpg" class="node-image"><div class="node-label">Planning/Projects</div></div>'}, 'President', 'KCMD - Planning and Project Coordinator', '../images/KCMD/KCMDProjects.jpg'],
   		[{v:'Vice Planning/Projects', f:'<div class="node" onclick="showDetails(\'SKINNER TEMBO\', \'Kabwe Central SDA Church\', \'../images/KCMD/KCMDViceProjects.jpg\', \'+260000000000\')"><img src="../images/KCMD/KCMDViceProjects.jpg" class="node-image"><div class="node-label">Vice Planning/Projects</div></div>'}, 'Planning/Projects', 'KCMD - Vice Planning and Project Coordinator', '../images/KCMD/KCMDViceProjects.jpg'],




         
           // ... (similar lines for other positions)
         ]);
   
         var chart = new google.visualization.OrgChart(document.getElementById('chart_div'));
         chart.draw(data, {allowHtml:true});
       }