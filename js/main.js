let scene, camera, renderer;

let LINE_COUNT = 80000;
let geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(new Float32Array(6*LINE_COUNT), 3));
  geometry.setAttribute("velocity", new THREE.BufferAttribute(new Float32Array(2*LINE_COUNT), 1));
let position = geometry.getAttribute("position");
let posarr = position.array;
let velocity = geometry.getAttribute("velocity");
let velarr = velocity.array;

class Stars {
  constructor(){
    this.start()
  }
  start(){
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 500);
    camera.position.z = 200;

    renderer = new THREE.WebGLRenderer({antialias:true});
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    for (let line_index= 0; line_index < LINE_COUNT; line_index++) {
      let x = Math.random() * 400 - 200;
      let y = Math.random() * 200 - 100;
      let z = Math.random() * 500 - 100;
      let xx = x;
      let yy = y;
      let zz = z;
      //начало
      posarr[6*line_index] = x;
      posarr[6*line_index+1] = y;
      posarr[6*line_index+2] = z;
      //конец
      posarr[6*line_index+3] = xx;
      posarr[6*line_index+4] = yy;
      posarr[6*line_index+5] = zz;

      velarr[2*line_index] = velarr[2*line_index+1]= 0;
  }
    let mat = new THREE.LineBasicMaterial({color: 0xffffff});
    let lines = new THREE.LineSegments(geometry, mat);
    scene.add(lines);
    // console.log('ok');
  }
}

new Stars()