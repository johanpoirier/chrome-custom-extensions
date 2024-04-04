const TILE_TYPES = {
    CCCC: 'CCCC',
    CCFC: 'CCFC',
    CCRC: 'CCRC',
    CCRF: 'CCRF',
    CFCF: 'CFCF',
    CFFC: 'CFFC',
    CFRC: 'CFRC',
    CFRR: 'CFRR',
    CRFF: 'CRFF',
    FCRC: 'FCRC',
    RRRR: 'RRRR',
}

const basicTiles = [
    {
        id: 'A',
        image: 'basic_tile_A.png',
        qty: 2,
        bgaIds: [66, 67]
    },
    {
        id: 'B',
        image: 'basic_tile_B.png',
        qty: 4,
        bgaIds: [62, 63, 64, 65]
    },
    {
        id: 'C',
        image: 'basic_tile_C.png',
        qty: 1,
        bgaIds: [68]
    },
    {
        id: 'D',
        image: 'basic_tile_D.png',
        qty: 4,
        bgaIds: [36, 37, 38, 39]
    },
    {
        id: 'E',
        image: 'basic_tile_E.png',
        qty: 5,
        bgaIds: [22, 23, 24, 25, 26]
    },
    {
        id: 'F',
        image: 'basic_tile_F.png',
        qty: 2,
        bgaIds: [15, 16]
    },
    {
        id: 'G',
        image: 'basic_tile_G.png',
        qty: 1,
        bgaIds: [14]
    },
    {
        id: 'H',
        image: 'basic_tile_H.png',
        qty: 3,
        bgaIds: [19, 20, 21]
    },
    {
        id: 'I',
        image: 'basic_tile_I.png',
        qty: 2,
        bgaIds: [17, 18]
    },
    {
        id: 'J',
        image: 'basic_tile_J.png',
        qty: 3,
        bgaIds: [30, 31, 32]
    },
    {
        id: 'K',
        image: 'basic_tile_K.png',
        qty: 3,
        bgaIds: [27, 28, 29]
    },
    {
        id: 'L',
        image: 'basic_tile_L.png',
        qty: 3,
        bgaIds: [33, 34, 35]
    },
    {
        id: 'M',
        image: 'basic_tile_M.png',
        qty: 2,
        bgaIds: [7, 8]
    },
    {
        id: 'N',
        image: 'basic_tile_N.png',
        qty: 3,
        bgaIds: [4, 5, 6]
    },
    {
        id: 'O',
        image: 'basic_tile_O.png',
        qty: 2,
        bgaIds: [12, 13]
    },
    {
        id: 'P',
        image: 'basic_tile_P.png',
        qty: 3,
        bgaIds: [9, 10, 11]
    },
    {
        id: 'Q',
        image: 'basic_tile_Q.png',
        qty: 1,
        bgaIds: [72]
    },
    {
        id: 'R',
        image: 'basic_tile_R.png',
        qty: 3,
        bgaIds: [69, 70, 71]
    },
    {
        id: 'S',
        image: 'basic_tile_S.png',
        qty: 2,
        bgaIds: [2, 3]
    },
    {
        id: 'T',
        image: 'basic_tile_T.png',
        qty: 1,
        bgaIds: [1],
    },
    {
        id: 'U',
        image: 'basic_tile_U.png',
        qty: 8,
        bgaIds: [40, 41, 42, 43, 44, 45, 46, 47]
    },
    {
        id: 'V',
        image: 'basic_tile_V.png',
        qty: 9,
        bgaIds: [48, 49, 50, 51, 52, 53, 54, 55, 56]
    },
    {
        id: 'W',
        image: 'basic_tile_W.png',
        qty: 4,
        bgaIds: [57, 58, 59, 60]
    },
    {
        id: 'X',
        image: 'basic_tile_X.png',
        qty: 1,
        bgaIds: [61]
    }
]

