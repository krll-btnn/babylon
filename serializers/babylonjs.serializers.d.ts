
declare module BABYLON {


    /**
     * Class for generating STL data from a Babylon scene.
     */
    export class STLExport {
        /**
         * Exports the geometry of a Mesh array in .STL file format (ASCII)
         * @param meshes list defines the mesh to serialize
         * @param download triggers the automatic download of the file.
         * @param fileName changes the downloads fileName.
         * @param binary changes the STL to a binary type.
         * @param isLittleEndian toggle for binary type exporter.
         * @param doNotBakeTransform toggle if meshes transforms should be baked or not.
         * @param supportInstancedMeshes toggle to export instanced Meshes. Enabling support for instanced meshes will override doNoBakeTransform as true
         * @param exportIndividualMeshes toggle to export each mesh as an independent mesh. By default, all the meshes are combined into one mesh. This property has no effect when exporting in binary format
         * @returns the STL as UTF8 string
         */
        static CreateSTL(meshes: (Mesh | InstancedMesh)[], download?: boolean, fileName?: string, binary?: boolean, isLittleEndian?: boolean, doNotBakeTransform?: boolean, supportInstancedMeshes?: boolean, exportIndividualMeshes?: boolean): any;
    }






    /** @internal */
    export var __IGLTFExporterExtension: number;
    /**
     * Interface for extending the exporter
     * @internal
     */
    export interface IGLTFExporterExtension {
        /**
         * The name of this extension
         */
        readonly name: string;
        /**
         * Defines whether this extension is enabled
         */
        enabled: boolean;
        /**
         * Defines whether this extension is required
         */
        required: boolean;
    }




    /**
     * @internal
     */
    export class _GLTFUtilities {
        /**
         * Creates a buffer view based on the supplied arguments
         * @param bufferIndex index value of the specified buffer
         * @param byteOffset byte offset value
         * @param byteLength byte length of the bufferView
         * @param byteStride byte distance between conequential elements
         * @param name name of the buffer view
         * @returns bufferView for glTF
         */
        static _CreateBufferView(bufferIndex: number, byteOffset: number, byteLength: number, byteStride?: number, name?: string): BABYLON.GLTF2.IBufferView;
        /**
         * Creates an accessor based on the supplied arguments
         * @param bufferviewIndex The index of the bufferview referenced by this accessor
         * @param name The name of the accessor
         * @param type The type of the accessor
         * @param componentType The datatype of components in the attribute
         * @param count The number of attributes referenced by this accessor
         * @param byteOffset The offset relative to the start of the bufferView in bytes
         * @param min Minimum value of each component in this attribute
         * @param max Maximum value of each component in this attribute
         * @returns accessor for glTF
         */
        static _CreateAccessor(bufferviewIndex: number, name: string, type: BABYLON.GLTF2.AccessorType, componentType: BABYLON.GLTF2.AccessorComponentType, count: number, byteOffset: Nullable<number>, min: Nullable<number[]>, max: Nullable<number[]>): BABYLON.GLTF2.IAccessor;
        /**
         * Calculates the minimum and maximum values of an array of position floats
         * @param positions Positions array of a mesh
         * @param vertexStart Starting vertex offset to calculate min and max values
         * @param vertexCount Number of vertices to check for min and max values
         * @returns min number array and max number array
         */
        static _CalculateMinMaxPositions(positions: FloatArray, vertexStart: number, vertexCount: number): {
            min: number[];
            max: number[];
        };
        static _NormalizeTangentFromRef(tangent: Vector4 | Vector3): void;
        static _GetDataAccessorElementCount(accessorType: BABYLON.GLTF2.AccessorType): 1 | 3 | 2 | 4 | 9 | 16;
    }


    /**
     * Holds a collection of exporter options and parameters
     */
    export interface IExportOptions {
        /**
         * Function which indicates whether a babylon node should be exported or not
         * @param node source Babylon node. It is used to check whether it should be exported to glTF or not
         * @returns boolean, which indicates whether the node should be exported (true) or not (false)
         */
        shouldExportNode?(node: Node): boolean;
        /**
         * Function which indicates whether an animation on the scene should be exported or not
         * @param animation source animation
         * @returns boolean, which indicates whether the animation should be exported (true) or not (false)
         */
        shouldExportAnimation?(animation: Animation): boolean;
        /**
         * Function used to extract the part of node's metadata that will be exported into glTF node extras
         * @param metadata source metadata to read from
         * @returns the data to store to glTF node extras
         */
        metadataSelector?(metadata: any): any;
        /**
         * The sample rate to bake animation curves. Defaults to 1 / 60.
         */
        animationSampleRate?: number;
        /**
         * Begin serialization without waiting for the scene to be ready. Defaults to false.
         */
        exportWithoutWaitingForScene?: boolean;
        /**
         * Indicates if unused vertex uv attributes should be included in export. Defaults to false.
         */
        exportUnusedUVs?: boolean;
        /**
         * Remove no-op root nodes when possible. Defaults to true.
         */
        removeNoopRootNodes?: boolean;
        /**
         * Indicates if coordinate system swapping root nodes should be included in export. Defaults to false.
         * @deprecated Please use removeNoopRootNodes instead
         */
        includeCoordinateSystemConversionNodes?: boolean;
    }
    /**
     * Class for generating glTF data from a Babylon scene.
     */
    export class GLTF2Export {
        /**
         * Exports the geometry of the scene to .gltf file format asynchronously
         * @param scene Babylon scene with scene hierarchy information
         * @param filePrefix File prefix to use when generating the glTF file
         * @param options Exporter options
         * @returns Returns an object with a .gltf file and associates texture names
         * as keys and their data and paths as values
         */
        static GLTFAsync(scene: Scene, filePrefix: string, options?: IExportOptions): Promise<GLTFData>;
        private static _PreExportAsync;
        private static _PostExportAsync;
        /**
         * Exports the geometry of the scene to .glb file format asychronously
         * @param scene Babylon scene with scene hierarchy information
         * @param filePrefix File prefix to use when generating glb file
         * @param options Exporter options
         * @returns Returns an object with a .glb filename as key and data as value
         */
        static GLBAsync(scene: Scene, filePrefix: string, options?: IExportOptions): Promise<GLTFData>;
    }


