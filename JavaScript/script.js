// Configurando o Ambiente WebGL 

// Cria uma cena
const scene = new THREE.Scene();

// Cria uma câmera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Cria um renderizador
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Inicia um loop de renderização
function animate() {
  requestAnimationFrame(animate);
  
  // Atualize sua cena aqui

  renderer.render(scene, camera);
}
animate();