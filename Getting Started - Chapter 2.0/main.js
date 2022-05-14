const canvas = document.getElementById("renderCanvas"); // Captura o elemento canvas

// constrói o motor da animação
const engine = new BABYLON.Engine(canvas, true, {
    preserveDrawingBuffer: true,
    stencil: true,
    disableWebGL2Support: false,
});

// Constrói a cena da animação
const scene = new BABYLON.Scene(engine);

// Constrói a camera da animação
const camera = new BABYLON.ArcRotateCamera(
    "camera",
    -Math.PI / 2,
    Math.PI / 2.5,
    10,
    new BABYLON.Vector3(0, 0, 0)
);

// Constrói a iluminação da animação
const light = new BABYLON.HemisphericLight(
    "light",
    new BABYLON.Vector3(0, 0.7, 0)
);

// Constrói a caixa da animação
const box = BABYLON.MeshBuilder.CreateBox("box", {});

// Redimensiona o objeto
// box.scaling = new BABYLON.Vector3(2, 1.5, 3);
// box.scaling.x = 2;
// box.scaling.y = 1.5;
// box.scaling.z = 3;

// Reposiciona o objeto;
box.position = new BABYLON.Vector3(0, 0, 0);
// box.position.x = -2;
box.position.y = 0.5;
// box.position.z = 0.1;

// Rotaciona o objeto
// box.rotation = new BABYLON.Vector3(BABYLON.Tools.ToRadians(45), 0, 0);
// box.rotation.x = BABYLON.Tools.ToRadians(45);
// box.rotation.y = Math.PI / 4;
// box.rotation.z = Math.PI / 4;

const roof = BABYLON.MeshBuilder.CreateCylinder("roof", {
    diameter: 1.3,
    height: 1.2,
    tessellation: 3,
});
roof.scaling.x = 0.75;
roof.rotation.z = Math.PI / 2;
roof.position.y = 1.22;

// Constrói o chão da animação
const ground = BABYLON.MeshBuilder.CreateGround("ground", {
    width: 10,
    height: 10,
});

//Anexe os controles de entrada a um elemento específico do DOM para obter a entrada.
camera.attachControl(canvas, true);

// Inicia o looping da animação
engine.runRenderLoop(() => {
    scene.render();
});