    /**
     * Utility methods for working with glTF material conversion properties.  This class should only be used internally
     * @internal
     */
    export class _GLTFMaterialExporter {
        /**
         * Represents the dielectric specular values for R, G and B
         */
        private static readonly _DielectricSpecular;
        /**
         * Allows the maximum specular power to be defined for material calculations
         */
        private static readonly _MaxSpecularPower;
        /**
         * Mapping to store textures
         */
        private _textureMap;
        private _internalTextureToImage;
        /**
         * Numeric tolerance value
         */
        private static readonly _Epsilon;
        /**
         * Reference to the glTF Exporter
         */
        private _exporter;
        constructor(exporter: _Exporter);
        /**
         * Specifies if two colors are approximately equal in value
         * @param color1 first color to compare to
         * @param color2 second color to compare to
         * @param epsilon threshold value
         * @returns boolean specifying if the colors are approximately equal in value
         */
        private static _FuzzyEquals;
        /**
         * Gets the materials from a Babylon scene and converts them to glTF materials
         * @param exportMaterials
         * @param mimeType texture mime type
         * @param hasTextureCoords specifies if texture coordinates are present on the material
         * @returns promise that resolves after all materials have been converted
         */
        _convertMaterialsToGLTFAsync(exportMaterials: Set<Material>, mimeType: BABYLON.GLTF2.ImageMimeType, hasTextureCoords: boolean): Promise<void>;
        /**
         * Makes a copy of the glTF material without the texture parameters
         * @param originalMaterial original glTF material
         * @returns glTF material without texture parameters
         */
        _stripTexturesFromMaterial(originalMaterial: BABYLON.GLTF2.IMaterial): BABYLON.GLTF2.IMaterial;
        /**
         * Specifies if the material has any texture parameters present
         * @param material glTF Material
         * @returns boolean specifying if texture parameters are present
         */
        _hasTexturesPresent(material: BABYLON.GLTF2.IMaterial): boolean;
        _getTextureInfo(babylonTexture: Nullable<BaseTexture>): Nullable<BABYLON.GLTF2.ITextureInfo>;
        /**
         * Converts a Babylon StandardMaterial to a glTF Metallic Roughness Material
         * @param babylonStandardMaterial
         * @returns glTF Metallic Roughness Material representation
         */
        _convertToGLTFPBRMetallicRoughness(babylonStandardMaterial: StandardMaterial): BABYLON.GLTF2.IMaterialPbrMetallicRoughness;
        /**
         * Computes the metallic factor
         * @param diffuse diffused value
         * @param specular specular value
         * @param oneMinusSpecularStrength one minus the specular strength
         * @returns metallic value
         */
        static _SolveMetallic(diffuse: number, specular: number, oneMinusSpecularStrength: number): number;
        /**
         * Sets the glTF alpha mode to a glTF material from the Babylon Material
         * @param glTFMaterial glTF material
         * @param babylonMaterial Babylon material
         */
        private static _SetAlphaMode;
        /**
         * Converts a Babylon Standard Material to a glTF Material
         * @param babylonStandardMaterial BJS Standard Material
         * @param mimeType mime type to use for the textures
         * @param hasTextureCoords specifies if texture coordinates are present on the submesh to determine if textures should be applied
         * @returns promise, resolved with the material
         */
        _convertStandardMaterialAsync(babylonStandardMaterial: StandardMaterial, mimeType: BABYLON.GLTF2.ImageMimeType, hasTextureCoords: boolean): Promise<BABYLON.GLTF2.IMaterial>;
        private _finishMaterial;
        /**
         * Converts an image typed array buffer to a base64 image
         * @param buffer typed array buffer
         * @param width width of the image
         * @param height height of the image
         * @param mimeType mimetype of the image
         * @returns base64 image string
         */
        private _getImageDataAsync;
        /**
         * Generates a white texture based on the specified width and height
         * @param width width of the texture in pixels
         * @param height height of the texture in pixels
         * @param scene babylonjs scene
         * @returns white texture
         */
        private _createWhiteTexture;
        /**
         * Resizes the two source textures to the same dimensions.  If a texture is null, a default white texture is generated.  If both textures are null, returns null
         * @param texture1 first texture to resize
         * @param texture2 second texture to resize
         * @param scene babylonjs scene
         * @returns resized textures or null
         */
        private _resizeTexturesToSameDimensions;
        /**
         * Converts an array of pixels to a Float32Array
         * Throws an error if the pixel format is not supported
         * @param pixels - array buffer containing pixel values
         * @returns Float32 of pixels
         */
        private _convertPixelArrayToFloat32;
        /**
         * Convert Specular Glossiness Textures to Metallic Roughness
         * See link below for info on the material conversions from PBR Metallic/Roughness and Specular/Glossiness
         * @link https://github.com/KhronosGroup/glTF/blob/main/extensions/2.0/Archived/KHR_materials_pbrSpecularGlossiness/examples/convert-between-workflows-bjs/js/babylon.pbrUtilities.js
         * @param diffuseTexture texture used to store diffuse information
         * @param specularGlossinessTexture texture used to store specular and glossiness information
         * @param factors specular glossiness material factors
         * @param mimeType the mime type to use for the texture
         * @returns pbr metallic roughness interface or null
         */
        private _convertSpecularGlossinessTexturesToMetallicRoughnessAsync;
        /**
         * Converts specular glossiness material properties to metallic roughness
         * @param specularGlossiness interface with specular glossiness material properties
         * @returns interface with metallic roughness material properties
         */
        private _convertSpecularGlossinessToMetallicRoughness;
        /**
         * Calculates the surface reflectance, independent of lighting conditions
         * @param color Color source to calculate brightness from
         * @returns number representing the perceived brightness, or zero if color is undefined
         */
        private _getPerceivedBrightness;
        /**
         * Returns the maximum color component value
         * @param color
         * @returns maximum color component value, or zero if color is null or undefined
         */
        private _getMaxComponent;
        /**
         * Convert a PBRMaterial (Metallic/Roughness) to Metallic Roughness factors
         * @param babylonPBRMaterial BJS PBR Metallic Roughness Material
         * @param mimeType mime type to use for the textures
         * @param glTFPbrMetallicRoughness glTF PBR Metallic Roughness interface
         * @param hasTextureCoords specifies if texture coordinates are present on the submesh to determine if textures should be applied
         * @returns glTF PBR Metallic Roughness factors
         */
        private _convertMetalRoughFactorsToMetallicRoughnessAsync;
        private _getTextureSampler;
        private _getGLTFTextureWrapMode;
        /**
         * Convert a PBRMaterial (Specular/Glossiness) to Metallic Roughness factors
         * @param babylonPBRMaterial BJS PBR Metallic Roughness Material
         * @param mimeType mime type to use for the textures
         * @param pbrMetallicRoughness glTF PBR Metallic Roughness interface
         * @param hasTextureCoords specifies if texture coordinates are present on the submesh to determine if textures should be applied
         * @returns glTF PBR Metallic Roughness factors
         */
        private _convertSpecGlossFactorsToMetallicRoughnessAsync;
        /**
         * Converts a Babylon PBR Base Material to a glTF Material
         * @param babylonPBRMaterial BJS PBR Base Material
         * @param mimeType mime type to use for the textures
         * @param hasTextureCoords specifies if texture coordinates are present on the submesh to determine if textures should be applied
         * @returns async glTF Material representation
         */
        _convertPBRMaterialAsync(babylonPBRMaterial: PBRBaseMaterial, mimeType: BABYLON.GLTF2.ImageMimeType, hasTextureCoords: boolean): Promise<BABYLON.GLTF2.IMaterial>;
        private _setMetallicRoughnessPbrMaterial;
        private _getPixelsFromTexture;
        /**
         * Extracts a texture from a Babylon texture into file data and glTF data
         * @param babylonTexture Babylon texture to extract
         * @param mimeType Mime Type of the babylonTexture
         * @returns glTF texture info, or null if the texture format is not supported
         */
        _exportTextureAsync(babylonTexture: BaseTexture, mimeType: BABYLON.GLTF2.ImageMimeType): Promise<Nullable<BABYLON.GLTF2.ITextureInfo>>;
        _exportTextureInfoAsync(babylonTexture: BaseTexture, mimeType: BABYLON.GLTF2.ImageMimeType): Promise<Nullable<BABYLON.GLTF2.ITextureInfo>>;
        private _exportImage;
        private _exportTextureInfo;
        private _exportTextureSampler;
    }


