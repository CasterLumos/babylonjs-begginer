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
    3,
    new BABYLON.Vector3(0, 0, 0)
);

// Constrói a iluminação da animação
const light = new BABYLON.HemisphericLight(
    "light",
    new BABYLON.Vector3(0, 0.7, 0)
);

// Constrói a caixa da animação
const box = BABYLON.MeshBuilder.CreateBox("box", {});
//Anexe os controles de entrada a um elemento específico do DOM para obter a entrada.
camera.attachControl(canvas, true);

// Inicia o looping da animação
engine.runRenderLoop(() => {
    scene.render();
});
