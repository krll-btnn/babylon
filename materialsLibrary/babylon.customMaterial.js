(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("babylonjs"));
	else if(typeof define === 'function' && define.amd)
		define("babylonjs-materials", ["babylonjs"], factory);
	else if(typeof exports === 'object')
		exports["babylonjs-materials"] = factory(require("babylonjs"));
	else
		root["MATERIALS"] = factory(root["BABYLON"]);
})((typeof self !== "undefined" ? self : typeof global !== "undefined" ? global : this), (__WEBPACK_EXTERNAL_MODULE_babylonjs_Materials_effect__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../../../dev/materials/src/custom/customMaterial.ts":
/*!***********************************************************!*\
  !*** ../../../dev/materials/src/custom/customMaterial.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomMaterial: () => (/* binding */ CustomMaterial),
/* harmony export */   CustomShaderStructure: () => (/* binding */ CustomShaderStructure),
/* harmony export */   ShaderSpecialParts: () => (/* binding */ ShaderSpecialParts)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "../../../../node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var babylonjs_Materials_effect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs/Shaders/default.fragment */ "babylonjs/Materials/effect");
/* harmony import */ var babylonjs_Materials_effect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Materials_effect__WEBPACK_IMPORTED_MODULE_0__);







/**
 * Structure of a custom shader
 */
var CustomShaderStructure = /** @class */ (function () {
    function CustomShaderStructure() {
    }
    return CustomShaderStructure;
}());

/**
 * Parts of a shader
 */
var ShaderSpecialParts = /** @class */ (function () {
    function ShaderSpecialParts() {
    }
    return ShaderSpecialParts;
}());

/**
 * Customized material
 */
var CustomMaterial = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(CustomMaterial, _super);
    function CustomMaterial(name, scene) {
        var _this = _super.call(this, name, scene, true) || this;
        _this.CustomParts = new ShaderSpecialParts();
        _this.customShaderNameResolve = _this.Builder;
        _this.FragmentShader = babylonjs_Materials_effect__WEBPACK_IMPORTED_MODULE_0__.Effect.ShadersStore["defaultPixelShader"];
        _this.VertexShader = babylonjs_Materials_effect__WEBPACK_IMPORTED_MODULE_0__.Effect.ShadersStore["defaultVertexShader"];
        CustomMaterial.ShaderIndexer++;
        _this._createdShaderName = "custom_" + CustomMaterial.ShaderIndexer;
        return _this;
    }
    /**
     * Runs after the material is bound to a mesh
     * @param mesh mesh bound
     * @param effect bound effect used to render
     */
    CustomMaterial.prototype.AttachAfterBind = function (mesh, effect) {
        if (this._newUniformInstances) {
            for (var el in this._newUniformInstances) {
                var ea = el.toString().split("-");
                if (ea[0] == "vec2") {
                    effect.setVector2(ea[1], this._newUniformInstances[el]);
                }
                else if (ea[0] == "vec3") {
                    if (this._newUniformInstances[el] instanceof babylonjs_Materials_effect__WEBPACK_IMPORTED_MODULE_0__.Color3) {
                        effect.setColor3(ea[1], this._newUniformInstances[el]);
                    }
                    else {
                        effect.setVector3(ea[1], this._newUniformInstances[el]);
                    }
                }
                else if (ea[0] == "vec4") {
                    if (this._newUniformInstances[el] instanceof babylonjs_Materials_effect__WEBPACK_IMPORTED_MODULE_0__.Color4) {
                        effect.setDirectColor4(ea[1], this._newUniformInstances[el]);
                    }
                    else {
                        effect.setVector4(ea[1], this._newUniformInstances[el]);
                    }
                    effect.setVector4(ea[1], this._newUniformInstances[el]);
                }
                else if (ea[0] == "mat4") {
                    effect.setMatrix(ea[1], this._newUniformInstances[el]);
                }
                else if (ea[0] == "float") {
                    effect.setFloat(ea[1], this._newUniformInstances[el]);
                }
            }
        }
        if (this._newSamplerInstances) {
            for (var el in this._newSamplerInstances) {
                var ea = el.toString().split("-");
                if (ea[0] == "sampler2D" && this._newSamplerInstances[el].isReady && this._newSamplerInstances[el].isReady()) {
                    effect.setTexture(ea[1], this._newSamplerInstances[el]);
                }
            }
        }
    };
    /**
     * @internal
     */
    CustomMaterial.prototype.ReviewUniform = function (name, arr) {
        if (name == "uniform" && this._newUniforms) {
            for (var ind = 0; ind < this._newUniforms.length; ind++) {
                if (this._customUniform[ind].indexOf("sampler") == -1) {
                    arr.push(this._newUniforms[ind].replace(/\[\d*\]/g, ""));
                }
            }
        }
        if (name == "sampler" && this._newUniforms) {
            for (var ind = 0; ind < this._newUniforms.length; ind++) {
                if (this._customUniform[ind].indexOf("sampler") != -1) {
                    arr.push(this._newUniforms[ind].replace(/\[\d*\]/g, ""));
                }
            }
        }
        return arr;
    };
    /**
     * Builds the material
     * @param shaderName name of the shader
     * @param uniforms list of uniforms
     * @param uniformBuffers list of uniform buffers
     * @param samplers list of samplers
     * @param defines list of defines
     * @param attributes list of attributes
     * @returns the shader name
     */
    CustomMaterial.prototype.Builder = function (shaderName, uniforms, uniformBuffers, samplers, defines, attributes) {
        if (attributes && this._customAttributes && this._customAttributes.length > 0) {
            attributes.push.apply(attributes, this._customAttributes);
        }
        this.ReviewUniform("uniform", uniforms);
        this.ReviewUniform("sampler", samplers);
        var name = this._createdShaderName;
        if (babylonjs_Materials_effect__WEBPACK_IMPORTED_MODULE_0__.Effect.ShadersStore[name + "VertexShader"] && babylonjs_Materials_effect__WEBPACK_IMPORTED_MODULE_0__.Effect.ShadersStore[name + "PixelShader"]) {
            return name;
        }
        babylonjs_Materials_effect__WEBPACK_IMPORTED_MODULE_0__.Effect.ShadersStore[name + "VertexShader"] = this._injectCustomCode(this.VertexShader, "vertex");
        babylonjs_Materials_effect__WEBPACK_IMPORTED_MODULE_0__.Effect.ShadersStore[name + "PixelShader"] = this._injectCustomCode(this.FragmentShader, "fragment");
        return name;
    };
    CustomMaterial.prototype._injectCustomCode = function (code, shaderType) {
        var customCode = this._getCustomCode(shaderType);
        for (var point in customCode) {
            var injectedCode = customCode[point];
            if (injectedCode && injectedCode.length > 0) {
                var fullPointName = "#define " + point;
                code = code.replace(fullPointName, "\n" + injectedCode + "\n" + fullPointName);
            }
        }
        return code;
    };
    CustomMaterial.prototype._getCustomCode = function (shaderType) {
        var _a, _b;
        if (shaderType === "vertex") {
            return {
                CUSTOM_VERTEX_BEGIN: this.CustomParts.Vertex_Begin,
                CUSTOM_VERTEX_DEFINITIONS: (((_a = this._customUniform) === null || _a === void 0 ? void 0 : _a.join("\n")) || "") + (this.CustomParts.Vertex_Definitions || ""),
                CUSTOM_VERTEX_MAIN_BEGIN: this.CustomParts.Vertex_MainBegin,
                CUSTOM_VERTEX_UPDATE_POSITION: this.CustomParts.Vertex_Before_PositionUpdated,
                CUSTOM_VERTEX_UPDATE_NORMAL: this.CustomParts.Vertex_Before_NormalUpdated,
                CUSTOM_VERTEX_MAIN_END: this.CustomParts.Vertex_MainEnd,
                CUSTOM_VERTEX_UPDATE_WORLDPOS: this.CustomParts.Vertex_After_WorldPosComputed,
            };
        }
        return {
            CUSTOM_FRAGMENT_BEGIN: this.CustomParts.Fragment_Begin,
            CUSTOM_FRAGMENT_DEFINITIONS: (((_b = this._customUniform) === null || _b === void 0 ? void 0 : _b.join("\n")) || "") + (this.CustomParts.Fragment_Definitions || ""),
            CUSTOM_FRAGMENT_MAIN_BEGIN: this.CustomParts.Fragment_MainBegin,
            CUSTOM_FRAGMENT_UPDATE_DIFFUSE: this.CustomParts.Fragment_Custom_Diffuse,
            CUSTOM_FRAGMENT_UPDATE_ALPHA: this.CustomParts.Fragment_Custom_Alpha,
            CUSTOM_FRAGMENT_BEFORE_LIGHTS: this.CustomParts.Fragment_Before_Lights,
            CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR: this.CustomParts.Fragment_Before_FragColor,
            CUSTOM_FRAGMENT_MAIN_END: this.CustomParts.Fragment_MainEnd,
            CUSTOM_FRAGMENT_BEFORE_FOG: this.CustomParts.Fragment_Before_Fog,
        };
    };
    CustomMaterial.prototype._afterBind = function (mesh, effect, subMesh) {
        if (effect === void 0) { effect = null; }
        if (!effect) {
            return;
        }
        this.AttachAfterBind(mesh, effect);
        try {
            _super.prototype._afterBind.call(this, mesh, effect, subMesh);
        }
        catch (e) { }
    };
    /**
     * Adds a new uniform to the shader
     * @param name the name of the uniform to add
     * @param kind the type of the uniform to add
     * @param param the value of the uniform to add
     * @returns the current material
     */
    CustomMaterial.prototype.AddUniform = function (name, kind, param) {
        if (!this._customUniform) {
            this._customUniform = new Array();
            this._newUniforms = new Array();
            this._newSamplerInstances = {};
            this._newUniformInstances = {};
        }
        if (param) {
            if (kind.indexOf("sampler") != -1) {
                this._newSamplerInstances[kind + "-" + name] = param;
            }
            else {
                this._newUniformInstances[kind + "-" + name] = param;
            }
        }
        this._customUniform.push("uniform " + kind + " " + name + ";");
        this._newUniforms.push(name);
        return this;
    };
    /**
     * Adds a custom attribute
     * @param name the name of the attribute
     * @returns the current material
     */
    CustomMaterial.prototype.AddAttribute = function (name) {
        if (!this._customAttributes) {
            this._customAttributes = [];
        }
        this._customAttributes.push(name);
        return this;
    };
    /**
     * Sets the code on Fragment_Begin portion
     * @param shaderPart the code string
     * @returns the current material
     */
    CustomMaterial.prototype.Fragment_Begin = function (shaderPart) {
        this.CustomParts.Fragment_Begin = shaderPart;
        return this;
    };
    /**
     * Sets the code on Fragment_Definitions portion
     * @param shaderPart the code string
     * @returns the current material
     */
    CustomMaterial.prototype.Fragment_Definitions = function (shaderPart) {
        this.CustomParts.Fragment_Definitions = shaderPart;
        return this;
    };
    /**
     * Sets the code on Fragment_MainBegin portion
     * @param shaderPart the code string
     * @returns the current material
     */
    CustomMaterial.prototype.Fragment_MainBegin = function (shaderPart) {
        this.CustomParts.Fragment_MainBegin = shaderPart;
        return this;
    };
    /**
     * Sets the code on Fragment_MainEnd portion
     * @param shaderPart the code string
     * @returns the current material
     */
    CustomMaterial.prototype.Fragment_MainEnd = function (shaderPart) {
        this.CustomParts.Fragment_MainEnd = shaderPart;
        return this;
    };
    /**
     * Sets the code on Fragment_Custom_Diffuse portion
     * @param shaderPart the code string
     * @returns the current material
     */
    CustomMaterial.prototype.Fragment_Custom_Diffuse = function (shaderPart) {
        this.CustomParts.Fragment_Custom_Diffuse = shaderPart.replace("result", "diffuseColor");
        return this;
    };
    /**
     * Sets the code on Fragment_Custom_Alpha portion
     * @param shaderPart the code string
     * @returns the current material
     */
    CustomMaterial.prototype.Fragment_Custom_Alpha = function (shaderPart) {
        this.CustomParts.Fragment_Custom_Alpha = shaderPart.replace("result", "alpha");
        return this;
    };
    /**
     * Sets the code on Fragment_Before_Lights portion
     * @param shaderPart the code string
     * @returns the current material
     */
    CustomMaterial.prototype.Fragment_Before_Lights = function (shaderPart) {
        this.CustomParts.Fragment_Before_Lights = shaderPart;
        return this;
    };
    /**
     * Sets the code on Fragment_Before_Fog portion
     * @param shaderPart the code string
     * @returns the current material
     */
    CustomMaterial.prototype.Fragment_Before_Fog = function (shaderPart) {
        this.CustomParts.Fragment_Before_Fog = shaderPart;
        return this;
    };
    /**
     * Sets the code on Fragment_Before_FragColor portion
     * @param shaderPart the code string
     * @returns the current material
     */
    CustomMaterial.prototype.Fragment_Before_FragColor = function (shaderPart) {
        this.CustomParts.Fragment_Before_FragColor = shaderPart.replace("result", "color");
        return this;
    };
    /**
     * Sets the code on Vertex_Begin portion
     * @param shaderPart the code string
     * @returns the current material
     */
    CustomMaterial.prototype.Vertex_Begin = function (shaderPart) {
        this.CustomParts.Vertex_Begin = shaderPart;
        return this;
    };
    /**
     * Sets the code on Vertex_Definitions portion
     * @param shaderPart the code string
     * @returns the current material
     */
    CustomMaterial.prototype.Vertex_Definitions = function (shaderPart) {
        this.CustomParts.Vertex_Definitions = shaderPart;
        return this;
    };
    /**
     * Sets the code on Vertex_MainBegin portion
     * @param shaderPart the code string
     * @returns the current material
     */
    CustomMaterial.prototype.Vertex_MainBegin = function (shaderPart) {
        this.CustomParts.Vertex_MainBegin = shaderPart;
        return this;
    };
    /**
     * Sets the code on Vertex_Before_PositionUpdated portion
     * @param shaderPart the code string
     * @returns the current material
     */
    CustomMaterial.prototype.Vertex_Before_PositionUpdated = function (shaderPart) {
        this.CustomParts.Vertex_Before_PositionUpdated = shaderPart.replace("result", "positionUpdated");
        return this;
    };
    /**
     * Sets the code on Vertex_Before_NormalUpdated portion
     * @param shaderPart the code string
     * @returns the current material
     */
    CustomMaterial.prototype.Vertex_Before_NormalUpdated = function (shaderPart) {
        this.CustomParts.Vertex_Before_NormalUpdated = shaderPart.replace("result", "normalUpdated");
        return this;
    };
    /**
     * Sets the code on Vertex_After_WorldPosComputed portion
     * @param shaderPart the code string
     * @returns the current material
     */
    CustomMaterial.prototype.Vertex_After_WorldPosComputed = function (shaderPart) {
        this.CustomParts.Vertex_After_WorldPosComputed = shaderPart;
        return this;
    };
    /**
     * Sets the code on Vertex_MainEnd portion
     * @param shaderPart the code string
     * @returns the current material
     */
    CustomMaterial.prototype.Vertex_MainEnd = function (shaderPart) {
        this.CustomParts.Vertex_MainEnd = shaderPart;
        return this;
    };
    /**
     * Index for each created shader
     */
    CustomMaterial.ShaderIndexer = 1;
    return CustomMaterial;
}(babylonjs_Materials_effect__WEBPACK_IMPORTED_MODULE_0__.StandardMaterial));
(0,babylonjs_Materials_effect__WEBPACK_IMPORTED_MODULE_0__.RegisterClass)("BABYLON.CustomMaterial", CustomMaterial);


/***/ }),

/***/ "../../../dev/materials/src/custom/index.ts":
/*!**************************************************!*\
  !*** ../../../dev/materials/src/custom/index.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomMaterial: () => (/* reexport safe */ _customMaterial__WEBPACK_IMPORTED_MODULE_0__.CustomMaterial),
/* harmony export */   CustomShaderStructure: () => (/* reexport safe */ _customMaterial__WEBPACK_IMPORTED_MODULE_0__.CustomShaderStructure),
/* harmony export */   PBRCustomMaterial: () => (/* reexport safe */ _pbrCustomMaterial__WEBPACK_IMPORTED_MODULE_1__.PBRCustomMaterial),
/* harmony export */   ShaderAlbedoParts: () => (/* reexport safe */ _pbrCustomMaterial__WEBPACK_IMPORTED_MODULE_1__.ShaderAlbedoParts),
/* harmony export */   ShaderAlebdoParts: () => (/* reexport safe */ _pbrCustomMaterial__WEBPACK_IMPORTED_MODULE_1__.ShaderAlebdoParts),
/* harmony export */   ShaderSpecialParts: () => (/* reexport safe */ _customMaterial__WEBPACK_IMPORTED_MODULE_0__.ShaderSpecialParts)
/* harmony export */ });
/* harmony import */ var _customMaterial__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customMaterial */ "../../../dev/materials/src/custom/customMaterial.ts");
/* harmony import */ var _pbrCustomMaterial__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pbrCustomMaterial */ "../../../dev/materials/src/custom/pbrCustomMaterial.ts");




/***/ }),

/***/ "../../../dev/materials/src/custom/pbrCustomMaterial.ts":
/*!**************************************************************!*\
  !*** ../../../dev/materials/src/custom/pbrCustomMaterial.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PBRCustomMaterial: () => (/* binding */ PBRCustomMaterial),
/* harmony export */   ShaderAlbedoParts: () => (/* binding */ ShaderAlbedoParts),
/* harmony export */   ShaderAlebdoParts: () => (/* binding */ ShaderAlebdoParts)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "../../../../node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var babylonjs_Materials_effect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs/Shaders/pbr.fragment */ "babylonjs/Materials/effect");
/* harmony import */ var babylonjs_Materials_effect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Materials_effect__WEBPACK_IMPORTED_MODULE_0__);








/**
 * Albedo parts of the shader
 */
var ShaderAlbedoParts = /** @class */ (function () {
    function ShaderAlbedoParts() {
    }
    return ShaderAlbedoParts;
}());

/**
 * @deprecated use ShaderAlbedoParts instead.
 */
