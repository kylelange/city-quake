function Xml(xml) {
  this.data = xml;
}

Xml.prototype.xmlToJson = function() {

	// Create the return object
	var obj = {};

	if (this.xml.nodeType == 1) { // element
		// do attributes
		if (this.xml.attributes.length > 0) {
		obj["@attributes"] = {};
			for (var j = 0; j < this.xml.attributes.length; j++) {
				var attribute = this.xml.attributes.item(j);
				obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
			}
		}
	} else if (this.xml.nodeType == 3) { // text
		obj = this.xml.nodeValue;
	}

	// do children
	if (this.xml.hasChildNodes()) {
		for(var i = 0; i < this.xml.childNodes.length; i++) {
			var item = this.xml.childNodes.item(i);
			var nodeName = item.nodeName;
			if (typeof(obj[nodeName]) == "undefined") {
				obj[nodeName] = xmlToJson(item);
			} else {
				if (typeof(obj[nodeName].push) == "undefined") {
					var old = obj[nodeName];
					obj[nodeName] = [];
					obj[nodeName].push(old);
				}
				obj[nodeName].push(xmlToJson(item));
			}
		}
	}
	return obj;
};

exports.xmlModule = Xml;
