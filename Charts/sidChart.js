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
           // Youth Director
   		[{v:'Youth Director', f:'<div class="node" onclick="showDetails(\'Irvin Gwatiringa\', \'A self motivated inspirational leader that delights in seing things moving.\', \'images/3.jpg\')"><img src="images/3.jpg" class="node-image"><div class="node-label">Youth Director</div></div>'}, '', 'SID Youth Director', 'images/3.jpg'],
   		
   		// President
   		[{v:'President', f:'<div class="node" onclick="showDetails(\'Harrington Akombwa\', \'A self motivated inspirational leader that delights in seing things moving.\', \'images/3.jpg\')"><img src="images/3.jpg" class="node-image"><div class="node-label">President</div></div>'}, 'Youth Director', 'SID President', 'images/3.jpg'],
   		
   		// Vice President
   		[{v:'Vice President', f:'<div class="node" onclick="showDetails(\'Hopeson Bonya\', \'A self motivated inspirational leader that delights in seing things moving.\', \'images/3.jpg\')"><img src="images/3.jpg" class="node-image"><div class="node-label">Vice President</div></div>'}, 'President', 'SID Vice President', 'images/3.jpg'],
   
   		// Secretary
   		[{v:'Executive Secretary', f:'<div class="node" onclick="showDetails(\'Gideon Reyneke\', \'A self motivated inspirational leader that delights in seing things moving.\', \'images/3.jpg\')"><img src="images/3.jpg" class="node-image"><div class="node-label">Executive Secretary</div></div>'}, 'Vice President', 'SID Executive Secretary', 'images/3.jpg'],
           
   		// Treasurer
   		[{v:'Chief Financial Officer', f:'<div class="node" onclick="showDetails(\'Hopekings Ngomba\', \'A self motivated inspirational leader that delights in seing things moving.\', \'images/3.jpg\')"><img src="images/3.jpg" class="node-image"><div class="node-label">Chief Financial Officer</div></div>'}, 'Vice President', 'SID Chief Financial Officer', 'images/3.jpg'],
   		[{v:'Financial Officer A', f:'<div class="node" onclick="showDetails(\'Goodson Shumba\', \'A self motivated inspirational leader that delights in seing things moving.\', \'images/3.jpg\')"><img src="images/3.jpg" class="node-image"><div class="node-label">Financial Officer A</div></div>'}, 'Vice President', 'SID Financial Officer A', 'images/3.jpg'],
   		[{v:'Financial Officer B', f:'<div class="node" onclick="showDetails(\'Micheal Muchula\', \'A self motivated inspirational leader that delights in seing things moving.\', \'images/3.jpg\')"><img src="images/3.jpg" class="node-image"><div class="node-label">Financial Officer B</div></div>'}, 'Vice President', 'SID Financial Officer B', 'images/3.jpg'],
   		 
   		// Stewardship
   		[{v:'Stewardship', f:'<div class="node" onclick="showDetails(\'Mundia Liywali\', \'A self motivated inspirational leader that delights in seing things moving.\', \'images/3.jpg\')"><img src="images/3.jpg" class="node-image"><div class="node-label">Stewardship</div></div>'}, 'Executive Secretary', 'SID Stewardship', 'images/3.jpg'],
   		  
   		// Ministerial
   		[{v:'Ministerial', f:'<div class="node" onclick="showDetails(\'Passmore Mulambo\', \'A self motivated inspirational leader that delights in seing things moving.\', \'images/3.jpg\')"><img src="images/3.jpg" class="node-image"><div class="node-label">Ministerial</div></div>'}, 'Stewardship', 'SID Ministerial', 'images/3.jpg'],
   		  
   		// Women / Children
   		[{v:'Women / Children', f:'<div class="node" onclick="showDetails(\'Margery Herinirina\', \'A self motivated inspirational leader that delights in seing things moving.\', \'images/3.jpg\')"><img src="images/3.jpg" class="node-image"><div class="node-label">Women / Children</div></div>'}, 'Ministerial', 'SID Women / Children', 'images/3.jpg'],
   		 
           // ... (similar lines for other positions)
         ]);
   
         var chart = new google.visualization.OrgChart(document.getElementById('chart_div'));
         chart.draw(data, {allowHtml:true});
       }