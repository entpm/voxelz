ENTPM.VOXELZ = [];

ENTPM.STRUCTURE.substrates.forEach(function(substrate) {
	/* SUBSTRATES */
	var voxel = new ENTPM.Voxel(substrate.name);
	voxel.indexes.push(substrate.index);
	voxel.elementalType = ENTPM.STRUCTURE.elementalTypes[substrate.index].name;
	voxel.level = ENTPM.STRUCTURE.elementalTypes[substrate.index].level;
	voxel.levelIndex = ENTPM.STRUCTURE.levelTypes[voxel.level].index;
	ENTPM.VOXELZ.push(voxel);

	/* Substrate first voxel */
	var voxel = new ENTPM.Voxel(substrate.name);
	voxel.indexes.push(substrate.index);
	voxel.substrate = substrate.name;
	voxel.level = "vector";
	voxel.levelIndex = "0";
	ENTPM.VOXELZ.push(voxel);


	/* ELEMENTALS */
	var elementals = ENTPM.STRUCTURE.elementals[substrate.name];
	var elementalLevels = Object.keys( elementals );
	var elementalsStack = [];

	elementalLevels.forEach(function(level) {
		var elementalName = elementals[level];
		elementalsStack.push(elementalName);

		var voxel = new ENTPM.Voxel(elementalName);
		voxel.elementals = elementalsStack;
		voxel.substrate = substrate.name;
		voxel.indexes.push(substrate.index);
		voxel.level = ENTPM.STRUCTURE.elementalTypes[level].level;
		voxel.levelIndex = ENTPM.STRUCTURE.levelTypes[voxel.level].index;
		ENTPM.VOXELZ.push( voxel );
	})

	/* VARIABLES */
});