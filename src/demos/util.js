
var shaderCache = {};

String.prototype.hashCode = function() {
  var hash = 0, i, chr, len;
  if (this.length === 0) return hash;
  for (i = 0, len = this.length; i < len; i++) {
    chr   = this.charCodeAt(i);
    hash  = ((hash << 5) - hash) + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
};

export function getShader(gl, source, type) {

    shaderCache[type] = shaderCache[type] || {};

    var hash = source.hashCode();
    if (shaderCache[type][hash]) {
        return shaderCache[type][hash]
    }

    var shader = gl.createShader(type);

    gl.shaderSource(shader, source);
    gl.compileShader(shader);

    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error(gl.getShaderInfoLog(shader));
        return null;
    }

    shaderCache[type][hash] = shader;

    return shader;
}

export function createProgram(gl, shaders, locations) {
    var program = gl.createProgram();
    var length = shaders.length;
    for (var i = 0; i < length; ++i) {
        gl.attachShader(program, shaders[i]);
    }
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        console.error('Failed to link program!');
        return null;
    }

    locations.attribs = location.attribs || {};
    locations.uniforms = location.uniforms || {};

    Object.keys(location.attribs).forEach(attrib => {
        program[attrib] = gl.getAttribLocation(program, attrib);
    });

    Object.keys(location.uniforms).forEach(unif => {
        program[unif] = gl.getUniformLocation(program, unif);
    });

    return program
}