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

/***/ "../../../dev/materials/src/lava/index.ts":
/*!************************************************!*\
  !*** ../../../dev/materials/src/lava/index.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LavaMaterial: () => (/* reexport safe */ _lavaMaterial__WEBPACK_IMPORTED_MODULE_0__.LavaMaterial)
/* harmony export */ });
/* harmony import */ var _lavaMaterial__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lavaMaterial */ "../../../dev/materials/src/lava/lavaMaterial.ts");



/***/ }),

/***/ "../../../dev/materials/src/lava/lava.fragment.ts":
/*!********************************************************!*\
  !*** ../../../dev/materials/src/lava/lava.fragment.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   lavaPixelShader: () => (/* binding */ lavaPixelShader)
/* harmony export */ });
/* harmony import */ var babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs/Shaders/ShadersInclude/imageProcessingCompatibility */ "babylonjs/Materials/effect");
/* harmony import */ var babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__);
// Do not edit.















var name = "lavaPixelShader";
var shader = "precision highp float;uniform vec4 vEyePosition;uniform vec4 vDiffuseColor;varying vec3 vPositionW;uniform float time;uniform float speed;uniform float movingSpeed;uniform vec3 fogColor;uniform sampler2D noiseTexture;uniform float fogDensity;varying float noise;\n#ifdef NORMAL\nvarying vec3 vNormalW;\n#endif\n#ifdef VERTEXCOLOR\nvarying vec4 vColor;\n#endif\n#include<helperFunctions>\n#include<__decl__lightFragment>[0]\n#include<__decl__lightFragment>[1]\n#include<__decl__lightFragment>[2]\n#include<__decl__lightFragment>[3]\n#include<lightsFragmentFunctions>\n#include<shadowsFragmentFunctions>\n#ifdef DIFFUSE\nvarying vec2 vDiffuseUV;uniform sampler2D diffuseSampler;uniform vec2 vDiffuseInfos;\n#endif\n#include<clipPlaneFragmentDeclaration>\n#ifdef LOGARITHMICDEPTH\n#extension GL_EXT_frag_depth : enable\n#endif\n#include<logDepthDeclaration>\n#include<fogFragmentDeclaration>\nfloat random( vec3 scale,float seed ){return fract( sin( dot( gl_FragCoord.xyz+seed,scale ) )*43758.5453+seed ) ;}\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_FRAGMENT_MAIN_BEGIN\n#include<clipPlaneFragment>\nvec3 viewDirectionW=normalize(vEyePosition.xyz-vPositionW);vec4 baseColor=vec4(1.,1.,1.,1.);vec3 diffuseColor=vDiffuseColor.rgb;float alpha=vDiffuseColor.a;\n#ifdef DIFFUSE\nvec4 noiseTex=texture2D( noiseTexture,vDiffuseUV );vec2 T1=vDiffuseUV+vec2( 1.5,-1.5 )*time *0.02;vec2 T2=vDiffuseUV+vec2( -0.5,2.0 )*time*0.01*speed;T1.x+=noiseTex.x*2.0;T1.y+=noiseTex.y*2.0;T2.x-=noiseTex.y*0.2+time*0.001*movingSpeed;T2.y+=noiseTex.z*0.2+time*0.002*movingSpeed;float p=texture2D( noiseTexture,T1*3.0 ).a;vec4 lavaColor=texture2D( diffuseSampler,T2*4.0);vec4 temp=lavaColor*( vec4( p,p,p,p )*2. )+( lavaColor*lavaColor-0.1 );baseColor=temp;float depth=gl_FragCoord.z*4.0;const float LOG2=1.442695;float fogFactor=exp2(-fogDensity*fogDensity*depth*depth*LOG2 );fogFactor=1.0-clamp( fogFactor,0.0,1.0 );baseColor=mix( baseColor,vec4( fogColor,baseColor.w ),fogFactor );diffuseColor=baseColor.rgb;\n#ifdef ALPHATEST\nif (baseColor.a<0.4)\ndiscard;\n#endif\n#include<depthPrePass>\nbaseColor.rgb*=vDiffuseInfos.y;\n#endif\n#ifdef VERTEXCOLOR\nbaseColor.rgb*=vColor.rgb;\n#endif\n#ifdef NORMAL\nvec3 normalW=normalize(vNormalW);\n#else\nvec3 normalW=vec3(1.0,1.0,1.0);\n#endif\n#ifdef UNLIT\nvec3 diffuseBase=vec3(1.,1.,1.);\n#else\nvec3 diffuseBase=vec3(0.,0.,0.);lightingInfo info;float shadow=1.;float glossiness=0.;float aggShadow=0.;float numLights=0.;\n#include<lightFragment>[0]\n#include<lightFragment>[1]\n#include<lightFragment>[2]\n#include<lightFragment>[3]\n#endif\n#if defined(VERTEXALPHA) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nalpha*=vColor.a;\n#endif\nvec3 finalDiffuse=clamp(diffuseBase*diffuseColor,0.0,1.0)*baseColor.rgb;vec4 color=vec4(finalDiffuse,alpha);\n#include<logDepthFragment>\n#include<fogFragment>\ngl_FragColor=color;\n#include<imageProcessingCompatibility>\n#define CUSTOM_FRAGMENT_MAIN_END\n}";
// Sideeffect
babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStore[name] = shader;
/** @internal */
var lavaPixelShader = { name: name, shader: shader };


/***/ }),

/***/ "../../../dev/materials/src/lava/lava.vertex.ts":
/*!******************************************************!*\
  !*** ../../../dev/materials/src/lava/lava.vertex.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   lavaVertexShader: () => (/* binding */ lavaVertexShader)
/* harmony export */ });
/* harmony import */ var babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs/Shaders/ShadersInclude/logDepthVertex */ "babylonjs/Materials/effect");
/* harmony import */ var babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__);
// Do not edit.

















var name = "lavaVertexShader";
var shader = "precision highp float;uniform float time;uniform float lowFrequencySpeed;varying float noise;attribute vec3 position;\n#ifdef NORMAL\nattribute vec3 normal;\n#endif\n#ifdef UV1\nattribute vec2 uv;\n#endif\n#ifdef UV2\nattribute vec2 uv2;\n#endif\n#ifdef VERTEXCOLOR\nattribute vec4 color;\n#endif\n#include<bonesDeclaration>\n#include<bakedVertexAnimationDeclaration>\n#include<instancesDeclaration>\nuniform mat4 view;uniform mat4 viewProjection;\n#ifdef DIFFUSE\nvarying vec2 vDiffuseUV;uniform mat4 diffuseMatrix;uniform vec2 vDiffuseInfos;\n#endif\n#ifdef POINTSIZE\nuniform float pointSize;\n#endif\nvarying vec3 vPositionW;\n#ifdef NORMAL\nvarying vec3 vNormalW;\n#endif\n#ifdef VERTEXCOLOR\nvarying vec4 vColor;\n#endif\n#include<clipPlaneVertexDeclaration>\n#include<logDepthDeclaration>\n#include<fogVertexDeclaration>\n#include<__decl__lightFragment>[0..maxSimultaneousLights]\n/* NOISE FUNCTIONS */\nvec3 mod289(vec3 x)\n{return x-floor(x*(1.0/289.0))*289.0;}\nvec4 mod289(vec4 x)\n{return x-floor(x*(1.0/289.0))*289.0;}\nvec4 permute(vec4 x)\n{return mod289(((x*34.0)+1.0)*x);}\nvec4 taylorInvSqrt(vec4 r)\n{return 1.79284291400159-0.85373472095314*r;}\nvec3 fade(vec3 t) {return t*t*t*(t*(t*6.0-15.0)+10.0);}\nfloat pnoise(vec3 P,vec3 rep)\n{vec3 Pi0=mod(floor(P),rep); \nvec3 Pi1=mod(Pi0+vec3(1.0),rep); \nPi0=mod289(Pi0);Pi1=mod289(Pi1);vec3 Pf0=fract(P); \nvec3 Pf1=Pf0-vec3(1.0); \nvec4 ix=vec4(Pi0.x,Pi1.x,Pi0.x,Pi1.x);vec4 iy=vec4(Pi0.yy,Pi1.yy);vec4 iz0=Pi0.zzzz;vec4 iz1=Pi1.zzzz;vec4 ixy=permute(permute(ix)+iy);vec4 ixy0=permute(ixy+iz0);vec4 ixy1=permute(ixy+iz1);vec4 gx0=ixy0*(1.0/7.0);vec4 gy0=fract(floor(gx0)*(1.0/7.0))-0.5;gx0=fract(gx0);vec4 gz0=vec4(0.5)-abs(gx0)-abs(gy0);vec4 sz0=step(gz0,vec4(0.0));gx0-=sz0*(step(0.0,gx0)-0.5);gy0-=sz0*(step(0.0,gy0)-0.5);vec4 gx1=ixy1*(1.0/7.0);vec4 gy1=fract(floor(gx1)*(1.0/7.0))-0.5;gx1=fract(gx1);vec4 gz1=vec4(0.5)-abs(gx1)-abs(gy1);vec4 sz1=step(gz1,vec4(0.0));gx1-=sz1*(step(0.0,gx1)-0.5);gy1-=sz1*(step(0.0,gy1)-0.5);vec3 g000=vec3(gx0.x,gy0.x,gz0.x);vec3 g100=vec3(gx0.y,gy0.y,gz0.y);vec3 g010=vec3(gx0.z,gy0.z,gz0.z);vec3 g110=vec3(gx0.w,gy0.w,gz0.w);vec3 g001=vec3(gx1.x,gy1.x,gz1.x);vec3 g101=vec3(gx1.y,gy1.y,gz1.y);vec3 g011=vec3(gx1.z,gy1.z,gz1.z);vec3 g111=vec3(gx1.w,gy1.w,gz1.w);vec4 norm0=taylorInvSqrt(vec4(dot(g000,g000),dot(g010,g010),dot(g100,g100),dot(g110,g110)));g000*=norm0.x;g010*=norm0.y;g100*=norm0.z;g110*=norm0.w;vec4 norm1=taylorInvSqrt(vec4(dot(g001,g001),dot(g011,g011),dot(g101,g101),dot(g111,g111)));g001*=norm1.x;g011*=norm1.y;g101*=norm1.z;g111*=norm1.w;float n000=dot(g000,Pf0);float n100=dot(g100,vec3(Pf1.x,Pf0.yz));float n010=dot(g010,vec3(Pf0.x,Pf1.y,Pf0.z));float n110=dot(g110,vec3(Pf1.xy,Pf0.z));float n001=dot(g001,vec3(Pf0.xy,Pf1.z));float n101=dot(g101,vec3(Pf1.x,Pf0.y,Pf1.z));float n011=dot(g011,vec3(Pf0.x,Pf1.yz));float n111=dot(g111,Pf1);vec3 fade_xyz=fade(Pf0);vec4 n_z=mix(vec4(n000,n100,n010,n110),vec4(n001,n101,n011,n111),fade_xyz.z);vec2 n_yz=mix(n_z.xy,n_z.zw,fade_xyz.y);float n_xyz=mix(n_yz.x,n_yz.y,fade_xyz.x);return 2.2*n_xyz;}\n/* END FUNCTION */\nfloat turbulence( vec3 p ) {float w=100.0;float t=-.5;for (float f=1.0 ; f<=10.0 ; f++ ){float power=pow( 2.0,f );t+=abs( pnoise( vec3( power*p ),vec3( 10.0,10.0,10.0 ) )/power );}\nreturn t;}\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\n#include<instancesVertex>\n#include<bonesVertex>\n#include<bakedVertexAnimation>\n#ifdef NORMAL\nnoise=10.0* -.10*turbulence( .5*normal+time*1.15 );float b=lowFrequencySpeed*5.0*pnoise( 0.05*position +vec3(time*1.025),vec3( 100.0 ) );float displacement=- 1.5*noise+b;vec3 newPosition=position+normal*displacement;gl_Position=viewProjection*finalWorld*vec4( newPosition,1.0 );vec4 worldPos=finalWorld*vec4(newPosition,1.0);vPositionW=vec3(worldPos);vNormalW=normalize(vec3(finalWorld*vec4(normal,0.0)));\n#endif\n#ifndef UV1\nvec2 uv=vec2(0.,0.);\n#endif\n#ifndef UV2\nvec2 uv2=vec2(0.,0.);\n#endif\n#ifdef DIFFUSE\nif (vDiffuseInfos.x==0.)\n{vDiffuseUV=vec2(diffuseMatrix*vec4(uv,1.0,0.0));}\nelse\n{vDiffuseUV=vec2(diffuseMatrix*vec4(uv2,1.0,0.0));}\n#endif\n#include<clipPlaneVertex>\n#include<fogVertex>\n#include<shadowsVertex>[0..maxSimultaneousLights]\n#include<vertexColorMixing>\n#include<logDepthVertex>\n#if defined(POINTSIZE) && !defined(WEBGPU)\ngl_PointSize=pointSize;\n#endif\n#define CUSTOM_VERTEX_MAIN_END\n}";
// Sideeffect
babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStore[name] = shader;
/** @internal */
var lavaVertexShader = { name: name, shader: shader };


/***/ }),

/***/ "../../../dev/materials/src/lava/lavaMaterial.ts":
/*!*******************************************************!*\
  !*** ../../../dev/materials/src/lava/lavaMaterial.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LavaMaterial: () => (/* binding */ LavaMaterial)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "../../../../node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs/Materials/materialHelper.functions */ "babylonjs/Materials/effect");
/* harmony import */ var babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lava_fragment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lava.fragment */ "../../../dev/materials/src/lava/lava.fragment.ts");
/* harmony import */ var _lava_vertex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lava.vertex */ "../../../dev/materials/src/lava/lava.vertex.ts");