    /** @internal */
    export var __IGLTFExporterExtensionV2: number;
    /**
     * Interface for a glTF exporter extension
     * @internal
     */
    export interface IGLTFExporterExtensionV2 extends IGLTFExporterExtension, IDisposable {
        /**
         * Define this method to modify the default behavior before exporting a texture
         * @param context The context when loading the asset
         * @param babylonTexture The Babylon.js texture
         * @param mimeType The mime-type of the generated image
         * @returns A promise that resolves with the exported texture
         */
        preExportTextureAsync?(context: string, babylonTexture: Nullable<Texture>, mimeType: BABYLON.GLTF2.ImageMimeType): Promise<Nullable<Texture>>;
        /**
         * Define this method to get notified when a texture info is created
         * @param context The context when loading the asset
         * @param textureInfo The glTF texture info
         * @param babylonTexture The Babylon.js texture
         */
        postExportTexture?(context: string, textureInfo: BABYLON.GLTF2.ITextureInfo, babylonTexture: BaseTexture): void;
        /**
         * Define this method to modify the default behavior when exporting texture info
         * @param context The context when loading the asset
         * @param meshPrimitive glTF mesh primitive
         * @param babylonSubMesh Babylon submesh
         * @param binaryWriter glTF serializer binary writer instance
         * @returns nullable BABYLON.GLTF2.IMeshPrimitive promise
         */
        postExportMeshPrimitiveAsync?(context: string, meshPrimitive: Nullable<BABYLON.GLTF2.IMeshPrimitive>, babylonSubMesh: SubMesh, binaryWriter: _BinaryWriter): Promise<BABYLON.GLTF2.IMeshPrimitive>;
        /**
         * Define this method to modify the default behavior when exporting a node
         * @param context The context when exporting the node
         * @param node glTF node
         * @param babylonNode BabylonJS node
         * @returns nullable BABYLON.GLTF2.INode promise
         */
        postExportNodeAsync?(context: string, node: Nullable<BABYLON.GLTF2.INode>, babylonNode: Node, nodeMap: {
            [key: number]: number;
        }, binaryWriter: _BinaryWriter): Promise<Nullable<BABYLON.GLTF2.INode>>;
        /**
         * Define this method to modify the default behavior when exporting a material
         * @param material glTF material
         * @param babylonMaterial BabylonJS material
         * @returns nullable BABYLON.GLTF2.IMaterial promise
         */
        postExportMaterialAsync?(context: string, node: Nullable<BABYLON.GLTF2.IMaterial>, babylonMaterial: Material): Promise<BABYLON.GLTF2.IMaterial>;
        /**
         * Define this method to return additional textures to export from a material
         * @param material glTF material
         * @param babylonMaterial BabylonJS material
         * @returns List of textures
         */
        postExportMaterialAdditionalTextures?(context: string, node: BABYLON.GLTF2.IMaterial, babylonMaterial: Material): BaseTexture[];
        /** Gets a boolean indicating that this extension was used */
        wasUsed: boolean;
        /** Gets a boolean indicating that this extension is required for the file to work */
        required: boolean;
        /**
         * Called after the exporter state changes to EXPORTING
         */
        onExporting?(): void;
    }


