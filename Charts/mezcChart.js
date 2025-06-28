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
   		[{v:'President', f:'<div class="node" onclick="showDetails(\'Pastor Darlington Muyabila\', \'SDA Church\', \'images/MEZC/President.jpg\', \'+260000000000\')"><img src="images/MEZC/President.jpg" class="node-image"><div class="node-label">President</div></div>'}, '', 'President', 'images/MEZC/President.jpg'],
   		
   		// Secretary
   		[{v:'Executive Secretary', f:'<div class="node" onclick="showDetails(\'Pastor Ethon Chombela\', \'SDA Church\', \'images/MEZC/Secretary.jpg\', \'+260000000000\')"><img src="images/MEZC/Secretary.jpg" class="node-image"><div class="node-label">Executive Secretary</div></div>'}, 'President', 'Executive Secretary', 'images/MEZC/Secretary.jpg'],

   		// Treasurer
   		[{v:'CFO', f:'<div class="node" onclick="showDetails(\'Elder Chipo Miyoba\', \'SDA Church\', \'images/MEZC/CFO.jpg\', \'+260000000000\')"><img src="images/MEZC/CFO.jpg" class="node-image"><div class="node-label">CFO</div></div>'}, 'Executive Secretary', 'CFO', 'images/MEZC/CFO.jpg'],

   		// Parliamentarian
   		[{v:'Stewardship', f:'<div class="node" onclick="showDetails(\'Pastor Timothy Nyirenda\', \'SDA Church\', \'images/MEZC/Stewardship.jpg\', \'+260000000000\')"><img src="images/MEZC/Stewardship.jpg" class="node-image"><div class="node-label">Stewardship</div></div>'}, 'CFO', 'Stewardship', 'images/MEZC/Stewardship.jpg'],
   		[{v:'Youth', f:'<div class="node" onclick="showDetails(\'Pastor Richard Chazingwa\', \'SDA Church\', \'images/MEZC/Youth.jpg\', \'+260000000000\')"><img src="images/MEZC/Youth.jpg" class="node-image"><div class="node-label">Youth</div></div>'}, 'CFO', 'Youth', 'images/MEZC/Youth.jpg'],
   		[{v:'Ministerial', f:'<div class="node" onclick="showDetails(\'Pastor Herbert Lumano\', \'SDA Church\', \'images/MEZC/Ministerial.jpg\', \'+260000000000\')"><img src="images/MEZC/Ministerial.jpg" class="node-image"><div class="node-label">Ministerial</div></div>'}, 'CFO', 'Ministerial', 'images/MEZC/Ministerial.jpg'],
   		[{v:'Personal Ministries', f:'<div class="node" onclick="showDetails(\'Pastor John Chibala\', \'SDA Church\', \'images/MEZC/personalMinistries.jpg\', \'+260000000000\')"><img src="images/MEZC/personalMinistries.jpg" class="node-image"><div class="node-label">Personal Ministries</div></div>'}, 'CFO', 'Personal Ministries', 'images/MEZC/personalMinistries.jpg'],
   		[{v:'Publishing', f:'<div class="node" onclick="showDetails(\'Sr. Christine Tembo\', \'SDA Church\', \'images/MEZC/Publishing.jpg\', \'+260000000000\')"><img src="images/MEZC/Publishing.jpg" class="node-image"><div class="node-label">Publishing</div></div>'}, 'CFO', 'Publishing', 'images/MEZC/Publishing.jpg'],
   		[{v:'Women Ministries', f:'<div class="node" onclick="showDetails(\'Sr. Connie Himayumbula\', \'SDA Church\', \'images/MEZC/womenMinistries.jpg\', \'+260000000000\')"><img src="images/MEZC/womenMinistries.jpg" class="node-image"><div class="node-label">Women Ministries</div></div>'}, 'CFO', 'Women Ministries', 'images/MEZC/womenMinistries.jpg'],
   		  
          
   		[{v:'Region A Youth Chair', f:'<div class="node" onclick="showDetails(\'Derick Mwanza\', \'Kabwe Central Mission District\', \'images/MEZC/MEZCRegionAChair.jpg\', \'+260976161672\')"><img src="images/MEZC/MEZCRegionAChair.jpg" class="node-image"><div class="node-label">Region A Youth Chair</div></div>'}, 'Youth', 'Region A Youth Chair', 'images/MEZC/MEZCRegionAChair.jpg'],

   		[{v:'Publishing', f:'<div class="node" onclick="showDetails(\'Sr. Christine Tembo\', \'SDA Church\', \'images/MEZC/Publishing.jpg\', \'+260000000000\')"><img src="images/MEZC/Publishing.jpg" class="node-image"><div class="node-label">Publishing</div></div>'}, 'CFO', 'Publishing', 'images/MEZC/Publishing.jpg'],

          
           // ... (similar lines for other positions)
         ]);
   
         var chart = new google.visualization.OrgChart(document.getElementById('chart_div'));
         chart.draw(data, {allowHtml:true});
       }