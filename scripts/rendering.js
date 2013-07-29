var container = document.getElementById("container");
var voxelTemplate = document.getElementById("voxel-template");

ENTPM.VOXELZ.forEach(function(voxel){
	var element = voxelTemplate.content.cloneNode(true);


	// Class names
	element.querySelector(".element").className += " " + voxel.name;

	if(!voxel.elementalType) {
		element.querySelector(".element").className += " " + "vector";
	};

	if(voxel.elementals) {
		for(var i = 0; i < voxel.elementals.length; i++) {
			element.querySelector(".element").className += " " +  voxel.elementals[i];
		};
	};

	if(voxel.level) {
		element.querySelector(".element").className += " " + voxel.level;
	};

	if(voxel.substrate) {
		element.querySelector(".element").className += " " + voxel.substrate;
	};

	if(voxel.elementalType) {
		element.querySelector(".element").className += " " + voxel.name;
	};

	if(voxel.elemental) {
		element.querySelector(".element").className += " " + voxel.elemental;
	};


	// Top number
	element.querySelector(".number").innerHTML = voxel.levelIndex;

	// Short big ID

	element.querySelector(".symbol").innerHTML = voxel.indexes[0];

	// Name

	element.querySelector(".name").innerHTML = voxel.name;

	// Subname

	if(voxel.elementalType) {
		element.querySelector(".substrate").innerHTML = voxel.elementalType;
	};

	if(voxel.substrate) {
		element.querySelector(".substrate").innerHTML = voxel.substrate;
	};

  // Long ID

  element.querySelector(".weight").innerHTML = "?";

  if(voxel.elementalType) {
  	element.querySelector(".weight").innerHTML = voxel.indexes[0];
  } else {
  	// TODO
  	element.querySelector(".weight").innerHTML = "0."+voxel.indexes[0];
  };


	container.appendChild(element);
});