    /**
     * Converts Babylon Scene into glTF 2.0.
     * @internal
     */
    export class _Exporter {
        /**
         * Stores the glTF to export
         */
        _glTF: BABYLON.GLTF2.IGLTF;
        /**
         * Stores all generated buffer views, which represents views into the main glTF buffer data
         */
        _bufferViews: BABYLON.GLTF2.IBufferView[];
        /**
         * Stores all the generated accessors, which is used for accessing the data within the buffer views in glTF
         */
        _accessors: BABYLON.GLTF2.IAccessor[];
        /**
         * Stores all the generated nodes, which contains transform and/or mesh information per node
         */
        _nodes: BABYLON.GLTF2.INode[];
        /**
         * Stores all the generated glTF scenes, which stores multiple node hierarchies
         */
        private _scenes;
        /**
         * Stores all the generated glTF cameras
         */
        private _cameras;
        /**
         * Stores all the generated mesh information, each containing a set of primitives to render in glTF
         */
        private _meshes;
        /**
         * Stores all the generated material information, which represents the appearance of each primitive
         */
        _materials: BABYLON.GLTF2.IMaterial[];
        _materialMap: {
            [materialID: number]: number;
        };
        /**
         * Stores all the generated texture information, which is referenced by glTF materials
         */
        _textures: BABYLON.GLTF2.ITexture[];
        /**
         * Stores all the generated image information, which is referenced by glTF textures
         */
        _images: BABYLON.GLTF2.IImage[];
        /**
         * Stores all the texture samplers
         */
        _samplers: BABYLON.GLTF2.ISampler[];
        /**
         * Stores all the generated glTF skins
         */
        _skins: BABYLON.GLTF2.ISkin[];
        /**
         * Stores all the generated animation samplers, which is referenced by glTF animations
         */
        /**
         * Stores the animations for glTF models
         */
        private _animations;
        /**
         * Stores the total amount of bytes stored in the glTF buffer
         */
        private _totalByteLength;
        /**
         * Stores a reference to the Babylon scene containing the source geometry and material information
         */
        _babylonScene: Scene;
        /**
         * Stores a map of the image data, where the key is the file name and the value
         * is the image data
         */
        _imageData: {
            [fileName: string]: {
                data: ArrayBuffer;
                mimeType: BABYLON.GLTF2.ImageMimeType;
            };
        };
        private _orderedImageData;
        /**
         * Stores a map of the unique id of a node to its index in the node array
         */
        private _nodeMap;
        /**
         * Baked animation sample rate
         */
        private _animationSampleRate;
        private _options;
        private _localEngine;
        _glTFMaterialExporter: _GLTFMaterialExporter;
        private _extensions;
        private static _ExtensionNames;
        private static _ExtensionFactories;
        private _applyExtension;
        private _applyExtensions;
        _extensionsPreExportTextureAsync(context: string, babylonTexture: Nullable<Texture>, mimeType: BABYLON.GLTF2.ImageMimeType): Promise<Nullable<BaseTexture>>;
        _extensionsPostExportMeshPrimitiveAsync(context: string, meshPrimitive: BABYLON.GLTF2.IMeshPrimitive, babylonSubMesh: SubMesh, binaryWriter: _BinaryWriter): Promise<Nullable<BABYLON.GLTF2.IMeshPrimitive>>;
        _extensionsPostExportNodeAsync(context: string, node: Nullable<BABYLON.GLTF2.INode>, babylonNode: Node, nodeMap: {
            [key: number]: number;
        }, binaryWriter: _BinaryWriter): Promise<Nullable<BABYLON.GLTF2.INode>>;
        _extensionsPostExportMaterialAsync(context: string, material: Nullable<BABYLON.GLTF2.IMaterial>, babylonMaterial: Material): Promise<Nullable<BABYLON.GLTF2.IMaterial>>;
        _extensionsPostExportMaterialAdditionalTextures(context: string, material: BABYLON.GLTF2.IMaterial, babylonMaterial: Material): BaseTexture[];
        _extensionsPostExportTextures(context: string, textureInfo: BABYLON.GLTF2.ITextureInfo, babylonTexture: BaseTexture): void;
        private _forEachExtensions;
        private _extensionsOnExporting;
        /**
         * Load glTF serializer extensions
         */
        private _loadExtensions;
        /**
         * Creates a glTF Exporter instance, which can accept optional exporter options
         * @param babylonScene Babylon scene object
         * @param options Options to modify the behavior of the exporter
         */
        constructor(babylonScene?: Nullable<Scene>, options?: IExportOptions);
        dispose(): void;
        get options(): IExportOptions;
        /**
         * Registers a glTF exporter extension
         * @param name Name of the extension to export
         * @param factory The factory function that creates the exporter extension
         */
        static RegisterExtension(name: string, factory: (exporter: _Exporter) => IGLTFExporterExtensionV2): void;
        /**
         * Un-registers an exporter extension
         * @param name The name fo the exporter extension
         * @returns A boolean indicating whether the extension has been un-registered
         */
        static UnregisterExtension(name: string): boolean;
        private _reorderIndicesBasedOnPrimitiveMode;
        /**
         * Reorders the vertex attribute data based on the primitive mode.  This is necessary when indices are not available and the winding order is
         * clock-wise during export to glTF
         * @param submesh BabylonJS submesh
         * @param primitiveMode Primitive mode of the mesh
         * @param vertexBufferKind The type of vertex attribute
         * @param meshAttributeArray The vertex attribute data
         * @param byteOffset The offset to the binary data
         * @param binaryWriter The binary data for the glTF file
         */
        private _reorderVertexAttributeDataBasedOnPrimitiveMode;
        /**
         * Reorders the vertex attributes in the correct triangle mode order .  This is necessary when indices are not available and the winding order is
         * clock-wise during export to glTF
         * @param submesh BabylonJS submesh
         * @param vertexBufferKind The type of vertex attribute
         * @param meshAttributeArray The vertex attribute data
         * @param byteOffset The offset to the binary data
         * @param binaryWriter The binary data for the glTF file
         */
        private _reorderTriangleFillMode;
        /**
         * Reorders the vertex attributes in the correct triangle strip order.  This is necessary when indices are not available and the winding order is
         * clock-wise during export to glTF
         * @param submesh BabylonJS submesh
         * @param vertexBufferKind The type of vertex attribute
         * @param meshAttributeArray The vertex attribute data
         * @param byteOffset The offset to the binary data
         * @param binaryWriter The binary data for the glTF file
         */
        private _reorderTriangleStripDrawMode;
        /**
         * Reorders the vertex attributes in the correct triangle fan order.  This is necessary when indices are not available and the winding order is
         * clock-wise during export to glTF
         * @param submesh BabylonJS submesh
         * @param vertexBufferKind The type of vertex attribute
         * @param meshAttributeArray The vertex attribute data
         * @param byteOffset The offset to the binary data
         * @param binaryWriter The binary data for the glTF file
         */
        private _reorderTriangleFanMode;
        /**
         * Writes the vertex attribute data to binary
         * @param vertices The vertices to write to the binary writer
         * @param byteOffset The offset into the binary writer to overwrite binary data
         * @param vertexAttributeKind The vertex attribute type
         * @param binaryWriter The writer containing the binary data
         */
        private _writeVertexAttributeData;
        /**
         * Writes mesh attribute data to a data buffer
         * Returns the bytelength of the data
         * @param vertexBufferKind Indicates what kind of vertex data is being passed in
         * @param attributeComponentKind
         * @param meshAttributeArray Array containing the attribute data
         * @param stride Specifies the space between data
         * @param binaryWriter The buffer to write the binary data to
         * @param babylonTransformNode
         */
        _writeAttributeData(vertexBufferKind: string, attributeComponentKind: BABYLON.GLTF2.AccessorComponentType, meshAttributeArray: FloatArray, stride: number, binaryWriter: _BinaryWriter, babylonTransformNode: TransformNode): void;
        private _createMorphTargetBufferViewKind;
        /**
         * Generates glTF json data
         * @param shouldUseGlb Indicates whether the json should be written for a glb file
         * @param glTFPrefix Text to use when prefixing a glTF file
         * @param prettyPrint Indicates whether the json file should be pretty printed (true) or not (false)
         * @returns json data as string
         */
        private _generateJSON;
        /**
         * Generates data for .gltf and .bin files based on the glTF prefix string
         * @param glTFPrefix Text to use when prefixing a glTF file
         * @param dispose Dispose the exporter
         * @returns GLTFData with glTF file data
         */
        _generateGLTFAsync(glTFPrefix: string, dispose?: boolean): Promise<GLTFData>;
        /**
         * Creates a binary buffer for glTF
         * @returns array buffer for binary data
         */
        private _generateBinaryAsync;
        /**
         * Pads the number to a multiple of 4
         * @param num number to pad
         * @returns padded number
         */
        private _getPadding;
        /**
         * @internal
         */
        _generateGLBAsync(glTFPrefix: string, dispose?: boolean): Promise<GLTFData>;
        /**
         * Sets the TRS for each node
         * @param node glTF Node for storing the transformation data
         * @param babylonTransformNode Babylon mesh used as the source for the transformation data
         */
        private _setNodeTransformation;
        private _setCameraTransformation;
        private _getVertexBufferFromMesh;
        /**
         * Creates a bufferview based on the vertices type for the Babylon mesh
         * @param kind Indicates the type of vertices data
         * @param attributeComponentKind Indicates the numerical type used to store the data
         * @param babylonTransformNode The Babylon mesh to get the vertices data from
         * @param binaryWriter The buffer to write the bufferview data to
         * @param byteStride
         */
        private _createBufferViewKind;
        /**
         * The primitive mode of the Babylon mesh
         * @param babylonMesh The BabylonJS mesh
         * @returns Unsigned integer of the primitive mode or null
         */
        private _getMeshPrimitiveMode;
        /**
         * Sets the primitive mode of the glTF mesh primitive
         * @param meshPrimitive glTF mesh primitive
         * @param primitiveMode The primitive mode
         */
        private _setPrimitiveMode;
        /**
         * Sets the vertex attribute accessor based of the glTF mesh primitive
         * @param meshPrimitive glTF mesh primitive
         * @param attributeKind vertex attribute
         */
        private _setAttributeKind;
        /**
         * Sets data for the primitive attributes of each submesh
         * @param mesh glTF Mesh object to store the primitive attribute information
         * @param babylonTransformNode Babylon mesh to get the primitive attribute data from
         * @param binaryWriter Buffer to write the attribute data to
         * @returns promise that resolves when done setting the primitive attributes
         */
        private _setPrimitiveAttributesAsync;
        /**
         * Creates a glTF scene based on the array of meshes
         * Returns the total byte offset
         * @param binaryWriter Buffer to write binary data to
         * @returns a promise that resolves when done
         */
        private _createSceneAsync;
        /**
         * Getting the nodes and materials that would be exported.
         * @param nodes Babylon transform nodes
         * @returns Set of materials which would be exported.
         */
        private _getExportNodes;
        /**
         * Creates a mapping of Node unique id to node index and handles animations
         * @param nodes Babylon transform nodes
         * @param binaryWriter Buffer to write binary data to
         * @returns Node mapping of unique id to index
         */
        private _createNodeMapAndAnimationsAsync;
        /**
         * Creates a glTF node from a Babylon mesh
         * @param babylonNode Source Babylon mesh
         * @param binaryWriter Buffer for storing geometry data
         * @returns glTF node
         */
        private _createNodeAsync;
        /**
         * Creates a glTF skin from a Babylon skeleton
         * @param nodeMap Babylon transform nodes
         * @param binaryWriter Buffer to write binary data to
         * @returns Node mapping of unique id to index
         */
        private _createSkinsAsync;
    }
    /**
     * @internal
     *
     * Stores glTF binary data.  If the array buffer byte length is exceeded, it doubles in size dynamically
     */
    export class _BinaryWriter {
        /**
         * Array buffer which stores all binary data
         */
        private _arrayBuffer;
        /**
         * View of the array buffer
         */
        private _dataView;
        /**
         * byte offset of data in array buffer
         */
        private _byteOffset;
        /**
         * Initialize binary writer with an initial byte length
         * @param byteLength Initial byte length of the array buffer
         */
        constructor(byteLength: number);
        /**
         * Resize the array buffer to the specified byte length
         * @param byteLength The new byte length
         * @returns The resized array buffer
         */
        private _resizeBuffer;
        /**
         * Get an array buffer with the length of the byte offset
         * @returns ArrayBuffer resized to the byte offset
         */
        getArrayBuffer(): ArrayBuffer;
        /**
         * Get the byte offset of the array buffer
         * @returns byte offset
         */
        getByteOffset(): number;
        /**
         * Stores an UInt8 in the array buffer
         * @param entry
         * @param byteOffset If defined, specifies where to set the value as an offset.
         */
        setUInt8(entry: number, byteOffset?: number): void;
        /**
         * Stores an UInt16 in the array buffer
         * @param entry
         * @param byteOffset If defined, specifies where to set the value as an offset.
         */
        setUInt16(entry: number, byteOffset?: number): void;
        /**
         * Gets an UInt32 in the array buffer
         * @param byteOffset If defined, specifies where to set the value as an offset.
         * @returns entry
         */
        getUInt32(byteOffset: number): number;
        getVector3Float32FromRef(vector3: Vector3, byteOffset: number): void;
        setVector3Float32FromRef(vector3: Vector3, byteOffset: number): void;
        getVector4Float32FromRef(vector4: Vector4, byteOffset: number): void;
        setVector4Float32FromRef(vector4: Vector4, byteOffset: number): void;
        /**
         * Stores a Float32 in the array buffer
         * @param entry
         * @param byteOffset
         */
        setFloat32(entry: number, byteOffset?: number): void;
        /**
         * Stores an UInt32 in the array buffer
         * @param entry
         * @param byteOffset If defined, specifies where to set the value as an offset.
         */
        setUInt32(entry: number, byteOffset?: number): void;
        /**
         * Stores an Int16 in the array buffer
         * @param entry
         * @param byteOffset If defined, specifies where to set the value as an offset.
         */
        setInt16(entry: number, byteOffset?: number): void;
        /**
         * Stores a byte in the array buffer
         * @param entry
         * @param byteOffset If defined, specifies where to set the value as an offset.
         */
        setByte(entry: number, byteOffset?: number): void;
    }


