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
           // GC President
   		[{v:'GC President', f:'<div class="node" onclick="showDetails(\'Pastor TED N.C. WILSON\', \'Ted N.C. Wilson was elected as president of the Seventh-day Adventist world church in July 2010 during the General Conference Session in Atlanta. Born in Takoma Park, Maryland on May 10, 1950, the son of former Adventist world church President Neal C. Wilson and Elinor E. Wilson, Wilson spent part of his childhood in Egypt.\', \'images/GC/gcPresident.jpg\', \'About\')"><img src="../images/GC/gcPresident.jpg" class="node-image"><div class="node-label">GC President</div></div>'}, '', 'GC President', '../images/GC/gcPresident.jpg'],
   		/*
   		// Vice President
   		[{v:'Vice President A', f:'<div class="node" onclick="showDetails(\'Unknown\', \'SDA Church\', \'images/PresidentA.jpg\', \'+260000000000\')"><img src="images/PresidentA.jpg" class="node-image"><div class="node-label">Vice President A</div></div>'}, 'President', 'KEMD-Zone A Vice President', 'images/PresidentA.jpg'],
   		[{v:'Vice President B', f:'<div class="node" onclick="showDetails(\'Peter Mweemba\', \'Kamukuyu SDA Church\', \'images/PresidentB.jpg\', \'+260975598380\')"><img src="images/PresidentB.jpg" class="node-image"><div class="node-label">Vice President B</div></div>'}, 'President', 'KEMD-Zone B Vice President', 'images/PresidentB.jpg'],
   		*/
   		// GC Secretary
   		[{v:'GC Secretary', f:'<div class="node" onclick="showDetails(\'Pastor ERTON KOHLER\', \'Köhler was born in southern Brazil and grew up with a desire to follow in the footsteps of his father, who served as an Adventist pastor. Köhler completed a bachelor’s degree in theology at the Adventist Teaching Institute (now Brazilian Adventist University) in 1989 and graduated from the same school in 2008 with a master’s degree in pastoral theology. Currently, he is pursuing a Doctor of Ministry degree from Andrews University.\', \'../images/GC/gcSecretary.jpg\', \'About\')"><img src="../images/GC/gcSecretary.jpg" class="node-image"><div class="node-label">GC Secretary</div></div>'}, 'GC President', 'GC Secretary', '../images/GC/gcSecretary.jpg'],
   	/*	[{v:'Secretary B', f:'<div class="node" onclick="showDetails(\'Jere Beatrice\', \'Rockside SDA Church\', \'images/Beatrice.jpg\', \'+260967809417\')"><img src="images/Beatrice.jpg" class="node-image"><div class="node-label">Secretary B</div></div>'}, 'Vice President B', 'KEMD-Zone B Secretary', 'images/Beatrice.jpg'],
   		[{v:'Vice Secretary A', f:'<div class="node" onclick="showDetails(\'Unknown\', \'SDA Church\', \'images/Vice SecretaryA.jpg\', \'+260000000000\')"><img src="images/Vice SecretaryA.jpg" class="node-image"><div class="node-label">Vice Secretary A</div></div>'}, 'Vice President A', 'KEMD-Zone A Vice Secretary', 'images/Vice SecretaryA.jpg'],
   		[{v:'Vice Secretary B', f:'<div class="node" onclick="showDetails(\'Mweemba Mutinta\', \'SDA Church\', \'images/Vice SecretaryB.jpg\', \'+260000000000\')"><img src="images/Vice SecretaryB.jpg" class="node-image"><div class="node-label">Vice Secretary B</div></div>'}, 'Vice President B', 'KEMD-Zone B Vice Secretary', 'images/Vice SecretaryB.jpg'],
   		  */
   		// GC CFO
   		[{v:'GC Chief Financial Officer', f:'<div class="node" onclick="showDetails(\'Pastor PAUL DOUGLAS\', \'Paul H. Douglas serves as Chief Financial Officer and Treasurer for the Seventh-day Adventist Church World Headquarters located in Silver Spring, Maryland, and provides global financial leadership to the Church and its family of institutions.  Douglas brings to this role more than 30 years of responsibilities and results in the Americas, Africa, Asia, Europe, and Australia. As part of providing global financial leadership, Douglas engages with Church leaders regarding their organizational stewardship and its impact on the personal stewardship of church members; ensures there is a premium focus placed on managing resources for mission effectively and efficiently; and expects transparency and accountability from everyone involved in the receipt and use of resources placed under their care.\', \'../images/GC/gcCFO.jpg\', \'About\')"><img src="../images/GC/gcCFO.jpg" class="node-image"><div class="node-label">GC Chief Financial Officer</div></div>'}, 'GC President', 'GC Chief Financial Officer', '../images/GC/gcCFO.jpg'],
   	/*	[{v:'Treasurer B', f:'<div class="node" onclick="showDetails(\'Namfukwe Sylvia\', \'Rockside SDA Church\', \'images/Sylvia.jpg\', \'+260769959833\')"><img src="images/Sylvia.jpg" class="node-image"><div class="node-label">Treasurer B</div></div>'}, 'Vice President B', 'KEMD-Zone B Treasurer', 'images/Sylvia.jpg'],
   		[{v:'Vice Treasurer A', f:'<div class="node" onclick="showDetails(\'Unknown\', \'SDA Church\', \'images/Vice TreasurerA.jpg\', \'+260000000000\')"><img src="images/Vice TreasurerA.jpg" class="node-image"><div class="node-label">Treasurer A</div></div>'}, 'Treasurer A', 'KEMD-Zone A Treasurer', 'images/Vice TreasurerA.jpg'],
   		[{v:'Vice Treasurer B', f:'<div class="node" onclick="showDetails(\'Viness Mulenga\', \'SDA Church\', \'images/Vice TreasurerB.jpg\', \'+260000000000\')"><img src="images/Vice TreasurerB.jpg" class="node-image"><div class="node-label">Treasurer B</div></div>'}, 'Treasurer B', 'KEMD-Zone B Treasurer', 'images/Vice TreasurerB.jpg'],
   		  */
   		// GC Youth Director
   		[{v:'GC Youth Director', f:'<div class="node" onclick="showDetails(\'BUSI KHUMALO\', \'SDA Church\', \'images/gcYouthDirector.jpg\', \'+000000000000\')"><img src="images/gcYouthDirector.jpg" class="node-image"><div class="node-label">GC Youth Director</div></div>'}, 'GC Secretary', 'GC Youth Director', 'images/gcYouthDirector.jpg'],
   	/*	[{v:'Parliamentarian B', f:'<div class="node" onclick="showDetails(\'Marvin\', \'Muteteshi SDA Church\', \'images/ParliamentarianB.jpg\', \'+260000000000\')"><img src="images/ParliamentarianB.jpg" class="node-image"><div class="node-label">Parliamentarian B</div></div>'}, 'Vice President B', 'KEMD-Zone B Parliamentarian', 'images/ParliamentarianB.jpg'],
   		  
   		// Chaplain
   		[{v:'Chaplain A', f:'<div class="node" onclick="showDetails(\'Unknown\', \'SDA Church\', \'images/ChaplainA.jpg\', \'+260000000000\')"><img src="images/ChaplainA.jpg" class="node-image"><div class="node-label">Chaplain A</div></div>'}, 'Vice President A', 'KEMD-Zone A Chaplain', 'images/ChaplainA.jpg'],
   		[{v:'Chaplain B', f:'<div class="node" onclick="showDetails(\'Elvis Munengo\', \'Luanshimba SDA Church\', \'images/ChaplainB.jpg\', \'+260969607361\')"><img src="images/ChaplainB.jpg" class="node-image"><div class="node-label">Chaplain B</div></div>'}, 'Vice President B', 'KEMD-Zone B Chaplain', 'images/ChaplainB.jpg'],
   		[{v:'Vice Chaplain A', f:'<div class="node" onclick="showDetails(\'Unknown\', \'SDA Church\', \'images/Vice ChaplainA.jpg\', \'+260000000000\')"><img src="images/Vice ChaplainA.jpg" class="node-image"><div class="node-label">Vice Chaplain A</div></div>'}, 'Chaplain A', 'KEMD-Zone A Vice Chaplain', 'images/Vice ChaplainA.jpg'],
   		[{v:'Vice Chaplain B', f:'<div class="node" onclick="showDetails(\'Kebby Chimbulu\', \'Muteteshi SDA Church\', \'images/Vice ChaplainB.jpg\', \'+260777900745\')"><img src="images/Vice ChaplainB.jpg" class="node-image"><div class="node-label">Vice Chaplain B</div></div>'}, 'Chaplain B', 'KEMD-Zone B Vice Chaplain', 'images/Vice ChaplainB.jpg'],
   		  
   		  
   		// Ambassador Ministry
   		[{v:'Ambassador A', f:'<div class="node" onclick="showDetails(\'Unknown\', \'SDA Church\', \'images/AmbassadorA.jpg\', \'+260000000000\')"><img src="images/AmbassadorA.jpg" class="node-image"><div class="node-label">Ambassador A</div></div>'}, 'Secretary A', 'KEMD-Zone A Ambassador', 'images/AmbassadorA.jpg'],
   		[{v:'Ambassador B', f:'<div class="node" onclick="showDetails(\'Lombe Mwamba\', \'Rockside SDA Church\', \'images/AmbassadorB.jpg\', \'+260760609938\')"><img src="images/AmbassadorB.jpg" class="node-image"><div class="node-label">Ambassador B</div></div>'}, 'Secretary B', 'KEMD-Zone B Ambassador', 'images/AmbassadorB.jpg'],
   		[{v:'Vice Ambassador A', f:'<div class="node" onclick="showDetails(\'Unknown\', \'SDA Church\', \'images/Vice AmbassadorA.jpg\', \'+260000000000\')"><img src="images/Vice AmbassadorA.jpg" class="node-image"><div class="node-label">Vice Ambassador A</div></div>'}, 'Ambassador A', 'KEMD-Zone A Vice Ambassador', 'images/Vice AmbassadorA.jpg'],
   		[{v:'Vice Ambassador B', f:'<div class="node" onclick="showDetails(\'Unknown\', \'SDA Church\', \'images/Vice AmbassadorB.jpg\', \'+260000000000\')"><img src="images/Vice AmbassadorB.jpg" class="node-image"><div class="node-label">Vice Ambassador B</div></div>'}, 'Ambassador B', 'KEMD-Zone B Vice Ambassador', 'images/Vice AmbassadorB.jpg'],
   		  
   		// Pathfinder Ministry
   		[{v:'Pathfinder A', f:'<div class="node" onclick="showDetails(\'Unknown\', \'SDA Church\', \'images/PathfinderA.jpg\', \'+260000000000\')"><img src="images/PathfinderA.jpg" class="node-image"><div class="node-label">Pathfinder A</div></div>'}, 'Secretary A', 'KEMD-Zone A Pathfinder', 'images/PathfinderA.jpg'],
   		[{v:'Pathfinder B', f:'<div class="node" onclick="showDetails(\'Bwalya Moris\', \'Rockside SDA Church\', \'images/Moris.jpg\', \'+260766613234\')"><img src="images/Moris.jpg" class="node-image"><div class="node-label">Pathfinder B</div></div>'}, 'Secretary B', 'KEMD-Zone B Pathfinder', 'images/Moris.jpg'],
   		[{v:'Vice Pathfinder A', f:'<div class="node" onclick="showDetails(\'Unknown\', \'SDA Church\', \'images/Vice PathfinderA.jpg\', \'+260000000000\')"><img src="images/Vice PathfinderA.jpg" class="node-image"><div class="node-label">Vice Pathfinder A</div></div>'}, 'Pathfinder A', 'KEMD-Zone A Vice Pathfinder', 'images/Vice PathfinderA.jpg'],
   		[{v:'Vice Pathfinder B', f:'<div class="node" onclick="showDetails(\'Cheelo Japhet\', \'Kamiswa SDA Church\', \'images/Vice PathfinderB.jpg\', \'+260764346785\')"><img src="images/Vice PathfinderB.jpg" class="node-image"><div class="node-label">Vice Pathfinder B</div></div>'}, 'Pathfinder B', 'KEMD-Zone B Vice Pathfinder', 'images/Vice PathfinderB.jpg'],
   		  */
   		// GC Communication
   		[{v:'GC Communication', f:'<div class="node" onclick="showDetails(\'WILLIAMS COSTA Jr\', \'SDA Church\', \'images/gcCommunication.jpg\', \'+0000000000\')"><img src="images/gcCommunication.jpg" class="node-image"><div class="node-label">GC Communication</div></div>'}, 'GC Secretary', 'GC Communication', 'images/gcCommunication.jpg'],
   	//	[{v:'Adventurer B', f:'<div class="node" onclick="showDetails(\'Kambala Bright\', \'Rockside SDA Church\', \'images/Bright.jpg\', \'+260770801605\')"><img src="images/Bright.jpg" class="node-image"><div class="node-label">Adventurer B</div></div>'}, 'Secretary B', 'KEMD-Zone B Adventurer', 'images/Bright.jpg'],
   	//	[{v:'Vice Adventurer A', f:'<div class="node" onclick="showDetails(\'Unknown\', \'SDA Church\', \'images/Vice AdventurerA.jpg\', \'+260000000000\')"><img src="images/Vice AdventurerA.jpg" class="node-image"><div class="node-label">Vice Adventurer A</div></div>'}, 'Adventurer A', 'KEMD-Zone A Vice Adventurer', 'images/Vice AdventurerA.jpg'],
   	//	[{v:'Vice Adventurer B', f:'<div class="node" onclick="showDetails(\'Brenda Mpanisi\', \'Green Leaf SDA Church <br> +260000000000\', \'images/Vice AdventurerB.jpg\', \'+260000000000\')"><img src="images/Vice AdventurerB.jpg" class="node-image"><div class="node-label">Vice Adventurer B</div></div>'}, 'Adventurer B', 'KEMD-Zone B Vice Adventurer', 'images/Vice AdventurerB.jpg'],
   		
   		// GC Health Ministries
   		[{v:'GC Health Ministries', f:'<div class="node" onclick="showDetails(\'PETER LANDLESS\', \'SDA Church\', \'images/gcHealth.jpg\', \'+0000000000\')"><img src="images/gcHealth.jpg" class="node-image"><div class="node-label">GC Health Ministries</div></div>'}, 'GC Secretary', 'GC Health Ministries', 'images/gcHealth.jpg'],
   	//	[{v:'Communication B', f:'<div class="node" onclick="showDetails(\'Lucky Ngandu\', \'Kamukuyu SDA Church\', \'images/CommunicationB.jpg\', \'+260974712906\')"><img src="images/CommunicationB.jpg" class="node-image"><div class="node-label">Communication B</div></div>'}, 'Education B', 'KEMD-Zone B Communication', 'images/CommunicationB.jpg'],
   		  
   		// GC Stewardship
   		[{v:'GC Stewardship', f:'<div class="node" onclick="showDetails(\'MARCUS F. BOMFIM\', \'SDA Church\', \'images/gcStewardship.jpg\', \'+0000000000\')"><img src="images/gcStewardship.jpg" class="node-image"><div class="node-label">GC Stewardship</div></div>'}, 'GC Secretary', 'GC Stewardship', 'images/gcStewardship.jpg'],
   //		[{v:'Education B', f:'<div class="node" onclick="showDetails(\'Mbaso Clinton\', \'Rockside SDA Church\', \'images/Teacher Clinton Mbaso.jpg\', \'+260968084570\')"><img src="images/Teacher Clinton Mbaso.jpg" class="node-image"><div class="node-label">Education B</div></div>'}, 'Secretary B', 'KEMD-Zone B Education', 'images/Teacher Clinton Mbaso.jpg'],
   //		[{v:'Vice Education A', f:'<div class="node" onclick="showDetails(\'Clive Hansebele\', \'SDA Church\', \'images/Vice EducationA.jpg\', \'+260971458416\')"><img src="images/Vice EducationA.jpg" class="node-image"><div class="node-label">Vice Education A</div></div>'}, 'Secretary A', 'KEMD-Zone A Vice Education', 'images/Vice EducationA.jpg'],
   //		[{v:'Vice Education B', f:'<div class="node" onclick="showDetails(\'Siachona Cecil\', \'Green Leaf SDA Church\', \'images/Vice EducationB.jpg\', \'+260977971795\')"><img src="images/Vice EducationB.jpg" class="node-image"><div class="node-label">Vice Education B</div></div>'}, 'Secretary B', 'KEMD-Zone B Vice Education', 'images/Vice EducationB.jpg'],
   		  
   		// GC Sabbath School/Personal Ministries
   		[{v:'GC Sabbath School/Personal Ministries', f:'<div class="node" onclick="showDetails(\'JAMES HAWARD\', \'SDA Church\', \'images/gcSsPm.jpg\', \'+0000000000\')"><img src="images/gcSsPm.jpg" class="node-image"><div class="node-label">GC Sabbath School/Personal Ministries</div></div>'}, 'GC Secretary', 'GC Sabbath School/Personal Ministries', 'images/gcSsPm.jpg'],
   	//	[{v:'Field Marshal B', f:'<div class="node" onclick="showDetails(\'Frank Njobvu\', \'Kamukuyu SDA Church\', \'images/Field MarshalB.jpg\', \'+260000000000\')"><img src="images/Field MarshalB.jpg" class="node-image"><div class="node-label">Field Marshal B</div></div>'}, 'Parliamentarian B', 'KEMD-Zone B Field Marshal', 'images/Field MarshalB.jpg'],
   		  
   		// GC Education Director
   		[{v:'GC Education Director', f:'<div class="node" onclick="showDetails(\'LISA B. HARDY\', \'SDA Church\', \'images/gcEducation.jpg\', \'+0000000000000\')"><img src="images/gcEducation.jpg" class="node-image"><div class="node-label">GC Education Director</div></div>'}, 'GC Secretary', 'GC Education Director', 'images/gcEducation.jpg'],
   	//	[{v:'Music Director B', f:'<div class="node" onclick="showDetails(\'Mwiinga Juliet\', \'Kabufumu SDA Church\', \'images/Music DirectorB.jpg\', \'+260962580925\')"><img src="images/Music DirectorB.jpg" class="node-image"><div class="node-label">Music Director B</div></div>'}, 'Vice Ambassador B', 'KEMD-Zone B Music Director', 'images/Music DirectorB.jpg'],
   		  
   		// GC Children Ministries
   		[{v:'GC Children Ministries', f:'<div class="node" onclick="showDetails(\'ORATHAI CHURESON\', \'SDA Church\', \'images/gcCm.jpg\', \'+0000000000\')"><img src="images/gcCm.jpg" class="node-image"><div class="node-label">GC Children Ministries</div></div>'}, 'GC Secretary', 'GC Children Ministries', 'images/gcCm.jpg'],
   	//	[{v:'Planning/Projects B', f:'<div class="node" onclick="showDetails(\'Unknown\', \'SDA Church\', \'images/Planning/ProjectsB.jpg\', \'+260000000000\')"><img src="images/Planning/ProjectsB.jpg" class="node-image"><div class="node-label">Music Director B</div></div>'}, 'Education B', 'KEMD-Zone B Music Director', 'images/Planning/ProjectsB.jpg'],
   		
           // ... (similar lines for other positions)
         ]);
   
         var chart = new google.visualization.OrgChart(document.getElementById('chart_div'));
         chart.draw(data, {allowHtml:true});
       }