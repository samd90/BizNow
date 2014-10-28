// this sets the background color of the master UIView (when there are no windows/tab groups on it)

//java script functions

var currentTime = new Date();
var month = currentTime.getMonth();
var day1 = currentTime.getDate();
var day2 = currentTime.getDate() + 1;
var day3 = currentTime.getDate() + 2;
var day4 = currentTime.getDate() + 3;
var day5 = currentTime.getDate() + 4;
var day6 = currentTime.getDate() + 5;
var day7 = currentTime.getDate() + 6;

var Data;

//Globel variables for textFields - windowAddDataInvoce
var start_time;
var end_time;
var amount;
var name;
var phone;
var service;
var reminder;

var start_pick;
var end_pick;

////Globel variables for textFields - windowAddExpense
var description_ex;
var type_ex;
var amount_ex;

var windowPayment;
var windowHistory;

monthNameShort = function(e) {
	switch(e) {
	case 0:
		e = 'Jan';
		break;
	case 1:
		e = 'Feb';
		break;
	case 2:
		e = 'Mar';
		break;
	case 3:
		e = 'Apr';
		break;
	case 4:
		e = 'May';
		break;
	case 5:
		e = 'Jun';
		break;
	case 6:
		e = 'Jul';
		break;
	case 7:
		e = 'Aug';
		break;
	case 8:
		e = 'Sep';
		break;
	case 9:
		e = 'Oct';
		break;
	case 10:
		e = 'Nov';
		break;
	case 11:
		e = 'Dec';
		break;
	};
	return e;
};



btnDays = function(e) {
	var btnDay = Ti.UI.createButton({
		top : (Titanium.Platform.osname ==='android') ?  5: 5,
		left : e.left,
		width : (Titanium.Platform.osname ==='android') ?  Ti.UI.SIZE: 45,
		height : 40,
		color : '#00a99d',
		backgroundColor:'#fff',
		current : e.current,
		// borderWidth : 1,
		// style : Titanium.UI.iPhone.SystemButtonStyle.BORDERED,
		title : e.title,
		font : {
			fontSize : (e.current ==='Yes') ?  16: 14,
			// color : '#00a99d'
			fontWeight : (e.current ==='Yes') ?  'bold': 'normal'
		}
	});
	
	
	return btnDay;
};


createLable = function(e){
	var lable = Ti.UI.createLabel({
		left : 10,
		right : 0,
		top : e.top,
		bottom : 0,
		width : 100,
		height : 40,
		text : e.text,
		color:'#00a99d'
	});
	return lable;
};

createTextBox = function(e){
	var textField = Ti.UI.createTextField({
		// left : 120,
		right : 10,	
		top : e.top,
		bottom : 0,
		width : 190,
		height : 40,
		backgroundColor:'#00a99d',
	// borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	color : '#fff'
	});
	return textField;
};






//create table view
tableView = function(e){
	var tableView = Titanium.UI.createTableView({
		left : 0,
		right : 0,
		top : e.top,
		bottom : 0,
		width : Ti.UI.FILL,
		height : Ti.UI.FILL,
		data:e.data,
		separatorColor:'gray'
	});
	//-----------------------------------Day's button--------------------------
	if(e.tableName === 'time')
	{
		tableView.addEventListener('click', function(e){
			var windowAddDataInvoce = Ti.UI.createWindow({
				title : 'Biz Now',
				backgroundColor : '#fff',
				barColor:'#00a99d',
				titleImage: (Titanium.Platform.osname ==='android') ? 'Icons-150dpi-10.png': 'Icons-10.png',
				
			});
			
			if (Ti.Platform.osname === 'android') {
				// windowAddDataInvoce.add(new createTopView());
				
				//create the custom top bar
				var topView = Ti.UI.createView({
				top:0,
				left:0,
				width:Ti.UI.FILL,
				height:60,
			
				backgroundColor:'#00a99d',
			});
			
			var btnMenu = Ti.UI.createButton({
				// systemButton: Ti.UI.iPhone.SystemButton.ACTION
				// title : 'Menu',
				top:10,
				left:10,
				backgroundImage: 'New-Buttons-02.png',
				color: '#ffffff',
				width:40,
				height:40
			});
			
			var btnLogo = Ti.UI.createButton({
				// systemButton: Ti.UI.iPhone.SystemButton.DONE
				// title : 'More'
				// top:0,
				// left:0,
				backgroundImage: (Titanium.Platform.osname ==='android') ? 'Icons-150dpi-10.png': 'Icons-10.png',
				color: '#ffffff',
				// width:40,
				// height:40
				// layout: horizontal,
		    	height: 40,
		    	width: 120
			});
		
			var btnAdd = Ti.UI.createButton({
				// systemButton: Ti.UI.iPhone.SystemButton.DONE
				// title : 'More'
				top:10,
				right:10,
				backgroundImage: 'Icons-06.png',
				color: '#ffffff',
				width:40,
				height:40
			});
			
			btnMenu.addEventListener('click', function(e) {
				//button click event
				windowAddDataInvoce.close();
				
			});
			
			topView.add(btnMenu);
			topView.add(btnLogo);
			topView.add(btnAdd);
		
			windowAddDataInvoce.add(topView);
				windowAddDataInvoce.addEventListener('open', function(e) {
					var activity = windowAddDataInvoce.activity;
		
					// if( Alloy.Globals.Android.Api >= 11 ) {
					activity.actionBar.title = "Biz Now";
					activity.actionBar.displayHomeAsUp = true;
					// activity.actionBar.onHomeIconItemSelected = function() {
					// alert("Home icon clicked!");
					// };
					activity.actionBar.hide();
		
					activity.onCreateOptionsMenu = function(e) {
		
						var menu = e.menu;
		
						// Menu Item 1
						var menuItem1 = menu.add({
							// title : "Menu",
							icon: 'Icons-05.png',
		
							showAsAction : Ti.Android.SHOW_AS_ACTION_ALWAYS
						});
						menuItem1.addEventListener("click", function(e) {
							alert("I was clicked Menu");
						});
		
						// Menu Item 2
						var menuItem2 = menu.add({
							// title : "More",
							icon: 'Icons-06.png',
		
							showAsAction : Ti.Android.SHOW_AS_ACTION_ALWAYS
						});
						menuItem2.addEventListener("click", function(e) {
							alert("I was clicked More");
						});
					};
					// }
				});
			}
			
			
			
			var btnBack = Ti.UI.createButton({
					// systemButton: Ti.UI.iPhone.SystemButton.ACTION
					// title : 'Menu',
					backgroundImage: 'New-Buttons-02.png',
					color: '#ffffff',
					width:40,
					height:40
				});
				
				var btnAdd = Ti.UI.createButton({
				// systemButton: Ti.UI.iPhone.SystemButton.DONE
				// title : 'More'
				top:0,
				right:0,
				backgroundImage: 'Icons-06.png',
				color: '#ffffff',
				width:40,
				height:40
			});
			
				btnBack.addEventListener('click', function(e){
					windowAddDataInvoce.close();
				});
			
				windowAddDataInvoce.leftNavButton = btnBack;
			
			// windowAddDataInvoce.leftNavButton = btnMenu;
			windowAddDataInvoce.rightNavButton = btnAdd;
			
			windowAddDataInvoce.add(new createLable({
				top : 70,
				text : 'Start'
			}));
			
			
			start = Ti.UI.createTextField({
				top : 70,
				right : 10,	
				bottom : 0,
				width : 190,
				height : 40,
				editable : false,
				backgroundColor:'#00a99d',
				color : '#fff',
				hintText : 'Start'
				
			});
			
			windowAddDataInvoce.add(start);
			
			
			
			
			start.addEventListener('click',function(e){
				var picker = Ti.UI.createPicker();
                	picker.showTimePickerDialog({
                		
                    callback: function(e) {
                        if (e.cancel) {
                            Ti.API.info('user canceled dialog');
                        } else {
                            Ti.API.info('user selected date: ' + e.value);
                            //get time value
                           var d = new Date(e.value);
                           var hour = d.getHours();
                           var min = d.getMinutes();
                            start_pick = e.value;
                           var amPM = '';
                           if(hour<12){
                           	amPM = 'AM';
                           }else{
                           	amPM = 'PM';
                           }
                           if(hour == 0)
                           {
                           	hour = 12;
                           }
                           if(hour > 12){
                           	hour = hour-12;
                           }
                          
                           start.value = hour +' : '+ min + ' : ' + amPM;
                        }
                    }
                   
                });
              
               
               
			});
			
			windowAddDataInvoce.add(new createLable({
				top : 120,
				text : 'End'
			}));
			end = Ti.UI.createTextField({
				top : 120,
				right : 10,	
				bottom : 0,
				width : 190,
				height : 40,
				editable : false,
				backgroundColor:'#00a99d',
				color : '#fff',
				hintText : 'End',
				
			});
			
			end.addEventListener('click',function(e){
				var picker = Ti.UI.createPicker();
                	picker.showTimePickerDialog({
                    callback: function(e) {
                        if (e.cancel) {
                            Ti.API.info('user canceled dialog');
                        } else {
                            Ti.API.info('user selected date: ' + e.value);
                           //get time value
                           var d = new Date(e.value);
                           var hour = d.getHours();
                           var min = d.getMinutes();
                           end_pick = e.value;
                           var amPM = '';
                           if(hour<12){
                           	amPM = 'AM';
                           }else{
                           	amPM = 'PM';
                           }
                           if(hour == 0)
                           {
                           	hour = 12;
                           }
                           if(hour > 12){
                           	hour = hour-12;
                           }
                         //  start_pick = e.value;
                           end.value = hour +' : '+ min + ' : ' + amPM;
                        }
                    }
                   
                });
             
			});
			
			
			
			windowAddDataInvoce.add(end);
			
			windowAddDataInvoce.add(new createLable({
				top : 170,
				text : 'Service'
			}));
			
			service = Ti.UI.createTextField({
				top : 170,
				right : 10,	
				bottom : 0,
				width : 190,
				height : 40,
				backgroundColor:'#00a99d',
				color : '#fff',
				hintText : 'Service'
			});
			
			windowAddDataInvoce.add(service);
			
			windowAddDataInvoce.add(new createLable({
				top : 220,
				text : 'Name'
			}));
			
			name = Ti.UI.createTextField({
				top : 220,
				right : 10,	
				bottom : 0,
				width : 190,
				height : 40,
				backgroundColor:'#00a99d',
				color : '#fff',
				hintText : 'Name'
			});
			
			windowAddDataInvoce.add(name);
			
			windowAddDataInvoce.add(new createLable({
				top : 270,
				text : 'Phone'
			}));
			
			phone = Ti.UI.createTextField({
				top : 270,
				right : 10,	
				bottom : 0,
				width : 190,
				height : 40,
				backgroundColor:'#00a99d',
				color : '#fff',
				hintText : 'Phone',
				keyboardType : Ti.UI.KEYBOARD_NUMBER_PAD
			});
			
						
			windowAddDataInvoce.add(phone);
			
			windowAddDataInvoce.add(new createLable({
				top : 320,
				text : 'Amount'
			}));
			
			amount = Ti.UI.createTextField({
				top : 320,
				right : 10,	
				bottom : 0,
				width : 190,
				height : 40,
				backgroundColor:'#00a99d',
				color : '#fff',
				hintText : 'Amount',
				keyboardType : Ti.UI.KEYBOARD_NUMBER_PAD
			});
			
			windowAddDataInvoce.add(amount);
			
			windowAddDataInvoce.add(new createLable({
				top : 370,
				text : 'Reminder'
			}));
			
			reminder = Ti.UI.createTextField({
				top : 370,
				right : 10,	
				bottom : 0,
				width : 190,
				height : 40,
				hintText : 'Reminder',
				backgroundColor:'#00a99d',
				color : '#fff'
			});
			
			windowAddDataInvoce.add(reminder);
			
			
			windowAddDataInvoce.add(new createButton({
				left:10,
				top : 440,
				height:30,
				width:(Titanium.Platform.osname ==='android') ?  '45%': 140,
				title:'Send Invoice',
				backgroundColor:'#00a99d',
				color:'#fff',
			}));
			
			// windowAddDataInvoce.add(new createButton({
				// // left:170,
				// right:10,
				// top : 440,
				// height:30,
				// width:(Titanium.Platform.osname ==='android') ?  '45%' : 140,
				// title:'Cancel'
			// }));
			
			var btnCancel = Ti.UI.createButton({
					// left:170,
				right:10,
				top : 440,
				height:30,
				width:(Titanium.Platform.osname ==='android') ?  '45%' : 140,
				title:'Cancel',
				backgroundColor:'#00a99d',
				color:'#fff'
				});
			
				btnCancel.addEventListener('click', function(e){
					windowAddDataInvoce.close();
				});
				
				windowAddDataInvoce.add(btnCancel);
			

			tab1.open(windowAddDataInvoce, {
						animated : true
					});
		});
	}
	else if(e.tableName === 'payments')
	{
		tableView.addEventListener('click', function(e){
			if(e.index === 0)
			{
				btnPayments.fireEvent('click');
			}
			else
			{
				btnHistory.fireEvent('click');
			}
		});
	}
	else if(e.tableName === 'Expenses')
	{
		tableView.addEventListener('click', function(e){
			if(e.index === 0)
			{
				var windowAddExpense = Ti.UI.createWindow({
					title : 'Biz Now',
					backgroundColor : '#fff',
					barColor:'#00a99d',
					titleImage: (Titanium.Platform.osname ==='android') ? 'Icons-150dpi-10.png': 'Icons-10.png',
				});
				
				if (Ti.Platform.osname === 'android') {
					// windowAddExpense.add(new createTopView());
					
					//create the custom top bar
				var topView = Ti.UI.createView({
				top:0,
				left:0,
				width:Ti.UI.FILL,
				height:60,
				backgroundColor:'#00a99d',
			});
			
			var btnMenu = Ti.UI.createButton({
				// systemButton: Ti.UI.iPhone.SystemButton.ACTION
				// title : 'Menu',
				top:10,
				left:10,
				backgroundImage: 'New-Buttons-02.png',
				color: '#ffffff',
				width:40,
				height:40
			});
			
			var btnLogo = Ti.UI.createButton({
				// systemButton: Ti.UI.iPhone.SystemButton.DONE
				// title : 'More'
				// top:0,
				// left:0,
				backgroundImage: (Titanium.Platform.osname ==='android') ? 'Icons-150dpi-10.png': 'Icons-10.png',
				color: '#ffffff',
				// width:40,
				// height:40
				// layout: horizontal,
		    	height: 40,
		    	width: 120
			});
		
			var btnAdd = Ti.UI.createButton({
				// systemButton: Ti.UI.iPhone.SystemButton.DONE
				// title : 'More'
				top:10,
				right:10,
				backgroundImage: 'Icons-06.png',
				color: '#ffffff',
				width:40,
				height:40
			});
			
			btnMenu.addEventListener('click', function(e) {
				//button click event
				windowAddExpense.close();
				
			});
			
			topView.add(btnMenu);
			topView.add(btnLogo);
			topView.add(btnAdd);
		
			windowAddExpense.add(topView);
					windowAddExpense.addEventListener('open', function(e) {
						var activity = windowAddExpense.activity;
			
						// if( Alloy.Globals.Android.Api >= 11 ) {
						activity.actionBar.title = "Biz Now";
						activity.actionBar.displayHomeAsUp = true;
						// activity.actionBar.onHomeIconItemSelected = function() {
						// alert("Home icon clicked!");
						// };
						activity.actionBar.hide();
			
						activity.onCreateOptionsMenu = function(e) {
			
							var menu = e.menu;
			
							// Menu Item 1
							var menuItem1 = menu.add({
								// title : "Menu",
								icon: 'Icons-05.png',
			
								showAsAction : Ti.Android.SHOW_AS_ACTION_ALWAYS
							});
							menuItem1.addEventListener("click", function(e) {
								alert("I was clicked Menu");
							});
			
							// Menu Item 2
							var menuItem2 = menu.add({
								// title : "More",
								icon: 'Icons-06.png',
			
								showAsAction : Ti.Android.SHOW_AS_ACTION_ALWAYS
							});
							menuItem2.addEventListener("click", function(e) {
								alert("I was clicked More");
							});
						};
						// }
					});
				}
				
				var lable = Ti.UI.createLabel({
					top : (Titanium.Platform.osname ==='android') ?  68: 8,
					width : 100,
					height : 40,
					text : 'Expense',
					color:'#00a99d',
					font:{
						fontSize:20,
						fontWeight:'bold'
					}
				});
				
				windowAddExpense.add(lable);
				
				var btnBack = Ti.UI.createButton({
					// systemButton: Ti.UI.iPhone.SystemButton.ACTION
					// title : 'Menu',
					backgroundImage: 'New-Buttons-02.png',
					color: '#ffffff',
					width:40,
					height:40
				});
				
				var btnAdd = Ti.UI.createButton({
				// systemButton: Ti.UI.iPhone.SystemButton.DONE
				// title : 'More'
				top:0,
				right:0,
				backgroundImage: 'Icons-06.png',
				color: '#ffffff',
				width:40,
				height:40
			});
			
				btnBack.addEventListener('click', function(e){
					windowAddExpense.close();
				});
			
				windowAddExpense.leftNavButton = btnBack;
				
				// windowAddExpense.leftNavButton = btnMenu;
				windowAddExpense.rightNavButton = btnAdd;
				
				windowAddExpense.add(new createLable({
					top : (Titanium.Platform.osname ==='android') ?  110: 50,
					text : 'Description'
				}));
				
				description_ex = Ti.UI.createTextField({
				top : (Titanium.Platform.osname ==='android') ?  110: 50,
				right : 10,	
				bottom : 0,
				width : 190,
				hintText : 'Description',
				height : 40,
				backgroundColor:'#00a99d',
				color : '#fff'
				});
			
				windowAddExpense.add(description_ex);
				
				windowAddExpense.add(new createLable({
					top : (Titanium.Platform.osname ==='android') ?  160: 100,
					text : 'Type'
				}));
				
				type_ex = Ti.UI.createTextField({
				top : (Titanium.Platform.osname ==='android') ?  160: 100,
				right : 10,	
				bottom : 0,
				width : 190,
				height : 40,
				backgroundColor:'#00a99d',
				color : '#fff',
				hintText : 'Type'
				});
			
				windowAddExpense.add(type_ex);
				
				windowAddExpense.add(new createLable({
					top : (Titanium.Platform.osname ==='android') ?  210: 150,
					text : 'Amount'
				}));
				
				amount_ex = Ti.UI.createTextField({
				top : (Titanium.Platform.osname ==='android') ?  210: 150,
				right : 10,	
				bottom : 0,
				hintText : 'Amount',
				width : 190,
				height : 40,
				backgroundColor:'#00a99d',
				keyboardType : Ti.UI.KEYBOARD_NUMBER_PAD,
				color : '#fff'
				});
			
				windowAddExpense.add(amount_ex);
							
				windowAddExpense.add(new createButton({
					
					top : (Titanium.Platform.osname ==='android') ?  270: 210,
					height:30,
					width:(Titanium.Platform.osname ==='android') ?  '45%': 120,
					title:'Scan Expense',
					backgroundColor:'#00a99d',
					color:'#fff',
				}));
				
				var sendInvoice_ex = Ti.UI.createButton({
					top : (Titanium.Platform.osname ==='android') ?  350: 280,
					height:30,
					width:(Titanium.Platform.osname ==='android') ?  '60%': 160,
					title:'Send Invoice',
					backgroundColor:'#00a99d',
					color:'#fff',
				});
				
				windowAddExpense.add(sendInvoice_ex);
				
				sendInvoice_ex.addEventListener('click', function(e){
					
					var description_ex_ = description_ex.value;
					var type_ex_ = type_ex.value;
					var amount_ex_ = amount_ex.value;
					
					var Jsondata = [{description:description_ex_, type:type_ex_, amount:amount_ex_}];
					
					
					var xhr = Ti.Network.createHTTPClient();
					
						xhr.setTimeout(10000);
						xhr.open("POST",'http://162.243.145.226:3000/collections/expense');
						xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
						xhr.send(JSON.stringify(Jsondata));
						xhr.onerror = function(){
							Ti.API.info("Error in connecting to server");
						};
						xhr.onload = function(){
							//Ti.API.info('The API responce is : ' + this.responseText);
							//alert("Your Expense Added Successfully");
							windowAddExpense.close();
						};
						
					
				});
				
				tab1.open(windowAddExpense, {
						animated : true
					});
			}
			else
			{
				btnExpensesHistory.fireEvent('click');
			}
		});
	}
	
	return tableView;
};

