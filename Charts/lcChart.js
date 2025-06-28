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
           // President
   		[{v:'President', f:'<div class="node" onclick="showDetails(\'Rabson Musonda\', \'A self motivated inspirational leader that delights in seing things moving.\', \'images/3.jpg\')"><img src="images/3.jpg" class="node-image"><div class="node-label">President</div></div>'}, '', 'KEMD President', 'images/3.jpg'],
   		
   		// Vice President
   		[{v:'Vice President A', f:'<div class="node" onclick="showDetails(\'Madam\', \'A self motivated inspirational leader that delights in seing things moving.\', \'images/3.jpg\')"><img src="images/3.jpg" class="node-image"><div class="node-label">Vice President A</div></div>'}, 'President', 'KEMD-Zone A Vice President', 'images/3.jpg'],
   		  
   		[{v:'Vice President B', f:'<div class="node" onclick="showDetails(\'Peter Mweemba\', \'A self motivated inspirational leader that delights in seing things moving.\', \'images/3.jpg\')"><img src="images/3.jpg" class="node-image"><div class="node-label">Vice President B</div></div>'}, 'President', 'KEMD-Zone B Vice President', 'images/3.jpg'],
   		
   		// Secretary
   		[{v:'Secretary A', f:'<div class="node" onclick="showDetails(\'Madam\', \'A self motivated inspirational leader that delights in seing things moving.\', \'images/3.jpg\')"><img src="images/3.jpg" class="node-image"><div class="node-label">Secretary A</div></div>'}, 'Vice President A', 'KEMD-Zone A Secretary', 'images/3.jpg'],
   		  
   		[{v:'Secretary B', f:'<div class="node" onclick="showDetails(\'Beatrice Jere\', \'A self motivated inspirational leader that delights in seing things moving.\', \'images/3.jpg\')"><img src="images/3.jpg" class="node-image"><div class="node-label">Secretary B</div></div>'}, 'Vice President B', 'KEMD-Zone B Secretary', 'images/3.jpg'],
   		  
   		// Treasurer
   		[{v:'Treasurer A', f:'<div class="node" onclick="showDetails(\'Madam\', \'A self motivated inspirational leader that delights in seing things moving.\', \'images/3.jpg\')"><img src="images/3.jpg" class="node-image"><div class="node-label">Treasurer A</div></div>'}, 'Vice President A', 'KEMD-Zone A Treasurer', 'images/3.jpg'],
   		  
   		[{v:'Treasurer B', f:'<div class="node" onclick="showDetails(\'Madam\', \'A self motivated inspirational leader that delights in seing things moving.\', \'images/3.jpg\')"><img src="images/3.jpg" class="node-image"><div class="node-label">Treasurer B</div></div>'}, 'Vice President B', 'KEMD-Zone B Treasurer', 'images/3.jpg'],
   		  
   		// Parliamentarian
   		[{v:'Parliamentarian A', f:'<div class="node" onclick="showDetails(\'Madam\', \'A self motivated inspirational leader that delights in seing things moving.\', \'images/3.jpg\')"><img src="images/3.jpg" class="node-image"><div class="node-label">Parliamentarian A</div></div>'}, 'Vice President A', 'KEMD-Zone A Parliamentarian', 'images/3.jpg'],
   		  
   		[{v:'Parliamentarian B', f:'<div class="node" onclick="showDetails(\'Madam\', \'A self motivated inspirational leader that delights in seing things moving.\', \'images/3.jpg\')"><img src="images/3.jpg" class="node-image"><div class="node-label">Parliamentarian B</div></div>'}, 'Vice President B', 'KEMD-Zone B Parliamentarian', 'images/3.jpg'],
   		  
   		// Ambassador Ministry
   		[{v:'Ambassador A', f:'<div class="node" onclick="showDetails(\'Madam\', \'A self motivated inspirational leader that delights in seing things moving.\', \'images/3.jpg\')"><img src="images/3.jpg" class="node-image"><div class="node-label">Ambassador A</div></div>'}, 'Secretary A', 'KEMD-Zone A Ambassador', 'images/3.jpg'],
   		  
   		[{v:'Ambassador B', f:'<div class="node" onclick="showDetails(\'Madam\', \'A self motivated inspirational leader that delights in seing things moving.\', \'images/3.jpg\')"><img src="images/3.jpg" class="node-image"><div class="node-label">Ambassador B</div></div>'}, 'Secretary B', 'KEMD-Zone B Ambassador', 'images/3.jpg'],
   		  
   		[{v:'Vice Ambassador A', f:'<div class="node" onclick="showDetails(\'Madam\', \'A self motivated inspirational leader that delights in seing things moving.\', \'images/3.jpg\')"><img src="images/3.jpg" class="node-image"><div class="node-label">Vice Ambassador A</div></div>'}, 'Ambassador A', 'KEMD-Zone A Vice Ambassador', 'images/3.jpg'],
   		  
   		[{v:'Vice Ambassador B', f:'<div class="node" onclick="showDetails(\'Madam\', \'A self motivated inspirational leader that delights in seing things moving.\', \'images/3.jpg\')"><img src="images/3.jpg" class="node-image"><div class="node-label">Vice Ambassador B</div></div>'}, 'Ambassador B', 'KEMD-Zone B Vice Ambassador', 'images/3.jpg'],
   		  
   		// Pathfinder Ministry
   		[{v:'Pathfinder A', f:'<div class="node" onclick="showDetails(\'Madam\', \'A self motivated inspirational leader that delights in seing things moving.\', \'images/3.jpg\')"><img src="images/3.jpg" class="node-image"><div class="node-label">Pathfinder A</div></div>'}, 'Secretary A', 'KEMD-Zone A Pathfinder', 'images/3.jpg'],
   		  
   		[{v:'Pathfinder B', f:'<div class="node" onclick="showDetails(\'Morris Bwalya\', \'A self motivated inspirational leader that delights in seing things moving.\', \'images/3.jpg\')"><img src="images/3.jpg" class="node-image"><div class="node-label">Pathfinder B</div></div>'}, 'Secretary B', 'KEMD-Zone B Pathfinder', 'images/3.jpg'],
   		  
   		[{v:'Vice Pathfinder A', f:'<div class="node" onclick="showDetails(\'Madam\', \'A self motivated inspirational leader that delights in seing things moving.\', \'images/3.jpg\')"><img src="images/3.jpg" class="node-image"><div class="node-label">Vice Pathfinder A</div></div>'}, 'Pathfinder A', 'KEMD-Zone A Vice Pathfinder', 'images/3.jpg'],
   		  
   		[{v:'Vice Pathfinder B', f:'<div class="node" onclick="showDetails(\'Madam\', \'A self motivated inspirational leader that delights in seing things moving.\', \'images/3.jpg\')"><img src="images/3.jpg" class="node-image"><div class="node-label">Vice Pathfinder B</div></div>'}, 'Pathfinder B', 'KEMD-Zone B Vice Pathfinder', 'images/3.jpg'],
   		  
   		// Adventurer Ministry
   		[{v:'Adventurer A', f:'<div class="node" onclick="showDetails(\'Madam\', \'A self motivated inspirational leader that delights in seing things moving.\', \'images/3.jpg\')"><img src="images/3.jpg" class="node-image"><div class="node-label">Adventurer A</div></div>'}, 'Secretary A', 'KEMD-Zone A Adventurer', 'images/3.jpg'],
   		  
   		[{v:'Adventurer B', f:'<div class="node" onclick="showDetails(\'Madam\', \'A self motivated inspirational leader that delights in seing things moving.\', \'images/3.jpg\')"><img src="images/3.jpg" class="node-image"><div class="node-label">Adventurer B</div></div>'}, 'Secretary B', 'KEMD-Zone B Adventurer', 'images/3.jpg'],
   		  
   		[{v:'Vice Adventurer A', f:'<div class="node" onclick="showDetails(\'Madam\', \'A self motivated inspirational leader that delights in seing things moving.\', \'images/3.jpg\')"><img src="images/3.jpg" class="node-image"><div class="node-label">Vice Adventurer A</div></div>'}, 'Adventurer A', 'KEMD-Zone A Vice Adventurer', 'images/3.jpg'],
   		  
   		[{v:'Vice Adventurer B', f:'<div class="node" onclick="showDetails(\'Madam\', \'A self motivated inspirational leader that delights in seing things moving.\', \'images/3.jpg\')"><img src="images/3.jpg" class="node-image"><div class="node-label">Vice Adventurer B</div></div>'}, 'Adventurer B', 'KEMD-Zone B Vice Adventurer', 'images/3.jpg'],
   		
   		// Communication
   		[{v:'Communication A', f:'<div class="node" onclick="showDetails(\'Madam\', \'A self motivated inspirational leader that delights in seing things moving.\', \'images/3.jpg\')"><img src="images/3.jpg" class="node-image"><div class="node-label">Communication A</div></div>'}, 'Education A', 'KEMD-Zone A Communication', 'images/3.jpg'],
   		  
   		[{v:'Communication B', f:'<div class="node" onclick="showDetails(\'Madam\', \'A self motivated inspirational leader that delights in seing things moving.\', \'images/3.jpg\')"><img src="images/3.jpg" class="node-image"><div class="node-label">Communication B</div></div>'}, 'Education B', 'KEMD-Zone B Communication', 'images/3.jpg'],
   		  
   		// Education
   		[{v:'Education A', f:'<div class="node" onclick="showDetails(\'Madam\', \'A self motivated inspirational leader that delights in seing things moving.\', \'images/3.jpg\')"><img src="images/3.jpg" class="node-image"><div class="node-label">Education A</div></div>'}, 'Secretary A', 'KEMD-Zone A Education', 'images/3.jpg'],
   		  
   		[{v:'Education B', f:'<div class="node" onclick="showDetails(\'Madam\', \'A self motivated inspirational leader that delights in seing things moving.\', \'images/3.jpg\')"><img src="images/3.jpg" class="node-image"><div class="node-label">Education B</div></div>'}, 'Secretary B', 'KEMD-Zone B Education', 'images/3.jpg'],
   		  
   		// Field Marshal
   		[{v:'Field Marshal A', f:'<div class="node" onclick="showDetails(\'Madam\', \'A self motivated inspirational leader that delights in seing things moving.\', \'images/3.jpg\')"><img src="images/3.jpg" class="node-image"><div class="node-label">Field Marshal A</div></div>'}, 'Parliamentarian A', 'KEMD-Zone A Field Marshal', 'images/3.jpg'],
   		 
   		[{v:'Field Marshal B', f:'<div class="node" onclick="showDetails(\'Madam\', \'A self motivated inspirational leader that delights in seing things moving.\', \'images/3.jpg\')"><img src="images/3.jpg" class="node-image"><div class="node-label">Field Marshal B</div></div>'}, 'Parliamentarian B', 'KEMD-Zone B Field Marshal', 'images/3.jpg'],
   		  
   		// Music Director
   		[{v:'Music Director A', f:'<div class="node" onclick="showDetails(\'Madam\', \'A self motivated inspirational leader that delights in seing things moving.\', \'images/3.jpg\')"><img src="images/3.jpg" class="node-image"><div class="node-label">Music Director A</div></div>'}, 'Vice Ambassador A', 'KEMD-Zone A Music Director', 'images/3.jpg'],
   		  
   		[{v:'Music Director B', f:'<div class="node" onclick="showDetails(\'Clinton Mbaso\', \'A self motivated inspirational leader that delights in seing things moving.\', \'images/clinton.jpg\')"><img src="images/clinton.jpg" class="node-image"><div class="node-label">Music Director B</div></div>'}, 'Vice Ambassador B', 'KEMD-Zone B Music Director', 'images/clinton.jpg'],
   		  
           // ... (similar lines for other positions)
         ]);
   
         var chart = new google.visualization.OrgChart(document.getElementById('chart_div'));
         chart.draw(data, {allowHtml:true});
       }