var ShaderAlebdoParts = ShaderAlbedoParts;
var PBRCustomMaterial = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(PBRCustomMaterial, _super);
    function PBRCustomMaterial(name, scene) {
        var _this = _super.call(this, name, scene, true) || this;
        _this.CustomParts = new ShaderAlbedoParts();
        _this.customShaderNameResolve = _this.Builder;
        _this.FragmentShader = babylonjs_Materials_effect__WEBPACK_IMPORTED_MODULE_0__.Effect.ShadersStore["pbrPixelShader"];
        _this.VertexShader = babylonjs_Materials_effect__WEBPACK_IMPORTED_MODULE_0__.Effect.ShadersStore["pbrVertexShader"];
        _this.FragmentShader = _this.FragmentShader.replace(/#include<pbrBlockAlbedoOpacity>/g, babylonjs_Materials_effect__WEBPACK_IMPORTED_MODULE_0__.Effect.IncludesShadersStore["pbrBlockAlbedoOpacity"]);
        _this.FragmentShader = _this.FragmentShader.replace(/#include<pbrBlockReflectivity>/g, babylonjs_Materials_effect__WEBPACK_IMPORTED_MODULE_0__.Effect.IncludesShadersStore["pbrBlockReflectivity"]);
        _this.FragmentShader = _this.FragmentShader.replace(/#include<pbrBlockFinalColorComposition>/g, babylonjs_Materials_effect__WEBPACK_IMPORTED_MODULE_0__.Effect.IncludesShadersStore["pbrBlockFinalColorComposition"]);
        PBRCustomMaterial.ShaderIndexer++;
        _this._createdShaderName = "custompbr_" + PBRCustomMaterial.ShaderIndexer;
        return _this;
    }
    /**
     * Runs after the material is bound to a mesh
     * @param mesh mesh bound
     * @param effect bound effect used to render
     */
    PBRCustomMaterial.prototype.AttachAfterBind = function (mesh, effect) {
        if (this._newUniformInstances) {
            for (var el in this._newUniformInstances) {
                var ea = el.toString().split("-");
                if (ea[0] == "vec2") {
                    effect.setVector2(ea[1], this._newUniformInstances[el]);
                }
                else if (ea[0] == "vec3") {
                    if (this._newUniformInstances[el] instanceof babylonjs_Materials_effect__WEBPACK_IMPORTED_MODULE_0__.Color3) {
                        effect.setColor3(ea[1], this._newUniformInstances[el]);
                    }
                    else {
                        effect.setVector3(ea[1], this._newUniformInstances[el]);
                    }
                }
                else if (ea[0] == "vec4") {
                    if (this._newUniformInstances[el] instanceof babylonjs_Materials_effect__WEBPACK_IMPORTED_MODULE_0__.Color4) {
                        effect.setDirectColor4(ea[1], this._newUniformInstances[el]);
                    }
                    else {
                        effect.setVector4(ea[1], this._newUniformInstances[el]);
                    }
                    effect.setVector4(ea[1], this._newUniformInstances[el]);
                }
                else if (ea[0] == "mat4") {
                    effect.setMatrix(ea[1], this._newUniformInstances[el]);
                }
                else if (ea[0] == "float") {
                    effect.setFloat(ea[1], this._newUniformInstances[el]);
                }
            }
        }
        if (this._newSamplerInstances) {
            for (var el in this._newSamplerInstances) {
                var ea = el.toString().split("-");
                if (ea[0] == "sampler2D" && this._newSamplerInstances[el].isReady && this._newSamplerInstances[el].isReady()) {
                    effect.setTexture(ea[1], this._newSamplerInstances[el]);
                }
            }
        }
    };
    /**
     * @internal
     */
    PBRCustomMaterial.prototype.ReviewUniform = function (name, arr) {
        if (name == "uniform" && this._newUniforms) {
            for (var ind = 0; ind < this._newUniforms.length; ind++) {
                if (this._customUniform[ind].indexOf("sampler") == -1) {
                    arr.push(this._newUniforms[ind].replace(/\[\d*\]/g, ""));
                }
            }
        }
        if (name == "sampler" && this._newUniforms) {
            for (var ind = 0; ind < this._newUniforms.length; ind++) {
                if (this._customUniform[ind].indexOf("sampler") != -1) {
                    arr.push(this._newUniforms[ind].replace(/\[\d*\]/g, ""));
                }
            }
        }
        return arr;
    };
    /**
     * Builds the material
     * @param shaderName name of the shader
     * @param uniforms list of uniforms
     * @param uniformBuffers list of uniform buffers
     * @param samplers list of samplers
     * @param defines list of defines
     * @param attributes list of attributes
     * @param options options to compile the shader
     * @returns the shader name
     */
    PBRCustomMaterial.prototype.Builder = function (shaderName, uniforms, uniformBuffers, samplers, defines, attributes, options) {
        if (options) {
            var currentProcessing_1 = options.processFinalCode;
            options.processFinalCode = function (type, code) {
                if (type === "vertex") {
                    return currentProcessing_1 ? currentProcessing_1(type, code) : code;
                }
                var sci = new babylonjs_Materials_effect__WEBPACK_IMPORTED_MODULE_0__.ShaderCodeInliner(code);
                sci.inlineToken = "#define pbr_inline";
                sci.processCode();
                return currentProcessing_1 ? currentProcessing_1(type, sci.code) : sci.code;
            };
        }
        if (attributes && this._customAttributes && this._customAttributes.length > 0) {
            attributes.push.apply(attributes, this._customAttributes);
        }
        this.ReviewUniform("uniform", uniforms);
        this.ReviewUniform("sampler", samplers);
        var name = this._createdShaderName;
        if (babylonjs_Materials_effect__WEBPACK_IMPORTED_MODULE_0__.Effect.ShadersStore[name + "VertexShader"] && babylonjs_Materials_effect__WEBPACK_IMPORTED_MODULE_0__.Effect.ShadersStore[name + "PixelShader"]) {
            return name;
        }
        babylonjs_Materials_effect__WEBPACK_IMPORTED_MODULE_0__.Effect.ShadersStore[name + "VertexShader"] = this._injectCustomCode(this.VertexShader, "vertex");
        babylonjs_Materials_effect__WEBPACK_IMPORTED_MODULE_0__.Effect.ShadersStore[name + "PixelShader"] = this._injectCustomCode(this.FragmentShader, "fragment");
        return name;
    };
    PBRCustomMaterial.prototype._injectCustomCode = function (code, shaderType) {
        var customCode = this._getCustomCode(shaderType);
        for (var point in customCode) {
            var injectedCode = customCode[point];
            if (injectedCode && injectedCode.length > 0) {
                var fullPointName = "#define " + point;
                code = code.replace(fullPointName, "\n" + injectedCode + "\n" + fullPointName);
            }
        }
        return code;
    };
    PBRCustomMaterial.prototype._getCustomCode = function (shaderType) {
        var _a, _b;
        if (shaderType === "vertex") {
            return {
                CUSTOM_VERTEX_BEGIN: this.CustomParts.Vertex_Begin,
                CUSTOM_VERTEX_DEFINITIONS: (((_a = this._customUniform) === null || _a === void 0 ? void 0 : _a.join("\n")) || "") + (this.CustomParts.Vertex_Definitions || ""),
                CUSTOM_VERTEX_MAIN_BEGIN: this.CustomParts.Vertex_MainBegin,
                CUSTOM_VERTEX_UPDATE_POSITION: this.CustomParts.Vertex_Before_PositionUpdated,
                CUSTOM_VERTEX_UPDATE_NORMAL: this.CustomParts.Vertex_Before_NormalUpdated,
                CUSTOM_VERTEX_MAIN_END: this.CustomParts.Vertex_MainEnd,
                CUSTOM_VERTEX_UPDATE_WORLDPOS: this.CustomParts.Vertex_After_WorldPosComputed,
            };
        }
        return {
            CUSTOM_FRAGMENT_BEGIN: this.CustomParts.Fragment_Begin,
            CUSTOM_FRAGMENT_MAIN_BEGIN: this.CustomParts.Fragment_MainBegin,
            CUSTOM_FRAGMENT_DEFINITIONS: (((_b = this._customUniform) === null || _b === void 0 ? void 0 : _b.join("\n")) || "") + (this.CustomParts.Fragment_Definitions || ""),
            CUSTOM_FRAGMENT_UPDATE_ALBEDO: this.CustomParts.Fragment_Custom_Albedo,
            CUSTOM_FRAGMENT_UPDATE_ALPHA: this.CustomParts.Fragment_Custom_Alpha,
            CUSTOM_FRAGMENT_BEFORE_LIGHTS: this.CustomParts.Fragment_Before_Lights,
            CUSTOM_FRAGMENT_UPDATE_METALLICROUGHNESS: this.CustomParts.Fragment_Custom_MetallicRoughness,
            CUSTOM_FRAGMENT_UPDATE_MICROSURFACE: this.CustomParts.Fragment_Custom_MicroSurface,
            CUSTOM_FRAGMENT_BEFORE_FINALCOLORCOMPOSITION: this.CustomParts.Fragment_Before_FinalColorComposition,
            CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR: this.CustomParts.Fragment_Before_FragColor,
            CUSTOM_FRAGMENT_MAIN_END: this.CustomParts.Fragment_MainEnd,
            CUSTOM_FRAGMENT_BEFORE_FOG: this.CustomParts.Fragment_Before_Fog,
        };
    };
    PBRCustomMaterial.prototype._afterBind = function (mesh, effect, subMesh) {
        if (effect === void 0) { effect = null; }
        if (!effect) {
            return;
        }
        this.AttachAfterBind(mesh, effect);
        try {
            _super.prototype._afterBind.call(this, mesh, effect, subMesh);
        }
        catch (e) { }
    };
    /**
     * Adds a new uniform to the shader
     * @param name the name of the uniform to add
     * @param kind the type of the uniform to add
     * @param param the value of the uniform to add
     * @returns the current material
     */
    PBRCustomMaterial.prototype.AddUniform = function (name, kind, param) {
        if (!this._customUniform) {
            this._customUniform = new Array();
            this._newUniforms = new Array();
            this._newSamplerInstances = {};
            this._newUniformInstances = {};
        }
        if (param) {
            if (kind.indexOf("sampler") != -1) {
                this._newSamplerInstances[kind + "-" + name] = param;
            }
            else {
                this._newUniformInstances[kind + "-" + name] = param;
            }
        }
        this._customUniform.push("uniform " + kind + " " + name + ";");
        this._newUniforms.push(name);
        return this;
    };
    /**
     * Adds a custom attribute
     * @param name the name of the attribute
     * @returns the current material
     */
    PBRCustomMaterial.prototype.AddAttribute = function (name) {
        if (!this._customAttributes) {
            this._customAttributes = [];
        }
        this._customAttributes.push(name);
        return this;
    };
    /**
     * Sets the code on Fragment_Begin portion
     * @param shaderPart the code string
     * @returns the current material
     */
    PBRCustomMaterial.prototype.Fragment_Begin = function (shaderPart) {
        this.CustomParts.Fragment_Begin = shaderPart;
        return this;
    };
    /**
     * Sets the code on Fragment_Definitions portion
     * @param shaderPart the code string
     * @returns the current material
     */
    PBRCustomMaterial.prototype.Fragment_Definitions = function (shaderPart) {
        this.CustomParts.Fragment_Definitions = shaderPart;
        return this;
    };
    /**
     * Sets the code on Fragment_MainBegin portion
     * @param shaderPart the code string
     * @returns the current material
     */
    PBRCustomMaterial.prototype.Fragment_MainBegin = function (shaderPart) {
        this.CustomParts.Fragment_MainBegin = shaderPart;
        return this;
    };
    /**
     * Sets the code on Fragment_Custom_Albedo portion
     * @param shaderPart the code string
     * @returns the current material
     */
    PBRCustomMaterial.prototype.Fragment_Custom_Albedo = function (shaderPart) {
        this.CustomParts.Fragment_Custom_Albedo = shaderPart.replace("result", "surfaceAlbedo");
        return this;
    };
    /**
     * Sets the code on Fragment_Custom_Alpha portion
     * @param shaderPart the code string
     * @returns the current material
     */
    PBRCustomMaterial.prototype.Fragment_Custom_Alpha = function (shaderPart) {
        this.CustomParts.Fragment_Custom_Alpha = shaderPart.replace("result", "alpha");
        return this;
    };
    /**
     * Sets the code on Fragment_Before_Lights portion
     * @param shaderPart the code string
     * @returns the current material
     */
    PBRCustomMaterial.prototype.Fragment_Before_Lights = function (shaderPart) {
        this.CustomParts.Fragment_Before_Lights = shaderPart;
        return this;
    };
    /**
     * Sets the code on Fragment_Custom_MetallicRoughness portion
     * @param shaderPart the code string
     * @returns the current material
     */
    PBRCustomMaterial.prototype.Fragment_Custom_MetallicRoughness = function (shaderPart) {
        this.CustomParts.Fragment_Custom_MetallicRoughness = shaderPart;
        return this;
    };
    /**
     * Sets the code on Fragment_Custom_MicroSurface portion
     * @param shaderPart the code string
     * @returns the current material
     */
    PBRCustomMaterial.prototype.Fragment_Custom_MicroSurface = function (shaderPart) {
        this.CustomParts.Fragment_Custom_MicroSurface = shaderPart;
        return this;
    };
    /**
     * Sets the code on Fragment_Before_Fog portion
     * @param shaderPart the code string
     * @returns the current material
     */
    PBRCustomMaterial.prototype.Fragment_Before_Fog = function (shaderPart) {
        this.CustomParts.Fragment_Before_Fog = shaderPart;
        return this;
    };
    /**
     * Sets the code on Fragment_Before_FinalColorComposition portion
     * @param shaderPart the code string
     * @returns the current material
     */
    PBRCustomMaterial.prototype.Fragment_Before_FinalColorComposition = function (shaderPart) {
        this.CustomParts.Fragment_Before_FinalColorComposition = shaderPart;
        return this;
    };
    /**
     * Sets the code on Fragment_Before_FragColor portion
     * @param shaderPart the code string
     * @returns the current material
     */
    PBRCustomMaterial.prototype.Fragment_Before_FragColor = function (shaderPart) {
        this.CustomParts.Fragment_Before_FragColor = shaderPart.replace("result", "color");
        return this;
    };
    /**
     * Sets the code on Fragment_MainEnd portion
     * @param shaderPart the code string
     * @returns the current material
     */
    PBRCustomMaterial.prototype.Fragment_MainEnd = function (shaderPart) {
        this.CustomParts.Fragment_MainEnd = shaderPart;
        return this;
    };
    /**
     * Sets the code on Vertex_Begin portion
     * @param shaderPart the code string
     * @returns the current material
     */
    PBRCustomMaterial.prototype.Vertex_Begin = function (shaderPart) {
        this.CustomParts.Vertex_Begin = shaderPart;
        return this;
    };
    /**
     * Sets the code on Vertex_Definitions portion
     * @param shaderPart the code string
     * @returns the current material
     */
    PBRCustomMaterial.prototype.Vertex_Definitions = function (shaderPart) {
        this.CustomParts.Vertex_Definitions = shaderPart;
        return this;
    };
    /**
     * Sets the code on Vertex_MainBegin portion
     * @param shaderPart the code string
     * @returns the current material
     */
    PBRCustomMaterial.prototype.Vertex_MainBegin = function (shaderPart) {
        this.CustomParts.Vertex_MainBegin = shaderPart;
        return this;
    };
    /**
     * Sets the code on Vertex_Before_PositionUpdated portion
     * @param shaderPart the code string
     * @returns the current material
     */
    PBRCustomMaterial.prototype.Vertex_Before_PositionUpdated = function (shaderPart) {
        this.CustomParts.Vertex_Before_PositionUpdated = shaderPart.replace("result", "positionUpdated");
        return this;
    };
    /**
     * Sets the code on Vertex_Before_NormalUpdated portion
     * @param shaderPart the code string
     * @returns the current material
     */
    PBRCustomMaterial.prototype.Vertex_Before_NormalUpdated = function (shaderPart) {
        this.CustomParts.Vertex_Before_NormalUpdated = shaderPart.replace("result", "normalUpdated");
        return this;
    };
    /**
     * Sets the code on Vertex_After_WorldPosComputed portion
     * @param shaderPart the code string
     * @returns the current material
     */
    PBRCustomMaterial.prototype.Vertex_After_WorldPosComputed = function (shaderPart) {
        this.CustomParts.Vertex_After_WorldPosComputed = shaderPart;
        return this;
    };
    /**
     * Sets the code on Vertex_MainEnd portion
     * @param shaderPart the code string
     * @returns the current material
     */
    PBRCustomMaterial.prototype.Vertex_MainEnd = function (shaderPart) {
        this.CustomParts.Vertex_MainEnd = shaderPart;
        return this;
    };
    /**
     * Index for each created shader
     */
    PBRCustomMaterial.ShaderIndexer = 1;
    return PBRCustomMaterial;
}(babylonjs_Materials_effect__WEBPACK_IMPORTED_MODULE_0__.PBRMaterial));
(0,babylonjs_Materials_effect__WEBPACK_IMPORTED_MODULE_0__.RegisterClass)("BABYLON.PBRCustomMaterial", PBRCustomMaterial);


/***/ }),

/***/ "../../../lts/materials/src/legacy/legacy-custom.ts":
/*!**********************************************************!*\
  !*** ../../../lts/materials/src/legacy/legacy-custom.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomMaterial: () => (/* reexport safe */ materials_custom_index__WEBPACK_IMPORTED_MODULE_0__.CustomMaterial),
/* harmony export */   CustomShaderStructure: () => (/* reexport safe */ materials_custom_index__WEBPACK_IMPORTED_MODULE_0__.CustomShaderStructure),
/* harmony export */   PBRCustomMaterial: () => (/* reexport safe */ materials_custom_index__WEBPACK_IMPORTED_MODULE_0__.PBRCustomMaterial),
/* harmony export */   ShaderAlbedoParts: () => (/* reexport safe */ materials_custom_index__WEBPACK_IMPORTED_MODULE_0__.ShaderAlbedoParts),
/* harmony export */   ShaderAlebdoParts: () => (/* reexport safe */ materials_custom_index__WEBPACK_IMPORTED_MODULE_0__.ShaderAlebdoParts),
/* harmony export */   ShaderSpecialParts: () => (/* reexport safe */ materials_custom_index__WEBPACK_IMPORTED_MODULE_0__.ShaderSpecialParts)
/* harmony export */ });
/* harmony import */ var materials_custom_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! materials/custom/index */ "../../../dev/materials/src/custom/index.ts");
/* eslint-disable import/no-internal-modules */

/**
 * This is the entry point for the UMD module.
 * The entry point for a future ESM package should be index.ts
 */
var globalObject = typeof __webpack_require__.g !== "undefined" ? __webpack_require__.g : typeof window !== "undefined" ? window : undefined;
if (typeof globalObject !== "undefined") {
    for (var key in materials_custom_index__WEBPACK_IMPORTED_MODULE_0__) {
        globalObject.BABYLON[key] = materials_custom_index__WEBPACK_IMPORTED_MODULE_0__[key];
    }
}



/***/ }),

/***/ "babylonjs/Materials/effect":
/*!****************************************************************************************************!*\
  !*** external {"root":"BABYLON","commonjs":"babylonjs","commonjs2":"babylonjs","amd":"babylonjs"} ***!
  \****************************************************************************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_babylonjs_Materials_effect__;

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
/*!***********************!*\
  !*** ./src/custom.ts ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   materials: () => (/* reexport module object */ _lts_materials_legacy_legacy_custom__WEBPACK_IMPORTED_MODULE_0__)
/* harmony export */ });
/* harmony import */ var _lts_materials_legacy_legacy_custom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lts/materials/legacy/legacy-custom */ "../../../lts/materials/src/legacy/legacy-custom.ts");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_lts_materials_legacy_legacy_custom__WEBPACK_IMPORTED_MODULE_0__);

})();