createButton = function(e){
	var button = Ti.UI.createButton({
		left:e.left,
		top:e.top,
		right:e.right,
		width:e.width,
		height : e.height,
		title:e.title,
		backgroundColor:e.backgroundColor,
		color:e.color,
		backgroundImage: e.backgroundImage,
	});
	
	if(e.title === 'Cancel')
	{
		button.addEventListener('click', function(){
			btnAppointments.fireEvent('click');
		});
	}
	else if(e.backgroundImage === 'New-Buttons-06.png')
	{
		button.addEventListener('click', function(){
			btnAppointments.fireEvent('click');
		});
	}
	else if(e.backgroundImage === 'New-Buttons-03.png')
	{
		button.addEventListener('click', function(){
			var windowMainPayments = Ti.UI.createWindow({
				title : 'Biz Now',
				backgroundColor : '#fff',
				barColor:'#00a99d',
				titleImage: (Titanium.Platform.osname ==='android') ? 'Icons-150dpi-10.png': 'Icons-10.png',
			});
			
			if((Titanium.Platform.osname ==='android'))
			{
				// windowMainPayments.add(new createTopView());
				
				//create the custom top bar
				var topView = Ti.UI.createView({
				top:0,
				left:0,
				width:Ti.UI.FILL,
				height:60,
				backgroundColor:'#00a99d',
			});
			
			var btnMenu = Ti.UI.createButton({
				// systemButton: Ti.UI.iPhone.SystemButton.ACTION
				// title : 'Menu',
				top:10,
				left:10,
				backgroundImage: 'New-Buttons-02.png',
				color: '#ffffff',
				width:40,
				height:40
			});
			
			var btnLogo = Ti.UI.createButton({
				// systemButton: Ti.UI.iPhone.SystemButton.DONE
				// title : 'More'
				// top:0,
				// left:0,
				backgroundImage: (Titanium.Platform.osname ==='android') ? 'Icons-150dpi-10.png': 'Icons-10.png',
				color: '#ffffff',
				// width:40,
				// height:40
				// layout: horizontal,
		    	height: 40,
		    	width: 120
			});
		
			var btnAdd = Ti.UI.createButton({
				// systemButton: Ti.UI.iPhone.SystemButton.DONE
				// title : 'More'
				top:10,
				right:10,
				backgroundImage: 'Icons-06.png',
				color: '#ffffff',
				width:40,
				height:40
			});
			
			btnMenu.addEventListener('click', function(e) {
				//button click event
				windowMainPayments.close();
				
			});
			
			topView.add(btnMenu);
			topView.add(btnLogo);
			topView.add(btnAdd);
		
			windowMainPayments.add(topView);
				windowMainPayments.addEventListener('open', function(e) {
					var activity = windowMainPayments.activity;
					
					activity.actionBar.hide();
				});
			}
			
			var lable = Ti.UI.createLabel({
				top : (Titanium.Platform.osname ==='android') ?  68: 8,
				width : 100,
				height : 40,
				text : 'Payments',
				color:'#00a99d',
				font:{
					fontSize:20,
					fontWeight:'bold'
				}
			});
			
			var btnBack = Ti.UI.createButton({
				// systemButton: Ti.UI.iPhone.SystemButton.ACTION
				// title : 'Menu',
				backgroundImage: 'New-Buttons-02.png',
				color: '#ffffff',
				width:40,
				height:40
			});
			
			var btnAdd = Ti.UI.createButton({
				// systemButton: Ti.UI.iPhone.SystemButton.DONE
				// title : 'More'
				top:0,
				right:0,
				backgroundImage: 'Icons-06.png',
				color: '#ffffff',
				width:40,
				height:40
			});
		
			btnBack.addEventListener('click', function(e){
				windowMainPayments.close();
			});
		
			windowMainPayments.leftNavButton = btnBack;
			
			// windowMainPayments.leftNavButton = btnMenu;
			windowMainPayments.rightNavButton = btnAdd;
					
			windowMainPayments.add(lable);
			windowMainPayments.add(new tableView({data:paymentCategory, top:(Titanium.Platform.osname ==='android') ?  100: 40, tableName:'payments'}));
			tab1.open(windowMainPayments, {
				animated : true
			});
		});
	}
	else if(e.backgroundImage === 'New-Buttons-04.png')
	{
		button.addEventListener('click', function(){
			var windowMainExpenses = Ti.UI.createWindow({
				title : 'Biz Now',
				backgroundColor : '#fff',
				barColor:'#00a99d',
				titleImage: (Titanium.Platform.osname ==='android') ? 'Icons-150dpi-10.png': 'Icons-10.png',
			});
			
			if((Titanium.Platform.osname ==='android'))
			{
				// windowMainExpenses.add(new createTopView());
				
				//create the custom top bar
				var topView = Ti.UI.createView({
				top:0,
				left:0,
				width:Ti.UI.FILL,
				height:60,
				backgroundColor:'#00a99d',
			});
			
			var btnMenu = Ti.UI.createButton({
				// systemButton: Ti.UI.iPhone.SystemButton.ACTION
				// title : 'Menu',
				top:10,
				left:10,
				backgroundImage: 'New-Buttons-02.png',
				color: '#ffffff',
				width:40,
				height:40
			});
			
			var btnLogo = Ti.UI.createButton({
				// systemButton: Ti.UI.iPhone.SystemButton.DONE
				// title : 'More'
				// top:0,
				// left:0,
				backgroundImage: (Titanium.Platform.osname ==='android') ? 'Icons-150dpi-10.png': 'Icons-10.png',
				color: '#ffffff',
				// width:40,
				// height:40
				// layout: horizontal,
		    	height: 40,
		    	width: 120
			});
		
			var btnAdd = Ti.UI.createButton({
				// systemButton: Ti.UI.iPhone.SystemButton.DONE
				// title : 'More'
				top:10,
				right:10,
				backgroundImage: 'Icons-06.png',
				color: '#ffffff',
				width:40,
				height:40
			});
			
			btnMenu.addEventListener('click', function(e) {
				//button click event
				windowMainExpenses.close();
				
			});
			
			topView.add(btnMenu);
			topView.add(btnLogo);
			topView.add(btnAdd);
		
			windowMainExpenses.add(topView);
			
				windowMainExpenses.addEventListener('open', function(e) {
					var activity = windowMainExpenses.activity;
					
					activity.actionBar.hide();
				});
			}
			
			var lable = Ti.UI.createLabel({
				top : (Titanium.Platform.osname ==='android') ?  68: 8,
				width : 100,
				height : 40,
				text : 'Expenses',
				color:'#00a99d',
				font:{
					fontSize:20,
					fontWeight:'bold'
				}
			});
			
			var btnBack = Ti.UI.createButton({
				// systemButton: Ti.UI.iPhone.SystemButton.ACTION
				// title : 'Menu',
				backgroundImage: 'New-Buttons-02.png',
				color: '#ffffff',
				width:40,
				height:40
			});
		
			btnBack.addEventListener('click', function(e){
				windowMainExpenses.close();
			});
			
			var btnAdd = Ti.UI.createButton({
				// systemButton: Ti.UI.iPhone.SystemButton.DONE
				// title : 'More'
				top:0,
				right:0,
				backgroundImage: 'Icons-06.png',
				color: '#ffffff',
				width:40,
				height:40
			});
		
			windowMainExpenses.leftNavButton = btnBack;
			
			// windowMainExpenses.leftNavButton = btnMenu;
			windowMainExpenses.rightNavButton = btnAdd;
					
			windowMainExpenses.add(lable);
			windowMainExpenses.add(new tableView({data:expensesCategory, top:(Titanium.Platform.osname ==='android') ?  100: 40, tableName:'Expenses'}));
			tab1.open(windowMainExpenses, {
				animated : true
			});
		});
	}
	else if(e.title === 'Scan Expense')
	{
		button.addEventListener('click', function(){
			Titanium.Media.showCamera({
				success:function(event) {
					// called when media returned from the camera
					Ti.API.debug('Our type was: '+event.mediaType);
					if(event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO) {
						var imageView = Ti.UI.createImageView({
							width:win.width,
							height:win.height,
							image:event.media
						});
						win.add(imageView);
					} else {
						alert("got the wrong type back ="+event.mediaType);
					}
				},
				cancel:function() {
					// called when user cancels taking a picture
				},
				error:function(error) {
					// called when there's an error
					var a = Titanium.UI.createAlertDialog({title:'Camera'});
					if (error.code == Titanium.Media.NO_CAMERA) {
						a.setMessage('Please run this test on device');
					} else {
						a.setMessage('Unexpected error: ' + error.code);
					}
					a.show();
				},
				saveToPhotoGallery:true,
			    // allowEditing and mediaTypes are iOS-only settings
				allowEditing:true,
				mediaTypes:[Ti.Media.MEDIA_TYPE_VIDEO,Ti.Media.MEDIA_TYPE_PHOTO]
			});
		});
	}
	
	//====================================send invoice button=========================================================
	else if(e.title == 'Send Invoice'){
		button.addEventListener('click', function(e){
			
			var service_ = service.value;
			var amount_ = amount.value;
			var name_ = name.value;
			var phone_ = phone.value;
			var reminder_ = reminder.value;
			
		if ( start_pick < end_pick ){
				var jsondata = [{start_time:start_pick,end_time:end_pick,service : service_ ,amount:amount_ ,client_phone:phone_ ,client_name:name_, reminder:reminder_}];			
								
							
					var xhr = Titanium.Network.createHTTPClient();
						xhr.setTimeout(10000);
						
						xhr.open("POST","http://162.243.145.226:3000/collections/appoinments");  
						xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
						xhr.send(JSON.stringify(jsondata));
						xhr.onerror = function() {
						
							Titanium.API.info("Error in connecting to server !!");
						};
							
						xhr.onload = function() {
							
						windowPayment.close();
						};
					}else if(start_pick == end_pick){
						alert('End Time and Start Time cannot Be the same');
					}else if(start_pick > end_pick){
						alert('End Time Should Be Exceed the Start Time');
					}else{
						alert('Enter Your Task Details.');
					}	
						
				});
				
				
				
			}
			//payment history button
			else if(e.title == 'Payment History'){
				
			}
	return button;
};

