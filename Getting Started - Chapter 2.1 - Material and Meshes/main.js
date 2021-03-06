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
const buildBox = () => {
    //texture
    const boxMat = new BABYLON.StandardMaterial("boxMat");
    boxMat.diffuseTexture = new BABYLON.Texture(
        "https://assets.babylonjs.com/environments/cubehouse.png"
    );

    //options parameter to set different images on each side
    const faceUV = [];
    faceUV[0] = new BABYLON.Vector4(0.5, 0.0, 0.75, 1.0); //rear face
    faceUV[1] = new BABYLON.Vector4(0.0, 0.0, 0.25, 1.0); //front face
    faceUV[2] = new BABYLON.Vector4(0.25, 0, 0.5, 1.0); //right side
    faceUV[3] = new BABYLON.Vector4(0.75, 0, 1.0, 1.0); //left side
    // top 4 and bottom 5 not seen so not set

    /**** World Objects *****/
    const box = BABYLON.MeshBuilder.CreateBox("box", {
        faceUV: faceUV,
        wrap: true,
    });
    box.material = boxMat;
    box.position.y = 0.5;

    return box;
};

const buildRoof = () => {
    //texture
    const roofMat = new BABYLON.StandardMaterial("roofMat");
    roofMat.diffuseTexture = new BABYLON.Texture(
        "https://assets.babylonjs.com/environments/roof.jpg"
    );

    const roof = BABYLON.MeshBuilder.CreateCylinder("roof", {
        diameter: 1.3,
        height: 1.2,
        tessellation: 3,
    });
    roof.material = roofMat;
    roof.scaling.x = 0.75;
    roof.rotation.z = Math.PI / 2;
    roof.position.y = 1.22;

    return roof;
};

// Constrói o chão da animação
const buildGround = () => {
    //color
    const groundMat = new BABYLON.StandardMaterial("groundMat");
    groundMat.diffuseColor = new BABYLON.Color3(0, 1, 0);

    const ground = BABYLON.MeshBuilder.CreateGround("ground", {
        width: 10,
        height: 10,
    });
    ground.material = groundMat;
};
//Anexe os controles de entrada a um elemento específico do DOM para obter a entrada.

//constrói os elementos
const ground = buildGround();
const box = buildBox();
const roof = buildRoof();

const house = BABYLON.Mesh.MergeMeshes(
    [box, roof],
    true,
    false,
    null,
    false,
    true
);

camera.attachControl(canvas, true);

// Inicia o looping da animação
engine.runRenderLoop(() => {
    scene.render();
});
