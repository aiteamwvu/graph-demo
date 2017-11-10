var url = 'data.json';
const Graph = ForceGraph3D()(document.getElementById("3d-graph"));

loadGraph(url);

function loadGraph(url) {
	Graph.resetProps();
	Graph
		.warmupTicks(0)
	    .cooldownTime(1500)
	   	.cooldownTicks(200)
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
	    .onNodeDblClick(onNodeDblClick)
	    .autoColorBy('group')
	    .forceEngine('ngraph')
	    .jsonUrl(url);
}