createTopView = function(e){

	var topView = Ti.UI.createView({
		top:0,
		left:0,
		width:Ti.UI.FILL,
		height:60,
		backgroundColor:'#00a99d',
	});
	
	var btnMenu = Ti.UI.createButton({
		// systemButton: Ti.UI.iPhone.SystemButton.ACTION
		// title : 'Menu',
		top:10,
		left:10,
		backgroundImage: 'Icons-05.png',
		color: '#ffffff',
		width:40,
		height:40
	});
	
	var btnLogo = Ti.UI.createButton({
		// systemButton: Ti.UI.iPhone.SystemButton.DONE
		// title : 'More'
		// top:0,
		// left:0,
		backgroundImage: (Titanium.Platform.osname ==='android') ? 'Icons-150dpi-10.png': 'Icons-10.png',
		color: '#ffffff',
		// width:40,
		// height:40
		// layout: horizontal,
    	height: 40,
    	width: 120
	});

	var btnAdd = Ti.UI.createButton({
		// systemButton: Ti.UI.iPhone.SystemButton.DONE
		// title : 'More'
		top:10,
		right:10,
		backgroundImage: 'Icons-06.png',
		color: '#ffffff',
		width:40,
		height:40
	});
	
	btnMenu.addEventListener('click', function(e) {
		//button click event
		// alert('I was clicked');
		// win1.close();
		
	});
	
	topView.add(btnMenu);
	topView.add(btnLogo);
	topView.add(btnAdd);
	return topView;
};



Titanium.UI.setBackgroundColor('#000');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();



var win = Titanium.UI.createWindow({
	// title : 'Biz Now',
	backgroundColor : '#fff',
	tabBarHidden : true,
	barColor:'#00a99d',
	titleImage: (Titanium.Platform.osname ==='android') ? 'Icons-150dpi-10.png': 'Icons-10.png',
});


var win1 = Titanium.UI.createWindow({
	// title : 'Biz Now',
	backgroundColor : '#fff',
	tabBarHidden : true,
	barColor:'#00a99d',
	titleImage: (Titanium.Platform.osname ==='android') ? 'Icons-150dpi-10.png': 'Icons-10.png',
	// navBarHidden:(Titanium.Platform.osname ==='android') ?  true: false
});
var tab1 = Titanium.UI.createTab({
	// icon:'KS_nav_views.png',
	// title:'Biz Now',
	window : win
});

var label1 = Titanium.UI.createLabel({
	color : '#999',
	text : '',
	font : {
		fontSize : 20,
		fontFamily : 'Helvetica Neue'
	},
	textAlign : 'center',
	width : 'auto'
});

win1.add(label1);

//create the navigation bar buttons
var btnMenu = Ti.UI.createButton({
		// systemButton: Ti.UI.iPhone.SystemButton.ACTION
		// title : 'Menu',
		backgroundImage: 'Icons-05.png',
		color: '#ffffff',
		width:40,
		height:40
	});

	

var btnAdd = Ti.UI.createButton({
	// systemButton: Ti.UI.iPhone.SystemButton.DONE
	// title : 'More'
	backgroundImage: 'Icons-06.png',
	color: '#ffffff',
	width:40,
	height:40
});


//create buttons
var btnAppointments = Ti.UI.createButton({
	left : (Titanium.Platform.osname ==='android') ?  30: 0,
	right : 0,
	top : (Titanium.Platform.osname ==='android') ?  40: 0,
	bottom : 0,
	width : (Titanium.Platform.osname ==='android') ?  Ti.UI.SIZE: 160,
	height : 40,
	color : '#00a99d',
	backgroundColor:'#fff',
	font:{    
                fontSize:14
           },
	// borderWidth : 1,
	// style : Titanium.UI.iPhone.SystemButtonStyle.BORDERED,
	title : 'appointments'
});

var btnPayments = Ti.UI.createButton({
	left : 160,
	right : 0,
	top : (Titanium.Platform.osname ==='android') ?  40: 0,
	bottom : 0,
	width : (Titanium.Platform.osname ==='android') ?  Ti.UI.FILL: 160,
	height : 40,
	backgroundColor:'#fff',
	font:{    
                fontSize:14
           },
	// borderWidth : 1,
	color : '#00a99d',
	// style : Titanium.UI.iPhone.SystemButtonStyle.BORDERED,
	title : 'payments'
});

var btnEmpty = Ti.UI.createButton({
	left : 0,
	right : 0,
	top : 39,
	bottom : 0,
	width : 320,
	height : 40,
	borderWidth : 1,
	style : Titanium.UI.iPhone.SystemButtonStyle.BORDERED,
	title : ''
});

var isAndroid = function() {
	return Titanium.Platform.osname === 'android';
};

var btnDate = Ti.UI.createButton({
	// left : 100,
	// right : 0,
	top : (Titanium.Platform.osname === 'android') ? 70 : 8,
	// bottom : 0,
	width : 120,
	backgroundColor : '#00a99d',
	color: '#ffffff',
	height : (Titanium.Platform.osname === 'android') ? 21 : 21,
	// borderColor:'#000',
	// borderWidth : (Titanium.Platform.osname === 'android') ? 0 : 1,
	// style : Titanium.UI.iPhone.SystemButtonStyle.BORDERED,
	title : monthNameShort(month),
	borderRadius: 6,
});

