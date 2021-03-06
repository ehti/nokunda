
var db = Ti.Database.open("mydb");
//db.file.setRemoteBackup(false);    //for iOS excess icloud backups
db.execute('DROP TABLE IF EXISTS params');
//db.execute('DROP TABLE IF EXISTS counter');

db.execute('CREATE TABLE IF NOT EXISTS params(id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, description TEXT, date TEXT, hour TEXT, minute TEXT, ampm TEXT, lat TEXT, longi TEXT, loc TEXT, pic TEXT);');


db.execute('CREATE TABLE IF NOT EXISTS counter(id INTEGER PRIMARY KEY AUTOINCREMENT, count INTEGER);');
row = db.execute('SELECT count FROM counter');
if (row.isValidRow() )
{
	row.close();
	db.close();
	var wintabs = require('tabs')();
}

else
{	
	db.execute('INSERT INTO counter (count) VALUES (?)', 0);
	row.close();
	db.close();	
		
	var wintut = Titanium.UI.createWindow({
		//title:"Camera Preview",
		backgroundColor:'#FFFFFF',
		navBarHidden: true,
		exitOnClose: true
	});
	
	var tut = Ti.Filesystem.getFile('tutorial.jpg');
	
	var imviewtutorial = Ti.UI.createImageView(
	{
		image: tut,
		width: '100%',
		height: '85%',
		top: '0%'
	});
	wintut.add(imviewtutorial);
	
	var startbtn = Titanium.UI.createButton(
	{
		title:"START REPORTING",
		width: '100%',
		height: '15%',
		top: '85%',
		font: {
				fontSize : 14,
				fontWeight : 'bold',
				fontFamily : 'Helvetica Neue'
		},
		backgroundColor: '#3498db'	
	});
	
	startbtn.addEventListener ("click", function(e)
	{
		var wintabs = require('tabs')();
		/*var tabswin = Ti.UI.createWindow(
			{
			url: "tabs.js",
			//title:'NoKunda Getting GPS!',
			//backgroundColor:'#191919'
			});
			tabswin.open();
		*/
	});
	
	wintut.add(startbtn);
	wintut.open();

}