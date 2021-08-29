import PrusaSlicer from './prusaslicer';
import Cura from './cura'

export default class SlicerFacotry {
    static getSlicer(gcode) {
        if (!gcode) return null;
        let header = gcode.substring(0,10000);
        if (header.includes('; generated by PrusaSlicer')) {
            return new PrusaSlicer();
        }
        if (header.includes(';Generated with Cura_SteamEngine')) {
            return new Cura();
        }

        return null;
    }
}