var LavaMaterialDefines = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__extends)(LavaMaterialDefines, _super);
    function LavaMaterialDefines() {
        var _this = _super.call(this) || this;
        _this.DIFFUSE = false;
        _this.CLIPPLANE = false;
        _this.CLIPPLANE2 = false;
        _this.CLIPPLANE3 = false;
        _this.CLIPPLANE4 = false;
        _this.CLIPPLANE5 = false;
        _this.CLIPPLANE6 = false;
        _this.ALPHATEST = false;
        _this.DEPTHPREPASS = false;
        _this.POINTSIZE = false;
        _this.FOG = false;
        _this.LIGHT0 = false;
        _this.LIGHT1 = false;
        _this.LIGHT2 = false;
        _this.LIGHT3 = false;
        _this.SPOTLIGHT0 = false;
        _this.SPOTLIGHT1 = false;
        _this.SPOTLIGHT2 = false;
        _this.SPOTLIGHT3 = false;
        _this.HEMILIGHT0 = false;
        _this.HEMILIGHT1 = false;
        _this.HEMILIGHT2 = false;
        _this.HEMILIGHT3 = false;
        _this.DIRLIGHT0 = false;
        _this.DIRLIGHT1 = false;
        _this.DIRLIGHT2 = false;
        _this.DIRLIGHT3 = false;
        _this.POINTLIGHT0 = false;
        _this.POINTLIGHT1 = false;
        _this.POINTLIGHT2 = false;
        _this.POINTLIGHT3 = false;
        _this.SHADOW0 = false;
        _this.SHADOW1 = false;
        _this.SHADOW2 = false;
        _this.SHADOW3 = false;
        _this.SHADOWS = false;
        _this.SHADOWESM0 = false;
        _this.SHADOWESM1 = false;
        _this.SHADOWESM2 = false;
        _this.SHADOWESM3 = false;
        _this.SHADOWPOISSON0 = false;
        _this.SHADOWPOISSON1 = false;
        _this.SHADOWPOISSON2 = false;
        _this.SHADOWPOISSON3 = false;
        _this.SHADOWPCF0 = false;
        _this.SHADOWPCF1 = false;
        _this.SHADOWPCF2 = false;
        _this.SHADOWPCF3 = false;
        _this.SHADOWPCSS0 = false;
        _this.SHADOWPCSS1 = false;
        _this.SHADOWPCSS2 = false;
        _this.SHADOWPCSS3 = false;
        _this.NORMAL = false;
        _this.UV1 = false;
        _this.UV2 = false;
        _this.VERTEXCOLOR = false;
        _this.VERTEXALPHA = false;
        _this.NUM_BONE_INFLUENCERS = 0;
        _this.BonesPerMesh = 0;
        _this.INSTANCES = false;
        _this.INSTANCESCOLOR = false;
        _this.UNLIT = false;
        _this.IMAGEPROCESSINGPOSTPROCESS = false;
        _this.SKIPFINALCOLORCLAMP = false;
        _this.LOGARITHMICDEPTH = false;
        _this.rebuild();
        return _this;
    }
    return LavaMaterialDefines;
}(babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.MaterialDefines));
var LavaMaterial = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__extends)(LavaMaterial, _super);
    function LavaMaterial(name, scene) {
        var _this = _super.call(this, name, scene) || this;
        _this.speed = 1;
        _this.movingSpeed = 1;
        _this.lowFrequencySpeed = 1;
        _this.fogDensity = 0.15;
        _this._lastTime = 0;
        _this.diffuseColor = new babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.Color3(1, 1, 1);
        _this._disableLighting = false;
        _this._unlit = false;
        _this._maxSimultaneousLights = 4;
        _this._scaledDiffuse = new babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.Color3();
        return _this;
    }
    LavaMaterial.prototype.needAlphaBlending = function () {
        return this.alpha < 1.0;
    };
    LavaMaterial.prototype.needAlphaTesting = function () {
        return false;
    };
    LavaMaterial.prototype.getAlphaTestTexture = function () {
        return null;
    };
    // Methods
    LavaMaterial.prototype.isReadyForSubMesh = function (mesh, subMesh, useInstances) {
        var drawWrapper = subMesh._drawWrapper;
        if (this.isFrozen) {
            if (drawWrapper.effect && drawWrapper._wasPreviouslyReady && drawWrapper._wasPreviouslyUsingInstances === useInstances) {
                return true;
            }
        }
        if (!subMesh.materialDefines) {
            subMesh.materialDefines = new LavaMaterialDefines();
        }
        var defines = subMesh.materialDefines;
        var scene = this.getScene();
        if (this._isReadyForSubMesh(subMesh)) {
            return true;
        }
        var engine = scene.getEngine();
        // Textures
        if (defines._areTexturesDirty) {
            defines._needUVs = false;
            if (scene.texturesEnabled) {
                if (this._diffuseTexture && babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.MaterialFlags.DiffuseTextureEnabled) {
                    if (!this._diffuseTexture.isReady()) {
                        return false;
                    }
                    else {
                        defines._needUVs = true;
                        defines.DIFFUSE = true;
                    }
                }
            }
        }
        // Misc.
        (0,babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.PrepareDefinesForMisc)(mesh, scene, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this._shouldTurnAlphaTestOn(mesh), defines);
        // Lights
        defines._needNormals = true;
        (0,babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.PrepareDefinesForLights)(scene, mesh, defines, false, this._maxSimultaneousLights, this._disableLighting);
        // Values that need to be evaluated on every frame
        (0,babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.PrepareDefinesForFrameBoundValues)(scene, engine, this, defines, useInstances ? true : false);
        // Attribs
        (0,babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.PrepareDefinesForAttributes)(mesh, defines, true, true);
        // Get correct effect
        if (defines.isDirty) {
            defines.markAsProcessed();
            scene.resetCachedMaterial();
            // Fallbacks
            var fallbacks = new babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.EffectFallbacks();
            if (defines.FOG) {
                fallbacks.addFallback(1, "FOG");
            }
            (0,babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.HandleFallbacksForShadows)(defines, fallbacks);
            if (defines.NUM_BONE_INFLUENCERS > 0) {
                fallbacks.addCPUSkinningFallback(0, mesh);
            }
            defines.IMAGEPROCESSINGPOSTPROCESS = scene.imageProcessingConfiguration.applyByPostProcess;
            //Attributes
            var attribs = [babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.PositionKind];
            if (defines.NORMAL) {
                attribs.push(babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.NormalKind);
            }
            if (defines.UV1) {
                attribs.push(babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.UVKind);
            }
            if (defines.UV2) {
                attribs.push(babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.UV2Kind);
            }
            if (defines.VERTEXCOLOR) {
                attribs.push(babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.ColorKind);
            }
            (0,babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.PrepareAttributesForBones)(attribs, mesh, defines, fallbacks);
            (0,babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.PrepareAttributesForInstances)(attribs, defines);
            // Legacy browser patch
            var shaderName = "lava";
            var join = defines.toString();
            var uniforms = [
                "world",
                "view",
                "viewProjection",
                "vEyePosition",
                "vLightsType",
                "vDiffuseColor",
                "vFogInfos",
                "vFogColor",
                "pointSize",
                "vDiffuseInfos",
                "mBones",
                "diffuseMatrix",
                "logarithmicDepthConstant",
                "time",
                "speed",
                "movingSpeed",
                "fogColor",
                "fogDensity",
                "lowFrequencySpeed",
            ];
            (0,babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.addClipPlaneUniforms)(uniforms);
            var samplers = ["diffuseSampler", "noiseTexture"];
            var uniformBuffers = [];
            (0,babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.PrepareUniformsAndSamplersList)({
                uniformsNames: uniforms,
                uniformBuffersNames: uniformBuffers,
                samplers: samplers,
                defines: defines,
                maxSimultaneousLights: this.maxSimultaneousLights,
            });
            subMesh.setEffect(scene.getEngine().createEffect(shaderName, {
                attributes: attribs,
                uniformsNames: uniforms,
                uniformBuffersNames: uniformBuffers,
                samplers: samplers,
                defines: join,
                fallbacks: fallbacks,
                onCompiled: this.onCompiled,
                onError: this.onError,
                indexParameters: { maxSimultaneousLights: this.maxSimultaneousLights },
            }, engine), defines, this._materialContext);
        }
        if (!subMesh.effect || !subMesh.effect.isReady()) {
            return false;
        }
        defines._renderId = scene.getRenderId();
        drawWrapper._wasPreviouslyReady = true;
        drawWrapper._wasPreviouslyUsingInstances = !!useInstances;
        return true;
    };
    LavaMaterial.prototype.bindForSubMesh = function (world, mesh, subMesh) {
        var scene = this.getScene();
        var defines = subMesh.materialDefines;
        if (!defines) {
            return;
        }
        var effect = subMesh.effect;
        if (!effect) {
            return;
        }
        this._activeEffect = effect;
        defines.UNLIT = this._unlit;
        // Matrices
        this.bindOnlyWorldMatrix(world);
        this._activeEffect.setMatrix("viewProjection", scene.getTransformMatrix());
        // Bones
        (0,babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.BindBonesParameters)(mesh, this._activeEffect);
        if (this._mustRebind(scene, effect, subMesh)) {
            // Textures
            if (this.diffuseTexture && babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.MaterialFlags.DiffuseTextureEnabled) {
                this._activeEffect.setTexture("diffuseSampler", this.diffuseTexture);
                this._activeEffect.setFloat2("vDiffuseInfos", this.diffuseTexture.coordinatesIndex, this.diffuseTexture.level);
                this._activeEffect.setMatrix("diffuseMatrix", this.diffuseTexture.getTextureMatrix());
            }
            if (this.noiseTexture) {
                this._activeEffect.setTexture("noiseTexture", this.noiseTexture);
            }
            // Clip plane
            (0,babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.bindClipPlane)(effect, this, scene);
            // Point size
            if (this.pointsCloud) {
                this._activeEffect.setFloat("pointSize", this.pointSize);
            }
            // Log. depth
            if (this._useLogarithmicDepth) {
                (0,babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.BindLogDepth)(defines, effect, scene);
            }
            scene.bindEyePosition(effect);
        }
        this._activeEffect.setColor4("vDiffuseColor", this._scaledDiffuse, this.alpha * mesh.visibility);
        if (scene.lightsEnabled && !this.disableLighting) {
            (0,babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.BindLights)(scene, mesh, this._activeEffect, defines);
        }
        // View
        if (scene.fogEnabled && mesh.applyFog && scene.fogMode !== babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.Scene.FOGMODE_NONE) {
            this._activeEffect.setMatrix("view", scene.getViewMatrix());
        }
        // Fog
        (0,babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.BindFogParameters)(scene, mesh, this._activeEffect);
        this._lastTime += scene.getEngine().getDeltaTime();
        this._activeEffect.setFloat("time", (this._lastTime * this.speed) / 1000);
        if (!this.fogColor) {
            this.fogColor = babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.Color3.Black();
        }
        this._activeEffect.setColor3("fogColor", this.fogColor);
        this._activeEffect.setFloat("fogDensity", this.fogDensity);
        this._activeEffect.setFloat("lowFrequencySpeed", this.lowFrequencySpeed);
        this._activeEffect.setFloat("movingSpeed", this.movingSpeed);
        this._afterBind(mesh, this._activeEffect, subMesh);
    };
    LavaMaterial.prototype.getAnimatables = function () {
        var results = [];
        if (this.diffuseTexture && this.diffuseTexture.animations && this.diffuseTexture.animations.length > 0) {
            results.push(this.diffuseTexture);
        }
        if (this.noiseTexture && this.noiseTexture.animations && this.noiseTexture.animations.length > 0) {
            results.push(this.noiseTexture);
        }
        return results;
    };
    LavaMaterial.prototype.getActiveTextures = function () {
        var activeTextures = _super.prototype.getActiveTextures.call(this);
        if (this._diffuseTexture) {
            activeTextures.push(this._diffuseTexture);
        }
        return activeTextures;
    };
    LavaMaterial.prototype.hasTexture = function (texture) {
        if (_super.prototype.hasTexture.call(this, texture)) {
            return true;
        }
        if (this.diffuseTexture === texture) {
            return true;
        }
        return false;
    };
    LavaMaterial.prototype.dispose = function (forceDisposeEffect) {
        if (this.diffuseTexture) {
            this.diffuseTexture.dispose();
        }
        if (this.noiseTexture) {
            this.noiseTexture.dispose();
        }
        _super.prototype.dispose.call(this, forceDisposeEffect);
    };
    LavaMaterial.prototype.clone = function (name) {
        var _this = this;
        return babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.SerializationHelper.Clone(function () { return new LavaMaterial(name, _this.getScene()); }, this);
    };
    LavaMaterial.prototype.serialize = function () {
        var serializationObject = _super.prototype.serialize.call(this);
        serializationObject.customType = "BABYLON.LavaMaterial";
        return serializationObject;
    };
    LavaMaterial.prototype.getClassName = function () {
        return "LavaMaterial";
    };
    // Statics
    LavaMaterial.Parse = function (source, scene, rootUrl) {
        return babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.SerializationHelper.Parse(function () { return new LavaMaterial(source.name, scene); }, source, scene, rootUrl);
    };
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
        (0,babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serializeAsTexture)("diffuseTexture")
    ], LavaMaterial.prototype, "_diffuseTexture", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
        (0,babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.expandToProperty)("_markAllSubMeshesAsTexturesDirty")
    ], LavaMaterial.prototype, "diffuseTexture", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
        (0,babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serializeAsTexture)()
    ], LavaMaterial.prototype, "noiseTexture", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
        (0,babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serializeAsColor3)()
    ], LavaMaterial.prototype, "fogColor", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
        (0,babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serialize)()
    ], LavaMaterial.prototype, "speed", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
        (0,babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serialize)()
    ], LavaMaterial.prototype, "movingSpeed", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
        (0,babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serialize)()
    ], LavaMaterial.prototype, "lowFrequencySpeed", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
        (0,babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serialize)()
    ], LavaMaterial.prototype, "fogDensity", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
        (0,babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serializeAsColor3)()
    ], LavaMaterial.prototype, "diffuseColor", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
        (0,babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serialize)("disableLighting")
    ], LavaMaterial.prototype, "_disableLighting", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
        (0,babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.expandToProperty)("_markAllSubMeshesAsLightsDirty")
    ], LavaMaterial.prototype, "disableLighting", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
        (0,babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serialize)("unlit")
    ], LavaMaterial.prototype, "_unlit", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
        (0,babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.expandToProperty)("_markAllSubMeshesAsLightsDirty")
    ], LavaMaterial.prototype, "unlit", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
        (0,babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serialize)("maxSimultaneousLights")
    ], LavaMaterial.prototype, "_maxSimultaneousLights", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
        (0,babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.expandToProperty)("_markAllSubMeshesAsLightsDirty")
    ], LavaMaterial.prototype, "maxSimultaneousLights", void 0);
    return LavaMaterial;
}(babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.PushMaterial));
(0,babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.RegisterClass)("BABYLON.LavaMaterial", LavaMaterial);


/***/ }),

/***/ "../../../lts/materials/src/legacy/legacy-lava.ts":
/*!********************************************************!*\
  !*** ../../../lts/materials/src/legacy/legacy-lava.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LavaMaterial: () => (/* reexport safe */ materials_lava_index__WEBPACK_IMPORTED_MODULE_0__.LavaMaterial)
/* harmony export */ });
/* harmony import */ var materials_lava_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! materials/lava/index */ "../../../dev/materials/src/lava/index.ts");
/* eslint-disable import/no-internal-modules */

/**
 * This is the entry point for the UMD module.
 * The entry point for a future ESM package should be index.ts
 */
var globalObject = typeof __webpack_require__.g !== "undefined" ? __webpack_require__.g : typeof window !== "undefined" ? window : undefined;
if (typeof globalObject !== "undefined") {
    for (var key in materials_lava_index__WEBPACK_IMPORTED_MODULE_0__) {
        globalObject.BABYLON[key] = materials_lava_index__WEBPACK_IMPORTED_MODULE_0__[key];
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
/*!*********************!*\
  !*** ./src/lava.ts ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   materials: () => (/* reexport module object */ _lts_materials_legacy_legacy_lava__WEBPACK_IMPORTED_MODULE_0__)
/* harmony export */ });
/* harmony import */ var _lts_materials_legacy_legacy_lava__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lts/materials/legacy/legacy-lava */ "../../../lts/materials/src/legacy/legacy-lava.ts");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_lts_materials_legacy_legacy_lava__WEBPACK_IMPORTED_MODULE_0__);

})();