const innsCathedralsTiles = [
    {
        id: 'EA',
        image: 'inns_tile_EA.png',
        qty: 1,
        bgaIds: [73]
    },
    {
        id: 'EB',
        image: 'inns_tile_EB.png',
        qty: 1,
        bgaIds: [83]
    },
    {
        id: 'EC',
        image: 'inns_tile_EC.png',
        qty: 1,
        bgaIds: [84]
    },
    {
        id: 'ED',
        image: 'inns_tile_ED.png',
        qty: 1,
        bgaIds: [76]
    },
    {
        id: 'EE',
        image: 'inns_tile_EE.png',
        qty: 1,
        bgaIds: [77]
    },
    {
        id: 'EF',
        image: 'inns_tile_EF.png',
        qty: 1,
        bgaIds: [78]
    },
    {
        id: 'EG',
        image: 'inns_tile_EG.png',
        qty: 1,
        bgaIds: [79]
    },
    {
        id: 'EH',
        image: 'inns_tile_EH.png',
        qty: 1,
        bgaIds: [80]
    },
    {
        id: 'EI',
        image: 'inns_tile_EI.png',
        qty: 1,
        bgaIds: [90]
    },
    {
        id: 'EJ',
        image: 'inns_tile_EJ.png',
        qty: 1,
        bgaIds: [74]
    },
    {
        id: 'EK',
        image: 'inns_tile_EK.png',
        qty: 1,
        bgaIds: [81, 82]
    },
    {
        id: 'EL',
        image: 'inns_tile_EL.png',
        qty: 1,
        bgaIds: [85]
    },
    {
        id: 'EM',
        image: 'inns_tile_EM.png',
        qty: 1,
        bgaIds: [86]
    },
    {
        id: 'EN',
        image: 'inns_tile_EN.png',
        qty: 1,
        bgaIds: [87]
    },
    {
        id: 'EO',
        image: 'inns_tile_EO.png',
        qty: 1,
        bgaIds: [89]
    },
    {
        id: 'EP',
        image: 'inns_tile_EP.png',
        qty: 1,
        bgaIds: [88]
    },
    {
        id: 'EQ',
        image: 'inns_tile_EQ.png',
        qty: 1,
        bgaIds: [75]
    },
]

const tradersBuildersTiles = [
    {
        id: 'HA',
        image: 'traders_tile_HA.png',
        qty: 1,
        bgaIds: [109],
        type: TILE_TYPES.CRFF
    },
    {
        id: 'HB',
        image: 'traders_tile_HB.png',
        qty: 1,
        bgaIds: [110],
        type: TILE_TYPES.RRRR
    },
    {
        id: 'HC',
        image: 'traders_tile_HC.png',
        qty: 1,
        bgaIds: [111],
        type: TILE_TYPES.CFRR
    },
    {
        id: 'HD',
        image: 'traders_tile_HD.png',
        qty: 1,
        bgaIds: [114],
        type: TILE_TYPES.CCRC
    },
    {
        id: 'HE',
        image: 'traders_tile_HE.png',
        qty: 1,
        bgaIds: [112],
        type: TILE_TYPES.FCRC
    },
    {
        id: 'HF',
        image: 'traders_tile_HF.png',
        qty: 1,
        bgaIds: [113],
        type: TILE_TYPES.CFRC
    },
    {
        id: 'HG',
        image: 'traders_tile_HG.png',
        qty: 1,
        bgaIds: [108],
        type: TILE_TYPES.CFFC
    },
    {
        id: 'HH',
        image: 'traders_tile_HH.png',
        qty: 1,
        bgaIds: [107],
        type: TILE_TYPES.CCFC
    },
    {
        id: 'HI',
        image: 'traders_tile_HI.png',
        qty: 1,
        bgaIds: [104]
    },
    {
        id: 'HJ',
        image: 'traders_tile_HJ.png',
        qty: 1,
        bgaIds: [103]
    },
    {
        id: 'HK',
        image: 'traders_tile_HK.png',
        qty: 1,
        bgaIds: [105],
        type: TILE_TYPES.CCRF
    },
    {
        id: 'HL',
        image: 'traders_tile_HL.png',
        qty: 1,
        bgaIds: [106],
        type: TILE_TYPES.CCRC
    },
    {
        id: 'HM',
        image: 'traders_tile_HM.png',
        qty: 1,
        bgaIds: [97]
    },
    {
        id: 'HN',
        image: 'traders_tile_HN.png',
        qty: 1,
        bgaIds: [102]
    },
    {
        id: 'HO',
        image: 'traders_tile_HO.png',
        qty: 1,
        bgaIds: [98]
    },
    {
        id: 'HP',
        image: 'traders_tile_HP.png',
        qty: 1,
        bgaIds: [101]
    },
    {
        id: 'HQ',
        image: 'traders_tile_HQ.png',
        qty: 1,
        bgaIds: [100]
    },
    {
        id: 'HR',
        image: 'traders_tile_HR.png',
        qty: 1,
        bgaIds: [99]
    },
    {
        id: 'HS',
        image: 'traders_tile_HS.png',
        qty: 1,
        bgaIds: [91]
    },
    {
        id: 'HT',
        image: 'traders_tile_HT.png',
        qty: 1,
        bgaIds: [96]
    },
    {
        id: 'HU',
        image: 'traders_tile_HU.png',
        qty: 1,
        bgaIds: [92]
    },
    {
        id: 'HV',
        image: 'traders_tile_HV.png',
        qty: 1,
        bgaIds: [93]
    },
    {
        id: 'HW',
        image: 'traders_tile_HW.png',
        qty: 1,
        bgaIds: [95]
    },
    {
        id: 'HX',
        image: 'traders_tile_HX.png',
        qty: 1,
        bgaIds: [94]
    },
]
