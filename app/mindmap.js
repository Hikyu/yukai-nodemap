const jsmind = require("jsmind");
const mind = require("./mind.json");
require("jsmind/style/jsmind.css");
const $ = require("jquery");


var mindmap = {};

mindmap.initializr = function() {
  var $this = this;
  var options = {
    container: "mind_container",
    editable: true,
    theme: "greensea",
    support_html: true
  };

  var jm = jsmind.show(options, mind);
  $this._jm = jm;
  var root = jm.get_root();
  var colors = [
    "lightsalmon",
    "khaki",
    "violet",
    "lightgreen",
    "sandybrown",
    "turquoise"
  ];
  var directChildren = root.children;
  for (var i = 0; i < directChildren.length; i++) {
    var allChildren = $this.getAllChildren(directChildren[i]);
    var color = colors[i % colors.length];
    $this.setNodesColor(allChildren, color);
  }
  jm.disable_edit();
};

mindmap.getAllChildren = function(node) {
  var $this = this;
  var children = [];
  if (node.children && node.children.length > 0) {
    node.children.forEach(function(n) {
      children = children.concat($this.getAllChildren(n));
    });
  }
  children = children.concat(node);
  return children;
};
mindmap.setNodesColor = function(nodes, color) {
  var $this = this;
  nodes.forEach(function(node) {
    $this._jm.set_node_color(node.id, color, "#fff");
  });
};

mindmap.zoomIn = function() {
  var $this = this;
  return $this._jm.view.zoomIn();
};

mindmap.zoomOut = function() {
  var $this = this;
  return $this._jm.view.zoomOut();
};

mindmap.clickNode = function() {
    alert('fuck');

}


//  节点点击事件


module.exports = mindmap;