var btnMomthView = Ti.UI.createButton({
	left : 100,
	right : 0,
	top : (Titanium.Platform.osname === 'android') ? 70 : 8,
	bottom : 0,
	width : 120,
	backgroundColor : '#00a99d',
	color: '#ffffff',
	height : (Titanium.Platform.osname === 'android') ? 21 : 21,
	// borderColor:'#000',
	// borderWidth : (Titanium.Platform.osname === 'android') ? 0 : 1,
	// style : Titanium.UI.iPhone.SystemButtonStyle.BORDERED,
	title : 'Month View',
	borderRadius: 6,
});

var btnInvoice = Ti.UI.createButton({
	left : 160,
	right : 0,
	top : (Titanium.Platform.osname ==='android') ?  80: 40,
	bottom : 0,
	width : 80,
	height : 40,
	color : '#00a99d',
	backgroundColor:'#fff',
	font:{    
                fontSize:14
           },
	// borderWidth : 1,
	// style : Titanium.UI.iPhone.SystemButtonStyle.BORDERED,
	title : 'invoice'
});

var btnHistory = Ti.UI.createButton({
	left : 240,
	right : 0,
	top : (Titanium.Platform.osname ==='android') ?  80: 40,
	bottom : 39,
	width : 80,
	height : 40,
	font:{    
                fontSize:14
           },
	color : '#00a99d',
	backgroundColor:'#fff',
	// borderWidth : 1,
	// style : Titanium.UI.iPhone.SystemButtonStyle.BORDERED,
	title : 'history'
});

var btnExpensesHistory = Ti.UI.createButton({
	left : 240,
	right : 0,
	top : (Titanium.Platform.osname ==='android') ?  80: 40,
	bottom : 39,
	width : 80,
	height : 40,
	font:{    
                fontSize:14
           },
	color : '#00a99d',
	backgroundColor:'#fff',
	// borderWidth : 1,
	// style : Titanium.UI.iPhone.SystemButtonStyle.BORDERED,
	title : 'history'
});


//create lables for windows Payment
var lblName = Ti.UI.createLabel({
	left : 10,
	right : 0,
	top : (Titanium.Platform.osname ==='android') ?  120: 60,
	bottom : 0,
	width : 100,
	height : 40,
	text : 'Name        :',
	color:'#00a99d'
});

var lblPhone = Ti.UI.createLabel({
	left : 10,
	right : 0,
	top : (Titanium.Platform.osname ==='android') ?  165: 105,
	bottom : 0,
	width : 100,
	height : 40,
	text : 'Phone       :',
	color:'#00a99d'
});

var lblService = Ti.UI.createLabel({
	left : 10,
	right : 0,
	top : (Titanium.Platform.osname ==='android') ?  210: 150,
	bottom : 0,
	width : 100,
	height : 40,
	text : 'Service     :',
	color:'#00a99d'
});

var lblAmount = Ti.UI.createLabel({
	left : 10,
	right : 0,
	top : (Titanium.Platform.osname ==='android') ?  255: 195,
	bottom : 0,
	width : 100,
	height : 40,
	text : 'Amount($) :',
	color:'#00a99d'
});

//create textfields for window Payment
var txtName = Titanium.UI.createTextField({
	left : 120,
	right : 0,
	top : (Titanium.Platform.osname ==='android') ?  120: 60,
	bottom : 0,
	width : 190,
	height : 40,
	backgroundColor:'#00a99d',
	hintText : 'Name',
	// borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	color : '#fff'
});

var txtPhone = Titanium.UI.createTextField({
	left : 120,
	right : 0,
	top : (Titanium.Platform.osname ==='android') ?  165: 105,
	bottom : 0,
	width : 190,
	height : 40,
	backgroundColor:'#00a99d',
	// borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	color : '#fff',
	hintText : 'Phone',
	keyboardType : Ti.UI.KEYBOARD_NUMBER_PAD
});

var txtService = Titanium.UI.createTextField({
	left : 120,
	right : 0,
	top : (Titanium.Platform.osname ==='android') ?  210: 150,
	bottom : 0,
	width : 190,
	height : 40,
	backgroundColor:'#00a99d',
	// borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	color : '#fff',
	hintText : 'Service',
});



var txtAmount = Titanium.UI.createTextField({
	left : 120,
	right : 0,
	top : (Titanium.Platform.osname ==='android') ?  255: 195,
	bottom : 0,
	width : 190,
	height : 40,
	hintText : 'Amount',
	backgroundColor:'#00a99d',
	// borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	color : '#fff',
	keyboardType : Ti.UI.KEYBOARD_NUMBER_PAD
	
	});
	var btnSendInvoice = Ti.UI.createButton({
	left : 10,
	right : 0,
	top : (Titanium.Platform.osname ==='android') ?  320: 260,
	bottom : 0,
	width : 300,
	height : 30,
	backgroundColor:'#00a99d',
	// borderWidth : 1,
	// style : Titanium.UI.iPhone.SystemButtonStyle.BORDERED,
	title : 'Send Invoice',
	color:'#fff'
	
});



btnSendInvoice.addEventListener('click', function(e){
	
	var txtName_ = txtName.value;
	var txtPhone_ = txtPhone.value;
	var txtService_ = txtService.value;
	var txtAmount_ = txtAmount.value;
	
	var jsondata = [{name : txtName_, phone : txtPhone_, service : txtService_, amount : txtAmount_}];
	
	var xhr = Ti.Network.createHTTPClient();
		xhr.setTimeout(1000);
		xhr.open("POST", 'http://162.243.145.226:3000/collections/invoice');
		xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
		xhr.send(JSON.stringify(jsondata));
		xhr.onerror = function(){
			Ti.API.info('Error on connecting to server, Please try again');
		};
		xhr.onload = function(){
			//Ti.API.info('success');
			windowPayment.close();
			//windowHistory.open();
		};

});



//views for android 
createMidView = function(e){
	var midView = Ti.UI.createView({
		top:40,
		left:0,
		width:Ti.UI.FILL,
		height:40,
		// backgroundColor:'#00a99d',
	});
	
			var btn = Ti.UI.createButton({
			left : (Titanium.Platform.osname ==='android') ?  30: 0,
			right : 0,
			top :  0,
			bottom : 0,
			width : (Titanium.Platform.osname ==='android') ?  Ti.UI.SIZE: 160,
			height : 40,
			color : '#00a99d',
			backgroundColor:'#fff',
			font:{    
		                fontSize:14
		           },
			// borderWidth : 1,
			// style : Titanium.UI.iPhone.SystemButtonStyle.BORDERED,
			title : 'appointments'
		});
		
		var btnP = Ti.UI.createButton({
			left : 160,
			right : 0,
			top :  0,
			bottom : 0,
			width : (Titanium.Platform.osname ==='android') ?  Ti.UI.FILL: 160,
			height : 40,
			backgroundColor:'#fff',
			font:{    
		                fontSize:14
		           },
			// borderWidth : 1,
			color : '#00a99d',
			// style : Titanium.UI.iPhone.SystemButtonStyle.BORDERED,
			title : 'payments'
		});
		
		btn.addEventListener('click', function(){
			btnAppointments.fireEvent('click');
		});
		
		btnP.addEventListener('click', function(){
			btnPayments.fireEvent('click');
		});
	
	midView.add(btn);
	midView.add(btnP);
	
	return midView;
};

createDateView = function(e){
	
	var dateView = Ti.UI.createView({
		top:60,
		left:0,
		width:Ti.UI.FILL,
		height:40,
		// backgroundColor:'#00a99d',
	});
	
	
	
	var btnD = Ti.UI.createButton({
		// left : 100,
		// right : 0,
		top : (Titanium.Platform.osname === 'android') ? 10 : 48,
		// bottom : 0,
		width : 120,
		backgroundColor : '#00a99d',
		color: '#ffffff',
		height : (Titanium.Platform.osname === 'android') ? 25 : 21,
		// borderColor:'#000',
		// borderWidth : (Titanium.Platform.osname === 'android') ? 0 : 1,
		// style : Titanium.UI.iPhone.SystemButtonStyle.BORDERED,
		title : monthNameShort(month),
		borderRadius: 6,
	});
	
	btnD.addEventListener('click', function(){
			btnDate.fireEvent('click');
		});
	
	dateView.add(btnD);
	
	return dateView;

};

createMonthView = function(e){
	
	var monthView = Ti.UI.createView({
		top:80,
		left:0,
		width:Ti.UI.FILL,
		height:40,
		// backgroundColor:'#00a99d',
	});
	
	//---------------------------Month view Button--------------------------
	
	var btnM = Ti.UI.createButton({
		left : 100,
		right : 0,
		top : (Titanium.Platform.osname === 'android') ? 108 : 48,
		bottom : 0,
		width : 120,
		backgroundColor : '#00a99d',
		color: '#ffffff',
		height : (Titanium.Platform.osname === 'android') ? 21 : 21,
		// borderColor:'#000',
		// borderWidth : (Titanium.Platform.osname === 'android') ? 0 : 1,
		// style : Titanium.UI.iPhone.SystemButtonStyle.BORDERED,
		title : 'Month View',
		borderRadius: 6,
	});
	
	btnM.addEventListener('click', function(){
			btnMomthView.fireEvent('click');
		});
	
	monthView.add(btnM);
	
	return monthView;

};

createInvoceView = function(e){
	
	var invoiceView = Ti.UI.createView({
		top:80,
		left:0,
		width:Ti.UI.FILL,
		height:40,
		// backgroundColor:'#00a99d',
	});
	
	var btnI = Ti.UI.createButton({
		left : 160,
		right : 0,
		top : 0,
		bottom : 0,
		width : 80,
		height : 40,
		color : '#00a99d',
		backgroundColor:'#fff',
		font:{    
	                fontSize:14
	           },
		// borderWidth : 1,
		// style : Titanium.UI.iPhone.SystemButtonStyle.BORDERED,
		title : 'invoice'
	});

	return invoiceView;

};

