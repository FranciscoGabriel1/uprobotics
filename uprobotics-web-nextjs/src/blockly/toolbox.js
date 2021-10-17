/* TODO: Change toolbox XML ID if necessary. Can export toolbox XML from Workspace Factory. */
var toolbox = document.getElementById("toolbox");

var options = {
  toolbox: toolbox,
  collapse: false,
  comments: false,
  disable: false,
  maxBlocks: Infinity,
  trashcan: true,
  horizontalLayout: false,
  toolboxPosition: "start",
  css: true,
  media: "https://blockly-demo.appspot.com/static/media/",
  rtl: false,
  scrollbars: true,
  sounds: true,
  oneBasedIndex: true,
  grid: {
    spacing: 20,
    length: 1,
    colour: "#9575CD",
    snap: false,
  },
  zoom: {
    controls: true,
    wheel: true,
    startScale: 1,
    maxScale: 3,
    minScale: 0.3,
    scaleSpeed: 1.2,
  },
};

var mostrar = "nada aqui";


/* Inject your workspace */
var workspace = Blockly.inject("blocklyDiv", options);
var workspaceBlocks = document.getElementById("workspaceBlocks");

function update(event) {
  Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
  var code = new String(Blockly.JavaScript.workspaceToCode(workspace));
  if (code != "") {
    mostrar = code;
    document.getElementById("codigogerado").innerHTML = mostrar;
    cleanThanUp();
  }
}

function cleanThanUp() {
  var list = document.getElementById("im");
  while (list.hasChildNodes()) {
    list.removeChild(list.childNodes[0]);
  }
  updateGraph();
}

function updateGraph() {
  if (mostrar != "nada aqui") {
    var viz = new Viz();
    viz
      .renderSVGElement(mostrar)
      .then(function (element) {
        document.getElementById("im").appendChild(element);
      })
      .catch((error) => {
        // Create a new Viz instance (@see Caveats page for more info)
        viz = new Viz();

        // Possibly display the error
        console.error(error);
      });
  }
}
workspace.addChangeListener(update);