    /**
     * Class for holding and downloading glTF file data
     */
    export class GLTFData {
        /**
         * Object which contains the file name as the key and its data as the value
         */
        glTFFiles: {
            [fileName: string]: string | Blob;
        };
        /**
         * Initializes the glTF file object
         */
        constructor();
        /**
         * Downloads the glTF data as files based on their names and data
         */
        downloadFiles(): void;
    }


    /**
     * @internal
     * Interface to store animation data.
     */
    export interface _IAnimationData {
        /**
         * Keyframe data.
         */
        inputs: number[];
        /**
         * Value data.
         */
        outputs: number[][];
        /**
         * Animation interpolation data.
         */
        samplerInterpolation: BABYLON.GLTF2.AnimationSamplerInterpolation;
        /**
         * Minimum keyframe value.
         */
        inputsMin: number;
        /**
         * Maximum keyframe value.
         */
        inputsMax: number;
    }
    /**
     * @internal
     */
    export interface _IAnimationInfo {
        /**
         * The target channel for the animation
         */
        animationChannelTargetPath: BABYLON.GLTF2.AnimationChannelTargetPath;
        /**
         * The glTF accessor type for the data.
         */
        dataAccessorType: BABYLON.GLTF2.AccessorType.VEC3 | BABYLON.GLTF2.AccessorType.VEC4 | BABYLON.GLTF2.AccessorType.SCALAR;
        /**
         * Specifies if quaternions should be used.
         */
        useQuaternion: boolean;
    }
    /**
     * @internal
     * Utility class for generating glTF animation data from BabylonJS.
     */
    export class _GLTFAnimation {
        /**
         * Determine if a node is transformable - ie has properties it should be part of animation of transformation.
         * @param babylonNode the node to test
         * @returns true if can be animated, false otherwise. False if the parameter is null or undefined.
         */
        private static _IsTransformable;
        /**
         * @ignore
         *
         * Creates glTF channel animation from BabylonJS animation.
         * @param babylonTransformNode - BabylonJS mesh.
         * @param animation - animation.
         * @param animationChannelTargetPath - The target animation channel.
         * @param useQuaternion - Specifies if quaternions are used.
         * @returns nullable IAnimationData
         */
        static _CreateNodeAnimation(babylonTransformNode: Node, animation: Animation, animationChannelTargetPath: BABYLON.GLTF2.AnimationChannelTargetPath, useQuaternion: boolean, animationSampleRate: number): Nullable<_IAnimationData>;
        private static _DeduceAnimationInfo;
        /**
         * @ignore
         * Create node animations from the transform node animations
         * @param babylonNode
         * @param runtimeGLTFAnimation
         * @param idleGLTFAnimations
         * @param nodeMap
         * @param nodes
         * @param binaryWriter
         * @param bufferViews
         * @param accessors
         * @param animationSampleRate
         */
        static _CreateNodeAnimationFromNodeAnimations(babylonNode: Node, runtimeGLTFAnimation: BABYLON.GLTF2.IAnimation, idleGLTFAnimations: BABYLON.GLTF2.IAnimation[], nodeMap: {
            [key: number]: number;
        }, nodes: BABYLON.GLTF2.INode[], binaryWriter: _BinaryWriter, bufferViews: BABYLON.GLTF2.IBufferView[], accessors: BABYLON.GLTF2.IAccessor[], animationSampleRate: number, shouldExportAnimation?: (animation: Animation) => boolean): void;
        /**
         * @ignore
         * Create individual morph animations from the mesh's morph target animation tracks
         * @param babylonNode
         * @param runtimeGLTFAnimation
         * @param idleGLTFAnimations
         * @param nodeMap
         * @param nodes
         * @param binaryWriter
         * @param bufferViews
         * @param accessors
         * @param animationSampleRate
         */
        static _CreateMorphTargetAnimationFromMorphTargetAnimations(babylonNode: Node, runtimeGLTFAnimation: BABYLON.GLTF2.IAnimation, idleGLTFAnimations: BABYLON.GLTF2.IAnimation[], nodeMap: {
            [key: number]: number;
        }, nodes: BABYLON.GLTF2.INode[], binaryWriter: _BinaryWriter, bufferViews: BABYLON.GLTF2.IBufferView[], accessors: BABYLON.GLTF2.IAccessor[], animationSampleRate: number, shouldExportAnimation?: (animation: Animation) => boolean): void;
        /**
         * @internal
         * Create node and morph animations from the animation groups
         * @param babylonScene
         * @param glTFAnimations
         * @param nodeMap
         * @param nodes
         * @param binaryWriter
         * @param bufferViews
         * @param accessors
         * @param animationSampleRate
         */
        static _CreateNodeAndMorphAnimationFromAnimationGroups(babylonScene: Scene, glTFAnimations: BABYLON.GLTF2.IAnimation[], nodeMap: {
            [key: number]: number;
        }, binaryWriter: _BinaryWriter, bufferViews: BABYLON.GLTF2.IBufferView[], accessors: BABYLON.GLTF2.IAccessor[], animationSampleRate: number, shouldExportAnimation?: (animation: Animation) => boolean): void;
        private static _AddAnimation;
        /**
         * Create a baked animation
         * @param babylonTransformNode BabylonJS mesh
         * @param animation BabylonJS animation corresponding to the BabylonJS mesh
         * @param animationChannelTargetPath animation target channel
         * @param minFrame minimum animation frame
         * @param maxFrame maximum animation frame
         * @param fps frames per second of the animation
         * @param sampleRate
         * @param inputs input key frames of the animation
         * @param outputs output key frame data of the animation
         * @param minMaxFrames
         * @param minMaxFrames.min
         * @param minMaxFrames.max
         * @param useQuaternion specifies if quaternions should be used
         */
        private static _CreateBakedAnimation;
        private static _ConvertFactorToVector3OrQuaternion;
        private static _SetInterpolatedValue;
        /**
         * Creates linear animation from the animation key frames
         * @param babylonTransformNode BabylonJS mesh
         * @param animation BabylonJS animation
         * @param animationChannelTargetPath The target animation channel
         * @param inputs Array to store the key frame times
         * @param outputs Array to store the key frame data
         * @param useQuaternion Specifies if quaternions are used in the animation
         */
        private static _CreateLinearOrStepAnimation;
        /**
         * Creates cubic spline animation from the animation key frames
         * @param babylonTransformNode BabylonJS mesh
         * @param animation BabylonJS animation
         * @param animationChannelTargetPath The target animation channel
         * @param inputs Array to store the key frame times
         * @param outputs Array to store the key frame data
         * @param useQuaternion Specifies if quaternions are used in the animation
         */
        private static _CreateCubicSplineAnimation;
        private static _GetBasePositionRotationOrScale;
        /**
         * Adds a key frame value
         * @param keyFrame
         * @param animation
         * @param outputs
         * @param animationChannelTargetPath
         * @param babylonTransformNode
         * @param useQuaternion
         */
        private static _AddKeyframeValue;
        /**
         * @internal
         * Determine the interpolation based on the key frames
         * @param keyFrames
         * @param animationChannelTargetPath
         * @param useQuaternion
         */
        private static _DeduceInterpolation;
        /**
         * Adds an input tangent or output tangent to the output data
         * If an input tangent or output tangent is missing, it uses the zero vector or zero quaternion
         * @param tangentType Specifies which type of tangent to handle (inTangent or outTangent)
         * @param outputs The animation data by keyframe
         * @param animationChannelTargetPath The target animation channel
         * @param interpolation The interpolation type
         * @param keyFrame The key frame with the animation data
         * @param useQuaternion Specifies if quaternions are used
         */
        private static _AddSplineTangent;
        /**
         * Get the minimum and maximum key frames' frame values
         * @param keyFrames animation key frames
         * @returns the minimum and maximum key frame value
         */
        private static _CalculateMinMaxKeyFrames;
    }




