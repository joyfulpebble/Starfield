let since, camera, renderer;

let LINE_COUNT = 80000;
let geom = new THREE.BufferGeometry();
  geom.setAttribute("position", new THREE.BufferAttribute(new Float32Array(6*LINE_COUNT), 3));
  geom.setAttribute("velocity", new THREE.BufferAttribute(new Float32Array(2*LINE_COUNT), 1));
let position = geom.getAttribute("position");
let pa = position.array;
let velocity = geom.getAttribute("velocity");
let va = velocity.array;

