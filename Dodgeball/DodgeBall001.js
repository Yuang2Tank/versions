function user(){
  var loader = new THREE.TextureLoader();
  let geometry = new THREE.RingGeometry(1, 20, 32, 2, Math.PI/2, Math.PI);
  let material = new THREE.MeshBasicMaterial( { color: 0xffff00, side: THREE.DoubleSide, transparent: true, opacity: 0.5} );
  let powerControl = new THREE.Mesh( geometry, material );
  powerControl.rotation.z = -Math.PI/2;
  powerControl.rotation.y = Math.PI;
  var interface0 = new THREE.Object3D();
  powerControl.position.set(0,0,0);
  
  let circleS = new THREE.Mesh( new THREE.CircleGeometry( 6, 32 ), new THREE.MeshBasicMaterial( {map: loader.load('texture/s_texture.png'), side: THREE.DoubleSide}));
  circleS.material.map.repeat.x = 0.5;
  let circleP = new THREE.Mesh( new THREE.CircleGeometry( 6, 32 ), new THREE.MeshBasicMaterial( {map: loader.load('texture/d_texture.png'), side: THREE.DoubleSide}));
  circleP.material.map.repeat.x = 0.5;
  circleS.position.set(-30,0,0);
  circleP.position.set(30,0,0);
  let predict = new THREE.Mesh( new THREE.RingGeometry(1, 20, 32, 2, Math.PI/2, 0), new THREE.MeshBasicMaterial( { color: 0xff0000, side: THREE.DoubleSide, transparent: true, opacity: 0.5}));
  
  predict.rotation.z = -Math.PI/2;
  predict.rotation.y = Math.PI;
  predict.position.z = 0.2;
  interface0.rotation.x = -Math.PI/2;
  interface0.rotation.z = -Math.PI/2;
  interface0.add(powerControl, circleS, circleP, predict);
  return interface0;
}
function makePlayer(team){
  if(team == 1){
	  let all = new THREE.Object3D();
	  var loader = new THREE.TextureLoader(); //84 texture 載入器
	  loader.setCrossOrigin ('');
	  let face_mtlArr = [
		new THREE.MeshPhongMaterial({ // +x
		  map: loader.load('texture/face.png')
		}),
		new THREE.MeshPhongMaterial({color: 0x000000}),
		new THREE.MeshPhongMaterial({color: 0x000000}),
		new THREE.MeshPhongMaterial({ // -y
		  map: loader.load('texture/skin.png')
		}),
		new THREE.MeshPhongMaterial({ // +z
		  map: loader.load('texture/face_right.png')
		}),
		new THREE.MeshPhongMaterial({ // -z
		  map: loader.load('texture/face_left.png')
		})
	  ];
	  let material_face = new THREE.MultiMaterial(face_mtlArr);
	  //Ins[0].mesh.children[0].children[0].material = material_face;
	  let face = new THREE.Mesh(new THREE.BoxGeometry(4, 4, 4), material_face);
	  face.position.set(0, 14, 0);
	  let body = new THREE.Object3D();
	  let chest = new THREE.Mesh(new THREE.BoxGeometry(2, 6, 4), new THREE.MeshPhongMaterial({color:0x000000}));
	  chest.position.y = 3;
	  
	  let leg = new THREE.Object3D();
	  let uparm_mtlArr = [
		new THREE.MeshPhongMaterial({ // +x
		  map: loader.load('texture/upperarm_t1.png')
		}),
		new THREE.MeshPhongMaterial({ // -x
		  map: loader.load('texture/upperarm_t1.png')
		}),
		new THREE.MeshPhongMaterial({color: 0x000000}),
		new THREE.MeshPhongMaterial({
		  visible: false
		}),
		new THREE.MeshPhongMaterial({ // +z
		  map: loader.load('texture/upperarm_t1.png')
		}),
		new THREE.MeshPhongMaterial({ // -z
		  map: loader.load('texture/upperarm_t1.png')
		})
	  ];
	  let thigh = new THREE.Mesh(new THREE.BoxGeometry(2, 3, 2), new THREE.MultiMaterial(uparm_mtlArr));
	  let skin_mtl = new THREE.MeshPhongMaterial({
		map: loader.load('texture/skin.png')
	  });
	  let calf = new THREE.Object3D();
	  let foot_mtlArr = [
		new THREE.MeshPhongMaterial({ // +x
		  map: loader.load('texture/foot_front_t1.png')
		}),
		new THREE.MeshPhongMaterial({ // -x
		  map: loader.load('texture/foot_other_t1.png')
		}),
		new THREE.MeshPhongMaterial({color: 0x000000}),
		new THREE.MeshPhongMaterial({color: 0x000000}),
		new THREE.MeshPhongMaterial({ // +z
		  map: loader.load('texture/foot_other_t1.png')
		}),
		new THREE.MeshPhongMaterial({ // -z
		  map: loader.load('texture/foot_other_t1.png')
		})
	  ];
	  let box3 = new THREE.Mesh(new THREE.BoxGeometry(2, 3, 2), new THREE.MultiMaterial(foot_mtlArr));
	  let elbow1 = new THREE.Mesh(new THREE.CylinderGeometry(1, 1, 2), skin_mtl);
	  box3.position.y = -1.5;
	  calf.add(box3);
	  calf.position.y = -3;
	  thigh.position.y = -1.5;
	  //calf.rotation.z = Math.PI/2;
	  elbow1.rotation.x = Math.PI/2;
	  elbow1.position.y = -3;
	  leg.add(thigh, calf, elbow1);
	  let leg1 = leg.clone();
	  leg.position.z = 1;
	  leg1.position.z = -1;
	  body.add(chest, leg, leg1);
	  
	  let arm = new THREE.Object3D();
	  let upperarm = new THREE.Mesh(new THREE.BoxGeometry(2, 3, 2), new THREE.MultiMaterial(uparm_mtlArr));
	  let forearm = new THREE.Object3D();
	  let box2 = new THREE.Mesh(new THREE.BoxGeometry(2, 3, 2), skin_mtl);
	  let elbow = new THREE.Mesh(new THREE.CylinderGeometry(1, 1, 2), skin_mtl);
	  box2.position.y = -1.5;
	  forearm.add(box2);
	  forearm.position.y = -3;
	  upperarm.position.y = -1.5;
	  forearm.rotation.z = Math.PI/2;
	  elbow.rotation.x = Math.PI/2;
	  elbow.position.y = -3;
	  arm.add(upperarm, forearm, elbow);
	  arm.rotation.z = Math.PI/6;
	  let arm2 = arm.clone();
	  arm.position.set(0, 12, 3);
	  arm2.position.set(0, 12, -3);
	  body.position.y = 6;
	  let life = new THREE.Mesh(new THREE.BoxGeometry( 1, 1, 10 ), new THREE.MeshBasicMaterial({color: 0x12fe12}));
	  
	  let ss = new THREE.Mesh( new THREE.CircleGeometry( 4, 32 ), new THREE.MeshBasicMaterial( { color: 0x000000, opacity: 0.5, transparent: true } ) );
	  ss.rotation.x = -Math.PI/2;
	  ss.position.y = 0.15;
	  
	  life.position.y = 20;
	  all.add(face, body, arm, arm2, life, ss);
	  return all;
  }
  if(team == 2){
	  let all = new THREE.Object3D();
	  var loader = new THREE.TextureLoader(); //84 texture 載入器
	  loader.setCrossOrigin ('');
	  let face_mtlArr = [
		new THREE.MeshPhongMaterial({ // +x
		  map: loader.load('texture/face.png')
		}),
		new THREE.MeshPhongMaterial({color: 0x000000}),
		new THREE.MeshPhongMaterial({color: 0x000000}),
		new THREE.MeshPhongMaterial({ // -y
		  map: loader.load('texture/skin.png')
		}),
		new THREE.MeshPhongMaterial({ // +z
		  map: loader.load('texture/face_right.png')
		}),
		new THREE.MeshPhongMaterial({ // -z
		  map: loader.load('texture/face_left.png')
		})
	  ];
	  let material_face = new THREE.MultiMaterial(face_mtlArr);
	  //Ins[0].mesh.children[0].children[0].material = material_face;
	  let face = new THREE.Mesh(new THREE.BoxGeometry(4, 4, 4), material_face);
	  face.position.set(0, 14, 0);
	  let body = new THREE.Object3D();
	  let chest = new THREE.Mesh(new THREE.BoxGeometry(2, 6, 4), new THREE.MeshPhongMaterial({color:0xffffff}));
	  chest.position.y = 3;
	  
	  let leg = new THREE.Object3D();
	  let uparm_mtlArr = [
		new THREE.MeshPhongMaterial({ // +x
		  map: loader.load('texture/upperarm_t2.png')
		}),
		new THREE.MeshPhongMaterial({ // -x
		  map: loader.load('texture/upperarm_t2.png')
		}),
		new THREE.MeshPhongMaterial({color: 0xffffff}),
		new THREE.MeshPhongMaterial({
		  visible: false
		}),
		new THREE.MeshPhongMaterial({ // +z
		  map: loader.load('texture/upperarm_t2.png')
		}),
		new THREE.MeshPhongMaterial({ // -z
		  map: loader.load('texture/upperarm_t2.png')
		})
	  ];
	  let thigh = new THREE.Mesh(new THREE.BoxGeometry(2, 3, 2), new THREE.MultiMaterial(uparm_mtlArr));
	  let skin_mtl = new THREE.MeshPhongMaterial({
		map: loader.load('texture/skin.png')
	  });
	  let calf = new THREE.Object3D();
	  let foot_mtlArr = [
		new THREE.MeshPhongMaterial({ // +x
		  map: loader.load('texture/foot_front_t2.png')
		}),
		new THREE.MeshPhongMaterial({ // -x
		  map: loader.load('texture/foot_other_t2.png')
		}),
		new THREE.MeshPhongMaterial({color: 0x000000}),
		new THREE.MeshPhongMaterial({color: 0x000000}),
		new THREE.MeshPhongMaterial({ // +z
		  map: loader.load('texture/foot_other_t2.png')
		}),
		new THREE.MeshPhongMaterial({ // -z
		  map: loader.load('texture/foot_other_t2.png')
		})
	  ];
	  let box3 = new THREE.Mesh(new THREE.BoxGeometry(2, 3, 2), new THREE.MultiMaterial(foot_mtlArr));
	  let elbow1 = new THREE.Mesh(new THREE.CylinderGeometry(1, 1, 2), skin_mtl);
	  box3.position.y = -1.5;
	  calf.add(box3);
	  calf.position.y = -3;
	  thigh.position.y = -1.5;
	  elbow1.rotation.x = Math.PI/2;
	  elbow1.position.y = -3;
	  leg.add(thigh, calf, elbow1);
	  let leg1 = leg.clone();
	  leg.position.z = 1;
	  leg1.position.z = -1;
	  body.add(chest, leg, leg1);
	  
	  let arm = new THREE.Object3D();
	  let upperarm = new THREE.Mesh(new THREE.BoxGeometry(2, 3, 2), new THREE.MultiMaterial(uparm_mtlArr));
	  let forearm = new THREE.Object3D();
	  let box2 = new THREE.Mesh(new THREE.BoxGeometry(2, 3, 2), skin_mtl);
	  let elbow = new THREE.Mesh(new THREE.CylinderGeometry(1, 1, 2), skin_mtl);
	  box2.position.y = -1.5;
	  forearm.add(box2);
	  forearm.position.y = -3;
	  upperarm.position.y = -1.5;
	  forearm.rotation.z = Math.PI/2;
	  elbow.rotation.x = Math.PI/2;
	  elbow.position.y = -3;
	  arm.add(upperarm, forearm, elbow);
	  arm.rotation.z = Math.PI/6;
	  let arm2 = arm.clone();
	  arm.position.set(0, 12, 3);
	  arm2.position.set(0, 12, -3);
	  body.position.y = 6;
	  let life = new THREE.Mesh(new THREE.BoxGeometry( 1, 1, 10 ), new THREE.MeshBasicMaterial({color: 0x12fe12}));
	  life.position.y = 20;
	  let ss = new THREE.Mesh( new THREE.CircleGeometry( 4, 32 ), new THREE.MeshBasicMaterial( { color: 0x000000, opacity: 0.5, transparent: true } ) );
	  ss.rotation.x = -Math.PI/2;
	  ss.position.y = 0.15;
	  
	  all.add(face, body, arm, arm2, life, ss);
	  return all;
  }
}
function makeOwe(){
  var Owe = new THREE.Object3D();
  let p1 = new THREE.Mesh(new THREE.PlaneGeometry( 30, 160, 32 ), new THREE.MeshBasicMaterial({color:0xf44444})) ;
  
  let p2 = new THREE.Mesh(new THREE.PlaneGeometry( 50, 30, 32 ), new THREE.MeshBasicMaterial({color:0xf44444})) ;
  let p3 = p2.clone();
  p1.rotation.x = -Math.PI/2;
  p2.rotation.x = -Math.PI/2;
  p3.rotation.x = -Math.PI/2;
  
  p2.position.set(40, 0, -65);
  p3.position.set(40, 0, 65);
  Owe.add(p1, p2, p3);
  return Owe;
}
function makeLine(){
  let PPAP = new THREE.Object3D();
  let l1 = new THREE.Mesh(new THREE.PlaneGeometry( 0.5, 200, 32 ), new THREE.MeshBasicMaterial({color:0xffffff}));
  l1.position.set(0, 0.01, -49.75);
  l1.rotation.z = Math.PI/2;
  l1.rotation.x = -Math.PI/2;
  let l2 = new THREE.Mesh(new THREE.PlaneGeometry( 0.5, 200, 32 ), new THREE.MeshBasicMaterial({color:0xffffff}));
  l2.position.set(0, 0.01, 49.75);
  l2.rotation.z = Math.PI/2;
  l2.rotation.x = -Math.PI/2;
  let l3 = new THREE.Mesh(new THREE.PlaneGeometry( 0.5, 100, 32 ), new THREE.MeshBasicMaterial({color:0xffffff}));
  l3.position.set(-99.75, 0.01, 0);
  l3.rotation.x = -Math.PI/2;
  let l4 = new THREE.Mesh(new THREE.PlaneGeometry( 0.5, 100, 32 ), new THREE.MeshBasicMaterial({color:0xffffff}));
  l4.position.set(99.75, 0.01, 0);
  l4.rotation.x = -Math.PI/2;
  let l5 = new THREE.Mesh(new THREE.PlaneGeometry( 0.5, 100, 32 ), new THREE.MeshBasicMaterial({color:0xffffff}));
  l5.position.set(0, 0.01, 0);
  l5.rotation.x = -Math.PI/2;
  let ringMid = new THREE.Mesh( new THREE.RingGeometry( 20, 20.5, 32 ), new THREE.MeshBasicMaterial( { color: 0xffffff }));
  ringMid.position.y = 0.01;
  ringMid.rotation.x = -Math.PI/2;
  PPAP.add(l1, l2, l3, l4, l5, ringMid);
  return PPAP;
}
function makeParabola(v, pos, P_T, elevat_ang, rotation) {
  let h = pos.y;
  let tStar = ( v*Math.sin(elevat_ang) + Math.sqrt(v*v*Math.sin(elevat_ang)*Math.sin(elevat_ang) + 2*g*h))/g;
	let N = 30;
  let dt = tStar/N;
  let geometry = new THREE.Geometry();
    for (let t = 0; t <= tStar; t += dt) {
      geometry.vertices.push (new THREE.Vector3(pos.x+v*Math.cos(elevat_ang)*Math.cos(-P_T + rotation)*t, pos.y+v*Math.sin(elevat_ang)*t-0.5*g*t*t, pos.z + v*Math.cos(elevat_ang)*Math.sin(-P_T + rotation)*t));
    }
  geometry.computeLineDistances();
  let mat = new THREE.LineDashedMaterial ({color:0x0000ff, dashSize: 3, gapSize: 3})
	return para = new THREE.Line(geometry, mat);
}