    /**
     * @internal
     */
    export class KHR_texture_transform implements IGLTFExporterExtensionV2 {
        /** Name of this extension */
        readonly name = "KHR_texture_transform";
        /** Defines whether this extension is enabled */
        enabled: boolean;
        /** Defines whether this extension is required */
        required: boolean;
        /** Reference to the glTF exporter */
        private _wasUsed;
        constructor();
        dispose(): void;
        /** @internal */
        get wasUsed(): boolean;
        postExportTexture?(context: string, textureInfo: BABYLON.GLTF2.ITextureInfo, babylonTexture: Texture): void;
        preExportTextureAsync(context: string, babylonTexture: Texture): Promise<Nullable<Texture>>;
    }


    /**
     * [Specification](https://github.com/KhronosGroup/glTF/blob/main/extensions/2.0/Khronos/KHR_materials_volume/README.md)
     */
    export class KHR_materials_volume implements IGLTFExporterExtensionV2 {
        /** Name of this extension */
        readonly name = "KHR_materials_volume";
        /** Defines whether this extension is enabled */
        enabled: boolean;
        /** Defines whether this extension is required */
        required: boolean;
        private _exporter;
        private _wasUsed;
        constructor(exporter: _Exporter);
        dispose(): void;
        /** @internal */
        get wasUsed(): boolean;
        /**
         * After exporting a material, deal with additional textures
         * @param context GLTF context of the material
         * @param node exported GLTF node
         * @param babylonMaterial corresponding babylon material
         * @returns array of additional textures to export
         */
        postExportMaterialAdditionalTextures?(context: string, node: BABYLON.GLTF2.IMaterial, babylonMaterial: Material): BaseTexture[];
        private _isExtensionEnabled;
        private _hasTexturesExtension;
        /**
         * After exporting a material
         * @param context GLTF context of the material
         * @param node exported GLTF node
         * @param babylonMaterial corresponding babylon material
         * @returns promise that resolves with the updated node
         */
        postExportMaterialAsync?(context: string, node: BABYLON.GLTF2.IMaterial, babylonMaterial: Material): Promise<BABYLON.GLTF2.IMaterial>;
    }


    /**
     * @internal
     */
    export class KHR_materials_unlit implements IGLTFExporterExtensionV2 {
        /** Name of this extension */
        readonly name = "KHR_materials_unlit";
        /** Defines whether this extension is enabled */
        enabled: boolean;
        /** Defines whether this extension is required */
        required: boolean;
        private _wasUsed;
        constructor();
        /** @internal */
        get wasUsed(): boolean;
        dispose(): void;
        postExportMaterialAsync?(context: string, node: BABYLON.GLTF2.IMaterial, babylonMaterial: Material): Promise<BABYLON.GLTF2.IMaterial>;
    }