//button click events
btnAppointments.addEventListener('click', function(e) {
	
	btnAppointments.font = {fontWeight:'bold'};
	btnHistory.font = {fontWeight:'normal'};
	btnInvoice.font = {fontWeight:'normal'};
	btnPayments.font = {fontWeight:'normal'};


	var windowAppointment = Ti.UI.createWindow({
		title : 'Biz Now',
		backgroundColor : '#fff',
		barColor:'#00a99d',
		titleImage: (Titanium.Platform.osname ==='android') ? 'Icons-150dpi-10.png': 'Icons-10.png',
	});
	
	if (Ti.Platform.osname === 'android') {
		// windowAppointment.add(new createTopView());
		
		//create the custom top bar
				var topView = Ti.UI.createView({
				top:0,
				left:0,
				width:Ti.UI.FILL,
				height:60,
				backgroundColor:'#00a99d',
			});
			
			var btnMenu = Ti.UI.createButton({
				// systemButton: Ti.UI.iPhone.SystemButton.ACTION
				// title : 'Menu',
				top:10,
				left:10,
				backgroundImage: 'New-Buttons-02.png',
				color: '#ffffff',
				width:40,
				height:40
			});
			
			var btnLogo = Ti.UI.createButton({
				// systemButton: Ti.UI.iPhone.SystemButton.DONE
				// title : 'More'
				// top:0,
				// left:0,
				backgroundImage: (Titanium.Platform.osname ==='android') ? 'Icons-150dpi-10.png': 'Icons-10.png',
				color: '#ffffff',
				// width:40,
				// height:40
				// layout: horizontal,
		    	height: 40,
		    	width: 120
			});
		
			var btnAdd = Ti.UI.createButton({
				// systemButton: Ti.UI.iPhone.SystemButton.DONE
				// title : 'More'
				top:10,
				right:10,
				backgroundImage: 'Icons-06.png',
				color: '#ffffff',
				width:40,
				height:40
			});
			
			btnMenu.addEventListener('click', function(e) {
				//button click event
				windowAppointment.close();
				
			});
			
			topView.add(btnMenu);
			topView.add(btnLogo);
			topView.add(btnAdd);
		
		windowAppointment.add(topView);
		
		
		// windowAppointment.add(new createMidView());
		windowAppointment.add(new createDateView());
		windowAppointment.addEventListener('open', function(e) {
			var activity = windowAppointment.activity;
			
			// if( Alloy.Globals.Android.Api >= 11 ) {
			activity.actionBar.title = "Biz Now";
			activity.actionBar.displayHomeAsUp = true;
			// activity.actionBar.onHomeIconItemSelected = function() {
			// alert("Home icon clicked!");
			// };
			activity.actionBar.hide();

			activity.onCreateOptionsMenu = function(e) {

				var menu = e.menu;

				// Menu Item 1
				var menuItem1 = menu.add({
					// title : "Menu",
					icon: 'Icons-05.png',

					showAsAction : Ti.Android.SHOW_AS_ACTION_ALWAYS
				});
				menuItem1.addEventListener("click", function(e) {
					alert("I was clicked Menu");
				});

				// Menu Item 2
				var menuItem2 = menu.add({
					// title : "More",
					icon: 'Icons-06.png',

					showAsAction : Ti.Android.SHOW_AS_ACTION_ALWAYS
				});
				menuItem2.addEventListener("click", function(e) {
					alert("I was clicked More");
				});
			};
			// }
		});
	}
	
	var btnBack = Ti.UI.createButton({
		// systemButton: Ti.UI.iPhone.SystemButton.ACTION
		// title : 'Menu',
		backgroundImage: 'New-Buttons-02.png',
		color: '#ffffff',
		width:40,
		height:40
	});
	
	var btnAdd = Ti.UI.createButton({
				// systemButton: Ti.UI.iPhone.SystemButton.DONE
				// title : 'More'
				top:0,
				right:0,
				backgroundImage: 'Icons-06.png',
				color: '#ffffff',
				width:40,
				height:40
			});

	btnBack.addEventListener('click', function(e){
		windowAppointment.close();
	});

	windowAppointment.leftNavButton = btnBack;
	// windowAppointment.backButtonTitleImage = 'Icons-05.png';
	windowAppointment.rightNavButton = btnAdd;

	windowAppointment.add(btnDate);
	windowAppointment.add(new tableView({data:timeSlots, top:(Titanium.Platform.osname ==='android') ?  160: 80,  tableName:'time'}));
	
	var setDate = new Date();
	a = setDate.getFullYear();
	b = setDate.getMonth();
	c = setDate.getDate();
	
	
	var daysInMonth = 32 - new Date(a, b, 32).getDate();
	
	var dayOfMonth = new Date(a, b, c).getDate();
	var dayOfWeek = new Date(a, b, 1).getDay();
	var daysInLastMonth = 32 - new Date(a, b - 1, 32).getDate();
	var daysInNextMonth = (new Date(a, b, daysInMonth).getDay()) - 6;

	//set initial day number
	var dayNumber = daysInLastMonth - dayOfWeek + 1;
	
	var today = currentTime.getDate();
	
	var scrollView = Ti.UI.createScrollView({
		  top : (Titanium.Platform.osname ==='android') ?  100: 40,
		  left : 0,
		  contentWidth: 'auto',
		  contentHeight: 'auto',
		  showVerticalScrollIndicator: false,
		  showHorizontalScrollIndicator: true,
		  height: 50,
		  // width: Ti.UI.FILL
	});
	//----------------------Button for Dates in month------------------
	var button = [];
	
	var left = 0;
			for ( i = 1; i <= daysInMonth; i++) {
				
				
				button[i] = Ti.UI.createButton({
						top : (Titanium.Platform.osname ==='android') ?  5: 5,
						left : left,
						width : (Titanium.Platform.osname ==='android') ?  Ti.UI.SIZE: 45,
						height : 40,
						color : '#00a99d',
						backgroundColor:'#fff',
						current : (today === i) ? 'Yes': 'No',
						// borderWidth : 1,
						// style : Titanium.UI.iPhone.SystemButtonStyle.BORDERED,
						title : i,
						font : {
							fontSize : (today === i) ?  16: 14,
							// color : '#00a99d'
							fontWeight : (today === i) ?  'bold': 'normal'
						}
					});
					
					
					button[i].addEventListener('click',changeState);

				scrollView.add(button[i]);	

				left = left + 46;
			
			}
			
			function changeState(e){
					
					e.source.font = {
					fontSize : 16,
					fontWeight :'bold'
				};
				
			    for(var i = 1; i <= daysInMonth; i++){
			        if(e.source !== button[i]){
			            button[i].font = {
							fontSize : 14,
							fontWeight :'normal'
						};
			        }
			       
			    }    
			}
			
			windowAppointment.addEventListener('open', function(e) {
				var s = 0;
				for ( i = 1; i <= daysInMonth; i++) {
					s = s + 46;
					if(i === today)
					scrollView.scrollTo(s - 46*3, 0);
					// scrollView.setContentOffset(s ,0);
					
					

				}
				
				
			});
			
			if (Ti.Platform.osname === 'android') {
				
					var offset = 0;
						windowAppointment.addEventListener('scroll', function(e) {
						    if (e.y!=null) {
						        offset = e.y;
						        // Ti.API.info('offset: '+offset);
						    } else {
						        // Ti.API.info('offset: null.. no idea why');
						    }
						});
						 
						var init = setInterval(function(e){
						    // Ti.API.info('check if '+offset+' = 50');
						    if (offset==50) {
						        // Ti.API.info('we are done');
						        clearInterval(init);
						    }
						    var s = 0;
							for ( i = 1; i <= daysInMonth; i++) {
								s = s + 46;
								if(i === today){
									scrollView.scrollTo(s + daysInMonth*46, 0);
									clearInterval(init);
								}
								
							}
		
						    // scrollView.scrollTo(300,0);
						},1000);

				}
			
			

	
	windowAppointment.add(scrollView);
	
	// windowAppointment.add(new btnDays({
		// left : 0,
		// num:6,
		// title : monthNameShort(month) + ' ' + day1
	// }));
	// windowAppointment.add(new btnDays({
		// left : 46,
		// num:5,
		// title : monthNameShort(month) + ' ' + day2
	// }));
	// windowAppointment.add(new btnDays({
		// left : 92,
		// num:4,
		// title : monthNameShort(month) + ' ' + day3
	// }));
	// windowAppointment.add(new btnDays({
		// left : 138,
		// num:3,
		// title : monthNameShort(month) + ' ' + day4
	// }));
	// windowAppointment.add(new btnDays({
		// left : 184,
		// num:2,
		// title : monthNameShort(month) + ' ' + day5
	// }));
	// windowAppointment.add(new btnDays({
		// left : 230,
		// num:1,
		// title : monthNameShort(month) + ' ' + day6
	// }));
	// windowAppointment.add(new btnDays({
		// left : 276,
		// num:0,
		// title : monthNameShort(month) + ' ' + day7
	// }));

	tab1.open(windowAppointment, {
		animated : true
	});
});

btnPayments.addEventListener('click', function(e) {
	
	btnAppointments.font = {fontWeight:'normal'};
	btnHistory.font = {fontWeight:'normal'};
	btnInvoice.font = {fontWeight:'normal'};
	btnPayments.font = {fontWeight:'bold'};
	windowPayment = Ti.UI.createWindow({
		title : 'Biz Now',
		backgroundColor : '#fff',
		barColor:'#00a99d',
		titleImage: (Titanium.Platform.osname ==='android') ? 'Icons-150dpi-10.png': 'Icons-10.png',
	});

	if (Ti.Platform.osname === 'android') {
		// windowPayment.add(new createTopView());
		
		//create the custom top bar
				var topView = Ti.UI.createView({
				top:0,
				left:0,
				width:Ti.UI.FILL,
				height:60,
				backgroundColor:'#00a99d',
			});
			
			var btnMenu = Ti.UI.createButton({
				// systemButton: Ti.UI.iPhone.SystemButton.ACTION
				// title : 'Menu',
				top:10,
				left:10,
				backgroundImage: 'New-Buttons-02.png',
				color: '#ffffff',
				width:40,
				height:40
			});
			
			var btnLogo = Ti.UI.createButton({
				// systemButton: Ti.UI.iPhone.SystemButton.DONE
				// title : 'More'
				// top:0,
				// left:0,
				backgroundImage: (Titanium.Platform.osname ==='android') ? 'Icons-150dpi-10.png': 'Icons-10.png',
				color: '#ffffff',
				// width:40,
				// height:40
				// layout: horizontal,
		    	height: 40,
		    	width: 120
			});
		
			var btnAdd = Ti.UI.createButton({
				// systemButton: Ti.UI.iPhone.SystemButton.DONE
				// title : 'More'
				top:10,
				right:10,
				backgroundImage: 'Icons-06.png',
				color: '#ffffff',
				width:40,
				height:40
			});
			
			btnMenu.addEventListener('click', function(e) {
				//button click event
				windowPayment.close();
				
			});
			
			topView.add(btnMenu);
			topView.add(btnLogo);
			topView.add(btnAdd);
		
		windowPayment.add(topView);
		// windowPayment.add(new createMidView());
		// windowPayment.add(new createInvoceView());
		windowPayment.addEventListener('open', function(e) {
			var activity = windowPayment.activity;

			// if( Alloy.Globals.Android.Api >= 11 ) {
			activity.actionBar.title = "Biz Now";
			activity.actionBar.displayHomeAsUp = true;

			activity.actionBar.hide();
			activity.onCreateOptionsMenu = function(e) {

				var menu = e.menu;

				// Menu Item 1
				var menuItem1 = menu.add({
					// title : "Menu",
					icon: 'Icons-05.png',

					showAsAction : Ti.Android.SHOW_AS_ACTION_ALWAYS
				});
				menuItem1.addEventListener("click", function(e) {
					alert("I was clicked Menu");
				});

				// Menu Item 2
				var menuItem2 = menu.add({
					// title : "More",
					icon: 'Icons-06.png',

					showAsAction : Ti.Android.SHOW_AS_ACTION_ALWAYS
				});
				menuItem2.addEventListener("click", function(e) {
					alert("I was clicked More");
				});
			};
			// }
		});
	}
	var lable = Ti.UI.createLabel({
				top : (Titanium.Platform.osname ==='android') ?  68: 8,
				width : 70,
				height : 40,
				text : 'Invoice',
				color:'#00a99d',
				font:{
					fontSize:20,
					fontWeight:'bold'
				}
			});
					
	windowPayment.add(lable);
	
	var btnBack = Ti.UI.createButton({
		// systemButton: Ti.UI.iPhone.SystemButton.ACTION
		// title : 'Menu',
		backgroundImage: 'New-Buttons-02.png',
		color: '#ffffff',
		width:40,
		height:40
	});
	
	var btnAdd = Ti.UI.createButton({
				// systemButton: Ti.UI.iPhone.SystemButton.DONE
				// title : 'More'
				top:0,
				right:0,
				backgroundImage: 'Icons-06.png',
				color: '#ffffff',
				width:40,
				height:40
			});

	btnBack.addEventListener('click', function(e){
		windowPayment.close();
	});

	windowPayment.leftNavButton = btnBack;
	
	// windowPayment.leftNavButton = btnMenu;
	windowPayment.rightNavButton = btnAdd;

	//add buttons to windowPayment
	

	//add lables
	windowPayment.add(lblName);
	windowPayment.add(lblPhone);
	windowPayment.add(lblService);
	windowPayment.add(lblAmount);

	//add textfields
	windowPayment.add(txtName);
	windowPayment.add(txtPhone);
	windowPayment.add(txtService);
	windowPayment.add(txtAmount);
	windowPayment.add(btnSendInvoice);
	tab1.open(windowPayment, {
		animated : true
	});
});

