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
	  let chest = new THREE.Mesh(new THREE.BoxGeometry(2, 6, 4), new THREE.MeshBasicMaterial({color:0x000000}));
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
	  
	  all.add(face, body, arm, arm2);
	  return all;
  }
  if(team == 2){
	  let all = new THREE.Object3D();
	  var loader = new THREE.TextureLoader(); //84 texture 載入器
	  loader.setCrossOrigin ('');
	  let face_mtlArr = [
		new THREE.MeshBasicMaterial({ // +x
		  map: loader.load('texture/face.png')
		}),
		new THREE.MeshBasicMaterial({color: 0x000000}),
		new THREE.MeshBasicMaterial({color: 0x000000}),
		new THREE.MeshBasicMaterial({ // -y
		  map: loader.load('texture/skin.png')
		}),
		new THREE.MeshBasicMaterial({ // +z
		  map: loader.load('texture/face_right.png')
		}),
		new THREE.MeshBasicMaterial({ // -z
		  map: loader.load('texture/face_left.png')
		})
	  ];
	  let material_face = new THREE.MultiMaterial(face_mtlArr);
	  //Ins[0].mesh.children[0].children[0].material = material_face;
	  let face = new THREE.Mesh(new THREE.BoxGeometry(4, 4, 4), material_face);
	  face.position.set(0, 14, 0);
	  let body = new THREE.Object3D();
	  let chest = new THREE.Mesh(new THREE.BoxGeometry(2, 6, 4), new THREE.MeshBasicMaterial({color:0xffffff}));
	  chest.position.y = 3;
	  
	  let leg = new THREE.Object3D();
	  let uparm_mtlArr = [
		new THREE.MeshBasicMaterial({ // +x
		  map: loader.load('texture/upperarm_t2.png')
		}),
		new THREE.MeshBasicMaterial({ // -x
		  map: loader.load('texture/upperarm_t2.png')
		}),
		new THREE.MeshBasicMaterial({color: 0xffffff}),
		new THREE.MeshBasicMaterial({
		  visible: false
		}),
		new THREE.MeshBasicMaterial({ // +z
		  map: loader.load('texture/upperarm_t2.png')
		}),
		new THREE.MeshBasicMaterial({ // -z
		  map: loader.load('texture/upperarm_t2.png')
		})
	  ];
	  let thigh = new THREE.Mesh(new THREE.BoxGeometry(2, 3, 2), new THREE.MultiMaterial(uparm_mtlArr));
	  let skin_mtl = new THREE.MeshBasicMaterial({
		map: loader.load('texture/skin.png')
	  });
	  let calf = new THREE.Object3D();
	  let foot_mtlArr = [
		new THREE.MeshBasicMaterial({ // +x
		  map: loader.load('texture/foot_front_t2.png')
		}),
		new THREE.MeshBasicMaterial({ // -x
		  map: loader.load('texture/foot_other_t2.png')
		}),
		new THREE.MeshBasicMaterial({color: 0x000000}),
		new THREE.MeshBasicMaterial({color: 0x000000}),
		new THREE.MeshBasicMaterial({ // +z
		  map: loader.load('texture/foot_other_t2.png')
		}),
		new THREE.MeshBasicMaterial({ // -z
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
	  
	  all.add(face, body, arm, arm2);
	  return all;
  }
}