    /**
     * [Specification](https://github.com/KhronosGroup/glTF/blob/main/extensions/2.0/Khronos/KHR_materials_transmission/README.md)
     */
    export class KHR_materials_transmission implements IGLTFExporterExtensionV2 {
        /** Name of this extension */
        readonly name = "KHR_materials_transmission";
        /** Defines whether this extension is enabled */
        enabled: boolean;
        /** Defines whether this extension is required */
        required: boolean;
        private _exporter;
        private _wasUsed;
        constructor(exporter: _Exporter);
        /** Dispose */
        dispose(): void;
        /** @internal */
        get wasUsed(): boolean;
        /**
         * After exporting a material, deal with additional textures
         * @param context GLTF context of the material
         * @param node exported GLTF node
         * @param babylonMaterial corresponding babylon material
         * @returns array of additional textures to export
         */
        postExportMaterialAdditionalTextures?(context: string, node: BABYLON.GLTF2.IMaterial, babylonMaterial: Material): BaseTexture[];
        private _isExtensionEnabled;
        private _hasTexturesExtension;
        /**
         * After exporting a material
         * @param context GLTF context of the material
         * @param node exported GLTF node
         * @param babylonMaterial corresponding babylon material
         * @returns true if successful
         */
        postExportMaterialAsync?(context: string, node: BABYLON.GLTF2.IMaterial, babylonMaterial: Material): Promise<BABYLON.GLTF2.IMaterial>;
    }


    /**
     * [Specification](https://github.com/KhronosGroup/glTF/blob/main/extensions/2.0/Khronos/KHR_materials_specular/README.md)
     */
    export class KHR_materials_specular implements IGLTFExporterExtensionV2 {
        /** Name of this extension */
        readonly name = "KHR_materials_specular";
        /** Defines whether this extension is enabled */
        enabled: boolean;
        /** Defines whether this extension is required */
        required: boolean;
        private _exporter;
        private _wasUsed;
        constructor(exporter: _Exporter);
        /** Dispose */
        dispose(): void;
        /** @internal */
        get wasUsed(): boolean;
        /**
         * After exporting a material, deal with the additional textures
         * @param context GLTF context of the material
         * @param node exported GLTF node
         * @param babylonMaterial corresponding babylon material
         * @returns array of additional textures to export
         */
        postExportMaterialAdditionalTextures?(context: string, node: BABYLON.GLTF2.IMaterial, babylonMaterial: Material): BaseTexture[];
        private _isExtensionEnabled;
        private _hasTexturesExtension;
        /**
         * After exporting a material
         * @param context GLTF context of the material
         * @param node exported GLTF node
         * @param babylonMaterial corresponding babylon material
         * @returns promise, resolves with the material
         */
        postExportMaterialAsync?(context: string, node: BABYLON.GLTF2.IMaterial, babylonMaterial: Material): Promise<BABYLON.GLTF2.IMaterial>;
    }


    /**
     * @internal
     */
    export class KHR_materials_sheen implements IGLTFExporterExtensionV2 {
        /** Name of this extension */
        readonly name = "KHR_materials_sheen";
        /** Defines whether this extension is enabled */
        enabled: boolean;
        /** Defines whether this extension is required */
        required: boolean;
        private _wasUsed;
        private _exporter;
        constructor(exporter: _Exporter);
        dispose(): void;
        /** @internal */
        get wasUsed(): boolean;
        postExportMaterialAdditionalTextures(context: string, node: BABYLON.GLTF2.IMaterial, babylonMaterial: Material): BaseTexture[];
        postExportMaterialAsync(context: string, node: BABYLON.GLTF2.IMaterial, babylonMaterial: Material): Promise<BABYLON.GLTF2.IMaterial>;
    }


    /**
     * @internal
     */
    export class KHR_materials_iridescence implements IGLTFExporterExtensionV2 {
        /** Name of this extension */
        readonly name = "KHR_materials_iridescence";
        /** Defines whether this extension is enabled */
        enabled: boolean;
        /** Defines whether this extension is required */
        required: boolean;
        private _exporter;
        private _wasUsed;
        constructor(exporter: _Exporter);
        dispose(): void;
        /** @internal */
        get wasUsed(): boolean;
        postExportMaterialAdditionalTextures?(context: string, node: BABYLON.GLTF2.IMaterial, babylonMaterial: Material): BaseTexture[];
        postExportMaterialAsync?(context: string, node: BABYLON.GLTF2.IMaterial, babylonMaterial: Material): Promise<BABYLON.GLTF2.IMaterial>;
    }


    /**
     * [Specification](https://github.com/KhronosGroup/glTF/blob/main/extensions/2.0/Khronos/KHR_materials_ior/README.md)
     */
    export class KHR_materials_ior implements IGLTFExporterExtensionV2 {
        /** Name of this extension */
        readonly name = "KHR_materials_ior";
        /** Defines whether this extension is enabled */
        enabled: boolean;
        /** Defines whether this extension is required */
        required: boolean;
        private _wasUsed;
        constructor();
        /** Dispose */
        dispose(): void;
        /** @internal */
        get wasUsed(): boolean;
        private _isExtensionEnabled;
        /**
         * After exporting a material
         * @param context GLTF context of the material
         * @param node exported GLTF node
         * @param babylonMaterial corresponding babylon material
         * @returns promise, resolves with the material
         */
        postExportMaterialAsync?(context: string, node: BABYLON.GLTF2.IMaterial, babylonMaterial: Material): Promise<BABYLON.GLTF2.IMaterial>;
    }


    /**
     * [Specification](https://github.com/KhronosGroup/glTF/blob/main/extensions/2.0/Khronos/KHR_materials_emissive_strength/README.md)
     */
    export class KHR_materials_emissive_strength implements IGLTFExporterExtensionV2 {
        /** Name of this extension */
        readonly name = "KHR_materials_emissive_strength";
        /** Defines whether this extension is enabled */
        enabled: boolean;
        /** Defines whether this extension is required */
        required: boolean;
        private _wasUsed;
        /** Dispose */
        dispose(): void;
        /** @internal */
        get wasUsed(): boolean;
        /**
         * After exporting a material
         * @param context GLTF context of the material
         * @param node exported GLTF node
         * @param babylonMaterial corresponding babylon material
         * @returns promise, resolves with the material
         */
        postExportMaterialAsync(context: string, node: BABYLON.GLTF2.IMaterial, babylonMaterial: Material): Promise<BABYLON.GLTF2.IMaterial>;
    }


    /**
     * [Specification](https://github.com/KhronosGroup/glTF/blob/87bd64a7f5e23c84b6aef2e6082069583ed0ddb4/extensions/2.0/Khronos/KHR_materials_dispersion/README.md)
     * @experimental
     */
    export class KHR_materials_dispersion implements IGLTFExporterExtensionV2 {
        /** Name of this extension */
        readonly name = "KHR_materials_dispersion";
        /** Defines whether this extension is enabled */
        enabled: boolean;
        /** Defines whether this extension is required */
        required: boolean;
        private _wasUsed;
        /** Constructor */
        constructor();
        /** Dispose */
        dispose(): void;
        /** @internal */
        get wasUsed(): boolean;
        private _isExtensionEnabled;
        /**
         * After exporting a material
         * @param context GLTF context of the material
         * @param node exported GLTF node
         * @param babylonMaterial corresponding babylon material
         * @returns promise, resolves with the material
         */
        postExportMaterialAsync?(context: string, node: BABYLON.GLTF2.IMaterial, babylonMaterial: Material): Promise<BABYLON.GLTF2.IMaterial>;
    }