btnInvoice.addEventListener('click', function(e) {
	
	btnPayments.fireEvent('click');
	btnAppointments.font = {fontWeight:'normal'};
	btnHistory.font = {fontWeight:'normal'};
	btnInvoice.font = {fontWeight:'bold'};
	btnPayments.font = {fontWeight:'bold'};
	
});

btnHistory.addEventListener('click', function(e) {
	btnAppointments.font = {fontWeight:'normal'};
	btnHistory.font = {fontWeight:'bold'};
	btnInvoice.font = {fontWeight:'normal'};
	btnPayments.font = {fontWeight:'bold'};
	windowHistory = Ti.UI.createWindow({
		title : 'Biz Now',
		backgroundColor : '#fff',
		barColor:'#00a99d',
		titleImage: (Titanium.Platform.osname ==='android') ? 'Icons-150dpi-10.png': 'Icons-10.png',
	});

	

	if (Ti.Platform.osname === 'android') {
		// windowHistory.add(new createTopView());
		
		//create the custom top bar
				var topView = Ti.UI.createView({
				top:0,
				left:0,
				width:Ti.UI.FILL,
				height:60,
				backgroundColor:'#00a99d',
			});
			
			var btnMenu = Ti.UI.createButton({
				// systemButton: Ti.UI.iPhone.SystemButton.ACTION
				// title : 'Menu',
				top:10,
				left:10,
				backgroundImage: 'New-Buttons-02.png',
				color: '#ffffff',
				width:40,
				height:40
			});
			
			var btnLogo = Ti.UI.createButton({
				// systemButton: Ti.UI.iPhone.SystemButton.DONE
				// title : 'More'
				// top:0,
				// left:0,
				backgroundImage: (Titanium.Platform.osname ==='android') ? 'Icons-150dpi-10.png': 'Icons-10.png',
				color: '#ffffff',
				// width:40,
				// height:40
				// layout: horizontal,
		    	height: 40,
		    	width: 120
			});
		
			var btnAdd = Ti.UI.createButton({
				// systemButton: Ti.UI.iPhone.SystemButton.DONE
				// title : 'More'
				top:10,
				right:10,
				backgroundImage: 'Icons-06.png',
				color: '#ffffff',
				width:40,
				height:40
			});
			
			btnMenu.addEventListener('click', function(e) {
				//button click event
				windowHistory.close();
				
			});
			
			topView.add(btnMenu);
			topView.add(btnLogo);
			topView.add(btnAdd);
		
		windowHistory.add(topView);
		// windowHistory.add(new createMidView());
		// windowHistory.add(new createInvoceView());
		windowHistory.addEventListener('open', function(e) {
			var activity = windowHistory.activity;
						
						var win = Ti.UI.createWindow({
					    backgroundColor: '#000'
						});
						 
						var table = Ti.UI.createTableView();
						var tableData = [];
							
					var xhr = Titanium.Network.createHTTPClient();
						xhr.setTimeout(10000);
						
						xhr.open("GET","http://162.243.145.226:3000/collections/invoice");  
						xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
						xhr.send();
						//xhr.send("method=system.connect");
						xhr.onerror = function() {
						
						Titanium.API.info("Error in connecting to server !!");
						};
							
						xhr.onload = function() {

						var responce = JSON.parse(this.responseText);	
						//add data to array
						var historyData1 = [];
						
						//get data in to for loop
						for(i=0;i<responce.length;i++){
							var name_value = responce[i].name;
							var phone_value = responce[i].phone;
							var service_value = responce[i].service;
							var amount_value = responce[i].amount;
							
						//add data to row	
						var rowH2 = Ti.UI.createTableViewRow({
				 			height:60
				 		});
				 		var labelH2 = Ti.UI.createLabel({
							left: 0,
							color : '#00a99d',
							text: 'Pending Payment ' + amount_value + ' since ' + name_value + ' at ' + phone_value,
							font : {
							fontSize : 18,
							// color : '#00a99d'
						}
						});
						rowH2.add(labelH2);
						historyData1.push(rowH2);
						}
						
						//create table view
						var tableHistory = Titanium.UI.createTableView({
							left : 0,
							right : 0,
							top : (Titanium.Platform.osname ==='android') ?  120: 80,
							bottom : 0,
							width : Ti.UI.FILL,
							height : Ti.UI.FILL,
							separatorColor:'gray',
							data:historyData1
						});
					      
					      
					     	//add table view
							windowHistory.add(tableHistory); 
					            
					     }
					       

			// if( Alloy.Globals.Android.Api >= 11 ) {
			activity.actionBar.title = "Biz Now";
			activity.actionBar.displayHomeAsUp = true;
			// activity.actionBar.onHomeIconItemSelected = function() {
			// alert("Home icon clicked!");
			// };
			activity.actionBar.hide();
			activity.onCreateOptionsMenu = function(e) {

				var menu = e.menu;

				// Menu Item 1
				var menuItem1 = menu.add({
					// title : "Menu",
					icon: 'Icons-05.png',

					showAsAction : Ti.Android.SHOW_AS_ACTION_ALWAYS
				});
				menuItem1.addEventListener("click", function(e) {
					alert("I was clicked Menu");
				});

				// Menu Item 2
				var menuItem2 = menu.add({
					// title : "More",
					icon: 'Icons-05.png',

					showAsAction : Ti.Android.SHOW_AS_ACTION_ALWAYS
				});
				menuItem2.addEventListener("click", function(e) {
					alert("I was clicked More");
				});
			};
			// }
		});
	}
	
	var lable = Ti.UI.createLabel({
				top : (Titanium.Platform.osname ==='android') ?  68: 8,
				width : 120,	
				height : 40,
				text : 'Pay History',
				color:'#00a99d',
				font:{
					fontSize:20,
					fontWeight:'bold'
				}
			});
					
	windowHistory.add(lable);
	
	var btnBack = Ti.UI.createButton({
		// systemButton: Ti.UI.iPhone.SystemButton.ACTION
		// title : 'Menu',
		backgroundImage: 'New-Buttons-02.png',
		color: '#ffffff',
		width:40,
		height:40
	});
	
	var btnAdd = Ti.UI.createButton({
				// systemButton: Ti.UI.iPhone.SystemButton.DONE
				// title : 'More'
				top:0,
				right:0,
				backgroundImage: 'Icons-06.png',
				color: '#ffffff',
				width:40,
				height:40
			});

	btnBack.addEventListener('click', function(e){
		windowHistory.close();
	});

	windowHistory.leftNavButton = btnBack;

	// windowHistory.leftNavButton = btnMenu;
	windowHistory.rightNavButton = btnAdd;



	tab1.open(windowHistory, {
		animated : true
	});
});

btnExpensesHistory.addEventListener('click', function(e) {
	btnAppointments.font = {fontWeight:'normal'};
	btnHistory.font = {fontWeight:'bold'};
	btnInvoice.font = {fontWeight:'normal'};
	btnPayments.font = {fontWeight:'bold'};
	
	//expencehistory window
		
	var windowHistory = Ti.UI.createWindow({
		title : 'Biz Now',
		backgroundColor : '#fff',
		barColor:'#00a99d',
		titleImage: (Titanium.Platform.osname ==='android') ? 'Icons-150dpi-10.png': 'Icons-10.png',
	
		
	});
	
	
	if (Ti.Platform.osname === 'android') {
		// windowHistory.add(new createTopView());
		
		//create the custom top bar
				var topView = Ti.UI.createView({
				top:0,
				left:0,
				width:Ti.UI.FILL,
				height:60,
				backgroundColor:'#00a99d',
			});
			
			var btnMenu = Ti.UI.createButton({
				// systemButton: Ti.UI.iPhone.SystemButton.ACTION
				// title : 'Menu',
				top:10,
				left:10,
				backgroundImage: 'New-Buttons-02.png',
				color: '#ffffff',
				width:40,
				height:40
			});
			
			var btnLogo = Ti.UI.createButton({
				// systemButton: Ti.UI.iPhone.SystemButton.DONE
				// title : 'More'
				// top:0,
				// left:0,
				backgroundImage: (Titanium.Platform.osname ==='android') ? 'Icons-150dpi-10.png': 'Icons-10.png',
				color: '#ffffff',
				// width:40,
				// height:40
				// layout: horizontal,
		    	height: 40,
		    	width: 120
			});
		
			var btnAdd = Ti.UI.createButton({
				// systemButton: Ti.UI.iPhone.SystemButton.DONE
				// title : 'More'
				top:10,
				right:10,
				backgroundImage: 'Icons-06.png',
				color: '#ffffff',
				width:40,
				height:40
			});
			
			btnMenu.addEventListener('click', function(e) {
				//button click event
				windowHistory.close();
				
			});
			
			topView.add(btnMenu);
			topView.add(btnLogo);
			topView.add(btnAdd);
		
		windowHistory.add(topView);
		// windowHistory.add(new createMidView());
		// windowHistory.add(new createInvoceView());
		windowHistory.addEventListener('open', function(e) {
			var activity = windowHistory.activity;

			// if( Alloy.Globals.Android.Api >= 11 ) {
			activity.actionBar.title = "Biz Now";
			activity.actionBar.displayHomeAsUp = true;
			// activity.actionBar.onHomeIconItemSelected = function() {
			// alert("Home icon clicked!");
			// };
			
			
			var xhr = Titanium.Network.createHTTPClient();
						xhr.setTimeout(10000);
						
						xhr.open("GET","http://162.243.145.226:3000/collections/invoice");  
						xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
						xhr.send();
						//xhr.send("method=system.connect");
						xhr.onerror = function() {
						
						Titanium.API.info("Error in connecting to server !!");
						};
							
						xhr.onload = function() {
							
						
						
						var responce = JSON.parse(this.responseText);	
						//add data to array
						var historyData1 = [];
						
						//get data in to for loop
						for(i=0;i<responce.length;i++){
							var name_value = responce[i].name;
							var phone_value = responce[i].phone;
							var service_value = responce[i].service;
							var amount_value = responce[i].amount;
							
						//add data to row	
						var rowH2 = Ti.UI.createTableViewRow({
				 			height:60
				 		});
				 		var labelH2 = Ti.UI.createLabel({
							left: 0,
							color : '#00a99d',
							text: 'Pending Payment ' + amount_value + ' since ' + name_value + ' at ' + phone_value,
							font : {
							fontSize : 18,
							// color : '#00a99d'
						}
						});
						rowH2.add(labelH2);
						historyData1.push(rowH2);
						}
						
						//create table view
						var tableHistory = Titanium.UI.createTableView({
							left : 0,
							right : 0,
							top : (Titanium.Platform.osname ==='android') ?  120: 80,
							bottom : 0,
							width : Ti.UI.FILL,
							height : Ti.UI.FILL,
							separatorColor:'gray',
							data:historyData1
						});
					      
					      
					     	//add table view
							windowHistory.add(tableHistory); 
					            
					     }
			
			
			activity.actionBar.hide();
			activity.onCreateOptionsMenu = function(e) {

				var menu = e.menu;

				// Menu Item 1
				var menuItem1 = menu.add({
					// title : "Menu",
					icon: 'Icons-05.png',

					showAsAction : Ti.Android.SHOW_AS_ACTION_ALWAYS
				});
				menuItem1.addEventListener("click", function(e) {
					alert("I was clicked Menu");
				});

				// Menu Item 2
				var menuItem2 = menu.add({
					// title : "More",
					icon: 'Icons-05.png',

					showAsAction : Ti.Android.SHOW_AS_ACTION_ALWAYS
				});
				menuItem2.addEventListener("click", function(e) {
					alert("I was clicked More");
				});
			};
			// }
		});
	}
	
	var lable = Ti.UI.createLabel({
				top : (Titanium.Platform.osname ==='android') ?  68: 8,
				width : 180,	
				height : 40,
				text : 'Expense History',
				color:'#00a99d',
				font:{
					fontSize:20,
					fontWeight:'bold'
				}
			});
					
	windowHistory.add(lable);
	
	var btnBack = Ti.UI.createButton({
		// systemButton: Ti.UI.iPhone.SystemButton.ACTION
		// title : 'Menu',
		backgroundImage: 'New-Buttons-02.png',
		color: '#ffffff',
		width:40,
		height:40
	});
	
	var btnAdd = Ti.UI.createButton({
				// systemButton: Ti.UI.iPhone.SystemButton.DONE
				// title : 'More'
				top:0,
				right:0,
				backgroundImage: 'Icons-06.png',
				color: '#ffffff',
				width:40,
				height:40
			});

	btnBack.addEventListener('click', function(e){
		windowHistory.close();
	});

	windowHistory.leftNavButton = btnBack;

	// windowHistory.leftNavButton = btnMenu;
	windowHistory.rightNavButton = btnAdd;



	tab1.open(windowHistory, {
		animated : true
	});
});

