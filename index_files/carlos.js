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