let scene, camera, renderer;
      function init() {
        scene = new THREE.Scene();
        scene.background = new THREE.Color(0xff5f0f);
        camera = new THREE.PerspectiveCamera(50,window.innerWidth/window.innerHeight);
        camera.position.set(1, 1, 1);

        
        renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth,window.innerHeight);
        document.body.appendChild(renderer.domElement);

        
        var controls = new THREE.OrbitControls(camera, renderer.domElement);
        controls.update();

        var abint = new THREE.AmbientLight(0x555500);
        scene.add(abint);
        let loader = new THREE.GLTFLoader();
        loader.load('models/cake.gltf', function(gltf){
          scene.add(gltf.scene);
          animate();
        });
      }
      function animate() {
        
        requestAnimationFrame(animate);
        renderer.render(scene,camera);
      }
      init();