btnDate.addEventListener('click', function(e) {

	var windowCalendar = Ti.UI.createWindow({
		title : 'Biz Now',
		backgroundColor : '#fff',
		barColor:'#00a99d',
		titleImage: (Titanium.Platform.osname ==='android') ? 'Icons-150dpi-10.png': 'Icons-10.png',
	});
	// Taking Screen Width
	var screenWidth = 322;
	var needToChangeSize = false;

	var screenWidthActual = Ti.Platform.displayCaps.platformWidth;

	if (Ti.Platform.osname === 'android') {
		// windowCalendar.add(new createTopView());
		
		//create the custom top bar
				var topView = Ti.UI.createView({
				top:0,
				left:0,
				width:Ti.UI.FILL,
				height:60,
				backgroundColor:'#00a99d',
			});
			
			var btnMenu = Ti.UI.createButton({
				// systemButton: Ti.UI.iPhone.SystemButton.ACTION
				// title : 'Menu',
				top:10,
				left:10,
				backgroundImage: 'New-Buttons-02.png',
				color: '#ffffff',
				width:40,
				height:40
			});
			
			var btnLogo = Ti.UI.createButton({
				// systemButton: Ti.UI.iPhone.SystemButton.DONE
				// title : 'More'
				// top:0,
				// left:0,
				backgroundImage: (Titanium.Platform.osname ==='android') ? 'Icons-150dpi-10.png': 'Icons-10.png',
				color: '#ffffff',
				// width:40,
				// height:40
				// layout: horizontal,
		    	height: 40,
		    	width: 120
			});
		
			var btnAdd = Ti.UI.createButton({
				// systemButton: Ti.UI.iPhone.SystemButton.DONE
				// title : 'More'
				top:10,
				right:10,
				backgroundImage: 'Icons-06.png',
				color: '#ffffff',
				width:40,
				height:40
			});
			
			btnMenu.addEventListener('click', function(e) {
				//button click event
				windowCalendar.close();
				
			});
			
			topView.add(btnMenu);
			topView.add(btnLogo);
			topView.add(btnAdd);
		
		windowCalendar.add(topView);
		// windowCalendar.add(new createMidView());
		windowCalendar.add(new createMonthView());
		windowCalendar.addEventListener('open', function(e) {
					var activity = windowCalendar.activity;
		
					// if( Alloy.Globals.Android.Api >= 11 ) {
					activity.actionBar.title = "Biz Now";
					activity.actionBar.displayHomeAsUp = true;
					// activity.actionBar.onHomeIconItemSelected = function() {
					// alert("Home icon clicked!");
					// };
					activity.actionBar.hide();
		});
		
		if (screenWidthActual >= 641) {
			screenWidth = screenWidthActual;
			needToChangeSize = true;
		}
	}

	// Main Window of the Month View.
	// var win = Ti.UI.createWindow({
	// backgroundColor : '#FF000000',
	// navBarHidden : false
	// });

	// Button at the buttom side
	var backButton = Ti.UI.createButton({
		bottom : '20dp',
		height : '40dp',
		width : '200dp'
	});

	// Previous Button - Tool Bar
	var prevMonth = Ti.UI.createButton({
		left : '15dp',
		width : 'auto',
		height : 'auto',
		title : '<',
		color:'#fff'
	});

	// Next Button - Tool Bar
	var nextMonth = Ti.UI.createButton({
		right : '15dp',
		width : 'auto',
		height : 'auto',
		title : '>',
		color:'#fff'
	});

	// Month Title - Tool Bar
	var monthTitle = Ti.UI.createLabel({
		width : '200dp',
		height : '24dp',
		textAlign : 'center',
		color : '#ffffff',
		font : {
			fontSize : 20,
			fontWeight : 'bold'
		}
	});

	// Tool Bar
	var toolBar = Ti.UI.createView({
		top : (Titanium.Platform.osname ==='android') ?  '120dp': '80dp',
		width : '322dp',
		height : '50dp',
		backgroundColor : '#00a99d',
		layout : 'vertical'
	});

	// Tool Bar - View which contain Title Prev. & Next Button
	var toolBarTitle = Ti.UI.createView({
		top : '3dp',
		width : '322dp',
		height : '24dp'
	});

	toolBarTitle.add(prevMonth);
	toolBarTitle.add(monthTitle);
	toolBarTitle.add(nextMonth);

	// Tool Bar - Day's
	var toolBarDays = Ti.UI.createView({
		top : '2dp',
		width : '322dp',
		height : '22dp',
		layout : 'horizontal',
		left : '-1dp'
	});

	toolBarDays.sunday = Ti.UI.createLabel({
		left : '0dp',
		height : '20dp',
		text : 'Sun',
		width : '46dp',
		textAlign : 'center',
		font : {
			fontSize : 12,
			fontWeight : 'bold'
		},
		color : '#fff'
	});

	toolBarDays.monday = Ti.UI.createLabel({
		left : '0dp',
		height : '20dp',
		text : 'Mon',
		width : '46dp',
		textAlign : 'center',
		font : {
			fontSize : 12,
			fontWeight : 'bold'
		},
		color : '#fff'
	});

	toolBarDays.tuesday = Ti.UI.createLabel({
		left : '0dp',
		height : '20dp',
		text : 'Tue',
		width : '46dp',
		textAlign : 'center',
		font : {
			fontSize : 12,
			fontWeight : 'bold'
		},
		color : '#fff'
	});

	toolBarDays.wednesday = Ti.UI.createLabel({
		left : '0dp',
		height : '20dp',
		text : 'Wed',
		width : '46dp',
		textAlign : 'center',
		font : {
			fontSize : 12,
			fontWeight : 'bold'
		},
		color : '#fff'
	});

	toolBarDays.thursday = Ti.UI.createLabel({
		left : '0dp',
		height : '20dp',
		text : 'Thu',
		width : '46dp',
		textAlign : 'center',
		font : {
			fontSize : 12,
			fontWeight : 'bold'
		},
		color : '#fff'
	});

	toolBarDays.friday = Ti.UI.createLabel({
		left : '0dp',
		height : '20dp',
		text : 'Fri',
		width : '46dp',
		textAlign : 'center',
		font : {
			fontSize : 12,
			fontWeight : 'bold'
		},
		color : '#fff'
	});

	toolBarDays.saturday = Ti.UI.createLabel({
		left : '0dp',
		height : '20dp',
		text : 'Sat',
		width : '46dp',
		textAlign : 'center',
		font : {
			fontSize : 12,
			fontWeight : 'bold'
		},
		color : '#fff'
	});

	toolBarDays.add(toolBarDays.sunday);
	toolBarDays.add(toolBarDays.monday);
	toolBarDays.add(toolBarDays.tuesday);
	toolBarDays.add(toolBarDays.wednesday);
	toolBarDays.add(toolBarDays.thursday);
	toolBarDays.add(toolBarDays.friday);
	toolBarDays.add(toolBarDays.saturday);

	// Adding Tool Bar Title View & Tool Bar Days View
	toolBar.add(toolBarTitle);
	toolBar.add(toolBarDays);

	// Function which create day view template
	dayView = function(e) {
		var label = Ti.UI.createLabel({
			current : e.current,
			width : '46dp',
			height : '44dp',
			backgroundColor : '#fff',
			text : e.day,
			textAlign : 'center',
			color : e.color,
			borderRadius: 23,
			font : {
				fontSize : 20,
				fontWeight : 'bold'
			}
		});
		return label;
	};

	monthName = function(e) {
		switch(e) {
		case 0:
			e = 'January';
			break;
		case 1:
			e = 'February';
			break;
		case 2:
			e = 'March';
			break;
		case 3:
			e = 'April';
			break;
		case 4:
			e = 'May';
			break;
		case 5:
			e = 'June';
			break;
		case 6:
			e = 'July';
			break;
		case 7:
			e = 'August';
			break;
		case 8:
			e = 'September';
			break;
		case 9:
			e = 'October';
			break;
		case 10:
			e = 'November';
			break;
		case 11:
			e = 'December';
			break;
		};
		return e;
	};

	// Calendar Main Function
	var calView = function(a, b, c) {
		var nameOfMonth = monthName(b);

		//create main calendar view
		var mainView = Ti.UI.createView({
			layout : 'horizontal',
			width : '322dp',
			height : 'auto',
			top : (Titanium.Platform.osname ==='android') ?  '170dp': '130dp'
		});

		//set the time
		var daysInMonth = 32 - new Date(a, b, 32).getDate();
		var dayOfMonth = new Date(a, b, c).getDate();
		var dayOfWeek = new Date(a, b, 1).getDay();
		var daysInLastMonth = 32 - new Date(a, b - 1, 32).getDate();
		var daysInNextMonth = (new Date(a, b, daysInMonth).getDay()) - 6;

		//set initial day number
		var dayNumber = daysInLastMonth - dayOfWeek + 1;

		//get last month's days
		for ( i = 0; i < dayOfWeek; i++) {
			mainView.add(new dayView({
				day : dayNumber,
				color : '#fff',
				current : 'no',
				dayOfMonth : ''
			}));
			dayNumber++;
		};

		// reset day number for current month
		dayNumber = 1;

		//get this month's days
		for ( i = 0; i < daysInMonth; i++) {
			var newDay = new dayView({
				day : dayNumber,
				color : '#b3b3b3',
				current : 'yes',
				dayOfMonth : dayOfMonth
			});
			mainView.add(newDay);
			if (newDay.text == dayOfMonth) {
				newDay.color = 'white';
				// newDay.backgroundImage='../libraries/calendar/pngs/monthdaytiletoday_selected.png';
				newDay.backgroundColor = '#00a99d';
				var oldDay = newDay;
			}
			dayNumber++;
		};
		dayNumber = 1;

		//get remaining month's days
		for ( i = 0; i > daysInNextMonth; i--) {
			mainView.add(new dayView({
				day : dayNumber,
				color : '#fff',
				current : 'no',
				dayOfMonth : ''
			}));
			dayNumber++;
		};

		// this is the new "clicker" function, although it doesn't have a name anymore, it just is.
		mainView.addEventListener('click', function(e) {
			if (e.source.current == 'yes') {

				// reset last day selected
				if (oldDay.text == dayOfMonth) {
					oldDay.color = 'white';
					// oldDay.backgroundImage='../libraries/calendar/pngs/monthdaytiletoday.png';
					oldDay.backgroundColor = '#00a99d';
				} else {
					oldDay.color = '#b3b3b3';
					// oldDay.backgroundImage='../libraries/calendar/pngs/monthdaytile-Decoded.png';
					oldDay.backgroundColor = '#fff';
				}
				oldDay.backgroundPaddingLeft = '0dp';
				oldDay.backgroundPaddingBottom = '0dp';

				// set window title with day selected, for testing purposes only
				backButton.title = nameOfMonth + ' ' + e.source.text + ', ' + a;

				// set characteristic of the day selected
				if (e.source.text == dayOfMonth) {
					// e.source.backgroundImage='../libraries/calendar/pngs/monthdaytiletoday_selected.png';
					e.source.backgroundColor = '#FFFF00FF';
				} else {
					// e.source.backgroundImage='../libraries/calendar/pngs/monthdaytile_selected.png';
					e.source.backgroundColor = '#b3b3b3';
				}
				e.source.backgroundPaddingLeft = '1dp';
				e.source.backgroundPaddingBottom = '1dp';
				e.source.color = 'white';
				//this day becomes old :(
				oldDay = e.source;
				
				windowCalendar.close();
			}
		});

		return mainView;
	};

	// what's today's date?
	var setDate = new Date();
	a = setDate.getFullYear();
	b = setDate.getMonth();
	c = setDate.getDate();

	// add the three calendar views to the window for changing calendars with animation later

	var prevCalendarView = null;
	if (b == 0) {
		prevCalendarView = calView(a - 1, 11, c);
	} else {
		prevCalendarView = calView(a, b - 1, c);
	}
	prevCalendarView.left = (screenWidth * -1) + 'dp';

	var nextCalendarView = null;
	if (b == 0) {
		nextCalendarView = calView(a + 1, 0, c);
	} else {
		nextCalendarView = calView(a, b + 1, c);
	}
	nextCalendarView.left = screenWidth + 'dp';

	var thisCalendarView = calView(a, b, c);
	if (needToChangeSize == false) {
		thisCalendarView.left = '-1dp';
	}

	monthTitle.text = monthName(b) + ' ' + a;

	backButton.title = monthName(b) + ' ' + c + ', ' + a;

	// add everything to the window
	windowCalendar.add(toolBar);
	windowCalendar.add(thisCalendarView);
	windowCalendar.add(nextCalendarView);
	windowCalendar.add(prevCalendarView);
	windowCalendar.add(backButton);

	// yeah, open the window, why not?
	// windowCalendar.open({
	// modal : true
	// });

	var slideNext = Titanium.UI.createAnimation({
		// left : '-322',
		duration : 500
	});

	slideNext.left = (screenWidth * -1);

	var slideReset = Titanium.UI.createAnimation({
		// left : '-1',
		duration : 500
	});

	if (needToChangeSize == false) {
		slideReset.left = '-1';
	} else {
		slideReset.left = ((screenWidth - 644) / 2);
	}

	var slidePrev = Titanium.UI.createAnimation({
		// left : '322',
		duration : 500
	});

	slidePrev.left = screenWidth;

	// Next Month Click Event
	nextMonth.addEventListener('click', function() {
		if (b == 11) {
			b = 0;
			a++;
		} else {
			b++;
		}

		thisCalendarView.animate(slideNext);
		nextCalendarView.animate(slideReset);

		setTimeout(function() {
			thisCalendarView.left = (screenWidth * -1) + 'dp';
			if (needToChangeSize == false) {
				nextCalendarView.left = '-1dp';
			} else {
				nextCalendarView.left = ((screenWidth - 644) / 2);
			}
			prevCalendarView = thisCalendarView;
			thisCalendarView = nextCalendarView;
			if (b == 11) {
				nextCalendarView = calView(a + 1, 0, c);
			} else {
				nextCalendarView = calView(a, b + 1, c);
			}
			monthTitle.text = monthName(b) + ' ' + a;
			nextCalendarView.left = screenWidth + 'dp';
			// nextCalendarView.left = 0;
			windowCalendar.add(nextCalendarView);
		}, 500);
	});

	// Previous Month Click Event
	prevMonth.addEventListener('click', function() {
		if (b == 0) {
			b = 11;
			a--;
		} else {
			b--;
		}
		thisCalendarView.animate(slidePrev);
		prevCalendarView.animate(slideReset);
		setTimeout(function() {
			thisCalendarView.left = screenWidth + 'dp';
			if (needToChangeSize == false) {
				prevCalendarView.left = '-1dp';
			} else {
				prevCalendarView.left = ((screenWidth - 644) / 2);
			}
			nextCalendarView = thisCalendarView;
			thisCalendarView = prevCalendarView;
			if (b == 0) {
				prevCalendarView = calView(a - 1, 11, c);
			} else {
				prevCalendarView = calView(a, b - 1, c);
			}
			monthTitle.text = monthName(b) + ' ' + a;
			prevCalendarView.left = (screenWidth * -1) + 'dp';
			windowCalendar.add(prevCalendarView);
		}, 500);
	});
	
	var btnBack = Ti.UI.createButton({
		// systemButton: Ti.UI.iPhone.SystemButton.ACTION
		// title : 'Menu',
		backgroundImage: 'New-Buttons-02.png',
		color: '#ffffff',
		width:40,
		height:40
	});
	
	var btnAdd = Ti.UI.createButton({
				// systemButton: Ti.UI.iPhone.SystemButton.DONE
				// title : 'More'
				top:0,
				right:0,
				backgroundImage: 'Icons-06.png',
				color: '#ffffff',
				width:40,
				height:40
			});

	btnBack.addEventListener('click', function(e){
		windowCalendar.close();
	});

	windowCalendar.leftNavButton = btnBack;

	// windowCalendar.leftNavButton = btnMenu;
	windowCalendar.rightNavButton = btnAdd;
	
	btnMomthView.addEventListener('click', function(e) {
		windowCalendar.close();
	});
	//add buttons to windowAppointment
	windowCalendar.add(btnMomthView);

	tab1.open(windowCalendar, {
		animated : true
	});
});