    /**
     * [Proposed Specification](https://github.com/KhronosGroup/glTF/pull/1825)
     * !!! Experimental Extension Subject to Changes !!!
     */
    export class KHR_materials_diffuse_transmission implements IGLTFExporterExtensionV2 {
        /** Name of this extension */
        readonly name = "KHR_materials_diffuse_transmission";
        /** Defines whether this extension is enabled */
        enabled: boolean;
        /** Defines whether this extension is required */
        required: boolean;
        private _exporter;
        private _wasUsed;
        constructor(exporter: _Exporter);
        dispose(): void;
        /** @internal */
        get wasUsed(): boolean;
        /**
         * After exporting a material, deal with additional textures
         * @param context GLTF context of the material
         * @param node exported GLTF node
         * @param babylonMaterial corresponding babylon material
         * @returns array of additional textures to export
         */
        postExportMaterialAdditionalTextures?(context: string, node: BABYLON.GLTF2.IMaterial, babylonMaterial: Material): BaseTexture[];
        private _isExtensionEnabled;
        private _hasTexturesExtension;
        /**
         * After exporting a material
         * @param context GLTF context of the material
         * @param node exported GLTF node
         * @param babylonMaterial corresponding babylon material
         * @returns promise that resolves with the updated node
         */
        postExportMaterialAsync?(context: string, node: BABYLON.GLTF2.IMaterial, babylonMaterial: Material): Promise<BABYLON.GLTF2.IMaterial>;
    }


    /**
     * @internal
     */
    export class KHR_materials_clearcoat implements IGLTFExporterExtensionV2 {
        /** Name of this extension */
        readonly name = "KHR_materials_clearcoat";
        /** Defines whether this extension is enabled */
        enabled: boolean;
        /** Defines whether this extension is required */
        required: boolean;
        private _exporter;
        private _wasUsed;
        constructor(exporter: _Exporter);
        dispose(): void;
        /** @internal */
        get wasUsed(): boolean;
        postExportMaterialAdditionalTextures?(context: string, node: BABYLON.GLTF2.IMaterial, babylonMaterial: Material): BaseTexture[];
        postExportMaterialAsync?(context: string, node: BABYLON.GLTF2.IMaterial, babylonMaterial: Material): Promise<BABYLON.GLTF2.IMaterial>;
    }


    /**
     * @internal
     */
    export class KHR_materials_anisotropy implements IGLTFExporterExtensionV2 {
        /** Name of this extension */
        readonly name = "KHR_materials_anisotropy";
        /** Defines whether this extension is enabled */
        enabled: boolean;
        /** Defines whether this extension is required */
        required: boolean;
        private _exporter;
        private _wasUsed;
        constructor(exporter: _Exporter);
        dispose(): void;
        /** @internal */
        get wasUsed(): boolean;
        postExportMaterialAdditionalTextures?(context: string, node: BABYLON.GLTF2.IMaterial, babylonMaterial: Material): BaseTexture[];
        postExportMaterialAsync?(context: string, node: BABYLON.GLTF2.IMaterial, babylonMaterial: Material): Promise<BABYLON.GLTF2.IMaterial>;
    }


    /**
     * [Specification](https://github.com/KhronosGroup/glTF/blob/master/extensions/2.0/Khronos/KHR_lights_punctual/README.md)
     */
    export class KHR_lights_punctual implements IGLTFExporterExtensionV2 {
        /** The name of this extension. */
        readonly name = "KHR_lights_punctual";
        /** Defines whether this extension is enabled. */
        enabled: boolean;
        /** Defines whether this extension is required */
        required: boolean;
        /** Reference to the glTF exporter */
        private _exporter;
        private _lights;
        /**
         * @internal
         */
        constructor(exporter: _Exporter);
        /** @internal */
        dispose(): void;
        /** @internal */
        get wasUsed(): boolean;
        /** @internal */
        onExporting(): void;
        /**
         * Define this method to modify the default behavior when exporting a node
         * @param context The context when exporting the node
         * @param node glTF node
         * @param babylonNode BabylonJS node
         * @param nodeMap Node mapping of unique id to glTF node index
         * @returns nullable BABYLON.GLTF2.INode promise
         */
        postExportNodeAsync(context: string, node: Nullable<BABYLON.GLTF2.INode>, babylonNode: Node, nodeMap: {
            [key: number]: number;
        }): Promise<Nullable<BABYLON.GLTF2.INode>>;
    }


    /**
     * [Specification](https://github.com/KhronosGroup/glTF/blob/main/extensions/2.0/Vendor/EXT_mesh_gpu_instancing/README.md)
     */
    export class EXT_mesh_gpu_instancing implements IGLTFExporterExtensionV2 {
        /** Name of this extension */
        readonly name = "EXT_mesh_gpu_instancing";
        /** Defines whether this extension is enabled */
        enabled: boolean;
        /** Defines whether this extension is required */
        required: boolean;
        private _exporter;
        private _wasUsed;
        constructor(exporter: _Exporter);
        dispose(): void;
        /** @internal */
        get wasUsed(): boolean;
        /**
         * After node is exported
         * @param context the GLTF context when loading the asset
         * @param node the node exported
         * @param babylonNode the corresponding babylon node
         * @param nodeMap map from babylon node id to node index
         * @param binaryWriter binary writer
         * @returns nullable promise, resolves with the node
         */
        postExportNodeAsync(context: string, node: Nullable<BABYLON.GLTF2.INode>, babylonNode: Node, nodeMap: {
            [key: number]: number;
        }, binaryWriter: _BinaryWriter): Promise<Nullable<BABYLON.GLTF2.INode>>;
        private _buildAccessor;
    }


    /**
     * Options for the USDZ export
     */
    export interface IUSDZExportOptions {
        /**
         * URL to load the fflate library from
         */
        fflateUrl?: string;
        /**
         * Include anchoring properties in the USDZ file
         */
        includeAnchoringProperties?: boolean;
        /**
         * Anchoring type (plane by default)
         */
        anchoringType?: string;
        /**
         * Plane anchoring alignment (horizontal by default)
         */
        planeAnchoringAlignment?: string;
        /**
         * Model file name (model.usda by default)
         */
        modelFileName?: string;
        /**
         * Precision to use for number (5 by default)
         */
        precision?: number;
        /**
         * Export the camera (false by default)
         */
        exportCamera?: boolean;
        /**
         * Camera sensor width (35 by default)
         */
        cameraSensorWidth?: number;
    }
    /**
     *
     * @param scene scene to export
     * @param options options to configure the export
     * @param meshPredicate predicate to filter the meshes to export
     * @returns a uint8 array containing the USDZ file
     * #H2G5XW#3 - Simple sphere
     * #H2G5XW#4 - Red sphere
     * #5N3RWK#4 - Boombox
     */
    export function USDZExportAsync(scene: Scene, options: Partial<IUSDZExportOptions>, meshPredicate?: (m: Mesh) => boolean): Promise<Uint8Array>;




    /**
     * Class for generating OBJ data from a Babylon scene.
     */
    export class OBJExport {
        /**
         * Exports the geometry of a Mesh array in .OBJ file format (text)
         * @param meshes defines the list of meshes to serialize
         * @param materials defines if materials should be exported
         * @param matlibname defines the name of the associated mtl file
         * @param globalposition defines if the exported positions are globals or local to the exported mesh
         * @returns the OBJ content
         */
        static OBJ(meshes: Mesh[], materials?: boolean, matlibname?: string, globalposition?: boolean): string;
        /**
         * Exports the material(s) of a mesh in .MTL file format (text)
         * @param mesh defines the mesh to extract the material from
         * @returns the mtl content
         */
        static MTL(mesh: Mesh): string;
    }













}


                