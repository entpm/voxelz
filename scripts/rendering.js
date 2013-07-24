var container = document.getElementById("container");
var voxelTemplate = document.getElementById("voxel-template");

ENTPM.VOXELZ.forEach(function(voxel){
	var element = voxelTemplate.content.cloneNode(true);

	element.querySelector(".name").innerHTML = voxel.name;

	// SUBSTRATE
	if(voxel.substrate) {
		element.querySelector(".element").className += " " + voxel.substrate;
	};

	// element.querySelector(".element").className += " " + voxel.aspects.join(" ");
	// element.querySelector(".name").innerHTML = voxel.name;

	// /* Level */
	element.querySelector(".number").innerHTML = voxel.level;

	if(voxel.level) {
		element.querySelector(".element").className += " " + voxel.level;
	};
	// element.querySelector(".element").className += " " + voxel.levelName;

	// /* Substrate */
	element.querySelector(".substrate").innerHTML = voxel.substrate;
	// element.querySelector(".element").dataset.category = voxel.substrate;
	// element.querySelector(".element").className += " " + voxel.substrate;

	element.querySelector(".symbol").innerHTML = voxel.indexes[0];

	// if(voxel.aspect) {
	// 	element.querySelector(".symbol").innerHTML += voxel.aspect;
	// }

	container.appendChild(element);
});