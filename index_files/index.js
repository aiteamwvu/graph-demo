var url = '.miserables.json';
const Graph = ForceGraph3D()(document.getElementById("3d-graph"));

loadGraph(url);

function loadGraph(url) {
	Graph.resetProps();
	Graph
		.warmupTicks(200)
	    .cooldownTicks(1000)
	    .cooldownTime(15000)
	    .nodeRelSize(5)
	    .numDimensions(3)
	    .nodeResolution(8)
	    .lineOpacity(0.2)
		.idField('id')
	    .nameField('id')
	    //.valField('group')
	    //.colorField('color')
	    .linkSourceField('source')
	    .linkTargetField('target')
	    //.linkColorField('color')
	    .onNodeClick(onNodeClick)
	    .autoColorBy('group')
	    .forceEngine('ngraph')
	    .jsonUrl(url);
}