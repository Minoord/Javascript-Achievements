// voeg controls toe (teleport & WASD controls)
const controls = new Controls(50);
controls.enableMovement();

// create a model
const minecraftModel = new Model('assets/models/minecraft/scene.gltf');
minecraftModel.setPosition(4.32912, 1.31293, -5.6555); 
minecraftModel.setScale(0.1, 0.1, 0.1);
minecraftModel.setRotation(0, -36.95, 0);

// create a model
const cuberoom = new Model('assets/models/cube-room/cube-room.gltf');
cuberoom.setPosition(-2.63876, 0.21587, -4.6605);
cuberoom.setScale(0.40083, 0.40083, 0.40083);
cuberoom.setRotation(0, -36.95, 0);

// create a primitive (sphere)
const sphere = new Sphere();
sphere.setColor('green');
sphere.setRadius(0.5);
sphere.setPosition(5.32912, 0.31293, -1.6555);

// create some text
const testText = new Text('Mediacollege Amsterdam WebXR');
testText.setPosition(1.5, 0, -5);
testText.setFontsize(50);
testText.setColor('yellow');

// create an image
const image = new XRImage('assets/images/sampleImage.jpg');
image.setPosition(1.16132, 0.60636, -4.8495);

// create an image
const image2 = new XRImage('assets/images/Lisse-049.jpg');
image2.setPosition (1.19513, 1.84795, -5.8495);

// create a 360 image
const image360 = new Sky('assets/images/FolkertdeJong.jpg');

const spotLight = new SpotLight();
spotLight.setPosition(-3.39382, 4.72931, 1.37905);
spotLight.setTarget(minecraftModel);

// listen for an event
minecraftModel.addEventListener('click', () => console.log('je klikt op mij'));