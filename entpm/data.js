var container = document.getElementById("container");
var voxelTemplate = document.getElementById("voxel-template");
entpm.voxelz.forEach(function(voxel){
	var element = voxelTemplate.content.cloneNode(true);
	element.querySelector(".element").className += " " + voxel.aspects.join(" ");
	element.querySelector(".name").innerHTML = voxel.name;
	element.querySelector(".number").innerHTML = voxel.level;
	element.querySelector(".substrate").innerHTML = voxel.substrate;

	element.querySelector(".symbol").innerHTML = (Object.keys(voxelz).indexOf(voxel.substrate)+1);

	if(voxel.aspect) {
		element.querySelector(".symbol").innerHTML += voxel.aspect;
	}
	container.appendChild(element);
});