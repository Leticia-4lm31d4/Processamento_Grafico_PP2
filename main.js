// Config Cena
const scene = new THREE.Scene();
// Config das cameras
const camera_frente = new THREE.PerspectiveCamera( 90, window.innerWidth / window.innerHeight, 0.1, 1000 ); // (graus, proporção img, plano de recorte prox, plano de recorte dist)
const camera_direita = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 0.1, 1000 );

// Config Renderizador
const renderer = new THREE.WebGLRenderer();
// Tamanho da tela
renderer.setSize( window.innerWidth, window.innerHeight );
// Linkando renderizador com o html
document.body.appendChild( renderer.domElement ); 


// Posição das cameras
camera_frente.position.set(0, 1, 10);
camera_frente.lookAt(scene.position);
camera_frente.updateMatrixWorld();

camera_direita.position.set(5, 6, 10);
camera_direita.lookAt(scene.position);
camera_direita.updateMatrixWorld();

// Iluminação
var directionalLight = new THREE.DirectionalLight(0xffffff, 1.0);
directionalLight.position.set(100,0,0);
scene.add(directionalLight);

var ambientLight = new THREE.AmbientLight(0x111111, 1.0);
scene.add(ambientLight);


// Construindo Objetos / Modelos
const coordenadas = new THREE.AxesHelper(5);
scene.add(coordenadas);

// Sol
const solGeometry = new THREE.SphereGeometry(2, 32, 32); 
/*var sunTexture = new THREE.TextureLoader().load("sunTexture.jpeg");
var sunMaterial = new THREE.MeshBasicMaterial();

sunMaterial.map = sunTexture;*/

const solMaterial = new THREE.MeshBasicMaterial({color: 0xF8F8FF });
const sol = new THREE.Mesh(solGeometry, solMaterial);
sol.position.set(0,0,0);
scene.add(sol);

// Terra
const terraGeometry = new THREE.SphereGeometry(0.75, 32, 32); 
const terraMaterial = new THREE.MeshBasicMaterial({color: 0x1E90FF });
const terra = new THREE.Mesh(terraGeometry, terraMaterial);
terra.position.set(8,0,0);
scene.add(terra);

// Mercúrio
const mercurioGeometry = new THREE.SphereGeometry(0.25, 32, 32); 
const mercurioMaterial = new THREE.MeshBasicMaterial({color: 0xD2B48C });
const mercurio = new THREE.Mesh(mercurioGeometry, mercurioMaterial);
mercurio.position.set(3,0,0);
scene.add(mercurio);

// Venus
const venusGeometry = new THREE.SphereGeometry(0.6, 32, 32); 
const venusMaterial = new THREE.MeshBasicMaterial({color: 0xB8860B });
const venus = new THREE.Mesh(venusGeometry, venusMaterial);
venus.position.set(5,0,0);
scene.add(venus);


// Loop de renderização => Animar a cena
function animate() {
	requestAnimationFrame( animate );

	// Rotação
	sol.rotation.x += 0.0027; //27 dias para o sol girar em seu eixo
	terra.rotation.x += 0.01; // terra gira em 1 dia em seu eixo

	renderer.render( scene, camera_direita);
}
// Chamando a func de renderizador
animate();