__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFieWxvbi5jdXN0b21NYXRlcmlhbC5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1JBO0FBRUE7QUFHQTtBQUNBO0FBSUE7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFVQTtBQUFBO0FBQ0E7QUFBQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQXVFQTtBQUFBOztBQUVBOztBQUVBO0FBQ0E7QUFBQTtBQThLQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBOztBQUNBO0FBN0lBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7OztBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBY0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBM1lBOztBQUVBO0FBQ0E7QUF5WUE7QUFBQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOWZBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0NBO0FBRUE7QUFHQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFvRkE7QUFBQTs7QUFFQTs7QUFFQTtBQUNBO0FBRUE7QUFBQTtBQXVNQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUNBO0FBMUtBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7QUFVQTtBQUNBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWtCQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF0Y0E7O0FBRUE7QUFDQTtBQW9jQTtBQUFBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFqQkE7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7OztBQ2RBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ3ZZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDUEE7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9NQVRFUklBTFMvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL01BVEVSSUFMUy8uLi8uLi8uLi9kZXYvbWF0ZXJpYWxzL3NyYy9jdXN0b20vY3VzdG9tTWF0ZXJpYWwudHMiLCJ3ZWJwYWNrOi8vTUFURVJJQUxTLy4uLy4uLy4uL2Rldi9tYXRlcmlhbHMvc3JjL2N1c3RvbS9pbmRleC50cyIsIndlYnBhY2s6Ly9NQVRFUklBTFMvLi4vLi4vLi4vZGV2L21hdGVyaWFscy9zcmMvY3VzdG9tL3BickN1c3RvbU1hdGVyaWFsLnRzIiwid2VicGFjazovL01BVEVSSUFMUy8uLi8uLi8uLi9sdHMvbWF0ZXJpYWxzL3NyYy9sZWdhY3kvbGVnYWN5LWN1c3RvbS50cyIsIndlYnBhY2s6Ly9NQVRFUklBTFMvZXh0ZXJuYWwgdW1kIHtcInJvb3RcIjpcIkJBQllMT05cIixcImNvbW1vbmpzXCI6XCJiYWJ5bG9uanNcIixcImNvbW1vbmpzMlwiOlwiYmFieWxvbmpzXCIsXCJhbWRcIjpcImJhYnlsb25qc1wifSIsIndlYnBhY2s6Ly9NQVRFUklBTFMvLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5tanMiLCJ3ZWJwYWNrOi8vTUFURVJJQUxTL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL01BVEVSSUFMUy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9NQVRFUklBTFMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL01BVEVSSUFMUy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL01BVEVSSUFMUy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL01BVEVSSUFMUy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL01BVEVSSUFMUy8uL3NyYy9jdXN0b20udHMiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiYmFieWxvbmpzXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiYmFieWxvbmpzLW1hdGVyaWFsc1wiLCBbXCJiYWJ5bG9uanNcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiYmFieWxvbmpzLW1hdGVyaWFsc1wiXSA9IGZhY3RvcnkocmVxdWlyZShcImJhYnlsb25qc1wiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiTUFURVJJQUxTXCJdID0gZmFjdG9yeShyb290W1wiQkFCWUxPTlwiXSk7XG59KSgodHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbCA6IHRoaXMpLCAoX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9iYWJ5bG9uanNfTWF0ZXJpYWxzX2VmZmVjdF9fKSA9PiB7XG5yZXR1cm4gIiwiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uICovXHJcbmltcG9ydCB0eXBlIHsgVGV4dHVyZSB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9UZXh0dXJlcy90ZXh0dXJlXCI7XHJcbmltcG9ydCB7IEVmZmVjdCB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9lZmZlY3RcIjtcclxuaW1wb3J0IHR5cGUgeyBNYXRlcmlhbERlZmluZXMgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvbWF0ZXJpYWxEZWZpbmVzXCI7XHJcbmltcG9ydCB7IFN0YW5kYXJkTWF0ZXJpYWwgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvc3RhbmRhcmRNYXRlcmlhbFwiO1xyXG5pbXBvcnQgdHlwZSB7IE1lc2ggfSBmcm9tIFwiY29yZS9NZXNoZXMvbWVzaFwiO1xyXG5pbXBvcnQgdHlwZSB7IFNjZW5lIH0gZnJvbSBcImNvcmUvc2NlbmVcIjtcclxuaW1wb3J0IHsgUmVnaXN0ZXJDbGFzcyB9IGZyb20gXCJjb3JlL01pc2MvdHlwZVN0b3JlXCI7XHJcbmltcG9ydCB7IENvbG9yMywgQ29sb3I0IH0gZnJvbSBcImNvcmUvTWF0aHMvbWF0aC5jb2xvclwiO1xyXG5pbXBvcnQgdHlwZSB7IE51bGxhYmxlIH0gZnJvbSBcImNvcmUvdHlwZXNcIjtcclxuaW1wb3J0IHR5cGUgeyBTdWJNZXNoIH0gZnJvbSBcImNvcmUvTWVzaGVzL3N1Yk1lc2hcIjtcclxuXHJcbmltcG9ydCBcImNvcmUvU2hhZGVycy9kZWZhdWx0LnZlcnRleFwiO1xyXG5pbXBvcnQgXCJjb3JlL1NoYWRlcnMvZGVmYXVsdC5mcmFnbWVudFwiO1xyXG5cclxuLyoqXHJcbiAqIFN0cnVjdHVyZSBvZiBhIGN1c3RvbSBzaGFkZXJcclxuICovXHJcbmV4cG9ydCBjbGFzcyBDdXN0b21TaGFkZXJTdHJ1Y3R1cmUge1xyXG4gICAgLyoqXHJcbiAgICAgKiBGcmFnbWVudCBzdG9yZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgRnJhZ21lbnRTdG9yZTogc3RyaW5nO1xyXG4gICAgLyoqXHJcbiAgICAgKiBWZXJ0ZXggc3RvcmVcclxuICAgICAqL1xyXG4gICAgcHVibGljIFZlcnRleFN0b3JlOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7fVxyXG59XHJcblxyXG4vKipcclxuICogUGFydHMgb2YgYSBzaGFkZXJcclxuICovXHJcbmV4cG9ydCBjbGFzcyBTaGFkZXJTcGVjaWFsUGFydHMge1xyXG4gICAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQmVnaW5uaW5nIG9mIHRoZSBmcmFnbWVudCBzaGFkZXJcclxuICAgICAqL1xyXG4gICAgcHVibGljIEZyYWdtZW50X0JlZ2luOiBzdHJpbmc7XHJcbiAgICAvKipcclxuICAgICAqIFZhcmlhYmxlIGRlZmluaXRpb25zIG9mIHRoZSBmcmFnbWVudCBzaGFkZXJcclxuICAgICAqL1xyXG4gICAgcHVibGljIEZyYWdtZW50X0RlZmluaXRpb25zOiBzdHJpbmc7XHJcbiAgICAvKipcclxuICAgICAqIEJlZ2lubmluZyBvZiB0aGUgZnJhZ21lbnQgbWFpbiBmdW5jdGlvblxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgRnJhZ21lbnRfTWFpbkJlZ2luOiBzdHJpbmc7XHJcbiAgICAvKipcclxuICAgICAqIEVuZCBvZiB0aGUgZnJhZ21lbnQgbWFpbiBmdW5jdGlvblxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgRnJhZ21lbnRfTWFpbkVuZDogc3RyaW5nO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGlmZnVzZSBjb2xvciBjYWxjdWxhdGlvblxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgRnJhZ21lbnRfQ3VzdG9tX0RpZmZ1c2U6IHN0cmluZztcclxuICAgIC8qKlxyXG4gICAgICogQmVmb3JlIGxpZ2h0bmluZyBjb21wdXRhdGlvbnNcclxuICAgICAqL1xyXG4gICAgcHVibGljIEZyYWdtZW50X0JlZm9yZV9MaWdodHM6IHN0cmluZztcclxuICAgIC8qKlxyXG4gICAgICogQmVmb3JlIGZvZyBjb21wdXRhdGlvbnNcclxuICAgICAqL1xyXG4gICAgcHVibGljIEZyYWdtZW50X0JlZm9yZV9Gb2c6IHN0cmluZztcclxuICAgIC8qKlxyXG4gICAgICogQWxwaGEgY2FsY3VsYXRpb25zXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBGcmFnbWVudF9DdXN0b21fQWxwaGE6IHN0cmluZztcclxuICAgIC8qKlxyXG4gICAgICogQmVmb3JlIGZyYWcgY29sb3IgaXMgYXNzaWduZWRcclxuICAgICAqL1xyXG4gICAgcHVibGljIEZyYWdtZW50X0JlZm9yZV9GcmFnQ29sb3I6IHN0cmluZztcclxuICAgIC8qKlxyXG4gICAgICogQmVnaW5uaW5nIG9mIHRoZSB2ZXJ0ZXggc2hhZGVyXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBWZXJ0ZXhfQmVnaW46IHN0cmluZztcclxuICAgIC8qKlxyXG4gICAgICogVmFyaWFibGUgZGVmaW5pdGlvbnMgb2YgdGhlIHZlcnRleCBzaGFkZXJcclxuICAgICAqL1xyXG4gICAgcHVibGljIFZlcnRleF9EZWZpbml0aW9uczogc3RyaW5nO1xyXG4gICAgLyoqXHJcbiAgICAgKiBTdGFydCBvZiB0aGUgbWFpbiBmdW5jdGlvbiBvZiB0aGUgdmVydGV4IHNoYWRlclxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgVmVydGV4X01haW5CZWdpbjogc3RyaW5nO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQmVmb3JlIHRoZSB3b3JsZCBwb3NpdGlvbiBjb21wdXRhdGlvblxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgVmVydGV4X0JlZm9yZV9Qb3NpdGlvblVwZGF0ZWQ6IHN0cmluZztcclxuXHJcbiAgICAvKipcclxuICAgICAqIEJlZm9yZSB0aGUgbm9ybWFsIGNvbXB1dGF0aW9uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBWZXJ0ZXhfQmVmb3JlX05vcm1hbFVwZGF0ZWQ6IHN0cmluZztcclxuXHJcbiAgICAvKipcclxuICAgICAqIEFmdGVyIHRoZSB3b3JsZCBwb3NpdGlvbiBoYXMgYmVlbiBjb21wdXRlZFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgVmVydGV4X0FmdGVyX1dvcmxkUG9zQ29tcHV0ZWQ6IHN0cmluZztcclxuXHJcbiAgICAvKipcclxuICAgICAqIE1haW4gZW5kIG9mIHRoZSB2ZXJ0ZXggc2hhZGVyXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBWZXJ0ZXhfTWFpbkVuZDogc3RyaW5nO1xyXG59XHJcblxyXG4vKipcclxuICogQ3VzdG9taXplZCBtYXRlcmlhbFxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEN1c3RvbU1hdGVyaWFsIGV4dGVuZHMgU3RhbmRhcmRNYXRlcmlhbCB7XHJcbiAgICAvKipcclxuICAgICAqIEluZGV4IGZvciBlYWNoIGNyZWF0ZWQgc2hhZGVyXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgU2hhZGVySW5kZXhlciA9IDE7XHJcbiAgICAvKipcclxuICAgICAqIEN1c3RvbSBzaGFkZXIgc3RydWN0dXJlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBDdXN0b21QYXJ0czogU2hhZGVyU3BlY2lhbFBhcnRzO1xyXG4gICAgLyoqXHJcbiAgICAgKiBOYW1lIG9mIHRoZSBzaGFkZXJcclxuICAgICAqL1xyXG4gICAgcHVibGljIF9jcmVhdGVkU2hhZGVyTmFtZTogc3RyaW5nO1xyXG4gICAgLyoqXHJcbiAgICAgKiBMaXN0IG9mIGN1c3RvbSB1bmlmb3Jtc1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgX2N1c3RvbVVuaWZvcm06IHN0cmluZ1tdO1xyXG4gICAgLyoqXHJcbiAgICAgKiBOYW1lcyBvZiB0aGUgbmV3IHVuaWZvcm1zXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBfbmV3VW5pZm9ybXM6IHN0cmluZ1tdO1xyXG4gICAgLyoqXHJcbiAgICAgKiBJbnN0YW5jZXMgb2YgdGhlIG5ldyB1bmlmb3JtIG9iamVjdHNcclxuICAgICAqL1xyXG4gICAgcHVibGljIF9uZXdVbmlmb3JtSW5zdGFuY2VzOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfTtcclxuICAgIC8qKlxyXG4gICAgICogSW5zdGFuY2VzIG9mIHRoZSBuZXcgc2FtcGxlciBvYmplY3RzXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBfbmV3U2FtcGxlckluc3RhbmNlczogeyBbbmFtZTogc3RyaW5nXTogVGV4dHVyZSB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBMaXN0IG9mIHRoZSBjdXN0b20gYXR0cmlidXRlc1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgX2N1c3RvbUF0dHJpYnV0ZXM6IHN0cmluZ1tdO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRnJhZ21lbnQgc2hhZGVyIHN0cmluZ1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgRnJhZ21lbnRTaGFkZXI6IHN0cmluZztcclxuICAgIC8qKlxyXG4gICAgICogVmVydGV4IHNoYWRlciBzdHJpbmdcclxuICAgICAqL1xyXG4gICAgcHVibGljIFZlcnRleFNoYWRlcjogc3RyaW5nO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogUnVucyBhZnRlciB0aGUgbWF0ZXJpYWwgaXMgYm91bmQgdG8gYSBtZXNoXHJcbiAgICAgKiBAcGFyYW0gbWVzaCBtZXNoIGJvdW5kXHJcbiAgICAgKiBAcGFyYW0gZWZmZWN0IGJvdW5kIGVmZmVjdCB1c2VkIHRvIHJlbmRlclxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgQXR0YWNoQWZ0ZXJCaW5kKG1lc2g6IE1lc2ggfCB1bmRlZmluZWQsIGVmZmVjdDogRWZmZWN0KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX25ld1VuaWZvcm1JbnN0YW5jZXMpIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBlbCBpbiB0aGlzLl9uZXdVbmlmb3JtSW5zdGFuY2VzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBlYSA9IGVsLnRvU3RyaW5nKCkuc3BsaXQoXCItXCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGVhWzBdID09IFwidmVjMlwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWZmZWN0LnNldFZlY3RvcjIoZWFbMV0sIHRoaXMuX25ld1VuaWZvcm1JbnN0YW5jZXNbZWxdKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZWFbMF0gPT0gXCJ2ZWMzXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fbmV3VW5pZm9ybUluc3RhbmNlc1tlbF0gaW5zdGFuY2VvZiBDb2xvcjMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWZmZWN0LnNldENvbG9yMyhlYVsxXSwgdGhpcy5fbmV3VW5pZm9ybUluc3RhbmNlc1tlbF0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVmZmVjdC5zZXRWZWN0b3IzKGVhWzFdLCB0aGlzLl9uZXdVbmlmb3JtSW5zdGFuY2VzW2VsXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChlYVswXSA9PSBcInZlYzRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9uZXdVbmlmb3JtSW5zdGFuY2VzW2VsXSBpbnN0YW5jZW9mIENvbG9yNCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlZmZlY3Quc2V0RGlyZWN0Q29sb3I0KGVhWzFdLCB0aGlzLl9uZXdVbmlmb3JtSW5zdGFuY2VzW2VsXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWZmZWN0LnNldFZlY3RvcjQoZWFbMV0sIHRoaXMuX25ld1VuaWZvcm1JbnN0YW5jZXNbZWxdKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWZmZWN0LnNldFZlY3RvcjQoZWFbMV0sIHRoaXMuX25ld1VuaWZvcm1JbnN0YW5jZXNbZWxdKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZWFbMF0gPT0gXCJtYXQ0XCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBlZmZlY3Quc2V0TWF0cml4KGVhWzFdLCB0aGlzLl9uZXdVbmlmb3JtSW5zdGFuY2VzW2VsXSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGVhWzBdID09IFwiZmxvYXRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGVmZmVjdC5zZXRGbG9hdChlYVsxXSwgdGhpcy5fbmV3VW5pZm9ybUluc3RhbmNlc1tlbF0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLl9uZXdTYW1wbGVySW5zdGFuY2VzKSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgZWwgaW4gdGhpcy5fbmV3U2FtcGxlckluc3RhbmNlcykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZWEgPSBlbC50b1N0cmluZygpLnNwbGl0KFwiLVwiKTtcclxuICAgICAgICAgICAgICAgIGlmIChlYVswXSA9PSBcInNhbXBsZXIyRFwiICYmIHRoaXMuX25ld1NhbXBsZXJJbnN0YW5jZXNbZWxdLmlzUmVhZHkgJiYgdGhpcy5fbmV3U2FtcGxlckluc3RhbmNlc1tlbF0uaXNSZWFkeSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWZmZWN0LnNldFRleHR1cmUoZWFbMV0sIHRoaXMuX25ld1NhbXBsZXJJbnN0YW5jZXNbZWxdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgUmV2aWV3VW5pZm9ybShuYW1lOiBzdHJpbmcsIGFycjogc3RyaW5nW10pOiBzdHJpbmdbXSB7XHJcbiAgICAgICAgaWYgKG5hbWUgPT0gXCJ1bmlmb3JtXCIgJiYgdGhpcy5fbmV3VW5pZm9ybXMpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaW5kID0gMDsgaW5kIDwgdGhpcy5fbmV3VW5pZm9ybXMubGVuZ3RoOyBpbmQrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2N1c3RvbVVuaWZvcm1baW5kXS5pbmRleE9mKFwic2FtcGxlclwiKSA9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFyci5wdXNoKHRoaXMuX25ld1VuaWZvcm1zW2luZF0ucmVwbGFjZSgvXFxbXFxkKlxcXS9nLCBcIlwiKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG5hbWUgPT0gXCJzYW1wbGVyXCIgJiYgdGhpcy5fbmV3VW5pZm9ybXMpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaW5kID0gMDsgaW5kIDwgdGhpcy5fbmV3VW5pZm9ybXMubGVuZ3RoOyBpbmQrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2N1c3RvbVVuaWZvcm1baW5kXS5pbmRleE9mKFwic2FtcGxlclwiKSAhPSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFyci5wdXNoKHRoaXMuX25ld1VuaWZvcm1zW2luZF0ucmVwbGFjZSgvXFxbXFxkKlxcXS9nLCBcIlwiKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGFycjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEJ1aWxkcyB0aGUgbWF0ZXJpYWxcclxuICAgICAqIEBwYXJhbSBzaGFkZXJOYW1lIG5hbWUgb2YgdGhlIHNoYWRlclxyXG4gICAgICogQHBhcmFtIHVuaWZvcm1zIGxpc3Qgb2YgdW5pZm9ybXNcclxuICAgICAqIEBwYXJhbSB1bmlmb3JtQnVmZmVycyBsaXN0IG9mIHVuaWZvcm0gYnVmZmVyc1xyXG4gICAgICogQHBhcmFtIHNhbXBsZXJzIGxpc3Qgb2Ygc2FtcGxlcnNcclxuICAgICAqIEBwYXJhbSBkZWZpbmVzIGxpc3Qgb2YgZGVmaW5lc1xyXG4gICAgICogQHBhcmFtIGF0dHJpYnV0ZXMgbGlzdCBvZiBhdHRyaWJ1dGVzXHJcbiAgICAgKiBAcmV0dXJucyB0aGUgc2hhZGVyIG5hbWVcclxuICAgICAqL1xyXG4gICAgcHVibGljIEJ1aWxkZXIoc2hhZGVyTmFtZTogc3RyaW5nLCB1bmlmb3Jtczogc3RyaW5nW10sIHVuaWZvcm1CdWZmZXJzOiBzdHJpbmdbXSwgc2FtcGxlcnM6IHN0cmluZ1tdLCBkZWZpbmVzOiBNYXRlcmlhbERlZmluZXMgfCBzdHJpbmdbXSwgYXR0cmlidXRlcz86IHN0cmluZ1tdKTogc3RyaW5nIHtcclxuICAgICAgICBpZiAoYXR0cmlidXRlcyAmJiB0aGlzLl9jdXN0b21BdHRyaWJ1dGVzICYmIHRoaXMuX2N1c3RvbUF0dHJpYnV0ZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBhdHRyaWJ1dGVzLnB1c2goLi4udGhpcy5fY3VzdG9tQXR0cmlidXRlcyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLlJldmlld1VuaWZvcm0oXCJ1bmlmb3JtXCIsIHVuaWZvcm1zKTtcclxuICAgICAgICB0aGlzLlJldmlld1VuaWZvcm0oXCJzYW1wbGVyXCIsIHNhbXBsZXJzKTtcclxuXHJcbiAgICAgICAgY29uc3QgbmFtZSA9IHRoaXMuX2NyZWF0ZWRTaGFkZXJOYW1lO1xyXG5cclxuICAgICAgICBpZiAoRWZmZWN0LlNoYWRlcnNTdG9yZVtuYW1lICsgXCJWZXJ0ZXhTaGFkZXJcIl0gJiYgRWZmZWN0LlNoYWRlcnNTdG9yZVtuYW1lICsgXCJQaXhlbFNoYWRlclwiXSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmFtZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgRWZmZWN0LlNoYWRlcnNTdG9yZVtuYW1lICsgXCJWZXJ0ZXhTaGFkZXJcIl0gPSB0aGlzLl9pbmplY3RDdXN0b21Db2RlKHRoaXMuVmVydGV4U2hhZGVyLCBcInZlcnRleFwiKTtcclxuICAgICAgICBFZmZlY3QuU2hhZGVyc1N0b3JlW25hbWUgKyBcIlBpeGVsU2hhZGVyXCJdID0gdGhpcy5faW5qZWN0Q3VzdG9tQ29kZSh0aGlzLkZyYWdtZW50U2hhZGVyLCBcImZyYWdtZW50XCIpO1xyXG5cclxuICAgICAgICByZXR1cm4gbmFtZTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgX2luamVjdEN1c3RvbUNvZGUoY29kZTogc3RyaW5nLCBzaGFkZXJUeXBlOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIGNvbnN0IGN1c3RvbUNvZGUgPSB0aGlzLl9nZXRDdXN0b21Db2RlKHNoYWRlclR5cGUpO1xyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IHBvaW50IGluIGN1c3RvbUNvZGUpIHtcclxuICAgICAgICAgICAgY29uc3QgaW5qZWN0ZWRDb2RlID0gY3VzdG9tQ29kZVtwb2ludF07XHJcblxyXG4gICAgICAgICAgICBpZiAoaW5qZWN0ZWRDb2RlICYmIGluamVjdGVkQ29kZS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBmdWxsUG9pbnROYW1lID0gXCIjZGVmaW5lIFwiICsgcG9pbnQ7XHJcbiAgICAgICAgICAgICAgICBjb2RlID0gY29kZS5yZXBsYWNlKGZ1bGxQb2ludE5hbWUsIFwiXFxuXCIgKyBpbmplY3RlZENvZGUgKyBcIlxcblwiICsgZnVsbFBvaW50TmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBjb2RlO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBfZ2V0Q3VzdG9tQ29kZShzaGFkZXJUeXBlOiBzdHJpbmcpOiB7IFtwb2ludE5hbWU6IHN0cmluZ106IHN0cmluZyB9IHtcclxuICAgICAgICBpZiAoc2hhZGVyVHlwZSA9PT0gXCJ2ZXJ0ZXhcIikge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgQ1VTVE9NX1ZFUlRFWF9CRUdJTjogdGhpcy5DdXN0b21QYXJ0cy5WZXJ0ZXhfQmVnaW4sXHJcbiAgICAgICAgICAgICAgICBDVVNUT01fVkVSVEVYX0RFRklOSVRJT05TOiAodGhpcy5fY3VzdG9tVW5pZm9ybT8uam9pbihcIlxcblwiKSB8fCBcIlwiKSArICh0aGlzLkN1c3RvbVBhcnRzLlZlcnRleF9EZWZpbml0aW9ucyB8fCBcIlwiKSxcclxuICAgICAgICAgICAgICAgIENVU1RPTV9WRVJURVhfTUFJTl9CRUdJTjogdGhpcy5DdXN0b21QYXJ0cy5WZXJ0ZXhfTWFpbkJlZ2luLFxyXG4gICAgICAgICAgICAgICAgQ1VTVE9NX1ZFUlRFWF9VUERBVEVfUE9TSVRJT046IHRoaXMuQ3VzdG9tUGFydHMuVmVydGV4X0JlZm9yZV9Qb3NpdGlvblVwZGF0ZWQsXHJcbiAgICAgICAgICAgICAgICBDVVNUT01fVkVSVEVYX1VQREFURV9OT1JNQUw6IHRoaXMuQ3VzdG9tUGFydHMuVmVydGV4X0JlZm9yZV9Ob3JtYWxVcGRhdGVkLFxyXG4gICAgICAgICAgICAgICAgQ1VTVE9NX1ZFUlRFWF9NQUlOX0VORDogdGhpcy5DdXN0b21QYXJ0cy5WZXJ0ZXhfTWFpbkVuZCxcclxuICAgICAgICAgICAgICAgIENVU1RPTV9WRVJURVhfVVBEQVRFX1dPUkxEUE9TOiB0aGlzLkN1c3RvbVBhcnRzLlZlcnRleF9BZnRlcl9Xb3JsZFBvc0NvbXB1dGVkLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBDVVNUT01fRlJBR01FTlRfQkVHSU46IHRoaXMuQ3VzdG9tUGFydHMuRnJhZ21lbnRfQmVnaW4sXHJcbiAgICAgICAgICAgIENVU1RPTV9GUkFHTUVOVF9ERUZJTklUSU9OUzogKHRoaXMuX2N1c3RvbVVuaWZvcm0/LmpvaW4oXCJcXG5cIikgfHwgXCJcIikgKyAodGhpcy5DdXN0b21QYXJ0cy5GcmFnbWVudF9EZWZpbml0aW9ucyB8fCBcIlwiKSxcclxuICAgICAgICAgICAgQ1VTVE9NX0ZSQUdNRU5UX01BSU5fQkVHSU46IHRoaXMuQ3VzdG9tUGFydHMuRnJhZ21lbnRfTWFpbkJlZ2luLFxyXG4gICAgICAgICAgICBDVVNUT01fRlJBR01FTlRfVVBEQVRFX0RJRkZVU0U6IHRoaXMuQ3VzdG9tUGFydHMuRnJhZ21lbnRfQ3VzdG9tX0RpZmZ1c2UsXHJcbiAgICAgICAgICAgIENVU1RPTV9GUkFHTUVOVF9VUERBVEVfQUxQSEE6IHRoaXMuQ3VzdG9tUGFydHMuRnJhZ21lbnRfQ3VzdG9tX0FscGhhLFxyXG4gICAgICAgICAgICBDVVNUT01fRlJBR01FTlRfQkVGT1JFX0xJR0hUUzogdGhpcy5DdXN0b21QYXJ0cy5GcmFnbWVudF9CZWZvcmVfTGlnaHRzLFxyXG4gICAgICAgICAgICBDVVNUT01fRlJBR01FTlRfQkVGT1JFX0ZSQUdDT0xPUjogdGhpcy5DdXN0b21QYXJ0cy5GcmFnbWVudF9CZWZvcmVfRnJhZ0NvbG9yLFxyXG4gICAgICAgICAgICBDVVNUT01fRlJBR01FTlRfTUFJTl9FTkQ6IHRoaXMuQ3VzdG9tUGFydHMuRnJhZ21lbnRfTWFpbkVuZCxcclxuICAgICAgICAgICAgQ1VTVE9NX0ZSQUdNRU5UX0JFRk9SRV9GT0c6IHRoaXMuQ3VzdG9tUGFydHMuRnJhZ21lbnRfQmVmb3JlX0ZvZyxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgc2NlbmU/OiBTY2VuZSkge1xyXG4gICAgICAgIHN1cGVyKG5hbWUsIHNjZW5lLCB0cnVlKTtcclxuICAgICAgICB0aGlzLkN1c3RvbVBhcnRzID0gbmV3IFNoYWRlclNwZWNpYWxQYXJ0cygpO1xyXG4gICAgICAgIHRoaXMuY3VzdG9tU2hhZGVyTmFtZVJlc29sdmUgPSB0aGlzLkJ1aWxkZXI7XHJcblxyXG4gICAgICAgIHRoaXMuRnJhZ21lbnRTaGFkZXIgPSBFZmZlY3QuU2hhZGVyc1N0b3JlW1wiZGVmYXVsdFBpeGVsU2hhZGVyXCJdO1xyXG4gICAgICAgIHRoaXMuVmVydGV4U2hhZGVyID0gRWZmZWN0LlNoYWRlcnNTdG9yZVtcImRlZmF1bHRWZXJ0ZXhTaGFkZXJcIl07XHJcblxyXG4gICAgICAgIEN1c3RvbU1hdGVyaWFsLlNoYWRlckluZGV4ZXIrKztcclxuICAgICAgICB0aGlzLl9jcmVhdGVkU2hhZGVyTmFtZSA9IFwiY3VzdG9tX1wiICsgQ3VzdG9tTWF0ZXJpYWwuU2hhZGVySW5kZXhlcjtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgX2FmdGVyQmluZChtZXNoPzogTWVzaCwgZWZmZWN0OiBOdWxsYWJsZTxFZmZlY3Q+ID0gbnVsbCwgc3ViTWVzaD86IFN1Yk1lc2gpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIWVmZmVjdCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuQXR0YWNoQWZ0ZXJCaW5kKG1lc2gsIGVmZmVjdCk7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgc3VwZXIuX2FmdGVyQmluZChtZXNoLCBlZmZlY3QsIHN1Yk1lc2gpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHt9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBZGRzIGEgbmV3IHVuaWZvcm0gdG8gdGhlIHNoYWRlclxyXG4gICAgICogQHBhcmFtIG5hbWUgdGhlIG5hbWUgb2YgdGhlIHVuaWZvcm0gdG8gYWRkXHJcbiAgICAgKiBAcGFyYW0ga2luZCB0aGUgdHlwZSBvZiB0aGUgdW5pZm9ybSB0byBhZGRcclxuICAgICAqIEBwYXJhbSBwYXJhbSB0aGUgdmFsdWUgb2YgdGhlIHVuaWZvcm0gdG8gYWRkXHJcbiAgICAgKiBAcmV0dXJucyB0aGUgY3VycmVudCBtYXRlcmlhbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgQWRkVW5pZm9ybShuYW1lOiBzdHJpbmcsIGtpbmQ6IHN0cmluZywgcGFyYW06IGFueSk6IEN1c3RvbU1hdGVyaWFsIHtcclxuICAgICAgICBpZiAoIXRoaXMuX2N1c3RvbVVuaWZvcm0pIHtcclxuICAgICAgICAgICAgdGhpcy5fY3VzdG9tVW5pZm9ybSA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgICAgICB0aGlzLl9uZXdVbmlmb3JtcyA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgICAgICB0aGlzLl9uZXdTYW1wbGVySW5zdGFuY2VzID0ge307XHJcbiAgICAgICAgICAgIHRoaXMuX25ld1VuaWZvcm1JbnN0YW5jZXMgPSB7fTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHBhcmFtKSB7XHJcbiAgICAgICAgICAgIGlmIChraW5kLmluZGV4T2YoXCJzYW1wbGVyXCIpICE9IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAoPGFueT50aGlzLl9uZXdTYW1wbGVySW5zdGFuY2VzKVtraW5kICsgXCItXCIgKyBuYW1lXSA9IHBhcmFtO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgKDxhbnk+dGhpcy5fbmV3VW5pZm9ybUluc3RhbmNlcylba2luZCArIFwiLVwiICsgbmFtZV0gPSBwYXJhbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9jdXN0b21Vbmlmb3JtLnB1c2goXCJ1bmlmb3JtIFwiICsga2luZCArIFwiIFwiICsgbmFtZSArIFwiO1wiKTtcclxuICAgICAgICB0aGlzLl9uZXdVbmlmb3Jtcy5wdXNoKG5hbWUpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFkZHMgYSBjdXN0b20gYXR0cmlidXRlXHJcbiAgICAgKiBAcGFyYW0gbmFtZSB0aGUgbmFtZSBvZiB0aGUgYXR0cmlidXRlXHJcbiAgICAgKiBAcmV0dXJucyB0aGUgY3VycmVudCBtYXRlcmlhbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgQWRkQXR0cmlidXRlKG5hbWU6IHN0cmluZyk6IEN1c3RvbU1hdGVyaWFsIHtcclxuICAgICAgICBpZiAoIXRoaXMuX2N1c3RvbUF0dHJpYnV0ZXMpIHtcclxuICAgICAgICAgICAgdGhpcy5fY3VzdG9tQXR0cmlidXRlcyA9IFtdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fY3VzdG9tQXR0cmlidXRlcy5wdXNoKG5hbWUpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdGhlIGNvZGUgb24gRnJhZ21lbnRfQmVnaW4gcG9ydGlvblxyXG4gICAgICogQHBhcmFtIHNoYWRlclBhcnQgdGhlIGNvZGUgc3RyaW5nXHJcbiAgICAgKiBAcmV0dXJucyB0aGUgY3VycmVudCBtYXRlcmlhbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgRnJhZ21lbnRfQmVnaW4oc2hhZGVyUGFydDogc3RyaW5nKTogQ3VzdG9tTWF0ZXJpYWwge1xyXG4gICAgICAgIHRoaXMuQ3VzdG9tUGFydHMuRnJhZ21lbnRfQmVnaW4gPSBzaGFkZXJQYXJ0O1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB0aGUgY29kZSBvbiBGcmFnbWVudF9EZWZpbml0aW9ucyBwb3J0aW9uXHJcbiAgICAgKiBAcGFyYW0gc2hhZGVyUGFydCB0aGUgY29kZSBzdHJpbmdcclxuICAgICAqIEByZXR1cm5zIHRoZSBjdXJyZW50IG1hdGVyaWFsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBGcmFnbWVudF9EZWZpbml0aW9ucyhzaGFkZXJQYXJ0OiBzdHJpbmcpOiBDdXN0b21NYXRlcmlhbCB7XHJcbiAgICAgICAgdGhpcy5DdXN0b21QYXJ0cy5GcmFnbWVudF9EZWZpbml0aW9ucyA9IHNoYWRlclBhcnQ7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHRoZSBjb2RlIG9uIEZyYWdtZW50X01haW5CZWdpbiBwb3J0aW9uXHJcbiAgICAgKiBAcGFyYW0gc2hhZGVyUGFydCB0aGUgY29kZSBzdHJpbmdcclxuICAgICAqIEByZXR1cm5zIHRoZSBjdXJyZW50IG1hdGVyaWFsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBGcmFnbWVudF9NYWluQmVnaW4oc2hhZGVyUGFydDogc3RyaW5nKTogQ3VzdG9tTWF0ZXJpYWwge1xyXG4gICAgICAgIHRoaXMuQ3VzdG9tUGFydHMuRnJhZ21lbnRfTWFpbkJlZ2luID0gc2hhZGVyUGFydDtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdGhlIGNvZGUgb24gRnJhZ21lbnRfTWFpbkVuZCBwb3J0aW9uXHJcbiAgICAgKiBAcGFyYW0gc2hhZGVyUGFydCB0aGUgY29kZSBzdHJpbmdcclxuICAgICAqIEByZXR1cm5zIHRoZSBjdXJyZW50IG1hdGVyaWFsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBGcmFnbWVudF9NYWluRW5kKHNoYWRlclBhcnQ6IHN0cmluZyk6IEN1c3RvbU1hdGVyaWFsIHtcclxuICAgICAgICB0aGlzLkN1c3RvbVBhcnRzLkZyYWdtZW50X01haW5FbmQgPSBzaGFkZXJQYXJ0O1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB0aGUgY29kZSBvbiBGcmFnbWVudF9DdXN0b21fRGlmZnVzZSBwb3J0aW9uXHJcbiAgICAgKiBAcGFyYW0gc2hhZGVyUGFydCB0aGUgY29kZSBzdHJpbmdcclxuICAgICAqIEByZXR1cm5zIHRoZSBjdXJyZW50IG1hdGVyaWFsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBGcmFnbWVudF9DdXN0b21fRGlmZnVzZShzaGFkZXJQYXJ0OiBzdHJpbmcpOiBDdXN0b21NYXRlcmlhbCB7XHJcbiAgICAgICAgdGhpcy5DdXN0b21QYXJ0cy5GcmFnbWVudF9DdXN0b21fRGlmZnVzZSA9IHNoYWRlclBhcnQucmVwbGFjZShcInJlc3VsdFwiLCBcImRpZmZ1c2VDb2xvclwiKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdGhlIGNvZGUgb24gRnJhZ21lbnRfQ3VzdG9tX0FscGhhIHBvcnRpb25cclxuICAgICAqIEBwYXJhbSBzaGFkZXJQYXJ0IHRoZSBjb2RlIHN0cmluZ1xyXG4gICAgICogQHJldHVybnMgdGhlIGN1cnJlbnQgbWF0ZXJpYWxcclxuICAgICAqL1xyXG4gICAgcHVibGljIEZyYWdtZW50X0N1c3RvbV9BbHBoYShzaGFkZXJQYXJ0OiBzdHJpbmcpOiBDdXN0b21NYXRlcmlhbCB7XHJcbiAgICAgICAgdGhpcy5DdXN0b21QYXJ0cy5GcmFnbWVudF9DdXN0b21fQWxwaGEgPSBzaGFkZXJQYXJ0LnJlcGxhY2UoXCJyZXN1bHRcIiwgXCJhbHBoYVwiKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdGhlIGNvZGUgb24gRnJhZ21lbnRfQmVmb3JlX0xpZ2h0cyBwb3J0aW9uXHJcbiAgICAgKiBAcGFyYW0gc2hhZGVyUGFydCB0aGUgY29kZSBzdHJpbmdcclxuICAgICAqIEByZXR1cm5zIHRoZSBjdXJyZW50IG1hdGVyaWFsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBGcmFnbWVudF9CZWZvcmVfTGlnaHRzKHNoYWRlclBhcnQ6IHN0cmluZyk6IEN1c3RvbU1hdGVyaWFsIHtcclxuICAgICAgICB0aGlzLkN1c3RvbVBhcnRzLkZyYWdtZW50X0JlZm9yZV9MaWdodHMgPSBzaGFkZXJQYXJ0O1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB0aGUgY29kZSBvbiBGcmFnbWVudF9CZWZvcmVfRm9nIHBvcnRpb25cclxuICAgICAqIEBwYXJhbSBzaGFkZXJQYXJ0IHRoZSBjb2RlIHN0cmluZ1xyXG4gICAgICogQHJldHVybnMgdGhlIGN1cnJlbnQgbWF0ZXJpYWxcclxuICAgICAqL1xyXG4gICAgcHVibGljIEZyYWdtZW50X0JlZm9yZV9Gb2coc2hhZGVyUGFydDogc3RyaW5nKTogQ3VzdG9tTWF0ZXJpYWwge1xyXG4gICAgICAgIHRoaXMuQ3VzdG9tUGFydHMuRnJhZ21lbnRfQmVmb3JlX0ZvZyA9IHNoYWRlclBhcnQ7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHRoZSBjb2RlIG9uIEZyYWdtZW50X0JlZm9yZV9GcmFnQ29sb3IgcG9ydGlvblxyXG4gICAgICogQHBhcmFtIHNoYWRlclBhcnQgdGhlIGNvZGUgc3RyaW5nXHJcbiAgICAgKiBAcmV0dXJucyB0aGUgY3VycmVudCBtYXRlcmlhbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgRnJhZ21lbnRfQmVmb3JlX0ZyYWdDb2xvcihzaGFkZXJQYXJ0OiBzdHJpbmcpOiBDdXN0b21NYXRlcmlhbCB7XHJcbiAgICAgICAgdGhpcy5DdXN0b21QYXJ0cy5GcmFnbWVudF9CZWZvcmVfRnJhZ0NvbG9yID0gc2hhZGVyUGFydC5yZXBsYWNlKFwicmVzdWx0XCIsIFwiY29sb3JcIik7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHRoZSBjb2RlIG9uIFZlcnRleF9CZWdpbiBwb3J0aW9uXHJcbiAgICAgKiBAcGFyYW0gc2hhZGVyUGFydCB0aGUgY29kZSBzdHJpbmdcclxuICAgICAqIEByZXR1cm5zIHRoZSBjdXJyZW50IG1hdGVyaWFsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBWZXJ0ZXhfQmVnaW4oc2hhZGVyUGFydDogc3RyaW5nKTogQ3VzdG9tTWF0ZXJpYWwge1xyXG4gICAgICAgIHRoaXMuQ3VzdG9tUGFydHMuVmVydGV4X0JlZ2luID0gc2hhZGVyUGFydDtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdGhlIGNvZGUgb24gVmVydGV4X0RlZmluaXRpb25zIHBvcnRpb25cclxuICAgICAqIEBwYXJhbSBzaGFkZXJQYXJ0IHRoZSBjb2RlIHN0cmluZ1xyXG4gICAgICogQHJldHVybnMgdGhlIGN1cnJlbnQgbWF0ZXJpYWxcclxuICAgICAqL1xyXG4gICAgcHVibGljIFZlcnRleF9EZWZpbml0aW9ucyhzaGFkZXJQYXJ0OiBzdHJpbmcpOiBDdXN0b21NYXRlcmlhbCB7XHJcbiAgICAgICAgdGhpcy5DdXN0b21QYXJ0cy5WZXJ0ZXhfRGVmaW5pdGlvbnMgPSBzaGFkZXJQYXJ0O1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB0aGUgY29kZSBvbiBWZXJ0ZXhfTWFpbkJlZ2luIHBvcnRpb25cclxuICAgICAqIEBwYXJhbSBzaGFkZXJQYXJ0IHRoZSBjb2RlIHN0cmluZ1xyXG4gICAgICogQHJldHVybnMgdGhlIGN1cnJlbnQgbWF0ZXJpYWxcclxuICAgICAqL1xyXG4gICAgcHVibGljIFZlcnRleF9NYWluQmVnaW4oc2hhZGVyUGFydDogc3RyaW5nKTogQ3VzdG9tTWF0ZXJpYWwge1xyXG4gICAgICAgIHRoaXMuQ3VzdG9tUGFydHMuVmVydGV4X01haW5CZWdpbiA9IHNoYWRlclBhcnQ7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHRoZSBjb2RlIG9uIFZlcnRleF9CZWZvcmVfUG9zaXRpb25VcGRhdGVkIHBvcnRpb25cclxuICAgICAqIEBwYXJhbSBzaGFkZXJQYXJ0IHRoZSBjb2RlIHN0cmluZ1xyXG4gICAgICogQHJldHVybnMgdGhlIGN1cnJlbnQgbWF0ZXJpYWxcclxuICAgICAqL1xyXG4gICAgcHVibGljIFZlcnRleF9CZWZvcmVfUG9zaXRpb25VcGRhdGVkKHNoYWRlclBhcnQ6IHN0cmluZyk6IEN1c3RvbU1hdGVyaWFsIHtcclxuICAgICAgICB0aGlzLkN1c3RvbVBhcnRzLlZlcnRleF9CZWZvcmVfUG9zaXRpb25VcGRhdGVkID0gc2hhZGVyUGFydC5yZXBsYWNlKFwicmVzdWx0XCIsIFwicG9zaXRpb25VcGRhdGVkXCIpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB0aGUgY29kZSBvbiBWZXJ0ZXhfQmVmb3JlX05vcm1hbFVwZGF0ZWQgcG9ydGlvblxyXG4gICAgICogQHBhcmFtIHNoYWRlclBhcnQgdGhlIGNvZGUgc3RyaW5nXHJcbiAgICAgKiBAcmV0dXJucyB0aGUgY3VycmVudCBtYXRlcmlhbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgVmVydGV4X0JlZm9yZV9Ob3JtYWxVcGRhdGVkKHNoYWRlclBhcnQ6IHN0cmluZyk6IEN1c3RvbU1hdGVyaWFsIHtcclxuICAgICAgICB0aGlzLkN1c3RvbVBhcnRzLlZlcnRleF9CZWZvcmVfTm9ybWFsVXBkYXRlZCA9IHNoYWRlclBhcnQucmVwbGFjZShcInJlc3VsdFwiLCBcIm5vcm1hbFVwZGF0ZWRcIik7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHRoZSBjb2RlIG9uIFZlcnRleF9BZnRlcl9Xb3JsZFBvc0NvbXB1dGVkIHBvcnRpb25cclxuICAgICAqIEBwYXJhbSBzaGFkZXJQYXJ0IHRoZSBjb2RlIHN0cmluZ1xyXG4gICAgICogQHJldHVybnMgdGhlIGN1cnJlbnQgbWF0ZXJpYWxcclxuICAgICAqL1xyXG4gICAgcHVibGljIFZlcnRleF9BZnRlcl9Xb3JsZFBvc0NvbXB1dGVkKHNoYWRlclBhcnQ6IHN0cmluZyk6IEN1c3RvbU1hdGVyaWFsIHtcclxuICAgICAgICB0aGlzLkN1c3RvbVBhcnRzLlZlcnRleF9BZnRlcl9Xb3JsZFBvc0NvbXB1dGVkID0gc2hhZGVyUGFydDtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdGhlIGNvZGUgb24gVmVydGV4X01haW5FbmQgcG9ydGlvblxyXG4gICAgICogQHBhcmFtIHNoYWRlclBhcnQgdGhlIGNvZGUgc3RyaW5nXHJcbiAgICAgKiBAcmV0dXJucyB0aGUgY3VycmVudCBtYXRlcmlhbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgVmVydGV4X01haW5FbmQoc2hhZGVyUGFydDogc3RyaW5nKTogQ3VzdG9tTWF0ZXJpYWwge1xyXG4gICAgICAgIHRoaXMuQ3VzdG9tUGFydHMuVmVydGV4X01haW5FbmQgPSBzaGFkZXJQYXJ0O1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG59XHJcblxyXG5SZWdpc3RlckNsYXNzKFwiQkFCWUxPTi5DdXN0b21NYXRlcmlhbFwiLCBDdXN0b21NYXRlcmlhbCk7XHJcbiIsImV4cG9ydCAqIGZyb20gXCIuL2N1c3RvbU1hdGVyaWFsXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3BickN1c3RvbU1hdGVyaWFsXCI7XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvbiAqL1xyXG5pbXBvcnQgdHlwZSB7IFRleHR1cmUgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvVGV4dHVyZXMvdGV4dHVyZVwiO1xyXG5pbXBvcnQgeyBFZmZlY3QgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvZWZmZWN0XCI7XHJcbmltcG9ydCB0eXBlIHsgTWF0ZXJpYWxEZWZpbmVzIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL21hdGVyaWFsRGVmaW5lc1wiO1xyXG5pbXBvcnQgeyBQQlJNYXRlcmlhbCB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9QQlIvcGJyTWF0ZXJpYWxcIjtcclxuaW1wb3J0IHR5cGUgeyBNZXNoIH0gZnJvbSBcImNvcmUvTWVzaGVzL21lc2hcIjtcclxuaW1wb3J0IHR5cGUgeyBTY2VuZSB9IGZyb20gXCJjb3JlL3NjZW5lXCI7XHJcbmltcG9ydCB7IFJlZ2lzdGVyQ2xhc3MgfSBmcm9tIFwiY29yZS9NaXNjL3R5cGVTdG9yZVwiO1xyXG5pbXBvcnQgeyBTaGFkZXJDb2RlSW5saW5lciB9IGZyb20gXCJjb3JlL0VuZ2luZXMvUHJvY2Vzc29ycy9zaGFkZXJDb2RlSW5saW5lclwiO1xyXG5pbXBvcnQgdHlwZSB7IElDdXN0b21TaGFkZXJOYW1lUmVzb2x2ZU9wdGlvbnMgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgQ29sb3IzLCBDb2xvcjQgfSBmcm9tIFwiY29yZS9NYXRocy9tYXRoLmNvbG9yXCI7XHJcbmltcG9ydCB0eXBlIHsgTnVsbGFibGUgfSBmcm9tIFwiY29yZS90eXBlc1wiO1xyXG5pbXBvcnQgdHlwZSB7IFN1Yk1lc2ggfSBmcm9tIFwiY29yZS9NZXNoZXMvc3ViTWVzaFwiO1xyXG5cclxuaW1wb3J0IFwiY29yZS9TaGFkZXJzL3Bici52ZXJ0ZXhcIjtcclxuaW1wb3J0IFwiY29yZS9TaGFkZXJzL3Bici5mcmFnbWVudFwiO1xyXG5cclxuLyoqXHJcbiAqIEFsYmVkbyBwYXJ0cyBvZiB0aGUgc2hhZGVyXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgU2hhZGVyQWxiZWRvUGFydHMge1xyXG4gICAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQmVnaW5uaW5nIG9mIHRoZSBmcmFnbWVudCBzaGFkZXJcclxuICAgICAqL1xyXG4gICAgcHVibGljIEZyYWdtZW50X0JlZ2luOiBzdHJpbmc7XHJcbiAgICAvKipcclxuICAgICAqIEZyYWdtZW50IGRlZmluaXRpb25zXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBGcmFnbWVudF9EZWZpbml0aW9uczogc3RyaW5nO1xyXG4gICAgLyoqXHJcbiAgICAgKiBCZWdpbm5pbmcgb2YgdGhlIG1haW4gZnVuY3Rpb25cclxuICAgICAqL1xyXG4gICAgcHVibGljIEZyYWdtZW50X01haW5CZWdpbjogc3RyaW5nO1xyXG4gICAgLyoqXHJcbiAgICAgKiBFbmQgb2YgbWFpbiBmdW5jdGlvblxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgRnJhZ21lbnRfTWFpbkVuZDogc3RyaW5nO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWxiZWRvIGNvbG9yXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBGcmFnbWVudF9DdXN0b21fQWxiZWRvOiBzdHJpbmc7XHJcbiAgICAvKipcclxuICAgICAqIExpZ2h0c1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgRnJhZ21lbnRfQmVmb3JlX0xpZ2h0czogc3RyaW5nO1xyXG4gICAgLyoqXHJcbiAgICAgKiBNZXRhbGxpYyBhbmQgcm91Z2huZXNzXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBGcmFnbWVudF9DdXN0b21fTWV0YWxsaWNSb3VnaG5lc3M6IHN0cmluZztcclxuICAgIC8qKlxyXG4gICAgICogTWljcm9zdXJmYWNlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBGcmFnbWVudF9DdXN0b21fTWljcm9TdXJmYWNlOiBzdHJpbmc7XHJcbiAgICAvKipcclxuICAgICAqIEZvZyBjb21wdXRhdGlvbnNcclxuICAgICAqL1xyXG4gICAgcHVibGljIEZyYWdtZW50X0JlZm9yZV9Gb2c6IHN0cmluZztcclxuICAgIC8qKlxyXG4gICAgICogQWxwaGFcclxuICAgICAqL1xyXG4gICAgcHVibGljIEZyYWdtZW50X0N1c3RvbV9BbHBoYTogc3RyaW5nO1xyXG4gICAgLyoqXHJcbiAgICAgKiBDb2xvciBjb21wb3NpdGlvblxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgRnJhZ21lbnRfQmVmb3JlX0ZpbmFsQ29sb3JDb21wb3NpdGlvbjogc3RyaW5nO1xyXG4gICAgLyoqXHJcbiAgICAgKiBGcmFnbWVudCBjb2xvclxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgRnJhZ21lbnRfQmVmb3JlX0ZyYWdDb2xvcjogc3RyaW5nO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQmVnaW5uaW5nIG9mIHZlcnRleCBzaGFkZXJcclxuICAgICAqL1xyXG4gICAgcHVibGljIFZlcnRleF9CZWdpbjogc3RyaW5nO1xyXG4gICAgLyoqXHJcbiAgICAgKiBWZXJ0ZXggZGVmaW5pdGlvbnNcclxuICAgICAqL1xyXG4gICAgcHVibGljIFZlcnRleF9EZWZpbml0aW9uczogc3RyaW5nO1xyXG4gICAgLyoqXHJcbiAgICAgKiBWZXJ0ZXggbWFpbiBiZWdpblxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgVmVydGV4X01haW5CZWdpbjogc3RyaW5nO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVmVydGV4IGJlZm9yZSBwb3NpdGlvbiB1cGRhdGVkXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBWZXJ0ZXhfQmVmb3JlX1Bvc2l0aW9uVXBkYXRlZDogc3RyaW5nO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVmVydGV4IGJlZm9yZSBub3JtYWwgdXBkYXRlZFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgVmVydGV4X0JlZm9yZV9Ob3JtYWxVcGRhdGVkOiBzdHJpbmc7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBWZXJ0ZXggYWZ0ZXIgd29ybGQgcG9zIGNvbXB1dGVkXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBWZXJ0ZXhfQWZ0ZXJfV29ybGRQb3NDb21wdXRlZDogc3RyaW5nO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVmVydGV4IG1haW4gZW5kXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBWZXJ0ZXhfTWFpbkVuZDogc3RyaW5nO1xyXG59XHJcblxyXG4vKipcclxuICogQGRlcHJlY2F0ZWQgdXNlIFNoYWRlckFsYmVkb1BhcnRzIGluc3RlYWQuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgU2hhZGVyQWxlYmRvUGFydHMgPSBTaGFkZXJBbGJlZG9QYXJ0cztcclxuXHJcbmV4cG9ydCBjbGFzcyBQQlJDdXN0b21NYXRlcmlhbCBleHRlbmRzIFBCUk1hdGVyaWFsIHtcclxuICAgIC8qKlxyXG4gICAgICogSW5kZXggZm9yIGVhY2ggY3JlYXRlZCBzaGFkZXJcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBTaGFkZXJJbmRleGVyID0gMTtcclxuICAgIC8qKlxyXG4gICAgICogQ3VzdG9tIHNoYWRlciBzdHJ1Y3R1cmVcclxuICAgICAqL1xyXG4gICAgcHVibGljIEN1c3RvbVBhcnRzOiBTaGFkZXJBbGJlZG9QYXJ0cztcclxuICAgIC8qKlxyXG4gICAgICogTmFtZSBvZiB0aGUgc2hhZGVyXHJcbiAgICAgKi9cclxuICAgIF9jcmVhdGVkU2hhZGVyTmFtZTogc3RyaW5nO1xyXG4gICAgLyoqXHJcbiAgICAgKiBMaXN0IG9mIGN1c3RvbSB1bmlmb3Jtc1xyXG4gICAgICovXHJcbiAgICBfY3VzdG9tVW5pZm9ybTogc3RyaW5nW107XHJcbiAgICAvKipcclxuICAgICAqIE5hbWVzIG9mIHRoZSBuZXcgdW5pZm9ybXNcclxuICAgICAqL1xyXG4gICAgX25ld1VuaWZvcm1zOiBzdHJpbmdbXTtcclxuICAgIC8qKlxyXG4gICAgICogSW5zdGFuY2VzIG9mIHRoZSBuZXcgdW5pZm9ybSBvYmplY3RzXHJcbiAgICAgKi9cclxuICAgIF9uZXdVbmlmb3JtSW5zdGFuY2VzOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfTtcclxuICAgIC8qKlxyXG4gICAgICogSW5zdGFuY2VzIG9mIHRoZSBuZXcgc2FtcGxlciBvYmplY3RzXHJcbiAgICAgKi9cclxuICAgIF9uZXdTYW1wbGVySW5zdGFuY2VzOiB7IFtuYW1lOiBzdHJpbmddOiBUZXh0dXJlIH07XHJcbiAgICAvKipcclxuICAgICAqIExpc3Qgb2YgdGhlIGN1c3RvbSBhdHRyaWJ1dGVzXHJcbiAgICAgKi9cclxuICAgIF9jdXN0b21BdHRyaWJ1dGVzOiBzdHJpbmdbXTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEZyYWdtZW50IHNoYWRlciBzdHJpbmdcclxuICAgICAqL1xyXG4gICAgcHVibGljIEZyYWdtZW50U2hhZGVyOiBzdHJpbmc7XHJcbiAgICAvKipcclxuICAgICAqIFZlcnRleCBzaGFkZXIgc3RyaW5nXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBWZXJ0ZXhTaGFkZXI6IHN0cmluZztcclxuXHJcbiAgICAvKipcclxuICAgICAqIFJ1bnMgYWZ0ZXIgdGhlIG1hdGVyaWFsIGlzIGJvdW5kIHRvIGEgbWVzaFxyXG4gICAgICogQHBhcmFtIG1lc2ggbWVzaCBib3VuZFxyXG4gICAgICogQHBhcmFtIGVmZmVjdCBib3VuZCBlZmZlY3QgdXNlZCB0byByZW5kZXJcclxuICAgICAqL1xyXG4gICAgcHVibGljIEF0dGFjaEFmdGVyQmluZChtZXNoOiBNZXNoIHwgdW5kZWZpbmVkLCBlZmZlY3Q6IEVmZmVjdCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9uZXdVbmlmb3JtSW5zdGFuY2VzKSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgZWwgaW4gdGhpcy5fbmV3VW5pZm9ybUluc3RhbmNlcykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZWEgPSBlbC50b1N0cmluZygpLnNwbGl0KFwiLVwiKTtcclxuICAgICAgICAgICAgICAgIGlmIChlYVswXSA9PSBcInZlYzJcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGVmZmVjdC5zZXRWZWN0b3IyKGVhWzFdLCB0aGlzLl9uZXdVbmlmb3JtSW5zdGFuY2VzW2VsXSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGVhWzBdID09IFwidmVjM1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX25ld1VuaWZvcm1JbnN0YW5jZXNbZWxdIGluc3RhbmNlb2YgQ29sb3IzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVmZmVjdC5zZXRDb2xvcjMoZWFbMV0sIHRoaXMuX25ld1VuaWZvcm1JbnN0YW5jZXNbZWxdKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlZmZlY3Quc2V0VmVjdG9yMyhlYVsxXSwgdGhpcy5fbmV3VW5pZm9ybUluc3RhbmNlc1tlbF0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZWFbMF0gPT0gXCJ2ZWM0XCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fbmV3VW5pZm9ybUluc3RhbmNlc1tlbF0gaW5zdGFuY2VvZiBDb2xvcjQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWZmZWN0LnNldERpcmVjdENvbG9yNChlYVsxXSwgdGhpcy5fbmV3VW5pZm9ybUluc3RhbmNlc1tlbF0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVmZmVjdC5zZXRWZWN0b3I0KGVhWzFdLCB0aGlzLl9uZXdVbmlmb3JtSW5zdGFuY2VzW2VsXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVmZmVjdC5zZXRWZWN0b3I0KGVhWzFdLCB0aGlzLl9uZXdVbmlmb3JtSW5zdGFuY2VzW2VsXSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGVhWzBdID09IFwibWF0NFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWZmZWN0LnNldE1hdHJpeChlYVsxXSwgdGhpcy5fbmV3VW5pZm9ybUluc3RhbmNlc1tlbF0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChlYVswXSA9PSBcImZsb2F0XCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBlZmZlY3Quc2V0RmxvYXQoZWFbMV0sIHRoaXMuX25ld1VuaWZvcm1JbnN0YW5jZXNbZWxdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5fbmV3U2FtcGxlckluc3RhbmNlcykge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGVsIGluIHRoaXMuX25ld1NhbXBsZXJJbnN0YW5jZXMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVhID0gZWwudG9TdHJpbmcoKS5zcGxpdChcIi1cIik7XHJcbiAgICAgICAgICAgICAgICBpZiAoZWFbMF0gPT0gXCJzYW1wbGVyMkRcIiAmJiB0aGlzLl9uZXdTYW1wbGVySW5zdGFuY2VzW2VsXS5pc1JlYWR5ICYmIHRoaXMuX25ld1NhbXBsZXJJbnN0YW5jZXNbZWxdLmlzUmVhZHkoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGVmZmVjdC5zZXRUZXh0dXJlKGVhWzFdLCB0aGlzLl9uZXdTYW1wbGVySW5zdGFuY2VzW2VsXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqL1xyXG4gICAgcHVibGljIFJldmlld1VuaWZvcm0obmFtZTogc3RyaW5nLCBhcnI6IHN0cmluZ1tdKTogc3RyaW5nW10ge1xyXG4gICAgICAgIGlmIChuYW1lID09IFwidW5pZm9ybVwiICYmIHRoaXMuX25ld1VuaWZvcm1zKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGluZCA9IDA7IGluZCA8IHRoaXMuX25ld1VuaWZvcm1zLmxlbmd0aDsgaW5kKyspIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9jdXN0b21Vbmlmb3JtW2luZF0uaW5kZXhPZihcInNhbXBsZXJcIikgPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICBhcnIucHVzaCh0aGlzLl9uZXdVbmlmb3Jtc1tpbmRdLnJlcGxhY2UoL1xcW1xcZCpcXF0vZywgXCJcIikpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChuYW1lID09IFwic2FtcGxlclwiICYmIHRoaXMuX25ld1VuaWZvcm1zKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGluZCA9IDA7IGluZCA8IHRoaXMuX25ld1VuaWZvcm1zLmxlbmd0aDsgaW5kKyspIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9jdXN0b21Vbmlmb3JtW2luZF0uaW5kZXhPZihcInNhbXBsZXJcIikgIT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICBhcnIucHVzaCh0aGlzLl9uZXdVbmlmb3Jtc1tpbmRdLnJlcGxhY2UoL1xcW1xcZCpcXF0vZywgXCJcIikpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhcnI7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBCdWlsZHMgdGhlIG1hdGVyaWFsXHJcbiAgICAgKiBAcGFyYW0gc2hhZGVyTmFtZSBuYW1lIG9mIHRoZSBzaGFkZXJcclxuICAgICAqIEBwYXJhbSB1bmlmb3JtcyBsaXN0IG9mIHVuaWZvcm1zXHJcbiAgICAgKiBAcGFyYW0gdW5pZm9ybUJ1ZmZlcnMgbGlzdCBvZiB1bmlmb3JtIGJ1ZmZlcnNcclxuICAgICAqIEBwYXJhbSBzYW1wbGVycyBsaXN0IG9mIHNhbXBsZXJzXHJcbiAgICAgKiBAcGFyYW0gZGVmaW5lcyBsaXN0IG9mIGRlZmluZXNcclxuICAgICAqIEBwYXJhbSBhdHRyaWJ1dGVzIGxpc3Qgb2YgYXR0cmlidXRlc1xyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgb3B0aW9ucyB0byBjb21waWxlIHRoZSBzaGFkZXJcclxuICAgICAqIEByZXR1cm5zIHRoZSBzaGFkZXIgbmFtZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgQnVpbGRlcihcclxuICAgICAgICBzaGFkZXJOYW1lOiBzdHJpbmcsXHJcbiAgICAgICAgdW5pZm9ybXM6IHN0cmluZ1tdLFxyXG4gICAgICAgIHVuaWZvcm1CdWZmZXJzOiBzdHJpbmdbXSxcclxuICAgICAgICBzYW1wbGVyczogc3RyaW5nW10sXHJcbiAgICAgICAgZGVmaW5lczogTWF0ZXJpYWxEZWZpbmVzIHwgc3RyaW5nW10sXHJcbiAgICAgICAgYXR0cmlidXRlcz86IHN0cmluZ1tdLFxyXG4gICAgICAgIG9wdGlvbnM/OiBJQ3VzdG9tU2hhZGVyTmFtZVJlc29sdmVPcHRpb25zXHJcbiAgICApOiBzdHJpbmcge1xyXG4gICAgICAgIGlmIChvcHRpb25zKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRQcm9jZXNzaW5nID0gb3B0aW9ucy5wcm9jZXNzRmluYWxDb2RlO1xyXG4gICAgICAgICAgICBvcHRpb25zLnByb2Nlc3NGaW5hbENvZGUgPSAodHlwZTogc3RyaW5nLCBjb2RlOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSBcInZlcnRleFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGN1cnJlbnRQcm9jZXNzaW5nID8gY3VycmVudFByb2Nlc3NpbmcodHlwZSwgY29kZSkgOiBjb2RlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2NpID0gbmV3IFNoYWRlckNvZGVJbmxpbmVyKGNvZGUpO1xyXG4gICAgICAgICAgICAgICAgc2NpLmlubGluZVRva2VuID0gXCIjZGVmaW5lIHBicl9pbmxpbmVcIjtcclxuICAgICAgICAgICAgICAgIHNjaS5wcm9jZXNzQ29kZSgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGN1cnJlbnRQcm9jZXNzaW5nID8gY3VycmVudFByb2Nlc3NpbmcodHlwZSwgc2NpLmNvZGUpIDogc2NpLmNvZGU7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoYXR0cmlidXRlcyAmJiB0aGlzLl9jdXN0b21BdHRyaWJ1dGVzICYmIHRoaXMuX2N1c3RvbUF0dHJpYnV0ZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBhdHRyaWJ1dGVzLnB1c2goLi4udGhpcy5fY3VzdG9tQXR0cmlidXRlcyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLlJldmlld1VuaWZvcm0oXCJ1bmlmb3JtXCIsIHVuaWZvcm1zKTtcclxuICAgICAgICB0aGlzLlJldmlld1VuaWZvcm0oXCJzYW1wbGVyXCIsIHNhbXBsZXJzKTtcclxuXHJcbiAgICAgICAgY29uc3QgbmFtZSA9IHRoaXMuX2NyZWF0ZWRTaGFkZXJOYW1lO1xyXG5cclxuICAgICAgICBpZiAoRWZmZWN0LlNoYWRlcnNTdG9yZVtuYW1lICsgXCJWZXJ0ZXhTaGFkZXJcIl0gJiYgRWZmZWN0LlNoYWRlcnNTdG9yZVtuYW1lICsgXCJQaXhlbFNoYWRlclwiXSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmFtZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgRWZmZWN0LlNoYWRlcnNTdG9yZVtuYW1lICsgXCJWZXJ0ZXhTaGFkZXJcIl0gPSB0aGlzLl9pbmplY3RDdXN0b21Db2RlKHRoaXMuVmVydGV4U2hhZGVyLCBcInZlcnRleFwiKTtcclxuICAgICAgICBFZmZlY3QuU2hhZGVyc1N0b3JlW25hbWUgKyBcIlBpeGVsU2hhZGVyXCJdID0gdGhpcy5faW5qZWN0Q3VzdG9tQ29kZSh0aGlzLkZyYWdtZW50U2hhZGVyLCBcImZyYWdtZW50XCIpO1xyXG5cclxuICAgICAgICByZXR1cm4gbmFtZTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgX2luamVjdEN1c3RvbUNvZGUoY29kZTogc3RyaW5nLCBzaGFkZXJUeXBlOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIGNvbnN0IGN1c3RvbUNvZGUgPSB0aGlzLl9nZXRDdXN0b21Db2RlKHNoYWRlclR5cGUpO1xyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IHBvaW50IGluIGN1c3RvbUNvZGUpIHtcclxuICAgICAgICAgICAgY29uc3QgaW5qZWN0ZWRDb2RlID0gY3VzdG9tQ29kZVtwb2ludF07XHJcblxyXG4gICAgICAgICAgICBpZiAoaW5qZWN0ZWRDb2RlICYmIGluamVjdGVkQ29kZS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBmdWxsUG9pbnROYW1lID0gXCIjZGVmaW5lIFwiICsgcG9pbnQ7XHJcbiAgICAgICAgICAgICAgICBjb2RlID0gY29kZS5yZXBsYWNlKGZ1bGxQb2ludE5hbWUsIFwiXFxuXCIgKyBpbmplY3RlZENvZGUgKyBcIlxcblwiICsgZnVsbFBvaW50TmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBjb2RlO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBfZ2V0Q3VzdG9tQ29kZShzaGFkZXJUeXBlOiBzdHJpbmcpOiB7IFtwb2ludE5hbWU6IHN0cmluZ106IHN0cmluZyB9IHtcclxuICAgICAgICBpZiAoc2hhZGVyVHlwZSA9PT0gXCJ2ZXJ0ZXhcIikge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgQ1VTVE9NX1ZFUlRFWF9CRUdJTjogdGhpcy5DdXN0b21QYXJ0cy5WZXJ0ZXhfQmVnaW4sXHJcbiAgICAgICAgICAgICAgICBDVVNUT01fVkVSVEVYX0RFRklOSVRJT05TOiAodGhpcy5fY3VzdG9tVW5pZm9ybT8uam9pbihcIlxcblwiKSB8fCBcIlwiKSArICh0aGlzLkN1c3RvbVBhcnRzLlZlcnRleF9EZWZpbml0aW9ucyB8fCBcIlwiKSxcclxuICAgICAgICAgICAgICAgIENVU1RPTV9WRVJURVhfTUFJTl9CRUdJTjogdGhpcy5DdXN0b21QYXJ0cy5WZXJ0ZXhfTWFpbkJlZ2luLFxyXG4gICAgICAgICAgICAgICAgQ1VTVE9NX1ZFUlRFWF9VUERBVEVfUE9TSVRJT046IHRoaXMuQ3VzdG9tUGFydHMuVmVydGV4X0JlZm9yZV9Qb3NpdGlvblVwZGF0ZWQsXHJcbiAgICAgICAgICAgICAgICBDVVNUT01fVkVSVEVYX1VQREFURV9OT1JNQUw6IHRoaXMuQ3VzdG9tUGFydHMuVmVydGV4X0JlZm9yZV9Ob3JtYWxVcGRhdGVkLFxyXG4gICAgICAgICAgICAgICAgQ1VTVE9NX1ZFUlRFWF9NQUlOX0VORDogdGhpcy5DdXN0b21QYXJ0cy5WZXJ0ZXhfTWFpbkVuZCxcclxuICAgICAgICAgICAgICAgIENVU1RPTV9WRVJURVhfVVBEQVRFX1dPUkxEUE9TOiB0aGlzLkN1c3RvbVBhcnRzLlZlcnRleF9BZnRlcl9Xb3JsZFBvc0NvbXB1dGVkLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBDVVNUT01fRlJBR01FTlRfQkVHSU46IHRoaXMuQ3VzdG9tUGFydHMuRnJhZ21lbnRfQmVnaW4sXHJcbiAgICAgICAgICAgIENVU1RPTV9GUkFHTUVOVF9NQUlOX0JFR0lOOiB0aGlzLkN1c3RvbVBhcnRzLkZyYWdtZW50X01haW5CZWdpbixcclxuICAgICAgICAgICAgQ1VTVE9NX0ZSQUdNRU5UX0RFRklOSVRJT05TOiAodGhpcy5fY3VzdG9tVW5pZm9ybT8uam9pbihcIlxcblwiKSB8fCBcIlwiKSArICh0aGlzLkN1c3RvbVBhcnRzLkZyYWdtZW50X0RlZmluaXRpb25zIHx8IFwiXCIpLFxyXG4gICAgICAgICAgICBDVVNUT01fRlJBR01FTlRfVVBEQVRFX0FMQkVETzogdGhpcy5DdXN0b21QYXJ0cy5GcmFnbWVudF9DdXN0b21fQWxiZWRvLFxyXG4gICAgICAgICAgICBDVVNUT01fRlJBR01FTlRfVVBEQVRFX0FMUEhBOiB0aGlzLkN1c3RvbVBhcnRzLkZyYWdtZW50X0N1c3RvbV9BbHBoYSxcclxuICAgICAgICAgICAgQ1VTVE9NX0ZSQUdNRU5UX0JFRk9SRV9MSUdIVFM6IHRoaXMuQ3VzdG9tUGFydHMuRnJhZ21lbnRfQmVmb3JlX0xpZ2h0cyxcclxuICAgICAgICAgICAgQ1VTVE9NX0ZSQUdNRU5UX1VQREFURV9NRVRBTExJQ1JPVUdITkVTUzogdGhpcy5DdXN0b21QYXJ0cy5GcmFnbWVudF9DdXN0b21fTWV0YWxsaWNSb3VnaG5lc3MsXHJcbiAgICAgICAgICAgIENVU1RPTV9GUkFHTUVOVF9VUERBVEVfTUlDUk9TVVJGQUNFOiB0aGlzLkN1c3RvbVBhcnRzLkZyYWdtZW50X0N1c3RvbV9NaWNyb1N1cmZhY2UsXHJcbiAgICAgICAgICAgIENVU1RPTV9GUkFHTUVOVF9CRUZPUkVfRklOQUxDT0xPUkNPTVBPU0lUSU9OOiB0aGlzLkN1c3RvbVBhcnRzLkZyYWdtZW50X0JlZm9yZV9GaW5hbENvbG9yQ29tcG9zaXRpb24sXHJcbiAgICAgICAgICAgIENVU1RPTV9GUkFHTUVOVF9CRUZPUkVfRlJBR0NPTE9SOiB0aGlzLkN1c3RvbVBhcnRzLkZyYWdtZW50X0JlZm9yZV9GcmFnQ29sb3IsXHJcbiAgICAgICAgICAgIENVU1RPTV9GUkFHTUVOVF9NQUlOX0VORDogdGhpcy5DdXN0b21QYXJ0cy5GcmFnbWVudF9NYWluRW5kLFxyXG4gICAgICAgICAgICBDVVNUT01fRlJBR01FTlRfQkVGT1JFX0ZPRzogdGhpcy5DdXN0b21QYXJ0cy5GcmFnbWVudF9CZWZvcmVfRm9nLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBzY2VuZT86IFNjZW5lKSB7XHJcbiAgICAgICAgc3VwZXIobmFtZSwgc2NlbmUsIHRydWUpO1xyXG4gICAgICAgIHRoaXMuQ3VzdG9tUGFydHMgPSBuZXcgU2hhZGVyQWxiZWRvUGFydHMoKTtcclxuICAgICAgICB0aGlzLmN1c3RvbVNoYWRlck5hbWVSZXNvbHZlID0gdGhpcy5CdWlsZGVyO1xyXG5cclxuICAgICAgICB0aGlzLkZyYWdtZW50U2hhZGVyID0gRWZmZWN0LlNoYWRlcnNTdG9yZVtcInBiclBpeGVsU2hhZGVyXCJdO1xyXG4gICAgICAgIHRoaXMuVmVydGV4U2hhZGVyID0gRWZmZWN0LlNoYWRlcnNTdG9yZVtcInBiclZlcnRleFNoYWRlclwiXTtcclxuXHJcbiAgICAgICAgdGhpcy5GcmFnbWVudFNoYWRlciA9IHRoaXMuRnJhZ21lbnRTaGFkZXIucmVwbGFjZSgvI2luY2x1ZGU8cGJyQmxvY2tBbGJlZG9PcGFjaXR5Pi9nLCBFZmZlY3QuSW5jbHVkZXNTaGFkZXJzU3RvcmVbXCJwYnJCbG9ja0FsYmVkb09wYWNpdHlcIl0pO1xyXG4gICAgICAgIHRoaXMuRnJhZ21lbnRTaGFkZXIgPSB0aGlzLkZyYWdtZW50U2hhZGVyLnJlcGxhY2UoLyNpbmNsdWRlPHBickJsb2NrUmVmbGVjdGl2aXR5Pi9nLCBFZmZlY3QuSW5jbHVkZXNTaGFkZXJzU3RvcmVbXCJwYnJCbG9ja1JlZmxlY3Rpdml0eVwiXSk7XHJcbiAgICAgICAgdGhpcy5GcmFnbWVudFNoYWRlciA9IHRoaXMuRnJhZ21lbnRTaGFkZXIucmVwbGFjZSgvI2luY2x1ZGU8cGJyQmxvY2tGaW5hbENvbG9yQ29tcG9zaXRpb24+L2csIEVmZmVjdC5JbmNsdWRlc1NoYWRlcnNTdG9yZVtcInBickJsb2NrRmluYWxDb2xvckNvbXBvc2l0aW9uXCJdKTtcclxuXHJcbiAgICAgICAgUEJSQ3VzdG9tTWF0ZXJpYWwuU2hhZGVySW5kZXhlcisrO1xyXG4gICAgICAgIHRoaXMuX2NyZWF0ZWRTaGFkZXJOYW1lID0gXCJjdXN0b21wYnJfXCIgKyBQQlJDdXN0b21NYXRlcmlhbC5TaGFkZXJJbmRleGVyO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBvdmVycmlkZSBfYWZ0ZXJCaW5kKG1lc2g/OiBNZXNoLCBlZmZlY3Q6IE51bGxhYmxlPEVmZmVjdD4gPSBudWxsLCBzdWJNZXNoPzogU3ViTWVzaCk6IHZvaWQge1xyXG4gICAgICAgIGlmICghZWZmZWN0KSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5BdHRhY2hBZnRlckJpbmQobWVzaCwgZWZmZWN0KTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBzdXBlci5fYWZ0ZXJCaW5kKG1lc2gsIGVmZmVjdCwgc3ViTWVzaCk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge31cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFkZHMgYSBuZXcgdW5pZm9ybSB0byB0aGUgc2hhZGVyXHJcbiAgICAgKiBAcGFyYW0gbmFtZSB0aGUgbmFtZSBvZiB0aGUgdW5pZm9ybSB0byBhZGRcclxuICAgICAqIEBwYXJhbSBraW5kIHRoZSB0eXBlIG9mIHRoZSB1bmlmb3JtIHRvIGFkZFxyXG4gICAgICogQHBhcmFtIHBhcmFtIHRoZSB2YWx1ZSBvZiB0aGUgdW5pZm9ybSB0byBhZGRcclxuICAgICAqIEByZXR1cm5zIHRoZSBjdXJyZW50IG1hdGVyaWFsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBBZGRVbmlmb3JtKG5hbWU6IHN0cmluZywga2luZDogc3RyaW5nLCBwYXJhbTogYW55KTogUEJSQ3VzdG9tTWF0ZXJpYWwge1xyXG4gICAgICAgIGlmICghdGhpcy5fY3VzdG9tVW5pZm9ybSkge1xyXG4gICAgICAgICAgICB0aGlzLl9jdXN0b21Vbmlmb3JtID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgICAgIHRoaXMuX25ld1VuaWZvcm1zID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgICAgIHRoaXMuX25ld1NhbXBsZXJJbnN0YW5jZXMgPSB7fTtcclxuICAgICAgICAgICAgdGhpcy5fbmV3VW5pZm9ybUluc3RhbmNlcyA9IHt9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocGFyYW0pIHtcclxuICAgICAgICAgICAgaWYgKGtpbmQuaW5kZXhPZihcInNhbXBsZXJcIikgIT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICg8YW55PnRoaXMuX25ld1NhbXBsZXJJbnN0YW5jZXMpW2tpbmQgKyBcIi1cIiArIG5hbWVdID0gcGFyYW07XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAoPGFueT50aGlzLl9uZXdVbmlmb3JtSW5zdGFuY2VzKVtraW5kICsgXCItXCIgKyBuYW1lXSA9IHBhcmFtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2N1c3RvbVVuaWZvcm0ucHVzaChcInVuaWZvcm0gXCIgKyBraW5kICsgXCIgXCIgKyBuYW1lICsgXCI7XCIpO1xyXG4gICAgICAgIHRoaXMuX25ld1VuaWZvcm1zLnB1c2gobmFtZSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWRkcyBhIGN1c3RvbSBhdHRyaWJ1dGVcclxuICAgICAqIEBwYXJhbSBuYW1lIHRoZSBuYW1lIG9mIHRoZSBhdHRyaWJ1dGVcclxuICAgICAqIEByZXR1cm5zIHRoZSBjdXJyZW50IG1hdGVyaWFsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBBZGRBdHRyaWJ1dGUobmFtZTogc3RyaW5nKTogUEJSQ3VzdG9tTWF0ZXJpYWwge1xyXG4gICAgICAgIGlmICghdGhpcy5fY3VzdG9tQXR0cmlidXRlcykge1xyXG4gICAgICAgICAgICB0aGlzLl9jdXN0b21BdHRyaWJ1dGVzID0gW107XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9jdXN0b21BdHRyaWJ1dGVzLnB1c2gobmFtZSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB0aGUgY29kZSBvbiBGcmFnbWVudF9CZWdpbiBwb3J0aW9uXHJcbiAgICAgKiBAcGFyYW0gc2hhZGVyUGFydCB0aGUgY29kZSBzdHJpbmdcclxuICAgICAqIEByZXR1cm5zIHRoZSBjdXJyZW50IG1hdGVyaWFsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBGcmFnbWVudF9CZWdpbihzaGFkZXJQYXJ0OiBzdHJpbmcpOiBQQlJDdXN0b21NYXRlcmlhbCB7XHJcbiAgICAgICAgdGhpcy5DdXN0b21QYXJ0cy5GcmFnbWVudF9CZWdpbiA9IHNoYWRlclBhcnQ7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHRoZSBjb2RlIG9uIEZyYWdtZW50X0RlZmluaXRpb25zIHBvcnRpb25cclxuICAgICAqIEBwYXJhbSBzaGFkZXJQYXJ0IHRoZSBjb2RlIHN0cmluZ1xyXG4gICAgICogQHJldHVybnMgdGhlIGN1cnJlbnQgbWF0ZXJpYWxcclxuICAgICAqL1xyXG4gICAgcHVibGljIEZyYWdtZW50X0RlZmluaXRpb25zKHNoYWRlclBhcnQ6IHN0cmluZyk6IFBCUkN1c3RvbU1hdGVyaWFsIHtcclxuICAgICAgICB0aGlzLkN1c3RvbVBhcnRzLkZyYWdtZW50X0RlZmluaXRpb25zID0gc2hhZGVyUGFydDtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdGhlIGNvZGUgb24gRnJhZ21lbnRfTWFpbkJlZ2luIHBvcnRpb25cclxuICAgICAqIEBwYXJhbSBzaGFkZXJQYXJ0IHRoZSBjb2RlIHN0cmluZ1xyXG4gICAgICogQHJldHVybnMgdGhlIGN1cnJlbnQgbWF0ZXJpYWxcclxuICAgICAqL1xyXG4gICAgcHVibGljIEZyYWdtZW50X01haW5CZWdpbihzaGFkZXJQYXJ0OiBzdHJpbmcpOiBQQlJDdXN0b21NYXRlcmlhbCB7XHJcbiAgICAgICAgdGhpcy5DdXN0b21QYXJ0cy5GcmFnbWVudF9NYWluQmVnaW4gPSBzaGFkZXJQYXJ0O1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB0aGUgY29kZSBvbiBGcmFnbWVudF9DdXN0b21fQWxiZWRvIHBvcnRpb25cclxuICAgICAqIEBwYXJhbSBzaGFkZXJQYXJ0IHRoZSBjb2RlIHN0cmluZ1xyXG4gICAgICogQHJldHVybnMgdGhlIGN1cnJlbnQgbWF0ZXJpYWxcclxuICAgICAqL1xyXG4gICAgcHVibGljIEZyYWdtZW50X0N1c3RvbV9BbGJlZG8oc2hhZGVyUGFydDogc3RyaW5nKTogUEJSQ3VzdG9tTWF0ZXJpYWwge1xyXG4gICAgICAgIHRoaXMuQ3VzdG9tUGFydHMuRnJhZ21lbnRfQ3VzdG9tX0FsYmVkbyA9IHNoYWRlclBhcnQucmVwbGFjZShcInJlc3VsdFwiLCBcInN1cmZhY2VBbGJlZG9cIik7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHRoZSBjb2RlIG9uIEZyYWdtZW50X0N1c3RvbV9BbHBoYSBwb3J0aW9uXHJcbiAgICAgKiBAcGFyYW0gc2hhZGVyUGFydCB0aGUgY29kZSBzdHJpbmdcclxuICAgICAqIEByZXR1cm5zIHRoZSBjdXJyZW50IG1hdGVyaWFsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBGcmFnbWVudF9DdXN0b21fQWxwaGEoc2hhZGVyUGFydDogc3RyaW5nKTogUEJSQ3VzdG9tTWF0ZXJpYWwge1xyXG4gICAgICAgIHRoaXMuQ3VzdG9tUGFydHMuRnJhZ21lbnRfQ3VzdG9tX0FscGhhID0gc2hhZGVyUGFydC5yZXBsYWNlKFwicmVzdWx0XCIsIFwiYWxwaGFcIik7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHRoZSBjb2RlIG9uIEZyYWdtZW50X0JlZm9yZV9MaWdodHMgcG9ydGlvblxyXG4gICAgICogQHBhcmFtIHNoYWRlclBhcnQgdGhlIGNvZGUgc3RyaW5nXHJcbiAgICAgKiBAcmV0dXJucyB0aGUgY3VycmVudCBtYXRlcmlhbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgRnJhZ21lbnRfQmVmb3JlX0xpZ2h0cyhzaGFkZXJQYXJ0OiBzdHJpbmcpOiBQQlJDdXN0b21NYXRlcmlhbCB7XHJcbiAgICAgICAgdGhpcy5DdXN0b21QYXJ0cy5GcmFnbWVudF9CZWZvcmVfTGlnaHRzID0gc2hhZGVyUGFydDtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdGhlIGNvZGUgb24gRnJhZ21lbnRfQ3VzdG9tX01ldGFsbGljUm91Z2huZXNzIHBvcnRpb25cclxuICAgICAqIEBwYXJhbSBzaGFkZXJQYXJ0IHRoZSBjb2RlIHN0cmluZ1xyXG4gICAgICogQHJldHVybnMgdGhlIGN1cnJlbnQgbWF0ZXJpYWxcclxuICAgICAqL1xyXG4gICAgcHVibGljIEZyYWdtZW50X0N1c3RvbV9NZXRhbGxpY1JvdWdobmVzcyhzaGFkZXJQYXJ0OiBzdHJpbmcpOiBQQlJDdXN0b21NYXRlcmlhbCB7XHJcbiAgICAgICAgdGhpcy5DdXN0b21QYXJ0cy5GcmFnbWVudF9DdXN0b21fTWV0YWxsaWNSb3VnaG5lc3MgPSBzaGFkZXJQYXJ0O1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB0aGUgY29kZSBvbiBGcmFnbWVudF9DdXN0b21fTWljcm9TdXJmYWNlIHBvcnRpb25cclxuICAgICAqIEBwYXJhbSBzaGFkZXJQYXJ0IHRoZSBjb2RlIHN0cmluZ1xyXG4gICAgICogQHJldHVybnMgdGhlIGN1cnJlbnQgbWF0ZXJpYWxcclxuICAgICAqL1xyXG4gICAgcHVibGljIEZyYWdtZW50X0N1c3RvbV9NaWNyb1N1cmZhY2Uoc2hhZGVyUGFydDogc3RyaW5nKTogUEJSQ3VzdG9tTWF0ZXJpYWwge1xyXG4gICAgICAgIHRoaXMuQ3VzdG9tUGFydHMuRnJhZ21lbnRfQ3VzdG9tX01pY3JvU3VyZmFjZSA9IHNoYWRlclBhcnQ7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHRoZSBjb2RlIG9uIEZyYWdtZW50X0JlZm9yZV9Gb2cgcG9ydGlvblxyXG4gICAgICogQHBhcmFtIHNoYWRlclBhcnQgdGhlIGNvZGUgc3RyaW5nXHJcbiAgICAgKiBAcmV0dXJucyB0aGUgY3VycmVudCBtYXRlcmlhbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgRnJhZ21lbnRfQmVmb3JlX0ZvZyhzaGFkZXJQYXJ0OiBzdHJpbmcpOiBQQlJDdXN0b21NYXRlcmlhbCB7XHJcbiAgICAgICAgdGhpcy5DdXN0b21QYXJ0cy5GcmFnbWVudF9CZWZvcmVfRm9nID0gc2hhZGVyUGFydDtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdGhlIGNvZGUgb24gRnJhZ21lbnRfQmVmb3JlX0ZpbmFsQ29sb3JDb21wb3NpdGlvbiBwb3J0aW9uXHJcbiAgICAgKiBAcGFyYW0gc2hhZGVyUGFydCB0aGUgY29kZSBzdHJpbmdcclxuICAgICAqIEByZXR1cm5zIHRoZSBjdXJyZW50IG1hdGVyaWFsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBGcmFnbWVudF9CZWZvcmVfRmluYWxDb2xvckNvbXBvc2l0aW9uKHNoYWRlclBhcnQ6IHN0cmluZyk6IFBCUkN1c3RvbU1hdGVyaWFsIHtcclxuICAgICAgICB0aGlzLkN1c3RvbVBhcnRzLkZyYWdtZW50X0JlZm9yZV9GaW5hbENvbG9yQ29tcG9zaXRpb24gPSBzaGFkZXJQYXJ0O1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB0aGUgY29kZSBvbiBGcmFnbWVudF9CZWZvcmVfRnJhZ0NvbG9yIHBvcnRpb25cclxuICAgICAqIEBwYXJhbSBzaGFkZXJQYXJ0IHRoZSBjb2RlIHN0cmluZ1xyXG4gICAgICogQHJldHVybnMgdGhlIGN1cnJlbnQgbWF0ZXJpYWxcclxuICAgICAqL1xyXG4gICAgcHVibGljIEZyYWdtZW50X0JlZm9yZV9GcmFnQ29sb3Ioc2hhZGVyUGFydDogc3RyaW5nKTogUEJSQ3VzdG9tTWF0ZXJpYWwge1xyXG4gICAgICAgIHRoaXMuQ3VzdG9tUGFydHMuRnJhZ21lbnRfQmVmb3JlX0ZyYWdDb2xvciA9IHNoYWRlclBhcnQucmVwbGFjZShcInJlc3VsdFwiLCBcImNvbG9yXCIpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB0aGUgY29kZSBvbiBGcmFnbWVudF9NYWluRW5kIHBvcnRpb25cclxuICAgICAqIEBwYXJhbSBzaGFkZXJQYXJ0IHRoZSBjb2RlIHN0cmluZ1xyXG4gICAgICogQHJldHVybnMgdGhlIGN1cnJlbnQgbWF0ZXJpYWxcclxuICAgICAqL1xyXG4gICAgcHVibGljIEZyYWdtZW50X01haW5FbmQoc2hhZGVyUGFydDogc3RyaW5nKTogUEJSQ3VzdG9tTWF0ZXJpYWwge1xyXG4gICAgICAgIHRoaXMuQ3VzdG9tUGFydHMuRnJhZ21lbnRfTWFpbkVuZCA9IHNoYWRlclBhcnQ7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHRoZSBjb2RlIG9uIFZlcnRleF9CZWdpbiBwb3J0aW9uXHJcbiAgICAgKiBAcGFyYW0gc2hhZGVyUGFydCB0aGUgY29kZSBzdHJpbmdcclxuICAgICAqIEByZXR1cm5zIHRoZSBjdXJyZW50IG1hdGVyaWFsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBWZXJ0ZXhfQmVnaW4oc2hhZGVyUGFydDogc3RyaW5nKTogUEJSQ3VzdG9tTWF0ZXJpYWwge1xyXG4gICAgICAgIHRoaXMuQ3VzdG9tUGFydHMuVmVydGV4X0JlZ2luID0gc2hhZGVyUGFydDtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdGhlIGNvZGUgb24gVmVydGV4X0RlZmluaXRpb25zIHBvcnRpb25cclxuICAgICAqIEBwYXJhbSBzaGFkZXJQYXJ0IHRoZSBjb2RlIHN0cmluZ1xyXG4gICAgICogQHJldHVybnMgdGhlIGN1cnJlbnQgbWF0ZXJpYWxcclxuICAgICAqL1xyXG4gICAgcHVibGljIFZlcnRleF9EZWZpbml0aW9ucyhzaGFkZXJQYXJ0OiBzdHJpbmcpOiBQQlJDdXN0b21NYXRlcmlhbCB7XHJcbiAgICAgICAgdGhpcy5DdXN0b21QYXJ0cy5WZXJ0ZXhfRGVmaW5pdGlvbnMgPSBzaGFkZXJQYXJ0O1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB0aGUgY29kZSBvbiBWZXJ0ZXhfTWFpbkJlZ2luIHBvcnRpb25cclxuICAgICAqIEBwYXJhbSBzaGFkZXJQYXJ0IHRoZSBjb2RlIHN0cmluZ1xyXG4gICAgICogQHJldHVybnMgdGhlIGN1cnJlbnQgbWF0ZXJpYWxcclxuICAgICAqL1xyXG4gICAgcHVibGljIFZlcnRleF9NYWluQmVnaW4oc2hhZGVyUGFydDogc3RyaW5nKTogUEJSQ3VzdG9tTWF0ZXJpYWwge1xyXG4gICAgICAgIHRoaXMuQ3VzdG9tUGFydHMuVmVydGV4X01haW5CZWdpbiA9IHNoYWRlclBhcnQ7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHRoZSBjb2RlIG9uIFZlcnRleF9CZWZvcmVfUG9zaXRpb25VcGRhdGVkIHBvcnRpb25cclxuICAgICAqIEBwYXJhbSBzaGFkZXJQYXJ0IHRoZSBjb2RlIHN0cmluZ1xyXG4gICAgICogQHJldHVybnMgdGhlIGN1cnJlbnQgbWF0ZXJpYWxcclxuICAgICAqL1xyXG4gICAgcHVibGljIFZlcnRleF9CZWZvcmVfUG9zaXRpb25VcGRhdGVkKHNoYWRlclBhcnQ6IHN0cmluZyk6IFBCUkN1c3RvbU1hdGVyaWFsIHtcclxuICAgICAgICB0aGlzLkN1c3RvbVBhcnRzLlZlcnRleF9CZWZvcmVfUG9zaXRpb25VcGRhdGVkID0gc2hhZGVyUGFydC5yZXBsYWNlKFwicmVzdWx0XCIsIFwicG9zaXRpb25VcGRhdGVkXCIpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB0aGUgY29kZSBvbiBWZXJ0ZXhfQmVmb3JlX05vcm1hbFVwZGF0ZWQgcG9ydGlvblxyXG4gICAgICogQHBhcmFtIHNoYWRlclBhcnQgdGhlIGNvZGUgc3RyaW5nXHJcbiAgICAgKiBAcmV0dXJucyB0aGUgY3VycmVudCBtYXRlcmlhbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgVmVydGV4X0JlZm9yZV9Ob3JtYWxVcGRhdGVkKHNoYWRlclBhcnQ6IHN0cmluZyk6IFBCUkN1c3RvbU1hdGVyaWFsIHtcclxuICAgICAgICB0aGlzLkN1c3RvbVBhcnRzLlZlcnRleF9CZWZvcmVfTm9ybWFsVXBkYXRlZCA9IHNoYWRlclBhcnQucmVwbGFjZShcInJlc3VsdFwiLCBcIm5vcm1hbFVwZGF0ZWRcIik7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHRoZSBjb2RlIG9uIFZlcnRleF9BZnRlcl9Xb3JsZFBvc0NvbXB1dGVkIHBvcnRpb25cclxuICAgICAqIEBwYXJhbSBzaGFkZXJQYXJ0IHRoZSBjb2RlIHN0cmluZ1xyXG4gICAgICogQHJldHVybnMgdGhlIGN1cnJlbnQgbWF0ZXJpYWxcclxuICAgICAqL1xyXG4gICAgcHVibGljIFZlcnRleF9BZnRlcl9Xb3JsZFBvc0NvbXB1dGVkKHNoYWRlclBhcnQ6IHN0cmluZyk6IFBCUkN1c3RvbU1hdGVyaWFsIHtcclxuICAgICAgICB0aGlzLkN1c3RvbVBhcnRzLlZlcnRleF9BZnRlcl9Xb3JsZFBvc0NvbXB1dGVkID0gc2hhZGVyUGFydDtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdGhlIGNvZGUgb24gVmVydGV4X01haW5FbmQgcG9ydGlvblxyXG4gICAgICogQHBhcmFtIHNoYWRlclBhcnQgdGhlIGNvZGUgc3RyaW5nXHJcbiAgICAgKiBAcmV0dXJucyB0aGUgY3VycmVudCBtYXRlcmlhbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgVmVydGV4X01haW5FbmQoc2hhZGVyUGFydDogc3RyaW5nKTogUEJSQ3VzdG9tTWF0ZXJpYWwge1xyXG4gICAgICAgIHRoaXMuQ3VzdG9tUGFydHMuVmVydGV4X01haW5FbmQgPSBzaGFkZXJQYXJ0O1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG59XHJcblxyXG5SZWdpc3RlckNsYXNzKFwiQkFCWUxPTi5QQlJDdXN0b21NYXRlcmlhbFwiLCBQQlJDdXN0b21NYXRlcmlhbCk7XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1pbnRlcm5hbC1tb2R1bGVzICovXHJcbmltcG9ydCAqIGFzIE1hdExpYiBmcm9tIFwibWF0ZXJpYWxzL2N1c3RvbS9pbmRleFwiO1xyXG5cclxuLyoqXHJcbiAqIFRoaXMgaXMgdGhlIGVudHJ5IHBvaW50IGZvciB0aGUgVU1EIG1vZHVsZS5cclxuICogVGhlIGVudHJ5IHBvaW50IGZvciBhIGZ1dHVyZSBFU00gcGFja2FnZSBzaG91bGQgYmUgaW5kZXgudHNcclxuICovXHJcbmNvbnN0IGdsb2JhbE9iamVjdCA9IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWwgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDogdW5kZWZpbmVkO1xyXG5pZiAodHlwZW9mIGdsb2JhbE9iamVjdCAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgZm9yIChjb25zdCBrZXkgaW4gTWF0TGliKSB7XHJcbiAgICAgICAgKDxhbnk+Z2xvYmFsT2JqZWN0KS5CQUJZTE9OW2tleV0gPSAoPGFueT5NYXRMaWIpW2tleV07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCAqIGZyb20gXCJtYXRlcmlhbHMvY3VzdG9tL2luZGV4XCI7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9iYWJ5bG9uanNfTWF0ZXJpYWxzX2VmZmVjdF9fOyIsIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLlxuXG5QZXJtaXNzaW9uIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBhbmQvb3IgZGlzdHJpYnV0ZSB0aGlzIHNvZnR3YXJlIGZvciBhbnlcbnB1cnBvc2Ugd2l0aCBvciB3aXRob3V0IGZlZSBpcyBoZXJlYnkgZ3JhbnRlZC5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiBBTkQgVEhFIEFVVEhPUiBESVNDTEFJTVMgQUxMIFdBUlJBTlRJRVMgV0lUSFxuUkVHQVJEIFRPIFRISVMgU09GVFdBUkUgSU5DTFVESU5HIEFMTCBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZXG5BTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUiBCRSBMSUFCTEUgRk9SIEFOWSBTUEVDSUFMLCBESVJFQ1QsXG5JTkRJUkVDVCwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIE9SIEFOWSBEQU1BR0VTIFdIQVRTT0VWRVIgUkVTVUxUSU5HIEZST01cbkxPU1MgT0YgVVNFLCBEQVRBIE9SIFBST0ZJVFMsIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBORUdMSUdFTkNFIE9SXG5PVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SXG5QRVJGT1JNQU5DRSBPRiBUSElTIFNPRlRXQVJFLlxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlLCBTdXBwcmVzc2VkRXJyb3IsIFN5bWJvbCwgSXRlcmF0b3IgKi9cblxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XG4gIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XG4gIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XG4gIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XG4gIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG59XG5cbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcbiAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcbiAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0O1xuICB9XG4gIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcbiAgdmFyIHQgPSB7fTtcbiAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXG4gICAgICB0W3BdID0gc1twXTtcbiAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxuICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcbiAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XG4gICAgICB9XG4gIHJldHVybiB0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xuICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xuICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xuICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xuICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2VzRGVjb3JhdGUoY3RvciwgZGVzY3JpcHRvckluLCBkZWNvcmF0b3JzLCBjb250ZXh0SW4sIGluaXRpYWxpemVycywgZXh0cmFJbml0aWFsaXplcnMpIHtcbiAgZnVuY3Rpb24gYWNjZXB0KGYpIHsgaWYgKGYgIT09IHZvaWQgMCAmJiB0eXBlb2YgZiAhPT0gXCJmdW5jdGlvblwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRnVuY3Rpb24gZXhwZWN0ZWRcIik7IHJldHVybiBmOyB9XG4gIHZhciBraW5kID0gY29udGV4dEluLmtpbmQsIGtleSA9IGtpbmQgPT09IFwiZ2V0dGVyXCIgPyBcImdldFwiIDoga2luZCA9PT0gXCJzZXR0ZXJcIiA/IFwic2V0XCIgOiBcInZhbHVlXCI7XG4gIHZhciB0YXJnZXQgPSAhZGVzY3JpcHRvckluICYmIGN0b3IgPyBjb250ZXh0SW5bXCJzdGF0aWNcIl0gPyBjdG9yIDogY3Rvci5wcm90b3R5cGUgOiBudWxsO1xuICB2YXIgZGVzY3JpcHRvciA9IGRlc2NyaXB0b3JJbiB8fCAodGFyZ2V0ID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGNvbnRleHRJbi5uYW1lKSA6IHt9KTtcbiAgdmFyIF8sIGRvbmUgPSBmYWxzZTtcbiAgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIHZhciBjb250ZXh0ID0ge307XG4gICAgICBmb3IgKHZhciBwIGluIGNvbnRleHRJbikgY29udGV4dFtwXSA9IHAgPT09IFwiYWNjZXNzXCIgPyB7fSA6IGNvbnRleHRJbltwXTtcbiAgICAgIGZvciAodmFyIHAgaW4gY29udGV4dEluLmFjY2VzcykgY29udGV4dC5hY2Nlc3NbcF0gPSBjb250ZXh0SW4uYWNjZXNzW3BdO1xuICAgICAgY29udGV4dC5hZGRJbml0aWFsaXplciA9IGZ1bmN0aW9uIChmKSB7IGlmIChkb25lKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGFkZCBpbml0aWFsaXplcnMgYWZ0ZXIgZGVjb3JhdGlvbiBoYXMgY29tcGxldGVkXCIpOyBleHRyYUluaXRpYWxpemVycy5wdXNoKGFjY2VwdChmIHx8IG51bGwpKTsgfTtcbiAgICAgIHZhciByZXN1bHQgPSAoMCwgZGVjb3JhdG9yc1tpXSkoa2luZCA9PT0gXCJhY2Nlc3NvclwiID8geyBnZXQ6IGRlc2NyaXB0b3IuZ2V0LCBzZXQ6IGRlc2NyaXB0b3Iuc2V0IH0gOiBkZXNjcmlwdG9yW2tleV0sIGNvbnRleHQpO1xuICAgICAgaWYgKGtpbmQgPT09IFwiYWNjZXNzb3JcIikge1xuICAgICAgICAgIGlmIChyZXN1bHQgPT09IHZvaWQgMCkgY29udGludWU7XG4gICAgICAgICAgaWYgKHJlc3VsdCA9PT0gbnVsbCB8fCB0eXBlb2YgcmVzdWx0ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiT2JqZWN0IGV4cGVjdGVkXCIpO1xuICAgICAgICAgIGlmIChfID0gYWNjZXB0KHJlc3VsdC5nZXQpKSBkZXNjcmlwdG9yLmdldCA9IF87XG4gICAgICAgICAgaWYgKF8gPSBhY2NlcHQocmVzdWx0LnNldCkpIGRlc2NyaXB0b3Iuc2V0ID0gXztcbiAgICAgICAgICBpZiAoXyA9IGFjY2VwdChyZXN1bHQuaW5pdCkpIGluaXRpYWxpemVycy51bnNoaWZ0KF8pO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoXyA9IGFjY2VwdChyZXN1bHQpKSB7XG4gICAgICAgICAgaWYgKGtpbmQgPT09IFwiZmllbGRcIikgaW5pdGlhbGl6ZXJzLnVuc2hpZnQoXyk7XG4gICAgICAgICAgZWxzZSBkZXNjcmlwdG9yW2tleV0gPSBfO1xuICAgICAgfVxuICB9XG4gIGlmICh0YXJnZXQpIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGNvbnRleHRJbi5uYW1lLCBkZXNjcmlwdG9yKTtcbiAgZG9uZSA9IHRydWU7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX19ydW5Jbml0aWFsaXplcnModGhpc0FyZywgaW5pdGlhbGl6ZXJzLCB2YWx1ZSkge1xuICB2YXIgdXNlVmFsdWUgPSBhcmd1bWVudHMubGVuZ3RoID4gMjtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBpbml0aWFsaXplcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhbHVlID0gdXNlVmFsdWUgPyBpbml0aWFsaXplcnNbaV0uY2FsbCh0aGlzQXJnLCB2YWx1ZSkgOiBpbml0aWFsaXplcnNbaV0uY2FsbCh0aGlzQXJnKTtcbiAgfVxuICByZXR1cm4gdXNlVmFsdWUgPyB2YWx1ZSA6IHZvaWQgMDtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3Byb3BLZXkoeCkge1xuICByZXR1cm4gdHlwZW9mIHggPT09IFwic3ltYm9sXCIgPyB4IDogXCJcIi5jb25jYXQoeCk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX19zZXRGdW5jdGlvbk5hbWUoZiwgbmFtZSwgcHJlZml4KSB7XG4gIGlmICh0eXBlb2YgbmFtZSA9PT0gXCJzeW1ib2xcIikgbmFtZSA9IG5hbWUuZGVzY3JpcHRpb24gPyBcIltcIi5jb25jYXQobmFtZS5kZXNjcmlwdGlvbiwgXCJdXCIpIDogXCJcIjtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmLCBcIm5hbWVcIiwgeyBjb25maWd1cmFibGU6IHRydWUsIHZhbHVlOiBwcmVmaXggPyBcIlwiLmNvbmNhdChwcmVmaXgsIFwiIFwiLCBuYW1lKSA6IG5hbWUgfSk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xuICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xuICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnID0gT2JqZWN0LmNyZWF0ZSgodHlwZW9mIEl0ZXJhdG9yID09PSBcImZ1bmN0aW9uXCIgPyBJdGVyYXRvciA6IE9iamVjdCkucHJvdG90eXBlKTtcbiAgcmV0dXJuIGcubmV4dCA9IHZlcmIoMCksIGdbXCJ0aHJvd1wiXSA9IHZlcmIoMSksIGdbXCJyZXR1cm5cIl0gPSB2ZXJiKDIpLCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XG4gIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxuICBmdW5jdGlvbiBzdGVwKG9wKSB7XG4gICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XG4gICAgICB3aGlsZSAoZyAmJiAoZyA9IDAsIG9wWzBdICYmIChfID0gMCkpLCBfKSB0cnkge1xuICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcbiAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XG4gICAgICAgICAgc3dpdGNoIChvcFswXSkge1xuICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcbiAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xuICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cbiAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xuICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxuICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XG4gIH1cbn1cblxuZXhwb3J0IHZhciBfX2NyZWF0ZUJpbmRpbmcgPSBPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihtLCBrKTtcbiAgaWYgKCFkZXNjIHx8IChcImdldFwiIGluIGRlc2MgPyAhbS5fX2VzTW9kdWxlIDogZGVzYy53cml0YWJsZSB8fCBkZXNjLmNvbmZpZ3VyYWJsZSkpIHtcbiAgICAgIGRlc2MgPSB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH07XG4gIH1cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCBkZXNjKTtcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gIG9bazJdID0gbVtrXTtcbn0pO1xuXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIG8pIHtcbiAgZm9yICh2YXIgcCBpbiBtKSBpZiAocCAhPT0gXCJkZWZhdWx0XCIgJiYgIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvLCBwKSkgX19jcmVhdGVCaW5kaW5nKG8sIG0sIHApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xuICB2YXIgcyA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBTeW1ib2wuaXRlcmF0b3IsIG0gPSBzICYmIG9bc10sIGkgPSAwO1xuICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcbiAgaWYgKG8gJiYgdHlwZW9mIG8ubGVuZ3RoID09PSBcIm51bWJlclwiKSByZXR1cm4ge1xuICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XG4gICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xuICAgICAgfVxuICB9O1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKHMgPyBcIk9iamVjdCBpcyBub3QgaXRlcmFibGUuXCIgOiBcIlN5bWJvbC5pdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xuICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XG4gIGlmICghbSkgcmV0dXJuIG87XG4gIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xuICB0cnkge1xuICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XG4gIH1cbiAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XG4gIGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcbiAgICAgIH1cbiAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxuICB9XG4gIHJldHVybiBhcjtcbn1cblxuLyoqIEBkZXByZWNhdGVkICovXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XG4gIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxuICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xuICByZXR1cm4gYXI7XG59XG5cbi8qKiBAZGVwcmVjYXRlZCAqL1xuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkQXJyYXlzKCkge1xuICBmb3IgKHZhciBzID0gMCwgaSA9IDAsIGlsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGlsOyBpKyspIHMgKz0gYXJndW1lbnRzW2ldLmxlbmd0aDtcbiAgZm9yICh2YXIgciA9IEFycmF5KHMpLCBrID0gMCwgaSA9IDA7IGkgPCBpbDsgaSsrKVxuICAgICAgZm9yICh2YXIgYSA9IGFyZ3VtZW50c1tpXSwgaiA9IDAsIGpsID0gYS5sZW5ndGg7IGogPCBqbDsgaisrLCBrKyspXG4gICAgICAgICAgcltrXSA9IGFbal07XG4gIHJldHVybiByO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWRBcnJheSh0bywgZnJvbSwgcGFjaykge1xuICBpZiAocGFjayB8fCBhcmd1bWVudHMubGVuZ3RoID09PSAyKSBmb3IgKHZhciBpID0gMCwgbCA9IGZyb20ubGVuZ3RoLCBhcjsgaSA8IGw7IGkrKykge1xuICAgICAgaWYgKGFyIHx8ICEoaSBpbiBmcm9tKSkge1xuICAgICAgICAgIGlmICghYXIpIGFyID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZnJvbSwgMCwgaSk7XG4gICAgICAgICAgYXJbaV0gPSBmcm9tW2ldO1xuICAgICAgfVxuICB9XG4gIHJldHVybiB0by5jb25jYXQoYXIgfHwgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZnJvbSkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XG4gIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcbiAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcbiAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcbiAgcmV0dXJuIGkgPSBPYmplY3QuY3JlYXRlKCh0eXBlb2YgQXN5bmNJdGVyYXRvciA9PT0gXCJmdW5jdGlvblwiID8gQXN5bmNJdGVyYXRvciA6IE9iamVjdCkucHJvdG90eXBlKSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiLCBhd2FpdFJldHVybiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcbiAgZnVuY3Rpb24gYXdhaXRSZXR1cm4oZikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGYsIHJlamVjdCk7IH07IH1cbiAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlmIChnW25dKSB7IGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IGlmIChmKSBpW25dID0gZihpW25dKTsgfSB9XG4gIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cbiAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XG4gIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cbiAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxuICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcbiAgdmFyIGksIHA7XG4gIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XG4gIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IGZhbHNlIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcbiAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcbiAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcbiAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xuICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XG4gIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XG4gIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XG4gIHJldHVybiBjb29rZWQ7XG59O1xuXG52YXIgX19zZXRNb2R1bGVEZWZhdWx0ID0gT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCB2KSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcbn0pIDogZnVuY3Rpb24obywgdikge1xuICBvW1wiZGVmYXVsdFwiXSA9IHY7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xuICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xuICB2YXIgcmVzdWx0ID0ge307XG4gIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChrICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrKTtcbiAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcbiAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRHZXQocmVjZWl2ZXIsIHN0YXRlLCBraW5kLCBmKSB7XG4gIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIGdldHRlclwiKTtcbiAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgcmVhZCBwcml2YXRlIG1lbWJlciBmcm9tIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XG4gIHJldHVybiBraW5kID09PSBcIm1cIiA/IGYgOiBraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlcikgOiBmID8gZi52YWx1ZSA6IHN0YXRlLmdldChyZWNlaXZlcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHJlY2VpdmVyLCBzdGF0ZSwgdmFsdWUsIGtpbmQsIGYpIHtcbiAgaWYgKGtpbmQgPT09IFwibVwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBtZXRob2QgaXMgbm90IHdyaXRhYmxlXCIpO1xuICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBzZXR0ZXJcIik7XG4gIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHdyaXRlIHByaXZhdGUgbWVtYmVyIHRvIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XG4gIHJldHVybiAoa2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIsIHZhbHVlKSA6IGYgPyBmLnZhbHVlID0gdmFsdWUgOiBzdGF0ZS5zZXQocmVjZWl2ZXIsIHZhbHVlKSksIHZhbHVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZEluKHN0YXRlLCByZWNlaXZlcikge1xuICBpZiAocmVjZWl2ZXIgPT09IG51bGwgfHwgKHR5cGVvZiByZWNlaXZlciAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgcmVjZWl2ZXIgIT09IFwiZnVuY3Rpb25cIikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgdXNlICdpbicgb3BlcmF0b3Igb24gbm9uLW9iamVjdFwiKTtcbiAgcmV0dXJuIHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgPT09IHN0YXRlIDogc3RhdGUuaGFzKHJlY2VpdmVyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fYWRkRGlzcG9zYWJsZVJlc291cmNlKGVudiwgdmFsdWUsIGFzeW5jKSB7XG4gIGlmICh2YWx1ZSAhPT0gbnVsbCAmJiB2YWx1ZSAhPT0gdm9pZCAwKSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgdmFsdWUgIT09IFwiZnVuY3Rpb25cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk9iamVjdCBleHBlY3RlZC5cIik7XG4gICAgdmFyIGRpc3Bvc2UsIGlubmVyO1xuICAgIGlmIChhc3luYykge1xuICAgICAgaWYgKCFTeW1ib2wuYXN5bmNEaXNwb3NlKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jRGlzcG9zZSBpcyBub3QgZGVmaW5lZC5cIik7XG4gICAgICBkaXNwb3NlID0gdmFsdWVbU3ltYm9sLmFzeW5jRGlzcG9zZV07XG4gICAgfVxuICAgIGlmIChkaXNwb3NlID09PSB2b2lkIDApIHtcbiAgICAgIGlmICghU3ltYm9sLmRpc3Bvc2UpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuZGlzcG9zZSBpcyBub3QgZGVmaW5lZC5cIik7XG4gICAgICBkaXNwb3NlID0gdmFsdWVbU3ltYm9sLmRpc3Bvc2VdO1xuICAgICAgaWYgKGFzeW5jKSBpbm5lciA9IGRpc3Bvc2U7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgZGlzcG9zZSAhPT0gXCJmdW5jdGlvblwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiT2JqZWN0IG5vdCBkaXNwb3NhYmxlLlwiKTtcbiAgICBpZiAoaW5uZXIpIGRpc3Bvc2UgPSBmdW5jdGlvbigpIHsgdHJ5IHsgaW5uZXIuY2FsbCh0aGlzKTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gUHJvbWlzZS5yZWplY3QoZSk7IH0gfTtcbiAgICBlbnYuc3RhY2sucHVzaCh7IHZhbHVlOiB2YWx1ZSwgZGlzcG9zZTogZGlzcG9zZSwgYXN5bmM6IGFzeW5jIH0pO1xuICB9XG4gIGVsc2UgaWYgKGFzeW5jKSB7XG4gICAgZW52LnN0YWNrLnB1c2goeyBhc3luYzogdHJ1ZSB9KTtcbiAgfVxuICByZXR1cm4gdmFsdWU7XG59XG5cbnZhciBfU3VwcHJlc3NlZEVycm9yID0gdHlwZW9mIFN1cHByZXNzZWRFcnJvciA9PT0gXCJmdW5jdGlvblwiID8gU3VwcHJlc3NlZEVycm9yIDogZnVuY3Rpb24gKGVycm9yLCBzdXBwcmVzc2VkLCBtZXNzYWdlKSB7XG4gIHZhciBlID0gbmV3IEVycm9yKG1lc3NhZ2UpO1xuICByZXR1cm4gZS5uYW1lID0gXCJTdXBwcmVzc2VkRXJyb3JcIiwgZS5lcnJvciA9IGVycm9yLCBlLnN1cHByZXNzZWQgPSBzdXBwcmVzc2VkLCBlO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fZGlzcG9zZVJlc291cmNlcyhlbnYpIHtcbiAgZnVuY3Rpb24gZmFpbChlKSB7XG4gICAgZW52LmVycm9yID0gZW52Lmhhc0Vycm9yID8gbmV3IF9TdXBwcmVzc2VkRXJyb3IoZSwgZW52LmVycm9yLCBcIkFuIGVycm9yIHdhcyBzdXBwcmVzc2VkIGR1cmluZyBkaXNwb3NhbC5cIikgOiBlO1xuICAgIGVudi5oYXNFcnJvciA9IHRydWU7XG4gIH1cbiAgdmFyIHIsIHMgPSAwO1xuICBmdW5jdGlvbiBuZXh0KCkge1xuICAgIHdoaWxlIChyID0gZW52LnN0YWNrLnBvcCgpKSB7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAoIXIuYXN5bmMgJiYgcyA9PT0gMSkgcmV0dXJuIHMgPSAwLCBlbnYuc3RhY2sucHVzaChyKSwgUHJvbWlzZS5yZXNvbHZlKCkudGhlbihuZXh0KTtcbiAgICAgICAgaWYgKHIuZGlzcG9zZSkge1xuICAgICAgICAgIHZhciByZXN1bHQgPSByLmRpc3Bvc2UuY2FsbChyLnZhbHVlKTtcbiAgICAgICAgICBpZiAoci5hc3luYykgcmV0dXJuIHMgfD0gMiwgUHJvbWlzZS5yZXNvbHZlKHJlc3VsdCkudGhlbihuZXh0LCBmdW5jdGlvbihlKSB7IGZhaWwoZSk7IHJldHVybiBuZXh0KCk7IH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgcyB8PSAxO1xuICAgICAgfVxuICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgZmFpbChlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHMgPT09IDEpIHJldHVybiBlbnYuaGFzRXJyb3IgPyBQcm9taXNlLnJlamVjdChlbnYuZXJyb3IpIDogUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgaWYgKGVudi5oYXNFcnJvcikgdGhyb3cgZW52LmVycm9yO1xuICB9XG4gIHJldHVybiBuZXh0KCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3Jld3JpdGVSZWxhdGl2ZUltcG9ydEV4dGVuc2lvbihwYXRoLCBwcmVzZXJ2ZUpzeCkge1xuICBpZiAodHlwZW9mIHBhdGggPT09IFwic3RyaW5nXCIgJiYgL15cXC5cXC4/XFwvLy50ZXN0KHBhdGgpKSB7XG4gICAgICByZXR1cm4gcGF0aC5yZXBsYWNlKC9cXC4odHN4KSR8KCg/OlxcLmQpPykoKD86XFwuW14uL10rPyk/KVxcLihbY21dPyl0cyQvaSwgZnVuY3Rpb24gKG0sIHRzeCwgZCwgZXh0LCBjbSkge1xuICAgICAgICAgIHJldHVybiB0c3ggPyBwcmVzZXJ2ZUpzeCA/IFwiLmpzeFwiIDogXCIuanNcIiA6IGQgJiYgKCFleHQgfHwgIWNtKSA/IG0gOiAoZCArIGV4dCArIFwiLlwiICsgY20udG9Mb3dlckNhc2UoKSArIFwianNcIik7XG4gICAgICB9KTtcbiAgfVxuICByZXR1cm4gcGF0aDtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBfX2V4dGVuZHMsXG4gIF9fYXNzaWduLFxuICBfX3Jlc3QsXG4gIF9fZGVjb3JhdGUsXG4gIF9fcGFyYW0sXG4gIF9fZXNEZWNvcmF0ZSxcbiAgX19ydW5Jbml0aWFsaXplcnMsXG4gIF9fcHJvcEtleSxcbiAgX19zZXRGdW5jdGlvbk5hbWUsXG4gIF9fbWV0YWRhdGEsXG4gIF9fYXdhaXRlcixcbiAgX19nZW5lcmF0b3IsXG4gIF9fY3JlYXRlQmluZGluZyxcbiAgX19leHBvcnRTdGFyLFxuICBfX3ZhbHVlcyxcbiAgX19yZWFkLFxuICBfX3NwcmVhZCxcbiAgX19zcHJlYWRBcnJheXMsXG4gIF9fc3ByZWFkQXJyYXksXG4gIF9fYXdhaXQsXG4gIF9fYXN5bmNHZW5lcmF0b3IsXG4gIF9fYXN5bmNEZWxlZ2F0b3IsXG4gIF9fYXN5bmNWYWx1ZXMsXG4gIF9fbWFrZVRlbXBsYXRlT2JqZWN0LFxuICBfX2ltcG9ydFN0YXIsXG4gIF9faW1wb3J0RGVmYXVsdCxcbiAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCxcbiAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCxcbiAgX19jbGFzc1ByaXZhdGVGaWVsZEluLFxuICBfX2FkZERpc3Bvc2FibGVSZXNvdXJjZSxcbiAgX19kaXNwb3NlUmVzb3VyY2VzLFxuICBfX3Jld3JpdGVSZWxhdGl2ZUltcG9ydEV4dGVuc2lvbixcbn07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgKiBhcyBtYXRlcmlhbHMgZnJvbSBcIkBsdHMvbWF0ZXJpYWxzL2xlZ2FjeS9sZWdhY3ktY3VzdG9tXCI7XHJcbmV4cG9ydCB7IG1hdGVyaWFscyB9O1xyXG5leHBvcnQgZGVmYXVsdCBtYXRlcmlhbHM7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==