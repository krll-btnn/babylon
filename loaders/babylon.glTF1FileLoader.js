(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("babylonjs"));
	else if(typeof define === 'function' && define.amd)
		define("babylonjs-loaders", ["babylonjs"], factory);
	else if(typeof exports === 'object')
		exports["babylonjs-loaders"] = factory(require("babylonjs"));
	else
		root["LOADERS"] = factory(root["BABYLON"]);
})((typeof self !== "undefined" ? self : typeof global !== "undefined" ? global : this), (__WEBPACK_EXTERNAL_MODULE_babylonjs_Misc_tools__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../../../dev/loaders/src/glTF/1.0/glTFBinaryExtension.ts":
/*!****************************************************************!*\
  !*** ../../../dev/loaders/src/glTF/1.0/glTFBinaryExtension.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GLTFBinaryExtension: () => (/* binding */ GLTFBinaryExtension)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "../../../../node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _glTFLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./glTFLoader */ "../../../dev/loaders/src/glTF/1.0/glTFLoader.ts");
/* harmony import */ var _glTFLoaderUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./glTFLoaderUtils */ "../../../dev/loaders/src/glTF/1.0/glTFLoaderUtils.ts");
/* harmony import */ var _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./glTFLoaderInterfaces */ "../../../dev/loaders/src/glTF/1.0/glTFLoaderInterfaces.ts");




var BinaryExtensionBufferName = "binary_glTF";
/**
 * @internal
 * @deprecated
 */
var GLTFBinaryExtension = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__extends)(GLTFBinaryExtension, _super);
    function GLTFBinaryExtension() {
        return _super.call(this, "KHR_binary_glTF") || this;
    }
    GLTFBinaryExtension.prototype.loadRuntimeAsync = function (scene, data, rootUrl, onSuccess) {
        var extensionsUsed = data.json.extensionsUsed;
        if (!extensionsUsed || extensionsUsed.indexOf(this.name) === -1 || !data.bin) {
            return false;
        }
        this._bin = data.bin;
        onSuccess(_glTFLoader__WEBPACK_IMPORTED_MODULE_0__.GLTFLoaderBase.CreateRuntime(data.json, scene, rootUrl));
        return true;
    };
    GLTFBinaryExtension.prototype.loadBufferAsync = function (gltfRuntime, id, onSuccess, onError) {
        if (gltfRuntime.extensionsUsed.indexOf(this.name) === -1) {
            return false;
        }
        if (id !== BinaryExtensionBufferName) {
            return false;
        }
        this._bin.readAsync(0, this._bin.byteLength).then(onSuccess, function (error) { return onError(error.message); });
        return true;
    };
    GLTFBinaryExtension.prototype.loadTextureBufferAsync = function (gltfRuntime, id, onSuccess) {
        var texture = gltfRuntime.textures[id];
        var source = gltfRuntime.images[texture.source];
        if (!source.extensions || !(this.name in source.extensions)) {
            return false;
        }
        var sourceExt = source.extensions[this.name];
        var bufferView = gltfRuntime.bufferViews[sourceExt.bufferView];
        var buffer = _glTFLoaderUtils__WEBPACK_IMPORTED_MODULE_1__.GLTFUtils.GetBufferFromBufferView(gltfRuntime, bufferView, 0, bufferView.byteLength, _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_2__.EComponentType.UNSIGNED_BYTE);
        onSuccess(buffer);
        return true;
    };
    GLTFBinaryExtension.prototype.loadShaderStringAsync = function (gltfRuntime, id, onSuccess) {
        var shader = gltfRuntime.shaders[id];
        if (!shader.extensions || !(this.name in shader.extensions)) {
            return false;
        }
        var binaryExtensionShader = shader.extensions[this.name];
        var bufferView = gltfRuntime.bufferViews[binaryExtensionShader.bufferView];
        var shaderBytes = _glTFLoaderUtils__WEBPACK_IMPORTED_MODULE_1__.GLTFUtils.GetBufferFromBufferView(gltfRuntime, bufferView, 0, bufferView.byteLength, _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_2__.EComponentType.UNSIGNED_BYTE);
        setTimeout(function () {
            var shaderString = _glTFLoaderUtils__WEBPACK_IMPORTED_MODULE_1__.GLTFUtils.DecodeBufferToText(shaderBytes);
            onSuccess(shaderString);
        });
        return true;
    };
    return GLTFBinaryExtension;
}(_glTFLoader__WEBPACK_IMPORTED_MODULE_0__.GLTFLoaderExtension));

_glTFLoader__WEBPACK_IMPORTED_MODULE_0__.GLTFLoader.RegisterExtension(new GLTFBinaryExtension());


/***/ }),

/***/ "../../../dev/loaders/src/glTF/1.0/glTFLoader.ts":
/*!*******************************************************!*\
  !*** ../../../dev/loaders/src/glTF/1.0/glTFLoader.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GLTFLoader: () => (/* binding */ GLTFLoader),
/* harmony export */   GLTFLoaderBase: () => (/* binding */ GLTFLoaderBase),
/* harmony export */   GLTFLoaderExtension: () => (/* binding */ GLTFLoaderExtension)
/* harmony export */ });
/* harmony import */ var _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./glTFLoaderInterfaces */ "../../../dev/loaders/src/glTF/1.0/glTFLoaderInterfaces.ts");
/* harmony import */ var babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babylonjs/Engines/constants */ "babylonjs/Misc/tools");
/* harmony import */ var babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _glTFLoaderUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./glTFLoaderUtils */ "../../../dev/loaders/src/glTF/1.0/glTFLoaderUtils.ts");
/* harmony import */ var _glTFFileLoader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../glTFFileLoader */ "../../../dev/loaders/src/glTF/glTFFileLoader.ts");




























/**
 * Tokenizer. Used for shaders compatibility
 * Automatically map world, view, projection, worldViewProjection, attributes and so on
 */
var ETokenType;
(function (ETokenType) {
    ETokenType[ETokenType["IDENTIFIER"] = 1] = "IDENTIFIER";
    ETokenType[ETokenType["UNKNOWN"] = 2] = "UNKNOWN";
    ETokenType[ETokenType["END_OF_INPUT"] = 3] = "END_OF_INPUT";
})(ETokenType || (ETokenType = {}));
var Tokenizer = /** @class */ (function () {
    function Tokenizer(toParse) {
        this._pos = 0;
        this.currentToken = ETokenType.UNKNOWN;
        this.currentIdentifier = "";
        this.currentString = "";
        this.isLetterOrDigitPattern = /^[a-zA-Z0-9]+$/;
        this._toParse = toParse;
        this._maxPos = toParse.length;
    }
    Tokenizer.prototype.getNextToken = function () {
        if (this.isEnd()) {
            return ETokenType.END_OF_INPUT;
        }
        this.currentString = this.read();
        this.currentToken = ETokenType.UNKNOWN;
        if (this.currentString === "_" || this.isLetterOrDigitPattern.test(this.currentString)) {
            this.currentToken = ETokenType.IDENTIFIER;
            this.currentIdentifier = this.currentString;
            while (!this.isEnd() && (this.isLetterOrDigitPattern.test((this.currentString = this.peek())) || this.currentString === "_")) {
                this.currentIdentifier += this.currentString;
                this.forward();
            }
        }
        return this.currentToken;
    };
    Tokenizer.prototype.peek = function () {
        return this._toParse[this._pos];
    };
    Tokenizer.prototype.read = function () {
        return this._toParse[this._pos++];
    };
    Tokenizer.prototype.forward = function () {
        this._pos++;
    };
    Tokenizer.prototype.isEnd = function () {
        return this._pos >= this._maxPos;
    };
    return Tokenizer;
}());
/**
 * Values
 */
var glTFTransforms = ["MODEL", "VIEW", "PROJECTION", "MODELVIEW", "MODELVIEWPROJECTION", "JOINTMATRIX"];
var babylonTransforms = ["world", "view", "projection", "worldView", "worldViewProjection", "mBones"];
var glTFAnimationPaths = ["translation", "rotation", "scale"];
var babylonAnimationPaths = ["position", "rotationQuaternion", "scaling"];
/**
 * Parse
 * @param parsedBuffers
 * @param gltfRuntime
 */
var parseBuffers = function (parsedBuffers, gltfRuntime) {
    for (var buf in parsedBuffers) {
        var parsedBuffer = parsedBuffers[buf];
        gltfRuntime.buffers[buf] = parsedBuffer;
        gltfRuntime.buffersCount++;
    }
};
var parseShaders = function (parsedShaders, gltfRuntime) {
    for (var sha in parsedShaders) {
        var parsedShader = parsedShaders[sha];
        gltfRuntime.shaders[sha] = parsedShader;
        gltfRuntime.shaderscount++;
    }
};
var parseObject = function (parsedObjects, runtimeProperty, gltfRuntime) {
    for (var object in parsedObjects) {
        var parsedObject = parsedObjects[object];
        gltfRuntime[runtimeProperty][object] = parsedObject;
    }
};
/**
 * Utils
 * @param buffer
 */
var normalizeUVs = function (buffer) {
    if (!buffer) {
        return;
    }
    for (var i = 0; i < buffer.length / 2; i++) {
        buffer[i * 2 + 1] = 1.0 - buffer[i * 2 + 1];
    }
};
var getAttribute = function (attributeParameter) {
    if (attributeParameter.semantic === "NORMAL") {
        return "normal";
    }
    else if (attributeParameter.semantic === "POSITION") {
        return "position";
    }
    else if (attributeParameter.semantic === "JOINT") {
        return "matricesIndices";
    }
    else if (attributeParameter.semantic === "WEIGHT") {
        return "matricesWeights";
    }
    else if (attributeParameter.semantic === "COLOR") {
        return "color";
    }
    else if (attributeParameter.semantic && attributeParameter.semantic.indexOf("TEXCOORD_") !== -1) {
        var channel = Number(attributeParameter.semantic.split("_")[1]);
        return "uv" + (channel === 0 ? "" : channel + 1);
    }
    return null;
};
/**
 * Loads and creates animations
 * @param gltfRuntime
 */
var loadAnimations = function (gltfRuntime) {
    for (var anim in gltfRuntime.animations) {
        var animation = gltfRuntime.animations[anim];
        if (!animation.channels || !animation.samplers) {
            continue;
        }
        var lastAnimation = null;
        for (var i = 0; i < animation.channels.length; i++) {
            // Get parameters and load buffers
            var channel = animation.channels[i];
            var sampler = animation.samplers[channel.sampler];
            if (!sampler) {
                continue;
            }
            var inputData = null;
            var outputData = null;
            if (animation.parameters) {
                inputData = animation.parameters[sampler.input];
                outputData = animation.parameters[sampler.output];
            }
            else {
                inputData = sampler.input;
                outputData = sampler.output;
            }
            var bufferInput = _glTFLoaderUtils__WEBPACK_IMPORTED_MODULE_2__.GLTFUtils.GetBufferFromAccessor(gltfRuntime, gltfRuntime.accessors[inputData]);
            var bufferOutput = _glTFLoaderUtils__WEBPACK_IMPORTED_MODULE_2__.GLTFUtils.GetBufferFromAccessor(gltfRuntime, gltfRuntime.accessors[outputData]);
            var targetId = channel.target.id;
            var targetNode = gltfRuntime.scene.getNodeById(targetId);
            if (targetNode === null) {
                targetNode = gltfRuntime.scene.getNodeByName(targetId);
            }
            if (targetNode === null) {
                babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Tools.Warn("Creating animation named " + anim + ". But cannot find node named " + targetId + " to attach to");
                continue;
            }
            var isBone = targetNode instanceof babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Bone;
            // Get target path (position, rotation or scaling)
            var targetPath = channel.target.path;
            var targetPathIndex = glTFAnimationPaths.indexOf(targetPath);
            if (targetPathIndex !== -1) {
                targetPath = babylonAnimationPaths[targetPathIndex];
            }
            // Determine animation type
            var animationType = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Animation.ANIMATIONTYPE_MATRIX;
            if (!isBone) {
                if (targetPath === "rotationQuaternion") {
                    animationType = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Animation.ANIMATIONTYPE_QUATERNION;
                    targetNode.rotationQuaternion = new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Quaternion();
                }
                else {
                    animationType = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Animation.ANIMATIONTYPE_VECTOR3;
                }
            }
            // Create animation and key frames
            var babylonAnimation = null;
            var keys = [];
            var arrayOffset = 0;
            var modifyKey = false;
            if (isBone && lastAnimation && lastAnimation.getKeys().length === bufferInput.length) {
                babylonAnimation = lastAnimation;
                modifyKey = true;
            }
            if (!modifyKey) {
                gltfRuntime.scene._blockEntityCollection = !!gltfRuntime.assetContainer;
                babylonAnimation = new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Animation(anim, isBone ? "_matrix" : targetPath, 1, animationType, babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Animation.ANIMATIONLOOPMODE_CYCLE);
                gltfRuntime.scene._blockEntityCollection = false;
            }
            // For each frame
            for (var j = 0; j < bufferInput.length; j++) {
                var value = null;
                if (targetPath === "rotationQuaternion") {
                    // VEC4
                    value = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Quaternion.FromArray([bufferOutput[arrayOffset], bufferOutput[arrayOffset + 1], bufferOutput[arrayOffset + 2], bufferOutput[arrayOffset + 3]]);
                    arrayOffset += 4;
                }
                else {
                    // Position and scaling are VEC3
                    value = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3.FromArray([bufferOutput[arrayOffset], bufferOutput[arrayOffset + 1], bufferOutput[arrayOffset + 2]]);
                    arrayOffset += 3;
                }
                if (isBone) {
                    var bone = targetNode;
                    var translation = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3.Zero();
                    var rotationQuaternion = new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Quaternion();
                    var scaling = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3.Zero();
                    // Warning on decompose
                    var mat = bone.getBaseMatrix();
                    if (modifyKey && lastAnimation) {
                        mat = lastAnimation.getKeys()[j].value;
                    }
                    mat.decompose(scaling, rotationQuaternion, translation);
                    if (targetPath === "position") {
                        translation = value;
                    }
                    else if (targetPath === "rotationQuaternion") {
                        rotationQuaternion = value;
                    }
                    else {
                        scaling = value;
                    }
                    value = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Matrix.Compose(scaling, rotationQuaternion, translation);
                }
                if (!modifyKey) {
                    keys.push({
                        frame: bufferInput[j],
                        value: value,
                    });
                }
                else if (lastAnimation) {
                    lastAnimation.getKeys()[j].value = value;
                }
            }
            // Finish
            if (!modifyKey && babylonAnimation) {
                babylonAnimation.setKeys(keys);
                targetNode.animations.push(babylonAnimation);
            }
            lastAnimation = babylonAnimation;
            gltfRuntime.scene.stopAnimation(targetNode);
            gltfRuntime.scene.beginAnimation(targetNode, 0, bufferInput[bufferInput.length - 1], true, 1.0);
        }
    }
};
/**
 * @returns the bones transformation matrix
 * @param node
 */
var configureBoneTransformation = function (node) {
    var mat = null;
    if (node.translation || node.rotation || node.scale) {
        var scale = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3.FromArray(node.scale || [1, 1, 1]);
        var rotation = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Quaternion.FromArray(node.rotation || [0, 0, 0, 1]);
        var position = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3.FromArray(node.translation || [0, 0, 0]);
        mat = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Matrix.Compose(scale, rotation, position);
    }
    else {
        mat = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Matrix.FromArray(node.matrix);
    }
    return mat;
};
/**
 * Returns the parent bone
 * @param gltfRuntime
 * @param skins
 * @param jointName
 * @param newSkeleton
 * @returns the parent bone
 */
var getParentBone = function (gltfRuntime, skins, jointName, newSkeleton) {
    // Try to find
    for (var i = 0; i < newSkeleton.bones.length; i++) {
        if (newSkeleton.bones[i].name === jointName) {
            return newSkeleton.bones[i];
        }
    }
    // Not found, search in gltf nodes
    var nodes = gltfRuntime.nodes;
    for (var nde in nodes) {
        var node = nodes[nde];
        if (!node.jointName) {
            continue;
        }
        var children = node.children;
        for (var i = 0; i < children.length; i++) {
            var child = gltfRuntime.nodes[children[i]];
            if (!child.jointName) {
                continue;
            }
            if (child.jointName === jointName) {
                var mat = configureBoneTransformation(node);
                var bone = new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Bone(node.name || "", newSkeleton, getParentBone(gltfRuntime, skins, node.jointName, newSkeleton), mat);
                bone.id = nde;
                return bone;
            }
        }
    }
    return null;
};
/**
 * Returns the appropriate root node
 * @param nodesToRoot
 * @param id
 * @returns the root node
 */
var getNodeToRoot = function (nodesToRoot, id) {
    for (var i = 0; i < nodesToRoot.length; i++) {
        var nodeToRoot = nodesToRoot[i];
        for (var j = 0; j < nodeToRoot.node.children.length; j++) {
            var child = nodeToRoot.node.children[j];
            if (child === id) {
                return nodeToRoot.bone;
            }
        }
    }
    return null;
};
/**
 * Returns the node with the joint name
 * @param gltfRuntime
 * @param jointName
 * @returns the node with the joint name
 */
var getJointNode = function (gltfRuntime, jointName) {
    var nodes = gltfRuntime.nodes;
    var node = nodes[jointName];
    if (node) {
        return {
            node: node,
            id: jointName,
        };
    }
    for (var nde in nodes) {
        node = nodes[nde];
        if (node.jointName === jointName) {
            return {
                node: node,
                id: nde,
            };
        }
    }
    return null;
};
/**
 * Checks if a nodes is in joints
 * @param skins
 * @param id
 * @returns true if the node is in joints, else false
 */
var nodeIsInJoints = function (skins, id) {
    for (var i = 0; i < skins.jointNames.length; i++) {
        if (skins.jointNames[i] === id) {
            return true;
        }
    }
    return false;
};
/**
 * Fills the nodes to root for bones and builds hierarchy
 * @param gltfRuntime
 * @param newSkeleton
 * @param skins
 * @param nodesToRoot
 */
var getNodesToRoot = function (gltfRuntime, newSkeleton, skins, nodesToRoot) {
    // Creates nodes for root
    for (var nde in gltfRuntime.nodes) {
        var node = gltfRuntime.nodes[nde];
        var id = nde;
        if (!node.jointName || nodeIsInJoints(skins, node.jointName)) {
            continue;
        }
        // Create node to root bone
        var mat = configureBoneTransformation(node);
        var bone = new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Bone(node.name || "", newSkeleton, null, mat);
        bone.id = id;
        nodesToRoot.push({ bone: bone, node: node, id: id });
    }
    // Parenting
    for (var i = 0; i < nodesToRoot.length; i++) {
        var nodeToRoot = nodesToRoot[i];
        var children = nodeToRoot.node.children;
        for (var j = 0; j < children.length; j++) {
            var child = null;
            for (var k = 0; k < nodesToRoot.length; k++) {
                if (nodesToRoot[k].id === children[j]) {
                    child = nodesToRoot[k];
                    break;
                }
            }
            if (child) {
                child.bone._parent = nodeToRoot.bone;
                nodeToRoot.bone.children.push(child.bone);
            }
        }
    }
};
/**
 * Imports a skeleton
 * @param gltfRuntime
 * @param skins
 * @param mesh
 * @param newSkeleton
 * @returns the bone name
 */
var importSkeleton = function (gltfRuntime, skins, mesh, newSkeleton) {
    if (!newSkeleton) {
        newSkeleton = new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Skeleton(skins.name || "", "", gltfRuntime.scene);
    }
    if (!skins.babylonSkeleton) {
        return newSkeleton;
    }
    // Find the root bones
    var nodesToRoot = [];
    var nodesToRootToAdd = [];
    getNodesToRoot(gltfRuntime, newSkeleton, skins, nodesToRoot);
    newSkeleton.bones = [];
    // Joints
    for (var i = 0; i < skins.jointNames.length; i++) {
        var jointNode = getJointNode(gltfRuntime, skins.jointNames[i]);
        if (!jointNode) {
            continue;
        }
        var node = jointNode.node;
        if (!node) {
            babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Tools.Warn("Joint named " + skins.jointNames[i] + " does not exist");
            continue;
        }
        var id = jointNode.id;
        // Optimize, if the bone already exists...
        var existingBone = gltfRuntime.scene.getBoneById(id);
        if (existingBone) {
            newSkeleton.bones.push(existingBone);
            continue;
        }
        // Search for parent bone
        var foundBone = false;
        var parentBone = null;
        for (var j = 0; j < i; j++) {
            var jointNode_1 = getJointNode(gltfRuntime, skins.jointNames[j]);
            if (!jointNode_1) {
                continue;
            }
            var joint = jointNode_1.node;
            if (!joint) {
                babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Tools.Warn("Joint named " + skins.jointNames[j] + " does not exist when looking for parent");
                continue;
            }
            var children = joint.children;
            if (!children) {
                continue;
            }
            foundBone = false;
            for (var k = 0; k < children.length; k++) {
                if (children[k] === id) {
                    parentBone = getParentBone(gltfRuntime, skins, skins.jointNames[j], newSkeleton);
                    foundBone = true;
                    break;
                }
            }
            if (foundBone) {
                break;
            }
        }
        // Create bone
        var mat = configureBoneTransformation(node);
        if (!parentBone && nodesToRoot.length > 0) {
            parentBone = getNodeToRoot(nodesToRoot, id);
            if (parentBone) {
                if (nodesToRootToAdd.indexOf(parentBone) === -1) {
                    nodesToRootToAdd.push(parentBone);
                }
            }
        }
        var bone = new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Bone(node.jointName || "", newSkeleton, parentBone, mat);
        bone.id = id;
    }
    // Polish
    var bones = newSkeleton.bones;
    newSkeleton.bones = [];
    for (var i = 0; i < skins.jointNames.length; i++) {
        var jointNode = getJointNode(gltfRuntime, skins.jointNames[i]);
        if (!jointNode) {
            continue;
        }
        for (var j = 0; j < bones.length; j++) {
            if (bones[j].id === jointNode.id) {
                newSkeleton.bones.push(bones[j]);
                break;
            }
        }
    }
    newSkeleton.prepare();
    // Finish
    for (var i = 0; i < nodesToRootToAdd.length; i++) {
        newSkeleton.bones.push(nodesToRootToAdd[i]);
    }
    return newSkeleton;
};
/**
 * Imports a mesh and its geometries
 * @param gltfRuntime
 * @param node
 * @param meshes
 * @param id
 * @param newMesh
 * @returns the new mesh
 */
var importMesh = function (gltfRuntime, node, meshes, id, newMesh) {
    if (!newMesh) {
        gltfRuntime.scene._blockEntityCollection = !!gltfRuntime.assetContainer;
        newMesh = new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Mesh(node.name || "", gltfRuntime.scene);
        newMesh._parentContainer = gltfRuntime.assetContainer;
        gltfRuntime.scene._blockEntityCollection = false;
        newMesh.id = id;
    }
    if (!node.babylonNode) {
        return newMesh;
    }
    var subMaterials = [];
    var vertexData = null;
    var verticesStarts = [];
    var verticesCounts = [];
    var indexStarts = [];
    var indexCounts = [];
    for (var meshIndex = 0; meshIndex < meshes.length; meshIndex++) {
        var meshId = meshes[meshIndex];
        var mesh = gltfRuntime.meshes[meshId];
        if (!mesh) {
            continue;
        }
        // Positions, normals and UVs
        for (var i = 0; i < mesh.primitives.length; i++) {
            // Temporary vertex data
            var tempVertexData = new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.VertexData();
            var primitive = mesh.primitives[i];
            if (primitive.mode !== 4) {
                // continue;
            }
            var attributes = primitive.attributes;
            var accessor = null;
            var buffer = null;
            // Set positions, normal and uvs
            for (var semantic in attributes) {
                // Link accessor and buffer view
                accessor = gltfRuntime.accessors[attributes[semantic]];
                buffer = _glTFLoaderUtils__WEBPACK_IMPORTED_MODULE_2__.GLTFUtils.GetBufferFromAccessor(gltfRuntime, accessor);
                if (semantic === "NORMAL") {
                    tempVertexData.normals = new Float32Array(buffer.length);
                    tempVertexData.normals.set(buffer);
                }
                else if (semantic === "POSITION") {
                    if (_glTFFileLoader__WEBPACK_IMPORTED_MODULE_3__.GLTFFileLoader.HomogeneousCoordinates) {
                        tempVertexData.positions = new Float32Array(buffer.length - buffer.length / 4);
                        for (var j = 0; j < buffer.length; j += 4) {
                            tempVertexData.positions[j] = buffer[j];
                            tempVertexData.positions[j + 1] = buffer[j + 1];
                            tempVertexData.positions[j + 2] = buffer[j + 2];
                        }
                    }
                    else {
                        tempVertexData.positions = new Float32Array(buffer.length);
                        tempVertexData.positions.set(buffer);
                    }
                    verticesCounts.push(tempVertexData.positions.length);
                }
                else if (semantic.indexOf("TEXCOORD_") !== -1) {
                    var channel = Number(semantic.split("_")[1]);
                    var uvKind = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.VertexBuffer.UVKind + (channel === 0 ? "" : channel + 1);
                    var uvs = new Float32Array(buffer.length);
                    uvs.set(buffer);
                    normalizeUVs(uvs);
                    tempVertexData.set(uvs, uvKind);
                }
                else if (semantic === "JOINT") {
                    tempVertexData.matricesIndices = new Float32Array(buffer.length);
                    tempVertexData.matricesIndices.set(buffer);
                }
                else if (semantic === "WEIGHT") {
                    tempVertexData.matricesWeights = new Float32Array(buffer.length);
                    tempVertexData.matricesWeights.set(buffer);
                }
                else if (semantic === "COLOR") {
                    tempVertexData.colors = new Float32Array(buffer.length);
                    tempVertexData.colors.set(buffer);
                }
            }
            // Indices
            accessor = gltfRuntime.accessors[primitive.indices];
            if (accessor) {
                buffer = _glTFLoaderUtils__WEBPACK_IMPORTED_MODULE_2__.GLTFUtils.GetBufferFromAccessor(gltfRuntime, accessor);
                tempVertexData.indices = new Int32Array(buffer.length);
                tempVertexData.indices.set(buffer);
                indexCounts.push(tempVertexData.indices.length);
            }
            else {
                // Set indices on the fly
                var indices = [];
                for (var j = 0; j < tempVertexData.positions.length / 3; j++) {
                    indices.push(j);
                }
                tempVertexData.indices = new Int32Array(indices);
                indexCounts.push(tempVertexData.indices.length);
            }
            if (!vertexData) {
                vertexData = tempVertexData;
            }
            else {
                vertexData.merge(tempVertexData);
            }
            // Sub material
            var material_1 = gltfRuntime.scene.getMaterialById(primitive.material);
            subMaterials.push(material_1 === null ? _glTFLoaderUtils__WEBPACK_IMPORTED_MODULE_2__.GLTFUtils.GetDefaultMaterial(gltfRuntime.scene) : material_1);
            // Update vertices start and index start
            verticesStarts.push(verticesStarts.length === 0 ? 0 : verticesStarts[verticesStarts.length - 1] + verticesCounts[verticesCounts.length - 2]);
            indexStarts.push(indexStarts.length === 0 ? 0 : indexStarts[indexStarts.length - 1] + indexCounts[indexCounts.length - 2]);
        }
    }
    var material;
    gltfRuntime.scene._blockEntityCollection = !!gltfRuntime.assetContainer;
    if (subMaterials.length > 1) {
        material = new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.MultiMaterial("multimat" + id, gltfRuntime.scene);
        material.subMaterials = subMaterials;
    }
    else {
        material = new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.StandardMaterial("multimat" + id, gltfRuntime.scene);
    }
    if (subMaterials.length === 1) {
        material = subMaterials[0];
    }
    material._parentContainer = gltfRuntime.assetContainer;
    if (!newMesh.material) {
        newMesh.material = material;
    }
    // Apply geometry
    new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Geometry(id, gltfRuntime.scene, vertexData, false, newMesh);
    newMesh.computeWorldMatrix(true);
    gltfRuntime.scene._blockEntityCollection = false;
    // Apply submeshes
    newMesh.subMeshes = [];
    var index = 0;
    for (var meshIndex = 0; meshIndex < meshes.length; meshIndex++) {
        var meshId = meshes[meshIndex];
        var mesh = gltfRuntime.meshes[meshId];
        if (!mesh) {
            continue;
        }
        for (var i = 0; i < mesh.primitives.length; i++) {
            if (mesh.primitives[i].mode !== 4) {
                //continue;
            }
            babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.SubMesh.AddToMesh(index, verticesStarts[index], verticesCounts[index], indexStarts[index], indexCounts[index], newMesh, newMesh, true);
            index++;
        }
    }
    // Finish
    return newMesh;
};
/**
 * Configure node transformation from position, rotation and scaling
 * @param newNode
 * @param position
 * @param rotation
 * @param scaling
 */
var configureNode = function (newNode, position, rotation, scaling) {
    if (newNode.position) {
        newNode.position = position;
    }
    if (newNode.rotationQuaternion || newNode.rotation) {
        newNode.rotationQuaternion = rotation;
    }
    if (newNode.scaling) {
        newNode.scaling = scaling;
    }
};
/**
 * Configures node from transformation matrix
 * @param newNode
 * @param node
 */
var configureNodeFromMatrix = function (newNode, node) {
    if (node.matrix) {
        var position = new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3(0, 0, 0);
        var rotation = new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Quaternion();
        var scaling = new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3(0, 0, 0);
        var mat = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Matrix.FromArray(node.matrix);
        mat.decompose(scaling, rotation, position);
        configureNode(newNode, position, rotation, scaling);
    }
    else if (node.translation && node.rotation && node.scale) {
        configureNode(newNode, babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3.FromArray(node.translation), babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Quaternion.FromArray(node.rotation), babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3.FromArray(node.scale));
    }
    newNode.computeWorldMatrix(true);
};
/**
 * Imports a node
 * @param gltfRuntime
 * @param node
 * @param id
 * @returns the newly imported node
 */
var importNode = function (gltfRuntime, node, id) {
    var lastNode = null;
    if (gltfRuntime.importOnlyMeshes && (node.skin || node.meshes)) {
        if (gltfRuntime.importMeshesNames && gltfRuntime.importMeshesNames.length > 0 && gltfRuntime.importMeshesNames.indexOf(node.name || "") === -1) {
            return null;
        }
    }
    // Meshes
    if (node.skin) {
        if (node.meshes) {
            var skin = gltfRuntime.skins[node.skin];
            var newMesh = importMesh(gltfRuntime, node, node.meshes, id, node.babylonNode);
            newMesh.skeleton = gltfRuntime.scene.getLastSkeletonById(node.skin);
            if (newMesh.skeleton === null) {
                newMesh.skeleton = importSkeleton(gltfRuntime, skin, newMesh, skin.babylonSkeleton);
                if (!skin.babylonSkeleton) {
                    skin.babylonSkeleton = newMesh.skeleton;
                }
            }
            lastNode = newMesh;
        }
    }
    else if (node.meshes) {
        /**
         * Improve meshes property
         */
        var newMesh = importMesh(gltfRuntime, node, node.mesh ? [node.mesh] : node.meshes, id, node.babylonNode);
        lastNode = newMesh;
    }
    // Lights
    else if (node.light && !node.babylonNode && !gltfRuntime.importOnlyMeshes) {
        var light = gltfRuntime.lights[node.light];
        if (light) {
            if (light.type === "ambient") {
                var ambienLight = light[light.type];
                var hemiLight = new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.HemisphericLight(node.light, babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3.Zero(), gltfRuntime.scene);
                hemiLight.name = node.name || "";
                if (ambienLight.color) {
                    hemiLight.diffuse = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Color3.FromArray(ambienLight.color);
                }
                lastNode = hemiLight;
            }
            else if (light.type === "directional") {
                var directionalLight = light[light.type];
                var dirLight = new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.DirectionalLight(node.light, babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3.Zero(), gltfRuntime.scene);
                dirLight.name = node.name || "";
                if (directionalLight.color) {
                    dirLight.diffuse = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Color3.FromArray(directionalLight.color);
                }
                lastNode = dirLight;
            }
            else if (light.type === "point") {
                var pointLight = light[light.type];
                var ptLight = new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.PointLight(node.light, babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3.Zero(), gltfRuntime.scene);
                ptLight.name = node.name || "";
                if (pointLight.color) {
                    ptLight.diffuse = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Color3.FromArray(pointLight.color);
                }
                lastNode = ptLight;
            }
            else if (light.type === "spot") {
                var spotLight = light[light.type];
                var spLight = new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.SpotLight(node.light, babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3.Zero(), babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3.Zero(), 0, 0, gltfRuntime.scene);
                spLight.name = node.name || "";
                if (spotLight.color) {
                    spLight.diffuse = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Color3.FromArray(spotLight.color);
                }
                if (spotLight.fallOfAngle) {
                    spLight.angle = spotLight.fallOfAngle;
                }
                if (spotLight.fallOffExponent) {
                    spLight.exponent = spotLight.fallOffExponent;
                }
                lastNode = spLight;
            }
        }
    }
    // Cameras
    else if (node.camera && !node.babylonNode && !gltfRuntime.importOnlyMeshes) {
        var camera = gltfRuntime.cameras[node.camera];
        if (camera) {
            gltfRuntime.scene._blockEntityCollection = !!gltfRuntime.assetContainer;
            if (camera.type === "orthographic") {
                var orthoCamera = new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.FreeCamera(node.camera, babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3.Zero(), gltfRuntime.scene, false);
                orthoCamera.name = node.name || "";
                orthoCamera.mode = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Camera.ORTHOGRAPHIC_CAMERA;
                orthoCamera.attachControl();
                lastNode = orthoCamera;
                orthoCamera._parentContainer = gltfRuntime.assetContainer;
            }
            else if (camera.type === "perspective") {
                var perspectiveCamera = camera[camera.type];
                var persCamera = new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.FreeCamera(node.camera, babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3.Zero(), gltfRuntime.scene, false);
                persCamera.name = node.name || "";
                persCamera.attachControl();
                if (!perspectiveCamera.aspectRatio) {
                    perspectiveCamera.aspectRatio = gltfRuntime.scene.getEngine().getRenderWidth() / gltfRuntime.scene.getEngine().getRenderHeight();
                }
                if (perspectiveCamera.znear && perspectiveCamera.zfar) {
                    persCamera.maxZ = perspectiveCamera.zfar;
                    persCamera.minZ = perspectiveCamera.znear;
                }
                lastNode = persCamera;
                persCamera._parentContainer = gltfRuntime.assetContainer;
            }
            gltfRuntime.scene._blockEntityCollection = false;
        }
    }
    // Empty node
    if (!node.jointName) {
        if (node.babylonNode) {
            return node.babylonNode;
        }
        else if (lastNode === null) {
            gltfRuntime.scene._blockEntityCollection = !!gltfRuntime.assetContainer;
            var dummy = new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Mesh(node.name || "", gltfRuntime.scene);
            dummy._parentContainer = gltfRuntime.assetContainer;
            gltfRuntime.scene._blockEntityCollection = false;
            node.babylonNode = dummy;
            lastNode = dummy;
        }
    }
    if (lastNode !== null) {
        if (node.matrix && lastNode instanceof babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Mesh) {
            configureNodeFromMatrix(lastNode, node);
        }
        else {
            var translation = node.translation || [0, 0, 0];
            var rotation = node.rotation || [0, 0, 0, 1];
            var scale = node.scale || [1, 1, 1];
            configureNode(lastNode, babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3.FromArray(translation), babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Quaternion.FromArray(rotation), babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3.FromArray(scale));
        }
        lastNode.updateCache(true);
        node.babylonNode = lastNode;
    }
    return lastNode;
};
/**
 * Traverses nodes and creates them
 * @param gltfRuntime
 * @param id
 * @param parent
 * @param meshIncluded
 */
var traverseNodes = function (gltfRuntime, id, parent, meshIncluded) {
    if (meshIncluded === void 0) { meshIncluded = false; }
    var node = gltfRuntime.nodes[id];
    var newNode = null;
    if (gltfRuntime.importOnlyMeshes && !meshIncluded && gltfRuntime.importMeshesNames) {
        if (gltfRuntime.importMeshesNames.indexOf(node.name || "") !== -1 || gltfRuntime.importMeshesNames.length === 0) {
            meshIncluded = true;
        }
        else {
            meshIncluded = false;
        }
    }
    else {
        meshIncluded = true;
    }
    if (!node.jointName && meshIncluded) {
        newNode = importNode(gltfRuntime, node, id);
        if (newNode !== null) {
            newNode.id = id;
            newNode.parent = parent;
        }
    }
    if (node.children) {
        for (var i = 0; i < node.children.length; i++) {
            traverseNodes(gltfRuntime, node.children[i], newNode, meshIncluded);
        }
    }
};
/**
 * do stuff after buffers, shaders are loaded (e.g. hook up materials, load animations, etc.)
 * @param gltfRuntime
 */
var postLoad = function (gltfRuntime) {
    // Nodes
    var currentScene = gltfRuntime.currentScene;
    if (currentScene) {
        for (var i = 0; i < currentScene.nodes.length; i++) {
            traverseNodes(gltfRuntime, currentScene.nodes[i], null);
        }
    }
    else {
        for (var thing in gltfRuntime.scenes) {
            currentScene = gltfRuntime.scenes[thing];
            for (var i = 0; i < currentScene.nodes.length; i++) {
                traverseNodes(gltfRuntime, currentScene.nodes[i], null);
            }
        }
    }
    // Set animations
    loadAnimations(gltfRuntime);
    for (var i = 0; i < gltfRuntime.scene.skeletons.length; i++) {
        var skeleton = gltfRuntime.scene.skeletons[i];
        gltfRuntime.scene.beginAnimation(skeleton, 0, Number.MAX_VALUE, true, 1.0);
    }
};
/**
 * onBind shaderrs callback to set uniforms and matrices
 * @param mesh
 * @param gltfRuntime
 * @param unTreatedUniforms
 * @param shaderMaterial
 * @param technique
 * @param material
 * @param onSuccess
 */
var onBindShaderMaterial = function (mesh, gltfRuntime, unTreatedUniforms, shaderMaterial, technique, material, onSuccess) {
    var materialValues = material.values || technique.parameters;
    for (var unif in unTreatedUniforms) {
        var uniform = unTreatedUniforms[unif];
        var type = uniform.type;
        if (type === _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.EParameterType.FLOAT_MAT2 || type === _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.EParameterType.FLOAT_MAT3 || type === _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.EParameterType.FLOAT_MAT4) {
            if (uniform.semantic && !uniform.source && !uniform.node) {
                _glTFLoaderUtils__WEBPACK_IMPORTED_MODULE_2__.GLTFUtils.SetMatrix(gltfRuntime.scene, mesh, uniform, unif, shaderMaterial.getEffect());
            }
            else if (uniform.semantic && (uniform.source || uniform.node)) {
                var source = gltfRuntime.scene.getNodeByName(uniform.source || uniform.node || "");
                if (source === null) {
                    source = gltfRuntime.scene.getNodeById(uniform.source || uniform.node || "");
                }
                if (source === null) {
                    continue;
                }
                _glTFLoaderUtils__WEBPACK_IMPORTED_MODULE_2__.GLTFUtils.SetMatrix(gltfRuntime.scene, source, uniform, unif, shaderMaterial.getEffect());
            }
        }
        else {
            var value = materialValues[technique.uniforms[unif]];
            if (!value) {
                continue;
            }
            if (type === _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.EParameterType.SAMPLER_2D) {
                var texture = gltfRuntime.textures[material.values ? value : uniform.value].babylonTexture;
                if (texture === null || texture === undefined) {
                    continue;
                }
                shaderMaterial.getEffect().setTexture(unif, texture);
            }
            else {
                _glTFLoaderUtils__WEBPACK_IMPORTED_MODULE_2__.GLTFUtils.SetUniform(shaderMaterial.getEffect(), unif, value, type);
            }
        }
    }
    onSuccess(shaderMaterial);
};
/**
 * Prepare uniforms to send the only one time
 * Loads the appropriate textures
 * @param gltfRuntime
 * @param shaderMaterial
 * @param technique
 * @param material
 */
var prepareShaderMaterialUniforms = function (gltfRuntime, shaderMaterial, technique, material, unTreatedUniforms) {
    var materialValues = material.values || technique.parameters;
    var techniqueUniforms = technique.uniforms;
    var _loop_1 = function (unif) {
        var uniform = unTreatedUniforms[unif];
        var type = uniform.type;
        var value = materialValues[techniqueUniforms[unif]];
        if (value === undefined) {
            // In case the value is the same for all materials
            value = uniform.value;
        }
        if (!value) {
            return "continue";
        }
        var onLoadTexture = function (uniformName) {
            return function (texture) {
                if (uniform.value && uniformName) {
                    // Static uniform
                    shaderMaterial.setTexture(uniformName, texture);
                    delete unTreatedUniforms[uniformName];
                }
            };
        };
        // Texture (sampler2D)
        if (type === _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.EParameterType.SAMPLER_2D) {
            GLTFLoaderExtension.LoadTextureAsync(gltfRuntime, material.values ? value : uniform.value, onLoadTexture(unif), function () { return onLoadTexture(null); });
        }
        // Others
        else {
            if (uniform.value && _glTFLoaderUtils__WEBPACK_IMPORTED_MODULE_2__.GLTFUtils.SetUniform(shaderMaterial, unif, material.values ? value : uniform.value, type)) {
                // Static uniform
                delete unTreatedUniforms[unif];
            }
        }
    };
    /**
     * Prepare values here (not matrices)
     */
    for (var unif in unTreatedUniforms) {
        _loop_1(unif);
    }
};
/**
 * Shader compilation failed
 * @param program
 * @param shaderMaterial
 * @param onError
 * @returns callback when shader is compiled
 */
var onShaderCompileError = function (program, shaderMaterial, onError) {
    return function (effect, error) {
        shaderMaterial.dispose(true);
        onError("Cannot compile program named " + program.name + ". Error: " + error + ". Default material will be applied");
    };
};
/**
 * Shader compilation success
 * @param gltfRuntime
 * @param shaderMaterial
 * @param technique
 * @param material
 * @param unTreatedUniforms
 * @param onSuccess
 * @returns callback when shader is compiled
 */
var onShaderCompileSuccess = function (gltfRuntime, shaderMaterial, technique, material, unTreatedUniforms, onSuccess) {
    return function (_) {
        prepareShaderMaterialUniforms(gltfRuntime, shaderMaterial, technique, material, unTreatedUniforms);
        shaderMaterial.onBind = function (mesh) {
            onBindShaderMaterial(mesh, gltfRuntime, unTreatedUniforms, shaderMaterial, technique, material, onSuccess);
        };
    };
};
/**
 * Returns the appropriate uniform if already handled by babylon
 * @param tokenizer
 * @param technique
 * @param unTreatedUniforms
 * @returns the name of the uniform handled by babylon
 */
var parseShaderUniforms = function (tokenizer, technique, unTreatedUniforms) {
    for (var unif in technique.uniforms) {
        var uniform = technique.uniforms[unif];
        var uniformParameter = technique.parameters[uniform];
        if (tokenizer.currentIdentifier === unif) {
            if (uniformParameter.semantic && !uniformParameter.source && !uniformParameter.node) {
                var transformIndex = glTFTransforms.indexOf(uniformParameter.semantic);
                if (transformIndex !== -1) {
                    delete unTreatedUniforms[unif];
                    return babylonTransforms[transformIndex];
                }
            }
        }
    }
    return tokenizer.currentIdentifier;
};
/**
 * All shaders loaded. Create materials one by one
 * @param gltfRuntime
 */
var importMaterials = function (gltfRuntime) {
    // Create materials
    for (var mat in gltfRuntime.materials) {
        GLTFLoaderExtension.LoadMaterialAsync(gltfRuntime, mat, function () { }, function () { });
    }
};
/**
 * Implementation of the base glTF spec
 * @internal
 */
var GLTFLoaderBase = /** @class */ (function () {
    function GLTFLoaderBase() {
    }
    GLTFLoaderBase.CreateRuntime = function (parsedData, scene, rootUrl) {
        var gltfRuntime = {
            extensions: {},
            accessors: {},
            buffers: {},
            bufferViews: {},
            meshes: {},
            lights: {},
            cameras: {},
            nodes: {},
            images: {},
            textures: {},
            shaders: {},
            programs: {},
            samplers: {},
            techniques: {},
            materials: {},
            animations: {},
            skins: {},
            extensionsUsed: [],
            scenes: {},
            buffersCount: 0,
            shaderscount: 0,
            scene: scene,
            rootUrl: rootUrl,
            loadedBufferCount: 0,
            loadedBufferViews: {},
            loadedShaderCount: 0,
            importOnlyMeshes: false,
            dummyNodes: [],
            assetContainer: null,
        };
        // Parse
        if (parsedData.extensions) {
            parseObject(parsedData.extensions, "extensions", gltfRuntime);
        }
        if (parsedData.extensionsUsed) {
            parseObject(parsedData.extensionsUsed, "extensionsUsed", gltfRuntime);
        }
        if (parsedData.buffers) {
            parseBuffers(parsedData.buffers, gltfRuntime);
        }
        if (parsedData.bufferViews) {
            parseObject(parsedData.bufferViews, "bufferViews", gltfRuntime);
        }
        if (parsedData.accessors) {
            parseObject(parsedData.accessors, "accessors", gltfRuntime);
        }
        if (parsedData.meshes) {
            parseObject(parsedData.meshes, "meshes", gltfRuntime);
        }
        if (parsedData.lights) {
            parseObject(parsedData.lights, "lights", gltfRuntime);
        }
        if (parsedData.cameras) {
            parseObject(parsedData.cameras, "cameras", gltfRuntime);
        }
        if (parsedData.nodes) {
            parseObject(parsedData.nodes, "nodes", gltfRuntime);
        }
        if (parsedData.images) {
            parseObject(parsedData.images, "images", gltfRuntime);
        }
        if (parsedData.textures) {
            parseObject(parsedData.textures, "textures", gltfRuntime);
        }
        if (parsedData.shaders) {
            parseShaders(parsedData.shaders, gltfRuntime);
        }
        if (parsedData.programs) {
            parseObject(parsedData.programs, "programs", gltfRuntime);
        }
        if (parsedData.samplers) {
            parseObject(parsedData.samplers, "samplers", gltfRuntime);
        }
        if (parsedData.techniques) {
            parseObject(parsedData.techniques, "techniques", gltfRuntime);
        }
        if (parsedData.materials) {
            parseObject(parsedData.materials, "materials", gltfRuntime);
        }
        if (parsedData.animations) {
            parseObject(parsedData.animations, "animations", gltfRuntime);
        }
        if (parsedData.skins) {
            parseObject(parsedData.skins, "skins", gltfRuntime);
        }
        if (parsedData.scenes) {
            gltfRuntime.scenes = parsedData.scenes;
        }
        if (parsedData.scene && parsedData.scenes) {
            gltfRuntime.currentScene = parsedData.scenes[parsedData.scene];
        }
        return gltfRuntime;
    };
    GLTFLoaderBase.LoadBufferAsync = function (gltfRuntime, id, onSuccess, onError, onProgress) {
        var buffer = gltfRuntime.buffers[id];
        if (babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Tools.IsBase64(buffer.uri)) {
            setTimeout(function () { return onSuccess(new Uint8Array(babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Tools.DecodeBase64(buffer.uri))); });
        }
        else {
            babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Tools.LoadFile(gltfRuntime.rootUrl + buffer.uri, function (data) { return onSuccess(new Uint8Array(data)); }, onProgress, undefined, true, function (request) {
                if (request) {
                    onError(request.status + " " + request.statusText);
                }
            });
        }
    };
    GLTFLoaderBase.LoadTextureBufferAsync = function (gltfRuntime, id, onSuccess, onError) {
        var texture = gltfRuntime.textures[id];
        if (!texture || !texture.source) {
            onError("");
            return;
        }
        if (texture.babylonTexture) {
            onSuccess(null);
            return;
        }
        var source = gltfRuntime.images[texture.source];
        if (babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Tools.IsBase64(source.uri)) {
            setTimeout(function () { return onSuccess(new Uint8Array(babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Tools.DecodeBase64(source.uri))); });
        }
        else {
            babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Tools.LoadFile(gltfRuntime.rootUrl + source.uri, function (data) { return onSuccess(new Uint8Array(data)); }, undefined, undefined, true, function (request) {
                if (request) {
                    onError(request.status + " " + request.statusText);
                }
            });
        }
    };
    GLTFLoaderBase.CreateTextureAsync = function (gltfRuntime, id, buffer, onSuccess) {
        var texture = gltfRuntime.textures[id];
        if (texture.babylonTexture) {
            onSuccess(texture.babylonTexture);
            return;
        }
        var sampler = gltfRuntime.samplers[texture.sampler];
        var createMipMaps = sampler.minFilter === _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.ETextureFilterType.NEAREST_MIPMAP_NEAREST ||
            sampler.minFilter === _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.ETextureFilterType.NEAREST_MIPMAP_LINEAR ||
            sampler.minFilter === _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.ETextureFilterType.LINEAR_MIPMAP_NEAREST ||
            sampler.minFilter === _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.ETextureFilterType.LINEAR_MIPMAP_LINEAR;
        var samplingMode = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Texture.BILINEAR_SAMPLINGMODE;
        var blob = buffer == null ? new Blob() : new Blob([buffer]);
        var blobURL = URL.createObjectURL(blob);
        var revokeBlobURL = function () { return URL.revokeObjectURL(blobURL); };
        var newTexture = new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Texture(blobURL, gltfRuntime.scene, !createMipMaps, true, samplingMode, revokeBlobURL, revokeBlobURL);
        if (sampler.wrapS !== undefined) {
            newTexture.wrapU = _glTFLoaderUtils__WEBPACK_IMPORTED_MODULE_2__.GLTFUtils.GetWrapMode(sampler.wrapS);
        }
        if (sampler.wrapT !== undefined) {
            newTexture.wrapV = _glTFLoaderUtils__WEBPACK_IMPORTED_MODULE_2__.GLTFUtils.GetWrapMode(sampler.wrapT);
        }
        newTexture.name = id;
        texture.babylonTexture = newTexture;
        onSuccess(newTexture);
    };
    GLTFLoaderBase.LoadShaderStringAsync = function (gltfRuntime, id, onSuccess, onError) {
        var shader = gltfRuntime.shaders[id];
        if (babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Tools.IsBase64(shader.uri)) {
            var shaderString = atob(shader.uri.split(",")[1]);
            if (onSuccess) {
                onSuccess(shaderString);
            }
        }
        else {
            babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Tools.LoadFile(gltfRuntime.rootUrl + shader.uri, onSuccess, undefined, undefined, false, function (request) {
                if (request && onError) {
                    onError(request.status + " " + request.statusText);
                }
            });
        }
    };
    GLTFLoaderBase.LoadMaterialAsync = function (gltfRuntime, id, onSuccess, onError) {
        var material = gltfRuntime.materials[id];
        if (!material.technique) {
            if (onError) {
                onError("No technique found.");
            }
            return;
        }
        var technique = gltfRuntime.techniques[material.technique];
        if (!technique) {
            gltfRuntime.scene._blockEntityCollection = !!gltfRuntime.assetContainer;
            var defaultMaterial = new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.StandardMaterial(id, gltfRuntime.scene);
            defaultMaterial._parentContainer = gltfRuntime.assetContainer;
            gltfRuntime.scene._blockEntityCollection = false;
            defaultMaterial.diffuseColor = new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Color3(0.5, 0.5, 0.5);
            defaultMaterial.sideOrientation = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Material.CounterClockWiseSideOrientation;
            onSuccess(defaultMaterial);
            return;
        }
        var program = gltfRuntime.programs[technique.program];
        var states = technique.states;
        var vertexShader = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Effect.ShadersStore[program.vertexShader + "VertexShader"];
        var pixelShader = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Effect.ShadersStore[program.fragmentShader + "PixelShader"];
        var newVertexShader = "";
        var newPixelShader = "";
        var vertexTokenizer = new Tokenizer(vertexShader);
        var pixelTokenizer = new Tokenizer(pixelShader);
        var unTreatedUniforms = {};
        var uniforms = [];
        var attributes = [];
        var samplers = [];
        // Fill uniform, sampler2D and attributes
        for (var unif in technique.uniforms) {
            var uniform = technique.uniforms[unif];
            var uniformParameter = technique.parameters[uniform];
            unTreatedUniforms[unif] = uniformParameter;
            if (uniformParameter.semantic && !uniformParameter.node && !uniformParameter.source) {
                var transformIndex = glTFTransforms.indexOf(uniformParameter.semantic);
                if (transformIndex !== -1) {
                    uniforms.push(babylonTransforms[transformIndex]);
                    delete unTreatedUniforms[unif];
                }
                else {
                    uniforms.push(unif);
                }
            }
            else if (uniformParameter.type === _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.EParameterType.SAMPLER_2D) {
                samplers.push(unif);
            }
            else {
                uniforms.push(unif);
            }
        }
        for (var attr in technique.attributes) {
            var attribute = technique.attributes[attr];
            var attributeParameter = technique.parameters[attribute];
            if (attributeParameter.semantic) {
                var name_1 = getAttribute(attributeParameter);
                if (name_1) {
                    attributes.push(name_1);
                }
            }
        }
        // Configure vertex shader
        while (!vertexTokenizer.isEnd() && vertexTokenizer.getNextToken()) {
            var tokenType = vertexTokenizer.currentToken;
            if (tokenType !== ETokenType.IDENTIFIER) {
                newVertexShader += vertexTokenizer.currentString;
                continue;
            }
            var foundAttribute = false;
            for (var attr in technique.attributes) {
                var attribute = technique.attributes[attr];
                var attributeParameter = technique.parameters[attribute];
                if (vertexTokenizer.currentIdentifier === attr && attributeParameter.semantic) {
                    newVertexShader += getAttribute(attributeParameter);
                    foundAttribute = true;
                    break;
                }
            }
            if (foundAttribute) {
                continue;
            }
            newVertexShader += parseShaderUniforms(vertexTokenizer, technique, unTreatedUniforms);
        }
        // Configure pixel shader
        while (!pixelTokenizer.isEnd() && pixelTokenizer.getNextToken()) {
            var tokenType = pixelTokenizer.currentToken;
            if (tokenType !== ETokenType.IDENTIFIER) {
                newPixelShader += pixelTokenizer.currentString;
                continue;
            }
            newPixelShader += parseShaderUniforms(pixelTokenizer, technique, unTreatedUniforms);
        }
        // Create shader material
        var shaderPath = {
            vertex: program.vertexShader + id,
            fragment: program.fragmentShader + id,
        };
        var options = {
            attributes: attributes,
            uniforms: uniforms,
            samplers: samplers,
            needAlphaBlending: states && states.enable && states.enable.indexOf(3042) !== -1,
        };
        babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Effect.ShadersStore[program.vertexShader + id + "VertexShader"] = newVertexShader;
        babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Effect.ShadersStore[program.fragmentShader + id + "PixelShader"] = newPixelShader;
        var shaderMaterial = new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.ShaderMaterial(id, gltfRuntime.scene, shaderPath, options);
        shaderMaterial.onError = onShaderCompileError(program, shaderMaterial, onError);
        shaderMaterial.onCompiled = onShaderCompileSuccess(gltfRuntime, shaderMaterial, technique, material, unTreatedUniforms, onSuccess);
        shaderMaterial.sideOrientation = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Material.CounterClockWiseSideOrientation;
        if (states && states.functions) {
            var functions = states.functions;
            if (functions.cullFace && functions.cullFace[0] !== _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.ECullingType.BACK) {
                shaderMaterial.backFaceCulling = false;
            }
            var blendFunc = functions.blendFuncSeparate;
            if (blendFunc) {
                if (blendFunc[0] === _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.EBlendingFunction.SRC_ALPHA &&
                    blendFunc[1] === _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.EBlendingFunction.ONE_MINUS_SRC_ALPHA &&
                    blendFunc[2] === _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.EBlendingFunction.ONE &&
                    blendFunc[3] === _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.EBlendingFunction.ONE) {
                    shaderMaterial.alphaMode = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Constants.ALPHA_COMBINE;
                }
                else if (blendFunc[0] === _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.EBlendingFunction.ONE &&
                    blendFunc[1] === _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.EBlendingFunction.ONE &&
                    blendFunc[2] === _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.EBlendingFunction.ZERO &&
                    blendFunc[3] === _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.EBlendingFunction.ONE) {
                    shaderMaterial.alphaMode = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Constants.ALPHA_ONEONE;
                }
                else if (blendFunc[0] === _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.EBlendingFunction.SRC_ALPHA &&
                    blendFunc[1] === _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.EBlendingFunction.ONE &&
                    blendFunc[2] === _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.EBlendingFunction.ZERO &&
                    blendFunc[3] === _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.EBlendingFunction.ONE) {
                    shaderMaterial.alphaMode = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Constants.ALPHA_ADD;
                }
                else if (blendFunc[0] === _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.EBlendingFunction.ZERO &&
                    blendFunc[1] === _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.EBlendingFunction.ONE_MINUS_SRC_COLOR &&
                    blendFunc[2] === _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.EBlendingFunction.ONE &&
                    blendFunc[3] === _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.EBlendingFunction.ONE) {
                    shaderMaterial.alphaMode = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Constants.ALPHA_SUBTRACT;
                }
                else if (blendFunc[0] === _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.EBlendingFunction.DST_COLOR &&
                    blendFunc[1] === _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.EBlendingFunction.ZERO &&
                    blendFunc[2] === _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.EBlendingFunction.ONE &&
                    blendFunc[3] === _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.EBlendingFunction.ONE) {
                    shaderMaterial.alphaMode = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Constants.ALPHA_MULTIPLY;
                }
                else if (blendFunc[0] === _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.EBlendingFunction.SRC_ALPHA &&
                    blendFunc[1] === _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.EBlendingFunction.ONE_MINUS_SRC_COLOR &&
                    blendFunc[2] === _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.EBlendingFunction.ONE &&
                    blendFunc[3] === _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.EBlendingFunction.ONE) {
                    shaderMaterial.alphaMode = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Constants.ALPHA_MAXIMIZED;
                }
            }
        }
    };
    return GLTFLoaderBase;
}());

/**
 * glTF V1 Loader
 * @internal
 * @deprecated
 */
var GLTFLoader = /** @class */ (function () {
    function GLTFLoader() {
    }
    GLTFLoader.RegisterExtension = function (extension) {
        if (GLTFLoader.Extensions[extension.name]) {
            babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Tools.Error('Tool with the same name "' + extension.name + '" already exists');
            return;
        }
        GLTFLoader.Extensions[extension.name] = extension;
    };
    GLTFLoader.prototype.dispose = function () {
        // do nothing
    };
    GLTFLoader.prototype._importMeshAsync = function (meshesNames, scene, data, rootUrl, assetContainer, onSuccess, onProgress, onError) {
        var _this = this;
        scene.useRightHandedSystem = true;
        GLTFLoaderExtension.LoadRuntimeAsync(scene, data, rootUrl, function (gltfRuntime) {
            gltfRuntime.assetContainer = assetContainer;
            gltfRuntime.importOnlyMeshes = true;
            if (meshesNames === "") {
                gltfRuntime.importMeshesNames = [];
            }
            else if (typeof meshesNames === "string") {
                gltfRuntime.importMeshesNames = [meshesNames];
            }
            else if (meshesNames && !(meshesNames instanceof Array)) {
                gltfRuntime.importMeshesNames = [meshesNames];
            }
            else {
                gltfRuntime.importMeshesNames = [];
                babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Tools.Warn("Argument meshesNames must be of type string or string[]");
            }
            // Create nodes
            _this._createNodes(gltfRuntime);
            var meshes = [];
            var skeletons = [];
            // Fill arrays of meshes and skeletons
            for (var nde in gltfRuntime.nodes) {
                var node = gltfRuntime.nodes[nde];
                if (node.babylonNode instanceof babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.AbstractMesh) {
                    meshes.push(node.babylonNode);
                }
            }
            for (var skl in gltfRuntime.skins) {
                var skin = gltfRuntime.skins[skl];
                if (skin.babylonSkeleton instanceof babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Skeleton) {
                    skeletons.push(skin.babylonSkeleton);
                }
            }
            // Load buffers, shaders, materials, etc.
            _this._loadBuffersAsync(gltfRuntime, function () {
                _this._loadShadersAsync(gltfRuntime, function () {
                    importMaterials(gltfRuntime);
                    postLoad(gltfRuntime);
                    if (!_glTFFileLoader__WEBPACK_IMPORTED_MODULE_3__.GLTFFileLoader.IncrementalLoading && onSuccess) {
                        onSuccess(meshes, skeletons);
                    }
                });
            });
            if (_glTFFileLoader__WEBPACK_IMPORTED_MODULE_3__.GLTFFileLoader.IncrementalLoading && onSuccess) {
                onSuccess(meshes, skeletons);
            }
        }, onError);
        return true;
    };
    /**
     * Imports one or more meshes from a loaded gltf file and adds them to the scene
     * @param meshesNames a string or array of strings of the mesh names that should be loaded from the file
     * @param scene the scene the meshes should be added to
     * @param assetContainer defines the asset container to use (can be null)
     * @param data gltf data containing information of the meshes in a loaded file
     * @param rootUrl root url to load from
     * @param onProgress event that fires when loading progress has occured
     * @returns a promise containg the loaded meshes, particles, skeletons and animations
     */
    GLTFLoader.prototype.importMeshAsync = function (meshesNames, scene, assetContainer, data, rootUrl, onProgress) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._importMeshAsync(meshesNames, scene, data, rootUrl, assetContainer, function (meshes, skeletons) {
                resolve({
                    meshes: meshes,
                    particleSystems: [],
                    skeletons: skeletons,
                    animationGroups: [],
                    lights: [],
                    transformNodes: [],
                    geometries: [],
                    spriteManagers: [],
                });
            }, onProgress, function (message) {
                reject(new Error(message));
            });
        });
    };
    GLTFLoader.prototype._loadAsync = function (scene, data, rootUrl, onSuccess, onProgress, onError) {
        var _this = this;
        scene.useRightHandedSystem = true;
        GLTFLoaderExtension.LoadRuntimeAsync(scene, data, rootUrl, function (gltfRuntime) {
            // Load runtime extensios
            GLTFLoaderExtension.LoadRuntimeExtensionsAsync(gltfRuntime, function () {
                // Create nodes
                _this._createNodes(gltfRuntime);
                // Load buffers, shaders, materials, etc.
                _this._loadBuffersAsync(gltfRuntime, function () {
                    _this._loadShadersAsync(gltfRuntime, function () {
                        importMaterials(gltfRuntime);
                        postLoad(gltfRuntime);
                        if (!_glTFFileLoader__WEBPACK_IMPORTED_MODULE_3__.GLTFFileLoader.IncrementalLoading) {
                            onSuccess();
                        }
                    });
                });
                if (_glTFFileLoader__WEBPACK_IMPORTED_MODULE_3__.GLTFFileLoader.IncrementalLoading) {
                    onSuccess();
                }
            }, onError);
        }, onError);
    };
    /**
     * Imports all objects from a loaded gltf file and adds them to the scene
     * @param scene the scene the objects should be added to
     * @param data gltf data containing information of the meshes in a loaded file
     * @param rootUrl root url to load from
     * @param onProgress event that fires when loading progress has occured
     * @returns a promise which completes when objects have been loaded to the scene
     */
    GLTFLoader.prototype.loadAsync = function (scene, data, rootUrl, onProgress) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._loadAsync(scene, data, rootUrl, function () {
                resolve();
            }, onProgress, function (message) {
                reject(new Error(message));
            });
        });
    };
    GLTFLoader.prototype._loadShadersAsync = function (gltfRuntime, onload) {
        var hasShaders = false;
        var processShader = function (sha, shader) {
            GLTFLoaderExtension.LoadShaderStringAsync(gltfRuntime, sha, function (shaderString) {
                if (shaderString instanceof ArrayBuffer) {
                    return;
                }
                gltfRuntime.loadedShaderCount++;
                if (shaderString) {
                    babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Effect.ShadersStore[sha + (shader.type === _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.EShaderType.VERTEX ? "VertexShader" : "PixelShader")] = shaderString;
                }
                if (gltfRuntime.loadedShaderCount === gltfRuntime.shaderscount) {
                    onload();
                }
            }, function () {
                babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Tools.Error("Error when loading shader program named " + sha + " located at " + shader.uri);
            });
        };
        for (var sha in gltfRuntime.shaders) {
            hasShaders = true;
            var shader = gltfRuntime.shaders[sha];
            if (shader) {
                processShader.bind(this, sha, shader)();
            }
            else {
                babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Tools.Error("No shader named: " + sha);
            }
        }
        if (!hasShaders) {
            onload();
        }
    };
    GLTFLoader.prototype._loadBuffersAsync = function (gltfRuntime, onLoad) {
        var hasBuffers = false;
        var processBuffer = function (buf, buffer) {
            GLTFLoaderExtension.LoadBufferAsync(gltfRuntime, buf, function (bufferView) {
                gltfRuntime.loadedBufferCount++;
                if (bufferView) {
                    if (bufferView.byteLength != gltfRuntime.buffers[buf].byteLength) {
                        babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Tools.Error("Buffer named " + buf + " is length " + bufferView.byteLength + ". Expected: " + buffer.byteLength); // Improve error message
                    }
                    gltfRuntime.loadedBufferViews[buf] = bufferView;
                }
                if (gltfRuntime.loadedBufferCount === gltfRuntime.buffersCount) {
                    onLoad();
                }
            }, function () {
                babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Tools.Error("Error when loading buffer named " + buf + " located at " + buffer.uri);
            });
        };
        for (var buf in gltfRuntime.buffers) {
            hasBuffers = true;
            var buffer = gltfRuntime.buffers[buf];
            if (buffer) {
                processBuffer.bind(this, buf, buffer)();
            }
            else {
                babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Tools.Error("No buffer named: " + buf);
            }
        }
        if (!hasBuffers) {
            onLoad();
        }
    };
    GLTFLoader.prototype._createNodes = function (gltfRuntime) {
        var currentScene = gltfRuntime.currentScene;
        if (currentScene) {
            // Only one scene even if multiple scenes are defined
            for (var i = 0; i < currentScene.nodes.length; i++) {
                traverseNodes(gltfRuntime, currentScene.nodes[i], null);
            }
        }
        else {
            // Load all scenes
            for (var thing in gltfRuntime.scenes) {
                currentScene = gltfRuntime.scenes[thing];
                for (var i = 0; i < currentScene.nodes.length; i++) {
                    traverseNodes(gltfRuntime, currentScene.nodes[i], null);
                }
            }
        }
    };
    GLTFLoader.Extensions = {};
    return GLTFLoader;
}());
/** @internal */
var GLTFLoaderExtension = /** @class */ (function () {
    function GLTFLoaderExtension(name) {
        this._name = name;
    }
    Object.defineProperty(GLTFLoaderExtension.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Defines an override for loading the runtime
     * Return true to stop further extensions from loading the runtime
     * @param scene
     * @param data
     * @param rootUrl
     * @param onSuccess
     * @param onError
     * @returns true to stop further extensions from loading the runtime
     */
    GLTFLoaderExtension.prototype.loadRuntimeAsync = function (scene, data, rootUrl, onSuccess, onError) {
        return false;
    };
    /**
     * Defines an onverride for creating gltf runtime
     * Return true to stop further extensions from creating the runtime
     * @param gltfRuntime
     * @param onSuccess
     * @param onError
     * @returns true to stop further extensions from creating the runtime
     */
    GLTFLoaderExtension.prototype.loadRuntimeExtensionsAsync = function (gltfRuntime, onSuccess, onError) {
        return false;
    };
    /**
     * Defines an override for loading buffers
     * Return true to stop further extensions from loading this buffer
     * @param gltfRuntime
     * @param id
     * @param onSuccess
     * @param onError
     * @param onProgress
     * @returns true to stop further extensions from loading this buffer
     */
    GLTFLoaderExtension.prototype.loadBufferAsync = function (gltfRuntime, id, onSuccess, onError, onProgress) {
        return false;
    };
    /**
     * Defines an override for loading texture buffers
     * Return true to stop further extensions from loading this texture data
     * @param gltfRuntime
     * @param id
     * @param onSuccess
     * @param onError
     * @returns true to stop further extensions from loading this texture data
     */
    GLTFLoaderExtension.prototype.loadTextureBufferAsync = function (gltfRuntime, id, onSuccess, onError) {
        return false;
    };
    /**
     * Defines an override for creating textures
     * Return true to stop further extensions from loading this texture
     * @param gltfRuntime
     * @param id
     * @param buffer
     * @param onSuccess
     * @param onError
     * @returns true to stop further extensions from loading this texture
     */
    GLTFLoaderExtension.prototype.createTextureAsync = function (gltfRuntime, id, buffer, onSuccess, onError) {
        return false;
    };
    /**
     * Defines an override for loading shader strings
     * Return true to stop further extensions from loading this shader data
     * @param gltfRuntime
     * @param id
     * @param onSuccess
     * @param onError
     * @returns true to stop further extensions from loading this shader data
     */
    GLTFLoaderExtension.prototype.loadShaderStringAsync = function (gltfRuntime, id, onSuccess, onError) {
        return false;
    };
    /**
     * Defines an override for loading materials
     * Return true to stop further extensions from loading this material
     * @param gltfRuntime
     * @param id
     * @param onSuccess
     * @param onError
     * @returns true to stop further extensions from loading this material
     */
    GLTFLoaderExtension.prototype.loadMaterialAsync = function (gltfRuntime, id, onSuccess, onError) {
        return false;
    };
    // ---------
    // Utilities
    // ---------
    GLTFLoaderExtension.LoadRuntimeAsync = function (scene, data, rootUrl, onSuccess, onError) {
        GLTFLoaderExtension._ApplyExtensions(function (loaderExtension) {
            return loaderExtension.loadRuntimeAsync(scene, data, rootUrl, onSuccess, onError);
        }, function () {
            setTimeout(function () {
                if (!onSuccess) {
                    return;
                }
                onSuccess(GLTFLoaderBase.CreateRuntime(data.json, scene, rootUrl));
            });
        });
    };
    GLTFLoaderExtension.LoadRuntimeExtensionsAsync = function (gltfRuntime, onSuccess, onError) {
        GLTFLoaderExtension._ApplyExtensions(function (loaderExtension) {
            return loaderExtension.loadRuntimeExtensionsAsync(gltfRuntime, onSuccess, onError);
        }, function () {
            setTimeout(function () {
                onSuccess();
            });
        });
    };
    GLTFLoaderExtension.LoadBufferAsync = function (gltfRuntime, id, onSuccess, onError, onProgress) {
        GLTFLoaderExtension._ApplyExtensions(function (loaderExtension) {
            return loaderExtension.loadBufferAsync(gltfRuntime, id, onSuccess, onError, onProgress);
        }, function () {
            GLTFLoaderBase.LoadBufferAsync(gltfRuntime, id, onSuccess, onError, onProgress);
        });
    };
    GLTFLoaderExtension.LoadTextureAsync = function (gltfRuntime, id, onSuccess, onError) {
        GLTFLoaderExtension._LoadTextureBufferAsync(gltfRuntime, id, function (buffer) {
            if (buffer) {
                GLTFLoaderExtension._CreateTextureAsync(gltfRuntime, id, buffer, onSuccess, onError);
            }
        }, onError);
    };
    GLTFLoaderExtension.LoadShaderStringAsync = function (gltfRuntime, id, onSuccess, onError) {
        GLTFLoaderExtension._ApplyExtensions(function (loaderExtension) {
            return loaderExtension.loadShaderStringAsync(gltfRuntime, id, onSuccess, onError);
        }, function () {
            GLTFLoaderBase.LoadShaderStringAsync(gltfRuntime, id, onSuccess, onError);
        });
    };
    GLTFLoaderExtension.LoadMaterialAsync = function (gltfRuntime, id, onSuccess, onError) {
        GLTFLoaderExtension._ApplyExtensions(function (loaderExtension) {
            return loaderExtension.loadMaterialAsync(gltfRuntime, id, onSuccess, onError);
        }, function () {
            GLTFLoaderBase.LoadMaterialAsync(gltfRuntime, id, onSuccess, onError);
        });
    };
    GLTFLoaderExtension._LoadTextureBufferAsync = function (gltfRuntime, id, onSuccess, onError) {
        GLTFLoaderExtension._ApplyExtensions(function (loaderExtension) {
            return loaderExtension.loadTextureBufferAsync(gltfRuntime, id, onSuccess, onError);
        }, function () {
            GLTFLoaderBase.LoadTextureBufferAsync(gltfRuntime, id, onSuccess, onError);
        });
    };
    GLTFLoaderExtension._CreateTextureAsync = function (gltfRuntime, id, buffer, onSuccess, onError) {
        GLTFLoaderExtension._ApplyExtensions(function (loaderExtension) {
            return loaderExtension.createTextureAsync(gltfRuntime, id, buffer, onSuccess, onError);
        }, function () {
            GLTFLoaderBase.CreateTextureAsync(gltfRuntime, id, buffer, onSuccess);
        });
    };
    GLTFLoaderExtension._ApplyExtensions = function (func, defaultFunc) {
        for (var extensionName in GLTFLoader.Extensions) {
            var loaderExtension = GLTFLoader.Extensions[extensionName];
            if (func(loaderExtension)) {
                return;
            }
        }
        defaultFunc();
    };
    return GLTFLoaderExtension;
}());

_glTFFileLoader__WEBPACK_IMPORTED_MODULE_3__.GLTFFileLoader._CreateGLTF1Loader = function () { return new GLTFLoader(); };


/***/ }),

/***/ "../../../dev/loaders/src/glTF/1.0/glTFLoaderInterfaces.ts":
/*!*****************************************************************!*\
  !*** ../../../dev/loaders/src/glTF/1.0/glTFLoaderInterfaces.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EBlendingFunction: () => (/* binding */ EBlendingFunction),
/* harmony export */   EComponentType: () => (/* binding */ EComponentType),
/* harmony export */   ECullingType: () => (/* binding */ ECullingType),
/* harmony export */   EParameterType: () => (/* binding */ EParameterType),
/* harmony export */   EShaderType: () => (/* binding */ EShaderType),
/* harmony export */   ETextureFilterType: () => (/* binding */ ETextureFilterType),
/* harmony export */   ETextureFormat: () => (/* binding */ ETextureFormat),
/* harmony export */   ETextureWrapMode: () => (/* binding */ ETextureWrapMode)
/* harmony export */ });
/**
 * Enums
 * @internal
 */
var EComponentType;
(function (EComponentType) {
    EComponentType[EComponentType["BYTE"] = 5120] = "BYTE";
    EComponentType[EComponentType["UNSIGNED_BYTE"] = 5121] = "UNSIGNED_BYTE";
    EComponentType[EComponentType["SHORT"] = 5122] = "SHORT";
    EComponentType[EComponentType["UNSIGNED_SHORT"] = 5123] = "UNSIGNED_SHORT";
    EComponentType[EComponentType["FLOAT"] = 5126] = "FLOAT";
})(EComponentType || (EComponentType = {}));
/** @internal */
var EShaderType;
(function (EShaderType) {
    EShaderType[EShaderType["FRAGMENT"] = 35632] = "FRAGMENT";
    EShaderType[EShaderType["VERTEX"] = 35633] = "VERTEX";
})(EShaderType || (EShaderType = {}));
/** @internal */
var EParameterType;
(function (EParameterType) {
    EParameterType[EParameterType["BYTE"] = 5120] = "BYTE";
    EParameterType[EParameterType["UNSIGNED_BYTE"] = 5121] = "UNSIGNED_BYTE";
    EParameterType[EParameterType["SHORT"] = 5122] = "SHORT";
    EParameterType[EParameterType["UNSIGNED_SHORT"] = 5123] = "UNSIGNED_SHORT";
    EParameterType[EParameterType["INT"] = 5124] = "INT";
    EParameterType[EParameterType["UNSIGNED_INT"] = 5125] = "UNSIGNED_INT";
    EParameterType[EParameterType["FLOAT"] = 5126] = "FLOAT";
    EParameterType[EParameterType["FLOAT_VEC2"] = 35664] = "FLOAT_VEC2";
    EParameterType[EParameterType["FLOAT_VEC3"] = 35665] = "FLOAT_VEC3";
    EParameterType[EParameterType["FLOAT_VEC4"] = 35666] = "FLOAT_VEC4";
    EParameterType[EParameterType["INT_VEC2"] = 35667] = "INT_VEC2";
    EParameterType[EParameterType["INT_VEC3"] = 35668] = "INT_VEC3";
    EParameterType[EParameterType["INT_VEC4"] = 35669] = "INT_VEC4";
    EParameterType[EParameterType["BOOL"] = 35670] = "BOOL";
    EParameterType[EParameterType["BOOL_VEC2"] = 35671] = "BOOL_VEC2";
    EParameterType[EParameterType["BOOL_VEC3"] = 35672] = "BOOL_VEC3";
    EParameterType[EParameterType["BOOL_VEC4"] = 35673] = "BOOL_VEC4";
    EParameterType[EParameterType["FLOAT_MAT2"] = 35674] = "FLOAT_MAT2";
    EParameterType[EParameterType["FLOAT_MAT3"] = 35675] = "FLOAT_MAT3";
    EParameterType[EParameterType["FLOAT_MAT4"] = 35676] = "FLOAT_MAT4";
    EParameterType[EParameterType["SAMPLER_2D"] = 35678] = "SAMPLER_2D";
})(EParameterType || (EParameterType = {}));
/** @internal */
var ETextureWrapMode;
(function (ETextureWrapMode) {
    ETextureWrapMode[ETextureWrapMode["CLAMP_TO_EDGE"] = 33071] = "CLAMP_TO_EDGE";
    ETextureWrapMode[ETextureWrapMode["MIRRORED_REPEAT"] = 33648] = "MIRRORED_REPEAT";
    ETextureWrapMode[ETextureWrapMode["REPEAT"] = 10497] = "REPEAT";
})(ETextureWrapMode || (ETextureWrapMode = {}));
/** @internal */
var ETextureFilterType;
(function (ETextureFilterType) {
    ETextureFilterType[ETextureFilterType["NEAREST"] = 9728] = "NEAREST";
    ETextureFilterType[ETextureFilterType["LINEAR"] = 9728] = "LINEAR";
    ETextureFilterType[ETextureFilterType["NEAREST_MIPMAP_NEAREST"] = 9984] = "NEAREST_MIPMAP_NEAREST";
    ETextureFilterType[ETextureFilterType["LINEAR_MIPMAP_NEAREST"] = 9985] = "LINEAR_MIPMAP_NEAREST";
    ETextureFilterType[ETextureFilterType["NEAREST_MIPMAP_LINEAR"] = 9986] = "NEAREST_MIPMAP_LINEAR";
    ETextureFilterType[ETextureFilterType["LINEAR_MIPMAP_LINEAR"] = 9987] = "LINEAR_MIPMAP_LINEAR";
})(ETextureFilterType || (ETextureFilterType = {}));
/** @internal */
var ETextureFormat;
(function (ETextureFormat) {
    ETextureFormat[ETextureFormat["ALPHA"] = 6406] = "ALPHA";
    ETextureFormat[ETextureFormat["RGB"] = 6407] = "RGB";
    ETextureFormat[ETextureFormat["RGBA"] = 6408] = "RGBA";
    ETextureFormat[ETextureFormat["LUMINANCE"] = 6409] = "LUMINANCE";
    ETextureFormat[ETextureFormat["LUMINANCE_ALPHA"] = 6410] = "LUMINANCE_ALPHA";
})(ETextureFormat || (ETextureFormat = {}));
/** @internal */
var ECullingType;
(function (ECullingType) {
    ECullingType[ECullingType["FRONT"] = 1028] = "FRONT";
    ECullingType[ECullingType["BACK"] = 1029] = "BACK";
    ECullingType[ECullingType["FRONT_AND_BACK"] = 1032] = "FRONT_AND_BACK";
})(ECullingType || (ECullingType = {}));
/** @internal */
var EBlendingFunction;
(function (EBlendingFunction) {
    EBlendingFunction[EBlendingFunction["ZERO"] = 0] = "ZERO";
    EBlendingFunction[EBlendingFunction["ONE"] = 1] = "ONE";
    EBlendingFunction[EBlendingFunction["SRC_COLOR"] = 768] = "SRC_COLOR";
    EBlendingFunction[EBlendingFunction["ONE_MINUS_SRC_COLOR"] = 769] = "ONE_MINUS_SRC_COLOR";
    EBlendingFunction[EBlendingFunction["DST_COLOR"] = 774] = "DST_COLOR";
    EBlendingFunction[EBlendingFunction["ONE_MINUS_DST_COLOR"] = 775] = "ONE_MINUS_DST_COLOR";
    EBlendingFunction[EBlendingFunction["SRC_ALPHA"] = 770] = "SRC_ALPHA";
    EBlendingFunction[EBlendingFunction["ONE_MINUS_SRC_ALPHA"] = 771] = "ONE_MINUS_SRC_ALPHA";
    EBlendingFunction[EBlendingFunction["DST_ALPHA"] = 772] = "DST_ALPHA";
    EBlendingFunction[EBlendingFunction["ONE_MINUS_DST_ALPHA"] = 773] = "ONE_MINUS_DST_ALPHA";
    EBlendingFunction[EBlendingFunction["CONSTANT_COLOR"] = 32769] = "CONSTANT_COLOR";
    EBlendingFunction[EBlendingFunction["ONE_MINUS_CONSTANT_COLOR"] = 32770] = "ONE_MINUS_CONSTANT_COLOR";
    EBlendingFunction[EBlendingFunction["CONSTANT_ALPHA"] = 32771] = "CONSTANT_ALPHA";
    EBlendingFunction[EBlendingFunction["ONE_MINUS_CONSTANT_ALPHA"] = 32772] = "ONE_MINUS_CONSTANT_ALPHA";
    EBlendingFunction[EBlendingFunction["SRC_ALPHA_SATURATE"] = 776] = "SRC_ALPHA_SATURATE";
})(EBlendingFunction || (EBlendingFunction = {}));


/***/ }),

/***/ "../../../dev/loaders/src/glTF/1.0/glTFLoaderUtils.ts":
/*!************************************************************!*\
  !*** ../../../dev/loaders/src/glTF/1.0/glTFLoaderUtils.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GLTFUtils: () => (/* binding */ GLTFUtils)
/* harmony export */ });
/* harmony import */ var _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./glTFLoaderInterfaces */ "../../../dev/loaders/src/glTF/1.0/glTFLoaderInterfaces.ts");
/* harmony import */ var babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babylonjs/Materials/Textures/texture */ "babylonjs/Misc/tools");
/* harmony import */ var babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__);






/**
 * Utils functions for GLTF
 * @internal
 * @deprecated
 */
var GLTFUtils = /** @class */ (function () {
    function GLTFUtils() {
    }
    /**
     * Sets the given "parameter" matrix
     * @param scene the Scene object
     * @param source the source node where to pick the matrix
     * @param parameter the GLTF technique parameter
     * @param uniformName the name of the shader's uniform
     * @param shaderMaterial the shader material
     */
    GLTFUtils.SetMatrix = function (scene, source, parameter, uniformName, shaderMaterial) {
        var mat = null;
        if (parameter.semantic === "MODEL") {
            mat = source.getWorldMatrix();
        }
        else if (parameter.semantic === "PROJECTION") {
            mat = scene.getProjectionMatrix();
        }
        else if (parameter.semantic === "VIEW") {
            mat = scene.getViewMatrix();
        }
        else if (parameter.semantic === "MODELVIEWINVERSETRANSPOSE") {
            mat = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Matrix.Transpose(source.getWorldMatrix().multiply(scene.getViewMatrix()).invert());
        }
        else if (parameter.semantic === "MODELVIEW") {
            mat = source.getWorldMatrix().multiply(scene.getViewMatrix());
        }
        else if (parameter.semantic === "MODELVIEWPROJECTION") {
            mat = source.getWorldMatrix().multiply(scene.getTransformMatrix());
        }
        else if (parameter.semantic === "MODELINVERSE") {
            mat = source.getWorldMatrix().invert();
        }
        else if (parameter.semantic === "VIEWINVERSE") {
            mat = scene.getViewMatrix().invert();
        }
        else if (parameter.semantic === "PROJECTIONINVERSE") {
            mat = scene.getProjectionMatrix().invert();
        }
        else if (parameter.semantic === "MODELVIEWINVERSE") {
            mat = source.getWorldMatrix().multiply(scene.getViewMatrix()).invert();
        }
        else if (parameter.semantic === "MODELVIEWPROJECTIONINVERSE") {
            mat = source.getWorldMatrix().multiply(scene.getTransformMatrix()).invert();
        }
        else if (parameter.semantic === "MODELINVERSETRANSPOSE") {
            mat = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Matrix.Transpose(source.getWorldMatrix().invert());
        }
        if (mat) {
            switch (parameter.type) {
                case _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.EParameterType.FLOAT_MAT2:
                    shaderMaterial.setMatrix2x2(uniformName, babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Matrix.GetAsMatrix2x2(mat));
                    break;
                case _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.EParameterType.FLOAT_MAT3:
                    shaderMaterial.setMatrix3x3(uniformName, babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Matrix.GetAsMatrix3x3(mat));
                    break;
                case _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.EParameterType.FLOAT_MAT4:
                    shaderMaterial.setMatrix(uniformName, mat);
                    break;
                default:
                    break;
            }
        }
    };
    /**
     * Sets the given "parameter" matrix
     * @param shaderMaterial the shader material
     * @param uniform the name of the shader's uniform
     * @param value the value of the uniform
     * @param type the uniform's type (EParameterType FLOAT, VEC2, VEC3 or VEC4)
     * @returns true if set, else false
     */
    GLTFUtils.SetUniform = function (shaderMaterial, uniform, value, type) {
        switch (type) {
            case _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.EParameterType.FLOAT:
                shaderMaterial.setFloat(uniform, value);
                return true;
            case _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.EParameterType.FLOAT_VEC2:
                shaderMaterial.setVector2(uniform, babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector2.FromArray(value));
                return true;
            case _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.EParameterType.FLOAT_VEC3:
                shaderMaterial.setVector3(uniform, babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3.FromArray(value));
                return true;
            case _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.EParameterType.FLOAT_VEC4:
                shaderMaterial.setVector4(uniform, babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector4.FromArray(value));
                return true;
            default:
                return false;
        }
    };
    /**
     * Returns the wrap mode of the texture
     * @param mode the mode value
     * @returns the wrap mode (TEXTURE_WRAP_ADDRESSMODE, MIRROR_ADDRESSMODE or CLAMP_ADDRESSMODE)
     */
    GLTFUtils.GetWrapMode = function (mode) {
        switch (mode) {
            case _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.ETextureWrapMode.CLAMP_TO_EDGE:
                return babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Texture.CLAMP_ADDRESSMODE;
            case _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.ETextureWrapMode.MIRRORED_REPEAT:
                return babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Texture.MIRROR_ADDRESSMODE;
            case _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.ETextureWrapMode.REPEAT:
                return babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Texture.WRAP_ADDRESSMODE;
            default:
                return babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Texture.WRAP_ADDRESSMODE;
        }
    };
    /**
     * Returns the byte stride giving an accessor
     * @param accessor the GLTF accessor objet
     * @returns the byte stride
     */
    GLTFUtils.GetByteStrideFromType = function (accessor) {
        // Needs this function since "byteStride" isn't requiered in glTF format
        var type = accessor.type;
        switch (type) {
            case "VEC2":
                return 2;
            case "VEC3":
                return 3;
            case "VEC4":
                return 4;
            case "MAT2":
                return 4;
            case "MAT3":
                return 9;
            case "MAT4":
                return 16;
            default:
                return 1;
        }
    };
    /**
     * Returns the texture filter mode giving a mode value
     * @param mode the filter mode value
     * @returns the filter mode (TODO - needs to be a type?)
     */
    GLTFUtils.GetTextureFilterMode = function (mode) {
        switch (mode) {
            case _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.ETextureFilterType.LINEAR:
            case _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.ETextureFilterType.LINEAR_MIPMAP_NEAREST:
            case _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.ETextureFilterType.LINEAR_MIPMAP_LINEAR:
                return babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Texture.TRILINEAR_SAMPLINGMODE;
            case _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.ETextureFilterType.NEAREST:
            case _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.ETextureFilterType.NEAREST_MIPMAP_NEAREST:
                return babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Texture.NEAREST_SAMPLINGMODE;
            default:
                return babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Texture.BILINEAR_SAMPLINGMODE;
        }
    };
    GLTFUtils.GetBufferFromBufferView = function (gltfRuntime, bufferView, byteOffset, byteLength, componentType) {
        byteOffset = bufferView.byteOffset + byteOffset;
        var loadedBufferView = gltfRuntime.loadedBufferViews[bufferView.buffer];
        if (byteOffset + byteLength > loadedBufferView.byteLength) {
            throw new Error("Buffer access is out of range");
        }
        var buffer = loadedBufferView.buffer;
        byteOffset += loadedBufferView.byteOffset;
        switch (componentType) {
            case _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.EComponentType.BYTE:
                return new Int8Array(buffer, byteOffset, byteLength);
            case _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.EComponentType.UNSIGNED_BYTE:
                return new Uint8Array(buffer, byteOffset, byteLength);
            case _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.EComponentType.SHORT:
                return new Int16Array(buffer, byteOffset, byteLength);
            case _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.EComponentType.UNSIGNED_SHORT:
                return new Uint16Array(buffer, byteOffset, byteLength);
            default:
                return new Float32Array(buffer, byteOffset, byteLength);
        }
    };
    /**
     * Returns a buffer from its accessor
     * @param gltfRuntime the GLTF runtime
     * @param accessor the GLTF accessor
     * @returns an array buffer view
     */
    GLTFUtils.GetBufferFromAccessor = function (gltfRuntime, accessor) {
        var bufferView = gltfRuntime.bufferViews[accessor.bufferView];
        var byteLength = accessor.count * GLTFUtils.GetByteStrideFromType(accessor);
        return GLTFUtils.GetBufferFromBufferView(gltfRuntime, bufferView, accessor.byteOffset, byteLength, accessor.componentType);
    };
    /**
     * Decodes a buffer view into a string
     * @param view the buffer view
     * @returns a string
     */
    GLTFUtils.DecodeBufferToText = function (view) {
        var result = "";
        var length = view.byteLength;
        for (var i = 0; i < length; ++i) {
            result += String.fromCharCode(view[i]);
        }
        return result;
    };
    /**
     * Returns the default material of gltf. Related to
     * https://github.com/KhronosGroup/glTF/tree/master/specification/1.0#appendix-a-default-material
     * @param scene the Babylon.js scene
     * @returns the default Babylon material
     */
    GLTFUtils.GetDefaultMaterial = function (scene) {
        if (!GLTFUtils._DefaultMaterial) {
            babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Effect.ShadersStore["GLTFDefaultMaterialVertexShader"] = [
                "precision highp float;",
                "",
                "uniform mat4 worldView;",
                "uniform mat4 projection;",
                "",
                "attribute vec3 position;",
                "",
                "void main(void)",
                "{",
                "    gl_Position = projection * worldView * vec4(position, 1.0);",
                "}",
            ].join("\n");
            babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Effect.ShadersStore["GLTFDefaultMaterialPixelShader"] = [
                "precision highp float;",
                "",
                "uniform vec4 u_emission;",
                "",
                "void main(void)",
                "{",
                "    gl_FragColor = u_emission;",
                "}",
            ].join("\n");
            var shaderPath = {
                vertex: "GLTFDefaultMaterial",
                fragment: "GLTFDefaultMaterial",
            };
            var options = {
                attributes: ["position"],
                uniforms: ["worldView", "projection", "u_emission"],
                samplers: new Array(),
                needAlphaBlending: false,
            };
            GLTFUtils._DefaultMaterial = new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.ShaderMaterial("GLTFDefaultMaterial", scene, shaderPath, options);
            GLTFUtils._DefaultMaterial.setColor4("u_emission", new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Color4(0.5, 0.5, 0.5, 1.0));
        }
        return GLTFUtils._DefaultMaterial;
    };
    // The GLTF default material
    GLTFUtils._DefaultMaterial = null;
    return GLTFUtils;
}());


/***/ }),

/***/ "../../../dev/loaders/src/glTF/1.0/glTFMaterialsCommonExtension.ts":
/*!*************************************************************************!*\
  !*** ../../../dev/loaders/src/glTF/1.0/glTFMaterialsCommonExtension.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GLTFMaterialsCommonExtension: () => (/* binding */ GLTFMaterialsCommonExtension)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "../../../../node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _glTFLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./glTFLoader */ "../../../dev/loaders/src/glTF/1.0/glTFLoader.ts");
/* harmony import */ var babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babylonjs/Lights/spotLight */ "babylonjs/Misc/tools");
/* harmony import */ var babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__);











/**
 * @internal
 * @deprecated
 */
var GLTFMaterialsCommonExtension = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(GLTFMaterialsCommonExtension, _super);
    function GLTFMaterialsCommonExtension() {
        return _super.call(this, "KHR_materials_common") || this;
    }
    GLTFMaterialsCommonExtension.prototype.loadRuntimeExtensionsAsync = function (gltfRuntime) {
        if (!gltfRuntime.extensions) {
            return false;
        }
        var extension = gltfRuntime.extensions[this.name];
        if (!extension) {
            return false;
        }
        // Create lights
        var lights = extension.lights;
        if (lights) {
            for (var thing in lights) {
                var light = lights[thing];
                switch (light.type) {
                    case "ambient": {
                        var ambientLight = new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.HemisphericLight(light.name, new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3(0, 1, 0), gltfRuntime.scene);
                        var ambient = light.ambient;
                        if (ambient) {
                            ambientLight.diffuse = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Color3.FromArray(ambient.color || [1, 1, 1]);
                        }
                        break;
                    }
                    case "point": {
                        var pointLight = new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.PointLight(light.name, new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3(10, 10, 10), gltfRuntime.scene);
                        var point = light.point;
                        if (point) {
                            pointLight.diffuse = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Color3.FromArray(point.color || [1, 1, 1]);
                        }
                        break;
                    }
                    case "directional": {
                        var dirLight = new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.DirectionalLight(light.name, new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3(0, -1, 0), gltfRuntime.scene);
                        var directional = light.directional;
                        if (directional) {
                            dirLight.diffuse = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Color3.FromArray(directional.color || [1, 1, 1]);
                        }
                        break;
                    }
                    case "spot": {
                        var spot = light.spot;
                        if (spot) {
                            var spotLight = new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.SpotLight(light.name, new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3(0, 10, 0), new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3(0, -1, 0), spot.fallOffAngle || Math.PI, spot.fallOffExponent || 0.0, gltfRuntime.scene);
                            spotLight.diffuse = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Color3.FromArray(spot.color || [1, 1, 1]);
                        }
                        break;
                    }
                    default:
                        babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Tools.Warn('GLTF Material Common extension: light type "' + light.type + "” not supported");
                        break;
                }
            }
        }
        return false;
    };
    GLTFMaterialsCommonExtension.prototype.loadMaterialAsync = function (gltfRuntime, id, onSuccess, onError) {
        var material = gltfRuntime.materials[id];
        if (!material || !material.extensions) {
            return false;
        }
        var extension = material.extensions[this.name];
        if (!extension) {
            return false;
        }
        var standardMaterial = new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.StandardMaterial(id, gltfRuntime.scene);
        standardMaterial.sideOrientation = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Material.CounterClockWiseSideOrientation;
        if (extension.technique === "CONSTANT") {
            standardMaterial.disableLighting = true;
        }
        standardMaterial.backFaceCulling = extension.doubleSided === undefined ? false : !extension.doubleSided;
        standardMaterial.alpha = extension.values.transparency === undefined ? 1.0 : extension.values.transparency;
        standardMaterial.specularPower = extension.values.shininess === undefined ? 0.0 : extension.values.shininess;
        // Ambient
        if (typeof extension.values.ambient === "string") {
            this._loadTexture(gltfRuntime, extension.values.ambient, standardMaterial, "ambientTexture", onError);
        }
        else {
            standardMaterial.ambientColor = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Color3.FromArray(extension.values.ambient || [0, 0, 0]);
        }
        // Diffuse
        if (typeof extension.values.diffuse === "string") {
            this._loadTexture(gltfRuntime, extension.values.diffuse, standardMaterial, "diffuseTexture", onError);
        }
        else {
            standardMaterial.diffuseColor = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Color3.FromArray(extension.values.diffuse || [0, 0, 0]);
        }
        // Emission
        if (typeof extension.values.emission === "string") {
            this._loadTexture(gltfRuntime, extension.values.emission, standardMaterial, "emissiveTexture", onError);
        }
        else {
            standardMaterial.emissiveColor = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Color3.FromArray(extension.values.emission || [0, 0, 0]);
        }
        // Specular
        if (typeof extension.values.specular === "string") {
            this._loadTexture(gltfRuntime, extension.values.specular, standardMaterial, "specularTexture", onError);
        }
        else {
            standardMaterial.specularColor = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Color3.FromArray(extension.values.specular || [0, 0, 0]);
        }
        return true;
    };
    GLTFMaterialsCommonExtension.prototype._loadTexture = function (gltfRuntime, id, material, propertyPath, onError) {
        // Create buffer from texture url
        _glTFLoader__WEBPACK_IMPORTED_MODULE_0__.GLTFLoaderBase.LoadTextureBufferAsync(gltfRuntime, id, function (buffer) {
            // Create texture from buffer
            _glTFLoader__WEBPACK_IMPORTED_MODULE_0__.GLTFLoaderBase.CreateTextureAsync(gltfRuntime, id, buffer, function (texture) { return (material[propertyPath] = texture); });
        }, onError);
    };
    return GLTFMaterialsCommonExtension;
}(_glTFLoader__WEBPACK_IMPORTED_MODULE_0__.GLTFLoaderExtension));

_glTFLoader__WEBPACK_IMPORTED_MODULE_0__.GLTFLoader.RegisterExtension(new GLTFMaterialsCommonExtension());


/***/ }),

/***/ "../../../dev/loaders/src/glTF/1.0/index.ts":
/*!**************************************************!*\
  !*** ../../../dev/loaders/src/glTF/1.0/index.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EBlendingFunction: () => (/* reexport safe */ _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_2__.EBlendingFunction),
/* harmony export */   EComponentType: () => (/* reexport safe */ _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_2__.EComponentType),
/* harmony export */   ECullingType: () => (/* reexport safe */ _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_2__.ECullingType),
/* harmony export */   EParameterType: () => (/* reexport safe */ _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_2__.EParameterType),
/* harmony export */   EShaderType: () => (/* reexport safe */ _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_2__.EShaderType),
/* harmony export */   ETextureFilterType: () => (/* reexport safe */ _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_2__.ETextureFilterType),
/* harmony export */   ETextureFormat: () => (/* reexport safe */ _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_2__.ETextureFormat),
/* harmony export */   ETextureWrapMode: () => (/* reexport safe */ _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_2__.ETextureWrapMode),
/* harmony export */   GLTFBinaryExtension: () => (/* reexport safe */ _glTFBinaryExtension__WEBPACK_IMPORTED_MODULE_0__.GLTFBinaryExtension),
/* harmony export */   GLTFLoader: () => (/* reexport safe */ _glTFLoader__WEBPACK_IMPORTED_MODULE_1__.GLTFLoader),
/* harmony export */   GLTFLoaderBase: () => (/* reexport safe */ _glTFLoader__WEBPACK_IMPORTED_MODULE_1__.GLTFLoaderBase),
/* harmony export */   GLTFLoaderExtension: () => (/* reexport safe */ _glTFLoader__WEBPACK_IMPORTED_MODULE_1__.GLTFLoaderExtension),
/* harmony export */   GLTFMaterialsCommonExtension: () => (/* reexport safe */ _glTFMaterialsCommonExtension__WEBPACK_IMPORTED_MODULE_4__.GLTFMaterialsCommonExtension),
/* harmony export */   GLTFUtils: () => (/* reexport safe */ _glTFLoaderUtils__WEBPACK_IMPORTED_MODULE_3__.GLTFUtils)
/* harmony export */ });
/* harmony import */ var _glTFBinaryExtension__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./glTFBinaryExtension */ "../../../dev/loaders/src/glTF/1.0/glTFBinaryExtension.ts");
/* harmony import */ var _glTFLoader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./glTFLoader */ "../../../dev/loaders/src/glTF/1.0/glTFLoader.ts");
/* harmony import */ var _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./glTFLoaderInterfaces */ "../../../dev/loaders/src/glTF/1.0/glTFLoaderInterfaces.ts");
/* harmony import */ var _glTFLoaderUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./glTFLoaderUtils */ "../../../dev/loaders/src/glTF/1.0/glTFLoaderUtils.ts");
/* harmony import */ var _glTFMaterialsCommonExtension__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./glTFMaterialsCommonExtension */ "../../../dev/loaders/src/glTF/1.0/glTFMaterialsCommonExtension.ts");







/***/ }),

/***/ "../../../dev/loaders/src/glTF/glTFFileLoader.metadata.ts":
/*!****************************************************************!*\
  !*** ../../../dev/loaders/src/glTF/glTFFileLoader.metadata.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GLTFFileLoaderMetadata: () => (/* binding */ GLTFFileLoaderMetadata),
/* harmony export */   GLTFMagicBase64Encoded: () => (/* binding */ GLTFMagicBase64Encoded)
/* harmony export */ });
var GLTFMagicBase64Encoded = "Z2xURg"; // "glTF" base64 encoded (without the quotes!)
var GLTFFileLoaderMetadata = {
    name: "gltf",
    extensions: {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        ".gltf": { isBinary: false },
        // eslint-disable-next-line @typescript-eslint/naming-convention
        ".glb": { isBinary: true },
    },
    canDirectLoad: function (data) {
        return ((data.indexOf("asset") !== -1 && data.indexOf("version") !== -1) ||
            data.startsWith("data:base64," + GLTFMagicBase64Encoded) || // this is technically incorrect, but will continue to support for backcompat.
            data.startsWith("data:;base64," + GLTFMagicBase64Encoded) ||
            data.startsWith("data:application/octet-stream;base64," + GLTFMagicBase64Encoded) ||
            data.startsWith("data:model/gltf-binary;base64," + GLTFMagicBase64Encoded));
    },
};


/***/ }),

/***/ "../../../dev/loaders/src/glTF/glTFFileLoader.ts":
/*!*******************************************************!*\
  !*** ../../../dev/loaders/src/glTF/glTFFileLoader.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GLTFFileLoader: () => (/* binding */ GLTFFileLoader),
/* harmony export */   GLTFLoaderAnimationStartMode: () => (/* binding */ GLTFLoaderAnimationStartMode),
/* harmony export */   GLTFLoaderCoordinateSystemMode: () => (/* binding */ GLTFLoaderCoordinateSystemMode),
/* harmony export */   GLTFLoaderState: () => (/* binding */ GLTFLoaderState)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "../../../../node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs/Misc/error */ "babylonjs/Misc/tools");
/* harmony import */ var babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _glTFValidation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./glTFValidation */ "../../../dev/loaders/src/glTF/glTFValidation.ts");
/* harmony import */ var _glTFFileLoader_metadata__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./glTFFileLoader.metadata */ "../../../dev/loaders/src/glTF/glTFFileLoader.metadata.ts");











function readAsync(arrayBuffer, byteOffset, byteLength) {
    try {
        return Promise.resolve(new Uint8Array(arrayBuffer, byteOffset, byteLength));
    }
    catch (e) {
        return Promise.reject(e);
    }
}
function readViewAsync(arrayBufferView, byteOffset, byteLength) {
    try {
        if (byteOffset < 0 || byteOffset >= arrayBufferView.byteLength) {
            throw new RangeError("Offset is out of range.");
        }
        if (byteOffset + byteLength > arrayBufferView.byteLength) {
            throw new RangeError("Length is out of range.");
        }
        return Promise.resolve(new Uint8Array(arrayBufferView.buffer, arrayBufferView.byteOffset + byteOffset, byteLength));
    }
    catch (e) {
        return Promise.reject(e);
    }
}
/**
 * Mode that determines the coordinate system to use.
 */
var GLTFLoaderCoordinateSystemMode;
(function (GLTFLoaderCoordinateSystemMode) {
    /**
     * Automatically convert the glTF right-handed data to the appropriate system based on the current coordinate system mode of the scene.
     */
    GLTFLoaderCoordinateSystemMode[GLTFLoaderCoordinateSystemMode["AUTO"] = 0] = "AUTO";
    /**
     * Sets the useRightHandedSystem flag on the scene.
     */
    GLTFLoaderCoordinateSystemMode[GLTFLoaderCoordinateSystemMode["FORCE_RIGHT_HANDED"] = 1] = "FORCE_RIGHT_HANDED";
})(GLTFLoaderCoordinateSystemMode || (GLTFLoaderCoordinateSystemMode = {}));
/**
 * Mode that determines what animations will start.
 */
var GLTFLoaderAnimationStartMode;
(function (GLTFLoaderAnimationStartMode) {
    /**
     * No animation will start.
     */
    GLTFLoaderAnimationStartMode[GLTFLoaderAnimationStartMode["NONE"] = 0] = "NONE";
    /**
     * The first animation will start.
     */
    GLTFLoaderAnimationStartMode[GLTFLoaderAnimationStartMode["FIRST"] = 1] = "FIRST";
    /**
     * All animations will start.
     */
    GLTFLoaderAnimationStartMode[GLTFLoaderAnimationStartMode["ALL"] = 2] = "ALL";
})(GLTFLoaderAnimationStartMode || (GLTFLoaderAnimationStartMode = {}));
/**
 * Loader state.
 */
var GLTFLoaderState;
(function (GLTFLoaderState) {
    /**
     * The asset is loading.
     */
    GLTFLoaderState[GLTFLoaderState["LOADING"] = 0] = "LOADING";
    /**
     * The asset is ready for rendering.
     */
    GLTFLoaderState[GLTFLoaderState["READY"] = 1] = "READY";
    /**
     * The asset is completely loaded.
     */
    GLTFLoaderState[GLTFLoaderState["COMPLETE"] = 2] = "COMPLETE";
})(GLTFLoaderState || (GLTFLoaderState = {}));
var GLTFLoaderOptions = /** @class */ (function () {
    function GLTFLoaderOptions() {
        // ----------
        // V2 options
        // ----------
        /**
         * The coordinate system mode. Defaults to AUTO.
         */
        this.coordinateSystemMode = GLTFLoaderCoordinateSystemMode.AUTO;
        /**
         * The animation start mode. Defaults to FIRST.
         */
        this.animationStartMode = GLTFLoaderAnimationStartMode.FIRST;
        /**
         * Defines if the loader should load node animations. Defaults to true.
         * NOTE: The animation of this node will still load if the node is also a joint of a skin and `loadSkins` is true.
         */
        this.loadNodeAnimations = true;
        /**
         * Defines if the loader should load skins. Defaults to true.
         */
        this.loadSkins = true;
        /**
         * Defines if the loader should load morph targets. Defaults to true.
         */
        this.loadMorphTargets = true;
        /**
         * Defines if the loader should compile materials before raising the success callback. Defaults to false.
         */
        this.compileMaterials = false;
        /**
         * Defines if the loader should also compile materials with clip planes. Defaults to false.
         */
        this.useClipPlane = false;
        /**
         * Defines if the loader should compile shadow generators before raising the success callback. Defaults to false.
         */
        this.compileShadowGenerators = false;
        /**
         * Defines if the Alpha blended materials are only applied as coverage.
         * If false, (default) The luminance of each pixel will reduce its opacity to simulate the behaviour of most physical materials.
         * If true, no extra effects are applied to transparent pixels.
         */
        this.transparencyAsCoverage = false;
        /**
         * Defines if the loader should use range requests when load binary glTF files from HTTP.
         * Enabling will disable offline support and glTF validator.
         * Defaults to false.
         */
        this.useRangeRequests = false;
        /**
         * Defines if the loader should create instances when multiple glTF nodes point to the same glTF mesh. Defaults to true.
         */
        this.createInstances = true;
        /**
         * Defines if the loader should always compute the bounding boxes of meshes and not use the min/max values from the position accessor. Defaults to false.
         */
        this.alwaysComputeBoundingBox = false;
        /**
         * If true, load all materials defined in the file, even if not used by any mesh. Defaults to false.
         */
        this.loadAllMaterials = false;
        /**
         * If true, load only the materials defined in the file. Defaults to false.
         */
        this.loadOnlyMaterials = false;
        /**
         * If true, do not load any materials defined in the file. Defaults to false.
         */
        this.skipMaterials = false;
        /**
         * If true, load the color (gamma encoded) textures into sRGB buffers (if supported by the GPU), which will yield more accurate results when sampling the texture. Defaults to true.
         */
        this.useSRGBBuffers = true;
        /**
         * When loading glTF animations, which are defined in seconds, target them to this FPS. Defaults to 60.
         */
        this.targetFps = 60;
        /**
         * Defines if the loader should always compute the nearest common ancestor of the skeleton joints instead of using `skin.skeleton`. Defaults to false.
         * Set this to true if loading assets with invalid `skin.skeleton` values.
         */
        this.alwaysComputeSkeletonRootNode = false;
        /**
         * If true, the loader will derive the name for Babylon textures from the glTF texture name, image name, or image url. Defaults to false.
         * Note that it is possible for multiple Babylon textures to share the same name when the Babylon textures load from the same glTF texture or image.
         */
        this.useGltfTextureNames = false;
        /**
         * Function called before loading a url referenced by the asset.
         * @param url url referenced by the asset
         * @returns Async url to load
         */
        this.preprocessUrlAsync = function (url) { return Promise.resolve(url); };
        /**
         * Defines options for glTF extensions.
         */
        this.extensionOptions = {};
    }
    // eslint-disable-next-line babylonjs/available
    GLTFLoaderOptions.prototype.copyFrom = function (options) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w;
        if (options) {
            this.onParsed = options.onParsed;
            this.coordinateSystemMode = (_a = options.coordinateSystemMode) !== null && _a !== void 0 ? _a : this.coordinateSystemMode;
            this.animationStartMode = (_b = options.animationStartMode) !== null && _b !== void 0 ? _b : this.animationStartMode;
            this.loadNodeAnimations = (_c = options.loadNodeAnimations) !== null && _c !== void 0 ? _c : this.loadNodeAnimations;
            this.loadSkins = (_d = options.loadSkins) !== null && _d !== void 0 ? _d : this.loadSkins;
            this.loadMorphTargets = (_e = options.loadMorphTargets) !== null && _e !== void 0 ? _e : this.loadMorphTargets;
            this.compileMaterials = (_f = options.compileMaterials) !== null && _f !== void 0 ? _f : this.compileMaterials;
            this.useClipPlane = (_g = options.useClipPlane) !== null && _g !== void 0 ? _g : this.useClipPlane;
            this.compileShadowGenerators = (_h = options.compileShadowGenerators) !== null && _h !== void 0 ? _h : this.compileShadowGenerators;
            this.transparencyAsCoverage = (_j = options.transparencyAsCoverage) !== null && _j !== void 0 ? _j : this.transparencyAsCoverage;
            this.useRangeRequests = (_k = options.useRangeRequests) !== null && _k !== void 0 ? _k : this.useRangeRequests;
            this.createInstances = (_l = options.createInstances) !== null && _l !== void 0 ? _l : this.createInstances;
            this.alwaysComputeBoundingBox = (_m = options.alwaysComputeBoundingBox) !== null && _m !== void 0 ? _m : this.alwaysComputeBoundingBox;
            this.loadAllMaterials = (_o = options.loadAllMaterials) !== null && _o !== void 0 ? _o : this.loadAllMaterials;
            this.loadOnlyMaterials = (_p = options.loadOnlyMaterials) !== null && _p !== void 0 ? _p : this.loadOnlyMaterials;
            this.skipMaterials = (_q = options.skipMaterials) !== null && _q !== void 0 ? _q : this.skipMaterials;
            this.useSRGBBuffers = (_r = options.useSRGBBuffers) !== null && _r !== void 0 ? _r : this.useSRGBBuffers;
            this.targetFps = (_s = options.targetFps) !== null && _s !== void 0 ? _s : this.targetFps;
            this.alwaysComputeSkeletonRootNode = (_t = options.alwaysComputeSkeletonRootNode) !== null && _t !== void 0 ? _t : this.alwaysComputeSkeletonRootNode;
            this.useGltfTextureNames = (_u = options.useGltfTextureNames) !== null && _u !== void 0 ? _u : this.useGltfTextureNames;
            this.preprocessUrlAsync = (_v = options.preprocessUrlAsync) !== null && _v !== void 0 ? _v : this.preprocessUrlAsync;
            this.customRootNode = options.customRootNode;
            this.onMeshLoaded = options.onMeshLoaded;
            this.onSkinLoaded = options.onSkinLoaded;
            this.onTextureLoaded = options.onTextureLoaded;
            this.onMaterialLoaded = options.onMaterialLoaded;
            this.onCameraLoaded = options.onCameraLoaded;
            this.extensionOptions = (_w = options.extensionOptions) !== null && _w !== void 0 ? _w : this.extensionOptions;
        }
    };
    return GLTFLoaderOptions;
}());
/**
 * File loader for loading glTF files into a scene.
 */
var GLTFFileLoader = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__extends)(GLTFFileLoader, _super);
    /**
     * Creates a new glTF file loader.
     * @param options The options for the loader
     */
    function GLTFFileLoader(options) {
        var _this = _super.call(this) || this;
        // --------------------
        // Begin Common options
        // --------------------
        /**
         * Raised when the asset has been parsed
         */
        _this.onParsedObservable = new babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__.Observable();
        // --------------
        // End V1 options
        // --------------
        /**
         * Observable raised when the loader creates a mesh after parsing the glTF properties of the mesh.
         * Note that the observable is raised as soon as the mesh object is created, meaning some data may not have been setup yet for this mesh (vertex data, morph targets, material, ...)
         */
        _this.onMeshLoadedObservable = new babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__.Observable();
        /**
         * Observable raised when the loader creates a skin after parsing the glTF properties of the skin node.
         * @see https://doc.babylonjs.com/features/featuresDeepDive/importers/glTF/glTFSkinning#ignoring-the-transform-of-the-skinned-mesh
         * @param node - the transform node that corresponds to the original glTF skin node used for animations
         * @param skinnedNode - the transform node that is the skinned mesh itself or the parent of the skinned meshes
         */
        _this.onSkinLoadedObservable = new babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__.Observable();
        /**
         * Observable raised when the loader creates a texture after parsing the glTF properties of the texture.
         */
        _this.onTextureLoadedObservable = new babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__.Observable();
        /**
         * Observable raised when the loader creates a material after parsing the glTF properties of the material.
         */
        _this.onMaterialLoadedObservable = new babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__.Observable();
        /**
         * Observable raised when the loader creates a camera after parsing the glTF properties of the camera.
         */
        _this.onCameraLoadedObservable = new babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__.Observable();
        /**
         * Observable raised when the asset is completely loaded, immediately before the loader is disposed.
         * For assets with LODs, raised when all of the LODs are complete.
         * For assets without LODs, raised when the model is complete, immediately after the loader resolves the returned promise.
         */
        _this.onCompleteObservable = new babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__.Observable();
        /**
         * Observable raised when an error occurs.
         */
        _this.onErrorObservable = new babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__.Observable();
        /**
         * Observable raised after the loader is disposed.
         */
        _this.onDisposeObservable = new babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__.Observable();
        /**
         * Observable raised after a loader extension is created.
         * Set additional options for a loader extension in this event.
         */
        _this.onExtensionLoadedObservable = new babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__.Observable();
        /**
         * Defines if the loader should validate the asset.
         */
        _this.validate = false;
        /**
         * Observable raised after validation when validate is set to true. The event data is the result of the validation.
         */
        _this.onValidatedObservable = new babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__.Observable();
        _this._loader = null;
        _this._state = null;
        _this._requests = new Array();
        /**
         * Name of the loader ("gltf")
         */
        _this.name = _glTFFileLoader_metadata__WEBPACK_IMPORTED_MODULE_2__.GLTFFileLoaderMetadata.name;
        /** @internal */
        _this.extensions = _glTFFileLoader_metadata__WEBPACK_IMPORTED_MODULE_2__.GLTFFileLoaderMetadata.extensions;
        /**
         * Observable raised when the loader state changes.
         */
        _this.onLoaderStateChangedObservable = new babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__.Observable();
        _this._logIndentLevel = 0;
        _this._loggingEnabled = false;
        /** @internal */
        _this._log = _this._logDisabled;
        _this._capturePerformanceCounters = false;
        /** @internal */
        _this._startPerformanceCounter = _this._startPerformanceCounterDisabled;
        /** @internal */
        _this._endPerformanceCounter = _this._endPerformanceCounterDisabled;
        _this.copyFrom(options);
        return _this;
    }
    Object.defineProperty(GLTFFileLoader.prototype, "onParsed", {
        /**
         * Raised when the asset has been parsed
         */
        set: function (callback) {
            if (this._onParsedObserver) {
                this.onParsedObservable.remove(this._onParsedObserver);
            }
            if (callback) {
                this._onParsedObserver = this.onParsedObservable.add(callback);
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GLTFFileLoader.prototype, "onMeshLoaded", {
        /**
         * Callback raised when the loader creates a mesh after parsing the glTF properties of the mesh.
         * Note that the callback is called as soon as the mesh object is created, meaning some data may not have been setup yet for this mesh (vertex data, morph targets, material, ...)
         */
        set: function (callback) {
            if (this._onMeshLoadedObserver) {
                this.onMeshLoadedObservable.remove(this._onMeshLoadedObserver);
            }
            if (callback) {
                this._onMeshLoadedObserver = this.onMeshLoadedObservable.add(callback);
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GLTFFileLoader.prototype, "onSkinLoaded", {
        /**
         * Callback raised when the loader creates a skin after parsing the glTF properties of the skin node.
         * @see https://doc.babylonjs.com/features/featuresDeepDive/importers/glTF/glTFSkinning#ignoring-the-transform-of-the-skinned-mesh
         */
        set: function (callback) {
            if (this._onSkinLoadedObserver) {
                this.onSkinLoadedObservable.remove(this._onSkinLoadedObserver);
            }
            if (callback) {
                this._onSkinLoadedObserver = this.onSkinLoadedObservable.add(function (data) { return callback(data.node, data.skinnedNode); });
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GLTFFileLoader.prototype, "onTextureLoaded", {
        /**
         * Callback raised when the loader creates a texture after parsing the glTF properties of the texture.
         */
        set: function (callback) {
            if (this._onTextureLoadedObserver) {
                this.onTextureLoadedObservable.remove(this._onTextureLoadedObserver);
            }
            if (callback) {
                this._onTextureLoadedObserver = this.onTextureLoadedObservable.add(callback);
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GLTFFileLoader.prototype, "onMaterialLoaded", {
        /**
         * Callback raised when the loader creates a material after parsing the glTF properties of the material.
         */
        set: function (callback) {
            if (this._onMaterialLoadedObserver) {
                this.onMaterialLoadedObservable.remove(this._onMaterialLoadedObserver);
            }
            if (callback) {
                this._onMaterialLoadedObserver = this.onMaterialLoadedObservable.add(callback);
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GLTFFileLoader.prototype, "onCameraLoaded", {
        /**
         * Callback raised when the loader creates a camera after parsing the glTF properties of the camera.
         */
        set: function (callback) {
            if (this._onCameraLoadedObserver) {
                this.onCameraLoadedObservable.remove(this._onCameraLoadedObserver);
            }
            if (callback) {
                this._onCameraLoadedObserver = this.onCameraLoadedObservable.add(callback);
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GLTFFileLoader.prototype, "onComplete", {
        /**
         * Callback raised when the asset is completely loaded, immediately before the loader is disposed.
         * For assets with LODs, raised when all of the LODs are complete.
         * For assets without LODs, raised when the model is complete, immediately after the loader resolves the returned promise.
         */
        set: function (callback) {
            if (this._onCompleteObserver) {
                this.onCompleteObservable.remove(this._onCompleteObserver);
            }
            this._onCompleteObserver = this.onCompleteObservable.add(callback);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GLTFFileLoader.prototype, "onError", {
        /**
         * Callback raised when an error occurs.
         */
        set: function (callback) {
            if (this._onErrorObserver) {
                this.onErrorObservable.remove(this._onErrorObserver);
            }
            this._onErrorObserver = this.onErrorObservable.add(callback);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GLTFFileLoader.prototype, "onDispose", {
        /**
         * Callback raised after the loader is disposed.
         */
        set: function (callback) {
            if (this._onDisposeObserver) {
                this.onDisposeObservable.remove(this._onDisposeObserver);
            }
            this._onDisposeObserver = this.onDisposeObservable.add(callback);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GLTFFileLoader.prototype, "onExtensionLoaded", {
        /**
         * Callback raised after a loader extension is created.
         */
        set: function (callback) {
            if (this._onExtensionLoadedObserver) {
                this.onExtensionLoadedObservable.remove(this._onExtensionLoadedObserver);
            }
            this._onExtensionLoadedObserver = this.onExtensionLoadedObservable.add(callback);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GLTFFileLoader.prototype, "loggingEnabled", {
        /**
         * Defines if the loader logging is enabled.
         */
        get: function () {
            return this._loggingEnabled;
        },
        set: function (value) {
            if (this._loggingEnabled === value) {
                return;
            }
            this._loggingEnabled = value;
            if (this._loggingEnabled) {
                this._log = this._logEnabled;
            }
            else {
                this._log = this._logDisabled;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GLTFFileLoader.prototype, "capturePerformanceCounters", {
        /**
         * Defines if the loader should capture performance counters.
         */
        get: function () {
            return this._capturePerformanceCounters;
        },
        set: function (value) {
            if (this._capturePerformanceCounters === value) {
                return;
            }
            this._capturePerformanceCounters = value;
            if (this._capturePerformanceCounters) {
                this._startPerformanceCounter = this._startPerformanceCounterEnabled;
                this._endPerformanceCounter = this._endPerformanceCounterEnabled;
            }
            else {
                this._startPerformanceCounter = this._startPerformanceCounterDisabled;
                this._endPerformanceCounter = this._endPerformanceCounterDisabled;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GLTFFileLoader.prototype, "onValidated", {
        /**
         * Callback raised after a loader extension is created.
         */
        set: function (callback) {
            if (this._onValidatedObserver) {
                this.onValidatedObservable.remove(this._onValidatedObserver);
            }
            this._onValidatedObserver = this.onValidatedObservable.add(callback);
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Disposes the loader, releases resources during load, and cancels any outstanding requests.
     */
    GLTFFileLoader.prototype.dispose = function () {
        if (this._loader) {
            this._loader.dispose();
            this._loader = null;
        }
        for (var _i = 0, _a = this._requests; _i < _a.length; _i++) {
            var request = _a[_i];
            request.abort();
        }
        this._requests.length = 0;
        delete this._progressCallback;
        this.preprocessUrlAsync = function (url) { return Promise.resolve(url); };
        this.onMeshLoadedObservable.clear();
        this.onSkinLoadedObservable.clear();
        this.onTextureLoadedObservable.clear();
        this.onMaterialLoadedObservable.clear();
        this.onCameraLoadedObservable.clear();
        this.onCompleteObservable.clear();
        this.onExtensionLoadedObservable.clear();
        this.onDisposeObservable.notifyObservers(undefined);
        this.onDisposeObservable.clear();
    };
    /**
     * @internal
     */
    GLTFFileLoader.prototype.loadFile = function (scene, fileOrUrl, rootUrl, onSuccess, onProgress, useArrayBuffer, onError, name) {
        var _this = this;
        if (ArrayBuffer.isView(fileOrUrl)) {
            this._loadBinary(scene, fileOrUrl, rootUrl, onSuccess, onError, name);
            return null;
        }
        this._progressCallback = onProgress;
        var fileName = fileOrUrl.name || babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__.Tools.GetFilename(fileOrUrl);
        if (useArrayBuffer) {
            if (this.useRangeRequests) {
                if (this.validate) {
                    babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__.Logger.Warn("glTF validation is not supported when range requests are enabled");
                }
                var fileRequest_1 = {
                    abort: function () { },
                    onCompleteObservable: new babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__.Observable(),
                };
                var dataBuffer = {
                    readAsync: function (byteOffset, byteLength) {
                        return new Promise(function (resolve, reject) {
                            _this._loadFile(scene, fileOrUrl, function (data) {
                                resolve(new Uint8Array(data));
                            }, true, function (error) {
                                reject(error);
                            }, function (webRequest) {
                                webRequest.setRequestHeader("Range", "bytes=".concat(byteOffset, "-").concat(byteOffset + byteLength - 1));
                            });
                        });
                    },
                    byteLength: 0,
                };
                this._unpackBinaryAsync(new babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__.DataReader(dataBuffer)).then(function (loaderData) {
                    fileRequest_1.onCompleteObservable.notifyObservers(fileRequest_1);
                    onSuccess(loaderData);
                }, onError ? function (error) { return onError(undefined, error); } : undefined);
                return fileRequest_1;
            }
            return this._loadFile(scene, fileOrUrl, function (data) {
                _this._validate(scene, new Uint8Array(data, 0, data.byteLength), rootUrl, fileName);
                _this._unpackBinaryAsync(new babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__.DataReader({
                    readAsync: function (byteOffset, byteLength) { return readAsync(data, byteOffset, byteLength); },
                    byteLength: data.byteLength,
                })).then(function (loaderData) {
                    onSuccess(loaderData);
                }, onError ? function (error) { return onError(undefined, error); } : undefined);
            }, true, onError);
        }
        else {
            return this._loadFile(scene, fileOrUrl, function (data) {
                try {
                    _this._validate(scene, data, rootUrl, fileName);
                    onSuccess({ json: _this._parseJson(data) });
                }
                catch (_a) {
                    if (onError) {
                        onError();
                    }
                }
            }, false, onError);
        }
    };
    GLTFFileLoader.prototype._loadBinary = function (scene, data, rootUrl, onSuccess, onError, fileName) {
        this._validate(scene, new Uint8Array(data.buffer, data.byteOffset, data.byteLength), rootUrl, fileName);
        this._unpackBinaryAsync(new babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__.DataReader({
            readAsync: function (byteOffset, byteLength) { return readViewAsync(data, byteOffset, byteLength); },
            byteLength: data.byteLength,
        })).then(function (loaderData) {
            onSuccess(loaderData);
        }, onError ? function (error) { return onError(undefined, error); } : undefined);
    };
    /**
     * @internal
     */
    GLTFFileLoader.prototype.importMeshAsync = function (meshesNames, scene, data, rootUrl, onProgress, fileName) {
        var _this = this;
        return Promise.resolve().then(function () {
            _this.onParsedObservable.notifyObservers(data);
            _this.onParsedObservable.clear();
            _this._log("Loading ".concat(fileName || ""));
            _this._loader = _this._getLoader(data);
            return _this._loader.importMeshAsync(meshesNames, scene, null, data, rootUrl, onProgress, fileName);
        });
    };
    /**
     * @internal
     */
    GLTFFileLoader.prototype.loadAsync = function (scene, data, rootUrl, onProgress, fileName) {
        var _this = this;
        return Promise.resolve().then(function () {
            _this.onParsedObservable.notifyObservers(data);
            _this.onParsedObservable.clear();
            _this._log("Loading ".concat(fileName || ""));
            _this._loader = _this._getLoader(data);
            return _this._loader.loadAsync(scene, data, rootUrl, onProgress, fileName);
        });
    };
    /**
     * @internal
     */
    GLTFFileLoader.prototype.loadAssetContainerAsync = function (scene, data, rootUrl, onProgress, fileName) {
        var _this = this;
        return Promise.resolve().then(function () {
            _this.onParsedObservable.notifyObservers(data);
            _this.onParsedObservable.clear();
            _this._log("Loading ".concat(fileName || ""));
            _this._loader = _this._getLoader(data);
            // Prepare the asset container.
            var container = new babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__.AssetContainer(scene);
            // Get materials/textures when loading to add to container
            var materials = [];
            _this.onMaterialLoadedObservable.add(function (material) {
                materials.push(material);
            });
            var textures = [];
            _this.onTextureLoadedObservable.add(function (texture) {
                textures.push(texture);
            });
            var cameras = [];
            _this.onCameraLoadedObservable.add(function (camera) {
                cameras.push(camera);
            });
            var morphTargetManagers = [];
            _this.onMeshLoadedObservable.add(function (mesh) {
                if (mesh.morphTargetManager) {
                    morphTargetManagers.push(mesh.morphTargetManager);
                }
            });
            return _this._loader.importMeshAsync(null, scene, container, data, rootUrl, onProgress, fileName).then(function (result) {
                Array.prototype.push.apply(container.geometries, result.geometries);
                Array.prototype.push.apply(container.meshes, result.meshes);
                Array.prototype.push.apply(container.particleSystems, result.particleSystems);
                Array.prototype.push.apply(container.skeletons, result.skeletons);
                Array.prototype.push.apply(container.animationGroups, result.animationGroups);
                Array.prototype.push.apply(container.materials, materials);
                Array.prototype.push.apply(container.textures, textures);
                Array.prototype.push.apply(container.lights, result.lights);
                Array.prototype.push.apply(container.transformNodes, result.transformNodes);
                Array.prototype.push.apply(container.cameras, cameras);
                Array.prototype.push.apply(container.morphTargetManagers, morphTargetManagers);
                return container;
            });
        });
    };
    /**
     * @internal
     */
    GLTFFileLoader.prototype.canDirectLoad = function (data) {
        return _glTFFileLoader_metadata__WEBPACK_IMPORTED_MODULE_2__.GLTFFileLoaderMetadata.canDirectLoad(data);
    };
    /**
     * @internal
     */
    GLTFFileLoader.prototype.directLoad = function (scene, data) {
        if (data.startsWith("base64," + _glTFFileLoader_metadata__WEBPACK_IMPORTED_MODULE_2__.GLTFMagicBase64Encoded) || // this is technically incorrect, but will continue to support for backcompat.
            data.startsWith(";base64," + _glTFFileLoader_metadata__WEBPACK_IMPORTED_MODULE_2__.GLTFMagicBase64Encoded) ||
            data.startsWith("application/octet-stream;base64," + _glTFFileLoader_metadata__WEBPACK_IMPORTED_MODULE_2__.GLTFMagicBase64Encoded) ||
            data.startsWith("model/gltf-binary;base64," + _glTFFileLoader_metadata__WEBPACK_IMPORTED_MODULE_2__.GLTFMagicBase64Encoded)) {
            var arrayBuffer_1 = (0,babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__.DecodeBase64UrlToBinary)(data);
            this._validate(scene, new Uint8Array(arrayBuffer_1, 0, arrayBuffer_1.byteLength));
            return this._unpackBinaryAsync(new babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__.DataReader({
                readAsync: function (byteOffset, byteLength) { return readAsync(arrayBuffer_1, byteOffset, byteLength); },
                byteLength: arrayBuffer_1.byteLength,
            }));
        }
        this._validate(scene, data);
        return Promise.resolve({ json: this._parseJson(data) });
    };
    /** @internal */
    GLTFFileLoader.prototype.createPlugin = function (options) {
        return new GLTFFileLoader(options[_glTFFileLoader_metadata__WEBPACK_IMPORTED_MODULE_2__.GLTFFileLoaderMetadata.name]);
    };
    Object.defineProperty(GLTFFileLoader.prototype, "loaderState", {
        /**
         * The loader state or null if the loader is not active.
         */
        get: function () {
            return this._state;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Returns a promise that resolves when the asset is completely loaded.
     * @returns a promise that resolves when the asset is completely loaded.
     */
    GLTFFileLoader.prototype.whenCompleteAsync = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.onCompleteObservable.addOnce(function () {
                resolve();
            });
            _this.onErrorObservable.addOnce(function (reason) {
                reject(reason);
            });
        });
    };
    /**
     * @internal
     */
    GLTFFileLoader.prototype._setState = function (state) {
        if (this._state === state) {
            return;
        }
        this._state = state;
        this.onLoaderStateChangedObservable.notifyObservers(this._state);
        this._log(GLTFLoaderState[this._state]);
    };
    /**
     * @internal
     */
    GLTFFileLoader.prototype._loadFile = function (scene, fileOrUrl, onSuccess, useArrayBuffer, onError, onOpened) {
        var _this = this;
        var request = scene._loadFile(fileOrUrl, onSuccess, function (event) {
            _this._onProgress(event, request);
        }, true, useArrayBuffer, onError, onOpened);
        request.onCompleteObservable.add(function () {
            // Force the length computable to be true since we can guarantee the data is loaded.
            request._lengthComputable = true;
            request._total = request._loaded;
        });
        this._requests.push(request);
        return request;
    };
    GLTFFileLoader.prototype._onProgress = function (event, request) {
        if (!this._progressCallback) {
            return;
        }
        request._lengthComputable = event.lengthComputable;
        request._loaded = event.loaded;
        request._total = event.total;
        var lengthComputable = true;
        var loaded = 0;
        var total = 0;
        for (var _i = 0, _a = this._requests; _i < _a.length; _i++) {
            var request_1 = _a[_i];
            if (request_1._lengthComputable === undefined || request_1._loaded === undefined || request_1._total === undefined) {
                return;
            }
            lengthComputable = lengthComputable && request_1._lengthComputable;
            loaded += request_1._loaded;
            total += request_1._total;
        }
        this._progressCallback({
            lengthComputable: lengthComputable,
            loaded: loaded,
            total: lengthComputable ? total : 0,
        });
    };
    GLTFFileLoader.prototype._validate = function (scene, data, rootUrl, fileName) {
        var _this = this;
        if (rootUrl === void 0) { rootUrl = ""; }
        if (fileName === void 0) { fileName = ""; }
        if (!this.validate) {
            return;
        }
        this._startPerformanceCounter("Validate JSON");
        _glTFValidation__WEBPACK_IMPORTED_MODULE_1__.GLTFValidation.ValidateAsync(data, rootUrl, fileName, function (uri) {
            return _this.preprocessUrlAsync(rootUrl + uri).then(function (url) {
                return scene._loadFileAsync(url, undefined, true, true).then(function (data) {
                    return new Uint8Array(data, 0, data.byteLength);
                });
            });
        }).then(function (result) {
            _this._endPerformanceCounter("Validate JSON");
            _this.onValidatedObservable.notifyObservers(result);
            _this.onValidatedObservable.clear();
        }, function (reason) {
            _this._endPerformanceCounter("Validate JSON");
            babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__.Tools.Warn("Failed to validate: ".concat(reason.message));
            _this.onValidatedObservable.clear();
        });
    };
    GLTFFileLoader.prototype._getLoader = function (loaderData) {
        var asset = loaderData.json.asset || {};
        this._log("Asset version: ".concat(asset.version));
        asset.minVersion && this._log("Asset minimum version: ".concat(asset.minVersion));
        asset.generator && this._log("Asset generator: ".concat(asset.generator));
        var version = GLTFFileLoader._parseVersion(asset.version);
        if (!version) {
            throw new Error("Invalid version: " + asset.version);
        }
        if (asset.minVersion !== undefined) {
            var minVersion = GLTFFileLoader._parseVersion(asset.minVersion);
            if (!minVersion) {
                throw new Error("Invalid minimum version: " + asset.minVersion);
            }
            if (GLTFFileLoader._compareVersion(minVersion, { major: 2, minor: 0 }) > 0) {
                throw new Error("Incompatible minimum version: " + asset.minVersion);
            }
        }
        var createLoaders = {
            1: GLTFFileLoader._CreateGLTF1Loader,
            2: GLTFFileLoader._CreateGLTF2Loader,
        };
        var createLoader = createLoaders[version.major];
        if (!createLoader) {
            throw new Error("Unsupported version: " + asset.version);
        }
        return createLoader(this);
    };
    GLTFFileLoader.prototype._parseJson = function (json) {
        this._startPerformanceCounter("Parse JSON");
        this._log("JSON length: ".concat(json.length));
        var parsed = JSON.parse(json);
        this._endPerformanceCounter("Parse JSON");
        return parsed;
    };
    GLTFFileLoader.prototype._unpackBinaryAsync = function (dataReader) {
        var _this = this;
        this._startPerformanceCounter("Unpack Binary");
        // Read magic + version + length + json length + json format
        return dataReader.loadAsync(20).then(function () {
            var Binary = {
                Magic: 0x46546c67,
            };
            var magic = dataReader.readUint32();
            if (magic !== Binary.Magic) {
                throw new babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__.RuntimeError("Unexpected magic: " + magic, babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__.ErrorCodes.GLTFLoaderUnexpectedMagicError);
            }
            var version = dataReader.readUint32();
            if (_this.loggingEnabled) {
                _this._log("Binary version: ".concat(version));
            }
            var length = dataReader.readUint32();
            if (!_this.useRangeRequests && length !== dataReader.buffer.byteLength) {
                babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__.Logger.Warn("Length in header does not match actual data length: ".concat(length, " != ").concat(dataReader.buffer.byteLength));
            }
            var unpacked;
            switch (version) {
                case 1: {
                    unpacked = _this._unpackBinaryV1Async(dataReader, length);
                    break;
                }
                case 2: {
                    unpacked = _this._unpackBinaryV2Async(dataReader, length);
                    break;
                }
                default: {
                    throw new Error("Unsupported version: " + version);
                }
            }
            _this._endPerformanceCounter("Unpack Binary");
            return unpacked;
        });
    };
    GLTFFileLoader.prototype._unpackBinaryV1Async = function (dataReader, length) {
        var ContentFormat = {
            JSON: 0,
        };
        var contentLength = dataReader.readUint32();
        var contentFormat = dataReader.readUint32();
        if (contentFormat !== ContentFormat.JSON) {
            throw new Error("Unexpected content format: ".concat(contentFormat));
        }
        var bodyLength = length - dataReader.byteOffset;
        var data = { json: this._parseJson(dataReader.readString(contentLength)), bin: null };
        if (bodyLength !== 0) {
            var startByteOffset_1 = dataReader.byteOffset;
            data.bin = {
                readAsync: function (byteOffset, byteLength) { return dataReader.buffer.readAsync(startByteOffset_1 + byteOffset, byteLength); },
                byteLength: bodyLength,
            };
        }
        return Promise.resolve(data);
    };
    GLTFFileLoader.prototype._unpackBinaryV2Async = function (dataReader, length) {
        var _this = this;
        var ChunkFormat = {
            JSON: 0x4e4f534a,
            BIN: 0x004e4942,
        };
        // Read the JSON chunk header.
        var chunkLength = dataReader.readUint32();
        var chunkFormat = dataReader.readUint32();
        if (chunkFormat !== ChunkFormat.JSON) {
            throw new Error("First chunk format is not JSON");
        }
        // Bail if there are no other chunks.
        if (dataReader.byteOffset + chunkLength === length) {
            return dataReader.loadAsync(chunkLength).then(function () {
                return { json: _this._parseJson(dataReader.readString(chunkLength)), bin: null };
            });
        }
        // Read the JSON chunk and the length and type of the next chunk.
        return dataReader.loadAsync(chunkLength + 8).then(function () {
            var data = { json: _this._parseJson(dataReader.readString(chunkLength)), bin: null };
            var readAsync = function () {
                var chunkLength = dataReader.readUint32();
                var chunkFormat = dataReader.readUint32();
                switch (chunkFormat) {
                    case ChunkFormat.JSON: {
                        throw new Error("Unexpected JSON chunk");
                    }
                    case ChunkFormat.BIN: {
                        var startByteOffset_2 = dataReader.byteOffset;
                        data.bin = {
                            readAsync: function (byteOffset, byteLength) { return dataReader.buffer.readAsync(startByteOffset_2 + byteOffset, byteLength); },
                            byteLength: chunkLength,
                        };
                        dataReader.skipBytes(chunkLength);
                        break;
                    }
                    default: {
                        // ignore unrecognized chunkFormat
                        dataReader.skipBytes(chunkLength);
                        break;
                    }
                }
                if (dataReader.byteOffset !== length) {
                    return dataReader.loadAsync(8).then(readAsync);
                }
                return Promise.resolve(data);
            };
            return readAsync();
        });
    };
    GLTFFileLoader._parseVersion = function (version) {
        if (version === "1.0" || version === "1.0.1") {
            return {
                major: 1,
                minor: 0,
            };
        }
        var match = (version + "").match(/^(\d+)\.(\d+)/);
        if (!match) {
            return null;
        }
        return {
            major: parseInt(match[1]),
            minor: parseInt(match[2]),
        };
    };
    GLTFFileLoader._compareVersion = function (a, b) {
        if (a.major > b.major) {
            return 1;
        }
        if (a.major < b.major) {
            return -1;
        }
        if (a.minor > b.minor) {
            return 1;
        }
        if (a.minor < b.minor) {
            return -1;
        }
        return 0;
    };
    /**
     * @internal
     */
    GLTFFileLoader.prototype._logOpen = function (message) {
        this._log(message);
        this._logIndentLevel++;
    };
    /** @internal */
    GLTFFileLoader.prototype._logClose = function () {
        --this._logIndentLevel;
    };
    GLTFFileLoader.prototype._logEnabled = function (message) {
        var spaces = GLTFFileLoader._logSpaces.substring(0, this._logIndentLevel * 2);
        babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__.Logger.Log("".concat(spaces).concat(message));
    };
    GLTFFileLoader.prototype._logDisabled = function (message) { };
    GLTFFileLoader.prototype._startPerformanceCounterEnabled = function (counterName) {
        babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__.Tools.StartPerformanceCounter(counterName);
    };
    GLTFFileLoader.prototype._startPerformanceCounterDisabled = function (counterName) { };
    GLTFFileLoader.prototype._endPerformanceCounterEnabled = function (counterName) {
        babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__.Tools.EndPerformanceCounter(counterName);
    };
    GLTFFileLoader.prototype._endPerformanceCounterDisabled = function (counterName) { };
    // ------------------
    // End Common options
    // ------------------
    // ----------------
    // Begin V1 options
    // ----------------
    /**
     * Set this property to false to disable incremental loading which delays the loader from calling the success callback until after loading the meshes and shaders.
     * Textures always loads asynchronously. For example, the success callback can compute the bounding information of the loaded meshes when incremental loading is disabled.
     * Defaults to true.
     * @internal
     */
    GLTFFileLoader.IncrementalLoading = true;
    /**
     * Set this property to true in order to work with homogeneous coordinates, available with some converters and exporters.
     * Defaults to false. See https://en.wikipedia.org/wiki/Homogeneous_coordinates.
     * @internal
     */
    GLTFFileLoader.HomogeneousCoordinates = false;
    GLTFFileLoader._logSpaces = "                                ";
    return GLTFFileLoader;
}(GLTFLoaderOptions));
(0,babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__.registerSceneLoaderPlugin)(new GLTFFileLoader());


/***/ }),

/***/ "../../../dev/loaders/src/glTF/glTFValidation.ts":
/*!*******************************************************!*\
  !*** ../../../dev/loaders/src/glTF/glTFValidation.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GLTFValidation: () => (/* binding */ GLTFValidation)
/* harmony export */ });
/* harmony import */ var babylonjs_Misc_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs/Misc/tools */ "babylonjs/Misc/tools");
/* harmony import */ var babylonjs_Misc_tools__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Misc_tools__WEBPACK_IMPORTED_MODULE_0__);

function validateAsync(data, rootUrl, fileName, getExternalResource) {
    var options = {
        externalResourceFunction: getExternalResource,
    };
    if (fileName) {
        options.uri = rootUrl === "file:" ? fileName : rootUrl + fileName;
    }
    return ArrayBuffer.isView(data) ? GLTFValidator.validateBytes(data, options) : GLTFValidator.validateString(data, options);
}
/**
 * The worker function that gets converted to a blob url to pass into a worker.
 */
function workerFunc() {
    var pendingExternalResources = [];
    onmessage = function (message) {
        var data = message.data;
        switch (data.id) {
            case "init": {
                importScripts(data.url);
                break;
            }
            case "validate": {
                validateAsync(data.data, data.rootUrl, data.fileName, function (uri) {
                    return new Promise(function (resolve, reject) {
                        var index = pendingExternalResources.length;
                        pendingExternalResources.push({ resolve: resolve, reject: reject });
                        postMessage({ id: "getExternalResource", index: index, uri: uri });
                    });
                }).then(function (value) {
                    postMessage({ id: "validate.resolve", value: value });
                }, function (reason) {
                    postMessage({ id: "validate.reject", reason: reason });
                });
                break;
            }
            case "getExternalResource.resolve": {
                pendingExternalResources[data.index].resolve(data.value);
                break;
            }
            case "getExternalResource.reject": {
                pendingExternalResources[data.index].reject(data.reason);
                break;
            }
        }
    };
}
/**
 * glTF validation
 */
var GLTFValidation = /** @class */ (function () {
    function GLTFValidation() {
    }
    /**
     * Validate a glTF asset using the glTF-Validator.
     * @param data The JSON of a glTF or the array buffer of a binary glTF
     * @param rootUrl The root url for the glTF
     * @param fileName The file name for the glTF
     * @param getExternalResource The callback to get external resources for the glTF validator
     * @returns A promise that resolves with the glTF validation results once complete
     */
    GLTFValidation.ValidateAsync = function (data, rootUrl, fileName, getExternalResource) {
        var _this = this;
        if (typeof Worker === "function") {
            return new Promise(function (resolve, reject) {
                var workerContent = "".concat(validateAsync, "(").concat(workerFunc, ")()");
                var workerBlobUrl = URL.createObjectURL(new Blob([workerContent], { type: "application/javascript" }));
                var worker = new Worker(workerBlobUrl);
                var onError = function (error) {
                    worker.removeEventListener("error", onError);
                    worker.removeEventListener("message", onMessage);
                    reject(error);
                };
                var onMessage = function (message) {
                    var data = message.data;
                    switch (data.id) {
                        case "getExternalResource": {
                            getExternalResource(data.uri).then(function (value) {
                                worker.postMessage({ id: "getExternalResource.resolve", index: data.index, value: value }, [value.buffer]);
                            }, function (reason) {
                                worker.postMessage({ id: "getExternalResource.reject", index: data.index, reason: reason });
                            });
                            break;
                        }
                        case "validate.resolve": {
                            worker.removeEventListener("error", onError);
                            worker.removeEventListener("message", onMessage);
                            resolve(data.value);
                            worker.terminate();
                            break;
                        }
                        case "validate.reject": {
                            worker.removeEventListener("error", onError);
                            worker.removeEventListener("message", onMessage);
                            reject(data.reason);
                            worker.terminate();
                        }
                    }
                };
                worker.addEventListener("error", onError);
                worker.addEventListener("message", onMessage);
                worker.postMessage({ id: "init", url: babylonjs_Misc_tools__WEBPACK_IMPORTED_MODULE_0__.Tools.GetBabylonScriptURL(_this.Configuration.url) });
                if (ArrayBuffer.isView(data)) {
                    // Slice the data to avoid copying the whole array buffer.
                    var slicedData = data.slice();
                    worker.postMessage({ id: "validate", data: slicedData, rootUrl: rootUrl, fileName: fileName }, [slicedData.buffer]);
                }
                else {
                    worker.postMessage({ id: "validate", data: data, rootUrl: rootUrl, fileName: fileName });
                }
            });
        }
        else {
            if (!this._LoadScriptPromise) {
                this._LoadScriptPromise = babylonjs_Misc_tools__WEBPACK_IMPORTED_MODULE_0__.Tools.LoadBabylonScriptAsync(this.Configuration.url);
            }
            return this._LoadScriptPromise.then(function () {
                return validateAsync(data, rootUrl, fileName, getExternalResource);
            });
        }
    };
    /**
     * The configuration. Defaults to `{ url: "https://cdn.babylonjs.com/gltf_validator.js" }`.
     */
    GLTFValidation.Configuration = {
        url: "".concat(babylonjs_Misc_tools__WEBPACK_IMPORTED_MODULE_0__.Tools._DefaultCdnUrl, "/gltf_validator.js"),
    };
    return GLTFValidation;
}());


/***/ }),

/***/ "../../../lts/loaders/src/legacy/legacy-glTF.ts":
/*!******************************************************!*\
  !*** ../../../lts/loaders/src/legacy/legacy-glTF.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GLTFFileLoader: () => (/* reexport safe */ loaders_glTF_glTFFileLoader__WEBPACK_IMPORTED_MODULE_0__.GLTFFileLoader),
/* harmony export */   GLTFLoaderAnimationStartMode: () => (/* reexport safe */ loaders_glTF_glTFFileLoader__WEBPACK_IMPORTED_MODULE_0__.GLTFLoaderAnimationStartMode),
/* harmony export */   GLTFLoaderCoordinateSystemMode: () => (/* reexport safe */ loaders_glTF_glTFFileLoader__WEBPACK_IMPORTED_MODULE_0__.GLTFLoaderCoordinateSystemMode),
/* harmony export */   GLTFLoaderState: () => (/* reexport safe */ loaders_glTF_glTFFileLoader__WEBPACK_IMPORTED_MODULE_0__.GLTFLoaderState),
/* harmony export */   GLTFValidation: () => (/* reexport safe */ loaders_glTF_glTFValidation__WEBPACK_IMPORTED_MODULE_1__.GLTFValidation)
/* harmony export */ });
/* harmony import */ var loaders_glTF_glTFFileLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! loaders/glTF/glTFFileLoader */ "../../../dev/loaders/src/glTF/glTFFileLoader.ts");
/* harmony import */ var loaders_glTF_glTFValidation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! loaders/glTF/glTFValidation */ "../../../dev/loaders/src/glTF/glTFValidation.ts");


/**
 * This is the entry point for the UMD module.
 * The entry point for a future ESM package should be index.ts
 */
var globalObject = typeof __webpack_require__.g !== "undefined" ? __webpack_require__.g : typeof window !== "undefined" ? window : undefined;
if (typeof globalObject !== "undefined") {
    globalObject.BABYLON = globalObject.BABYLON || {};
    for (var key in loaders_glTF_glTFFileLoader__WEBPACK_IMPORTED_MODULE_0__) {
        globalObject.BABYLON[key] = loaders_glTF_glTFFileLoader__WEBPACK_IMPORTED_MODULE_0__[key];
    }
    for (var key in loaders_glTF_glTFValidation__WEBPACK_IMPORTED_MODULE_1__) {
        globalObject.BABYLON[key] = loaders_glTF_glTFValidation__WEBPACK_IMPORTED_MODULE_1__[key];
    }
}




/***/ }),

/***/ "../../../lts/loaders/src/legacy/legacy-glTF1.ts":
/*!*******************************************************!*\
  !*** ../../../lts/loaders/src/legacy/legacy-glTF1.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GLTF1: () => (/* reexport module object */ loaders_glTF_1_0_index__WEBPACK_IMPORTED_MODULE_0__)
/* harmony export */ });
/* harmony import */ var loaders_glTF_1_0_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! loaders/glTF/1.0/index */ "../../../dev/loaders/src/glTF/1.0/index.ts");
/* eslint-disable import/no-internal-modules */

/**
 * This is the entry point for the UMD module.
 * The entry point for a future ESM package should be index.ts
 */
var globalObject = typeof __webpack_require__.g !== "undefined" ? __webpack_require__.g : typeof window !== "undefined" ? window : undefined;
if (typeof globalObject !== "undefined") {
    globalObject.BABYLON = globalObject.BABYLON || {};
    globalObject.BABYLON.GLTF1 = globalObject.BABYLON.GLTF1 || {};
    for (var key in loaders_glTF_1_0_index__WEBPACK_IMPORTED_MODULE_0__) {
        globalObject.BABYLON.GLTF1[key] = loaders_glTF_1_0_index__WEBPACK_IMPORTED_MODULE_0__[key];
    }
}



/***/ }),

/***/ "../../../lts/loaders/src/legacy/legacy-glTF1FileLoader.ts":
/*!*****************************************************************!*\
  !*** ../../../lts/loaders/src/legacy/legacy-glTF1FileLoader.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GLTF1: () => (/* reexport safe */ _legacy_glTF1__WEBPACK_IMPORTED_MODULE_1__.GLTF1),
/* harmony export */   GLTFFileLoader: () => (/* reexport safe */ _legacy_glTF__WEBPACK_IMPORTED_MODULE_0__.GLTFFileLoader),
/* harmony export */   GLTFLoaderAnimationStartMode: () => (/* reexport safe */ _legacy_glTF__WEBPACK_IMPORTED_MODULE_0__.GLTFLoaderAnimationStartMode),
/* harmony export */   GLTFLoaderCoordinateSystemMode: () => (/* reexport safe */ _legacy_glTF__WEBPACK_IMPORTED_MODULE_0__.GLTFLoaderCoordinateSystemMode),
/* harmony export */   GLTFLoaderState: () => (/* reexport safe */ _legacy_glTF__WEBPACK_IMPORTED_MODULE_0__.GLTFLoaderState),
/* harmony export */   GLTFValidation: () => (/* reexport safe */ _legacy_glTF__WEBPACK_IMPORTED_MODULE_0__.GLTFValidation)
/* harmony export */ });
/* harmony import */ var _legacy_glTF__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./legacy-glTF */ "../../../lts/loaders/src/legacy/legacy-glTF.ts");
/* harmony import */ var _legacy_glTF1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./legacy-glTF1 */ "../../../lts/loaders/src/legacy/legacy-glTF1.ts");
// eslint-disable-next-line import/export




/***/ }),

/***/ "babylonjs/Misc/tools":
/*!****************************************************************************************************!*\
  !*** external {"root":"BABYLON","commonjs":"babylonjs","commonjs2":"babylonjs","amd":"babylonjs"} ***!
  \****************************************************************************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_babylonjs_Misc_tools__;

/***/ }),

/***/ "../../../../node_modules/tslib/tslib.es6.mjs":
/*!****************************************************!*\
  !*** ../../../../node_modules/tslib/tslib.es6.mjs ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __addDisposableResource: () => (/* binding */ __addDisposableResource),
/* harmony export */   __assign: () => (/* binding */ __assign),
/* harmony export */   __asyncDelegator: () => (/* binding */ __asyncDelegator),
/* harmony export */   __asyncGenerator: () => (/* binding */ __asyncGenerator),
/* harmony export */   __asyncValues: () => (/* binding */ __asyncValues),
/* harmony export */   __await: () => (/* binding */ __await),
/* harmony export */   __awaiter: () => (/* binding */ __awaiter),
/* harmony export */   __classPrivateFieldGet: () => (/* binding */ __classPrivateFieldGet),
/* harmony export */   __classPrivateFieldIn: () => (/* binding */ __classPrivateFieldIn),
/* harmony export */   __classPrivateFieldSet: () => (/* binding */ __classPrivateFieldSet),
/* harmony export */   __createBinding: () => (/* binding */ __createBinding),
/* harmony export */   __decorate: () => (/* binding */ __decorate),
/* harmony export */   __disposeResources: () => (/* binding */ __disposeResources),
/* harmony export */   __esDecorate: () => (/* binding */ __esDecorate),
/* harmony export */   __exportStar: () => (/* binding */ __exportStar),
/* harmony export */   __extends: () => (/* binding */ __extends),
/* harmony export */   __generator: () => (/* binding */ __generator),
/* harmony export */   __importDefault: () => (/* binding */ __importDefault),
/* harmony export */   __importStar: () => (/* binding */ __importStar),
/* harmony export */   __makeTemplateObject: () => (/* binding */ __makeTemplateObject),
/* harmony export */   __metadata: () => (/* binding */ __metadata),
/* harmony export */   __param: () => (/* binding */ __param),
/* harmony export */   __propKey: () => (/* binding */ __propKey),
/* harmony export */   __read: () => (/* binding */ __read),
/* harmony export */   __rest: () => (/* binding */ __rest),
/* harmony export */   __rewriteRelativeImportExtension: () => (/* binding */ __rewriteRelativeImportExtension),
/* harmony export */   __runInitializers: () => (/* binding */ __runInitializers),
/* harmony export */   __setFunctionName: () => (/* binding */ __setFunctionName),
/* harmony export */   __spread: () => (/* binding */ __spread),
/* harmony export */   __spreadArray: () => (/* binding */ __spreadArray),
/* harmony export */   __spreadArrays: () => (/* binding */ __spreadArrays),
/* harmony export */   __values: () => (/* binding */ __values),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */

var extendStatics = function(d, b) {
  extendStatics = Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
      function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
  return extendStatics(d, b);
};

function __extends(d, b) {
  if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);
  function __() { this.constructor = d; }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
  __assign = Object.assign || function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
      return t;
  }
  return __assign.apply(this, arguments);
}

function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
              t[p[i]] = s[p[i]];
      }
  return t;
}

function __decorate(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
  return function (target, key) { decorator(target, key, paramIndex); }
}

function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
      var context = {};
      for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
      for (var p in contextIn.access) context.access[p] = contextIn.access[p];
      context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
      var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
      if (kind === "accessor") {
          if (result === void 0) continue;
          if (result === null || typeof result !== "object") throw new TypeError("Object expected");
          if (_ = accept(result.get)) descriptor.get = _;
          if (_ = accept(result.set)) descriptor.set = _;
          if (_ = accept(result.init)) initializers.unshift(_);
      }
      else if (_ = accept(result)) {
          if (kind === "field") initializers.unshift(_);
          else descriptor[key] = _;
      }
  }
  if (target) Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
};

function __runInitializers(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
      value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
};

function __propKey(x) {
  return typeof x === "symbol" ? x : "".concat(x);
};

function __setFunctionName(f, name, prefix) {
  if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
  return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};

function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
  return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
      function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
      function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}

function __generator(thisArg, body) {
  var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
  return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
  function verb(n) { return function (v) { return step([n, v]); }; }
  function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (g && (g = 0, op[0] && (_ = 0)), _) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];
          switch (op[0]) {
              case 0: case 1: t = op; break;
              case 4: _.label++; return { value: op[1], done: false };
              case 5: _.label++; y = op[1]; op = [0]; continue;
              case 7: op = _.ops.pop(); _.trys.pop(); continue;
              default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                  if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                  if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                  if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                  if (t[2]) _.ops.pop();
                  _.trys.pop(); continue;
          }
          op = body.call(thisArg, _);
      } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
      if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
  }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
  }
  Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

function __exportStar(m, o) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
      next: function () {
          if (o && i >= o.length) o = void 0;
          return { value: o && o[i++], done: !o };
      }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o), r, ar = [], e;
  try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  }
  catch (error) { e = { error: error }; }
  finally {
      try {
          if (r && !r.done && (m = i["return"])) m.call(i);
      }
      finally { if (e) throw e.error; }
  }
  return ar;
}

/** @deprecated */
function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++)
      ar = ar.concat(__read(arguments[i]));
  return ar;
}

/** @deprecated */
function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
  for (var r = Array(s), k = 0, i = 0; i < il; i++)
      for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
          r[k] = a[j];
  return r;
}

function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
      }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []), i, q = [];
  return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function () { return this; }, i;
  function awaitReturn(f) { return function (v) { return Promise.resolve(v).then(f, reject); }; }
  function verb(n, f) { if (g[n]) { i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; if (f) i[n] = f(i[n]); } }
  function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
  function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
  function fulfill(value) { resume("next", value); }
  function reject(value) { resume("throw", value); }
  function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
  function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator], i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
  function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
  function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
  return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
  Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
  o["default"] = v;
};

function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  __setModuleDefault(result, mod);
  return result;
}

function __importDefault(mod) {
  return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

function __classPrivateFieldIn(state, receiver) {
  if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof state === "function" ? receiver === state : state.has(receiver);
}

function __addDisposableResource(env, value, async) {
  if (value !== null && value !== void 0) {
    if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
    var dispose, inner;
    if (async) {
      if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
      dispose = value[Symbol.asyncDispose];
    }
    if (dispose === void 0) {
      if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
      dispose = value[Symbol.dispose];
      if (async) inner = dispose;
    }
    if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
    if (inner) dispose = function() { try { inner.call(this); } catch (e) { return Promise.reject(e); } };
    env.stack.push({ value: value, dispose: dispose, async: async });
  }
  else if (async) {
    env.stack.push({ async: true });
  }
  return value;
}

var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

function __disposeResources(env) {
  function fail(e) {
    env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
    env.hasError = true;
  }
  var r, s = 0;
  function next() {
    while (r = env.stack.pop()) {
      try {
        if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
        if (r.dispose) {
          var result = r.dispose.call(r.value);
          if (r.async) return s |= 2, Promise.resolve(result).then(next, function(e) { fail(e); return next(); });
        }
        else s |= 1;
      }
      catch (e) {
        fail(e);
      }
    }
    if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
    if (env.hasError) throw env.error;
  }
  return next();
}

function __rewriteRelativeImportExtension(path, preserveJsx) {
  if (typeof path === "string" && /^\.\.?\//.test(path)) {
      return path.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function (m, tsx, d, ext, cm) {
          return tsx ? preserveJsx ? ".jsx" : ".js" : d && (!ext || !cm) ? m : (d + ext + "." + cm.toLowerCase() + "js");
      });
  }
  return path;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __extends,
  __assign,
  __rest,
  __decorate,
  __param,
  __esDecorate,
  __runInitializers,
  __propKey,
  __setFunctionName,
  __metadata,
  __awaiter,
  __generator,
  __createBinding,
  __exportStar,
  __values,
  __read,
  __spread,
  __spreadArrays,
  __spreadArray,
  __await,
  __asyncGenerator,
  __asyncDelegator,
  __asyncValues,
  __makeTemplateObject,
  __importStar,
  __importDefault,
  __classPrivateFieldGet,
  __classPrivateFieldSet,
  __classPrivateFieldIn,
  __addDisposableResource,
  __disposeResources,
  __rewriteRelativeImportExtension,
});


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************************!*\
  !*** ./src/glTF1FileLoader.ts ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   loaders: () => (/* reexport module object */ _lts_loaders_legacy_legacy_glTF1FileLoader__WEBPACK_IMPORTED_MODULE_0__)
/* harmony export */ });
/* harmony import */ var _lts_loaders_legacy_legacy_glTF1FileLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lts/loaders/legacy/legacy-glTF1FileLoader */ "../../../lts/loaders/src/legacy/legacy-glTF1FileLoader.ts");
// eslint-disable-next-line import/export


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_lts_loaders_legacy_legacy_glTF1FileLoader__WEBPACK_IMPORTED_MODULE_0__);

})();

__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFieWxvbi5nbFRGMUZpbGVMb2FkZXIuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZBO0FBQ0E7QUFJQTtBQUlBO0FBYUE7OztBQUdBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1REE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFHQTs7O0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQVVBO0FBUkE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7Ozs7O0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7Ozs7O0FBTUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7O0FBU0E7QUFDQTtBQVNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7Ozs7OztBQU9BO0FBQ0E7QUFPQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFyQ0E7O0FBRUE7QUFDQTtBQUFBO0FBbUNBO0FBQ0E7QUFFQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7O0FBU0E7QUFDQTtBQVFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUFBO0FBd2FBO0FBdmFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQU9BO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOztBQUVBOzs7O0FBSUE7QUFDQTtBQUFBO0FBMFRBO0FBdlRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQVVBO0FBRUE7QUFLQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFFQTs7Ozs7Ozs7O0FBU0E7QUFDQTtBQUFBO0FBUUE7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFRQTtBQUVBO0FBS0E7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFHQTtBQUVBOzs7Ozs7O0FBT0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBeFRBO0FBeVRBO0FBQUE7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7OztBQUFBO0FBRUE7Ozs7Ozs7OztBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7QUFTQTtBQUNBO0FBT0E7QUFDQTtBQUVBOzs7Ozs7OztBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7OztBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7O0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBT0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBT0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFNQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQU9BO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6d0VBOzs7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwR0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7Ozs7QUFJQTtBQUNBO0FBQUE7QUFtUUE7QUFsUUE7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQU9BO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwUkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF3REE7OztBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkJBO0FBQ0E7QUFNQTtBQUNBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBeUJBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFBQTtBQUNBOztBQUVBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBc0NBOztBQUVBO0FBQ0E7QUFBQTtBQUNBOztBQUVBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBMEJBO0FBQUE7QUE0Q0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFFQTs7OztBQUlBO0FBQ0E7QUFtQ0E7O0FBRUE7QUFDQTtBQVFBO0FBeE1BO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF3S0E7QUFBQTtBQUVBOztBQUVBO0FBQ0E7QUFBQTtBQU9BOzs7QUFHQTtBQUNBO0FBQUE7QUFLQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBdUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBaUJBOzs7OztBQUtBO0FBQ0E7QUFpQkE7O0FBRUE7QUFDQTtBQWdCQTs7QUFFQTtBQUNBO0FBZ0JBOztBQUVBO0FBQ0E7QUFnQkE7Ozs7QUFJQTtBQUNBO0FBZ0JBOztBQUVBO0FBQ0E7QUFjQTs7QUFFQTtBQUNBO0FBY0E7OztBQUdBO0FBQ0E7QUEwREE7O0FBRUE7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFjQTtBQUNBO0FBRUE7QUFFQTs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQWtUQTs7QUFFQTtBQUNBO0FBdVVBO0FBQ0E7QUFFQTtBQUNBO0FBc0JBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUE1OEJBOztBQUNBO0FBZ0JBO0FBSEE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQXlDQTtBQUpBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBZ0JBO0FBSkE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFZQTtBQUhBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFZQTtBQUhBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFZQTtBQUhBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFnQkE7QUFMQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQVlBO0FBSEE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBWUE7QUFIQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFhQTtBQUhBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQUtBO0FBSEE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQWRBO0FBbUJBO0FBSEE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFoQkE7QUFpQ0E7QUFIQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFlQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUFBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUVBO0FBSUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFHQTtBQUlBO0FBQUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUVBO0FBUUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFHQTtBQUVBOztBQUVBO0FBQ0E7QUFBQTtBQVFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUFBO0FBT0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFIQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFPQTs7O0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUFBO0FBUUE7QUFJQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFTQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBVUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQTk3QkE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7Ozs7O0FBS0E7QUFDQTtBQUVBOzs7O0FBSUE7QUFDQTtBQTQzQkE7QUE4Q0E7QUFBQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2ozQ0E7QUFTQTtBQU1BO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWUE7O0FBRUE7QUFDQTtBQUFBO0FBeUZBO0FBL0VBOzs7Ozs7O0FBT0E7QUFDQTtBQUFBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF2RkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFtRkE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0tBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQkE7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDRkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDdllBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vTE9BREVSUy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vTE9BREVSUy8uLi8uLi8uLi9kZXYvbG9hZGVycy9zcmMvZ2xURi8xLjAvZ2xURkJpbmFyeUV4dGVuc2lvbi50cyIsIndlYnBhY2s6Ly9MT0FERVJTLy4uLy4uLy4uL2Rldi9sb2FkZXJzL3NyYy9nbFRGLzEuMC9nbFRGTG9hZGVyLnRzIiwid2VicGFjazovL0xPQURFUlMvLi4vLi4vLi4vZGV2L2xvYWRlcnMvc3JjL2dsVEYvMS4wL2dsVEZMb2FkZXJJbnRlcmZhY2VzLnRzIiwid2VicGFjazovL0xPQURFUlMvLi4vLi4vLi4vZGV2L2xvYWRlcnMvc3JjL2dsVEYvMS4wL2dsVEZMb2FkZXJVdGlscy50cyIsIndlYnBhY2s6Ly9MT0FERVJTLy4uLy4uLy4uL2Rldi9sb2FkZXJzL3NyYy9nbFRGLzEuMC9nbFRGTWF0ZXJpYWxzQ29tbW9uRXh0ZW5zaW9uLnRzIiwid2VicGFjazovL0xPQURFUlMvLi4vLi4vLi4vZGV2L2xvYWRlcnMvc3JjL2dsVEYvMS4wL2luZGV4LnRzIiwid2VicGFjazovL0xPQURFUlMvLi4vLi4vLi4vZGV2L2xvYWRlcnMvc3JjL2dsVEYvZ2xURkZpbGVMb2FkZXIubWV0YWRhdGEudHMiLCJ3ZWJwYWNrOi8vTE9BREVSUy8uLi8uLi8uLi9kZXYvbG9hZGVycy9zcmMvZ2xURi9nbFRGRmlsZUxvYWRlci50cyIsIndlYnBhY2s6Ly9MT0FERVJTLy4uLy4uLy4uL2Rldi9sb2FkZXJzL3NyYy9nbFRGL2dsVEZWYWxpZGF0aW9uLnRzIiwid2VicGFjazovL0xPQURFUlMvLi4vLi4vLi4vbHRzL2xvYWRlcnMvc3JjL2xlZ2FjeS9sZWdhY3ktZ2xURi50cyIsIndlYnBhY2s6Ly9MT0FERVJTLy4uLy4uLy4uL2x0cy9sb2FkZXJzL3NyYy9sZWdhY3kvbGVnYWN5LWdsVEYxLnRzIiwid2VicGFjazovL0xPQURFUlMvLi4vLi4vLi4vbHRzL2xvYWRlcnMvc3JjL2xlZ2FjeS9sZWdhY3ktZ2xURjFGaWxlTG9hZGVyLnRzIiwid2VicGFjazovL0xPQURFUlMvZXh0ZXJuYWwgdW1kIHtcInJvb3RcIjpcIkJBQllMT05cIixcImNvbW1vbmpzXCI6XCJiYWJ5bG9uanNcIixcImNvbW1vbmpzMlwiOlwiYmFieWxvbmpzXCIsXCJhbWRcIjpcImJhYnlsb25qc1wifSIsIndlYnBhY2s6Ly9MT0FERVJTLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy90c2xpYi90c2xpYi5lczYubWpzIiwid2VicGFjazovL0xPQURFUlMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vTE9BREVSUy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9MT0FERVJTL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9MT0FERVJTL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vTE9BREVSUy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL0xPQURFUlMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9MT0FERVJTLy4vc3JjL2dsVEYxRmlsZUxvYWRlci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJiYWJ5bG9uanNcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJiYWJ5bG9uanMtbG9hZGVyc1wiLCBbXCJiYWJ5bG9uanNcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiYmFieWxvbmpzLWxvYWRlcnNcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJiYWJ5bG9uanNcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkxPQURFUlNcIl0gPSBmYWN0b3J5KHJvb3RbXCJCQUJZTE9OXCJdKTtcbn0pKCh0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsIDogdGhpcyksIChfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2JhYnlsb25qc19NaXNjX3Rvb2xzX18pID0+IHtcbnJldHVybiAiLCJpbXBvcnQgeyBHTFRGTG9hZGVyRXh0ZW5zaW9uLCBHTFRGTG9hZGVyLCBHTFRGTG9hZGVyQmFzZSB9IGZyb20gXCIuL2dsVEZMb2FkZXJcIjtcclxuaW1wb3J0IHsgR0xURlV0aWxzIH0gZnJvbSBcIi4vZ2xURkxvYWRlclV0aWxzXCI7XHJcbmltcG9ydCB0eXBlIHsgU2NlbmUgfSBmcm9tIFwiY29yZS9zY2VuZVwiO1xyXG5pbXBvcnQgdHlwZSB7IElHTFRGTG9hZGVyRGF0YSB9IGZyb20gXCIuLi9nbFRGRmlsZUxvYWRlclwiO1xyXG5pbXBvcnQgdHlwZSB7IElHTFRGUnVudGltZSwgSUdMVEZUZXh0dXJlLCBJR0xURkltYWdlLCBJR0xURkJ1ZmZlclZpZXcsIElHTFRGU2hhZGVyIH0gZnJvbSBcIi4vZ2xURkxvYWRlckludGVyZmFjZXNcIjtcclxuaW1wb3J0IHsgRUNvbXBvbmVudFR5cGUgfSBmcm9tIFwiLi9nbFRGTG9hZGVySW50ZXJmYWNlc1wiO1xyXG5cclxuaW1wb3J0IHR5cGUgeyBJRGF0YUJ1ZmZlciB9IGZyb20gXCJjb3JlL01pc2MvZGF0YVJlYWRlclwiO1xyXG5cclxuY29uc3QgQmluYXJ5RXh0ZW5zaW9uQnVmZmVyTmFtZSA9IFwiYmluYXJ5X2dsVEZcIjtcclxuXHJcbmludGVyZmFjZSBJR0xURkJpbmFyeUV4dGVuc2lvblNoYWRlciB7XHJcbiAgICBidWZmZXJWaWV3OiBzdHJpbmc7XHJcbn1cclxuXHJcbmludGVyZmFjZSBJR0xURkJpbmFyeUV4dGVuc2lvbkltYWdlIHtcclxuICAgIGJ1ZmZlclZpZXc6IHN0cmluZztcclxuICAgIG1pbWVUeXBlOiBzdHJpbmc7XHJcbiAgICBoZWlnaHQ6IG51bWJlcjtcclxuICAgIHdpZHRoOiBudW1iZXI7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAaW50ZXJuYWxcclxuICogQGRlcHJlY2F0ZWRcclxuICovXHJcbmV4cG9ydCBjbGFzcyBHTFRGQmluYXJ5RXh0ZW5zaW9uIGV4dGVuZHMgR0xURkxvYWRlckV4dGVuc2lvbiB7XHJcbiAgICBwcml2YXRlIF9iaW46IElEYXRhQnVmZmVyO1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcihcIktIUl9iaW5hcnlfZ2xURlwiKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb3ZlcnJpZGUgbG9hZFJ1bnRpbWVBc3luYyhzY2VuZTogU2NlbmUsIGRhdGE6IElHTFRGTG9hZGVyRGF0YSwgcm9vdFVybDogc3RyaW5nLCBvblN1Y2Nlc3M6IChnbHRmUnVudGltZTogSUdMVEZSdW50aW1lKSA9PiB2b2lkKTogYm9vbGVhbiB7XHJcbiAgICAgICAgY29uc3QgZXh0ZW5zaW9uc1VzZWQgPSAoPGFueT5kYXRhLmpzb24pLmV4dGVuc2lvbnNVc2VkO1xyXG4gICAgICAgIGlmICghZXh0ZW5zaW9uc1VzZWQgfHwgZXh0ZW5zaW9uc1VzZWQuaW5kZXhPZih0aGlzLm5hbWUpID09PSAtMSB8fCAhZGF0YS5iaW4pIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fYmluID0gZGF0YS5iaW47XHJcbiAgICAgICAgb25TdWNjZXNzKEdMVEZMb2FkZXJCYXNlLkNyZWF0ZVJ1bnRpbWUoZGF0YS5qc29uLCBzY2VuZSwgcm9vdFVybCkpO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvdmVycmlkZSBsb2FkQnVmZmVyQXN5bmMoZ2x0ZlJ1bnRpbWU6IElHTFRGUnVudGltZSwgaWQ6IHN0cmluZywgb25TdWNjZXNzOiAoYnVmZmVyOiBBcnJheUJ1ZmZlclZpZXcpID0+IHZvaWQsIG9uRXJyb3I6IChtZXNzYWdlOiBzdHJpbmcpID0+IHZvaWQpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAoZ2x0ZlJ1bnRpbWUuZXh0ZW5zaW9uc1VzZWQuaW5kZXhPZih0aGlzLm5hbWUpID09PSAtMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoaWQgIT09IEJpbmFyeUV4dGVuc2lvbkJ1ZmZlck5hbWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fYmluLnJlYWRBc3luYygwLCB0aGlzLl9iaW4uYnl0ZUxlbmd0aCkudGhlbihvblN1Y2Nlc3MsIChlcnJvcikgPT4gb25FcnJvcihlcnJvci5tZXNzYWdlKSk7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG92ZXJyaWRlIGxvYWRUZXh0dXJlQnVmZmVyQXN5bmMoZ2x0ZlJ1bnRpbWU6IElHTFRGUnVudGltZSwgaWQ6IHN0cmluZywgb25TdWNjZXNzOiAoYnVmZmVyOiBBcnJheUJ1ZmZlclZpZXcpID0+IHZvaWQpOiBib29sZWFuIHtcclxuICAgICAgICBjb25zdCB0ZXh0dXJlOiBJR0xURlRleHR1cmUgPSBnbHRmUnVudGltZS50ZXh0dXJlc1tpZF07XHJcbiAgICAgICAgY29uc3Qgc291cmNlOiBJR0xURkltYWdlID0gZ2x0ZlJ1bnRpbWUuaW1hZ2VzW3RleHR1cmUuc291cmNlXTtcclxuICAgICAgICBpZiAoIXNvdXJjZS5leHRlbnNpb25zIHx8ICEodGhpcy5uYW1lIGluIHNvdXJjZS5leHRlbnNpb25zKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBzb3VyY2VFeHQ6IElHTFRGQmluYXJ5RXh0ZW5zaW9uSW1hZ2UgPSBzb3VyY2UuZXh0ZW5zaW9uc1t0aGlzLm5hbWVdO1xyXG4gICAgICAgIGNvbnN0IGJ1ZmZlclZpZXc6IElHTFRGQnVmZmVyVmlldyA9IGdsdGZSdW50aW1lLmJ1ZmZlclZpZXdzW3NvdXJjZUV4dC5idWZmZXJWaWV3XTtcclxuICAgICAgICBjb25zdCBidWZmZXIgPSBHTFRGVXRpbHMuR2V0QnVmZmVyRnJvbUJ1ZmZlclZpZXcoZ2x0ZlJ1bnRpbWUsIGJ1ZmZlclZpZXcsIDAsIGJ1ZmZlclZpZXcuYnl0ZUxlbmd0aCwgRUNvbXBvbmVudFR5cGUuVU5TSUdORURfQllURSk7XHJcbiAgICAgICAgb25TdWNjZXNzKGJ1ZmZlcik7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG92ZXJyaWRlIGxvYWRTaGFkZXJTdHJpbmdBc3luYyhnbHRmUnVudGltZTogSUdMVEZSdW50aW1lLCBpZDogc3RyaW5nLCBvblN1Y2Nlc3M6IChzaGFkZXJTdHJpbmc6IHN0cmluZykgPT4gdm9pZCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGNvbnN0IHNoYWRlcjogSUdMVEZTaGFkZXIgPSBnbHRmUnVudGltZS5zaGFkZXJzW2lkXTtcclxuICAgICAgICBpZiAoIXNoYWRlci5leHRlbnNpb25zIHx8ICEodGhpcy5uYW1lIGluIHNoYWRlci5leHRlbnNpb25zKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBiaW5hcnlFeHRlbnNpb25TaGFkZXI6IElHTFRGQmluYXJ5RXh0ZW5zaW9uU2hhZGVyID0gc2hhZGVyLmV4dGVuc2lvbnNbdGhpcy5uYW1lXTtcclxuICAgICAgICBjb25zdCBidWZmZXJWaWV3OiBJR0xURkJ1ZmZlclZpZXcgPSBnbHRmUnVudGltZS5idWZmZXJWaWV3c1tiaW5hcnlFeHRlbnNpb25TaGFkZXIuYnVmZmVyVmlld107XHJcbiAgICAgICAgY29uc3Qgc2hhZGVyQnl0ZXMgPSBHTFRGVXRpbHMuR2V0QnVmZmVyRnJvbUJ1ZmZlclZpZXcoZ2x0ZlJ1bnRpbWUsIGJ1ZmZlclZpZXcsIDAsIGJ1ZmZlclZpZXcuYnl0ZUxlbmd0aCwgRUNvbXBvbmVudFR5cGUuVU5TSUdORURfQllURSk7XHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBzaGFkZXJTdHJpbmcgPSBHTFRGVXRpbHMuRGVjb2RlQnVmZmVyVG9UZXh0KHNoYWRlckJ5dGVzKTtcclxuICAgICAgICAgICAgb25TdWNjZXNzKHNoYWRlclN0cmluZyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG59XHJcblxyXG5HTFRGTG9hZGVyLlJlZ2lzdGVyRXh0ZW5zaW9uKG5ldyBHTFRGQmluYXJ5RXh0ZW5zaW9uKCkpO1xyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnMgKi9cclxuaW1wb3J0IHR5cGUge1xyXG4gICAgSUdMVEZSdW50aW1lLFxyXG4gICAgSUdMVEZUZWNobmlxdWVQYXJhbWV0ZXIsXHJcbiAgICBJR0xURkFuaW1hdGlvbixcclxuICAgIElHTFRGQW5pbWF0aW9uU2FtcGxlcixcclxuICAgIElHTFRGTm9kZSxcclxuICAgIElHTFRGU2tpbnMsXHJcbiAgICBJTm9kZVRvUm9vdCxcclxuICAgIElKb2ludE5vZGUsXHJcbiAgICBJR0xURk1lc2gsXHJcbiAgICBJR0xURkFjY2Vzc29yLFxyXG4gICAgSUdMVEZMaWdodCxcclxuICAgIElHTFRGQW1iaWVuTGlnaHQsXHJcbiAgICBJR0xURkRpcmVjdGlvbmFsTGlnaHQsXHJcbiAgICBJR0xURlBvaW50TGlnaHQsXHJcbiAgICBJR0xURlNwb3RMaWdodCxcclxuICAgIElHTFRGQ2FtZXJhLFxyXG4gICAgSUdMVEZDYW1lcmFQZXJzcGVjdGl2ZSxcclxuICAgIElHTFRGU2NlbmUsXHJcbiAgICBJR0xURlRlY2huaXF1ZSxcclxuICAgIElHTFRGTWF0ZXJpYWwsXHJcbiAgICBJR0xURlByb2dyYW0sXHJcbiAgICBJR0xURkJ1ZmZlcixcclxuICAgIElHTFRGVGV4dHVyZSxcclxuICAgIElHTFRGSW1hZ2UsXHJcbiAgICBJR0xURlNhbXBsZXIsXHJcbiAgICBJR0xURlNoYWRlcixcclxuICAgIElHTFRGVGVjaG5pcXVlU3RhdGVzLFxyXG59IGZyb20gXCIuL2dsVEZMb2FkZXJJbnRlcmZhY2VzXCI7XHJcbmltcG9ydCB7IEVQYXJhbWV0ZXJUeXBlLCBFVGV4dHVyZUZpbHRlclR5cGUsIEVDdWxsaW5nVHlwZSwgRUJsZW5kaW5nRnVuY3Rpb24sIEVTaGFkZXJUeXBlIH0gZnJvbSBcIi4vZ2xURkxvYWRlckludGVyZmFjZXNcIjtcclxuXHJcbmltcG9ydCB0eXBlIHsgRmxvYXRBcnJheSwgTnVsbGFibGUgfSBmcm9tIFwiY29yZS90eXBlc1wiO1xyXG5pbXBvcnQgeyBRdWF0ZXJuaW9uLCBWZWN0b3IzLCBNYXRyaXggfSBmcm9tIFwiY29yZS9NYXRocy9tYXRoLnZlY3RvclwiO1xyXG5pbXBvcnQgeyBDb2xvcjMgfSBmcm9tIFwiY29yZS9NYXRocy9tYXRoLmNvbG9yXCI7XHJcbmltcG9ydCB7IFRvb2xzIH0gZnJvbSBcImNvcmUvTWlzYy90b29sc1wiO1xyXG5pbXBvcnQgeyBDYW1lcmEgfSBmcm9tIFwiY29yZS9DYW1lcmFzL2NhbWVyYVwiO1xyXG5pbXBvcnQgeyBGcmVlQ2FtZXJhIH0gZnJvbSBcImNvcmUvQ2FtZXJhcy9mcmVlQ2FtZXJhXCI7XHJcbmltcG9ydCB7IEFuaW1hdGlvbiB9IGZyb20gXCJjb3JlL0FuaW1hdGlvbnMvYW5pbWF0aW9uXCI7XHJcbmltcG9ydCB7IEJvbmUgfSBmcm9tIFwiY29yZS9Cb25lcy9ib25lXCI7XHJcbmltcG9ydCB7IFNrZWxldG9uIH0gZnJvbSBcImNvcmUvQm9uZXMvc2tlbGV0b25cIjtcclxuaW1wb3J0IHsgRWZmZWN0IH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL2VmZmVjdFwiO1xyXG5pbXBvcnQgeyBNYXRlcmlhbCB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyBNdWx0aU1hdGVyaWFsIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL211bHRpTWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgU3RhbmRhcmRNYXRlcmlhbCB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9zdGFuZGFyZE1hdGVyaWFsXCI7XHJcbmltcG9ydCB7IFNoYWRlck1hdGVyaWFsIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL3NoYWRlck1hdGVyaWFsXCI7XHJcbmltcG9ydCB7IFRleHR1cmUgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvVGV4dHVyZXMvdGV4dHVyZVwiO1xyXG5pbXBvcnQgdHlwZSB7IE5vZGUgfSBmcm9tIFwiY29yZS9ub2RlXCI7XHJcbmltcG9ydCB7IFZlcnRleERhdGEgfSBmcm9tIFwiY29yZS9NZXNoZXMvbWVzaC52ZXJ0ZXhEYXRhXCI7XHJcbmltcG9ydCB7IFZlcnRleEJ1ZmZlciB9IGZyb20gXCJjb3JlL0J1ZmZlcnMvYnVmZmVyXCI7XHJcbmltcG9ydCB7IEdlb21ldHJ5IH0gZnJvbSBcImNvcmUvTWVzaGVzL2dlb21ldHJ5XCI7XHJcbmltcG9ydCB7IFN1Yk1lc2ggfSBmcm9tIFwiY29yZS9NZXNoZXMvc3ViTWVzaFwiO1xyXG5pbXBvcnQgeyBBYnN0cmFjdE1lc2ggfSBmcm9tIFwiY29yZS9NZXNoZXMvYWJzdHJhY3RNZXNoXCI7XHJcbmltcG9ydCB7IE1lc2ggfSBmcm9tIFwiY29yZS9NZXNoZXMvbWVzaFwiO1xyXG5pbXBvcnQgeyBIZW1pc3BoZXJpY0xpZ2h0IH0gZnJvbSBcImNvcmUvTGlnaHRzL2hlbWlzcGhlcmljTGlnaHRcIjtcclxuaW1wb3J0IHsgRGlyZWN0aW9uYWxMaWdodCB9IGZyb20gXCJjb3JlL0xpZ2h0cy9kaXJlY3Rpb25hbExpZ2h0XCI7XHJcbmltcG9ydCB7IFBvaW50TGlnaHQgfSBmcm9tIFwiY29yZS9MaWdodHMvcG9pbnRMaWdodFwiO1xyXG5pbXBvcnQgeyBTcG90TGlnaHQgfSBmcm9tIFwiY29yZS9MaWdodHMvc3BvdExpZ2h0XCI7XHJcbmltcG9ydCB0eXBlIHsgSVNjZW5lTG9hZGVyQXN5bmNSZXN1bHQsIElTY2VuZUxvYWRlclByb2dyZXNzRXZlbnQgfSBmcm9tIFwiY29yZS9Mb2FkaW5nL3NjZW5lTG9hZGVyXCI7XHJcbmltcG9ydCB0eXBlIHsgU2NlbmUgfSBmcm9tIFwiY29yZS9zY2VuZVwiO1xyXG5cclxuaW1wb3J0IHsgR0xURlV0aWxzIH0gZnJvbSBcIi4vZ2xURkxvYWRlclV0aWxzXCI7XHJcbmltcG9ydCB0eXBlIHsgSUdMVEZMb2FkZXIsIElHTFRGTG9hZGVyRGF0YSB9IGZyb20gXCIuLi9nbFRGRmlsZUxvYWRlclwiO1xyXG5pbXBvcnQgeyBHTFRGRmlsZUxvYWRlciB9IGZyb20gXCIuLi9nbFRGRmlsZUxvYWRlclwiO1xyXG5pbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tIFwiY29yZS9FbmdpbmVzL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgdHlwZSB7IEFzc2V0Q29udGFpbmVyIH0gZnJvbSBcImNvcmUvYXNzZXRDb250YWluZXJcIjtcclxuXHJcbi8qKlxyXG4gKiBUb2tlbml6ZXIuIFVzZWQgZm9yIHNoYWRlcnMgY29tcGF0aWJpbGl0eVxyXG4gKiBBdXRvbWF0aWNhbGx5IG1hcCB3b3JsZCwgdmlldywgcHJvamVjdGlvbiwgd29ybGRWaWV3UHJvamVjdGlvbiwgYXR0cmlidXRlcyBhbmQgc28gb25cclxuICovXHJcbmVudW0gRVRva2VuVHlwZSB7XHJcbiAgICBJREVOVElGSUVSID0gMSxcclxuXHJcbiAgICBVTktOT1dOID0gMixcclxuICAgIEVORF9PRl9JTlBVVCA9IDMsXHJcbn1cclxuXHJcbmNsYXNzIFRva2VuaXplciB7XHJcbiAgICBwcml2YXRlIF90b1BhcnNlOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIF9wb3M6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIF9tYXhQb3M6IG51bWJlcjtcclxuXHJcbiAgICBwdWJsaWMgY3VycmVudFRva2VuOiBFVG9rZW5UeXBlID0gRVRva2VuVHlwZS5VTktOT1dOO1xyXG4gICAgcHVibGljIGN1cnJlbnRJZGVudGlmaWVyOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgcHVibGljIGN1cnJlbnRTdHJpbmc6IHN0cmluZyA9IFwiXCI7XHJcbiAgICBwdWJsaWMgaXNMZXR0ZXJPckRpZ2l0UGF0dGVybjogUmVnRXhwID0gL15bYS16QS1aMC05XSskLztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih0b1BhcnNlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl90b1BhcnNlID0gdG9QYXJzZTtcclxuICAgICAgICB0aGlzLl9tYXhQb3MgPSB0b1BhcnNlLmxlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0TmV4dFRva2VuKCk6IEVUb2tlblR5cGUge1xyXG4gICAgICAgIGlmICh0aGlzLmlzRW5kKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIEVUb2tlblR5cGUuRU5EX09GX0lOUFVUO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jdXJyZW50U3RyaW5nID0gdGhpcy5yZWFkKCk7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50VG9rZW4gPSBFVG9rZW5UeXBlLlVOS05PV047XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRTdHJpbmcgPT09IFwiX1wiIHx8IHRoaXMuaXNMZXR0ZXJPckRpZ2l0UGF0dGVybi50ZXN0KHRoaXMuY3VycmVudFN0cmluZykpIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50VG9rZW4gPSBFVG9rZW5UeXBlLklERU5USUZJRVI7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudElkZW50aWZpZXIgPSB0aGlzLmN1cnJlbnRTdHJpbmc7XHJcbiAgICAgICAgICAgIHdoaWxlICghdGhpcy5pc0VuZCgpICYmICh0aGlzLmlzTGV0dGVyT3JEaWdpdFBhdHRlcm4udGVzdCgodGhpcy5jdXJyZW50U3RyaW5nID0gdGhpcy5wZWVrKCkpKSB8fCB0aGlzLmN1cnJlbnRTdHJpbmcgPT09IFwiX1wiKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50SWRlbnRpZmllciArPSB0aGlzLmN1cnJlbnRTdHJpbmc7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZvcndhcmQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudFRva2VuO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBwZWVrKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RvUGFyc2VbdGhpcy5fcG9zXTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVhZCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl90b1BhcnNlW3RoaXMuX3BvcysrXTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZm9yd2FyZCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9wb3MrKztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaXNFbmQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BvcyA+PSB0aGlzLl9tYXhQb3M7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBWYWx1ZXNcclxuICovXHJcbmNvbnN0IGdsVEZUcmFuc2Zvcm1zID0gW1wiTU9ERUxcIiwgXCJWSUVXXCIsIFwiUFJPSkVDVElPTlwiLCBcIk1PREVMVklFV1wiLCBcIk1PREVMVklFV1BST0pFQ1RJT05cIiwgXCJKT0lOVE1BVFJJWFwiXTtcclxuY29uc3QgYmFieWxvblRyYW5zZm9ybXMgPSBbXCJ3b3JsZFwiLCBcInZpZXdcIiwgXCJwcm9qZWN0aW9uXCIsIFwid29ybGRWaWV3XCIsIFwid29ybGRWaWV3UHJvamVjdGlvblwiLCBcIm1Cb25lc1wiXTtcclxuXHJcbmNvbnN0IGdsVEZBbmltYXRpb25QYXRocyA9IFtcInRyYW5zbGF0aW9uXCIsIFwicm90YXRpb25cIiwgXCJzY2FsZVwiXTtcclxuY29uc3QgYmFieWxvbkFuaW1hdGlvblBhdGhzID0gW1wicG9zaXRpb25cIiwgXCJyb3RhdGlvblF1YXRlcm5pb25cIiwgXCJzY2FsaW5nXCJdO1xyXG5cclxuLyoqXHJcbiAqIFBhcnNlXHJcbiAqIEBwYXJhbSBwYXJzZWRCdWZmZXJzXHJcbiAqIEBwYXJhbSBnbHRmUnVudGltZVxyXG4gKi9cclxuY29uc3QgcGFyc2VCdWZmZXJzID0gKHBhcnNlZEJ1ZmZlcnM6IGFueSwgZ2x0ZlJ1bnRpbWU6IElHTFRGUnVudGltZSkgPT4ge1xyXG4gICAgZm9yIChjb25zdCBidWYgaW4gcGFyc2VkQnVmZmVycykge1xyXG4gICAgICAgIGNvbnN0IHBhcnNlZEJ1ZmZlciA9IHBhcnNlZEJ1ZmZlcnNbYnVmXTtcclxuICAgICAgICBnbHRmUnVudGltZS5idWZmZXJzW2J1Zl0gPSBwYXJzZWRCdWZmZXI7XHJcbiAgICAgICAgZ2x0ZlJ1bnRpbWUuYnVmZmVyc0NvdW50Kys7XHJcbiAgICB9XHJcbn07XHJcblxyXG5jb25zdCBwYXJzZVNoYWRlcnMgPSAocGFyc2VkU2hhZGVyczogYW55LCBnbHRmUnVudGltZTogSUdMVEZSdW50aW1lKSA9PiB7XHJcbiAgICBmb3IgKGNvbnN0IHNoYSBpbiBwYXJzZWRTaGFkZXJzKSB7XHJcbiAgICAgICAgY29uc3QgcGFyc2VkU2hhZGVyID0gcGFyc2VkU2hhZGVyc1tzaGFdO1xyXG4gICAgICAgIGdsdGZSdW50aW1lLnNoYWRlcnNbc2hhXSA9IHBhcnNlZFNoYWRlcjtcclxuICAgICAgICBnbHRmUnVudGltZS5zaGFkZXJzY291bnQrKztcclxuICAgIH1cclxufTtcclxuXHJcbmNvbnN0IHBhcnNlT2JqZWN0ID0gKHBhcnNlZE9iamVjdHM6IGFueSwgcnVudGltZVByb3BlcnR5OiBzdHJpbmcsIGdsdGZSdW50aW1lOiBJR0xURlJ1bnRpbWUpID0+IHtcclxuICAgIGZvciAoY29uc3Qgb2JqZWN0IGluIHBhcnNlZE9iamVjdHMpIHtcclxuICAgICAgICBjb25zdCBwYXJzZWRPYmplY3QgPSBwYXJzZWRPYmplY3RzW29iamVjdF07XHJcbiAgICAgICAgKDxhbnk+Z2x0ZlJ1bnRpbWUpW3J1bnRpbWVQcm9wZXJ0eV1bb2JqZWN0XSA9IHBhcnNlZE9iamVjdDtcclxuICAgIH1cclxufTtcclxuXHJcbi8qKlxyXG4gKiBVdGlsc1xyXG4gKiBAcGFyYW0gYnVmZmVyXHJcbiAqL1xyXG5jb25zdCBub3JtYWxpemVVVnMgPSAoYnVmZmVyOiBhbnkpID0+IHtcclxuICAgIGlmICghYnVmZmVyKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYnVmZmVyLmxlbmd0aCAvIDI7IGkrKykge1xyXG4gICAgICAgIGJ1ZmZlcltpICogMiArIDFdID0gMS4wIC0gYnVmZmVyW2kgKiAyICsgMV07XHJcbiAgICB9XHJcbn07XHJcblxyXG5jb25zdCBnZXRBdHRyaWJ1dGUgPSAoYXR0cmlidXRlUGFyYW1ldGVyOiBJR0xURlRlY2huaXF1ZVBhcmFtZXRlcik6IE51bGxhYmxlPHN0cmluZz4gPT4ge1xyXG4gICAgaWYgKGF0dHJpYnV0ZVBhcmFtZXRlci5zZW1hbnRpYyA9PT0gXCJOT1JNQUxcIikge1xyXG4gICAgICAgIHJldHVybiBcIm5vcm1hbFwiO1xyXG4gICAgfSBlbHNlIGlmIChhdHRyaWJ1dGVQYXJhbWV0ZXIuc2VtYW50aWMgPT09IFwiUE9TSVRJT05cIikge1xyXG4gICAgICAgIHJldHVybiBcInBvc2l0aW9uXCI7XHJcbiAgICB9IGVsc2UgaWYgKGF0dHJpYnV0ZVBhcmFtZXRlci5zZW1hbnRpYyA9PT0gXCJKT0lOVFwiKSB7XHJcbiAgICAgICAgcmV0dXJuIFwibWF0cmljZXNJbmRpY2VzXCI7XHJcbiAgICB9IGVsc2UgaWYgKGF0dHJpYnV0ZVBhcmFtZXRlci5zZW1hbnRpYyA9PT0gXCJXRUlHSFRcIikge1xyXG4gICAgICAgIHJldHVybiBcIm1hdHJpY2VzV2VpZ2h0c1wiO1xyXG4gICAgfSBlbHNlIGlmIChhdHRyaWJ1dGVQYXJhbWV0ZXIuc2VtYW50aWMgPT09IFwiQ09MT1JcIikge1xyXG4gICAgICAgIHJldHVybiBcImNvbG9yXCI7XHJcbiAgICB9IGVsc2UgaWYgKGF0dHJpYnV0ZVBhcmFtZXRlci5zZW1hbnRpYyAmJiBhdHRyaWJ1dGVQYXJhbWV0ZXIuc2VtYW50aWMuaW5kZXhPZihcIlRFWENPT1JEX1wiKSAhPT0gLTEpIHtcclxuICAgICAgICBjb25zdCBjaGFubmVsID0gTnVtYmVyKGF0dHJpYnV0ZVBhcmFtZXRlci5zZW1hbnRpYy5zcGxpdChcIl9cIilbMV0pO1xyXG4gICAgICAgIHJldHVybiBcInV2XCIgKyAoY2hhbm5lbCA9PT0gMCA/IFwiXCIgOiBjaGFubmVsICsgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG51bGw7XHJcbn07XHJcblxyXG4vKipcclxuICogTG9hZHMgYW5kIGNyZWF0ZXMgYW5pbWF0aW9uc1xyXG4gKiBAcGFyYW0gZ2x0ZlJ1bnRpbWVcclxuICovXHJcbmNvbnN0IGxvYWRBbmltYXRpb25zID0gKGdsdGZSdW50aW1lOiBJR0xURlJ1bnRpbWUpID0+IHtcclxuICAgIGZvciAoY29uc3QgYW5pbSBpbiBnbHRmUnVudGltZS5hbmltYXRpb25zKSB7XHJcbiAgICAgICAgY29uc3QgYW5pbWF0aW9uOiBJR0xURkFuaW1hdGlvbiA9IGdsdGZSdW50aW1lLmFuaW1hdGlvbnNbYW5pbV07XHJcblxyXG4gICAgICAgIGlmICghYW5pbWF0aW9uLmNoYW5uZWxzIHx8ICFhbmltYXRpb24uc2FtcGxlcnMpIHtcclxuICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgbGFzdEFuaW1hdGlvbjogTnVsbGFibGU8QW5pbWF0aW9uPiA9IG51bGw7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYW5pbWF0aW9uLmNoYW5uZWxzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIC8vIEdldCBwYXJhbWV0ZXJzIGFuZCBsb2FkIGJ1ZmZlcnNcclxuICAgICAgICAgICAgY29uc3QgY2hhbm5lbCA9IGFuaW1hdGlvbi5jaGFubmVsc1tpXTtcclxuICAgICAgICAgICAgY29uc3Qgc2FtcGxlcjogSUdMVEZBbmltYXRpb25TYW1wbGVyID0gYW5pbWF0aW9uLnNhbXBsZXJzW2NoYW5uZWwuc2FtcGxlcl07XHJcblxyXG4gICAgICAgICAgICBpZiAoIXNhbXBsZXIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgaW5wdXREYXRhOiBOdWxsYWJsZTxzdHJpbmc+ID0gbnVsbDtcclxuICAgICAgICAgICAgbGV0IG91dHB1dERhdGE6IE51bGxhYmxlPHN0cmluZz4gPSBudWxsO1xyXG5cclxuICAgICAgICAgICAgaWYgKGFuaW1hdGlvbi5wYXJhbWV0ZXJzKSB7XHJcbiAgICAgICAgICAgICAgICBpbnB1dERhdGEgPSBhbmltYXRpb24ucGFyYW1ldGVyc1tzYW1wbGVyLmlucHV0XTtcclxuICAgICAgICAgICAgICAgIG91dHB1dERhdGEgPSBhbmltYXRpb24ucGFyYW1ldGVyc1tzYW1wbGVyLm91dHB1dF07XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpbnB1dERhdGEgPSBzYW1wbGVyLmlucHV0O1xyXG4gICAgICAgICAgICAgICAgb3V0cHV0RGF0YSA9IHNhbXBsZXIub3V0cHV0O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBidWZmZXJJbnB1dCA9IEdMVEZVdGlscy5HZXRCdWZmZXJGcm9tQWNjZXNzb3IoZ2x0ZlJ1bnRpbWUsIGdsdGZSdW50aW1lLmFjY2Vzc29yc1tpbnB1dERhdGFdKTtcclxuICAgICAgICAgICAgY29uc3QgYnVmZmVyT3V0cHV0ID0gR0xURlV0aWxzLkdldEJ1ZmZlckZyb21BY2Nlc3NvcihnbHRmUnVudGltZSwgZ2x0ZlJ1bnRpbWUuYWNjZXNzb3JzW291dHB1dERhdGFdKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldElkID0gY2hhbm5lbC50YXJnZXQuaWQ7XHJcbiAgICAgICAgICAgIGxldCB0YXJnZXROb2RlOiBhbnkgPSBnbHRmUnVudGltZS5zY2VuZS5nZXROb2RlQnlJZCh0YXJnZXRJZCk7XHJcblxyXG4gICAgICAgICAgICBpZiAodGFyZ2V0Tm9kZSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0Tm9kZSA9IGdsdGZSdW50aW1lLnNjZW5lLmdldE5vZGVCeU5hbWUodGFyZ2V0SWQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodGFyZ2V0Tm9kZSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgVG9vbHMuV2FybihcIkNyZWF0aW5nIGFuaW1hdGlvbiBuYW1lZCBcIiArIGFuaW0gKyBcIi4gQnV0IGNhbm5vdCBmaW5kIG5vZGUgbmFtZWQgXCIgKyB0YXJnZXRJZCArIFwiIHRvIGF0dGFjaCB0b1wiKTtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBpc0JvbmUgPSB0YXJnZXROb2RlIGluc3RhbmNlb2YgQm9uZTtcclxuXHJcbiAgICAgICAgICAgIC8vIEdldCB0YXJnZXQgcGF0aCAocG9zaXRpb24sIHJvdGF0aW9uIG9yIHNjYWxpbmcpXHJcbiAgICAgICAgICAgIGxldCB0YXJnZXRQYXRoID0gY2hhbm5lbC50YXJnZXQucGF0aDtcclxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0UGF0aEluZGV4ID0gZ2xURkFuaW1hdGlvblBhdGhzLmluZGV4T2YodGFyZ2V0UGF0aCk7XHJcblxyXG4gICAgICAgICAgICBpZiAodGFyZ2V0UGF0aEluZGV4ICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0UGF0aCA9IGJhYnlsb25BbmltYXRpb25QYXRoc1t0YXJnZXRQYXRoSW5kZXhdO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBEZXRlcm1pbmUgYW5pbWF0aW9uIHR5cGVcclxuICAgICAgICAgICAgbGV0IGFuaW1hdGlvblR5cGUgPSBBbmltYXRpb24uQU5JTUFUSU9OVFlQRV9NQVRSSVg7XHJcblxyXG4gICAgICAgICAgICBpZiAoIWlzQm9uZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRhcmdldFBhdGggPT09IFwicm90YXRpb25RdWF0ZXJuaW9uXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb25UeXBlID0gQW5pbWF0aW9uLkFOSU1BVElPTlRZUEVfUVVBVEVSTklPTjtcclxuICAgICAgICAgICAgICAgICAgICB0YXJnZXROb2RlLnJvdGF0aW9uUXVhdGVybmlvbiA9IG5ldyBRdWF0ZXJuaW9uKCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvblR5cGUgPSBBbmltYXRpb24uQU5JTUFUSU9OVFlQRV9WRUNUT1IzO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBDcmVhdGUgYW5pbWF0aW9uIGFuZCBrZXkgZnJhbWVzXHJcbiAgICAgICAgICAgIGxldCBiYWJ5bG9uQW5pbWF0aW9uOiBOdWxsYWJsZTxBbmltYXRpb24+ID0gbnVsbDtcclxuICAgICAgICAgICAgY29uc3Qga2V5cyA9IFtdO1xyXG4gICAgICAgICAgICBsZXQgYXJyYXlPZmZzZXQgPSAwO1xyXG4gICAgICAgICAgICBsZXQgbW9kaWZ5S2V5ID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICBpZiAoaXNCb25lICYmIGxhc3RBbmltYXRpb24gJiYgbGFzdEFuaW1hdGlvbi5nZXRLZXlzKCkubGVuZ3RoID09PSBidWZmZXJJbnB1dC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIGJhYnlsb25BbmltYXRpb24gPSBsYXN0QW5pbWF0aW9uO1xyXG4gICAgICAgICAgICAgICAgbW9kaWZ5S2V5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCFtb2RpZnlLZXkpIHtcclxuICAgICAgICAgICAgICAgIGdsdGZSdW50aW1lLnNjZW5lLl9ibG9ja0VudGl0eUNvbGxlY3Rpb24gPSAhIWdsdGZSdW50aW1lLmFzc2V0Q29udGFpbmVyO1xyXG4gICAgICAgICAgICAgICAgYmFieWxvbkFuaW1hdGlvbiA9IG5ldyBBbmltYXRpb24oYW5pbSwgaXNCb25lID8gXCJfbWF0cml4XCIgOiB0YXJnZXRQYXRoLCAxLCBhbmltYXRpb25UeXBlLCBBbmltYXRpb24uQU5JTUFUSU9OTE9PUE1PREVfQ1lDTEUpO1xyXG4gICAgICAgICAgICAgICAgZ2x0ZlJ1bnRpbWUuc2NlbmUuX2Jsb2NrRW50aXR5Q29sbGVjdGlvbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBGb3IgZWFjaCBmcmFtZVxyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGJ1ZmZlcklucHV0Lmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWU6IGFueSA9IG51bGw7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRhcmdldFBhdGggPT09IFwicm90YXRpb25RdWF0ZXJuaW9uXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBWRUM0XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBRdWF0ZXJuaW9uLkZyb21BcnJheShbYnVmZmVyT3V0cHV0W2FycmF5T2Zmc2V0XSwgYnVmZmVyT3V0cHV0W2FycmF5T2Zmc2V0ICsgMV0sIGJ1ZmZlck91dHB1dFthcnJheU9mZnNldCArIDJdLCBidWZmZXJPdXRwdXRbYXJyYXlPZmZzZXQgKyAzXV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGFycmF5T2Zmc2V0ICs9IDQ7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFBvc2l0aW9uIGFuZCBzY2FsaW5nIGFyZSBWRUMzXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBWZWN0b3IzLkZyb21BcnJheShbYnVmZmVyT3V0cHV0W2FycmF5T2Zmc2V0XSwgYnVmZmVyT3V0cHV0W2FycmF5T2Zmc2V0ICsgMV0sIGJ1ZmZlck91dHB1dFthcnJheU9mZnNldCArIDJdXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYXJyYXlPZmZzZXQgKz0gMztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoaXNCb25lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYm9uZSA9IDxCb25lPnRhcmdldE5vZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRyYW5zbGF0aW9uID0gVmVjdG9yMy5aZXJvKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJvdGF0aW9uUXVhdGVybmlvbiA9IG5ldyBRdWF0ZXJuaW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNjYWxpbmcgPSBWZWN0b3IzLlplcm8oKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gV2FybmluZyBvbiBkZWNvbXBvc2VcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbWF0ID0gYm9uZS5nZXRCYXNlTWF0cml4KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChtb2RpZnlLZXkgJiYgbGFzdEFuaW1hdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXQgPSBsYXN0QW5pbWF0aW9uLmdldEtleXMoKVtqXS52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIG1hdC5kZWNvbXBvc2Uoc2NhbGluZywgcm90YXRpb25RdWF0ZXJuaW9uLCB0cmFuc2xhdGlvbik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0YXJnZXRQYXRoID09PSBcInBvc2l0aW9uXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRpb24gPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRhcmdldFBhdGggPT09IFwicm90YXRpb25RdWF0ZXJuaW9uXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcm90YXRpb25RdWF0ZXJuaW9uID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2NhbGluZyA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBNYXRyaXguQ29tcG9zZShzY2FsaW5nLCByb3RhdGlvblF1YXRlcm5pb24sIHRyYW5zbGF0aW9uKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIW1vZGlmeUtleSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGtleXMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyYW1lOiBidWZmZXJJbnB1dFtqXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChsYXN0QW5pbWF0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFzdEFuaW1hdGlvbi5nZXRLZXlzKClbal0udmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gRmluaXNoXHJcbiAgICAgICAgICAgIGlmICghbW9kaWZ5S2V5ICYmIGJhYnlsb25BbmltYXRpb24pIHtcclxuICAgICAgICAgICAgICAgIGJhYnlsb25BbmltYXRpb24uc2V0S2V5cyhrZXlzKTtcclxuICAgICAgICAgICAgICAgIHRhcmdldE5vZGUuYW5pbWF0aW9ucy5wdXNoKGJhYnlsb25BbmltYXRpb24pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsYXN0QW5pbWF0aW9uID0gYmFieWxvbkFuaW1hdGlvbjtcclxuXHJcbiAgICAgICAgICAgIGdsdGZSdW50aW1lLnNjZW5lLnN0b3BBbmltYXRpb24odGFyZ2V0Tm9kZSk7XHJcbiAgICAgICAgICAgIGdsdGZSdW50aW1lLnNjZW5lLmJlZ2luQW5pbWF0aW9uKHRhcmdldE5vZGUsIDAsIGJ1ZmZlcklucHV0W2J1ZmZlcklucHV0Lmxlbmd0aCAtIDFdLCB0cnVlLCAxLjApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuXHJcbi8qKlxyXG4gKiBAcmV0dXJucyB0aGUgYm9uZXMgdHJhbnNmb3JtYXRpb24gbWF0cml4XHJcbiAqIEBwYXJhbSBub2RlXHJcbiAqL1xyXG5jb25zdCBjb25maWd1cmVCb25lVHJhbnNmb3JtYXRpb24gPSAobm9kZTogSUdMVEZOb2RlKTogTWF0cml4ID0+IHtcclxuICAgIGxldCBtYXQ6IE51bGxhYmxlPE1hdHJpeD4gPSBudWxsO1xyXG5cclxuICAgIGlmIChub2RlLnRyYW5zbGF0aW9uIHx8IG5vZGUucm90YXRpb24gfHwgbm9kZS5zY2FsZSkge1xyXG4gICAgICAgIGNvbnN0IHNjYWxlID0gVmVjdG9yMy5Gcm9tQXJyYXkobm9kZS5zY2FsZSB8fCBbMSwgMSwgMV0pO1xyXG4gICAgICAgIGNvbnN0IHJvdGF0aW9uID0gUXVhdGVybmlvbi5Gcm9tQXJyYXkobm9kZS5yb3RhdGlvbiB8fCBbMCwgMCwgMCwgMV0pO1xyXG4gICAgICAgIGNvbnN0IHBvc2l0aW9uID0gVmVjdG9yMy5Gcm9tQXJyYXkobm9kZS50cmFuc2xhdGlvbiB8fCBbMCwgMCwgMF0pO1xyXG5cclxuICAgICAgICBtYXQgPSBNYXRyaXguQ29tcG9zZShzY2FsZSwgcm90YXRpb24sIHBvc2l0aW9uKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbWF0ID0gTWF0cml4LkZyb21BcnJheShub2RlLm1hdHJpeCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG1hdDtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIHRoZSBwYXJlbnQgYm9uZVxyXG4gKiBAcGFyYW0gZ2x0ZlJ1bnRpbWVcclxuICogQHBhcmFtIHNraW5zXHJcbiAqIEBwYXJhbSBqb2ludE5hbWVcclxuICogQHBhcmFtIG5ld1NrZWxldG9uXHJcbiAqIEByZXR1cm5zIHRoZSBwYXJlbnQgYm9uZVxyXG4gKi9cclxuY29uc3QgZ2V0UGFyZW50Qm9uZSA9IChnbHRmUnVudGltZTogSUdMVEZSdW50aW1lLCBza2luczogSUdMVEZTa2lucywgam9pbnROYW1lOiBzdHJpbmcsIG5ld1NrZWxldG9uOiBTa2VsZXRvbik6IE51bGxhYmxlPEJvbmU+ID0+IHtcclxuICAgIC8vIFRyeSB0byBmaW5kXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5ld1NrZWxldG9uLmJvbmVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKG5ld1NrZWxldG9uLmJvbmVzW2ldLm5hbWUgPT09IGpvaW50TmFtZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3U2tlbGV0b24uYm9uZXNbaV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIE5vdCBmb3VuZCwgc2VhcmNoIGluIGdsdGYgbm9kZXNcclxuICAgIGNvbnN0IG5vZGVzID0gZ2x0ZlJ1bnRpbWUubm9kZXM7XHJcbiAgICBmb3IgKGNvbnN0IG5kZSBpbiBub2Rlcykge1xyXG4gICAgICAgIGNvbnN0IG5vZGU6IElHTFRGTm9kZSA9IG5vZGVzW25kZV07XHJcblxyXG4gICAgICAgIGlmICghbm9kZS5qb2ludE5hbWUpIHtcclxuICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBjaGlsZHJlbiA9IG5vZGUuY2hpbGRyZW47XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBjaGlsZDogSUdMVEZOb2RlID0gZ2x0ZlJ1bnRpbWUubm9kZXNbY2hpbGRyZW5baV1dO1xyXG4gICAgICAgICAgICBpZiAoIWNoaWxkLmpvaW50TmFtZSkge1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChjaGlsZC5qb2ludE5hbWUgPT09IGpvaW50TmFtZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbWF0ID0gY29uZmlndXJlQm9uZVRyYW5zZm9ybWF0aW9uKG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYm9uZSA9IG5ldyBCb25lKG5vZGUubmFtZSB8fCBcIlwiLCBuZXdTa2VsZXRvbiwgZ2V0UGFyZW50Qm9uZShnbHRmUnVudGltZSwgc2tpbnMsIG5vZGUuam9pbnROYW1lLCBuZXdTa2VsZXRvbiksIG1hdCk7XHJcbiAgICAgICAgICAgICAgICBib25lLmlkID0gbmRlO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGJvbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG51bGw7XHJcbn07XHJcblxyXG4vKipcclxuICogUmV0dXJucyB0aGUgYXBwcm9wcmlhdGUgcm9vdCBub2RlXHJcbiAqIEBwYXJhbSBub2Rlc1RvUm9vdFxyXG4gKiBAcGFyYW0gaWRcclxuICogQHJldHVybnMgdGhlIHJvb3Qgbm9kZVxyXG4gKi9cclxuY29uc3QgZ2V0Tm9kZVRvUm9vdCA9IChub2Rlc1RvUm9vdDogSU5vZGVUb1Jvb3RbXSwgaWQ6IHN0cmluZyk6IE51bGxhYmxlPEJvbmU+ID0+IHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbm9kZXNUb1Jvb3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjb25zdCBub2RlVG9Sb290ID0gbm9kZXNUb1Jvb3RbaV07XHJcblxyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbm9kZVRvUm9vdC5ub2RlLmNoaWxkcmVuLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkID0gbm9kZVRvUm9vdC5ub2RlLmNoaWxkcmVuW2pdO1xyXG4gICAgICAgICAgICBpZiAoY2hpbGQgPT09IGlkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbm9kZVRvUm9vdC5ib25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBudWxsO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgdGhlIG5vZGUgd2l0aCB0aGUgam9pbnQgbmFtZVxyXG4gKiBAcGFyYW0gZ2x0ZlJ1bnRpbWVcclxuICogQHBhcmFtIGpvaW50TmFtZVxyXG4gKiBAcmV0dXJucyB0aGUgbm9kZSB3aXRoIHRoZSBqb2ludCBuYW1lXHJcbiAqL1xyXG5jb25zdCBnZXRKb2ludE5vZGUgPSAoZ2x0ZlJ1bnRpbWU6IElHTFRGUnVudGltZSwgam9pbnROYW1lOiBzdHJpbmcpOiBOdWxsYWJsZTxJSm9pbnROb2RlPiA9PiB7XHJcbiAgICBjb25zdCBub2RlcyA9IGdsdGZSdW50aW1lLm5vZGVzO1xyXG4gICAgbGV0IG5vZGU6IElHTFRGTm9kZSA9IG5vZGVzW2pvaW50TmFtZV07XHJcbiAgICBpZiAobm9kZSkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIG5vZGU6IG5vZGUsXHJcbiAgICAgICAgICAgIGlkOiBqb2ludE5hbWUsXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGNvbnN0IG5kZSBpbiBub2Rlcykge1xyXG4gICAgICAgIG5vZGUgPSBub2Rlc1tuZGVdO1xyXG4gICAgICAgIGlmIChub2RlLmpvaW50TmFtZSA9PT0gam9pbnROYW1lKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBub2RlOiBub2RlLFxyXG4gICAgICAgICAgICAgICAgaWQ6IG5kZSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG51bGw7XHJcbn07XHJcblxyXG4vKipcclxuICogQ2hlY2tzIGlmIGEgbm9kZXMgaXMgaW4gam9pbnRzXHJcbiAqIEBwYXJhbSBza2luc1xyXG4gKiBAcGFyYW0gaWRcclxuICogQHJldHVybnMgdHJ1ZSBpZiB0aGUgbm9kZSBpcyBpbiBqb2ludHMsIGVsc2UgZmFsc2VcclxuICovXHJcbmNvbnN0IG5vZGVJc0luSm9pbnRzID0gKHNraW5zOiBJR0xURlNraW5zLCBpZDogc3RyaW5nKTogYm9vbGVhbiA9PiB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNraW5zLmpvaW50TmFtZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAoc2tpbnMuam9pbnROYW1lc1tpXSA9PT0gaWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmYWxzZTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBGaWxscyB0aGUgbm9kZXMgdG8gcm9vdCBmb3IgYm9uZXMgYW5kIGJ1aWxkcyBoaWVyYXJjaHlcclxuICogQHBhcmFtIGdsdGZSdW50aW1lXHJcbiAqIEBwYXJhbSBuZXdTa2VsZXRvblxyXG4gKiBAcGFyYW0gc2tpbnNcclxuICogQHBhcmFtIG5vZGVzVG9Sb290XHJcbiAqL1xyXG5jb25zdCBnZXROb2Rlc1RvUm9vdCA9IChnbHRmUnVudGltZTogSUdMVEZSdW50aW1lLCBuZXdTa2VsZXRvbjogU2tlbGV0b24sIHNraW5zOiBJR0xURlNraW5zLCBub2Rlc1RvUm9vdDogSU5vZGVUb1Jvb3RbXSkgPT4ge1xyXG4gICAgLy8gQ3JlYXRlcyBub2RlcyBmb3Igcm9vdFxyXG4gICAgZm9yIChjb25zdCBuZGUgaW4gZ2x0ZlJ1bnRpbWUubm9kZXMpIHtcclxuICAgICAgICBjb25zdCBub2RlOiBJR0xURk5vZGUgPSBnbHRmUnVudGltZS5ub2Rlc1tuZGVdO1xyXG4gICAgICAgIGNvbnN0IGlkID0gbmRlO1xyXG5cclxuICAgICAgICBpZiAoIW5vZGUuam9pbnROYW1lIHx8IG5vZGVJc0luSm9pbnRzKHNraW5zLCBub2RlLmpvaW50TmFtZSkpIHtcclxuICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBDcmVhdGUgbm9kZSB0byByb290IGJvbmVcclxuICAgICAgICBjb25zdCBtYXQgPSBjb25maWd1cmVCb25lVHJhbnNmb3JtYXRpb24obm9kZSk7XHJcbiAgICAgICAgY29uc3QgYm9uZSA9IG5ldyBCb25lKG5vZGUubmFtZSB8fCBcIlwiLCBuZXdTa2VsZXRvbiwgbnVsbCwgbWF0KTtcclxuICAgICAgICBib25lLmlkID0gaWQ7XHJcbiAgICAgICAgbm9kZXNUb1Jvb3QucHVzaCh7IGJvbmU6IGJvbmUsIG5vZGU6IG5vZGUsIGlkOiBpZCB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBQYXJlbnRpbmdcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbm9kZXNUb1Jvb3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjb25zdCBub2RlVG9Sb290ID0gbm9kZXNUb1Jvb3RbaV07XHJcbiAgICAgICAgY29uc3QgY2hpbGRyZW4gPSBub2RlVG9Sb290Lm5vZGUuY2hpbGRyZW47XHJcblxyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY2hpbGRyZW4ubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgbGV0IGNoaWxkOiBOdWxsYWJsZTxJTm9kZVRvUm9vdD4gPSBudWxsO1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCBub2Rlc1RvUm9vdC5sZW5ndGg7IGsrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKG5vZGVzVG9Sb290W2tdLmlkID09PSBjaGlsZHJlbltqXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkID0gbm9kZXNUb1Jvb3Rba107XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChjaGlsZCkge1xyXG4gICAgICAgICAgICAgICAgKDxhbnk+Y2hpbGQuYm9uZSkuX3BhcmVudCA9IG5vZGVUb1Jvb3QuYm9uZTtcclxuICAgICAgICAgICAgICAgIG5vZGVUb1Jvb3QuYm9uZS5jaGlsZHJlbi5wdXNoKGNoaWxkLmJvbmUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5cclxuLyoqXHJcbiAqIEltcG9ydHMgYSBza2VsZXRvblxyXG4gKiBAcGFyYW0gZ2x0ZlJ1bnRpbWVcclxuICogQHBhcmFtIHNraW5zXHJcbiAqIEBwYXJhbSBtZXNoXHJcbiAqIEBwYXJhbSBuZXdTa2VsZXRvblxyXG4gKiBAcmV0dXJucyB0aGUgYm9uZSBuYW1lXHJcbiAqL1xyXG5jb25zdCBpbXBvcnRTa2VsZXRvbiA9IChnbHRmUnVudGltZTogSUdMVEZSdW50aW1lLCBza2luczogSUdMVEZTa2lucywgbWVzaDogTWVzaCwgbmV3U2tlbGV0b246IFNrZWxldG9uIHwgdW5kZWZpbmVkKTogU2tlbGV0b24gPT4ge1xyXG4gICAgaWYgKCFuZXdTa2VsZXRvbikge1xyXG4gICAgICAgIG5ld1NrZWxldG9uID0gbmV3IFNrZWxldG9uKHNraW5zLm5hbWUgfHwgXCJcIiwgXCJcIiwgZ2x0ZlJ1bnRpbWUuc2NlbmUpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghc2tpbnMuYmFieWxvblNrZWxldG9uKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ld1NrZWxldG9uO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEZpbmQgdGhlIHJvb3QgYm9uZXNcclxuICAgIGNvbnN0IG5vZGVzVG9Sb290OiBJTm9kZVRvUm9vdFtdID0gW107XHJcbiAgICBjb25zdCBub2Rlc1RvUm9vdFRvQWRkOiBCb25lW10gPSBbXTtcclxuXHJcbiAgICBnZXROb2Rlc1RvUm9vdChnbHRmUnVudGltZSwgbmV3U2tlbGV0b24sIHNraW5zLCBub2Rlc1RvUm9vdCk7XHJcbiAgICBuZXdTa2VsZXRvbi5ib25lcyA9IFtdO1xyXG5cclxuICAgIC8vIEpvaW50c1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBza2lucy5qb2ludE5hbWVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3Qgam9pbnROb2RlID0gZ2V0Sm9pbnROb2RlKGdsdGZSdW50aW1lLCBza2lucy5qb2ludE5hbWVzW2ldKTtcclxuXHJcbiAgICAgICAgaWYgKCFqb2ludE5vZGUpIHtcclxuICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBub2RlID0gam9pbnROb2RlLm5vZGU7XHJcblxyXG4gICAgICAgIGlmICghbm9kZSkge1xyXG4gICAgICAgICAgICBUb29scy5XYXJuKFwiSm9pbnQgbmFtZWQgXCIgKyBza2lucy5qb2ludE5hbWVzW2ldICsgXCIgZG9lcyBub3QgZXhpc3RcIik7XHJcbiAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgaWQgPSBqb2ludE5vZGUuaWQ7XHJcblxyXG4gICAgICAgIC8vIE9wdGltaXplLCBpZiB0aGUgYm9uZSBhbHJlYWR5IGV4aXN0cy4uLlxyXG4gICAgICAgIGNvbnN0IGV4aXN0aW5nQm9uZSA9IGdsdGZSdW50aW1lLnNjZW5lLmdldEJvbmVCeUlkKGlkKTtcclxuICAgICAgICBpZiAoZXhpc3RpbmdCb25lKSB7XHJcbiAgICAgICAgICAgIG5ld1NrZWxldG9uLmJvbmVzLnB1c2goZXhpc3RpbmdCb25lKTtcclxuICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBTZWFyY2ggZm9yIHBhcmVudCBib25lXHJcbiAgICAgICAgbGV0IGZvdW5kQm9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGxldCBwYXJlbnRCb25lOiBOdWxsYWJsZTxCb25lPiA9IG51bGw7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgaTsgaisrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGpvaW50Tm9kZSA9IGdldEpvaW50Tm9kZShnbHRmUnVudGltZSwgc2tpbnMuam9pbnROYW1lc1tqXSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIWpvaW50Tm9kZSkge1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGpvaW50OiBJR0xURk5vZGUgPSBqb2ludE5vZGUubm9kZTtcclxuXHJcbiAgICAgICAgICAgIGlmICgham9pbnQpIHtcclxuICAgICAgICAgICAgICAgIFRvb2xzLldhcm4oXCJKb2ludCBuYW1lZCBcIiArIHNraW5zLmpvaW50TmFtZXNbal0gKyBcIiBkb2VzIG5vdCBleGlzdCB3aGVuIGxvb2tpbmcgZm9yIHBhcmVudFwiKTtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBjaGlsZHJlbiA9IGpvaW50LmNoaWxkcmVuO1xyXG4gICAgICAgICAgICBpZiAoIWNoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3VuZEJvbmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgY2hpbGRyZW4ubGVuZ3RoOyBrKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChjaGlsZHJlbltrXSA9PT0gaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBwYXJlbnRCb25lID0gZ2V0UGFyZW50Qm9uZShnbHRmUnVudGltZSwgc2tpbnMsIHNraW5zLmpvaW50TmFtZXNbal0sIG5ld1NrZWxldG9uKTtcclxuICAgICAgICAgICAgICAgICAgICBmb3VuZEJvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoZm91bmRCb25lKSB7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQ3JlYXRlIGJvbmVcclxuICAgICAgICBjb25zdCBtYXQgPSBjb25maWd1cmVCb25lVHJhbnNmb3JtYXRpb24obm9kZSk7XHJcblxyXG4gICAgICAgIGlmICghcGFyZW50Qm9uZSAmJiBub2Rlc1RvUm9vdC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHBhcmVudEJvbmUgPSBnZXROb2RlVG9Sb290KG5vZGVzVG9Sb290LCBpZCk7XHJcblxyXG4gICAgICAgICAgICBpZiAocGFyZW50Qm9uZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKG5vZGVzVG9Sb290VG9BZGQuaW5kZXhPZihwYXJlbnRCb25lKSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICBub2Rlc1RvUm9vdFRvQWRkLnB1c2gocGFyZW50Qm9uZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGJvbmUgPSBuZXcgQm9uZShub2RlLmpvaW50TmFtZSB8fCBcIlwiLCBuZXdTa2VsZXRvbiwgcGFyZW50Qm9uZSwgbWF0KTtcclxuICAgICAgICBib25lLmlkID0gaWQ7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUG9saXNoXHJcbiAgICBjb25zdCBib25lcyA9IG5ld1NrZWxldG9uLmJvbmVzO1xyXG4gICAgbmV3U2tlbGV0b24uYm9uZXMgPSBbXTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNraW5zLmpvaW50TmFtZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjb25zdCBqb2ludE5vZGUgPSBnZXRKb2ludE5vZGUoZ2x0ZlJ1bnRpbWUsIHNraW5zLmpvaW50TmFtZXNbaV0pO1xyXG5cclxuICAgICAgICBpZiAoIWpvaW50Tm9kZSkge1xyXG4gICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgYm9uZXMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgaWYgKGJvbmVzW2pdLmlkID09PSBqb2ludE5vZGUuaWQpIHtcclxuICAgICAgICAgICAgICAgIG5ld1NrZWxldG9uLmJvbmVzLnB1c2goYm9uZXNbal0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbmV3U2tlbGV0b24ucHJlcGFyZSgpO1xyXG5cclxuICAgIC8vIEZpbmlzaFxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBub2Rlc1RvUm9vdFRvQWRkLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgbmV3U2tlbGV0b24uYm9uZXMucHVzaChub2Rlc1RvUm9vdFRvQWRkW2ldKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbmV3U2tlbGV0b247XHJcbn07XHJcblxyXG4vKipcclxuICogSW1wb3J0cyBhIG1lc2ggYW5kIGl0cyBnZW9tZXRyaWVzXHJcbiAqIEBwYXJhbSBnbHRmUnVudGltZVxyXG4gKiBAcGFyYW0gbm9kZVxyXG4gKiBAcGFyYW0gbWVzaGVzXHJcbiAqIEBwYXJhbSBpZFxyXG4gKiBAcGFyYW0gbmV3TWVzaFxyXG4gKiBAcmV0dXJucyB0aGUgbmV3IG1lc2hcclxuICovXHJcbmNvbnN0IGltcG9ydE1lc2ggPSAoZ2x0ZlJ1bnRpbWU6IElHTFRGUnVudGltZSwgbm9kZTogSUdMVEZOb2RlLCBtZXNoZXM6IHN0cmluZ1tdLCBpZDogc3RyaW5nLCBuZXdNZXNoOiBNZXNoKTogTWVzaCA9PiB7XHJcbiAgICBpZiAoIW5ld01lc2gpIHtcclxuICAgICAgICBnbHRmUnVudGltZS5zY2VuZS5fYmxvY2tFbnRpdHlDb2xsZWN0aW9uID0gISFnbHRmUnVudGltZS5hc3NldENvbnRhaW5lcjtcclxuICAgICAgICBuZXdNZXNoID0gbmV3IE1lc2gobm9kZS5uYW1lIHx8IFwiXCIsIGdsdGZSdW50aW1lLnNjZW5lKTtcclxuICAgICAgICBuZXdNZXNoLl9wYXJlbnRDb250YWluZXIgPSBnbHRmUnVudGltZS5hc3NldENvbnRhaW5lcjtcclxuICAgICAgICBnbHRmUnVudGltZS5zY2VuZS5fYmxvY2tFbnRpdHlDb2xsZWN0aW9uID0gZmFsc2U7XHJcbiAgICAgICAgbmV3TWVzaC5pZCA9IGlkO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghbm9kZS5iYWJ5bG9uTm9kZSkge1xyXG4gICAgICAgIHJldHVybiBuZXdNZXNoO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN1Yk1hdGVyaWFsczogTWF0ZXJpYWxbXSA9IFtdO1xyXG5cclxuICAgIGxldCB2ZXJ0ZXhEYXRhOiBOdWxsYWJsZTxWZXJ0ZXhEYXRhPiA9IG51bGw7XHJcbiAgICBjb25zdCB2ZXJ0aWNlc1N0YXJ0czogbnVtYmVyW10gPSBbXTtcclxuICAgIGNvbnN0IHZlcnRpY2VzQ291bnRzOiBudW1iZXJbXSA9IFtdO1xyXG4gICAgY29uc3QgaW5kZXhTdGFydHM6IG51bWJlcltdID0gW107XHJcbiAgICBjb25zdCBpbmRleENvdW50czogbnVtYmVyW10gPSBbXTtcclxuXHJcbiAgICBmb3IgKGxldCBtZXNoSW5kZXggPSAwOyBtZXNoSW5kZXggPCBtZXNoZXMubGVuZ3RoOyBtZXNoSW5kZXgrKykge1xyXG4gICAgICAgIGNvbnN0IG1lc2hJZCA9IG1lc2hlc1ttZXNoSW5kZXhdO1xyXG4gICAgICAgIGNvbnN0IG1lc2g6IElHTFRGTWVzaCA9IGdsdGZSdW50aW1lLm1lc2hlc1ttZXNoSWRdO1xyXG5cclxuICAgICAgICBpZiAoIW1lc2gpIHtcclxuICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBQb3NpdGlvbnMsIG5vcm1hbHMgYW5kIFVWc1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWVzaC5wcmltaXRpdmVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIC8vIFRlbXBvcmFyeSB2ZXJ0ZXggZGF0YVxyXG4gICAgICAgICAgICBjb25zdCB0ZW1wVmVydGV4RGF0YSA9IG5ldyBWZXJ0ZXhEYXRhKCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBwcmltaXRpdmUgPSBtZXNoLnByaW1pdGl2ZXNbaV07XHJcbiAgICAgICAgICAgIGlmIChwcmltaXRpdmUubW9kZSAhPT0gNCkge1xyXG4gICAgICAgICAgICAgICAgLy8gY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGF0dHJpYnV0ZXMgPSBwcmltaXRpdmUuYXR0cmlidXRlcztcclxuICAgICAgICAgICAgbGV0IGFjY2Vzc29yOiBOdWxsYWJsZTxJR0xURkFjY2Vzc29yPiA9IG51bGw7XHJcbiAgICAgICAgICAgIGxldCBidWZmZXI6IGFueSA9IG51bGw7XHJcblxyXG4gICAgICAgICAgICAvLyBTZXQgcG9zaXRpb25zLCBub3JtYWwgYW5kIHV2c1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHNlbWFudGljIGluIGF0dHJpYnV0ZXMpIHtcclxuICAgICAgICAgICAgICAgIC8vIExpbmsgYWNjZXNzb3IgYW5kIGJ1ZmZlciB2aWV3XHJcbiAgICAgICAgICAgICAgICBhY2Nlc3NvciA9IGdsdGZSdW50aW1lLmFjY2Vzc29yc1thdHRyaWJ1dGVzW3NlbWFudGljXV07XHJcbiAgICAgICAgICAgICAgICBidWZmZXIgPSBHTFRGVXRpbHMuR2V0QnVmZmVyRnJvbUFjY2Vzc29yKGdsdGZSdW50aW1lLCBhY2Nlc3Nvcik7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHNlbWFudGljID09PSBcIk5PUk1BTFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGVtcFZlcnRleERhdGEubm9ybWFscyA9IG5ldyBGbG9hdDMyQXJyYXkoYnVmZmVyLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgKDxGbG9hdDMyQXJyYXk+dGVtcFZlcnRleERhdGEubm9ybWFscykuc2V0KGJ1ZmZlcik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHNlbWFudGljID09PSBcIlBPU0lUSU9OXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoR0xURkZpbGVMb2FkZXIuSG9tb2dlbmVvdXNDb29yZGluYXRlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wVmVydGV4RGF0YS5wb3NpdGlvbnMgPSBuZXcgRmxvYXQzMkFycmF5KGJ1ZmZlci5sZW5ndGggLSBidWZmZXIubGVuZ3RoIC8gNCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGJ1ZmZlci5sZW5ndGg7IGogKz0gNCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcFZlcnRleERhdGEucG9zaXRpb25zW2pdID0gYnVmZmVyW2pdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcFZlcnRleERhdGEucG9zaXRpb25zW2ogKyAxXSA9IGJ1ZmZlcltqICsgMV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wVmVydGV4RGF0YS5wb3NpdGlvbnNbaiArIDJdID0gYnVmZmVyW2ogKyAyXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBWZXJ0ZXhEYXRhLnBvc2l0aW9ucyA9IG5ldyBGbG9hdDMyQXJyYXkoYnVmZmVyLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICg8RmxvYXQzMkFycmF5PnRlbXBWZXJ0ZXhEYXRhLnBvc2l0aW9ucykuc2V0KGJ1ZmZlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNlc0NvdW50cy5wdXNoKHRlbXBWZXJ0ZXhEYXRhLnBvc2l0aW9ucy5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzZW1hbnRpYy5pbmRleE9mKFwiVEVYQ09PUkRfXCIpICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNoYW5uZWwgPSBOdW1iZXIoc2VtYW50aWMuc3BsaXQoXCJfXCIpWzFdKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB1dktpbmQgPSBWZXJ0ZXhCdWZmZXIuVVZLaW5kICsgKGNoYW5uZWwgPT09IDAgPyBcIlwiIDogY2hhbm5lbCArIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHV2cyA9IG5ldyBGbG9hdDMyQXJyYXkoYnVmZmVyLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgKDxGbG9hdDMyQXJyYXk+dXZzKS5zZXQoYnVmZmVyKTtcclxuICAgICAgICAgICAgICAgICAgICBub3JtYWxpemVVVnModXZzKTtcclxuICAgICAgICAgICAgICAgICAgICB0ZW1wVmVydGV4RGF0YS5zZXQodXZzLCB1dktpbmQpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzZW1hbnRpYyA9PT0gXCJKT0lOVFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGVtcFZlcnRleERhdGEubWF0cmljZXNJbmRpY2VzID0gbmV3IEZsb2F0MzJBcnJheShidWZmZXIubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgICAgICAoPEZsb2F0MzJBcnJheT50ZW1wVmVydGV4RGF0YS5tYXRyaWNlc0luZGljZXMpLnNldChidWZmZXIpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzZW1hbnRpYyA9PT0gXCJXRUlHSFRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRlbXBWZXJ0ZXhEYXRhLm1hdHJpY2VzV2VpZ2h0cyA9IG5ldyBGbG9hdDMyQXJyYXkoYnVmZmVyLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgKDxGbG9hdDMyQXJyYXk+dGVtcFZlcnRleERhdGEubWF0cmljZXNXZWlnaHRzKS5zZXQoYnVmZmVyKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc2VtYW50aWMgPT09IFwiQ09MT1JcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRlbXBWZXJ0ZXhEYXRhLmNvbG9ycyA9IG5ldyBGbG9hdDMyQXJyYXkoYnVmZmVyLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgKDxGbG9hdDMyQXJyYXk+dGVtcFZlcnRleERhdGEuY29sb3JzKS5zZXQoYnVmZmVyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gSW5kaWNlc1xyXG4gICAgICAgICAgICBhY2Nlc3NvciA9IGdsdGZSdW50aW1lLmFjY2Vzc29yc1twcmltaXRpdmUuaW5kaWNlc107XHJcbiAgICAgICAgICAgIGlmIChhY2Nlc3Nvcikge1xyXG4gICAgICAgICAgICAgICAgYnVmZmVyID0gR0xURlV0aWxzLkdldEJ1ZmZlckZyb21BY2Nlc3NvcihnbHRmUnVudGltZSwgYWNjZXNzb3IpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRlbXBWZXJ0ZXhEYXRhLmluZGljZXMgPSBuZXcgSW50MzJBcnJheShidWZmZXIubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgIHRlbXBWZXJ0ZXhEYXRhLmluZGljZXMuc2V0KGJ1ZmZlcik7XHJcbiAgICAgICAgICAgICAgICBpbmRleENvdW50cy5wdXNoKHRlbXBWZXJ0ZXhEYXRhLmluZGljZXMubGVuZ3RoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIFNldCBpbmRpY2VzIG9uIHRoZSBmbHlcclxuICAgICAgICAgICAgICAgIGNvbnN0IGluZGljZXM6IG51bWJlcltdID0gW107XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8ICg8RmxvYXRBcnJheT50ZW1wVmVydGV4RGF0YS5wb3NpdGlvbnMpLmxlbmd0aCAvIDM7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGluZGljZXMucHVzaChqKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0ZW1wVmVydGV4RGF0YS5pbmRpY2VzID0gbmV3IEludDMyQXJyYXkoaW5kaWNlcyk7XHJcbiAgICAgICAgICAgICAgICBpbmRleENvdW50cy5wdXNoKHRlbXBWZXJ0ZXhEYXRhLmluZGljZXMubGVuZ3RoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCF2ZXJ0ZXhEYXRhKSB7XHJcbiAgICAgICAgICAgICAgICB2ZXJ0ZXhEYXRhID0gdGVtcFZlcnRleERhdGE7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB2ZXJ0ZXhEYXRhLm1lcmdlKHRlbXBWZXJ0ZXhEYXRhKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gU3ViIG1hdGVyaWFsXHJcbiAgICAgICAgICAgIGNvbnN0IG1hdGVyaWFsID0gZ2x0ZlJ1bnRpbWUuc2NlbmUuZ2V0TWF0ZXJpYWxCeUlkKHByaW1pdGl2ZS5tYXRlcmlhbCk7XHJcblxyXG4gICAgICAgICAgICBzdWJNYXRlcmlhbHMucHVzaChtYXRlcmlhbCA9PT0gbnVsbCA/IEdMVEZVdGlscy5HZXREZWZhdWx0TWF0ZXJpYWwoZ2x0ZlJ1bnRpbWUuc2NlbmUpIDogbWF0ZXJpYWwpO1xyXG5cclxuICAgICAgICAgICAgLy8gVXBkYXRlIHZlcnRpY2VzIHN0YXJ0IGFuZCBpbmRleCBzdGFydFxyXG4gICAgICAgICAgICB2ZXJ0aWNlc1N0YXJ0cy5wdXNoKHZlcnRpY2VzU3RhcnRzLmxlbmd0aCA9PT0gMCA/IDAgOiB2ZXJ0aWNlc1N0YXJ0c1t2ZXJ0aWNlc1N0YXJ0cy5sZW5ndGggLSAxXSArIHZlcnRpY2VzQ291bnRzW3ZlcnRpY2VzQ291bnRzLmxlbmd0aCAtIDJdKTtcclxuICAgICAgICAgICAgaW5kZXhTdGFydHMucHVzaChpbmRleFN0YXJ0cy5sZW5ndGggPT09IDAgPyAwIDogaW5kZXhTdGFydHNbaW5kZXhTdGFydHMubGVuZ3RoIC0gMV0gKyBpbmRleENvdW50c1tpbmRleENvdW50cy5sZW5ndGggLSAyXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbGV0IG1hdGVyaWFsOiBTdGFuZGFyZE1hdGVyaWFsIHwgTXVsdGlNYXRlcmlhbDtcclxuICAgIGdsdGZSdW50aW1lLnNjZW5lLl9ibG9ja0VudGl0eUNvbGxlY3Rpb24gPSAhIWdsdGZSdW50aW1lLmFzc2V0Q29udGFpbmVyO1xyXG4gICAgaWYgKHN1Yk1hdGVyaWFscy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgbWF0ZXJpYWwgPSBuZXcgTXVsdGlNYXRlcmlhbChcIm11bHRpbWF0XCIgKyBpZCwgZ2x0ZlJ1bnRpbWUuc2NlbmUpO1xyXG4gICAgICAgIChtYXRlcmlhbCBhcyBNdWx0aU1hdGVyaWFsKS5zdWJNYXRlcmlhbHMgPSBzdWJNYXRlcmlhbHM7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIG1hdGVyaWFsID0gbmV3IFN0YW5kYXJkTWF0ZXJpYWwoXCJtdWx0aW1hdFwiICsgaWQsIGdsdGZSdW50aW1lLnNjZW5lKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoc3ViTWF0ZXJpYWxzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgIG1hdGVyaWFsID0gc3ViTWF0ZXJpYWxzWzBdIGFzIFN0YW5kYXJkTWF0ZXJpYWw7XHJcbiAgICB9XHJcblxyXG4gICAgbWF0ZXJpYWwuX3BhcmVudENvbnRhaW5lciA9IGdsdGZSdW50aW1lLmFzc2V0Q29udGFpbmVyO1xyXG5cclxuICAgIGlmICghbmV3TWVzaC5tYXRlcmlhbCkge1xyXG4gICAgICAgIG5ld01lc2gubWF0ZXJpYWwgPSBtYXRlcmlhbDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBBcHBseSBnZW9tZXRyeVxyXG4gICAgbmV3IEdlb21ldHJ5KGlkLCBnbHRmUnVudGltZS5zY2VuZSwgdmVydGV4RGF0YSEsIGZhbHNlLCBuZXdNZXNoKTtcclxuICAgIG5ld01lc2guY29tcHV0ZVdvcmxkTWF0cml4KHRydWUpO1xyXG5cclxuICAgIGdsdGZSdW50aW1lLnNjZW5lLl9ibG9ja0VudGl0eUNvbGxlY3Rpb24gPSBmYWxzZTtcclxuXHJcbiAgICAvLyBBcHBseSBzdWJtZXNoZXNcclxuICAgIG5ld01lc2guc3ViTWVzaGVzID0gW107XHJcbiAgICBsZXQgaW5kZXggPSAwO1xyXG4gICAgZm9yIChsZXQgbWVzaEluZGV4ID0gMDsgbWVzaEluZGV4IDwgbWVzaGVzLmxlbmd0aDsgbWVzaEluZGV4KyspIHtcclxuICAgICAgICBjb25zdCBtZXNoSWQgPSBtZXNoZXNbbWVzaEluZGV4XTtcclxuICAgICAgICBjb25zdCBtZXNoOiBJR0xURk1lc2ggPSBnbHRmUnVudGltZS5tZXNoZXNbbWVzaElkXTtcclxuXHJcbiAgICAgICAgaWYgKCFtZXNoKSB7XHJcbiAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtZXNoLnByaW1pdGl2ZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKG1lc2gucHJpbWl0aXZlc1tpXS5tb2RlICE9PSA0KSB7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBTdWJNZXNoLkFkZFRvTWVzaChpbmRleCwgdmVydGljZXNTdGFydHNbaW5kZXhdLCB2ZXJ0aWNlc0NvdW50c1tpbmRleF0sIGluZGV4U3RhcnRzW2luZGV4XSwgaW5kZXhDb3VudHNbaW5kZXhdLCBuZXdNZXNoLCBuZXdNZXNoLCB0cnVlKTtcclxuICAgICAgICAgICAgaW5kZXgrKztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRmluaXNoXHJcbiAgICByZXR1cm4gbmV3TWVzaDtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBDb25maWd1cmUgbm9kZSB0cmFuc2Zvcm1hdGlvbiBmcm9tIHBvc2l0aW9uLCByb3RhdGlvbiBhbmQgc2NhbGluZ1xyXG4gKiBAcGFyYW0gbmV3Tm9kZVxyXG4gKiBAcGFyYW0gcG9zaXRpb25cclxuICogQHBhcmFtIHJvdGF0aW9uXHJcbiAqIEBwYXJhbSBzY2FsaW5nXHJcbiAqL1xyXG5jb25zdCBjb25maWd1cmVOb2RlID0gKG5ld05vZGU6IGFueSwgcG9zaXRpb246IFZlY3RvcjMsIHJvdGF0aW9uOiBRdWF0ZXJuaW9uLCBzY2FsaW5nOiBWZWN0b3IzKSA9PiB7XHJcbiAgICBpZiAobmV3Tm9kZS5wb3NpdGlvbikge1xyXG4gICAgICAgIG5ld05vZGUucG9zaXRpb24gPSBwb3NpdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAobmV3Tm9kZS5yb3RhdGlvblF1YXRlcm5pb24gfHwgbmV3Tm9kZS5yb3RhdGlvbikge1xyXG4gICAgICAgIG5ld05vZGUucm90YXRpb25RdWF0ZXJuaW9uID0gcm90YXRpb247XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG5ld05vZGUuc2NhbGluZykge1xyXG4gICAgICAgIG5ld05vZGUuc2NhbGluZyA9IHNjYWxpbmc7XHJcbiAgICB9XHJcbn07XHJcblxyXG4vKipcclxuICogQ29uZmlndXJlcyBub2RlIGZyb20gdHJhbnNmb3JtYXRpb24gbWF0cml4XHJcbiAqIEBwYXJhbSBuZXdOb2RlXHJcbiAqIEBwYXJhbSBub2RlXHJcbiAqL1xyXG5jb25zdCBjb25maWd1cmVOb2RlRnJvbU1hdHJpeCA9IChuZXdOb2RlOiBNZXNoLCBub2RlOiBJR0xURk5vZGUpID0+IHtcclxuICAgIGlmIChub2RlLm1hdHJpeCkge1xyXG4gICAgICAgIGNvbnN0IHBvc2l0aW9uID0gbmV3IFZlY3RvcjMoMCwgMCwgMCk7XHJcbiAgICAgICAgY29uc3Qgcm90YXRpb24gPSBuZXcgUXVhdGVybmlvbigpO1xyXG4gICAgICAgIGNvbnN0IHNjYWxpbmcgPSBuZXcgVmVjdG9yMygwLCAwLCAwKTtcclxuICAgICAgICBjb25zdCBtYXQgPSBNYXRyaXguRnJvbUFycmF5KG5vZGUubWF0cml4KTtcclxuICAgICAgICBtYXQuZGVjb21wb3NlKHNjYWxpbmcsIHJvdGF0aW9uLCBwb3NpdGlvbik7XHJcblxyXG4gICAgICAgIGNvbmZpZ3VyZU5vZGUobmV3Tm9kZSwgcG9zaXRpb24sIHJvdGF0aW9uLCBzY2FsaW5nKTtcclxuICAgIH0gZWxzZSBpZiAobm9kZS50cmFuc2xhdGlvbiAmJiBub2RlLnJvdGF0aW9uICYmIG5vZGUuc2NhbGUpIHtcclxuICAgICAgICBjb25maWd1cmVOb2RlKG5ld05vZGUsIFZlY3RvcjMuRnJvbUFycmF5KG5vZGUudHJhbnNsYXRpb24pLCBRdWF0ZXJuaW9uLkZyb21BcnJheShub2RlLnJvdGF0aW9uKSwgVmVjdG9yMy5Gcm9tQXJyYXkobm9kZS5zY2FsZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIG5ld05vZGUuY29tcHV0ZVdvcmxkTWF0cml4KHRydWUpO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEltcG9ydHMgYSBub2RlXHJcbiAqIEBwYXJhbSBnbHRmUnVudGltZVxyXG4gKiBAcGFyYW0gbm9kZVxyXG4gKiBAcGFyYW0gaWRcclxuICogQHJldHVybnMgdGhlIG5ld2x5IGltcG9ydGVkIG5vZGVcclxuICovXHJcbmNvbnN0IGltcG9ydE5vZGUgPSAoZ2x0ZlJ1bnRpbWU6IElHTFRGUnVudGltZSwgbm9kZTogSUdMVEZOb2RlLCBpZDogc3RyaW5nKTogTnVsbGFibGU8Tm9kZT4gPT4ge1xyXG4gICAgbGV0IGxhc3ROb2RlOiBOdWxsYWJsZTxOb2RlPiA9IG51bGw7XHJcblxyXG4gICAgaWYgKGdsdGZSdW50aW1lLmltcG9ydE9ubHlNZXNoZXMgJiYgKG5vZGUuc2tpbiB8fCBub2RlLm1lc2hlcykpIHtcclxuICAgICAgICBpZiAoZ2x0ZlJ1bnRpbWUuaW1wb3J0TWVzaGVzTmFtZXMgJiYgZ2x0ZlJ1bnRpbWUuaW1wb3J0TWVzaGVzTmFtZXMubGVuZ3RoID4gMCAmJiBnbHRmUnVudGltZS5pbXBvcnRNZXNoZXNOYW1lcy5pbmRleE9mKG5vZGUubmFtZSB8fCBcIlwiKSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIE1lc2hlc1xyXG4gICAgaWYgKG5vZGUuc2tpbikge1xyXG4gICAgICAgIGlmIChub2RlLm1lc2hlcykge1xyXG4gICAgICAgICAgICBjb25zdCBza2luOiBJR0xURlNraW5zID0gZ2x0ZlJ1bnRpbWUuc2tpbnNbbm9kZS5za2luXTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IG5ld01lc2ggPSBpbXBvcnRNZXNoKGdsdGZSdW50aW1lLCBub2RlLCBub2RlLm1lc2hlcywgaWQsIDxNZXNoPm5vZGUuYmFieWxvbk5vZGUpO1xyXG4gICAgICAgICAgICBuZXdNZXNoLnNrZWxldG9uID0gZ2x0ZlJ1bnRpbWUuc2NlbmUuZ2V0TGFzdFNrZWxldG9uQnlJZChub2RlLnNraW4pO1xyXG5cclxuICAgICAgICAgICAgaWYgKG5ld01lc2guc2tlbGV0b24gPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIG5ld01lc2guc2tlbGV0b24gPSBpbXBvcnRTa2VsZXRvbihnbHRmUnVudGltZSwgc2tpbiwgbmV3TWVzaCwgc2tpbi5iYWJ5bG9uU2tlbGV0b24pO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICghc2tpbi5iYWJ5bG9uU2tlbGV0b24pIHtcclxuICAgICAgICAgICAgICAgICAgICBza2luLmJhYnlsb25Ta2VsZXRvbiA9IG5ld01lc2guc2tlbGV0b247XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxhc3ROb2RlID0gbmV3TWVzaDtcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKG5vZGUubWVzaGVzKSB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogSW1wcm92ZSBtZXNoZXMgcHJvcGVydHlcclxuICAgICAgICAgKi9cclxuICAgICAgICBjb25zdCBuZXdNZXNoID0gaW1wb3J0TWVzaChnbHRmUnVudGltZSwgbm9kZSwgbm9kZS5tZXNoID8gW25vZGUubWVzaF0gOiBub2RlLm1lc2hlcywgaWQsIDxNZXNoPm5vZGUuYmFieWxvbk5vZGUpO1xyXG4gICAgICAgIGxhc3ROb2RlID0gbmV3TWVzaDtcclxuICAgIH1cclxuICAgIC8vIExpZ2h0c1xyXG4gICAgZWxzZSBpZiAobm9kZS5saWdodCAmJiAhbm9kZS5iYWJ5bG9uTm9kZSAmJiAhZ2x0ZlJ1bnRpbWUuaW1wb3J0T25seU1lc2hlcykge1xyXG4gICAgICAgIGNvbnN0IGxpZ2h0OiBJR0xURkxpZ2h0ID0gZ2x0ZlJ1bnRpbWUubGlnaHRzW25vZGUubGlnaHRdO1xyXG5cclxuICAgICAgICBpZiAobGlnaHQpIHtcclxuICAgICAgICAgICAgaWYgKGxpZ2h0LnR5cGUgPT09IFwiYW1iaWVudFwiKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhbWJpZW5MaWdodDogSUdMVEZBbWJpZW5MaWdodCA9ICg8YW55PmxpZ2h0KVtsaWdodC50eXBlXTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGhlbWlMaWdodCA9IG5ldyBIZW1pc3BoZXJpY0xpZ2h0KG5vZGUubGlnaHQsIFZlY3RvcjMuWmVybygpLCBnbHRmUnVudGltZS5zY2VuZSk7XHJcbiAgICAgICAgICAgICAgICBoZW1pTGlnaHQubmFtZSA9IG5vZGUubmFtZSB8fCBcIlwiO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChhbWJpZW5MaWdodC5jb2xvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlbWlMaWdodC5kaWZmdXNlID0gQ29sb3IzLkZyb21BcnJheShhbWJpZW5MaWdodC5jb2xvcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgbGFzdE5vZGUgPSBoZW1pTGlnaHQ7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobGlnaHQudHlwZSA9PT0gXCJkaXJlY3Rpb25hbFwiKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkaXJlY3Rpb25hbExpZ2h0OiBJR0xURkRpcmVjdGlvbmFsTGlnaHQgPSAoPGFueT5saWdodClbbGlnaHQudHlwZV07XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkaXJMaWdodCA9IG5ldyBEaXJlY3Rpb25hbExpZ2h0KG5vZGUubGlnaHQsIFZlY3RvcjMuWmVybygpLCBnbHRmUnVudGltZS5zY2VuZSk7XHJcbiAgICAgICAgICAgICAgICBkaXJMaWdodC5uYW1lID0gbm9kZS5uYW1lIHx8IFwiXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGRpcmVjdGlvbmFsTGlnaHQuY29sb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXJMaWdodC5kaWZmdXNlID0gQ29sb3IzLkZyb21BcnJheShkaXJlY3Rpb25hbExpZ2h0LmNvbG9yKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBsYXN0Tm9kZSA9IGRpckxpZ2h0O1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGxpZ2h0LnR5cGUgPT09IFwicG9pbnRcIikge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcG9pbnRMaWdodDogSUdMVEZQb2ludExpZ2h0ID0gKDxhbnk+bGlnaHQpW2xpZ2h0LnR5cGVdO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcHRMaWdodCA9IG5ldyBQb2ludExpZ2h0KG5vZGUubGlnaHQsIFZlY3RvcjMuWmVybygpLCBnbHRmUnVudGltZS5zY2VuZSk7XHJcbiAgICAgICAgICAgICAgICBwdExpZ2h0Lm5hbWUgPSBub2RlLm5hbWUgfHwgXCJcIjtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAocG9pbnRMaWdodC5jb2xvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHB0TGlnaHQuZGlmZnVzZSA9IENvbG9yMy5Gcm9tQXJyYXkocG9pbnRMaWdodC5jb2xvcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgbGFzdE5vZGUgPSBwdExpZ2h0O1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGxpZ2h0LnR5cGUgPT09IFwic3BvdFwiKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzcG90TGlnaHQ6IElHTFRGU3BvdExpZ2h0ID0gKDxhbnk+bGlnaHQpW2xpZ2h0LnR5cGVdO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3BMaWdodCA9IG5ldyBTcG90TGlnaHQobm9kZS5saWdodCwgVmVjdG9yMy5aZXJvKCksIFZlY3RvcjMuWmVybygpLCAwLCAwLCBnbHRmUnVudGltZS5zY2VuZSk7XHJcbiAgICAgICAgICAgICAgICBzcExpZ2h0Lm5hbWUgPSBub2RlLm5hbWUgfHwgXCJcIjtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoc3BvdExpZ2h0LmNvbG9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3BMaWdodC5kaWZmdXNlID0gQ29sb3IzLkZyb21BcnJheShzcG90TGlnaHQuY29sb3IpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChzcG90TGlnaHQuZmFsbE9mQW5nbGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBzcExpZ2h0LmFuZ2xlID0gc3BvdExpZ2h0LmZhbGxPZkFuZ2xlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChzcG90TGlnaHQuZmFsbE9mZkV4cG9uZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3BMaWdodC5leHBvbmVudCA9IHNwb3RMaWdodC5mYWxsT2ZmRXhwb25lbnQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgbGFzdE5vZGUgPSBzcExpZ2h0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gQ2FtZXJhc1xyXG4gICAgZWxzZSBpZiAobm9kZS5jYW1lcmEgJiYgIW5vZGUuYmFieWxvbk5vZGUgJiYgIWdsdGZSdW50aW1lLmltcG9ydE9ubHlNZXNoZXMpIHtcclxuICAgICAgICBjb25zdCBjYW1lcmE6IElHTFRGQ2FtZXJhID0gZ2x0ZlJ1bnRpbWUuY2FtZXJhc1tub2RlLmNhbWVyYV07XHJcblxyXG4gICAgICAgIGlmIChjYW1lcmEpIHtcclxuICAgICAgICAgICAgZ2x0ZlJ1bnRpbWUuc2NlbmUuX2Jsb2NrRW50aXR5Q29sbGVjdGlvbiA9ICEhZ2x0ZlJ1bnRpbWUuYXNzZXRDb250YWluZXI7XHJcbiAgICAgICAgICAgIGlmIChjYW1lcmEudHlwZSA9PT0gXCJvcnRob2dyYXBoaWNcIikge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgb3J0aG9DYW1lcmEgPSBuZXcgRnJlZUNhbWVyYShub2RlLmNhbWVyYSwgVmVjdG9yMy5aZXJvKCksIGdsdGZSdW50aW1lLnNjZW5lLCBmYWxzZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgb3J0aG9DYW1lcmEubmFtZSA9IG5vZGUubmFtZSB8fCBcIlwiO1xyXG4gICAgICAgICAgICAgICAgb3J0aG9DYW1lcmEubW9kZSA9IENhbWVyYS5PUlRIT0dSQVBISUNfQ0FNRVJBO1xyXG4gICAgICAgICAgICAgICAgb3J0aG9DYW1lcmEuYXR0YWNoQ29udHJvbCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGxhc3ROb2RlID0gb3J0aG9DYW1lcmE7XHJcblxyXG4gICAgICAgICAgICAgICAgb3J0aG9DYW1lcmEuX3BhcmVudENvbnRhaW5lciA9IGdsdGZSdW50aW1lLmFzc2V0Q29udGFpbmVyO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNhbWVyYS50eXBlID09PSBcInBlcnNwZWN0aXZlXCIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBlcnNwZWN0aXZlQ2FtZXJhOiBJR0xURkNhbWVyYVBlcnNwZWN0aXZlID0gKDxhbnk+Y2FtZXJhKVtjYW1lcmEudHlwZV07XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwZXJzQ2FtZXJhID0gbmV3IEZyZWVDYW1lcmEobm9kZS5jYW1lcmEsIFZlY3RvcjMuWmVybygpLCBnbHRmUnVudGltZS5zY2VuZSwgZmFsc2UpO1xyXG5cclxuICAgICAgICAgICAgICAgIHBlcnNDYW1lcmEubmFtZSA9IG5vZGUubmFtZSB8fCBcIlwiO1xyXG4gICAgICAgICAgICAgICAgcGVyc0NhbWVyYS5hdHRhY2hDb250cm9sKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCFwZXJzcGVjdGl2ZUNhbWVyYS5hc3BlY3RSYXRpbykge1xyXG4gICAgICAgICAgICAgICAgICAgIHBlcnNwZWN0aXZlQ2FtZXJhLmFzcGVjdFJhdGlvID0gZ2x0ZlJ1bnRpbWUuc2NlbmUuZ2V0RW5naW5lKCkuZ2V0UmVuZGVyV2lkdGgoKSAvIGdsdGZSdW50aW1lLnNjZW5lLmdldEVuZ2luZSgpLmdldFJlbmRlckhlaWdodCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChwZXJzcGVjdGl2ZUNhbWVyYS56bmVhciAmJiBwZXJzcGVjdGl2ZUNhbWVyYS56ZmFyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGVyc0NhbWVyYS5tYXhaID0gcGVyc3BlY3RpdmVDYW1lcmEuemZhcjtcclxuICAgICAgICAgICAgICAgICAgICBwZXJzQ2FtZXJhLm1pblogPSBwZXJzcGVjdGl2ZUNhbWVyYS56bmVhcjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBsYXN0Tm9kZSA9IHBlcnNDYW1lcmE7XHJcbiAgICAgICAgICAgICAgICBwZXJzQ2FtZXJhLl9wYXJlbnRDb250YWluZXIgPSBnbHRmUnVudGltZS5hc3NldENvbnRhaW5lcjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZ2x0ZlJ1bnRpbWUuc2NlbmUuX2Jsb2NrRW50aXR5Q29sbGVjdGlvbiA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBFbXB0eSBub2RlXHJcbiAgICBpZiAoIW5vZGUuam9pbnROYW1lKSB7XHJcbiAgICAgICAgaWYgKG5vZGUuYmFieWxvbk5vZGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5vZGUuYmFieWxvbk5vZGU7XHJcbiAgICAgICAgfSBlbHNlIGlmIChsYXN0Tm9kZSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICBnbHRmUnVudGltZS5zY2VuZS5fYmxvY2tFbnRpdHlDb2xsZWN0aW9uID0gISFnbHRmUnVudGltZS5hc3NldENvbnRhaW5lcjtcclxuICAgICAgICAgICAgY29uc3QgZHVtbXkgPSBuZXcgTWVzaChub2RlLm5hbWUgfHwgXCJcIiwgZ2x0ZlJ1bnRpbWUuc2NlbmUpO1xyXG4gICAgICAgICAgICBkdW1teS5fcGFyZW50Q29udGFpbmVyID0gZ2x0ZlJ1bnRpbWUuYXNzZXRDb250YWluZXI7XHJcbiAgICAgICAgICAgIGdsdGZSdW50aW1lLnNjZW5lLl9ibG9ja0VudGl0eUNvbGxlY3Rpb24gPSBmYWxzZTtcclxuICAgICAgICAgICAgbm9kZS5iYWJ5bG9uTm9kZSA9IGR1bW15O1xyXG4gICAgICAgICAgICBsYXN0Tm9kZSA9IGR1bW15O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAobGFzdE5vZGUgIT09IG51bGwpIHtcclxuICAgICAgICBpZiAobm9kZS5tYXRyaXggJiYgbGFzdE5vZGUgaW5zdGFuY2VvZiBNZXNoKSB7XHJcbiAgICAgICAgICAgIGNvbmZpZ3VyZU5vZGVGcm9tTWF0cml4KGxhc3ROb2RlLCBub2RlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCB0cmFuc2xhdGlvbiA9IG5vZGUudHJhbnNsYXRpb24gfHwgWzAsIDAsIDBdO1xyXG4gICAgICAgICAgICBjb25zdCByb3RhdGlvbiA9IG5vZGUucm90YXRpb24gfHwgWzAsIDAsIDAsIDFdO1xyXG4gICAgICAgICAgICBjb25zdCBzY2FsZSA9IG5vZGUuc2NhbGUgfHwgWzEsIDEsIDFdO1xyXG4gICAgICAgICAgICBjb25maWd1cmVOb2RlKGxhc3ROb2RlLCBWZWN0b3IzLkZyb21BcnJheSh0cmFuc2xhdGlvbiksIFF1YXRlcm5pb24uRnJvbUFycmF5KHJvdGF0aW9uKSwgVmVjdG9yMy5Gcm9tQXJyYXkoc2NhbGUpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxhc3ROb2RlLnVwZGF0ZUNhY2hlKHRydWUpO1xyXG4gICAgICAgIG5vZGUuYmFieWxvbk5vZGUgPSBsYXN0Tm9kZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbGFzdE5vZGU7XHJcbn07XHJcblxyXG4vKipcclxuICogVHJhdmVyc2VzIG5vZGVzIGFuZCBjcmVhdGVzIHRoZW1cclxuICogQHBhcmFtIGdsdGZSdW50aW1lXHJcbiAqIEBwYXJhbSBpZFxyXG4gKiBAcGFyYW0gcGFyZW50XHJcbiAqIEBwYXJhbSBtZXNoSW5jbHVkZWRcclxuICovXHJcbmNvbnN0IHRyYXZlcnNlTm9kZXMgPSAoZ2x0ZlJ1bnRpbWU6IElHTFRGUnVudGltZSwgaWQ6IHN0cmluZywgcGFyZW50OiBOdWxsYWJsZTxOb2RlPiwgbWVzaEluY2x1ZGVkOiBib29sZWFuID0gZmFsc2UpID0+IHtcclxuICAgIGNvbnN0IG5vZGU6IElHTFRGTm9kZSA9IGdsdGZSdW50aW1lLm5vZGVzW2lkXTtcclxuICAgIGxldCBuZXdOb2RlOiBOdWxsYWJsZTxOb2RlPiA9IG51bGw7XHJcblxyXG4gICAgaWYgKGdsdGZSdW50aW1lLmltcG9ydE9ubHlNZXNoZXMgJiYgIW1lc2hJbmNsdWRlZCAmJiBnbHRmUnVudGltZS5pbXBvcnRNZXNoZXNOYW1lcykge1xyXG4gICAgICAgIGlmIChnbHRmUnVudGltZS5pbXBvcnRNZXNoZXNOYW1lcy5pbmRleE9mKG5vZGUubmFtZSB8fCBcIlwiKSAhPT0gLTEgfHwgZ2x0ZlJ1bnRpbWUuaW1wb3J0TWVzaGVzTmFtZXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIG1lc2hJbmNsdWRlZCA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbWVzaEluY2x1ZGVkID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBtZXNoSW5jbHVkZWQgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghbm9kZS5qb2ludE5hbWUgJiYgbWVzaEluY2x1ZGVkKSB7XHJcbiAgICAgICAgbmV3Tm9kZSA9IGltcG9ydE5vZGUoZ2x0ZlJ1bnRpbWUsIG5vZGUsIGlkKTtcclxuXHJcbiAgICAgICAgaWYgKG5ld05vZGUgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgbmV3Tm9kZS5pZCA9IGlkO1xyXG4gICAgICAgICAgICBuZXdOb2RlLnBhcmVudCA9IHBhcmVudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG5vZGUuY2hpbGRyZW4pIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5vZGUuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdHJhdmVyc2VOb2RlcyhnbHRmUnVudGltZSwgbm9kZS5jaGlsZHJlbltpXSwgbmV3Tm9kZSwgbWVzaEluY2x1ZGVkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcblxyXG4vKipcclxuICogZG8gc3R1ZmYgYWZ0ZXIgYnVmZmVycywgc2hhZGVycyBhcmUgbG9hZGVkIChlLmcuIGhvb2sgdXAgbWF0ZXJpYWxzLCBsb2FkIGFuaW1hdGlvbnMsIGV0Yy4pXHJcbiAqIEBwYXJhbSBnbHRmUnVudGltZVxyXG4gKi9cclxuY29uc3QgcG9zdExvYWQgPSAoZ2x0ZlJ1bnRpbWU6IElHTFRGUnVudGltZSkgPT4ge1xyXG4gICAgLy8gTm9kZXNcclxuICAgIGxldCBjdXJyZW50U2NlbmU6IElHTFRGU2NlbmUgPSA8SUdMVEZTY2VuZT5nbHRmUnVudGltZS5jdXJyZW50U2NlbmU7XHJcblxyXG4gICAgaWYgKGN1cnJlbnRTY2VuZSkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY3VycmVudFNjZW5lLm5vZGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRyYXZlcnNlTm9kZXMoZ2x0ZlJ1bnRpbWUsIGN1cnJlbnRTY2VuZS5ub2Rlc1tpXSwgbnVsbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBmb3IgKGNvbnN0IHRoaW5nIGluIGdsdGZSdW50aW1lLnNjZW5lcykge1xyXG4gICAgICAgICAgICBjdXJyZW50U2NlbmUgPSA8SUdMVEZTY2VuZT5nbHRmUnVudGltZS5zY2VuZXNbdGhpbmddO1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjdXJyZW50U2NlbmUubm9kZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHRyYXZlcnNlTm9kZXMoZ2x0ZlJ1bnRpbWUsIGN1cnJlbnRTY2VuZS5ub2Rlc1tpXSwgbnVsbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2V0IGFuaW1hdGlvbnNcclxuICAgIGxvYWRBbmltYXRpb25zKGdsdGZSdW50aW1lKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdsdGZSdW50aW1lLnNjZW5lLnNrZWxldG9ucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IHNrZWxldG9uID0gZ2x0ZlJ1bnRpbWUuc2NlbmUuc2tlbGV0b25zW2ldO1xyXG4gICAgICAgIGdsdGZSdW50aW1lLnNjZW5lLmJlZ2luQW5pbWF0aW9uKHNrZWxldG9uLCAwLCBOdW1iZXIuTUFYX1ZBTFVFLCB0cnVlLCAxLjApO1xyXG4gICAgfVxyXG59O1xyXG5cclxuLyoqXHJcbiAqIG9uQmluZCBzaGFkZXJycyBjYWxsYmFjayB0byBzZXQgdW5pZm9ybXMgYW5kIG1hdHJpY2VzXHJcbiAqIEBwYXJhbSBtZXNoXHJcbiAqIEBwYXJhbSBnbHRmUnVudGltZVxyXG4gKiBAcGFyYW0gdW5UcmVhdGVkVW5pZm9ybXNcclxuICogQHBhcmFtIHNoYWRlck1hdGVyaWFsXHJcbiAqIEBwYXJhbSB0ZWNobmlxdWVcclxuICogQHBhcmFtIG1hdGVyaWFsXHJcbiAqIEBwYXJhbSBvblN1Y2Nlc3NcclxuICovXHJcbmNvbnN0IG9uQmluZFNoYWRlck1hdGVyaWFsID0gKFxyXG4gICAgbWVzaDogQWJzdHJhY3RNZXNoLFxyXG4gICAgZ2x0ZlJ1bnRpbWU6IElHTFRGUnVudGltZSxcclxuICAgIHVuVHJlYXRlZFVuaWZvcm1zOiB7IFtrZXk6IHN0cmluZ106IElHTFRGVGVjaG5pcXVlUGFyYW1ldGVyIH0sXHJcbiAgICBzaGFkZXJNYXRlcmlhbDogU2hhZGVyTWF0ZXJpYWwsXHJcbiAgICB0ZWNobmlxdWU6IElHTFRGVGVjaG5pcXVlLFxyXG4gICAgbWF0ZXJpYWw6IElHTFRGTWF0ZXJpYWwsXHJcbiAgICBvblN1Y2Nlc3M6IChzaGFkZXJNYXRlcmlhbDogU2hhZGVyTWF0ZXJpYWwpID0+IHZvaWRcclxuKSA9PiB7XHJcbiAgICBjb25zdCBtYXRlcmlhbFZhbHVlcyA9IG1hdGVyaWFsLnZhbHVlcyB8fCB0ZWNobmlxdWUucGFyYW1ldGVycztcclxuXHJcbiAgICBmb3IgKGNvbnN0IHVuaWYgaW4gdW5UcmVhdGVkVW5pZm9ybXMpIHtcclxuICAgICAgICBjb25zdCB1bmlmb3JtOiBJR0xURlRlY2huaXF1ZVBhcmFtZXRlciA9IHVuVHJlYXRlZFVuaWZvcm1zW3VuaWZdO1xyXG4gICAgICAgIGNvbnN0IHR5cGUgPSB1bmlmb3JtLnR5cGU7XHJcblxyXG4gICAgICAgIGlmICh0eXBlID09PSBFUGFyYW1ldGVyVHlwZS5GTE9BVF9NQVQyIHx8IHR5cGUgPT09IEVQYXJhbWV0ZXJUeXBlLkZMT0FUX01BVDMgfHwgdHlwZSA9PT0gRVBhcmFtZXRlclR5cGUuRkxPQVRfTUFUNCkge1xyXG4gICAgICAgICAgICBpZiAodW5pZm9ybS5zZW1hbnRpYyAmJiAhdW5pZm9ybS5zb3VyY2UgJiYgIXVuaWZvcm0ubm9kZSkge1xyXG4gICAgICAgICAgICAgICAgR0xURlV0aWxzLlNldE1hdHJpeChnbHRmUnVudGltZS5zY2VuZSwgbWVzaCwgdW5pZm9ybSwgdW5pZiwgPEVmZmVjdD5zaGFkZXJNYXRlcmlhbC5nZXRFZmZlY3QoKSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodW5pZm9ybS5zZW1hbnRpYyAmJiAodW5pZm9ybS5zb3VyY2UgfHwgdW5pZm9ybS5ub2RlKSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHNvdXJjZSA9IGdsdGZSdW50aW1lLnNjZW5lLmdldE5vZGVCeU5hbWUodW5pZm9ybS5zb3VyY2UgfHwgdW5pZm9ybS5ub2RlIHx8IFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHNvdXJjZSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNvdXJjZSA9IGdsdGZSdW50aW1lLnNjZW5lLmdldE5vZGVCeUlkKHVuaWZvcm0uc291cmNlIHx8IHVuaWZvcm0ubm9kZSB8fCBcIlwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChzb3VyY2UgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBHTFRGVXRpbHMuU2V0TWF0cml4KGdsdGZSdW50aW1lLnNjZW5lLCBzb3VyY2UsIHVuaWZvcm0sIHVuaWYsIDxFZmZlY3Q+c2hhZGVyTWF0ZXJpYWwuZ2V0RWZmZWN0KCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSAoPGFueT5tYXRlcmlhbFZhbHVlcylbdGVjaG5pcXVlLnVuaWZvcm1zW3VuaWZdXTtcclxuICAgICAgICAgICAgaWYgKCF2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0eXBlID09PSBFUGFyYW1ldGVyVHlwZS5TQU1QTEVSXzJEKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0ZXh0dXJlID0gZ2x0ZlJ1bnRpbWUudGV4dHVyZXNbbWF0ZXJpYWwudmFsdWVzID8gdmFsdWUgOiB1bmlmb3JtLnZhbHVlXS5iYWJ5bG9uVGV4dHVyZTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGV4dHVyZSA9PT0gbnVsbCB8fCB0ZXh0dXJlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAoPEVmZmVjdD5zaGFkZXJNYXRlcmlhbC5nZXRFZmZlY3QoKSkuc2V0VGV4dHVyZSh1bmlmLCB0ZXh0dXJlKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIEdMVEZVdGlscy5TZXRVbmlmb3JtKDxFZmZlY3Q+c2hhZGVyTWF0ZXJpYWwuZ2V0RWZmZWN0KCksIHVuaWYsIHZhbHVlLCB0eXBlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvblN1Y2Nlc3Moc2hhZGVyTWF0ZXJpYWwpO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIFByZXBhcmUgdW5pZm9ybXMgdG8gc2VuZCB0aGUgb25seSBvbmUgdGltZVxyXG4gKiBMb2FkcyB0aGUgYXBwcm9wcmlhdGUgdGV4dHVyZXNcclxuICogQHBhcmFtIGdsdGZSdW50aW1lXHJcbiAqIEBwYXJhbSBzaGFkZXJNYXRlcmlhbFxyXG4gKiBAcGFyYW0gdGVjaG5pcXVlXHJcbiAqIEBwYXJhbSBtYXRlcmlhbFxyXG4gKi9cclxuY29uc3QgcHJlcGFyZVNoYWRlck1hdGVyaWFsVW5pZm9ybXMgPSAoXHJcbiAgICBnbHRmUnVudGltZTogSUdMVEZSdW50aW1lLFxyXG4gICAgc2hhZGVyTWF0ZXJpYWw6IFNoYWRlck1hdGVyaWFsLFxyXG4gICAgdGVjaG5pcXVlOiBJR0xURlRlY2huaXF1ZSxcclxuICAgIG1hdGVyaWFsOiBJR0xURk1hdGVyaWFsLFxyXG4gICAgdW5UcmVhdGVkVW5pZm9ybXM6IHsgW2tleTogc3RyaW5nXTogSUdMVEZUZWNobmlxdWVQYXJhbWV0ZXIgfVxyXG4pID0+IHtcclxuICAgIGNvbnN0IG1hdGVyaWFsVmFsdWVzID0gbWF0ZXJpYWwudmFsdWVzIHx8IHRlY2huaXF1ZS5wYXJhbWV0ZXJzO1xyXG4gICAgY29uc3QgdGVjaG5pcXVlVW5pZm9ybXMgPSB0ZWNobmlxdWUudW5pZm9ybXM7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBQcmVwYXJlIHZhbHVlcyBoZXJlIChub3QgbWF0cmljZXMpXHJcbiAgICAgKi9cclxuICAgIGZvciAoY29uc3QgdW5pZiBpbiB1blRyZWF0ZWRVbmlmb3Jtcykge1xyXG4gICAgICAgIGNvbnN0IHVuaWZvcm06IElHTFRGVGVjaG5pcXVlUGFyYW1ldGVyID0gdW5UcmVhdGVkVW5pZm9ybXNbdW5pZl07XHJcbiAgICAgICAgY29uc3QgdHlwZSA9IHVuaWZvcm0udHlwZTtcclxuICAgICAgICBsZXQgdmFsdWUgPSAoPGFueT5tYXRlcmlhbFZhbHVlcylbdGVjaG5pcXVlVW5pZm9ybXNbdW5pZl1dO1xyXG5cclxuICAgICAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAvLyBJbiBjYXNlIHRoZSB2YWx1ZSBpcyB0aGUgc2FtZSBmb3IgYWxsIG1hdGVyaWFsc1xyXG4gICAgICAgICAgICB2YWx1ZSA9IDxhbnk+dW5pZm9ybS52YWx1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghdmFsdWUpIHtcclxuICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBvbkxvYWRUZXh0dXJlID0gKHVuaWZvcm1OYW1lOiBOdWxsYWJsZTxzdHJpbmc+KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiAodGV4dHVyZTogVGV4dHVyZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHVuaWZvcm0udmFsdWUgJiYgdW5pZm9ybU5hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBTdGF0aWMgdW5pZm9ybVxyXG4gICAgICAgICAgICAgICAgICAgIHNoYWRlck1hdGVyaWFsLnNldFRleHR1cmUodW5pZm9ybU5hbWUsIHRleHR1cmUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB1blRyZWF0ZWRVbmlmb3Jtc1t1bmlmb3JtTmFtZV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8gVGV4dHVyZSAoc2FtcGxlcjJEKVxyXG4gICAgICAgIGlmICh0eXBlID09PSBFUGFyYW1ldGVyVHlwZS5TQU1QTEVSXzJEKSB7XHJcbiAgICAgICAgICAgIEdMVEZMb2FkZXJFeHRlbnNpb24uTG9hZFRleHR1cmVBc3luYyhnbHRmUnVudGltZSwgbWF0ZXJpYWwudmFsdWVzID8gdmFsdWUgOiB1bmlmb3JtLnZhbHVlLCBvbkxvYWRUZXh0dXJlKHVuaWYpLCAoKSA9PiBvbkxvYWRUZXh0dXJlKG51bGwpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gT3RoZXJzXHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICh1bmlmb3JtLnZhbHVlICYmIEdMVEZVdGlscy5TZXRVbmlmb3JtKHNoYWRlck1hdGVyaWFsLCB1bmlmLCBtYXRlcmlhbC52YWx1ZXMgPyB2YWx1ZSA6IHVuaWZvcm0udmFsdWUsIHR5cGUpKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBTdGF0aWMgdW5pZm9ybVxyXG4gICAgICAgICAgICAgICAgZGVsZXRlIHVuVHJlYXRlZFVuaWZvcm1zW3VuaWZdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5cclxuLyoqXHJcbiAqIFNoYWRlciBjb21waWxhdGlvbiBmYWlsZWRcclxuICogQHBhcmFtIHByb2dyYW1cclxuICogQHBhcmFtIHNoYWRlck1hdGVyaWFsXHJcbiAqIEBwYXJhbSBvbkVycm9yXHJcbiAqIEByZXR1cm5zIGNhbGxiYWNrIHdoZW4gc2hhZGVyIGlzIGNvbXBpbGVkXHJcbiAqL1xyXG5jb25zdCBvblNoYWRlckNvbXBpbGVFcnJvciA9IChwcm9ncmFtOiBJR0xURlByb2dyYW0sIHNoYWRlck1hdGVyaWFsOiBTaGFkZXJNYXRlcmlhbCwgb25FcnJvcjogKG1lc3NhZ2U6IHN0cmluZykgPT4gdm9pZCkgPT4ge1xyXG4gICAgcmV0dXJuIChlZmZlY3Q6IEVmZmVjdCwgZXJyb3I6IHN0cmluZykgPT4ge1xyXG4gICAgICAgIHNoYWRlck1hdGVyaWFsLmRpc3Bvc2UodHJ1ZSk7XHJcbiAgICAgICAgb25FcnJvcihcIkNhbm5vdCBjb21waWxlIHByb2dyYW0gbmFtZWQgXCIgKyBwcm9ncmFtLm5hbWUgKyBcIi4gRXJyb3I6IFwiICsgZXJyb3IgKyBcIi4gRGVmYXVsdCBtYXRlcmlhbCB3aWxsIGJlIGFwcGxpZWRcIik7XHJcbiAgICB9O1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIFNoYWRlciBjb21waWxhdGlvbiBzdWNjZXNzXHJcbiAqIEBwYXJhbSBnbHRmUnVudGltZVxyXG4gKiBAcGFyYW0gc2hhZGVyTWF0ZXJpYWxcclxuICogQHBhcmFtIHRlY2huaXF1ZVxyXG4gKiBAcGFyYW0gbWF0ZXJpYWxcclxuICogQHBhcmFtIHVuVHJlYXRlZFVuaWZvcm1zXHJcbiAqIEBwYXJhbSBvblN1Y2Nlc3NcclxuICogQHJldHVybnMgY2FsbGJhY2sgd2hlbiBzaGFkZXIgaXMgY29tcGlsZWRcclxuICovXHJcbmNvbnN0IG9uU2hhZGVyQ29tcGlsZVN1Y2Nlc3MgPSAoXHJcbiAgICBnbHRmUnVudGltZTogSUdMVEZSdW50aW1lLFxyXG4gICAgc2hhZGVyTWF0ZXJpYWw6IFNoYWRlck1hdGVyaWFsLFxyXG4gICAgdGVjaG5pcXVlOiBJR0xURlRlY2huaXF1ZSxcclxuICAgIG1hdGVyaWFsOiBJR0xURk1hdGVyaWFsLFxyXG4gICAgdW5UcmVhdGVkVW5pZm9ybXM6IHsgW2tleTogc3RyaW5nXTogSUdMVEZUZWNobmlxdWVQYXJhbWV0ZXIgfSxcclxuICAgIG9uU3VjY2VzczogKHNoYWRlck1hdGVyaWFsOiBTaGFkZXJNYXRlcmlhbCkgPT4gdm9pZFxyXG4pID0+IHtcclxuICAgIHJldHVybiAoXzogRWZmZWN0KSA9PiB7XHJcbiAgICAgICAgcHJlcGFyZVNoYWRlck1hdGVyaWFsVW5pZm9ybXMoZ2x0ZlJ1bnRpbWUsIHNoYWRlck1hdGVyaWFsLCB0ZWNobmlxdWUsIG1hdGVyaWFsLCB1blRyZWF0ZWRVbmlmb3Jtcyk7XHJcblxyXG4gICAgICAgIHNoYWRlck1hdGVyaWFsLm9uQmluZCA9IChtZXNoOiBBYnN0cmFjdE1lc2gpID0+IHtcclxuICAgICAgICAgICAgb25CaW5kU2hhZGVyTWF0ZXJpYWwobWVzaCwgZ2x0ZlJ1bnRpbWUsIHVuVHJlYXRlZFVuaWZvcm1zLCBzaGFkZXJNYXRlcmlhbCwgdGVjaG5pcXVlLCBtYXRlcmlhbCwgb25TdWNjZXNzKTtcclxuICAgICAgICB9O1xyXG4gICAgfTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIHRoZSBhcHByb3ByaWF0ZSB1bmlmb3JtIGlmIGFscmVhZHkgaGFuZGxlZCBieSBiYWJ5bG9uXHJcbiAqIEBwYXJhbSB0b2tlbml6ZXJcclxuICogQHBhcmFtIHRlY2huaXF1ZVxyXG4gKiBAcGFyYW0gdW5UcmVhdGVkVW5pZm9ybXNcclxuICogQHJldHVybnMgdGhlIG5hbWUgb2YgdGhlIHVuaWZvcm0gaGFuZGxlZCBieSBiYWJ5bG9uXHJcbiAqL1xyXG5jb25zdCBwYXJzZVNoYWRlclVuaWZvcm1zID0gKHRva2VuaXplcjogVG9rZW5pemVyLCB0ZWNobmlxdWU6IElHTFRGVGVjaG5pcXVlLCB1blRyZWF0ZWRVbmlmb3JtczogeyBba2V5OiBzdHJpbmddOiBJR0xURlRlY2huaXF1ZVBhcmFtZXRlciB9KTogc3RyaW5nID0+IHtcclxuICAgIGZvciAoY29uc3QgdW5pZiBpbiB0ZWNobmlxdWUudW5pZm9ybXMpIHtcclxuICAgICAgICBjb25zdCB1bmlmb3JtID0gdGVjaG5pcXVlLnVuaWZvcm1zW3VuaWZdO1xyXG4gICAgICAgIGNvbnN0IHVuaWZvcm1QYXJhbWV0ZXI6IElHTFRGVGVjaG5pcXVlUGFyYW1ldGVyID0gdGVjaG5pcXVlLnBhcmFtZXRlcnNbdW5pZm9ybV07XHJcblxyXG4gICAgICAgIGlmICh0b2tlbml6ZXIuY3VycmVudElkZW50aWZpZXIgPT09IHVuaWYpIHtcclxuICAgICAgICAgICAgaWYgKHVuaWZvcm1QYXJhbWV0ZXIuc2VtYW50aWMgJiYgIXVuaWZvcm1QYXJhbWV0ZXIuc291cmNlICYmICF1bmlmb3JtUGFyYW1ldGVyLm5vZGUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRyYW5zZm9ybUluZGV4ID0gZ2xURlRyYW5zZm9ybXMuaW5kZXhPZih1bmlmb3JtUGFyYW1ldGVyLnNlbWFudGljKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodHJhbnNmb3JtSW5kZXggIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHVuVHJlYXRlZFVuaWZvcm1zW3VuaWZdO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBiYWJ5bG9uVHJhbnNmb3Jtc1t0cmFuc2Zvcm1JbmRleF07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRva2VuaXplci5jdXJyZW50SWRlbnRpZmllcjtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBBbGwgc2hhZGVycyBsb2FkZWQuIENyZWF0ZSBtYXRlcmlhbHMgb25lIGJ5IG9uZVxyXG4gKiBAcGFyYW0gZ2x0ZlJ1bnRpbWVcclxuICovXHJcbmNvbnN0IGltcG9ydE1hdGVyaWFscyA9IChnbHRmUnVudGltZTogSUdMVEZSdW50aW1lKSA9PiB7XHJcbiAgICAvLyBDcmVhdGUgbWF0ZXJpYWxzXHJcbiAgICBmb3IgKGNvbnN0IG1hdCBpbiBnbHRmUnVudGltZS5tYXRlcmlhbHMpIHtcclxuICAgICAgICBHTFRGTG9hZGVyRXh0ZW5zaW9uLkxvYWRNYXRlcmlhbEFzeW5jKFxyXG4gICAgICAgICAgICBnbHRmUnVudGltZSxcclxuICAgICAgICAgICAgbWF0LFxyXG4gICAgICAgICAgICAoKSA9PiB7fSxcclxuICAgICAgICAgICAgKCkgPT4ge31cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59O1xyXG5cclxuLyoqXHJcbiAqIEltcGxlbWVudGF0aW9uIG9mIHRoZSBiYXNlIGdsVEYgc3BlY1xyXG4gKiBAaW50ZXJuYWxcclxuICovXHJcbmV4cG9ydCBjbGFzcyBHTFRGTG9hZGVyQmFzZSB7XHJcbiAgICBwdWJsaWMgc3RhdGljIENyZWF0ZVJ1bnRpbWUocGFyc2VkRGF0YTogYW55LCBzY2VuZTogU2NlbmUsIHJvb3RVcmw6IHN0cmluZyk6IElHTFRGUnVudGltZSB7XHJcbiAgICAgICAgY29uc3QgZ2x0ZlJ1bnRpbWU6IElHTFRGUnVudGltZSA9IHtcclxuICAgICAgICAgICAgZXh0ZW5zaW9uczoge30sXHJcbiAgICAgICAgICAgIGFjY2Vzc29yczoge30sXHJcbiAgICAgICAgICAgIGJ1ZmZlcnM6IHt9LFxyXG4gICAgICAgICAgICBidWZmZXJWaWV3czoge30sXHJcbiAgICAgICAgICAgIG1lc2hlczoge30sXHJcbiAgICAgICAgICAgIGxpZ2h0czoge30sXHJcbiAgICAgICAgICAgIGNhbWVyYXM6IHt9LFxyXG4gICAgICAgICAgICBub2Rlczoge30sXHJcbiAgICAgICAgICAgIGltYWdlczoge30sXHJcbiAgICAgICAgICAgIHRleHR1cmVzOiB7fSxcclxuICAgICAgICAgICAgc2hhZGVyczoge30sXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiB7fSxcclxuICAgICAgICAgICAgc2FtcGxlcnM6IHt9LFxyXG4gICAgICAgICAgICB0ZWNobmlxdWVzOiB7fSxcclxuICAgICAgICAgICAgbWF0ZXJpYWxzOiB7fSxcclxuICAgICAgICAgICAgYW5pbWF0aW9uczoge30sXHJcbiAgICAgICAgICAgIHNraW5zOiB7fSxcclxuICAgICAgICAgICAgZXh0ZW5zaW9uc1VzZWQ6IFtdLFxyXG5cclxuICAgICAgICAgICAgc2NlbmVzOiB7fSxcclxuXHJcbiAgICAgICAgICAgIGJ1ZmZlcnNDb3VudDogMCxcclxuICAgICAgICAgICAgc2hhZGVyc2NvdW50OiAwLFxyXG5cclxuICAgICAgICAgICAgc2NlbmU6IHNjZW5lLFxyXG4gICAgICAgICAgICByb290VXJsOiByb290VXJsLFxyXG5cclxuICAgICAgICAgICAgbG9hZGVkQnVmZmVyQ291bnQ6IDAsXHJcbiAgICAgICAgICAgIGxvYWRlZEJ1ZmZlclZpZXdzOiB7fSxcclxuXHJcbiAgICAgICAgICAgIGxvYWRlZFNoYWRlckNvdW50OiAwLFxyXG5cclxuICAgICAgICAgICAgaW1wb3J0T25seU1lc2hlczogZmFsc2UsXHJcblxyXG4gICAgICAgICAgICBkdW1teU5vZGVzOiBbXSxcclxuXHJcbiAgICAgICAgICAgIGFzc2V0Q29udGFpbmVyOiBudWxsLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vIFBhcnNlXHJcbiAgICAgICAgaWYgKHBhcnNlZERhdGEuZXh0ZW5zaW9ucykge1xyXG4gICAgICAgICAgICBwYXJzZU9iamVjdChwYXJzZWREYXRhLmV4dGVuc2lvbnMsIFwiZXh0ZW5zaW9uc1wiLCBnbHRmUnVudGltZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocGFyc2VkRGF0YS5leHRlbnNpb25zVXNlZCkge1xyXG4gICAgICAgICAgICBwYXJzZU9iamVjdChwYXJzZWREYXRhLmV4dGVuc2lvbnNVc2VkLCBcImV4dGVuc2lvbnNVc2VkXCIsIGdsdGZSdW50aW1lKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChwYXJzZWREYXRhLmJ1ZmZlcnMpIHtcclxuICAgICAgICAgICAgcGFyc2VCdWZmZXJzKHBhcnNlZERhdGEuYnVmZmVycywgZ2x0ZlJ1bnRpbWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHBhcnNlZERhdGEuYnVmZmVyVmlld3MpIHtcclxuICAgICAgICAgICAgcGFyc2VPYmplY3QocGFyc2VkRGF0YS5idWZmZXJWaWV3cywgXCJidWZmZXJWaWV3c1wiLCBnbHRmUnVudGltZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocGFyc2VkRGF0YS5hY2Nlc3NvcnMpIHtcclxuICAgICAgICAgICAgcGFyc2VPYmplY3QocGFyc2VkRGF0YS5hY2Nlc3NvcnMsIFwiYWNjZXNzb3JzXCIsIGdsdGZSdW50aW1lKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChwYXJzZWREYXRhLm1lc2hlcykge1xyXG4gICAgICAgICAgICBwYXJzZU9iamVjdChwYXJzZWREYXRhLm1lc2hlcywgXCJtZXNoZXNcIiwgZ2x0ZlJ1bnRpbWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHBhcnNlZERhdGEubGlnaHRzKSB7XHJcbiAgICAgICAgICAgIHBhcnNlT2JqZWN0KHBhcnNlZERhdGEubGlnaHRzLCBcImxpZ2h0c1wiLCBnbHRmUnVudGltZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocGFyc2VkRGF0YS5jYW1lcmFzKSB7XHJcbiAgICAgICAgICAgIHBhcnNlT2JqZWN0KHBhcnNlZERhdGEuY2FtZXJhcywgXCJjYW1lcmFzXCIsIGdsdGZSdW50aW1lKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChwYXJzZWREYXRhLm5vZGVzKSB7XHJcbiAgICAgICAgICAgIHBhcnNlT2JqZWN0KHBhcnNlZERhdGEubm9kZXMsIFwibm9kZXNcIiwgZ2x0ZlJ1bnRpbWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHBhcnNlZERhdGEuaW1hZ2VzKSB7XHJcbiAgICAgICAgICAgIHBhcnNlT2JqZWN0KHBhcnNlZERhdGEuaW1hZ2VzLCBcImltYWdlc1wiLCBnbHRmUnVudGltZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocGFyc2VkRGF0YS50ZXh0dXJlcykge1xyXG4gICAgICAgICAgICBwYXJzZU9iamVjdChwYXJzZWREYXRhLnRleHR1cmVzLCBcInRleHR1cmVzXCIsIGdsdGZSdW50aW1lKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChwYXJzZWREYXRhLnNoYWRlcnMpIHtcclxuICAgICAgICAgICAgcGFyc2VTaGFkZXJzKHBhcnNlZERhdGEuc2hhZGVycywgZ2x0ZlJ1bnRpbWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHBhcnNlZERhdGEucHJvZ3JhbXMpIHtcclxuICAgICAgICAgICAgcGFyc2VPYmplY3QocGFyc2VkRGF0YS5wcm9ncmFtcywgXCJwcm9ncmFtc1wiLCBnbHRmUnVudGltZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocGFyc2VkRGF0YS5zYW1wbGVycykge1xyXG4gICAgICAgICAgICBwYXJzZU9iamVjdChwYXJzZWREYXRhLnNhbXBsZXJzLCBcInNhbXBsZXJzXCIsIGdsdGZSdW50aW1lKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChwYXJzZWREYXRhLnRlY2huaXF1ZXMpIHtcclxuICAgICAgICAgICAgcGFyc2VPYmplY3QocGFyc2VkRGF0YS50ZWNobmlxdWVzLCBcInRlY2huaXF1ZXNcIiwgZ2x0ZlJ1bnRpbWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHBhcnNlZERhdGEubWF0ZXJpYWxzKSB7XHJcbiAgICAgICAgICAgIHBhcnNlT2JqZWN0KHBhcnNlZERhdGEubWF0ZXJpYWxzLCBcIm1hdGVyaWFsc1wiLCBnbHRmUnVudGltZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocGFyc2VkRGF0YS5hbmltYXRpb25zKSB7XHJcbiAgICAgICAgICAgIHBhcnNlT2JqZWN0KHBhcnNlZERhdGEuYW5pbWF0aW9ucywgXCJhbmltYXRpb25zXCIsIGdsdGZSdW50aW1lKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChwYXJzZWREYXRhLnNraW5zKSB7XHJcbiAgICAgICAgICAgIHBhcnNlT2JqZWN0KHBhcnNlZERhdGEuc2tpbnMsIFwic2tpbnNcIiwgZ2x0ZlJ1bnRpbWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHBhcnNlZERhdGEuc2NlbmVzKSB7XHJcbiAgICAgICAgICAgIGdsdGZSdW50aW1lLnNjZW5lcyA9IHBhcnNlZERhdGEuc2NlbmVzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHBhcnNlZERhdGEuc2NlbmUgJiYgcGFyc2VkRGF0YS5zY2VuZXMpIHtcclxuICAgICAgICAgICAgZ2x0ZlJ1bnRpbWUuY3VycmVudFNjZW5lID0gcGFyc2VkRGF0YS5zY2VuZXNbcGFyc2VkRGF0YS5zY2VuZV07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZ2x0ZlJ1bnRpbWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBMb2FkQnVmZmVyQXN5bmMoXHJcbiAgICAgICAgZ2x0ZlJ1bnRpbWU6IElHTFRGUnVudGltZSxcclxuICAgICAgICBpZDogc3RyaW5nLFxyXG4gICAgICAgIG9uU3VjY2VzczogKGJ1ZmZlcjogQXJyYXlCdWZmZXJWaWV3KSA9PiB2b2lkLFxyXG4gICAgICAgIG9uRXJyb3I6IChtZXNzYWdlOiBzdHJpbmcpID0+IHZvaWQsXHJcbiAgICAgICAgb25Qcm9ncmVzcz86ICgpID0+IHZvaWRcclxuICAgICk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGJ1ZmZlcjogSUdMVEZCdWZmZXIgPSBnbHRmUnVudGltZS5idWZmZXJzW2lkXTtcclxuXHJcbiAgICAgICAgaWYgKFRvb2xzLklzQmFzZTY0KGJ1ZmZlci51cmkpKSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gb25TdWNjZXNzKG5ldyBVaW50OEFycmF5KFRvb2xzLkRlY29kZUJhc2U2NChidWZmZXIudXJpKSkpKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBUb29scy5Mb2FkRmlsZShcclxuICAgICAgICAgICAgICAgIGdsdGZSdW50aW1lLnJvb3RVcmwgKyBidWZmZXIudXJpLFxyXG4gICAgICAgICAgICAgICAgKGRhdGEpID0+IG9uU3VjY2VzcyhuZXcgVWludDhBcnJheShkYXRhIGFzIEFycmF5QnVmZmVyKSksXHJcbiAgICAgICAgICAgICAgICBvblByb2dyZXNzLFxyXG4gICAgICAgICAgICAgICAgdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICAgICAgdHJ1ZSxcclxuICAgICAgICAgICAgICAgIChyZXF1ZXN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlcXVlc3QpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25FcnJvcihyZXF1ZXN0LnN0YXR1cyArIFwiIFwiICsgcmVxdWVzdC5zdGF0dXNUZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgTG9hZFRleHR1cmVCdWZmZXJBc3luYyhnbHRmUnVudGltZTogSUdMVEZSdW50aW1lLCBpZDogc3RyaW5nLCBvblN1Y2Nlc3M6IChidWZmZXI6IE51bGxhYmxlPEFycmF5QnVmZmVyVmlldz4pID0+IHZvaWQsIG9uRXJyb3I6IChtZXNzYWdlOiBzdHJpbmcpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCB0ZXh0dXJlOiBJR0xURlRleHR1cmUgPSBnbHRmUnVudGltZS50ZXh0dXJlc1tpZF07XHJcblxyXG4gICAgICAgIGlmICghdGV4dHVyZSB8fCAhdGV4dHVyZS5zb3VyY2UpIHtcclxuICAgICAgICAgICAgb25FcnJvcihcIlwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRleHR1cmUuYmFieWxvblRleHR1cmUpIHtcclxuICAgICAgICAgICAgb25TdWNjZXNzKG51bGwpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBzb3VyY2U6IElHTFRGSW1hZ2UgPSBnbHRmUnVudGltZS5pbWFnZXNbdGV4dHVyZS5zb3VyY2VdO1xyXG5cclxuICAgICAgICBpZiAoVG9vbHMuSXNCYXNlNjQoc291cmNlLnVyaSkpIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBvblN1Y2Nlc3MobmV3IFVpbnQ4QXJyYXkoVG9vbHMuRGVjb2RlQmFzZTY0KHNvdXJjZS51cmkpKSkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIFRvb2xzLkxvYWRGaWxlKFxyXG4gICAgICAgICAgICAgICAgZ2x0ZlJ1bnRpbWUucm9vdFVybCArIHNvdXJjZS51cmksXHJcbiAgICAgICAgICAgICAgICAoZGF0YSkgPT4gb25TdWNjZXNzKG5ldyBVaW50OEFycmF5KGRhdGEgYXMgQXJyYXlCdWZmZXIpKSxcclxuICAgICAgICAgICAgICAgIHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgICAgIHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgICAgIHRydWUsXHJcbiAgICAgICAgICAgICAgICAocmVxdWVzdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXF1ZXN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uRXJyb3IocmVxdWVzdC5zdGF0dXMgKyBcIiBcIiArIHJlcXVlc3Quc3RhdHVzVGV4dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIENyZWF0ZVRleHR1cmVBc3luYyhnbHRmUnVudGltZTogSUdMVEZSdW50aW1lLCBpZDogc3RyaW5nLCBidWZmZXI6IE51bGxhYmxlPEFycmF5QnVmZmVyVmlldz4sIG9uU3VjY2VzczogKHRleHR1cmU6IFRleHR1cmUpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCB0ZXh0dXJlOiBJR0xURlRleHR1cmUgPSBnbHRmUnVudGltZS50ZXh0dXJlc1tpZF07XHJcblxyXG4gICAgICAgIGlmICh0ZXh0dXJlLmJhYnlsb25UZXh0dXJlKSB7XHJcbiAgICAgICAgICAgIG9uU3VjY2Vzcyh0ZXh0dXJlLmJhYnlsb25UZXh0dXJlKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qgc2FtcGxlcjogSUdMVEZTYW1wbGVyID0gZ2x0ZlJ1bnRpbWUuc2FtcGxlcnNbdGV4dHVyZS5zYW1wbGVyXTtcclxuXHJcbiAgICAgICAgY29uc3QgY3JlYXRlTWlwTWFwcyA9XHJcbiAgICAgICAgICAgIHNhbXBsZXIubWluRmlsdGVyID09PSBFVGV4dHVyZUZpbHRlclR5cGUuTkVBUkVTVF9NSVBNQVBfTkVBUkVTVCB8fFxyXG4gICAgICAgICAgICBzYW1wbGVyLm1pbkZpbHRlciA9PT0gRVRleHR1cmVGaWx0ZXJUeXBlLk5FQVJFU1RfTUlQTUFQX0xJTkVBUiB8fFxyXG4gICAgICAgICAgICBzYW1wbGVyLm1pbkZpbHRlciA9PT0gRVRleHR1cmVGaWx0ZXJUeXBlLkxJTkVBUl9NSVBNQVBfTkVBUkVTVCB8fFxyXG4gICAgICAgICAgICBzYW1wbGVyLm1pbkZpbHRlciA9PT0gRVRleHR1cmVGaWx0ZXJUeXBlLkxJTkVBUl9NSVBNQVBfTElORUFSO1xyXG5cclxuICAgICAgICBjb25zdCBzYW1wbGluZ01vZGUgPSBUZXh0dXJlLkJJTElORUFSX1NBTVBMSU5HTU9ERTtcclxuXHJcbiAgICAgICAgY29uc3QgYmxvYiA9IGJ1ZmZlciA9PSBudWxsID8gbmV3IEJsb2IoKSA6IG5ldyBCbG9iKFtidWZmZXJdKTtcclxuICAgICAgICBjb25zdCBibG9iVVJMID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcclxuICAgICAgICBjb25zdCByZXZva2VCbG9iVVJMID0gKCkgPT4gVVJMLnJldm9rZU9iamVjdFVSTChibG9iVVJMKTtcclxuICAgICAgICBjb25zdCBuZXdUZXh0dXJlID0gbmV3IFRleHR1cmUoYmxvYlVSTCwgZ2x0ZlJ1bnRpbWUuc2NlbmUsICFjcmVhdGVNaXBNYXBzLCB0cnVlLCBzYW1wbGluZ01vZGUsIHJldm9rZUJsb2JVUkwsIHJldm9rZUJsb2JVUkwpO1xyXG4gICAgICAgIGlmIChzYW1wbGVyLndyYXBTICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgbmV3VGV4dHVyZS53cmFwVSA9IEdMVEZVdGlscy5HZXRXcmFwTW9kZShzYW1wbGVyLndyYXBTKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHNhbXBsZXIud3JhcFQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBuZXdUZXh0dXJlLndyYXBWID0gR0xURlV0aWxzLkdldFdyYXBNb2RlKHNhbXBsZXIud3JhcFQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBuZXdUZXh0dXJlLm5hbWUgPSBpZDtcclxuXHJcbiAgICAgICAgdGV4dHVyZS5iYWJ5bG9uVGV4dHVyZSA9IG5ld1RleHR1cmU7XHJcbiAgICAgICAgb25TdWNjZXNzKG5ld1RleHR1cmUpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgTG9hZFNoYWRlclN0cmluZ0FzeW5jKGdsdGZSdW50aW1lOiBJR0xURlJ1bnRpbWUsIGlkOiBzdHJpbmcsIG9uU3VjY2VzczogKHNoYWRlclN0cmluZzogc3RyaW5nIHwgQXJyYXlCdWZmZXIpID0+IHZvaWQsIG9uRXJyb3I/OiAobWVzc2FnZTogc3RyaW5nKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3Qgc2hhZGVyOiBJR0xURlNoYWRlciA9IGdsdGZSdW50aW1lLnNoYWRlcnNbaWRdO1xyXG5cclxuICAgICAgICBpZiAoVG9vbHMuSXNCYXNlNjQoc2hhZGVyLnVyaSkpIHtcclxuICAgICAgICAgICAgY29uc3Qgc2hhZGVyU3RyaW5nID0gYXRvYihzaGFkZXIudXJpLnNwbGl0KFwiLFwiKVsxXSk7XHJcbiAgICAgICAgICAgIGlmIChvblN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgICAgIG9uU3VjY2VzcyhzaGFkZXJTdHJpbmcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgVG9vbHMuTG9hZEZpbGUoZ2x0ZlJ1bnRpbWUucm9vdFVybCArIHNoYWRlci51cmksIG9uU3VjY2VzcywgdW5kZWZpbmVkLCB1bmRlZmluZWQsIGZhbHNlLCAocmVxdWVzdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlcXVlc3QgJiYgb25FcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIG9uRXJyb3IocmVxdWVzdC5zdGF0dXMgKyBcIiBcIiArIHJlcXVlc3Quc3RhdHVzVGV4dCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIExvYWRNYXRlcmlhbEFzeW5jKGdsdGZSdW50aW1lOiBJR0xURlJ1bnRpbWUsIGlkOiBzdHJpbmcsIG9uU3VjY2VzczogKG1hdGVyaWFsOiBNYXRlcmlhbCkgPT4gdm9pZCwgb25FcnJvcjogKG1lc3NhZ2U6IHN0cmluZykgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IG1hdGVyaWFsOiBJR0xURk1hdGVyaWFsID0gZ2x0ZlJ1bnRpbWUubWF0ZXJpYWxzW2lkXTtcclxuICAgICAgICBpZiAoIW1hdGVyaWFsLnRlY2huaXF1ZSkge1xyXG4gICAgICAgICAgICBpZiAob25FcnJvcikge1xyXG4gICAgICAgICAgICAgICAgb25FcnJvcihcIk5vIHRlY2huaXF1ZSBmb3VuZC5cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgdGVjaG5pcXVlOiBJR0xURlRlY2huaXF1ZSA9IGdsdGZSdW50aW1lLnRlY2huaXF1ZXNbbWF0ZXJpYWwudGVjaG5pcXVlXTtcclxuICAgICAgICBpZiAoIXRlY2huaXF1ZSkge1xyXG4gICAgICAgICAgICBnbHRmUnVudGltZS5zY2VuZS5fYmxvY2tFbnRpdHlDb2xsZWN0aW9uID0gISFnbHRmUnVudGltZS5hc3NldENvbnRhaW5lcjtcclxuICAgICAgICAgICAgY29uc3QgZGVmYXVsdE1hdGVyaWFsID0gbmV3IFN0YW5kYXJkTWF0ZXJpYWwoaWQsIGdsdGZSdW50aW1lLnNjZW5lKTtcclxuICAgICAgICAgICAgZGVmYXVsdE1hdGVyaWFsLl9wYXJlbnRDb250YWluZXIgPSBnbHRmUnVudGltZS5hc3NldENvbnRhaW5lcjtcclxuICAgICAgICAgICAgZ2x0ZlJ1bnRpbWUuc2NlbmUuX2Jsb2NrRW50aXR5Q29sbGVjdGlvbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkZWZhdWx0TWF0ZXJpYWwuZGlmZnVzZUNvbG9yID0gbmV3IENvbG9yMygwLjUsIDAuNSwgMC41KTtcclxuICAgICAgICAgICAgZGVmYXVsdE1hdGVyaWFsLnNpZGVPcmllbnRhdGlvbiA9IE1hdGVyaWFsLkNvdW50ZXJDbG9ja1dpc2VTaWRlT3JpZW50YXRpb247XHJcbiAgICAgICAgICAgIG9uU3VjY2VzcyhkZWZhdWx0TWF0ZXJpYWwpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBwcm9ncmFtOiBJR0xURlByb2dyYW0gPSBnbHRmUnVudGltZS5wcm9ncmFtc1t0ZWNobmlxdWUucHJvZ3JhbV07XHJcbiAgICAgICAgY29uc3Qgc3RhdGVzOiBJR0xURlRlY2huaXF1ZVN0YXRlcyA9IHRlY2huaXF1ZS5zdGF0ZXM7XHJcblxyXG4gICAgICAgIGNvbnN0IHZlcnRleFNoYWRlcjogc3RyaW5nID0gRWZmZWN0LlNoYWRlcnNTdG9yZVtwcm9ncmFtLnZlcnRleFNoYWRlciArIFwiVmVydGV4U2hhZGVyXCJdO1xyXG4gICAgICAgIGNvbnN0IHBpeGVsU2hhZGVyOiBzdHJpbmcgPSBFZmZlY3QuU2hhZGVyc1N0b3JlW3Byb2dyYW0uZnJhZ21lbnRTaGFkZXIgKyBcIlBpeGVsU2hhZGVyXCJdO1xyXG4gICAgICAgIGxldCBuZXdWZXJ0ZXhTaGFkZXIgPSBcIlwiO1xyXG4gICAgICAgIGxldCBuZXdQaXhlbFNoYWRlciA9IFwiXCI7XHJcblxyXG4gICAgICAgIGNvbnN0IHZlcnRleFRva2VuaXplciA9IG5ldyBUb2tlbml6ZXIodmVydGV4U2hhZGVyKTtcclxuICAgICAgICBjb25zdCBwaXhlbFRva2VuaXplciA9IG5ldyBUb2tlbml6ZXIocGl4ZWxTaGFkZXIpO1xyXG5cclxuICAgICAgICBjb25zdCB1blRyZWF0ZWRVbmlmb3JtczogeyBba2V5OiBzdHJpbmddOiBJR0xURlRlY2huaXF1ZVBhcmFtZXRlciB9ID0ge307XHJcbiAgICAgICAgY29uc3QgdW5pZm9ybXM6IHN0cmluZ1tdID0gW107XHJcbiAgICAgICAgY29uc3QgYXR0cmlidXRlczogc3RyaW5nW10gPSBbXTtcclxuICAgICAgICBjb25zdCBzYW1wbGVyczogc3RyaW5nW10gPSBbXTtcclxuXHJcbiAgICAgICAgLy8gRmlsbCB1bmlmb3JtLCBzYW1wbGVyMkQgYW5kIGF0dHJpYnV0ZXNcclxuICAgICAgICBmb3IgKGNvbnN0IHVuaWYgaW4gdGVjaG5pcXVlLnVuaWZvcm1zKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHVuaWZvcm0gPSB0ZWNobmlxdWUudW5pZm9ybXNbdW5pZl07XHJcbiAgICAgICAgICAgIGNvbnN0IHVuaWZvcm1QYXJhbWV0ZXI6IElHTFRGVGVjaG5pcXVlUGFyYW1ldGVyID0gdGVjaG5pcXVlLnBhcmFtZXRlcnNbdW5pZm9ybV07XHJcblxyXG4gICAgICAgICAgICB1blRyZWF0ZWRVbmlmb3Jtc1t1bmlmXSA9IHVuaWZvcm1QYXJhbWV0ZXI7XHJcblxyXG4gICAgICAgICAgICBpZiAodW5pZm9ybVBhcmFtZXRlci5zZW1hbnRpYyAmJiAhdW5pZm9ybVBhcmFtZXRlci5ub2RlICYmICF1bmlmb3JtUGFyYW1ldGVyLnNvdXJjZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdHJhbnNmb3JtSW5kZXggPSBnbFRGVHJhbnNmb3Jtcy5pbmRleE9mKHVuaWZvcm1QYXJhbWV0ZXIuc2VtYW50aWMpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRyYW5zZm9ybUluZGV4ICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHVuaWZvcm1zLnB1c2goYmFieWxvblRyYW5zZm9ybXNbdHJhbnNmb3JtSW5kZXhdKTtcclxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgdW5UcmVhdGVkVW5pZm9ybXNbdW5pZl07XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHVuaWZvcm1zLnB1c2godW5pZik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodW5pZm9ybVBhcmFtZXRlci50eXBlID09PSBFUGFyYW1ldGVyVHlwZS5TQU1QTEVSXzJEKSB7XHJcbiAgICAgICAgICAgICAgICBzYW1wbGVycy5wdXNoKHVuaWYpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdW5pZm9ybXMucHVzaCh1bmlmKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChjb25zdCBhdHRyIGluIHRlY2huaXF1ZS5hdHRyaWJ1dGVzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGF0dHJpYnV0ZSA9IHRlY2huaXF1ZS5hdHRyaWJ1dGVzW2F0dHJdO1xyXG4gICAgICAgICAgICBjb25zdCBhdHRyaWJ1dGVQYXJhbWV0ZXI6IElHTFRGVGVjaG5pcXVlUGFyYW1ldGVyID0gdGVjaG5pcXVlLnBhcmFtZXRlcnNbYXR0cmlidXRlXTtcclxuXHJcbiAgICAgICAgICAgIGlmIChhdHRyaWJ1dGVQYXJhbWV0ZXIuc2VtYW50aWMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBnZXRBdHRyaWJ1dGUoYXR0cmlidXRlUGFyYW1ldGVyKTtcclxuICAgICAgICAgICAgICAgIGlmIChuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlcy5wdXNoKG5hbWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBDb25maWd1cmUgdmVydGV4IHNoYWRlclxyXG4gICAgICAgIHdoaWxlICghdmVydGV4VG9rZW5pemVyLmlzRW5kKCkgJiYgdmVydGV4VG9rZW5pemVyLmdldE5leHRUb2tlbigpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRva2VuVHlwZSA9IHZlcnRleFRva2VuaXplci5jdXJyZW50VG9rZW47XHJcblxyXG4gICAgICAgICAgICBpZiAodG9rZW5UeXBlICE9PSBFVG9rZW5UeXBlLklERU5USUZJRVIpIHtcclxuICAgICAgICAgICAgICAgIG5ld1ZlcnRleFNoYWRlciArPSB2ZXJ0ZXhUb2tlbml6ZXIuY3VycmVudFN0cmluZztcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgZm91bmRBdHRyaWJ1dGUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgYXR0ciBpbiB0ZWNobmlxdWUuYXR0cmlidXRlcykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYXR0cmlidXRlID0gdGVjaG5pcXVlLmF0dHJpYnV0ZXNbYXR0cl07XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhdHRyaWJ1dGVQYXJhbWV0ZXI6IElHTFRGVGVjaG5pcXVlUGFyYW1ldGVyID0gdGVjaG5pcXVlLnBhcmFtZXRlcnNbYXR0cmlidXRlXTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodmVydGV4VG9rZW5pemVyLmN1cnJlbnRJZGVudGlmaWVyID09PSBhdHRyICYmIGF0dHJpYnV0ZVBhcmFtZXRlci5zZW1hbnRpYykge1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld1ZlcnRleFNoYWRlciArPSBnZXRBdHRyaWJ1dGUoYXR0cmlidXRlUGFyYW1ldGVyKTtcclxuICAgICAgICAgICAgICAgICAgICBmb3VuZEF0dHJpYnV0ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChmb3VuZEF0dHJpYnV0ZSkge1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG5ld1ZlcnRleFNoYWRlciArPSBwYXJzZVNoYWRlclVuaWZvcm1zKHZlcnRleFRva2VuaXplciwgdGVjaG5pcXVlLCB1blRyZWF0ZWRVbmlmb3Jtcyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBDb25maWd1cmUgcGl4ZWwgc2hhZGVyXHJcbiAgICAgICAgd2hpbGUgKCFwaXhlbFRva2VuaXplci5pc0VuZCgpICYmIHBpeGVsVG9rZW5pemVyLmdldE5leHRUb2tlbigpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRva2VuVHlwZSA9IHBpeGVsVG9rZW5pemVyLmN1cnJlbnRUb2tlbjtcclxuXHJcbiAgICAgICAgICAgIGlmICh0b2tlblR5cGUgIT09IEVUb2tlblR5cGUuSURFTlRJRklFUikge1xyXG4gICAgICAgICAgICAgICAgbmV3UGl4ZWxTaGFkZXIgKz0gcGl4ZWxUb2tlbml6ZXIuY3VycmVudFN0cmluZztcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBuZXdQaXhlbFNoYWRlciArPSBwYXJzZVNoYWRlclVuaWZvcm1zKHBpeGVsVG9rZW5pemVyLCB0ZWNobmlxdWUsIHVuVHJlYXRlZFVuaWZvcm1zKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIENyZWF0ZSBzaGFkZXIgbWF0ZXJpYWxcclxuICAgICAgICBjb25zdCBzaGFkZXJQYXRoID0ge1xyXG4gICAgICAgICAgICB2ZXJ0ZXg6IHByb2dyYW0udmVydGV4U2hhZGVyICsgaWQsXHJcbiAgICAgICAgICAgIGZyYWdtZW50OiBwcm9ncmFtLmZyYWdtZW50U2hhZGVyICsgaWQsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgYXR0cmlidXRlczogYXR0cmlidXRlcyxcclxuICAgICAgICAgICAgdW5pZm9ybXM6IHVuaWZvcm1zLFxyXG4gICAgICAgICAgICBzYW1wbGVyczogc2FtcGxlcnMsXHJcbiAgICAgICAgICAgIG5lZWRBbHBoYUJsZW5kaW5nOiBzdGF0ZXMgJiYgc3RhdGVzLmVuYWJsZSAmJiBzdGF0ZXMuZW5hYmxlLmluZGV4T2YoMzA0MikgIT09IC0xLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIEVmZmVjdC5TaGFkZXJzU3RvcmVbcHJvZ3JhbS52ZXJ0ZXhTaGFkZXIgKyBpZCArIFwiVmVydGV4U2hhZGVyXCJdID0gbmV3VmVydGV4U2hhZGVyO1xyXG4gICAgICAgIEVmZmVjdC5TaGFkZXJzU3RvcmVbcHJvZ3JhbS5mcmFnbWVudFNoYWRlciArIGlkICsgXCJQaXhlbFNoYWRlclwiXSA9IG5ld1BpeGVsU2hhZGVyO1xyXG5cclxuICAgICAgICBjb25zdCBzaGFkZXJNYXRlcmlhbCA9IG5ldyBTaGFkZXJNYXRlcmlhbChpZCwgZ2x0ZlJ1bnRpbWUuc2NlbmUsIHNoYWRlclBhdGgsIG9wdGlvbnMpO1xyXG4gICAgICAgIHNoYWRlck1hdGVyaWFsLm9uRXJyb3IgPSBvblNoYWRlckNvbXBpbGVFcnJvcihwcm9ncmFtLCBzaGFkZXJNYXRlcmlhbCwgb25FcnJvcik7XHJcbiAgICAgICAgc2hhZGVyTWF0ZXJpYWwub25Db21waWxlZCA9IG9uU2hhZGVyQ29tcGlsZVN1Y2Nlc3MoZ2x0ZlJ1bnRpbWUsIHNoYWRlck1hdGVyaWFsLCB0ZWNobmlxdWUsIG1hdGVyaWFsLCB1blRyZWF0ZWRVbmlmb3Jtcywgb25TdWNjZXNzKTtcclxuICAgICAgICBzaGFkZXJNYXRlcmlhbC5zaWRlT3JpZW50YXRpb24gPSBNYXRlcmlhbC5Db3VudGVyQ2xvY2tXaXNlU2lkZU9yaWVudGF0aW9uO1xyXG5cclxuICAgICAgICBpZiAoc3RhdGVzICYmIHN0YXRlcy5mdW5jdGlvbnMpIHtcclxuICAgICAgICAgICAgY29uc3QgZnVuY3Rpb25zID0gc3RhdGVzLmZ1bmN0aW9ucztcclxuICAgICAgICAgICAgaWYgKGZ1bmN0aW9ucy5jdWxsRmFjZSAmJiBmdW5jdGlvbnMuY3VsbEZhY2VbMF0gIT09IEVDdWxsaW5nVHlwZS5CQUNLKSB7XHJcbiAgICAgICAgICAgICAgICBzaGFkZXJNYXRlcmlhbC5iYWNrRmFjZUN1bGxpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgYmxlbmRGdW5jID0gZnVuY3Rpb25zLmJsZW5kRnVuY1NlcGFyYXRlO1xyXG4gICAgICAgICAgICBpZiAoYmxlbmRGdW5jKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgYmxlbmRGdW5jWzBdID09PSBFQmxlbmRpbmdGdW5jdGlvbi5TUkNfQUxQSEEgJiZcclxuICAgICAgICAgICAgICAgICAgICBibGVuZEZ1bmNbMV0gPT09IEVCbGVuZGluZ0Z1bmN0aW9uLk9ORV9NSU5VU19TUkNfQUxQSEEgJiZcclxuICAgICAgICAgICAgICAgICAgICBibGVuZEZ1bmNbMl0gPT09IEVCbGVuZGluZ0Z1bmN0aW9uLk9ORSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIGJsZW5kRnVuY1szXSA9PT0gRUJsZW5kaW5nRnVuY3Rpb24uT05FXHJcbiAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICBzaGFkZXJNYXRlcmlhbC5hbHBoYU1vZGUgPSBDb25zdGFudHMuQUxQSEFfQ09NQklORTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgYmxlbmRGdW5jWzBdID09PSBFQmxlbmRpbmdGdW5jdGlvbi5PTkUgJiZcclxuICAgICAgICAgICAgICAgICAgICBibGVuZEZ1bmNbMV0gPT09IEVCbGVuZGluZ0Z1bmN0aW9uLk9ORSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIGJsZW5kRnVuY1syXSA9PT0gRUJsZW5kaW5nRnVuY3Rpb24uWkVSTyAmJlxyXG4gICAgICAgICAgICAgICAgICAgIGJsZW5kRnVuY1szXSA9PT0gRUJsZW5kaW5nRnVuY3Rpb24uT05FXHJcbiAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICBzaGFkZXJNYXRlcmlhbC5hbHBoYU1vZGUgPSBDb25zdGFudHMuQUxQSEFfT05FT05FO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChcclxuICAgICAgICAgICAgICAgICAgICBibGVuZEZ1bmNbMF0gPT09IEVCbGVuZGluZ0Z1bmN0aW9uLlNSQ19BTFBIQSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIGJsZW5kRnVuY1sxXSA9PT0gRUJsZW5kaW5nRnVuY3Rpb24uT05FICYmXHJcbiAgICAgICAgICAgICAgICAgICAgYmxlbmRGdW5jWzJdID09PSBFQmxlbmRpbmdGdW5jdGlvbi5aRVJPICYmXHJcbiAgICAgICAgICAgICAgICAgICAgYmxlbmRGdW5jWzNdID09PSBFQmxlbmRpbmdGdW5jdGlvbi5PTkVcclxuICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNoYWRlck1hdGVyaWFsLmFscGhhTW9kZSA9IENvbnN0YW50cy5BTFBIQV9BREQ7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgIGJsZW5kRnVuY1swXSA9PT0gRUJsZW5kaW5nRnVuY3Rpb24uWkVSTyAmJlxyXG4gICAgICAgICAgICAgICAgICAgIGJsZW5kRnVuY1sxXSA9PT0gRUJsZW5kaW5nRnVuY3Rpb24uT05FX01JTlVTX1NSQ19DT0xPUiAmJlxyXG4gICAgICAgICAgICAgICAgICAgIGJsZW5kRnVuY1syXSA9PT0gRUJsZW5kaW5nRnVuY3Rpb24uT05FICYmXHJcbiAgICAgICAgICAgICAgICAgICAgYmxlbmRGdW5jWzNdID09PSBFQmxlbmRpbmdGdW5jdGlvbi5PTkVcclxuICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNoYWRlck1hdGVyaWFsLmFscGhhTW9kZSA9IENvbnN0YW50cy5BTFBIQV9TVUJUUkFDVDtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgYmxlbmRGdW5jWzBdID09PSBFQmxlbmRpbmdGdW5jdGlvbi5EU1RfQ09MT1IgJiZcclxuICAgICAgICAgICAgICAgICAgICBibGVuZEZ1bmNbMV0gPT09IEVCbGVuZGluZ0Z1bmN0aW9uLlpFUk8gJiZcclxuICAgICAgICAgICAgICAgICAgICBibGVuZEZ1bmNbMl0gPT09IEVCbGVuZGluZ0Z1bmN0aW9uLk9ORSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIGJsZW5kRnVuY1szXSA9PT0gRUJsZW5kaW5nRnVuY3Rpb24uT05FXHJcbiAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICBzaGFkZXJNYXRlcmlhbC5hbHBoYU1vZGUgPSBDb25zdGFudHMuQUxQSEFfTVVMVElQTFk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgIGJsZW5kRnVuY1swXSA9PT0gRUJsZW5kaW5nRnVuY3Rpb24uU1JDX0FMUEhBICYmXHJcbiAgICAgICAgICAgICAgICAgICAgYmxlbmRGdW5jWzFdID09PSBFQmxlbmRpbmdGdW5jdGlvbi5PTkVfTUlOVVNfU1JDX0NPTE9SICYmXHJcbiAgICAgICAgICAgICAgICAgICAgYmxlbmRGdW5jWzJdID09PSBFQmxlbmRpbmdGdW5jdGlvbi5PTkUgJiZcclxuICAgICAgICAgICAgICAgICAgICBibGVuZEZ1bmNbM10gPT09IEVCbGVuZGluZ0Z1bmN0aW9uLk9ORVxyXG4gICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hhZGVyTWF0ZXJpYWwuYWxwaGFNb2RlID0gQ29uc3RhbnRzLkFMUEhBX01BWElNSVpFRDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIGdsVEYgVjEgTG9hZGVyXHJcbiAqIEBpbnRlcm5hbFxyXG4gKiBAZGVwcmVjYXRlZFxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEdMVEZMb2FkZXIgaW1wbGVtZW50cyBJR0xURkxvYWRlciB7XHJcbiAgICBwdWJsaWMgc3RhdGljIEV4dGVuc2lvbnM6IHsgW25hbWU6IHN0cmluZ106IEdMVEZMb2FkZXJFeHRlbnNpb24gfSA9IHt9O1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgUmVnaXN0ZXJFeHRlbnNpb24oZXh0ZW5zaW9uOiBHTFRGTG9hZGVyRXh0ZW5zaW9uKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKEdMVEZMb2FkZXIuRXh0ZW5zaW9uc1tleHRlbnNpb24ubmFtZV0pIHtcclxuICAgICAgICAgICAgVG9vbHMuRXJyb3IoJ1Rvb2wgd2l0aCB0aGUgc2FtZSBuYW1lIFwiJyArIGV4dGVuc2lvbi5uYW1lICsgJ1wiIGFscmVhZHkgZXhpc3RzJyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEdMVEZMb2FkZXIuRXh0ZW5zaW9uc1tleHRlbnNpb24ubmFtZV0gPSBleHRlbnNpb247XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRpc3Bvc2UoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gZG8gbm90aGluZ1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2ltcG9ydE1lc2hBc3luYyhcclxuICAgICAgICBtZXNoZXNOYW1lczogYW55LFxyXG4gICAgICAgIHNjZW5lOiBTY2VuZSxcclxuICAgICAgICBkYXRhOiBJR0xURkxvYWRlckRhdGEsXHJcbiAgICAgICAgcm9vdFVybDogc3RyaW5nLFxyXG4gICAgICAgIGFzc2V0Q29udGFpbmVyOiBOdWxsYWJsZTxBc3NldENvbnRhaW5lcj4sXHJcbiAgICAgICAgb25TdWNjZXNzOiAobWVzaGVzOiBBYnN0cmFjdE1lc2hbXSwgc2tlbGV0b25zOiBTa2VsZXRvbltdKSA9PiB2b2lkLFxyXG4gICAgICAgIG9uUHJvZ3Jlc3M/OiAoZXZlbnQ6IElTY2VuZUxvYWRlclByb2dyZXNzRXZlbnQpID0+IHZvaWQsXHJcbiAgICAgICAgb25FcnJvcj86IChtZXNzYWdlOiBzdHJpbmcpID0+IHZvaWRcclxuICAgICk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHNjZW5lLnVzZVJpZ2h0SGFuZGVkU3lzdGVtID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgR0xURkxvYWRlckV4dGVuc2lvbi5Mb2FkUnVudGltZUFzeW5jKFxyXG4gICAgICAgICAgICBzY2VuZSxcclxuICAgICAgICAgICAgZGF0YSxcclxuICAgICAgICAgICAgcm9vdFVybCxcclxuICAgICAgICAgICAgKGdsdGZSdW50aW1lKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBnbHRmUnVudGltZS5hc3NldENvbnRhaW5lciA9IGFzc2V0Q29udGFpbmVyO1xyXG4gICAgICAgICAgICAgICAgZ2x0ZlJ1bnRpbWUuaW1wb3J0T25seU1lc2hlcyA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKG1lc2hlc05hbWVzID09PSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2x0ZlJ1bnRpbWUuaW1wb3J0TWVzaGVzTmFtZXMgPSBbXTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIG1lc2hlc05hbWVzID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2x0ZlJ1bnRpbWUuaW1wb3J0TWVzaGVzTmFtZXMgPSBbbWVzaGVzTmFtZXNdO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChtZXNoZXNOYW1lcyAmJiAhKG1lc2hlc05hbWVzIGluc3RhbmNlb2YgQXJyYXkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2x0ZlJ1bnRpbWUuaW1wb3J0TWVzaGVzTmFtZXMgPSBbbWVzaGVzTmFtZXNdO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBnbHRmUnVudGltZS5pbXBvcnRNZXNoZXNOYW1lcyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIFRvb2xzLldhcm4oXCJBcmd1bWVudCBtZXNoZXNOYW1lcyBtdXN0IGJlIG9mIHR5cGUgc3RyaW5nIG9yIHN0cmluZ1tdXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIENyZWF0ZSBub2Rlc1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY3JlYXRlTm9kZXMoZ2x0ZlJ1bnRpbWUpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IG1lc2hlczogQWJzdHJhY3RNZXNoW10gPSBbXTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNrZWxldG9uczogU2tlbGV0b25bXSA9IFtdO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIEZpbGwgYXJyYXlzIG9mIG1lc2hlcyBhbmQgc2tlbGV0b25zXHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IG5kZSBpbiBnbHRmUnVudGltZS5ub2Rlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5vZGU6IElHTFRGTm9kZSA9IGdsdGZSdW50aW1lLm5vZGVzW25kZV07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChub2RlLmJhYnlsb25Ob2RlIGluc3RhbmNlb2YgQWJzdHJhY3RNZXNoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc2hlcy5wdXNoKDxBYnN0cmFjdE1lc2g+bm9kZS5iYWJ5bG9uTm9kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3Qgc2tsIGluIGdsdGZSdW50aW1lLnNraW5zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2tpbjogSUdMVEZTa2lucyA9IGdsdGZSdW50aW1lLnNraW5zW3NrbF07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChza2luLmJhYnlsb25Ta2VsZXRvbiBpbnN0YW5jZW9mIFNrZWxldG9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNrZWxldG9ucy5wdXNoKHNraW4uYmFieWxvblNrZWxldG9uKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gTG9hZCBidWZmZXJzLCBzaGFkZXJzLCBtYXRlcmlhbHMsIGV0Yy5cclxuICAgICAgICAgICAgICAgIHRoaXMuX2xvYWRCdWZmZXJzQXN5bmMoZ2x0ZlJ1bnRpbWUsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9sb2FkU2hhZGVyc0FzeW5jKGdsdGZSdW50aW1lLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltcG9ydE1hdGVyaWFscyhnbHRmUnVudGltZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc3RMb2FkKGdsdGZSdW50aW1lKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghR0xURkZpbGVMb2FkZXIuSW5jcmVtZW50YWxMb2FkaW5nICYmIG9uU3VjY2Vzcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25TdWNjZXNzKG1lc2hlcywgc2tlbGV0b25zKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKEdMVEZGaWxlTG9hZGVyLkluY3JlbWVudGFsTG9hZGluZyAmJiBvblN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgICAgICAgICBvblN1Y2Nlc3MobWVzaGVzLCBza2VsZXRvbnMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvbkVycm9yXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbXBvcnRzIG9uZSBvciBtb3JlIG1lc2hlcyBmcm9tIGEgbG9hZGVkIGdsdGYgZmlsZSBhbmQgYWRkcyB0aGVtIHRvIHRoZSBzY2VuZVxyXG4gICAgICogQHBhcmFtIG1lc2hlc05hbWVzIGEgc3RyaW5nIG9yIGFycmF5IG9mIHN0cmluZ3Mgb2YgdGhlIG1lc2ggbmFtZXMgdGhhdCBzaG91bGQgYmUgbG9hZGVkIGZyb20gdGhlIGZpbGVcclxuICAgICAqIEBwYXJhbSBzY2VuZSB0aGUgc2NlbmUgdGhlIG1lc2hlcyBzaG91bGQgYmUgYWRkZWQgdG9cclxuICAgICAqIEBwYXJhbSBhc3NldENvbnRhaW5lciBkZWZpbmVzIHRoZSBhc3NldCBjb250YWluZXIgdG8gdXNlIChjYW4gYmUgbnVsbClcclxuICAgICAqIEBwYXJhbSBkYXRhIGdsdGYgZGF0YSBjb250YWluaW5nIGluZm9ybWF0aW9uIG9mIHRoZSBtZXNoZXMgaW4gYSBsb2FkZWQgZmlsZVxyXG4gICAgICogQHBhcmFtIHJvb3RVcmwgcm9vdCB1cmwgdG8gbG9hZCBmcm9tXHJcbiAgICAgKiBAcGFyYW0gb25Qcm9ncmVzcyBldmVudCB0aGF0IGZpcmVzIHdoZW4gbG9hZGluZyBwcm9ncmVzcyBoYXMgb2NjdXJlZFxyXG4gICAgICogQHJldHVybnMgYSBwcm9taXNlIGNvbnRhaW5nIHRoZSBsb2FkZWQgbWVzaGVzLCBwYXJ0aWNsZXMsIHNrZWxldG9ucyBhbmQgYW5pbWF0aW9uc1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaW1wb3J0TWVzaEFzeW5jKFxyXG4gICAgICAgIG1lc2hlc05hbWVzOiBhbnksXHJcbiAgICAgICAgc2NlbmU6IFNjZW5lLFxyXG4gICAgICAgIGFzc2V0Q29udGFpbmVyOiBOdWxsYWJsZTxBc3NldENvbnRhaW5lcj4sXHJcbiAgICAgICAgZGF0YTogSUdMVEZMb2FkZXJEYXRhLFxyXG4gICAgICAgIHJvb3RVcmw6IHN0cmluZyxcclxuICAgICAgICBvblByb2dyZXNzPzogKGV2ZW50OiBJU2NlbmVMb2FkZXJQcm9ncmVzc0V2ZW50KSA9PiB2b2lkXHJcbiAgICApOiBQcm9taXNlPElTY2VuZUxvYWRlckFzeW5jUmVzdWx0PiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5faW1wb3J0TWVzaEFzeW5jKFxyXG4gICAgICAgICAgICAgICAgbWVzaGVzTmFtZXMsXHJcbiAgICAgICAgICAgICAgICBzY2VuZSxcclxuICAgICAgICAgICAgICAgIGRhdGEsXHJcbiAgICAgICAgICAgICAgICByb290VXJsLFxyXG4gICAgICAgICAgICAgICAgYXNzZXRDb250YWluZXIsXHJcbiAgICAgICAgICAgICAgICAobWVzaGVzLCBza2VsZXRvbnMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzaGVzOiBtZXNoZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRpY2xlU3lzdGVtczogW10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNrZWxldG9uczogc2tlbGV0b25zLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb25Hcm91cHM6IFtdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaWdodHM6IFtdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm1Ob2RlczogW10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdlb21ldHJpZXM6IFtdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcHJpdGVNYW5hZ2VyczogW10sXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgb25Qcm9ncmVzcyxcclxuICAgICAgICAgICAgICAgIChtZXNzYWdlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihtZXNzYWdlKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfbG9hZEFzeW5jKFxyXG4gICAgICAgIHNjZW5lOiBTY2VuZSxcclxuICAgICAgICBkYXRhOiBJR0xURkxvYWRlckRhdGEsXHJcbiAgICAgICAgcm9vdFVybDogc3RyaW5nLFxyXG4gICAgICAgIG9uU3VjY2VzczogKCkgPT4gdm9pZCxcclxuICAgICAgICBvblByb2dyZXNzPzogKGV2ZW50OiBJU2NlbmVMb2FkZXJQcm9ncmVzc0V2ZW50KSA9PiB2b2lkLFxyXG4gICAgICAgIG9uRXJyb3I/OiAobWVzc2FnZTogc3RyaW5nKSA9PiB2b2lkXHJcbiAgICApOiB2b2lkIHtcclxuICAgICAgICBzY2VuZS51c2VSaWdodEhhbmRlZFN5c3RlbSA9IHRydWU7XHJcblxyXG4gICAgICAgIEdMVEZMb2FkZXJFeHRlbnNpb24uTG9hZFJ1bnRpbWVBc3luYyhcclxuICAgICAgICAgICAgc2NlbmUsXHJcbiAgICAgICAgICAgIGRhdGEsXHJcbiAgICAgICAgICAgIHJvb3RVcmwsXHJcbiAgICAgICAgICAgIChnbHRmUnVudGltZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gTG9hZCBydW50aW1lIGV4dGVuc2lvc1xyXG4gICAgICAgICAgICAgICAgR0xURkxvYWRlckV4dGVuc2lvbi5Mb2FkUnVudGltZUV4dGVuc2lvbnNBc3luYyhcclxuICAgICAgICAgICAgICAgICAgICBnbHRmUnVudGltZSxcclxuICAgICAgICAgICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIENyZWF0ZSBub2Rlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9jcmVhdGVOb2RlcyhnbHRmUnVudGltZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBMb2FkIGJ1ZmZlcnMsIHNoYWRlcnMsIG1hdGVyaWFscywgZXRjLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9sb2FkQnVmZmVyc0FzeW5jKGdsdGZSdW50aW1lLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9sb2FkU2hhZGVyc0FzeW5jKGdsdGZSdW50aW1lLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1wb3J0TWF0ZXJpYWxzKGdsdGZSdW50aW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3N0TG9hZChnbHRmUnVudGltZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghR0xURkZpbGVMb2FkZXIuSW5jcmVtZW50YWxMb2FkaW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uU3VjY2VzcygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChHTFRGRmlsZUxvYWRlci5JbmNyZW1lbnRhbExvYWRpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uU3VjY2VzcygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBvbkVycm9yXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvbkVycm9yXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEltcG9ydHMgYWxsIG9iamVjdHMgZnJvbSBhIGxvYWRlZCBnbHRmIGZpbGUgYW5kIGFkZHMgdGhlbSB0byB0aGUgc2NlbmVcclxuICAgICAqIEBwYXJhbSBzY2VuZSB0aGUgc2NlbmUgdGhlIG9iamVjdHMgc2hvdWxkIGJlIGFkZGVkIHRvXHJcbiAgICAgKiBAcGFyYW0gZGF0YSBnbHRmIGRhdGEgY29udGFpbmluZyBpbmZvcm1hdGlvbiBvZiB0aGUgbWVzaGVzIGluIGEgbG9hZGVkIGZpbGVcclxuICAgICAqIEBwYXJhbSByb290VXJsIHJvb3QgdXJsIHRvIGxvYWQgZnJvbVxyXG4gICAgICogQHBhcmFtIG9uUHJvZ3Jlc3MgZXZlbnQgdGhhdCBmaXJlcyB3aGVuIGxvYWRpbmcgcHJvZ3Jlc3MgaGFzIG9jY3VyZWRcclxuICAgICAqIEByZXR1cm5zIGEgcHJvbWlzZSB3aGljaCBjb21wbGV0ZXMgd2hlbiBvYmplY3RzIGhhdmUgYmVlbiBsb2FkZWQgdG8gdGhlIHNjZW5lXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBsb2FkQXN5bmMoc2NlbmU6IFNjZW5lLCBkYXRhOiBJR0xURkxvYWRlckRhdGEsIHJvb3RVcmw6IHN0cmluZywgb25Qcm9ncmVzcz86IChldmVudDogSVNjZW5lTG9hZGVyUHJvZ3Jlc3NFdmVudCkgPT4gdm9pZCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX2xvYWRBc3luYyhcclxuICAgICAgICAgICAgICAgIHNjZW5lLFxyXG4gICAgICAgICAgICAgICAgZGF0YSxcclxuICAgICAgICAgICAgICAgIHJvb3RVcmwsXHJcbiAgICAgICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG9uUHJvZ3Jlc3MsXHJcbiAgICAgICAgICAgICAgICAobWVzc2FnZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IobWVzc2FnZSkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2xvYWRTaGFkZXJzQXN5bmMoZ2x0ZlJ1bnRpbWU6IElHTFRGUnVudGltZSwgb25sb2FkOiAoKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IGhhc1NoYWRlcnMgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgY29uc3QgcHJvY2Vzc1NoYWRlciA9IChzaGE6IHN0cmluZywgc2hhZGVyOiBJR0xURlNoYWRlcikgPT4ge1xyXG4gICAgICAgICAgICBHTFRGTG9hZGVyRXh0ZW5zaW9uLkxvYWRTaGFkZXJTdHJpbmdBc3luYyhcclxuICAgICAgICAgICAgICAgIGdsdGZSdW50aW1lLFxyXG4gICAgICAgICAgICAgICAgc2hhLFxyXG4gICAgICAgICAgICAgICAgKHNoYWRlclN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzaGFkZXJTdHJpbmcgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBnbHRmUnVudGltZS5sb2FkZWRTaGFkZXJDb3VudCsrO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2hhZGVyU3RyaW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEVmZmVjdC5TaGFkZXJzU3RvcmVbc2hhICsgKHNoYWRlci50eXBlID09PSBFU2hhZGVyVHlwZS5WRVJURVggPyBcIlZlcnRleFNoYWRlclwiIDogXCJQaXhlbFNoYWRlclwiKV0gPSBzaGFkZXJTdHJpbmc7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZ2x0ZlJ1bnRpbWUubG9hZGVkU2hhZGVyQ291bnQgPT09IGdsdGZSdW50aW1lLnNoYWRlcnNjb3VudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbmxvYWQoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIFRvb2xzLkVycm9yKFwiRXJyb3Igd2hlbiBsb2FkaW5nIHNoYWRlciBwcm9ncmFtIG5hbWVkIFwiICsgc2hhICsgXCIgbG9jYXRlZCBhdCBcIiArIHNoYWRlci51cmkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGZvciAoY29uc3Qgc2hhIGluIGdsdGZSdW50aW1lLnNoYWRlcnMpIHtcclxuICAgICAgICAgICAgaGFzU2hhZGVycyA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBzaGFkZXI6IElHTFRGU2hhZGVyID0gZ2x0ZlJ1bnRpbWUuc2hhZGVyc1tzaGFdO1xyXG4gICAgICAgICAgICBpZiAoc2hhZGVyKSB7XHJcbiAgICAgICAgICAgICAgICBwcm9jZXNzU2hhZGVyLmJpbmQodGhpcywgc2hhLCBzaGFkZXIpKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBUb29scy5FcnJvcihcIk5vIHNoYWRlciBuYW1lZDogXCIgKyBzaGEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIWhhc1NoYWRlcnMpIHtcclxuICAgICAgICAgICAgb25sb2FkKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2xvYWRCdWZmZXJzQXN5bmMoZ2x0ZlJ1bnRpbWU6IElHTFRGUnVudGltZSwgb25Mb2FkOiAoKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IGhhc0J1ZmZlcnMgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgY29uc3QgcHJvY2Vzc0J1ZmZlciA9IChidWY6IHN0cmluZywgYnVmZmVyOiBJR0xURkJ1ZmZlcikgPT4ge1xyXG4gICAgICAgICAgICBHTFRGTG9hZGVyRXh0ZW5zaW9uLkxvYWRCdWZmZXJBc3luYyhcclxuICAgICAgICAgICAgICAgIGdsdGZSdW50aW1lLFxyXG4gICAgICAgICAgICAgICAgYnVmLFxyXG4gICAgICAgICAgICAgICAgKGJ1ZmZlclZpZXcpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBnbHRmUnVudGltZS5sb2FkZWRCdWZmZXJDb3VudCsrO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoYnVmZmVyVmlldykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYnVmZmVyVmlldy5ieXRlTGVuZ3RoICE9IGdsdGZSdW50aW1lLmJ1ZmZlcnNbYnVmXS5ieXRlTGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUb29scy5FcnJvcihcIkJ1ZmZlciBuYW1lZCBcIiArIGJ1ZiArIFwiIGlzIGxlbmd0aCBcIiArIGJ1ZmZlclZpZXcuYnl0ZUxlbmd0aCArIFwiLiBFeHBlY3RlZDogXCIgKyBidWZmZXIuYnl0ZUxlbmd0aCk7IC8vIEltcHJvdmUgZXJyb3IgbWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBnbHRmUnVudGltZS5sb2FkZWRCdWZmZXJWaWV3c1tidWZdID0gYnVmZmVyVmlldztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChnbHRmUnVudGltZS5sb2FkZWRCdWZmZXJDb3VudCA9PT0gZ2x0ZlJ1bnRpbWUuYnVmZmVyc0NvdW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uTG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgVG9vbHMuRXJyb3IoXCJFcnJvciB3aGVuIGxvYWRpbmcgYnVmZmVyIG5hbWVkIFwiICsgYnVmICsgXCIgbG9jYXRlZCBhdCBcIiArIGJ1ZmZlci51cmkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGZvciAoY29uc3QgYnVmIGluIGdsdGZSdW50aW1lLmJ1ZmZlcnMpIHtcclxuICAgICAgICAgICAgaGFzQnVmZmVycyA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBidWZmZXI6IElHTFRGQnVmZmVyID0gZ2x0ZlJ1bnRpbWUuYnVmZmVyc1tidWZdO1xyXG4gICAgICAgICAgICBpZiAoYnVmZmVyKSB7XHJcbiAgICAgICAgICAgICAgICBwcm9jZXNzQnVmZmVyLmJpbmQodGhpcywgYnVmLCBidWZmZXIpKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBUb29scy5FcnJvcihcIk5vIGJ1ZmZlciBuYW1lZDogXCIgKyBidWYpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIWhhc0J1ZmZlcnMpIHtcclxuICAgICAgICAgICAgb25Mb2FkKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2NyZWF0ZU5vZGVzKGdsdGZSdW50aW1lOiBJR0xURlJ1bnRpbWUpOiB2b2lkIHtcclxuICAgICAgICBsZXQgY3VycmVudFNjZW5lID0gPElHTFRGU2NlbmU+Z2x0ZlJ1bnRpbWUuY3VycmVudFNjZW5lO1xyXG5cclxuICAgICAgICBpZiAoY3VycmVudFNjZW5lKSB7XHJcbiAgICAgICAgICAgIC8vIE9ubHkgb25lIHNjZW5lIGV2ZW4gaWYgbXVsdGlwbGUgc2NlbmVzIGFyZSBkZWZpbmVkXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY3VycmVudFNjZW5lLm5vZGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB0cmF2ZXJzZU5vZGVzKGdsdGZSdW50aW1lLCBjdXJyZW50U2NlbmUubm9kZXNbaV0sIG51bGwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gTG9hZCBhbGwgc2NlbmVzXHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgdGhpbmcgaW4gZ2x0ZlJ1bnRpbWUuc2NlbmVzKSB7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50U2NlbmUgPSA8SUdMVEZTY2VuZT5nbHRmUnVudGltZS5zY2VuZXNbdGhpbmddO1xyXG5cclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY3VycmVudFNjZW5lLm5vZGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhdmVyc2VOb2RlcyhnbHRmUnVudGltZSwgY3VycmVudFNjZW5lLm5vZGVzW2ldLCBudWxsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLyoqIEBpbnRlcm5hbCAqL1xyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgR0xURkxvYWRlckV4dGVuc2lvbiB7XHJcbiAgICBwcml2YXRlIF9uYW1lOiBzdHJpbmc7XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX25hbWUgPSBuYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgbmFtZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9uYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVmaW5lcyBhbiBvdmVycmlkZSBmb3IgbG9hZGluZyB0aGUgcnVudGltZVxyXG4gICAgICogUmV0dXJuIHRydWUgdG8gc3RvcCBmdXJ0aGVyIGV4dGVuc2lvbnMgZnJvbSBsb2FkaW5nIHRoZSBydW50aW1lXHJcbiAgICAgKiBAcGFyYW0gc2NlbmVcclxuICAgICAqIEBwYXJhbSBkYXRhXHJcbiAgICAgKiBAcGFyYW0gcm9vdFVybFxyXG4gICAgICogQHBhcmFtIG9uU3VjY2Vzc1xyXG4gICAgICogQHBhcmFtIG9uRXJyb3JcclxuICAgICAqIEByZXR1cm5zIHRydWUgdG8gc3RvcCBmdXJ0aGVyIGV4dGVuc2lvbnMgZnJvbSBsb2FkaW5nIHRoZSBydW50aW1lXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBsb2FkUnVudGltZUFzeW5jKHNjZW5lOiBTY2VuZSwgZGF0YTogSUdMVEZMb2FkZXJEYXRhLCByb290VXJsOiBzdHJpbmcsIG9uU3VjY2Vzcz86IChnbHRmUnVudGltZTogSUdMVEZSdW50aW1lKSA9PiB2b2lkLCBvbkVycm9yPzogKG1lc3NhZ2U6IHN0cmluZykgPT4gdm9pZCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIERlZmluZXMgYW4gb252ZXJyaWRlIGZvciBjcmVhdGluZyBnbHRmIHJ1bnRpbWVcclxuICAgICAqIFJldHVybiB0cnVlIHRvIHN0b3AgZnVydGhlciBleHRlbnNpb25zIGZyb20gY3JlYXRpbmcgdGhlIHJ1bnRpbWVcclxuICAgICAqIEBwYXJhbSBnbHRmUnVudGltZVxyXG4gICAgICogQHBhcmFtIG9uU3VjY2Vzc1xyXG4gICAgICogQHBhcmFtIG9uRXJyb3JcclxuICAgICAqIEByZXR1cm5zIHRydWUgdG8gc3RvcCBmdXJ0aGVyIGV4dGVuc2lvbnMgZnJvbSBjcmVhdGluZyB0aGUgcnVudGltZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbG9hZFJ1bnRpbWVFeHRlbnNpb25zQXN5bmMoZ2x0ZlJ1bnRpbWU6IElHTFRGUnVudGltZSwgb25TdWNjZXNzOiAoKSA9PiB2b2lkLCBvbkVycm9yPzogKG1lc3NhZ2U6IHN0cmluZykgPT4gdm9pZCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIERlZmluZXMgYW4gb3ZlcnJpZGUgZm9yIGxvYWRpbmcgYnVmZmVyc1xyXG4gICAgICogUmV0dXJuIHRydWUgdG8gc3RvcCBmdXJ0aGVyIGV4dGVuc2lvbnMgZnJvbSBsb2FkaW5nIHRoaXMgYnVmZmVyXHJcbiAgICAgKiBAcGFyYW0gZ2x0ZlJ1bnRpbWVcclxuICAgICAqIEBwYXJhbSBpZFxyXG4gICAgICogQHBhcmFtIG9uU3VjY2Vzc1xyXG4gICAgICogQHBhcmFtIG9uRXJyb3JcclxuICAgICAqIEBwYXJhbSBvblByb2dyZXNzXHJcbiAgICAgKiBAcmV0dXJucyB0cnVlIHRvIHN0b3AgZnVydGhlciBleHRlbnNpb25zIGZyb20gbG9hZGluZyB0aGlzIGJ1ZmZlclxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbG9hZEJ1ZmZlckFzeW5jKFxyXG4gICAgICAgIGdsdGZSdW50aW1lOiBJR0xURlJ1bnRpbWUsXHJcbiAgICAgICAgaWQ6IHN0cmluZyxcclxuICAgICAgICBvblN1Y2Nlc3M6IChidWZmZXI6IEFycmF5QnVmZmVyVmlldykgPT4gdm9pZCxcclxuICAgICAgICBvbkVycm9yOiAobWVzc2FnZTogc3RyaW5nKSA9PiB2b2lkLFxyXG4gICAgICAgIG9uUHJvZ3Jlc3M/OiAoKSA9PiB2b2lkXHJcbiAgICApOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWZpbmVzIGFuIG92ZXJyaWRlIGZvciBsb2FkaW5nIHRleHR1cmUgYnVmZmVyc1xyXG4gICAgICogUmV0dXJuIHRydWUgdG8gc3RvcCBmdXJ0aGVyIGV4dGVuc2lvbnMgZnJvbSBsb2FkaW5nIHRoaXMgdGV4dHVyZSBkYXRhXHJcbiAgICAgKiBAcGFyYW0gZ2x0ZlJ1bnRpbWVcclxuICAgICAqIEBwYXJhbSBpZFxyXG4gICAgICogQHBhcmFtIG9uU3VjY2Vzc1xyXG4gICAgICogQHBhcmFtIG9uRXJyb3JcclxuICAgICAqIEByZXR1cm5zIHRydWUgdG8gc3RvcCBmdXJ0aGVyIGV4dGVuc2lvbnMgZnJvbSBsb2FkaW5nIHRoaXMgdGV4dHVyZSBkYXRhXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBsb2FkVGV4dHVyZUJ1ZmZlckFzeW5jKGdsdGZSdW50aW1lOiBJR0xURlJ1bnRpbWUsIGlkOiBzdHJpbmcsIG9uU3VjY2VzczogKGJ1ZmZlcjogQXJyYXlCdWZmZXJWaWV3KSA9PiB2b2lkLCBvbkVycm9yOiAobWVzc2FnZTogc3RyaW5nKSA9PiB2b2lkKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVmaW5lcyBhbiBvdmVycmlkZSBmb3IgY3JlYXRpbmcgdGV4dHVyZXNcclxuICAgICAqIFJldHVybiB0cnVlIHRvIHN0b3AgZnVydGhlciBleHRlbnNpb25zIGZyb20gbG9hZGluZyB0aGlzIHRleHR1cmVcclxuICAgICAqIEBwYXJhbSBnbHRmUnVudGltZVxyXG4gICAgICogQHBhcmFtIGlkXHJcbiAgICAgKiBAcGFyYW0gYnVmZmVyXHJcbiAgICAgKiBAcGFyYW0gb25TdWNjZXNzXHJcbiAgICAgKiBAcGFyYW0gb25FcnJvclxyXG4gICAgICogQHJldHVybnMgdHJ1ZSB0byBzdG9wIGZ1cnRoZXIgZXh0ZW5zaW9ucyBmcm9tIGxvYWRpbmcgdGhpcyB0ZXh0dXJlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBjcmVhdGVUZXh0dXJlQXN5bmMoZ2x0ZlJ1bnRpbWU6IElHTFRGUnVudGltZSwgaWQ6IHN0cmluZywgYnVmZmVyOiBBcnJheUJ1ZmZlclZpZXcsIG9uU3VjY2VzczogKHRleHR1cmU6IFRleHR1cmUpID0+IHZvaWQsIG9uRXJyb3I6IChtZXNzYWdlOiBzdHJpbmcpID0+IHZvaWQpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWZpbmVzIGFuIG92ZXJyaWRlIGZvciBsb2FkaW5nIHNoYWRlciBzdHJpbmdzXHJcbiAgICAgKiBSZXR1cm4gdHJ1ZSB0byBzdG9wIGZ1cnRoZXIgZXh0ZW5zaW9ucyBmcm9tIGxvYWRpbmcgdGhpcyBzaGFkZXIgZGF0YVxyXG4gICAgICogQHBhcmFtIGdsdGZSdW50aW1lXHJcbiAgICAgKiBAcGFyYW0gaWRcclxuICAgICAqIEBwYXJhbSBvblN1Y2Nlc3NcclxuICAgICAqIEBwYXJhbSBvbkVycm9yXHJcbiAgICAgKiBAcmV0dXJucyB0cnVlIHRvIHN0b3AgZnVydGhlciBleHRlbnNpb25zIGZyb20gbG9hZGluZyB0aGlzIHNoYWRlciBkYXRhXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBsb2FkU2hhZGVyU3RyaW5nQXN5bmMoZ2x0ZlJ1bnRpbWU6IElHTFRGUnVudGltZSwgaWQ6IHN0cmluZywgb25TdWNjZXNzOiAoc2hhZGVyU3RyaW5nOiBzdHJpbmcpID0+IHZvaWQsIG9uRXJyb3I6IChtZXNzYWdlOiBzdHJpbmcpID0+IHZvaWQpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWZpbmVzIGFuIG92ZXJyaWRlIGZvciBsb2FkaW5nIG1hdGVyaWFsc1xyXG4gICAgICogUmV0dXJuIHRydWUgdG8gc3RvcCBmdXJ0aGVyIGV4dGVuc2lvbnMgZnJvbSBsb2FkaW5nIHRoaXMgbWF0ZXJpYWxcclxuICAgICAqIEBwYXJhbSBnbHRmUnVudGltZVxyXG4gICAgICogQHBhcmFtIGlkXHJcbiAgICAgKiBAcGFyYW0gb25TdWNjZXNzXHJcbiAgICAgKiBAcGFyYW0gb25FcnJvclxyXG4gICAgICogQHJldHVybnMgdHJ1ZSB0byBzdG9wIGZ1cnRoZXIgZXh0ZW5zaW9ucyBmcm9tIGxvYWRpbmcgdGhpcyBtYXRlcmlhbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbG9hZE1hdGVyaWFsQXN5bmMoZ2x0ZlJ1bnRpbWU6IElHTFRGUnVudGltZSwgaWQ6IHN0cmluZywgb25TdWNjZXNzOiAobWF0ZXJpYWw6IE1hdGVyaWFsKSA9PiB2b2lkLCBvbkVycm9yOiAobWVzc2FnZTogc3RyaW5nKSA9PiB2b2lkKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIC0tLS0tLS0tLVxyXG4gICAgLy8gVXRpbGl0aWVzXHJcbiAgICAvLyAtLS0tLS0tLS1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIExvYWRSdW50aW1lQXN5bmMoXHJcbiAgICAgICAgc2NlbmU6IFNjZW5lLFxyXG4gICAgICAgIGRhdGE6IElHTFRGTG9hZGVyRGF0YSxcclxuICAgICAgICByb290VXJsOiBzdHJpbmcsXHJcbiAgICAgICAgb25TdWNjZXNzPzogKGdsdGZSdW50aW1lOiBJR0xURlJ1bnRpbWUpID0+IHZvaWQsXHJcbiAgICAgICAgb25FcnJvcj86IChtZXNzYWdlOiBzdHJpbmcpID0+IHZvaWRcclxuICAgICk6IHZvaWQge1xyXG4gICAgICAgIEdMVEZMb2FkZXJFeHRlbnNpb24uX0FwcGx5RXh0ZW5zaW9ucyhcclxuICAgICAgICAgICAgKGxvYWRlckV4dGVuc2lvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGxvYWRlckV4dGVuc2lvbi5sb2FkUnVudGltZUFzeW5jKHNjZW5lLCBkYXRhLCByb290VXJsLCBvblN1Y2Nlc3MsIG9uRXJyb3IpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIW9uU3VjY2Vzcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uU3VjY2VzcyhHTFRGTG9hZGVyQmFzZS5DcmVhdGVSdW50aW1lKGRhdGEuanNvbiwgc2NlbmUsIHJvb3RVcmwpKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIExvYWRSdW50aW1lRXh0ZW5zaW9uc0FzeW5jKGdsdGZSdW50aW1lOiBJR0xURlJ1bnRpbWUsIG9uU3VjY2VzczogKCkgPT4gdm9pZCwgb25FcnJvcj86IChtZXNzYWdlOiBzdHJpbmcpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgICAgICBHTFRGTG9hZGVyRXh0ZW5zaW9uLl9BcHBseUV4dGVuc2lvbnMoXHJcbiAgICAgICAgICAgIChsb2FkZXJFeHRlbnNpb24pID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBsb2FkZXJFeHRlbnNpb24ubG9hZFJ1bnRpbWVFeHRlbnNpb25zQXN5bmMoZ2x0ZlJ1bnRpbWUsIG9uU3VjY2Vzcywgb25FcnJvcik7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIG9uU3VjY2VzcygpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgTG9hZEJ1ZmZlckFzeW5jKFxyXG4gICAgICAgIGdsdGZSdW50aW1lOiBJR0xURlJ1bnRpbWUsXHJcbiAgICAgICAgaWQ6IHN0cmluZyxcclxuICAgICAgICBvblN1Y2Nlc3M6IChidWZmZXJWaWV3OiBBcnJheUJ1ZmZlclZpZXcpID0+IHZvaWQsXHJcbiAgICAgICAgb25FcnJvcjogKG1lc3NhZ2U6IHN0cmluZykgPT4gdm9pZCxcclxuICAgICAgICBvblByb2dyZXNzPzogKCkgPT4gdm9pZFxyXG4gICAgKTogdm9pZCB7XHJcbiAgICAgICAgR0xURkxvYWRlckV4dGVuc2lvbi5fQXBwbHlFeHRlbnNpb25zKFxyXG4gICAgICAgICAgICAobG9hZGVyRXh0ZW5zaW9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbG9hZGVyRXh0ZW5zaW9uLmxvYWRCdWZmZXJBc3luYyhnbHRmUnVudGltZSwgaWQsIG9uU3VjY2Vzcywgb25FcnJvciwgb25Qcm9ncmVzcyk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgIEdMVEZMb2FkZXJCYXNlLkxvYWRCdWZmZXJBc3luYyhnbHRmUnVudGltZSwgaWQsIG9uU3VjY2Vzcywgb25FcnJvciwgb25Qcm9ncmVzcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgTG9hZFRleHR1cmVBc3luYyhnbHRmUnVudGltZTogSUdMVEZSdW50aW1lLCBpZDogc3RyaW5nLCBvblN1Y2Nlc3M6ICh0ZXh0dXJlOiBUZXh0dXJlKSA9PiB2b2lkLCBvbkVycm9yOiAobWVzc2FnZTogc3RyaW5nKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICAgICAgR0xURkxvYWRlckV4dGVuc2lvbi5fTG9hZFRleHR1cmVCdWZmZXJBc3luYyhcclxuICAgICAgICAgICAgZ2x0ZlJ1bnRpbWUsXHJcbiAgICAgICAgICAgIGlkLFxyXG4gICAgICAgICAgICAoYnVmZmVyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYnVmZmVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgR0xURkxvYWRlckV4dGVuc2lvbi5fQ3JlYXRlVGV4dHVyZUFzeW5jKGdsdGZSdW50aW1lLCBpZCwgYnVmZmVyLCBvblN1Y2Nlc3MsIG9uRXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvbkVycm9yXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIExvYWRTaGFkZXJTdHJpbmdBc3luYyhnbHRmUnVudGltZTogSUdMVEZSdW50aW1lLCBpZDogc3RyaW5nLCBvblN1Y2Nlc3M6IChzaGFkZXJEYXRhOiBzdHJpbmcgfCBBcnJheUJ1ZmZlcikgPT4gdm9pZCwgb25FcnJvcjogKG1lc3NhZ2U6IHN0cmluZykgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgICAgIEdMVEZMb2FkZXJFeHRlbnNpb24uX0FwcGx5RXh0ZW5zaW9ucyhcclxuICAgICAgICAgICAgKGxvYWRlckV4dGVuc2lvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGxvYWRlckV4dGVuc2lvbi5sb2FkU2hhZGVyU3RyaW5nQXN5bmMoZ2x0ZlJ1bnRpbWUsIGlkLCBvblN1Y2Nlc3MsIG9uRXJyb3IpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBHTFRGTG9hZGVyQmFzZS5Mb2FkU2hhZGVyU3RyaW5nQXN5bmMoZ2x0ZlJ1bnRpbWUsIGlkLCBvblN1Y2Nlc3MsIG9uRXJyb3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIExvYWRNYXRlcmlhbEFzeW5jKGdsdGZSdW50aW1lOiBJR0xURlJ1bnRpbWUsIGlkOiBzdHJpbmcsIG9uU3VjY2VzczogKG1hdGVyaWFsOiBNYXRlcmlhbCkgPT4gdm9pZCwgb25FcnJvcjogKG1lc3NhZ2U6IHN0cmluZykgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgICAgIEdMVEZMb2FkZXJFeHRlbnNpb24uX0FwcGx5RXh0ZW5zaW9ucyhcclxuICAgICAgICAgICAgKGxvYWRlckV4dGVuc2lvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGxvYWRlckV4dGVuc2lvbi5sb2FkTWF0ZXJpYWxBc3luYyhnbHRmUnVudGltZSwgaWQsIG9uU3VjY2Vzcywgb25FcnJvcik7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgIEdMVEZMb2FkZXJCYXNlLkxvYWRNYXRlcmlhbEFzeW5jKGdsdGZSdW50aW1lLCBpZCwgb25TdWNjZXNzLCBvbkVycm9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX0xvYWRUZXh0dXJlQnVmZmVyQXN5bmMoXHJcbiAgICAgICAgZ2x0ZlJ1bnRpbWU6IElHTFRGUnVudGltZSxcclxuICAgICAgICBpZDogc3RyaW5nLFxyXG4gICAgICAgIG9uU3VjY2VzczogKGJ1ZmZlcjogTnVsbGFibGU8QXJyYXlCdWZmZXJWaWV3PikgPT4gdm9pZCxcclxuICAgICAgICBvbkVycm9yOiAobWVzc2FnZTogc3RyaW5nKSA9PiB2b2lkXHJcbiAgICApOiB2b2lkIHtcclxuICAgICAgICBHTFRGTG9hZGVyRXh0ZW5zaW9uLl9BcHBseUV4dGVuc2lvbnMoXHJcbiAgICAgICAgICAgIChsb2FkZXJFeHRlbnNpb24pID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBsb2FkZXJFeHRlbnNpb24ubG9hZFRleHR1cmVCdWZmZXJBc3luYyhnbHRmUnVudGltZSwgaWQsIG9uU3VjY2Vzcywgb25FcnJvcik7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgIEdMVEZMb2FkZXJCYXNlLkxvYWRUZXh0dXJlQnVmZmVyQXN5bmMoZ2x0ZlJ1bnRpbWUsIGlkLCBvblN1Y2Nlc3MsIG9uRXJyb3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBfQ3JlYXRlVGV4dHVyZUFzeW5jKFxyXG4gICAgICAgIGdsdGZSdW50aW1lOiBJR0xURlJ1bnRpbWUsXHJcbiAgICAgICAgaWQ6IHN0cmluZyxcclxuICAgICAgICBidWZmZXI6IEFycmF5QnVmZmVyVmlldyxcclxuICAgICAgICBvblN1Y2Nlc3M6ICh0ZXh0dXJlOiBUZXh0dXJlKSA9PiB2b2lkLFxyXG4gICAgICAgIG9uRXJyb3I6IChtZXNzYWdlOiBzdHJpbmcpID0+IHZvaWRcclxuICAgICk6IHZvaWQge1xyXG4gICAgICAgIEdMVEZMb2FkZXJFeHRlbnNpb24uX0FwcGx5RXh0ZW5zaW9ucyhcclxuICAgICAgICAgICAgKGxvYWRlckV4dGVuc2lvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGxvYWRlckV4dGVuc2lvbi5jcmVhdGVUZXh0dXJlQXN5bmMoZ2x0ZlJ1bnRpbWUsIGlkLCBidWZmZXIsIG9uU3VjY2Vzcywgb25FcnJvcik7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgIEdMVEZMb2FkZXJCYXNlLkNyZWF0ZVRleHR1cmVBc3luYyhnbHRmUnVudGltZSwgaWQsIGJ1ZmZlciwgb25TdWNjZXNzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX0FwcGx5RXh0ZW5zaW9ucyhmdW5jOiAobG9hZGVyRXh0ZW5zaW9uOiBHTFRGTG9hZGVyRXh0ZW5zaW9uKSA9PiBib29sZWFuLCBkZWZhdWx0RnVuYzogKCkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgICAgIGZvciAoY29uc3QgZXh0ZW5zaW9uTmFtZSBpbiBHTFRGTG9hZGVyLkV4dGVuc2lvbnMpIHtcclxuICAgICAgICAgICAgY29uc3QgbG9hZGVyRXh0ZW5zaW9uID0gR0xURkxvYWRlci5FeHRlbnNpb25zW2V4dGVuc2lvbk5hbWVdO1xyXG4gICAgICAgICAgICBpZiAoZnVuYyhsb2FkZXJFeHRlbnNpb24pKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRlZmF1bHRGdW5jKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkdMVEZGaWxlTG9hZGVyLl9DcmVhdGVHTFRGMUxvYWRlciA9ICgpID0+IG5ldyBHTFRGTG9hZGVyKCk7XHJcbiIsImltcG9ydCB0eXBlIHsgQXNzZXRDb250YWluZXIgfSBmcm9tIFwiY29yZS9hc3NldENvbnRhaW5lclwiO1xyXG5pbXBvcnQgdHlwZSB7IEJvbmUgfSBmcm9tIFwiY29yZS9Cb25lcy9ib25lXCI7XHJcbmltcG9ydCB0eXBlIHsgU2tlbGV0b24gfSBmcm9tIFwiY29yZS9Cb25lcy9za2VsZXRvblwiO1xyXG5pbXBvcnQgdHlwZSB7IFRleHR1cmUgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvVGV4dHVyZXMvdGV4dHVyZVwiO1xyXG5pbXBvcnQgdHlwZSB7IE5vZGUgfSBmcm9tIFwiY29yZS9ub2RlXCI7XHJcbmltcG9ydCB0eXBlIHsgU2NlbmUgfSBmcm9tIFwiY29yZS9zY2VuZVwiO1xyXG5pbXBvcnQgdHlwZSB7IE51bGxhYmxlIH0gZnJvbSBcImNvcmUvdHlwZXNcIjtcclxuXHJcbi8qKlxyXG4gKiBFbnVtc1xyXG4gKiBAaW50ZXJuYWxcclxuICovXHJcbmV4cG9ydCBlbnVtIEVDb21wb25lbnRUeXBlIHtcclxuICAgIEJZVEUgPSA1MTIwLFxyXG4gICAgVU5TSUdORURfQllURSA9IDUxMjEsXHJcbiAgICBTSE9SVCA9IDUxMjIsXHJcbiAgICBVTlNJR05FRF9TSE9SVCA9IDUxMjMsXHJcbiAgICBGTE9BVCA9IDUxMjYsXHJcbn1cclxuXHJcbi8qKiBAaW50ZXJuYWwgKi9cclxuZXhwb3J0IGVudW0gRVNoYWRlclR5cGUge1xyXG4gICAgRlJBR01FTlQgPSAzNTYzMixcclxuICAgIFZFUlRFWCA9IDM1NjMzLFxyXG59XHJcblxyXG4vKiogQGludGVybmFsICovXHJcbmV4cG9ydCBlbnVtIEVQYXJhbWV0ZXJUeXBlIHtcclxuICAgIEJZVEUgPSA1MTIwLFxyXG4gICAgVU5TSUdORURfQllURSA9IDUxMjEsXHJcbiAgICBTSE9SVCA9IDUxMjIsXHJcbiAgICBVTlNJR05FRF9TSE9SVCA9IDUxMjMsXHJcbiAgICBJTlQgPSA1MTI0LFxyXG4gICAgVU5TSUdORURfSU5UID0gNTEyNSxcclxuICAgIEZMT0FUID0gNTEyNixcclxuICAgIEZMT0FUX1ZFQzIgPSAzNTY2NCxcclxuICAgIEZMT0FUX1ZFQzMgPSAzNTY2NSxcclxuICAgIEZMT0FUX1ZFQzQgPSAzNTY2NixcclxuICAgIElOVF9WRUMyID0gMzU2NjcsXHJcbiAgICBJTlRfVkVDMyA9IDM1NjY4LFxyXG4gICAgSU5UX1ZFQzQgPSAzNTY2OSxcclxuICAgIEJPT0wgPSAzNTY3MCxcclxuICAgIEJPT0xfVkVDMiA9IDM1NjcxLFxyXG4gICAgQk9PTF9WRUMzID0gMzU2NzIsXHJcbiAgICBCT09MX1ZFQzQgPSAzNTY3MyxcclxuICAgIEZMT0FUX01BVDIgPSAzNTY3NCxcclxuICAgIEZMT0FUX01BVDMgPSAzNTY3NSxcclxuICAgIEZMT0FUX01BVDQgPSAzNTY3NixcclxuICAgIFNBTVBMRVJfMkQgPSAzNTY3OCxcclxufVxyXG5cclxuLyoqIEBpbnRlcm5hbCAqL1xyXG5leHBvcnQgZW51bSBFVGV4dHVyZVdyYXBNb2RlIHtcclxuICAgIENMQU1QX1RPX0VER0UgPSAzMzA3MSxcclxuICAgIE1JUlJPUkVEX1JFUEVBVCA9IDMzNjQ4LFxyXG4gICAgUkVQRUFUID0gMTA0OTcsXHJcbn1cclxuXHJcbi8qKiBAaW50ZXJuYWwgKi9cclxuZXhwb3J0IGVudW0gRVRleHR1cmVGaWx0ZXJUeXBlIHtcclxuICAgIE5FQVJFU1QgPSA5NzI4LFxyXG4gICAgTElORUFSID0gOTcyOCxcclxuICAgIE5FQVJFU1RfTUlQTUFQX05FQVJFU1QgPSA5OTg0LFxyXG4gICAgTElORUFSX01JUE1BUF9ORUFSRVNUID0gOTk4NSxcclxuICAgIE5FQVJFU1RfTUlQTUFQX0xJTkVBUiA9IDk5ODYsXHJcbiAgICBMSU5FQVJfTUlQTUFQX0xJTkVBUiA9IDk5ODcsXHJcbn1cclxuXHJcbi8qKiBAaW50ZXJuYWwgKi9cclxuZXhwb3J0IGVudW0gRVRleHR1cmVGb3JtYXQge1xyXG4gICAgQUxQSEEgPSA2NDA2LFxyXG4gICAgUkdCID0gNjQwNyxcclxuICAgIFJHQkEgPSA2NDA4LFxyXG4gICAgTFVNSU5BTkNFID0gNjQwOSxcclxuICAgIExVTUlOQU5DRV9BTFBIQSA9IDY0MTAsXHJcbn1cclxuXHJcbi8qKiBAaW50ZXJuYWwgKi9cclxuZXhwb3J0IGVudW0gRUN1bGxpbmdUeXBlIHtcclxuICAgIEZST05UID0gMTAyOCxcclxuICAgIEJBQ0sgPSAxMDI5LFxyXG4gICAgRlJPTlRfQU5EX0JBQ0sgPSAxMDMyLFxyXG59XHJcblxyXG4vKiogQGludGVybmFsICovXHJcbmV4cG9ydCBlbnVtIEVCbGVuZGluZ0Z1bmN0aW9uIHtcclxuICAgIFpFUk8gPSAwLFxyXG4gICAgT05FID0gMSxcclxuICAgIFNSQ19DT0xPUiA9IDc2OCxcclxuICAgIE9ORV9NSU5VU19TUkNfQ09MT1IgPSA3NjksXHJcbiAgICBEU1RfQ09MT1IgPSA3NzQsXHJcbiAgICBPTkVfTUlOVVNfRFNUX0NPTE9SID0gNzc1LFxyXG4gICAgU1JDX0FMUEhBID0gNzcwLFxyXG4gICAgT05FX01JTlVTX1NSQ19BTFBIQSA9IDc3MSxcclxuICAgIERTVF9BTFBIQSA9IDc3MixcclxuICAgIE9ORV9NSU5VU19EU1RfQUxQSEEgPSA3NzMsXHJcbiAgICBDT05TVEFOVF9DT0xPUiA9IDMyNzY5LFxyXG4gICAgT05FX01JTlVTX0NPTlNUQU5UX0NPTE9SID0gMzI3NzAsXHJcbiAgICBDT05TVEFOVF9BTFBIQSA9IDMyNzcxLFxyXG4gICAgT05FX01JTlVTX0NPTlNUQU5UX0FMUEhBID0gMzI3NzIsXHJcbiAgICBTUkNfQUxQSEFfU0FUVVJBVEUgPSA3NzYsXHJcbn1cclxuXHJcbi8qKiBAaW50ZXJuYWwgKi9cclxuZXhwb3J0IGludGVyZmFjZSBJR0xURlByb3BlcnR5IHtcclxuICAgIGV4dGVuc2lvbnM/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9O1xyXG4gICAgZXh0cmFzPzogT2JqZWN0O1xyXG59XHJcblxyXG4vKiogQGludGVybmFsICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUdMVEZDaGlsZFJvb3RQcm9wZXJ0eSBleHRlbmRzIElHTFRGUHJvcGVydHkge1xyXG4gICAgbmFtZT86IHN0cmluZztcclxufVxyXG5cclxuLyoqIEBpbnRlcm5hbCAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElHTFRGQWNjZXNzb3IgZXh0ZW5kcyBJR0xURkNoaWxkUm9vdFByb3BlcnR5IHtcclxuICAgIGJ1ZmZlclZpZXc6IHN0cmluZztcclxuICAgIGJ5dGVPZmZzZXQ6IG51bWJlcjtcclxuICAgIGJ5dGVTdHJpZGU6IG51bWJlcjtcclxuICAgIGNvdW50OiBudW1iZXI7XHJcbiAgICB0eXBlOiBzdHJpbmc7XHJcbiAgICBjb21wb25lbnRUeXBlOiBFQ29tcG9uZW50VHlwZTtcclxuXHJcbiAgICBtYXg/OiBudW1iZXJbXTtcclxuICAgIG1pbj86IG51bWJlcltdO1xyXG4gICAgbmFtZT86IHN0cmluZztcclxufVxyXG5cclxuLyoqIEBpbnRlcm5hbCAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElHTFRGQnVmZmVyVmlldyBleHRlbmRzIElHTFRGQ2hpbGRSb290UHJvcGVydHkge1xyXG4gICAgYnVmZmVyOiBzdHJpbmc7XHJcbiAgICBieXRlT2Zmc2V0OiBudW1iZXI7XHJcbiAgICBieXRlTGVuZ3RoOiBudW1iZXI7XHJcbiAgICBieXRlU3RyaWRlOiBudW1iZXI7XHJcblxyXG4gICAgdGFyZ2V0PzogbnVtYmVyO1xyXG59XHJcblxyXG4vKiogQGludGVybmFsICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUdMVEZCdWZmZXIgZXh0ZW5kcyBJR0xURkNoaWxkUm9vdFByb3BlcnR5IHtcclxuICAgIHVyaTogc3RyaW5nO1xyXG5cclxuICAgIGJ5dGVMZW5ndGg/OiBudW1iZXI7XHJcbiAgICB0eXBlPzogc3RyaW5nO1xyXG59XHJcblxyXG4vKiogQGludGVybmFsICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUdMVEZTaGFkZXIgZXh0ZW5kcyBJR0xURkNoaWxkUm9vdFByb3BlcnR5IHtcclxuICAgIHVyaTogc3RyaW5nO1xyXG4gICAgdHlwZTogRVNoYWRlclR5cGU7XHJcbn1cclxuXHJcbi8qKiBAaW50ZXJuYWwgKi9cclxuZXhwb3J0IGludGVyZmFjZSBJR0xURlByb2dyYW0gZXh0ZW5kcyBJR0xURkNoaWxkUm9vdFByb3BlcnR5IHtcclxuICAgIGF0dHJpYnV0ZXM6IHN0cmluZ1tdO1xyXG4gICAgZnJhZ21lbnRTaGFkZXI6IHN0cmluZztcclxuICAgIHZlcnRleFNoYWRlcjogc3RyaW5nO1xyXG59XHJcblxyXG4vKiogQGludGVybmFsICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUdMVEZUZWNobmlxdWVQYXJhbWV0ZXIge1xyXG4gICAgdHlwZTogbnVtYmVyO1xyXG5cclxuICAgIGNvdW50PzogbnVtYmVyO1xyXG4gICAgc2VtYW50aWM/OiBzdHJpbmc7XHJcbiAgICBub2RlPzogc3RyaW5nO1xyXG4gICAgdmFsdWU/OiBudW1iZXIgfCBib29sZWFuIHwgc3RyaW5nIHwgQXJyYXk8YW55PjtcclxuICAgIHNvdXJjZT86IHN0cmluZztcclxuXHJcbiAgICBiYWJ5bG9uVmFsdWU/OiBhbnk7XHJcbn1cclxuXHJcbi8qKiBAaW50ZXJuYWwgKi9cclxuZXhwb3J0IGludGVyZmFjZSBJR0xURlRlY2huaXF1ZUNvbW1vblByb2ZpbGUge1xyXG4gICAgbGlnaHRpbmdNb2RlbDogc3RyaW5nO1xyXG4gICAgdGV4Y29vcmRCaW5kaW5nczogT2JqZWN0O1xyXG5cclxuICAgIHBhcmFtZXRlcnM/OiBBcnJheTxhbnk+O1xyXG59XHJcblxyXG4vKiogQGludGVybmFsICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUdMVEZUZWNobmlxdWVTdGF0ZXNGdW5jdGlvbnMge1xyXG4gICAgYmxlbmRDb2xvcj86IG51bWJlcltdO1xyXG4gICAgYmxlbmRFcXVhdGlvblNlcGFyYXRlPzogbnVtYmVyW107XHJcbiAgICBibGVuZEZ1bmNTZXBhcmF0ZT86IG51bWJlcltdO1xyXG4gICAgY29sb3JNYXNrOiBib29sZWFuW107XHJcbiAgICBjdWxsRmFjZTogbnVtYmVyW107XHJcbn1cclxuXHJcbi8qKiBAaW50ZXJuYWwgKi9cclxuZXhwb3J0IGludGVyZmFjZSBJR0xURlRlY2huaXF1ZVN0YXRlcyB7XHJcbiAgICBlbmFibGU6IG51bWJlcltdO1xyXG4gICAgZnVuY3Rpb25zOiBJR0xURlRlY2huaXF1ZVN0YXRlc0Z1bmN0aW9ucztcclxufVxyXG5cclxuLyoqIEBpbnRlcm5hbCAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElHTFRGVGVjaG5pcXVlIGV4dGVuZHMgSUdMVEZDaGlsZFJvb3RQcm9wZXJ0eSB7XHJcbiAgICBwYXJhbWV0ZXJzOiB7IFtrZXk6IHN0cmluZ106IElHTFRGVGVjaG5pcXVlUGFyYW1ldGVyIH07XHJcbiAgICBwcm9ncmFtOiBzdHJpbmc7XHJcblxyXG4gICAgYXR0cmlidXRlczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcclxuICAgIHVuaWZvcm1zOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xyXG4gICAgc3RhdGVzOiBJR0xURlRlY2huaXF1ZVN0YXRlcztcclxufVxyXG5cclxuLyoqIEBpbnRlcm5hbCAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElHTFRGTWF0ZXJpYWwgZXh0ZW5kcyBJR0xURkNoaWxkUm9vdFByb3BlcnR5IHtcclxuICAgIHRlY2huaXF1ZT86IHN0cmluZztcclxuICAgIHZhbHVlczogc3RyaW5nW107XHJcbn1cclxuXHJcbi8qKiBAaW50ZXJuYWwgKi9cclxuZXhwb3J0IGludGVyZmFjZSBJR0xURk1lc2hQcmltaXRpdmUgZXh0ZW5kcyBJR0xURlByb3BlcnR5IHtcclxuICAgIGF0dHJpYnV0ZXM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XHJcbiAgICBpbmRpY2VzOiBzdHJpbmc7XHJcbiAgICBtYXRlcmlhbDogc3RyaW5nO1xyXG5cclxuICAgIG1vZGU/OiBudW1iZXI7XHJcbn1cclxuXHJcbi8qKiBAaW50ZXJuYWwgKi9cclxuZXhwb3J0IGludGVyZmFjZSBJR0xURk1lc2ggZXh0ZW5kcyBJR0xURkNoaWxkUm9vdFByb3BlcnR5IHtcclxuICAgIHByaW1pdGl2ZXM6IElHTFRGTWVzaFByaW1pdGl2ZVtdO1xyXG59XHJcblxyXG4vKiogQGludGVybmFsICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUdMVEZJbWFnZSBleHRlbmRzIElHTFRGQ2hpbGRSb290UHJvcGVydHkge1xyXG4gICAgdXJpOiBzdHJpbmc7XHJcbn1cclxuXHJcbi8qKiBAaW50ZXJuYWwgKi9cclxuZXhwb3J0IGludGVyZmFjZSBJR0xURlNhbXBsZXIgZXh0ZW5kcyBJR0xURkNoaWxkUm9vdFByb3BlcnR5IHtcclxuICAgIG1hZ0ZpbHRlcj86IG51bWJlcjtcclxuICAgIG1pbkZpbHRlcj86IG51bWJlcjtcclxuICAgIHdyYXBTPzogbnVtYmVyO1xyXG4gICAgd3JhcFQ/OiBudW1iZXI7XHJcbn1cclxuXHJcbi8qKiBAaW50ZXJuYWwgKi9cclxuZXhwb3J0IGludGVyZmFjZSBJR0xURlRleHR1cmUgZXh0ZW5kcyBJR0xURkNoaWxkUm9vdFByb3BlcnR5IHtcclxuICAgIHNhbXBsZXI6IHN0cmluZztcclxuICAgIHNvdXJjZTogc3RyaW5nO1xyXG5cclxuICAgIGZvcm1hdD86IEVUZXh0dXJlRm9ybWF0O1xyXG4gICAgaW50ZXJuYWxGb3JtYXQ/OiBFVGV4dHVyZUZvcm1hdDtcclxuICAgIHRhcmdldD86IG51bWJlcjtcclxuICAgIHR5cGU/OiBudW1iZXI7XHJcblxyXG4gICAgLy8gQmFieWxvbi5qcyB2YWx1ZXMgKG9wdGltaXplKVxyXG4gICAgYmFieWxvblRleHR1cmU/OiBUZXh0dXJlO1xyXG59XHJcblxyXG4vKiogQGludGVybmFsICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUdMVEZBbWJpZW5MaWdodCB7XHJcbiAgICBjb2xvcj86IG51bWJlcltdO1xyXG59XHJcblxyXG4vKiogQGludGVybmFsICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUdMVEZEaXJlY3Rpb25hbExpZ2h0IHtcclxuICAgIGNvbG9yPzogbnVtYmVyW107XHJcbn1cclxuXHJcbi8qKiBAaW50ZXJuYWwgKi9cclxuZXhwb3J0IGludGVyZmFjZSBJR0xURlBvaW50TGlnaHQge1xyXG4gICAgY29sb3I/OiBudW1iZXJbXTtcclxuICAgIGNvbnN0YW50QXR0ZW51YXRpb24/OiBudW1iZXI7XHJcbiAgICBsaW5lYXJBdHRlbnVhdGlvbj86IG51bWJlcjtcclxuICAgIHF1YWRyYXRpY0F0dGVudWF0aW9uPzogbnVtYmVyO1xyXG59XHJcblxyXG4vKiogQGludGVybmFsICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUdMVEZTcG90TGlnaHQge1xyXG4gICAgY29sb3I/OiBudW1iZXJbXTtcclxuICAgIGNvbnN0YW50QXR0ZW51YXRpb24/OiBudW1iZXI7XHJcbiAgICBmYWxsT2ZBbmdsZT86IG51bWJlcjtcclxuICAgIGZhbGxPZmZFeHBvbmVudD86IG51bWJlcjtcclxuICAgIGxpbmVhckF0dGVudWF0aW9uPzogbnVtYmVyO1xyXG4gICAgcXVhZHJhdGljQXR0ZW51YXRpb24/OiBudW1iZXI7XHJcbn1cclxuXHJcbi8qKiBAaW50ZXJuYWwgKi9cclxuZXhwb3J0IGludGVyZmFjZSBJR0xURkxpZ2h0IGV4dGVuZHMgSUdMVEZDaGlsZFJvb3RQcm9wZXJ0eSB7XHJcbiAgICB0eXBlOiBzdHJpbmc7XHJcbn1cclxuXHJcbi8qKiBAaW50ZXJuYWwgKi9cclxuZXhwb3J0IGludGVyZmFjZSBJR0xURkNhbWVyYU9ydGhvZ3JhcGhpYyB7XHJcbiAgICB4bWFnOiBudW1iZXI7XHJcbiAgICB5bWFnOiBudW1iZXI7XHJcbiAgICB6ZmFyOiBudW1iZXI7XHJcbiAgICB6bmVhcjogbnVtYmVyO1xyXG59XHJcblxyXG4vKiogQGludGVybmFsICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUdMVEZDYW1lcmFQZXJzcGVjdGl2ZSB7XHJcbiAgICBhc3BlY3RSYXRpbzogbnVtYmVyO1xyXG4gICAgeWZvdjogbnVtYmVyO1xyXG4gICAgemZhcjogbnVtYmVyO1xyXG4gICAgem5lYXI6IG51bWJlcjtcclxufVxyXG5cclxuLyoqIEBpbnRlcm5hbCAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElHTFRGQ2FtZXJhIGV4dGVuZHMgSUdMVEZDaGlsZFJvb3RQcm9wZXJ0eSB7XHJcbiAgICB0eXBlOiBzdHJpbmc7XHJcbn1cclxuXHJcbi8qKiBAaW50ZXJuYWwgKi9cclxuZXhwb3J0IGludGVyZmFjZSBJR0xURkFuaW1hdGlvbkNoYW5uZWxUYXJnZXQge1xyXG4gICAgaWQ6IHN0cmluZztcclxuICAgIHBhdGg6IHN0cmluZztcclxufVxyXG5cclxuLyoqIEBpbnRlcm5hbCAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElHTFRGQW5pbWF0aW9uQ2hhbm5lbCB7XHJcbiAgICBzYW1wbGVyOiBzdHJpbmc7XHJcbiAgICB0YXJnZXQ6IElHTFRGQW5pbWF0aW9uQ2hhbm5lbFRhcmdldDtcclxufVxyXG5cclxuLyoqIEBpbnRlcm5hbCAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElHTFRGQW5pbWF0aW9uU2FtcGxlciB7XHJcbiAgICBpbnB1dDogc3RyaW5nO1xyXG4gICAgb3V0cHV0OiBzdHJpbmc7XHJcblxyXG4gICAgaW50ZXJwb2xhdGlvbj86IHN0cmluZztcclxufVxyXG5cclxuLyoqIEBpbnRlcm5hbCAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElHTFRGQW5pbWF0aW9uIGV4dGVuZHMgSUdMVEZDaGlsZFJvb3RQcm9wZXJ0eSB7XHJcbiAgICBjaGFubmVscz86IElHTFRGQW5pbWF0aW9uQ2hhbm5lbFtdO1xyXG4gICAgcGFyYW1ldGVycz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XHJcbiAgICBzYW1wbGVycz86IHsgW2tleTogc3RyaW5nXTogSUdMVEZBbmltYXRpb25TYW1wbGVyIH07XHJcbn1cclxuXHJcbi8qKiBAaW50ZXJuYWwgKi9cclxuZXhwb3J0IGludGVyZmFjZSBJR0xURk5vZGVJbnN0YW5jZVNraW4ge1xyXG4gICAgc2tlbGV0b25zOiBzdHJpbmdbXTtcclxuICAgIHNraW46IHN0cmluZztcclxuICAgIG1lc2hlczogc3RyaW5nW107XHJcbn1cclxuXHJcbi8qKiBAaW50ZXJuYWwgKi9cclxuZXhwb3J0IGludGVyZmFjZSBJR0xURlNraW5zIGV4dGVuZHMgSUdMVEZDaGlsZFJvb3RQcm9wZXJ0eSB7XHJcbiAgICBiaW5kU2hhcGVNYXRyaXg6IG51bWJlcltdO1xyXG4gICAgaW52ZXJzZUJpbmRNYXRyaWNlczogc3RyaW5nO1xyXG4gICAgam9pbnROYW1lczogc3RyaW5nW107XHJcblxyXG4gICAgYmFieWxvblNrZWxldG9uPzogU2tlbGV0b247XHJcbn1cclxuXHJcbi8qKiBAaW50ZXJuYWwgKi9cclxuZXhwb3J0IGludGVyZmFjZSBJR0xURk5vZGUgZXh0ZW5kcyBJR0xURkNoaWxkUm9vdFByb3BlcnR5IHtcclxuICAgIGNhbWVyYT86IHN0cmluZztcclxuICAgIGNoaWxkcmVuOiBzdHJpbmdbXTtcclxuICAgIHNraW4/OiBzdHJpbmc7XHJcbiAgICBqb2ludE5hbWU/OiBzdHJpbmc7XHJcbiAgICBsaWdodD86IHN0cmluZztcclxuICAgIG1hdHJpeDogbnVtYmVyW107XHJcbiAgICBtZXNoPzogc3RyaW5nO1xyXG4gICAgbWVzaGVzPzogc3RyaW5nW107XHJcbiAgICByb3RhdGlvbj86IG51bWJlcltdO1xyXG4gICAgc2NhbGU/OiBudW1iZXJbXTtcclxuICAgIHRyYW5zbGF0aW9uPzogbnVtYmVyW107XHJcblxyXG4gICAgLy8gQmFieWxvbi5qcyB2YWx1ZXMgKG9wdGltaXplKVxyXG4gICAgYmFieWxvbk5vZGU/OiBOb2RlO1xyXG59XHJcblxyXG4vKiogQGludGVybmFsICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUdMVEZTY2VuZSBleHRlbmRzIElHTFRGQ2hpbGRSb290UHJvcGVydHkge1xyXG4gICAgbm9kZXM6IHN0cmluZ1tdO1xyXG59XHJcblxyXG4vKiogQGludGVybmFsICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUdMVEZSdW50aW1lIHtcclxuICAgIGV4dGVuc2lvbnM6IHsgW2tleTogc3RyaW5nXTogYW55IH07XHJcbiAgICBhY2Nlc3NvcnM6IHsgW2tleTogc3RyaW5nXTogSUdMVEZBY2Nlc3NvciB9O1xyXG4gICAgYnVmZmVyczogeyBba2V5OiBzdHJpbmddOiBJR0xURkJ1ZmZlciB9O1xyXG4gICAgYnVmZmVyVmlld3M6IHsgW2tleTogc3RyaW5nXTogSUdMVEZCdWZmZXJWaWV3IH07XHJcbiAgICBtZXNoZXM6IHsgW2tleTogc3RyaW5nXTogSUdMVEZNZXNoIH07XHJcbiAgICBsaWdodHM6IHsgW2tleTogc3RyaW5nXTogSUdMVEZMaWdodCB9O1xyXG4gICAgY2FtZXJhczogeyBba2V5OiBzdHJpbmddOiBJR0xURkNhbWVyYSB9O1xyXG4gICAgbm9kZXM6IHsgW2tleTogc3RyaW5nXTogSUdMVEZOb2RlIH07XHJcbiAgICBpbWFnZXM6IHsgW2tleTogc3RyaW5nXTogSUdMVEZJbWFnZSB9O1xyXG4gICAgdGV4dHVyZXM6IHsgW2tleTogc3RyaW5nXTogSUdMVEZUZXh0dXJlIH07XHJcbiAgICBzaGFkZXJzOiB7IFtrZXk6IHN0cmluZ106IElHTFRGU2hhZGVyIH07XHJcbiAgICBwcm9ncmFtczogeyBba2V5OiBzdHJpbmddOiBJR0xURlByb2dyYW0gfTtcclxuICAgIHNhbXBsZXJzOiB7IFtrZXk6IHN0cmluZ106IElHTFRGU2FtcGxlciB9O1xyXG4gICAgdGVjaG5pcXVlczogeyBba2V5OiBzdHJpbmddOiBJR0xURlRlY2huaXF1ZSB9O1xyXG4gICAgbWF0ZXJpYWxzOiB7IFtrZXk6IHN0cmluZ106IElHTFRGTWF0ZXJpYWwgfTtcclxuICAgIGFuaW1hdGlvbnM6IHsgW2tleTogc3RyaW5nXTogSUdMVEZBbmltYXRpb24gfTtcclxuICAgIHNraW5zOiB7IFtrZXk6IHN0cmluZ106IElHTFRGU2tpbnMgfTtcclxuXHJcbiAgICBjdXJyZW50U2NlbmU/OiBPYmplY3Q7XHJcbiAgICBzY2VuZXM6IHsgW2tleTogc3RyaW5nXTogSUdMVEZTY2VuZSB9OyAvLyB2MS4xXHJcblxyXG4gICAgZXh0ZW5zaW9uc1VzZWQ6IHN0cmluZ1tdO1xyXG4gICAgZXh0ZW5zaW9uc1JlcXVpcmVkPzogc3RyaW5nW107IC8vIHYxLjFcclxuXHJcbiAgICBidWZmZXJzQ291bnQ6IG51bWJlcjtcclxuICAgIHNoYWRlcnNjb3VudDogbnVtYmVyO1xyXG5cclxuICAgIHNjZW5lOiBTY2VuZTtcclxuICAgIHJvb3RVcmw6IHN0cmluZztcclxuXHJcbiAgICBsb2FkZWRCdWZmZXJDb3VudDogbnVtYmVyO1xyXG4gICAgbG9hZGVkQnVmZmVyVmlld3M6IHsgW25hbWU6IHN0cmluZ106IEFycmF5QnVmZmVyVmlldyB9O1xyXG5cclxuICAgIGxvYWRlZFNoYWRlckNvdW50OiBudW1iZXI7XHJcblxyXG4gICAgaW1wb3J0T25seU1lc2hlczogYm9vbGVhbjtcclxuICAgIGltcG9ydE1lc2hlc05hbWVzPzogc3RyaW5nW107XHJcblxyXG4gICAgZHVtbXlOb2RlczogTm9kZVtdO1xyXG5cclxuICAgIGFzc2V0Q29udGFpbmVyOiBOdWxsYWJsZTxBc3NldENvbnRhaW5lcj47XHJcbn1cclxuXHJcbi8qKiBAaW50ZXJuYWwgKi9cclxuZXhwb3J0IGludGVyZmFjZSBJTm9kZVRvUm9vdCB7XHJcbiAgICBib25lOiBCb25lO1xyXG4gICAgbm9kZTogSUdMVEZOb2RlO1xyXG4gICAgaWQ6IHN0cmluZztcclxufVxyXG5cclxuLyoqIEBpbnRlcm5hbCAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElKb2ludE5vZGUge1xyXG4gICAgbm9kZTogSUdMVEZOb2RlO1xyXG4gICAgaWQ6IHN0cmluZztcclxufVxyXG4iLCJpbXBvcnQgdHlwZSB7IElHTFRGVGVjaG5pcXVlUGFyYW1ldGVyLCBJR0xURkFjY2Vzc29yLCBJR0xURlJ1bnRpbWUsIElHTFRGQnVmZmVyVmlldyB9IGZyb20gXCIuL2dsVEZMb2FkZXJJbnRlcmZhY2VzXCI7XHJcbmltcG9ydCB7IEVQYXJhbWV0ZXJUeXBlLCBFVGV4dHVyZVdyYXBNb2RlLCBFVGV4dHVyZUZpbHRlclR5cGUsIEVDb21wb25lbnRUeXBlIH0gZnJvbSBcIi4vZ2xURkxvYWRlckludGVyZmFjZXNcIjtcclxuXHJcbmltcG9ydCB0eXBlIHsgTnVsbGFibGUgfSBmcm9tIFwiY29yZS90eXBlc1wiO1xyXG5pbXBvcnQgeyBWZWN0b3IyLCBWZWN0b3IzLCBWZWN0b3I0LCBNYXRyaXggfSBmcm9tIFwiY29yZS9NYXRocy9tYXRoLnZlY3RvclwiO1xyXG5pbXBvcnQgeyBDb2xvcjQgfSBmcm9tIFwiY29yZS9NYXRocy9tYXRoLmNvbG9yXCI7XHJcbmltcG9ydCB7IEVmZmVjdCB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9lZmZlY3RcIjtcclxuaW1wb3J0IHsgU2hhZGVyTWF0ZXJpYWwgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvc2hhZGVyTWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgVGV4dHVyZSB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9UZXh0dXJlcy90ZXh0dXJlXCI7XHJcbmltcG9ydCB0eXBlIHsgTm9kZSB9IGZyb20gXCJjb3JlL25vZGVcIjtcclxuaW1wb3J0IHR5cGUgeyBTY2VuZSB9IGZyb20gXCJjb3JlL3NjZW5lXCI7XHJcblxyXG4vKipcclxuICogVXRpbHMgZnVuY3Rpb25zIGZvciBHTFRGXHJcbiAqIEBpbnRlcm5hbFxyXG4gKiBAZGVwcmVjYXRlZFxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEdMVEZVdGlscyB7XHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdGhlIGdpdmVuIFwicGFyYW1ldGVyXCIgbWF0cml4XHJcbiAgICAgKiBAcGFyYW0gc2NlbmUgdGhlIFNjZW5lIG9iamVjdFxyXG4gICAgICogQHBhcmFtIHNvdXJjZSB0aGUgc291cmNlIG5vZGUgd2hlcmUgdG8gcGljayB0aGUgbWF0cml4XHJcbiAgICAgKiBAcGFyYW0gcGFyYW1ldGVyIHRoZSBHTFRGIHRlY2huaXF1ZSBwYXJhbWV0ZXJcclxuICAgICAqIEBwYXJhbSB1bmlmb3JtTmFtZSB0aGUgbmFtZSBvZiB0aGUgc2hhZGVyJ3MgdW5pZm9ybVxyXG4gICAgICogQHBhcmFtIHNoYWRlck1hdGVyaWFsIHRoZSBzaGFkZXIgbWF0ZXJpYWxcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBTZXRNYXRyaXgoc2NlbmU6IFNjZW5lLCBzb3VyY2U6IE5vZGUsIHBhcmFtZXRlcjogSUdMVEZUZWNobmlxdWVQYXJhbWV0ZXIsIHVuaWZvcm1OYW1lOiBzdHJpbmcsIHNoYWRlck1hdGVyaWFsOiBTaGFkZXJNYXRlcmlhbCB8IEVmZmVjdCk6IHZvaWQge1xyXG4gICAgICAgIGxldCBtYXQ6IE51bGxhYmxlPE1hdHJpeD4gPSBudWxsO1xyXG5cclxuICAgICAgICBpZiAocGFyYW1ldGVyLnNlbWFudGljID09PSBcIk1PREVMXCIpIHtcclxuICAgICAgICAgICAgbWF0ID0gc291cmNlLmdldFdvcmxkTWF0cml4KCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChwYXJhbWV0ZXIuc2VtYW50aWMgPT09IFwiUFJPSkVDVElPTlwiKSB7XHJcbiAgICAgICAgICAgIG1hdCA9IHNjZW5lLmdldFByb2plY3Rpb25NYXRyaXgoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHBhcmFtZXRlci5zZW1hbnRpYyA9PT0gXCJWSUVXXCIpIHtcclxuICAgICAgICAgICAgbWF0ID0gc2NlbmUuZ2V0Vmlld01hdHJpeCgpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocGFyYW1ldGVyLnNlbWFudGljID09PSBcIk1PREVMVklFV0lOVkVSU0VUUkFOU1BPU0VcIikge1xyXG4gICAgICAgICAgICBtYXQgPSBNYXRyaXguVHJhbnNwb3NlKHNvdXJjZS5nZXRXb3JsZE1hdHJpeCgpLm11bHRpcGx5KHNjZW5lLmdldFZpZXdNYXRyaXgoKSkuaW52ZXJ0KCkpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocGFyYW1ldGVyLnNlbWFudGljID09PSBcIk1PREVMVklFV1wiKSB7XHJcbiAgICAgICAgICAgIG1hdCA9IHNvdXJjZS5nZXRXb3JsZE1hdHJpeCgpLm11bHRpcGx5KHNjZW5lLmdldFZpZXdNYXRyaXgoKSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChwYXJhbWV0ZXIuc2VtYW50aWMgPT09IFwiTU9ERUxWSUVXUFJPSkVDVElPTlwiKSB7XHJcbiAgICAgICAgICAgIG1hdCA9IHNvdXJjZS5nZXRXb3JsZE1hdHJpeCgpLm11bHRpcGx5KHNjZW5lLmdldFRyYW5zZm9ybU1hdHJpeCgpKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHBhcmFtZXRlci5zZW1hbnRpYyA9PT0gXCJNT0RFTElOVkVSU0VcIikge1xyXG4gICAgICAgICAgICBtYXQgPSBzb3VyY2UuZ2V0V29ybGRNYXRyaXgoKS5pbnZlcnQoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHBhcmFtZXRlci5zZW1hbnRpYyA9PT0gXCJWSUVXSU5WRVJTRVwiKSB7XHJcbiAgICAgICAgICAgIG1hdCA9IHNjZW5lLmdldFZpZXdNYXRyaXgoKS5pbnZlcnQoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHBhcmFtZXRlci5zZW1hbnRpYyA9PT0gXCJQUk9KRUNUSU9OSU5WRVJTRVwiKSB7XHJcbiAgICAgICAgICAgIG1hdCA9IHNjZW5lLmdldFByb2plY3Rpb25NYXRyaXgoKS5pbnZlcnQoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHBhcmFtZXRlci5zZW1hbnRpYyA9PT0gXCJNT0RFTFZJRVdJTlZFUlNFXCIpIHtcclxuICAgICAgICAgICAgbWF0ID0gc291cmNlLmdldFdvcmxkTWF0cml4KCkubXVsdGlwbHkoc2NlbmUuZ2V0Vmlld01hdHJpeCgpKS5pbnZlcnQoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHBhcmFtZXRlci5zZW1hbnRpYyA9PT0gXCJNT0RFTFZJRVdQUk9KRUNUSU9OSU5WRVJTRVwiKSB7XHJcbiAgICAgICAgICAgIG1hdCA9IHNvdXJjZS5nZXRXb3JsZE1hdHJpeCgpLm11bHRpcGx5KHNjZW5lLmdldFRyYW5zZm9ybU1hdHJpeCgpKS5pbnZlcnQoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHBhcmFtZXRlci5zZW1hbnRpYyA9PT0gXCJNT0RFTElOVkVSU0VUUkFOU1BPU0VcIikge1xyXG4gICAgICAgICAgICBtYXQgPSBNYXRyaXguVHJhbnNwb3NlKHNvdXJjZS5nZXRXb3JsZE1hdHJpeCgpLmludmVydCgpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChtYXQpIHtcclxuICAgICAgICAgICAgc3dpdGNoIChwYXJhbWV0ZXIudHlwZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBFUGFyYW1ldGVyVHlwZS5GTE9BVF9NQVQyOlxyXG4gICAgICAgICAgICAgICAgICAgIHNoYWRlck1hdGVyaWFsLnNldE1hdHJpeDJ4Mih1bmlmb3JtTmFtZSwgTWF0cml4LkdldEFzTWF0cml4MngyKG1hdCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBFUGFyYW1ldGVyVHlwZS5GTE9BVF9NQVQzOlxyXG4gICAgICAgICAgICAgICAgICAgIHNoYWRlck1hdGVyaWFsLnNldE1hdHJpeDN4Myh1bmlmb3JtTmFtZSwgTWF0cml4LkdldEFzTWF0cml4M3gzKG1hdCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBFUGFyYW1ldGVyVHlwZS5GTE9BVF9NQVQ0OlxyXG4gICAgICAgICAgICAgICAgICAgIHNoYWRlck1hdGVyaWFsLnNldE1hdHJpeCh1bmlmb3JtTmFtZSwgbWF0KTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHRoZSBnaXZlbiBcInBhcmFtZXRlclwiIG1hdHJpeFxyXG4gICAgICogQHBhcmFtIHNoYWRlck1hdGVyaWFsIHRoZSBzaGFkZXIgbWF0ZXJpYWxcclxuICAgICAqIEBwYXJhbSB1bmlmb3JtIHRoZSBuYW1lIG9mIHRoZSBzaGFkZXIncyB1bmlmb3JtXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgdGhlIHZhbHVlIG9mIHRoZSB1bmlmb3JtXHJcbiAgICAgKiBAcGFyYW0gdHlwZSB0aGUgdW5pZm9ybSdzIHR5cGUgKEVQYXJhbWV0ZXJUeXBlIEZMT0FULCBWRUMyLCBWRUMzIG9yIFZFQzQpXHJcbiAgICAgKiBAcmV0dXJucyB0cnVlIGlmIHNldCwgZWxzZSBmYWxzZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIFNldFVuaWZvcm0oc2hhZGVyTWF0ZXJpYWw6IFNoYWRlck1hdGVyaWFsIHwgRWZmZWN0LCB1bmlmb3JtOiBzdHJpbmcsIHZhbHVlOiBhbnksIHR5cGU6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIEVQYXJhbWV0ZXJUeXBlLkZMT0FUOlxyXG4gICAgICAgICAgICAgICAgc2hhZGVyTWF0ZXJpYWwuc2V0RmxvYXQodW5pZm9ybSwgdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIGNhc2UgRVBhcmFtZXRlclR5cGUuRkxPQVRfVkVDMjpcclxuICAgICAgICAgICAgICAgIHNoYWRlck1hdGVyaWFsLnNldFZlY3RvcjIodW5pZm9ybSwgVmVjdG9yMi5Gcm9tQXJyYXkodmFsdWUpKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICBjYXNlIEVQYXJhbWV0ZXJUeXBlLkZMT0FUX1ZFQzM6XHJcbiAgICAgICAgICAgICAgICBzaGFkZXJNYXRlcmlhbC5zZXRWZWN0b3IzKHVuaWZvcm0sIFZlY3RvcjMuRnJvbUFycmF5KHZhbHVlKSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgY2FzZSBFUGFyYW1ldGVyVHlwZS5GTE9BVF9WRUM0OlxyXG4gICAgICAgICAgICAgICAgc2hhZGVyTWF0ZXJpYWwuc2V0VmVjdG9yNCh1bmlmb3JtLCBWZWN0b3I0LkZyb21BcnJheSh2YWx1ZSkpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyB0aGUgd3JhcCBtb2RlIG9mIHRoZSB0ZXh0dXJlXHJcbiAgICAgKiBAcGFyYW0gbW9kZSB0aGUgbW9kZSB2YWx1ZVxyXG4gICAgICogQHJldHVybnMgdGhlIHdyYXAgbW9kZSAoVEVYVFVSRV9XUkFQX0FERFJFU1NNT0RFLCBNSVJST1JfQUREUkVTU01PREUgb3IgQ0xBTVBfQUREUkVTU01PREUpXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgR2V0V3JhcE1vZGUobW9kZTogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICBzd2l0Y2ggKG1vZGUpIHtcclxuICAgICAgICAgICAgY2FzZSBFVGV4dHVyZVdyYXBNb2RlLkNMQU1QX1RPX0VER0U6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gVGV4dHVyZS5DTEFNUF9BRERSRVNTTU9ERTtcclxuICAgICAgICAgICAgY2FzZSBFVGV4dHVyZVdyYXBNb2RlLk1JUlJPUkVEX1JFUEVBVDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBUZXh0dXJlLk1JUlJPUl9BRERSRVNTTU9ERTtcclxuICAgICAgICAgICAgY2FzZSBFVGV4dHVyZVdyYXBNb2RlLlJFUEVBVDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBUZXh0dXJlLldSQVBfQUREUkVTU01PREU7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gVGV4dHVyZS5XUkFQX0FERFJFU1NNT0RFO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgdGhlIGJ5dGUgc3RyaWRlIGdpdmluZyBhbiBhY2Nlc3NvclxyXG4gICAgICogQHBhcmFtIGFjY2Vzc29yIHRoZSBHTFRGIGFjY2Vzc29yIG9iamV0XHJcbiAgICAgKiBAcmV0dXJucyB0aGUgYnl0ZSBzdHJpZGVcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBHZXRCeXRlU3RyaWRlRnJvbVR5cGUoYWNjZXNzb3I6IElHTFRGQWNjZXNzb3IpOiBudW1iZXIge1xyXG4gICAgICAgIC8vIE5lZWRzIHRoaXMgZnVuY3Rpb24gc2luY2UgXCJieXRlU3RyaWRlXCIgaXNuJ3QgcmVxdWllcmVkIGluIGdsVEYgZm9ybWF0XHJcbiAgICAgICAgY29uc3QgdHlwZSA9IGFjY2Vzc29yLnR5cGU7XHJcblxyXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiVkVDMlwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDI7XHJcbiAgICAgICAgICAgIGNhc2UgXCJWRUMzXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMztcclxuICAgICAgICAgICAgY2FzZSBcIlZFQzRcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiA0O1xyXG4gICAgICAgICAgICBjYXNlIFwiTUFUMlwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDQ7XHJcbiAgICAgICAgICAgIGNhc2UgXCJNQVQzXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gOTtcclxuICAgICAgICAgICAgY2FzZSBcIk1BVDRcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiAxNjtcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgdGhlIHRleHR1cmUgZmlsdGVyIG1vZGUgZ2l2aW5nIGEgbW9kZSB2YWx1ZVxyXG4gICAgICogQHBhcmFtIG1vZGUgdGhlIGZpbHRlciBtb2RlIHZhbHVlXHJcbiAgICAgKiBAcmV0dXJucyB0aGUgZmlsdGVyIG1vZGUgKFRPRE8gLSBuZWVkcyB0byBiZSBhIHR5cGU/KVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIEdldFRleHR1cmVGaWx0ZXJNb2RlKG1vZGU6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgc3dpdGNoIChtb2RlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgRVRleHR1cmVGaWx0ZXJUeXBlLkxJTkVBUjpcclxuICAgICAgICAgICAgY2FzZSBFVGV4dHVyZUZpbHRlclR5cGUuTElORUFSX01JUE1BUF9ORUFSRVNUOlxyXG4gICAgICAgICAgICBjYXNlIEVUZXh0dXJlRmlsdGVyVHlwZS5MSU5FQVJfTUlQTUFQX0xJTkVBUjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBUZXh0dXJlLlRSSUxJTkVBUl9TQU1QTElOR01PREU7XHJcbiAgICAgICAgICAgIGNhc2UgRVRleHR1cmVGaWx0ZXJUeXBlLk5FQVJFU1Q6XHJcbiAgICAgICAgICAgIGNhc2UgRVRleHR1cmVGaWx0ZXJUeXBlLk5FQVJFU1RfTUlQTUFQX05FQVJFU1Q6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gVGV4dHVyZS5ORUFSRVNUX1NBTVBMSU5HTU9ERTtcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBUZXh0dXJlLkJJTElORUFSX1NBTVBMSU5HTU9ERTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBHZXRCdWZmZXJGcm9tQnVmZmVyVmlldyhcclxuICAgICAgICBnbHRmUnVudGltZTogSUdMVEZSdW50aW1lLFxyXG4gICAgICAgIGJ1ZmZlclZpZXc6IElHTFRGQnVmZmVyVmlldyxcclxuICAgICAgICBieXRlT2Zmc2V0OiBudW1iZXIsXHJcbiAgICAgICAgYnl0ZUxlbmd0aDogbnVtYmVyLFxyXG4gICAgICAgIGNvbXBvbmVudFR5cGU6IEVDb21wb25lbnRUeXBlXHJcbiAgICApOiBBcnJheUJ1ZmZlclZpZXcge1xyXG4gICAgICAgIGJ5dGVPZmZzZXQgPSBidWZmZXJWaWV3LmJ5dGVPZmZzZXQgKyBieXRlT2Zmc2V0O1xyXG5cclxuICAgICAgICBjb25zdCBsb2FkZWRCdWZmZXJWaWV3ID0gZ2x0ZlJ1bnRpbWUubG9hZGVkQnVmZmVyVmlld3NbYnVmZmVyVmlldy5idWZmZXJdO1xyXG4gICAgICAgIGlmIChieXRlT2Zmc2V0ICsgYnl0ZUxlbmd0aCA+IGxvYWRlZEJ1ZmZlclZpZXcuYnl0ZUxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJCdWZmZXIgYWNjZXNzIGlzIG91dCBvZiByYW5nZVwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGJ1ZmZlciA9IGxvYWRlZEJ1ZmZlclZpZXcuYnVmZmVyO1xyXG4gICAgICAgIGJ5dGVPZmZzZXQgKz0gbG9hZGVkQnVmZmVyVmlldy5ieXRlT2Zmc2V0O1xyXG5cclxuICAgICAgICBzd2l0Y2ggKGNvbXBvbmVudFR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBFQ29tcG9uZW50VHlwZS5CWVRFOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBJbnQ4QXJyYXkoYnVmZmVyLCBieXRlT2Zmc2V0LCBieXRlTGVuZ3RoKTtcclxuICAgICAgICAgICAgY2FzZSBFQ29tcG9uZW50VHlwZS5VTlNJR05FRF9CWVRFOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KGJ1ZmZlciwgYnl0ZU9mZnNldCwgYnl0ZUxlbmd0aCk7XHJcbiAgICAgICAgICAgIGNhc2UgRUNvbXBvbmVudFR5cGUuU0hPUlQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEludDE2QXJyYXkoYnVmZmVyLCBieXRlT2Zmc2V0LCBieXRlTGVuZ3RoKTtcclxuICAgICAgICAgICAgY2FzZSBFQ29tcG9uZW50VHlwZS5VTlNJR05FRF9TSE9SVDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgVWludDE2QXJyYXkoYnVmZmVyLCBieXRlT2Zmc2V0LCBieXRlTGVuZ3RoKTtcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRmxvYXQzMkFycmF5KGJ1ZmZlciwgYnl0ZU9mZnNldCwgYnl0ZUxlbmd0aCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyBhIGJ1ZmZlciBmcm9tIGl0cyBhY2Nlc3NvclxyXG4gICAgICogQHBhcmFtIGdsdGZSdW50aW1lIHRoZSBHTFRGIHJ1bnRpbWVcclxuICAgICAqIEBwYXJhbSBhY2Nlc3NvciB0aGUgR0xURiBhY2Nlc3NvclxyXG4gICAgICogQHJldHVybnMgYW4gYXJyYXkgYnVmZmVyIHZpZXdcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBHZXRCdWZmZXJGcm9tQWNjZXNzb3IoZ2x0ZlJ1bnRpbWU6IElHTFRGUnVudGltZSwgYWNjZXNzb3I6IElHTFRGQWNjZXNzb3IpOiBhbnkge1xyXG4gICAgICAgIGNvbnN0IGJ1ZmZlclZpZXc6IElHTFRGQnVmZmVyVmlldyA9IGdsdGZSdW50aW1lLmJ1ZmZlclZpZXdzW2FjY2Vzc29yLmJ1ZmZlclZpZXddO1xyXG4gICAgICAgIGNvbnN0IGJ5dGVMZW5ndGggPSBhY2Nlc3Nvci5jb3VudCAqIEdMVEZVdGlscy5HZXRCeXRlU3RyaWRlRnJvbVR5cGUoYWNjZXNzb3IpO1xyXG4gICAgICAgIHJldHVybiBHTFRGVXRpbHMuR2V0QnVmZmVyRnJvbUJ1ZmZlclZpZXcoZ2x0ZlJ1bnRpbWUsIGJ1ZmZlclZpZXcsIGFjY2Vzc29yLmJ5dGVPZmZzZXQsIGJ5dGVMZW5ndGgsIGFjY2Vzc29yLmNvbXBvbmVudFR5cGUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVjb2RlcyBhIGJ1ZmZlciB2aWV3IGludG8gYSBzdHJpbmdcclxuICAgICAqIEBwYXJhbSB2aWV3IHRoZSBidWZmZXIgdmlld1xyXG4gICAgICogQHJldHVybnMgYSBzdHJpbmdcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBEZWNvZGVCdWZmZXJUb1RleHQodmlldzogQXJyYXlCdWZmZXJWaWV3KTogc3RyaW5nIHtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gXCJcIjtcclxuICAgICAgICBjb25zdCBsZW5ndGggPSB2aWV3LmJ5dGVMZW5ndGg7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgcmVzdWx0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoKDxhbnk+dmlldylbaV0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgdGhlIGRlZmF1bHQgbWF0ZXJpYWwgb2YgZ2x0Zi4gUmVsYXRlZCB0b1xyXG4gICAgICogaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL3RyZWUvbWFzdGVyL3NwZWNpZmljYXRpb24vMS4wI2FwcGVuZGl4LWEtZGVmYXVsdC1tYXRlcmlhbFxyXG4gICAgICogQHBhcmFtIHNjZW5lIHRoZSBCYWJ5bG9uLmpzIHNjZW5lXHJcbiAgICAgKiBAcmV0dXJucyB0aGUgZGVmYXVsdCBCYWJ5bG9uIG1hdGVyaWFsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgR2V0RGVmYXVsdE1hdGVyaWFsKHNjZW5lOiBTY2VuZSk6IFNoYWRlck1hdGVyaWFsIHtcclxuICAgICAgICBpZiAoIUdMVEZVdGlscy5fRGVmYXVsdE1hdGVyaWFsKSB7XHJcbiAgICAgICAgICAgIEVmZmVjdC5TaGFkZXJzU3RvcmVbXCJHTFRGRGVmYXVsdE1hdGVyaWFsVmVydGV4U2hhZGVyXCJdID0gW1xyXG4gICAgICAgICAgICAgICAgXCJwcmVjaXNpb24gaGlnaHAgZmxvYXQ7XCIsXHJcbiAgICAgICAgICAgICAgICBcIlwiLFxyXG4gICAgICAgICAgICAgICAgXCJ1bmlmb3JtIG1hdDQgd29ybGRWaWV3O1wiLFxyXG4gICAgICAgICAgICAgICAgXCJ1bmlmb3JtIG1hdDQgcHJvamVjdGlvbjtcIixcclxuICAgICAgICAgICAgICAgIFwiXCIsXHJcbiAgICAgICAgICAgICAgICBcImF0dHJpYnV0ZSB2ZWMzIHBvc2l0aW9uO1wiLFxyXG4gICAgICAgICAgICAgICAgXCJcIixcclxuICAgICAgICAgICAgICAgIFwidm9pZCBtYWluKHZvaWQpXCIsXHJcbiAgICAgICAgICAgICAgICBcIntcIixcclxuICAgICAgICAgICAgICAgIFwiICAgIGdsX1Bvc2l0aW9uID0gcHJvamVjdGlvbiAqIHdvcmxkVmlldyAqIHZlYzQocG9zaXRpb24sIDEuMCk7XCIsXHJcbiAgICAgICAgICAgICAgICBcIn1cIixcclxuICAgICAgICAgICAgXS5qb2luKFwiXFxuXCIpO1xyXG5cclxuICAgICAgICAgICAgRWZmZWN0LlNoYWRlcnNTdG9yZVtcIkdMVEZEZWZhdWx0TWF0ZXJpYWxQaXhlbFNoYWRlclwiXSA9IFtcclxuICAgICAgICAgICAgICAgIFwicHJlY2lzaW9uIGhpZ2hwIGZsb2F0O1wiLFxyXG4gICAgICAgICAgICAgICAgXCJcIixcclxuICAgICAgICAgICAgICAgIFwidW5pZm9ybSB2ZWM0IHVfZW1pc3Npb247XCIsXHJcbiAgICAgICAgICAgICAgICBcIlwiLFxyXG4gICAgICAgICAgICAgICAgXCJ2b2lkIG1haW4odm9pZClcIixcclxuICAgICAgICAgICAgICAgIFwie1wiLFxyXG4gICAgICAgICAgICAgICAgXCIgICAgZ2xfRnJhZ0NvbG9yID0gdV9lbWlzc2lvbjtcIixcclxuICAgICAgICAgICAgICAgIFwifVwiLFxyXG4gICAgICAgICAgICBdLmpvaW4oXCJcXG5cIik7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBzaGFkZXJQYXRoID0ge1xyXG4gICAgICAgICAgICAgICAgdmVydGV4OiBcIkdMVEZEZWZhdWx0TWF0ZXJpYWxcIixcclxuICAgICAgICAgICAgICAgIGZyYWdtZW50OiBcIkdMVEZEZWZhdWx0TWF0ZXJpYWxcIixcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzOiBbXCJwb3NpdGlvblwiXSxcclxuICAgICAgICAgICAgICAgIHVuaWZvcm1zOiBbXCJ3b3JsZFZpZXdcIiwgXCJwcm9qZWN0aW9uXCIsIFwidV9lbWlzc2lvblwiXSxcclxuICAgICAgICAgICAgICAgIHNhbXBsZXJzOiBuZXcgQXJyYXk8c3RyaW5nPigpLFxyXG4gICAgICAgICAgICAgICAgbmVlZEFscGhhQmxlbmRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgR0xURlV0aWxzLl9EZWZhdWx0TWF0ZXJpYWwgPSBuZXcgU2hhZGVyTWF0ZXJpYWwoXCJHTFRGRGVmYXVsdE1hdGVyaWFsXCIsIHNjZW5lLCBzaGFkZXJQYXRoLCBvcHRpb25zKTtcclxuICAgICAgICAgICAgR0xURlV0aWxzLl9EZWZhdWx0TWF0ZXJpYWwuc2V0Q29sb3I0KFwidV9lbWlzc2lvblwiLCBuZXcgQ29sb3I0KDAuNSwgMC41LCAwLjUsIDEuMCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIEdMVEZVdGlscy5fRGVmYXVsdE1hdGVyaWFsO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFRoZSBHTFRGIGRlZmF1bHQgbWF0ZXJpYWxcclxuICAgIHByaXZhdGUgc3RhdGljIF9EZWZhdWx0TWF0ZXJpYWw6IE51bGxhYmxlPFNoYWRlck1hdGVyaWFsPiA9IG51bGw7XHJcbn1cclxuIiwiaW1wb3J0IHsgR0xURkxvYWRlckV4dGVuc2lvbiwgR0xURkxvYWRlckJhc2UsIEdMVEZMb2FkZXIgfSBmcm9tIFwiLi9nbFRGTG9hZGVyXCI7XHJcblxyXG5pbXBvcnQgdHlwZSB7IElHTFRGUnVudGltZSwgSUdMVEZNYXRlcmlhbCB9IGZyb20gXCIuL2dsVEZMb2FkZXJJbnRlcmZhY2VzXCI7XHJcblxyXG5pbXBvcnQgeyBWZWN0b3IzIH0gZnJvbSBcImNvcmUvTWF0aHMvbWF0aC52ZWN0b3JcIjtcclxuaW1wb3J0IHsgQ29sb3IzIH0gZnJvbSBcImNvcmUvTWF0aHMvbWF0aC5jb2xvclwiO1xyXG5pbXBvcnQgeyBUb29scyB9IGZyb20gXCJjb3JlL01pc2MvdG9vbHNcIjtcclxuaW1wb3J0IHsgTWF0ZXJpYWwgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgU3RhbmRhcmRNYXRlcmlhbCB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9zdGFuZGFyZE1hdGVyaWFsXCI7XHJcbmltcG9ydCB7IEhlbWlzcGhlcmljTGlnaHQgfSBmcm9tIFwiY29yZS9MaWdodHMvaGVtaXNwaGVyaWNMaWdodFwiO1xyXG5pbXBvcnQgeyBEaXJlY3Rpb25hbExpZ2h0IH0gZnJvbSBcImNvcmUvTGlnaHRzL2RpcmVjdGlvbmFsTGlnaHRcIjtcclxuaW1wb3J0IHsgUG9pbnRMaWdodCB9IGZyb20gXCJjb3JlL0xpZ2h0cy9wb2ludExpZ2h0XCI7XHJcbmltcG9ydCB7IFNwb3RMaWdodCB9IGZyb20gXCJjb3JlL0xpZ2h0cy9zcG90TGlnaHRcIjtcclxuXHJcbmludGVyZmFjZSBJR0xURk1hdGVyaWFsc0NvbW1vbkV4dGVuc2lvblZhbHVlcyB7XHJcbiAgICBhbWJpZW50PzogbnVtYmVyW10gfCBzdHJpbmc7XHJcbiAgICBkaWZmdXNlPzogbnVtYmVyW10gfCBzdHJpbmc7XHJcbiAgICBlbWlzc2lvbj86IG51bWJlcltdIHwgc3RyaW5nO1xyXG4gICAgc3BlY3VsYXI/OiBudW1iZXJbXSB8IHN0cmluZztcclxuICAgIHNoaW5pbmVzcz86IG51bWJlcjtcclxuICAgIHRyYW5zcGFyZW5jeT86IG51bWJlcjtcclxufVxyXG5cclxuaW50ZXJmYWNlIElHTFRGTWF0ZXJpYWxzQ29tbW9uRXh0ZW5zaW9uIHtcclxuICAgIHRlY2huaXF1ZTogc3RyaW5nO1xyXG4gICAgdHJhbnNwYXJlbnQ/OiBudW1iZXI7XHJcbiAgICBkb3VibGVTaWRlZD86IGJvb2xlYW47XHJcbiAgICB2YWx1ZXM6IElHTFRGTWF0ZXJpYWxzQ29tbW9uRXh0ZW5zaW9uVmFsdWVzO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgSUdMVEZSdW50aW1lQ29tbW9uRXh0ZW5zaW9uIHtcclxuICAgIGxpZ2h0czogeyBba2V5OiBzdHJpbmddOiBJR0xURkxpZ2h0Q29tbW9uRXh0ZW5zaW9uIH07XHJcbn1cclxuXHJcbmludGVyZmFjZSBJR0xURkxpZ2h0Q29tbW9uRXh0ZW5zaW9uIHtcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIHR5cGU6IHN0cmluZztcclxuXHJcbiAgICBhbWJpZW50PzogSUdMVEZBbWJpZW50TGlnaHRDb21tb25FeHRlbnNpb247XHJcbiAgICBwb2ludD86IElHTFRGUG9pbnRMaWdodENvbW1vbkV4dGVuc2lvbjtcclxuICAgIGRpcmVjdGlvbmFsPzogSUdMVEZEaXJlY3Rpb25hbExpZ2h0Q29tbW9uRXh0ZW5zaW9uO1xyXG4gICAgc3BvdD86IElHTFRGU3BvdExpZ2h0Q29tbW9uRXh0ZW5zaW9uO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgSUdMVEZQb2ludExpZ2h0Q29tbW9uRXh0ZW5zaW9uIHtcclxuICAgIGNvbG9yOiBudW1iZXJbXTtcclxuICAgIGNvbnN0YW50QXR0ZW51YXRpb246IG51bWJlcjtcclxuICAgIGxpbmVhckF0dGVudWF0aW9uOiBudW1iZXI7XHJcbiAgICBxdWFkcmF0aWNBdHRlbnVhdGlvbjogbnVtYmVyO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgSUdMVEZBbWJpZW50TGlnaHRDb21tb25FeHRlbnNpb24ge1xyXG4gICAgY29sb3I6IG51bWJlcltdO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgSUdMVEZEaXJlY3Rpb25hbExpZ2h0Q29tbW9uRXh0ZW5zaW9uIHtcclxuICAgIGNvbG9yOiBudW1iZXJbXTtcclxufVxyXG5cclxuaW50ZXJmYWNlIElHTFRGU3BvdExpZ2h0Q29tbW9uRXh0ZW5zaW9uIHtcclxuICAgIGNvbG9yOiBudW1iZXJbXTtcclxuICAgIGNvbnN0YW50QXR0ZW51YXRpb246IG51bWJlcjtcclxuICAgIGZhbGxPZmZBbmdsZTogbnVtYmVyO1xyXG4gICAgZmFsbE9mZkV4cG9uZW50OiBudW1iZXI7XHJcbiAgICBsaW5lYXJBdHRlbnVhdGlvbjogbnVtYmVyO1xyXG4gICAgcXVhZHJhdGljQXR0ZW51YXRpb246IG51bWJlcjtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBpbnRlcm5hbFxyXG4gKiBAZGVwcmVjYXRlZFxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEdMVEZNYXRlcmlhbHNDb21tb25FeHRlbnNpb24gZXh0ZW5kcyBHTFRGTG9hZGVyRXh0ZW5zaW9uIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKFwiS0hSX21hdGVyaWFsc19jb21tb25cIik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG92ZXJyaWRlIGxvYWRSdW50aW1lRXh0ZW5zaW9uc0FzeW5jKGdsdGZSdW50aW1lOiBJR0xURlJ1bnRpbWUpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAoIWdsdGZSdW50aW1lLmV4dGVuc2lvbnMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgZXh0ZW5zaW9uOiBJR0xURlJ1bnRpbWVDb21tb25FeHRlbnNpb24gPSBnbHRmUnVudGltZS5leHRlbnNpb25zW3RoaXMubmFtZV07XHJcbiAgICAgICAgaWYgKCFleHRlbnNpb24pIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQ3JlYXRlIGxpZ2h0c1xyXG4gICAgICAgIGNvbnN0IGxpZ2h0cyA9IGV4dGVuc2lvbi5saWdodHM7XHJcbiAgICAgICAgaWYgKGxpZ2h0cykge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHRoaW5nIGluIGxpZ2h0cykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbGlnaHQ6IElHTFRGTGlnaHRDb21tb25FeHRlbnNpb24gPSBsaWdodHNbdGhpbmddO1xyXG5cclxuICAgICAgICAgICAgICAgIHN3aXRjaCAobGlnaHQudHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJhbWJpZW50XCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYW1iaWVudExpZ2h0ID0gbmV3IEhlbWlzcGhlcmljTGlnaHQobGlnaHQubmFtZSwgbmV3IFZlY3RvcjMoMCwgMSwgMCksIGdsdGZSdW50aW1lLnNjZW5lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYW1iaWVudCA9IGxpZ2h0LmFtYmllbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhbWJpZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbWJpZW50TGlnaHQuZGlmZnVzZSA9IENvbG9yMy5Gcm9tQXJyYXkoYW1iaWVudC5jb2xvciB8fCBbMSwgMSwgMV0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwicG9pbnRcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwb2ludExpZ2h0ID0gbmV3IFBvaW50TGlnaHQobGlnaHQubmFtZSwgbmV3IFZlY3RvcjMoMTAsIDEwLCAxMCksIGdsdGZSdW50aW1lLnNjZW5lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcG9pbnQgPSBsaWdodC5wb2ludDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBvaW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb2ludExpZ2h0LmRpZmZ1c2UgPSBDb2xvcjMuRnJvbUFycmF5KHBvaW50LmNvbG9yIHx8IFsxLCAxLCAxXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJkaXJlY3Rpb25hbFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRpckxpZ2h0ID0gbmV3IERpcmVjdGlvbmFsTGlnaHQobGlnaHQubmFtZSwgbmV3IFZlY3RvcjMoMCwgLTEsIDApLCBnbHRmUnVudGltZS5zY2VuZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRpcmVjdGlvbmFsID0gbGlnaHQuZGlyZWN0aW9uYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkaXJlY3Rpb25hbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyTGlnaHQuZGlmZnVzZSA9IENvbG9yMy5Gcm9tQXJyYXkoZGlyZWN0aW9uYWwuY29sb3IgfHwgWzEsIDEsIDFdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcInNwb3RcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzcG90ID0gbGlnaHQuc3BvdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNwb3QpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNwb3RMaWdodCA9IG5ldyBTcG90TGlnaHQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlnaHQubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgVmVjdG9yMygwLCAxMCwgMCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IFZlY3RvcjMoMCwgLTEsIDApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwb3QuZmFsbE9mZkFuZ2xlIHx8IE1hdGguUEksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3BvdC5mYWxsT2ZmRXhwb25lbnQgfHwgMC4wLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdsdGZSdW50aW1lLnNjZW5lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3BvdExpZ2h0LmRpZmZ1c2UgPSBDb2xvcjMuRnJvbUFycmF5KHNwb3QuY29sb3IgfHwgWzEsIDEsIDFdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgVG9vbHMuV2FybignR0xURiBNYXRlcmlhbCBDb21tb24gZXh0ZW5zaW9uOiBsaWdodCB0eXBlIFwiJyArIGxpZ2h0LnR5cGUgKyBcIuKAnSBub3Qgc3VwcG9ydGVkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvdmVycmlkZSBsb2FkTWF0ZXJpYWxBc3luYyhnbHRmUnVudGltZTogSUdMVEZSdW50aW1lLCBpZDogc3RyaW5nLCBvblN1Y2Nlc3M6IChtYXRlcmlhbDogTWF0ZXJpYWwpID0+IHZvaWQsIG9uRXJyb3I6IChtZXNzYWdlOiBzdHJpbmcpID0+IHZvaWQpOiBib29sZWFuIHtcclxuICAgICAgICBjb25zdCBtYXRlcmlhbDogSUdMVEZNYXRlcmlhbCA9IGdsdGZSdW50aW1lLm1hdGVyaWFsc1tpZF07XHJcbiAgICAgICAgaWYgKCFtYXRlcmlhbCB8fCAhbWF0ZXJpYWwuZXh0ZW5zaW9ucykge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBleHRlbnNpb246IElHTFRGTWF0ZXJpYWxzQ29tbW9uRXh0ZW5zaW9uID0gbWF0ZXJpYWwuZXh0ZW5zaW9uc1t0aGlzLm5hbWVdO1xyXG4gICAgICAgIGlmICghZXh0ZW5zaW9uKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHN0YW5kYXJkTWF0ZXJpYWwgPSBuZXcgU3RhbmRhcmRNYXRlcmlhbChpZCwgZ2x0ZlJ1bnRpbWUuc2NlbmUpO1xyXG4gICAgICAgIHN0YW5kYXJkTWF0ZXJpYWwuc2lkZU9yaWVudGF0aW9uID0gTWF0ZXJpYWwuQ291bnRlckNsb2NrV2lzZVNpZGVPcmllbnRhdGlvbjtcclxuXHJcbiAgICAgICAgaWYgKGV4dGVuc2lvbi50ZWNobmlxdWUgPT09IFwiQ09OU1RBTlRcIikge1xyXG4gICAgICAgICAgICBzdGFuZGFyZE1hdGVyaWFsLmRpc2FibGVMaWdodGluZyA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzdGFuZGFyZE1hdGVyaWFsLmJhY2tGYWNlQ3VsbGluZyA9IGV4dGVuc2lvbi5kb3VibGVTaWRlZCA9PT0gdW5kZWZpbmVkID8gZmFsc2UgOiAhZXh0ZW5zaW9uLmRvdWJsZVNpZGVkO1xyXG4gICAgICAgIHN0YW5kYXJkTWF0ZXJpYWwuYWxwaGEgPSBleHRlbnNpb24udmFsdWVzLnRyYW5zcGFyZW5jeSA9PT0gdW5kZWZpbmVkID8gMS4wIDogZXh0ZW5zaW9uLnZhbHVlcy50cmFuc3BhcmVuY3k7XHJcbiAgICAgICAgc3RhbmRhcmRNYXRlcmlhbC5zcGVjdWxhclBvd2VyID0gZXh0ZW5zaW9uLnZhbHVlcy5zaGluaW5lc3MgPT09IHVuZGVmaW5lZCA/IDAuMCA6IGV4dGVuc2lvbi52YWx1ZXMuc2hpbmluZXNzO1xyXG5cclxuICAgICAgICAvLyBBbWJpZW50XHJcbiAgICAgICAgaWYgKHR5cGVvZiBleHRlbnNpb24udmFsdWVzLmFtYmllbnQgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5fbG9hZFRleHR1cmUoZ2x0ZlJ1bnRpbWUsIGV4dGVuc2lvbi52YWx1ZXMuYW1iaWVudCwgc3RhbmRhcmRNYXRlcmlhbCwgXCJhbWJpZW50VGV4dHVyZVwiLCBvbkVycm9yKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzdGFuZGFyZE1hdGVyaWFsLmFtYmllbnRDb2xvciA9IENvbG9yMy5Gcm9tQXJyYXkoZXh0ZW5zaW9uLnZhbHVlcy5hbWJpZW50IHx8IFswLCAwLCAwXSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBEaWZmdXNlXHJcbiAgICAgICAgaWYgKHR5cGVvZiBleHRlbnNpb24udmFsdWVzLmRpZmZ1c2UgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5fbG9hZFRleHR1cmUoZ2x0ZlJ1bnRpbWUsIGV4dGVuc2lvbi52YWx1ZXMuZGlmZnVzZSwgc3RhbmRhcmRNYXRlcmlhbCwgXCJkaWZmdXNlVGV4dHVyZVwiLCBvbkVycm9yKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzdGFuZGFyZE1hdGVyaWFsLmRpZmZ1c2VDb2xvciA9IENvbG9yMy5Gcm9tQXJyYXkoZXh0ZW5zaW9uLnZhbHVlcy5kaWZmdXNlIHx8IFswLCAwLCAwXSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBFbWlzc2lvblxyXG4gICAgICAgIGlmICh0eXBlb2YgZXh0ZW5zaW9uLnZhbHVlcy5lbWlzc2lvbiA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICB0aGlzLl9sb2FkVGV4dHVyZShnbHRmUnVudGltZSwgZXh0ZW5zaW9uLnZhbHVlcy5lbWlzc2lvbiwgc3RhbmRhcmRNYXRlcmlhbCwgXCJlbWlzc2l2ZVRleHR1cmVcIiwgb25FcnJvcik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc3RhbmRhcmRNYXRlcmlhbC5lbWlzc2l2ZUNvbG9yID0gQ29sb3IzLkZyb21BcnJheShleHRlbnNpb24udmFsdWVzLmVtaXNzaW9uIHx8IFswLCAwLCAwXSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBTcGVjdWxhclxyXG4gICAgICAgIGlmICh0eXBlb2YgZXh0ZW5zaW9uLnZhbHVlcy5zcGVjdWxhciA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICB0aGlzLl9sb2FkVGV4dHVyZShnbHRmUnVudGltZSwgZXh0ZW5zaW9uLnZhbHVlcy5zcGVjdWxhciwgc3RhbmRhcmRNYXRlcmlhbCwgXCJzcGVjdWxhclRleHR1cmVcIiwgb25FcnJvcik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc3RhbmRhcmRNYXRlcmlhbC5zcGVjdWxhckNvbG9yID0gQ29sb3IzLkZyb21BcnJheShleHRlbnNpb24udmFsdWVzLnNwZWN1bGFyIHx8IFswLCAwLCAwXSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9sb2FkVGV4dHVyZShnbHRmUnVudGltZTogSUdMVEZSdW50aW1lLCBpZDogc3RyaW5nLCBtYXRlcmlhbDogU3RhbmRhcmRNYXRlcmlhbCwgcHJvcGVydHlQYXRoOiBzdHJpbmcsIG9uRXJyb3I6IChtZXNzYWdlOiBzdHJpbmcpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgICAgICAvLyBDcmVhdGUgYnVmZmVyIGZyb20gdGV4dHVyZSB1cmxcclxuICAgICAgICBHTFRGTG9hZGVyQmFzZS5Mb2FkVGV4dHVyZUJ1ZmZlckFzeW5jKFxyXG4gICAgICAgICAgICBnbHRmUnVudGltZSxcclxuICAgICAgICAgICAgaWQsXHJcbiAgICAgICAgICAgIChidWZmZXIpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIENyZWF0ZSB0ZXh0dXJlIGZyb20gYnVmZmVyXHJcbiAgICAgICAgICAgICAgICBHTFRGTG9hZGVyQmFzZS5DcmVhdGVUZXh0dXJlQXN5bmMoZ2x0ZlJ1bnRpbWUsIGlkLCBidWZmZXIsICh0ZXh0dXJlKSA9PiAoKDxhbnk+bWF0ZXJpYWwpW3Byb3BlcnR5UGF0aF0gPSB0ZXh0dXJlKSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG9uRXJyb3JcclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5HTFRGTG9hZGVyLlJlZ2lzdGVyRXh0ZW5zaW9uKG5ldyBHTFRGTWF0ZXJpYWxzQ29tbW9uRXh0ZW5zaW9uKCkpO1xyXG4iLCJleHBvcnQgKiBmcm9tIFwiLi9nbFRGQmluYXJ5RXh0ZW5zaW9uXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2dsVEZMb2FkZXJcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vZ2xURkxvYWRlckludGVyZmFjZXNcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vZ2xURkxvYWRlclV0aWxzXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2dsVEZNYXRlcmlhbHNDb21tb25FeHRlbnNpb25cIjtcclxuIiwiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby1pbnRlcm5hbC1tb2R1bGVzXHJcbmltcG9ydCB0eXBlIHsgSVNjZW5lTG9hZGVyUGx1Z2luRXh0ZW5zaW9ucywgSVNjZW5lTG9hZGVyUGx1Z2luTWV0YWRhdGEgfSBmcm9tIFwiY29yZS9pbmRleFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEdMVEZNYWdpY0Jhc2U2NEVuY29kZWQgPSBcIloyeFVSZ1wiOyAvLyBcImdsVEZcIiBiYXNlNjQgZW5jb2RlZCAod2l0aG91dCB0aGUgcXVvdGVzISlcclxuXHJcbmV4cG9ydCBjb25zdCBHTFRGRmlsZUxvYWRlck1ldGFkYXRhID0ge1xyXG4gICAgbmFtZTogXCJnbHRmXCIsXHJcblxyXG4gICAgZXh0ZW5zaW9uczoge1xyXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb25cclxuICAgICAgICBcIi5nbHRmXCI6IHsgaXNCaW5hcnk6IGZhbHNlIH0sXHJcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxyXG4gICAgICAgIFwiLmdsYlwiOiB7IGlzQmluYXJ5OiB0cnVlIH0sXHJcbiAgICB9IGFzIGNvbnN0IHNhdGlzZmllcyBJU2NlbmVMb2FkZXJQbHVnaW5FeHRlbnNpb25zLFxyXG5cclxuICAgIGNhbkRpcmVjdExvYWQoZGF0YTogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgKGRhdGEuaW5kZXhPZihcImFzc2V0XCIpICE9PSAtMSAmJiBkYXRhLmluZGV4T2YoXCJ2ZXJzaW9uXCIpICE9PSAtMSkgfHxcclxuICAgICAgICAgICAgZGF0YS5zdGFydHNXaXRoKFwiZGF0YTpiYXNlNjQsXCIgKyBHTFRGTWFnaWNCYXNlNjRFbmNvZGVkKSB8fCAvLyB0aGlzIGlzIHRlY2huaWNhbGx5IGluY29ycmVjdCwgYnV0IHdpbGwgY29udGludWUgdG8gc3VwcG9ydCBmb3IgYmFja2NvbXBhdC5cclxuICAgICAgICAgICAgZGF0YS5zdGFydHNXaXRoKFwiZGF0YTo7YmFzZTY0LFwiICsgR0xURk1hZ2ljQmFzZTY0RW5jb2RlZCkgfHxcclxuICAgICAgICAgICAgZGF0YS5zdGFydHNXaXRoKFwiZGF0YTphcHBsaWNhdGlvbi9vY3RldC1zdHJlYW07YmFzZTY0LFwiICsgR0xURk1hZ2ljQmFzZTY0RW5jb2RlZCkgfHxcclxuICAgICAgICAgICAgZGF0YS5zdGFydHNXaXRoKFwiZGF0YTptb2RlbC9nbHRmLWJpbmFyeTtiYXNlNjQsXCIgKyBHTFRGTWFnaWNCYXNlNjRFbmNvZGVkKVxyXG4gICAgICAgICk7XHJcbiAgICB9LFxyXG59IGFzIGNvbnN0IHNhdGlzZmllcyBJU2NlbmVMb2FkZXJQbHVnaW5NZXRhZGF0YTtcclxuIiwiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzICovXHJcbi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvbiAqL1xyXG5pbXBvcnQgdHlwZSAqIGFzIEdMVEYyIGZyb20gXCJiYWJ5bG9uanMtZ2x0ZjJpbnRlcmZhY2VcIjtcclxuaW1wb3J0IHR5cGUgeyBOdWxsYWJsZSB9IGZyb20gXCJjb3JlL3R5cGVzXCI7XHJcbmltcG9ydCB0eXBlIHsgT2JzZXJ2ZXIgfSBmcm9tIFwiY29yZS9NaXNjL29ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJjb3JlL01pc2Mvb2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBUb29scyB9IGZyb20gXCJjb3JlL01pc2MvdG9vbHNcIjtcclxuaW1wb3J0IHR5cGUgeyBDYW1lcmEgfSBmcm9tIFwiY29yZS9DYW1lcmFzL2NhbWVyYVwiO1xyXG5pbXBvcnQgdHlwZSB7IEJhc2VUZXh0dXJlIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL1RleHR1cmVzL2Jhc2VUZXh0dXJlXCI7XHJcbmltcG9ydCB0eXBlIHsgTWF0ZXJpYWwgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHR5cGUgeyBBYnN0cmFjdE1lc2ggfSBmcm9tIFwiY29yZS9NZXNoZXMvYWJzdHJhY3RNZXNoXCI7XHJcbmltcG9ydCB0eXBlIHsgSVNjZW5lTG9hZGVyUGx1Z2luRmFjdG9yeSwgSVNjZW5lTG9hZGVyUGx1Z2luQXN5bmMsIElTY2VuZUxvYWRlclByb2dyZXNzRXZlbnQsIElTY2VuZUxvYWRlckFzeW5jUmVzdWx0LCBTY2VuZUxvYWRlclBsdWdpbk9wdGlvbnMgfSBmcm9tIFwiY29yZS9Mb2FkaW5nL3NjZW5lTG9hZGVyXCI7XHJcbmltcG9ydCB7IHJlZ2lzdGVyU2NlbmVMb2FkZXJQbHVnaW4gfSBmcm9tIFwiY29yZS9Mb2FkaW5nL3NjZW5lTG9hZGVyXCI7XHJcbmltcG9ydCB7IEFzc2V0Q29udGFpbmVyIH0gZnJvbSBcImNvcmUvYXNzZXRDb250YWluZXJcIjtcclxuaW1wb3J0IHR5cGUgeyBTY2VuZSwgSURpc3Bvc2FibGUgfSBmcm9tIFwiY29yZS9zY2VuZVwiO1xyXG5pbXBvcnQgdHlwZSB7IFdlYlJlcXVlc3QgfSBmcm9tIFwiY29yZS9NaXNjL3dlYlJlcXVlc3RcIjtcclxuaW1wb3J0IHR5cGUgeyBJRmlsZVJlcXVlc3QgfSBmcm9tIFwiY29yZS9NaXNjL2ZpbGVSZXF1ZXN0XCI7XHJcbmltcG9ydCB7IExvZ2dlciB9IGZyb20gXCJjb3JlL01pc2MvbG9nZ2VyXCI7XHJcbmltcG9ydCB0eXBlIHsgSURhdGFCdWZmZXIgfSBmcm9tIFwiY29yZS9NaXNjL2RhdGFSZWFkZXJcIjtcclxuaW1wb3J0IHsgRGF0YVJlYWRlciB9IGZyb20gXCJjb3JlL01pc2MvZGF0YVJlYWRlclwiO1xyXG5pbXBvcnQgeyBHTFRGVmFsaWRhdGlvbiB9IGZyb20gXCIuL2dsVEZWYWxpZGF0aW9uXCI7XHJcbmltcG9ydCB7IEdMVEZGaWxlTG9hZGVyTWV0YWRhdGEsIEdMVEZNYWdpY0Jhc2U2NEVuY29kZWQgfSBmcm9tIFwiLi9nbFRGRmlsZUxvYWRlci5tZXRhZGF0YVwiO1xyXG5pbXBvcnQgdHlwZSB7IExvYWRGaWxlRXJyb3IgfSBmcm9tIFwiY29yZS9NaXNjL2ZpbGVUb29sc1wiO1xyXG5pbXBvcnQgeyBEZWNvZGVCYXNlNjRVcmxUb0JpbmFyeSB9IGZyb20gXCJjb3JlL01pc2MvZmlsZVRvb2xzXCI7XHJcbmltcG9ydCB7IFJ1bnRpbWVFcnJvciwgRXJyb3JDb2RlcyB9IGZyb20gXCJjb3JlL01pc2MvZXJyb3JcIjtcclxuaW1wb3J0IHR5cGUgeyBUcmFuc2Zvcm1Ob2RlIH0gZnJvbSBcImNvcmUvTWVzaGVzL3RyYW5zZm9ybU5vZGVcIjtcclxuaW1wb3J0IHR5cGUgeyBNb3JwaFRhcmdldE1hbmFnZXIgfSBmcm9tIFwiY29yZS9Nb3JwaC9tb3JwaFRhcmdldE1hbmFnZXJcIjtcclxuXHJcbi8qKlxyXG4gKiBEZWZpbmVzIG9wdGlvbnMgZm9yIGdsVEYgbG9hZGVyIGV4dGVuc2lvbnMuIFRoaXMgaW50ZXJmYWNlIGlzIGV4dGVuZGVkIGJ5IHNwZWNpZmljIGV4dGVuc2lvbnMuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIEdMVEZMb2FkZXJFeHRlbnNpb25PcHRpb25zIGV4dGVuZHMgUmVjb3JkPHN0cmluZywgUmVjb3JkPHN0cmluZywgdW5rbm93bj4gfCB1bmRlZmluZWQ+IHt9XHJcblxyXG5kZWNsYXJlIG1vZHVsZSBcImNvcmUvTG9hZGluZy9zY2VuZUxvYWRlclwiIHtcclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBqc2RvYy9yZXF1aXJlLWpzZG9jXHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFNjZW5lTG9hZGVyUGx1Z2luT3B0aW9ucyB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogRGVmaW5lcyBvcHRpb25zIGZvciB0aGUgZ2xURiBsb2FkZXIuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgW0dMVEZGaWxlTG9hZGVyTWV0YWRhdGEubmFtZV06IFBhcnRpYWw8R0xURkxvYWRlck9wdGlvbnM+O1xyXG4gICAgfVxyXG59XHJcblxyXG5pbnRlcmZhY2UgSUZpbGVSZXF1ZXN0SW5mbyBleHRlbmRzIElGaWxlUmVxdWVzdCB7XHJcbiAgICBfbGVuZ3RoQ29tcHV0YWJsZT86IGJvb2xlYW47XHJcbiAgICBfbG9hZGVkPzogbnVtYmVyO1xyXG4gICAgX3RvdGFsPzogbnVtYmVyO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZWFkQXN5bmMoYXJyYXlCdWZmZXI6IEFycmF5QnVmZmVyLCBieXRlT2Zmc2V0OiBudW1iZXIsIGJ5dGVMZW5ndGg6IG51bWJlcik6IFByb21pc2U8VWludDhBcnJheT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG5ldyBVaW50OEFycmF5KGFycmF5QnVmZmVyLCBieXRlT2Zmc2V0LCBieXRlTGVuZ3RoKSk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGUpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZWFkVmlld0FzeW5jKGFycmF5QnVmZmVyVmlldzogQXJyYXlCdWZmZXJWaWV3LCBieXRlT2Zmc2V0OiBudW1iZXIsIGJ5dGVMZW5ndGg6IG51bWJlcik6IFByb21pc2U8VWludDhBcnJheT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBpZiAoYnl0ZU9mZnNldCA8IDAgfHwgYnl0ZU9mZnNldCA+PSBhcnJheUJ1ZmZlclZpZXcuYnl0ZUxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIk9mZnNldCBpcyBvdXQgb2YgcmFuZ2UuXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGJ5dGVPZmZzZXQgKyBieXRlTGVuZ3RoID4gYXJyYXlCdWZmZXJWaWV3LmJ5dGVMZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJMZW5ndGggaXMgb3V0IG9mIHJhbmdlLlwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobmV3IFVpbnQ4QXJyYXkoYXJyYXlCdWZmZXJWaWV3LmJ1ZmZlciwgYXJyYXlCdWZmZXJWaWV3LmJ5dGVPZmZzZXQgKyBieXRlT2Zmc2V0LCBieXRlTGVuZ3RoKSk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGUpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogTW9kZSB0aGF0IGRldGVybWluZXMgdGhlIGNvb3JkaW5hdGUgc3lzdGVtIHRvIHVzZS5cclxuICovXHJcbmV4cG9ydCBlbnVtIEdMVEZMb2FkZXJDb29yZGluYXRlU3lzdGVtTW9kZSB7XHJcbiAgICAvKipcclxuICAgICAqIEF1dG9tYXRpY2FsbHkgY29udmVydCB0aGUgZ2xURiByaWdodC1oYW5kZWQgZGF0YSB0byB0aGUgYXBwcm9wcmlhdGUgc3lzdGVtIGJhc2VkIG9uIHRoZSBjdXJyZW50IGNvb3JkaW5hdGUgc3lzdGVtIG1vZGUgb2YgdGhlIHNjZW5lLlxyXG4gICAgICovXHJcbiAgICBBVVRPLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB0aGUgdXNlUmlnaHRIYW5kZWRTeXN0ZW0gZmxhZyBvbiB0aGUgc2NlbmUuXHJcbiAgICAgKi9cclxuICAgIEZPUkNFX1JJR0hUX0hBTkRFRCxcclxufVxyXG5cclxuLyoqXHJcbiAqIE1vZGUgdGhhdCBkZXRlcm1pbmVzIHdoYXQgYW5pbWF0aW9ucyB3aWxsIHN0YXJ0LlxyXG4gKi9cclxuZXhwb3J0IGVudW0gR0xURkxvYWRlckFuaW1hdGlvblN0YXJ0TW9kZSB7XHJcbiAgICAvKipcclxuICAgICAqIE5vIGFuaW1hdGlvbiB3aWxsIHN0YXJ0LlxyXG4gICAgICovXHJcbiAgICBOT05FLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIGZpcnN0IGFuaW1hdGlvbiB3aWxsIHN0YXJ0LlxyXG4gICAgICovXHJcbiAgICBGSVJTVCxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEFsbCBhbmltYXRpb25zIHdpbGwgc3RhcnQuXHJcbiAgICAgKi9cclxuICAgIEFMTCxcclxufVxyXG5cclxuLyoqXHJcbiAqIEludGVyZmFjZSB0aGF0IGNvbnRhaW5zIHRoZSBkYXRhIGZvciB0aGUgZ2xURiBhc3NldC5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUdMVEZMb2FkZXJEYXRhIHtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIG9iamVjdCB0aGF0IHJlcHJlc2VudHMgdGhlIGdsVEYgSlNPTi5cclxuICAgICAqL1xyXG4gICAganNvbjogT2JqZWN0O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIEJJTiBjaHVuayBvZiBhIGJpbmFyeSBnbFRGLlxyXG4gICAgICovXHJcbiAgICBiaW46IE51bGxhYmxlPElEYXRhQnVmZmVyPjtcclxufVxyXG5cclxuLyoqXHJcbiAqIEludGVyZmFjZSBmb3IgZXh0ZW5kaW5nIHRoZSBsb2FkZXIuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElHTFRGTG9hZGVyRXh0ZW5zaW9uIHtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIG5hbWUgb2YgdGhpcyBleHRlbnNpb24uXHJcbiAgICAgKi9cclxuICAgIHJlYWRvbmx5IG5hbWU6IHN0cmluZztcclxuXHJcbiAgICAvKipcclxuICAgICAqIERlZmluZXMgd2hldGhlciB0aGlzIGV4dGVuc2lvbiBpcyBlbmFibGVkLlxyXG4gICAgICovXHJcbiAgICBlbmFibGVkOiBib29sZWFuO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVmaW5lcyB0aGUgb3JkZXIgb2YgdGhpcyBleHRlbnNpb24uXHJcbiAgICAgKiBUaGUgbG9hZGVyIHNvcnRzIHRoZSBleHRlbnNpb25zIHVzaW5nIHRoZXNlIHZhbHVlcyB3aGVuIGxvYWRpbmcuXHJcbiAgICAgKi9cclxuICAgIG9yZGVyPzogbnVtYmVyO1xyXG59XHJcblxyXG4vKipcclxuICogTG9hZGVyIHN0YXRlLlxyXG4gKi9cclxuZXhwb3J0IGVudW0gR0xURkxvYWRlclN0YXRlIHtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIGFzc2V0IGlzIGxvYWRpbmcuXHJcbiAgICAgKi9cclxuICAgIExPQURJTkcsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgYXNzZXQgaXMgcmVhZHkgZm9yIHJlbmRlcmluZy5cclxuICAgICAqL1xyXG4gICAgUkVBRFksXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgYXNzZXQgaXMgY29tcGxldGVseSBsb2FkZWQuXHJcbiAgICAgKi9cclxuICAgIENPTVBMRVRFLFxyXG59XHJcblxyXG4vKiogQGludGVybmFsICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUdMVEZMb2FkZXIgZXh0ZW5kcyBJRGlzcG9zYWJsZSB7XHJcbiAgICBpbXBvcnRNZXNoQXN5bmM6IChcclxuICAgICAgICBtZXNoZXNOYW1lczogc3RyaW5nIHwgcmVhZG9ubHkgc3RyaW5nW10gfCBudWxsIHwgdW5kZWZpbmVkLFxyXG4gICAgICAgIHNjZW5lOiBTY2VuZSxcclxuICAgICAgICBjb250YWluZXI6IE51bGxhYmxlPEFzc2V0Q29udGFpbmVyPixcclxuICAgICAgICBkYXRhOiBJR0xURkxvYWRlckRhdGEsXHJcbiAgICAgICAgcm9vdFVybDogc3RyaW5nLFxyXG4gICAgICAgIG9uUHJvZ3Jlc3M/OiAoZXZlbnQ6IElTY2VuZUxvYWRlclByb2dyZXNzRXZlbnQpID0+IHZvaWQsXHJcbiAgICAgICAgZmlsZU5hbWU/OiBzdHJpbmdcclxuICAgICkgPT4gUHJvbWlzZTxJU2NlbmVMb2FkZXJBc3luY1Jlc3VsdD47XHJcbiAgICBsb2FkQXN5bmM6IChzY2VuZTogU2NlbmUsIGRhdGE6IElHTFRGTG9hZGVyRGF0YSwgcm9vdFVybDogc3RyaW5nLCBvblByb2dyZXNzPzogKGV2ZW50OiBJU2NlbmVMb2FkZXJQcm9ncmVzc0V2ZW50KSA9PiB2b2lkLCBmaWxlTmFtZT86IHN0cmluZykgPT4gUHJvbWlzZTx2b2lkPjtcclxufVxyXG5cclxuLyoqXHJcbiAqIEFkZHMgZGVmYXVsdC9pbXBsaWNpdCBvcHRpb25zIHRvIGV4dGVuc2lvbiBzcGVjaWZpYyBvcHRpb25zLlxyXG4gKi9cclxudHlwZSBEZWZhdWx0RXh0ZW5zaW9uT3B0aW9uczxCYXNlRXh0ZW5zaW9uT3B0aW9ucz4gPSB7XHJcbiAgICAvKipcclxuICAgICAqIERlZmluZXMgaWYgdGhlIGV4dGVuc2lvbiBpcyBlbmFibGVkXHJcbiAgICAgKi9cclxuICAgIGVuYWJsZWQ/OiBib29sZWFuO1xyXG59ICYgQmFzZUV4dGVuc2lvbk9wdGlvbnM7XHJcblxyXG5hYnN0cmFjdCBjbGFzcyBHTFRGTG9hZGVyT3B0aW9ucyB7XHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYmFieWxvbmpzL2F2YWlsYWJsZVxyXG4gICAgcHJvdGVjdGVkIGNvcHlGcm9tKG9wdGlvbnM/OiBQYXJ0aWFsPFJlYWRvbmx5PEdMVEZMb2FkZXJPcHRpb25zPj4pIHtcclxuICAgICAgICBpZiAob3B0aW9ucykge1xyXG4gICAgICAgICAgICB0aGlzLm9uUGFyc2VkID0gb3B0aW9ucy5vblBhcnNlZDtcclxuICAgICAgICAgICAgdGhpcy5jb29yZGluYXRlU3lzdGVtTW9kZSA9IG9wdGlvbnMuY29vcmRpbmF0ZVN5c3RlbU1vZGUgPz8gdGhpcy5jb29yZGluYXRlU3lzdGVtTW9kZTtcclxuICAgICAgICAgICAgdGhpcy5hbmltYXRpb25TdGFydE1vZGUgPSBvcHRpb25zLmFuaW1hdGlvblN0YXJ0TW9kZSA/PyB0aGlzLmFuaW1hdGlvblN0YXJ0TW9kZTtcclxuICAgICAgICAgICAgdGhpcy5sb2FkTm9kZUFuaW1hdGlvbnMgPSBvcHRpb25zLmxvYWROb2RlQW5pbWF0aW9ucyA/PyB0aGlzLmxvYWROb2RlQW5pbWF0aW9ucztcclxuICAgICAgICAgICAgdGhpcy5sb2FkU2tpbnMgPSBvcHRpb25zLmxvYWRTa2lucyA/PyB0aGlzLmxvYWRTa2lucztcclxuICAgICAgICAgICAgdGhpcy5sb2FkTW9ycGhUYXJnZXRzID0gb3B0aW9ucy5sb2FkTW9ycGhUYXJnZXRzID8/IHRoaXMubG9hZE1vcnBoVGFyZ2V0cztcclxuICAgICAgICAgICAgdGhpcy5jb21waWxlTWF0ZXJpYWxzID0gb3B0aW9ucy5jb21waWxlTWF0ZXJpYWxzID8/IHRoaXMuY29tcGlsZU1hdGVyaWFscztcclxuICAgICAgICAgICAgdGhpcy51c2VDbGlwUGxhbmUgPSBvcHRpb25zLnVzZUNsaXBQbGFuZSA/PyB0aGlzLnVzZUNsaXBQbGFuZTtcclxuICAgICAgICAgICAgdGhpcy5jb21waWxlU2hhZG93R2VuZXJhdG9ycyA9IG9wdGlvbnMuY29tcGlsZVNoYWRvd0dlbmVyYXRvcnMgPz8gdGhpcy5jb21waWxlU2hhZG93R2VuZXJhdG9ycztcclxuICAgICAgICAgICAgdGhpcy50cmFuc3BhcmVuY3lBc0NvdmVyYWdlID0gb3B0aW9ucy50cmFuc3BhcmVuY3lBc0NvdmVyYWdlID8/IHRoaXMudHJhbnNwYXJlbmN5QXNDb3ZlcmFnZTtcclxuICAgICAgICAgICAgdGhpcy51c2VSYW5nZVJlcXVlc3RzID0gb3B0aW9ucy51c2VSYW5nZVJlcXVlc3RzID8/IHRoaXMudXNlUmFuZ2VSZXF1ZXN0cztcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVJbnN0YW5jZXMgPSBvcHRpb25zLmNyZWF0ZUluc3RhbmNlcyA/PyB0aGlzLmNyZWF0ZUluc3RhbmNlcztcclxuICAgICAgICAgICAgdGhpcy5hbHdheXNDb21wdXRlQm91bmRpbmdCb3ggPSBvcHRpb25zLmFsd2F5c0NvbXB1dGVCb3VuZGluZ0JveCA/PyB0aGlzLmFsd2F5c0NvbXB1dGVCb3VuZGluZ0JveDtcclxuICAgICAgICAgICAgdGhpcy5sb2FkQWxsTWF0ZXJpYWxzID0gb3B0aW9ucy5sb2FkQWxsTWF0ZXJpYWxzID8/IHRoaXMubG9hZEFsbE1hdGVyaWFscztcclxuICAgICAgICAgICAgdGhpcy5sb2FkT25seU1hdGVyaWFscyA9IG9wdGlvbnMubG9hZE9ubHlNYXRlcmlhbHMgPz8gdGhpcy5sb2FkT25seU1hdGVyaWFscztcclxuICAgICAgICAgICAgdGhpcy5za2lwTWF0ZXJpYWxzID0gb3B0aW9ucy5za2lwTWF0ZXJpYWxzID8/IHRoaXMuc2tpcE1hdGVyaWFscztcclxuICAgICAgICAgICAgdGhpcy51c2VTUkdCQnVmZmVycyA9IG9wdGlvbnMudXNlU1JHQkJ1ZmZlcnMgPz8gdGhpcy51c2VTUkdCQnVmZmVycztcclxuICAgICAgICAgICAgdGhpcy50YXJnZXRGcHMgPSBvcHRpb25zLnRhcmdldEZwcyA/PyB0aGlzLnRhcmdldEZwcztcclxuICAgICAgICAgICAgdGhpcy5hbHdheXNDb21wdXRlU2tlbGV0b25Sb290Tm9kZSA9IG9wdGlvbnMuYWx3YXlzQ29tcHV0ZVNrZWxldG9uUm9vdE5vZGUgPz8gdGhpcy5hbHdheXNDb21wdXRlU2tlbGV0b25Sb290Tm9kZTtcclxuICAgICAgICAgICAgdGhpcy51c2VHbHRmVGV4dHVyZU5hbWVzID0gb3B0aW9ucy51c2VHbHRmVGV4dHVyZU5hbWVzID8/IHRoaXMudXNlR2x0ZlRleHR1cmVOYW1lcztcclxuICAgICAgICAgICAgdGhpcy5wcmVwcm9jZXNzVXJsQXN5bmMgPSBvcHRpb25zLnByZXByb2Nlc3NVcmxBc3luYyA/PyB0aGlzLnByZXByb2Nlc3NVcmxBc3luYztcclxuICAgICAgICAgICAgdGhpcy5jdXN0b21Sb290Tm9kZSA9IG9wdGlvbnMuY3VzdG9tUm9vdE5vZGU7XHJcbiAgICAgICAgICAgIHRoaXMub25NZXNoTG9hZGVkID0gb3B0aW9ucy5vbk1lc2hMb2FkZWQ7XHJcbiAgICAgICAgICAgIHRoaXMub25Ta2luTG9hZGVkID0gb3B0aW9ucy5vblNraW5Mb2FkZWQ7XHJcbiAgICAgICAgICAgIHRoaXMub25UZXh0dXJlTG9hZGVkID0gb3B0aW9ucy5vblRleHR1cmVMb2FkZWQ7XHJcbiAgICAgICAgICAgIHRoaXMub25NYXRlcmlhbExvYWRlZCA9IG9wdGlvbnMub25NYXRlcmlhbExvYWRlZDtcclxuICAgICAgICAgICAgdGhpcy5vbkNhbWVyYUxvYWRlZCA9IG9wdGlvbnMub25DYW1lcmFMb2FkZWQ7XHJcbiAgICAgICAgICAgIHRoaXMuZXh0ZW5zaW9uT3B0aW9ucyA9IG9wdGlvbnMuZXh0ZW5zaW9uT3B0aW9ucyA/PyB0aGlzLmV4dGVuc2lvbk9wdGlvbnM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tXHJcbiAgICAvLyBDb21tb24gb3B0aW9uc1xyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJhaXNlZCB3aGVuIHRoZSBhc3NldCBoYXMgYmVlbiBwYXJzZWRcclxuICAgICAqL1xyXG4gICAgcHVibGljIGFic3RyYWN0IG9uUGFyc2VkPzogKChsb2FkZXJEYXRhOiBJR0xURkxvYWRlckRhdGEpID0+IHZvaWQpIHwgdW5kZWZpbmVkO1xyXG5cclxuICAgIC8vIC0tLS0tLS0tLS1cclxuICAgIC8vIFYyIG9wdGlvbnNcclxuICAgIC8vIC0tLS0tLS0tLS1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBjb29yZGluYXRlIHN5c3RlbSBtb2RlLiBEZWZhdWx0cyB0byBBVVRPLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY29vcmRpbmF0ZVN5c3RlbU1vZGUgPSBHTFRGTG9hZGVyQ29vcmRpbmF0ZVN5c3RlbU1vZGUuQVVUTztcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBhbmltYXRpb24gc3RhcnQgbW9kZS4gRGVmYXVsdHMgdG8gRklSU1QuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhbmltYXRpb25TdGFydE1vZGUgPSBHTFRGTG9hZGVyQW5pbWF0aW9uU3RhcnRNb2RlLkZJUlNUO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVmaW5lcyBpZiB0aGUgbG9hZGVyIHNob3VsZCBsb2FkIG5vZGUgYW5pbWF0aW9ucy4gRGVmYXVsdHMgdG8gdHJ1ZS5cclxuICAgICAqIE5PVEU6IFRoZSBhbmltYXRpb24gb2YgdGhpcyBub2RlIHdpbGwgc3RpbGwgbG9hZCBpZiB0aGUgbm9kZSBpcyBhbHNvIGEgam9pbnQgb2YgYSBza2luIGFuZCBgbG9hZFNraW5zYCBpcyB0cnVlLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbG9hZE5vZGVBbmltYXRpb25zID0gdHJ1ZTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIERlZmluZXMgaWYgdGhlIGxvYWRlciBzaG91bGQgbG9hZCBza2lucy4gRGVmYXVsdHMgdG8gdHJ1ZS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGxvYWRTa2lucyA9IHRydWU7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWZpbmVzIGlmIHRoZSBsb2FkZXIgc2hvdWxkIGxvYWQgbW9ycGggdGFyZ2V0cy4gRGVmYXVsdHMgdG8gdHJ1ZS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGxvYWRNb3JwaFRhcmdldHMgPSB0cnVlO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVmaW5lcyBpZiB0aGUgbG9hZGVyIHNob3VsZCBjb21waWxlIG1hdGVyaWFscyBiZWZvcmUgcmFpc2luZyB0aGUgc3VjY2VzcyBjYWxsYmFjay4gRGVmYXVsdHMgdG8gZmFsc2UuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBjb21waWxlTWF0ZXJpYWxzID0gZmFsc2U7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWZpbmVzIGlmIHRoZSBsb2FkZXIgc2hvdWxkIGFsc28gY29tcGlsZSBtYXRlcmlhbHMgd2l0aCBjbGlwIHBsYW5lcy4gRGVmYXVsdHMgdG8gZmFsc2UuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyB1c2VDbGlwUGxhbmUgPSBmYWxzZTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIERlZmluZXMgaWYgdGhlIGxvYWRlciBzaG91bGQgY29tcGlsZSBzaGFkb3cgZ2VuZXJhdG9ycyBiZWZvcmUgcmFpc2luZyB0aGUgc3VjY2VzcyBjYWxsYmFjay4gRGVmYXVsdHMgdG8gZmFsc2UuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBjb21waWxlU2hhZG93R2VuZXJhdG9ycyA9IGZhbHNlO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVmaW5lcyBpZiB0aGUgQWxwaGEgYmxlbmRlZCBtYXRlcmlhbHMgYXJlIG9ubHkgYXBwbGllZCBhcyBjb3ZlcmFnZS5cclxuICAgICAqIElmIGZhbHNlLCAoZGVmYXVsdCkgVGhlIGx1bWluYW5jZSBvZiBlYWNoIHBpeGVsIHdpbGwgcmVkdWNlIGl0cyBvcGFjaXR5IHRvIHNpbXVsYXRlIHRoZSBiZWhhdmlvdXIgb2YgbW9zdCBwaHlzaWNhbCBtYXRlcmlhbHMuXHJcbiAgICAgKiBJZiB0cnVlLCBubyBleHRyYSBlZmZlY3RzIGFyZSBhcHBsaWVkIHRvIHRyYW5zcGFyZW50IHBpeGVscy5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHRyYW5zcGFyZW5jeUFzQ292ZXJhZ2UgPSBmYWxzZTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIERlZmluZXMgaWYgdGhlIGxvYWRlciBzaG91bGQgdXNlIHJhbmdlIHJlcXVlc3RzIHdoZW4gbG9hZCBiaW5hcnkgZ2xURiBmaWxlcyBmcm9tIEhUVFAuXHJcbiAgICAgKiBFbmFibGluZyB3aWxsIGRpc2FibGUgb2ZmbGluZSBzdXBwb3J0IGFuZCBnbFRGIHZhbGlkYXRvci5cclxuICAgICAqIERlZmF1bHRzIHRvIGZhbHNlLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgdXNlUmFuZ2VSZXF1ZXN0cyA9IGZhbHNlO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVmaW5lcyBpZiB0aGUgbG9hZGVyIHNob3VsZCBjcmVhdGUgaW5zdGFuY2VzIHdoZW4gbXVsdGlwbGUgZ2xURiBub2RlcyBwb2ludCB0byB0aGUgc2FtZSBnbFRGIG1lc2guIERlZmF1bHRzIHRvIHRydWUuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBjcmVhdGVJbnN0YW5jZXMgPSB0cnVlO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVmaW5lcyBpZiB0aGUgbG9hZGVyIHNob3VsZCBhbHdheXMgY29tcHV0ZSB0aGUgYm91bmRpbmcgYm94ZXMgb2YgbWVzaGVzIGFuZCBub3QgdXNlIHRoZSBtaW4vbWF4IHZhbHVlcyBmcm9tIHRoZSBwb3NpdGlvbiBhY2Nlc3Nvci4gRGVmYXVsdHMgdG8gZmFsc2UuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhbHdheXNDb21wdXRlQm91bmRpbmdCb3ggPSBmYWxzZTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIElmIHRydWUsIGxvYWQgYWxsIG1hdGVyaWFscyBkZWZpbmVkIGluIHRoZSBmaWxlLCBldmVuIGlmIG5vdCB1c2VkIGJ5IGFueSBtZXNoLiBEZWZhdWx0cyB0byBmYWxzZS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGxvYWRBbGxNYXRlcmlhbHMgPSBmYWxzZTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIElmIHRydWUsIGxvYWQgb25seSB0aGUgbWF0ZXJpYWxzIGRlZmluZWQgaW4gdGhlIGZpbGUuIERlZmF1bHRzIHRvIGZhbHNlLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbG9hZE9ubHlNYXRlcmlhbHMgPSBmYWxzZTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIElmIHRydWUsIGRvIG5vdCBsb2FkIGFueSBtYXRlcmlhbHMgZGVmaW5lZCBpbiB0aGUgZmlsZS4gRGVmYXVsdHMgdG8gZmFsc2UuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBza2lwTWF0ZXJpYWxzID0gZmFsc2U7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJZiB0cnVlLCBsb2FkIHRoZSBjb2xvciAoZ2FtbWEgZW5jb2RlZCkgdGV4dHVyZXMgaW50byBzUkdCIGJ1ZmZlcnMgKGlmIHN1cHBvcnRlZCBieSB0aGUgR1BVKSwgd2hpY2ggd2lsbCB5aWVsZCBtb3JlIGFjY3VyYXRlIHJlc3VsdHMgd2hlbiBzYW1wbGluZyB0aGUgdGV4dHVyZS4gRGVmYXVsdHMgdG8gdHJ1ZS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHVzZVNSR0JCdWZmZXJzID0gdHJ1ZTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFdoZW4gbG9hZGluZyBnbFRGIGFuaW1hdGlvbnMsIHdoaWNoIGFyZSBkZWZpbmVkIGluIHNlY29uZHMsIHRhcmdldCB0aGVtIHRvIHRoaXMgRlBTLiBEZWZhdWx0cyB0byA2MC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHRhcmdldEZwcyA9IDYwO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVmaW5lcyBpZiB0aGUgbG9hZGVyIHNob3VsZCBhbHdheXMgY29tcHV0ZSB0aGUgbmVhcmVzdCBjb21tb24gYW5jZXN0b3Igb2YgdGhlIHNrZWxldG9uIGpvaW50cyBpbnN0ZWFkIG9mIHVzaW5nIGBza2luLnNrZWxldG9uYC4gRGVmYXVsdHMgdG8gZmFsc2UuXHJcbiAgICAgKiBTZXQgdGhpcyB0byB0cnVlIGlmIGxvYWRpbmcgYXNzZXRzIHdpdGggaW52YWxpZCBgc2tpbi5za2VsZXRvbmAgdmFsdWVzLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYWx3YXlzQ29tcHV0ZVNrZWxldG9uUm9vdE5vZGUgPSBmYWxzZTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIElmIHRydWUsIHRoZSBsb2FkZXIgd2lsbCBkZXJpdmUgdGhlIG5hbWUgZm9yIEJhYnlsb24gdGV4dHVyZXMgZnJvbSB0aGUgZ2xURiB0ZXh0dXJlIG5hbWUsIGltYWdlIG5hbWUsIG9yIGltYWdlIHVybC4gRGVmYXVsdHMgdG8gZmFsc2UuXHJcbiAgICAgKiBOb3RlIHRoYXQgaXQgaXMgcG9zc2libGUgZm9yIG11bHRpcGxlIEJhYnlsb24gdGV4dHVyZXMgdG8gc2hhcmUgdGhlIHNhbWUgbmFtZSB3aGVuIHRoZSBCYWJ5bG9uIHRleHR1cmVzIGxvYWQgZnJvbSB0aGUgc2FtZSBnbFRGIHRleHR1cmUgb3IgaW1hZ2UuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyB1c2VHbHRmVGV4dHVyZU5hbWVzID0gZmFsc2U7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBGdW5jdGlvbiBjYWxsZWQgYmVmb3JlIGxvYWRpbmcgYSB1cmwgcmVmZXJlbmNlZCBieSB0aGUgYXNzZXQuXHJcbiAgICAgKiBAcGFyYW0gdXJsIHVybCByZWZlcmVuY2VkIGJ5IHRoZSBhc3NldFxyXG4gICAgICogQHJldHVybnMgQXN5bmMgdXJsIHRvIGxvYWRcclxuICAgICAqL1xyXG4gICAgcHVibGljIHByZXByb2Nlc3NVcmxBc3luYyA9ICh1cmw6IHN0cmluZykgPT4gUHJvbWlzZS5yZXNvbHZlKHVybCk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWZpbmVzIHRoZSBub2RlIHRvIHVzZSBhcyB0aGUgcm9vdCBvZiB0aGUgaGllcmFyY2h5IHdoZW4gbG9hZGluZyB0aGUgc2NlbmUgKGRlZmF1bHQ6IHVuZGVmaW5lZCkuIElmIG5vdCBkZWZpbmVkLCBhIHJvb3Qgbm9kZSB3aWxsIGJlIGF1dG9tYXRpY2FsbHkgY3JlYXRlZC5cclxuICAgICAqIFlvdSBjYW4gYWxzbyBwYXNzIG51bGwgaWYgeW91IGRvbid0IHdhbnQgYSByb290IG5vZGUgdG8gYmUgY3JlYXRlZC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGN1c3RvbVJvb3ROb2RlPzogTnVsbGFibGU8VHJhbnNmb3JtTm9kZT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsYmFjayByYWlzZWQgd2hlbiB0aGUgbG9hZGVyIGNyZWF0ZXMgYSBtZXNoIGFmdGVyIHBhcnNpbmcgdGhlIGdsVEYgcHJvcGVydGllcyBvZiB0aGUgbWVzaC5cclxuICAgICAqIE5vdGUgdGhhdCB0aGUgY2FsbGJhY2sgaXMgY2FsbGVkIGFzIHNvb24gYXMgdGhlIG1lc2ggb2JqZWN0IGlzIGNyZWF0ZWQsIG1lYW5pbmcgc29tZSBkYXRhIG1heSBub3QgaGF2ZSBiZWVuIHNldHVwIHlldCBmb3IgdGhpcyBtZXNoICh2ZXJ0ZXggZGF0YSwgbW9ycGggdGFyZ2V0cywgbWF0ZXJpYWwsIC4uLilcclxuICAgICAqL1xyXG4gICAgcHVibGljIGFic3RyYWN0IG9uTWVzaExvYWRlZD86ICgobWVzaDogQWJzdHJhY3RNZXNoKSA9PiB2b2lkKSB8IHVuZGVmaW5lZDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENhbGxiYWNrIHJhaXNlZCB3aGVuIHRoZSBsb2FkZXIgY3JlYXRlcyBhIHNraW4gYWZ0ZXIgcGFyc2luZyB0aGUgZ2xURiBwcm9wZXJ0aWVzIG9mIHRoZSBza2luIG5vZGUuXHJcbiAgICAgKiBAc2VlIGh0dHBzOi8vZG9jLmJhYnlsb25qcy5jb20vZmVhdHVyZXMvZmVhdHVyZXNEZWVwRGl2ZS9pbXBvcnRlcnMvZ2xURi9nbFRGU2tpbm5pbmcjaWdub3JpbmctdGhlLXRyYW5zZm9ybS1vZi10aGUtc2tpbm5lZC1tZXNoXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhYnN0cmFjdCBvblNraW5Mb2FkZWQ/OiAoKG5vZGU6IFRyYW5zZm9ybU5vZGUsIHNraW5uZWROb2RlOiBUcmFuc2Zvcm1Ob2RlKSA9PiB2b2lkKSB8IHVuZGVmaW5lZDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENhbGxiYWNrIHJhaXNlZCB3aGVuIHRoZSBsb2FkZXIgY3JlYXRlcyBhIHRleHR1cmUgYWZ0ZXIgcGFyc2luZyB0aGUgZ2xURiBwcm9wZXJ0aWVzIG9mIHRoZSB0ZXh0dXJlLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYWJzdHJhY3Qgb25UZXh0dXJlTG9hZGVkPzogKCh0ZXh0dXJlOiBCYXNlVGV4dHVyZSkgPT4gdm9pZCkgfCB1bmRlZmluZWQ7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsYmFjayByYWlzZWQgd2hlbiB0aGUgbG9hZGVyIGNyZWF0ZXMgYSBtYXRlcmlhbCBhZnRlciBwYXJzaW5nIHRoZSBnbFRGIHByb3BlcnRpZXMgb2YgdGhlIG1hdGVyaWFsLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYWJzdHJhY3Qgb25NYXRlcmlhbExvYWRlZD86ICgobWF0ZXJpYWw6IE1hdGVyaWFsKSA9PiB2b2lkKSB8IHVuZGVmaW5lZDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENhbGxiYWNrIHJhaXNlZCB3aGVuIHRoZSBsb2FkZXIgY3JlYXRlcyBhIGNhbWVyYSBhZnRlciBwYXJzaW5nIHRoZSBnbFRGIHByb3BlcnRpZXMgb2YgdGhlIGNhbWVyYS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGFic3RyYWN0IG9uQ2FtZXJhTG9hZGVkPzogKChjYW1lcmE6IENhbWVyYSkgPT4gdm9pZCkgfCB1bmRlZmluZWQ7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWZpbmVzIG9wdGlvbnMgZm9yIGdsVEYgZXh0ZW5zaW9ucy5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGV4dGVuc2lvbk9wdGlvbnM6IHtcclxuICAgICAgICAvLyBOT1RFOiBUaGlzIHR5cGUgaXMgZG9pbmcgdHdvIHRoaW5nczpcclxuICAgICAgICAvLyAxLiBBZGRpbmcgYW4gaW1wbGljaXQgJ2VuYWJsZWQnIHByb3BlcnR5IHRvIHRoZSBvcHRpb25zIGZvciBlYWNoIGV4dGVuc2lvbi5cclxuICAgICAgICAvLyAyLiBDcmVhdGluZyBhIG1hcHBlZCB0eXBlIG9mIGFsbCB0aGUgb3B0aW9ucyBvZiBhbGwgdGhlIGV4dGVuc2lvbnMgdG8gbWFrZSBpdCBqdXN0IGxvb2sgbGlrZSBhIGNvbnNvbGlkYXRlZCBwbGFpbiBvYmplY3QgaW4gaW50ZWxsaXNlbnNlIGZvciB0aGUgdXNlci5cclxuICAgICAgICBbRXh0ZW5zaW9uIGluIGtleW9mIEdMVEZMb2FkZXJFeHRlbnNpb25PcHRpb25zXT86IHtcclxuICAgICAgICAgICAgW09wdGlvbiBpbiBrZXlvZiBEZWZhdWx0RXh0ZW5zaW9uT3B0aW9uczxHTFRGTG9hZGVyRXh0ZW5zaW9uT3B0aW9uc1tFeHRlbnNpb25dPl06IERlZmF1bHRFeHRlbnNpb25PcHRpb25zPEdMVEZMb2FkZXJFeHRlbnNpb25PcHRpb25zW0V4dGVuc2lvbl0+W09wdGlvbl07XHJcbiAgICAgICAgfTtcclxuICAgIH0gPSB7fTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEZpbGUgbG9hZGVyIGZvciBsb2FkaW5nIGdsVEYgZmlsZXMgaW50byBhIHNjZW5lLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEdMVEZGaWxlTG9hZGVyIGV4dGVuZHMgR0xURkxvYWRlck9wdGlvbnMgaW1wbGVtZW50cyBJRGlzcG9zYWJsZSwgSVNjZW5lTG9hZGVyUGx1Z2luQXN5bmMsIElTY2VuZUxvYWRlclBsdWdpbkZhY3Rvcnkge1xyXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBfQ3JlYXRlR0xURjFMb2FkZXI6IChwYXJlbnQ6IEdMVEZGaWxlTG9hZGVyKSA9PiBJR0xURkxvYWRlcjtcclxuXHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBwdWJsaWMgc3RhdGljIF9DcmVhdGVHTFRGMkxvYWRlcjogKHBhcmVudDogR0xURkZpbGVMb2FkZXIpID0+IElHTFRGTG9hZGVyO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhIG5ldyBnbFRGIGZpbGUgbG9hZGVyLlxyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgVGhlIG9wdGlvbnMgZm9yIHRoZSBsb2FkZXJcclxuICAgICAqL1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKG9wdGlvbnM/OiBQYXJ0aWFsPFJlYWRvbmx5PEdMVEZMb2FkZXJPcHRpb25zPj4pIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuY29weUZyb20ob3B0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIC8vIEJlZ2luIENvbW1vbiBvcHRpb25zXHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmFpc2VkIHdoZW4gdGhlIGFzc2V0IGhhcyBiZWVuIHBhcnNlZFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgb25QYXJzZWRPYnNlcnZhYmxlID0gbmV3IE9ic2VydmFibGU8SUdMVEZMb2FkZXJEYXRhPigpO1xyXG5cclxuICAgIHByaXZhdGUgX29uUGFyc2VkT2JzZXJ2ZXI6IE51bGxhYmxlPE9ic2VydmVyPElHTFRGTG9hZGVyRGF0YT4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmFpc2VkIHdoZW4gdGhlIGFzc2V0IGhhcyBiZWVuIHBhcnNlZFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IG9uUGFyc2VkKGNhbGxiYWNrOiAoKGxvYWRlckRhdGE6IElHTFRGTG9hZGVyRGF0YSkgPT4gdm9pZCkgfCB1bmRlZmluZWQpIHtcclxuICAgICAgICBpZiAodGhpcy5fb25QYXJzZWRPYnNlcnZlcikge1xyXG4gICAgICAgICAgICB0aGlzLm9uUGFyc2VkT2JzZXJ2YWJsZS5yZW1vdmUodGhpcy5fb25QYXJzZWRPYnNlcnZlcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjYWxsYmFjaykge1xyXG4gICAgICAgICAgICB0aGlzLl9vblBhcnNlZE9ic2VydmVyID0gdGhpcy5vblBhcnNlZE9ic2VydmFibGUuYWRkKGNhbGxiYWNrKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAvLyBFbmQgQ29tbW9uIG9wdGlvbnNcclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS1cclxuICAgIC8vIEJlZ2luIFYxIG9wdGlvbnNcclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldCB0aGlzIHByb3BlcnR5IHRvIGZhbHNlIHRvIGRpc2FibGUgaW5jcmVtZW50YWwgbG9hZGluZyB3aGljaCBkZWxheXMgdGhlIGxvYWRlciBmcm9tIGNhbGxpbmcgdGhlIHN1Y2Nlc3MgY2FsbGJhY2sgdW50aWwgYWZ0ZXIgbG9hZGluZyB0aGUgbWVzaGVzIGFuZCBzaGFkZXJzLlxyXG4gICAgICogVGV4dHVyZXMgYWx3YXlzIGxvYWRzIGFzeW5jaHJvbm91c2x5LiBGb3IgZXhhbXBsZSwgdGhlIHN1Y2Nlc3MgY2FsbGJhY2sgY2FuIGNvbXB1dGUgdGhlIGJvdW5kaW5nIGluZm9ybWF0aW9uIG9mIHRoZSBsb2FkZWQgbWVzaGVzIHdoZW4gaW5jcmVtZW50YWwgbG9hZGluZyBpcyBkaXNhYmxlZC5cclxuICAgICAqIERlZmF1bHRzIHRvIHRydWUuXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBJbmNyZW1lbnRhbExvYWRpbmcgPSB0cnVlO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0IHRoaXMgcHJvcGVydHkgdG8gdHJ1ZSBpbiBvcmRlciB0byB3b3JrIHdpdGggaG9tb2dlbmVvdXMgY29vcmRpbmF0ZXMsIGF2YWlsYWJsZSB3aXRoIHNvbWUgY29udmVydGVycyBhbmQgZXhwb3J0ZXJzLlxyXG4gICAgICogRGVmYXVsdHMgdG8gZmFsc2UuIFNlZSBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9Ib21vZ2VuZW91c19jb29yZGluYXRlcy5cclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIEhvbW9nZW5lb3VzQ29vcmRpbmF0ZXMgPSBmYWxzZTtcclxuXHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLVxyXG4gICAgLy8gRW5kIFYxIG9wdGlvbnNcclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBPYnNlcnZhYmxlIHJhaXNlZCB3aGVuIHRoZSBsb2FkZXIgY3JlYXRlcyBhIG1lc2ggYWZ0ZXIgcGFyc2luZyB0aGUgZ2xURiBwcm9wZXJ0aWVzIG9mIHRoZSBtZXNoLlxyXG4gICAgICogTm90ZSB0aGF0IHRoZSBvYnNlcnZhYmxlIGlzIHJhaXNlZCBhcyBzb29uIGFzIHRoZSBtZXNoIG9iamVjdCBpcyBjcmVhdGVkLCBtZWFuaW5nIHNvbWUgZGF0YSBtYXkgbm90IGhhdmUgYmVlbiBzZXR1cCB5ZXQgZm9yIHRoaXMgbWVzaCAodmVydGV4IGRhdGEsIG1vcnBoIHRhcmdldHMsIG1hdGVyaWFsLCAuLi4pXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWFkb25seSBvbk1lc2hMb2FkZWRPYnNlcnZhYmxlID0gbmV3IE9ic2VydmFibGU8QWJzdHJhY3RNZXNoPigpO1xyXG5cclxuICAgIHByaXZhdGUgX29uTWVzaExvYWRlZE9ic2VydmVyOiBOdWxsYWJsZTxPYnNlcnZlcjxBYnN0cmFjdE1lc2g+PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENhbGxiYWNrIHJhaXNlZCB3aGVuIHRoZSBsb2FkZXIgY3JlYXRlcyBhIG1lc2ggYWZ0ZXIgcGFyc2luZyB0aGUgZ2xURiBwcm9wZXJ0aWVzIG9mIHRoZSBtZXNoLlxyXG4gICAgICogTm90ZSB0aGF0IHRoZSBjYWxsYmFjayBpcyBjYWxsZWQgYXMgc29vbiBhcyB0aGUgbWVzaCBvYmplY3QgaXMgY3JlYXRlZCwgbWVhbmluZyBzb21lIGRhdGEgbWF5IG5vdCBoYXZlIGJlZW4gc2V0dXAgeWV0IGZvciB0aGlzIG1lc2ggKHZlcnRleCBkYXRhLCBtb3JwaCB0YXJnZXRzLCBtYXRlcmlhbCwgLi4uKVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IG9uTWVzaExvYWRlZChjYWxsYmFjazogKChtZXNoOiBBYnN0cmFjdE1lc2gpID0+IHZvaWQpIHwgdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX29uTWVzaExvYWRlZE9ic2VydmVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMub25NZXNoTG9hZGVkT2JzZXJ2YWJsZS5yZW1vdmUodGhpcy5fb25NZXNoTG9hZGVkT2JzZXJ2ZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgdGhpcy5fb25NZXNoTG9hZGVkT2JzZXJ2ZXIgPSB0aGlzLm9uTWVzaExvYWRlZE9ic2VydmFibGUuYWRkKGNhbGxiYWNrKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBPYnNlcnZhYmxlIHJhaXNlZCB3aGVuIHRoZSBsb2FkZXIgY3JlYXRlcyBhIHNraW4gYWZ0ZXIgcGFyc2luZyB0aGUgZ2xURiBwcm9wZXJ0aWVzIG9mIHRoZSBza2luIG5vZGUuXHJcbiAgICAgKiBAc2VlIGh0dHBzOi8vZG9jLmJhYnlsb25qcy5jb20vZmVhdHVyZXMvZmVhdHVyZXNEZWVwRGl2ZS9pbXBvcnRlcnMvZ2xURi9nbFRGU2tpbm5pbmcjaWdub3JpbmctdGhlLXRyYW5zZm9ybS1vZi10aGUtc2tpbm5lZC1tZXNoXHJcbiAgICAgKiBAcGFyYW0gbm9kZSAtIHRoZSB0cmFuc2Zvcm0gbm9kZSB0aGF0IGNvcnJlc3BvbmRzIHRvIHRoZSBvcmlnaW5hbCBnbFRGIHNraW4gbm9kZSB1c2VkIGZvciBhbmltYXRpb25zXHJcbiAgICAgKiBAcGFyYW0gc2tpbm5lZE5vZGUgLSB0aGUgdHJhbnNmb3JtIG5vZGUgdGhhdCBpcyB0aGUgc2tpbm5lZCBtZXNoIGl0c2VsZiBvciB0aGUgcGFyZW50IG9mIHRoZSBza2lubmVkIG1lc2hlc1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgb25Ta2luTG9hZGVkT2JzZXJ2YWJsZSA9IG5ldyBPYnNlcnZhYmxlPHsgbm9kZTogVHJhbnNmb3JtTm9kZTsgc2tpbm5lZE5vZGU6IFRyYW5zZm9ybU5vZGUgfT4oKTtcclxuXHJcbiAgICBwcml2YXRlIF9vblNraW5Mb2FkZWRPYnNlcnZlcjogTnVsbGFibGU8T2JzZXJ2ZXI8eyBub2RlOiBUcmFuc2Zvcm1Ob2RlOyBza2lubmVkTm9kZTogVHJhbnNmb3JtTm9kZSB9Pj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsYmFjayByYWlzZWQgd2hlbiB0aGUgbG9hZGVyIGNyZWF0ZXMgYSBza2luIGFmdGVyIHBhcnNpbmcgdGhlIGdsVEYgcHJvcGVydGllcyBvZiB0aGUgc2tpbiBub2RlLlxyXG4gICAgICogQHNlZSBodHRwczovL2RvYy5iYWJ5bG9uanMuY29tL2ZlYXR1cmVzL2ZlYXR1cmVzRGVlcERpdmUvaW1wb3J0ZXJzL2dsVEYvZ2xURlNraW5uaW5nI2lnbm9yaW5nLXRoZS10cmFuc2Zvcm0tb2YtdGhlLXNraW5uZWQtbWVzaFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IG9uU2tpbkxvYWRlZChjYWxsYmFjazogKChub2RlOiBUcmFuc2Zvcm1Ob2RlLCBza2lubmVkTm9kZTogVHJhbnNmb3JtTm9kZSkgPT4gdm9pZCkgfCB1bmRlZmluZWQpIHtcclxuICAgICAgICBpZiAodGhpcy5fb25Ta2luTG9hZGVkT2JzZXJ2ZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5vblNraW5Mb2FkZWRPYnNlcnZhYmxlLnJlbW92ZSh0aGlzLl9vblNraW5Mb2FkZWRPYnNlcnZlcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjYWxsYmFjaykge1xyXG4gICAgICAgICAgICB0aGlzLl9vblNraW5Mb2FkZWRPYnNlcnZlciA9IHRoaXMub25Ta2luTG9hZGVkT2JzZXJ2YWJsZS5hZGQoKGRhdGEpID0+IGNhbGxiYWNrKGRhdGEubm9kZSwgZGF0YS5za2lubmVkTm9kZSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIE9ic2VydmFibGUgcmFpc2VkIHdoZW4gdGhlIGxvYWRlciBjcmVhdGVzIGEgdGV4dHVyZSBhZnRlciBwYXJzaW5nIHRoZSBnbFRGIHByb3BlcnRpZXMgb2YgdGhlIHRleHR1cmUuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWFkb25seSBvblRleHR1cmVMb2FkZWRPYnNlcnZhYmxlID0gbmV3IE9ic2VydmFibGU8QmFzZVRleHR1cmU+KCk7XHJcblxyXG4gICAgcHJpdmF0ZSBfb25UZXh0dXJlTG9hZGVkT2JzZXJ2ZXI6IE51bGxhYmxlPE9ic2VydmVyPEJhc2VUZXh0dXJlPj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsYmFjayByYWlzZWQgd2hlbiB0aGUgbG9hZGVyIGNyZWF0ZXMgYSB0ZXh0dXJlIGFmdGVyIHBhcnNpbmcgdGhlIGdsVEYgcHJvcGVydGllcyBvZiB0aGUgdGV4dHVyZS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldCBvblRleHR1cmVMb2FkZWQoY2FsbGJhY2s6ICgodGV4dHVyZTogQmFzZVRleHR1cmUpID0+IHZvaWQpIHwgdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX29uVGV4dHVyZUxvYWRlZE9ic2VydmVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMub25UZXh0dXJlTG9hZGVkT2JzZXJ2YWJsZS5yZW1vdmUodGhpcy5fb25UZXh0dXJlTG9hZGVkT2JzZXJ2ZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgdGhpcy5fb25UZXh0dXJlTG9hZGVkT2JzZXJ2ZXIgPSB0aGlzLm9uVGV4dHVyZUxvYWRlZE9ic2VydmFibGUuYWRkKGNhbGxiYWNrKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBPYnNlcnZhYmxlIHJhaXNlZCB3aGVuIHRoZSBsb2FkZXIgY3JlYXRlcyBhIG1hdGVyaWFsIGFmdGVyIHBhcnNpbmcgdGhlIGdsVEYgcHJvcGVydGllcyBvZiB0aGUgbWF0ZXJpYWwuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWFkb25seSBvbk1hdGVyaWFsTG9hZGVkT2JzZXJ2YWJsZSA9IG5ldyBPYnNlcnZhYmxlPE1hdGVyaWFsPigpO1xyXG5cclxuICAgIHByaXZhdGUgX29uTWF0ZXJpYWxMb2FkZWRPYnNlcnZlcjogTnVsbGFibGU8T2JzZXJ2ZXI8TWF0ZXJpYWw+PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENhbGxiYWNrIHJhaXNlZCB3aGVuIHRoZSBsb2FkZXIgY3JlYXRlcyBhIG1hdGVyaWFsIGFmdGVyIHBhcnNpbmcgdGhlIGdsVEYgcHJvcGVydGllcyBvZiB0aGUgbWF0ZXJpYWwuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgb25NYXRlcmlhbExvYWRlZChjYWxsYmFjazogKChtYXRlcmlhbDogTWF0ZXJpYWwpID0+IHZvaWQpIHwgdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX29uTWF0ZXJpYWxMb2FkZWRPYnNlcnZlcikge1xyXG4gICAgICAgICAgICB0aGlzLm9uTWF0ZXJpYWxMb2FkZWRPYnNlcnZhYmxlLnJlbW92ZSh0aGlzLl9vbk1hdGVyaWFsTG9hZGVkT2JzZXJ2ZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgdGhpcy5fb25NYXRlcmlhbExvYWRlZE9ic2VydmVyID0gdGhpcy5vbk1hdGVyaWFsTG9hZGVkT2JzZXJ2YWJsZS5hZGQoY2FsbGJhY2spO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIE9ic2VydmFibGUgcmFpc2VkIHdoZW4gdGhlIGxvYWRlciBjcmVhdGVzIGEgY2FtZXJhIGFmdGVyIHBhcnNpbmcgdGhlIGdsVEYgcHJvcGVydGllcyBvZiB0aGUgY2FtZXJhLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgb25DYW1lcmFMb2FkZWRPYnNlcnZhYmxlID0gbmV3IE9ic2VydmFibGU8Q2FtZXJhPigpO1xyXG5cclxuICAgIHByaXZhdGUgX29uQ2FtZXJhTG9hZGVkT2JzZXJ2ZXI6IE51bGxhYmxlPE9ic2VydmVyPENhbWVyYT4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2FsbGJhY2sgcmFpc2VkIHdoZW4gdGhlIGxvYWRlciBjcmVhdGVzIGEgY2FtZXJhIGFmdGVyIHBhcnNpbmcgdGhlIGdsVEYgcHJvcGVydGllcyBvZiB0aGUgY2FtZXJhLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IG9uQ2FtZXJhTG9hZGVkKGNhbGxiYWNrOiAoKGNhbWVyYTogQ2FtZXJhKSA9PiB2b2lkKSB8IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9vbkNhbWVyYUxvYWRlZE9ic2VydmVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMub25DYW1lcmFMb2FkZWRPYnNlcnZhYmxlLnJlbW92ZSh0aGlzLl9vbkNhbWVyYUxvYWRlZE9ic2VydmVyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX29uQ2FtZXJhTG9hZGVkT2JzZXJ2ZXIgPSB0aGlzLm9uQ2FtZXJhTG9hZGVkT2JzZXJ2YWJsZS5hZGQoY2FsbGJhY2spO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIE9ic2VydmFibGUgcmFpc2VkIHdoZW4gdGhlIGFzc2V0IGlzIGNvbXBsZXRlbHkgbG9hZGVkLCBpbW1lZGlhdGVseSBiZWZvcmUgdGhlIGxvYWRlciBpcyBkaXNwb3NlZC5cclxuICAgICAqIEZvciBhc3NldHMgd2l0aCBMT0RzLCByYWlzZWQgd2hlbiBhbGwgb2YgdGhlIExPRHMgYXJlIGNvbXBsZXRlLlxyXG4gICAgICogRm9yIGFzc2V0cyB3aXRob3V0IExPRHMsIHJhaXNlZCB3aGVuIHRoZSBtb2RlbCBpcyBjb21wbGV0ZSwgaW1tZWRpYXRlbHkgYWZ0ZXIgdGhlIGxvYWRlciByZXNvbHZlcyB0aGUgcmV0dXJuZWQgcHJvbWlzZS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlYWRvbmx5IG9uQ29tcGxldGVPYnNlcnZhYmxlID0gbmV3IE9ic2VydmFibGU8dm9pZD4oKTtcclxuXHJcbiAgICBwcml2YXRlIF9vbkNvbXBsZXRlT2JzZXJ2ZXI6IE51bGxhYmxlPE9ic2VydmVyPHZvaWQ+PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENhbGxiYWNrIHJhaXNlZCB3aGVuIHRoZSBhc3NldCBpcyBjb21wbGV0ZWx5IGxvYWRlZCwgaW1tZWRpYXRlbHkgYmVmb3JlIHRoZSBsb2FkZXIgaXMgZGlzcG9zZWQuXHJcbiAgICAgKiBGb3IgYXNzZXRzIHdpdGggTE9EcywgcmFpc2VkIHdoZW4gYWxsIG9mIHRoZSBMT0RzIGFyZSBjb21wbGV0ZS5cclxuICAgICAqIEZvciBhc3NldHMgd2l0aG91dCBMT0RzLCByYWlzZWQgd2hlbiB0aGUgbW9kZWwgaXMgY29tcGxldGUsIGltbWVkaWF0ZWx5IGFmdGVyIHRoZSBsb2FkZXIgcmVzb2x2ZXMgdGhlIHJldHVybmVkIHByb21pc2UuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgb25Db21wbGV0ZShjYWxsYmFjazogKCkgPT4gdm9pZCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9vbkNvbXBsZXRlT2JzZXJ2ZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5vbkNvbXBsZXRlT2JzZXJ2YWJsZS5yZW1vdmUodGhpcy5fb25Db21wbGV0ZU9ic2VydmVyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fb25Db21wbGV0ZU9ic2VydmVyID0gdGhpcy5vbkNvbXBsZXRlT2JzZXJ2YWJsZS5hZGQoY2FsbGJhY2spO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogT2JzZXJ2YWJsZSByYWlzZWQgd2hlbiBhbiBlcnJvciBvY2N1cnMuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWFkb25seSBvbkVycm9yT2JzZXJ2YWJsZSA9IG5ldyBPYnNlcnZhYmxlPGFueT4oKTtcclxuXHJcbiAgICBwcml2YXRlIF9vbkVycm9yT2JzZXJ2ZXI6IE51bGxhYmxlPE9ic2VydmVyPGFueT4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2FsbGJhY2sgcmFpc2VkIHdoZW4gYW4gZXJyb3Igb2NjdXJzLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IG9uRXJyb3IoY2FsbGJhY2s6IChyZWFzb246IGFueSkgPT4gdm9pZCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9vbkVycm9yT2JzZXJ2ZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5vbkVycm9yT2JzZXJ2YWJsZS5yZW1vdmUodGhpcy5fb25FcnJvck9ic2VydmVyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fb25FcnJvck9ic2VydmVyID0gdGhpcy5vbkVycm9yT2JzZXJ2YWJsZS5hZGQoY2FsbGJhY2spO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogT2JzZXJ2YWJsZSByYWlzZWQgYWZ0ZXIgdGhlIGxvYWRlciBpcyBkaXNwb3NlZC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlYWRvbmx5IG9uRGlzcG9zZU9ic2VydmFibGUgPSBuZXcgT2JzZXJ2YWJsZTx2b2lkPigpO1xyXG5cclxuICAgIHByaXZhdGUgX29uRGlzcG9zZU9ic2VydmVyOiBOdWxsYWJsZTxPYnNlcnZlcjx2b2lkPj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsYmFjayByYWlzZWQgYWZ0ZXIgdGhlIGxvYWRlciBpcyBkaXNwb3NlZC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldCBvbkRpc3Bvc2UoY2FsbGJhY2s6ICgpID0+IHZvaWQpIHtcclxuICAgICAgICBpZiAodGhpcy5fb25EaXNwb3NlT2JzZXJ2ZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5vbkRpc3Bvc2VPYnNlcnZhYmxlLnJlbW92ZSh0aGlzLl9vbkRpc3Bvc2VPYnNlcnZlcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX29uRGlzcG9zZU9ic2VydmVyID0gdGhpcy5vbkRpc3Bvc2VPYnNlcnZhYmxlLmFkZChjYWxsYmFjayk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBPYnNlcnZhYmxlIHJhaXNlZCBhZnRlciBhIGxvYWRlciBleHRlbnNpb24gaXMgY3JlYXRlZC5cclxuICAgICAqIFNldCBhZGRpdGlvbmFsIG9wdGlvbnMgZm9yIGEgbG9hZGVyIGV4dGVuc2lvbiBpbiB0aGlzIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgb25FeHRlbnNpb25Mb2FkZWRPYnNlcnZhYmxlID0gbmV3IE9ic2VydmFibGU8SUdMVEZMb2FkZXJFeHRlbnNpb24+KCk7XHJcblxyXG4gICAgcHJpdmF0ZSBfb25FeHRlbnNpb25Mb2FkZWRPYnNlcnZlcjogTnVsbGFibGU8T2JzZXJ2ZXI8SUdMVEZMb2FkZXJFeHRlbnNpb24+PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENhbGxiYWNrIHJhaXNlZCBhZnRlciBhIGxvYWRlciBleHRlbnNpb24gaXMgY3JlYXRlZC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldCBvbkV4dGVuc2lvbkxvYWRlZChjYWxsYmFjazogKGV4dGVuc2lvbjogSUdMVEZMb2FkZXJFeHRlbnNpb24pID0+IHZvaWQpIHtcclxuICAgICAgICBpZiAodGhpcy5fb25FeHRlbnNpb25Mb2FkZWRPYnNlcnZlcikge1xyXG4gICAgICAgICAgICB0aGlzLm9uRXh0ZW5zaW9uTG9hZGVkT2JzZXJ2YWJsZS5yZW1vdmUodGhpcy5fb25FeHRlbnNpb25Mb2FkZWRPYnNlcnZlcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX29uRXh0ZW5zaW9uTG9hZGVkT2JzZXJ2ZXIgPSB0aGlzLm9uRXh0ZW5zaW9uTG9hZGVkT2JzZXJ2YWJsZS5hZGQoY2FsbGJhY2spO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVmaW5lcyBpZiB0aGUgbG9hZGVyIGxvZ2dpbmcgaXMgZW5hYmxlZC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBsb2dnaW5nRW5hYmxlZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbG9nZ2luZ0VuYWJsZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCBsb2dnaW5nRW5hYmxlZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIGlmICh0aGlzLl9sb2dnaW5nRW5hYmxlZCA9PT0gdmFsdWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fbG9nZ2luZ0VuYWJsZWQgPSB2YWx1ZTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX2xvZ2dpbmdFbmFibGVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2xvZyA9IHRoaXMuX2xvZ0VuYWJsZWQ7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fbG9nID0gdGhpcy5fbG9nRGlzYWJsZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVmaW5lcyBpZiB0aGUgbG9hZGVyIHNob3VsZCBjYXB0dXJlIHBlcmZvcm1hbmNlIGNvdW50ZXJzLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IGNhcHR1cmVQZXJmb3JtYW5jZUNvdW50ZXJzKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jYXB0dXJlUGVyZm9ybWFuY2VDb3VudGVycztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IGNhcHR1cmVQZXJmb3JtYW5jZUNvdW50ZXJzKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2NhcHR1cmVQZXJmb3JtYW5jZUNvdW50ZXJzID09PSB2YWx1ZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9jYXB0dXJlUGVyZm9ybWFuY2VDb3VudGVycyA9IHZhbHVlO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5fY2FwdHVyZVBlcmZvcm1hbmNlQ291bnRlcnMpIHtcclxuICAgICAgICAgICAgdGhpcy5fc3RhcnRQZXJmb3JtYW5jZUNvdW50ZXIgPSB0aGlzLl9zdGFydFBlcmZvcm1hbmNlQ291bnRlckVuYWJsZWQ7XHJcbiAgICAgICAgICAgIHRoaXMuX2VuZFBlcmZvcm1hbmNlQ291bnRlciA9IHRoaXMuX2VuZFBlcmZvcm1hbmNlQ291bnRlckVuYWJsZWQ7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fc3RhcnRQZXJmb3JtYW5jZUNvdW50ZXIgPSB0aGlzLl9zdGFydFBlcmZvcm1hbmNlQ291bnRlckRpc2FibGVkO1xyXG4gICAgICAgICAgICB0aGlzLl9lbmRQZXJmb3JtYW5jZUNvdW50ZXIgPSB0aGlzLl9lbmRQZXJmb3JtYW5jZUNvdW50ZXJEaXNhYmxlZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWZpbmVzIGlmIHRoZSBsb2FkZXIgc2hvdWxkIHZhbGlkYXRlIHRoZSBhc3NldC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHZhbGlkYXRlID0gZmFsc2U7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBPYnNlcnZhYmxlIHJhaXNlZCBhZnRlciB2YWxpZGF0aW9uIHdoZW4gdmFsaWRhdGUgaXMgc2V0IHRvIHRydWUuIFRoZSBldmVudCBkYXRhIGlzIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWFkb25seSBvblZhbGlkYXRlZE9ic2VydmFibGUgPSBuZXcgT2JzZXJ2YWJsZTxHTFRGMi5JR0xURlZhbGlkYXRpb25SZXN1bHRzPigpO1xyXG5cclxuICAgIHByaXZhdGUgX29uVmFsaWRhdGVkT2JzZXJ2ZXI6IE51bGxhYmxlPE9ic2VydmVyPEdMVEYyLklHTFRGVmFsaWRhdGlvblJlc3VsdHM+PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENhbGxiYWNrIHJhaXNlZCBhZnRlciBhIGxvYWRlciBleHRlbnNpb24gaXMgY3JlYXRlZC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldCBvblZhbGlkYXRlZChjYWxsYmFjazogKHJlc3VsdHM6IEdMVEYyLklHTFRGVmFsaWRhdGlvblJlc3VsdHMpID0+IHZvaWQpIHtcclxuICAgICAgICBpZiAodGhpcy5fb25WYWxpZGF0ZWRPYnNlcnZlcikge1xyXG4gICAgICAgICAgICB0aGlzLm9uVmFsaWRhdGVkT2JzZXJ2YWJsZS5yZW1vdmUodGhpcy5fb25WYWxpZGF0ZWRPYnNlcnZlcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX29uVmFsaWRhdGVkT2JzZXJ2ZXIgPSB0aGlzLm9uVmFsaWRhdGVkT2JzZXJ2YWJsZS5hZGQoY2FsbGJhY2spO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2xvYWRlcjogTnVsbGFibGU8SUdMVEZMb2FkZXI+ID0gbnVsbDtcclxuICAgIHByaXZhdGUgX3N0YXRlOiBOdWxsYWJsZTxHTFRGTG9hZGVyU3RhdGU+ID0gbnVsbDtcclxuICAgIHByaXZhdGUgX3Byb2dyZXNzQ2FsbGJhY2s/OiAoZXZlbnQ6IElTY2VuZUxvYWRlclByb2dyZXNzRXZlbnQpID0+IHZvaWQ7XHJcbiAgICBwcml2YXRlIF9yZXF1ZXN0cyA9IG5ldyBBcnJheTxJRmlsZVJlcXVlc3RJbmZvPigpO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogTmFtZSBvZiB0aGUgbG9hZGVyIChcImdsdGZcIilcclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlYWRvbmx5IG5hbWUgPSBHTFRGRmlsZUxvYWRlck1ldGFkYXRhLm5hbWU7XHJcblxyXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gICAgcHVibGljIHJlYWRvbmx5IGV4dGVuc2lvbnMgPSBHTFRGRmlsZUxvYWRlck1ldGFkYXRhLmV4dGVuc2lvbnM7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEaXNwb3NlcyB0aGUgbG9hZGVyLCByZWxlYXNlcyByZXNvdXJjZXMgZHVyaW5nIGxvYWQsIGFuZCBjYW5jZWxzIGFueSBvdXRzdGFuZGluZyByZXF1ZXN0cy5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGRpc3Bvc2UoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2xvYWRlcikge1xyXG4gICAgICAgICAgICB0aGlzLl9sb2FkZXIuZGlzcG9zZSgpO1xyXG4gICAgICAgICAgICB0aGlzLl9sb2FkZXIgPSBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChjb25zdCByZXF1ZXN0IG9mIHRoaXMuX3JlcXVlc3RzKSB7XHJcbiAgICAgICAgICAgIHJlcXVlc3QuYWJvcnQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX3JlcXVlc3RzLmxlbmd0aCA9IDA7XHJcblxyXG4gICAgICAgIGRlbGV0ZSB0aGlzLl9wcm9ncmVzc0NhbGxiYWNrO1xyXG5cclxuICAgICAgICB0aGlzLnByZXByb2Nlc3NVcmxBc3luYyA9ICh1cmwpID0+IFByb21pc2UucmVzb2x2ZSh1cmwpO1xyXG5cclxuICAgICAgICB0aGlzLm9uTWVzaExvYWRlZE9ic2VydmFibGUuY2xlYXIoKTtcclxuICAgICAgICB0aGlzLm9uU2tpbkxvYWRlZE9ic2VydmFibGUuY2xlYXIoKTtcclxuICAgICAgICB0aGlzLm9uVGV4dHVyZUxvYWRlZE9ic2VydmFibGUuY2xlYXIoKTtcclxuICAgICAgICB0aGlzLm9uTWF0ZXJpYWxMb2FkZWRPYnNlcnZhYmxlLmNsZWFyKCk7XHJcbiAgICAgICAgdGhpcy5vbkNhbWVyYUxvYWRlZE9ic2VydmFibGUuY2xlYXIoKTtcclxuICAgICAgICB0aGlzLm9uQ29tcGxldGVPYnNlcnZhYmxlLmNsZWFyKCk7XHJcbiAgICAgICAgdGhpcy5vbkV4dGVuc2lvbkxvYWRlZE9ic2VydmFibGUuY2xlYXIoKTtcclxuXHJcbiAgICAgICAgdGhpcy5vbkRpc3Bvc2VPYnNlcnZhYmxlLm5vdGlmeU9ic2VydmVycyh1bmRlZmluZWQpO1xyXG4gICAgICAgIHRoaXMub25EaXNwb3NlT2JzZXJ2YWJsZS5jbGVhcigpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBsb2FkRmlsZShcclxuICAgICAgICBzY2VuZTogU2NlbmUsXHJcbiAgICAgICAgZmlsZU9yVXJsOiBGaWxlIHwgc3RyaW5nIHwgQXJyYXlCdWZmZXJWaWV3LFxyXG4gICAgICAgIHJvb3RVcmw6IHN0cmluZyxcclxuICAgICAgICBvblN1Y2Nlc3M6IChkYXRhOiB1bmtub3duLCByZXNwb25zZVVSTD86IHN0cmluZykgPT4gdm9pZCxcclxuICAgICAgICBvblByb2dyZXNzPzogKGV2OiBJU2NlbmVMb2FkZXJQcm9ncmVzc0V2ZW50KSA9PiB2b2lkLFxyXG4gICAgICAgIHVzZUFycmF5QnVmZmVyPzogYm9vbGVhbixcclxuICAgICAgICBvbkVycm9yPzogKHJlcXVlc3Q/OiBXZWJSZXF1ZXN0LCBleGNlcHRpb24/OiBMb2FkRmlsZUVycm9yKSA9PiB2b2lkLFxyXG4gICAgICAgIG5hbWU/OiBzdHJpbmdcclxuICAgICk6IE51bGxhYmxlPElGaWxlUmVxdWVzdD4ge1xyXG4gICAgICAgIGlmIChBcnJheUJ1ZmZlci5pc1ZpZXcoZmlsZU9yVXJsKSkge1xyXG4gICAgICAgICAgICB0aGlzLl9sb2FkQmluYXJ5KHNjZW5lLCBmaWxlT3JVcmwgYXMgQXJyYXlCdWZmZXJWaWV3LCByb290VXJsLCBvblN1Y2Nlc3MsIG9uRXJyb3IsIG5hbWUpO1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX3Byb2dyZXNzQ2FsbGJhY2sgPSBvblByb2dyZXNzO1xyXG5cclxuICAgICAgICBjb25zdCBmaWxlTmFtZSA9IChmaWxlT3JVcmwgYXMgRmlsZSkubmFtZSB8fCBUb29scy5HZXRGaWxlbmFtZShmaWxlT3JVcmwgYXMgc3RyaW5nKTtcclxuXHJcbiAgICAgICAgaWYgKHVzZUFycmF5QnVmZmVyKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnVzZVJhbmdlUmVxdWVzdHMpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnZhbGlkYXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgTG9nZ2VyLldhcm4oXCJnbFRGIHZhbGlkYXRpb24gaXMgbm90IHN1cHBvcnRlZCB3aGVuIHJhbmdlIHJlcXVlc3RzIGFyZSBlbmFibGVkXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGZpbGVSZXF1ZXN0OiBJRmlsZVJlcXVlc3QgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWJvcnQ6ICgpID0+IHt9LFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ29tcGxldGVPYnNlcnZhYmxlOiBuZXcgT2JzZXJ2YWJsZTxJRmlsZVJlcXVlc3Q+KCksXHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGFCdWZmZXIgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVhZEFzeW5jOiAoYnl0ZU9mZnNldDogbnVtYmVyLCBieXRlTGVuZ3RoOiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPEFycmF5QnVmZmVyVmlldz4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbG9hZEZpbGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NlbmUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsZU9yVXJsIGFzIEZpbGUgfCBzdHJpbmcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShuZXcgVWludDhBcnJheShkYXRhIGFzIEFycmF5QnVmZmVyKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHdlYlJlcXVlc3QpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2ViUmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKFwiUmFuZ2VcIiwgYGJ5dGVzPSR7Ynl0ZU9mZnNldH0tJHtieXRlT2Zmc2V0ICsgYnl0ZUxlbmd0aCAtIDF9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBieXRlTGVuZ3RoOiAwLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLl91bnBhY2tCaW5hcnlBc3luYyhuZXcgRGF0YVJlYWRlcihkYXRhQnVmZmVyKSkudGhlbihcclxuICAgICAgICAgICAgICAgICAgICAobG9hZGVyRGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxlUmVxdWVzdC5vbkNvbXBsZXRlT2JzZXJ2YWJsZS5ub3RpZnlPYnNlcnZlcnMoZmlsZVJlcXVlc3QpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvblN1Y2Nlc3MobG9hZGVyRGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBvbkVycm9yID8gKGVycm9yKSA9PiBvbkVycm9yKHVuZGVmaW5lZCwgZXJyb3IpIDogdW5kZWZpbmVkXHJcbiAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBmaWxlUmVxdWVzdDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2xvYWRGaWxlKFxyXG4gICAgICAgICAgICAgICAgc2NlbmUsXHJcbiAgICAgICAgICAgICAgICBmaWxlT3JVcmwgYXMgRmlsZSB8IHN0cmluZyxcclxuICAgICAgICAgICAgICAgIChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdmFsaWRhdGUoc2NlbmUsIG5ldyBVaW50OEFycmF5KGRhdGEgYXMgQXJyYXlCdWZmZXIsIDAsIChkYXRhIGFzIEFycmF5QnVmZmVyKS5ieXRlTGVuZ3RoKSwgcm9vdFVybCwgZmlsZU5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3VucGFja0JpbmFyeUFzeW5jKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgRGF0YVJlYWRlcih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkQXN5bmM6IChieXRlT2Zmc2V0LCBieXRlTGVuZ3RoKSA9PiByZWFkQXN5bmMoZGF0YSBhcyBBcnJheUJ1ZmZlciwgYnl0ZU9mZnNldCwgYnl0ZUxlbmd0aCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBieXRlTGVuZ3RoOiAoZGF0YSBhcyBBcnJheUJ1ZmZlcikuYnl0ZUxlbmd0aCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICApLnRoZW4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChsb2FkZXJEYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblN1Y2Nlc3MobG9hZGVyRGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uRXJyb3IgPyAoZXJyb3IpID0+IG9uRXJyb3IodW5kZWZpbmVkLCBlcnJvcikgOiB1bmRlZmluZWRcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHRydWUsXHJcbiAgICAgICAgICAgICAgICBvbkVycm9yXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2xvYWRGaWxlKFxyXG4gICAgICAgICAgICAgICAgc2NlbmUsXHJcbiAgICAgICAgICAgICAgICBmaWxlT3JVcmwsXHJcbiAgICAgICAgICAgICAgICAoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3ZhbGlkYXRlKHNjZW5lLCBkYXRhIGFzIHN0cmluZywgcm9vdFVybCwgZmlsZU5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvblN1Y2Nlc3MoeyBqc29uOiB0aGlzLl9wYXJzZUpzb24oZGF0YSBhcyBzdHJpbmcpIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2gge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob25FcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25FcnJvcigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgb25FcnJvclxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9sb2FkQmluYXJ5KFxyXG4gICAgICAgIHNjZW5lOiBTY2VuZSxcclxuICAgICAgICBkYXRhOiBBcnJheUJ1ZmZlclZpZXcsXHJcbiAgICAgICAgcm9vdFVybDogc3RyaW5nLFxyXG4gICAgICAgIG9uU3VjY2VzczogKGRhdGE6IHVua25vd24sIHJlc3BvbnNlVVJMPzogc3RyaW5nKSA9PiB2b2lkLFxyXG4gICAgICAgIG9uRXJyb3I/OiAocmVxdWVzdD86IFdlYlJlcXVlc3QsIGV4Y2VwdGlvbj86IExvYWRGaWxlRXJyb3IpID0+IHZvaWQsXHJcbiAgICAgICAgZmlsZU5hbWU/OiBzdHJpbmdcclxuICAgICk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX3ZhbGlkYXRlKHNjZW5lLCBuZXcgVWludDhBcnJheShkYXRhLmJ1ZmZlciwgZGF0YS5ieXRlT2Zmc2V0LCBkYXRhLmJ5dGVMZW5ndGgpLCByb290VXJsLCBmaWxlTmFtZSk7XHJcbiAgICAgICAgdGhpcy5fdW5wYWNrQmluYXJ5QXN5bmMoXHJcbiAgICAgICAgICAgIG5ldyBEYXRhUmVhZGVyKHtcclxuICAgICAgICAgICAgICAgIHJlYWRBc3luYzogKGJ5dGVPZmZzZXQsIGJ5dGVMZW5ndGgpID0+IHJlYWRWaWV3QXN5bmMoZGF0YSwgYnl0ZU9mZnNldCwgYnl0ZUxlbmd0aCksXHJcbiAgICAgICAgICAgICAgICBieXRlTGVuZ3RoOiBkYXRhLmJ5dGVMZW5ndGgsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgKS50aGVuKFxyXG4gICAgICAgICAgICAobG9hZGVyRGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgb25TdWNjZXNzKGxvYWRlckRhdGEpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvbkVycm9yID8gKGVycm9yKSA9PiBvbkVycm9yKHVuZGVmaW5lZCwgZXJyb3IpIDogdW5kZWZpbmVkXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaW1wb3J0TWVzaEFzeW5jKFxyXG4gICAgICAgIG1lc2hlc05hbWVzOiBzdHJpbmcgfCByZWFkb25seSBzdHJpbmdbXSB8IG51bGwgfCB1bmRlZmluZWQsXHJcbiAgICAgICAgc2NlbmU6IFNjZW5lLFxyXG4gICAgICAgIGRhdGE6IElHTFRGTG9hZGVyRGF0YSxcclxuICAgICAgICByb290VXJsOiBzdHJpbmcsXHJcbiAgICAgICAgb25Qcm9ncmVzcz86IChldmVudDogSVNjZW5lTG9hZGVyUHJvZ3Jlc3NFdmVudCkgPT4gdm9pZCxcclxuICAgICAgICBmaWxlTmFtZT86IHN0cmluZ1xyXG4gICAgKTogUHJvbWlzZTxJU2NlbmVMb2FkZXJBc3luY1Jlc3VsdD4ge1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5vblBhcnNlZE9ic2VydmFibGUubm90aWZ5T2JzZXJ2ZXJzKGRhdGEpO1xyXG4gICAgICAgICAgICB0aGlzLm9uUGFyc2VkT2JzZXJ2YWJsZS5jbGVhcigpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5fbG9nKGBMb2FkaW5nICR7ZmlsZU5hbWUgfHwgXCJcIn1gKTtcclxuICAgICAgICAgICAgdGhpcy5fbG9hZGVyID0gdGhpcy5fZ2V0TG9hZGVyKGRhdGEpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbG9hZGVyLmltcG9ydE1lc2hBc3luYyhtZXNoZXNOYW1lcywgc2NlbmUsIG51bGwsIGRhdGEsIHJvb3RVcmwsIG9uUHJvZ3Jlc3MsIGZpbGVOYW1lKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbG9hZEFzeW5jKHNjZW5lOiBTY2VuZSwgZGF0YTogSUdMVEZMb2FkZXJEYXRhLCByb290VXJsOiBzdHJpbmcsIG9uUHJvZ3Jlc3M/OiAoZXZlbnQ6IElTY2VuZUxvYWRlclByb2dyZXNzRXZlbnQpID0+IHZvaWQsIGZpbGVOYW1lPzogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm9uUGFyc2VkT2JzZXJ2YWJsZS5ub3RpZnlPYnNlcnZlcnMoZGF0YSk7XHJcbiAgICAgICAgICAgIHRoaXMub25QYXJzZWRPYnNlcnZhYmxlLmNsZWFyKCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9sb2coYExvYWRpbmcgJHtmaWxlTmFtZSB8fCBcIlwifWApO1xyXG4gICAgICAgICAgICB0aGlzLl9sb2FkZXIgPSB0aGlzLl9nZXRMb2FkZXIoZGF0YSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9sb2FkZXIubG9hZEFzeW5jKHNjZW5lLCBkYXRhLCByb290VXJsLCBvblByb2dyZXNzLCBmaWxlTmFtZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqL1xyXG4gICAgcHVibGljIGxvYWRBc3NldENvbnRhaW5lckFzeW5jKFxyXG4gICAgICAgIHNjZW5lOiBTY2VuZSxcclxuICAgICAgICBkYXRhOiBJR0xURkxvYWRlckRhdGEsXHJcbiAgICAgICAgcm9vdFVybDogc3RyaW5nLFxyXG4gICAgICAgIG9uUHJvZ3Jlc3M/OiAoZXZlbnQ6IElTY2VuZUxvYWRlclByb2dyZXNzRXZlbnQpID0+IHZvaWQsXHJcbiAgICAgICAgZmlsZU5hbWU/OiBzdHJpbmdcclxuICAgICk6IFByb21pc2U8QXNzZXRDb250YWluZXI+IHtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMub25QYXJzZWRPYnNlcnZhYmxlLm5vdGlmeU9ic2VydmVycyhkYXRhKTtcclxuICAgICAgICAgICAgdGhpcy5vblBhcnNlZE9ic2VydmFibGUuY2xlYXIoKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuX2xvZyhgTG9hZGluZyAke2ZpbGVOYW1lIHx8IFwiXCJ9YCk7XHJcbiAgICAgICAgICAgIHRoaXMuX2xvYWRlciA9IHRoaXMuX2dldExvYWRlcihkYXRhKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFByZXBhcmUgdGhlIGFzc2V0IGNvbnRhaW5lci5cclxuICAgICAgICAgICAgY29uc3QgY29udGFpbmVyID0gbmV3IEFzc2V0Q29udGFpbmVyKHNjZW5lKTtcclxuXHJcbiAgICAgICAgICAgIC8vIEdldCBtYXRlcmlhbHMvdGV4dHVyZXMgd2hlbiBsb2FkaW5nIHRvIGFkZCB0byBjb250YWluZXJcclxuICAgICAgICAgICAgY29uc3QgbWF0ZXJpYWxzOiBBcnJheTxNYXRlcmlhbD4gPSBbXTtcclxuICAgICAgICAgICAgdGhpcy5vbk1hdGVyaWFsTG9hZGVkT2JzZXJ2YWJsZS5hZGQoKG1hdGVyaWFsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBtYXRlcmlhbHMucHVzaChtYXRlcmlhbCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjb25zdCB0ZXh0dXJlczogQXJyYXk8QmFzZVRleHR1cmU+ID0gW107XHJcbiAgICAgICAgICAgIHRoaXMub25UZXh0dXJlTG9hZGVkT2JzZXJ2YWJsZS5hZGQoKHRleHR1cmUpID0+IHtcclxuICAgICAgICAgICAgICAgIHRleHR1cmVzLnB1c2godGV4dHVyZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjb25zdCBjYW1lcmFzOiBBcnJheTxDYW1lcmE+ID0gW107XHJcbiAgICAgICAgICAgIHRoaXMub25DYW1lcmFMb2FkZWRPYnNlcnZhYmxlLmFkZCgoY2FtZXJhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjYW1lcmFzLnB1c2goY2FtZXJhKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBtb3JwaFRhcmdldE1hbmFnZXJzOiBBcnJheTxNb3JwaFRhcmdldE1hbmFnZXI+ID0gW107XHJcbiAgICAgICAgICAgIHRoaXMub25NZXNoTG9hZGVkT2JzZXJ2YWJsZS5hZGQoKG1lc2gpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChtZXNoLm1vcnBoVGFyZ2V0TWFuYWdlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIG1vcnBoVGFyZ2V0TWFuYWdlcnMucHVzaChtZXNoLm1vcnBoVGFyZ2V0TWFuYWdlcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2xvYWRlci5pbXBvcnRNZXNoQXN5bmMobnVsbCwgc2NlbmUsIGNvbnRhaW5lciwgZGF0YSwgcm9vdFVybCwgb25Qcm9ncmVzcywgZmlsZU5hbWUpLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkoY29udGFpbmVyLmdlb21ldHJpZXMsIHJlc3VsdC5nZW9tZXRyaWVzKTtcclxuICAgICAgICAgICAgICAgIEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KGNvbnRhaW5lci5tZXNoZXMsIHJlc3VsdC5tZXNoZXMpO1xyXG4gICAgICAgICAgICAgICAgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkoY29udGFpbmVyLnBhcnRpY2xlU3lzdGVtcywgcmVzdWx0LnBhcnRpY2xlU3lzdGVtcyk7XHJcbiAgICAgICAgICAgICAgICBBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseShjb250YWluZXIuc2tlbGV0b25zLCByZXN1bHQuc2tlbGV0b25zKTtcclxuICAgICAgICAgICAgICAgIEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KGNvbnRhaW5lci5hbmltYXRpb25Hcm91cHMsIHJlc3VsdC5hbmltYXRpb25Hcm91cHMpO1xyXG4gICAgICAgICAgICAgICAgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkoY29udGFpbmVyLm1hdGVyaWFscywgbWF0ZXJpYWxzKTtcclxuICAgICAgICAgICAgICAgIEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KGNvbnRhaW5lci50ZXh0dXJlcywgdGV4dHVyZXMpO1xyXG4gICAgICAgICAgICAgICAgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkoY29udGFpbmVyLmxpZ2h0cywgcmVzdWx0LmxpZ2h0cyk7XHJcbiAgICAgICAgICAgICAgICBBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseShjb250YWluZXIudHJhbnNmb3JtTm9kZXMsIHJlc3VsdC50cmFuc2Zvcm1Ob2Rlcyk7XHJcbiAgICAgICAgICAgICAgICBBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseShjb250YWluZXIuY2FtZXJhcywgY2FtZXJhcyk7XHJcbiAgICAgICAgICAgICAgICBBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseShjb250YWluZXIubW9ycGhUYXJnZXRNYW5hZ2VycywgbW9ycGhUYXJnZXRNYW5hZ2Vycyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY29udGFpbmVyO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY2FuRGlyZWN0TG9hZChkYXRhOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gR0xURkZpbGVMb2FkZXJNZXRhZGF0YS5jYW5EaXJlY3RMb2FkKGRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBkaXJlY3RMb2FkKHNjZW5lOiBTY2VuZSwgZGF0YTogc3RyaW5nKTogUHJvbWlzZTxPYmplY3Q+IHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIGRhdGEuc3RhcnRzV2l0aChcImJhc2U2NCxcIiArIEdMVEZNYWdpY0Jhc2U2NEVuY29kZWQpIHx8IC8vIHRoaXMgaXMgdGVjaG5pY2FsbHkgaW5jb3JyZWN0LCBidXQgd2lsbCBjb250aW51ZSB0byBzdXBwb3J0IGZvciBiYWNrY29tcGF0LlxyXG4gICAgICAgICAgICBkYXRhLnN0YXJ0c1dpdGgoXCI7YmFzZTY0LFwiICsgR0xURk1hZ2ljQmFzZTY0RW5jb2RlZCkgfHxcclxuICAgICAgICAgICAgZGF0YS5zdGFydHNXaXRoKFwiYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtO2Jhc2U2NCxcIiArIEdMVEZNYWdpY0Jhc2U2NEVuY29kZWQpIHx8XHJcbiAgICAgICAgICAgIGRhdGEuc3RhcnRzV2l0aChcIm1vZGVsL2dsdGYtYmluYXJ5O2Jhc2U2NCxcIiArIEdMVEZNYWdpY0Jhc2U2NEVuY29kZWQpXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFycmF5QnVmZmVyID0gRGVjb2RlQmFzZTY0VXJsVG9CaW5hcnkoZGF0YSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl92YWxpZGF0ZShzY2VuZSwgbmV3IFVpbnQ4QXJyYXkoYXJyYXlCdWZmZXIsIDAsIGFycmF5QnVmZmVyLmJ5dGVMZW5ndGgpKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3VucGFja0JpbmFyeUFzeW5jKFxyXG4gICAgICAgICAgICAgICAgbmV3IERhdGFSZWFkZXIoe1xyXG4gICAgICAgICAgICAgICAgICAgIHJlYWRBc3luYzogKGJ5dGVPZmZzZXQsIGJ5dGVMZW5ndGgpID0+IHJlYWRBc3luYyhhcnJheUJ1ZmZlciwgYnl0ZU9mZnNldCwgYnl0ZUxlbmd0aCksXHJcbiAgICAgICAgICAgICAgICAgICAgYnl0ZUxlbmd0aDogYXJyYXlCdWZmZXIuYnl0ZUxlbmd0aCxcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl92YWxpZGF0ZShzY2VuZSwgZGF0YSk7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh7IGpzb246IHRoaXMuX3BhcnNlSnNvbihkYXRhKSB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBjYWxsYmFjayB0aGF0IGFsbG93cyBjdXN0b20gaGFuZGxpbmcgb2YgdGhlIHJvb3QgdXJsIGJhc2VkIG9uIHRoZSByZXNwb25zZSB1cmwuXHJcbiAgICAgKiBAcGFyYW0gcm9vdFVybCB0aGUgb3JpZ2luYWwgcm9vdCB1cmxcclxuICAgICAqIEBwYXJhbSByZXNwb25zZVVSTCB0aGUgcmVzcG9uc2UgdXJsIGlmIGF2YWlsYWJsZVxyXG4gICAgICogQHJldHVybnMgdGhlIG5ldyByb290IHVybFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmV3cml0ZVJvb3RVUkw/KHJvb3RVcmw6IHN0cmluZywgcmVzcG9uc2VVUkw/OiBzdHJpbmcpOiBzdHJpbmc7XHJcblxyXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gICAgcHVibGljIGNyZWF0ZVBsdWdpbihvcHRpb25zOiBTY2VuZUxvYWRlclBsdWdpbk9wdGlvbnMpOiBJU2NlbmVMb2FkZXJQbHVnaW5Bc3luYyB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBHTFRGRmlsZUxvYWRlcihvcHRpb25zW0dMVEZGaWxlTG9hZGVyTWV0YWRhdGEubmFtZV0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIGxvYWRlciBzdGF0ZSBvciBudWxsIGlmIHRoZSBsb2FkZXIgaXMgbm90IGFjdGl2ZS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBsb2FkZXJTdGF0ZSgpOiBOdWxsYWJsZTxHTFRGTG9hZGVyU3RhdGU+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc3RhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBPYnNlcnZhYmxlIHJhaXNlZCB3aGVuIHRoZSBsb2FkZXIgc3RhdGUgY2hhbmdlcy5cclxuICAgICAqL1xyXG4gICAgcHVibGljIG9uTG9hZGVyU3RhdGVDaGFuZ2VkT2JzZXJ2YWJsZSA9IG5ldyBPYnNlcnZhYmxlPE51bGxhYmxlPEdMVEZMb2FkZXJTdGF0ZT4+KCk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gdGhlIGFzc2V0IGlzIGNvbXBsZXRlbHkgbG9hZGVkLlxyXG4gICAgICogQHJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiB0aGUgYXNzZXQgaXMgY29tcGxldGVseSBsb2FkZWQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyB3aGVuQ29tcGxldGVBc3luYygpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm9uQ29tcGxldGVPYnNlcnZhYmxlLmFkZE9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5vbkVycm9yT2JzZXJ2YWJsZS5hZGRPbmNlKChyZWFzb24pID0+IHtcclxuICAgICAgICAgICAgICAgIHJlamVjdChyZWFzb24pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgX3NldFN0YXRlKHN0YXRlOiBHTFRGTG9hZGVyU3RhdGUpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5fc3RhdGUgPT09IHN0YXRlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX3N0YXRlID0gc3RhdGU7XHJcbiAgICAgICAgdGhpcy5vbkxvYWRlclN0YXRlQ2hhbmdlZE9ic2VydmFibGUubm90aWZ5T2JzZXJ2ZXJzKHRoaXMuX3N0YXRlKTtcclxuICAgICAgICB0aGlzLl9sb2coR0xURkxvYWRlclN0YXRlW3RoaXMuX3N0YXRlXSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqL1xyXG4gICAgcHVibGljIF9sb2FkRmlsZShcclxuICAgICAgICBzY2VuZTogU2NlbmUsXHJcbiAgICAgICAgZmlsZU9yVXJsOiBGaWxlIHwgc3RyaW5nLFxyXG4gICAgICAgIG9uU3VjY2VzczogKGRhdGE6IHN0cmluZyB8IEFycmF5QnVmZmVyKSA9PiB2b2lkLFxyXG4gICAgICAgIHVzZUFycmF5QnVmZmVyPzogYm9vbGVhbixcclxuICAgICAgICBvbkVycm9yPzogKHJlcXVlc3Q/OiBXZWJSZXF1ZXN0KSA9PiB2b2lkLFxyXG4gICAgICAgIG9uT3BlbmVkPzogKHJlcXVlc3Q6IFdlYlJlcXVlc3QpID0+IHZvaWRcclxuICAgICk6IElGaWxlUmVxdWVzdCB7XHJcbiAgICAgICAgY29uc3QgcmVxdWVzdCA9IHNjZW5lLl9sb2FkRmlsZShcclxuICAgICAgICAgICAgZmlsZU9yVXJsLFxyXG4gICAgICAgICAgICBvblN1Y2Nlc3MsXHJcbiAgICAgICAgICAgIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fb25Qcm9ncmVzcyhldmVudCwgcmVxdWVzdCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHRydWUsXHJcbiAgICAgICAgICAgIHVzZUFycmF5QnVmZmVyLFxyXG4gICAgICAgICAgICBvbkVycm9yLFxyXG4gICAgICAgICAgICBvbk9wZW5lZFxyXG4gICAgICAgICkgYXMgSUZpbGVSZXF1ZXN0SW5mbztcclxuICAgICAgICByZXF1ZXN0Lm9uQ29tcGxldGVPYnNlcnZhYmxlLmFkZCgoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIEZvcmNlIHRoZSBsZW5ndGggY29tcHV0YWJsZSB0byBiZSB0cnVlIHNpbmNlIHdlIGNhbiBndWFyYW50ZWUgdGhlIGRhdGEgaXMgbG9hZGVkLlxyXG4gICAgICAgICAgICByZXF1ZXN0Ll9sZW5ndGhDb21wdXRhYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgcmVxdWVzdC5fdG90YWwgPSByZXF1ZXN0Ll9sb2FkZWQ7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5fcmVxdWVzdHMucHVzaChyZXF1ZXN0KTtcclxuICAgICAgICByZXR1cm4gcmVxdWVzdDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9vblByb2dyZXNzKGV2ZW50OiBQcm9ncmVzc0V2ZW50LCByZXF1ZXN0OiBJRmlsZVJlcXVlc3RJbmZvKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9wcm9ncmVzc0NhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJlcXVlc3QuX2xlbmd0aENvbXB1dGFibGUgPSBldmVudC5sZW5ndGhDb21wdXRhYmxlO1xyXG4gICAgICAgIHJlcXVlc3QuX2xvYWRlZCA9IGV2ZW50LmxvYWRlZDtcclxuICAgICAgICByZXF1ZXN0Ll90b3RhbCA9IGV2ZW50LnRvdGFsO1xyXG5cclxuICAgICAgICBsZXQgbGVuZ3RoQ29tcHV0YWJsZSA9IHRydWU7XHJcbiAgICAgICAgbGV0IGxvYWRlZCA9IDA7XHJcbiAgICAgICAgbGV0IHRvdGFsID0gMDtcclxuICAgICAgICBmb3IgKGNvbnN0IHJlcXVlc3Qgb2YgdGhpcy5fcmVxdWVzdHMpIHtcclxuICAgICAgICAgICAgaWYgKHJlcXVlc3QuX2xlbmd0aENvbXB1dGFibGUgPT09IHVuZGVmaW5lZCB8fCByZXF1ZXN0Ll9sb2FkZWQgPT09IHVuZGVmaW5lZCB8fCByZXF1ZXN0Ll90b3RhbCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxlbmd0aENvbXB1dGFibGUgPSBsZW5ndGhDb21wdXRhYmxlICYmIHJlcXVlc3QuX2xlbmd0aENvbXB1dGFibGU7XHJcbiAgICAgICAgICAgIGxvYWRlZCArPSByZXF1ZXN0Ll9sb2FkZWQ7XHJcbiAgICAgICAgICAgIHRvdGFsICs9IHJlcXVlc3QuX3RvdGFsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fcHJvZ3Jlc3NDYWxsYmFjayh7XHJcbiAgICAgICAgICAgIGxlbmd0aENvbXB1dGFibGU6IGxlbmd0aENvbXB1dGFibGUsXHJcbiAgICAgICAgICAgIGxvYWRlZDogbG9hZGVkLFxyXG4gICAgICAgICAgICB0b3RhbDogbGVuZ3RoQ29tcHV0YWJsZSA/IHRvdGFsIDogMCxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF92YWxpZGF0ZShzY2VuZTogU2NlbmUsIGRhdGE6IHN0cmluZyB8IFVpbnQ4QXJyYXksIHJvb3RVcmwgPSBcIlwiLCBmaWxlTmFtZSA9IFwiXCIpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRoaXMudmFsaWRhdGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fc3RhcnRQZXJmb3JtYW5jZUNvdW50ZXIoXCJWYWxpZGF0ZSBKU09OXCIpO1xyXG4gICAgICAgIEdMVEZWYWxpZGF0aW9uLlZhbGlkYXRlQXN5bmMoZGF0YSwgcm9vdFVybCwgZmlsZU5hbWUsICh1cmkpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJlcHJvY2Vzc1VybEFzeW5jKHJvb3RVcmwgKyB1cmkpLnRoZW4oKHVybCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNjZW5lLl9sb2FkRmlsZUFzeW5jKHVybCwgdW5kZWZpbmVkLCB0cnVlLCB0cnVlKS50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KGRhdGEsIDAsIGRhdGEuYnl0ZUxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSkudGhlbihcclxuICAgICAgICAgICAgKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZW5kUGVyZm9ybWFuY2VDb3VudGVyKFwiVmFsaWRhdGUgSlNPTlwiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMub25WYWxpZGF0ZWRPYnNlcnZhYmxlLm5vdGlmeU9ic2VydmVycyhyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vblZhbGlkYXRlZE9ic2VydmFibGUuY2xlYXIoKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKHJlYXNvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZW5kUGVyZm9ybWFuY2VDb3VudGVyKFwiVmFsaWRhdGUgSlNPTlwiKTtcclxuICAgICAgICAgICAgICAgIFRvb2xzLldhcm4oYEZhaWxlZCB0byB2YWxpZGF0ZTogJHtyZWFzb24ubWVzc2FnZX1gKTtcclxuICAgICAgICAgICAgICAgIHRoaXMub25WYWxpZGF0ZWRPYnNlcnZhYmxlLmNsZWFyKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2dldExvYWRlcihsb2FkZXJEYXRhOiBJR0xURkxvYWRlckRhdGEpOiBJR0xURkxvYWRlciB7XHJcbiAgICAgICAgY29uc3QgYXNzZXQgPSAoPGFueT5sb2FkZXJEYXRhLmpzb24pLmFzc2V0IHx8IHt9O1xyXG5cclxuICAgICAgICB0aGlzLl9sb2coYEFzc2V0IHZlcnNpb246ICR7YXNzZXQudmVyc2lvbn1gKTtcclxuICAgICAgICBhc3NldC5taW5WZXJzaW9uICYmIHRoaXMuX2xvZyhgQXNzZXQgbWluaW11bSB2ZXJzaW9uOiAke2Fzc2V0Lm1pblZlcnNpb259YCk7XHJcbiAgICAgICAgYXNzZXQuZ2VuZXJhdG9yICYmIHRoaXMuX2xvZyhgQXNzZXQgZ2VuZXJhdG9yOiAke2Fzc2V0LmdlbmVyYXRvcn1gKTtcclxuXHJcbiAgICAgICAgY29uc3QgdmVyc2lvbiA9IEdMVEZGaWxlTG9hZGVyLl9wYXJzZVZlcnNpb24oYXNzZXQudmVyc2lvbik7XHJcbiAgICAgICAgaWYgKCF2ZXJzaW9uKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgdmVyc2lvbjogXCIgKyBhc3NldC52ZXJzaW9uKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChhc3NldC5taW5WZXJzaW9uICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgY29uc3QgbWluVmVyc2lvbiA9IEdMVEZGaWxlTG9hZGVyLl9wYXJzZVZlcnNpb24oYXNzZXQubWluVmVyc2lvbik7XHJcbiAgICAgICAgICAgIGlmICghbWluVmVyc2lvbikge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBtaW5pbXVtIHZlcnNpb246IFwiICsgYXNzZXQubWluVmVyc2lvbik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChHTFRGRmlsZUxvYWRlci5fY29tcGFyZVZlcnNpb24obWluVmVyc2lvbiwgeyBtYWpvcjogMiwgbWlub3I6IDAgfSkgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbmNvbXBhdGlibGUgbWluaW11bSB2ZXJzaW9uOiBcIiArIGFzc2V0Lm1pblZlcnNpb24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBjcmVhdGVMb2FkZXJzOiB7IFtrZXk6IG51bWJlcl06IChwYXJlbnQ6IEdMVEZGaWxlTG9hZGVyKSA9PiBJR0xURkxvYWRlciB9ID0ge1xyXG4gICAgICAgICAgICAxOiBHTFRGRmlsZUxvYWRlci5fQ3JlYXRlR0xURjFMb2FkZXIsXHJcbiAgICAgICAgICAgIDI6IEdMVEZGaWxlTG9hZGVyLl9DcmVhdGVHTFRGMkxvYWRlcixcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBjcmVhdGVMb2FkZXIgPSBjcmVhdGVMb2FkZXJzW3ZlcnNpb24ubWFqb3JdO1xyXG4gICAgICAgIGlmICghY3JlYXRlTG9hZGVyKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlVuc3VwcG9ydGVkIHZlcnNpb246IFwiICsgYXNzZXQudmVyc2lvbik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gY3JlYXRlTG9hZGVyKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3BhcnNlSnNvbihqc29uOiBzdHJpbmcpOiBPYmplY3Qge1xyXG4gICAgICAgIHRoaXMuX3N0YXJ0UGVyZm9ybWFuY2VDb3VudGVyKFwiUGFyc2UgSlNPTlwiKTtcclxuICAgICAgICB0aGlzLl9sb2coYEpTT04gbGVuZ3RoOiAke2pzb24ubGVuZ3RofWApO1xyXG4gICAgICAgIGNvbnN0IHBhcnNlZCA9IEpTT04ucGFyc2UoanNvbik7XHJcbiAgICAgICAgdGhpcy5fZW5kUGVyZm9ybWFuY2VDb3VudGVyKFwiUGFyc2UgSlNPTlwiKTtcclxuICAgICAgICByZXR1cm4gcGFyc2VkO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3VucGFja0JpbmFyeUFzeW5jKGRhdGFSZWFkZXI6IERhdGFSZWFkZXIpOiBQcm9taXNlPElHTFRGTG9hZGVyRGF0YT4ge1xyXG4gICAgICAgIHRoaXMuX3N0YXJ0UGVyZm9ybWFuY2VDb3VudGVyKFwiVW5wYWNrIEJpbmFyeVwiKTtcclxuXHJcbiAgICAgICAgLy8gUmVhZCBtYWdpYyArIHZlcnNpb24gKyBsZW5ndGggKyBqc29uIGxlbmd0aCArIGpzb24gZm9ybWF0XHJcbiAgICAgICAgcmV0dXJuIGRhdGFSZWFkZXIubG9hZEFzeW5jKDIwKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgQmluYXJ5ID0ge1xyXG4gICAgICAgICAgICAgICAgTWFnaWM6IDB4NDY1NDZjNjcsXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBjb25zdCBtYWdpYyA9IGRhdGFSZWFkZXIucmVhZFVpbnQzMigpO1xyXG4gICAgICAgICAgICBpZiAobWFnaWMgIT09IEJpbmFyeS5NYWdpYykge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFJ1bnRpbWVFcnJvcihcIlVuZXhwZWN0ZWQgbWFnaWM6IFwiICsgbWFnaWMsIEVycm9yQ29kZXMuR0xURkxvYWRlclVuZXhwZWN0ZWRNYWdpY0Vycm9yKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgdmVyc2lvbiA9IGRhdGFSZWFkZXIucmVhZFVpbnQzMigpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMubG9nZ2luZ0VuYWJsZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2xvZyhgQmluYXJ5IHZlcnNpb246ICR7dmVyc2lvbn1gKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgbGVuZ3RoID0gZGF0YVJlYWRlci5yZWFkVWludDMyKCk7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy51c2VSYW5nZVJlcXVlc3RzICYmIGxlbmd0aCAhPT0gZGF0YVJlYWRlci5idWZmZXIuYnl0ZUxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgTG9nZ2VyLldhcm4oYExlbmd0aCBpbiBoZWFkZXIgZG9lcyBub3QgbWF0Y2ggYWN0dWFsIGRhdGEgbGVuZ3RoOiAke2xlbmd0aH0gIT0gJHtkYXRhUmVhZGVyLmJ1ZmZlci5ieXRlTGVuZ3RofWApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgdW5wYWNrZWQ6IFByb21pc2U8SUdMVEZMb2FkZXJEYXRhPjtcclxuICAgICAgICAgICAgc3dpdGNoICh2ZXJzaW9uKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDE6IHtcclxuICAgICAgICAgICAgICAgICAgICB1bnBhY2tlZCA9IHRoaXMuX3VucGFja0JpbmFyeVYxQXN5bmMoZGF0YVJlYWRlciwgbGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNhc2UgMjoge1xyXG4gICAgICAgICAgICAgICAgICAgIHVucGFja2VkID0gdGhpcy5fdW5wYWNrQmluYXJ5VjJBc3luYyhkYXRhUmVhZGVyLCBsZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDoge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlVuc3VwcG9ydGVkIHZlcnNpb246IFwiICsgdmVyc2lvbik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuX2VuZFBlcmZvcm1hbmNlQ291bnRlcihcIlVucGFjayBCaW5hcnlcIik7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdW5wYWNrZWQ7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfdW5wYWNrQmluYXJ5VjFBc3luYyhkYXRhUmVhZGVyOiBEYXRhUmVhZGVyLCBsZW5ndGg6IG51bWJlcik6IFByb21pc2U8SUdMVEZMb2FkZXJEYXRhPiB7XHJcbiAgICAgICAgY29uc3QgQ29udGVudEZvcm1hdCA9IHtcclxuICAgICAgICAgICAgSlNPTjogMCxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBjb250ZW50TGVuZ3RoID0gZGF0YVJlYWRlci5yZWFkVWludDMyKCk7XHJcbiAgICAgICAgY29uc3QgY29udGVudEZvcm1hdCA9IGRhdGFSZWFkZXIucmVhZFVpbnQzMigpO1xyXG5cclxuICAgICAgICBpZiAoY29udGVudEZvcm1hdCAhPT0gQ29udGVudEZvcm1hdC5KU09OKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5leHBlY3RlZCBjb250ZW50IGZvcm1hdDogJHtjb250ZW50Rm9ybWF0fWApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgYm9keUxlbmd0aCA9IGxlbmd0aCAtIGRhdGFSZWFkZXIuYnl0ZU9mZnNldDtcclxuXHJcbiAgICAgICAgY29uc3QgZGF0YTogSUdMVEZMb2FkZXJEYXRhID0geyBqc29uOiB0aGlzLl9wYXJzZUpzb24oZGF0YVJlYWRlci5yZWFkU3RyaW5nKGNvbnRlbnRMZW5ndGgpKSwgYmluOiBudWxsIH07XHJcbiAgICAgICAgaWYgKGJvZHlMZW5ndGggIT09IDApIHtcclxuICAgICAgICAgICAgY29uc3Qgc3RhcnRCeXRlT2Zmc2V0ID0gZGF0YVJlYWRlci5ieXRlT2Zmc2V0O1xyXG4gICAgICAgICAgICBkYXRhLmJpbiA9IHtcclxuICAgICAgICAgICAgICAgIHJlYWRBc3luYzogKGJ5dGVPZmZzZXQsIGJ5dGVMZW5ndGgpID0+IGRhdGFSZWFkZXIuYnVmZmVyLnJlYWRBc3luYyhzdGFydEJ5dGVPZmZzZXQgKyBieXRlT2Zmc2V0LCBieXRlTGVuZ3RoKSxcclxuICAgICAgICAgICAgICAgIGJ5dGVMZW5ndGg6IGJvZHlMZW5ndGgsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3VucGFja0JpbmFyeVYyQXN5bmMoZGF0YVJlYWRlcjogRGF0YVJlYWRlciwgbGVuZ3RoOiBudW1iZXIpOiBQcm9taXNlPElHTFRGTG9hZGVyRGF0YT4ge1xyXG4gICAgICAgIGNvbnN0IENodW5rRm9ybWF0ID0ge1xyXG4gICAgICAgICAgICBKU09OOiAweDRlNGY1MzRhLFxyXG4gICAgICAgICAgICBCSU46IDB4MDA0ZTQ5NDIsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8gUmVhZCB0aGUgSlNPTiBjaHVuayBoZWFkZXIuXHJcbiAgICAgICAgY29uc3QgY2h1bmtMZW5ndGggPSBkYXRhUmVhZGVyLnJlYWRVaW50MzIoKTtcclxuICAgICAgICBjb25zdCBjaHVua0Zvcm1hdCA9IGRhdGFSZWFkZXIucmVhZFVpbnQzMigpO1xyXG4gICAgICAgIGlmIChjaHVua0Zvcm1hdCAhPT0gQ2h1bmtGb3JtYXQuSlNPTikge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJGaXJzdCBjaHVuayBmb3JtYXQgaXMgbm90IEpTT05cIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBCYWlsIGlmIHRoZXJlIGFyZSBubyBvdGhlciBjaHVua3MuXHJcbiAgICAgICAgaWYgKGRhdGFSZWFkZXIuYnl0ZU9mZnNldCArIGNodW5rTGVuZ3RoID09PSBsZW5ndGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGRhdGFSZWFkZXIubG9hZEFzeW5jKGNodW5rTGVuZ3RoKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7IGpzb246IHRoaXMuX3BhcnNlSnNvbihkYXRhUmVhZGVyLnJlYWRTdHJpbmcoY2h1bmtMZW5ndGgpKSwgYmluOiBudWxsIH07XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gUmVhZCB0aGUgSlNPTiBjaHVuayBhbmQgdGhlIGxlbmd0aCBhbmQgdHlwZSBvZiB0aGUgbmV4dCBjaHVuay5cclxuICAgICAgICByZXR1cm4gZGF0YVJlYWRlci5sb2FkQXN5bmMoY2h1bmtMZW5ndGggKyA4KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZGF0YTogSUdMVEZMb2FkZXJEYXRhID0geyBqc29uOiB0aGlzLl9wYXJzZUpzb24oZGF0YVJlYWRlci5yZWFkU3RyaW5nKGNodW5rTGVuZ3RoKSksIGJpbjogbnVsbCB9O1xyXG5cclxuICAgICAgICAgICAgY29uc3QgcmVhZEFzeW5jID0gKCk6IFByb21pc2U8SUdMVEZMb2FkZXJEYXRhPiA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjaHVua0xlbmd0aCA9IGRhdGFSZWFkZXIucmVhZFVpbnQzMigpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2h1bmtGb3JtYXQgPSBkYXRhUmVhZGVyLnJlYWRVaW50MzIoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGNodW5rRm9ybWF0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBDaHVua0Zvcm1hdC5KU09OOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlVuZXhwZWN0ZWQgSlNPTiBjaHVua1wiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBDaHVua0Zvcm1hdC5CSU46IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RhcnRCeXRlT2Zmc2V0ID0gZGF0YVJlYWRlci5ieXRlT2Zmc2V0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLmJpbiA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRBc3luYzogKGJ5dGVPZmZzZXQsIGJ5dGVMZW5ndGgpID0+IGRhdGFSZWFkZXIuYnVmZmVyLnJlYWRBc3luYyhzdGFydEJ5dGVPZmZzZXQgKyBieXRlT2Zmc2V0LCBieXRlTGVuZ3RoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ5dGVMZW5ndGg6IGNodW5rTGVuZ3RoLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhUmVhZGVyLnNraXBCeXRlcyhjaHVua0xlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlnbm9yZSB1bnJlY29nbml6ZWQgY2h1bmtGb3JtYXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVJlYWRlci5za2lwQnl0ZXMoY2h1bmtMZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGFSZWFkZXIuYnl0ZU9mZnNldCAhPT0gbGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGFSZWFkZXIubG9hZEFzeW5jKDgpLnRoZW4ocmVhZEFzeW5jKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGRhdGEpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHJlYWRBc3luYygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIF9wYXJzZVZlcnNpb24odmVyc2lvbjogc3RyaW5nKTogTnVsbGFibGU8eyBtYWpvcjogbnVtYmVyOyBtaW5vcjogbnVtYmVyIH0+IHtcclxuICAgICAgICBpZiAodmVyc2lvbiA9PT0gXCIxLjBcIiB8fCB2ZXJzaW9uID09PSBcIjEuMC4xXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIG1ham9yOiAxLFxyXG4gICAgICAgICAgICAgICAgbWlub3I6IDAsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBtYXRjaCA9ICh2ZXJzaW9uICsgXCJcIikubWF0Y2goL14oXFxkKylcXC4oXFxkKykvKTtcclxuICAgICAgICBpZiAoIW1hdGNoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbWFqb3I6IHBhcnNlSW50KG1hdGNoWzFdKSxcclxuICAgICAgICAgICAgbWlub3I6IHBhcnNlSW50KG1hdGNoWzJdKSxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIF9jb21wYXJlVmVyc2lvbihhOiB7IG1ham9yOiBudW1iZXI7IG1pbm9yOiBudW1iZXIgfSwgYjogeyBtYWpvcjogbnVtYmVyOyBtaW5vcjogbnVtYmVyIH0pOiBudW1iZXIge1xyXG4gICAgICAgIGlmIChhLm1ham9yID4gYi5tYWpvcikge1xyXG4gICAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGEubWFqb3IgPCBiLm1ham9yKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAtMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGEubWlub3IgPiBiLm1pbm9yKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYS5taW5vciA8IGIubWlub3IpIHtcclxuICAgICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gMDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBfbG9nU3BhY2VzID0gXCIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiO1xyXG4gICAgcHJpdmF0ZSBfbG9nSW5kZW50TGV2ZWwgPSAwO1xyXG4gICAgcHJpdmF0ZSBfbG9nZ2luZ0VuYWJsZWQgPSBmYWxzZTtcclxuXHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBwdWJsaWMgX2xvZyA9IHRoaXMuX2xvZ0Rpc2FibGVkO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBfbG9nT3BlbihtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9sb2cobWVzc2FnZSk7XHJcbiAgICAgICAgdGhpcy5fbG9nSW5kZW50TGV2ZWwrKztcclxuICAgIH1cclxuXHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBwdWJsaWMgX2xvZ0Nsb3NlKCk6IHZvaWQge1xyXG4gICAgICAgIC0tdGhpcy5fbG9nSW5kZW50TGV2ZWw7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfbG9nRW5hYmxlZChtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBzcGFjZXMgPSBHTFRGRmlsZUxvYWRlci5fbG9nU3BhY2VzLnN1YnN0cmluZygwLCB0aGlzLl9sb2dJbmRlbnRMZXZlbCAqIDIpO1xyXG4gICAgICAgIExvZ2dlci5Mb2coYCR7c3BhY2VzfSR7bWVzc2FnZX1gKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9sb2dEaXNhYmxlZChtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHt9XHJcblxyXG4gICAgcHJpdmF0ZSBfY2FwdHVyZVBlcmZvcm1hbmNlQ291bnRlcnMgPSBmYWxzZTtcclxuXHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBwdWJsaWMgX3N0YXJ0UGVyZm9ybWFuY2VDb3VudGVyID0gdGhpcy5fc3RhcnRQZXJmb3JtYW5jZUNvdW50ZXJEaXNhYmxlZDtcclxuXHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBwdWJsaWMgX2VuZFBlcmZvcm1hbmNlQ291bnRlciA9IHRoaXMuX2VuZFBlcmZvcm1hbmNlQ291bnRlckRpc2FibGVkO1xyXG5cclxuICAgIHByaXZhdGUgX3N0YXJ0UGVyZm9ybWFuY2VDb3VudGVyRW5hYmxlZChjb3VudGVyTmFtZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgVG9vbHMuU3RhcnRQZXJmb3JtYW5jZUNvdW50ZXIoY291bnRlck5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3N0YXJ0UGVyZm9ybWFuY2VDb3VudGVyRGlzYWJsZWQoY291bnRlck5hbWU6IHN0cmluZyk6IHZvaWQge31cclxuXHJcbiAgICBwcml2YXRlIF9lbmRQZXJmb3JtYW5jZUNvdW50ZXJFbmFibGVkKGNvdW50ZXJOYW1lOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBUb29scy5FbmRQZXJmb3JtYW5jZUNvdW50ZXIoY291bnRlck5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2VuZFBlcmZvcm1hbmNlQ291bnRlckRpc2FibGVkKGNvdW50ZXJOYW1lOiBzdHJpbmcpOiB2b2lkIHt9XHJcbn1cclxuXHJcbnJlZ2lzdGVyU2NlbmVMb2FkZXJQbHVnaW4obmV3IEdMVEZGaWxlTG9hZGVyKCkpO1xyXG4iLCJpbXBvcnQgdHlwZSAqIGFzIEdMVEYyIGZyb20gXCJiYWJ5bG9uanMtZ2x0ZjJpbnRlcmZhY2VcIjtcclxuaW1wb3J0IHsgVG9vbHMgfSBmcm9tIFwiY29yZS9NaXNjL3Rvb2xzXCI7XHJcblxyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uXHJcbmRlY2xhcmUgbGV0IEdMVEZWYWxpZGF0b3I6IEdMVEYyLklHTFRGVmFsaWRhdG9yO1xyXG5cclxuLy8gV29ya2VyR2xvYmFsU2NvcGVcclxuZGVjbGFyZSBmdW5jdGlvbiBpbXBvcnRTY3JpcHRzKC4uLnVybHM6IHN0cmluZ1tdKTogdm9pZDtcclxuZGVjbGFyZSBmdW5jdGlvbiBwb3N0TWVzc2FnZShtZXNzYWdlOiBhbnksIHRyYW5zZmVyPzogYW55W10pOiB2b2lkO1xyXG5cclxuZnVuY3Rpb24gdmFsaWRhdGVBc3luYyhcclxuICAgIGRhdGE6IHN0cmluZyB8IFVpbnQ4QXJyYXksXHJcbiAgICByb290VXJsOiBzdHJpbmcsXHJcbiAgICBmaWxlTmFtZTogc3RyaW5nLFxyXG4gICAgZ2V0RXh0ZXJuYWxSZXNvdXJjZTogKHVyaTogc3RyaW5nKSA9PiBQcm9taXNlPFVpbnQ4QXJyYXk+XHJcbik6IFByb21pc2U8R0xURjIuSUdMVEZWYWxpZGF0aW9uUmVzdWx0cz4ge1xyXG4gICAgY29uc3Qgb3B0aW9uczogR0xURjIuSUdMVEZWYWxpZGF0aW9uT3B0aW9ucyA9IHtcclxuICAgICAgICBleHRlcm5hbFJlc291cmNlRnVuY3Rpb246IGdldEV4dGVybmFsUmVzb3VyY2UsXHJcbiAgICB9O1xyXG5cclxuICAgIGlmIChmaWxlTmFtZSkge1xyXG4gICAgICAgIG9wdGlvbnMudXJpID0gcm9vdFVybCA9PT0gXCJmaWxlOlwiID8gZmlsZU5hbWUgOiByb290VXJsICsgZmlsZU5hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIEFycmF5QnVmZmVyLmlzVmlldyhkYXRhKSA/IEdMVEZWYWxpZGF0b3IudmFsaWRhdGVCeXRlcyhkYXRhLCBvcHRpb25zKSA6IEdMVEZWYWxpZGF0b3IudmFsaWRhdGVTdHJpbmcoZGF0YSwgb3B0aW9ucyk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUaGUgd29ya2VyIGZ1bmN0aW9uIHRoYXQgZ2V0cyBjb252ZXJ0ZWQgdG8gYSBibG9iIHVybCB0byBwYXNzIGludG8gYSB3b3JrZXIuXHJcbiAqL1xyXG5mdW5jdGlvbiB3b3JrZXJGdW5jKCk6IHZvaWQge1xyXG4gICAgY29uc3QgcGVuZGluZ0V4dGVybmFsUmVzb3VyY2VzOiBBcnJheTx7IHJlc29sdmU6IChkYXRhOiBhbnkpID0+IHZvaWQ7IHJlamVjdDogKHJlYXNvbjogYW55KSA9PiB2b2lkIH0+ID0gW107XHJcblxyXG4gICAgb25tZXNzYWdlID0gKG1lc3NhZ2UpID0+IHtcclxuICAgICAgICBjb25zdCBkYXRhID0gbWVzc2FnZS5kYXRhO1xyXG4gICAgICAgIHN3aXRjaCAoZGF0YS5pZCkge1xyXG4gICAgICAgICAgICBjYXNlIFwiaW5pdFwiOiB7XHJcbiAgICAgICAgICAgICAgICBpbXBvcnRTY3JpcHRzKGRhdGEudXJsKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgXCJ2YWxpZGF0ZVwiOiB7XHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZUFzeW5jKFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEuZGF0YSxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLnJvb3RVcmwsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5maWxlTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAodXJpKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbmRleCA9IHBlbmRpbmdFeHRlcm5hbFJlc291cmNlcy5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwZW5kaW5nRXh0ZXJuYWxSZXNvdXJjZXMucHVzaCh7IHJlc29sdmUsIHJlamVjdCB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc3RNZXNzYWdlKHsgaWQ6IFwiZ2V0RXh0ZXJuYWxSZXNvdXJjZVwiLCBpbmRleDogaW5kZXgsIHVyaTogdXJpIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgKS50aGVuKFxyXG4gICAgICAgICAgICAgICAgICAgICh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3N0TWVzc2FnZSh7IGlkOiBcInZhbGlkYXRlLnJlc29sdmVcIiwgdmFsdWU6IHZhbHVlIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgKHJlYXNvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3N0TWVzc2FnZSh7IGlkOiBcInZhbGlkYXRlLnJlamVjdFwiLCByZWFzb246IHJlYXNvbiB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBcImdldEV4dGVybmFsUmVzb3VyY2UucmVzb2x2ZVwiOiB7XHJcbiAgICAgICAgICAgICAgICBwZW5kaW5nRXh0ZXJuYWxSZXNvdXJjZXNbZGF0YS5pbmRleF0ucmVzb2x2ZShkYXRhLnZhbHVlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgXCJnZXRFeHRlcm5hbFJlc291cmNlLnJlamVjdFwiOiB7XHJcbiAgICAgICAgICAgICAgICBwZW5kaW5nRXh0ZXJuYWxSZXNvdXJjZXNbZGF0YS5pbmRleF0ucmVqZWN0KGRhdGEucmVhc29uKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENvbmZpZ3VyYXRpb24gZm9yIGdsVEYgdmFsaWRhdGlvblxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJR0xURlZhbGlkYXRpb25Db25maWd1cmF0aW9uIHtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIHVybCBvZiB0aGUgZ2xURiB2YWxpZGF0b3IuXHJcbiAgICAgKi9cclxuICAgIHVybDogc3RyaW5nO1xyXG59XHJcblxyXG4vKipcclxuICogZ2xURiB2YWxpZGF0aW9uXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgR0xURlZhbGlkYXRpb24ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgY29uZmlndXJhdGlvbi4gRGVmYXVsdHMgdG8gYHsgdXJsOiBcImh0dHBzOi8vY2RuLmJhYnlsb25qcy5jb20vZ2x0Zl92YWxpZGF0b3IuanNcIiB9YC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBDb25maWd1cmF0aW9uOiBJR0xURlZhbGlkYXRpb25Db25maWd1cmF0aW9uID0ge1xyXG4gICAgICAgIHVybDogYCR7VG9vbHMuX0RlZmF1bHRDZG5Vcmx9L2dsdGZfdmFsaWRhdG9yLmpzYCxcclxuICAgIH07XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX0xvYWRTY3JpcHRQcm9taXNlOiBQcm9taXNlPHZvaWQ+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVmFsaWRhdGUgYSBnbFRGIGFzc2V0IHVzaW5nIHRoZSBnbFRGLVZhbGlkYXRvci5cclxuICAgICAqIEBwYXJhbSBkYXRhIFRoZSBKU09OIG9mIGEgZ2xURiBvciB0aGUgYXJyYXkgYnVmZmVyIG9mIGEgYmluYXJ5IGdsVEZcclxuICAgICAqIEBwYXJhbSByb290VXJsIFRoZSByb290IHVybCBmb3IgdGhlIGdsVEZcclxuICAgICAqIEBwYXJhbSBmaWxlTmFtZSBUaGUgZmlsZSBuYW1lIGZvciB0aGUgZ2xURlxyXG4gICAgICogQHBhcmFtIGdldEV4dGVybmFsUmVzb3VyY2UgVGhlIGNhbGxiYWNrIHRvIGdldCBleHRlcm5hbCByZXNvdXJjZXMgZm9yIHRoZSBnbFRGIHZhbGlkYXRvclxyXG4gICAgICogQHJldHVybnMgQSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgZ2xURiB2YWxpZGF0aW9uIHJlc3VsdHMgb25jZSBjb21wbGV0ZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIFZhbGlkYXRlQXN5bmMoXHJcbiAgICAgICAgZGF0YTogc3RyaW5nIHwgVWludDhBcnJheSxcclxuICAgICAgICByb290VXJsOiBzdHJpbmcsXHJcbiAgICAgICAgZmlsZU5hbWU6IHN0cmluZyxcclxuICAgICAgICBnZXRFeHRlcm5hbFJlc291cmNlOiAodXJpOiBzdHJpbmcpID0+IFByb21pc2U8VWludDhBcnJheT5cclxuICAgICk6IFByb21pc2U8R0xURjIuSUdMVEZWYWxpZGF0aW9uUmVzdWx0cz4ge1xyXG4gICAgICAgIGlmICh0eXBlb2YgV29ya2VyID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHdvcmtlckNvbnRlbnQgPSBgJHt2YWxpZGF0ZUFzeW5jfSgke3dvcmtlckZ1bmN9KSgpYDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHdvcmtlckJsb2JVcmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKG5ldyBCbG9iKFt3b3JrZXJDb250ZW50XSwgeyB0eXBlOiBcImFwcGxpY2F0aW9uL2phdmFzY3JpcHRcIiB9KSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB3b3JrZXIgPSBuZXcgV29ya2VyKHdvcmtlckJsb2JVcmwpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IG9uRXJyb3IgPSAoZXJyb3I6IEVycm9yRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB3b3JrZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsIG9uRXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIHdvcmtlci5yZW1vdmVFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCBvbk1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IG9uTWVzc2FnZSA9IChtZXNzYWdlOiBNZXNzYWdlRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gbWVzc2FnZS5kYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoZGF0YS5pZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiZ2V0RXh0ZXJuYWxSZXNvdXJjZVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRFeHRlcm5hbFJlc291cmNlKGRhdGEudXJpKS50aGVuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3JrZXIucG9zdE1lc3NhZ2UoeyBpZDogXCJnZXRFeHRlcm5hbFJlc291cmNlLnJlc29sdmVcIiwgaW5kZXg6IGRhdGEuaW5kZXgsIHZhbHVlOiB2YWx1ZSB9LCBbdmFsdWUuYnVmZmVyXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAocmVhc29uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtlci5wb3N0TWVzc2FnZSh7IGlkOiBcImdldEV4dGVybmFsUmVzb3VyY2UucmVqZWN0XCIsIGluZGV4OiBkYXRhLmluZGV4LCByZWFzb246IHJlYXNvbiB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcInZhbGlkYXRlLnJlc29sdmVcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya2VyLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLCBvbkVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtlci5yZW1vdmVFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCBvbk1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShkYXRhLnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtlci50ZXJtaW5hdGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJ2YWxpZGF0ZS5yZWplY3RcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya2VyLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLCBvbkVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtlci5yZW1vdmVFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCBvbk1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGRhdGEucmVhc29uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtlci50ZXJtaW5hdGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgd29ya2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLCBvbkVycm9yKTtcclxuICAgICAgICAgICAgICAgIHdvcmtlci5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCBvbk1lc3NhZ2UpO1xyXG5cclxuICAgICAgICAgICAgICAgIHdvcmtlci5wb3N0TWVzc2FnZSh7IGlkOiBcImluaXRcIiwgdXJsOiBUb29scy5HZXRCYWJ5bG9uU2NyaXB0VVJMKHRoaXMuQ29uZmlndXJhdGlvbi51cmwpIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChBcnJheUJ1ZmZlci5pc1ZpZXcoZGF0YSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBTbGljZSB0aGUgZGF0YSB0byBhdm9pZCBjb3B5aW5nIHRoZSB3aG9sZSBhcnJheSBidWZmZXIuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2xpY2VkRGF0YSA9IGRhdGEuc2xpY2UoKTtcclxuICAgICAgICAgICAgICAgICAgICB3b3JrZXIucG9zdE1lc3NhZ2UoeyBpZDogXCJ2YWxpZGF0ZVwiLCBkYXRhOiBzbGljZWREYXRhLCByb290VXJsOiByb290VXJsLCBmaWxlTmFtZTogZmlsZU5hbWUgfSwgW3NsaWNlZERhdGEuYnVmZmVyXSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHdvcmtlci5wb3N0TWVzc2FnZSh7IGlkOiBcInZhbGlkYXRlXCIsIGRhdGE6IGRhdGEsIHJvb3RVcmw6IHJvb3RVcmwsIGZpbGVOYW1lOiBmaWxlTmFtZSB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLl9Mb2FkU2NyaXB0UHJvbWlzZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fTG9hZFNjcmlwdFByb21pc2UgPSBUb29scy5Mb2FkQmFieWxvblNjcmlwdEFzeW5jKHRoaXMuQ29uZmlndXJhdGlvbi51cmwpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fTG9hZFNjcmlwdFByb21pc2UudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsaWRhdGVBc3luYyhkYXRhLCByb290VXJsLCBmaWxlTmFtZSwgZ2V0RXh0ZXJuYWxSZXNvdXJjZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgKiBhcyBGaWxlTG9hZGVyIGZyb20gXCJsb2FkZXJzL2dsVEYvZ2xURkZpbGVMb2FkZXJcIjtcclxuaW1wb3J0ICogYXMgVmFsaWRhdGlvbiBmcm9tIFwibG9hZGVycy9nbFRGL2dsVEZWYWxpZGF0aW9uXCI7XHJcblxyXG4vKipcclxuICogVGhpcyBpcyB0aGUgZW50cnkgcG9pbnQgZm9yIHRoZSBVTUQgbW9kdWxlLlxyXG4gKiBUaGUgZW50cnkgcG9pbnQgZm9yIGEgZnV0dXJlIEVTTSBwYWNrYWdlIHNob3VsZCBiZSBpbmRleC50c1xyXG4gKi9cclxuY29uc3QgZ2xvYmFsT2JqZWN0ID0gdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbCA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB1bmRlZmluZWQ7XHJcbmlmICh0eXBlb2YgZ2xvYmFsT2JqZWN0ICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAoPGFueT5nbG9iYWxPYmplY3QpLkJBQllMT04gPSAoPGFueT5nbG9iYWxPYmplY3QpLkJBQllMT04gfHwge307XHJcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBGaWxlTG9hZGVyKSB7XHJcbiAgICAgICAgKDxhbnk+Z2xvYmFsT2JqZWN0KS5CQUJZTE9OW2tleV0gPSAoPGFueT5GaWxlTG9hZGVyKVtrZXldO1xyXG4gICAgfVxyXG4gICAgZm9yIChjb25zdCBrZXkgaW4gVmFsaWRhdGlvbikge1xyXG4gICAgICAgICg8YW55Pmdsb2JhbE9iamVjdCkuQkFCWUxPTltrZXldID0gKDxhbnk+VmFsaWRhdGlvbilba2V5XTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0ICogZnJvbSBcImxvYWRlcnMvZ2xURi9nbFRGRmlsZUxvYWRlclwiO1xyXG5leHBvcnQgKiBmcm9tIFwibG9hZGVycy9nbFRGL2dsVEZWYWxpZGF0aW9uXCI7XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1pbnRlcm5hbC1tb2R1bGVzICovXHJcbmltcG9ydCAqIGFzIEdMVEYxIGZyb20gXCJsb2FkZXJzL2dsVEYvMS4wL2luZGV4XCI7XHJcblxyXG4vKipcclxuICogVGhpcyBpcyB0aGUgZW50cnkgcG9pbnQgZm9yIHRoZSBVTUQgbW9kdWxlLlxyXG4gKiBUaGUgZW50cnkgcG9pbnQgZm9yIGEgZnV0dXJlIEVTTSBwYWNrYWdlIHNob3VsZCBiZSBpbmRleC50c1xyXG4gKi9cclxuY29uc3QgZ2xvYmFsT2JqZWN0ID0gdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbCA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB1bmRlZmluZWQ7XHJcbmlmICh0eXBlb2YgZ2xvYmFsT2JqZWN0ICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAoPGFueT5nbG9iYWxPYmplY3QpLkJBQllMT04gPSAoPGFueT5nbG9iYWxPYmplY3QpLkJBQllMT04gfHwge307XHJcbiAgICAoPGFueT5nbG9iYWxPYmplY3QpLkJBQllMT04uR0xURjEgPSAoPGFueT5nbG9iYWxPYmplY3QpLkJBQllMT04uR0xURjEgfHwge307XHJcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBHTFRGMSkge1xyXG4gICAgICAgICg8YW55Pmdsb2JhbE9iamVjdCkuQkFCWUxPTi5HTFRGMVtrZXldID0gKDxhbnk+R0xURjEpW2tleV07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IEdMVEYxIH07XHJcbiIsIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvZXhwb3J0XHJcbmV4cG9ydCAqIGZyb20gXCIuL2xlZ2FjeS1nbFRGXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2xlZ2FjeS1nbFRGMVwiO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfYmFieWxvbmpzX01pc2NfdG9vbHNfXzsiLCIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi5cblxuUGVybWlzc2lvbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgYW5kL29yIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSBmb3IgYW55XG5wdXJwb3NlIHdpdGggb3Igd2l0aG91dCBmZWUgaXMgaGVyZWJ5IGdyYW50ZWQuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIgQU5EIFRIRSBBVVRIT1IgRElTQ0xBSU1TIEFMTCBXQVJSQU5USUVTIFdJVEhcblJFR0FSRCBUTyBUSElTIFNPRlRXQVJFIElOQ0xVRElORyBBTEwgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWVxuQU5EIEZJVE5FU1MuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1IgQkUgTElBQkxFIEZPUiBBTlkgU1BFQ0lBTCwgRElSRUNULFxuSU5ESVJFQ1QsIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyBPUiBBTlkgREFNQUdFUyBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NXG5MT1NTIE9GIFVTRSwgREFUQSBPUiBQUk9GSVRTLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgTkVHTElHRU5DRSBPUlxuT1RIRVIgVE9SVElPVVMgQUNUSU9OLCBBUklTSU5HIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFVTRSBPUlxuUEVSRk9STUFOQ0UgT0YgVEhJUyBTT0ZUV0FSRS5cbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSwgU3VwcHJlc3NlZEVycm9yLCBTeW1ib2wsIEl0ZXJhdG9yICovXG5cbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xuICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xuICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xuICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xuICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xufVxuXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XG4gIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XG4gICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XG4gICAgICB9XG4gICAgICByZXR1cm4gdDtcbiAgfVxuICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XG4gIHZhciB0ID0ge307XG4gIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxuICAgICAgdFtwXSA9IHNbcF07XG4gIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcbiAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXG4gICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xuICAgICAgfVxuICByZXR1cm4gdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcbiAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcbiAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcbiAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcbiAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XG4gIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gX19lc0RlY29yYXRlKGN0b3IsIGRlc2NyaXB0b3JJbiwgZGVjb3JhdG9ycywgY29udGV4dEluLCBpbml0aWFsaXplcnMsIGV4dHJhSW5pdGlhbGl6ZXJzKSB7XG4gIGZ1bmN0aW9uIGFjY2VwdChmKSB7IGlmIChmICE9PSB2b2lkIDAgJiYgdHlwZW9mIGYgIT09IFwiZnVuY3Rpb25cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkZ1bmN0aW9uIGV4cGVjdGVkXCIpOyByZXR1cm4gZjsgfVxuICB2YXIga2luZCA9IGNvbnRleHRJbi5raW5kLCBrZXkgPSBraW5kID09PSBcImdldHRlclwiID8gXCJnZXRcIiA6IGtpbmQgPT09IFwic2V0dGVyXCIgPyBcInNldFwiIDogXCJ2YWx1ZVwiO1xuICB2YXIgdGFyZ2V0ID0gIWRlc2NyaXB0b3JJbiAmJiBjdG9yID8gY29udGV4dEluW1wic3RhdGljXCJdID8gY3RvciA6IGN0b3IucHJvdG90eXBlIDogbnVsbDtcbiAgdmFyIGRlc2NyaXB0b3IgPSBkZXNjcmlwdG9ySW4gfHwgKHRhcmdldCA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBjb250ZXh0SW4ubmFtZSkgOiB7fSk7XG4gIHZhciBfLCBkb25lID0gZmFsc2U7XG4gIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICB2YXIgY29udGV4dCA9IHt9O1xuICAgICAgZm9yICh2YXIgcCBpbiBjb250ZXh0SW4pIGNvbnRleHRbcF0gPSBwID09PSBcImFjY2Vzc1wiID8ge30gOiBjb250ZXh0SW5bcF07XG4gICAgICBmb3IgKHZhciBwIGluIGNvbnRleHRJbi5hY2Nlc3MpIGNvbnRleHQuYWNjZXNzW3BdID0gY29udGV4dEluLmFjY2Vzc1twXTtcbiAgICAgIGNvbnRleHQuYWRkSW5pdGlhbGl6ZXIgPSBmdW5jdGlvbiAoZikgeyBpZiAoZG9uZSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBhZGQgaW5pdGlhbGl6ZXJzIGFmdGVyIGRlY29yYXRpb24gaGFzIGNvbXBsZXRlZFwiKTsgZXh0cmFJbml0aWFsaXplcnMucHVzaChhY2NlcHQoZiB8fCBudWxsKSk7IH07XG4gICAgICB2YXIgcmVzdWx0ID0gKDAsIGRlY29yYXRvcnNbaV0pKGtpbmQgPT09IFwiYWNjZXNzb3JcIiA/IHsgZ2V0OiBkZXNjcmlwdG9yLmdldCwgc2V0OiBkZXNjcmlwdG9yLnNldCB9IDogZGVzY3JpcHRvcltrZXldLCBjb250ZXh0KTtcbiAgICAgIGlmIChraW5kID09PSBcImFjY2Vzc29yXCIpIHtcbiAgICAgICAgICBpZiAocmVzdWx0ID09PSB2b2lkIDApIGNvbnRpbnVlO1xuICAgICAgICAgIGlmIChyZXN1bHQgPT09IG51bGwgfHwgdHlwZW9mIHJlc3VsdCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk9iamVjdCBleHBlY3RlZFwiKTtcbiAgICAgICAgICBpZiAoXyA9IGFjY2VwdChyZXN1bHQuZ2V0KSkgZGVzY3JpcHRvci5nZXQgPSBfO1xuICAgICAgICAgIGlmIChfID0gYWNjZXB0KHJlc3VsdC5zZXQpKSBkZXNjcmlwdG9yLnNldCA9IF87XG4gICAgICAgICAgaWYgKF8gPSBhY2NlcHQocmVzdWx0LmluaXQpKSBpbml0aWFsaXplcnMudW5zaGlmdChfKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKF8gPSBhY2NlcHQocmVzdWx0KSkge1xuICAgICAgICAgIGlmIChraW5kID09PSBcImZpZWxkXCIpIGluaXRpYWxpemVycy51bnNoaWZ0KF8pO1xuICAgICAgICAgIGVsc2UgZGVzY3JpcHRvcltrZXldID0gXztcbiAgICAgIH1cbiAgfVxuICBpZiAodGFyZ2V0KSBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBjb250ZXh0SW4ubmFtZSwgZGVzY3JpcHRvcik7XG4gIGRvbmUgPSB0cnVlO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fcnVuSW5pdGlhbGl6ZXJzKHRoaXNBcmcsIGluaXRpYWxpemVycywgdmFsdWUpIHtcbiAgdmFyIHVzZVZhbHVlID0gYXJndW1lbnRzLmxlbmd0aCA+IDI7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgaW5pdGlhbGl6ZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YWx1ZSA9IHVzZVZhbHVlID8gaW5pdGlhbGl6ZXJzW2ldLmNhbGwodGhpc0FyZywgdmFsdWUpIDogaW5pdGlhbGl6ZXJzW2ldLmNhbGwodGhpc0FyZyk7XG4gIH1cbiAgcmV0dXJuIHVzZVZhbHVlID8gdmFsdWUgOiB2b2lkIDA7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX19wcm9wS2V5KHgpIHtcbiAgcmV0dXJuIHR5cGVvZiB4ID09PSBcInN5bWJvbFwiID8geCA6IFwiXCIuY29uY2F0KHgpO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fc2V0RnVuY3Rpb25OYW1lKGYsIG5hbWUsIHByZWZpeCkge1xuICBpZiAodHlwZW9mIG5hbWUgPT09IFwic3ltYm9sXCIpIG5hbWUgPSBuYW1lLmRlc2NyaXB0aW9uID8gXCJbXCIuY29uY2F0KG5hbWUuZGVzY3JpcHRpb24sIFwiXVwiKSA6IFwiXCI7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZiwgXCJuYW1lXCIsIHsgY29uZmlndXJhYmxlOiB0cnVlLCB2YWx1ZTogcHJlZml4ID8gXCJcIi5jb25jYXQocHJlZml4LCBcIiBcIiwgbmFtZSkgOiBuYW1lIH0pO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcbiAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcbiAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZyA9IE9iamVjdC5jcmVhdGUoKHR5cGVvZiBJdGVyYXRvciA9PT0gXCJmdW5jdGlvblwiID8gSXRlcmF0b3IgOiBPYmplY3QpLnByb3RvdHlwZSk7XG4gIHJldHVybiBnLm5leHQgPSB2ZXJiKDApLCBnW1widGhyb3dcIl0gPSB2ZXJiKDEpLCBnW1wicmV0dXJuXCJdID0gdmVyYigyKSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xuICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cbiAgZnVuY3Rpb24gc3RlcChvcCkge1xuICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xuICAgICAgd2hpbGUgKGcgJiYgKGcgPSAwLCBvcFswXSAmJiAoXyA9IDApKSwgXykgdHJ5IHtcbiAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XG4gICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xuICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcbiAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XG4gICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XG4gICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XG4gICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cbiAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xuICB9XG59XG5cbmV4cG9ydCB2YXIgX19jcmVhdGVCaW5kaW5nID0gT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IobSwgayk7XG4gIGlmICghZGVzYyB8fCAoXCJnZXRcIiBpbiBkZXNjID8gIW0uX19lc01vZHVsZSA6IGRlc2Mud3JpdGFibGUgfHwgZGVzYy5jb25maWd1cmFibGUpKSB7XG4gICAgICBkZXNjID0geyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9O1xuICB9XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgZGVzYyk7XG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICBvW2syXSA9IG1ba107XG59KTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBvKSB7XG4gIGZvciAodmFyIHAgaW4gbSkgaWYgKHAgIT09IFwiZGVmYXVsdFwiICYmICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobywgcCkpIF9fY3JlYXRlQmluZGluZyhvLCBtLCBwKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcbiAgdmFyIHMgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgU3ltYm9sLml0ZXJhdG9yLCBtID0gcyAmJiBvW3NdLCBpID0gMDtcbiAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XG4gIGlmIChvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikgcmV0dXJuIHtcbiAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xuICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcbiAgICAgIH1cbiAgfTtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihzID8gXCJPYmplY3QgaXMgbm90IGl0ZXJhYmxlLlwiIDogXCJTeW1ib2wuaXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcbiAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xuICBpZiAoIW0pIHJldHVybiBvO1xuICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcbiAgdHJ5IHtcbiAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xuICB9XG4gIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxuICBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XG4gICAgICB9XG4gICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cbiAgfVxuICByZXR1cm4gYXI7XG59XG5cbi8qKiBAZGVwcmVjYXRlZCAqL1xuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xuICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcbiAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcbiAgcmV0dXJuIGFyO1xufVxuXG4vKiogQGRlcHJlY2F0ZWQgKi9cbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZEFycmF5cygpIHtcbiAgZm9yICh2YXIgcyA9IDAsIGkgPSAwLCBpbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBpbDsgaSsrKSBzICs9IGFyZ3VtZW50c1tpXS5sZW5ndGg7XG4gIGZvciAodmFyIHIgPSBBcnJheShzKSwgayA9IDAsIGkgPSAwOyBpIDwgaWw7IGkrKylcbiAgICAgIGZvciAodmFyIGEgPSBhcmd1bWVudHNbaV0sIGogPSAwLCBqbCA9IGEubGVuZ3RoOyBqIDwgamw7IGorKywgaysrKVxuICAgICAgICAgIHJba10gPSBhW2pdO1xuICByZXR1cm4gcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkQXJyYXkodG8sIGZyb20sIHBhY2spIHtcbiAgaWYgKHBhY2sgfHwgYXJndW1lbnRzLmxlbmd0aCA9PT0gMikgZm9yICh2YXIgaSA9IDAsIGwgPSBmcm9tLmxlbmd0aCwgYXI7IGkgPCBsOyBpKyspIHtcbiAgICAgIGlmIChhciB8fCAhKGkgaW4gZnJvbSkpIHtcbiAgICAgICAgICBpZiAoIWFyKSBhciA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZyb20sIDAsIGkpO1xuICAgICAgICAgIGFyW2ldID0gZnJvbVtpXTtcbiAgICAgIH1cbiAgfVxuICByZXR1cm4gdG8uY29uY2F0KGFyIHx8IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZyb20pKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xuICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XG4gIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XG4gIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XG4gIHJldHVybiBpID0gT2JqZWN0LmNyZWF0ZSgodHlwZW9mIEFzeW5jSXRlcmF0b3IgPT09IFwiZnVuY3Rpb25cIiA/IEFzeW5jSXRlcmF0b3IgOiBPYmplY3QpLnByb3RvdHlwZSksIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiwgYXdhaXRSZXR1cm4pLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XG4gIGZ1bmN0aW9uIGF3YWl0UmV0dXJuKGYpIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBQcm9taXNlLnJlc29sdmUodikudGhlbihmLCByZWplY3QpOyB9OyB9XG4gIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpZiAoZ1tuXSkgeyBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyBpZiAoZikgaVtuXSA9IGYoaVtuXSk7IH0gfVxuICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XG4gIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxuICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XG4gIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cbiAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XG4gIHZhciBpLCBwO1xuICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xuICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBmYWxzZSB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XG4gIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XG4gIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XG4gIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcbiAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxuICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xuICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxuICByZXR1cm4gY29va2VkO1xufTtcblxudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9IE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHYgfSk7XG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcbiAgb1tcImRlZmF1bHRcIl0gPSB2O1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcbiAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcbiAgdmFyIHJlc3VsdCA9IHt9O1xuICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoayAhPT0gXCJkZWZhdWx0XCIgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIF9fY3JlYXRlQmluZGluZyhyZXN1bHQsIG1vZCwgayk7XG4gIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XG4gIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHJlY2VpdmVyLCBzdGF0ZSwga2luZCwgZikge1xuICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBnZXR0ZXJcIik7XG4gIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHJlYWQgcHJpdmF0ZSBtZW1iZXIgZnJvbSBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xuICByZXR1cm4ga2luZCA9PT0gXCJtXCIgPyBmIDoga2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIpIDogZiA/IGYudmFsdWUgOiBzdGF0ZS5nZXQocmVjZWl2ZXIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZFNldChyZWNlaXZlciwgc3RhdGUsIHZhbHVlLCBraW5kLCBmKSB7XG4gIGlmIChraW5kID09PSBcIm1cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgbWV0aG9kIGlzIG5vdCB3cml0YWJsZVwiKTtcbiAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgc2V0dGVyXCIpO1xuICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCB3cml0ZSBwcml2YXRlIG1lbWJlciB0byBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xuICByZXR1cm4gKGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyLCB2YWx1ZSkgOiBmID8gZi52YWx1ZSA9IHZhbHVlIDogc3RhdGUuc2V0KHJlY2VpdmVyLCB2YWx1ZSkpLCB2YWx1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRJbihzdGF0ZSwgcmVjZWl2ZXIpIHtcbiAgaWYgKHJlY2VpdmVyID09PSBudWxsIHx8ICh0eXBlb2YgcmVjZWl2ZXIgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIHJlY2VpdmVyICE9PSBcImZ1bmN0aW9uXCIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHVzZSAnaW4nIG9wZXJhdG9yIG9uIG5vbi1vYmplY3RcIik7XG4gIHJldHVybiB0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyID09PSBzdGF0ZSA6IHN0YXRlLmhhcyhyZWNlaXZlcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2FkZERpc3Bvc2FibGVSZXNvdXJjZShlbnYsIHZhbHVlLCBhc3luYykge1xuICBpZiAodmFsdWUgIT09IG51bGwgJiYgdmFsdWUgIT09IHZvaWQgMCkge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIHZhbHVlICE9PSBcImZ1bmN0aW9uXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJPYmplY3QgZXhwZWN0ZWQuXCIpO1xuICAgIHZhciBkaXNwb3NlLCBpbm5lcjtcbiAgICBpZiAoYXN5bmMpIHtcbiAgICAgIGlmICghU3ltYm9sLmFzeW5jRGlzcG9zZSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0Rpc3Bvc2UgaXMgbm90IGRlZmluZWQuXCIpO1xuICAgICAgZGlzcG9zZSA9IHZhbHVlW1N5bWJvbC5hc3luY0Rpc3Bvc2VdO1xuICAgIH1cbiAgICBpZiAoZGlzcG9zZSA9PT0gdm9pZCAwKSB7XG4gICAgICBpZiAoIVN5bWJvbC5kaXNwb3NlKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmRpc3Bvc2UgaXMgbm90IGRlZmluZWQuXCIpO1xuICAgICAgZGlzcG9zZSA9IHZhbHVlW1N5bWJvbC5kaXNwb3NlXTtcbiAgICAgIGlmIChhc3luYykgaW5uZXIgPSBkaXNwb3NlO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGRpc3Bvc2UgIT09IFwiZnVuY3Rpb25cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk9iamVjdCBub3QgZGlzcG9zYWJsZS5cIik7XG4gICAgaWYgKGlubmVyKSBkaXNwb3NlID0gZnVuY3Rpb24oKSB7IHRyeSB7IGlubmVyLmNhbGwodGhpcyk7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIFByb21pc2UucmVqZWN0KGUpOyB9IH07XG4gICAgZW52LnN0YWNrLnB1c2goeyB2YWx1ZTogdmFsdWUsIGRpc3Bvc2U6IGRpc3Bvc2UsIGFzeW5jOiBhc3luYyB9KTtcbiAgfVxuICBlbHNlIGlmIChhc3luYykge1xuICAgIGVudi5zdGFjay5wdXNoKHsgYXN5bmM6IHRydWUgfSk7XG4gIH1cbiAgcmV0dXJuIHZhbHVlO1xufVxuXG52YXIgX1N1cHByZXNzZWRFcnJvciA9IHR5cGVvZiBTdXBwcmVzc2VkRXJyb3IgPT09IFwiZnVuY3Rpb25cIiA/IFN1cHByZXNzZWRFcnJvciA6IGZ1bmN0aW9uIChlcnJvciwgc3VwcHJlc3NlZCwgbWVzc2FnZSkge1xuICB2YXIgZSA9IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgcmV0dXJuIGUubmFtZSA9IFwiU3VwcHJlc3NlZEVycm9yXCIsIGUuZXJyb3IgPSBlcnJvciwgZS5zdXBwcmVzc2VkID0gc3VwcHJlc3NlZCwgZTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2Rpc3Bvc2VSZXNvdXJjZXMoZW52KSB7XG4gIGZ1bmN0aW9uIGZhaWwoZSkge1xuICAgIGVudi5lcnJvciA9IGVudi5oYXNFcnJvciA/IG5ldyBfU3VwcHJlc3NlZEVycm9yKGUsIGVudi5lcnJvciwgXCJBbiBlcnJvciB3YXMgc3VwcHJlc3NlZCBkdXJpbmcgZGlzcG9zYWwuXCIpIDogZTtcbiAgICBlbnYuaGFzRXJyb3IgPSB0cnVlO1xuICB9XG4gIHZhciByLCBzID0gMDtcbiAgZnVuY3Rpb24gbmV4dCgpIHtcbiAgICB3aGlsZSAociA9IGVudi5zdGFjay5wb3AoKSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKCFyLmFzeW5jICYmIHMgPT09IDEpIHJldHVybiBzID0gMCwgZW52LnN0YWNrLnB1c2gociksIFByb21pc2UucmVzb2x2ZSgpLnRoZW4obmV4dCk7XG4gICAgICAgIGlmIChyLmRpc3Bvc2UpIHtcbiAgICAgICAgICB2YXIgcmVzdWx0ID0gci5kaXNwb3NlLmNhbGwoci52YWx1ZSk7XG4gICAgICAgICAgaWYgKHIuYXN5bmMpIHJldHVybiBzIHw9IDIsIFByb21pc2UucmVzb2x2ZShyZXN1bHQpLnRoZW4obmV4dCwgZnVuY3Rpb24oZSkgeyBmYWlsKGUpOyByZXR1cm4gbmV4dCgpOyB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHMgfD0gMTtcbiAgICAgIH1cbiAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgIGZhaWwoZSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChzID09PSAxKSByZXR1cm4gZW52Lmhhc0Vycm9yID8gUHJvbWlzZS5yZWplY3QoZW52LmVycm9yKSA6IFByb21pc2UucmVzb2x2ZSgpO1xuICAgIGlmIChlbnYuaGFzRXJyb3IpIHRocm93IGVudi5lcnJvcjtcbiAgfVxuICByZXR1cm4gbmV4dCgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19yZXdyaXRlUmVsYXRpdmVJbXBvcnRFeHRlbnNpb24ocGF0aCwgcHJlc2VydmVKc3gpIHtcbiAgaWYgKHR5cGVvZiBwYXRoID09PSBcInN0cmluZ1wiICYmIC9eXFwuXFwuP1xcLy8udGVzdChwYXRoKSkge1xuICAgICAgcmV0dXJuIHBhdGgucmVwbGFjZSgvXFwuKHRzeCkkfCgoPzpcXC5kKT8pKCg/OlxcLlteLi9dKz8pPylcXC4oW2NtXT8pdHMkL2ksIGZ1bmN0aW9uIChtLCB0c3gsIGQsIGV4dCwgY20pIHtcbiAgICAgICAgICByZXR1cm4gdHN4ID8gcHJlc2VydmVKc3ggPyBcIi5qc3hcIiA6IFwiLmpzXCIgOiBkICYmICghZXh0IHx8ICFjbSkgPyBtIDogKGQgKyBleHQgKyBcIi5cIiArIGNtLnRvTG93ZXJDYXNlKCkgKyBcImpzXCIpO1xuICAgICAgfSk7XG4gIH1cbiAgcmV0dXJuIHBhdGg7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgX19leHRlbmRzLFxuICBfX2Fzc2lnbixcbiAgX19yZXN0LFxuICBfX2RlY29yYXRlLFxuICBfX3BhcmFtLFxuICBfX2VzRGVjb3JhdGUsXG4gIF9fcnVuSW5pdGlhbGl6ZXJzLFxuICBfX3Byb3BLZXksXG4gIF9fc2V0RnVuY3Rpb25OYW1lLFxuICBfX21ldGFkYXRhLFxuICBfX2F3YWl0ZXIsXG4gIF9fZ2VuZXJhdG9yLFxuICBfX2NyZWF0ZUJpbmRpbmcsXG4gIF9fZXhwb3J0U3RhcixcbiAgX192YWx1ZXMsXG4gIF9fcmVhZCxcbiAgX19zcHJlYWQsXG4gIF9fc3ByZWFkQXJyYXlzLFxuICBfX3NwcmVhZEFycmF5LFxuICBfX2F3YWl0LFxuICBfX2FzeW5jR2VuZXJhdG9yLFxuICBfX2FzeW5jRGVsZWdhdG9yLFxuICBfX2FzeW5jVmFsdWVzLFxuICBfX21ha2VUZW1wbGF0ZU9iamVjdCxcbiAgX19pbXBvcnRTdGFyLFxuICBfX2ltcG9ydERlZmF1bHQsXG4gIF9fY2xhc3NQcml2YXRlRmllbGRHZXQsXG4gIF9fY2xhc3NQcml2YXRlRmllbGRTZXQsXG4gIF9fY2xhc3NQcml2YXRlRmllbGRJbixcbiAgX19hZGREaXNwb3NhYmxlUmVzb3VyY2UsXG4gIF9fZGlzcG9zZVJlc291cmNlcyxcbiAgX19yZXdyaXRlUmVsYXRpdmVJbXBvcnRFeHRlbnNpb24sXG59O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9leHBvcnRcclxuaW1wb3J0ICogYXMgbG9hZGVycyBmcm9tIFwiQGx0cy9sb2FkZXJzL2xlZ2FjeS9sZWdhY3ktZ2xURjFGaWxlTG9hZGVyXCI7XHJcbmV4cG9ydCB7IGxvYWRlcnMgfTtcclxuZXhwb3J0IGRlZmF1bHQgbG9hZGVycztcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9