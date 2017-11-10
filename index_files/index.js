var url = '.miserables.json';
const Graph = ForceGraph3D()(document.getElementById("3d-graph"));

loadGraph(url);

function loadGraph(url) {
        Graph
		    .cooldownTicks(1000)
		    .cooldownTime(20000)
		    .nodeRelSize(5)
	    	.idField('id')
            .nameField('id')
            //.valField('group')
            .autoColorBy('group')
            .forceEngine('ngraph')
            .jsonUrl(url);
}