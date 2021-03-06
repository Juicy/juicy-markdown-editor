(function() {
	var server = sinon.fakeServer.create();
	server.autoRespond = true;
	server.respondWith("/storage/server/path", function(xhr) {
		console.info("Mock server caught `/storage/server/path` request");
		var xFile = JSON.parse(xhr.requestHeaders['x-file']);
		xhr.respond(
			200, 
			{ 
				"Content - Type" : "application / json",
				"x-file" : JSON.stringify( { 
					type: xFile.type, 
					name: xFile.name, 
					url: "/storage/server/files/"+xFile.name
				} )
			}, 
			JSON.stringify([{ id: 1, text: "Provide examples", done: true }])
		);
	});
        // server.restore();
}());