function Voxel(name, aspects, descriptions) {
	aspects = aspects || [];
	this.name = name;
	this.aspects = aspects;
	for(description in descriptions) {
		this[description] = descriptions[description];
	};
};

var voxelz = {
	"information": {
		"organism": {
			level: 0,
			maxima: "hybrid",
			minima: "cybernetic",
			x: "animal",
			y: "human",
			z: "robotic"
		},
		"composition": {
			level: 1,
			maxima: "syntetic",
			minima: "raw",
			x: "artifical",
			y: "natural",
			z: "processed"
		}
	}
};

var nodes = {};

for( substrate in voxelz ) {

	nodes[substrate] = new Voxel(substrate, [], {
		substrate: substrate,
		level: 0
	});

	for( prime in voxelz[substrate] ) {

		nodes[prime] = new Voxel(prime, [], {
			level: voxelz[substrate][prime].level,
			substrate: substrate
		});

		for( aspect in voxelz[substrate][prime] ) {
			var name = voxelz[substrate][prime][aspect];

			nodes[name] = new Voxel(name, [aspect], {
				level: voxelz[substrate][prime].level,
				substrate: substrate,
				aspect: aspect
			});

		}
	}
}

var array = [];

for(name in nodes) {
	array.push( nodes[name] );
};



window.entpm = {};
entpm.voxelz = (function(){
	return array;
})()