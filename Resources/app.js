
var win = Titanium.UI.createWindow({
	title:"Camera Preview",
	backgroundColor:'#FFFFFF',
	exitOnClose: true
});

	Titanium.Media.showCamera(
		{	
			success:function(e)
			{
				//img = e.media;
				img = e.media.imageAsResized(1024, 1024);
				var f = Titanium.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory,'temp.jpg');
				f.write(img);
				theimg = f.nativePath;
				
					var imView = Titanium.UI.createImageView(
						{
						image:theimg,
						width:290,
						height:220,
						top:15,
						zIndex:1
					});
					
					win.add(imView);
					
					// GPS Code START //
					
					var myview = Ti.UI.createView(
{
	layout: 'vertical',
	top : '60%',
	bottom:'20%',
	left:'4%',
	right:'4%',
	backgroundColor : 'black'
});

var coordss = Titanium.UI.createLabel(
{
	font:{fontSize:14,fontFamily:'Helvetica Neue'},
	//textAlign:'center',
	width:'auto'
});

myview.add(coordss);

win.add(myview);

//win.open();
    
if (Ti.Platform.osname == "android") 
    {
    	var providerGps = Ti.Geolocation.Android.createLocationProvider(
    	{
	    name: Ti.Geolocation.PROVIDER_GPS,
	    minUpdateDistance: 0.4,
	    minUpdateTime: 1
		});
		
		Ti.Geolocation.Android.addLocationProvider(providerGps);
		Ti.Geolocation.Android.manualMode = true;
	}
else
	{    
    Ti.Geolocation.purpose = 'Get Current Location';
    Ti.Geolocation.distanceFilter = 1;
	Ti.Geolocation.accuracy = Ti.Geolocation.ACCURACY_BEST;
    Ti.Geolocation.preferredProvider = Ti.Geolocation.PROVIDER_GPS;
    //Ti.Geolocation.accuracy = Titanium.Geolocation.ACCURACY_HIGH;
	}

    Ti.Geolocation.addEventListener('location', function(e)
    {
       if (!e.success || e.error)
       {
       	  coordss.text = 'Coordinates N/A right now... wait?';
//          alert('error ' + JSON.stringify(e.error));
			return;
       } 
       
       coordss.text = 'Lat: ' + e.coords.latitude + ' Long: ' + e.coords.longitude + ' Accu: ' + e.coords.accuracy + '\n Heading: ' + e.coords.heading + ' Speed: ' + e.coords.speed;
       
    });




					
					
					
					
					
					
					
					
					// GPS Code END //
					
					
					
					// GPS-Button Code START //
					/*
					
					var button = Titanium.UI.createButton(
					{
						title:"Next...(GPS)",
						width:100,
						height:100,
						bottom:15,
						zIndex:2
					});
					button.addEventListener ("click", function(e)
					{
						var gpsWindow = Ti.UI.createWindow(
							{
								url: "gps.js",
								title:'NoKunda Getting GPS!',
    							backgroundColor:'#191919'
							});
							gpsWindow.open();
					});
					
					win.add(button);
					*/
					
					// GPS-Button Code END //
					
					win.open();
				
			},
//I wish you weren't an ADHA mosalman man
			error:function(e)
			{
				alert("There was an error");
			},
			cancel:function(e)
			{
				alert("The event was cancelled");
			},
			//allowEditing:true,
			saveToPhotoGallery:true,
			mediaTypes:[Titanium.Media.MEDIA_TYPE_PHOTO],
			showControls: true
		});




/*
var winone = Ti.UI.createWindow(
	{
		title : 'MAIN APP.JS',
		backgroundColor : 'blue',
		exitOnClose : true
	}
);

var btn = Ti.UI.createButton(
	{
		title : 'Goto Cam',
		width:200,
		height:100,
		bottom:50
	}
);

btn.addEventListener('click', function(e)
{
	 	var winmain = Titanium.UI.createWindow(
	 	{
		url : 'cam.js',
		//title:"Camera Preview",
		//backgroundColor:'#FFFFFF',
		//exitOnClose: true
		});
	
	winmain.open();
}
);

winone.add(btn);
winone.open();

*/