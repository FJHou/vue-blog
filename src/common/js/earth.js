// Created by Bjorn Sandvik - thematicmapping.org
(function () {

	var webglEl = document.getElementById('webgl');

	if (!Detector.webgl) {
		Detector.addGetWebGLMessage(webglEl);
		return;
	}

	var width  = webglEl.clientWidth,
		  height = webglEl.offsetHeight;

	// Earth params
	var radius   = 0.5,
		segments = 32,
		rotation = 6;

	var scene = new THREE.Scene();

	var camera = new THREE.PerspectiveCamera(45, width / height, 0.01, 1000);
	camera.position.z = 2.5;

	var renderer = new THREE.WebGLRenderer();
	console.log(renderer)
	renderer.setSize(width, height);
	// renderer.setViewport(0, 10, width, height/1.5)

	scene.add(new THREE.AmbientLight(0x333333));

	var light = new THREE.DirectionalLight(0xffffff, 1);
	light.position.set(0,0,10);
	scene.add(light);

    var sphere = createSphere(radius, segments);
	sphere.rotation.y = rotation;
	scene.add(sphere)

    var clouds = createClouds(radius, segments);
    clouds.name = 'clouds'
	clouds.rotation.y = rotation;
	scene.add(clouds)

	var stars = createStars(90, 64);
	stars.name = 'stars'
	scene.add(stars);

	var poi = createPoi(location)
	console.log(poi)
	scene.add(poi);

	var controls = new THREE.TrackballControls(camera, webglEl);
	controls.name = 'controls'
	controls.rotateSpeed = 1
	controls.noZoom = false
	controls.noPan = true
	controls.staticMoving = true
	webglEl.appendChild(renderer.domElement);
	render();

	function render() {
		controls.update();
		sphere.rotation.y += 0.001;
		clouds.rotation.y += 0.0011;
		requestAnimationFrame(render);
		renderer.render(scene, camera);
	}

	function createSphere(radius, segments) {
		return new THREE.Mesh(
			new THREE.SphereGeometry(radius, segments, segments),
			new THREE.MeshPhongMaterial({
				map:         THREE.ImageUtils.loadTexture('images/earth4.jpg'),
				bumpMap:     THREE.ImageUtils.loadTexture('images/elev_bump_4k.jpg'),
				bumpScale:   0.005,
				specularMap: THREE.ImageUtils.loadTexture('images/water_4k.png'),
				// specular:    new THREE.Color('grey')
			})
		);
	}

	function createClouds(radius, segments) {
		return new THREE.Mesh(
			new THREE.SphereGeometry(radius + 0.02, segments, segments),
			new THREE.MeshPhongMaterial({
				map:         THREE.ImageUtils.loadTexture('images/fair_clouds_4k.png'),
				transparent: true
			})
		);
	}

	function createStars(radius, segments) {
		return new THREE.Mesh(
			new THREE.SphereGeometry(radius, segments, segments),
			new THREE.MeshBasicMaterial({
				map:  THREE.ImageUtils.loadTexture('images/3524.jpg'),
				side: THREE.BackSide
			})
		);
	}

	function createPoi(location) {
		var map = new THREE.TextureLoader().load('images/i_namibia.png')
		var material = new THREE.SpriteMaterial( { map: map, color: 0xffffff, fog: true } );
        var sprite = new THREE.Sprite( material );
		return sprite
	}



}());
