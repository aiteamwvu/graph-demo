function onNodeClick(node) {
	console.log("SINGLE CLICK");
	console.log(node);
	if (node.type == "line") {
		if (node.__line.material.opacity == 1) {
			node.__line.material.opacity = 0.2;
		} else {
			node.__line.material.opacity = 1;
		}
	} else {
		if (node.__sphere.material.opacity == 1) {
			node.__sphere.material.opacity = 0.75;
		} else {
			node.__sphere.material.opacity = 1;
		}
	}
}

function onNodeDblClick(node) {
	console.log("DOUBLE CLICK");
	console.log(node);
	if (node.type == "node") {
		openInNewTab(node.id);
	}
}

function openInNewTab(url) {
  var win = window.open(url, '_blank');
  win.focus();
}

function getData() {
	$.getJSON("http://aiwvu.ml:5000/?q=iphone", function(data) {
		var wordsArray = {};
		var output = {nodes:[], links:[]};
		var id = 0;
		var title = 1;
		var k = 1;
		for (var i = 0; i < data.length; i += 9) {
			var arr = data[i + id].split("|");
			var url = arr[0];
			var img = arr[1];
			var name = data[i + title];
			var keywords = name.removeStopWords().split(" ");
			if (k%8 == 0) {
				k = 1;
			}
			output.nodes.push({
				id: url,
				name: name,
				group: k
			});
			for (var j in keywords) {
				var word = keywords[j];
				if (isNaN(word)) {
					if (wordsArray[word] === undefined) {
						wordsArray[word] = [];
					}
					wordsArray[word].push(url);
				}
			}
			k++;
		}
		for (var word in wordsArray) {
			for (var i = 0; i < wordsArray[word].length; i++) {
				for (var j = i + 1; j < wordsArray[word].length; j++) {
					if (i != j) {
						output.links.push({
							source: wordsArray[word][i],
							target: wordsArray[word][j],
							name: word,
							value: 1
						})
					}
				}		
			}
		}
		Graph.graphData(output);
		console.log(output);
	});
}