__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFieWxvbi5sYXZhTWF0ZXJpYWwuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDVkE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBaUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3RGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBb0ZBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6R0E7QUFDQTtBQUVBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWVBO0FBQUE7QUFtRUE7QUFBQTtBQWxFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7O0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQThDQTtBQUFBO0FBakNBO0FBR0E7QUFHQTtBQUdBO0FBRUE7QUFHQTtBQUdBO0FBS0E7QUFLQTtBQUlBOztBQUlBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQWhYQTtBQURBO0FBQ0E7QUFFQTtBQURBO0FBQ0E7QUFHQTtBQURBO0FBQ0E7QUFHQTtBQURBO0FBQ0E7QUFHQTtBQURBO0FBQ0E7QUFHQTtBQURBO0FBQ0E7QUFHQTtBQURBO0FBQ0E7QUFHQTtBQURBO0FBQ0E7QUFLQTtBQURBO0FBQ0E7QUFHQTtBQURBO0FBQ0E7QUFFQTtBQURBO0FBQ0E7QUFHQTtBQURBO0FBQ0E7QUFFQTtBQURBO0FBQ0E7QUFHQTtBQURBO0FBQ0E7QUFFQTtBQURBO0FBQ0E7QUF5VUE7QUFBQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDcGVBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7QUNkQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUN2WUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1BBOzs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vTUFURVJJQUxTL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9NQVRFUklBTFMvLi4vLi4vLi4vZGV2L21hdGVyaWFscy9zcmMvbGF2YS9pbmRleC50cyIsIndlYnBhY2s6Ly9NQVRFUklBTFMvLi4vLi4vLi4vZGV2L21hdGVyaWFscy9zcmMvbGF2YS9sYXZhLmZyYWdtZW50LnRzIiwid2VicGFjazovL01BVEVSSUFMUy8uLi8uLi8uLi9kZXYvbWF0ZXJpYWxzL3NyYy9sYXZhL2xhdmEudmVydGV4LnRzIiwid2VicGFjazovL01BVEVSSUFMUy8uLi8uLi8uLi9kZXYvbWF0ZXJpYWxzL3NyYy9sYXZhL2xhdmFNYXRlcmlhbC50cyIsIndlYnBhY2s6Ly9NQVRFUklBTFMvLi4vLi4vLi4vbHRzL21hdGVyaWFscy9zcmMvbGVnYWN5L2xlZ2FjeS1sYXZhLnRzIiwid2VicGFjazovL01BVEVSSUFMUy9leHRlcm5hbCB1bWQge1wicm9vdFwiOlwiQkFCWUxPTlwiLFwiY29tbW9uanNcIjpcImJhYnlsb25qc1wiLFwiY29tbW9uanMyXCI6XCJiYWJ5bG9uanNcIixcImFtZFwiOlwiYmFieWxvbmpzXCJ9Iiwid2VicGFjazovL01BVEVSSUFMUy8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdHNsaWIvdHNsaWIuZXM2Lm1qcyIsIndlYnBhY2s6Ly9NQVRFUklBTFMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vTUFURVJJQUxTL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL01BVEVSSUFMUy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vTUFURVJJQUxTL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vTUFURVJJQUxTL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vTUFURVJJQUxTL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vTUFURVJJQUxTLy4vc3JjL2xhdmEudHMiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiYmFieWxvbmpzXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiYmFieWxvbmpzLW1hdGVyaWFsc1wiLCBbXCJiYWJ5bG9uanNcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiYmFieWxvbmpzLW1hdGVyaWFsc1wiXSA9IGZhY3RvcnkocmVxdWlyZShcImJhYnlsb25qc1wiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiTUFURVJJQUxTXCJdID0gZmFjdG9yeShyb290W1wiQkFCWUxPTlwiXSk7XG59KSgodHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbCA6IHRoaXMpLCAoX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9iYWJ5bG9uanNfTWF0ZXJpYWxzX2VmZmVjdF9fKSA9PiB7XG5yZXR1cm4gIiwiZXhwb3J0ICogZnJvbSBcIi4vbGF2YU1hdGVyaWFsXCI7XHJcbiIsIi8vIERvIG5vdCBlZGl0LlxuaW1wb3J0IHsgU2hhZGVyU3RvcmUgfSBmcm9tIFwiY29yZS9FbmdpbmVzL3NoYWRlclN0b3JlXCI7XG5pbXBvcnQgXCJjb3JlL1NoYWRlcnMvU2hhZGVyc0luY2x1ZGUvaGVscGVyRnVuY3Rpb25zXCI7XG5pbXBvcnQgXCJjb3JlL1NoYWRlcnMvU2hhZGVyc0luY2x1ZGUvbGlnaHRGcmFnbWVudERlY2xhcmF0aW9uXCI7XG5pbXBvcnQgXCJjb3JlL1NoYWRlcnMvU2hhZGVyc0luY2x1ZGUvbGlnaHRVYm9EZWNsYXJhdGlvblwiO1xuaW1wb3J0IFwiY29yZS9TaGFkZXJzL1NoYWRlcnNJbmNsdWRlL2xpZ2h0c0ZyYWdtZW50RnVuY3Rpb25zXCI7XG5pbXBvcnQgXCJjb3JlL1NoYWRlcnMvU2hhZGVyc0luY2x1ZGUvc2hhZG93c0ZyYWdtZW50RnVuY3Rpb25zXCI7XG5pbXBvcnQgXCJjb3JlL1NoYWRlcnMvU2hhZGVyc0luY2x1ZGUvY2xpcFBsYW5lRnJhZ21lbnREZWNsYXJhdGlvblwiO1xuaW1wb3J0IFwiY29yZS9TaGFkZXJzL1NoYWRlcnNJbmNsdWRlL2xvZ0RlcHRoRGVjbGFyYXRpb25cIjtcbmltcG9ydCBcImNvcmUvU2hhZGVycy9TaGFkZXJzSW5jbHVkZS9mb2dGcmFnbWVudERlY2xhcmF0aW9uXCI7XG5pbXBvcnQgXCJjb3JlL1NoYWRlcnMvU2hhZGVyc0luY2x1ZGUvY2xpcFBsYW5lRnJhZ21lbnRcIjtcbmltcG9ydCBcImNvcmUvU2hhZGVycy9TaGFkZXJzSW5jbHVkZS9kZXB0aFByZVBhc3NcIjtcbmltcG9ydCBcImNvcmUvU2hhZGVycy9TaGFkZXJzSW5jbHVkZS9saWdodEZyYWdtZW50XCI7XG5pbXBvcnQgXCJjb3JlL1NoYWRlcnMvU2hhZGVyc0luY2x1ZGUvbG9nRGVwdGhGcmFnbWVudFwiO1xuaW1wb3J0IFwiY29yZS9TaGFkZXJzL1NoYWRlcnNJbmNsdWRlL2ZvZ0ZyYWdtZW50XCI7XG5pbXBvcnQgXCJjb3JlL1NoYWRlcnMvU2hhZGVyc0luY2x1ZGUvaW1hZ2VQcm9jZXNzaW5nQ29tcGF0aWJpbGl0eVwiO1xuXG5jb25zdCBuYW1lID0gXCJsYXZhUGl4ZWxTaGFkZXJcIjtcbmNvbnN0IHNoYWRlciA9IGBwcmVjaXNpb24gaGlnaHAgZmxvYXQ7dW5pZm9ybSB2ZWM0IHZFeWVQb3NpdGlvbjt1bmlmb3JtIHZlYzQgdkRpZmZ1c2VDb2xvcjt2YXJ5aW5nIHZlYzMgdlBvc2l0aW9uVzt1bmlmb3JtIGZsb2F0IHRpbWU7dW5pZm9ybSBmbG9hdCBzcGVlZDt1bmlmb3JtIGZsb2F0IG1vdmluZ1NwZWVkO3VuaWZvcm0gdmVjMyBmb2dDb2xvcjt1bmlmb3JtIHNhbXBsZXIyRCBub2lzZVRleHR1cmU7dW5pZm9ybSBmbG9hdCBmb2dEZW5zaXR5O3ZhcnlpbmcgZmxvYXQgbm9pc2U7XG4jaWZkZWYgTk9STUFMXG52YXJ5aW5nIHZlYzMgdk5vcm1hbFc7XG4jZW5kaWZcbiNpZmRlZiBWRVJURVhDT0xPUlxudmFyeWluZyB2ZWM0IHZDb2xvcjtcbiNlbmRpZlxuI2luY2x1ZGU8aGVscGVyRnVuY3Rpb25zPlxuI2luY2x1ZGU8X19kZWNsX19saWdodEZyYWdtZW50PlswXVxuI2luY2x1ZGU8X19kZWNsX19saWdodEZyYWdtZW50PlsxXVxuI2luY2x1ZGU8X19kZWNsX19saWdodEZyYWdtZW50PlsyXVxuI2luY2x1ZGU8X19kZWNsX19saWdodEZyYWdtZW50PlszXVxuI2luY2x1ZGU8bGlnaHRzRnJhZ21lbnRGdW5jdGlvbnM+XG4jaW5jbHVkZTxzaGFkb3dzRnJhZ21lbnRGdW5jdGlvbnM+XG4jaWZkZWYgRElGRlVTRVxudmFyeWluZyB2ZWMyIHZEaWZmdXNlVVY7dW5pZm9ybSBzYW1wbGVyMkQgZGlmZnVzZVNhbXBsZXI7dW5pZm9ybSB2ZWMyIHZEaWZmdXNlSW5mb3M7XG4jZW5kaWZcbiNpbmNsdWRlPGNsaXBQbGFuZUZyYWdtZW50RGVjbGFyYXRpb24+XG4jaWZkZWYgTE9HQVJJVEhNSUNERVBUSFxuI2V4dGVuc2lvbiBHTF9FWFRfZnJhZ19kZXB0aCA6IGVuYWJsZVxuI2VuZGlmXG4jaW5jbHVkZTxsb2dEZXB0aERlY2xhcmF0aW9uPlxuI2luY2x1ZGU8Zm9nRnJhZ21lbnREZWNsYXJhdGlvbj5cbmZsb2F0IHJhbmRvbSggdmVjMyBzY2FsZSxmbG9hdCBzZWVkICl7cmV0dXJuIGZyYWN0KCBzaW4oIGRvdCggZ2xfRnJhZ0Nvb3JkLnh5eitzZWVkLHNjYWxlICkgKSo0Mzc1OC41NDUzK3NlZWQgKSA7fVxuI2RlZmluZSBDVVNUT01fRlJBR01FTlRfREVGSU5JVElPTlNcbnZvaWQgbWFpbih2b2lkKSB7XG4jZGVmaW5lIENVU1RPTV9GUkFHTUVOVF9NQUlOX0JFR0lOXG4jaW5jbHVkZTxjbGlwUGxhbmVGcmFnbWVudD5cbnZlYzMgdmlld0RpcmVjdGlvblc9bm9ybWFsaXplKHZFeWVQb3NpdGlvbi54eXotdlBvc2l0aW9uVyk7dmVjNCBiYXNlQ29sb3I9dmVjNCgxLiwxLiwxLiwxLik7dmVjMyBkaWZmdXNlQ29sb3I9dkRpZmZ1c2VDb2xvci5yZ2I7ZmxvYXQgYWxwaGE9dkRpZmZ1c2VDb2xvci5hO1xuI2lmZGVmIERJRkZVU0VcbnZlYzQgbm9pc2VUZXg9dGV4dHVyZTJEKCBub2lzZVRleHR1cmUsdkRpZmZ1c2VVViApO3ZlYzIgVDE9dkRpZmZ1c2VVVit2ZWMyKCAxLjUsLTEuNSApKnRpbWUgKjAuMDI7dmVjMiBUMj12RGlmZnVzZVVWK3ZlYzIoIC0wLjUsMi4wICkqdGltZSowLjAxKnNwZWVkO1QxLngrPW5vaXNlVGV4LngqMi4wO1QxLnkrPW5vaXNlVGV4LnkqMi4wO1QyLngtPW5vaXNlVGV4LnkqMC4yK3RpbWUqMC4wMDEqbW92aW5nU3BlZWQ7VDIueSs9bm9pc2VUZXgueiowLjIrdGltZSowLjAwMiptb3ZpbmdTcGVlZDtmbG9hdCBwPXRleHR1cmUyRCggbm9pc2VUZXh0dXJlLFQxKjMuMCApLmE7dmVjNCBsYXZhQ29sb3I9dGV4dHVyZTJEKCBkaWZmdXNlU2FtcGxlcixUMio0LjApO3ZlYzQgdGVtcD1sYXZhQ29sb3IqKCB2ZWM0KCBwLHAscCxwICkqMi4gKSsoIGxhdmFDb2xvcipsYXZhQ29sb3ItMC4xICk7YmFzZUNvbG9yPXRlbXA7ZmxvYXQgZGVwdGg9Z2xfRnJhZ0Nvb3JkLnoqNC4wO2NvbnN0IGZsb2F0IExPRzI9MS40NDI2OTU7ZmxvYXQgZm9nRmFjdG9yPWV4cDIoLWZvZ0RlbnNpdHkqZm9nRGVuc2l0eSpkZXB0aCpkZXB0aCpMT0cyICk7Zm9nRmFjdG9yPTEuMC1jbGFtcCggZm9nRmFjdG9yLDAuMCwxLjAgKTtiYXNlQ29sb3I9bWl4KCBiYXNlQ29sb3IsdmVjNCggZm9nQ29sb3IsYmFzZUNvbG9yLncgKSxmb2dGYWN0b3IgKTtkaWZmdXNlQ29sb3I9YmFzZUNvbG9yLnJnYjtcbiNpZmRlZiBBTFBIQVRFU1RcbmlmIChiYXNlQ29sb3IuYTwwLjQpXG5kaXNjYXJkO1xuI2VuZGlmXG4jaW5jbHVkZTxkZXB0aFByZVBhc3M+XG5iYXNlQ29sb3IucmdiKj12RGlmZnVzZUluZm9zLnk7XG4jZW5kaWZcbiNpZmRlZiBWRVJURVhDT0xPUlxuYmFzZUNvbG9yLnJnYio9dkNvbG9yLnJnYjtcbiNlbmRpZlxuI2lmZGVmIE5PUk1BTFxudmVjMyBub3JtYWxXPW5vcm1hbGl6ZSh2Tm9ybWFsVyk7XG4jZWxzZVxudmVjMyBub3JtYWxXPXZlYzMoMS4wLDEuMCwxLjApO1xuI2VuZGlmXG4jaWZkZWYgVU5MSVRcbnZlYzMgZGlmZnVzZUJhc2U9dmVjMygxLiwxLiwxLik7XG4jZWxzZVxudmVjMyBkaWZmdXNlQmFzZT12ZWMzKDAuLDAuLDAuKTtsaWdodGluZ0luZm8gaW5mbztmbG9hdCBzaGFkb3c9MS47ZmxvYXQgZ2xvc3NpbmVzcz0wLjtmbG9hdCBhZ2dTaGFkb3c9MC47ZmxvYXQgbnVtTGlnaHRzPTAuO1xuI2luY2x1ZGU8bGlnaHRGcmFnbWVudD5bMF1cbiNpbmNsdWRlPGxpZ2h0RnJhZ21lbnQ+WzFdXG4jaW5jbHVkZTxsaWdodEZyYWdtZW50PlsyXVxuI2luY2x1ZGU8bGlnaHRGcmFnbWVudD5bM11cbiNlbmRpZlxuI2lmIGRlZmluZWQoVkVSVEVYQUxQSEEpIHx8IGRlZmluZWQoSU5TVEFOQ0VTQ09MT1IpICYmIGRlZmluZWQoSU5TVEFOQ0VTKVxuYWxwaGEqPXZDb2xvci5hO1xuI2VuZGlmXG52ZWMzIGZpbmFsRGlmZnVzZT1jbGFtcChkaWZmdXNlQmFzZSpkaWZmdXNlQ29sb3IsMC4wLDEuMCkqYmFzZUNvbG9yLnJnYjt2ZWM0IGNvbG9yPXZlYzQoZmluYWxEaWZmdXNlLGFscGhhKTtcbiNpbmNsdWRlPGxvZ0RlcHRoRnJhZ21lbnQ+XG4jaW5jbHVkZTxmb2dGcmFnbWVudD5cbmdsX0ZyYWdDb2xvcj1jb2xvcjtcbiNpbmNsdWRlPGltYWdlUHJvY2Vzc2luZ0NvbXBhdGliaWxpdHk+XG4jZGVmaW5lIENVU1RPTV9GUkFHTUVOVF9NQUlOX0VORFxufWA7XG4vLyBTaWRlZWZmZWN0XG5TaGFkZXJTdG9yZS5TaGFkZXJzU3RvcmVbbmFtZV0gPSBzaGFkZXI7XG4vKiogQGludGVybmFsICovXG5leHBvcnQgY29uc3QgbGF2YVBpeGVsU2hhZGVyID0geyBuYW1lLCBzaGFkZXIgfTtcbiIsIi8vIERvIG5vdCBlZGl0LlxuaW1wb3J0IHsgU2hhZGVyU3RvcmUgfSBmcm9tIFwiY29yZS9FbmdpbmVzL3NoYWRlclN0b3JlXCI7XG5pbXBvcnQgXCJjb3JlL1NoYWRlcnMvU2hhZGVyc0luY2x1ZGUvYm9uZXNEZWNsYXJhdGlvblwiO1xuaW1wb3J0IFwiY29yZS9TaGFkZXJzL1NoYWRlcnNJbmNsdWRlL2Jha2VkVmVydGV4QW5pbWF0aW9uRGVjbGFyYXRpb25cIjtcbmltcG9ydCBcImNvcmUvU2hhZGVycy9TaGFkZXJzSW5jbHVkZS9pbnN0YW5jZXNEZWNsYXJhdGlvblwiO1xuaW1wb3J0IFwiY29yZS9TaGFkZXJzL1NoYWRlcnNJbmNsdWRlL2NsaXBQbGFuZVZlcnRleERlY2xhcmF0aW9uXCI7XG5pbXBvcnQgXCJjb3JlL1NoYWRlcnMvU2hhZGVyc0luY2x1ZGUvbG9nRGVwdGhEZWNsYXJhdGlvblwiO1xuaW1wb3J0IFwiY29yZS9TaGFkZXJzL1NoYWRlcnNJbmNsdWRlL2ZvZ1ZlcnRleERlY2xhcmF0aW9uXCI7XG5pbXBvcnQgXCJjb3JlL1NoYWRlcnMvU2hhZGVyc0luY2x1ZGUvbGlnaHRGcmFnbWVudERlY2xhcmF0aW9uXCI7XG5pbXBvcnQgXCJjb3JlL1NoYWRlcnMvU2hhZGVyc0luY2x1ZGUvbGlnaHRVYm9EZWNsYXJhdGlvblwiO1xuaW1wb3J0IFwiY29yZS9TaGFkZXJzL1NoYWRlcnNJbmNsdWRlL2luc3RhbmNlc1ZlcnRleFwiO1xuaW1wb3J0IFwiY29yZS9TaGFkZXJzL1NoYWRlcnNJbmNsdWRlL2JvbmVzVmVydGV4XCI7XG5pbXBvcnQgXCJjb3JlL1NoYWRlcnMvU2hhZGVyc0luY2x1ZGUvYmFrZWRWZXJ0ZXhBbmltYXRpb25cIjtcbmltcG9ydCBcImNvcmUvU2hhZGVycy9TaGFkZXJzSW5jbHVkZS9jbGlwUGxhbmVWZXJ0ZXhcIjtcbmltcG9ydCBcImNvcmUvU2hhZGVycy9TaGFkZXJzSW5jbHVkZS9mb2dWZXJ0ZXhcIjtcbmltcG9ydCBcImNvcmUvU2hhZGVycy9TaGFkZXJzSW5jbHVkZS9zaGFkb3dzVmVydGV4XCI7XG5pbXBvcnQgXCJjb3JlL1NoYWRlcnMvU2hhZGVyc0luY2x1ZGUvdmVydGV4Q29sb3JNaXhpbmdcIjtcbmltcG9ydCBcImNvcmUvU2hhZGVycy9TaGFkZXJzSW5jbHVkZS9sb2dEZXB0aFZlcnRleFwiO1xuXG5jb25zdCBuYW1lID0gXCJsYXZhVmVydGV4U2hhZGVyXCI7XG5jb25zdCBzaGFkZXIgPSBgcHJlY2lzaW9uIGhpZ2hwIGZsb2F0O3VuaWZvcm0gZmxvYXQgdGltZTt1bmlmb3JtIGZsb2F0IGxvd0ZyZXF1ZW5jeVNwZWVkO3ZhcnlpbmcgZmxvYXQgbm9pc2U7YXR0cmlidXRlIHZlYzMgcG9zaXRpb247XG4jaWZkZWYgTk9STUFMXG5hdHRyaWJ1dGUgdmVjMyBub3JtYWw7XG4jZW5kaWZcbiNpZmRlZiBVVjFcbmF0dHJpYnV0ZSB2ZWMyIHV2O1xuI2VuZGlmXG4jaWZkZWYgVVYyXG5hdHRyaWJ1dGUgdmVjMiB1djI7XG4jZW5kaWZcbiNpZmRlZiBWRVJURVhDT0xPUlxuYXR0cmlidXRlIHZlYzQgY29sb3I7XG4jZW5kaWZcbiNpbmNsdWRlPGJvbmVzRGVjbGFyYXRpb24+XG4jaW5jbHVkZTxiYWtlZFZlcnRleEFuaW1hdGlvbkRlY2xhcmF0aW9uPlxuI2luY2x1ZGU8aW5zdGFuY2VzRGVjbGFyYXRpb24+XG51bmlmb3JtIG1hdDQgdmlldzt1bmlmb3JtIG1hdDQgdmlld1Byb2plY3Rpb247XG4jaWZkZWYgRElGRlVTRVxudmFyeWluZyB2ZWMyIHZEaWZmdXNlVVY7dW5pZm9ybSBtYXQ0IGRpZmZ1c2VNYXRyaXg7dW5pZm9ybSB2ZWMyIHZEaWZmdXNlSW5mb3M7XG4jZW5kaWZcbiNpZmRlZiBQT0lOVFNJWkVcbnVuaWZvcm0gZmxvYXQgcG9pbnRTaXplO1xuI2VuZGlmXG52YXJ5aW5nIHZlYzMgdlBvc2l0aW9uVztcbiNpZmRlZiBOT1JNQUxcbnZhcnlpbmcgdmVjMyB2Tm9ybWFsVztcbiNlbmRpZlxuI2lmZGVmIFZFUlRFWENPTE9SXG52YXJ5aW5nIHZlYzQgdkNvbG9yO1xuI2VuZGlmXG4jaW5jbHVkZTxjbGlwUGxhbmVWZXJ0ZXhEZWNsYXJhdGlvbj5cbiNpbmNsdWRlPGxvZ0RlcHRoRGVjbGFyYXRpb24+XG4jaW5jbHVkZTxmb2dWZXJ0ZXhEZWNsYXJhdGlvbj5cbiNpbmNsdWRlPF9fZGVjbF9fbGlnaHRGcmFnbWVudD5bMC4ubWF4U2ltdWx0YW5lb3VzTGlnaHRzXVxuLyogTk9JU0UgRlVOQ1RJT05TICovXG52ZWMzIG1vZDI4OSh2ZWMzIHgpXG57cmV0dXJuIHgtZmxvb3IoeCooMS4wLzI4OS4wKSkqMjg5LjA7fVxudmVjNCBtb2QyODkodmVjNCB4KVxue3JldHVybiB4LWZsb29yKHgqKDEuMC8yODkuMCkpKjI4OS4wO31cbnZlYzQgcGVybXV0ZSh2ZWM0IHgpXG57cmV0dXJuIG1vZDI4OSgoKHgqMzQuMCkrMS4wKSp4KTt9XG52ZWM0IHRheWxvckludlNxcnQodmVjNCByKVxue3JldHVybiAxLjc5Mjg0MjkxNDAwMTU5LTAuODUzNzM0NzIwOTUzMTQqcjt9XG52ZWMzIGZhZGUodmVjMyB0KSB7cmV0dXJuIHQqdCp0Kih0Kih0KjYuMC0xNS4wKSsxMC4wKTt9XG5mbG9hdCBwbm9pc2UodmVjMyBQLHZlYzMgcmVwKVxue3ZlYzMgUGkwPW1vZChmbG9vcihQKSxyZXApOyBcbnZlYzMgUGkxPW1vZChQaTArdmVjMygxLjApLHJlcCk7IFxuUGkwPW1vZDI4OShQaTApO1BpMT1tb2QyODkoUGkxKTt2ZWMzIFBmMD1mcmFjdChQKTsgXG52ZWMzIFBmMT1QZjAtdmVjMygxLjApOyBcbnZlYzQgaXg9dmVjNChQaTAueCxQaTEueCxQaTAueCxQaTEueCk7dmVjNCBpeT12ZWM0KFBpMC55eSxQaTEueXkpO3ZlYzQgaXowPVBpMC56enp6O3ZlYzQgaXoxPVBpMS56enp6O3ZlYzQgaXh5PXBlcm11dGUocGVybXV0ZShpeCkraXkpO3ZlYzQgaXh5MD1wZXJtdXRlKGl4eStpejApO3ZlYzQgaXh5MT1wZXJtdXRlKGl4eStpejEpO3ZlYzQgZ3gwPWl4eTAqKDEuMC83LjApO3ZlYzQgZ3kwPWZyYWN0KGZsb29yKGd4MCkqKDEuMC83LjApKS0wLjU7Z3gwPWZyYWN0KGd4MCk7dmVjNCBnejA9dmVjNCgwLjUpLWFicyhneDApLWFicyhneTApO3ZlYzQgc3owPXN0ZXAoZ3owLHZlYzQoMC4wKSk7Z3gwLT1zejAqKHN0ZXAoMC4wLGd4MCktMC41KTtneTAtPXN6MCooc3RlcCgwLjAsZ3kwKS0wLjUpO3ZlYzQgZ3gxPWl4eTEqKDEuMC83LjApO3ZlYzQgZ3kxPWZyYWN0KGZsb29yKGd4MSkqKDEuMC83LjApKS0wLjU7Z3gxPWZyYWN0KGd4MSk7dmVjNCBnejE9dmVjNCgwLjUpLWFicyhneDEpLWFicyhneTEpO3ZlYzQgc3oxPXN0ZXAoZ3oxLHZlYzQoMC4wKSk7Z3gxLT1zejEqKHN0ZXAoMC4wLGd4MSktMC41KTtneTEtPXN6MSooc3RlcCgwLjAsZ3kxKS0wLjUpO3ZlYzMgZzAwMD12ZWMzKGd4MC54LGd5MC54LGd6MC54KTt2ZWMzIGcxMDA9dmVjMyhneDAueSxneTAueSxnejAueSk7dmVjMyBnMDEwPXZlYzMoZ3gwLnosZ3kwLnosZ3owLnopO3ZlYzMgZzExMD12ZWMzKGd4MC53LGd5MC53LGd6MC53KTt2ZWMzIGcwMDE9dmVjMyhneDEueCxneTEueCxnejEueCk7dmVjMyBnMTAxPXZlYzMoZ3gxLnksZ3kxLnksZ3oxLnkpO3ZlYzMgZzAxMT12ZWMzKGd4MS56LGd5MS56LGd6MS56KTt2ZWMzIGcxMTE9dmVjMyhneDEudyxneTEudyxnejEudyk7dmVjNCBub3JtMD10YXlsb3JJbnZTcXJ0KHZlYzQoZG90KGcwMDAsZzAwMCksZG90KGcwMTAsZzAxMCksZG90KGcxMDAsZzEwMCksZG90KGcxMTAsZzExMCkpKTtnMDAwKj1ub3JtMC54O2cwMTAqPW5vcm0wLnk7ZzEwMCo9bm9ybTAuejtnMTEwKj1ub3JtMC53O3ZlYzQgbm9ybTE9dGF5bG9ySW52U3FydCh2ZWM0KGRvdChnMDAxLGcwMDEpLGRvdChnMDExLGcwMTEpLGRvdChnMTAxLGcxMDEpLGRvdChnMTExLGcxMTEpKSk7ZzAwMSo9bm9ybTEueDtnMDExKj1ub3JtMS55O2cxMDEqPW5vcm0xLno7ZzExMSo9bm9ybTEudztmbG9hdCBuMDAwPWRvdChnMDAwLFBmMCk7ZmxvYXQgbjEwMD1kb3QoZzEwMCx2ZWMzKFBmMS54LFBmMC55eikpO2Zsb2F0IG4wMTA9ZG90KGcwMTAsdmVjMyhQZjAueCxQZjEueSxQZjAueikpO2Zsb2F0IG4xMTA9ZG90KGcxMTAsdmVjMyhQZjEueHksUGYwLnopKTtmbG9hdCBuMDAxPWRvdChnMDAxLHZlYzMoUGYwLnh5LFBmMS56KSk7ZmxvYXQgbjEwMT1kb3QoZzEwMSx2ZWMzKFBmMS54LFBmMC55LFBmMS56KSk7ZmxvYXQgbjAxMT1kb3QoZzAxMSx2ZWMzKFBmMC54LFBmMS55eikpO2Zsb2F0IG4xMTE9ZG90KGcxMTEsUGYxKTt2ZWMzIGZhZGVfeHl6PWZhZGUoUGYwKTt2ZWM0IG5fej1taXgodmVjNChuMDAwLG4xMDAsbjAxMCxuMTEwKSx2ZWM0KG4wMDEsbjEwMSxuMDExLG4xMTEpLGZhZGVfeHl6LnopO3ZlYzIgbl95ej1taXgobl96Lnh5LG5fei56dyxmYWRlX3h5ei55KTtmbG9hdCBuX3h5ej1taXgobl95ei54LG5feXoueSxmYWRlX3h5ei54KTtyZXR1cm4gMi4yKm5feHl6O31cbi8qIEVORCBGVU5DVElPTiAqL1xuZmxvYXQgdHVyYnVsZW5jZSggdmVjMyBwICkge2Zsb2F0IHc9MTAwLjA7ZmxvYXQgdD0tLjU7Zm9yIChmbG9hdCBmPTEuMCA7IGY8PTEwLjAgOyBmKysgKXtmbG9hdCBwb3dlcj1wb3coIDIuMCxmICk7dCs9YWJzKCBwbm9pc2UoIHZlYzMoIHBvd2VyKnAgKSx2ZWMzKCAxMC4wLDEwLjAsMTAuMCApICkvcG93ZXIgKTt9XG5yZXR1cm4gdDt9XG4jZGVmaW5lIENVU1RPTV9WRVJURVhfREVGSU5JVElPTlNcbnZvaWQgbWFpbih2b2lkKSB7XG4jZGVmaW5lIENVU1RPTV9WRVJURVhfTUFJTl9CRUdJTlxuI2luY2x1ZGU8aW5zdGFuY2VzVmVydGV4PlxuI2luY2x1ZGU8Ym9uZXNWZXJ0ZXg+XG4jaW5jbHVkZTxiYWtlZFZlcnRleEFuaW1hdGlvbj5cbiNpZmRlZiBOT1JNQUxcbm5vaXNlPTEwLjAqIC0uMTAqdHVyYnVsZW5jZSggLjUqbm9ybWFsK3RpbWUqMS4xNSApO2Zsb2F0IGI9bG93RnJlcXVlbmN5U3BlZWQqNS4wKnBub2lzZSggMC4wNSpwb3NpdGlvbiArdmVjMyh0aW1lKjEuMDI1KSx2ZWMzKCAxMDAuMCApICk7ZmxvYXQgZGlzcGxhY2VtZW50PS0gMS41Km5vaXNlK2I7dmVjMyBuZXdQb3NpdGlvbj1wb3NpdGlvbitub3JtYWwqZGlzcGxhY2VtZW50O2dsX1Bvc2l0aW9uPXZpZXdQcm9qZWN0aW9uKmZpbmFsV29ybGQqdmVjNCggbmV3UG9zaXRpb24sMS4wICk7dmVjNCB3b3JsZFBvcz1maW5hbFdvcmxkKnZlYzQobmV3UG9zaXRpb24sMS4wKTt2UG9zaXRpb25XPXZlYzMod29ybGRQb3MpO3ZOb3JtYWxXPW5vcm1hbGl6ZSh2ZWMzKGZpbmFsV29ybGQqdmVjNChub3JtYWwsMC4wKSkpO1xuI2VuZGlmXG4jaWZuZGVmIFVWMVxudmVjMiB1dj12ZWMyKDAuLDAuKTtcbiNlbmRpZlxuI2lmbmRlZiBVVjJcbnZlYzIgdXYyPXZlYzIoMC4sMC4pO1xuI2VuZGlmXG4jaWZkZWYgRElGRlVTRVxuaWYgKHZEaWZmdXNlSW5mb3MueD09MC4pXG57dkRpZmZ1c2VVVj12ZWMyKGRpZmZ1c2VNYXRyaXgqdmVjNCh1diwxLjAsMC4wKSk7fVxuZWxzZVxue3ZEaWZmdXNlVVY9dmVjMihkaWZmdXNlTWF0cml4KnZlYzQodXYyLDEuMCwwLjApKTt9XG4jZW5kaWZcbiNpbmNsdWRlPGNsaXBQbGFuZVZlcnRleD5cbiNpbmNsdWRlPGZvZ1ZlcnRleD5cbiNpbmNsdWRlPHNoYWRvd3NWZXJ0ZXg+WzAuLm1heFNpbXVsdGFuZW91c0xpZ2h0c11cbiNpbmNsdWRlPHZlcnRleENvbG9yTWl4aW5nPlxuI2luY2x1ZGU8bG9nRGVwdGhWZXJ0ZXg+XG4jaWYgZGVmaW5lZChQT0lOVFNJWkUpICYmICFkZWZpbmVkKFdFQkdQVSlcbmdsX1BvaW50U2l6ZT1wb2ludFNpemU7XG4jZW5kaWZcbiNkZWZpbmUgQ1VTVE9NX1ZFUlRFWF9NQUlOX0VORFxufWA7XG4vLyBTaWRlZWZmZWN0XG5TaGFkZXJTdG9yZS5TaGFkZXJzU3RvcmVbbmFtZV0gPSBzaGFkZXI7XG4vKiogQGludGVybmFsICovXG5leHBvcnQgY29uc3QgbGF2YVZlcnRleFNoYWRlciA9IHsgbmFtZSwgc2hhZGVyIH07XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb24gKi9cclxuaW1wb3J0IHR5cGUgeyBOdWxsYWJsZSB9IGZyb20gXCJjb3JlL3R5cGVzXCI7XHJcbmltcG9ydCB7IHNlcmlhbGl6ZUFzVGV4dHVyZSwgc2VyaWFsaXplLCBleHBhbmRUb1Byb3BlcnR5LCBzZXJpYWxpemVBc0NvbG9yMyB9IGZyb20gXCJjb3JlL01pc2MvZGVjb3JhdG9yc1wiO1xyXG5pbXBvcnQgeyBTZXJpYWxpemF0aW9uSGVscGVyIH0gZnJvbSBcImNvcmUvTWlzYy9kZWNvcmF0b3JzLnNlcmlhbGl6YXRpb25cIjtcclxuaW1wb3J0IHR5cGUgeyBNYXRyaXggfSBmcm9tIFwiY29yZS9NYXRocy9tYXRoLnZlY3RvclwiO1xyXG5pbXBvcnQgeyBDb2xvcjMgfSBmcm9tIFwiY29yZS9NYXRocy9tYXRoLmNvbG9yXCI7XHJcbmltcG9ydCB0eXBlIHsgSUFuaW1hdGFibGUgfSBmcm9tIFwiY29yZS9BbmltYXRpb25zL2FuaW1hdGFibGUuaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB0eXBlIHsgQmFzZVRleHR1cmUgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvVGV4dHVyZXMvYmFzZVRleHR1cmVcIjtcclxuaW1wb3J0IHR5cGUgeyBJRWZmZWN0Q3JlYXRpb25PcHRpb25zIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL2VmZmVjdFwiO1xyXG5pbXBvcnQgeyBNYXRlcmlhbERlZmluZXMgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvbWF0ZXJpYWxEZWZpbmVzXCI7XHJcbmltcG9ydCB7IFB1c2hNYXRlcmlhbCB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9wdXNoTWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgTWF0ZXJpYWxGbGFncyB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9tYXRlcmlhbEZsYWdzXCI7XHJcbmltcG9ydCB7IFZlcnRleEJ1ZmZlciB9IGZyb20gXCJjb3JlL0J1ZmZlcnMvYnVmZmVyXCI7XHJcbmltcG9ydCB0eXBlIHsgQWJzdHJhY3RNZXNoIH0gZnJvbSBcImNvcmUvTWVzaGVzL2Fic3RyYWN0TWVzaFwiO1xyXG5pbXBvcnQgdHlwZSB7IFN1Yk1lc2ggfSBmcm9tIFwiY29yZS9NZXNoZXMvc3ViTWVzaFwiO1xyXG5pbXBvcnQgdHlwZSB7IE1lc2ggfSBmcm9tIFwiY29yZS9NZXNoZXMvbWVzaFwiO1xyXG5pbXBvcnQgeyBTY2VuZSB9IGZyb20gXCJjb3JlL3NjZW5lXCI7XHJcbmltcG9ydCB7IFJlZ2lzdGVyQ2xhc3MgfSBmcm9tIFwiY29yZS9NaXNjL3R5cGVTdG9yZVwiO1xyXG5cclxuaW1wb3J0IFwiLi9sYXZhLmZyYWdtZW50XCI7XHJcbmltcG9ydCBcIi4vbGF2YS52ZXJ0ZXhcIjtcclxuaW1wb3J0IHsgRWZmZWN0RmFsbGJhY2tzIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL2VmZmVjdEZhbGxiYWNrc1wiO1xyXG5pbXBvcnQgeyBhZGRDbGlwUGxhbmVVbmlmb3JtcywgYmluZENsaXBQbGFuZSB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9jbGlwUGxhbmVNYXRlcmlhbEhlbHBlclwiO1xyXG5pbXBvcnQge1xyXG4gICAgQmluZEJvbmVzUGFyYW1ldGVycyxcclxuICAgIEJpbmRGb2dQYXJhbWV0ZXJzLFxyXG4gICAgQmluZExpZ2h0cyxcclxuICAgIEJpbmRMb2dEZXB0aCxcclxuICAgIEhhbmRsZUZhbGxiYWNrc0ZvclNoYWRvd3MsXHJcbiAgICBQcmVwYXJlQXR0cmlidXRlc0ZvckJvbmVzLFxyXG4gICAgUHJlcGFyZUF0dHJpYnV0ZXNGb3JJbnN0YW5jZXMsXHJcbiAgICBQcmVwYXJlRGVmaW5lc0ZvckF0dHJpYnV0ZXMsXHJcbiAgICBQcmVwYXJlRGVmaW5lc0ZvckZyYW1lQm91bmRWYWx1ZXMsXHJcbiAgICBQcmVwYXJlRGVmaW5lc0ZvckxpZ2h0cyxcclxuICAgIFByZXBhcmVEZWZpbmVzRm9yTWlzYyxcclxuICAgIFByZXBhcmVVbmlmb3Jtc0FuZFNhbXBsZXJzTGlzdCxcclxufSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvbWF0ZXJpYWxIZWxwZXIuZnVuY3Rpb25zXCI7XHJcblxyXG5jbGFzcyBMYXZhTWF0ZXJpYWxEZWZpbmVzIGV4dGVuZHMgTWF0ZXJpYWxEZWZpbmVzIHtcclxuICAgIHB1YmxpYyBESUZGVVNFID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgQ0xJUFBMQU5FID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgQ0xJUFBMQU5FMiA9IGZhbHNlO1xyXG4gICAgcHVibGljIENMSVBQTEFORTMgPSBmYWxzZTtcclxuICAgIHB1YmxpYyBDTElQUExBTkU0ID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgQ0xJUFBMQU5FNSA9IGZhbHNlO1xyXG4gICAgcHVibGljIENMSVBQTEFORTYgPSBmYWxzZTtcclxuICAgIHB1YmxpYyBBTFBIQVRFU1QgPSBmYWxzZTtcclxuICAgIHB1YmxpYyBERVBUSFBSRVBBU1MgPSBmYWxzZTtcclxuICAgIHB1YmxpYyBQT0lOVFNJWkUgPSBmYWxzZTtcclxuICAgIHB1YmxpYyBGT0cgPSBmYWxzZTtcclxuICAgIHB1YmxpYyBMSUdIVDAgPSBmYWxzZTtcclxuICAgIHB1YmxpYyBMSUdIVDEgPSBmYWxzZTtcclxuICAgIHB1YmxpYyBMSUdIVDIgPSBmYWxzZTtcclxuICAgIHB1YmxpYyBMSUdIVDMgPSBmYWxzZTtcclxuICAgIHB1YmxpYyBTUE9UTElHSFQwID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgU1BPVExJR0hUMSA9IGZhbHNlO1xyXG4gICAgcHVibGljIFNQT1RMSUdIVDIgPSBmYWxzZTtcclxuICAgIHB1YmxpYyBTUE9UTElHSFQzID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgSEVNSUxJR0hUMCA9IGZhbHNlO1xyXG4gICAgcHVibGljIEhFTUlMSUdIVDEgPSBmYWxzZTtcclxuICAgIHB1YmxpYyBIRU1JTElHSFQyID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgSEVNSUxJR0hUMyA9IGZhbHNlO1xyXG4gICAgcHVibGljIERJUkxJR0hUMCA9IGZhbHNlO1xyXG4gICAgcHVibGljIERJUkxJR0hUMSA9IGZhbHNlO1xyXG4gICAgcHVibGljIERJUkxJR0hUMiA9IGZhbHNlO1xyXG4gICAgcHVibGljIERJUkxJR0hUMyA9IGZhbHNlO1xyXG4gICAgcHVibGljIFBPSU5UTElHSFQwID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgUE9JTlRMSUdIVDEgPSBmYWxzZTtcclxuICAgIHB1YmxpYyBQT0lOVExJR0hUMiA9IGZhbHNlO1xyXG4gICAgcHVibGljIFBPSU5UTElHSFQzID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgU0hBRE9XMCA9IGZhbHNlO1xyXG4gICAgcHVibGljIFNIQURPVzEgPSBmYWxzZTtcclxuICAgIHB1YmxpYyBTSEFET1cyID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgU0hBRE9XMyA9IGZhbHNlO1xyXG4gICAgcHVibGljIFNIQURPV1MgPSBmYWxzZTtcclxuICAgIHB1YmxpYyBTSEFET1dFU00wID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgU0hBRE9XRVNNMSA9IGZhbHNlO1xyXG4gICAgcHVibGljIFNIQURPV0VTTTIgPSBmYWxzZTtcclxuICAgIHB1YmxpYyBTSEFET1dFU00zID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgU0hBRE9XUE9JU1NPTjAgPSBmYWxzZTtcclxuICAgIHB1YmxpYyBTSEFET1dQT0lTU09OMSA9IGZhbHNlO1xyXG4gICAgcHVibGljIFNIQURPV1BPSVNTT04yID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgU0hBRE9XUE9JU1NPTjMgPSBmYWxzZTtcclxuICAgIHB1YmxpYyBTSEFET1dQQ0YwID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgU0hBRE9XUENGMSA9IGZhbHNlO1xyXG4gICAgcHVibGljIFNIQURPV1BDRjIgPSBmYWxzZTtcclxuICAgIHB1YmxpYyBTSEFET1dQQ0YzID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgU0hBRE9XUENTUzAgPSBmYWxzZTtcclxuICAgIHB1YmxpYyBTSEFET1dQQ1NTMSA9IGZhbHNlO1xyXG4gICAgcHVibGljIFNIQURPV1BDU1MyID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgU0hBRE9XUENTUzMgPSBmYWxzZTtcclxuICAgIHB1YmxpYyBOT1JNQUwgPSBmYWxzZTtcclxuICAgIHB1YmxpYyBVVjEgPSBmYWxzZTtcclxuICAgIHB1YmxpYyBVVjIgPSBmYWxzZTtcclxuICAgIHB1YmxpYyBWRVJURVhDT0xPUiA9IGZhbHNlO1xyXG4gICAgcHVibGljIFZFUlRFWEFMUEhBID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgTlVNX0JPTkVfSU5GTFVFTkNFUlMgPSAwO1xyXG4gICAgcHVibGljIEJvbmVzUGVyTWVzaCA9IDA7XHJcbiAgICBwdWJsaWMgSU5TVEFOQ0VTID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgSU5TVEFOQ0VTQ09MT1IgPSBmYWxzZTtcclxuICAgIHB1YmxpYyBVTkxJVCA9IGZhbHNlO1xyXG4gICAgcHVibGljIElNQUdFUFJPQ0VTU0lOR1BPU1RQUk9DRVNTID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgU0tJUEZJTkFMQ09MT1JDTEFNUCA9IGZhbHNlO1xyXG4gICAgcHVibGljIExPR0FSSVRITUlDREVQVEggPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMucmVidWlsZCgpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTGF2YU1hdGVyaWFsIGV4dGVuZHMgUHVzaE1hdGVyaWFsIHtcclxuICAgIEBzZXJpYWxpemVBc1RleHR1cmUoXCJkaWZmdXNlVGV4dHVyZVwiKVxyXG4gICAgcHJpdmF0ZSBfZGlmZnVzZVRleHR1cmU6IEJhc2VUZXh0dXJlO1xyXG4gICAgQGV4cGFuZFRvUHJvcGVydHkoXCJfbWFya0FsbFN1Yk1lc2hlc0FzVGV4dHVyZXNEaXJ0eVwiKVxyXG4gICAgcHVibGljIGRpZmZ1c2VUZXh0dXJlOiBCYXNlVGV4dHVyZTtcclxuXHJcbiAgICBAc2VyaWFsaXplQXNUZXh0dXJlKClcclxuICAgIHB1YmxpYyBub2lzZVRleHR1cmU6IEJhc2VUZXh0dXJlO1xyXG5cclxuICAgIEBzZXJpYWxpemVBc0NvbG9yMygpXHJcbiAgICBwdWJsaWMgZm9nQ29sb3I6IENvbG9yMztcclxuXHJcbiAgICBAc2VyaWFsaXplKClcclxuICAgIHB1YmxpYyBzcGVlZDogbnVtYmVyID0gMTtcclxuXHJcbiAgICBAc2VyaWFsaXplKClcclxuICAgIHB1YmxpYyBtb3ZpbmdTcGVlZDogbnVtYmVyID0gMTtcclxuXHJcbiAgICBAc2VyaWFsaXplKClcclxuICAgIHB1YmxpYyBsb3dGcmVxdWVuY3lTcGVlZDogbnVtYmVyID0gMTtcclxuXHJcbiAgICBAc2VyaWFsaXplKClcclxuICAgIHB1YmxpYyBmb2dEZW5zaXR5OiBudW1iZXIgPSAwLjE1O1xyXG5cclxuICAgIHByaXZhdGUgX2xhc3RUaW1lOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIEBzZXJpYWxpemVBc0NvbG9yMygpXHJcbiAgICBwdWJsaWMgZGlmZnVzZUNvbG9yID0gbmV3IENvbG9yMygxLCAxLCAxKTtcclxuXHJcbiAgICBAc2VyaWFsaXplKFwiZGlzYWJsZUxpZ2h0aW5nXCIpXHJcbiAgICBwcml2YXRlIF9kaXNhYmxlTGlnaHRpbmcgPSBmYWxzZTtcclxuICAgIEBleHBhbmRUb1Byb3BlcnR5KFwiX21hcmtBbGxTdWJNZXNoZXNBc0xpZ2h0c0RpcnR5XCIpXHJcbiAgICBwdWJsaWMgZGlzYWJsZUxpZ2h0aW5nOiBib29sZWFuO1xyXG5cclxuICAgIEBzZXJpYWxpemUoXCJ1bmxpdFwiKVxyXG4gICAgcHJpdmF0ZSBfdW5saXQgPSBmYWxzZTtcclxuICAgIEBleHBhbmRUb1Byb3BlcnR5KFwiX21hcmtBbGxTdWJNZXNoZXNBc0xpZ2h0c0RpcnR5XCIpXHJcbiAgICBwdWJsaWMgdW5saXQ6IGJvb2xlYW47XHJcblxyXG4gICAgQHNlcmlhbGl6ZShcIm1heFNpbXVsdGFuZW91c0xpZ2h0c1wiKVxyXG4gICAgcHJpdmF0ZSBfbWF4U2ltdWx0YW5lb3VzTGlnaHRzID0gNDtcclxuICAgIEBleHBhbmRUb1Byb3BlcnR5KFwiX21hcmtBbGxTdWJNZXNoZXNBc0xpZ2h0c0RpcnR5XCIpXHJcbiAgICBwdWJsaWMgbWF4U2ltdWx0YW5lb3VzTGlnaHRzOiBudW1iZXI7XHJcblxyXG4gICAgcHJpdmF0ZSBfc2NhbGVkRGlmZnVzZSA9IG5ldyBDb2xvcjMoKTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIHNjZW5lPzogU2NlbmUpIHtcclxuICAgICAgICBzdXBlcihuYW1lLCBzY2VuZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG92ZXJyaWRlIG5lZWRBbHBoYUJsZW5kaW5nKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFscGhhIDwgMS4wO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvdmVycmlkZSBuZWVkQWxwaGFUZXN0aW5nKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb3ZlcnJpZGUgZ2V0QWxwaGFUZXN0VGV4dHVyZSgpOiBOdWxsYWJsZTxCYXNlVGV4dHVyZT4ge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE1ldGhvZHNcclxuICAgIHB1YmxpYyBvdmVycmlkZSBpc1JlYWR5Rm9yU3ViTWVzaChtZXNoOiBBYnN0cmFjdE1lc2gsIHN1Yk1lc2g6IFN1Yk1lc2gsIHVzZUluc3RhbmNlcz86IGJvb2xlYW4pOiBib29sZWFuIHtcclxuICAgICAgICBjb25zdCBkcmF3V3JhcHBlciA9IHN1Yk1lc2guX2RyYXdXcmFwcGVyO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5pc0Zyb3plbikge1xyXG4gICAgICAgICAgICBpZiAoZHJhd1dyYXBwZXIuZWZmZWN0ICYmIGRyYXdXcmFwcGVyLl93YXNQcmV2aW91c2x5UmVhZHkgJiYgZHJhd1dyYXBwZXIuX3dhc1ByZXZpb3VzbHlVc2luZ0luc3RhbmNlcyA9PT0gdXNlSW5zdGFuY2VzKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFzdWJNZXNoLm1hdGVyaWFsRGVmaW5lcykge1xyXG4gICAgICAgICAgICBzdWJNZXNoLm1hdGVyaWFsRGVmaW5lcyA9IG5ldyBMYXZhTWF0ZXJpYWxEZWZpbmVzKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBkZWZpbmVzID0gPExhdmFNYXRlcmlhbERlZmluZXM+c3ViTWVzaC5tYXRlcmlhbERlZmluZXM7XHJcbiAgICAgICAgY29uc3Qgc2NlbmUgPSB0aGlzLmdldFNjZW5lKCk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9pc1JlYWR5Rm9yU3ViTWVzaChzdWJNZXNoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGVuZ2luZSA9IHNjZW5lLmdldEVuZ2luZSgpO1xyXG5cclxuICAgICAgICAvLyBUZXh0dXJlc1xyXG4gICAgICAgIGlmIChkZWZpbmVzLl9hcmVUZXh0dXJlc0RpcnR5KSB7XHJcbiAgICAgICAgICAgIGRlZmluZXMuX25lZWRVVnMgPSBmYWxzZTtcclxuICAgICAgICAgICAgaWYgKHNjZW5lLnRleHR1cmVzRW5hYmxlZCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2RpZmZ1c2VUZXh0dXJlICYmIE1hdGVyaWFsRmxhZ3MuRGlmZnVzZVRleHR1cmVFbmFibGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLl9kaWZmdXNlVGV4dHVyZS5pc1JlYWR5KCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmluZXMuX25lZWRVVnMgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZpbmVzLkRJRkZVU0UgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gTWlzYy5cclxuICAgICAgICBQcmVwYXJlRGVmaW5lc0Zvck1pc2MobWVzaCwgc2NlbmUsIHRoaXMuX3VzZUxvZ2FyaXRobWljRGVwdGgsIHRoaXMucG9pbnRzQ2xvdWQsIHRoaXMuZm9nRW5hYmxlZCwgdGhpcy5fc2hvdWxkVHVybkFscGhhVGVzdE9uKG1lc2gpLCBkZWZpbmVzKTtcclxuXHJcbiAgICAgICAgLy8gTGlnaHRzXHJcbiAgICAgICAgZGVmaW5lcy5fbmVlZE5vcm1hbHMgPSB0cnVlO1xyXG5cclxuICAgICAgICBQcmVwYXJlRGVmaW5lc0ZvckxpZ2h0cyhzY2VuZSwgbWVzaCwgZGVmaW5lcywgZmFsc2UsIHRoaXMuX21heFNpbXVsdGFuZW91c0xpZ2h0cywgdGhpcy5fZGlzYWJsZUxpZ2h0aW5nKTtcclxuXHJcbiAgICAgICAgLy8gVmFsdWVzIHRoYXQgbmVlZCB0byBiZSBldmFsdWF0ZWQgb24gZXZlcnkgZnJhbWVcclxuICAgICAgICBQcmVwYXJlRGVmaW5lc0ZvckZyYW1lQm91bmRWYWx1ZXMoc2NlbmUsIGVuZ2luZSwgdGhpcywgZGVmaW5lcywgdXNlSW5zdGFuY2VzID8gdHJ1ZSA6IGZhbHNlKTtcclxuXHJcbiAgICAgICAgLy8gQXR0cmlic1xyXG4gICAgICAgIFByZXBhcmVEZWZpbmVzRm9yQXR0cmlidXRlcyhtZXNoLCBkZWZpbmVzLCB0cnVlLCB0cnVlKTtcclxuXHJcbiAgICAgICAgLy8gR2V0IGNvcnJlY3QgZWZmZWN0XHJcbiAgICAgICAgaWYgKGRlZmluZXMuaXNEaXJ0eSkge1xyXG4gICAgICAgICAgICBkZWZpbmVzLm1hcmtBc1Byb2Nlc3NlZCgpO1xyXG4gICAgICAgICAgICBzY2VuZS5yZXNldENhY2hlZE1hdGVyaWFsKCk7XHJcblxyXG4gICAgICAgICAgICAvLyBGYWxsYmFja3NcclxuICAgICAgICAgICAgY29uc3QgZmFsbGJhY2tzID0gbmV3IEVmZmVjdEZhbGxiYWNrcygpO1xyXG4gICAgICAgICAgICBpZiAoZGVmaW5lcy5GT0cpIHtcclxuICAgICAgICAgICAgICAgIGZhbGxiYWNrcy5hZGRGYWxsYmFjaygxLCBcIkZPR1wiKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgSGFuZGxlRmFsbGJhY2tzRm9yU2hhZG93cyhkZWZpbmVzLCBmYWxsYmFja3MpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGRlZmluZXMuTlVNX0JPTkVfSU5GTFVFTkNFUlMgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBmYWxsYmFja3MuYWRkQ1BVU2tpbm5pbmdGYWxsYmFjaygwLCBtZXNoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZGVmaW5lcy5JTUFHRVBST0NFU1NJTkdQT1NUUFJPQ0VTUyA9IHNjZW5lLmltYWdlUHJvY2Vzc2luZ0NvbmZpZ3VyYXRpb24uYXBwbHlCeVBvc3RQcm9jZXNzO1xyXG5cclxuICAgICAgICAgICAgLy9BdHRyaWJ1dGVzXHJcbiAgICAgICAgICAgIGNvbnN0IGF0dHJpYnMgPSBbVmVydGV4QnVmZmVyLlBvc2l0aW9uS2luZF07XHJcblxyXG4gICAgICAgICAgICBpZiAoZGVmaW5lcy5OT1JNQUwpIHtcclxuICAgICAgICAgICAgICAgIGF0dHJpYnMucHVzaChWZXJ0ZXhCdWZmZXIuTm9ybWFsS2luZCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChkZWZpbmVzLlVWMSkge1xyXG4gICAgICAgICAgICAgICAgYXR0cmlicy5wdXNoKFZlcnRleEJ1ZmZlci5VVktpbmQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoZGVmaW5lcy5VVjIpIHtcclxuICAgICAgICAgICAgICAgIGF0dHJpYnMucHVzaChWZXJ0ZXhCdWZmZXIuVVYyS2luZCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChkZWZpbmVzLlZFUlRFWENPTE9SKSB7XHJcbiAgICAgICAgICAgICAgICBhdHRyaWJzLnB1c2goVmVydGV4QnVmZmVyLkNvbG9yS2luZCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIFByZXBhcmVBdHRyaWJ1dGVzRm9yQm9uZXMoYXR0cmlicywgbWVzaCwgZGVmaW5lcywgZmFsbGJhY2tzKTtcclxuICAgICAgICAgICAgUHJlcGFyZUF0dHJpYnV0ZXNGb3JJbnN0YW5jZXMoYXR0cmlicywgZGVmaW5lcyk7XHJcblxyXG4gICAgICAgICAgICAvLyBMZWdhY3kgYnJvd3NlciBwYXRjaFxyXG4gICAgICAgICAgICBjb25zdCBzaGFkZXJOYW1lID0gXCJsYXZhXCI7XHJcbiAgICAgICAgICAgIGNvbnN0IGpvaW4gPSBkZWZpbmVzLnRvU3RyaW5nKCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCB1bmlmb3JtcyA9IFtcclxuICAgICAgICAgICAgICAgIFwid29ybGRcIixcclxuICAgICAgICAgICAgICAgIFwidmlld1wiLFxyXG4gICAgICAgICAgICAgICAgXCJ2aWV3UHJvamVjdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgXCJ2RXllUG9zaXRpb25cIixcclxuICAgICAgICAgICAgICAgIFwidkxpZ2h0c1R5cGVcIixcclxuICAgICAgICAgICAgICAgIFwidkRpZmZ1c2VDb2xvclwiLFxyXG4gICAgICAgICAgICAgICAgXCJ2Rm9nSW5mb3NcIixcclxuICAgICAgICAgICAgICAgIFwidkZvZ0NvbG9yXCIsXHJcbiAgICAgICAgICAgICAgICBcInBvaW50U2l6ZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJ2RGlmZnVzZUluZm9zXCIsXHJcbiAgICAgICAgICAgICAgICBcIm1Cb25lc1wiLFxyXG4gICAgICAgICAgICAgICAgXCJkaWZmdXNlTWF0cml4XCIsXHJcbiAgICAgICAgICAgICAgICBcImxvZ2FyaXRobWljRGVwdGhDb25zdGFudFwiLFxyXG4gICAgICAgICAgICAgICAgXCJ0aW1lXCIsXHJcbiAgICAgICAgICAgICAgICBcInNwZWVkXCIsXHJcbiAgICAgICAgICAgICAgICBcIm1vdmluZ1NwZWVkXCIsXHJcbiAgICAgICAgICAgICAgICBcImZvZ0NvbG9yXCIsXHJcbiAgICAgICAgICAgICAgICBcImZvZ0RlbnNpdHlcIixcclxuICAgICAgICAgICAgICAgIFwibG93RnJlcXVlbmN5U3BlZWRcIixcclxuICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgYWRkQ2xpcFBsYW5lVW5pZm9ybXModW5pZm9ybXMpO1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgc2FtcGxlcnMgPSBbXCJkaWZmdXNlU2FtcGxlclwiLCBcIm5vaXNlVGV4dHVyZVwiXTtcclxuICAgICAgICAgICAgY29uc3QgdW5pZm9ybUJ1ZmZlcnM6IHN0cmluZ1tdID0gW107XHJcblxyXG4gICAgICAgICAgICBQcmVwYXJlVW5pZm9ybXNBbmRTYW1wbGVyc0xpc3QoPElFZmZlY3RDcmVhdGlvbk9wdGlvbnM+e1xyXG4gICAgICAgICAgICAgICAgdW5pZm9ybXNOYW1lczogdW5pZm9ybXMsXHJcbiAgICAgICAgICAgICAgICB1bmlmb3JtQnVmZmVyc05hbWVzOiB1bmlmb3JtQnVmZmVycyxcclxuICAgICAgICAgICAgICAgIHNhbXBsZXJzOiBzYW1wbGVycyxcclxuICAgICAgICAgICAgICAgIGRlZmluZXM6IGRlZmluZXMsXHJcbiAgICAgICAgICAgICAgICBtYXhTaW11bHRhbmVvdXNMaWdodHM6IHRoaXMubWF4U2ltdWx0YW5lb3VzTGlnaHRzLFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHN1Yk1lc2guc2V0RWZmZWN0KFxyXG4gICAgICAgICAgICAgICAgc2NlbmUuZ2V0RW5naW5lKCkuY3JlYXRlRWZmZWN0KFxyXG4gICAgICAgICAgICAgICAgICAgIHNoYWRlck5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgPElFZmZlY3RDcmVhdGlvbk9wdGlvbnM+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzOiBhdHRyaWJzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1bmlmb3Jtc05hbWVzOiB1bmlmb3JtcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdW5pZm9ybUJ1ZmZlcnNOYW1lczogdW5pZm9ybUJ1ZmZlcnMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNhbXBsZXJzOiBzYW1wbGVycyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmaW5lczogam9pbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmFsbGJhY2tzOiBmYWxsYmFja3MsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ29tcGlsZWQ6IHRoaXMub25Db21waWxlZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25FcnJvcjogdGhpcy5vbkVycm9yLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRleFBhcmFtZXRlcnM6IHsgbWF4U2ltdWx0YW5lb3VzTGlnaHRzOiB0aGlzLm1heFNpbXVsdGFuZW91c0xpZ2h0cyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZW5naW5lXHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgZGVmaW5lcyxcclxuICAgICAgICAgICAgICAgIHRoaXMuX21hdGVyaWFsQ29udGV4dFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXN1Yk1lc2guZWZmZWN0IHx8ICFzdWJNZXNoLmVmZmVjdC5pc1JlYWR5KCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZGVmaW5lcy5fcmVuZGVySWQgPSBzY2VuZS5nZXRSZW5kZXJJZCgpO1xyXG4gICAgICAgIGRyYXdXcmFwcGVyLl93YXNQcmV2aW91c2x5UmVhZHkgPSB0cnVlO1xyXG4gICAgICAgIGRyYXdXcmFwcGVyLl93YXNQcmV2aW91c2x5VXNpbmdJbnN0YW5jZXMgPSAhIXVzZUluc3RhbmNlcztcclxuXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG92ZXJyaWRlIGJpbmRGb3JTdWJNZXNoKHdvcmxkOiBNYXRyaXgsIG1lc2g6IE1lc2gsIHN1Yk1lc2g6IFN1Yk1lc2gpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBzY2VuZSA9IHRoaXMuZ2V0U2NlbmUoKTtcclxuXHJcbiAgICAgICAgY29uc3QgZGVmaW5lcyA9IDxMYXZhTWF0ZXJpYWxEZWZpbmVzPnN1Yk1lc2gubWF0ZXJpYWxEZWZpbmVzO1xyXG4gICAgICAgIGlmICghZGVmaW5lcykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBlZmZlY3QgPSBzdWJNZXNoLmVmZmVjdDtcclxuXHJcbiAgICAgICAgaWYgKCFlZmZlY3QpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9hY3RpdmVFZmZlY3QgPSBlZmZlY3Q7XHJcblxyXG4gICAgICAgIGRlZmluZXMuVU5MSVQgPSB0aGlzLl91bmxpdDtcclxuXHJcbiAgICAgICAgLy8gTWF0cmljZXNcclxuICAgICAgICB0aGlzLmJpbmRPbmx5V29ybGRNYXRyaXgod29ybGQpO1xyXG4gICAgICAgIHRoaXMuX2FjdGl2ZUVmZmVjdC5zZXRNYXRyaXgoXCJ2aWV3UHJvamVjdGlvblwiLCBzY2VuZS5nZXRUcmFuc2Zvcm1NYXRyaXgoKSk7XHJcblxyXG4gICAgICAgIC8vIEJvbmVzXHJcbiAgICAgICAgQmluZEJvbmVzUGFyYW1ldGVycyhtZXNoLCB0aGlzLl9hY3RpdmVFZmZlY3QpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5fbXVzdFJlYmluZChzY2VuZSwgZWZmZWN0LCBzdWJNZXNoKSkge1xyXG4gICAgICAgICAgICAvLyBUZXh0dXJlc1xyXG4gICAgICAgICAgICBpZiAodGhpcy5kaWZmdXNlVGV4dHVyZSAmJiBNYXRlcmlhbEZsYWdzLkRpZmZ1c2VUZXh0dXJlRW5hYmxlZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fYWN0aXZlRWZmZWN0LnNldFRleHR1cmUoXCJkaWZmdXNlU2FtcGxlclwiLCB0aGlzLmRpZmZ1c2VUZXh0dXJlKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9hY3RpdmVFZmZlY3Quc2V0RmxvYXQyKFwidkRpZmZ1c2VJbmZvc1wiLCB0aGlzLmRpZmZ1c2VUZXh0dXJlLmNvb3JkaW5hdGVzSW5kZXgsIHRoaXMuZGlmZnVzZVRleHR1cmUubGV2ZWwpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fYWN0aXZlRWZmZWN0LnNldE1hdHJpeChcImRpZmZ1c2VNYXRyaXhcIiwgdGhpcy5kaWZmdXNlVGV4dHVyZS5nZXRUZXh0dXJlTWF0cml4KCkpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5ub2lzZVRleHR1cmUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2FjdGl2ZUVmZmVjdC5zZXRUZXh0dXJlKFwibm9pc2VUZXh0dXJlXCIsIHRoaXMubm9pc2VUZXh0dXJlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gQ2xpcCBwbGFuZVxyXG4gICAgICAgICAgICBiaW5kQ2xpcFBsYW5lKGVmZmVjdCwgdGhpcywgc2NlbmUpO1xyXG5cclxuICAgICAgICAgICAgLy8gUG9pbnQgc2l6ZVxyXG4gICAgICAgICAgICBpZiAodGhpcy5wb2ludHNDbG91ZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fYWN0aXZlRWZmZWN0LnNldEZsb2F0KFwicG9pbnRTaXplXCIsIHRoaXMucG9pbnRTaXplKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gTG9nLiBkZXB0aFxyXG4gICAgICAgICAgICBpZiAodGhpcy5fdXNlTG9nYXJpdGhtaWNEZXB0aCkge1xyXG4gICAgICAgICAgICAgICAgQmluZExvZ0RlcHRoKGRlZmluZXMsIGVmZmVjdCwgc2NlbmUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBzY2VuZS5iaW5kRXllUG9zaXRpb24oZWZmZWN0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX2FjdGl2ZUVmZmVjdC5zZXRDb2xvcjQoXCJ2RGlmZnVzZUNvbG9yXCIsIHRoaXMuX3NjYWxlZERpZmZ1c2UsIHRoaXMuYWxwaGEgKiBtZXNoLnZpc2liaWxpdHkpO1xyXG5cclxuICAgICAgICBpZiAoc2NlbmUubGlnaHRzRW5hYmxlZCAmJiAhdGhpcy5kaXNhYmxlTGlnaHRpbmcpIHtcclxuICAgICAgICAgICAgQmluZExpZ2h0cyhzY2VuZSwgbWVzaCwgdGhpcy5fYWN0aXZlRWZmZWN0LCBkZWZpbmVzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFZpZXdcclxuICAgICAgICBpZiAoc2NlbmUuZm9nRW5hYmxlZCAmJiBtZXNoLmFwcGx5Rm9nICYmIHNjZW5lLmZvZ01vZGUgIT09IFNjZW5lLkZPR01PREVfTk9ORSkge1xyXG4gICAgICAgICAgICB0aGlzLl9hY3RpdmVFZmZlY3Quc2V0TWF0cml4KFwidmlld1wiLCBzY2VuZS5nZXRWaWV3TWF0cml4KCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gRm9nXHJcbiAgICAgICAgQmluZEZvZ1BhcmFtZXRlcnMoc2NlbmUsIG1lc2gsIHRoaXMuX2FjdGl2ZUVmZmVjdCk7XHJcblxyXG4gICAgICAgIHRoaXMuX2xhc3RUaW1lICs9IHNjZW5lLmdldEVuZ2luZSgpLmdldERlbHRhVGltZSgpO1xyXG4gICAgICAgIHRoaXMuX2FjdGl2ZUVmZmVjdC5zZXRGbG9hdChcInRpbWVcIiwgKHRoaXMuX2xhc3RUaW1lICogdGhpcy5zcGVlZCkgLyAxMDAwKTtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmZvZ0NvbG9yKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZm9nQ29sb3IgPSBDb2xvcjMuQmxhY2soKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fYWN0aXZlRWZmZWN0LnNldENvbG9yMyhcImZvZ0NvbG9yXCIsIHRoaXMuZm9nQ29sb3IpO1xyXG4gICAgICAgIHRoaXMuX2FjdGl2ZUVmZmVjdC5zZXRGbG9hdChcImZvZ0RlbnNpdHlcIiwgdGhpcy5mb2dEZW5zaXR5KTtcclxuXHJcbiAgICAgICAgdGhpcy5fYWN0aXZlRWZmZWN0LnNldEZsb2F0KFwibG93RnJlcXVlbmN5U3BlZWRcIiwgdGhpcy5sb3dGcmVxdWVuY3lTcGVlZCk7XHJcbiAgICAgICAgdGhpcy5fYWN0aXZlRWZmZWN0LnNldEZsb2F0KFwibW92aW5nU3BlZWRcIiwgdGhpcy5tb3ZpbmdTcGVlZCk7XHJcblxyXG4gICAgICAgIHRoaXMuX2FmdGVyQmluZChtZXNoLCB0aGlzLl9hY3RpdmVFZmZlY3QsIHN1Yk1lc2gpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvdmVycmlkZSBnZXRBbmltYXRhYmxlcygpOiBJQW5pbWF0YWJsZVtdIHtcclxuICAgICAgICBjb25zdCByZXN1bHRzID0gW107XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmRpZmZ1c2VUZXh0dXJlICYmIHRoaXMuZGlmZnVzZVRleHR1cmUuYW5pbWF0aW9ucyAmJiB0aGlzLmRpZmZ1c2VUZXh0dXJlLmFuaW1hdGlvbnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICByZXN1bHRzLnB1c2godGhpcy5kaWZmdXNlVGV4dHVyZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5ub2lzZVRleHR1cmUgJiYgdGhpcy5ub2lzZVRleHR1cmUuYW5pbWF0aW9ucyAmJiB0aGlzLm5vaXNlVGV4dHVyZS5hbmltYXRpb25zLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHRoaXMubm9pc2VUZXh0dXJlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiByZXN1bHRzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvdmVycmlkZSBnZXRBY3RpdmVUZXh0dXJlcygpOiBCYXNlVGV4dHVyZVtdIHtcclxuICAgICAgICBjb25zdCBhY3RpdmVUZXh0dXJlcyA9IHN1cGVyLmdldEFjdGl2ZVRleHR1cmVzKCk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9kaWZmdXNlVGV4dHVyZSkge1xyXG4gICAgICAgICAgICBhY3RpdmVUZXh0dXJlcy5wdXNoKHRoaXMuX2RpZmZ1c2VUZXh0dXJlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBhY3RpdmVUZXh0dXJlcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb3ZlcnJpZGUgaGFzVGV4dHVyZSh0ZXh0dXJlOiBCYXNlVGV4dHVyZSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmIChzdXBlci5oYXNUZXh0dXJlKHRleHR1cmUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZGlmZnVzZVRleHR1cmUgPT09IHRleHR1cmUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG92ZXJyaWRlIGRpc3Bvc2UoZm9yY2VEaXNwb3NlRWZmZWN0PzogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLmRpZmZ1c2VUZXh0dXJlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlmZnVzZVRleHR1cmUuZGlzcG9zZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5ub2lzZVRleHR1cmUpIHtcclxuICAgICAgICAgICAgdGhpcy5ub2lzZVRleHR1cmUuZGlzcG9zZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3VwZXIuZGlzcG9zZShmb3JjZURpc3Bvc2VFZmZlY3QpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvdmVycmlkZSBjbG9uZShuYW1lOiBzdHJpbmcpOiBMYXZhTWF0ZXJpYWwge1xyXG4gICAgICAgIHJldHVybiBTZXJpYWxpemF0aW9uSGVscGVyLkNsb25lKCgpID0+IG5ldyBMYXZhTWF0ZXJpYWwobmFtZSwgdGhpcy5nZXRTY2VuZSgpKSwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG92ZXJyaWRlIHNlcmlhbGl6ZSgpOiBhbnkge1xyXG4gICAgICAgIGNvbnN0IHNlcmlhbGl6YXRpb25PYmplY3QgPSBzdXBlci5zZXJpYWxpemUoKTtcclxuICAgICAgICBzZXJpYWxpemF0aW9uT2JqZWN0LmN1c3RvbVR5cGUgPSBcIkJBQllMT04uTGF2YU1hdGVyaWFsXCI7XHJcbiAgICAgICAgcmV0dXJuIHNlcmlhbGl6YXRpb25PYmplY3Q7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG92ZXJyaWRlIGdldENsYXNzTmFtZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBcIkxhdmFNYXRlcmlhbFwiO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFN0YXRpY3NcclxuICAgIHB1YmxpYyBzdGF0aWMgb3ZlcnJpZGUgUGFyc2Uoc291cmNlOiBhbnksIHNjZW5lOiBTY2VuZSwgcm9vdFVybDogc3RyaW5nKTogTGF2YU1hdGVyaWFsIHtcclxuICAgICAgICByZXR1cm4gU2VyaWFsaXphdGlvbkhlbHBlci5QYXJzZSgoKSA9PiBuZXcgTGF2YU1hdGVyaWFsKHNvdXJjZS5uYW1lLCBzY2VuZSksIHNvdXJjZSwgc2NlbmUsIHJvb3RVcmwpO1xyXG4gICAgfVxyXG59XHJcblxyXG5SZWdpc3RlckNsYXNzKFwiQkFCWUxPTi5MYXZhTWF0ZXJpYWxcIiwgTGF2YU1hdGVyaWFsKTtcclxuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWludGVybmFsLW1vZHVsZXMgKi9cclxuaW1wb3J0ICogYXMgTWF0TGliIGZyb20gXCJtYXRlcmlhbHMvbGF2YS9pbmRleFwiO1xyXG5cclxuLyoqXHJcbiAqIFRoaXMgaXMgdGhlIGVudHJ5IHBvaW50IGZvciB0aGUgVU1EIG1vZHVsZS5cclxuICogVGhlIGVudHJ5IHBvaW50IGZvciBhIGZ1dHVyZSBFU00gcGFja2FnZSBzaG91bGQgYmUgaW5kZXgudHNcclxuICovXHJcbmNvbnN0IGdsb2JhbE9iamVjdCA9IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWwgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDogdW5kZWZpbmVkO1xyXG5pZiAodHlwZW9mIGdsb2JhbE9iamVjdCAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgZm9yIChjb25zdCBrZXkgaW4gTWF0TGliKSB7XHJcbiAgICAgICAgKDxhbnk+Z2xvYmFsT2JqZWN0KS5CQUJZTE9OW2tleV0gPSAoPGFueT5NYXRMaWIpW2tleV07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCAqIGZyb20gXCJtYXRlcmlhbHMvbGF2YS9pbmRleFwiO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfYmFieWxvbmpzX01hdGVyaWFsc19lZmZlY3RfXzsiLCIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi5cblxuUGVybWlzc2lvbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgYW5kL29yIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSBmb3IgYW55XG5wdXJwb3NlIHdpdGggb3Igd2l0aG91dCBmZWUgaXMgaGVyZWJ5IGdyYW50ZWQuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIgQU5EIFRIRSBBVVRIT1IgRElTQ0xBSU1TIEFMTCBXQVJSQU5USUVTIFdJVEhcblJFR0FSRCBUTyBUSElTIFNPRlRXQVJFIElOQ0xVRElORyBBTEwgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWVxuQU5EIEZJVE5FU1MuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1IgQkUgTElBQkxFIEZPUiBBTlkgU1BFQ0lBTCwgRElSRUNULFxuSU5ESVJFQ1QsIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyBPUiBBTlkgREFNQUdFUyBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NXG5MT1NTIE9GIFVTRSwgREFUQSBPUiBQUk9GSVRTLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgTkVHTElHRU5DRSBPUlxuT1RIRVIgVE9SVElPVVMgQUNUSU9OLCBBUklTSU5HIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFVTRSBPUlxuUEVSRk9STUFOQ0UgT0YgVEhJUyBTT0ZUV0FSRS5cbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSwgU3VwcHJlc3NlZEVycm9yLCBTeW1ib2wsIEl0ZXJhdG9yICovXG5cbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xuICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xuICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xuICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xuICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xufVxuXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XG4gIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XG4gICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XG4gICAgICB9XG4gICAgICByZXR1cm4gdDtcbiAgfVxuICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XG4gIHZhciB0ID0ge307XG4gIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxuICAgICAgdFtwXSA9IHNbcF07XG4gIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcbiAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXG4gICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xuICAgICAgfVxuICByZXR1cm4gdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcbiAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcbiAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcbiAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcbiAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XG4gIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gX19lc0RlY29yYXRlKGN0b3IsIGRlc2NyaXB0b3JJbiwgZGVjb3JhdG9ycywgY29udGV4dEluLCBpbml0aWFsaXplcnMsIGV4dHJhSW5pdGlhbGl6ZXJzKSB7XG4gIGZ1bmN0aW9uIGFjY2VwdChmKSB7IGlmIChmICE9PSB2b2lkIDAgJiYgdHlwZW9mIGYgIT09IFwiZnVuY3Rpb25cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkZ1bmN0aW9uIGV4cGVjdGVkXCIpOyByZXR1cm4gZjsgfVxuICB2YXIga2luZCA9IGNvbnRleHRJbi5raW5kLCBrZXkgPSBraW5kID09PSBcImdldHRlclwiID8gXCJnZXRcIiA6IGtpbmQgPT09IFwic2V0dGVyXCIgPyBcInNldFwiIDogXCJ2YWx1ZVwiO1xuICB2YXIgdGFyZ2V0ID0gIWRlc2NyaXB0b3JJbiAmJiBjdG9yID8gY29udGV4dEluW1wic3RhdGljXCJdID8gY3RvciA6IGN0b3IucHJvdG90eXBlIDogbnVsbDtcbiAgdmFyIGRlc2NyaXB0b3IgPSBkZXNjcmlwdG9ySW4gfHwgKHRhcmdldCA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBjb250ZXh0SW4ubmFtZSkgOiB7fSk7XG4gIHZhciBfLCBkb25lID0gZmFsc2U7XG4gIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICB2YXIgY29udGV4dCA9IHt9O1xuICAgICAgZm9yICh2YXIgcCBpbiBjb250ZXh0SW4pIGNvbnRleHRbcF0gPSBwID09PSBcImFjY2Vzc1wiID8ge30gOiBjb250ZXh0SW5bcF07XG4gICAgICBmb3IgKHZhciBwIGluIGNvbnRleHRJbi5hY2Nlc3MpIGNvbnRleHQuYWNjZXNzW3BdID0gY29udGV4dEluLmFjY2Vzc1twXTtcbiAgICAgIGNvbnRleHQuYWRkSW5pdGlhbGl6ZXIgPSBmdW5jdGlvbiAoZikgeyBpZiAoZG9uZSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBhZGQgaW5pdGlhbGl6ZXJzIGFmdGVyIGRlY29yYXRpb24gaGFzIGNvbXBsZXRlZFwiKTsgZXh0cmFJbml0aWFsaXplcnMucHVzaChhY2NlcHQoZiB8fCBudWxsKSk7IH07XG4gICAgICB2YXIgcmVzdWx0ID0gKDAsIGRlY29yYXRvcnNbaV0pKGtpbmQgPT09IFwiYWNjZXNzb3JcIiA/IHsgZ2V0OiBkZXNjcmlwdG9yLmdldCwgc2V0OiBkZXNjcmlwdG9yLnNldCB9IDogZGVzY3JpcHRvcltrZXldLCBjb250ZXh0KTtcbiAgICAgIGlmIChraW5kID09PSBcImFjY2Vzc29yXCIpIHtcbiAgICAgICAgICBpZiAocmVzdWx0ID09PSB2b2lkIDApIGNvbnRpbnVlO1xuICAgICAgICAgIGlmIChyZXN1bHQgPT09IG51bGwgfHwgdHlwZW9mIHJlc3VsdCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk9iamVjdCBleHBlY3RlZFwiKTtcbiAgICAgICAgICBpZiAoXyA9IGFjY2VwdChyZXN1bHQuZ2V0KSkgZGVzY3JpcHRvci5nZXQgPSBfO1xuICAgICAgICAgIGlmIChfID0gYWNjZXB0KHJlc3VsdC5zZXQpKSBkZXNjcmlwdG9yLnNldCA9IF87XG4gICAgICAgICAgaWYgKF8gPSBhY2NlcHQocmVzdWx0LmluaXQpKSBpbml0aWFsaXplcnMudW5zaGlmdChfKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKF8gPSBhY2NlcHQocmVzdWx0KSkge1xuICAgICAgICAgIGlmIChraW5kID09PSBcImZpZWxkXCIpIGluaXRpYWxpemVycy51bnNoaWZ0KF8pO1xuICAgICAgICAgIGVsc2UgZGVzY3JpcHRvcltrZXldID0gXztcbiAgICAgIH1cbiAgfVxuICBpZiAodGFyZ2V0KSBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBjb250ZXh0SW4ubmFtZSwgZGVzY3JpcHRvcik7XG4gIGRvbmUgPSB0cnVlO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fcnVuSW5pdGlhbGl6ZXJzKHRoaXNBcmcsIGluaXRpYWxpemVycywgdmFsdWUpIHtcbiAgdmFyIHVzZVZhbHVlID0gYXJndW1lbnRzLmxlbmd0aCA+IDI7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgaW5pdGlhbGl6ZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YWx1ZSA9IHVzZVZhbHVlID8gaW5pdGlhbGl6ZXJzW2ldLmNhbGwodGhpc0FyZywgdmFsdWUpIDogaW5pdGlhbGl6ZXJzW2ldLmNhbGwodGhpc0FyZyk7XG4gIH1cbiAgcmV0dXJuIHVzZVZhbHVlID8gdmFsdWUgOiB2b2lkIDA7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX19wcm9wS2V5KHgpIHtcbiAgcmV0dXJuIHR5cGVvZiB4ID09PSBcInN5bWJvbFwiID8geCA6IFwiXCIuY29uY2F0KHgpO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fc2V0RnVuY3Rpb25OYW1lKGYsIG5hbWUsIHByZWZpeCkge1xuICBpZiAodHlwZW9mIG5hbWUgPT09IFwic3ltYm9sXCIpIG5hbWUgPSBuYW1lLmRlc2NyaXB0aW9uID8gXCJbXCIuY29uY2F0KG5hbWUuZGVzY3JpcHRpb24sIFwiXVwiKSA6IFwiXCI7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZiwgXCJuYW1lXCIsIHsgY29uZmlndXJhYmxlOiB0cnVlLCB2YWx1ZTogcHJlZml4ID8gXCJcIi5jb25jYXQocHJlZml4LCBcIiBcIiwgbmFtZSkgOiBuYW1lIH0pO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcbiAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcbiAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZyA9IE9iamVjdC5jcmVhdGUoKHR5cGVvZiBJdGVyYXRvciA9PT0gXCJmdW5jdGlvblwiID8gSXRlcmF0b3IgOiBPYmplY3QpLnByb3RvdHlwZSk7XG4gIHJldHVybiBnLm5leHQgPSB2ZXJiKDApLCBnW1widGhyb3dcIl0gPSB2ZXJiKDEpLCBnW1wicmV0dXJuXCJdID0gdmVyYigyKSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xuICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cbiAgZnVuY3Rpb24gc3RlcChvcCkge1xuICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xuICAgICAgd2hpbGUgKGcgJiYgKGcgPSAwLCBvcFswXSAmJiAoXyA9IDApKSwgXykgdHJ5IHtcbiAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XG4gICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xuICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcbiAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XG4gICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XG4gICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XG4gICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cbiAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xuICB9XG59XG5cbmV4cG9ydCB2YXIgX19jcmVhdGVCaW5kaW5nID0gT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IobSwgayk7XG4gIGlmICghZGVzYyB8fCAoXCJnZXRcIiBpbiBkZXNjID8gIW0uX19lc01vZHVsZSA6IGRlc2Mud3JpdGFibGUgfHwgZGVzYy5jb25maWd1cmFibGUpKSB7XG4gICAgICBkZXNjID0geyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9O1xuICB9XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgZGVzYyk7XG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICBvW2syXSA9IG1ba107XG59KTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBvKSB7XG4gIGZvciAodmFyIHAgaW4gbSkgaWYgKHAgIT09IFwiZGVmYXVsdFwiICYmICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobywgcCkpIF9fY3JlYXRlQmluZGluZyhvLCBtLCBwKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcbiAgdmFyIHMgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgU3ltYm9sLml0ZXJhdG9yLCBtID0gcyAmJiBvW3NdLCBpID0gMDtcbiAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XG4gIGlmIChvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikgcmV0dXJuIHtcbiAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xuICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcbiAgICAgIH1cbiAgfTtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihzID8gXCJPYmplY3QgaXMgbm90IGl0ZXJhYmxlLlwiIDogXCJTeW1ib2wuaXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcbiAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xuICBpZiAoIW0pIHJldHVybiBvO1xuICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcbiAgdHJ5IHtcbiAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xuICB9XG4gIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxuICBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XG4gICAgICB9XG4gICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cbiAgfVxuICByZXR1cm4gYXI7XG59XG5cbi8qKiBAZGVwcmVjYXRlZCAqL1xuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xuICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcbiAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcbiAgcmV0dXJuIGFyO1xufVxuXG4vKiogQGRlcHJlY2F0ZWQgKi9cbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZEFycmF5cygpIHtcbiAgZm9yICh2YXIgcyA9IDAsIGkgPSAwLCBpbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBpbDsgaSsrKSBzICs9IGFyZ3VtZW50c1tpXS5sZW5ndGg7XG4gIGZvciAodmFyIHIgPSBBcnJheShzKSwgayA9IDAsIGkgPSAwOyBpIDwgaWw7IGkrKylcbiAgICAgIGZvciAodmFyIGEgPSBhcmd1bWVudHNbaV0sIGogPSAwLCBqbCA9IGEubGVuZ3RoOyBqIDwgamw7IGorKywgaysrKVxuICAgICAgICAgIHJba10gPSBhW2pdO1xuICByZXR1cm4gcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkQXJyYXkodG8sIGZyb20sIHBhY2spIHtcbiAgaWYgKHBhY2sgfHwgYXJndW1lbnRzLmxlbmd0aCA9PT0gMikgZm9yICh2YXIgaSA9IDAsIGwgPSBmcm9tLmxlbmd0aCwgYXI7IGkgPCBsOyBpKyspIHtcbiAgICAgIGlmIChhciB8fCAhKGkgaW4gZnJvbSkpIHtcbiAgICAgICAgICBpZiAoIWFyKSBhciA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZyb20sIDAsIGkpO1xuICAgICAgICAgIGFyW2ldID0gZnJvbVtpXTtcbiAgICAgIH1cbiAgfVxuICByZXR1cm4gdG8uY29uY2F0KGFyIHx8IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZyb20pKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xuICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XG4gIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XG4gIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XG4gIHJldHVybiBpID0gT2JqZWN0LmNyZWF0ZSgodHlwZW9mIEFzeW5jSXRlcmF0b3IgPT09IFwiZnVuY3Rpb25cIiA/IEFzeW5jSXRlcmF0b3IgOiBPYmplY3QpLnByb3RvdHlwZSksIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiwgYXdhaXRSZXR1cm4pLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XG4gIGZ1bmN0aW9uIGF3YWl0UmV0dXJuKGYpIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBQcm9taXNlLnJlc29sdmUodikudGhlbihmLCByZWplY3QpOyB9OyB9XG4gIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpZiAoZ1tuXSkgeyBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyBpZiAoZikgaVtuXSA9IGYoaVtuXSk7IH0gfVxuICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XG4gIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxuICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XG4gIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cbiAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XG4gIHZhciBpLCBwO1xuICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xuICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBmYWxzZSB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XG4gIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XG4gIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XG4gIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcbiAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxuICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xuICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxuICByZXR1cm4gY29va2VkO1xufTtcblxudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9IE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHYgfSk7XG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcbiAgb1tcImRlZmF1bHRcIl0gPSB2O1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcbiAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcbiAgdmFyIHJlc3VsdCA9IHt9O1xuICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoayAhPT0gXCJkZWZhdWx0XCIgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIF9fY3JlYXRlQmluZGluZyhyZXN1bHQsIG1vZCwgayk7XG4gIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XG4gIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHJlY2VpdmVyLCBzdGF0ZSwga2luZCwgZikge1xuICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBnZXR0ZXJcIik7XG4gIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHJlYWQgcHJpdmF0ZSBtZW1iZXIgZnJvbSBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xuICByZXR1cm4ga2luZCA9PT0gXCJtXCIgPyBmIDoga2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIpIDogZiA/IGYudmFsdWUgOiBzdGF0ZS5nZXQocmVjZWl2ZXIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZFNldChyZWNlaXZlciwgc3RhdGUsIHZhbHVlLCBraW5kLCBmKSB7XG4gIGlmIChraW5kID09PSBcIm1cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgbWV0aG9kIGlzIG5vdCB3cml0YWJsZVwiKTtcbiAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgc2V0dGVyXCIpO1xuICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCB3cml0ZSBwcml2YXRlIG1lbWJlciB0byBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xuICByZXR1cm4gKGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyLCB2YWx1ZSkgOiBmID8gZi52YWx1ZSA9IHZhbHVlIDogc3RhdGUuc2V0KHJlY2VpdmVyLCB2YWx1ZSkpLCB2YWx1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRJbihzdGF0ZSwgcmVjZWl2ZXIpIHtcbiAgaWYgKHJlY2VpdmVyID09PSBudWxsIHx8ICh0eXBlb2YgcmVjZWl2ZXIgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIHJlY2VpdmVyICE9PSBcImZ1bmN0aW9uXCIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHVzZSAnaW4nIG9wZXJhdG9yIG9uIG5vbi1vYmplY3RcIik7XG4gIHJldHVybiB0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyID09PSBzdGF0ZSA6IHN0YXRlLmhhcyhyZWNlaXZlcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2FkZERpc3Bvc2FibGVSZXNvdXJjZShlbnYsIHZhbHVlLCBhc3luYykge1xuICBpZiAodmFsdWUgIT09IG51bGwgJiYgdmFsdWUgIT09IHZvaWQgMCkge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIHZhbHVlICE9PSBcImZ1bmN0aW9uXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJPYmplY3QgZXhwZWN0ZWQuXCIpO1xuICAgIHZhciBkaXNwb3NlLCBpbm5lcjtcbiAgICBpZiAoYXN5bmMpIHtcbiAgICAgIGlmICghU3ltYm9sLmFzeW5jRGlzcG9zZSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0Rpc3Bvc2UgaXMgbm90IGRlZmluZWQuXCIpO1xuICAgICAgZGlzcG9zZSA9IHZhbHVlW1N5bWJvbC5hc3luY0Rpc3Bvc2VdO1xuICAgIH1cbiAgICBpZiAoZGlzcG9zZSA9PT0gdm9pZCAwKSB7XG4gICAgICBpZiAoIVN5bWJvbC5kaXNwb3NlKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmRpc3Bvc2UgaXMgbm90IGRlZmluZWQuXCIpO1xuICAgICAgZGlzcG9zZSA9IHZhbHVlW1N5bWJvbC5kaXNwb3NlXTtcbiAgICAgIGlmIChhc3luYykgaW5uZXIgPSBkaXNwb3NlO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGRpc3Bvc2UgIT09IFwiZnVuY3Rpb25cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk9iamVjdCBub3QgZGlzcG9zYWJsZS5cIik7XG4gICAgaWYgKGlubmVyKSBkaXNwb3NlID0gZnVuY3Rpb24oKSB7IHRyeSB7IGlubmVyLmNhbGwodGhpcyk7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIFByb21pc2UucmVqZWN0KGUpOyB9IH07XG4gICAgZW52LnN0YWNrLnB1c2goeyB2YWx1ZTogdmFsdWUsIGRpc3Bvc2U6IGRpc3Bvc2UsIGFzeW5jOiBhc3luYyB9KTtcbiAgfVxuICBlbHNlIGlmIChhc3luYykge1xuICAgIGVudi5zdGFjay5wdXNoKHsgYXN5bmM6IHRydWUgfSk7XG4gIH1cbiAgcmV0dXJuIHZhbHVlO1xufVxuXG52YXIgX1N1cHByZXNzZWRFcnJvciA9IHR5cGVvZiBTdXBwcmVzc2VkRXJyb3IgPT09IFwiZnVuY3Rpb25cIiA/IFN1cHByZXNzZWRFcnJvciA6IGZ1bmN0aW9uIChlcnJvciwgc3VwcHJlc3NlZCwgbWVzc2FnZSkge1xuICB2YXIgZSA9IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgcmV0dXJuIGUubmFtZSA9IFwiU3VwcHJlc3NlZEVycm9yXCIsIGUuZXJyb3IgPSBlcnJvciwgZS5zdXBwcmVzc2VkID0gc3VwcHJlc3NlZCwgZTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2Rpc3Bvc2VSZXNvdXJjZXMoZW52KSB7XG4gIGZ1bmN0aW9uIGZhaWwoZSkge1xuICAgIGVudi5lcnJvciA9IGVudi5oYXNFcnJvciA/IG5ldyBfU3VwcHJlc3NlZEVycm9yKGUsIGVudi5lcnJvciwgXCJBbiBlcnJvciB3YXMgc3VwcHJlc3NlZCBkdXJpbmcgZGlzcG9zYWwuXCIpIDogZTtcbiAgICBlbnYuaGFzRXJyb3IgPSB0cnVlO1xuICB9XG4gIHZhciByLCBzID0gMDtcbiAgZnVuY3Rpb24gbmV4dCgpIHtcbiAgICB3aGlsZSAociA9IGVudi5zdGFjay5wb3AoKSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKCFyLmFzeW5jICYmIHMgPT09IDEpIHJldHVybiBzID0gMCwgZW52LnN0YWNrLnB1c2gociksIFByb21pc2UucmVzb2x2ZSgpLnRoZW4obmV4dCk7XG4gICAgICAgIGlmIChyLmRpc3Bvc2UpIHtcbiAgICAgICAgICB2YXIgcmVzdWx0ID0gci5kaXNwb3NlLmNhbGwoci52YWx1ZSk7XG4gICAgICAgICAgaWYgKHIuYXN5bmMpIHJldHVybiBzIHw9IDIsIFByb21pc2UucmVzb2x2ZShyZXN1bHQpLnRoZW4obmV4dCwgZnVuY3Rpb24oZSkgeyBmYWlsKGUpOyByZXR1cm4gbmV4dCgpOyB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHMgfD0gMTtcbiAgICAgIH1cbiAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgIGZhaWwoZSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChzID09PSAxKSByZXR1cm4gZW52Lmhhc0Vycm9yID8gUHJvbWlzZS5yZWplY3QoZW52LmVycm9yKSA6IFByb21pc2UucmVzb2x2ZSgpO1xuICAgIGlmIChlbnYuaGFzRXJyb3IpIHRocm93IGVudi5lcnJvcjtcbiAgfVxuICByZXR1cm4gbmV4dCgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19yZXdyaXRlUmVsYXRpdmVJbXBvcnRFeHRlbnNpb24ocGF0aCwgcHJlc2VydmVKc3gpIHtcbiAgaWYgKHR5cGVvZiBwYXRoID09PSBcInN0cmluZ1wiICYmIC9eXFwuXFwuP1xcLy8udGVzdChwYXRoKSkge1xuICAgICAgcmV0dXJuIHBhdGgucmVwbGFjZSgvXFwuKHRzeCkkfCgoPzpcXC5kKT8pKCg/OlxcLlteLi9dKz8pPylcXC4oW2NtXT8pdHMkL2ksIGZ1bmN0aW9uIChtLCB0c3gsIGQsIGV4dCwgY20pIHtcbiAgICAgICAgICByZXR1cm4gdHN4ID8gcHJlc2VydmVKc3ggPyBcIi5qc3hcIiA6IFwiLmpzXCIgOiBkICYmICghZXh0IHx8ICFjbSkgPyBtIDogKGQgKyBleHQgKyBcIi5cIiArIGNtLnRvTG93ZXJDYXNlKCkgKyBcImpzXCIpO1xuICAgICAgfSk7XG4gIH1cbiAgcmV0dXJuIHBhdGg7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgX19leHRlbmRzLFxuICBfX2Fzc2lnbixcbiAgX19yZXN0LFxuICBfX2RlY29yYXRlLFxuICBfX3BhcmFtLFxuICBfX2VzRGVjb3JhdGUsXG4gIF9fcnVuSW5pdGlhbGl6ZXJzLFxuICBfX3Byb3BLZXksXG4gIF9fc2V0RnVuY3Rpb25OYW1lLFxuICBfX21ldGFkYXRhLFxuICBfX2F3YWl0ZXIsXG4gIF9fZ2VuZXJhdG9yLFxuICBfX2NyZWF0ZUJpbmRpbmcsXG4gIF9fZXhwb3J0U3RhcixcbiAgX192YWx1ZXMsXG4gIF9fcmVhZCxcbiAgX19zcHJlYWQsXG4gIF9fc3ByZWFkQXJyYXlzLFxuICBfX3NwcmVhZEFycmF5LFxuICBfX2F3YWl0LFxuICBfX2FzeW5jR2VuZXJhdG9yLFxuICBfX2FzeW5jRGVsZWdhdG9yLFxuICBfX2FzeW5jVmFsdWVzLFxuICBfX21ha2VUZW1wbGF0ZU9iamVjdCxcbiAgX19pbXBvcnRTdGFyLFxuICBfX2ltcG9ydERlZmF1bHQsXG4gIF9fY2xhc3NQcml2YXRlRmllbGRHZXQsXG4gIF9fY2xhc3NQcml2YXRlRmllbGRTZXQsXG4gIF9fY2xhc3NQcml2YXRlRmllbGRJbixcbiAgX19hZGREaXNwb3NhYmxlUmVzb3VyY2UsXG4gIF9fZGlzcG9zZVJlc291cmNlcyxcbiAgX19yZXdyaXRlUmVsYXRpdmVJbXBvcnRFeHRlbnNpb24sXG59O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICogYXMgbWF0ZXJpYWxzIGZyb20gXCJAbHRzL21hdGVyaWFscy9sZWdhY3kvbGVnYWN5LWxhdmFcIjtcclxuZXhwb3J0IHsgbWF0ZXJpYWxzIH07XHJcbmV4cG9ydCBkZWZhdWx0IG1hdGVyaWFscztcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9