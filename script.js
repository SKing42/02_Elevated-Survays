TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "class": "Panorama",
  "id": "panorama_3C95BFF9_352E_30BF_41C5_BBCD4835C772",
  "hfovMin": 60,
  "pitch": 0,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_3C95BFF9_352E_30BF_41C5_BBCD4835C772_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 1608,
       "width": 3217,
       "url": "media/panorama_3C95BFF9_352E_30BF_41C5_BBCD4835C772.jpeg"
      }
     ]
    },
    "thumbnailUrl": "media/panorama_3C95BFF9_352E_30BF_41C5_BBCD4835C772_t.jpg"
   }
  ],
  "hfov": 360,
  "label": "PANO0001 Panorama",
  "partial": false,
  "vfov": 180,
  "thumbnailUrl": "media/panorama_3C95BFF9_352E_30BF_41C5_BBCD4835C772_t.jpg",
  "hfovMax": 120,
  "mapLocations": [
   {
    "x": 11564.04,
    "y": 1844.72,
    "map": {
     "class": "Map",
     "height": 19743,
     "width": 14348,
     "id": "map_25014467_3533_F7D3_41B7_DA07754D80D6",
     "initialZoomFactor": 1,
     "fieldOfViewOverlayOutsideOpacity": 0,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "class": "ImageResourceLevel",
        "height": 1600,
        "width": 1162,
        "url": "media/map_25014467_3533_F7D3_41B7_DA07754D80D6.jpeg"
       },
       {
        "class": "ImageResourceLevel",
        "height": 800,
        "grayscale": true,
        "width": 581,
        "url": "media/map_25014467_3533_F7D3_41B7_DA07754D80D6_lq.jpeg"
       }
      ]
     },
     "fieldOfViewOverlayInsideOpacity": 0.4,
     "maximumZoomFactor": 1,
     "fieldOfViewOverlayOutsideColor": "#000000",
     "minimumZoomFactor": 1,
     "label": "Aerial Image 2",
     "overlays": [
      {
       "image": {
        "x": 10764.04,
        "y": 1044.72,
        "class": "HotspotMapOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 129,
           "width": 129,
           "url": "media/map_25014467_3533_F7D3_41B7_DA07754D80D6_HS_0.png"
          }
         ]
        },
        "width": 1600,
        "height": 1600
       },
       "id": "overlay_3AABBA8D_352E_5357_41C3_5BF898FD2403",
       "rollOverDisplay": false,
       "map": {
        "height": 1600,
        "x": 10764.04,
        "offsetY": 0,
        "width": 1600,
        "y": 1044.72,
        "class": "HotspotMapOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 16,
           "width": 16,
           "url": "media/map_25014467_3533_F7D3_41B7_DA07754D80D6_HS_0_map.gif"
          }
         ]
        },
        "offsetX": 0
       },
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "toolTip": "1",
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 0)"
        }
       ],
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true
      },
      {
       "image": {
        "x": 706.09,
        "y": 6767.82,
        "class": "HotspotMapOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 129,
           "width": 129,
           "url": "media/map_25014467_3533_F7D3_41B7_DA07754D80D6_HS_1.png"
          }
         ]
        },
        "width": 1600,
        "height": 1600
       },
       "id": "overlay_3AE49DD6_3552_30F5_41B4_2CC3F47813F5",
       "rollOverDisplay": false,
       "map": {
        "height": 1600,
        "x": 706.09,
        "offsetY": 0,
        "width": 1600,
        "y": 6767.82,
        "class": "HotspotMapOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 16,
           "width": 16,
           "url": "media/map_25014467_3533_F7D3_41B7_DA07754D80D6_HS_1_map.gif"
          }
         ]
        },
        "offsetX": 0
       },
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "toolTip": "2",
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 1)"
        }
       ],
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true
      },
      {
       "image": {
        "x": 3381.44,
        "y": 11170.2,
        "class": "HotspotMapOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 137,
           "width": 129,
           "url": "media/map_25014467_3533_F7D3_41B7_DA07754D80D6_HS_2.png"
          }
         ]
        },
        "width": 1600,
        "height": 1693.22
       },
       "id": "overlay_2575764A_3552_F3DD_419A_0DC9C4AB557B",
       "rollOverDisplay": false,
       "map": {
        "height": 1693.22,
        "x": 3381.44,
        "offsetY": 0,
        "width": 1600,
        "y": 11170.2,
        "class": "HotspotMapOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 16,
           "width": 16,
           "url": "media/map_25014467_3533_F7D3_41B7_DA07754D80D6_HS_2_map.gif"
          }
         ]
        },
        "offsetX": 0
       },
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "toolTip": "3",
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 2)"
        }
       ],
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true
      },
      {
       "image": {
        "x": 3212.11,
        "y": 14453.37,
        "class": "HotspotMapOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 139,
           "width": 129,
           "url": "media/map_25014467_3533_F7D3_41B7_DA07754D80D6_HS_3.png"
          }
         ]
        },
        "width": 1600,
        "height": 1727
       },
       "id": "overlay_25081429_3552_D75F_4183_2080434574CF",
       "rollOverDisplay": false,
       "map": {
        "height": 1727,
        "x": 3212.11,
        "offsetY": 0,
        "width": 1600,
        "y": 14453.37,
        "class": "HotspotMapOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 17,
           "width": 16,
           "url": "media/map_25014467_3533_F7D3_41B7_DA07754D80D6_HS_3_map.gif"
          }
         ]
        },
        "offsetX": 0
       },
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "toolTip": "4",
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 3)"
        }
       ],
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true
      },
      {
       "image": {
        "height": 1727.09,
        "x": 10933.36,
        "width": 1253.01,
        "y": 976.99,
        "class": "HotspotMapOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 139,
           "width": 101,
           "url": "media/map_25014467_3533_F7D3_41B7_DA07754D80D6_HS_4.png"
          }
         ]
        }
       },
       "id": "overlay_3CF8CD25_37C7_4D49_41AB_60AECF2C4FC2",
       "rollOverDisplay": true,
       "map": {
        "height": 1727.09,
        "x": 10933.36,
        "offsetY": 0,
        "width": 1253.01,
        "y": 976.99,
        "class": "HotspotMapOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 69,
           "width": 50,
           "url": "media/map_25014467_3533_F7D3_41B7_DA07754D80D6_HS_4_map.gif"
          }
         ]
        },
        "offsetX": 0
       },
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000"
        }
       ],
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true
      },
      {
       "image": {
        "height": 1828.68,
        "x": 841.55,
        "width": 1286.88,
        "y": 6666.23,
        "class": "HotspotMapOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 148,
           "width": 104,
           "url": "media/map_25014467_3533_F7D3_41B7_DA07754D80D6_HS_5.png"
          }
         ]
        }
       },
       "id": "overlay_3C3549F9_37C4_B4B9_41AE_00E1CD74192B",
       "rollOverDisplay": true,
       "map": {
        "height": 1828.68,
        "x": 841.55,
        "offsetY": 0,
        "width": 1286.88,
        "y": 6666.23,
        "class": "HotspotMapOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 74,
           "width": 52,
           "url": "media/map_25014467_3533_F7D3_41B7_DA07754D80D6_HS_5_map.gif"
          }
         ]
        },
        "offsetX": 0
       },
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000"
        }
       ],
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true
      },
      {
       "image": {
        "height": 1693.22,
        "x": 3584.63,
        "width": 1253.01,
        "y": 11170.2,
        "class": "HotspotMapOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 137,
           "width": 101,
           "url": "media/map_25014467_3533_F7D3_41B7_DA07754D80D6_HS_6.png"
          }
         ]
        }
       },
       "id": "overlay_3C72AE0B_37C3_4F59_41C7_7024D6B551AE",
       "rollOverDisplay": true,
       "map": {
        "height": 1693.22,
        "x": 3584.63,
        "offsetY": 0,
        "width": 1253.01,
        "y": 11170.2,
        "class": "HotspotMapOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 68,
           "width": 50,
           "url": "media/map_25014467_3533_F7D3_41B7_DA07754D80D6_HS_6_map.gif"
          }
         ]
        },
        "offsetX": 0
       },
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000"
        }
       ],
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true
      },
      {
       "image": {
        "height": 1896.41,
        "x": 3381.44,
        "width": 1286.88,
        "y": 14285.74,
        "class": "HotspotMapOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 153,
           "width": 104,
           "url": "media/map_25014467_3533_F7D3_41B7_DA07754D80D6_HS_7.png"
          }
         ]
        }
       },
       "id": "overlay_3C6AE30E_37C3_555A_418A_80D0F8DA43E4",
       "rollOverDisplay": true,
       "map": {
        "height": 1896.41,
        "x": 3381.44,
        "offsetY": 0,
        "width": 1286.88,
        "y": 14285.74,
        "class": "HotspotMapOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 76,
           "width": 52,
           "url": "media/map_25014467_3533_F7D3_41B7_DA07754D80D6_HS_7_map.gif"
          }
         ]
        },
        "offsetX": 0
       },
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000"
        }
       ],
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true
      }
     ],
     "scaleMode": "fit_inside",
     "fieldOfViewOverlayRadiusScale": 0.3,
     "thumbnailUrl": "media/map_25014467_3533_F7D3_41B7_DA07754D80D6_t.jpg",
     "fieldOfViewOverlayInsideColor": "#FFFFFF"
    },
    "class": "PanoramaMapLocation",
    "angle": 352.1
   }
  ]
 },
 {
  "gyroscopeVerticalDraggingEnabled": true,
  "buttonZoomOut": {
   "rollOverIconWidth": 32,
   "toolTipBackgroundColor": "#F6F6F6",
   "verticalAlign": "middle",
   "toolTipPaddingRight": 6,
   "toolTipShadowSpread": 0,
   "fontSize": 12,
   "paddingLeft": 0,
   "fontColor": "#FFFFFF",
   "width": 32,
   "paddingRight": 0,
   "toolTipTextShadowColor": "#000000",
   "height": 32,
   "mode": "push",
   "minWidth": 0,
   "toolTipFontSize": 12,
   "iconHeight": 32,
   "iconURL": "skin/Button_268C3FC2_3792_4579_41A1_4B15123E3EDE.png",
   "toolTipPaddingBottom": 4,
   "toolTipShadowBlurRadius": 3,
   "pressedBackgroundOpacity": 0,
   "borderSize": 0,
   "iconWidth": 32,
   "toolTip": "Zoom Out",
   "toolTipBorderSize": 1,
   "fontFamily": "Arial",
   "toolTipBorderRadius": 3,
   "borderRadius": 0,
   "shadowBlurRadius": 6,
   "rollOverBackgroundOpacity": 0,
   "textDecoration": "none",
   "horizontalAlign": "center",
   "gap": 0,
   "toolTipShadowColor": "#333333",
   "fontStyle": "normal",
   "pressedIconURL": "skin/Button_268C3FC2_3792_4579_41A1_4B15123E3EDE_pressed.png",
   "toolTipFontColor": "#606060",
   "backgroundColorRatios": [
    0,
    1
   ],
   "fontWeight": "normal",
   "pressedIconHeight": 32,
   "class": "Button",
   "backgroundOpacity": 0,
   "shadow": false,
   "borderColor": "#000000",
   "backgroundColorDirection": "vertical",
   "cursor": "hand",
   "paddingBottom": 0,
   "minHeight": 0,
   "id": "Button_268C3FC2_3792_4579_41A1_4B15123E3EDE",
   "iconBeforeLabel": true,
   "toolTipBorderColor": "#767676",
   "backgroundColor": [
    "#5794FE",
    "#0065CD"
   ],
   "toolTipFontWeight": "normal",
   "toolTipPaddingTop": 4,
   "toolTipFontFamily": "Arial",
   "shadowColor": "#000000",
   "paddingTop": 0,
   "layout": "horizontal",
   "pressedIconWidth": 32,
   "toolTipTextShadowBlurRadius": 3,
   "rollOverIconHeight": 32,
   "shadowSpread": 1,
   "toolTipShadowOpacity": 1,
   "toolTipShadowVerticalLength": 0,
   "toolTipPaddingLeft": 6,
   "toolTipTextShadowOpacity": 0,
   "toolTipFontStyle": "normal",
   "rollOverIconURL": "skin/Button_268C3FC2_3792_4579_41A1_4B15123E3EDE_rollover.png",
   "toolTipOpacity": 1,
   "toolTipShadowHorizontalLength": 0
  },
  "class": "PanoramaPlayer",
  "displayPlaybackBar": true,
  "buttonCardboardView": {
   "toolTipBackgroundColor": "#F6F6F6",
   "verticalAlign": "middle",
   "toolTipPaddingRight": 6,
   "toolTipShadowSpread": 0,
   "maxWidth": 55,
   "paddingLeft": 0,
   "width": 52,
   "paddingRight": 0,
   "toolTipTextShadowColor": "#000000",
   "height": 45,
   "mode": "push",
   "minWidth": 1,
   "toolTipFontSize": 12,
   "iconURL": "skin/IconButton_3B1D9A4D_3773_CF0B_41CA_D4EF0E45F3BB.png",
   "maxHeight": 54,
   "toolTipShadowBlurRadius": 3,
   "toolTip": "VR",
   "toolTipBorderSize": 1,
   "borderSize": 0,
   "toolTipBorderRadius": 3,
   "borderRadius": 0,
   "toolTipPaddingBottom": 4,
   "horizontalAlign": "center",
   "toolTipShadowColor": "#333333",
   "toolTipFontColor": "#606060",
   "class": "IconButton",
   "backgroundOpacity": 0,
   "shadow": false,
   "cursor": "hand",
   "toolTipFontWeight": "normal",
   "toolTipPaddingTop": 4,
   "id": "IconButton_3B1D9A4D_3773_CF0B_41CA_D4EF0E45F3BB",
   "toolTipBorderColor": "#767676",
   "paddingBottom": 0,
   "minHeight": 1,
   "transparencyActive": true,
   "paddingTop": 0,
   "toolTipTextShadowBlurRadius": 3,
   "toolTipFontFamily": "Arial",
   "toolTipShadowOpacity": 1,
   "toolTipShadowVerticalLength": 0,
   "toolTipPaddingLeft": 6,
   "toolTipTextShadowOpacity": 0,
   "toolTipFontStyle": "normal",
   "toolTipOpacity": 1,
   "toolTipShadowHorizontalLength": 0
  },
  "mouseControlMode": "drag_rotation",
  "buttonZoomIn": {
   "rollOverIconWidth": 32,
   "toolTipBackgroundColor": "#F6F6F6",
   "verticalAlign": "middle",
   "toolTipPaddingRight": 6,
   "toolTipShadowSpread": 0,
   "fontSize": 12,
   "paddingLeft": 0,
   "fontColor": "#FFFFFF",
   "width": 32,
   "paddingRight": 0,
   "toolTipTextShadowColor": "#000000",
   "height": 32,
   "mode": "push",
   "minWidth": 0,
   "toolTipFontSize": 12,
   "iconHeight": 32,
   "iconURL": "skin/Button_3B059DA1_3775_C53B_41B7_561826CEA40F.png",
   "toolTipPaddingBottom": 4,
   "toolTipShadowBlurRadius": 3,
   "pressedBackgroundOpacity": 0,
   "borderSize": 0,
   "iconWidth": 32,
   "toolTip": "Zoom In",
   "toolTipBorderSize": 1,
   "fontFamily": "Arial",
   "toolTipBorderRadius": 3,
   "borderRadius": 0,
   "shadowBlurRadius": 6,
   "rollOverBackgroundOpacity": 0,
   "textDecoration": "none",
   "horizontalAlign": "center",
   "gap": 0,
   "toolTipShadowColor": "#333333",
   "fontStyle": "normal",
   "pressedIconURL": "skin/Button_3B059DA1_3775_C53B_41B7_561826CEA40F_pressed.png",
   "toolTipFontColor": "#606060",
   "backgroundColorRatios": [
    0,
    1
   ],
   "fontWeight": "normal",
   "pressedIconHeight": 32,
   "class": "Button",
   "backgroundOpacity": 0,
   "shadow": false,
   "borderColor": "#000000",
   "backgroundColorDirection": "vertical",
   "cursor": "hand",
   "paddingBottom": 0,
   "minHeight": 0,
   "id": "Button_3B059DA1_3775_C53B_41B7_561826CEA40F",
   "iconBeforeLabel": true,
   "toolTipBorderColor": "#767676",
   "backgroundColor": [
    "#5794FE",
    "#0065CD"
   ],
   "toolTipFontWeight": "normal",
   "toolTipPaddingTop": 4,
   "toolTipFontFamily": "Arial",
   "shadowColor": "#000000",
   "paddingTop": 0,
   "layout": "horizontal",
   "pressedIconWidth": 32,
   "toolTipTextShadowBlurRadius": 3,
   "rollOverIconHeight": 32,
   "shadowSpread": 1,
   "toolTipShadowOpacity": 1,
   "toolTipShadowVerticalLength": 0,
   "toolTipPaddingLeft": 6,
   "toolTipTextShadowOpacity": 0,
   "toolTipFontStyle": "normal",
   "rollOverIconURL": "skin/Button_3B059DA1_3775_C53B_41B7_561826CEA40F_rollover.png",
   "toolTipOpacity": 1,
   "toolTipShadowHorizontalLength": 0
  },
  "id": "MainViewerPanoramaPlayer",
  "preloadEnabled": false,
  "touchControlMode": "drag_rotation",
  "viewerArea": "this.MainViewer"
 },
 {
  "buttonZoomIn": "this.Button_3B059DA1_3775_C53B_41B7_561826CEA40F",
  "id": "MapViewerMapPlayer",
  "movementMode": "constrained",
  "class": "MapPlayer",
  "buttonZoomOut": "this.Button_268C3FC2_3792_4579_41A1_4B15123E3EDE",
  "viewerArea": {
   "toolTipPaddingRight": 6,
   "playbackBarHeadBackgroundColorDirection": "vertical",
   "paddingLeft": 0,
   "playbackBarProgressOpacity": 1,
   "paddingRight": 0,
   "playbackBarHeadBorderColor": "#000000",
   "playbackBarBackgroundColorDirection": "vertical",
   "minWidth": 1,
   "progressBorderSize": 0,
   "playbackBarHeadBackgroundColor": [
    "#111111",
    "#666666"
   ],
   "playbackBarBorderColor": "#FFFFFF",
   "playbackBarRight": 0,
   "progressBorderColor": "#000000",
   "progressBarBackgroundColorDirection": "vertical",
   "progressBottom": 2,
   "progressBarOpacity": 1,
   "playbackBarBorderSize": 0,
   "playbackBarHeadOpacity": 1,
   "playbackBarHeadShadowOpacity": 0.7,
   "toolTipShadowColor": "#333333",
   "progressBorderRadius": 0,
   "class": "ViewerArea",
   "shadow": false,
   "progressHeight": 10,
   "playbackBarBackgroundOpacity": 1,
   "paddingBottom": 0,
   "playbackBarHeadBorderRadius": 0,
   "minHeight": 1,
   "playbackBarHeadBackgroundColorRatios": [
    0,
    1
   ],
   "toolTipBorderColor": "#767676",
   "playbackBarProgressBackgroundColor": [
    "#3399FF"
   ],
   "progressBackgroundColorRatios": [
    0
   ],
   "progressBarBackgroundColor": [
    "#3399FF"
   ],
   "paddingTop": 0,
   "toolTipTextShadowBlurRadius": 3,
   "progressBarBorderColor": "#000000",
   "progressBarBackgroundColorRatios": [
    0
   ],
   "progressBackgroundColor": [
    "#FFFFFF"
   ],
   "playbackBarLeft": 0,
   "playbackBarOpacity": 1,
   "toolTipShadowVerticalLength": 0,
   "playbackBarHeadShadowBlurRadius": 3,
   "toolTipFontStyle": "normal",
   "playbackBarProgressBackgroundColorRatios": [
    0
   ],
   "toolTipOpacity": 1,
   "playbackBarHeadShadowColor": "#000000",
   "playbackBarHeadShadowHorizontalLength": 0,
   "toolTipBackgroundColor": "#F6F6F6",
   "toolTipShadowSpread": 0,
   "progressBarBorderRadius": 0,
   "toolTipTextShadowColor": "#000000",
   "width": "99.245%",
   "toolTipFontSize": 12,
   "progressBarBorderSize": 0,
   "playbackBarBorderRadius": 0,
   "toolTipPaddingBottom": 4,
   "toolTipShadowBlurRadius": 3,
   "borderSize": 0,
   "playbackBarBottom": 0,
   "playbackBarHeadWidth": 6,
   "toolTipBorderSize": 1,
   "toolTipBorderRadius": 3,
   "borderRadius": 0,
   "playbackBarProgressBorderColor": "#000000",
   "playbackBarBackgroundColor": [
    "#FFFFFF"
   ],
   "progressBackgroundColorDirection": "vertical",
   "playbackBarProgressBorderRadius": 0,
   "playbackBarProgressBorderSize": 0,
   "transitionMode": "blending",
   "playbackBarHeadShadow": true,
   "toolTipFontColor": "#606060",
   "top": "13.29%",
   "playbackBarHeadBorderSize": 0,
   "progressLeft": 0,
   "toolTipFontWeight": "normal",
   "bottom": "0%",
   "toolTipPaddingTop": 4,
   "id": "MapViewer",
   "progressBackgroundOpacity": 1,
   "toolTipFontFamily": "Arial",
   "playbackBarHeadHeight": 15,
   "playbackBarProgressBackgroundColorDirection": "vertical",
   "progressRight": 0,
   "progressOpacity": 1,
   "left": "0%",
   "playbackBarHeight": 10,
   "playbackBarHeadShadowVerticalLength": 0,
   "toolTipPaddingLeft": 6,
   "toolTipTextShadowOpacity": 0,
   "toolTipShadowOpacity": 1,
   "toolTipShadowHorizontalLength": 0
  }
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_in",
     "yawDelta": 25.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "linear",
     "yawDelta": 309
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_out",
     "yawDelta": 25.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 90,
   "yaw": 107.14,
   "pitch": -12.67
  },
  "id": "panorama_3C95BFF9_352E_30BF_41C5_BBCD4835C772_camera",
  "class": "PanoramaCamera",
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "timeToIdle": 5000
 },
 {
  "class": "Panorama",
  "id": "panorama_3C427DC6_352D_D0D5_41B3_F8B1A4A21CBE",
  "hfovMin": 60,
  "pitch": 0,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_3C427DC6_352D_D0D5_41B3_F8B1A4A21CBE_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 1608,
       "width": 3217,
       "url": "media/panorama_3C427DC6_352D_D0D5_41B3_F8B1A4A21CBE.jpeg"
      }
     ]
    },
    "thumbnailUrl": "media/panorama_3C427DC6_352D_D0D5_41B3_F8B1A4A21CBE_t.jpg"
   }
  ],
  "hfov": 360,
  "label": "PANO0002 Panorama",
  "partial": false,
  "vfov": 180,
  "thumbnailUrl": "media/panorama_3C427DC6_352D_D0D5_41B3_F8B1A4A21CBE_t.jpg",
  "hfovMax": 120,
  "mapLocations": [
   {
    "x": 1506.09,
    "y": 7567.82,
    "map": "this.map_25014467_3533_F7D3_41B7_DA07754D80D6",
    "class": "PanoramaMapLocation",
    "angle": 345.46
   }
  ]
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_in",
     "yawDelta": 25.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "linear",
     "yawDelta": 309
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_out",
     "yawDelta": 25.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 90,
   "yaw": 64.54,
   "pitch": -17.27
  },
  "id": "panorama_3C427DC6_352D_D0D5_41B3_F8B1A4A21CBE_camera",
  "class": "PanoramaCamera",
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "timeToIdle": 5000
 },
 {
  "class": "Panorama",
  "id": "panorama_3C5B9E26_3532_5355_41BA_B2CC6A9CBA78",
  "hfovMin": 60,
  "pitch": 0,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_3C5B9E26_3532_5355_41BA_B2CC6A9CBA78_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 1608,
       "width": 3217,
       "url": "media/panorama_3C5B9E26_3532_5355_41BA_B2CC6A9CBA78.jpeg"
      }
     ]
    },
    "thumbnailUrl": "media/panorama_3C5B9E26_3532_5355_41BA_B2CC6A9CBA78_t.jpg"
   }
  ],
  "hfov": 360,
  "label": "PANO0003 Panorama",
  "partial": false,
  "vfov": 180,
  "thumbnailUrl": "media/panorama_3C5B9E26_3532_5355_41BA_B2CC6A9CBA78_t.jpg",
  "hfovMax": 120,
  "mapLocations": [
   {
    "x": 4181.44,
    "y": 12016.82,
    "map": "this.map_25014467_3533_F7D3_41B7_DA07754D80D6",
    "class": "PanoramaMapLocation",
    "angle": -1.16
   }
  ]
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_in",
     "yawDelta": 25.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "linear",
     "yawDelta": 309
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_out",
     "yawDelta": 25.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 90,
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_3C5B9E26_3532_5355_41BA_B2CC6A9CBA78_camera",
  "class": "PanoramaCamera",
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "timeToIdle": 5000
 },
 {
  "class": "Panorama",
  "id": "panorama_3C58D1CD_3536_50D7_4180_5A40A94CF706",
  "hfovMin": 60,
  "pitch": 0,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_3C58D1CD_3536_50D7_4180_5A40A94CF706_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 1608,
       "width": 3217,
       "url": "media/panorama_3C58D1CD_3536_50D7_4180_5A40A94CF706.jpeg"
      }
     ]
    },
    "thumbnailUrl": "media/panorama_3C58D1CD_3536_50D7_4180_5A40A94CF706_t.jpg"
   }
  ],
  "hfov": 360,
  "label": "PANO0004 Panorama",
  "partial": false,
  "vfov": 180,
  "thumbnailUrl": "media/panorama_3C58D1CD_3536_50D7_4180_5A40A94CF706_t.jpg",
  "hfovMax": 120,
  "mapLocations": [
   {
    "x": 4012.11,
    "y": 15316.87,
    "map": "this.map_25014467_3533_F7D3_41B7_DA07754D80D6",
    "class": "PanoramaMapLocation",
    "angle": 1.44
   }
  ]
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_in",
     "yawDelta": 25.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "linear",
     "yawDelta": 309
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_out",
     "yawDelta": 25.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 90,
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_3C58D1CD_3536_50D7_4180_5A40A94CF706_camera",
  "class": "PanoramaCamera",
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "timeToIdle": 5000
 },
 {
  "class": "PlayList",
  "id": "mainPlayList",
  "items": [
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_2C947AF0_3C58_8315_4155_06A302518138, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_2C947AF0_3C58_8315_4155_06A302518138",
    "media": "this.panorama_3C95BFF9_352E_30BF_41C5_BBCD4835C772",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_3C95BFF9_352E_30BF_41C5_BBCD4835C772_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_2C95FAF0_3C58_8315_41CD_F3CFBA8660CF, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_2C95FAF0_3C58_8315_41CD_F3CFBA8660CF",
    "media": "this.panorama_3C427DC6_352D_D0D5_41B3_F8B1A4A21CBE",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_3C427DC6_352D_D0D5_41B3_F8B1A4A21CBE_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_2C956AF1_3C58_8317_41A2_719EE1AAAD12, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_2C956AF1_3C58_8317_41A2_719EE1AAAD12",
    "media": "this.panorama_3C5B9E26_3532_5355_41BA_B2CC6A9CBA78",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_3C5B9E26_3532_5355_41BA_B2CC6A9CBA78_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_2C969AF1_3C58_8317_41BE_8B5A4ACB6EAB, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_2C969AF1_3C58_8317_41BE_8B5A4ACB6EAB",
    "media": "this.panorama_3C58D1CD_3536_50D7_4180_5A40A94CF706",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_3C58D1CD_3536_50D7_4180_5A40A94CF706_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 0)"
   }
  ]
 },
 "this.map_25014467_3533_F7D3_41B7_DA07754D80D6",
 {
  "class": "PlayList",
  "id": "playList_2CEB4AEF_3C58_830B_419E_424AA967E812",
  "items": [
   {
    "class": "MapPlayListItem",
    "player": "this.MapViewerMapPlayer",
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'constrained')",
    "media": "this.map_25014467_3533_F7D3_41B7_DA07754D80D6"
   }
  ]
 },
 {
  "class": "FadeInEffect",
  "id": "effect_27DBB233_3796_7F1F_41C7_1F835DC4C767",
  "duration": 1000,
  "easing": "linear"
 },
 {
  "class": "FadeOutEffect",
  "id": "effect_27D89234_3796_7F19_41B5_FB058F4A0322",
  "duration": 1000,
  "easing": "linear"
 },
 {
  "class": "SlideOutEffect",
  "to": "bottom",
  "id": "effect_24752652_3792_4719_41C1_4C335A15F366",
  "duration": 1000,
  "easing": "linear"
 },
 {
  "class": "SlideInEffect",
  "from": "bottom",
  "id": "effect_22B65321_37B6_3D3B_41CB_A54C16FC1919",
  "duration": 1000,
  "easing": "linear"
 }
], "children": [
 {
  "toolTipPaddingRight": 6,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "paddingLeft": 0,
  "playbackBarProgressOpacity": 1,
  "paddingRight": 0,
  "playbackBarHeadBorderColor": "#000000",
  "playbackBarBackgroundColorDirection": "vertical",
  "minWidth": 100,
  "progressBorderSize": 0,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "playbackBarBorderColor": "#FFFFFF",
  "playbackBarRight": 0,
  "progressBorderColor": "#000000",
  "progressBarBackgroundColorDirection": "vertical",
  "progressBottom": 0,
  "progressBarOpacity": 1,
  "playbackBarBorderSize": 0,
  "playbackBarHeadOpacity": 1,
  "playbackBarHeadShadowOpacity": 0.7,
  "toolTipShadowColor": "#333333",
  "progressBorderRadius": 0,
  "class": "ViewerArea",
  "shadow": false,
  "progressHeight": 10,
  "playbackBarBackgroundOpacity": 1,
  "paddingBottom": 0,
  "playbackBarHeadBorderRadius": 0,
  "minHeight": 50,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipBorderColor": "#767676",
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "progressBackgroundColorRatios": [
   0
  ],
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "paddingTop": 0,
  "toolTipTextShadowBlurRadius": 3,
  "progressBarBorderColor": "#000000",
  "progressBarBackgroundColorRatios": [
   0
  ],
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "playbackBarLeft": 0,
  "playbackBarOpacity": 1,
  "toolTipShadowVerticalLength": 0,
  "playbackBarHeadShadowBlurRadius": 3,
  "toolTipFontStyle": "normal",
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "toolTipOpacity": 1,
  "playbackBarHeadShadowColor": "#000000",
  "playbackBarHeadShadowHorizontalLength": 0,
  "toolTipBackgroundColor": "#F6F6F6",
  "toolTipShadowSpread": 0,
  "progressBarBorderRadius": 0,
  "toolTipTextShadowColor": "#000000",
  "height": "100%",
  "width": "100%",
  "toolTipFontSize": 12,
  "progressBarBorderSize": 0,
  "playbackBarBorderRadius": 0,
  "toolTipPaddingBottom": 4,
  "toolTipShadowBlurRadius": 3,
  "borderSize": 0,
  "playbackBarBottom": 5,
  "playbackBarHeadWidth": 6,
  "toolTipBorderSize": 1,
  "toolTipBorderRadius": 3,
  "borderRadius": 0,
  "playbackBarProgressBorderColor": "#000000",
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "progressBackgroundColorDirection": "vertical",
  "playbackBarProgressBorderRadius": 0,
  "playbackBarProgressBorderSize": 0,
  "transitionMode": "blending",
  "playbackBarHeadShadow": true,
  "toolTipFontColor": "#606060",
  "top": 0,
  "playbackBarHeadBorderSize": 0,
  "progressLeft": 0,
  "toolTipFontWeight": "normal",
  "toolTipPaddingTop": 4,
  "id": "MainViewer",
  "progressBackgroundOpacity": 1,
  "toolTipFontFamily": "Arial",
  "playbackBarHeadHeight": 15,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "progressRight": 0,
  "progressOpacity": 1,
  "left": 0,
  "playbackBarHeight": 10,
  "playbackBarHeadShadowVerticalLength": 0,
  "toolTipPaddingLeft": 6,
  "toolTipTextShadowOpacity": 0,
  "toolTipShadowOpacity": 1,
  "toolTipShadowHorizontalLength": 0
 },
 {
  "verticalAlign": "middle",
  "paddingLeft": 0,
  "width": "100%",
  "paddingRight": 0,
  "height": "10%",
  "minWidth": 1,
  "scrollBarWidth": 10,
  "gap": 10,
  "borderSize": 0,
  "borderRadius": 0,
  "horizontalAlign": "center",
  "scrollBarOpacity": 0.5,
  "scrollBarColor": "#000000",
  "scrollBarVisible": "rollOver",
  "top": "0%",
  "class": "Container",
  "backgroundOpacity": 0,
  "shadow": false,
  "paddingBottom": 0,
  "minHeight": 1,
  "id": "Container_23261B0A_3572_715D_41B8_046FB2DF7782",
  "contentOpaque": false,
  "paddingTop": 0,
  "layout": "horizontal",
  "left": "0%",
  "overflow": "scroll",
  "scrollBarMargin": 2,
  "children": [
   {
    "verticalAlign": "top",
    "paddingLeft": 0,
    "width": "50%",
    "paddingRight": 0,
    "height": "100%",
    "minWidth": 1,
    "scrollBarWidth": 10,
    "gap": 10,
    "borderSize": 0,
    "borderRadius": 0,
    "horizontalAlign": "left",
    "scrollBarOpacity": 0.5,
    "scrollBarColor": "#000000",
    "scrollBarVisible": "rollOver",
    "class": "Container",
    "backgroundOpacity": 0,
    "shadow": false,
    "paddingBottom": 0,
    "minHeight": 1,
    "id": "Container_23DAE7B9_3572_30BF_41C8_02EC1343BB7B",
    "contentOpaque": false,
    "paddingTop": 0,
    "layout": "absolute",
    "overflow": "scroll",
    "scrollBarMargin": 2,
    "children": [
     {
      "verticalAlign": "middle",
      "maxWidth": 1676,
      "paddingLeft": 0,
      "width": "100%",
      "paddingRight": 0,
      "height": "100%",
      "minWidth": 1,
      "maxHeight": 715,
      "url": "skin/Image_23CFF8FB_3576_50B3_41A8_350BF0ACD7E7.png",
      "borderSize": 0,
      "borderRadius": 0,
      "scaleMode": "fit_inside",
      "horizontalAlign": "left",
      "top": "0%",
      "class": "Image",
      "backgroundOpacity": 0,
      "shadow": false,
      "minHeight": 1,
      "id": "Image_23CFF8FB_3576_50B3_41A8_350BF0ACD7E7",
      "paddingBottom": 0,
      "paddingTop": 0,
      "left": "0%"
     }
    ]
   },
   {
    "verticalAlign": "top",
    "paddingLeft": 0,
    "width": "50%",
    "paddingRight": 0,
    "height": "100%",
    "minWidth": 1,
    "scrollBarWidth": 10,
    "gap": 10,
    "borderSize": 0,
    "borderRadius": 0,
    "horizontalAlign": "left",
    "scrollBarOpacity": 0.5,
    "scrollBarColor": "#000000",
    "scrollBarVisible": "rollOver",
    "class": "Container",
    "backgroundOpacity": 0,
    "shadow": false,
    "paddingBottom": 0,
    "minHeight": 1,
    "id": "Container_23AB191F_3572_D173_41BD_D7234DF51758",
    "contentOpaque": false,
    "paddingTop": 0,
    "layout": "absolute",
    "overflow": "scroll",
    "scrollBarMargin": 2
   }
  ]
 },
 {
  "verticalAlign": "middle",
  "paddingLeft": 0,
  "width": "100%",
  "paddingRight": 0,
  "height": "10.033%",
  "minWidth": 1,
  "scrollBarWidth": 10,
  "gap": 10,
  "borderSize": 0,
  "borderRadius": 0,
  "horizontalAlign": "center",
  "scrollBarOpacity": 0.5,
  "scrollBarColor": "#000000",
  "scrollBarVisible": "rollOver",
  "class": "Container",
  "backgroundOpacity": 0,
  "shadow": false,
  "paddingBottom": 0,
  "minHeight": 1,
  "id": "Container_23F4B4D7_3572_70F3_41B9_3F6AC1C09673",
  "bottom": "0%",
  "paddingTop": 0,
  "layout": "horizontal",
  "left": "0%",
  "contentOpaque": false,
  "overflow": "scroll",
  "scrollBarMargin": 2,
  "children": [
   {
    "verticalAlign": "middle",
    "paddingLeft": 0,
    "width": "25%",
    "paddingRight": 0,
    "height": "100%",
    "minWidth": 1,
    "scrollBarWidth": 10,
    "gap": 10,
    "borderSize": 0,
    "borderRadius": 0,
    "horizontalAlign": "center",
    "scrollBarOpacity": 0.5,
    "scrollBarColor": "#000000",
    "scrollBarVisible": "rollOver",
    "class": "Container",
    "backgroundOpacity": 0,
    "shadow": false,
    "paddingBottom": 0,
    "minHeight": 1,
    "id": "Container_23206529_3572_515F_41AC_56D25490180A",
    "contentOpaque": false,
    "paddingTop": 0,
    "layout": "horizontal",
    "overflow": "scroll",
    "scrollBarMargin": 2
   },
   {
    "scrollBarMargin": 2,
    "backgroundColor": [
     "#000000",
     "#000000",
     "#000000",
     "#666666"
    ],
    "paddingLeft": 0,
    "verticalAlign": "middle",
    "paddingRight": 0,
    "height": "100%",
    "minWidth": 1,
    "width": "50%",
    "gap": 10,
    "scrollBarWidth": 15,
    "borderSize": 6,
    "borderRadius": 8,
    "horizontalAlign": "center",
    "scrollBarOpacity": 0.5,
    "scrollBarColor": "#000000",
    "scrollBarVisible": "rollOver",
    "backgroundColorRatios": [
     0,
     0.08,
     0.16,
     1
    ],
    "class": "Container",
    "backgroundOpacity": 0.3,
    "shadow": false,
    "borderColor": "#000000",
    "backgroundColorDirection": "vertical",
    "paddingBottom": 0,
    "minHeight": 1,
    "id": "Container_227DB25C_3573_D3F5_41B8_F6ABE2E5BF9D",
    "contentOpaque": false,
    "paddingTop": 0,
    "layout": "horizontal",
    "overflow": "scroll",
    "children": [
     {
      "toolTipBackgroundColor": "#F6F6F6",
      "verticalAlign": "middle",
      "toolTipPaddingRight": 6,
      "toolTipShadowSpread": 0,
      "maxWidth": 500,
      "paddingLeft": 0,
      "width": 40.05,
      "paddingRight": 0,
      "toolTipTextShadowColor": "#000000",
      "height": 44,
      "mode": "toggle",
      "minWidth": 1,
      "toolTipFontSize": 12,
      "iconURL": "skin/IconButton_3B165513_377E_451F_41CA_205B4F125433.png",
      "maxHeight": 500,
      "toolTipShadowBlurRadius": 3,
      "toolTip": "Show/Hide Map",
      "toolTipBorderSize": 1,
      "borderSize": 0,
      "toolTipBorderRadius": 3,
      "borderRadius": 0,
      "toolTipPaddingBottom": 4,
      "horizontalAlign": "center",
      "toolTipShadowColor": "#333333",
      "toolTipFontColor": "#606060",
      "click": "if(!this.MapViewer.get('visible')){ this.setComponentVisibility(this.MapViewer, true, 0, this.effect_27DBB233_3796_7F1F_41C7_1F835DC4C767, 'showEffect', false) } else if(this.MapViewer.get('visible')){ this.setComponentVisibility(this.MapViewer, false, 0, this.effect_27D89234_3796_7F19_41B5_FB058F4A0322, 'hideEffect', false) }",
      "class": "IconButton",
      "backgroundOpacity": 0,
      "shadow": false,
      "cursor": "hand",
      "toolTipFontWeight": "normal",
      "toolTipPaddingTop": 4,
      "id": "IconButton_3B165513_377E_451F_41CA_205B4F125433",
      "toolTipBorderColor": "#767676",
      "pressedIconURL": "skin/IconButton_3B165513_377E_451F_41CA_205B4F125433_pressed.png",
      "paddingBottom": 0,
      "minHeight": 1,
      "transparencyActive": true,
      "paddingTop": 0,
      "toolTipTextShadowBlurRadius": 3,
      "toolTipFontFamily": "Arial",
      "toolTipShadowOpacity": 1,
      "toolTipShadowVerticalLength": 0,
      "toolTipPaddingLeft": 6,
      "toolTipTextShadowOpacity": 0,
      "toolTipFontStyle": "normal",
      "toolTipOpacity": 1,
      "toolTipShadowHorizontalLength": 0
     },
     "this.Button_3B059DA1_3775_C53B_41B7_561826CEA40F",
     "this.Button_268C3FC2_3792_4579_41A1_4B15123E3EDE",
     {
      "rollOverIconWidth": 32,
      "toolTipBackgroundColor": "#F6F6F6",
      "verticalAlign": "middle",
      "toolTipPaddingRight": 6,
      "toolTipShadowSpread": 0,
      "fontSize": 12,
      "paddingLeft": 0,
      "fontColor": "#FFFFFF",
      "width": 32,
      "paddingRight": 0,
      "toolTipTextShadowColor": "#000000",
      "height": 32,
      "mode": "push",
      "minWidth": 0,
      "toolTipFontSize": 12,
      "iconHeight": 32,
      "iconURL": "skin/Button_3B0B2BF2_3775_CD1E_41BA_31392E452177.png",
      "toolTipPaddingBottom": 4,
      "toolTipShadowBlurRadius": 3,
      "pressedBackgroundOpacity": 0,
      "borderSize": 0,
      "iconWidth": 32,
      "toolTip": "Hide",
      "toolTipBorderSize": 1,
      "fontFamily": "Arial",
      "toolTipBorderRadius": 3,
      "borderRadius": 0,
      "shadowBlurRadius": 6,
      "rollOverBackgroundOpacity": 0,
      "textDecoration": "none",
      "horizontalAlign": "center",
      "gap": 0,
      "toolTipShadowColor": "#333333",
      "fontStyle": "normal",
      "pressedIconURL": "skin/Button_3B0B2BF2_3775_CD1E_41BA_31392E452177_pressed.png",
      "toolTipFontColor": "#606060",
      "backgroundColorRatios": [
       0,
       1
      ],
      "fontWeight": "normal",
      "pressedIconHeight": 32,
      "class": "Button",
      "backgroundOpacity": 0,
      "shadow": false,
      "borderColor": "#000000",
      "backgroundColorDirection": "vertical",
      "cursor": "hand",
      "paddingBottom": 0,
      "minHeight": 0,
      "id": "Button_3B0B2BF2_3775_CD1E_41BA_31392E452177",
      "iconBeforeLabel": true,
      "toolTipBorderColor": "#767676",
      "backgroundColor": [
       "#5794FE",
       "#0065CD"
      ],
      "toolTipFontWeight": "normal",
      "toolTipPaddingTop": 4,
      "toolTipFontFamily": "Arial",
      "shadowColor": "#000000",
      "paddingTop": 0,
      "layout": "horizontal",
      "pressedIconWidth": 32,
      "toolTipTextShadowBlurRadius": 3,
      "rollOverIconHeight": 32,
      "shadowSpread": 1,
      "toolTipShadowOpacity": 1,
      "click": "this.setComponentVisibility(this.Container_227DB25C_3573_D3F5_41B8_F6ABE2E5BF9D, false, 0, this.effect_24752652_3792_4719_41C1_4C335A15F366, 'hideEffect', false)",
      "toolTipShadowVerticalLength": 0,
      "toolTipPaddingLeft": 6,
      "toolTipTextShadowOpacity": 0,
      "toolTipFontStyle": "normal",
      "rollOverIconURL": "skin/Button_3B0B2BF2_3775_CD1E_41BA_31392E452177_rollover.png",
      "toolTipOpacity": 1,
      "toolTipShadowHorizontalLength": 0
     },
     "this.IconButton_3B1D9A4D_3773_CF0B_41CA_D4EF0E45F3BB",
     {
      "toolTipBackgroundColor": "#F6F6F6",
      "verticalAlign": "middle",
      "toolTipPaddingRight": 6,
      "toolTipShadowSpread": 0,
      "maxWidth": 128,
      "paddingLeft": 0,
      "width": 56,
      "paddingRight": 0,
      "toolTipTextShadowColor": "#000000",
      "height": 34,
      "mode": "toggle",
      "minWidth": 1,
      "toolTipFontSize": 12,
      "iconURL": "skin/IconButton_3BC40366_3776_FD39_41A0_DA3004069E5D.png",
      "maxHeight": 128,
      "toolTipShadowBlurRadius": 3,
      "toolTip": "Fullscreen",
      "toolTipBorderSize": 1,
      "borderSize": 0,
      "toolTipBorderRadius": 3,
      "borderRadius": 0,
      "toolTipPaddingBottom": 4,
      "horizontalAlign": "center",
      "toolTipShadowColor": "#333333",
      "toolTipFontColor": "#606060",
      "class": "IconButton",
      "backgroundOpacity": 0,
      "shadow": false,
      "cursor": "hand",
      "toolTipFontWeight": "normal",
      "toolTipPaddingTop": 4,
      "id": "IconButton_3BC40366_3776_FD39_41A0_DA3004069E5D",
      "toolTipBorderColor": "#767676",
      "paddingBottom": 0,
      "minHeight": 1,
      "transparencyActive": true,
      "paddingTop": 0,
      "toolTipTextShadowBlurRadius": 3,
      "toolTipFontFamily": "Arial",
      "toolTipShadowOpacity": 1,
      "toolTipShadowVerticalLength": 0,
      "toolTipPaddingLeft": 6,
      "toolTipTextShadowOpacity": 0,
      "toolTipFontStyle": "normal",
      "toolTipOpacity": 1,
      "toolTipShadowHorizontalLength": 0
     }
    ]
   },
   {
    "verticalAlign": "middle",
    "paddingLeft": 0,
    "width": "25%",
    "paddingRight": 0,
    "height": "100%",
    "minWidth": 1,
    "scrollBarWidth": 10,
    "gap": 10,
    "borderSize": 0,
    "borderRadius": 0,
    "horizontalAlign": "left",
    "scrollBarOpacity": 0.5,
    "scrollBarColor": "#000000",
    "scrollBarVisible": "rollOver",
    "class": "Container",
    "backgroundOpacity": 0,
    "shadow": false,
    "paddingBottom": 0,
    "minHeight": 1,
    "id": "Container_3CD85AB4_3772_4F19_41CB_4FEE9EA68F57",
    "contentOpaque": false,
    "paddingTop": 0,
    "layout": "horizontal",
    "overflow": "scroll",
    "scrollBarMargin": 2,
    "children": [
     {
      "rollOverIconWidth": 32,
      "verticalAlign": "middle",
      "fontSize": 12,
      "paddingLeft": 0,
      "fontColor": "#FFFFFF",
      "width": 32,
      "paddingRight": 0,
      "height": 32,
      "mode": "push",
      "minWidth": 0,
      "iconHeight": 32,
      "iconURL": "skin/Button_3B29A431_3772_FB1B_41A9_381D602955B6.png",
      "pressedBackgroundOpacity": 0,
      "borderSize": 0,
      "iconWidth": 32,
      "fontFamily": "Arial",
      "borderRadius": 0,
      "shadowBlurRadius": 6,
      "rollOverBackgroundOpacity": 0,
      "textDecoration": "none",
      "horizontalAlign": "center",
      "gap": 0,
      "fontStyle": "normal",
      "pressedIconURL": "skin/Button_3B29A431_3772_FB1B_41A9_381D602955B6_pressed.png",
      "backgroundColorRatios": [
       0,
       1
      ],
      "fontWeight": "normal",
      "pressedIconHeight": 32,
      "class": "Button",
      "backgroundOpacity": 0,
      "shadow": false,
      "borderColor": "#000000",
      "backgroundColorDirection": "vertical",
      "cursor": "hand",
      "paddingBottom": 0,
      "minHeight": 0,
      "id": "Button_3B29A431_3772_FB1B_41A9_381D602955B6",
      "iconBeforeLabel": true,
      "backgroundColor": [
       "#5794FE",
       "#0065CD"
      ],
      "shadowColor": "#000000",
      "paddingTop": 0,
      "layout": "horizontal",
      "pressedIconWidth": 32,
      "rollOverIconHeight": 32,
      "shadowSpread": 1,
      "click": "this.setComponentVisibility(this.Container_227DB25C_3573_D3F5_41B8_F6ABE2E5BF9D, true, 0, this.effect_22B65321_37B6_3D3B_41CB_A54C16FC1919, 'showEffect', false)",
      "rollOverIconURL": "skin/Button_3B29A431_3772_FB1B_41A9_381D602955B6_rollover.png"
     }
    ]
   }
  ]
 },
 {
  "verticalAlign": "middle",
  "paddingLeft": 0,
  "width": "24.004%",
  "paddingRight": 0,
  "height": "100%",
  "minWidth": 1,
  "scrollBarWidth": 10,
  "gap": 10,
  "borderSize": 0,
  "borderRadius": 0,
  "horizontalAlign": "center",
  "scrollBarOpacity": 0.5,
  "scrollBarColor": "#000000",
  "scrollBarVisible": "rollOver",
  "top": "0%",
  "class": "Container",
  "backgroundOpacity": 0,
  "shadow": false,
  "paddingBottom": 0,
  "minHeight": 1,
  "id": "Container_31285C9E_3C48_870C_41C6_BCC15312B338",
  "contentOpaque": false,
  "paddingTop": 0,
  "layout": "vertical",
  "left": "0%",
  "overflow": "scroll",
  "scrollBarMargin": 2,
  "children": [
   {
    "verticalAlign": "top",
    "paddingLeft": 0,
    "width": "100%",
    "paddingRight": 0,
    "height": "50%",
    "minWidth": 1,
    "scrollBarWidth": 10,
    "gap": 10,
    "borderSize": 0,
    "borderRadius": 0,
    "horizontalAlign": "left",
    "scrollBarOpacity": 0.5,
    "scrollBarColor": "#000000",
    "scrollBarVisible": "rollOver",
    "class": "Container",
    "backgroundOpacity": 0,
    "shadow": false,
    "paddingBottom": 0,
    "minHeight": 1,
    "id": "Container_3164F6EF_3C49_830B_41AC_AE9225DAC308",
    "contentOpaque": false,
    "paddingTop": 0,
    "layout": "absolute",
    "overflow": "scroll",
    "scrollBarMargin": 2
   },
   {
    "verticalAlign": "top",
    "paddingLeft": 0,
    "width": "100%",
    "paddingRight": 0,
    "height": "50%",
    "minWidth": 1,
    "scrollBarWidth": 10,
    "gap": 10,
    "borderSize": 0,
    "borderRadius": 0,
    "horizontalAlign": "left",
    "scrollBarOpacity": 0.5,
    "scrollBarColor": "#000000",
    "scrollBarVisible": "rollOver",
    "class": "Container",
    "backgroundOpacity": 0,
    "shadow": false,
    "paddingBottom": 0,
    "minHeight": 1,
    "id": "Container_31FC27D0_3C49_8115_41B6_DF3EC234D24B",
    "contentOpaque": false,
    "paddingTop": 0,
    "layout": "absolute",
    "overflow": "scroll",
    "scrollBarMargin": 2,
    "children": [
     "this.MapViewer"
    ]
   }
  ]
 }
], 
 "start": "this.mainPlayList.set('selectedIndex', 0); this.playList_2CEB4AEF_3C58_830B_419E_424AA967E812.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_3BC40366_3776_FD39_41A0_DA3004069E5D].forEach(function(component) { component.set('visible', false); }) }",
 "scrollBarMargin": 2,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "paddingRight": 0,
 "height": "100%",
 "minWidth": 20,
 "width": "100%",
 "gap": 10,
 "scrollBarWidth": 10,
 "borderSize": 0,
 "borderRadius": 0,
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "class": "Player",
 "shadow": false,
 "backgroundPreloadEnabled": true,
 "paddingBottom": 0,
 "minHeight": 20,
 "id": "rootPlayer",
 "buttonToggleFullscreen": "this.IconButton_3BC40366_3776_FD39_41A0_DA3004069E5D",
 "scripts": {
  "startPanoramaWithCamera": function(panorama, camera){  var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { var restoreCameraOnStop = function(){ for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); } restoreItems[0].item.unbind('stop', restoreCameraOnStop, this); }; restoreItems[0].item.bind('stop', restoreCameraOnStop, this); } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "resumeGlobalAudios": function(caller){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ audios[audio].play(); } },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "unregisterKey": function(key){  delete window[key]; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('visible', true); htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('visible', false); htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "existsKey": function(key){  return key in window; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "getKey": function(key){  return window[key]; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "registerKey": function(key, value){  window[key] = value; },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); }; },
  "pauseGlobalAudios": function(caller){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing') a.pause(); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('text') == '' || component.get('text') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } }
 },
 "contentOpaque": false,
 "paddingTop": 0,
 "layout": "absolute",
 "overflow": "visible",
 "vrPolyfillScale": 0.5,
 "mouseWheelEnabled": true
})