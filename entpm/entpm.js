window.ENTPM = {}

// function Voxel(name, aspects, descriptions) {
// 	function getLevelName(level) {
// 		switch(level) {
// 			case 0:
// 				return "vector";
// 			case 1:
// 				return "maxima";
// 			case 2:
// 				return "minima";
// 		}
// 	};

// 	aspects = aspects || [];
// 	this.name = name;
// 	this.aspects = aspects;
// 	for(description in descriptions) {
// 		this[description] = descriptions[description];
// 	};

// 	this.levelName = getLevelName(this.level);
// };

// var voxelz = {
// 	"information": {
// 		"organism": {
// 			level: 0,
// 			maxima: "hybrid",
// 			minima: "cybernetic",
// 			x: "animal",
// 			y: "human",
// 			z: "robotic"
// 		},
// 		"composition": {
// 			level: 1,
// 			maxima: "synthetic",
// 			minima: "raw",
// 			x: "artificial",
// 			y: "natural",
// 			z: "processed"
// 		},
// 		"shape": {
// 			level: 2,
// 			maxima: "loose",
// 			minima: "dense",
// 			x: "blobs",
// 			y: "nets",
// 			z: "spikes"
// 		},
// 		"communication": {
// 			level: 1,
// 			maxima: "precise",
// 			minima: "abstract",
// 			x: "numbers",
// 			y: "words",
// 			z: "forms"
// 		},
// 		"environment": {
// 			level: 2,
// 			maxima: "dream",
// 			minima: "reality",
// 			x: "earth",
// 			y: "space",
// 			z: "mind"
// 		}
// 	}
// };

// var nodes = {};

// for( substrate in voxelz ) {

// 	nodes[substrate] = new Voxel(substrate, [], {
// 		substrate: substrate,
// 		level: 0
// 	});

// 	for( prime in voxelz[substrate] ) {

// 		nodes[prime] = new Voxel(prime, [], {
// 			level: voxelz[substrate][prime].level,
// 			substrate: substrate
// 		});

// 		for( aspect in voxelz[substrate][prime] ) {
// 			var name = voxelz[substrate][prime][aspect];

// 			nodes[name] = new Voxel(name, [aspect], {
// 				level: voxelz[substrate][prime].level,
// 				substrate: substrate,
// 				aspect: aspect
// 			});

// 		}
// 	}
// }

// var array = [];

// for(name in nodes) {
// 	array.push( nodes[name] );
// };



// window.entpm = {};
// entpm.voxelz = (function(){
// 	return array;
// })()