//data for tableview
var timeSlots = [];

// for (var i=0; i < 1; i++) {
 	for(var i=8; i <= 12; i++)
 	{
 		var row = Ti.UI.createTableViewRow({
 			height:44
 		});
 		var label = Ti.UI.createLabel({
		left: 0,
		color : '#00a99d',
		text:(i === 12) ? i + ' noon' : i + ' AM', 
		});
		row.add(label);
		timeSlots.push(row);
 	};
 	
 	for(var i=1; i <= 12; i++)
 	{
 		var row = Ti.UI.createTableViewRow({
 			height:44
 		});
 		var label = Ti.UI.createLabel({
		left: 0,
		color : '#00a99d',
		text: (i === 12) ? i + ' AM' : i + ' PM', 
		});
		row.add(label);
		timeSlots.push(row);
 	};
 	
 	for(var i=1; i <= 7; i++)
 	{
 		var row = Ti.UI.createTableViewRow({
 			height:44
 		});
 		var label = Ti.UI.createLabel({
		left: 0,
		color : '#00a99d',
		text: i + ' AM'
		});
		row.add(label);
		timeSlots.push(row);
 	};
// };

var paymentCategory = [];

var row1 = Ti.UI.createTableViewRow({
 			height:60
 		});
 		var label1 = Ti.UI.createLabel({
		left: 0,
		color : '#00a99d',
		text: 'Send Invoice',
		font : {
			fontSize : 18,
			// color : '#00a99d'
		}
		});
		row1.add(label1);
		paymentCategory.push(row1);
		
var row2 = Ti.UI.createTableViewRow({
 			height:60
 		});
 		var label2 = Ti.UI.createLabel({
		left: 0,
		color : '#00a99d',
		text: 'Payment History',
		font : {
			fontSize : 18,
			// color : '#00a99d'
		}
		});
		row2.add(label2);
		paymentCategory.push(row2);


var expensesCategory = [];

var rowE1 = Ti.UI.createTableViewRow({
 			height:60
 		});
 		var labelE1 = Ti.UI.createLabel({
		left: 0,
		color : '#00a99d',
		text: 'Add Expense',
		font : {
			fontSize : 18,
			// color : '#00a99d'
		}
		});
		rowE1.add(labelE1);
		expensesCategory.push(rowE1);
		
var rowE2 = Ti.UI.createTableViewRow({
 			height:60
 		});
 		var labelE2 = Ti.UI.createLabel({
		left: 0,
		color : '#00a99d',
		text: 'Expense History',
		font : {
			fontSize : 18,
			// color : '#00a99d'
		}
		});
		rowE2.add(labelE2);
		expensesCategory.push(rowE2);
		
		
/*
var historyData = [];

var rowH1 = Ti.UI.createTableViewRow({
 			height:60
 		});
 		var labelH1 = Ti.UI.createLabel({
		left: 0,
		color : '#00a99d',
		text: 'Pending Payment $72.34 since 09/01/2014 jason at 530-112-2343',
		font : {
			fontSize : 18,
			// color : '#00a99d'
		}
		});
		rowH1.add(labelH1);
		historyData.push(rowH1);
		
var rowH2 = Ti.UI.createTableViewRow({
 			height:60
 		});
 		var labelH2 = Ti.UI.createLabel({
		left: 0,
		color : '#00a99d',
		text: 'Recoving Payment $56.85 since 08/22/2014 joe at 510-202-2673',
		font : {
			fontSize : 18,
			// color : '#00a99d'
		}
		});
		rowH2.add(labelH2);
		historyData.push(rowH2);*/


//set the navigation bar buttons
win1.leftNavButton = btnMenu;
win1.rightNavButton = btnAdd;
win.leftNavButton = btnMenu;
win.rightNavButton = btnAdd;
// win1.add(smallBar);
//add buttons to window 1
win1.add(btnAppointments);
win1.add(btnPayments);
// win1.add(btnEmpty);
win1.add(btnDate);
win1.add(new btnDays({
	left : 0,
	title : monthNameShort(month) + day1
}));
win1.add(new btnDays({
	left : 46,
	title : monthNameShort(month) + day2
}));
win1.add(new btnDays({
	left : 92,
	title : monthNameShort(month) + day3
}));
win1.add(new btnDays({
	left : 138,
	title : monthNameShort(month) + day4
}));
win1.add(new btnDays({
	left : 184,
	title : monthNameShort(month) + day5
}));
win1.add(new btnDays({
	left : 230,
	title : monthNameShort(month) + day6
}));
win1.add(new btnDays({
	left : 276,
	title : monthNameShort(month) + day7
}));


win1.add(new tableView({data:timeSlots, top:(Titanium.Platform.osname ==='android') ?  140: 80, tableName:'time'}));


win.add(new createButton({
		left:5,
		top:(Titanium.Platform.osname ==='android') ?  80: 40,
		right:0,
		width:'45%',
		height : 140,
		title:'',
		backgroundImage: 'New-Buttons-06.png',
}));
win.add(new createButton({
		left:'52%',
		top:(Titanium.Platform.osname ==='android') ?  80: 40,
		right:5,
		width:'45%',
		height : 140,
		title:'',
		backgroundImage: 'New-Buttons-03.png',
}));

win.add(new createButton({
		left:5,
		top:(Titanium.Platform.osname ==='android') ?  260: 200,
		right:0,
		width:'45%',
		height : 140,
		title:'',
		backgroundImage: 'New-Buttons-04.png',
}));

win.add(new createButton({
		left:'52%',
		top:(Titanium.Platform.osname ==='android') ?  260: 200,
		right:5,
		width:'45%',
		height : 140,
		title:'',
		backgroundImage: 'New-Buttons-05.png',
}));
if (Ti.Platform.osname === 'android') {
	win.add(new createTopView());

}

//
//  add tabs
//
tabGroup.addTab(tab1);
// tabGroup.addTab(tab2);

if (Ti.Platform.osname === 'android') {
win1.add(new createTopView());
	tabGroup.addEventListener('open', function(e) {
		var activity = tabGroup.activity;
		
		// if( Alloy.Globals.Android.Api >= 11 ) {
		activity.actionBar.title = "Biz Now";
		activity.actionBar.displayHomeAsUp = true;
		// activity.actionBar.onHomeIconItemSelected = function() {
		// alert("Home icon clicked!");
		// };
		activity.actionBar.hide();
		activity.onCreateOptionsMenu = function(e) {

			var menu = e.menu;

			// Menu Item 1
			var menuItem1 = menu.add({
				// title : "Menu",
				icon: 'Icons-05.png',

				showAsAction : Ti.Android.SHOW_AS_ACTION_ALWAYS
			});
			menuItem1.addEventListener("click", function(e) {
				alert("I was clicked Menu");
			});

			// Menu Item 2
			var menuItem2 = menu.add({
				// title : "More",
				icon: 'Icons-06.png',

				showAsAction : Ti.Android.SHOW_AS_ACTION_ALWAYS
			});
			menuItem2.addEventListener("click", function(e) {
				alert("I was clicked More");
			});
		};
		// }
	});

}

// open tab group
tabGroup.open();
