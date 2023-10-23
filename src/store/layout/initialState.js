import { AREACHART, BARCHART, BOXCHART, SCATERCHART } from "../../constant/default";

export const layouts = {
    counts : 4,
    compactionType : 'horizontal',
    layouts : [
        { i: `item-1`, x: 0, y: 0,  w: 1, h: 14, item : 'Bar Chart' ,      data : BARCHART},
        { i: `item-2`, x: 1, y: 0,  w: 1, h: 14, item : 'Area Range Chart', data :  AREACHART},
        { i: `item-3`, x: 2, y: 0,  w: 1, h: 14, item : 'Box Whisker Plot' , data : BOXCHART},
        { i: `item-4`, x: 3, y: 0,  w: 1, h: 14, item : 'Scater Chart' , data : SCATERCHART}
    ]
}
