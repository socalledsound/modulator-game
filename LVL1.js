const LVL1_SECTION_DATA = {
    //sections, segments
    // 4 sections, each has 
    // xStart yStart
    // xEnd yEnd
    // numPoints
    // color
    // will use that data to generate both top and bottom
    sections : [
        {
            numSegments: 3,  
            col : [210, 0, 220, 190], 
            xStart: 0,
            xEnd: 400,
            yMiddle : 300,
            maxHeight: 400,
            startWidth: 120,
            endWidth: 240   
        }, 
        {
            numSegments: 3,  
            col : [20, 0, 220, 190], 
            xStart: 300,
            xEnd: 900,
            yMiddle :300,
            maxHeight: 400,
            startWidth: 440,
            endWidth: 120   
        }, 
        {
            numSegments: 4,  
            col : [20, 200, 20, 190], 
            xStart: 900,
            xEnd: 1400,
            yMiddle : 300,
            maxHeight: 400,
            startWidth: 120,
            endWidth: 300   
        }, 
        {
            numSegments: 6,  
            col : [220, 200, 220, 190], 
            xStart: 1400,
            xEnd: 2600,
            yMiddle : 400,
            maxHeight: 400,
            startWidth: 300,
            endWidth: 400   
        }

    ]
}
    
        //section 1
        // {
        //     bottom: {
            
        //         segments: [
        //             // each has two points, color, strokeweight
        //             {
        //                 x1 : 0,
        //                 y1 : 400,
        //                 x2 : 50,
        //                 y2 : 400,
        //                 col : [210, 0, 220, 190],
        //                 sw: 2,
        //             },
        //             {
        //                 x1 : 50,
        //                 y1 : 400,
        //                 x2 : 120,
        //                 y2 : 500,
        //                 col : [210, 0, 220, 190],
        //                 sw: 2,
        //             },
    
        //         ]  
        //     },
        //     top: null
            
        // },
        // //section2
        // {
        //     bottom: {
            
        //     segments: [
        //         {
        //             x1 : 120,
        //             y1 : 500,
        //             x2 : 210,
        //             y2 : 300,
        //             col : [20, 0, 220, 210],
        //             sw: 3,
        //         },
        //         {
        //             x1 : 210,
        //             y1 : 300,
        //             x2 : 300,
        //             y2 : 350,
        //             col : [20, 0, 220, 210],
        //             sw: 3,
        //         },
        //     ]},

        //         top: null
        // },
        //  //section3
        // {
        //     bottom: {
            
        //     segments: [
        //         {
        //             x1 : 300,
        //             y1 : 350,
        //             x2 : 450,
        //             y2 : 425,
        //             col : [0, 200, 220, 210],
        //             sw: 3,
        //         },
        //         {
        //             x1 : 450,
        //             y1 : 425,
        //             x2 : 530,
        //             y2 : 450,
        //             col : [0, 200, 220, 210],
        //             sw: 3,
        //         },
        //     ]
        // },
        //     top: null
        // },
        //  //section4
        // {
        //     bottom: {
            
        //     segments: [
        //         {
        //             x1 : 530,
        //             y1 : 450,
        //             x2 : 610,
        //             y2 : 500,
        //             col : [200, 0, 20, 210],
        //             sw: 3,
        //         },
        //         {
        //             x1 : 610,
        //             y1 : 500,
        //             x2 : 750,
        //             y2 : 300,
        //             col : [200, 0, 20, 210],
        //             sw: 3,
        //         },
        //     ]
        // },
        //     top: null
        // }
//     }
//     ]
// }