import { LngLat } from "./types";
export declare type ZFXYTile = {
    z: number;
    f: number;
    x: number;
    y: number;
};
export declare function isZFXYTile(tile: any): tile is ZFXYTile;
export declare const ZFXY_1M_ZOOM_BASE: 25;
export declare const ZFXY_ROOT_TILE: ZFXYTile;
export declare function getParent(tile: ZFXYTile): ZFXYTile;
export declare function getChildren(tile?: ZFXYTile): ZFXYTile[];
export declare function parseZFXYString(str: string): ZFXYTile | undefined;
export declare function getLngLat(tile: ZFXYTile): LngLat;
/** Returns the floor of the voxel, in meters */
export declare function getFloor(tile: ZFXYTile): number;
export interface CalculateZFXYInput {
    lat: number;
    lng: number;
    altitude?: number;
    zoom: number;
}
export declare function calculateZFXY(input: CalculateZFXYInput): ZFXYTile;
/**
 * Fix a tile that has out-of-bounds coordinates by:
 * for the x and y coordinates: wrapping the coordinates around.
 * for the f coordinate: limiting to maximum or minimum.
 */
export declare function zfxyWraparound(tile: ZFXYTile): ZFXYTile;