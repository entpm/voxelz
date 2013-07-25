ENTPM.VOXELZ = [];

ENTPM.STRUCTURE.substrates.forEach(function(substrate) {
	/* SUBSTRATES */
	var voxel = new ENTPM.Voxel(substrate.name);
	voxel.indexes.push(substrate.index);
	voxel.elementalType = ENTPM.STRUCTURE.elementalTypes[substrate.index].name;

	ENTPM.VOXELZ.push(voxel);

	/* Substrate first voxel */
	var voxel = new ENTPM.Voxel(substrate.name);

	voxel.indexes.push(substrate.index);
	voxel.substrate = substrate.name;

	ENTPM.VOXELZ.push(voxel);


	/* ELEMENTALS */
	var elementals = ENTPM.STRUCTURE.elementals[substrate.name];
	var elementalLevels = Object.keys( elementals );

	elementalLevels.forEach(function(level) {
		var elementalName = elementals[level];
		var voxel = new ENTPM.Voxel(elementalName);

		voxel.substrate = substrate.name;
		voxel.indexes.push(substrate.index);
		voxel.level = ENTPM.STRUCTURE.elementalTypes[level].level;

		ENTPM.VOXELZ.push( voxel );
	})

	/* VARIABLES */
});