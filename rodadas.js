const RODADA = 13;

const SCOUTS = {
  "100084": {
    id: 100084,
    id_time: 282,
    time: "CAM",
    pos: "MEI",
    nome: "IGOR GOMES",
    scouts: {
      rdd: {
        1: {pt:0},
        2: {pt:-0.5, FS:1, CA:1},
        3: {pt:0.7, FS:2, FC:1},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:-0.6, FC:2},
        9: {pt:-0.3, FC:1},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "100342": {
    id: 100342,
    id_time: 364,
    time: "REM",
    pos: "ZAG",
    nome: "LÉO ANDRADE",
    scouts: {
      rdd: {
        1: {pt:3.2, DS:3, CA:1, FC:1},
        2: {pt:5, FS:1, DS:3},
        3: {pt:1.2, DS:1, FC:1},
        4: {pt:2.4, DS:2, FC:2},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "100652": {
    id: 100652,
    id_time: 264,
    time: "COR",
    pos: "ATA",
    nome: "YURI ALBERTO",
    scouts: {
      rdd: {
        1: {pt:0.7, FF:1, I:1},
        2: {pt:"-"},
        3: {pt:3, FD:2, FF:1, FS:1, I:1, FC:2},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:1.2, FD:1, FS:3, I:2, CA:1, FC:1},
        8: {pt:10.9, G:1, FD:1, FS:1, DS:1, FC:1},
        9: {pt:-0.3, FS:1, I:2, FC:2},
        10: {pt:1, I:2, DS:1, FC:1},
        11: {pt:3.7, FD:2, FF:1, FS:1},
        12: {pt:1.2, FF:1, FS:2, FC:2},
        13: {pt:1, FF:1, FS:1, FC:1},
      }
    }
  },
  "100742": {
    id: 100742,
    id_time: 283,
    time: "CRU",
    pos: "MEI",
    nome: "MATHEUS HENRIQUE",
    scouts: {
      rdd: {
        1: {pt:1.5, DS:1},
        2: {pt:4.5, FF:1, FS:2, DS:2, FC:1},
        3: {pt:1.5, FS:3},
        4: {pt:0},
        5: {pt:3, FF:1, FS:2, DS:1, FC:1},
        6: {pt:4.3, FF:1, FS:1, DS:2},
        7: {pt:-1, FF:1, FS:1, CA:1, FC:1, PC:1},
        8: {pt:4.5, FS:3, DS:2},
        9: {pt:0.2, FS:1, FC:1},
        10: {pt:0.5, FS:1},
        11: {pt:1.2, DS:1, FC:1},
        12: {pt:-0.3, FC:1},
        13: {pt:0},
      }
    }
  },
  "100842": {
    id: 100842,
    id_time: 282,
    time: "CAM",
    pos: "ZAG",
    nome: "RUAN",
    scouts: {
      rdd: {
        1: {pt:-1.3, CA:1, FC:1},
        2: {pt:-0.6, FC:2},
        3: {pt:10.2, G:1, FS:2, DS:1, FC:1},
        4: {pt:1.7, FS:1, DS:1, FC:1},
        5: {pt:4.5, FF:1, SG:1, CA:1, FC:1},
        6: {pt:2.7, FS:2, DS:2, CA:1, FC:1},
        7: {pt:"-"},
        8: {pt:2.7, FS:2, DS:2, CA:1, FC:1},
        9: {pt:9.2, FS:3, DS:2, SG:1, FC:1},
        10: {pt:1.1, I:1, DS:1, FC:1},
        11: {pt:4.7, FS:1, DS:3, FC:1},
        12: {pt:-0.3, FC:1},
        13: {pt:2, FF:1, DS:1, FC:1},
      }
    }
  },
  "100898": {
    id: 100898,
    id_time: 263,
    time: "BOT",
    pos: "LAT",
    nome: "VITINHO",
    scouts: {
      rdd: {
        1: {pt:7.7, FS:3, DS:1, SG:1, FC:1},
        2: {pt:5.8, FF:1, FS:1, DS:3},
        3: {pt:5, FS:1, DS:3},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:4.7, FS:1, DS:3, FC:1},
        7: {pt:5.9, FS:1, DS:4, FC:2},
        8: {pt:1.8, DS:2, FC:4},
        9: {pt:8.2, FT:1, FS:1, DS:4, CA:1, FC:1},
        10: {pt:4.9, FS:2, DS:3, FC:2},
        11: {pt:5.2, A:1, DS:1, CA:1, FC:1},
        12: {pt:9.5, A:1, DS:3},
        13: {pt:3, DS:2},
      }
    }
  },
  "100987": {
    id: 100987,
    id_time: 266,
    time: "FLU",
    pos: "MEI",
    nome: "NONATO",
    scouts: {
      rdd: {
        1: {pt:6.4, G:1, CA:1, FC:2},
        2: {pt:4.2, A:1, FS:1, CA:1, FC:1},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "101254": {
    id: 101254,
    id_time: 364,
    time: "REM",
    pos: "ATA",
    nome: "ALEF MANGA",
    scouts: {
      rdd: {
        1: {pt:0.9, FF:1, FS:1, I:1, FC:1},
        2: {pt:16.1, G:1, A:1, FD:2, FF:1, I:1},
        3: {pt:10.7, G:1, FF:2, I:4, DS:1},
        4: {pt:10.1, A:1, FD:2, FF:1, FS:1, I:1, DS:1},
        5: {pt:1, FF:1, FS:1, FC:1},
        6: {pt:1.6, FF:2, FS:1, I:2, FC:1},
        7: {pt:3.8, FF:1, DS:2},
        8: {pt:4.7, A:1, I:3},
        9: {pt:2.4, FD:1, FF:1, FS:2, FC:2},
        10: {pt:1.5, FD:1, FF:1, FS:1, PP:1, DS:2},
        11: {pt:4.6, FS:1, I:1, DS:3, FC:1},
        12: {pt:-1.3, CA:1, FC:1},
        13: {pt:3, FD:1, FF:1, FS:2},
      }
    }
  },
  "101314": {
    id: 101314,
    id_time: 265,
    time: "BAH",
    pos: "ATA",
    nome: "ADEMIR",
    scouts: {
      rdd: {
        1: {pt:5.2, FD:1, FS:3, PS:1, DS:1},
        2: {pt:3.3, FD:1, FF:2, FS:3, I:1, FC:3},
        3: {pt:3, FS:3, DS:1},
        4: {pt:"-"},
        5: {pt:1.7, FS:1, DS:1, FC:1},
        6: {pt:0.4, FS:1, I:1},
        7: {pt:1.7, FD:1, FS:1},
        8: {pt:1.5, DS:1},
        9: {pt:1, FS:2},
        10: {pt:2.2, FS:2, DS:1, FC:1},
        11: {pt:1, PS:1},
        12: {pt:0},
        13: {pt:-0.3, FC:1},
      }
    }
  },
  "101393": {
    id: 101393,
    id_time: 315,
    time: "CHA",
    pos: "ZAG",
    nome: "EDUARDO DOMA",
    scouts: {
      rdd: {
        1: {pt:3, DS:2},
        2: {pt:3, DS:2},
        3: {pt:8.5, G:1, FS:1},
        4: {pt:"-"},
        5: {pt:-0.3, FC:1},
        6: {pt:1.8, FF:2, DS:1, CA:1, FC:1},
        7: {pt:4.4, SG:1, FC:2},
        8: {pt:1.5, DS:1},
        9: {pt:8.5, FF:2, DS:5, FC:2},
        10: {pt:4.7, FD:1, FF:1, DS:2, FC:1},
        11: {pt:0.7, FS:1, DS:1, CA:1, FC:1},
        12: {pt:1.5, DS:1},
        13: {pt:-4.3, CV:1, FC:1, PC:1},
      }
    }
  },
  "101405": {
    id: 101405,
    id_time: 294,
    time: "CFC",
    pos: "MEI",
    nome: "WALLISSON",
    scouts: {
      rdd: {
        1: {pt:4.2, DS:3, FC:1},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:7.2, FF:1, FS:1, DS:5, CA:1, FC:2},
        5: {pt:2.5, FS:1, I:1, DS:2, FC:3},
        6: {pt:3.4, FS:2, DS:2, FC:2},
        7: {pt:1.2, DS:1, FC:1},
        8: {pt:0.1, FS:1, DS:1, CA:1, FC:3},
        9: {pt:"-"},
        10: {pt:0},
        11: {pt:4.6, FS:1, DS:4, CA:1, FC:3},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "101574": {
    id: 101574,
    id_time: 264,
    time: "COR",
    pos: "GOL",
    nome: "HUGO SOUZA",
    scouts: {
      rdd: {
        1: {pt:2.2, DE:4, GS:2, PC:1},
        2: {pt:"-"},
        3: {pt:15.9, SG:1, DE:3, DP:1},
        4: {pt:1.6, DE:2, GS:1},
        5: {pt:-1.7, DE:1, CA:1, GS:2},
        6: {pt:4.2, DE:4, GS:1},
        7: {pt:10.2, SG:1, DE:4},
        8: {pt:0.8, FS:1, DE:1, GS:1},
        9: {pt:"-"},
        10: {pt:1.6, DE:2, GS:1},
        11: {pt:10.2, SG:1, DE:4},
        12: {pt:6.3, SG:1, DE:1},
        13: {pt:"-"},
      }
    }
  },
  "101597": {
    id: 101597,
    id_time: 287,
    time: "VIT",
    pos: "LAT",
    nome: "RAMON",
    scouts: {
      rdd: {
        1: {pt:4.7, FS:2, SG:1, CA:1, FC:1},
        2: {pt:7, FF:1, FS:1, DS:4, FC:1},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:8.8, G:1, FS:1, DS:1, FC:4},
        6: {pt:7.9, FS:1, DS:2, SG:1, FC:2},
        7: {pt:2.9, FS:1, DS:2, FC:2},
        8: {pt:5.3, DS:1, SG:1, FC:4},
        9: {pt:2.5, FF:1, FS:1, DS:1, FC:1},
        10: {pt:2.6, FD:2, FS:1, FC:1},
        11: {pt:14.2, G:1, DS:1, SG:1, FC:1},
        12: {pt:4.9, FF:1, SG:1, FC:3},
        13: {pt:3, DS:2},
      }
    }
  },
  "101727": {
    id: 101727,
    id_time: 264,
    time: "COR",
    pos: "LAT",
    nome: "MATHEUZINHO",
    scouts: {
      rdd: {
        1: {pt:4.8, FF:1, I:1, DS:4, CA:1, FC:3},
        2: {pt:"-"},
        3: {pt:7.2, FS:2, DS:1, SG:1, FC:1},
        4: {pt:"-"},
        5: {pt:0.2, FS:1, FC:1},
        6: {pt:6, FF:1, FS:2, DS:3, FC:1},
        7: {pt:4.7, SG:1, FC:1},
        8: {pt:2.7, FS:1, I:2, DS:2, FC:2},
        9: {pt:5, FS:1, DS:3},
        10: {pt:3, DS:2},
        11: {pt:1.6, DS:1, SG:1, CV:1, CA:1, FC:3},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "101908": {
    id: 101908,
    id_time: 2305,
    time: "MIR",
    pos: "ZAG",
    nome: "WILLIAN MACHADO",
    scouts: {
      rdd: {
        1: {pt:0, FF:1, FS:1, CA:1, FC:1},
        2: {pt:6, DS:4},
        3: {pt:2.7, FD:1, DS:1},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:3.5, FF:1, FS:3, DS:1, FC:1},
        7: {pt:0.2, FS:1, FC:1},
        8: {pt:0},
        9: {pt:2, FS:1, DS:1},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:6.5, FS:1, DS:4},
        13: {pt:4.2, FS:3, DS:2, FC:1},
      }
    }
  },
  "101960": {
    id: 101960,
    id_time: 285,
    time: "INT",
    pos: "ATA",
    nome: "VITINHO",
    scouts: {
      rdd: {
        1: {pt:1.9, FF:1, FS:3, I:1, FC:1},
        2: {pt:3, FD:1, FS:2, DS:2, CA:1, FC:4},
        3: {pt:6, FF:2, FS:1, DS:3, FC:2},
        4: {pt:8.2, A:1, FD:1, FS:4},
        5: {pt:-0.3, FC:1},
        6: {pt:1.4, FD:1, FS:1, FC:1},
        7: {pt:3.2, FD:2, FF:1, FS:1, DS:1, CA:1, PC:1},
        8: {pt:7.3, A:1, DS:3, CA:1, FC:4},
        9: {pt:"-"},
        10: {pt:7.1, A:1, FS:5, DS:1, CA:1, FC:3},
        11: {pt:8.1, FD:1, FS:6, DS:3, FC:2},
        12: {pt:3.8, FF:1, DS:2},
        13: {pt:4.5, DS:3},
      }
    }
  },
  "102130": {
    id: 102130,
    id_time: 275,
    time: "PAL",
    pos: "LAT",
    nome: "PIQUEREZ",
    scouts: {
      rdd: {
        1: {pt:5.3, FF:1, FS:3, DS:2},
        2: {pt:12.8, A:1, FT:1, FF:1, FS:2, DS:2},
        3: {pt:6.2, FD:1, FS:1, DS:3},
        4: {pt:2.4, FD:1, DS:1, FC:1},
        5: {pt:"-"},
        6: {pt:5.5, FS:1, SG:1},
        7: {pt:"-"},
        8: {pt:6.4, FS:1, DS:1, SG:1, FC:2},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "102256": {
    id: 102256,
    id_time: 277,
    time: "SAN",
    pos: "MEI",
    nome: "ROLLHEISER",
    scouts: {
      rdd: {
        1: {pt:2.5, FD:1, FF:1, FS:1},
        2: {pt:0},
        3: {pt:0},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:-1.3, CA:1, FC:1},
        7: {pt:0},
        8: {pt:1.2, FD:1},
        9: {pt:"-"},
        10: {pt:0},
        11: {pt:"-"},
        12: {pt:0},
        13: {pt:15.4, G:2, FC:2},
      }
    }
  },
  "102667": {
    id: 102667,
    id_time: 2305,
    time: "MIR",
    pos: "ATA",
    nome: "NATHAN FOGAÇA",
    scouts: {
      rdd: {
        1: {pt:-0.9, FF:1, I:1, CA:1, FC:2},
        2: {pt:8.2, G:1, FF:1, FC:2},
        3: {pt:11.6, G:1, FT:1, FD:1, FC:2},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:1.7, FD:1, FF:1, FC:1},
        7: {pt:0.7, FF:2, FC:3},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:3.1, FD:2, FS:2, FC:1},
        12: {pt:1.1, FD:1, I:1},
        13: {pt:-1, CA:1},
      }
    }
  },
  "102796": {
    id: 102796,
    id_time: 293,
    time: "CAP",
    pos: "ATA",
    nome: "JULIMAR",
    scouts: {
      rdd: {
        1: {pt:0.8, FF:1},
        2: {pt:"-"},
        3: {pt:14.4, G:1, FD:1, FS:2, DS:3, FC:1},
        4: {pt:8.8, G:1, FF:1},
        5: {pt:"-"},
        6: {pt:1.5, DS:1},
        7: {pt:-0.2, FF:1, DS:1, CA:1, FC:5},
        8: {pt:4.9, A:1, FS:1, FC:2},
        9: {pt:1.6, FS:1, I:1, DS:1, FC:1},
        10: {pt:9.6, G:1, FF:2},
        11: {pt:0.2, DS:1, CA:1, FC:1},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "102911": {
    id: 102911,
    id_time: 364,
    time: "REM",
    pos: "MEI",
    nome: "ZÉ RICARDO",
    scouts: {
      rdd: {
        1: {pt:0.1, FS:1, DS:1, CA:1, FC:3},
        2: {pt:6.4, FF:1, FS:1, DS:4, FC:3},
        3: {pt:5.4, DS:4, FC:2},
        4: {pt:2, FS:1, DS:1},
        5: {pt:1.5, DS:1},
        6: {pt:7, FF:1, FS:1, DS:4, FC:1},
        7: {pt:1.4, FD:1, FS:1, FC:1},
        8: {pt:7, FD:1, FS:1, DS:5, CA:1, FC:4},
        9: {pt:0.7, FS:1, DS:1, CA:1, FC:1},
        10: {pt:"-"},
        11: {pt:1.5, DS:1},
        12: {pt:1, FS:2},
        13: {pt:-1.8, FS:2, CA:1, FC:6},
      }
    }
  },
  "102928": {
    id: 102928,
    id_time: 266,
    time: "FLU",
    pos: "ATA",
    nome: "CANOBBIO",
    scouts: {
      rdd: {
        1: {pt:5.7, FD:1, FF:1, FS:2, DS:2, FC:1},
        2: {pt:2.5, FD:1, FF:1, FS:1},
        3: {pt:1, FT:1, FF:1, FS:2, I:1, DS:1, CV:1, CA:1, FC:4},
        4: {pt:"-"},
        5: {pt:14.2, G:1, FT:1, FF:1, DS:2, FC:2},
        6: {pt:10.4, G:1, FD:1, DS:1, FC:1},
        7: {pt:16.2, G:1, FF:1, FS:1, DS:5, FC:2},
        8: {pt:5.9, A:1, FS:2, DS:1, CA:1, FC:2},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:3.9, FS:5, DS:2, CA:1, FC:2},
        12: {pt:"-"},
        13: {pt:10.4, FD:3, FF:1, DS:4},
      }
    }
  },
  "103056": {
    id: 103056,
    id_time: 277,
    time: "SAN",
    pos: "GOL",
    nome: "GABRIEL BRAZÃO",
    scouts: {
      rdd: {
        1: {pt:-6, CA:1, GS:4, PC:1},
        2: {pt:1.6, DE:2, GS:1},
        3: {pt:3.6, FD:1, FS:1, DE:3, GS:2},
        4: {pt:-0.7, DE:1, CA:1, GS:1},
        5: {pt:"-"},
        6: {pt:2.9, DE:3, GS:1},
        7: {pt:5.8, DE:6, GS:2},
        8: {pt:8.9, SG:1, DE:3},
        9: {pt:10.2, SG:1, DE:4},
        10: {pt:-1.7, DE:1, GS:3},
        11: {pt:8.9, SG:1, DE:3},
        12: {pt:-3, GS:3},
        13: {pt:"-"},
      }
    }
  },
  "103445": {
    id: 103445,
    id_time: 283,
    time: "CRU",
    pos: "ATA",
    nome: "KAIO JORGE",
    scouts: {
      rdd: {
        1: {pt:2.2, FF:3, I:2},
        2: {pt:4.9, FD:2, FF:2, FS:2, I:1},
        3: {pt:9.2, G:1, FD:1},
        4: {pt:1.4, FF:2, FS:1, I:1, FC:2},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:8.8, G:1, FF:1},
        10: {pt:1.2, DS:1, FC:1},
        11: {pt:"-"},
        12: {pt:2.1, FF:2, FS:1},
        13: {pt:-0.3, FC:1},
      }
    }
  },
  "103767": {
    id: 103767,
    id_time: 277,
    time: "SAN",
    pos: "MEI",
    nome: "GABRIEL MENINO",
    scouts: {
      rdd: {
        1: {pt:16.7, G:1, FD:2, FF:3, FS:4, I:1, DS:2, CA:1},
        2: {pt:2.4, FS:3, DS:1, FC:2},
        3: {pt:5.9, FS:4, DS:3, FC:2},
        4: {pt:0.9, FD:1, FC:1},
        5: {pt:"-"},
        6: {pt:3, DS:2},
        7: {pt:5.3, FF:1, DS:3},
        8: {pt:2.5, FS:1, DS:2, CA:1},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "103912": {
    id: 103912,
    id_time: 276,
    time: "SAO",
    pos: "TEC",
    nome: "HERNÁN CRESPO",
    scouts: {
      rdd: {
        1: {pt:7.59, V:1},
        2: {pt:4.97},
        3: {pt:8.46999999999999, V:1},
        4: {pt:6.9, V:1},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "103987": {
    id: 103987,
    id_time: 315,
    time: "CHA",
    pos: "MEI",
    nome: "HIGOR MERITÃO",
    scouts: {
      rdd: {
        1: {pt:13.4, G:1, DS:4, FC:2},
        2: {pt:0.9, DS:1, FC:2},
        3: {pt:3.4, FD:1, FS:1, DS:2, CA:1, FC:1},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:3.6, DS:3, FC:3},
        7: {pt:3.5, FF:1, DS:2, FC:1},
        8: {pt:5.9, FS:1, DS:4, FC:2},
        9: {pt:3.9, FD:1, DS:2, FC:1},
        10: {pt:"-"},
        11: {pt:4.9, FS:2, DS:3, FC:2},
        12: {pt:2.3, FF:1, DS:1},
        13: {pt:5.3, FF:1, DS:3},
      }
    }
  },
  "104027": {
    id: 104027,
    id_time: 2305,
    time: "MIR",
    pos: "TEC",
    nome: "RAFAEL GUANAES",
    scouts: {
      rdd: {
        1: {pt:4.8, V:1},
        2: {pt:5.45},
        3: {pt:3.75},
        4: {pt:0},
        5: {pt:0},
        6: {pt:1.93},
        7: {pt:2.17},
        8: {pt:3.61},
        9: {pt:5.53},
        10: {pt:3.95},
        11: {pt:2.18},
        12: {pt:6.54, V:1},
        13: {pt:2.23},
      }
    }
  },
  "104075": {
    id: 104075,
    id_time: 276,
    time: "SAO",
    pos: "ZAG",
    nome: "SABINO",
    scouts: {
      rdd: {
        1: {pt:5.2, FS:2, DS:3, FC:1},
        2: {pt:1.4, FS:1, DS:1, FC:2},
        3: {pt:10, FS:1, DS:3, SG:1},
        4: {pt:"-"},
        5: {pt:5.6, DS:1, SG:1, FC:3},
        6: {pt:10.4, G:1, FF:1, FS:2, DS:1, FC:3},
        7: {pt:0.9, DS:1, FC:2},
        8: {pt:4.4, FS:1, DS:3, FC:2},
        9: {pt:5.9, FD:1, FS:1, DS:3, FC:1},
        10: {pt:-0.3, FC:1},
        11: {pt:"-"},
        12: {pt:1, FF:1, FS:1, FC:1},
        13: {pt:5.9, DS:1, SG:1, FC:2},
      }
    }
  },
  "104084": {
    id: 104084,
    id_time: 275,
    time: "PAL",
    pos: "GOL",
    nome: "CARLOS MIGUEL",
    scouts: {
      rdd: {
        1: {pt:-0.7, DE:1, GS:2},
        2: {pt:3.4, FS:1, DE:3, GS:1},
        3: {pt:3.9, FS:2, DE:3, GS:1},
        4: {pt:6.8, DE:6, GS:1},
        5: {pt:3.2, DE:4, GS:2},
        6: {pt:7.1, FS:1, SG:1, DE:2, CA:1},
        7: {pt:1.6, DE:2, GS:1},
        8: {pt:5.8, FS:1, SG:1, DE:1, CA:1},
        9: {pt:5.2, FS:2, DE:4, GS:1},
        10: {pt:4.7, FS:1, DE:4, GS:1},
        11: {pt:10.2, SG:1, DE:4},
        12: {pt:8.9, SG:1, DE:3},
        13: {pt:8.9, SG:1, DE:3},
      }
    }
  },
  "104134": {
    id: 104134,
    id_time: 287,
    time: "VIT",
    pos: "ATA",
    nome: "FABRI",
    scouts: {
      rdd: {
        1: {pt:5.4, FT:1, FD:1, DS:1, FC:1},
        2: {pt:7.7, A:1, FD:1, DS:1},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:1.5, FF:1, FS:2, FC:1},
        6: {pt:0},
        7: {pt:2, FS:1, DS:1},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:-0.3, FC:1},
      }
    }
  },
  "104257": {
    id: 104257,
    id_time: 364,
    time: "REM",
    pos: "LAT",
    nome: "JOÃO LUCAS",
    scouts: {
      rdd: {
        1: {pt:2.2, FD:1, FF:1, FS:1, FC:1},
        2: {pt:2.2, FS:1, DS:2, CA:1, FC:1},
        3: {pt:1.1, FS:1, DS:1, FC:3},
        4: {pt:6, FF:1, FS:1, DS:4, CA:1, FC:1},
        5: {pt:6.2, FS:1, DS:4, FC:1},
        6: {pt:-0.8, FS:1, CA:1, FC:1},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "104330": {
    id: 104330,
    id_time: 287,
    time: "VIT",
    pos: "MEI",
    nome: "DUDU",
    scouts: {
      rdd: {
        1: {pt:-0.3, FC:1},
        2: {pt:8.2, G:1, FS:1, FC:1},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "104470": {
    id: 104470,
    id_time: 315,
    time: "CHA",
    pos: "LAT",
    nome: "EVERTON",
    scouts: {
      rdd: {
        1: {pt:2.7, DS:2, FC:1},
        2: {pt:3.2, FS:1, DS:2, FC:1},
        3: {pt:6.4, A:1, FF:3, CA:1},
        4: {pt:"-"},
        5: {pt:1.4, FD:1, FS:1, FC:1},
        6: {pt:1.2, FF:1, FS:1, DS:1, CA:1, FC:2},
        7: {pt:4.9, FS:1, SG:1, FC:2},
        8: {pt:-0.6, FS:3, DS:1, CV:1, FC:2},
        9: {pt:"-"},
        10: {pt:-1, CA:1},
        11: {pt:"-"},
        12: {pt:0},
        13: {pt:1.2, DS:1, FC:1},
      }
    }
  },
  "104502": {
    id: 104502,
    id_time: 283,
    time: "CRU",
    pos: "MEI",
    nome: "CHRISTIAN",
    scouts: {
      rdd: {
        1: {pt:1.2, DS:1, FC:1},
        2: {pt:2.8, FF:2, FS:3, FC:1},
        3: {pt:5.7, FD:1, DS:3},
        4: {pt:2, FD:1, FF:1},
        5: {pt:3.9, FF:1, FS:4, I:1, DS:1, FC:1},
        6: {pt:11.7, G:1, FS:2, DS:2, FC:1},
        7: {pt:3.4, FS:3, I:2, DS:2, FC:3},
        8: {pt:1.4, FS:3, I:1},
        9: {pt:14.9, G:1, A:1, FS:2, DS:1, FC:2},
        10: {pt:12.4, G:1, FD:1, FF:1, DS:2, FC:2},
        11: {pt:9.7, G:1, FS:1, DS:1, FC:1},
        12: {pt:9.5, G:1, DS:1},
        13: {pt:0.9, DS:1, FC:2},
      }
    }
  },
  "104519": {
    id: 104519,
    id_time: 315,
    time: "CHA",
    pos: "MEI",
    nome: "CAMILO",
    scouts: {
      rdd: {
        1: {pt:4.4, DS:4, CA:1, FC:2},
        2: {pt:0.7, FS:2, FC:1},
        3: {pt:3.5, FS:1, DS:2},
        4: {pt:"-"},
        5: {pt:2.9, FS:1, DS:2, FC:2},
        6: {pt:"-"},
        7: {pt:3.3, FD:1, FF:1, FS:1, DS:2, CA:1, FC:4},
        8: {pt:2.5, FF:1, FS:1, DS:1, FC:1},
        9: {pt:0.2, FF:1, FC:2},
        10: {pt:6.3, DS:5, FC:4},
        11: {pt:1.7, FS:1, DS:1, FC:1},
        12: {pt:"-"},
        13: {pt:3.7, FF:1, FS:1, DS:2, FC:2},
      }
    }
  },
  "104693": {
    id: 104693,
    id_time: 263,
    time: "BOT",
    pos: "MEI",
    nome: "NEWTON",
    scouts: {
      rdd: {
        1: {pt:2, FS:1, DS:1},
        2: {pt:4.4, FS:1, DS:3, FC:2},
        3: {pt:5.2, FS:1, DS:4, CA:1, FC:1},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:0.5, FS:1},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:0},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "104754": {
    id: 104754,
    id_time: 277,
    time: "SAN",
    pos: "TEC",
    nome: "JUAN VOJVODA",
    scouts: {
      rdd: {
        1: {pt:5.21},
        2: {pt:3.09},
        3: {pt:4.25},
        4: {pt:6.43, V:1},
        5: {pt:0},
        6: {pt:3.98},
        7: {pt:3.74},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "104758": {
    id: 104758,
    id_time: 276,
    time: "SAO",
    pos: "LAT",
    nome: "ENZO DÍAZ",
    scouts: {
      rdd: {
        1: {pt:9.2, A:1, DS:3, FC:1},
        2: {pt:3.6, FS:3, DS:2, FC:3},
        3: {pt:12.8, FF:2, FS:1, DS:4, SG:1, FC:1},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:1.9, FS:4, DS:1, CA:1, FC:2},
        7: {pt:1.6, FS:1, DS:2, CA:1, FC:3},
        8: {pt:1.3, I:1, DS:2, CA:1, FC:2},
        9: {pt:"-"},
        10: {pt:5.9, FS:1, DS:4, FC:2},
        11: {pt:1.5, DS:1},
        12: {pt:2.6, FS:1, DS:2, FC:3},
        13: {pt:"-"},
      }
    }
  },
  "104783": {
    id: 104783,
    id_time: 265,
    time: "BAH",
    pos: "MEI",
    nome: "ACEVEDO",
    scouts: {
      rdd: {
        1: {pt:1.9, FS:1, DS:2, CA:1, FC:2},
        2: {pt:9.2, FT:1, FF:1, DS:4, FC:2},
        3: {pt:2.9, DS:3, CA:1, FC:2},
        4: {pt:"-"},
        5: {pt:1.8, FS:3, DS:1, FC:4},
        6: {pt:4.9, FS:2, DS:3, FC:2},
        7: {pt:1.8, FS:2, DS:2, CA:1, FC:4},
        8: {pt:"-"},
        9: {pt:7.1, FS:1, DS:5, FC:3},
        10: {pt:3.1, FD:1, FS:2, DS:1, FC:2},
        11: {pt:5.6, FS:1, DS:4, FC:3},
        12: {pt:5.8, FD:1, FS:2, DS:3, FC:3},
        13: {pt:7.4, FD:2, FS:1, DS:3},
      }
    }
  },
  "104811": {
    id: 104811,
    id_time: 294,
    time: "CFC",
    pos: "MEI",
    nome: "SEBASTIÁN GÓMEZ",
    scouts: {
      rdd: {
        1: {pt:2, FS:4},
        2: {pt:1.2, DS:1, FC:1},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:1.1, FS:1, DS:1, FC:3},
        6: {pt:4.3, FD:2, FF:1, DS:2, CA:1, FC:3},
        7: {pt:0.5, FS:1},
        8: {pt:3.4, FS:2, DS:2, FC:2},
        9: {pt:-0.3, FC:1},
        10: {pt:2.4, FD:1, FF:1, FS:1, DS:1, CA:1, FC:2},
        11: {pt:6.5, FS:1, DS:4},
        12: {pt:1.1, DS:2, CA:1, FC:3},
        13: {pt:"-"},
      }
    }
  },
  "104994": {
    id: 104994,
    id_time: 284,
    time: "GRE",
    pos: "ZAG",
    nome: "WAGNER LEONARDO",
    scouts: {
      rdd: {
        1: {pt:3.9, DS:3, FC:2},
        2: {pt:5, FF:1, DS:3, FC:1},
        3: {pt:-0.1, FS:1, DS:2, CV:1, FC:2},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:2.7, DS:2, FC:1},
        13: {pt:5.4, FF:1, I:1, SG:1, FC:1},
      }
    }
  },
  "105047": {
    id: 105047,
    id_time: 283,
    time: "CRU",
    pos: "ZAG",
    nome: "JOÃO MARCELO",
    scouts: {
      rdd: {
        1: {pt:-0.3, FC:1},
        2: {pt:0},
        3: {pt:3, DS:2},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:6.9, FS:2, DS:1, SG:1, FC:2},
      }
    }
  },
  "105068": {
    id: 105068,
    id_time: 282,
    time: "CAM",
    pos: "MEI",
    nome: "REINIER",
    scouts: {
      rdd: {
        1: {pt:1.7, FD:1, FS:1},
        2: {pt:0.8, FF:1},
        3: {pt:3.9, FT:1, FD:1, FC:1},
        4: {pt:0.5, FS:1},
        5: {pt:-0.3, FC:1},
        6: {pt:2.7, FD:1, FF:1, FS:2, FC:1},
        7: {pt:"-"},
        8: {pt:0.9, FD:1, FC:1},
        9: {pt:16, G:1, A:1, DS:2},
        10: {pt:0.2, FF:1, FC:2},
        11: {pt:4.3, FF:1, FS:1, DS:2},
        12: {pt:1.7, FD:1, FS:1},
        13: {pt:"-"},
      }
    }
  },
  "105089": {
    id: 105089,
    id_time: 284,
    time: "GRE",
    pos: "ATA",
    nome: "TETÊ",
    scouts: {
      rdd: {
        1: {pt:3.3, FF:1, FS:2, DS:1},
        2: {pt:11.3, G:1, FF:2, FS:1, DS:1, FC:1},
        3: {pt:5.3, FF:1, DS:3},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:6.8, FT:1, FD:1, FF:2, FS:2},
        7: {pt:-0.3, FC:1},
        8: {pt:0.5, FS:1},
        9: {pt:0.5, FS:1},
        10: {pt:4.5, FD:2, FF:2, FS:1},
        11: {pt:3.8, FF:1, FS:3, DS:1},
        12: {pt:3, DS:2},
        13: {pt:3.9, FD:2, DS:1},
      }
    }
  },
  "105114": {
    id: 105114,
    id_time: 277,
    time: "SAN",
    pos: "ZAG",
    nome: "ALEXIS DUARTE",
    scouts: {
      rdd: {
        1: {pt:-1.3, CA:1, FC:1},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "105157": {
    id: 105157,
    id_time: 285,
    time: "INT",
    pos: "MEI",
    nome: "VILLAGRA",
    scouts: {
      rdd: {
        1: {pt:0},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:1.9, FF:1, FS:1, DS:1, FC:3},
        8: {pt:4.1, FD:2, FS:1, DS:1, FC:1},
        9: {pt:2.6, FS:1, DS:2, FC:3},
        10: {pt:2.2, FD:1, FS:2},
        11: {pt:0.9, FS:2, DS:1, CA:1, FC:2},
        12: {pt:5.3, FF:2, FS:2, DS:2, FC:1},
        13: {pt:3.5, FS:1, DS:2},
      }
    }
  },
  "105175": {
    id: 105175,
    id_time: 275,
    time: "PAL",
    pos: "LAT",
    nome: "KHELLVEN",
    scouts: {
      rdd: {
        1: {pt:0.2, FS:1, DS:2, FC:1, GC:1},
        2: {pt:2.6, FS:1, DS:2, FC:3},
        3: {pt:2, FS:1, DS:1},
        4: {pt:1.6, FS:1, DS:2, CA:1, FC:3},
        5: {pt:4.4, FS:1, DS:3, FC:2},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:0},
        10: {pt:-0.1, DS:1, CA:1, FC:2},
        11: {pt:8.5, FS:1, DS:2, SG:1},
        12: {pt:"-"},
        13: {pt:5, SG:1},
      }
    }
  },
  "105213": {
    id: 105213,
    id_time: 280,
    time: "RBB",
    pos: "LAT",
    nome: "SANT ANNA",
    scouts: {
      rdd: {
        1: {pt:6.2, FD:1, SG:1},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:15.8, A:1, FS:1, I:1, DS:4, SG:1, FC:2},
        10: {pt:5, SG:1},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "105214": {
    id: 105214,
    id_time: 263,
    time: "BOT",
    pos: "MEI",
    nome: "SANTIAGO RODRÍGUEZ",
    scouts: {
      rdd: {
        1: {pt:5.7, FS:3, DS:3, FC:1},
        2: {pt:0},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:2.2, FS:2, DS:1, FC:1},
        8: {pt:3, FS:2, DS:2, CA:1},
        9: {pt:1.7, FS:1, DS:1, FC:1},
        10: {pt:"-"},
        11: {pt:-0.1, FS:1, FC:2},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "105436": {
    id: 105436,
    id_time: 262,
    time: "FLA",
    pos: "MEI",
    nome: "CARRASCAL",
    scouts: {
      rdd: {
        1: {pt:3.2, FD:1, FF:1, FS:3, FC:1},
        2: {pt:2.7, FD:1, DS:1},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:8.8, G:1, FF:1},
        6: {pt:8.6, FF:2, FS:2, DS:4},
        7: {pt:1, FS:2},
        8: {pt:0.5, FS:1},
        9: {pt:3.3, FF:1, FS:2, DS:1},
        10: {pt:10.6, A:1, FF:2, FS:2, DS:2},
        11: {pt:-0.9, FD:1, DS:1, CV:1, FC:2},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "105531": {
    id: 105531,
    id_time: 264,
    time: "COR",
    pos: "LAT",
    nome: "MATHEUS BIDU",
    scouts: {
      rdd: {
        1: {pt:5.1, FD:1, FS:2, I:1, DS:2},
        2: {pt:"-"},
        3: {pt:19, G:1, FF:1, FS:7, DS:2, SG:1, CA:1, FC:1},
        4: {pt:"-"},
        5: {pt:5.4, FS:3, DS:3, FC:2},
        6: {pt:0.9, FS:3, FC:2},
        7: {pt:"-"},
        8: {pt:12.1, A:1, FF:1, FS:2, I:1, DS:4, FC:2},
        9: {pt:-0.8, FS:1, CA:1, FC:1},
        10: {pt:"-"},
        11: {pt:12.1, FS:4, DS:4, SG:1, FC:3},
        12: {pt:11.7, FS:1, DS:5, SG:1, CA:1, FC:1},
        13: {pt:17.8, G:1, FF:1, FS:2, DS:2, SG:1},
      }
    }
  },
  "105563": {
    id: 105563,
    id_time: 284,
    time: "GRE",
    pos: "ATA",
    nome: "CARLOS VINÍCIUS",
    scouts: {
      rdd: {
        1: {pt:12, G:1, FF:1, FS:1, DS:2, FC:1},
        2: {pt:24.1, G:3, FS:1, I:1, FC:1},
        3: {pt:0.7, FF:1, FS:1, FC:2},
        4: {pt:0.2, FD:1, FS:1, I:2, CA:1, FC:1},
        5: {pt:12.7, G:1, FT:1, FD:2, I:1, FC:2},
        6: {pt:0.8, FF:1},
        7: {pt:-0.3, FC:1},
        8: {pt:9.7, G:1, FD:1, FS:1},
        9: {pt:11, G:1, FD:2, FS:3, FC:3},
        10: {pt:2.8, FD:1, FS:1, I:1, DS:1, FC:1},
        11: {pt:-1.1, FS:2, I:2, CA:1, FC:3},
        12: {pt:-0.3, FC:1},
        13: {pt:1.4, FF:2, FS:1, I:3, DS:1, CA:1, FC:3},
      }
    }
  },
  "105584": {
    id: 105584,
    id_time: 267,
    time: "VAS",
    pos: "LAT",
    nome: "LUCAS PITON",
    scouts: {
      rdd: {
        1: {pt:-0.3, FC:1},
        2: {pt:4.3, FD:1, FF:2, DS:1},
        3: {pt:-0.3, FC:1},
        4: {pt:1.5, DS:1},
        5: {pt:1.5, DS:1},
        6: {pt:0},
        7: {pt:"-"},
        8: {pt:-0.6, FC:2},
        9: {pt:2.4, FD:1, DS:1, FC:1},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:1.2, DS:1, FC:1},
      }
    }
  },
  "105647": {
    id: 105647,
    id_time: 275,
    time: "PAL",
    pos: "MEI",
    nome: "MAURÍCIO",
    scouts: {
      rdd: {
        1: {pt:-0.8, FD:1, I:1, CA:1, FC:3},
        2: {pt:11.7, G:1, FS:2, DS:2, FC:1},
        3: {pt:4.1, FF:2, FS:2, DS:1},
        4: {pt:-0.3, FC:1},
        5: {pt:"-"},
        6: {pt:6.6, A:1, FF:2},
        7: {pt:2.4, FF:1, FS:1, I:1, DS:1, FC:1},
        8: {pt:-0.1, FS:1, FC:2},
        9: {pt:1.8, FF:2, FS:1, FC:1},
        10: {pt:3.1, FD:1, FS:2, DS:1, FC:2},
        11: {pt:2.4, FD:1, DS:1, FC:1},
        12: {pt:"-"},
        13: {pt:1.7, FD:1, FS:1},
      }
    }
  },
  "105664": {
    id: 105664,
    id_time: 315,
    time: "CHA",
    pos: "LAT",
    nome: "WALTER CLAR",
    scouts: {
      rdd: {
        1: {pt:9.5, G:1, DS:1},
        2: {pt:0},
        3: {pt:15, G:1, A:1, FF:1, DS:1, FC:1},
        4: {pt:"-"},
        5: {pt:-0.3, FC:1},
        6: {pt:8.2, G:1, FS:1, FC:1},
        7: {pt:7.7, FD:1, DS:1, SG:1},
        8: {pt:1.5, DS:1},
        9: {pt:2.4, FD:1, DS:1, FC:1},
        10: {pt:2.8, FD:1, FF:2},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:0},
      }
    }
  },
  "105903": {
    id: 105903,
    id_time: 2305,
    time: "MIR",
    pos: "MEI",
    nome: "ALDO FILHO",
    scouts: {
      rdd: {
        1: {pt:-0.6, FC:2},
        2: {pt:3.7, A:1, CA:1, FC:1},
        3: {pt:1.9, FD:1, FF:1, DS:1, CA:1, FC:2},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:1.4, FS:1, DS:1, FC:2},
        7: {pt:-0.6, FF:1, I:1, CA:1, FC:1},
        8: {pt:"-"},
        9: {pt:5.6, FD:1, FS:1, DS:3, FC:2},
        10: {pt:6.5, FS:1, DS:4},
        11: {pt:0.7, FS:1, DS:1, CA:1, FC:1},
        12: {pt:-0.8, FS:1, CA:1, FC:1},
        13: {pt:3.7, FF:1, DS:3, CA:1, FC:2},
      }
    }
  },
  "105949": {
    id: 105949,
    id_time: 285,
    time: "INT",
    pos: "GOL",
    nome: "ROCHET",
    scouts: {
      rdd: {
        1: {pt:1.8, DS:1, DE:1, GS:1},
        2: {pt:2.9, DE:3, GS:1},
        3: {pt:2.2, DE:4, GS:3},
        4: {pt:5.5, DE:5, GS:1},
        5: {pt:1.6, DE:2, GS:1},
        6: {pt:3.1, DS:1, DE:2, GS:1},
        7: {pt:0.3, DE:1, GS:1},
        8: {pt:5, SG:1},
        9: {pt:"-"},
        10: {pt:8.1, FS:1, SG:1, DE:2},
        11: {pt:6.3, SG:1, DE:1},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "105990": {
    id: 105990,
    id_time: 265,
    time: "BAH",
    pos: "ZAG",
    nome: "SANTIAGO MINGO",
    scouts: {
      rdd: {
        1: {pt:0.5, FS:1},
        2: {pt:0.2, FS:1, FC:1},
        3: {pt:6.5, DS:1, SG:1},
        4: {pt:"-"},
        5: {pt:-1.6, CA:1, FC:2},
        6: {pt:5.2, FS:1, SG:1, FC:1},
        7: {pt:5, SG:1},
        8: {pt:1.4, I:1, DS:1},
        9: {pt:7, FS:1, DS:1, SG:1},
        10: {pt:-1.8, FS:3, FC:1, GC:1},
        11: {pt:0.7, FS:2, FC:1},
        12: {pt:0},
        13: {pt:1.2, FT:1, FS:1, CA:1, FC:1, PC:1},
      }
    }
  },
  "106104": {
    id: 106104,
    id_time: 284,
    time: "GRE",
    pos: "ATA",
    nome: "ENAMORADO",
    scouts: {
      rdd: {
        1: {pt:1.2, FD:1},
        2: {pt:"-"},
        3: {pt:3.4, FD:1, FS:2, DS:1, FC:1},
        4: {pt:2.7, DS:2, FC:1},
        5: {pt:8.2, A:1, FD:1, FF:3, FS:3, CA:1, FC:3},
        6: {pt:0},
        7: {pt:4.3, FF:1, FS:4, DS:1},
        8: {pt:2.5, FF:1, FS:1, DS:1, FC:1},
        9: {pt:5.2, FF:1, I:1, DS:3},
        10: {pt:3.5, FS:1, DS:2},
        11: {pt:5.9, FS:3, I:1, DS:3},
        12: {pt:6, FT:1, FS:3, DS:1},
        13: {pt:6.1, A:1, FS:1, DS:1, FC:3},
      }
    }
  },
  "106202": {
    id: 106202,
    id_time: 285,
    time: "INT",
    pos: "MEI",
    nome: "BRUNO GOMES",
    scouts: {
      rdd: {
        1: {pt:5.1, FF:2, FS:1, DS:2},
        2: {pt:3.4, FS:2, DS:2, FC:2},
        3: {pt:10, FT:1, FF:1, FS:1, DS:4, FC:1},
        4: {pt:3.7, FS:2, DS:2, FC:1},
        5: {pt:1.5, DS:1},
        6: {pt:0.5, FS:1},
        7: {pt:-0.3, FC:1},
        8: {pt:3.5, FS:1, DS:2},
        9: {pt:4.2, FS:3, DS:2, FC:1},
        10: {pt:2, FS:1, DS:1},
        11: {pt:3.6, FS:3, DS:2, FC:3},
        12: {pt:3.7, FD:1, FS:2, DS:1},
        13: {pt:1.4, FS:1, DS:1, FC:2},
      }
    }
  },
  "106294": {
    id: 106294,
    id_time: 276,
    time: "SAO",
    pos: "MEI",
    nome: "MARCOS ANTÔNIO",
    scouts: {
      rdd: {
        1: {pt:7.5, DS:5},
        2: {pt:0},
        3: {pt:0.9, DS:1, FC:2},
        4: {pt:2, FS:1, DS:1},
        5: {pt:8.7, A:1, FD:1, FS:4, I:1, DS:1, FC:3},
        6: {pt:3.5, FS:1, DS:2},
        7: {pt:-0.6, FC:2},
        8: {pt:2.5, FS:2, DS:1},
        9: {pt:0},
        10: {pt:4.9, A:1, FF:1, FC:3},
        11: {pt:1.7, FD:1, FF:1, FS:2, CA:1, FC:1},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "106708": {
    id: 106708,
    id_time: 2305,
    time: "MIR",
    pos: "LAT",
    nome: "IGOR FORMIGA",
    scouts: {
      rdd: {
        1: {pt:4, FF:1, FS:1, DS:2, FC:1},
        2: {pt:7.7, G:1, FC:1},
        3: {pt:1.5, DS:1},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:4.7, FF:1, DS:3, FC:2},
        7: {pt:0},
        8: {pt:5.4, FD:1, DS:3, FC:1},
        9: {pt:14, G:1, FF:2, FS:1, DS:3, FC:2},
        10: {pt:5, FF:1, DS:3, FC:1},
        11: {pt:2.7, FF:2, FS:1, DS:1, FC:3},
        12: {pt:3.5, FF:1, DS:3, FC:6},
        13: {pt:1.1, FS:1, DS:1, FC:3},
      }
    }
  },
  "106822": {
    id: 106822,
    id_time: 265,
    time: "BAH",
    pos: "MEI",
    nome: "RODRIGO NESTOR",
    scouts: {
      rdd: {
        1: {pt:0},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:5.2, FD:1, FF:1, FS:1, DS:2, FC:1},
        6: {pt:1.2, FF:1, FS:2, FC:2},
        7: {pt:-1.3, CA:1, FC:1},
        8: {pt:-0.2, FF:1, CA:1},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:-0.3, FC:1},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "107093": {
    id: 107093,
    id_time: 265,
    time: "BAH",
    pos: "LAT",
    nome: "LUCIANO JUBA",
    scouts: {
      rdd: {
        1: {pt:6.2, FD:1, FS:1, DS:3},
        2: {pt:5.8, FF:2, FS:3, DS:2, FC:1},
        3: {pt:16.5, G:1, FD:1, FF:1, DS:1, SG:1},
        4: {pt:"-"},
        5: {pt:2.4, FD:1, DS:1, FC:1},
        6: {pt:4.2, FS:1, SG:1, CA:1, FC:1},
        7: {pt:13.5, G:1, FS:1, SG:1},
        8: {pt:-2.1, FD:1, FF:1, FS:1, PP:1, FC:2},
        9: {pt:18, G:1, A:1, SG:1},
        10: {pt:-0.4, DS:1, CA:1, FC:3},
        11: {pt:11.5, G:1, FD:1, FF:1, DS:1},
        12: {pt:3.2, FF:1, DS:2, FC:2},
        13: {pt:10.5, G:1, FS:2, DS:1},
      }
    }
  },
  "107172": {
    id: 107172,
    id_time: 364,
    time: "REM",
    pos: "MEI",
    nome: "PATRICK DE PAULA",
    scouts: {
      rdd: {
        1: {pt:1.8, FF:2, DS:1, CA:1, FC:1},
        2: {pt:4.6, FF:3, FS:2, DS:1, FC:1},
        3: {pt:14, A:2, FF:2, FS:3, DS:1, FC:2},
        4: {pt:3.8, FD:2, FS:3, DS:1, CA:1, FC:2},
        5: {pt:5.9, FD:1, FS:3, DS:3, CA:1, FC:1},
        6: {pt:"-"},
        7: {pt:2.8, FF:2, FS:2, DS:1, CA:1, FC:1},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "107173": {
    id: 107173,
    id_time: 265,
    time: "BAH",
    pos: "MEI",
    nome: "MICHEL ARAÚJO",
    scouts: {
      rdd: {
        1: {pt:-3.1, FS:1, CV:1, FC:2},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:0},
        6: {pt:2.7, DS:2, FC:1},
        7: {pt:0.4, FS:1, I:1},
        8: {pt:0.2, FS:1, FC:1},
        9: {pt:0},
        10: {pt:0.8, FF:1},
        11: {pt:"-"},
        12: {pt:2.2, FF:1, I:1, DS:1},
        13: {pt:2.6, I:1, DS:2, FC:1},
      }
    }
  },
  "107174": {
    id: 107174,
    id_time: 285,
    time: "INT",
    pos: "MEI",
    nome: "BRUNO TABATA",
    scouts: {
      rdd: {
        1: {pt:0.5, FF:1, FC:1},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:1.3, FD:1, FS:1, I:1, FC:1},
        6: {pt:"-"},
        7: {pt:-0.3, FC:1},
        8: {pt:"-"},
        9: {pt:1.2, FD:1},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:2.5, FS:2, DS:1},
        13: {pt:"-"},
      }
    }
  },
  "107231": {
    id: 107231,
    id_time: 263,
    time: "BOT",
    pos: "MEI",
    nome: "DANILO",
    scouts: {
      rdd: {
        1: {pt:17.2, G:2, DS:1, FC:1},
        2: {pt:16.5, G:2, FS:1},
        3: {pt:3.5, FT:1, FF:1, FC:1},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:3.5, FF:1, DS:2, FC:1},
        7: {pt:11.2, G:1, FS:1, DS:2, FC:1},
        8: {pt:8.2, A:1, FS:1, DS:2, FC:1},
        9: {pt:"-"},
        10: {pt:0.6, FD:1, FC:2},
        11: {pt:11.1, G:1, FF:2, DS:1},
        12: {pt:10, A:1, FD:1, FF:1, DS:2},
        13: {pt:19.9, G:1, FD:2, FS:1, DS:6},
      }
    }
  },
  "107453": {
    id: 107453,
    id_time: 315,
    time: "CHA",
    pos: "ZAG",
    nome: "JOÃO PAULO",
    scouts: {
      rdd: {
        1: {pt:7, A:1, FS:1, DS:1},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "107700": {
    id: 107700,
    id_time: 364,
    time: "REM",
    pos: "ATA",
    nome: "EDUARDO MELO",
    scouts: {
      rdd: {
        1: {pt:1.4, I:1, DS:1},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "107873": {
    id: 107873,
    id_time: 276,
    time: "SAO",
    pos: "MEI",
    nome: "BOBADILLA",
    scouts: {
      rdd: {
        1: {pt:6.2, FD:1, I:1, DS:4, FC:3},
        2: {pt:5.1, FD:1, DS:3, FC:2},
        3: {pt:0},
        4: {pt:0},
        5: {pt:13, A:1, FT:1, FD:1, FF:1, DS:2},
        6: {pt:2.2, FS:1, DS:2, CA:1, FC:1},
        7: {pt:3.7, FD:1, FF:1, FS:1, DS:1, FC:1},
        8: {pt:5.7, DS:4, FC:1},
        9: {pt:"-"},
        10: {pt:-0.9, FC:3},
        11: {pt:"-"},
        12: {pt:4.7, FF:1, DS:3, FC:2},
        13: {pt:1, FS:2},
      }
    }
  },
  "107985": {
    id: 107985,
    id_time: 293,
    time: "CAP",
    pos: "ZAG",
    nome: "TERÁN",
    scouts: {
      rdd: {
        1: {pt:7.7, DS:2, SG:1, FC:1},
        2: {pt:"-"},
        3: {pt:0.2, FS:1, FC:1},
        4: {pt:2, FF:1, DS:1, FC:1},
        5: {pt:"-"},
        6: {pt:2.5, FS:2, DS:1},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:1.2, DS:1, FC:1},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:2, FD:1, FS:1, DS:1, FC:4},
        13: {pt:-0.3, FC:1},
      }
    }
  },
  "107989": {
    id: 107989,
    id_time: 285,
    time: "INT",
    pos: "ATA",
    nome: "CARBONERO",
    scouts: {
      rdd: {
        1: {pt:0.5, FS:1},
        2: {pt:10.4, A:1, FD:2, FF:1, FS:2, DS:1, FC:1},
        3: {pt:5.6, FD:1, FF:3, FS:1, DS:1},
        4: {pt:1.2, FF:2, I:1, FC:1},
        5: {pt:8.5, FD:3, FF:3, FS:2, DS:1},
        6: {pt:2.1, FS:5, I:1, FC:1},
        7: {pt:8.3, G:1, FF:1, FS:1, CA:1},
        8: {pt:1.4, FD:1, FS:1, FC:1},
        9: {pt:1.5, FS:3},
        10: {pt:0.7, FS:2, I:2, DS:1, CA:1, FC:2},
        11: {pt:1.9, FF:1, FS:1, DS:1, FC:3},
        12: {pt:1.8, FD:1, FF:1, FS:1, I:1, FC:2},
        13: {pt:8.9, G:1, FS:2, I:1},
      }
    }
  },
  "108474": {
    id: 108474,
    id_time: 266,
    time: "FLU",
    pos: "ATA",
    nome: "SANTI MORENO",
    scouts: {
      rdd: {
        1: {pt:-0.3, FC:1},
        2: {pt:0},
        3: {pt:"-"},
        4: {pt:0},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "108588": {
    id: 108588,
    id_time: 276,
    time: "SAO",
    pos: "ATA",
    nome: "TAPIA",
    scouts: {
      rdd: {
        1: {pt:1.5, DS:1},
        2: {pt:2.7, FF:2, FS:1, DS:1, FC:3},
        3: {pt:3.8, FT:1, FF:1},
        4: {pt:2.7, FF:1, PS:1, DS:1, FC:2},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:0},
        8: {pt:3.7, FD:1, FS:2, DS:1},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:0.1, FS:1, I:1, FC:1},
        12: {pt:0.5, FS:1},
        13: {pt:"-"},
      }
    }
  },
  "108713": {
    id: 108713,
    id_time: 2305,
    time: "MIR",
    pos: "ATA",
    nome: "GALEANO",
    scouts: {
      rdd: {
        1: {pt:1.2, FD:1},
        2: {pt:1.2, FD:1},
        3: {pt:1.1, FD:1, I:1},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:1, FS:2},
        8: {pt:0.5, FF:1, FC:1},
        9: {pt:2.5, FS:2, DS:1},
        10: {pt:4.7, FD:1, FS:1, DS:2},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "109096": {
    id: 109096,
    id_time: 262,
    time: "FLA",
    pos: "ATA",
    nome: "PLATA",
    scouts: {
      rdd: {
        1: {pt:10.6, G:1, FD:2, FS:1, FC:1},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:1.2, FD:1},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:8, A:1, FT:1},
        11: {pt:12.8, FD:3, FS:1, DS:6, FC:1},
        12: {pt:4.5, FD:2, FF:2, FS:1},
        13: {pt:14.4, G:1, FS:2, DS:4, FC:2},
      }
    }
  },
  "109127": {
    id: 109127,
    id_time: 294,
    time: "CFC",
    pos: "ZAG",
    nome: "TIAGO CÓSER",
    scouts: {
      rdd: {
        1: {pt:1.5, DS:1},
        2: {pt:0},
        3: {pt:-0.4, DS:1, CA:1, FC:3},
        4: {pt:"-"},
        5: {pt:4.7, SG:1, FC:1},
        6: {pt:4.7, SG:1, FC:1},
        7: {pt:4.3, FS:1, SG:1, FC:4},
        8: {pt:"-"},
        9: {pt:0.2, FS:1, FC:1},
        10: {pt:8.8, G:1, FF:1},
        11: {pt:1.5, DS:1},
        12: {pt:5, SG:1},
        13: {pt:0},
      }
    }
  },
  "109336": {
    id: 109336,
    id_time: 315,
    time: "CHA",
    pos: "MEI",
    nome: "RAFAEL CARVALHEIRA",
    scouts: {
      rdd: {
        1: {pt:9.2, G:1, DS:1, FC:1},
        2: {pt:1.4, FF:1, DS:1, FC:3},
        3: {pt:1.5, DS:1},
        4: {pt:"-"},
        5: {pt:-1.9, CA:1, FC:3},
        6: {pt:5.7, DS:4, FC:1},
        7: {pt:1.5, FS:3},
        8: {pt:2, FF:1, DS:1, FC:1},
        9: {pt:0.9, DS:1, FC:2},
        10: {pt:"-"},
        11: {pt:1.2, DS:1, FC:1},
        12: {pt:"-"},
        13: {pt:0.7, FF:1, FS:1, FC:2},
      }
    }
  },
  "109401": {
    id: 109401,
    id_time: 265,
    time: "BAH",
    pos: "ATA",
    nome: "ERICK PULGA",
    scouts: {
      rdd: {
        1: {pt:3.4, FD:1, FF:1, FS:3, DS:1, CA:1, FC:2},
        2: {pt:0.9, FD:1, FC:1},
        3: {pt:3.2, FS:1, DS:2, FC:1},
        4: {pt:"-"},
        5: {pt:1.5, FS:1, PS:1},
        6: {pt:3.9, FS:2, I:1, DS:2},
        7: {pt:4.1, FF:1, FS:2, I:1, DS:2, FC:2},
        8: {pt:2.4, FS:3, PS:1, I:1},
        9: {pt:2.6, FS:3, I:1, DS:1, FC:1},
        10: {pt:7.2, FS:3, I:3, DS:4},
        11: {pt:5.5, FD:2, FS:4, I:1, DS:1, FC:1},
        12: {pt:1.6, FD:1, FS:1, I:1},
        13: {pt:7.2, A:1, FT:1, FS:3, CA:1, FC:1, PC:1},
      }
    }
  },
  "109573": {
    id: 109573,
    id_time: 266,
    time: "FLU",
    pos: "MEI",
    nome: "MARTINELLI",
    scouts: {
      rdd: {
        1: {pt:1.7, FD:1, FF:1, FC:1},
        2: {pt:1.9, FS:2, DS:1, FC:2},
        3: {pt:4.7, FD:1, FS:1, DS:2},
        4: {pt:-0.4, FD:1, CA:1, FC:2},
        5: {pt:0.2, FF:1, FC:2},
        6: {pt:1.7, FS:1, DS:1, FC:1},
        7: {pt:2.8, FD:1, FF:2},
        8: {pt:2.9, FF:1, FS:2, DS:2, CA:1, FC:3},
        9: {pt:7.5, A:1, FF:1, FS:1, DS:1, FC:1},
        10: {pt:0.6, DS:1, FC:3},
        11: {pt:-1.9, CA:1, FC:3},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "110426": {
    id: 110426,
    id_time: 285,
    time: "INT",
    pos: "LAT",
    nome: "BERNABÉI",
    scouts: {
      rdd: {
        1: {pt:1, FD:1, I:1, DS:1, CA:1, FC:2},
        2: {pt:0.6, FS:1, I:1, DS:1, FC:1, PC:1},
        3: {pt:3, DS:2},
        4: {pt:6.3, FT:1, FF:1, FS:3, I:2, DS:1, FC:1},
        5: {pt:2.3, FD:2, FF:1, FS:2, CA:1, FC:3},
        6: {pt:6.5, FD:1, FF:3, FS:1, DS:2, FC:2},
        7: {pt:"-"},
        8: {pt:9.4, FD:1, FS:1, DS:2, SG:1, FC:1},
        9: {pt:1.7, FF:1, DS:1, FC:2},
        10: {pt:15.7, G:1, FD:1, DS:1, SG:1},
        11: {pt:9.6, FS:1, DS:4, SG:1, CA:1, FC:3},
        12: {pt:"-"},
        13: {pt:9.6, G:1, FF:1, FS:1, DS:1, FC:4},
      }
    }
  },
  "110506": {
    id: 110506,
    id_time: 275,
    time: "PAL",
    pos: "TEC",
    nome: "ABEL FERREIRA",
    scouts: {
      rdd: {
        1: {pt:3.66},
        2: {pt:10.45, V:1},
        3: {pt:7.45, V:1},
        4: {pt:6.96, V:1},
        5: {pt:4.32},
        6: {pt:7.57, V:1},
        7: {pt:7.91, V:1},
        8: {pt:6.44, V:1},
        9: {pt:6.55, V:1},
        10: {pt:5.04, V:1},
        11: {pt:5.76},
        12: {pt:7.51, V:1},
        13: {pt:7.85, V:1},
      }
    }
  },
  "110510": {
    id: 110510,
    id_time: 285,
    time: "INT",
    pos: "LAT",
    nome: "AGUIRRE",
    scouts: {
      rdd: {
        1: {pt:2.7, DS:2, FC:1},
        2: {pt:0.8, FF:1},
        3: {pt:3.8, FF:1, DS:2},
        4: {pt:2.6, FS:1, DS:2, FC:3},
        5: {pt:2.2, FF:1, FS:1, DS:1, FC:2},
        6: {pt:1.4, DS:2, CA:1, FC:2},
        7: {pt:4.2, FD:1, DS:2},
        8: {pt:"-"},
        9: {pt:7.4, A:1, FD:1, DS:1, FC:1},
        10: {pt:5, SG:1},
        11: {pt:"-"},
        12: {pt:2.3, FF:1, DS:1},
        13: {pt:"-"},
      }
    }
  },
  "110715": {
    id: 110715,
    id_time: 280,
    time: "RBB",
    pos: "LAT",
    nome: "ANDRÉS HURTADO",
    scouts: {
      rdd: {
        1: {pt:4.2, FS:1, SG:1, CA:1, FC:1},
        2: {pt:5.5, DS:1, SG:1, CA:1},
        3: {pt:-0.6, FC:2},
        4: {pt:2.3, FF:1, DS:1},
        5: {pt:8.1, FD:1, FF:3, DS:3},
        6: {pt:0},
        7: {pt:"-"},
        8: {pt:0.2, FS:1, FC:1},
        9: {pt:6, FF:1, FS:1, SG:1, FC:1},
        10: {pt:"-"},
        11: {pt:9.5, G:1, DS:1},
        12: {pt:0},
        13: {pt:3.7, FF:1, FS:1, DS:2, FC:2},
      }
    }
  },
  "110750": {
    id: 110750,
    id_time: 280,
    time: "RBB",
    pos: "ZAG",
    nome: "GUSTAVO MARQUES",
    scouts: {
      rdd: {
        1: {pt:9.7, FS:1, DS:3, SG:1, FC:1},
        2: {pt:9, FD:1, FF:2, DS:1, SG:1, FC:1},
        3: {pt:2, FS:1, DS:1},
        4: {pt:"-"},
        5: {pt:5, FS:1, DS:3},
        6: {pt:1.2, FF:1, FS:2, FC:2},
        7: {pt:"-"},
        8: {pt:4.2, FD:1, DS:2},
        9: {pt:7, FS:1, DS:1, SG:1},
        10: {pt:6.7, FS:1, DS:1, SG:1, FC:1},
        11: {pt:2.2, FS:1, DS:2, CA:1, FC:1},
        12: {pt:0},
        13: {pt:4.1, FF:3, FS:1, DS:1, FC:1},
      }
    }
  },
  "110759": {
    id: 110759,
    id_time: 266,
    time: "FLU",
    pos: "ATA",
    nome: "JOHN KENNEDY",
    scouts: {
      rdd: {
        1: {pt:1.6, FD:1, FS:2, FC:2},
        2: {pt:11.9, G:1, FD:1, DS:2, FC:1},
        3: {pt:7.6, FD:2, FF:1, FS:1, DS:3, FC:2},
        4: {pt:0},
        5: {pt:13.9, G:1, FD:3, FF:1, FS:1, I:2, DS:1, FC:1},
        6: {pt:3.8, FD:2, FF:1, DS:1, FC:3},
        7: {pt:2.4, FD:2},
        8: {pt:"-"},
        9: {pt:11.6, G:1, FD:2, FF:3, FC:4},
        10: {pt:11, G:1, FT:1},
        11: {pt:2, FS:1, DS:1},
        12: {pt:8, G:1},
        13: {pt:7.7, G:1, FC:1},
      }
    }
  },
  "111246": {
    id: 111246,
    id_time: 280,
    time: "RBB",
    pos: "ZAG",
    nome: "ALIX VINICIUS",
    scouts: {
      rdd: {
        1: {pt:3.4, SG:1, CA:1, FC:2},
        2: {pt:4.4, SG:1, FC:2},
        3: {pt:"-"},
        4: {pt:-4.8, CV:1, FC:6},
        5: {pt:"-"},
        6: {pt:2.7, DS:2, FC:1},
        7: {pt:3.2, FF:1, DS:2, FC:2},
        8: {pt:-0.1, DS:1, CA:1, FC:2},
        9: {pt:7.7, DS:2, SG:1, FC:1},
        10: {pt:6.2, DS:1, SG:1, FC:1},
        11: {pt:1.1, FS:4, FC:3},
        12: {pt:0.4, FD:1, FF:1, CA:1, FC:2},
        13: {pt:"-"},
      }
    }
  },
  "111309": {
    id: 111309,
    id_time: 284,
    time: "GRE",
    pos: "ZAG",
    nome: "GUSTAVO MARTINS",
    scouts: {
      rdd: {
        1: {pt:10.2, A:1, FF:1, FS:1, DS:3, FC:2},
        2: {pt:"-"},
        3: {pt:-1, PC:1},
        4: {pt:-0.3, FC:1},
        5: {pt:1.7, FD:1, FS:1},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:1.2, FF:2, I:1, FC:1},
        9: {pt:3.4, A:1, CA:1, FC:2},
        10: {pt:7, FF:1, DS:1, SG:1, FC:1},
        11: {pt:3.4, SG:1, CA:1, FC:2},
        12: {pt:-0.3, FF:1, FS:1, CA:1, FC:2},
        13: {pt:"-"},
      }
    }
  },
  "111466": {
    id: 111466,
    id_time: 285,
    time: "INT",
    pos: "ZAG",
    nome: "VICTOR GABRIEL",
    scouts: {
      rdd: {
        1: {pt:3, DS:2},
        2: {pt:4.7, FS:1, DS:3, FC:1},
        3: {pt:1.5, DS:1},
        4: {pt:"-"},
        5: {pt:0.5, DS:2, CA:1, FC:5},
        6: {pt:-0.2, FS:1, DS:1, CA:1, FC:4},
        7: {pt:0},
        8: {pt:5, SG:1},
        9: {pt:3.1, FS:2, DS:2, FC:3},
        10: {pt:3.7, SG:1, CA:1, FC:1},
        11: {pt:"-"},
        12: {pt:4.8, FF:1, FS:2, DS:2},
        13: {pt:-0.8, FF:1, CA:1, FC:2},
      }
    }
  },
  "111831": {
    id: 111831,
    id_time: 263,
    time: "BOT",
    pos: "ATA",
    nome: "MATHEUS MARTINS",
    scouts: {
      rdd: {
        1: {pt:10, G:1, FS:1, DS:1},
        2: {pt:1.2, FD:1},
        3: {pt:0.2, FS:1, FC:1},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:1.2, FD:1},
        7: {pt:1, FF:1, FS:1, FC:1},
        8: {pt:5.3, FF:1, FS:2, DS:3, CA:1},
        9: {pt:2, FS:1, DS:1},
        10: {pt:9.1, G:1, FD:1, FS:1, FC:2},
        11: {pt:0.9, FD:1, FC:1},
        12: {pt:21.6, G:2, FD:2, FS:1, DS:2, FC:1},
        13: {pt:7, FT:1, FD:1, FF:1, FS:1, DS:1},
      }
    }
  },
  "111879": {
    id: 111879,
    id_time: 287,
    time: "VIT",
    pos: "LAT",
    nome: "MATEUS SILVA",
    scouts: {
      rdd: {
        1: {pt:9.7, FF:1, FS:3, DS:2, SG:1, FC:2},
        2: {pt:0},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "112576": {
    id: 112576,
    id_time: 294,
    time: "CFC",
    pos: "MEI",
    nome: "VINI PAULISTA",
    scouts: {
      rdd: {
        1: {pt:0},
        2: {pt:5.3, FF:1, DS:3},
        3: {pt:3, DS:2},
        4: {pt:3.5, FS:4, DS:1},
        5: {pt:0},
        6: {pt:0},
        7: {pt:0.2, FF:1, FC:2},
        8: {pt:3.5, FS:1, DS:2},
        9: {pt:1.7, DS:2, CA:1, FC:1},
        10: {pt:3.2, FS:1, DS:2, FC:1},
        11: {pt:7.7, FD:1, FF:1, DS:4, FC:1},
        12: {pt:6.6, DS:5, FC:3},
        13: {pt:1.8, FF:1, FS:1, DS:1, CA:1},
      }
    }
  },
  "112709": {
    id: 112709,
    id_time: 283,
    time: "CRU",
    pos: "LAT",
    nome: "KAIKI BRUNO",
    scouts: {
      rdd: {
        1: {pt:2.2, FD:1, FF:1, FS:1, FC:1},
        2: {pt:3.2, DS:3, CA:1, FC:1},
        3: {pt:3.7, FS:2, DS:2, FC:1},
        4: {pt:2.2, FF:1, FS:1, DS:1, FC:2},
        5: {pt:4.7, FS:1, DS:3, FC:1},
        6: {pt:12, A:1, FS:2, DS:4},
        7: {pt:6.3, A:1, FS:2, DS:1, FC:4},
        8: {pt:7.5, FF:1, FS:1, DS:1, SG:1, FC:1},
        9: {pt:"-"},
        10: {pt:5.3, FD:1, FS:1, DS:3, FC:3},
        11: {pt:5.1, DS:4, FC:3},
        12: {pt:7.4, DS:2, SG:1, FC:2},
        13: {pt:11.4, FD:1, FS:1, I:1, DS:4, SG:1, FC:4},
      }
    }
  },
  "112863": {
    id: 112863,
    id_time: 275,
    time: "PAL",
    pos: "ATA",
    nome: "RAMÓN SOSA",
    scouts: {
      rdd: {
        1: {pt:1.7, FD:1, FS:1},
        2: {pt:9.7, G:1, FS:1, DS:1, FC:1},
        3: {pt:0},
        4: {pt:4.2, FT:1, DS:1, FC:1},
        5: {pt:-0.3, FC:1},
        6: {pt:"-"},
        7: {pt:-0.6, FS:1, I:1, CA:1},
        8: {pt:0.4, FF:1, I:1, FC:1},
        9: {pt:-0.1, FS:1, FC:2},
        10: {pt:0.5, FS:1},
        11: {pt:1.1, FS:4, FC:3},
        12: {pt:2.7, FF:1, FS:4, DS:1, CA:1, FC:2},
        13: {pt:7, A:1, FD:1, FF:2, I:2, FC:2},
      }
    }
  },
  "112886": {
    id: 112886,
    id_time: 280,
    time: "RBB",
    pos: "ATA",
    nome: "LUCAS BARBOSA",
    scouts: {
      rdd: {
        1: {pt:4, FD:1, FF:1, FS:3, I:1, DS:1, FC:3},
        2: {pt:3.3, FD:1, DS:2, FC:3},
        3: {pt:5.4, FD:1, FF:1, FS:1, DS:3, CA:1, FC:2},
        4: {pt:7.4, FS:4, DS:4, FC:2},
        5: {pt:-0.2, FD:1, FF:1, FS:2, I:1, CA:1, FC:7},
        6: {pt:2.6, FS:3, DS:2, CA:1, FC:3},
        7: {pt:"-"},
        8: {pt:15.2, G:1, FD:3, FF:2, FS:1, DS:1},
        9: {pt:11, G:1, FF:1, FS:2, DS:1, FC:1},
        10: {pt:13.1, A:1, FD:1, FF:3, DS:3},
        11: {pt:2.8, FD:1, FF:1, FS:3, I:1, FC:2},
        12: {pt:1.8, FD:1, FS:2, I:1, FC:1},
        13: {pt:7, FD:2, FF:3, FS:2, DS:1, FC:1},
      }
    }
  },
  "113034": {
    id: 113034,
    id_time: 266,
    time: "FLU",
    pos: "ZAG",
    nome: "FREYTES",
    scouts: {
      rdd: {
        1: {pt:1.2, DS:1, FC:1},
        2: {pt:1, FF:2, FC:2},
        3: {pt:5.4, FS:1, DS:1, SG:1, CA:1, FC:2},
        4: {pt:2.4, FS:2, DS:2, CA:1, FC:2},
        5: {pt:6.2, DS:1, SG:1, FC:1},
        6: {pt:0.2, FS:1, FC:1},
        7: {pt:"-"},
        8: {pt:8.6, DS:3, SG:1, FC:3},
        9: {pt:2.5, FF:1, FS:1, DS:1, FC:1},
        10: {pt:0},
        11: {pt:1.3, FF:1, FS:1},
        12: {pt:1.5, DS:1},
        13: {pt:1.6, FF:2},
      }
    }
  },
  "113103": {
    id: 113103,
    id_time: 275,
    time: "PAL",
    pos: "ATA",
    nome: "FLACO LÓPEZ",
    scouts: {
      rdd: {
        1: {pt:16.1, G:1, FD:1, FF:1, FS:2, DS:4, FC:3},
        2: {pt:4.9, FD:1, FF:1, FS:4, DS:1, FC:2},
        3: {pt:-0.6, I:3, FC:1},
        4: {pt:1.6, FD:1, FS:1, I:1},
        5: {pt:8, G:1, FS:2, I:1, FC:3},
        6: {pt:12.7, G:1, FF:3, FS:4, DS:1, FC:4},
        7: {pt:5.6, FD:1, FS:3, I:1, DS:2},
        8: {pt:6.5, A:1, FF:1, FS:2, FC:1},
        9: {pt:3.5, FF:1, FS:3, DS:1, FC:1},
        10: {pt:6.4, A:1, FS:2, I:2, DS:1, FC:3},
        11: {pt:7.4, FD:1, FF:2, FS:5, DS:2, FC:3},
        12: {pt:3.8, FF:1, FS:3, DS:1},
        13: {pt:9.5, G:1, FF:1, FS:2, FC:1},
      }
    }
  },
  "113113": {
    id: 113113,
    id_time: 293,
    time: "CAP",
    pos: "LAT",
    nome: "BENAVÍDEZ",
    scouts: {
      rdd: {
        1: {pt:9.2, FF:1, FS:1, I:1, DS:2, SG:1},
        2: {pt:"-"},
        3: {pt:-0.6, FC:2},
        4: {pt:6.7, A:1, FS:1, DS:1, FC:1},
        5: {pt:"-"},
        6: {pt:2, FS:1, DS:1},
        7: {pt:3.7, FS:2, DS:2, FC:1},
        8: {pt:11.4, A:1, FS:1, DS:1, SG:1, FC:2},
        9: {pt:0.8, FD:1, DS:1, CA:1, FC:3},
        10: {pt:2, FS:1, DS:1},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:4.7, A:1, FS:2, CA:1, FC:1},
      }
    }
  },
  "113359": {
    id: 113359,
    id_time: 276,
    time: "SAO",
    pos: "MEI",
    nome: "PABLO MAIA",
    scouts: {
      rdd: {
        1: {pt:0},
        2: {pt:5.7, DS:4, FC:1},
        3: {pt:-0.3, FF:1, FS:1, CA:1, FC:2},
        4: {pt:2, FF:1, DS:1, FC:1},
        5: {pt:-0.6, FC:2},
        6: {pt:0.5, FS:1},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:3.9, FF:1, FS:2, DS:2, FC:3},
        10: {pt:-0.3, FC:1},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "113397": {
    id: 113397,
    id_time: 265,
    time: "BAH",
    pos: "ATA",
    nome: "CRISTIAN OLIVERA",
    scouts: {
      rdd: {
        1: {pt:2.9, FD:1, FS:1, DS:1, FC:1},
        2: {pt:10, G:1, FS:1, DS:1},
        3: {pt:5.7, FS:3, I:2, DS:4, CA:1, FC:2},
        4: {pt:"-"},
        5: {pt:1.4, FS:4, FC:2},
        6: {pt:2.4, FF:1, FS:4, I:1, FC:1},
        7: {pt:8.4, FD:3, FF:1, FS:2, DS:2},
        8: {pt:4.9, A:1, FS:1, FC:2},
        9: {pt:11, FD:2, FF:1, FS:4, I:2, DS:4},
        10: {pt:3.1, FD:2, FF:1, FS:1, FC:2},
        11: {pt:4.9, FT:1, FS:4, I:1},
        12: {pt:3.9, FD:2, FS:3},
        13: {pt:1.3, FF:1, FS:1},
      }
    }
  },
  "114802": {
    id: 114802,
    id_time: 275,
    time: "PAL",
    pos: "ATA",
    nome: "VITOR ROQUE",
    scouts: {
      rdd: {
        1: {pt:7.6, G:1, FD:1, CA:1, FC:2},
        2: {pt:4.4, FD:1, FF:1, FS:4, I:2, DS:1, FC:3},
        3: {pt:14, G:1, FD:1, FF:1, FS:2, DS:2},
        4: {pt:21.2, G:1, FT:1, FS:7, PS:1, DS:4, FC:1},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:2.1, FF:2, FS:1},
        8: {pt:3, FS:3, DS:1},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:0.9, FS:2, I:1},
        13: {pt:"-"},
      }
    }
  },
  "115025": {
    id: 115025,
    id_time: 277,
    time: "SAN",
    pos: "MEI",
    nome: "MIGUELITO",
    scouts: {
      rdd: {
        1: {pt:3.6, FF:2, FS:1, DS:1},
        2: {pt:-0.3, FC:1},
        3: {pt:1.3, FF:2, FC:1},
        4: {pt:3, DS:2},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:-0.1, DS:1, CA:1, FC:2},
      }
    }
  },
  "115100": {
    id: 115100,
    id_time: 267,
    time: "VAS",
    pos: "MEI",
    nome: "MATHEUS FRANÇA",
    scouts: {
      rdd: {
        1: {pt:0.8, FF:1},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:0.9, DS:1, FC:2},
        9: {pt:0},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "115479": {
    id: 115479,
    id_time: 285,
    time: "INT",
    pos: "TEC",
    nome: "PAULO PEZZOLANO",
    scouts: {
      rdd: {
        1: {pt:2.26},
        2: {pt:4.28},
        3: {pt:4.89},
        4: {pt:5.18},
        5: {pt:3.62},
        6: {pt:2.74},
        7: {pt:3.75, V:1},
        8: {pt:9, V:1},
        9: {pt:3.95},
        10: {pt:7.15, V:1},
        11: {pt:4.45},
        12: {pt:5.25},
        13: {pt:4.35},
      }
    }
  },
  "115914": {
    id: 115914,
    id_time: 262,
    time: "FLA",
    pos: "MEI",
    nome: "EVERTTON ARAÚJO",
    scouts: {
      rdd: {
        1: {pt:2.1, FF:2, FS:1},
        2: {pt:-0.6, FC:2},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:1.3, FF:2, FC:1},
        7: {pt:"-"},
        8: {pt:-1, FF:1, DS:1, CV:1, FC:1},
        9: {pt:"-"},
        10: {pt:0.8, FF:1},
        11: {pt:2.5, FF:1, DS:2, CA:1, FC:1},
        12: {pt:-0.6, FC:2},
        13: {pt:10, A:1, FT:1, FS:1, DS:1},
      }
    }
  },
  "116034": {
    id: 116034,
    id_time: 282,
    time: "CAM",
    pos: "MEI",
    nome: "VICTOR HUGO",
    scouts: {
      rdd: {
        1: {pt:9.5, G:1, DS:1},
        2: {pt:1.3, FF:1, FS:1},
        3: {pt:7.7, A:1, FD:1, DS:1},
        4: {pt:8, G:1},
        5: {pt:3.5, FS:1, DS:2},
        6: {pt:0},
        7: {pt:1.5, DS:1},
        8: {pt:2.1, FD:2, FC:1},
        9: {pt:0.5, FS:1},
        10: {pt:13.3, G:1, FF:1, FS:3, DS:2},
        11: {pt:0.9, FD:1, FC:1},
        12: {pt:3.7, FD:1, FS:2, DS:1},
        13: {pt:2.5, FD:1, FF:1, FS:1},
      }
    }
  },
  "116461": {
    id: 116461,
    id_time: 287,
    time: "VIT",
    pos: "LAT",
    nome: "JAMERSON",
    scouts: {
      rdd: {
        1: {pt:6.5, DS:1, SG:1},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:0},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:5.8, FF:1, SG:1},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "116706": {
    id: 116706,
    id_time: 267,
    time: "VAS",
    pos: "ATA",
    nome: "ANDRÉS GÓMEZ",
    scouts: {
      rdd: {
        1: {pt:6, FD:2, FF:1, FS:1, I:1, DS:2, FC:2},
        2: {pt:13.1, A:1, FD:1, FS:3, DS:4, FC:2},
        3: {pt:6.3, FD:2, FF:1, FS:1, DS:3, CA:1, FC:3},
        4: {pt:5.6, A:1, FF:1, FS:1, I:1, FC:2},
        5: {pt:11.5, FD:2, FF:2, FS:6, DS:3},
        6: {pt:4.7, FT:1, DS:2, CA:1, FC:1},
        7: {pt:10, FD:1, FF:2, DS:5, FC:1},
        8: {pt:8.3, FT:1, FD:1, FF:2, FS:1, DS:2, CA:1},
        9: {pt:"-"},
        10: {pt:1.6, FD:1, FS:2, FC:2},
        11: {pt:10.8, G:1, FF:1, FS:2, I:2, DS:1, FC:1},
        12: {pt:16.9, G:1, FT:1, FF:3, FS:1, DS:2},
        13: {pt:4.3, FD:2, FF:2, FS:3, FC:4},
      }
    }
  },
  "117330": {
    id: 117330,
    id_time: 267,
    time: "VAS",
    pos: "ZAG",
    nome: "ROBERT RENAN",
    scouts: {
      rdd: {
        1: {pt:1.9, FS:2, DS:1, FC:2},
        2: {pt:0.9, DS:1, FC:2},
        3: {pt:1.4, FF:1, DS:1, FC:3},
        4: {pt:3.5, FS:1, DS:2},
        5: {pt:1.2, DS:1, FC:1},
        6: {pt:1.5, DS:1},
        7: {pt:1.5, DS:1},
        8: {pt:0},
        9: {pt:0},
        10: {pt:3, DS:2},
        11: {pt:0.2, FS:1, FC:1},
        12: {pt:2.4, DS:2, FC:2},
        13: {pt:1.4, FD:1, FF:1, FC:2},
      }
    }
  },
  "117403": {
    id: 117403,
    id_time: 2305,
    time: "MIR",
    pos: "ATA",
    nome: "RENATO MARQUES",
    scouts: {
      rdd: {
        1: {pt:2.1, FD:1, FF:1, FS:2, FC:3},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:0.8, FF:1},
        12: {pt:-3, CV:1},
        13: {pt:"-"},
      }
    }
  },
  "117632": {
    id: 117632,
    id_time: 264,
    time: "COR",
    pos: "MEI",
    nome: "GARRO",
    scouts: {
      rdd: {
        1: {pt:10, A:1, FD:1, FF:1, FS:3, DS:1},
        2: {pt:"-"},
        3: {pt:7, A:1, FS:1, DS:1},
        4: {pt:5.7, A:1, FS:2, FC:1},
        5: {pt:1.1, FD:1, FS:1, FC:2},
        6: {pt:1.6, FD:1, FS:1, I:1},
        7: {pt:7.5, FT:1, FD:1, FF:1, FS:5},
        8: {pt:0, FF:1, FS:1, CA:1, FC:1},
        9: {pt:2.8, FF:1, FS:1, DS:1},
        10: {pt:4.4, FD:2, FS:4},
        11: {pt:1, FS:2},
        12: {pt:0.3, FF:1, FS:1, CA:1},
        13: {pt:8.4, A:1, FD:1, FF:1, FS:4, FC:2},
      }
    }
  },
  "117910": {
    id: 117910,
    id_time: 264,
    time: "COR",
    pos: "MEI",
    nome: "BRENO BIDON",
    scouts: {
      rdd: {
        1: {pt:14.7, G:1, FT:1, FS:4, DS:2, CA:1, FC:1},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:0.2, FS:1, FC:1},
        5: {pt:1.7, FF:1, FS:3, FC:2},
        6: {pt:1.9, FS:2, DS:1, FC:2},
        7: {pt:2, FS:1, DS:1},
        8: {pt:2.6, FS:4, DS:1, FC:3},
        9: {pt:2, FS:1, DS:1},
        10: {pt:3.5, FS:4, DS:1},
        11: {pt:3, FS:3, DS:1},
        12: {pt:2.2, FS:2, DS:1, FC:1},
        13: {pt:2.5, FS:5},
      }
    }
  },
  "117930": {
    id: 117930,
    id_time: 294,
    time: "CFC",
    pos: "ATA",
    nome: "LAVEGA",
    scouts: {
      rdd: {
        1: {pt:1.5, FF:1, FS:2, FC:1},
        2: {pt:10.3, G:1, FF:1, DS:1},
        3: {pt:1.5, DS:1},
        4: {pt:1, FF:1, DS:1, CA:1, FC:1},
        5: {pt:3.4, FF:1, I:1, DS:2, FC:1},
        6: {pt:1.5, DS:1},
        7: {pt:7.8, G:1, FD:1, I:1, CA:1, FC:1},
        8: {pt:0},
        9: {pt:0.2, DS:1, CA:1, FC:1},
        10: {pt:"-"},
        11: {pt:8.4, G:1, FS:1, I:1},
        12: {pt:-0.4, I:1, FC:1},
        13: {pt:0},
      }
    }
  },
  "117965": {
    id: 117965,
    id_time: 263,
    time: "BOT",
    pos: "TEC",
    nome: "MARTÍN ANSELMI",
    scouts: {
      rdd: {
        1: {pt:11.04, V:1},
        2: {pt:5.02},
        3: {pt:3.85},
        4: {pt:0},
        5: {pt:0},
        6: {pt:1.82},
        7: {pt:4.05},
        8: {pt:6.97, V:1},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "118774": {
    id: 118774,
    id_time: 282,
    time: "CAM",
    pos: "MEI",
    nome: "ALEXSANDER",
    scouts: {
      rdd: {
        1: {pt:1.7, FS:3, DS:1, CA:1, FC:1},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:0},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "118775": {
    id: 118775,
    id_time: 277,
    time: "SAN",
    pos: "ATA",
    nome: "LAUTARO DÍAZ",
    scouts: {
      rdd: {
        1: {pt:5.8, FT:1, FF:2, DS:1, FC:1},
        2: {pt:0.5, FS:1},
        3: {pt:0},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:9.6, G:1, FF:2},
        11: {pt:1.5, DS:1},
        12: {pt:0},
        13: {pt:0.9, FD:1, FC:1},
      }
    }
  },
  "120433": {
    id: 120433,
    id_time: 293,
    time: "CAP",
    pos: "LAT",
    nome: "LÉO DERIK",
    scouts: {
      rdd: {
        1: {pt:10, FS:1, DS:3, SG:1},
        2: {pt:"-"},
        3: {pt:0},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:0},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:2.7, FD:1, DS:1},
        10: {pt:1.5, DS:1},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "121792": {
    id: 121792,
    id_time: 284,
    time: "GRE",
    pos: "ATA",
    nome: "ANDRÉ",
    scouts: {
      rdd: {
        1: {pt:-1, CA:1},
        2: {pt:2.1, FD:2, FC:1},
        3: {pt:2.5, FF:1, DS:2, CA:1, FC:1},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "122394": {
    id: 122394,
    id_time: 280,
    time: "RBB",
    pos: "MEI",
    nome: "GUSTAVINHO",
    scouts: {
      rdd: {
        1: {pt:7.5, FD:3, FF:1, FS:2, DS:2, FC:3},
        2: {pt:12.2, G:1, FD:1, DS:2},
        3: {pt:-0.1, FS:1, FC:2},
        4: {pt:5.9, FS:1, DS:4, FC:2},
        5: {pt:1.2, DS:1, FC:1},
        6: {pt:3.6, DS:3, FC:3},
        7: {pt:"-"},
        8: {pt:1.2, DS:1, FC:1},
        9: {pt:-0.8, FS:1, CA:1, FC:1},
        10: {pt:"-"},
        11: {pt:-0.3, FC:1},
        12: {pt:"-"},
        13: {pt:0},
      }
    }
  },
  "122441": {
    id: 122441,
    id_time: 364,
    time: "REM",
    pos: "ZAG",
    nome: "KAYKY ALMEIDA",
    scouts: {
      rdd: {
        1: {pt:0.6, DS:1, FC:3},
        2: {pt:1.5, DS:1},
        3: {pt:4.1, FD:2, DS:2, CA:1, FC:1},
        4: {pt:1.7, FS:1, DS:1, FC:1},
        5: {pt:"-"},
        6: {pt:0},
        7: {pt:3, DS:2},
        8: {pt:2.3, FF:1, DS:1},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "122485": {
    id: 122485,
    id_time: 267,
    time: "VAS",
    pos: "MEI",
    nome: "BARROS",
    scouts: {
      rdd: {
        1: {pt:9, FS:6, DS:4},
        2: {pt:5.5, FF:1, FS:1, DS:4, FC:6},
        3: {pt:9, FF:2, FS:6, DS:4, CA:1, FC:2},
        4: {pt:17, G:1, FF:1, FS:5, DS:4, FC:1},
        5: {pt:2, FS:1, DS:1},
        6: {pt:13.4, G:2, FS:2, CV:1, FC:2},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:0.5, FS:1},
        10: {pt:3.7, FS:5, DS:1, FC:1},
        11: {pt:-0.1, FS:1, FC:2},
        12: {pt:1.7, FF:1, FS:3, FC:2},
        13: {pt:1.1, FS:3, DS:1, CA:1, FC:3},
      }
    }
  },
  "122487": {
    id: 122487,
    id_time: 267,
    time: "VAS",
    pos: "ATA",
    nome: "GB",
    scouts: {
      rdd: {
        1: {pt:0},
        2: {pt:"-"},
        3: {pt:0},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "122781": {
    id: 122781,
    id_time: 277,
    time: "SAN",
    pos: "ATA",
    nome: "CABALLERO",
    scouts: {
      rdd: {
        1: {pt:1.6, FF:2},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "123625": {
    id: 123625,
    id_time: 315,
    time: "CHA",
    pos: "ATA",
    nome: "ÍTALO",
    scouts: {
      rdd: {
        1: {pt:2.9, FS:1, PS:1, I:1, DS:1},
        2: {pt:-0.1, I:1},
        3: {pt:1.3, FF:1, FS:1},
        4: {pt:"-"},
        5: {pt:2, FS:1, DS:1},
        6: {pt:2.7, DS:2, FC:1},
        7: {pt:4.3, FF:1, FS:1, DS:2},
        8: {pt:2.8, FF:1, FS:2, I:2, DS:1, FC:1},
        9: {pt:0.2, FF:1, FC:2},
        10: {pt:1.8, FF:1, FS:2},
        11: {pt:1.3, FF:1, FS:1},
        12: {pt:1.2, DS:1, FC:1},
        13: {pt:"-"},
      }
    }
  },
  "123648": {
    id: 123648,
    id_time: 294,
    time: "CFC",
    pos: "ATA",
    nome: "LUCAS RONIER",
    scouts: {
      rdd: {
        1: {pt:5, FS:1, DS:3},
        2: {pt:7.8, A:1, FS:2, DS:2, FC:4},
        3: {pt:15.1, A:2, FF:2, FS:1, DS:2},
        4: {pt:11.4, FT:1, FD:1, FF:4, FS:5, DS:1},
        5: {pt:17.5, G:1, FF:1, FS:2, DS:6, CA:1, FC:1},
        6: {pt:3.7, FS:4, DS:2, CA:1, FC:1},
        7: {pt:2, FS:1, DS:1},
        8: {pt:4.5, FS:3, DS:2},
        9: {pt:12.3, FT:1, FD:1, FF:2, FS:4, DS:3},
        10: {pt:5, FD:1, FF:1, FS:3, DS:1},
        11: {pt:2.8, FF:3, FS:2, FC:2},
        12: {pt:4.9, FS:4, I:1, DS:3, FC:5},
        13: {pt:7.4, FD:2, FF:1, FS:3, DS:2, FC:1},
      }
    }
  },
  "123869": {
    id: 123869,
    id_time: 293,
    time: "CAP",
    pos: "ZAG",
    nome: "AGUIRRE",
    scouts: {
      rdd: {
        1: {pt:6.7, FS:1, DS:1, SG:1, FC:1},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:1.2, FD:1},
        5: {pt:"-"},
        6: {pt:0.5, FS:1},
        7: {pt:5.7, FT:1, FD:1, DS:1},
        8: {pt:6.5, DS:1, SG:1},
        9: {pt:0.2, FD:1, FS:1, FC:5},
        10: {pt:-1.7, FS:1, CA:1, FC:4},
        11: {pt:4.7, SG:1, FC:1},
        12: {pt:0.2, FS:1, FC:1},
        13: {pt:"-"},
      }
    }
  },
  "124239": {
    id: 124239,
    id_time: 280,
    time: "RBB",
    pos: "ATA",
    nome: "HENRY MOSQUERA",
    scouts: {
      rdd: {
        1: {pt:2.9, FD:2, FF:1, FC:1},
        2: {pt:4.8, FF:3, FS:2, I:1, DS:1},
        3: {pt:1.3, FD:1, FS:2, FC:3},
        4: {pt:3, FD:1, FF:2, FS:1, FC:1},
        5: {pt:4.3, FD:1, FF:2, FS:2, DS:1, CA:1},
        6: {pt:2.3, FF:1, DS:1},
        7: {pt:-0.6, FC:2},
        8: {pt:8.7, A:1, FF:1, I:1, DS:2},
        9: {pt:8.4, A:1, FF:1, I:1, DS:2, FC:1},
        10: {pt:6.5, FD:1, FS:2, I:2, DS:3},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:2.2, FF:1, FS:1, DS:1, FC:2},
      }
    }
  },
  "124481": {
    id: 124481,
    id_time: 263,
    time: "BOT",
    pos: "LAT",
    nome: "MATEO PONTE",
    scouts: {
      rdd: {
        1: {pt:6.2, DS:1, SG:1, FC:1},
        2: {pt:-0.8, FS:1, CA:1, FC:1},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:0.5, FS:1},
        7: {pt:"-"},
        8: {pt:3.5, FS:1, DS:2},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:5.7, A:1, FS:2, FC:1},
      }
    }
  },
  "124526": {
    id: 124526,
    id_time: 275,
    time: "PAL",
    pos: "LAT",
    nome: "GIAY",
    scouts: {
      rdd: {
        1: {pt:0.5, FS:1},
        2: {pt:"-"},
        3: {pt:-0.3, FC:1},
        4: {pt:2.7, DS:2, FC:1},
        5: {pt:0.5, FS:1},
        6: {pt:9.7, FS:1, DS:3, SG:1, FC:1},
        7: {pt:5.9, FS:1, DS:4, FC:2},
        8: {pt:7.7, DS:2, SG:1, FC:1},
        9: {pt:4, FS:2, DS:2},
        10: {pt:-0.5, I:1, DS:1, CA:1, FC:3},
        11: {pt:7.6, FS:1, DS:2, SG:1, FC:3},
        12: {pt:9.5, FS:3, DS:2, SG:1},
        13: {pt:11.9, FS:2, DS:5, SG:1, CA:1, FC:2},
      }
    }
  },
  "124757": {
    id: 124757,
    id_time: 263,
    time: "BOT",
    pos: "ATA",
    nome: "NATHAN FERNANDES",
    scouts: {
      rdd: {
        1: {pt:5.5, A:1, FS:1},
        2: {pt:0},
        3: {pt:4, FS:2, DS:2},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "124912": {
    id: 124912,
    id_time: 283,
    time: "CRU",
    pos: "ZAG",
    nome: "JONATHAN JESUS",
    scouts: {
      rdd: {
        1: {pt:0},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:0.5, FS:1},
        11: {pt:2, FS:1, DS:1},
        12: {pt:5, SG:1},
        13: {pt:5.9, DS:1, SG:1, FC:2},
      }
    }
  },
  "125746": {
    id: 125746,
    id_time: 293,
    time: "CAP",
    pos: "MEI",
    nome: "DUDU",
    scouts: {
      rdd: {
        1: {pt:0},
        2: {pt:"-"},
        3: {pt:0.5, FS:1},
        4: {pt:0},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:0.5, FS:1},
        8: {pt:14.2, G:1, FD:1, FS:1, DS:3},
        9: {pt:1, FS:2},
        10: {pt:1.2, DS:1, FC:1},
        11: {pt:2.2, FF:2, DS:1, FC:3},
        12: {pt:-0.3, FC:1},
        13: {pt:1.5, DS:1},
      }
    }
  },
  "125803": {
    id: 125803,
    id_time: 294,
    time: "CFC",
    pos: "GOL",
    nome: "PEDRO MORISCO",
    scouts: {
      rdd: {
        1: {pt:11.7, FS:2, DE:9, GS:1},
        2: {pt:2.9, DE:3, GS:1},
        3: {pt:3.5, DE:5, GS:3},
        4: {pt:1.9, DE:3, CA:1, PC:1},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "125926": {
    id: 125926,
    id_time: 293,
    time: "CAP",
    pos: "MEI",
    nome: "ZAPELLI",
    scouts: {
      rdd: {
        1: {pt:2.5, FS:2, DS:1},
        2: {pt:"-"},
        3: {pt:6.7, FF:1, FS:1, DS:4, FC:2},
        4: {pt:-0.3, FF:1, FS:1, CA:1, FC:2},
        5: {pt:"-"},
        6: {pt:4, A:1, FF:1, DS:1, CV:1, FC:1},
        7: {pt:"-"},
        8: {pt:0},
        9: {pt:2.1, FF:2, FS:1},
        10: {pt:"-"},
        11: {pt:1.7, DS:2, CA:1, FC:1},
        12: {pt:0.5, FS:1},
        13: {pt:-1, CA:1},
      }
    }
  },
  "126120": {
    id: 126120,
    id_time: 280,
    time: "RBB",
    pos: "MEI",
    nome: "MARCELINHO",
    scouts: {
      rdd: {
        1: {pt:6.3, A:1, FF:2, FC:1},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:3.2, FD:1, FS:1, DS:1},
        11: {pt:"-"},
        12: {pt:-0.7, I:1, FC:2},
        13: {pt:"-"},
      }
    }
  },
  "126182": {
    id: 126182,
    id_time: 285,
    time: "INT",
    pos: "MEI",
    nome: "PAULINHO",
    scouts: {
      rdd: {
        1: {pt:0.2, DS:1, CA:1, FC:1},
        2: {pt:3, FD:1, FS:2, I:1, DS:1, FC:2},
        3: {pt:0.4, FS:1, DS:1, CA:1, FC:2},
        4: {pt:2, FF:1, DS:1, FC:1},
        5: {pt:8.2, FF:1, FS:4, DS:4, FC:2},
        6: {pt:-1.1, FS:1, CA:1, FC:2},
        7: {pt:"-"},
        8: {pt:7.7, FD:1, FF:1, DS:4, FC:1},
        9: {pt:1.1, FF:1, FS:2, DS:1, CA:1, FC:4},
        10: {pt:4.2, FS:3, DS:2, FC:1},
        11: {pt:0},
        12: {pt:2.9, FD:1, FS:1, DS:1, FC:1},
        13: {pt:0.5, FF:1, FC:1},
      }
    }
  },
  "126471": {
    id: 126471,
    id_time: 277,
    time: "SAN",
    pos: "MEI",
    nome: "BARREAL",
    scouts: {
      rdd: {
        1: {pt:12.6, G:1, FF:2, DS:2},
        2: {pt:5.6, FD:2, FF:1, FS:3, DS:1, FC:2},
        3: {pt:1.2, DS:1, FC:1},
        4: {pt:6.3, FF:1, FS:1, I:1, DS:4, FC:3},
        5: {pt:"-"},
        6: {pt:4.1, FD:1, FF:1, FS:2, DS:2, CA:1, FC:3},
        7: {pt:1.8, FF:1, FS:2},
        8: {pt:0.3, FS:1, I:1, DS:1, CA:1, FC:2},
        9: {pt:0.6, DS:1, FC:3},
        10: {pt:0.3, FF:1, DS:1, CA:1, PC:1},
        11: {pt:"-"},
        12: {pt:8, G:1},
        13: {pt:"-"},
      }
    }
  },
  "126977": {
    id: 126977,
    id_time: 294,
    time: "CFC",
    pos: "TEC",
    nome: "FERNANDO SEABRA",
    scouts: {
      rdd: {
        1: {pt:4.32},
        2: {pt:5.49, V:1},
        3: {pt:5.51},
        4: {pt:4.06},
        5: {pt:8.79, V:1},
        6: {pt:7.16, V:1},
        7: {pt:7.77, V:1},
        8: {pt:1.53},
        9: {pt:2.76},
        10: {pt:4.37},
        11: {pt:5.91},
        12: {pt:9.12, V:1},
        13: {pt:2.51},
      }
    }
  },
  "128433": {
    id: 128433,
    id_time: 267,
    time: "VAS",
    pos: "MEI",
    nome: "JOHAN ROJAS",
    scouts: {
      rdd: {
        1: {pt:1.7, FD:1, FF:1, FC:1},
        2: {pt:0},
        3: {pt:-0.3, FC:1},
        4: {pt:3.4, FF:1, I:1, DS:2, FC:1},
        5: {pt:0.9, FD:1, FC:1},
        6: {pt:-1, CA:1},
        7: {pt:5.2, A:1, FS:1, FC:1},
        8: {pt:-0.3, FC:1},
        9: {pt:"-"},
        10: {pt:1.7, FD:1, FS:1},
        11: {pt:4.7, FT:1, FD:1, FF:1, FC:1},
        12: {pt:1.3, FF:1, FS:1},
        13: {pt:1.9, FD:2, FF:1, CA:1, FC:1},
      }
    }
  },
  "130414": {
    id: 130414,
    id_time: 315,
    time: "CHA",
    pos: "MEI",
    nome: "ROBERT",
    scouts: {
      rdd: {
        1: {pt:3, DS:2},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "130608": {
    id: 130608,
    id_time: 275,
    time: "PAL",
    pos: "ATA",
    nome: "RIQUELME FILLIPI",
    scouts: {
      rdd: {
        1: {pt:-0.3, FC:1},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "130612": {
    id: 130612,
    id_time: 275,
    time: "PAL",
    pos: "ATA",
    nome: "LUIGHI",
    scouts: {
      rdd: {
        1: {pt:0},
        2: {pt:0},
        3: {pt:1.7, FS:1, DS:1, FC:1},
        4: {pt:"-"},
        5: {pt:0.7, FF:1, DS:1, CA:1, FC:2},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:0.9, FS:2, DS:1, CA:1, FC:2},
        11: {pt:2.5, FS:2, DS:1},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "130650": {
    id: 130650,
    id_time: 266,
    time: "FLU",
    pos: "MEI",
    nome: "BERNAL",
    scouts: {
      rdd: {
        1: {pt:-0.3, FC:1},
        2: {pt:0},
        3: {pt:1.6, FS:2, DS:1, FC:3},
        4: {pt:-0.1, FS:1, FC:2},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:7.6, FF:3, FS:1, DS:4, CA:1, FC:1},
        13: {pt:3.8, FF:1, DS:2},
      }
    }
  },
  "130843": {
    id: 130843,
    id_time: 293,
    time: "CAP",
    pos: "ZAG",
    nome: "ARTHUR DIAS",
    scouts: {
      rdd: {
        1: {pt:8, DS:2, SG:1},
        2: {pt:"-"},
        3: {pt:4.2, DS:3, FC:1},
        4: {pt:0.8, FS:2, I:1, DS:1, CA:1, FC:2},
        5: {pt:"-"},
        6: {pt:0.5, FS:1},
        7: {pt:1.7, DS:2, CA:1, FC:1},
        8: {pt:8, DS:2, SG:1},
        9: {pt:"-"},
        10: {pt:0},
        11: {pt:9.2, FS:3, DS:2, SG:1, FC:1},
        12: {pt:4, FF:1, FS:1, DS:2, FC:1},
        13: {pt:2.5, FF:1, DS:2, CA:1, FC:1},
      }
    }
  },
  "130906": {
    id: 130906,
    id_time: 293,
    time: "CAP",
    pos: "MEI",
    nome: "RIQUELME",
    scouts: {
      rdd: {
        1: {pt:-0.3, FC:1},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "131832": {
    id: 131832,
    id_time: 293,
    time: "CAP",
    pos: "MEI",
    nome: "PORTILLA",
    scouts: {
      rdd: {
        1: {pt:-1.4, FS:1, CA:1, FC:3},
        2: {pt:"-"},
        3: {pt:0.9, DS:1, FC:2},
        4: {pt:-0.6, FC:2},
        5: {pt:"-"},
        6: {pt:0},
        7: {pt:3.1, FS:2, DS:2, FC:3},
        8: {pt:4, FS:2, DS:2},
        9: {pt:1.3, FF:2, FC:1},
        10: {pt:4.7, FD:1, FS:1, DS:2},
        11: {pt:-0.3, FC:1},
        12: {pt:-1.6, CA:1, FC:2},
        13: {pt:4.1, FS:1, DS:3, FC:3},
      }
    }
  },
  "132071": {
    id: 132071,
    id_time: 266,
    time: "FLU",
    pos: "ATA",
    nome: "SERNA",
    scouts: {
      rdd: {
        1: {pt:0.5, FF:1, FC:1},
        2: {pt:2.5, FD:1, FF:1, FS:1},
        3: {pt:4, FD:1, FF:1, FS:1, DS:1},
        4: {pt:0.9, FF:1, FS:1, I:1, FC:1},
        5: {pt:-0.3, FC:1},
        6: {pt:1.5, DS:1},
        7: {pt:0.5, FS:1},
        8: {pt:0.2, FS:1, FC:1},
        9: {pt:10.8, A:1, FT:1, FD:1, FS:1, I:1, DS:1, FC:1},
        10: {pt:3.7, FS:2, DS:2, FC:1},
        11: {pt:1.3, FS:1, I:1, DS:1, FC:2},
        12: {pt:3.3, FF:1, FS:2, DS:1},
        13: {pt:1.2, FF:1, FS:1, I:1},
      }
    }
  },
  "132264": {
    id: 132264,
    id_time: 283,
    time: "CRU",
    pos: "ATA",
    nome: "ARROYO",
    scouts: {
      rdd: {
        1: {pt:1.7, FD:1, FS:1},
        2: {pt:0.5, FF:1, FC:1},
        3: {pt:"-"},
        4: {pt:-0.6, FC:2},
        5: {pt:-0.3, FC:1},
        6: {pt:3.2, FD:1, FF:1, DS:1, FC:1},
        7: {pt:2.6, FD:1, FS:3, DS:1, CA:1, FC:2},
        8: {pt:2.3, I:1, DS:2, FC:2},
        9: {pt:3.4, FD:1, FS:2, DS:1, FC:1},
        10: {pt:9.2, A:1, FD:1, FS:6},
        11: {pt:0.9, FD:1, FC:1},
        12: {pt:6.6, FD:1, FF:4, FS:2, DS:1, FC:1},
        13: {pt:9, G:1, FD:1, I:1, DS:1, CA:1, FC:2},
      }
    }
  },
  "132274": {
    id: 132274,
    id_time: 280,
    time: "RBB",
    pos: "MEI",
    nome: "IGNACIO SOSA",
    scouts: {
      rdd: {
        1: {pt:0.4, FS:1, DS:1, CA:1, FC:2},
        2: {pt:-1.3, CA:1, FC:1},
        3: {pt:0.9, FS:3, FC:2},
        4: {pt:"-"},
        5: {pt:0.5, FS:1},
        6: {pt:"-"},
        7: {pt:2.5, FF:1, FS:4, FC:1},
        8: {pt:5.5, FS:2, DS:3},
        9: {pt:0.4, FD:1, FS:1, CA:1, FC:1},
        10: {pt:"-"},
        11: {pt:0.1, FS:1, DS:1, CA:1, FC:3},
        12: {pt:2.7, DS:2, FC:1},
        13: {pt:2.5, FS:2, DS:1},
      }
    }
  },
  "132553": {
    id: 132553,
    id_time: 266,
    time: "FLU",
    pos: "ZAG",
    nome: "JEMMES",
    scouts: {
      rdd: {
        1: {pt:5.5, FS:2, DS:3},
        2: {pt:2.2, FS:1, DS:2, CA:1, FC:1},
        3: {pt:8, DS:2, SG:1},
        4: {pt:"-"},
        5: {pt:9.2, DS:3, SG:1, FC:1},
        6: {pt:0},
        7: {pt:-0.3, FC:1},
        8: {pt:3.7, SG:1, CA:1, FC:1},
        9: {pt:2, FS:1, DS:1},
        10: {pt:"-"},
        11: {pt:3.8, FF:1, DS:2},
        12: {pt:1.1, I:1, DS:1, FC:1},
        13: {pt:1.2, DS:1, FC:1},
      }
    }
  },
  "132580": {
    id: 132580,
    id_time: 280,
    time: "RBB",
    pos: "ATA",
    nome: "VINICINHO",
    scouts: {
      rdd: {
        1: {pt:0},
        2: {pt:"-"},
        3: {pt:0.5, FS:1},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:2.5, FS:2, DS:1},
        7: {pt:4.2, FD:1, FS:6},
        8: {pt:"-"},
        9: {pt:1.5, DS:1},
        10: {pt:"-"},
        11: {pt:4, FS:2, DS:2},
        12: {pt:6.1, FS:1, I:1, DS:4, FC:1},
        13: {pt:1, FS:2},
      }
    }
  },
  "133543": {
    id: 133543,
    id_time: 264,
    time: "COR",
    pos: "ATA",
    nome: "GUI NEGÃO",
    scouts: {
      rdd: {
        1: {pt:0},
        2: {pt:"-"},
        3: {pt:0},
        4: {pt:"-"},
        5: {pt:2.7, DS:2, FC:1},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:2.7, DS:2, FC:1},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "137542": {
    id: 137542,
    id_time: 283,
    time: "CRU",
    pos: "ATA",
    nome: "KAIQUE KENJI",
    scouts: {
      rdd: {
        1: {pt:-0.5, FF:1, CA:1, FC:1},
        2: {pt:"-"},
        3: {pt:0.5, FS:1},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:0},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "139076": {
    id: 139076,
    id_time: 262,
    time: "FLA",
    pos: "TEC",
    nome: "FILIPE LUÍS",
    scouts: {
      rdd: {
        1: {pt:3.95},
        2: {pt:3.26},
        3: {pt:0},
        4: {pt:0},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "141406": {
    id: 141406,
    id_time: 267,
    time: "VAS",
    pos: "ATA",
    nome: "ANDREY FERNANDES",
    scouts: {
      rdd: {
        1: {pt:1.7, FD:1, FS:1},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "141451": {
    id: 141451,
    id_time: 275,
    time: "PAL",
    pos: "MEI",
    nome: "ALLAN",
    scouts: {
      rdd: {
        1: {pt:1.9, FS:2, DS:1, FC:2},
        2: {pt:12.2, G:1, FD:1, FF:1, FS:1, DS:2, CA:1, FC:1},
        3: {pt:4.6, FD:2, FS:2, DS:1, FC:1},
        4: {pt:17.1, G:1, FS:4, I:1, DS:5, FC:1},
        5: {pt:-0.1, FD:1, CA:1, FC:1},
        6: {pt:3.2, FS:4, DS:1, FC:1},
        7: {pt:11.6, G:1, FD:1, FF:1, FS:2, DS:1, FC:3},
        8: {pt:5, FS:1, DS:3},
        9: {pt:2.9, FD:1, FS:1, DS:1, FC:1},
        10: {pt:4, FS:2, DS:2},
        11: {pt:4.7, FS:4, DS:2, FC:1},
        12: {pt:5, FF:1, FS:3, DS:2, FC:1},
        13: {pt:6, FS:3, DS:3},
      }
    }
  },
  "141611": {
    id: 141611,
    id_time: 276,
    time: "SAO",
    pos: "LAT",
    nome: "MAIK",
    scouts: {
      rdd: {
        1: {pt:2.7, DS:2, FC:1},
        2: {pt:2.9, FS:1, DS:2, FC:2},
        3: {pt:"-"},
        4: {pt:6.5, DS:1, SG:1},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:5.3, FF:1, DS:3},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:0},
        13: {pt:"-"},
      }
    }
  },
  "141754": {
    id: 141754,
    id_time: 277,
    time: "SAN",
    pos: "MEI",
    nome: "GABRIEL BONTEMPO",
    scouts: {
      rdd: {
        1: {pt:0},
        2: {pt:0},
        3: {pt:3.2, FS:3, DS:2, CA:1, FC:1},
        4: {pt:2.4, DS:2, FC:2},
        5: {pt:"-"},
        6: {pt:2.4, FD:1, DS:1, FC:1},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:0},
        10: {pt:4.7, DS:4, CA:1, FC:1},
        11: {pt:7.4, FF:3, FS:1, DS:3},
        12: {pt:5.2, FS:2, DS:3, FC:1},
        13: {pt:2.5, FS:3, PS:1},
      }
    }
  },
  "141868": {
    id: 141868,
    id_time: 277,
    time: "SAN",
    pos: "LAT",
    nome: "VINICIUS LIRA",
    scouts: {
      rdd: {
        1: {pt:3.5, FD:1, FF:1, DS:1},
        2: {pt:"-"},
        3: {pt:1.7, DS:2, CA:1, FC:1},
        4: {pt:3.6, DS:3, FC:3},
        5: {pt:"-"},
        6: {pt:0.9, DS:1, FC:2},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "142004": {
    id: 142004,
    id_time: 284,
    time: "GRE",
    pos: "ATA",
    nome: "AMUZU",
    scouts: {
      rdd: {
        1: {pt:1.7, FS:1, DS:1, FC:1},
        2: {pt:11.2, A:2, FS:3, FC:1},
        3: {pt:1.5, DS:1},
        4: {pt:5.4, FF:3, DS:2},
        5: {pt:"-"},
        6: {pt:4.4, FD:2, FS:1, DS:1},
        7: {pt:11.5, G:1, FD:2, FS:1, DS:1, FC:3},
        8: {pt:0.8, FF:1},
        9: {pt:2.4, FD:2},
        10: {pt:10.6, FT:1, FF:3, FS:2, DS:3, FC:1},
        11: {pt:0.4, FS:2, FC:2},
        12: {pt:3, FF:1, FS:2, DS:1, FC:1},
        13: {pt:2.3, FF:2, FS:2, FC:1},
      }
    }
  },
  "142265": {
    id: 142265,
    id_time: 265,
    time: "BAH",
    pos: "ATA",
    nome: "DELL",
    scouts: {
      rdd: {
        1: {pt:2.5, FS:2, DS:1},
        2: {pt:-1, FD:1, FF:1, CV:1},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:1.4, FS:1, DS:1, FC:2},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:-0.3, FC:1},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "142279": {
    id: 142279,
    id_time: 267,
    time: "VAS",
    pos: "MEI",
    nome: "NUNO MOREIRA",
    scouts: {
      rdd: {
        1: {pt:0.7, FS:1, DS:1, CA:1, FC:1},
        2: {pt:2.9, FD:1, FS:1, DS:1, FC:1},
        3: {pt:0.8, FF:1},
        4: {pt:3.2, FD:1, FS:1, DS:1},
        5: {pt:0.5, FS:1},
        6: {pt:-0.3, FC:1},
        7: {pt:9.7, G:1, FS:1, DS:1, FC:1},
        8: {pt:2.3, FF:1, DS:1},
        9: {pt:5.1, FF:2, I:1, DS:3, FC:3},
        10: {pt:1.3, FF:1, FS:1},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:0},
      }
    }
  },
  "142484": {
    id: 142484,
    id_time: 263,
    time: "BOT",
    pos: "MEI",
    nome: "BARRERA",
    scouts: {
      rdd: {
        1: {pt:0},
        2: {pt:2.9, FT:1, FS:1, FC:2},
        3: {pt:3.5, FS:1, DS:2},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:0},
        7: {pt:3.9, FD:1, DS:2, FC:1},
        8: {pt:"-"},
        9: {pt:2.1, FD:2, FC:1},
        10: {pt:"-"},
        11: {pt:1.6, FD:1, FF:1, FS:1, FC:3},
        12: {pt:-0.3, FC:1},
        13: {pt:"-"},
      }
    }
  },
  "142867": {
    id: 142867,
    id_time: 277,
    time: "SAN",
    pos: "ATA",
    nome: "ROBINHO JR.",
    scouts: {
      rdd: {
        1: {pt:0},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:0},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "142890": {
    id: 142890,
    id_time: 263,
    time: "BOT",
    pos: "MEI",
    nome: "MONTORO",
    scouts: {
      rdd: {
        1: {pt:5.8, A:1, FD:1, FS:1, FC:3},
        2: {pt:5.5, A:1, FS:1},
        3: {pt:0.9, FS:5, CA:1, FC:2},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:4.5, FF:1, FS:2, DS:2, FC:1},
        8: {pt:5.5, FT:1, FS:2, DS:1},
        9: {pt:1.3, FF:1, FS:1},
        10: {pt:6.5, A:1, DS:1},
        11: {pt:2.8, FF:1, FS:1, DS:1},
        12: {pt:"-"},
        13: {pt:2, FS:1, DS:1},
      }
    }
  },
  "143193": {
    id: 143193,
    id_time: 293,
    time: "CAP",
    pos: "ATA",
    nome: "VIVEROS",
    scouts: {
      rdd: {
        1: {pt:10.2, A:1, FD:1, FF:2, FS:3, DS:1, FC:2},
        2: {pt:"-"},
        3: {pt:12.8, G:1, FD:1, FF:2, FS:4, PS:1, I:1, FC:3},
        4: {pt:4.8, FD:1, FF:1, FS:7, I:1, FC:2},
        5: {pt:"-"},
        6: {pt:-0.2, FF:1, FS:3, CA:1, FC:5},
        7: {pt:11.2, G:1, FD:1, FS:4, PS:1, I:1, FC:3},
        8: {pt:11, G:1, FD:1, FF:1, FS:2},
        9: {pt:2.2, FD:1, FS:3, I:2, FC:1},
        10: {pt:0.4, FS:2, FC:2},
        11: {pt:11.4, G:1, FD:1, FS:6, I:2, FC:2},
        12: {pt:2.2, FD:1, FS:3, I:2, FC:1},
        13: {pt:21.1, G:2, FD:2, FS:1, PS:1, DS:1, FC:1},
      }
    }
  },
  "143488": {
    id: 143488,
    id_time: 285,
    time: "INT",
    pos: "ATA",
    nome: "RAYKKONEN",
    scouts: {
      rdd: {
        1: {pt:0.5, FS:1},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "145036": {
    id: 145036,
    id_time: 277,
    time: "SAN",
    pos: "ATA",
    nome: "FERNANDO PRADELLA",
    scouts: {
      rdd: {
        1: {pt:0},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "145404": {
    id: 145404,
    id_time: 275,
    time: "PAL",
    pos: "LAT",
    nome: "ARTHUR",
    scouts: {
      rdd: {
        1: {pt:-0.3, FC:1},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:0},
        6: {pt:7, FS:1, DS:1, SG:1},
        7: {pt:2.9, FD:1, FS:1, DS:1, FC:1},
        8: {pt:"-"},
        9: {pt:0.5, FS:1},
        10: {pt:5.6, FD:1, FS:1, DS:3, FC:2},
        11: {pt:5, SG:1},
        12: {pt:6.7, FS:1, DS:1, SG:1, FC:1},
        13: {pt:9.4, FS:1, DS:3, SG:1, FC:2},
      }
    }
  },
  "145744": {
    id: 145744,
    id_time: 264,
    time: "COR",
    pos: "MEI",
    nome: "ANDRÉ",
    scouts: {
      rdd: {
        1: {pt:6.5, FS:1, DS:4},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:4, FS:2, DS:2},
        5: {pt:3.1, FF:2, DS:1},
        6: {pt:2.2, FS:2, DS:1, FC:1},
        7: {pt:2.7, FD:1, FS:3},
        8: {pt:4.7, FS:1, DS:3, FC:1},
        9: {pt:11.4, G:1, FF:2, FS:2, DS:2, CA:1, FC:4},
        10: {pt:5.4, FS:3, DS:3, FC:2},
        11: {pt:-2.8, FS:1, CV:1, FC:1},
        12: {pt:"-"},
        13: {pt:-3.9, CV:1, FC:3},
      }
    }
  },
  "146040": {
    id: 146040,
    id_time: 364,
    time: "REM",
    pos: "ATA",
    nome: "JOÃO PEDRO",
    scouts: {
      rdd: {
        1: {pt:-1, FS:1, FC:5},
        2: {pt:10.5, G:1, FS:2, DS:1},
        3: {pt:-0.9, FF:1, I:1, CA:1, FC:2},
        4: {pt:2.2, FD:1, FF:1, FS:1, FC:1},
        5: {pt:-0.5, FF:1, CA:1, FC:1},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:0.2, FF:1, FC:2},
      }
    }
  },
  "147883": {
    id: 147883,
    id_time: 267,
    time: "VAS",
    pos: "ATA",
    nome: "JOÃO VITOR",
    scouts: {
      rdd: {
        1: {pt:0},
        2: {pt:0},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:2, FS:1, DS:1},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "37656": {
    id: 37656,
    id_time: 266,
    time: "FLU",
    pos: "GOL",
    nome: "FÁBIO",
    scouts: {
      rdd: {
        1: {pt:2.1, FS:1, DE:2, GS:1},
        2: {pt:5.5, DE:5, GS:1},
        3: {pt:9.4, FS:1, SG:1, DE:3},
        4: {pt:3.8, DE:6, CA:1, GS:2, PC:1},
        5: {pt:8.9, SG:1, DE:3},
        6: {pt:-1.5, FS:1, GS:2},
        7: {pt:0.9, DE:3, GS:3},
        8: {pt:10.2, SG:1, DE:4},
        9: {pt:4.7, FS:1, DE:4, GS:1},
        10: {pt:2.9, DE:3, GS:1},
        11: {pt:5.8, DE:6, GS:2},
        12: {pt:1.9, DE:3, GS:2},
        13: {pt:1.6, DE:2, GS:1},
      }
    }
  },
  "39148": {
    id: 39148,
    id_time: 282,
    time: "CAM",
    pos: "ATA",
    nome: "HULK",
    scouts: {
      rdd: {
        1: {pt:5.3, FF:4, FS:5, I:1, FC:1},
        2: {pt:2.4, FS:2, I:1, DS:1},
        3: {pt:14.7, G:1, A:1, FS:1, DS:1, FC:1},
        4: {pt:5.3, FF:1, FS:3, DS:2},
        5: {pt:8.2, A:1, FD:1, FS:6, I:1, FC:3},
        6: {pt:0.5, FS:1},
        7: {pt:3.9, FD:2, FS:3},
        8: {pt:1.6, FD:1, FS:4, CA:1, FC:2},
        9: {pt:7, A:1, FD:1, FF:1},
        10: {pt:1.2, FS:3, FC:1},
        11: {pt:1, FF:1, FS:1, FC:1},
        12: {pt:3.5, FD:1, FF:1, FS:3},
        13: {pt:"-"},
      }
    }
  },
  "39656": {
    id: 39656,
    id_time: 282,
    time: "CAM",
    pos: "MEI",
    nome: "ALAN FRANCO",
    scouts: {
      rdd: {
        1: {pt:-0.1, DS:1, CA:1, FC:2},
        2: {pt:0.2, FS:1, FC:1},
        3: {pt:2.4, FD:1, DS:1, FC:1},
        4: {pt:6.2, FS:1, DS:4, FC:1},
        5: {pt:3.9, DS:3, FC:2},
        6: {pt:2.4, FD:1, FF:1, FS:1, I:1},
        7: {pt:7.9, A:1, FS:1, DS:2, FC:2},
        8: {pt:1.2, FF:2, DS:1, CA:1, FC:3},
        9: {pt:"-"},
        10: {pt:0},
        11: {pt:3.3, DS:3, FC:4},
        12: {pt:-0.6, FC:2},
        13: {pt:0},
      }
    }
  },
  "39850": {
    id: 39850,
    id_time: 280,
    time: "RBB",
    pos: "TEC",
    nome: "VAGNER MANCINI",
    scouts: {
      rdd: {
        1: {pt:8.07, V:1},
        2: {pt:6.95, V:1},
        3: {pt:1.74},
        4: {pt:3.15},
        5: {pt:4.79},
        6: {pt:3.25},
        7: {pt:3.9},
        8: {pt:4.32},
        9: {pt:11.12, V:1},
        10: {pt:9.22, V:1},
        11: {pt:4.29},
        12: {pt:5.25, V:1},
        13: {pt:3.41},
      }
    }
  },
  "40990": {
    id: 40990,
    id_time: 264,
    time: "COR",
    pos: "TEC",
    nome: "DORIVAL JÚNIOR",
    scouts: {
      rdd: {
        1: {pt:6.6},
        2: {pt:0},
        3: {pt:8.77, V:1},
        4: {pt:3.31},
        5: {pt:2.37},
        6: {pt:4.45},
        7: {pt:5.39},
        8: {pt:3.78},
        9: {pt:3.07},
        10: {pt:2.82},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "42135": {
    id: 42135,
    id_time: 284,
    time: "GRE",
    pos: "MEI",
    nome: "WILLIAN",
    scouts: {
      rdd: {
        1: {pt:-0.3, FC:1},
        2: {pt:5.2, FD:1, FS:2, DS:2},
        3: {pt:0},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:1.3, FF:1, FS:1},
        7: {pt:1.3, FF:1, FS:1},
        8: {pt:0},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "42222": {
    id: 42222,
    id_time: 287,
    time: "VIT",
    pos: "ATA",
    nome: "OSVALDO",
    scouts: {
      rdd: {
        1: {pt:0.8, FF:1},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "42234": {
    id: 42234,
    id_time: 283,
    time: "CRU",
    pos: "GOL",
    nome: "CÁSSIO",
    scouts: {
      rdd: {
        1: {pt:-2.7, DE:1, GS:4},
        2: {pt:-2, GS:2},
        3: {pt:8.9, FS:1, DE:8, GS:2},
        4: {pt:0.8, FS:1, DE:1, GS:1},
        5: {pt:1.6, DE:2, GS:1},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "42500": {
    id: 42500,
    id_time: 283,
    time: "CRU",
    pos: "LAT",
    nome: "FAGNER",
    scouts: {
      rdd: {
        1: {pt:0.9, DS:1, FC:2},
        2: {pt:1.5, DS:1},
        3: {pt:4.5, DS:3},
        4: {pt:0},
        5: {pt:-1.1, FS:1, CA:1, FC:2},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:6.5, DS:1, SG:1},
        10: {pt:"-"},
        11: {pt:7.9, A:1, FS:1, DS:2, FC:2},
        12: {pt:4.4, SG:1, FC:2},
        13: {pt:"-"},
      }
    }
  },
  "45125": {
    id: 45125,
    id_time: 283,
    time: "CRU",
    pos: "TEC",
    nome: "TITE",
    scouts: {
      rdd: {
        1: {pt:1.37},
        2: {pt:4.15},
        3: {pt:5.33},
        4: {pt:2.58},
        5: {pt:2.73},
        6: {pt:6.7},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "51413": {
    id: 51413,
    id_time: 2305,
    time: "MIR",
    pos: "GOL",
    nome: "WALTER",
    scouts: {
      rdd: {
        1: {pt:4.2, DE:4, GS:1},
        2: {pt:4.5, DE:5, GS:2},
        3: {pt:0.6, DE:2, GS:2},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:2.9, DE:3, GS:1},
        7: {pt:2.9, DE:3, GS:1},
        8: {pt:5.5, DE:5, GS:1},
        9: {pt:-0.1, DE:3, GS:3, PC:1},
        10: {pt:2.9, DE:3, GS:1},
        11: {pt:5.8, DE:6, GS:2},
        12: {pt:5.8, DE:6, CA:1, GS:1},
        13: {pt:-1, GS:1},
      }
    }
  },
  "51772": {
    id: 51772,
    id_time: 265,
    time: "BAH",
    pos: "MEI",
    nome: "EVERTON RIBEIRO",
    scouts: {
      rdd: {
        1: {pt:1.5, DS:1},
        2: {pt:1.8, FF:1, FS:2},
        3: {pt:14.3, A:1, FD:1, FS:6, DS:4, FC:3},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:1.2, FS:3, FC:1},
        10: {pt:8.9, A:1, FD:1, FS:3, DS:1, FC:1},
        11: {pt:5.2, FD:1, FS:2, DS:2},
        12: {pt:2.5, FS:2, DS:1},
        13: {pt:1.4, FS:3, DS:1, CA:1, FC:2},
      }
    }
  },
  "61987": {
    id: 61987,
    id_time: 262,
    time: "FLA",
    pos: "LAT",
    nome: "ALEX SANDRO",
    scouts: {
      rdd: {
        1: {pt:1, FS:2},
        2: {pt:4.5, FF:1, FS:2, DS:2, FC:1},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:4.9, FS:1, SG:1, FC:2},
        6: {pt:11.2, FS:1, DS:4, SG:1, FC:1},
        7: {pt:8, DS:2, SG:1},
        8: {pt:-1.3, CA:1, FC:1},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:-0.4, FS:1, FC:3},
        12: {pt:4.4, SG:1, FC:2},
        13: {pt:7.3, FS:1, DS:2, SG:1, FC:4},
      }
    }
  },
  "62977": {
    id: 62977,
    id_time: 266,
    time: "FLU",
    pos: "MEI",
    nome: "GANSO",
    scouts: {
      rdd: {
        1: {pt:-0.3, FC:1},
        2: {pt:0},
        3: {pt:1.5, DS:1},
        4: {pt:2.2, FS:2, DS:1, FC:1},
        5: {pt:"-"},
        6: {pt:0},
        7: {pt:4.5, FT:1, DS:1},
        8: {pt:0},
        9: {pt:1.2, FD:1},
        10: {pt:2.5, FS:2, DS:1},
        11: {pt:-0.3, FC:1},
        12: {pt:0},
        13: {pt:-1.1, FS:1, CA:1, FC:2},
      }
    }
  },
  "63013": {
    id: 63013,
    id_time: 284,
    time: "GRE",
    pos: "LAT",
    nome: "MARCOS ROCHA",
    scouts: {
      rdd: {
        1: {pt:0},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "63289": {
    id: 63289,
    id_time: 284,
    time: "GRE",
    pos: "MEI",
    nome: "EDENÍLSON",
    scouts: {
      rdd: {
        1: {pt:2.5, FF:1, FS:1, DS:1, FC:1},
        2: {pt:8, G:1},
        3: {pt:1.5, DS:1},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:-0.3, FC:1},
        7: {pt:"-"},
        8: {pt:-1.3, CA:1, FC:1},
        9: {pt:6, A:1, FS:2},
        10: {pt:0.6, FD:1, FC:2},
        11: {pt:7.7, A:1, FD:1, DS:1},
        12: {pt:18.4, G:2, FF:1, FS:1, I:1, DS:1, FC:1},
        13: {pt:0.6, DS:1, FC:3},
      }
    }
  },
  "68685": {
    id: 68685,
    id_time: 285,
    time: "INT",
    pos: "MEI",
    nome: "ALAN PATRICK",
    scouts: {
      rdd: {
        1: {pt:3, FD:1, FF:1, FS:2},
        2: {pt:2, FF:1, FS:3, FC:1},
        3: {pt:2.8, FF:1, FS:1, DS:1},
        4: {pt:10.8, G:1, FF:2, FS:3, FC:1},
        5: {pt:2.2, FS:2, DS:1, FC:1},
        6: {pt:2.5, FF:1, FS:1, DS:1, FC:1},
        7: {pt:"-"},
        8: {pt:12.5, G:1, FF:1, FS:2, DS:2, FC:1},
        9: {pt:2.5, FS:2, DS:1},
        10: {pt:"-"},
        11: {pt:2.3, FF:1, DS:1},
        12: {pt:11.3, G:1, FF:1, FS:2, DS:1},
        13: {pt:2.5, FS:2, DS:1},
      }
    }
  },
  "68708": {
    id: 68708,
    id_time: 2305,
    time: "MIR",
    pos: "MEI",
    nome: "EDUARDO",
    scouts: {
      rdd: {
        1: {pt:7, G:1, FS:1, FC:5},
        2: {pt:2.5, FS:2, DS:1},
        3: {pt:3.1, FD:2, FS:2, FC:1},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:1, FF:1, FS:1, FC:1},
        11: {pt:1.3, FF:1, FS:1, DS:2, CV:1},
        12: {pt:"-"},
        13: {pt:3.2, FF:1, DS:2, FC:2},
      }
    }
  },
  "68806": {
    id: 68806,
    id_time: 263,
    time: "BOT",
    pos: "GOL",
    nome: "NETO",
    scouts: {
      rdd: {
        1: {pt:10.2, SG:1, DE:4},
        2: {pt:-1.1, DE:3, GS:5},
        3: {pt:4.2, DE:4, GS:1},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:1.6, DE:2, GS:1},
        13: {pt:0.6, DE:2, GS:2},
      }
    }
  },
  "68899": {
    id: 68899,
    id_time: 267,
    time: "VAS",
    pos: "MEI",
    nome: "PHILIPPE COUTINHO",
    scouts: {
      rdd: {
        1: {pt:10.8, G:1, FF:1, FS:1, DS:1},
        2: {pt:11.4, FT:1, FD:5, FF:3},
        3: {pt:2.5, FD:1, FF:1, FS:1},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "68920": {
    id: 68920,
    id_time: 282,
    time: "CAM",
    pos: "ATA",
    nome: "DUDU",
    scouts: {
      rdd: {
        1: {pt:2.5, FF:1, FS:1, DS:1, FC:1},
        2: {pt:0.5, FS:1},
        3: {pt:12, G:1, FD:1, FF:1, FS:1, DS:1},
        4: {pt:1.7, FD:1, FS:1},
        5: {pt:0},
        6: {pt:0.5, FS:1},
        7: {pt:0},
        8: {pt:"-"},
        9: {pt:9.2, G:1, FD:1},
        10: {pt:0.9, FD:1, FC:1},
        11: {pt:0},
        12: {pt:4.7, FD:2, FF:1, FS:3},
        13: {pt:1.3, FF:1, FS:1},
      }
    }
  },
  "68928": {
    id: 68928,
    id_time: 276,
    time: "SAO",
    pos: "GOL",
    nome: "RAFAEL",
    scouts: {
      rdd: {
        1: {pt:4.2, DE:4, GS:1},
        2: {pt:2.9, DE:3, GS:1},
        3: {pt:6.3, SG:1, DE:1},
        4: {pt:7.6, SG:1, DE:2},
        5: {pt:6.3, SG:1, DE:1},
        6: {pt:1.6, DE:2, GS:1},
        7: {pt:2.9, DE:3, GS:1},
        8: {pt:0.3, DE:1, GS:1},
        9: {pt:3.4, FS:1, DE:3, GS:1},
        10: {pt:6.8, DE:6, GS:1},
        11: {pt:3.2, DE:4, GS:2},
        12: {pt:1.9, DE:3, GS:2},
        13: {pt:6.3, SG:1, DE:1},
      }
    }
  },
  "68938": {
    id: 68938,
    id_time: 315,
    time: "CHA",
    pos: "MEI",
    nome: "GIOVANNI AUGUSTO",
    scouts: {
      rdd: {
        1: {pt:1.7, FS:1, DS:1, FC:1},
        2: {pt:0.9, FS:3, FC:2},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:1.2, DS:1, FC:1},
        6: {pt:2.5, FS:2, DS:1},
        7: {pt:-0.8, FS:1, CA:1, FC:1},
        8: {pt:1, FS:2},
        9: {pt:0},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "68996": {
    id: 68996,
    id_time: 265,
    time: "BAH",
    pos: "ATA",
    nome: "WILLIAN JOSÉ",
    scouts: {
      rdd: {
        1: {pt:9.5, G:1, DS:1},
        2: {pt:0.8, FF:1},
        3: {pt:-0.6, FC:2},
        4: {pt:"-"},
        5: {pt:2.7, A:1, FD:1, FS:1, PP:1},
        6: {pt:7.4, G:1, FC:2},
        7: {pt:5.2, FD:2, FF:2, DS:1, FC:1},
        8: {pt:"-"},
        9: {pt:0},
        10: {pt:0},
        11: {pt:-0.6, FC:2},
        12: {pt:0.2, FS:1, FC:1},
        13: {pt:8.2, G:1, FF:1, FC:2},
      }
    }
  },
  "69012": {
    id: 69012,
    id_time: 293,
    time: "CAP",
    pos: "GOL",
    nome: "SANTOS",
    scouts: {
      rdd: {
        1: {pt:11.5, SG:1, DE:5},
        2: {pt:"-"},
        3: {pt:4.2, DE:4, GS:1},
        4: {pt:1.6, DE:2, GS:1},
        5: {pt:"-"},
        6: {pt:6.1, DE:7, GS:3},
        7: {pt:0.3, DE:1, GS:1},
        8: {pt:6.3, SG:1, DE:1},
        9: {pt:-0.4, DE:2, GS:3},
        10: {pt:1.9, DE:3, GS:2},
        11: {pt:6.3, SG:1, DE:1},
        12: {pt:0.3, DE:1, GS:1},
        13: {pt:-0.7, DE:1, CA:1, GS:1},
      }
    }
  },
  "69140": {
    id: 69140,
    id_time: 263,
    time: "BOT",
    pos: "MEI",
    nome: "ALLAN",
    scouts: {
      rdd: {
        1: {pt:2.8, FF:2, FS:2, DS:1, CA:1, FC:1},
        2: {pt:-0.8, FS:1, CA:1, FC:1},
        3: {pt:2, FS:1, DS:1},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:2.9, DS:3, CA:1, FC:2},
        7: {pt:"-"},
        8: {pt:2.7, DS:2, FC:1},
        9: {pt:0.3, DS:1, FC:4},
        10: {pt:5.7, DS:4, FC:1},
        11: {pt:"-"},
        12: {pt:1.5, DS:1},
        13: {pt:2.7, DS:2, FC:1},
      }
    }
  },
  "69208": {
    id: 69208,
    id_time: 264,
    time: "COR",
    pos: "ZAG",
    nome: "GABRIEL PAULISTA",
    scouts: {
      rdd: {
        1: {pt:-0.3, FC:1},
        2: {pt:"-"},
        3: {pt:16.6, G:1, FF:2, FS:1, DS:1, SG:1},
        4: {pt:"-"},
        5: {pt:5.5, FF:1, FS:1, DS:3, FC:1},
        6: {pt:2.2, FF:1, FS:1, DS:1, FC:2},
        7: {pt:"-"},
        8: {pt:0.6, DS:1, FC:3},
        9: {pt:3.6, FF:2, FS:1, DS:1},
        10: {pt:"-"},
        11: {pt:8.7, FD:1, FF:1, FS:1, DS:1, SG:1, FC:1},
        12: {pt:7, FF:1, DS:1, SG:1, FC:1},
        13: {pt:8, DS:2, SG:1},
      }
    }
  },
  "70164": {
    id: 70164,
    id_time: 276,
    time: "SAO",
    pos: "MEI",
    nome: "LUCAS MOURA",
    scouts: {
      rdd: {
        1: {pt:-0.3, FC:1},
        2: {pt:6.7, A:1, FD:1, FS:1},
        3: {pt:8.5, G:1, FS:1},
        4: {pt:0},
        5: {pt:1.8, FF:2, FS:1, FC:1},
        6: {pt:1.6, FD:1, FS:2, FC:2},
        7: {pt:0.5, FS:1},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "70360": {
    id: 70360,
    id_time: 280,
    time: "RBB",
    pos: "ATA",
    nome: "EDUARDO SASHA",
    scouts: {
      rdd: {
        1: {pt:3.9, FD:2, DS:1},
        2: {pt:1, FS:2},
        3: {pt:"-"},
        4: {pt:2.1, FD:1, FS:2, I:1},
        5: {pt:2.8, FD:1, FF:2},
        6: {pt:0},
        7: {pt:1.7, FS:1, DS:1, FC:1},
        8: {pt:2.1, FF:1, I:2, DS:1},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:1.2, FD:1},
        13: {pt:3, FS:3, DS:1},
      }
    }
  },
  "70449": {
    id: 70449,
    id_time: 287,
    time: "VIT",
    pos: "GOL",
    nome: "GABRIEL",
    scouts: {
      rdd: {
        1: {pt:6.8, FS:1, SG:1, DE:1},
        2: {pt:-2.4, DE:2, GS:5},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "70666": {
    id: 70666,
    id_time: 364,
    time: "REM",
    pos: "ZAG",
    nome: "MARLLON",
    scouts: {
      rdd: {
        1: {pt:3.5, FS:1, DS:2},
        2: {pt:2.4, DS:2, FC:2},
        3: {pt:6, DS:4},
        4: {pt:4.2, FS:3, DS:2, FC:1},
        5: {pt:3.2, FS:1, DS:2, FC:1},
        6: {pt:0.5, FF:1, FS:2, CA:1, FC:1},
        7: {pt:3, DS:2},
        8: {pt:0.2, DS:1, CA:1, FC:1},
        9: {pt:-0.3, FC:1},
        10: {pt:6.2, DS:1, SG:1, FC:1},
        11: {pt:7.7, G:1, FC:1},
        12: {pt:2, FS:1, DS:1},
        13: {pt:5, FS:1, DS:3},
      }
    }
  },
  "70800": {
    id: 70800,
    id_time: 282,
    time: "CAM",
    pos: "TEC",
    nome: "JORGE SAMPAOLI",
    scouts: {
      rdd: {
        1: {pt:3.81},
        2: {pt:2.63},
        3: {pt:6.61},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "70944": {
    id: 70944,
    id_time: 285,
    time: "INT",
    pos: "MEI",
    nome: "BRUNO HENRIQUE",
    scouts: {
      rdd: {
        1: {pt:2.2, FD:1, FF:1, FS:1, FC:1},
        2: {pt:1.4, FS:1, DS:1, FC:2},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:0},
        6: {pt:0.4, FF:1, I:1, FC:1},
        7: {pt:0.2, FS:1, FC:1},
        8: {pt:2, FF:1, DS:1, FC:1},
        9: {pt:1.5, DS:1},
        10: {pt:-0.6, FC:2},
        11: {pt:1.7, FS:1, DS:1, FC:1},
        12: {pt:"-"},
        13: {pt:4.2, FD:1, DS:2},
      }
    }
  },
  "70958": {
    id: 70958,
    id_time: 315,
    time: "CHA",
    pos: "MEI",
    nome: "JEAN CARLOS",
    scouts: {
      rdd: {
        1: {pt:13, G:1, A:1},
        2: {pt:8.5, G:1, FS:1},
        3: {pt:9, A:1, FD:2, FF:2},
        4: {pt:"-"},
        5: {pt:2.5, FS:2, DS:1},
        6: {pt:2, FS:1, DS:1},
        7: {pt:2.2, FD:1, FF:1, FS:1, FC:1},
        8: {pt:0},
        9: {pt:2.1, FD:1, FF:1, FS:1, I:1, FC:1},
        10: {pt:1.6, FF:2},
        11: {pt:-1.3, CA:1, FC:1},
        12: {pt:0},
        13: {pt:-0.1, DS:1, CA:1, FC:2},
      }
    }
  },
  "71043": {
    id: 71043,
    id_time: 315,
    time: "CHA",
    pos: "GOL",
    nome: "LÉO VIEIRA",
    scouts: {
      rdd: {
        1: {pt:2.2, DE:4, CA:1, GS:2},
        2: {pt:13, FS:2, DE:10, GS:1},
        3: {pt:-0.4, DE:2, GS:3},
        4: {pt:"-"},
        5: {pt:4.5, DE:5, GS:2},
        6: {pt:3.4, FS:1, DE:3, GS:1},
        7: {pt:11.5, SG:1, DE:5},
        8: {pt:4.5, DE:5, GS:2},
        9: {pt:10.2, SG:1, DE:4},
        10: {pt:3.2, DE:4, GS:2},
        11: {pt:5.5, DE:5, GS:1},
        12: {pt:5.8, DE:6, GS:2},
        13: {pt:3.2, DE:4, GS:2},
      }
    }
  },
  "71123": {
    id: 71123,
    id_time: 267,
    time: "VAS",
    pos: "MEI",
    nome: "THIAGO MENDES",
    scouts: {
      rdd: {
        1: {pt:4.5, FS:3, DS:2},
        2: {pt:4, FS:5, DS:1},
        3: {pt:0.9, FS:2, DS:1, CA:1, FC:2},
        4: {pt:0.6, FS:2, DS:1, CA:1, FC:3},
        5: {pt:10.8, G:1, FF:1, DS:2, CA:1},
        6: {pt:"-"},
        7: {pt:7.7, G:1, FF:1, FS:1, CA:1, FC:2},
        8: {pt:10.9, G:1, FD:1, FS:1, DS:1, FC:1},
        9: {pt:1.6, FF:1, FS:3, I:1, FC:2},
        10: {pt:1, FS:2},
        11: {pt:6.7, A:1, FS:1, DS:1, FC:1},
        12: {pt:1, FS:2},
        13: {pt:-0.5, FS:1, CA:1},
      }
    }
  },
  "71227": {
    id: 71227,
    id_time: 294,
    time: "CFC",
    pos: "ZAG",
    nome: "MAICON",
    scouts: {
      rdd: {
        1: {pt:1.7, FS:1, DS:1, FC:1},
        2: {pt:0},
        3: {pt:1.5, DS:1},
        4: {pt:1.5, DS:1},
        5: {pt:7, FS:1, DS:1, SG:1},
        6: {pt:5, SG:1},
        7: {pt:5, SG:1},
        8: {pt:-0.3, DS:2, CV:1, FC:1},
        9: {pt:"-"},
        10: {pt:-0.3, FC:1},
        11: {pt:0.5, FS:1},
        12: {pt:5, SG:1},
        13: {pt:-0.3, FC:1},
      }
    }
  },
  "71631": {
    id: 71631,
    id_time: 284,
    time: "GRE",
    pos: "GOL",
    nome: "WEVERTON",
    scouts: {
      rdd: {
        1: {pt:3.2, DE:4, GS:2},
        2: {pt:-1.7, DE:1, GS:3},
        3: {pt:4.3, DE:1, DP:1, CA:1, GS:2, PC:1},
        4: {pt:0.3, DE:1, GS:1},
        5: {pt:6.8, DE:6, GS:1},
        6: {pt:-1, GS:1},
        7: {pt:10, A:1, SG:1},
        8: {pt:0.6, DE:2, GS:2},
        9: {pt:1.6, FS:2, DE:2, GS:2},
        10: {pt:15.9, SG:1, DE:3, DP:1},
        11: {pt:9.4, FS:1, SG:1, DE:3},
        12: {pt:3.2, DE:4, GS:2},
        13: {pt:10.7, FS:1, SG:1, DE:4},
      }
    }
  },
  "71684": {
    id: 71684,
    id_time: 275,
    time: "PAL",
    pos: "ZAG",
    nome: "GUSTAVO GÓMEZ",
    scouts: {
      rdd: {
        1: {pt:1.9, FS:2, DS:1, FC:2},
        2: {pt:8.5, G:1, FF:1, FC:1},
        3: {pt:13, G:1, A:1},
        4: {pt:2.2, FF:1, I:1, DS:1},
        5: {pt:1.7, FF:1, DS:1, FC:2},
        6: {pt:5.8, FF:1, SG:1},
        7: {pt:3.4, FF:1, I:1, DS:2, FC:1},
        8: {pt:6.2, DS:1, SG:1, FC:1},
        9: {pt:"-"},
        10: {pt:0},
        11: {pt:4.4, SG:1, FC:2},
        12: {pt:15.5, G:1, FF:1, FS:1, DS:1, SG:1, FC:1},
        13: {pt:4.4, SG:1, FC:2},
      }
    }
  },
  "72294": {
    id: 72294,
    id_time: 282,
    time: "CAM",
    pos: "GOL",
    nome: "EVERSON",
    scouts: {
      rdd: {
        1: {pt:3.7, FS:1, DE:4, GS:2},
        2: {pt:4.2, DE:4, GS:1},
        3: {pt:0.9, DE:3, GS:3},
        4: {pt:9.5, A:1, DE:5, GS:2},
        5: {pt:15.9, FS:1, SG:1, DE:8},
        6: {pt:0.6, DE:2, GS:2},
        7: {pt:8.9, SG:1, DE:3},
        8: {pt:2.9, DE:3, GS:1},
        9: {pt:10.2, SG:1, DE:4},
        10: {pt:2.1, FS:1, DE:2, GS:1},
        11: {pt:0.3, DE:1, GS:1},
        12: {pt:-1.5, FS:1, GS:2},
        13: {pt:-0.1, DE:3, GS:4},
      }
    }
  },
  "72391": {
    id: 72391,
    id_time: 267,
    time: "VAS",
    pos: "TEC",
    nome: "FERNANDO DINIZ",
    scouts: {
      rdd: {
        1: {pt:4},
        2: {pt:5.73},
        3: {pt:2.86},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:4.59},
        12: {pt:4.27},
        13: {pt:8.05999999999999, V:1},
      }
    }
  },
  "72460": {
    id: 72460,
    id_time: 282,
    time: "CAM",
    pos: "MEI",
    nome: "BERNARD",
    scouts: {
      rdd: {
        1: {pt:-0.6, FC:2},
        2: {pt:3, DS:2},
        3: {pt:0},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:0},
        8: {pt:1.5, FS:3},
        9: {pt:9.2, G:1, FD:1},
        10: {pt:1, FS:2},
        11: {pt:0},
        12: {pt:0},
        13: {pt:2.2, FS:2, DS:1, FC:1},
      }
    }
  },
  "72493": {
    id: 72493,
    id_time: 263,
    time: "BOT",
    pos: "LAT",
    nome: "ALEX TELLES",
    scouts: {
      rdd: {
        1: {pt:8, DS:2, SG:1},
        2: {pt:-0.1, DS:1, FC:2, PC:1},
        3: {pt:1.4, FS:1, DS:1, FC:2},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:1, FF:1, DS:1, CA:1, FC:1},
        7: {pt:9.4, FS:2, DS:6, FC:2},
        8: {pt:10, G:1, FS:1, DS:1},
        9: {pt:7.9, G:1, FS:1, FC:2},
        10: {pt:1.5, DS:1},
        11: {pt:"-"},
        12: {pt:5, A:1},
        13: {pt:-0.6, FC:2},
      }
    }
  },
  "73384": {
    id: 73384,
    id_time: 266,
    time: "FLU",
    pos: "LAT",
    nome: "SAMUEL XAVIER",
    scouts: {
      rdd: {
        1: {pt:3.7, FS:2, DS:2, FC:1},
        2: {pt:3.5, FS:1, DS:2},
        3: {pt:5.4, FS:1, DS:1, SG:1, CA:1, FC:2},
        4: {pt:"-"},
        5: {pt:9.6, FS:4, I:1, DS:2, SG:1, FC:1},
        6: {pt:4.8, FF:1, FS:2, DS:2},
        7: {pt:3.2, FS:1, DS:2, FC:1},
        8: {pt:"-"},
        9: {pt:2.4, FD:1, FS:3, FC:1},
        10: {pt:"-"},
        11: {pt:1.2, DS:1, FC:1},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "73481": {
    id: 73481,
    id_time: 315,
    time: "CHA",
    pos: "TEC",
    nome: "GILMAR DAL POZZO",
    scouts: {
      rdd: {
        1: {pt:7.95, V:1},
        2: {pt:3.66},
        3: {pt:6.49},
        4: {pt:0},
        5: {pt:1.73},
        6: {pt:3.85},
        7: {pt:4.57},
        8: {pt:2.4},
        9: {pt:2.88},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "73717": {
    id: 73717,
    id_time: 364,
    time: "REM",
    pos: "TEC",
    nome: "JUAN CARLOS OSORIO",
    scouts: {
      rdd: {
        1: {pt:1.97},
        2: {pt:5.85},
        3: {pt:6.91},
        4: {pt:4.29},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "77485": {
    id: 77485,
    id_time: 264,
    time: "COR",
    pos: "MEI",
    nome: "CARRILLO",
    scouts: {
      rdd: {
        1: {pt:3.2, FS:1, DS:2, FC:1},
        2: {pt:"-"},
        3: {pt:3.4, FF:1, FS:1, DS:2, FC:3},
        4: {pt:0.4, FF:1, DS:1, CA:1, FC:3},
        5: {pt:-1.6, CA:1, FC:2},
        6: {pt:3.3, DS:3, FC:4},
        7: {pt:"-"},
        8: {pt:0.9, DS:1, FC:2},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:-0.6, FC:2},
        12: {pt:3.4, FS:2, DS:2, FC:2},
        13: {pt:0.5, DS:1, CA:1},
      }
    }
  },
  "77656": {
    id: 77656,
    id_time: 276,
    time: "SAO",
    pos: "LAT",
    nome: "CÉDRIC SOARES",
    scouts: {
      rdd: {
        1: {pt:2.3, FF:1, DS:1},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:0},
        8: {pt:"-"},
        9: {pt:1.5, DS:1},
        10: {pt:"-"},
        11: {pt:0.8, FF:1},
        12: {pt:0.2, DS:1, CA:1, FC:1},
        13: {pt:"-"},
      }
    }
  },
  "77777": {
    id: 77777,
    id_time: 277,
    time: "SAN",
    pos: "MEI",
    nome: "JOÃO SCHMIDT",
    scouts: {
      rdd: {
        1: {pt:3.2, FS:1, DS:2, FC:1},
        2: {pt:3.3, FF:2, DS:2, CA:1, FC:1},
        3: {pt:1.2, DS:1, FC:1},
        4: {pt:-0.3, FC:1},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:-0.3, FC:1},
        9: {pt:-0.3, FC:1},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:1.3, FS:2, DS:1, FC:4},
      }
    }
  },
  "78117": {
    id: 78117,
    id_time: 266,
    time: "FLU",
    pos: "ATA",
    nome: "EVERALDO",
    scouts: {
      rdd: {
        1: {pt:0.9, FS:2, I:1},
        2: {pt:"-"},
        3: {pt:2.7, DS:2, FC:1},
        4: {pt:"-"},
        5: {pt:0.2, FS:1, FC:1},
        6: {pt:"-"},
        7: {pt:1.7, FS:1, DS:1, FC:1},
        8: {pt:14, G:1, FD:1, FF:2, FS:1, DS:2, FC:1},
        9: {pt:18.8, G:2, FS:4, DS:2, CA:1, FC:4},
        10: {pt:3, FF:2, FS:1, DS:1, FC:2},
        11: {pt:2.4, FD:1, FS:3, FC:1},
        12: {pt:1.7, FD:1, FS:1},
        13: {pt:0},
      }
    }
  },
  "78248": {
    id: 78248,
    id_time: 264,
    time: "COR",
    pos: "ZAG",
    nome: "GUSTAVO HENRIQUE",
    scouts: {
      rdd: {
        1: {pt:9.2, FD:1, FF:1, DS:5, FC:1},
        2: {pt:"-"},
        3: {pt:4.2, FF:1, FS:2, SG:1, CA:1, FC:2, PC:1},
        4: {pt:"-"},
        5: {pt:3.6, FF:2, FS:1, DS:1},
        6: {pt:1.4, FD:1, DS:1, CA:1, FC:1},
        7: {pt:"-"},
        8: {pt:-0.3, FC:1},
        9: {pt:-0.3, FC:1},
        10: {pt:4.2, FF:1, FS:2, DS:2, FC:2},
        11: {pt:6.4, FS:1, DS:1, SG:1, FC:2},
        12: {pt:4.9, FS:1, SG:1, FC:2},
        13: {pt:6.1, FD:2, SG:1, CA:1, FC:1},
      }
    }
  },
  "78435": {
    id: 78435,
    id_time: 264,
    time: "COR",
    pos: "ATA",
    nome: "VITINHO",
    scouts: {
      rdd: {
        1: {pt:1.7, FS:1, DS:1, FC:1},
        2: {pt:"-"},
        3: {pt:1.4, FD:1, FF:1, FC:2},
        4: {pt:1.7, FD:1, FS:1},
        5: {pt:1.7, FS:1, DS:1, FC:1},
        6: {pt:"-"},
        7: {pt:3.3, FF:1, FS:2, DS:1},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:0.8, FF:1},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:4.3, FF:2, DS:2, FC:1},
      }
    }
  },
  "78445": {
    id: 78445,
    id_time: 266,
    time: "FLU",
    pos: "LAT",
    nome: "RENÊ",
    scouts: {
      rdd: {
        1: {pt:7.4, A:1, FD:1, DS:1, FC:1},
        2: {pt:8.2, FS:2, DS:5, FC:1},
        3: {pt:9.2, DS:3, SG:1, FC:1},
        4: {pt:"-"},
        5: {pt:12.9, A:1, FD:1, FS:1, DS:1, SG:1, FC:1},
        6: {pt:"-"},
        7: {pt:3.5, FF:1, DS:2, FC:1},
        8: {pt:"-"},
        9: {pt:2, FS:1, DS:1},
        10: {pt:"-"},
        11: {pt:5, FD:1, FF:1, DS:2},
        12: {pt:1.5, DS:1},
        13: {pt:"-"},
      }
    }
  },
  "78605": {
    id: 78605,
    id_time: 280,
    time: "RBB",
    pos: "MEI",
    nome: "GABRIEL",
    scouts: {
      rdd: {
        1: {pt:0.7, FS:1, DS:1, CA:1, FC:1},
        2: {pt:3.9, FD:1, FS:2, DS:2, CA:1, FC:1},
        3: {pt:1.1, FD:1, DS:1, CA:1, FC:2},
        4: {pt:"-"},
        5: {pt:0.2, FS:1, FC:1},
        6: {pt:1.8, FF:1, FS:1, DS:1, CA:1},
        7: {pt:"-"},
        8: {pt:-0.3, FF:1, FS:1, FC:2, PC:1},
        9: {pt:11, G:1, DS:2},
        10: {pt:3, DS:2},
        11: {pt:2.1, FD:1, DS:1, FC:2},
        12: {pt:6.4, FD:1, FS:2, DS:3, FC:1},
        13: {pt:1.5, DS:1},
      }
    }
  },
  "78850": {
    id: 78850,
    id_time: 2305,
    time: "MIR",
    pos: "LAT",
    nome: "REINALDO",
    scouts: {
      rdd: {
        1: {pt:0.8, FF:1},
        2: {pt:2, FS:1, DS:1},
        3: {pt:-1, CA:1},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:-0.9, FS:2, CA:1, FC:3},
        7: {pt:"-"},
        8: {pt:2, FF:2, FS:1, DS:1, CA:1, FC:2},
        9: {pt:"-"},
        10: {pt:1.7, FF:1, DS:1, FC:2},
        11: {pt:-0.3, FC:1},
        12: {pt:0},
        13: {pt:3.8, FF:1, DS:2},
      }
    }
  },
  "78855": {
    id: 78855,
    id_time: 294,
    time: "CFC",
    pos: "ZAG",
    nome: "THIAGO SANTOS",
    scouts: {
      rdd: {
        1: {pt:0},
        2: {pt:0},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:6.5, DS:1, SG:1},
        6: {pt:5, SG:1},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:0, FS:2, CA:1},
        12: {pt:4, SG:1, CA:1},
        13: {pt:3.1, FS:2, DS:2, FC:3},
      }
    }
  },
  "79701": {
    id: 79701,
    id_time: 283,
    time: "CRU",
    pos: "MEI",
    nome: "LUCAS SILVA",
    scouts: {
      rdd: {
        1: {pt:0.2, DS:1, CA:1, FC:1},
        2: {pt:0},
        3: {pt:1.5, DS:1},
        4: {pt:0},
        5: {pt:0.5, FS:1},
        6: {pt:1.5, DS:1},
        7: {pt:0, FF:1, FS:1, CA:1, FC:1},
        8: {pt:0},
        9: {pt:"-"},
        10: {pt:0},
        11: {pt:1.7, FF:1, DS:1, FC:2},
        12: {pt:-1.3, CA:1, FC:1},
        13: {pt:"-"},
      }
    }
  },
  "80129": {
    id: 80129,
    id_time: 293,
    time: "CAP",
    pos: "MEI",
    nome: "JADSON",
    scouts: {
      rdd: {
        1: {pt:0.5, FS:1},
        2: {pt:"-"},
        3: {pt:2, FS:1, DS:1},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:1.2, FS:2, DS:1, CA:1, FC:1},
        7: {pt:-0.4, FS:1, FC:3},
        8: {pt:4.4, FS:1, DS:3, FC:2},
        9: {pt:-0.8, FS:1, CA:1, FC:1},
        10: {pt:3, DS:2},
        11: {pt:"-"},
        12: {pt:0.2, DS:1, CA:1, FC:1},
        13: {pt:"-"},
      }
    }
  },
  "80196": {
    id: 80196,
    id_time: 364,
    time: "REM",
    pos: "MEI",
    nome: "YAGO PIKACHU",
    scouts: {
      rdd: {
        1: {pt:2.1, FF:2, FS:1},
        2: {pt:1.4, FD:1, FS:1, FC:1},
        3: {pt:8, G:1},
        4: {pt:0},
        5: {pt:3, DS:2},
        6: {pt:0},
        7: {pt:0},
        8: {pt:2.4, FD:1, FS:3, FC:1},
        9: {pt:1.7, FD:1, FS:1},
        10: {pt:0.1, FD:2, PS:1, CV:1, FC:1},
        11: {pt:"-"},
        12: {pt:0.8, FF:1},
        13: {pt:4.2, FF:1, FS:2, DS:2, FC:2},
      }
    }
  },
  "80287": {
    id: 80287,
    id_time: 276,
    time: "SAO",
    pos: "ATA",
    nome: "LUCIANO",
    scouts: {
      rdd: {
        1: {pt:15.3, G:1, FD:1, FF:3, FS:2, DS:2, FC:1},
        2: {pt:4.8, FF:1, FS:2, DS:2},
        3: {pt:3, A:1, FD:1, FF:1, FS:2, PS:1, I:1, PP:1, CA:1, FC:3},
        4: {pt:"-"},
        5: {pt:9.8, G:1, FD:1, FS:2, I:1, FC:1},
        6: {pt:1.2, FS:2, DS:1, CA:1, FC:1},
        7: {pt:2, FD:1, FF:1},
        8: {pt:3.9, FF:1, FS:4, I:1, DS:1, FC:1},
        9: {pt:-0.1, I:1},
        10: {pt:-0.9, FC:3},
        11: {pt:"-"},
        12: {pt:8, G:1, FS:3, FC:5},
        13: {pt:11.8, G:1, FF:2, FS:2, DS:1, FC:1},
      }
    }
  },
  "80313": {
    id: 80313,
    id_time: 265,
    time: "BAH",
    pos: "LAT",
    nome: "GILBERTO",
    scouts: {
      rdd: {
        1: {pt:4.4, A:1, FC:2},
        2: {pt:3.8, FF:1, DS:2},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:1.5, DS:1},
        12: {pt:0.5, FS:1},
        13: {pt:1.2, DS:1, FC:1},
      }
    }
  },
  "81952": {
    id: 81952,
    id_time: 294,
    time: "CFC",
    pos: "MEI",
    nome: "WILLIAN OLIVEIRA",
    scouts: {
      rdd: {
        1: {pt:7.9, FS:2, DS:5, FC:2},
        2: {pt:1.4, FF:1, DS:1, FC:3},
        3: {pt:1.5, DS:1},
        4: {pt:0.8, FF:1},
        5: {pt:"-"},
        6: {pt:2.7, DS:2, FC:1},
        7: {pt:1.2, DS:1, FC:1},
        8: {pt:"-"},
        9: {pt:1.5, DS:1},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:-0.6, FC:2},
      }
    }
  },
  "82455": {
    id: 82455,
    id_time: 277,
    time: "SAN",
    pos: "MEI",
    nome: "ZÉ RAFAEL",
    scouts: {
      rdd: {
        1: {pt:7.9, A:1, FF:3, FS:1},
        2: {pt:10.1, G:1, FS:2, DS:2, CA:1, FC:3},
        3: {pt:"-"},
        4: {pt:2.9, FS:1, DS:2, FC:2},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:0.5, FS:1},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "82628": {
    id: 82628,
    id_time: 294,
    time: "CFC",
    pos: "LAT",
    nome: "TINGA",
    scouts: {
      rdd: {
        1: {pt:5, FS:1, DS:3},
        2: {pt:3.2, FS:1, DS:2, FC:1},
        3: {pt:3, DS:2},
        4: {pt:1.5, DS:1},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:1.3, FF:1, FS:1},
        10: {pt:0},
        11: {pt:2, FS:1, DS:1},
        12: {pt:11, DS:4, SG:1},
        13: {pt:1.4, FD:1, FS:1, FC:1},
      }
    }
  },
  "82730": {
    id: 82730,
    id_time: 364,
    time: "REM",
    pos: "GOL",
    nome: "MARCELO RANGEL",
    scouts: {
      rdd: {
        1: {pt:3.2, DE:4, GS:2},
        2: {pt:3.2, DE:4, GS:2},
        3: {pt:3.5, DE:5, GS:3},
        4: {pt:2.9, DE:3, GS:1},
        5: {pt:4.5, DE:5, GS:2},
        6: {pt:1.6, DE:2, GS:1},
        7: {pt:-3, GS:3},
        8: {pt:6.8, FS:1, DE:1, DP:1, CA:1, GS:1},
        9: {pt:-0.7, DE:1, GS:2},
        10: {pt:8.9, SG:1, DE:3},
        11: {pt:2.1, FS:1, DE:2, GS:1},
        12: {pt:2.5, DE:5, GS:4},
        13: {pt:5.5, DE:5, GS:1},
      }
    }
  },
  "83263": {
    id: 83263,
    id_time: 2305,
    time: "MIR",
    pos: "MEI",
    nome: "YURI LARA",
    scouts: {
      rdd: {
        1: {pt:5.5, FS:2, DS:3},
        2: {pt:4.4, FD:1, FS:1, DS:2, FC:1},
        3: {pt:-3.3, CV:1, FC:1},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:2, FS:1, DS:1},
        9: {pt:"-"},
        10: {pt:1.5, DS:1},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "83433": {
    id: 83433,
    id_time: 364,
    time: "REM",
    pos: "MEI",
    nome: "PATRICK",
    scouts: {
      rdd: {
        1: {pt:1.3, FF:1, FS:1},
        2: {pt:1.5, DS:1},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:0.5, FS:1},
        6: {pt:3.7, FS:2, DS:2, FC:1},
        7: {pt:0.5, FS:1},
        8: {pt:0.1, I:1, DS:1, FC:1, PC:1},
        9: {pt:"-"},
        10: {pt:7.3, FF:1, FS:1, DS:4},
        11: {pt:3.7, FF:1, FS:1, DS:2, FC:2},
        12: {pt:0.2, FS:1, FC:1},
        13: {pt:2, FS:1, DS:1},
      }
    }
  },
  "83528": {
    id: 83528,
    id_time: 262,
    time: "FLA",
    pos: "ZAG",
    nome: "LÉO PEREIRA",
    scouts: {
      rdd: {
        1: {pt:0.1, FS:2, FC:3},
        2: {pt:-0.3, FC:1},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:4.9, DS:1, SG:1, CA:1, FC:2},
        6: {pt:17.4, G:1, FD:1, FS:1, DS:2, SG:1, FC:1},
        7: {pt:3.6, FS:1, SG:1, CA:1, FC:3},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:2.3, FF:1, DS:1},
        11: {pt:3.8, FF:1, DS:2},
        12: {pt:3.7, SG:1, CA:1, FC:1},
        13: {pt:6.5, DS:1, SG:1},
      }
    }
  },
  "84339": {
    id: 84339,
    id_time: 294,
    time: "CFC",
    pos: "LAT",
    nome: "BRUNO MELO",
    scouts: {
      rdd: {
        1: {pt:2.1, FS:1, I:1, DS:2, CA:1, FC:1},
        2: {pt:4.6, A:1, I:1, FC:1},
        3: {pt:0.8, FF:1},
        4: {pt:"-"},
        5: {pt:5.5, FS:1, SG:1},
        6: {pt:8, DS:2, SG:1},
        7: {pt:6.5, DS:1, SG:1},
        8: {pt:0},
        9: {pt:2.8, FS:2, DS:2, FC:4},
        10: {pt:7.2, FS:3, DS:4, FC:1},
        11: {pt:5.8, FF:1, FS:1, DS:3},
        12: {pt:5.5, FS:1, SG:1},
        13: {pt:-2.5, FF:1, CV:1, FC:1},
      }
    }
  },
  "84558": {
    id: 84558,
    id_time: 283,
    time: "CRU",
    pos: "MEI",
    nome: "LUCAS ROMERO",
    scouts: {
      rdd: {
        1: {pt:2.2, FS:2, DS:1, FC:1},
        2: {pt:5, A:1},
        3: {pt:7.5, A:1, FS:2, DS:1},
        4: {pt:0.7, FD:1, FS:1, CA:1},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:-0.3, FC:1},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:11.4, G:1, FF:1, FS:1, DS:2, FC:3},
        13: {pt:7.1, FD:1, FS:1, DS:4, FC:2},
      }
    }
  },
  "84626": {
    id: 84626,
    id_time: 294,
    time: "CFC",
    pos: "MEI",
    nome: "JOSUÉ",
    scouts: {
      rdd: {
        1: {pt:-1, FF:1, DS:1, CV:1, FC:1},
        2: {pt:"-"},
        3: {pt:-0.1, FS:1, FC:2},
        4: {pt:3.8, FF:1, FS:3, DS:1},
        5: {pt:12.7, A:2, FD:1, FF:1, FS:2, FC:1},
        6: {pt:1.2, DS:1, FC:1},
        7: {pt:0.5, DS:1, CA:1},
        8: {pt:-0.1, FF:1, FC:3},
        9: {pt:1.3, FF:1, FS:1},
        10: {pt:6.5, A:1, FS:3},
        11: {pt:6.2, A:1, FD:1},
        12: {pt:1.4, FS:1, DS:1, FC:2},
        13: {pt:1, FS:2},
      }
    }
  },
  "84735": {
    id: 84735,
    id_time: 262,
    time: "FLA",
    pos: "MEI",
    nome: "JORGINHO",
    scouts: {
      rdd: {
        1: {pt:-1.8, DS:1, CV:1, FC:1},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:2.4, DS:2, FC:2},
        6: {pt:4, FS:1, DS:3, CA:1},
        7: {pt:0},
        8: {pt:4.4, FS:3, DS:3, CA:1, FC:2},
        9: {pt:3.2, FS:1, DS:2, FC:1},
        10: {pt:11, G:1, FS:3, DS:1},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:0},
      }
    }
  },
  "84816": {
    id: 84816,
    id_time: 262,
    time: "FLA",
    pos: "LAT",
    nome: "VARELA",
    scouts: {
      rdd: {
        1: {pt:6.7, FS:2, DS:4, FC:1},
        2: {pt:-0.3, PS:1, CA:1, FC:1},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:5, SG:1},
        6: {pt:9.9, A:1, I:1, SG:1},
        7: {pt:5.8, FF:1, SG:1},
        8: {pt:6.5, FS:1, DS:4},
        9: {pt:"-"},
        10: {pt:2.5, FF:1, FS:1, DS:1, FC:1},
        11: {pt:5, FS:1, DS:3},
        12: {pt:5, SG:1},
        13: {pt:8.4, A:1, SG:1, CA:1, FC:2},
      }
    }
  },
  "84847": {
    id: 84847,
    id_time: 277,
    time: "SAN",
    pos: "ZAG",
    nome: "LUAN PERES",
    scouts: {
      rdd: {
        1: {pt:1.7, FS:1, DS:1, FC:1},
        2: {pt:-0.1, FS:1, FC:2},
        3: {pt:1.4, FS:1, DS:1, FC:2},
        4: {pt:2, FS:1, DS:1},
        5: {pt:"-"},
        6: {pt:-2.9, FS:2, CV:1, FC:3},
        7: {pt:"-"},
        8: {pt:7, FS:4, SG:1},
        9: {pt:6.5, DS:1, SG:1},
        10: {pt:0.9, DS:1, FC:2},
        11: {pt:6.7, DS:2, SG:1, CA:1, FC:1},
        12: {pt:1.7, DS:2, CA:1, FC:1},
        13: {pt:0.5, FS:1},
      }
    }
  },
  "84927": {
    id: 84927,
    id_time: 364,
    time: "REM",
    pos: "MEI",
    nome: "DODÔ",
    scouts: {
      rdd: {
        1: {pt:-0.8, FS:1, CA:1, FC:1},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "85048": {
    id: 85048,
    id_time: 264,
    time: "COR",
    pos: "ATA",
    nome: "MEMPHIS DEPAY",
    scouts: {
      rdd: {
        1: {pt:3.7, FD:1, FF:1, FS:1, DS:1, FC:1},
        2: {pt:"-"},
        3: {pt:0.4, FS:1, I:1},
        4: {pt:-0.1, I:1},
        5: {pt:-0.1, FS:1, FC:2},
        6: {pt:9.3, G:1, FF:1, FS:1},
        7: {pt:"-"},
        8: {pt:-0.3, FC:1},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "85403": {
    id: 85403,
    id_time: 276,
    time: "SAO",
    pos: "MEI",
    nome: "DANIELZINHO",
    scouts: {
      rdd: {
        1: {pt:7.6, G:1, FS:1, FC:3},
        2: {pt:6.2, FS:4, DS:3, FC:1},
        3: {pt:1.8, FF:1, PS:1},
        4: {pt:"-"},
        5: {pt:3.6, FF:2, FS:1, DS:1},
        6: {pt:5.5, A:1, FS:1},
        7: {pt:1.7, FS:4, FC:1},
        8: {pt:1.9, FS:2, DS:1, FC:2},
        9: {pt:0.5, FS:1},
        10: {pt:"-"},
        11: {pt:3.7, FS:5, DS:1, FC:1},
        12: {pt:-0.3, FC:1},
        13: {pt:2, FS:3, DS:1, CA:1},
      }
    }
  },
  "85626": {
    id: 85626,
    id_time: 293,
    time: "CAP",
    pos: "ZAG",
    nome: "LÉO",
    scouts: {
      rdd: {
        1: {pt:4.7, SG:1, FC:1},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:5.1, DS:4, FC:3},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "86292": {
    id: 86292,
    id_time: 315,
    time: "CHA",
    pos: "ATA",
    nome: "BOLASIE",
    scouts: {
      rdd: {
        1: {pt:1.2, DS:1, FC:1},
        2: {pt:"-"},
        3: {pt:0.8, FF:1},
        4: {pt:"-"},
        5: {pt:2.2, FS:5, FC:1},
        6: {pt:0.9, FF:1, FS:2, PS:1, CA:1, FC:3},
        7: {pt:-0.3, FC:1},
        8: {pt:2, FF:2, FS:1, I:1},
        9: {pt:1.5, FF:2, FS:1, FC:2},
        10: {pt:1.2, FF:2, I:1, FC:1},
        11: {pt:-2, I:1, CA:1, FC:3},
        12: {pt:5, A:1},
        13: {pt:"-"},
      }
    }
  },
  "86757": {
    id: 86757,
    id_time: 262,
    time: "FLA",
    pos: "ATA",
    nome: "EVERTON",
    scouts: {
      rdd: {
        1: {pt:3.2, FD:1, FF:1, DS:1, FC:1},
        2: {pt:3.4, FF:3, FS:2},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:2, FF:1, DS:1, FC:1},
        6: {pt:"-"},
        7: {pt:-0.6, FC:2},
        8: {pt:"-"},
        9: {pt:1, FF:1, DS:1, CA:1, FC:1},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:0.8, FF:1},
        13: {pt:"-"},
      }
    }
  },
  "86863": {
    id: 86863,
    id_time: 2305,
    time: "MIR",
    pos: "ZAG",
    nome: "LUIZ OTÁVIO",
    scouts: {
      rdd: {
        1: {pt:1.5, DS:1},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "87008": {
    id: 87008,
    id_time: 267,
    time: "VAS",
    pos: "GOL",
    nome: "LÉO JARDIM",
    scouts: {
      rdd: {
        1: {pt:1.9, DE:3, GS:2},
        2: {pt:-1, GS:1},
        3: {pt:1.6, DE:2, GS:1},
        4: {pt:0.6, DE:2, GS:2},
        5: {pt:1.6, DE:2, GS:1},
        6: {pt:2.7, FS:1, DE:4, GS:3},
        7: {pt:1.9, DE:3, GS:2},
        8: {pt:3.6, FS:1, DS:1, DE:2, GS:1},
        9: {pt:4.2, DE:4, GS:1},
        10: {pt:5.8, DE:6, GS:2},
        11: {pt:1.6, DE:2, GS:1},
        12: {pt:-1, DE:1, CA:1, FC:1, GS:1},
        13: {pt:4.2, DE:4, GS:1},
      }
    }
  },
  "87225": {
    id: 87225,
    id_time: 280,
    time: "RBB",
    pos: "ZAG",
    nome: "PEDRO HENRIQUE",
    scouts: {
      rdd: {
        1: {pt:4.5, FF:1, SG:1, CA:1, FC:1},
        2: {pt:5.5, FS:1, SG:1},
        3: {pt:0.5, FS:1},
        4: {pt:0.2, DS:1, CA:1, FC:1},
        5: {pt:5.5, FS:2, DS:3},
        6: {pt:"-"},
        7: {pt:2.8, FF:1, FS:1, DS:1},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:5, SG:1},
        11: {pt:"-"},
        12: {pt:3.5, FS:4, DS:1},
        13: {pt:1.6, FS:1, I:1, DS:1, FC:1},
      }
    }
  },
  "87742": {
    id: 87742,
    id_time: 2305,
    time: "MIR",
    pos: "MEI",
    nome: "NETO MOURA",
    scouts: {
      rdd: {
        1: {pt:0.5, FF:1, FC:1},
        2: {pt:"-"},
        3: {pt:0.4, FS:1, DS:1, CA:1, FC:2},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:-1.6, CA:1, FC:2},
        7: {pt:5.8, FD:1, FF:2, DS:2},
        8: {pt:2.5, FS:2, DS:1},
        9: {pt:3.3, FF:2, FS:1, DS:1, FC:1},
        10: {pt:"-"},
        11: {pt:1.4, FS:1, DS:1, FC:2},
        12: {pt:0},
        13: {pt:0.8, FF:1},
      }
    }
  },
  "87863": {
    id: 87863,
    id_time: 262,
    time: "FLA",
    pos: "MEI",
    nome: "ARRASCAETA",
    scouts: {
      rdd: {
        1: {pt:0.8, FF:1},
        2: {pt:8.4, G:1, FS:2, FC:2},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:9.3, FT:1, FD:1, FF:2, FS:1, DS:2},
        6: {pt:"-"},
        7: {pt:8, A:1, FF:2, FS:1, DS:1, FC:2},
        8: {pt:4.5, FT:1, DS:1},
        9: {pt:"-"},
        10: {pt:1.8, FF:1, PS:1},
        11: {pt:1.7, FD:1, FS:1},
        12: {pt:13, G:1, FT:1, FD:1, FF:1, FS:2, CA:1},
        13: {pt:10.2, G:1, FD:1, FS:2},
      }
    }
  },
  "87999": {
    id: 87999,
    id_time: 282,
    time: "CAM",
    pos: "MEI",
    nome: "GUSTAVO SCARPA",
    scouts: {
      rdd: {
        1: {pt:0.5, FS:1},
        2: {pt:0},
        3: {pt:9, A:1, FD:1, FF:1, FS:1, DS:1},
        4: {pt:-0.3, FC:1},
        5: {pt:1.3, FF:1, FS:1},
        6: {pt:1.2, FD:1},
        7: {pt:"-"},
        8: {pt:2.8, FF:1, FS:1, DS:1},
        9: {pt:4.3, FT:1, FF:1, FS:1},
        10: {pt:8, G:1},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:4.1, FF:3, FS:1, DS:1, FC:1},
      }
    }
  },
  "88037": {
    id: 88037,
    id_time: 284,
    time: "GRE",
    pos: "TEC",
    nome: "LUÍS CASTRO",
    scouts: {
      rdd: {
        1: {pt:4.47},
        2: {pt:8.65, V:1},
        3: {pt:3.09},
        4: {pt:6.06, V:1},
        5: {pt:4.42},
        6: {pt:2.15},
        7: {pt:7.61, V:1},
        8: {pt:3.45},
        9: {pt:3.34},
        10: {pt:6.07},
        11: {pt:4.11},
        12: {pt:3.37},
        13: {pt:7.05, V:1},
      }
    }
  },
  "88312": {
    id: 88312,
    id_time: 282,
    time: "CAM",
    pos: "ZAG",
    nome: "JUNIOR ALONSO",
    scouts: {
      rdd: {
        1: {pt:3.5, FS:1, DS:2},
        2: {pt:4.5, FS:3, DS:2},
        3: {pt:1, FF:1, FS:1, FC:1},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:2.7, DS:2, FC:1},
        7: {pt:6.5, DS:1, SG:1},
        8: {pt:1.7, DS:2, CA:1, FC:1},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "89256": {
    id: 89256,
    id_time: 283,
    time: "CRU",
    pos: "MEI",
    nome: "GERSON",
    scouts: {
      rdd: {
        1: {pt:1.4, FD:1, FS:2, I:2, FC:2},
        2: {pt:4, FS:2, DS:2},
        3: {pt:0.2, DS:1, CA:1, FC:1},
        4: {pt:3.4, FS:2, DS:2, FC:2},
        5: {pt:2.7, FS:3, DS:1, FC:1},
        6: {pt:2.2, FD:1, FS:1, DS:1, CA:1},
        7: {pt:"-"},
        8: {pt:3.6, FD:1, FS:3, DS:1, FC:2},
        9: {pt:3.8, FF:1, DS:2},
        10: {pt:2.2, FS:2, DS:1, FC:1},
        11: {pt:5.5, FS:5, DS:2},
        12: {pt:12.1, A:1, FD:2, FS:1, DS:3, FC:1},
        13: {pt:8.2, FS:5, DS:4, FC:1},
      }
    }
  },
  "89273": {
    id: 89273,
    id_time: 284,
    time: "GRE",
    pos: "LAT",
    nome: "JOÃO PEDRO",
    scouts: {
      rdd: {
        1: {pt:0.4, FS:1, I:1},
        2: {pt:1.4, FS:1, DS:1, FC:2},
        3: {pt:-0.6, FC:2},
        4: {pt:1.2, DS:1, FC:1},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "89274": {
    id: 89274,
    id_time: 275,
    time: "PAL",
    pos: "MEI",
    nome: "ANDREAS PEREIRA",
    scouts: {
      rdd: {
        1: {pt:6.7, A:1, FF:1, DS:1, FC:2},
        2: {pt:16.5, A:3, DS:1},
        3: {pt:14.9, G:1, A:1, FS:1, DS:2, CA:1, FC:2},
        4: {pt:1.1, FS:1, DS:1, FC:3},
        5: {pt:4.4, FD:1, FF:1, DS:2, FC:2},
        6: {pt:0},
        7: {pt:12.8, A:2, FF:1, FS:1, DS:1},
        8: {pt:2.4, FS:2, DS:2, CA:1, FC:2},
        9: {pt:9.3, A:1, FF:2, DS:2, FC:1},
        10: {pt:2.6, FD:2, FS:1, FC:1},
        11: {pt:0.9, FD:1, FC:1},
        12: {pt:1.8, FF:1, FS:2},
        13: {pt:0.9, DS:1, FC:2},
      }
    }
  },
  "89837": {
    id: 89837,
    id_time: 266,
    time: "FLU",
    pos: "MEI",
    nome: "LUCHO ACOSTA",
    scouts: {
      rdd: {
        1: {pt:13.8, G:1, FF:1, FS:1, DS:3},
        2: {pt:4.4, FF:2, FS:2, DS:2, FC:4},
        3: {pt:10.6, G:1, DS:3, CA:1, FC:3},
        4: {pt:11.7, G:1, FD:1, FS:2, DS:1},
        5: {pt:6.4, A:1, FD:1, FS:1, FC:1},
        6: {pt:6.3, FD:1, FF:2, FS:1, DS:2},
        7: {pt:11.5, A:2, FS:3},
        8: {pt:3.5, FD:1, FF:2, FS:1, DS:1, CA:1, FC:1},
        9: {pt:0.3, FF:1, FS:1, CA:1},
        10: {pt:"-"},
        11: {pt:0},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "89840": {
    id: 89840,
    id_time: 276,
    time: "SAO",
    pos: "ATA",
    nome: "CALLERI",
    scouts: {
      rdd: {
        1: {pt:0.4, FS:2, FC:2},
        2: {pt:11, G:1, FF:1, FS:2, DS:1, FC:1},
        3: {pt:12.3, G:1, FD:1, FF:1, FS:3, I:1, DS:1, FC:2},
        4: {pt:2.7, DS:2, FC:1},
        5: {pt:12.1, G:1, FD:1, I:1, DS:2},
        6: {pt:8.8, G:1, FS:2, I:1, DS:1, CA:1, FC:2},
        7: {pt:3.6, FD:1, FF:2, FS:4, FC:4},
        8: {pt:1.9, FF:1, FS:3, I:1, FC:1},
        9: {pt:11.5, G:1, FF:3, FS:1, DS:1, FC:3},
        10: {pt:9.8, G:1, FD:1, FS:2, I:1, FC:1},
        11: {pt:"-"},
        12: {pt:7, FD:2, FF:2, FS:5, DS:1, PC:1},
        13: {pt:2.7, FF:1, FS:2, DS:1, FC:2},
      }
    }
  },
  "89883": {
    id: 89883,
    id_time: 284,
    time: "GRE",
    pos: "MEI",
    nome: "DODI",
    scouts: {
      rdd: {
        1: {pt:-1.1, FS:1, CA:1, FC:2},
        2: {pt:1.2, DS:1, FC:1},
        3: {pt:"-"},
        4: {pt:0},
        5: {pt:0},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:-1.6, CA:1, FC:2},
        10: {pt:2.3, FF:1, DS:1},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "89918": {
    id: 89918,
    id_time: 2305,
    time: "MIR",
    pos: "ATA",
    nome: "EVERTON GALDINO",
    scouts: {
      rdd: {
        1: {pt:0.5, FS:1},
        2: {pt:1.2, FD:1},
        3: {pt:0},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:0.8, FF:1},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:0.5, FS:1},
      }
    }
  },
  "90031": {
    id: 90031,
    id_time: 293,
    time: "CAP",
    pos: "ATA",
    nome: "MENDOZA",
    scouts: {
      rdd: {
        1: {pt:8.2, G:1, FS:1, FC:1},
        2: {pt:"-"},
        3: {pt:2.8, FF:2, DS:1, FC:1},
        4: {pt:2.4, FD:1, DS:1, FC:1},
        5: {pt:"-"},
        6: {pt:9.5, G:1, DS:1},
        7: {pt:10, G:1, FS:1, DS:1},
        8: {pt:-0.3, FC:1},
        9: {pt:4.9, FT:1, FS:2, DS:1, FC:2},
        10: {pt:2.3, FF:1, DS:1},
        11: {pt:12, G:1, FD:1, FF:1, FS:1, DS:1},
        12: {pt:3.2, FD:1, FS:1, DS:1},
        13: {pt:0.7, FF:1, FS:1, FC:2},
      }
    }
  },
  "90285": {
    id: 90285,
    id_time: 262,
    time: "FLA",
    pos: "ATA",
    nome: "BRUNO HENRIQUE",
    scouts: {
      rdd: {
        1: {pt:0.8, FF:1},
        2: {pt:2.3, FD:1, I:1, DS:1, FC:1},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:2.2, FF:1, I:1, DS:1},
        11: {pt:-0.8, FF:1, CA:1, FC:2},
        12: {pt:1, FS:2},
        13: {pt:0},
      }
    }
  },
  "90302": {
    id: 90302,
    id_time: 294,
    time: "CFC",
    pos: "ATA",
    nome: "PEDRO ROCHA",
    scouts: {
      rdd: {
        1: {pt:2.8, FD:1, FF:1, FS:3, I:1, FC:2},
        2: {pt:0.4, FF:2, FS:2, CA:1, FC:4},
        3: {pt:12.8, G:1, FD:2, FF:3},
        4: {pt:2.1, FF:3, FC:1},
        5: {pt:1, FS:1, I:1, DS:1, FC:3},
        6: {pt:8.9, G:1, FS:3, I:3, FC:1},
        7: {pt:6.3, FD:1, FF:2, FS:2, I:2, DS:2, FC:1},
        8: {pt:0.5, FS:1},
        9: {pt:1.2, FD:1},
        10: {pt:1.7, FS:1, DS:1, FC:1},
        11: {pt:1.5, FF:1, FS:2, FC:1},
        12: {pt:9, G:1, FS:2},
        13: {pt:3.1, FF:2, FS:3},
      }
    }
  },
  "90370": {
    id: 90370,
    id_time: 264,
    time: "COR",
    pos: "MEI",
    nome: "MATHEUS PEREIRA",
    scouts: {
      rdd: {
        1: {pt:-0.3, FC:1},
        2: {pt:"-"},
        3: {pt:3.5, FF:1, DS:2, FC:1},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:1, FF:1, FS:1, FC:1},
        8: {pt:0.5, FF:1, FC:1},
        9: {pt:2, FD:2, DS:1, CA:1, FC:3},
        10: {pt:-0.3, FC:1},
        11: {pt:"-"},
        12: {pt:-0.3, FC:1},
        13: {pt:0.8, FF:1},
      }
    }
  },
  "90532": {
    id: 90532,
    id_time: 284,
    time: "GRE",
    pos: "MEI",
    nome: "ARTHUR MELO",
    scouts: {
      rdd: {
        1: {pt:5.7, FS:3, DS:3, FC:1},
        2: {pt:6, FS:3, DS:3},
        3: {pt:3.9, FS:3, DS:2, FC:2},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:4.5, FS:6, DS:1},
        9: {pt:"-"},
        10: {pt:-1, CA:1},
        11: {pt:3, FF:1, FS:2, DS:1, FC:1},
        12: {pt:4.5, FS:6, DS:1},
        13: {pt:0.7, FS:2, FC:1},
      }
    }
  },
  "90588": {
    id: 90588,
    id_time: 287,
    time: "VIT",
    pos: "MEI",
    nome: "CAÍQUE",
    scouts: {
      rdd: {
        1: {pt:0.4, FS:2, FC:2},
        2: {pt:2.2, FF:1, FS:1, DS:1, FC:2},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:2.7, DS:2, FC:1},
        6: {pt:0.2, DS:1, CA:1, FC:1},
        7: {pt:2.4, FS:3, DS:1, FC:2},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:3.4, FS:2, DS:2, FC:2},
        11: {pt:4.8, FD:1, DS:3, FC:3},
        12: {pt:2.5, FS:2, DS:1},
        13: {pt:2.2, FS:2, DS:1, FC:1},
      }
    }
  },
  "90703": {
    id: 90703,
    id_time: 287,
    time: "VIT",
    pos: "MEI",
    nome: "MATHEUZINHO",
    scouts: {
      rdd: {
        1: {pt:4, FD:1, FF:1, FS:1, DS:1},
        2: {pt:0},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:4.2, FD:1, FS:3, DS:1},
        6: {pt:1.8, FF:1, FS:2},
        7: {pt:1.8, FF:1, FS:2},
        8: {pt:3.3, FD:2, FS:2, DS:1, CA:1, FC:2},
        9: {pt:0},
        10: {pt:8.7, G:1, PS:1, FC:1},
        11: {pt:3.9, FD:2, FS:3},
        12: {pt:2.5, FF:1, FS:4, FC:1},
        13: {pt:8, A:1, DS:2},
      }
    }
  },
  "90715": {
    id: 90715,
    id_time: 293,
    time: "CAP",
    pos: "ATA",
    nome: "LUIZ FERNANDO",
    scouts: {
      rdd: {
        1: {pt:-0.3, FC:1},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "90768": {
    id: 90768,
    id_time: 283,
    time: "CRU",
    pos: "ZAG",
    nome: "FABRÍCIO BRUNO",
    scouts: {
      rdd: {
        1: {pt:0.5, FS:1},
        2: {pt:4.8, FF:1, FS:1, DS:3, CA:1},
        3: {pt:-0.6, FC:2},
        4: {pt:1.5, DS:1},
        5: {pt:1, FD:1, FF:1, CA:1},
        6: {pt:1.3, FF:2, FC:1},
        7: {pt:0.5, FS:1},
        8: {pt:5.5, FS:1, SG:1},
        9: {pt:9.2, FD:1, DS:2, SG:1},
        10: {pt:0},
        11: {pt:1.5, DS:1},
        12: {pt:4.2, FS:1, SG:1, CA:1, FC:1},
        13: {pt:"-"},
      }
    }
  },
  "90943": {
    id: 90943,
    id_time: 287,
    time: "VIT",
    pos: "ZAG",
    nome: "ZÉ MARCOS",
    scouts: {
      rdd: {
        1: {pt:4.1, SG:1, FC:3},
        2: {pt:1.4, FS:1, DS:1, FC:2},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "91101": {
    id: 91101,
    id_time: 265,
    time: "BAH",
    pos: "GOL",
    nome: "RONALDO",
    scouts: {
      rdd: {
        1: {pt:4.2, DE:4, GS:1},
        2: {pt:2.9, DE:3, GS:1},
        3: {pt:9.2, SG:1, DE:4, CA:1},
        4: {pt:"-"},
        5: {pt:0.3, DE:1, GS:1},
        6: {pt:7.1, FS:1, SG:1, DE:2, CA:1},
        7: {pt:8.9, SG:1, DE:3},
        8: {pt:2.6, DE:2},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "91473": {
    id: 91473,
    id_time: 262,
    time: "FLA",
    pos: "MEI",
    nome: "ERICK PULGAR",
    scouts: {
      rdd: {
        1: {pt:3.5, FS:1, DS:2},
        2: {pt:-0.4, FS:1, FC:3},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:2.1, FD:1, FS:2, DS:1, CA:1, FC:2},
        6: {pt:-0.1, DS:1, CA:1, FC:2},
        7: {pt:4.4, DS:4, CA:1, FC:2},
        8: {pt:"-"},
        9: {pt:-0.3, DS:2, CV:1, FC:1},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "91573": {
    id: 91573,
    id_time: 276,
    time: "SAO",
    pos: "ZAG",
    nome: "ARBOLEDA",
    scouts: {
      rdd: {
        1: {pt:7.5, DS:5},
        2: {pt:3.6, DS:3, FC:3},
        3: {pt:"-"},
        4: {pt:5.5, FS:1, SG:1},
        5: {pt:6.5, DS:1, SG:1},
        6: {pt:0},
        7: {pt:"-"},
        8: {pt:0.8, I:1, DS:1, FC:2},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "91706": {
    id: 91706,
    id_time: 284,
    time: "GRE",
    pos: "LAT",
    nome: "MARLON",
    scouts: {
      rdd: {
        1: {pt:4.6, FS:1, I:1, DS:3, FC:1},
        2: {pt:4.4, FS:1, DS:3, FC:2},
        3: {pt:0.9, DS:1, FC:2},
        4: {pt:17.9, G:1, A:1, FD:1, FF:1, FS:1, DS:2, FC:2},
        5: {pt:2.4, FS:5, DS:1, CA:1, FC:2},
        6: {pt:"-"},
        7: {pt:9.5, FD:1, FF:1, FS:2, DS:1, SG:1},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "91772": {
    id: 91772,
    id_time: 265,
    time: "BAH",
    pos: "ZAG",
    nome: "DAVID DUARTE",
    scouts: {
      rdd: {
        1: {pt:0.9, DS:1, FC:2},
        2: {pt:4.3, I:2, DS:3},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:4.9, DS:1, SG:1, CA:1, FC:2},
        10: {pt:10.2, G:1, FD:1, FF:1, FS:1, FC:1},
        11: {pt:-1.5, DS:1, GC:1},
        12: {pt:3, DS:2},
        13: {pt:"-"},
      }
    }
  },
  "91908": {
    id: 91908,
    id_time: 284,
    time: "GRE",
    pos: "ATA",
    nome: "PAVÓN",
    scouts: {
      rdd: {
        1: {pt:2.9, FD:1, FS:1, DS:1, FC:1},
        2: {pt:0},
        3: {pt:1.5, DS:1},
        4: {pt:7.4, FT:1, FD:1, DS:3, CA:1, FC:1},
        5: {pt:3, DS:2},
        6: {pt:1.7, FS:1, DS:1, FC:1},
        7: {pt:4.2, DS:3, FC:1},
        8: {pt:8.3, FF:1, DS:5},
        9: {pt:5.3, FF:1, DS:3},
        10: {pt:2.8, FF:1, DS:2, CA:1},
        11: {pt:3.2, FS:1, DS:2, FC:1},
        12: {pt:2.3, I:1, DS:2, FC:2},
        13: {pt:2, FD:1, I:1, DS:1, FC:2},
      }
    }
  },
  "92171": {
    id: 92171,
    id_time: 263,
    time: "BOT",
    pos: "ATA",
    nome: "ARTHUR CABRAL",
    scouts: {
      rdd: {
        1: {pt:7.1, A:1, FF:3, FC:1},
        2: {pt:8.9, G:1, FS:3, FC:2},
        3: {pt:1.9, FD:1, FS:2, FC:1},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:0.7, FF:1, FS:1, FC:2},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:9.4, G:1, FS:1, DS:1, FC:2},
        10: {pt:4.6, FD:1, FF:1, FS:1, DS:2, FC:3},
        11: {pt:11.7, G:1, FD:1, FF:1, FS:1, DS:1, FC:1},
        12: {pt:2.1, FF:2, FS:1},
        13: {pt:0.5, FS:2, I:1, DS:1, CA:1, FC:3},
      }
    }
  },
  "92180": {
    id: 92180,
    id_time: 287,
    time: "VIT",
    pos: "TEC",
    nome: "JAIR VENTURA",
    scouts: {
      rdd: {
        1: {pt:9.26, V:1},
        2: {pt:3.41},
        3: {pt:0},
        4: {pt:0},
        5: {pt:4.45},
        6: {pt:8.4, V:1},
        7: {pt:1.48},
        8: {pt:7.39, V:1},
        9: {pt:2.05},
        10: {pt:3.16},
        11: {pt:9.46, V:1},
        12: {pt:4.63},
        13: {pt:4.29},
      }
    }
  },
  "92273": {
    id: 92273,
    id_time: 293,
    time: "CAP",
    pos: "TEC",
    nome: "ODAIR HELLMANN",
    scouts: {
      rdd: {
        1: {pt:8.09, V:1},
        2: {pt:0},
        3: {pt:6.25, V:1},
        4: {pt:3.05},
        5: {pt:0},
        6: {pt:4.5},
        7: {pt:4.47, V:1},
        8: {pt:8.59, V:1},
        9: {pt:2.33},
        10: {pt:3.33},
        11: {pt:8.55999999999999, V:1},
        12: {pt:2.11},
        13: {pt:6.49, V:1},
      }
    }
  },
  "92696": {
    id: 92696,
    id_time: 287,
    time: "VIT",
    pos: "ATA",
    nome: "RENATO KAYZER",
    scouts: {
      rdd: {
        1: {pt:10.4, G:1, FD:1, FF:1, FS:1, I:1},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:-0.1, FS:1, FC:2},
        6: {pt:6.9, G:1, I:2, FC:3},
        7: {pt:-0.7, FF:1, FS:1, I:1, CA:1, FC:3},
        8: {pt:2.1, FF:1, I:2, DS:1},
        9: {pt:"-"},
        10: {pt:4.7, FD:1, FS:4, DS:1},
        11: {pt:1.5, FS:1, I:2, DS:1, FC:1},
        12: {pt:-0.1, I:1},
        13: {pt:"-"},
      }
    }
  },
  "92854": {
    id: 92854,
    id_time: 285,
    time: "INT",
    pos: "ATA",
    nome: "BORRÉ",
    scouts: {
      rdd: {
        1: {pt:2.4, FD:2, FF:1, I:2, FC:2},
        2: {pt:8.7, G:1, FS:2, FC:1},
        3: {pt:2.6, FD:1, FF:2, FS:1, I:1, FC:2},
        4: {pt:2.9, FD:1, I:1, DS:2, FC:4},
        5: {pt:1.4, FD:1, FS:1, FC:1},
        6: {pt:2.1, FF:1, FS:1, I:1, DS:1, FC:2},
        7: {pt:3.8, FD:1, FF:1, FS:1, I:2, DS:1},
        8: {pt:4.5, FF:1, PS:1, DS:2, FC:1},
        9: {pt:-0.9, FC:3},
        10: {pt:-0.2, FF:1, I:1, FC:3},
        11: {pt:0, FD:1, FS:2, CA:1, FC:4},
        12: {pt:12, A:1, FD:3, FS:1, I:1, DS:2},
        13: {pt:-0.1, I:1},
      }
    }
  },
  "92981": {
    id: 92981,
    id_time: 285,
    time: "INT",
    pos: "MEI",
    nome: "RONALDO",
    scouts: {
      rdd: {
        1: {pt:0.2, FF:1, FC:2},
        2: {pt:0.7, FF:1, DS:1, CA:1, FC:2},
        3: {pt:13.9, G:1, FS:1, DS:4, FC:2},
        4: {pt:0.8, FF:1},
        5: {pt:"-"},
        6: {pt:3.4, FS:2, DS:2, FC:2},
        7: {pt:1.2, DS:1, FC:1},
        8: {pt:"-"},
        9: {pt:-0.3, FC:1},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "93411": {
    id: 93411,
    id_time: 287,
    time: "VIT",
    pos: "MEI",
    nome: "CANTALAPIEDRA",
    scouts: {
      rdd: {
        1: {pt:0.5, FF:1, FC:1},
        2: {pt:4.5, FD:1, FS:2, I:1, DS:2, FC:2},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:0.5, FS:1},
        6: {pt:"-"},
        7: {pt:-0.3, FS:2, CA:1, FC:1},
        8: {pt:0.4, FS:1, I:1},
        9: {pt:2, FS:1, DS:1},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:0},
        13: {pt:"-"},
      }
    }
  },
  "93478": {
    id: 93478,
    id_time: 283,
    time: "CRU",
    pos: "ATA",
    nome: "WANDERSON",
    scouts: {
      rdd: {
        1: {pt:0.9, FF:2, I:1, FC:2},
        2: {pt:1.8, FF:2, FS:1, FC:1},
        3: {pt:9.2, G:1, DS:1, FC:1},
        4: {pt:"-"},
        5: {pt:0},
        6: {pt:0},
        7: {pt:1, FF:1, FS:1, FC:1},
        8: {pt:1.2, FD:1},
        9: {pt:-0.1, I:1},
        10: {pt:-0.3, FC:1},
        11: {pt:0.5, FS:1},
        12: {pt:-0.3, FC:1},
        13: {pt:1.1, FD:1, I:1},
      }
    }
  },
  "93790": {
    id: 93790,
    id_time: 275,
    time: "PAL",
    pos: "MEI",
    nome: "MARLON FREITAS",
    scouts: {
      rdd: {
        1: {pt:1.4, I:1, DS:1},
        2: {pt:1.2, DS:1, FC:1},
        3: {pt:2.7, DS:2, FC:1},
        4: {pt:-1.6, CA:1, FC:2},
        5: {pt:8, A:1, DS:2},
        6: {pt:1.5, FD:1, DS:1, FC:4},
        7: {pt:-0.3, FC:1},
        8: {pt:-0.1, DS:1, CA:1, FC:2},
        9: {pt:19.1, G:2, FF:2, DS:1},
        10: {pt:4.5, DS:3},
        11: {pt:0.5, DS:1, CA:1},
        12: {pt:"-"},
        13: {pt:0.9, DS:1, FC:2},
      }
    }
  },
  "93882": {
    id: 93882,
    id_time: 280,
    time: "RBB",
    pos: "GOL",
    nome: "CLEITON",
    scouts: {
      rdd: {
        1: {pt:7.6, SG:1, DE:2},
        2: {pt:6.3, SG:1, DE:1},
        3: {pt:0.9, DE:3, CA:1, GS:2},
        4: {pt:2.9, DE:3, GS:1},
        5: {pt:2.9, DE:3, GS:1},
        6: {pt:-0.7, DE:1, GS:2},
        7: {pt:"-"},
        8: {pt:-2, GS:2},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "93988": {
    id: 93988,
    id_time: 294,
    time: "CFC",
    pos: "ATA",
    nome: "BRENO LOPES",
    scouts: {
      rdd: {
        1: {pt:1.1, FD:1, I:1},
        2: {pt:11.2, G:1, FF:1, FS:2, I:1, DS:1},
        3: {pt:16.4, G:2, FS:2, FC:2},
        4: {pt:2.5, FS:1, DS:2, CA:1},
        5: {pt:-0.1, FS:1, FC:2},
        6: {pt:0.1, FS:2, I:3, FC:2},
        7: {pt:2.5, FD:1, FF:1, FS:1},
        8: {pt:0.9, FS:1, I:1, DS:1, CA:1},
        9: {pt:"-"},
        10: {pt:2.3, FF:1, DS:1},
        11: {pt:9.5, G:1, DS:1},
        12: {pt:7.4, G:1, FC:2},
        13: {pt:4, FD:1, FF:1, FS:3, DS:1, CA:1},
      }
    }
  },
  "94067": {
    id: 94067,
    id_time: 280,
    time: "RBB",
    pos: "MEI",
    nome: "MATHEUS FERNANDES",
    scouts: {
      rdd: {
        1: {pt:0.3, FF:2, CA:1, FC:1},
        2: {pt:2.8, FF:2, DS:1, FC:1},
        3: {pt:"-"},
        4: {pt:3.5, FS:1, DS:2},
        5: {pt:0.8, FF:1},
        6: {pt:3.8, FF:1, DS:2},
        7: {pt:"-"},
        8: {pt:1.5, FS:2, I:1, DS:1, FC:3},
        9: {pt:4.5, FF:2, DS:3, CA:1, FC:2},
        10: {pt:4.2, DS:3, FC:1},
        11: {pt:1.6, FD:1, FS:2, FC:2},
        12: {pt:5.2, A:1, FF:1, FC:2},
        13: {pt:-0.3, FC:1},
      }
    }
  },
  "94154": {
    id: 94154,
    id_time: 282,
    time: "CAM",
    pos: "MEI",
    nome: "MAYCON",
    scouts: {
      rdd: {
        1: {pt:2.5, FF:1, FS:1, DS:1, FC:1},
        2: {pt:2.7, DS:2, FC:1},
        3: {pt:2.4, DS:2, FC:2},
        4: {pt:2, FS:1, DS:1},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:1, FF:1, FS:1, FC:1},
        13: {pt:-0.3, FC:1},
      }
    }
  },
  "94583": {
    id: 94583,
    id_time: 262,
    time: "FLA",
    pos: "ATA",
    nome: "PEDRO",
    scouts: {
      rdd: {
        1: {pt:6.4, A:1, FS:1, DS:1, FC:2},
        2: {pt:0.2, FS:1, FC:1},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:19.4, G:1, FD:1, FS:3, DS:6, FC:1},
        6: {pt:11.8, G:1, FF:1, FS:3, DS:1},
        7: {pt:0},
        8: {pt:6.1, A:1, FF:1, FS:2, I:1, FC:2},
        9: {pt:0.5, FS:1},
        10: {pt:9, G:1, FS:2},
        11: {pt:20.6, G:2, FT:1, FD:1, FS:1, I:1},
        12: {pt:7.9, A:1, FD:2, FF:1, FC:1},
        13: {pt:15.6, G:2, I:1, FC:1},
      }
    }
  },
  "94968": {
    id: 94968,
    id_time: 280,
    time: "RBB",
    pos: "LAT",
    nome: "JUNINHO CAPIXABA",
    scouts: {
      rdd: {
        1: {pt:16.2, G:1, FT:1, FF:1, SG:1, FC:2},
        2: {pt:8.9, DS:3, SG:1, FC:2},
        3: {pt:4.4, FF:2, FS:1, DS:3, CA:1, FC:4},
        4: {pt:14.7, G:1, FS:2, DS:4, FC:1},
        5: {pt:7.2, A:1, FS:1, DS:2, CA:1, FC:1},
        6: {pt:3.6, FD:1, FS:2, DS:2, CA:1, FC:2},
        7: {pt:"-"},
        8: {pt:3.5, FF:1, FS:2, DS:2, CA:1, FC:1},
        9: {pt:14, A:1, FS:2, DS:2, SG:1},
        10: {pt:7.5, FF:2, FS:2, DS:1, SG:1, CA:1, FC:2},
        11: {pt:6.2, FF:3, FS:1, DS:3, FC:4},
        12: {pt:0.1, FS:1, I:1, FC:1},
        13: {pt:1.8, FS:2, DS:2, CA:1, FC:4},
      }
    }
  },
  "95332": {
    id: 95332,
    id_time: 315,
    time: "CHA",
    pos: "ATA",
    nome: "MARCINHO",
    scouts: {
      rdd: {
        1: {pt:1.6, FS:1, I:1, DS:1, FC:1},
        2: {pt:1.8, FF:1, FS:2},
        3: {pt:4, FD:1, FF:1, FS:1, DS:1},
        4: {pt:"-"},
        5: {pt:-0.3, FC:1},
        6: {pt:4.2, FF:1, FS:1, I:1, DS:2},
        7: {pt:0.7, FF:1, I:1},
        8: {pt:2.3, FF:1, DS:1},
        9: {pt:"-"},
        10: {pt:-0.3, FC:1},
        11: {pt:1.2, DS:1, FC:1},
        12: {pt:9.7, G:1, FD:1, FS:1},
        13: {pt:6.5, A:1, DS:1},
      }
    }
  },
  "95466": {
    id: 95466,
    id_time: 277,
    time: "SAN",
    pos: "LAT",
    nome: "IGOR VINÍCIUS",
    scouts: {
      rdd: {
        1: {pt:5.5, A:1, FS:1},
        2: {pt:"-"},
        3: {pt:3.5, FD:1, DS:3, CA:1, FC:4},
        4: {pt:10, FS:2, DS:6},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:3.9, FS:2, DS:3, CA:1, FC:2},
        8: {pt:8.7, FS:2, DS:2, SG:1, FC:1},
        9: {pt:4.7, SG:1, FC:1},
        10: {pt:"-"},
        11: {pt:13, FS:1, DS:5, SG:1},
        12: {pt:3.9, FS:2, DS:3, CA:1, FC:2},
        13: {pt:"-"},
      }
    }
  },
  "95556": {
    id: 95556,
    id_time: 264,
    time: "COR",
    pos: "MEI",
    nome: "RANIELE",
    scouts: {
      rdd: {
        1: {pt:11.4, FF:1, FS:1, DS:8, CA:1, FC:3},
        2: {pt:"-"},
        3: {pt:0, FF:1, FS:3, I:1, CA:1, FC:4},
        4: {pt:2, FS:1, DS:1},
        5: {pt:"-"},
        6: {pt:4.2, FS:3, DS:2, FC:1},
        7: {pt:-0.3, FC:1},
        8: {pt:3.7, FS:1, DS:3, CA:1, FC:1},
        9: {pt:"-"},
        10: {pt:5.9, FF:1, DS:4, FC:3},
        11: {pt:2.8, FS:1, DS:3, CA:1, FC:4},
        12: {pt:-1.2, FC:4},
        13: {pt:7.4, FD:1, FF:1, FS:3, DS:3, FC:2},
      }
    }
  },
  "95799": {
    id: 95799,
    id_time: 263,
    time: "BOT",
    pos: "ATA",
    nome: "ARTUR",
    scouts: {
      rdd: {
        1: {pt:8, G:1},
        2: {pt:2, FF:1, FS:3, FC:1},
        3: {pt:4.1, FD:2, FS:1, DS:1, FC:1},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:2.7, FD:1, DS:1},
        8: {pt:"-"},
        9: {pt:2.4, FD:1, FF:1, FS:1, I:1},
        10: {pt:7.7, A:1, FS:4, PS:1, FC:1},
        11: {pt:5.5, FD:2, FF:2, DS:1},
        12: {pt:6, DS:4},
        13: {pt:6.9, FF:3, DS:3},
      }
    }
  },
  "96591": {
    id: 96591,
    id_time: 282,
    time: "CAM",
    pos: "LAT",
    nome: "RENAN LODI",
    scouts: {
      rdd: {
        1: {pt:11.2, A:1, FS:5, I:1, DS:4, CA:1, FC:4},
        2: {pt:2.7, FF:1, FS:1, I:3, DS:2, CA:1, FC:1},
        3: {pt:2.4, FS:2, I:1, DS:1},
        4: {pt:0},
        5: {pt:7.7, FF:1, FS:5, SG:1, FC:2},
        6: {pt:7.6, FS:2, DS:5, FC:3},
        7: {pt:8.4, FF:1, FS:4, DS:1, SG:1, FC:3},
        8: {pt:0.6, FF:1, FS:2, FC:4},
        9: {pt:9.5, FT:1, FS:3, SG:1},
        10: {pt:3.4, FD:1, FF:1, FS:1, DS:1, FC:2},
        11: {pt:1.8, FD:1, DS:1, FC:3},
        12: {pt:0.5, FD:1, FF:2, FS:2, CV:1, FC:1},
        13: {pt:"-"},
      }
    }
  },
  "96610": {
    id: 96610,
    id_time: 283,
    time: "CRU",
    pos: "MEI",
    nome: "MATHEUS PEREIRA",
    scouts: {
      rdd: {
        1: {pt:3.7, FD:1, FS:2, DS:1},
        2: {pt:12.7, G:1, FD:1, FF:2, FS:4, DS:1, CA:1, FC:2},
        3: {pt:2.4, FS:3, PS:1, DS:1, CA:1, FC:2},
        4: {pt:11.1, G:1, FF:2, FS:6, FC:5},
        5: {pt:4.6, FD:1, FF:2, FS:3, DS:1, FC:4},
        6: {pt:2.3, FF:3, FS:3, CA:1, FC:2},
        7: {pt:"-"},
        8: {pt:-1.1, FS:3, I:1, CA:1, FC:5},
        9: {pt:8, A:1, FF:1, FS:3, I:1, DS:2, CA:1, FC:4},
        10: {pt:4.9, FD:1, FS:8, FC:1},
        11: {pt:6.7, FD:1, FF:2, FS:6, DS:1, FC:2},
        12: {pt:9.6, A:1, FD:1, FF:2, FS:1, I:1, DS:2, CA:1, FC:2},
        13: {pt:"-"},
      }
    }
  },
  "96793": {
    id: 96793,
    id_time: 287,
    time: "VIT",
    pos: "ZAG",
    nome: "CAMUTANGA",
    scouts: {
      rdd: {
        1: {pt:9.5, FD:1, FF:1, FS:2, DS:1, SG:1},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:0.8, FF:1},
        6: {pt:5, SG:1},
        7: {pt:-1.5, DS:1, GC:1},
        8: {pt:10.4, DS:4, SG:1, FC:2},
        9: {pt:3, DS:2},
        10: {pt:0.5, FS:1},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "97095": {
    id: 97095,
    id_time: 267,
    time: "VAS",
    pos: "ZAG",
    nome: "CARLOS CUESTA",
    scouts: {
      rdd: {
        1: {pt:-1.1, FF:1, FS:1, DS:1, FC:3, GC:1},
        2: {pt:0.9, DS:1, FC:2},
        3: {pt:2.3, FF:1, DS:1},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:-0.1, FS:1, FC:2},
        13: {pt:"-"},
      }
    }
  },
  "97321": {
    id: 97321,
    id_time: 2305,
    time: "MIR",
    pos: "ATA",
    nome: "ALESSON",
    scouts: {
      rdd: {
        1: {pt:9.7, A:1, FD:1, FF:1, DS:2, FC:1},
        2: {pt:4.5, FS:3, DS:2},
        3: {pt:4.4, FD:1, FS:1, DS:2, FC:1},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:-0.3, FC:1},
        7: {pt:2.8, FT:1, I:2},
        8: {pt:1.8, FF:1, FS:2},
        9: {pt:9.6, FD:1, FS:3, DS:5, FC:2},
        10: {pt:2.9, FS:3, I:1, DS:1},
        11: {pt:0.9, FD:1, FC:1},
        12: {pt:12.7, A:2, FD:1, FF:2, I:1},
        13: {pt:3.3, FD:1, FS:2, I:1, DS:1, FC:1},
      }
    }
  },
  "97341": {
    id: 97341,
    id_time: 265,
    time: "BAH",
    pos: "TEC",
    nome: "ROGÉRIO CENI",
    scouts: {
      rdd: {
        1: {pt:5.19, V:1},
        2: {pt:4.72},
        3: {pt:8.98, V:1},
        4: {pt:0},
        5: {pt:3.85},
        6: {pt:6, V:1},
        7: {pt:8.07, V:1},
        8: {pt:3.73},
        9: {pt:9.96, V:1},
        10: {pt:3.82},
        11: {pt:5.87, V:1},
        12: {pt:3.92},
        13: {pt:4.57},
      }
    }
  },
  "97432": {
    id: 97432,
    id_time: 315,
    time: "CHA",
    pos: "ZAG",
    nome: "VICTOR CAETANO",
    scouts: {
      rdd: {
        1: {pt:3, DS:2},
        2: {pt:5, FS:1, DS:3},
        3: {pt:2.4, DS:2, FC:2},
        4: {pt:"-"},
        5: {pt:-0.3, FC:1},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:-0.1, DS:1, CA:1, FC:2},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:2.4, DS:2, FC:2},
      }
    }
  },
  "97460": {
    id: 97460,
    id_time: 2305,
    time: "MIR",
    pos: "ZAG",
    nome: "JOÃO VICTOR",
    scouts: {
      rdd: {
        1: {pt:1.5, DS:1},
        2: {pt:4.4, A:1, FC:2},
        3: {pt:2, FS:1, DS:1},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:0},
        7: {pt:0},
        8: {pt:5.1, FD:2, DS:2, FC:1},
        9: {pt:1.5, DS:1},
        10: {pt:0.5, DS:1, CA:1},
        11: {pt:1.7, FF:1, DS:1, FC:2},
        12: {pt:4.5, DS:3},
        13: {pt:2.7, DS:2, FC:1},
      }
    }
  },
  "97468": {
    id: 97468,
    id_time: 263,
    time: "BOT",
    pos: "LAT",
    nome: "MARÇAL",
    scouts: {
      rdd: {
        1: {pt:8, DS:2, SG:1},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:-1, CA:1},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "97642": {
    id: 97642,
    id_time: 285,
    time: "INT",
    pos: "ZAG",
    nome: "FÉLIX TORRES",
    scouts: {
      rdd: {
        1: {pt:-0.1, FS:1, FC:2},
        2: {pt:0},
        3: {pt:0},
        4: {pt:6.5, FF:1, DS:4, FC:1},
        5: {pt:2.4, DS:2, FC:2},
        6: {pt:"-"},
        7: {pt:1, FS:1, DS:1, CA:1},
        8: {pt:6.7, FF:1, DS:1, SG:1, FC:2},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:5, SG:1},
        12: {pt:1.7, FF:1, DS:1, FC:2},
        13: {pt:2.9, FS:3, DS:2, CA:1, FC:2},
      }
    }
  },
  "97653": {
    id: 97653,
    id_time: 275,
    time: "PAL",
    pos: "ZAG",
    nome: "MURILO",
    scouts: {
      rdd: {
        1: {pt:-0.9, FC:3},
        2: {pt:16, G:1, A:1, DS:2},
        3: {pt:-0.3, FC:1},
        4: {pt:3.9, FD:1, DS:2, FC:1},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:5.4, DS:4, FC:2},
        8: {pt:5.2, FF:1, SG:1, FC:2},
        9: {pt:-0.6, FC:2},
        10: {pt:1.7, FS:1, DS:1, FC:1},
        11: {pt:5.9, DS:1, SG:1, FC:2},
        12: {pt:1.4, SG:1, CV:1, FC:2},
        13: {pt:"-"},
      }
    }
  },
  "97735": {
    id: 97735,
    id_time: 364,
    time: "REM",
    pos: "MEI",
    nome: "GIOVANNI PAVANI",
    scouts: {
      rdd: {
        1: {pt:1.5, DS:1},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "97795": {
    id: 97795,
    id_time: 364,
    time: "REM",
    pos: "LAT",
    nome: "MARCELINHO",
    scouts: {
      rdd: {
        1: {pt:0},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:-0.3, FC:1},
        5: {pt:"-"},
        6: {pt:1.5, DS:1},
        7: {pt:2.3, FF:1, FS:3},
        8: {pt:4.4, FD:1, FS:1, DS:2, FC:1},
        9: {pt:7.7, FD:1, FS:1, DS:4},
        10: {pt:10.8, FF:1, FS:1, DS:3, SG:1},
        11: {pt:5.8, FF:1, FS:1, DS:3},
        12: {pt:11.7, G:1, FD:1, FF:1, FS:1, DS:1, FC:1},
        13: {pt:1.5, FS:3},
      }
    }
  },
  "97810": {
    id: 97810,
    id_time: 287,
    time: "VIT",
    pos: "ATA",
    nome: "ERICK",
    scouts: {
      rdd: {
        1: {pt:12.5, A:2, FF:2, FS:2, I:1},
        2: {pt:0.5, FS:1},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:0},
        6: {pt:11.9, G:1, FD:2, FF:1, FS:1, DS:1, CA:1, FC:1},
        7: {pt:0.2, FS:1, FC:1},
        8: {pt:2.9, FD:2, FS:1},
        9: {pt:2.7, FS:6, FC:1},
        10: {pt:3.7, FD:1, FS:2, DS:1},
        11: {pt:5.6, FT:1, FF:2, FS:2},
        12: {pt:0.5, FS:1},
        13: {pt:2.5, FS:2, DS:1},
      }
    }
  },
  "97867": {
    id: 97867,
    id_time: 262,
    time: "FLA",
    pos: "ZAG",
    nome: "LÉO ORTIZ",
    scouts: {
      rdd: {
        1: {pt:-0.3, FC:1},
        2: {pt:2.7, DS:2, FC:1},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:7.7, FT:1, SG:1, FC:1},
        6: {pt:8.2, FS:1, DS:2, SG:1, FC:1},
        7: {pt:13, G:1, SG:1},
        8: {pt:0},
        9: {pt:2, FS:1, DS:1},
        10: {pt:1.4, I:1, DS:1},
        11: {pt:1.2, DS:1, FC:1},
        12: {pt:7.4, FT:1, SG:1, FC:2},
        13: {pt:6.7, FS:1, DS:1, SG:1, FC:1},
      }
    }
  },
  "97878": {
    id: 97878,
    id_time: 294,
    time: "CFC",
    pos: "ZAG",
    nome: "JACY",
    scouts: {
      rdd: {
        1: {pt:2, FS:1, DS:1},
        2: {pt:-1.3, CA:1, FC:1},
        3: {pt:1.5, DS:1},
        4: {pt:2.5, FS:2, DS:1},
        5: {pt:13, G:1, SG:1},
        6: {pt:"-"},
        7: {pt:12.2, DS:5, SG:1, FC:1},
        8: {pt:0.8, FF:1},
        9: {pt:3.5, FF:1, DS:2, FC:1},
        10: {pt:5.2, FS:2, DS:3, FC:1},
        11: {pt:1, FS:1, DS:1, CA:1},
        12: {pt:7.9, FS:1, DS:2, SG:1, FC:2},
        13: {pt:2.7, FF:1, FS:2, DS:3, CV:1, FC:2},
      }
    }
  },
  "97906": {
    id: 97906,
    id_time: 287,
    time: "VIT",
    pos: "ZAG",
    nome: "RICCIELI",
    scouts: {
      rdd: {
        1: {pt:5, SG:1},
        2: {pt:2, FF:1, DS:1, FC:1},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "97969": {
    id: 97969,
    id_time: 315,
    time: "CHA",
    pos: "LAT",
    nome: "MARCOS VINÍCIUS",
    scouts: {
      rdd: {
        1: {pt:-1.3, CA:1, FC:1},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:5.2, FT:1, FF:2, DS:1, FC:3},
        10: {pt:4.5, A:1, FS:1, CA:1},
        11: {pt:0.2, FS:1, FC:1},
        12: {pt:0},
        13: {pt:"-"},
      }
    }
  },
  "98022": {
    id: 98022,
    id_time: 265,
    time: "BAH",
    pos: "MEI",
    nome: "ERICK",
    scouts: {
      rdd: {
        1: {pt:0},
        2: {pt:0.2, FS:1, FC:1},
        3: {pt:0.5, FS:1},
        4: {pt:"-"},
        5: {pt:9.2, FT:2, FF:1, FS:3, DS:1, FC:2},
        6: {pt:0.7, FF:1, FS:1, DS:1, FC:7},
        7: {pt:11.1, G:1, FD:1, FS:1, DS:2, CA:1, FC:2},
        8: {pt:3, DS:2},
        9: {pt:3.5, FS:1, DS:2},
        10: {pt:1.2, DS:1, FC:1},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "98224": {
    id: 98224,
    id_time: 364,
    time: "REM",
    pos: "MEI",
    nome: "JÁDERSON",
    scouts: {
      rdd: {
        1: {pt:1.7, FS:4, FC:1},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:0},
        7: {pt:0},
        8: {pt:1.5, DS:1},
        9: {pt:0},
        10: {pt:0},
        11: {pt:4, FF:1, FS:1, DS:2, FC:1},
        12: {pt:2, FS:1, DS:1},
        13: {pt:"-"},
      }
    }
  },
  "98225": {
    id: 98225,
    id_time: 264,
    time: "COR",
    pos: "ATA",
    nome: "PEDRO RAUL",
    scouts: {
      rdd: {
        1: {pt:0},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:0.1, FF:1, I:1, FC:2},
        5: {pt:0.7, FS:2, FC:1},
        6: {pt:0},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:-0.3, FC:1},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "98384": {
    id: 98384,
    id_time: 2305,
    time: "MIR",
    pos: "ATA",
    nome: "NEGUEBA",
    scouts: {
      rdd: {
        1: {pt:4.8, FF:1, FS:2, DS:2},
        2: {pt:5.5, FD:1, FF:1, FS:3, DS:2, CA:1},
        3: {pt:13.5, G:1, FF:1, FS:1, DS:3, FC:1},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:4.8, FF:1, FS:1, DS:3, CA:1},
        7: {pt:1.7, FD:1, FF:1, FC:1},
        8: {pt:5, FS:4, DS:2},
        9: {pt:2.2, FS:1, DS:2, CA:1, FC:1},
        10: {pt:"-"},
        11: {pt:4.4, FD:1, FF:1, FS:5, DS:1, CA:1, FC:2},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "98517": {
    id: 98517,
    id_time: 265,
    time: "BAH",
    pos: "MEI",
    nome: "JEAN LUCAS",
    scouts: {
      rdd: {
        1: {pt:6.1, G:1, CA:1, FC:3},
        2: {pt:2.4, FD:1, DS:1, FC:1},
        3: {pt:2.8, FF:3, FS:1, I:1},
        4: {pt:"-"},
        5: {pt:11.9, G:1, FD:1, FF:1, FS:2, DS:1, FC:2},
        6: {pt:4.5, FS:3, DS:2},
        7: {pt:8.2, A:1, FS:1, DS:2, FC:1},
        8: {pt:5.7, FF:1, FS:2, DS:3, FC:2},
        9: {pt:6.2, A:1, DS:1, FC:1},
        10: {pt:2.7, DS:2, FC:1},
        11: {pt:4, FD:1, FS:1, DS:3, CA:1, FC:4},
        12: {pt:12.2, FT:1, FS:1, DS:6, FC:1},
        13: {pt:"-"},
      }
    }
  },
  "98672": {
    id: 98672,
    id_time: 266,
    time: "FLU",
    pos: "MEI",
    nome: "SAVARINO",
    scouts: {
      rdd: {
        1: {pt:0.5, FS:1},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:9.3, FT:1, FD:2, FF:3, FS:3},
        5: {pt:2.2, FF:1, I:1, DS:1},
        6: {pt:10.6, A:2, FT:1, I:2, CA:1, FC:4},
        7: {pt:0.4, FS:1, I:1},
        8: {pt:7.2, FD:2, FF:2, FS:1, DS:2, FC:1},
        9: {pt:4, FD:1, FF:1, FS:1, DS:1},
        10: {pt:1.5, DS:1},
        11: {pt:9.1, G:1, FD:1, I:1},
        12: {pt:9, G:1, FS:2},
        13: {pt:"-"},
      }
    }
  },
  "98873": {
    id: 98873,
    id_time: 262,
    time: "FLA",
    pos: "ATA",
    nome: "SAMUEL LINO",
    scouts: {
      rdd: {
        1: {pt:6.5, FS:1, DS:4},
        2: {pt:-0.3, FS:2, CA:1, FC:1},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:4.7, A:1, FC:1},
        6: {pt:15.3, G:1, FF:2, FS:3, DS:3, FC:1},
        7: {pt:10.4, G:1, FF:1, FS:1, I:1, DS:1, FC:1},
        8: {pt:3.9, FF:1, FS:2, DS:2, FC:3},
        9: {pt:1, FS:2},
        10: {pt:2.5, FS:2, DS:1},
        11: {pt:14, A:2, FS:2, DS:2},
        12: {pt:1.7, FS:1, DS:1, FC:1},
        13: {pt:"-"},
      }
    }
  },
  "98909": {
    id: 98909,
    id_time: 282,
    time: "CAM",
    pos: "ATA",
    nome: "CUELLO",
    scouts: {
      rdd: {
        1: {pt:1.8, FF:1, I:2, DS:1, FC:1},
        2: {pt:5, FT:1, FD:1, I:1, DS:1, FC:2},
        3: {pt:5.7, FT:1, FF:2, FS:3, I:1, FC:1},
        4: {pt:9.2, FS:1, DS:6, FC:1},
        5: {pt:11.8, G:1, I:1, DS:3, FC:2},
        6: {pt:1.1, FS:3, I:1, FC:1},
        7: {pt:4.1, FF:2, I:2, DS:2, FC:1},
        8: {pt:2, FS:1, DS:1},
        9: {pt:19.4, G:1, A:1, FS:4, I:1, DS:3},
        10: {pt:4.7, FD:1, FF:2, FS:1, I:1, DS:1},
        11: {pt:3.6, FF:2, FS:1, DS:1},
        12: {pt:6.1, FT:1, FF:2, DS:1},
        13: {pt:"-"},
      }
    }
  },
  "99213": {
    id: 99213,
    id_time: 267,
    time: "VAS",
    pos: "LAT",
    nome: "PUMA RODRÍGUEZ",
    scouts: {
      rdd: {
        1: {pt:6.4, A:1, I:1, DS:1},
        2: {pt:8.9, G:1, FD:1, FC:1},
        3: {pt:2.3, FD:1, FF:2, FS:1, CA:1},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:5.8, A:1, FF:1},
        7: {pt:0.5, FF:1, FC:1},
        8: {pt:-1, CA:1},
        9: {pt:"-"},
        10: {pt:10.2, A:1, FD:2, FF:1, DS:2, CA:1},
        11: {pt:"-"},
        12: {pt:11, G:1, DS:2},
        13: {pt:"-"},
      }
    }
  },
  "99274": {
    id: 99274,
    id_time: 263,
    time: "BOT",
    pos: "ZAG",
    nome: "ALEXANDER BARBOZA",
    scouts: {
      rdd: {
        1: {pt:6.2, DS:1, SG:1, FC:1},
        2: {pt:10.8, A:2, DS:2, CA:1, FC:4},
        3: {pt:4.5, DS:3},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:-3.1, DS:1, CV:1, CA:1, FC:2},
        7: {pt:"-"},
        8: {pt:10.4, G:1, DS:2, FC:2},
        9: {pt:"-"},
        10: {pt:7.3, FD:1, FF:2, DS:3},
        11: {pt:1.9, FD:1, FF:1, DS:1, CA:1, FC:2},
        12: {pt:4.5, DS:3},
        13: {pt:"-"},
      }
    }
  },
  "99366": {
    id: 99366,
    id_time: 266,
    time: "FLU",
    pos: "TEC",
    nome: "LUIS ZUBELDÍA",
    scouts: {
      rdd: {
        1: {pt:5.55, V:1},
        2: {pt:4.3},
        3: {pt:8.15, V:1},
        4: {pt:3.65},
        5: {pt:9.15, V:1},
        6: {pt:7.25, V:1},
        7: {pt:5.07},
        8: {pt:7.35, V:1},
        9: {pt:7.11, V:1},
        10: {pt:3.05},
        11: {pt:3.48},
        12: {pt:7.87, V:1},
        13: {pt:"-"},
      }
    }
  },
  "99440": {
    id: 99440,
    id_time: 287,
    time: "VIT",
    pos: "MEI",
    nome: "BARALHAS",
    scouts: {
      rdd: {
        1: {pt:10.9, G:1, FS:3, DS:2, CA:1, FC:2},
        2: {pt:2.7, FF:1, FS:2, DS:1, FC:2},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:5.6, FS:1, DS:4, FC:3},
        6: {pt:12.5, A:1, FF:2, FS:1, DS:4, FC:2},
        7: {pt:0.1, FF:1, FS:1, FC:4},
        8: {pt:8.2, G:1, DS:1, CA:1, FC:1},
        9: {pt:3.9, FS:2, DS:3, CA:1, FC:2},
        10: {pt:"-"},
        11: {pt:9.5, A:1, FF:1, FS:1, DS:3, CA:1, FC:1},
        12: {pt:2.7, FF:1, FS:2, DS:1, FC:2},
        13: {pt:"-"},
      }
    }
  },
  "99552": {
    id: 99552,
    id_time: 262,
    time: "FLA",
    pos: "GOL",
    nome: "ROSSI",
    scouts: {
      rdd: {
        1: {pt:0.6, DE:2, GS:2},
        2: {pt:2.9, DE:3, GS:1},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:10.7, FS:1, SG:1, DE:4},
        6: {pt:6.8, FS:1, SG:1, DE:1},
        7: {pt:6.3, SG:1, DE:1},
        8: {pt:0.3, DE:1, GS:1},
        9: {pt:0.9, DE:3, GS:3},
        10: {pt:0.3, DE:1, GS:1},
        11: {pt:4.2, DE:4, GS:1},
        12: {pt:12.8, SG:1, DE:6},
        13: {pt:"-"},
      }
    }
  },
  "99889": {
    id: 99889,
    id_time: 276,
    time: "SAO",
    pos: "ZAG",
    nome: "ALAN FRANCO",
    scouts: {
      rdd: {
        1: {pt:3.2, FS:1, DS:2, FC:1},
        2: {pt:-1.6, CA:1, FC:2},
        3: {pt:7, FF:1, DS:1, SG:1, FC:1},
        4: {pt:5.2, DS:1, SG:1, CA:1, FC:1},
        5: {pt:6.2, DS:1, SG:1, FC:1},
        6: {pt:0},
        7: {pt:-0.3, FC:1},
        8: {pt:3, DS:2},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:1.2, DS:1, FC:1},
        12: {pt:-1.6, CA:1, FC:2},
        13: {pt:"-"},
      }
    }
  },
  "100848": {
    id: 100848,
    id_time: 287,
    time: "VIT",
    pos: "LAT",
    nome: "LUAN CÂNDIDO",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:0.9, FD:1, FC:1},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:0},
        11: {pt:7, FS:1, DS:1, SG:1},
        12: {pt:9.7, FF:3, I:1, DS:2, SG:1, FC:2},
        13: {pt:1.5, FD:1, FS:2, I:1, FC:2},
      }
    }
  },
  "101594": {
    id: 101594,
    id_time: 267,
    time: "VAS",
    pos: "MEI",
    nome: "HUGO MOURA",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:0},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:2.5, FS:2, DS:1},
        6: {pt:2.3, FF:1, DS:1},
        7: {pt:0},
        8: {pt:2.4, DS:2, FC:2},
        9: {pt:0},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:-0.6, FC:2},
        13: {pt:"-"},
      }
    }
  },
  "101715": {
    id: 101715,
    id_time: 285,
    time: "INT",
    pos: "ATA",
    nome: "ALERRANDRO",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:2, FS:4},
        3: {pt:-0.3, FC:1},
        4: {pt:0},
        5: {pt:1.8, FF:2, FS:1, I:3},
        6: {pt:2.6, FF:2, FS:2},
        7: {pt:8, FD:1, FF:1, DS:4},
        8: {pt:0.2, FF:1, FC:2},
        9: {pt:9.7, G:1, FD:1, FS:1},
        10: {pt:0.2, FS:1, FC:1},
        11: {pt:2, FD:1, FF:1},
        12: {pt:0},
        13: {pt:5.5, A:1, FD:1, I:1, FC:2},
      }
    }
  },
  "102909": {
    id: 102909,
    id_time: 276,
    time: "SAO",
    pos: "MEI",
    nome: "LUAN VINÍCIUS",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:0},
        3: {pt:"-"},
        4: {pt:1.5, DS:1},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:0},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:2.3, FF:1, DS:1},
      }
    }
  },
  "102975": {
    id: 102975,
    id_time: 277,
    time: "SAN",
    pos: "LAT",
    nome: "ESCOBAR",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:5.2, FS:1, DS:4, CA:1, FC:1},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:4.9, FF:1, FS:2, I:1, DS:3, CA:1, FC:1},
        8: {pt:7.7, DS:2, SG:1, FC:1},
        9: {pt:18.4, A:1, DS:6, SG:1, FC:2},
        10: {pt:6.3, FF:2, FS:1, DS:3, FC:1},
        11: {pt:6, FF:1, DS:1, SG:1, CA:1, FC:1},
        12: {pt:"-"},
        13: {pt:4, FS:1, DS:3, CA:1},
      }
    }
  },
  "103295": {
    id: 103295,
    id_time: 280,
    time: "RBB",
    pos: "MEI",
    nome: "ERIC RAMIRES",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:0},
        3: {pt:0.2, FS:1, FC:1},
        4: {pt:-0.3, FC:1},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:0.8, FF:1},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:1.5, DS:1},
        11: {pt:0.5, FS:1},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "105300": {
    id: 105300,
    id_time: 276,
    time: "SAO",
    pos: "ZAG",
    nome: "FERRARESI",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:-0.3, FC:1},
        3: {pt:6.5, DS:1, SG:1},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:2.7, DS:2, FC:1},
        7: {pt:3.2, FS:1, DS:2, FC:1},
        8: {pt:3, DS:2},
        9: {pt:0.8, FF:1},
        10: {pt:1, FF:1, DS:1, CA:1, FC:1},
        11: {pt:"-"},
        12: {pt:-0.3, FC:1},
        13: {pt:2.2, FS:2, DS:1, FC:1},
      }
    }
  },
  "106302": {
    id: 106302,
    id_time: 282,
    time: "CAM",
    pos: "LAT",
    nome: "PRECIADO",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:2.2, FS:2, DS:1, FC:1},
        3: {pt:-0.3, FC:1},
        4: {pt:"-"},
        5: {pt:7.5, FF:1, FS:1, DS:1, SG:1, FC:1},
        6: {pt:3.2, FF:1, FS:2, DS:2, CA:1, FC:2},
        7: {pt:10.6, FS:4, DS:3, SG:1, FC:3},
        8: {pt:4.3, FF:1, FS:1, DS:2},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:0.5, FS:1},
        13: {pt:"-"},
      }
    }
  },
  "106323": {
    id: 106323,
    id_time: 265,
    time: "BAH",
    pos: "MEI",
    nome: "CAIO ALEXANDRE",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:0.5, FS:1},
        3: {pt:-1.3, CA:1, FC:1},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:3, DS:2},
        7: {pt:4.4, FS:4, DS:2, FC:2},
        8: {pt:1.5, FS:3},
        9: {pt:2.1, DS:2, FC:3},
        10: {pt:-0.1, FS:1, FC:2},
        11: {pt:-0.3, FC:1},
        12: {pt:-0.3, FC:1},
        13: {pt:3, FF:1, FS:2, DS:1, FC:1},
      }
    }
  },
  "108131": {
    id: 108131,
    id_time: 315,
    time: "CHA",
    pos: "ATA",
    nome: "GARCEZ",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:1.5, FF:2, FS:1, FC:2},
        3: {pt:3.3, FF:1, FS:2, DS:1},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:0.7, FS:2, FC:1},
        12: {pt:-0.4, I:1, FC:1},
        13: {pt:0.9, FD:1, FC:1},
      }
    }
  },
  "108133": {
    id: 108133,
    id_time: 280,
    time: "RBB",
    pos: "ATA",
    nome: "ISIDRO PITTA",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:-0.6, FC:2},
        3: {pt:-1, FD:1, FF:1, FS:1, I:1, PP:1, DS:1, FC:3},
        4: {pt:-0.4, I:1, FC:1},
        5: {pt:-0.3, FC:1},
        6: {pt:1.6, FF:2},
        7: {pt:0.7, FF:1, I:1},
        8: {pt:2, FD:1, FF:1},
        9: {pt:10.5, G:1, FD:1, FF:2, FS:1, I:2, FC:2},
        10: {pt:8, G:1, FF:1, FS:1, CA:1, FC:1},
        11: {pt:5.9, A:1, FF:1, FS:1, I:1, FC:1},
        12: {pt:18, G:2, FF:2, FS:1, I:1},
        13: {pt:2, FD:1, FF:1},
      }
    }
  },
  "108469": {
    id: 108469,
    id_time: 277,
    time: "SAN",
    pos: "ZAG",
    nome: "ADONIS FRÍAS",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:-0.1, FD:1, CA:1, FC:1},
        3: {pt:"-"},
        4: {pt:0},
        5: {pt:"-"},
        6: {pt:4.2, DS:3, FC:1},
        7: {pt:2, FS:1, DS:1},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "109966": {
    id: 109966,
    id_time: 284,
    time: "GRE",
    pos: "MEI",
    nome: "MONSALVE",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:0.4, FS:2, FC:2},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:0.5, FF:1, FC:1},
        6: {pt:-0.8, FS:1, CA:1, FC:1},
        7: {pt:0.2, FS:1, FC:1},
        8: {pt:"-"},
        9: {pt:0.5, FS:1},
        10: {pt:0.7, FS:2, FC:1},
        11: {pt:"-"},
        12: {pt:3, FF:1, FS:2, DS:1, FC:1},
        13: {pt:"-"},
      }
    }
  },
  "110598": {
    id: 110598,
    id_time: 267,
    time: "VAS",
    pos: "ATA",
    nome: "MARINO HINESTROZA",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:2, FS:1, DS:1},
        3: {pt:0.5, FF:1, FC:1},
        4: {pt:1.9, FS:2, DS:1, FC:2},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:0},
        9: {pt:7.3, FT:1, FF:1, FS:4, DS:1},
        10: {pt:2.5, FF:1, FS:1, DS:1, FC:1},
        11: {pt:1.5, DS:1},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "111760": {
    id: 111760,
    id_time: 280,
    time: "RBB",
    pos: "MEI",
    nome: "FABINHO",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:-0.3, FC:1},
        3: {pt:3.9, FS:3, DS:2, FC:2},
        4: {pt:-3.1, FS:1, CV:1, FC:2},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:-0.6, FC:2},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:-0.3, FC:1},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "111945": {
    id: 111945,
    id_time: 364,
    time: "REM",
    pos: "MEI",
    nome: "DIEGO HERNÁNDEZ",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:0.8, FD:1, DS:1, CA:1, FC:3},
        3: {pt:2.7, FD:1, DS:1},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:0.9, DS:1, FC:2},
        10: {pt:"-"},
        11: {pt:5, A:1},
        12: {pt:"-"},
        13: {pt:0.2, FS:1, FC:1},
      }
    }
  },
  "112939": {
    id: 112939,
    id_time: 364,
    time: "REM",
    pos: "MEI",
    nome: "CATAROZZI",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:0.9, DS:1, FC:2},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "113125": {
    id: 113125,
    id_time: 364,
    time: "REM",
    pos: "MEI",
    nome: "PICCO",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:3.6, FD:1, DS:2, FC:2},
        3: {pt:6, DS:4},
        4: {pt:11.2, G:1, DS:3, CA:1, FC:1},
        5: {pt:0.5, FF:1, FC:1},
        6: {pt:1.9, FF:2, DS:1, FC:4},
        7: {pt:2.7, DS:2, FC:1},
        8: {pt:0},
        9: {pt:10.6, FF:1, FS:1, DS:7, FC:4},
        10: {pt:3.3, DS:3, FC:4},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:2.7, DS:2, FC:1},
      }
    }
  },
  "113157": {
    id: 113157,
    id_time: 287,
    time: "VIT",
    pos: "LAT",
    nome: "NATHAN MENDES",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:1.6, FS:4, DS:1, CA:1, FC:3},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:2.2, FS:2, DS:1, FC:1},
        6: {pt:8.9, DS:3, SG:1, FC:2},
        7: {pt:1.7, DS:2, CA:1, FC:1},
        8: {pt:9.7, FS:1, DS:3, SG:1, FC:1},
        9: {pt:1.2, DS:1, FC:1},
        10: {pt:0.5, FS:1},
        11: {pt:12.7, A:1, DS:2, SG:1, FC:1},
        12: {pt:6.7, DS:2, SG:1, CA:1, FC:1},
        13: {pt:"-"},
      }
    }
  },
  "115986": {
    id: 115986,
    id_time: 2305,
    time: "MIR",
    pos: "MEI",
    nome: "DENILSON",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:1.4, FS:1, DS:1, FC:2},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:1, FS:2},
        9: {pt:0},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:2.7, DS:2, FC:1},
        13: {pt:0.2, FS:1, FC:1},
      }
    }
  },
  "116066": {
    id: 116066,
    id_time: 315,
    time: "CHA",
    pos: "ATA",
    nome: "RUBENS",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:0},
        3: {pt:8, G:1},
        4: {pt:"-"},
        5: {pt:0.5, FS:1},
        6: {pt:"-"},
        7: {pt:1.6, FD:1, FS:1, DS:1, CA:1, FC:2},
        8: {pt:1.3, FF:1, FS:1},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "130048": {
    id: 130048,
    id_time: 284,
    time: "GRE",
    pos: "ZAG",
    nome: "NORIEGA",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:4, FF:1, FS:1, DS:2, FC:1},
        3: {pt:5.7, FF:1, FS:2, DS:3, FC:2},
        4: {pt:15.7, G:1, A:1, DS:2, FC:1},
        5: {pt:3.2, FS:1, DS:2, FC:1},
        6: {pt:-1.5, FS:2, CA:1, FC:5},
        7: {pt:6.7, FS:1, DS:1, SG:1, FC:1},
        8: {pt:"-"},
        9: {pt:1.2, DS:1, FC:1},
        10: {pt:"-"},
        11: {pt:6.7, FD:1, FS:1, SG:1},
        12: {pt:-0.1, DS:1, CA:1, FC:2},
        13: {pt:8.5, FS:1, DS:2, SG:1},
      }
    }
  },
  "134678": {
    id: 134678,
    id_time: 287,
    time: "VIT",
    pos: "ATA",
    nome: "LAWAN",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:-0.3, FC:1},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "136156": {
    id: 136156,
    id_time: 275,
    time: "PAL",
    pos: "MEI",
    nome: "LARSON",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:0},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:-0.3, FC:1},
        7: {pt:1.7, FD:1, FF:1, FC:1},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "136955": {
    id: 136955,
    id_time: 265,
    time: "BAH",
    pos: "ATA",
    nome: "SANABRIA",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:6.8, A:1, FD:1, FF:1, FS:1, I:1, FC:2},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:3, FD:1, FF:1, FS:2},
        6: {pt:-0.3, FC:1},
        7: {pt:-0.3, FC:1},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:8.5, G:1, FS:1},
        12: {pt:0.8, FF:1},
        13: {pt:"-"},
      }
    }
  },
  "139345": {
    id: 139345,
    id_time: 283,
    time: "CRU",
    pos: "LAT",
    nome: "KAUÃ PRATES",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:0},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "140438": {
    id: 140438,
    id_time: 315,
    time: "CHA",
    pos: "MEI",
    nome: "DAVID",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:0},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:-0.3, FC:1},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:2.6, FF:2, FS:1, DS:1, PC:1},
        11: {pt:"-"},
        12: {pt:2, FF:1, DS:1, FC:1},
        13: {pt:"-"},
      }
    }
  },
  "146410": {
    id: 146410,
    id_time: 263,
    time: "BOT",
    pos: "MEI",
    nome: "MARQUINHOS",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:0},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "146623": {
    id: 146623,
    id_time: 275,
    time: "PAL",
    pos: "MEI",
    nome: "LUIS PACHECO",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:0},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "147088": {
    id: 147088,
    id_time: 282,
    time: "CAM",
    pos: "MEI",
    nome: "CISSÉ",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:0.5, FS:1},
        3: {pt:"-"},
        4: {pt:2.8, FF:1, FS:1, DS:1},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:0},
        11: {pt:"-"},
        12: {pt:2.3, FF:1, DS:1},
        13: {pt:"-"},
      }
    }
  },
  "72951": {
    id: 72951,
    id_time: 285,
    time: "INT",
    pos: "ZAG",
    nome: "MERCADO",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:2, DS:2, CA:1},
        3: {pt:2.3, FD:1, FS:1, DS:1, FC:3},
        4: {pt:1, FF:1, DS:1, CA:1, FC:1},
        5: {pt:"-"},
        6: {pt:3.5, FS:1, DS:2},
        7: {pt:"-"},
        8: {pt:13, G:1, SG:1},
        9: {pt:5, FS:1, DS:3},
        10: {pt:9.4, FS:1, DS:3, SG:1, FC:2},
        11: {pt:5.5, FF:1, FS:2, SG:1, CA:1, FC:1},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "81150": {
    id: 81150,
    id_time: 277,
    time: "SAN",
    pos: "LAT",
    nome: "MAYKE",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:1.2, FS:3, FC:1},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:4.1, FD:1, DS:3, CA:1, FC:2},
      }
    }
  },
  "83257": {
    id: 83257,
    id_time: 277,
    time: "SAN",
    pos: "ATA",
    nome: "GABRIEL",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:2.1, FF:1, FS:3, I:2},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:9.4, G:1, I:1, DS:1},
        7: {pt:1.4, FF:2, I:2},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:0.5, FF:1, FC:1},
        11: {pt:5.9, A:1, FF:1, I:1, DS:1, CA:1, FC:1},
        12: {pt:13.3, G:1, A:1, FF:1, FS:1, CA:1},
        13: {pt:"-"},
      }
    }
  },
  "83786": {
    id: 83786,
    id_time: 287,
    time: "VIT",
    pos: "ZAG",
    nome: "NERIS",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:1.5, DS:1},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "84428": {
    id: 84428,
    id_time: 294,
    time: "CFC",
    pos: "MEI",
    nome: "FERNANDO SOBRAL",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:3, DS:2},
        3: {pt:0},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "86485": {
    id: 86485,
    id_time: 294,
    time: "CFC",
    pos: "ATA",
    nome: "KENO",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:-0.6, FC:2},
        3: {pt:0},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:0.5, FS:1},
        9: {pt:3, FD:1, FF:1, FS:2},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "86859": {
    id: 86859,
    id_time: 364,
    time: "REM",
    pos: "MEI",
    nome: "JOSÉ WELISON",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:0.8, FF:1},
        3: {pt:0.5, FF:1, FC:1},
        4: {pt:-1.9, CA:1, FC:3},
        5: {pt:"-"},
        6: {pt:0},
        7: {pt:-1.6, CA:1, FC:2},
        8: {pt:2.3, FF:1, DS:1},
        9: {pt:7.2, FF:1, FS:4, DS:4, CA:1, FC:2},
        10: {pt:"-"},
        11: {pt:3.5, FF:1, DS:2, FC:1},
        12: {pt:-0.3, FC:1},
        13: {pt:4, FF:1, FS:1, DS:2, FC:1},
      }
    }
  },
  "87228": {
    id: 87228,
    id_time: 266,
    time: "FLU",
    pos: "LAT",
    nome: "GUILHERME ARANA",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:0.8, FF:1},
        3: {pt:6.5, DS:1, SG:1},
        4: {pt:1.2, DS:1, FC:1},
        5: {pt:"-"},
        6: {pt:9.1, G:1, FD:1, DS:1, CA:1, FC:2},
        7: {pt:"-"},
        8: {pt:6.4, DS:2, SG:1, CA:1, FC:2},
        9: {pt:"-"},
        10: {pt:4.2, FD:1, DS:2},
        11: {pt:0.8, FF:1},
        12: {pt:0.8, I:1, DS:1, FC:2},
        13: {pt:4.6, FD:1, FF:3, FS:2},
      }
    }
  },
  "87552": {
    id: 87552,
    id_time: 364,
    time: "REM",
    pos: "MEI",
    nome: "VITOR BUENO",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:3.5, FS:1, DS:2},
        3: {pt:9.2, G:1, FF:1, FS:2, FC:2},
        4: {pt:1.4, FD:1, FS:1, FC:1},
        5: {pt:1.7, FD:1, FS:1},
        6: {pt:2, FD:1, FF:1},
        7: {pt:2, FF:2, FS:2, FC:2},
        8: {pt:17.8, G:1, A:1, FT:1, FD:2, FC:2},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:0},
        13: {pt:"-"},
      }
    }
  },
  "87887": {
    id: 87887,
    id_time: 284,
    time: "GRE",
    pos: "ZAG",
    nome: "BALBUENA",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:1.5, DS:1},
        3: {pt:4.5, DS:3},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:-0.1, I:1},
        7: {pt:8.5, FS:1, DS:2, SG:1},
        8: {pt:1.5, DS:1},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "89275": {
    id: 89275,
    id_time: 283,
    time: "CRU",
    pos: "LAT",
    nome: "WILLIAM",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:1.9, FS:2, DS:1, FC:2},
        3: {pt:-0.3, FC:1},
        4: {pt:3.9, DS:5, CV:1, FC:2},
        5: {pt:"-"},
        6: {pt:5.7, FD:1, DS:3},
        7: {pt:0.4, FF:1, FS:1, FC:3},
        8: {pt:5.1, I:1, DS:1, SG:1, CA:1, FC:1},
        9: {pt:9.5, DS:3, SG:1},
        10: {pt:2.4, FD:2},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "89637": {
    id: 89637,
    id_time: 285,
    time: "INT",
    pos: "MEI",
    nome: "THIAGO MAIA",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:1.5, DS:1},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:0},
        8: {pt:0.5, FS:1},
        9: {pt:0},
        10: {pt:1.1, I:1, DS:1, FC:1},
        11: {pt:2, FS:1, DS:1},
        12: {pt:1.5, DS:1},
        13: {pt:"-"},
      }
    }
  },
  "90309": {
    id: 90309,
    id_time: 267,
    time: "VAS",
    pos: "ATA",
    nome: "DAVID",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:1.2, FD:1},
        3: {pt:"-"},
        4: {pt:0.2, FS:1, FC:1},
        5: {pt:5, A:1},
        6: {pt:0.4, FS:1, I:1},
        7: {pt:0.7, FF:1, I:1},
        8: {pt:9.5, G:1, DS:1},
        9: {pt:-0.3, FS:1, I:2, FC:2},
        10: {pt:8.2, G:1, FF:1, FC:2},
        11: {pt:-0.2, I:2},
        12: {pt:3.6, FD:2, DS:1, FC:1},
        13: {pt:2.5, FD:1, FF:1, FS:1},
      }
    }
  },
  "90917": {
    id: 90917,
    id_time: 2305,
    time: "MIR",
    pos: "ATA",
    nome: "CARLOS EDUARDO",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:0.8, FS:2, I:2},
        3: {pt:1.8, FS:2, I:1, DS:1, FC:2},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:0.5, FS:1},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:1.5, FF:3, FS:1, I:1, CA:1, FC:1},
        11: {pt:"-"},
        12: {pt:2.4, DS:2, FC:2},
        13: {pt:"-"},
      }
    }
  },
  "91251": {
    id: 91251,
    id_time: 2305,
    time: "MIR",
    pos: "ZAG",
    nome: "RODRIGUES",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:2, FS:1, DS:1},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "91607": {
    id: 91607,
    id_time: 277,
    time: "SAN",
    pos: "ATA",
    nome: "RONY",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:0.2, FS:3, CA:1, FC:1},
        3: {pt:3.6, FD:1, FS:2, I:1, DS:1},
        4: {pt:2.2, FS:2, DS:1, FC:1},
        5: {pt:"-"},
        6: {pt:3.5, FS:3, DS:3, CA:1, FC:5},
        7: {pt:1, FF:1, FS:1, FC:1},
        8: {pt:3.8, FF:1, FS:5, I:1, DS:1, FC:3},
        9: {pt:0.6, FS:1, I:1, DS:1, CA:1, FC:1},
        10: {pt:"-"},
        11: {pt:3.2, FS:1, DS:2, FC:1},
        12: {pt:"-"},
        13: {pt:1.7, FF:2, FS:1, I:1, FC:1},
      }
    }
  },
  "92811": {
    id: 92811,
    id_time: 275,
    time: "PAL",
    pos: "ATA",
    nome: "BRUNO RODRIGUES",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:0},
        3: {pt:"-"},
        4: {pt:0.5, FS:1},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:0.7, FS:2, FC:1},
        9: {pt:0.5, FS:1},
        10: {pt:"-"},
        11: {pt:-0.1, FS:1, FC:2},
        12: {pt:2.5, FS:2, DS:1},
        13: {pt:7.5, A:1, FD:1, FS:1, I:1, DS:1, FC:2},
      }
    }
  },
  "93372": {
    id: 93372,
    id_time: 277,
    time: "SAN",
    pos: "ZAG",
    nome: "JOÃO BASSO",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:2.3, FF:1, DS:1},
        3: {pt:3, DS:2},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "94930": {
    id: 94930,
    id_time: 262,
    time: "FLA",
    pos: "MEI",
    nome: "LUCAS PAQUETÁ",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:5.6, FD:1, FF:1, FS:2, DS:3, CA:1, FC:3},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:6.3, FF:1, FS:5, DS:3, FC:5},
        6: {pt:6.8, FD:1, FF:2, FS:2, DS:2},
        7: {pt:2.2, FS:2, DS:1, FC:1},
        8: {pt:15.7, G:1, FF:1, FS:5, I:1, DS:3},
        9: {pt:-0.2, FS:1, I:1, FC:2},
        10: {pt:8.2, G:1, FS:1, FC:1},
        11: {pt:2.7, FS:3, DS:1, FC:1},
        12: {pt:11.6, G:1, FD:1, FF:1, FS:2, DS:1, FC:3},
        13: {pt:"-"},
      }
    }
  },
  "95620": {
    id: 95620,
    id_time: 315,
    time: "CHA",
    pos: "ZAG",
    nome: "BRUNO LEONARDO",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:0.5, FS:1},
        3: {pt:4.7, FD:1, FS:1, DS:2},
        4: {pt:"-"},
        5: {pt:0},
        6: {pt:1.5, DS:1},
        7: {pt:5, SG:1},
        8: {pt:-1.3, FS:2, CA:1, FC:1, PC:1},
        9: {pt:2.7, DS:2, FC:1},
        10: {pt:-0.9, FC:3},
        11: {pt:1.1, FS:3, DS:1, CA:1, FC:3},
        12: {pt:4.4, FS:1, DS:3, FC:2},
        13: {pt:"-"},
      }
    }
  },
  "96340": {
    id: 96340,
    id_time: 266,
    time: "FLU",
    pos: "MEI",
    nome: "LIMA",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:-1.3, CA:1, FC:1},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "96870": {
    id: 96870,
    id_time: 262,
    time: "FLA",
    pos: "LAT",
    nome: "EMERSON ROYAL",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:2, FS:1, DS:1},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:5.2, FF:1, SG:1, FC:2},
        6: {pt:"-"},
        7: {pt:6.1, I:1, DS:1, SG:1, FC:1},
        8: {pt:"-"},
        9: {pt:2.4, DS:2, FC:2},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "99228": {
    id: 99228,
    id_time: 262,
    time: "FLA",
    pos: "MEI",
    nome: "DE LA CRUZ",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:3.1, FS:4, DS:2, CA:1, FC:3},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:2.3, FF:1, FS:3},
        9: {pt:-0.1, FS:1, FC:2},
        10: {pt:0},
        11: {pt:2.5, FS:2, DS:1},
        12: {pt:1.5, DS:1},
        13: {pt:"-"},
      }
    }
  },
  "99789": {
    id: 99789,
    id_time: 267,
    time: "VAS",
    pos: "ATA",
    nome: "BRENNER",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:8.9, FT:2, FD:2, FF:1, FC:1},
        3: {pt:1.8, FF:1, FS:2},
        4: {pt:0},
        5: {pt:"-"},
        6: {pt:8, G:1, FS:2, CA:1},
        7: {pt:0.5, FS:1},
        8: {pt:"-"},
        9: {pt:1.2, FD:1},
        10: {pt:"-"},
        11: {pt:1.5, DS:1},
        12: {pt:4.8, FF:1, FS:2, DS:2},
        13: {pt:"-"},
      }
    }
  },
  "100695": {
    id: 100695,
    id_time: 280,
    time: "RBB",
    pos: "ATA",
    nome: "FERNANDO",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:-0.3, FC:1},
        4: {pt:0.5, FS:1},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:1.6, FD:1, FS:1, I:1},
        13: {pt:"-"},
      }
    }
  },
  "101290": {
    id: 101290,
    id_time: 276,
    time: "SAO",
    pos: "ATA",
    nome: "FERREIRA",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:0.3, FF:1, FS:1, CA:1},
        4: {pt:3.7, FD:1, FS:2, DS:1},
        5: {pt:"-"},
        6: {pt:0},
        7: {pt:0},
        8: {pt:0.5, FS:1},
        9: {pt:0.5, FS:1},
        10: {pt:26, G:3, FF:1, FS:2, DS:1, CA:1, FC:1},
        11: {pt:2.1, FF:2, FS:1},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "101319": {
    id: 101319,
    id_time: 266,
    time: "FLU",
    pos: "LAT",
    nome: "GUGA",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:3.7, SG:1, CA:1, FC:1},
        4: {pt:0.1, FS:1, I:1, FC:1},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:1.2, DS:1, FC:1},
        8: {pt:6.6, FF:2, SG:1},
        9: {pt:"-"},
        10: {pt:-0.3, FC:1},
        11: {pt:0.5, FS:1},
        12: {pt:15.7, A:2, FS:3, DS:3, FC:1},
        13: {pt:3, DS:2},
      }
    }
  },
  "104666": {
    id: 104666,
    id_time: 277,
    time: "SAN",
    pos: "ATA",
    nome: "MOISÉS",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:1.2, FD:1},
        4: {pt:4.9, A:1, FS:1, FC:2},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:1.5, FS:1, PS:1},
        8: {pt:1.5, DS:1},
        9: {pt:8.9, G:1, FD:1, FC:1},
        10: {pt:0.9, FD:1, FC:1},
        11: {pt:9.5, G:1, FS:3},
        12: {pt:-0.3, FC:1},
        13: {pt:1.2, FD:1},
      }
    }
  },
  "105373": {
    id: 105373,
    id_time: 265,
    time: "BAH",
    pos: "ZAG",
    nome: "GABRIEL XAVIER",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:6.5, DS:1, SG:1},
        4: {pt:"-"},
        5: {pt:2.7, DS:2, FC:1},
        6: {pt:6.3, FF:1, FS:1, SG:1},
        7: {pt:5, SG:1},
        8: {pt:3, DS:2},
        9: {pt:"-"},
        10: {pt:-1, CA:1},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:-0.3, FC:1},
      }
    }
  },
  "110144": {
    id: 110144,
    id_time: 267,
    time: "VAS",
    pos: "ATA",
    nome: "SPINELLI",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:2, FF:1, DS:1, FC:1},
        4: {pt:0.5, FF:1, FC:1},
        5: {pt:0.9, DS:1, FC:2},
        6: {pt:"-"},
        7: {pt:9.7, G:1, FD:1, FS:1},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:1, FF:1, FS:1, FC:1},
        11: {pt:0},
        12: {pt:2.8, FF:1, FS:1, DS:1},
        13: {pt:1.3, FF:2, FC:1},
      }
    }
  },
  "110668": {
    id: 110668,
    id_time: 293,
    time: "CAP",
    pos: "LAT",
    nome: "ESQUIVEL",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:5.7, A:1, FS:2, FC:1},
        4: {pt:2.4, FF:1, FS:2, DS:1, FC:3},
        5: {pt:"-"},
        6: {pt:8.5, A:1, FS:1, DS:2},
        7: {pt:-0.5, FF:1, FS:1, FC:6},
        8: {pt:6.2, DS:1, SG:1, FC:1},
        9: {pt:"-"},
        10: {pt:4.2, FD:1, DS:3, FC:5},
        11: {pt:10.8, FF:3, FS:2, DS:2, SG:1, FC:2},
        12: {pt:7.6, FS:1, DS:6, CA:1, FC:3},
        13: {pt:2.5, FF:1, FS:1, DS:1, FC:1},
      }
    }
  },
  "111829": {
    id: 111829,
    id_time: 285,
    time: "INT",
    pos: "ATA",
    nome: "KAYKY",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:0},
        4: {pt:3.2, FD:1, FS:1, DS:1},
        5: {pt:3.2, FD:1, FS:1, DS:1},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:0},
        12: {pt:1.2, FD:1},
        13: {pt:"-"},
      }
    }
  },
  "111832": {
    id: 111832,
    id_time: 275,
    time: "PAL",
    pos: "LAT",
    nome: "JEFTÉ",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:0},
        4: {pt:"-"},
        5: {pt:-0.6, FC:2},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:1.6, FS:1, I:1, DS:1, FC:1},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "114405": {
    id: 114405,
    id_time: 283,
    time: "CRU",
    pos: "ATA",
    nome: "SINISTERRA",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:1.7, FF:1, DS:1, FC:2},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:0.2, FS:1, FC:1},
      }
    }
  },
  "116447": {
    id: 116447,
    id_time: 266,
    time: "FLU",
    pos: "MEI",
    nome: "HÉRCULES",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:0},
        4: {pt:3.5, FF:1, DS:2, FC:1},
        5: {pt:1.1, DS:2, CA:1, FC:3},
        6: {pt:10.1, G:1, FD:1, DS:1, FC:2},
        7: {pt:9.6, G:1, FF:1, I:1, DS:1, FC:2},
        8: {pt:3.5, FF:1, FS:3, DS:1, FC:1},
        9: {pt:9.7, G:1, FF:1, DS:1, FC:2},
        10: {pt:3.6, DS:3, FC:3},
        11: {pt:5, FD:2, FS:1, DS:2, FC:3},
        12: {pt:10.1, FF:3, FS:1, DS:5, FC:1},
        13: {pt:5.7, FD:1, DS:3},
      }
    }
  },
  "121824": {
    id: 121824,
    id_time: 264,
    time: "COR",
    pos: "ATA",
    nome: "KAYKE",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:1.5, DS:1},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:2.5, FS:2, DS:1},
        7: {pt:0},
        8: {pt:0},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:4.4, FD:1, FS:1, DS:2, FC:1},
        12: {pt:1.5, DS:1},
        13: {pt:"-"},
      }
    }
  },
  "122138": {
    id: 122138,
    id_time: 315,
    time: "CHA",
    pos: "MEI",
    nome: "JOÃO VITOR",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:0},
        4: {pt:"-"},
        5: {pt:2.1, FF:2, FS:1},
        6: {pt:4.7, FF:1, DS:3, FC:2},
        7: {pt:0.6, DS:1, FC:3},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:1.9, FD:1, FF:1, FS:1, FC:2},
        11: {pt:3.3, FF:2, FS:1, DS:1, FC:1},
        12: {pt:5.8, FD:1, FF:2, DS:2},
        13: {pt:-0.3, FS:2, CA:1, FC:1},
      }
    }
  },
  "123738": {
    id: 123738,
    id_time: 280,
    time: "RBB",
    pos: "ATA",
    nome: "HERRERA",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:0},
        4: {pt:0.7, FS:2, FC:1},
        5: {pt:7.1, FD:2, FS:1, DS:3, FC:1},
        6: {pt:8, G:1, FF:1, I:1, DS:1, CA:1, FC:4},
        7: {pt:2.1, DS:2, FC:3},
        8: {pt:0.8, FF:1},
        9: {pt:3, FD:1, FF:1, FS:1, DS:1, CA:1},
        10: {pt:0.7, FF:1, DS:1, CA:1, FC:2},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:3.5, FS:1, DS:2},
      }
    }
  },
  "123744": {
    id: 123744,
    id_time: 285,
    time: "INT",
    pos: "MEI",
    nome: "ALAN RODRÍGUEZ",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:0},
        4: {pt:0},
        5: {pt:3, FF:2, FS:1, DS:1, FC:2},
        6: {pt:0.2, FS:1, FC:1},
        7: {pt:-0.6, FC:2},
        8: {pt:"-"},
        9: {pt:1.5, DS:1},
        10: {pt:"-"},
        11: {pt:0},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "126013": {
    id: 126013,
    id_time: 263,
    time: "BOT",
    pos: "ZAG",
    nome: "YTHALLO",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:0.2, DS:1, CA:1, FC:1},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "127970": {
    id: 127970,
    id_time: 293,
    time: "CAP",
    pos: "MEI",
    nome: "FELIPE CHIQUETI",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:2.4, FD:1, FS:2, DS:1, CA:1, FC:1},
        4: {pt:1.5, FF:1, FS:2, FC:1},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:1.5, FF:1, FS:2, FC:1},
        8: {pt:0},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:0.3, DS:1, FC:4},
        13: {pt:2.5, FS:2, DS:1},
      }
    }
  },
  "132412": {
    id: 132412,
    id_time: 265,
    time: "BAH",
    pos: "LAT",
    nome: "ROMÁN GÓMEZ",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:12.5, DS:5, SG:1},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:1.7, FS:1, DS:1, FC:1},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "141165": {
    id: 141165,
    id_time: 294,
    time: "CFC",
    pos: "ATA",
    nome: "ENZO VAGNER",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:0.5, FF:1, FC:1},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "141615": {
    id: 141615,
    id_time: 276,
    time: "SAO",
    pos: "MEI",
    nome: "PEDRO FERREIRA",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:0.5, FS:1},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "142877": {
    id: 142877,
    id_time: 263,
    time: "BOT",
    pos: "ATA",
    nome: "VILLALBA",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:0},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:-1.6, CA:1, FC:2},
        8: {pt:4.5, DS:3},
        9: {pt:"-"},
        10: {pt:11, G:1, DS:2},
        11: {pt:0},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "146375": {
    id: 146375,
    id_time: 263,
    time: "BOT",
    pos: "ATA",
    nome: "KADIR",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:1.7, FS:1, DS:1, FC:1},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:2.2, FS:2, DS:1, FC:1},
        11: {pt:"-"},
        12: {pt:-0.1, FS:1, FC:2},
        13: {pt:2.5, FD:1, FF:1, FS:1},
      }
    }
  },
  "147194": {
    id: 147194,
    id_time: 293,
    time: "CAP",
    pos: "MEI",
    nome: "BRUNINHO",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:0},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:0.2, FS:1, FC:1},
        8: {pt:"-"},
        9: {pt:0},
        10: {pt:-0.3, FC:1},
        11: {pt:4.4, FD:2, FS:1, DS:1},
        12: {pt:"-"},
        13: {pt:5, FD:2, FF:2, FS:2},
      }
    }
  },
  "71536": {
    id: 71536,
    id_time: 293,
    time: "CAP",
    pos: "MEI",
    nome: "LUIZ GUSTAVO",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:1.5, DS:1},
        4: {pt:1, FS:2},
        5: {pt:"-"},
        6: {pt:11.9, G:1, FS:2, DS:3, CA:1, FC:2},
        7: {pt:1.4, FS:1, DS:1, FC:2},
        8: {pt:0.7, FS:2, FC:1},
        9: {pt:2.5, FS:2, DS:1},
        10: {pt:2.8, FF:1, FS:4},
        11: {pt:2, FS:1, DS:1},
        12: {pt:0.9, DS:1, FC:2},
        13: {pt:11.2, G:1, FD:3, FF:1, FS:2, CA:1, FC:4},
      }
    }
  },
  "82775": {
    id: 82775,
    id_time: 276,
    time: "SAO",
    pos: "LAT",
    nome: "LUCAS RAMON",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:8.8, FF:1, FS:3, DS:1, SG:1},
        4: {pt:"-"},
        5: {pt:11.2, FD:1, FS:1, DS:3, SG:1},
        6: {pt:6.7, A:1, FS:1, DS:1, FC:1},
        7: {pt:"-"},
        8: {pt:14.7, FF:1, FS:4, I:1, DS:8},
        9: {pt:4.7, FS:1, DS:3, FC:1},
        10: {pt:0.5, FS:1},
        11: {pt:-2.8, FS:1, CV:1, FC:1},
        12: {pt:"-"},
        13: {pt:11.2, FS:1, DS:4, SG:1, FC:1},
      }
    }
  },
  "84674": {
    id: 84674,
    id_time: 275,
    time: "PAL",
    pos: "MEI",
    nome: "LUCAS EVANGELISTA",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:5, A:1},
        4: {pt:0},
        5: {pt:0},
        6: {pt:1, FS:2},
        7: {pt:1.5, DS:1},
        8: {pt:0.5, FS:1},
        9: {pt:1.5, DS:1},
        10: {pt:2.5, FS:2, DS:1},
        11: {pt:0.8, FF:1},
        12: {pt:1, FF:1, FS:1, FC:1},
        13: {pt:-0.3, FC:1},
      }
    }
  },
  "87470": {
    id: 87470,
    id_time: 277,
    time: "SAN",
    pos: "MEI",
    nome: "THACIANO",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:10, G:1, FS:2, I:2, DS:1, FC:1},
        4: {pt:3.1, FF:2, FS:3},
        5: {pt:"-"},
        6: {pt:0},
        7: {pt:0},
        8: {pt:0.4, FS:1, I:1},
        9: {pt:8.2, G:1, DS:1, CA:1, FC:1},
        10: {pt:4.6, FF:2, DS:2},
        11: {pt:0},
        12: {pt:1.2, FD:1},
        13: {pt:2, FS:1, DS:1},
      }
    }
  },
  "91639": {
    id: 91639,
    id_time: 2305,
    time: "MIR",
    pos: "LAT",
    nome: "IGOR CARIÚS",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:1, FS:1, DS:1, PC:1},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "91866": {
    id: 91866,
    id_time: 277,
    time: "SAN",
    pos: "ZAG",
    nome: "ZÉ IVALDO",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:6, FS:2, DS:4, PC:1},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:3.2, FD:1, FS:1, DS:1},
        7: {pt:-1.3, FD:1, DS:1, CA:1, GC:1},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:-0.3, FC:1},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "93716": {
    id: 93716,
    id_time: 267,
    time: "VAS",
    pos: "LAT",
    nome: "PAULO HENRIQUE",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:0.7, FS:1, DS:1, CA:1, FC:1},
        4: {pt:6.5, FF:1, FS:3, DS:3, FC:1},
        5: {pt:9.7, A:1, FS:4, DS:2, FC:1},
        6: {pt:0.6, FD:1, FC:2},
        7: {pt:1.7, FS:1, DS:1, FC:1},
        8: {pt:0.5, FS:1},
        9: {pt:6.7, A:1, DS:2, CA:1, FC:1},
        10: {pt:"-"},
        11: {pt:3, FS:3, DS:1},
        12: {pt:3.9, FS:3, DS:2, FC:2},
        13: {pt:3.5, FF:1, DS:2, FC:1},
      }
    }
  },
  "95555": {
    id: 95555,
    id_time: 364,
    time: "REM",
    pos: "LAT",
    nome: "SÁVIO",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:4.5, FS:3, DS:2},
        4: {pt:"-"},
        5: {pt:2.9, FF:1, FS:2, I:1, DS:1, FC:1},
        6: {pt:0},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "96342": {
    id: 96342,
    id_time: 264,
    time: "COR",
    pos: "MEI",
    nome: "CHARLES",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:1.9, FS:1, I:1, DS:1},
        4: {pt:1.5, DS:1},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:-0.3, FC:1},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "96652": {
    id: 96652,
    id_time: 264,
    time: "COR",
    pos: "MEI",
    nome: "ALLAN",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:0.5, FS:3, CA:1},
        4: {pt:0.5, FS:1},
        5: {pt:1.5, DS:1},
        6: {pt:0},
        7: {pt:5.4, FF:1, FS:2, DS:3, FC:3},
        8: {pt:"-"},
        9: {pt:-2.6, FD:1, FS:1, CV:1, CA:1, FC:1},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:0},
        13: {pt:4.7, FF:1, DS:3, FC:2},
      }
    }
  },
  "98484": {
    id: 98484,
    id_time: 265,
    time: "BAH",
    pos: "ZAG",
    nome: "KANU",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:3.4, SG:1, CA:1, FC:2},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "101708": {
    id: 101708,
    id_time: 294,
    time: "CFC",
    pos: "LAT",
    nome: "FELIPE JONATAN",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:2, FS:1, DS:1},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:5.8, FF:1, SG:1},
        8: {pt:0},
        9: {pt:-0.4, I:1, FC:1},
        10: {pt:2.3, FF:1, DS:1},
        11: {pt:2.7, FD:1, DS:1},
        12: {pt:8, DS:2, SG:1},
        13: {pt:0.5, FS:1},
      }
    }
  },
  "101729": {
    id: 101729,
    id_time: 294,
    time: "CFC",
    pos: "ATA",
    nome: "FABINHO",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:1.2, FD:1},
        5: {pt:-1.6, CA:1, FC:2},
        6: {pt:0},
        7: {pt:"-"},
        8: {pt:-0.3, FC:1},
        9: {pt:0.5, FF:1, FC:1},
        10: {pt:0},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "102887": {
    id: 102887,
    id_time: 267,
    time: "VAS",
    pos: "TEC",
    nome: "BRUNO LAZARONI",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:4.48},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "103523": {
    id: 103523,
    id_time: 266,
    time: "FLU",
    pos: "ZAG",
    nome: "IGNÁCIO",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:1.6, FF:1, DS:2, CA:1, FC:4},
        5: {pt:"-"},
        6: {pt:9.3, FT:1, FF:1, FS:2, DS:3},
        7: {pt:-0.3, FC:1},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:0.5, FF:1, FC:1},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:0},
      }
    }
  },
  "105048": {
    id: 105048,
    id_time: 364,
    time: "REM",
    pos: "ATA",
    nome: "JAJÁ",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:2.8, FF:1, FS:1, DS:1},
        5: {pt:0.8, FD:1, I:1, FC:1},
        6: {pt:6.1, FF:3, FS:4, DS:2, CA:1, FC:1},
        7: {pt:4, FS:2, DS:2},
        8: {pt:9.7, G:1, FS:1, DS:1, FC:1},
        9: {pt:4.7, FS:1, DS:3, FC:1},
        10: {pt:0.5, FF:1, FC:1},
        11: {pt:2.6, FD:1, FS:1, DS:1, FC:2},
        12: {pt:7.3, A:1, FD:1, I:1, DS:1, FC:1},
        13: {pt:4.8, FF:2, FS:4, DS:1, FC:1},
      }
    }
  },
  "106434": {
    id: 106434,
    id_time: 280,
    time: "RBB",
    pos: "ZAG",
    nome: "EDUARDO SANTOS",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:0},
        5: {pt:0},
        6: {pt:"-"},
        7: {pt:4.2, FT:1, DS:1, FC:1},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "106593": {
    id: 106593,
    id_time: 283,
    time: "CRU",
    pos: "ZAG",
    nome: "VILLALBA",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:1.5, DS:1},
        5: {pt:1.2, DS:1, FC:1},
        6: {pt:0.5, FF:1, FC:1},
        7: {pt:0.4, FS:2, FC:2},
        8: {pt:5.5, I:1, DS:1, SG:1, FC:3},
        9: {pt:8.2, FS:1, DS:2, SG:1, FC:1},
        10: {pt:2.2, FF:1, DS:2, FC:2, PC:1},
        11: {pt:0},
        12: {pt:-1, CA:1},
        13: {pt:"-"},
      }
    }
  },
  "107554": {
    id: 107554,
    id_time: 282,
    time: "CAM",
    pos: "LAT",
    nome: "NATANAEL",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:-2.8, FS:1, CV:1, FC:1},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:17.7, A:1, FF:1, FS:3, DS:4, SG:1, FC:2},
        10: {pt:12.4, A:1, I:1, DS:5},
        11: {pt:-0.6, FC:2},
        12: {pt:3.6, FD:1, FF:1, FS:1, I:1, DS:1, FC:1},
        13: {pt:2.6, FD:1, FS:4, FC:2},
      }
    }
  },
  "108162": {
    id: 108162,
    id_time: 284,
    time: "GRE",
    pos: "MEI",
    nome: "NARDONI",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:0.7, FS:1, DS:1, CA:1, FC:1},
        5: {pt:1.2, DS:1, FC:1},
        6: {pt:11, G:1, FS:3, DS:1},
        7: {pt:-0.6, FC:2},
        8: {pt:0.5, FF:1, FC:1},
        9: {pt:3.4, FS:2, DS:2, FC:2},
        10: {pt:2.2, FF:1, I:1, DS:1},
        11: {pt:0.9, FF:1, FS:2, FC:3},
        12: {pt:2.7, DS:2, FC:1},
        13: {pt:0.5, FS:1},
      }
    }
  },
  "110708": {
    id: 110708,
    id_time: 294,
    time: "CFC",
    pos: "GOL",
    nome: "PEDRO RANGEL",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:0.3, DE:1, GS:1},
        5: {pt:6.8, FS:1, SG:1, DE:1},
        6: {pt:6.3, SG:1, DE:1},
        7: {pt:12, FS:1, SG:1, DE:5},
        8: {pt:0.6, DE:2, GS:2},
        9: {pt:1.6, DE:2, GS:1},
        10: {pt:2.9, DE:3, GS:1},
        11: {pt:3.5, DE:5, CA:1, GS:2},
        12: {pt:15.9, FS:1, SG:1, DE:8},
        13: {pt:6, FS:1, DE:5, GS:1},
      }
    }
  },
  "111577": {
    id: 111577,
    id_time: 282,
    time: "CAM",
    pos: "TEC",
    nome: "LUCAS GONÇALVES",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:4.37},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "114040": {
    id: 114040,
    id_time: 282,
    time: "CAM",
    pos: "ATA",
    nome: "MINDA",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:1.5, DS:1},
        5: {pt:1.7, FD:1, FS:1},
        6: {pt:0},
        7: {pt:"-"},
        8: {pt:4.5, FT:1, FS:3},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:4.5, FT:1, DS:1},
      }
    }
  },
  "114308": {
    id: 114308,
    id_time: 364,
    time: "REM",
    pos: "LAT",
    nome: "CUFRÉ",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:-0.3, FC:1},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "116065": {
    id: 116065,
    id_time: 267,
    time: "VAS",
    pos: "LAT",
    nome: "CUIABANO",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:2, FF:1, DS:1, FC:1},
        5: {pt:13.7, G:1, FD:1, DS:3},
        6: {pt:11.6, A:1, FD:1, FF:1, FS:2, DS:3, FC:3},
        7: {pt:12.4, A:1, FD:1, FS:1, DS:4, FC:1},
        8: {pt:12, A:2, DS:2, CA:1},
        9: {pt:"-"},
        10: {pt:3.2, FS:1, DS:2, FC:1},
        11: {pt:5.8, FD:1, FF:3, FS:1, DS:2, CA:1, FC:1},
        12: {pt:5.9, FD:1, FS:1, DS:3, FC:1},
        13: {pt:0.5, FS:1},
      }
    }
  },
  "118655": {
    id: 118655,
    id_time: 267,
    time: "VAS",
    pos: "ZAG",
    nome: "SALDIVIA",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:2.8, FS:2, DS:2, FC:4},
        5: {pt:0.5, FS:1},
        6: {pt:1.3, FF:1, FS:1},
        7: {pt:2, DS:2, CA:1},
        8: {pt:4.2, DS:3, FC:1},
        9: {pt:2, FS:1, DS:3, GC:1},
        10: {pt:3.6, FD:1, FS:2, DS:2, CA:1, FC:2},
        11: {pt:-0.3, FF:1, FS:1, CA:1, FC:2},
        12: {pt:"-"},
        13: {pt:2.8, FF:2, DS:1, FC:1},
      }
    }
  },
  "123101": {
    id: 123101,
    id_time: 293,
    time: "CAP",
    pos: "ATA",
    nome: "LEOZINHO",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:-0.3, FC:1},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:0},
        11: {pt:"-"},
        12: {pt:0.8, FF:1},
        13: {pt:"-"},
      }
    }
  },
  "123360": {
    id: 123360,
    id_time: 276,
    time: "SAO",
    pos: "MEI",
    nome: "CAULY",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:9.5, G:1, FD:1, DS:1, FC:4},
        5: {pt:0},
        6: {pt:-0.3, FC:1},
        7: {pt:2.7, FS:3, DS:1, FC:1},
        8: {pt:4, FS:2, DS:2},
        9: {pt:4.2, FS:3, DS:2, FC:1},
        10: {pt:1.3, FF:1, FS:1},
        11: {pt:-0.3, FC:1},
        12: {pt:"-"},
        13: {pt:3.8, FF:1, DS:2},
      }
    }
  },
  "123689": {
    id: 123689,
    id_time: 264,
    time: "COR",
    pos: "LAT",
    nome: "MILANS",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:4.9, FS:2, DS:3, FC:2},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:6.2, DS:1, SG:1, FC:1},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:7, FS:1, DS:1, SG:1},
        13: {pt:"-"},
      }
    }
  },
  "124270": {
    id: 124270,
    id_time: 285,
    time: "INT",
    pos: "MEI",
    nome: "ALLEX",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:2.3, FF:1, DS:1},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:3.7, FD:1, FS:2, DS:1},
        13: {pt:1.2, FS:3, FC:1},
      }
    }
  },
  "125467": {
    id: 125467,
    id_time: 284,
    time: "GRE",
    pos: "ZAG",
    nome: "VIERY",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:2.1, DS:2, FC:3},
        5: {pt:1.7, FS:1, DS:1, FC:1},
        6: {pt:-1.6, FS:2, CA:1, FC:2, PC:1},
        7: {pt:5.3, FS:2, I:1, SG:1, FC:2},
        8: {pt:2, DS:2, CA:1},
        9: {pt:1.7, FS:1, DS:1, FC:1},
        10: {pt:7.3, FF:1, DS:1, SG:1},
        11: {pt:1.4, SG:1, CV:1, FC:2},
        12: {pt:"-"},
        13: {pt:9.7, DS:4, SG:1, CA:1, FC:1},
      }
    }
  },
  "125488": {
    id: 125488,
    id_time: 264,
    time: "COR",
    pos: "ZAG",
    nome: "JOÃO PEDRO",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:8.9, G:1, DS:1, FC:2},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:6.5, FF:1, FS:1, DS:1, SG:1, CA:1, FC:1},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "128431": {
    id: 128431,
    id_time: 293,
    time: "CAP",
    pos: "MEI",
    nome: "JOÃO CRUZ",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:1.6, FF:2},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:0},
        8: {pt:"-"},
        9: {pt:1.2, DS:1, FC:1},
        10: {pt:5, A:1},
        11: {pt:6.2, A:1, DS:1, FC:1},
        12: {pt:1.4, DS:2, CA:1, FC:2},
        13: {pt:4.1, FD:1, FF:2, FS:1, I:1, DS:1, FC:2},
      }
    }
  },
  "131516": {
    id: 131516,
    id_time: 294,
    time: "CFC",
    pos: "LAT",
    nome: "JP CHERMONT",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:1.5, DS:1},
        5: {pt:5.7, FS:2, SG:1, FC:1},
        6: {pt:13, A:1, DS:2, SG:1},
        7: {pt:6.5, DS:1, SG:1},
        8: {pt:2.7, FD:1, DS:1},
        9: {pt:0},
        10: {pt:0.9, FD:1, FC:1},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:0},
      }
    }
  },
  "141595": {
    id: 141595,
    id_time: 284,
    time: "GRE",
    pos: "ATA",
    nome: "GABRIEL MEC",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:-0.3, FF:1, FS:1, CA:1, FC:2},
        5: {pt:4.3, FF:1, FS:1, DS:2},
        6: {pt:0.7, FS:2, FC:1},
        7: {pt:-1.3, CA:1, FC:1},
        8: {pt:2, FS:1, DS:1},
        9: {pt:-0.3, FC:1},
        10: {pt:1, FS:2},
        11: {pt:0.2, FS:1, FC:1},
        12: {pt:0},
        13: {pt:11, G:1, FF:1, FS:2, DS:1, FC:1},
      }
    }
  },
  "141995": {
    id: 141995,
    id_time: 264,
    time: "COR",
    pos: "MEI",
    nome: "DIEGUINHO",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:1.6, FS:1, I:1, DS:1, FC:1},
        5: {pt:1.3, FF:1, FS:1},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:0},
        10: {pt:0},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "147545": {
    id: 147545,
    id_time: 284,
    time: "GRE",
    pos: "MEI",
    nome: "JEFINHO",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:1.5, DS:1},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "147546": {
    id: 147546,
    id_time: 284,
    time: "GRE",
    pos: "MEI",
    nome: "ROGER",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:1.2, FD:1},
        5: {pt:1.2, DS:1, FC:1},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "148215": {
    id: 148215,
    id_time: 276,
    time: "SAO",
    pos: "MEI",
    nome: "DJHORDNEY",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:-1.6, CA:1, FC:2},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "63007": {
    id: 63007,
    id_time: 277,
    time: "SAN",
    pos: "MEI",
    nome: "NEYMAR",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:19.2, G:2, FD:1, FS:5, I:1, DS:1, CA:1, FC:3},
        5: {pt:"-"},
        6: {pt:3.7, FD:1, FF:2, FS:3, FC:2},
        7: {pt:9.4, G:1, FS:2, I:1, DS:1, CA:1},
        8: {pt:"-"},
        9: {pt:7.8, A:1, FF:1, FS:7, I:2, CA:1, FC:1},
        10: {pt:"-"},
        11: {pt:5.3, FF:4, FS:5, I:1, FC:1},
        12: {pt:7.5, FD:2, FS:5, I:1, DS:2, FC:1},
        13: {pt:"-"},
      }
    }
  },
  "63008": {
    id: 63008,
    id_time: 276,
    time: "SAO",
    pos: "ZAG",
    nome: "RAFAEL TOLÓI",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:10.6, FD:1, DS:4, SG:1, CA:1, FC:2},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:-1.4, FS:1, CA:1, FC:3},
        10: {pt:4.5, DS:3},
        11: {pt:2.5, FF:1, DS:2, CA:1, FC:1},
        12: {pt:"-"},
        13: {pt:7.9, FS:1, DS:2, SG:1, FC:2},
      }
    }
  },
  "70592": {
    id: 70592,
    id_time: 275,
    time: "PAL",
    pos: "MEI",
    nome: "FELIPE ANDERSON",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:0},
        5: {pt:5.4, DS:4, FC:2},
        6: {pt:1.7, FD:1, FS:1},
        7: {pt:2.7, DS:2, FC:1},
        8: {pt:0},
        9: {pt:3.5, FS:1, DS:2},
        10: {pt:1.3, FF:1, FS:1},
        11: {pt:1.5, DS:1},
        12: {pt:0},
        13: {pt:-0.4, DS:1, CA:1, FC:3},
      }
    }
  },
  "72605": {
    id: 72605,
    id_time: 282,
    time: "CAM",
    pos: "ZAG",
    nome: "VITOR HUGO",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:2, FS:1, DS:1},
        5: {pt:4, SG:1, CA:1},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:3, FF:1, FS:2, DS:1, FC:1},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:2.7, DS:2, FC:1},
      }
    }
  },
  "78478": {
    id: 78478,
    id_time: 277,
    time: "SAN",
    pos: "MEI",
    nome: "WILLIAN ARÃO",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:0.2, FS:1, FC:1},
        5: {pt:"-"},
        6: {pt:1.7, FS:1, DS:1, FC:1},
        7: {pt:1.5, DS:1},
        8: {pt:"-"},
        9: {pt:1.5, DS:1},
        10: {pt:2.7, DS:2, FC:1},
        11: {pt:6.7, FS:2, DS:4, FC:1},
        12: {pt:4.5, DS:3},
        13: {pt:"-"},
      }
    }
  },
  "80570": {
    id: 80570,
    id_time: 276,
    time: "SAO",
    pos: "LAT",
    nome: "WENDELL",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:7, FF:1, DS:2, SG:1, FC:6},
        5: {pt:7.4, DS:2, SG:1, FC:2},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:1.7, DS:2, CA:1, FC:1},
        9: {pt:9.9, A:1, FS:2, DS:3, FC:2},
        10: {pt:-1.7, FS:1, CA:1, FC:4},
        11: {pt:0.9, FD:1, FC:1},
        12: {pt:0},
        13: {pt:13.7, A:1, FF:1, FS:1, DS:2, SG:1, FC:2},
      }
    }
  },
  "82463": {
    id: 82463,
    id_time: 266,
    time: "FLU",
    pos: "MEI",
    nome: "OTÁVIO",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:1.7, FD:1, FS:1},
        5: {pt:1.5, DS:1},
        6: {pt:"-"},
        7: {pt:-0.3, FC:1},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:0},
        11: {pt:"-"},
        12: {pt:-1.3, CA:1, FC:1},
        13: {pt:"-"},
      }
    }
  },
  "86686": {
    id: 86686,
    id_time: 267,
    time: "VAS",
    pos: "MEI",
    nome: "TCHÊ TCHÊ",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:0},
        5: {pt:0, FF:1, FS:1, CA:1, FC:1},
        6: {pt:1.2, FD:1},
        7: {pt:0.4, FS:1, I:1},
        8: {pt:0.9, DS:1, FC:2},
        9: {pt:9.7, G:1, FF:1, DS:1, FC:2},
        10: {pt:0.5, FF:1, FC:1},
        11: {pt:0},
        12: {pt:3.7, FS:2, DS:2, FC:1},
        13: {pt:2.7, FS:2, DS:2, CA:1, FC:1},
      }
    }
  },
  "87258": {
    id: 87258,
    id_time: 266,
    time: "FLU",
    pos: "ATA",
    nome: "SOTELDO",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:2.2, FD:1, FS:2},
        5: {pt:0.5, FS:1},
        6: {pt:0.8, FF:1},
        7: {pt:"-"},
        8: {pt:0},
        9: {pt:0},
        10: {pt:2.9, FD:1, FF:1, FS:2, I:1},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:0},
      }
    }
  },
  "92440": {
    id: 92440,
    id_time: 264,
    time: "COR",
    pos: "ZAG",
    nome: "ANDRÉ RAMALHO",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:0.9, FS:2, DS:1, CA:1, FC:2},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:5.2, DS:1, SG:1, CA:1, FC:1},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:1.7, FS:3, DS:1, CA:1, FC:1},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "95362": {
    id: 95362,
    id_time: 282,
    time: "CAM",
    pos: "ATA",
    nome: "CASSIERRA",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:0.8, FF:1},
        5: {pt:0.5, FS:1},
        6: {pt:0.8, FF:1},
        7: {pt:0.7, FS:2, FC:1},
        8: {pt:1.2, FD:1},
        9: {pt:0},
        10: {pt:-0.3, FC:1},
        11: {pt:-0.3, FC:1},
        12: {pt:0},
        13: {pt:1.7, FS:1, DS:1, FC:1},
      }
    }
  },
  "96831": {
    id: 96831,
    id_time: 364,
    time: "REM",
    pos: "ATA",
    nome: "CARLINHOS",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:-1, CA:1},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "98720": {
    id: 98720,
    id_time: 264,
    time: "COR",
    pos: "LAT",
    nome: "ANGILERI",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:2.5, FS:1, DS:2, CA:1},
        5: {pt:0.5, FS:1},
        6: {pt:"-"},
        7: {pt:3.7, SG:1, CA:1, FC:1},
        8: {pt:"-"},
        9: {pt:1.5, DS:1},
        10: {pt:1.5, FF:1, FS:2, FC:1},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "99815": {
    id: 99815,
    id_time: 275,
    time: "PAL",
    pos: "MEI",
    nome: "ARIAS",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:2.7, FD:1, FF:1, FS:1, DS:1, CA:1, FC:1},
        5: {pt:10.7, FS:1, DS:7, FC:1},
        6: {pt:6.4, FD:1, FS:2, DS:3, FC:1},
        7: {pt:17.3, G:1, FF:3, FS:2, I:1, DS:4},
        8: {pt:9, G:1, FF:1, DS:2, CA:1, FC:6},
        9: {pt:4.7, FD:1, FS:1, DS:2},
        10: {pt:7.2, G:1, FS:1, CA:1, FC:1},
        11: {pt:"-"},
        12: {pt:1.2, FD:1},
        13: {pt:"-"},
      }
    }
  },
  "100804": {
    id: 100804,
    id_time: 364,
    time: "REM",
    pos: "ZAG",
    nome: "TCHAMBA",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:1.2, DS:1, FC:1},
        6: {pt:0.2, FS:1, FC:1},
        7: {pt:5.4, DS:4, FC:2},
        8: {pt:4.2, DS:3, FC:1},
        9: {pt:0},
        10: {pt:7, FS:1, DS:1, SG:1},
        11: {pt:2.3, FF:1, DS:1},
        12: {pt:-4.9, I:1, DS:1, FC:1, GC:2},
        13: {pt:1.3, FF:1, FS:1},
      }
    }
  },
  "102318": {
    id: 102318,
    id_time: 284,
    time: "GRE",
    pos: "LAT",
    nome: "CAIO PAULISTA",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:2, FS:1, DS:1},
        6: {pt:2, FS:1, DS:1},
        7: {pt:8.8, FF:1, DS:2, SG:1},
        8: {pt:1.5, DS:1},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:5, SG:1},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "102340": {
    id: 102340,
    id_time: 287,
    time: "VIT",
    pos: "ZAG",
    nome: "CACÁ",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:2.7, DS:2, FC:1},
        6: {pt:6.5, DS:1, SG:1},
        7: {pt:0.8, FF:1},
        8: {pt:6.5, DS:1, SG:1},
        9: {pt:-1.6, CA:1, FC:2},
        10: {pt:0.2, FD:1, CA:1},
        11: {pt:13, G:1, SG:1},
        12: {pt:5.5, FS:1, SG:1},
        13: {pt:-0.5, FS:1, PC:1},
      }
    }
  },
  "103388": {
    id: 103388,
    id_time: 287,
    time: "VIT",
    pos: "MEI",
    nome: "EMMANUEL MARTÍNEZ",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:4.5, FS:3, DS:3, FC:5},
        6: {pt:6.7, FS:5, DS:3, FC:1},
        7: {pt:1.5, FF:1, FS:2, FC:1},
        8: {pt:3.9, FS:2, DS:3, CA:1, FC:2},
        9: {pt:-0.6, FS:2, CA:1, FC:2},
        10: {pt:"-"},
        11: {pt:5.7, FF:1, FS:2, DS:3, FC:2},
        12: {pt:6.4, FS:2, DS:4, FC:2},
        13: {pt:6.5, FF:1, FS:2, DS:4, CA:1, FC:1},
      }
    }
  },
  "104036": {
    id: 104036,
    id_time: 264,
    time: "COR",
    pos: "MEI",
    nome: "LABYAD",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:0.5, FS:1},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:3, DS:2},
        10: {pt:0.8, FF:1},
        11: {pt:"-"},
        12: {pt:0},
        13: {pt:"-"},
      }
    }
  },
  "104085": {
    id: 104085,
    id_time: 275,
    time: "PAL",
    pos: "ZAG",
    nome: "BRUNO FUCHS",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:1.5, DS:1},
        6: {pt:4.4, SG:1, FC:2},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:4.1, FS:1, DS:3, FC:3},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:5, SG:1},
        13: {pt:5, SG:1},
      }
    }
  },
  "104118": {
    id: 104118,
    id_time: 287,
    time: "VIT",
    pos: "GOL",
    nome: "LUCAS ARCANJO",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:10.5, DE:5, DP:1, CA:1, GS:1, PC:1},
        6: {pt:8.9, SG:1, DE:3},
        7: {pt:3.2, DE:4, GS:2},
        8: {pt:8.9, SG:1, DE:3},
        9: {pt:-0.4, DE:2, GS:3},
        10: {pt:5.5, DE:5, GS:1},
        11: {pt:12.8, SG:1, DE:6},
        12: {pt:5, SG:1},
        13: {pt:7.4, DE:8, GS:3},
      }
    }
  },
  "105842": {
    id: 105842,
    id_time: 287,
    time: "VIT",
    pos: "ZAG",
    nome: "EDU",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:1.5, DS:1},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "111682": {
    id: 111682,
    id_time: 267,
    time: "VAS",
    pos: "MEI",
    nome: "ADSON",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:3.1, FF:2, DS:1},
        6: {pt:"-"},
        7: {pt:2.5, FF:1, FS:1, DS:1, FC:1},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:0.8, FF:1},
        13: {pt:3.8, FF:1, DS:2},
      }
    }
  },
  "111690": {
    id: 111690,
    id_time: 283,
    time: "CRU",
    pos: "GOL",
    nome: "MATHEUS CUNHA",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:0.3, DE:1, GS:1},
        6: {pt:-0.4, DE:2, GS:3},
        7: {pt:0.6, DE:2, GS:2},
        8: {pt:6.3, SG:1, DE:1},
        9: {pt:10, A:1, SG:1},
        10: {pt:-2.7, DE:1, GS:4},
        11: {pt:2.9, DE:3, GS:1},
        12: {pt:6.3, SG:1, DE:1},
        13: {pt:5.8, FS:1, SG:1, DE:1, CA:1},
      }
    }
  },
  "118563": {
    id: 118563,
    id_time: 280,
    time: "RBB",
    pos: "MEI",
    nome: "RODRIGUINHO",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:7.6, G:1, FS:2, I:1, CA:1, FC:1},
        6: {pt:0.4, FS:2, FC:2},
        7: {pt:2.9, DS:3, CA:1, FC:2},
        8: {pt:2.7, DS:2, FC:1},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:1.2, DS:1, FC:1},
        12: {pt:"-"},
        13: {pt:2.3, FF:1, DS:1},
      }
    }
  },
  "122573": {
    id: 122573,
    id_time: 262,
    time: "FLA",
    pos: "ATA",
    nome: "WALLACE YAN",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:-0.3, FC:1},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:0.9, FS:2, I:1},
        9: {pt:0.2, FS:1, FC:1},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "122660": {
    id: 122660,
    id_time: 283,
    time: "CRU",
    pos: "MEI",
    nome: "JAPA",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:3.3, FF:1, FS:2, DS:1},
        6: {pt:8, G:1},
        7: {pt:4.3, FF:2, FS:3, DS:1, FC:1},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "124424": {
    id: 124424,
    id_time: 266,
    time: "FLU",
    pos: "ATA",
    nome: "RODRIGO CASTILLO",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:2.7, FF:1, FS:1, I:1, DS:1},
        6: {pt:1.7, FD:1, FS:1},
        7: {pt:0},
        8: {pt:9.9, G:1, FS:2, DS:1, FC:2},
        9: {pt:8.5, G:1, FS:1},
        10: {pt:-1.1, FS:1, I:1, FC:5},
        11: {pt:0.8, FF:3, CA:1, FC:2},
        12: {pt:13.3, G:1, A:1, FS:3, FC:4},
        13: {pt:8.1, FD:3, FF:2, FS:4, DS:1, FC:2},
      }
    }
  },
  "124661": {
    id: 124661,
    id_time: 282,
    time: "CAM",
    pos: "ZAG",
    nome: "IVÁN ROMÁN",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:8.6, DS:3, SG:1, FC:3},
        6: {pt:0.2, FS:1, FC:1},
        7: {pt:15.8, G:1, FF:1, DS:3, SG:1, CA:1, FC:5},
        8: {pt:1, FS:1, DS:1, CA:1},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "126189": {
    id: 126189,
    id_time: 282,
    time: "CAM",
    pos: "MEI",
    nome: "TOMÁS PÉREZ",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:-0.3, FC:1},
        6: {pt:1.9, FF:1, DS:2, CA:1, FC:3},
        7: {pt:5.9, FD:1, FS:1, DS:3, FC:1},
        8: {pt:"-"},
        9: {pt:2, FS:1, DS:1},
        10: {pt:1.5, DS:1},
        11: {pt:-1.2, FC:4},
        12: {pt:"-"},
        13: {pt:-0.8, FS:1, CA:1, FC:1},
      }
    }
  },
  "131617": {
    id: 131617,
    id_time: 276,
    time: "SAO",
    pos: "ATA",
    nome: "ANDRÉ SILVA",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:1, FS:2},
        6: {pt:0},
        7: {pt:0.4, FS:2, FC:2},
        8: {pt:-1.3, CA:1, FC:1},
        9: {pt:0.7, FS:2, FC:1},
        10: {pt:-0.3, FC:1},
        11: {pt:1.8, FD:2, FC:2},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "131967": {
    id: 131967,
    id_time: 283,
    time: "CRU",
    pos: "ATA",
    nome: "VILLARREAL",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:3.7, FD:1, FS:2, DS:1},
        6: {pt:8.5, G:1, FF:1, FC:1},
        7: {pt:10.1, G:1, FF:2, FS:1},
        8: {pt:4, FD:1, FF:1, I:1, DS:2, FC:3},
        9: {pt:"-"},
        10: {pt:0},
        11: {pt:15.6, G:1, FD:3, FF:2, FS:3, DS:1, FC:2},
        12: {pt:5.2, FT:1, FS:2, DS:1, FC:1},
        13: {pt:"-"},
      }
    }
  },
  "140726": {
    id: 140726,
    id_time: 265,
    time: "BAH",
    pos: "MEI",
    nome: "DAVID MARTINS",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:0},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:-0.3, FC:1},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "142593": {
    id: 142593,
    id_time: 364,
    time: "REM",
    pos: "ATA",
    nome: "NICOLÁS FERREIRA",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:0.2, FF:1, FC:2},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "143173": {
    id: 143173,
    id_time: 284,
    time: "GRE",
    pos: "MEI",
    nome: "LEONEL PÉREZ",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:-0.3, FC:1},
        6: {pt:"-"},
        7: {pt:4.9, FD:1, FF:1, FS:4, DS:1, FC:2},
        8: {pt:1.2, DS:1, FC:1},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:0.9, FS:2, DS:1, CA:1, FC:2},
        13: {pt:-1.9, CA:1, FC:3},
      }
    }
  },
  "145659": {
    id: 145659,
    id_time: 276,
    time: "SAO",
    pos: "LAT",
    nome: "NICOLAS",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:5, SG:1},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "147864": {
    id: 147864,
    id_time: 364,
    time: "REM",
    pos: "ATA",
    nome: "RAFAEL MONTI",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:0},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "37457": {
    id: 37457,
    id_time: 364,
    time: "REM",
    pos: "TEC",
    nome: "LÉO CONDÉ",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:2.96},
        6: {pt:2.3},
        7: {pt:2.47},
        8: {pt:8.52, V:1},
        9: {pt:4.28},
        10: {pt:6.27},
        11: {pt:4.69},
        12: {pt:2.99},
        13: {pt:3.28},
      }
    }
  },
  "41929": {
    id: 41929,
    id_time: 267,
    time: "VAS",
    pos: "TEC",
    nome: "RENATO GAÚCHO",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:6.95, V:1},
        6: {pt:4.83},
        7: {pt:7.04, V:1},
        8: {pt:5.87, V:1},
        9: {pt:3.99},
        10: {pt:4.3},
        11: {pt:3.29},
        12: {pt:6.28, V:1},
        13: {pt:3.19},
      }
    }
  },
  "68952": {
    id: 68952,
    id_time: 287,
    time: "VIT",
    pos: "ATA",
    nome: "MARINHO",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:3.6, FF:2, FS:2, I:2, DS:1, FC:1},
        6: {pt:0},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:1.2, DS:1, FC:1},
      }
    }
  },
  "79437": {
    id: 79437,
    id_time: 276,
    time: "SAO",
    pos: "TEC",
    nome: "ROGER MACHADO",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:9.87, V:1},
        6: {pt:4.96, V:1},
        7: {pt:2.22},
        8: {pt:4.45},
        9: {pt:4.33},
        10: {pt:6.73, V:1},
        11: {pt:1.87},
        12: {pt:2.75},
        13: {pt:8.29, V:1},
      }
    }
  },
  "81845": {
    id: 81845,
    id_time: 266,
    time: "FLU",
    pos: "MEI",
    nome: "ALISSON",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:0.5, FS:1},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:1.2, DS:1, FC:1},
        9: {pt:0},
        10: {pt:0},
        11: {pt:"-"},
        12: {pt:1.4, DS:2, CA:1, FC:2},
        13: {pt:5.5, A:1, FS:1},
      }
    }
  },
  "82627": {
    id: 82627,
    id_time: 262,
    time: "FLA",
    pos: "ATA",
    nome: "LUIZ ARAÚJO",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:0},
        6: {pt:-0.3, FC:1},
        7: {pt:17.6, G:1, A:1, FS:4, I:1, DS:2, FC:1},
        8: {pt:"-"},
        9: {pt:1.7, FS:1, DS:1, FC:1},
        10: {pt:3, DS:2},
        11: {pt:0.5, DS:1, CA:1},
        12: {pt:0},
        13: {pt:0},
      }
    }
  },
  "88293": {
    id: 88293,
    id_time: 315,
    time: "CHA",
    pos: "ATA",
    nome: "NETO PESSOA",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:2.8, FF:1, FS:1, DS:1},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:0.5, FS:1},
        9: {pt:0.8, FF:1},
        10: {pt:8, G:1},
        11: {pt:2.9, FD:1, DS:2, CA:1, FC:1},
        12: {pt:"-"},
        13: {pt:0},
      }
    }
  },
  "88963": {
    id: 88963,
    id_time: 262,
    time: "FLA",
    pos: "TEC",
    nome: "LEONARDO JARDIM",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:9.46, V:1},
        6: {pt:11.41, V:1},
        7: {pt:9.36, V:1},
        8: {pt:3.97},
        9: {pt:1.57},
        10: {pt:6.89, V:1},
        11: {pt:7.31, V:1},
        12: {pt:8.37999999999999, V:1},
        13: {pt:11.48, V:1},
      }
    }
  },
  "90608": {
    id: 90608,
    id_time: 283,
    time: "CRU",
    pos: "ATA",
    nome: "CHICO DA COSTA",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:0.9, FD:1, FC:1},
        6: {pt:7.1, A:1, FD:1, DS:1, FC:2},
        7: {pt:0},
        8: {pt:"-"},
        9: {pt:0},
        10: {pt:0.8, FF:1},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:0.2, FS:1, FC:1},
      }
    }
  },
  "92747": {
    id: 92747,
    id_time: 282,
    time: "CAM",
    pos: "TEC",
    nome: "EDUARDO DOMÍNGUEZ",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:8.14, V:1},
        6: {pt:2.55},
        7: {pt:8.2, V:1},
        8: {pt:2.76},
        9: {pt:12.76, V:1},
        10: {pt:5.77, V:1},
        11: {pt:1.68},
        12: {pt:2.35},
        13: {pt:2.96},
      }
    }
  },
  "101002": {
    id: 101002,
    id_time: 263,
    time: "BOT",
    pos: "ATA",
    nome: "JÚNIOR SANTOS",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:2, FS:1, DS:1},
        7: {pt:0.5, FS:1},
        8: {pt:0},
        9: {pt:9.4, G:1, FD:1, FS:1, FC:1},
        10: {pt:3.6, FD:1, FS:2, DS:2, CA:1, FC:2},
        11: {pt:"-"},
        12: {pt:1.2, FD:1},
        13: {pt:1.4, FF:1, FS:2, I:1, FC:1},
      }
    }
  },
  "101807": {
    id: 101807,
    id_time: 277,
    time: "SAN",
    pos: "MEI",
    nome: "OLIVA",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:7, FF:1, FS:1, DS:4, FC:1},
        7: {pt:3.9, DS:3, FC:2},
        8: {pt:7.5, FF:1, FS:2, DS:4, FC:1},
        9: {pt:0.1, FS:2, FC:3},
        10: {pt:6.7, A:1, FF:1, DS:1, FC:2},
        11: {pt:0.2, FS:1, FC:1},
        12: {pt:"-"},
        13: {pt:4, FD:1, FS:2, DS:2, FC:4},
      }
    }
  },
  "104191": {
    id: 104191,
    id_time: 263,
    time: "BOT",
    pos: "GOL",
    nome: "RAUL",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:0.9, DE:3, GS:3},
        7: {pt:4.5, DE:5, GS:2},
        8: {pt:5.5, DE:5, GS:1},
        9: {pt:1.1, FS:1, DE:2, GS:2},
        10: {pt:5, FS:1, DE:5, CA:1, GS:1},
        11: {pt:1.9, DE:3, GS:2},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "105518": {
    id: 105518,
    id_time: 293,
    time: "CAP",
    pos: "ATA",
    nome: "RENAN PEIXOTO",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:0},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:1, FF:1, FS:1, FC:1},
        12: {pt:1.5, DS:1},
        13: {pt:3.5, FT:1, FS:1},
      }
    }
  },
  "108683": {
    id: 108683,
    id_time: 275,
    time: "PAL",
    pos: "MEI",
    nome: "EMILIANO MARTÍNEZ",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:0},
        7: {pt:"-"},
        8: {pt:1.9, FD:1, FS:1, DS:1, CA:1, FC:1},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:3.5, FS:1, DS:2},
        13: {pt:0},
      }
    }
  },
  "109987": {
    id: 109987,
    id_time: 263,
    time: "BOT",
    pos: "MEI",
    nome: "MEDINA",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:2.9, FF:1, FS:3, DS:1, FC:3},
        7: {pt:-3.3, CV:1, FC:1},
        8: {pt:"-"},
        9: {pt:1.2, FS:3, PS:1, CA:1, FC:1},
        10: {pt:"-"},
        11: {pt:4, FF:1, FS:1, DS:2, FC:1},
        12: {pt:3.7, FS:2, DS:2, FC:1},
        13: {pt:17, G:1, FF:1, FS:2, DS:5, FC:1},
      }
    }
  },
  "110605": {
    id: 110605,
    id_time: 315,
    time: "CHA",
    pos: "MEI",
    nome: "VINÍCIUS BALIEIRO",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:0},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:4, FS:2, DS:2},
        13: {pt:"-"},
      }
    }
  },
  "111951": {
    id: 111951,
    id_time: 287,
    time: "VIT",
    pos: "ATA",
    nome: "RENZO LÓPEZ",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:-0.2, FS:2, FC:4},
        7: {pt:0.7, FF:1, FS:1, FC:2},
        8: {pt:1.1, FS:1, DS:1, FC:3},
        9: {pt:0},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "112017": {
    id: 112017,
    id_time: 293,
    time: "CAP",
    pos: "MEI",
    nome: "FELIPINHO",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:1.5, DS:1},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:0},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "115141": {
    id: 115141,
    id_time: 267,
    time: "VAS",
    pos: "ZAG",
    nome: "LUCAS FREITAS",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:0},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "118844": {
    id: 118844,
    id_time: 264,
    time: "COR",
    pos: "ATA",
    nome: "KAIO CÉSAR",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:9.3, A:1, FD:1, FS:3, I:1, DS:2, CA:1, FC:1},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:1, FS:2},
        13: {pt:"-"},
      }
    }
  },
  "129666": {
    id: 129666,
    id_time: 267,
    time: "VAS",
    pos: "MEI",
    nome: "JP",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:0.9, DS:1, FC:2},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:1, FF:1, FS:1, FC:1},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "130620": {
    id: 130620,
    id_time: 287,
    time: "VIT",
    pos: "MEI",
    nome: "EDENÍLSON",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:2.9, FS:1, DS:2, FC:2},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:2.7, DS:2, FC:1},
        10: {pt:-1.8, DS:1, CV:1, FC:1},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:3.2, DS:3, CA:1, FC:1},
      }
    }
  },
  "141776": {
    id: 141776,
    id_time: 277,
    time: "SAN",
    pos: "MEI",
    nome: "GUSTAVO HENRIQUE",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:2, FS:1, DS:1},
        7: {pt:"-"},
        8: {pt:-1.7, FS:1, CA:1, FC:4},
        9: {pt:4.2, FF:1, FS:1, DS:3, CA:1, FC:2},
        10: {pt:1.5, DS:1},
        11: {pt:2.2, FS:2, DS:1, FC:1},
        12: {pt:1.2, FS:2, DS:1, CA:1, FC:1},
        13: {pt:"-"},
      }
    }
  },
  "143600": {
    id: 143600,
    id_time: 283,
    time: "CRU",
    pos: "LAT",
    nome: "KAUÃ MORAES",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:5.8, A:1, FF:1},
        7: {pt:0},
        8: {pt:"-"},
        9: {pt:14, G:1, FS:2, DS:1, SG:1, FC:5},
        10: {pt:1.9, FS:2, DS:1, FC:2},
        11: {pt:2.5, FS:2, DS:1},
        12: {pt:"-"},
        13: {pt:4.4, FS:2, SG:1, CA:1, FC:2},
      }
    }
  },
  "147268": {
    id: 147268,
    id_time: 287,
    time: "VIT",
    pos: "ATA",
    nome: "ANDERSON PATO",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:1.5, DS:1},
        7: {pt:1.5, DS:1},
        8: {pt:1.5, DS:1},
        9: {pt:"-"},
        10: {pt:1, FF:1, DS:1, CA:1, FC:1},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "148125": {
    id: 148125,
    id_time: 280,
    time: "RBB",
    pos: "LAT",
    nome: "RYAN AUGUSTO",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:2.4, FD:1, DS:1, FC:1},
        7: {pt:1.5, FS:3},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:11.2, FS:1, DS:4, SG:1, FC:1},
        11: {pt:3.5, FF:1, DS:2, FC:1},
        12: {pt:-0.1, I:1},
        13: {pt:"-"},
      }
    }
  },
  "71898": {
    id: 71898,
    id_time: 2305,
    time: "MIR",
    pos: "MEI",
    nome: "GABRIEL PIRES",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:0.8, FD:1, FS:1, FC:3},
        7: {pt:4.8, FD:1, FF:2, FS:4},
        8: {pt:2.4, FS:2, DS:2, CA:1, FC:2},
        9: {pt:5.8, A:1, FF:1},
        10: {pt:6.8, FT:1, FF:1, DS:2},
        11: {pt:1.2, FD:1},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "81005": {
    id: 81005,
    id_time: 2305,
    time: "MIR",
    pos: "ATA",
    nome: "ANDRÉ LUIS",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:1.5, FS:3},
        7: {pt:0},
        8: {pt:"-"},
        9: {pt:-1, CA:1},
        10: {pt:0.8, FF:1},
        11: {pt:-0.3, FC:1},
        12: {pt:7.3, G:1, FS:1, FC:4},
        13: {pt:2, FF:1, FS:3, FC:1},
      }
    }
  },
  "84042": {
    id: 84042,
    id_time: 2305,
    time: "MIR",
    pos: "ATA",
    nome: "TIQUINHO SOARES",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:1.2, DS:1, FC:1},
        7: {pt:3.1, FD:2, FS:2, FC:1},
        8: {pt:2.7, FF:1, FS:1, I:1, DS:1},
        9: {pt:0.7, FF:2, FS:2, CA:1, FC:3},
        10: {pt:2.8, FF:1, FS:1, DS:1},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:0.5, FF:1, FC:1},
      }
    }
  },
  "86410": {
    id: 86410,
    id_time: 2305,
    time: "MIR",
    pos: "LAT",
    nome: "VICTOR LUIS",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:1.3, FF:1, FS:1},
        7: {pt:0.2, DS:1, CA:1, FC:1},
        8: {pt:"-"},
        9: {pt:4.4, FS:1, DS:3, FC:2},
        10: {pt:"-"},
        11: {pt:-1.5, FF:1, CA:1, FC:1, PC:1},
        12: {pt:0},
        13: {pt:"-"},
      }
    }
  },
  "88393": {
    id: 88393,
    id_time: 262,
    time: "FLA",
    pos: "LAT",
    nome: "AYRTON LUCAS",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:5.9, DS:1, SG:1, FC:2},
        7: {pt:6.2, DS:1, SG:1, FC:1},
        8: {pt:1, FF:1, FS:1, FC:1},
        9: {pt:0.9, FD:1, FC:1},
        10: {pt:1.2, FD:1},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:6.5, DS:1, SG:1},
      }
    }
  },
  "94286": {
    id: 94286,
    id_time: 315,
    time: "CHA",
    pos: "ATA",
    nome: "PEROTTI",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:0.2, FS:1, FC:1},
        7: {pt:0.2, FS:1, FC:1},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "97520": {
    id: 97520,
    id_time: 2305,
    time: "MIR",
    pos: "MEI",
    nome: "SHAYLON",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:-0.3, FC:1},
        7: {pt:0},
        8: {pt:1.5, DS:1},
        9: {pt:9.5, G:1, DS:1},
        10: {pt:2.1, FD:1, DS:1, FC:2},
        11: {pt:-0.3, FC:1},
        12: {pt:4.5, DS:3},
        13: {pt:0},
      }
    }
  },
  "97899": {
    id: 97899,
    id_time: 285,
    time: "INT",
    pos: "LAT",
    nome: "MATHEUS BAHIA",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:1.7, FS:1, DS:1, FC:1},
        7: {pt:-0.6, FC:2},
        8: {pt:5.2, DS:1, SG:1, CA:1, FC:1},
        9: {pt:"-"},
        10: {pt:4.1, SG:1, FC:3},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:0},
      }
    }
  },
  "97900": {
    id: 97900,
    id_time: 262,
    time: "FLA",
    pos: "ZAG",
    nome: "VITÃO",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:6.5, DS:1, SG:1},
        7: {pt:"-"},
        8: {pt:-1.6, CA:1, FC:2},
        9: {pt:0.8, FF:1},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "98280": {
    id: 98280,
    id_time: 263,
    time: "BOT",
    pos: "ZAG",
    nome: "BASTOS",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:-0.1, FS:1, FC:2},
        7: {pt:0},
        8: {pt:"-"},
        9: {pt:1.7, DS:2, CA:1, FC:1},
        10: {pt:"-"},
        11: {pt:2.4, DS:2, FC:2},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "140906": {
    id: 140906,
    id_time: 280,
    time: "RBB",
    pos: "ATA",
    nome: "DAVI GOMES",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:6.2, FT:1, FD:2, FF:1},
        8: {pt:2.3, FF:1, DS:1},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "143153": {
    id: 143153,
    id_time: 287,
    time: "VIT",
    pos: "ATA",
    nome: "TARZIA",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:0},
        8: {pt:0.9, FD:1, FC:1},
        9: {pt:0},
        10: {pt:3.4, FD:1, FF:1, FS:1, DS:1, FC:2},
        11: {pt:-1.3, CA:1, FC:1},
        12: {pt:0},
        13: {pt:0},
      }
    }
  },
  "143350": {
    id: 143350,
    id_time: 283,
    time: "CRU",
    pos: "MEI",
    nome: "MURILO RHIKMAN",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:0.5, FS:1},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "145400": {
    id: 145400,
    id_time: 280,
    time: "RBB",
    pos: "LAT",
    nome: "CAUÊ",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:5.5, FF:2, DS:3, FC:2},
        8: {pt:"-"},
        9: {pt:5, SG:1},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "146430": {
    id: 146430,
    id_time: 263,
    time: "BOT",
    pos: "ZAG",
    nome: "JUSTINO",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:2, FS:1, DS:1},
        8: {pt:0},
        9: {pt:3, DS:2},
        10: {pt:-1, CA:1},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "146991": {
    id: 146991,
    id_time: 283,
    time: "CRU",
    pos: "MEI",
    nome: "RHUAN GABRIEL",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:1.2, FS:3, FC:1},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "72018": {
    id: 72018,
    id_time: 280,
    time: "RBB",
    pos: "GOL",
    nome: "TIAGO VOLPI",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:5.8, DE:6, GS:2},
        8: {pt:"-"},
        9: {pt:6.3, SG:1, DE:1},
        10: {pt:8.9, SG:1, DE:3},
        11: {pt:4.5, DE:5, GS:2},
        12: {pt:0.6, DE:2, GS:2},
        13: {pt:1.6, DE:2, GS:1},
      }
    }
  },
  "73318": {
    id: 73318,
    id_time: 2305,
    time: "MIR",
    pos: "LAT",
    nome: "DANIEL BORGES",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:1.3, FF:1, FS:1},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "91971": {
    id: 91971,
    id_time: 283,
    time: "CRU",
    pos: "TEC",
    nome: "WESLEY CARVALHO",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:2.75},
        8: {pt:4.23},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "92087": {
    id: 92087,
    id_time: 282,
    time: "CAM",
    pos: "ZAG",
    nome: "LYANCO",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:5, SG:1},
        8: {pt:"-"},
        9: {pt:10.5, FF:1, FS:1, DS:3, SG:1, FC:1},
        10: {pt:"-"},
        11: {pt:-1, CA:1},
        12: {pt:0.6, FF:1, FS:1, DS:1, CA:1, FC:4},
        13: {pt:"-"},
      }
    }
  },
  "95131": {
    id: 95131,
    id_time: 364,
    time: "REM",
    pos: "ATA",
    nome: "GABRIEL TALIARI",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:0.9, FS:3, FC:2},
        8: {pt:19.3, G:2, FD:1, FF:1, FS:1, I:1, DS:1, FC:2},
        9: {pt:4.2, FD:1, FF:2, FS:3, I:1},
        10: {pt:6.7, FD:1, FF:1, FS:1, DS:3, FC:1},
        11: {pt:2.9, FD:1, FF:1, FS:3, FC:2},
        12: {pt:9.8, G:1, FS:2, I:1, DS:1, FC:2},
        13: {pt:"-"},
      }
    }
  },
  "96353": {
    id: 96353,
    id_time: 263,
    time: "BOT",
    pos: "ATA",
    nome: "JOAQUÍN CORREA",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:-0.5, FS:1, CA:1},
        8: {pt:3.6, FF:2, FS:2, PS:1},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:5, A:1},
        13: {pt:0.2, DS:1, CA:1, FC:1},
      }
    }
  },
  "100969": {
    id: 100969,
    id_time: 287,
    time: "VIT",
    pos: "MEI",
    nome: "RONALD LOPES",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:-0.6, FC:2},
        9: {pt:"-"},
        10: {pt:-1.9, CA:1, FC:3},
        11: {pt:0},
        12: {pt:0.8, FF:1},
        13: {pt:0.8, FF:1},
      }
    }
  },
  "102877": {
    id: 102877,
    id_time: 364,
    time: "REM",
    pos: "ATA",
    nome: "GABRIEL POVEDA",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:0},
        9: {pt:2, FS:1, DS:1},
        10: {pt:"-"},
        11: {pt:0},
        12: {pt:-0.6, FC:2},
        13: {pt:1, FF:1, FS:1, FC:1},
      }
    }
  },
  "104204": {
    id: 104204,
    id_time: 2305,
    time: "MIR",
    pos: "ATA",
    nome: "EDSON CARIOCA",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:1.5, FF:1, FS:1, DS:1, CA:1, FC:1},
        9: {pt:0.8, FF:1},
        10: {pt:1.3, FF:2, FC:1},
        11: {pt:2.7, FF:2, DS:2, CA:1, FC:3},
        12: {pt:-0.3, FC:1},
        13: {pt:0},
      }
    }
  },
  "146374": {
    id: 146374,
    id_time: 293,
    time: "CAP",
    pos: "LAT",
    nome: "GILBERTO",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:6.2, DS:1, SG:1, FC:1},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:11.4, FD:1, FS:2, DS:3, SG:1, FC:1},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "42411": {
    id: 42411,
    id_time: 277,
    time: "SAN",
    pos: "TEC",
    nome: "CUCA",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:4.64},
        9: {pt:8.54, V:1},
        10: {pt:3.56},
        11: {pt:8.65, V:1},
        12: {pt:4.22},
        13: {pt:4.28},
      }
    }
  },
  "69783": {
    id: 69783,
    id_time: 262,
    time: "FLA",
    pos: "ZAG",
    nome: "DANILO",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:1.5, DS:1},
        9: {pt:0},
        10: {pt:"-"},
        11: {pt:0},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "74187": {
    id: 74187,
    id_time: 277,
    time: "SAN",
    pos: "MEI",
    nome: "RINCÓN",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:-1.6, CA:1, FC:2},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:0.2, FS:1, FC:1},
      }
    }
  },
  "85425": {
    id: 85425,
    id_time: 265,
    time: "BAH",
    pos: "GOL",
    nome: "JOÃO PAULO",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:1.7, FS:1, DE:4, GS:4},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "89368": {
    id: 89368,
    id_time: 284,
    time: "GRE",
    pos: "ATA",
    nome: "BRAITHWAITE",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:1.2, FD:1},
        9: {pt:0.2, FS:1, FC:1},
        10: {pt:1.5, DS:1},
        11: {pt:-0.3, FC:1},
        12: {pt:0.8, FF:1},
        13: {pt:-0.3, FC:1},
      }
    }
  },
  "90061": {
    id: 90061,
    id_time: 315,
    time: "CHA",
    pos: "LAT",
    nome: "BRUNO PACHECO",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:0.5, FS:1},
        9: {pt:"-"},
        10: {pt:0.2, FS:1, FC:1},
        11: {pt:1.5, DS:1},
        12: {pt:6.7, FS:2, DS:4, FC:1},
        13: {pt:"-"},
      }
    }
  },
  "93368": {
    id: 93368,
    id_time: 277,
    time: "SAN",
    pos: "ZAG",
    nome: "LUCAS VERÍSSIMO",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:5.1, FS:1, I:1, SG:1, FC:1},
        9: {pt:11.5, FF:1, DS:4, SG:1, FC:1},
        10: {pt:2, FF:1, DS:1, FC:1},
        11: {pt:7.7, FD:1, DS:1, SG:1},
        12: {pt:0.8, DS:2, CA:1, FC:4},
        13: {pt:4, FS:2, DS:2},
      }
    }
  },
  "101820": {
    id: 101820,
    id_time: 364,
    time: "REM",
    pos: "LAT",
    nome: "MAYK",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:3.8, FF:1, DS:2},
        10: {pt:8, DS:2, SG:1},
        11: {pt:0.9, DS:1, FC:2},
        12: {pt:2.5, FS:2, DS:1},
        13: {pt:2, FS:1, DS:1},
      }
    }
  },
  "107256": {
    id: 107256,
    id_time: 287,
    time: "VIT",
    pos: "MEI",
    nome: "ZÉ VITOR",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:5, FF:1, DS:3, FC:1},
        10: {pt:0.6, DS:1, FC:3},
        11: {pt:2, FF:1, DS:1, FC:1},
        12: {pt:0.9, FD:1, FC:1},
        13: {pt:0.2, FS:3, DS:1, CA:1, FC:6},
      }
    }
  },
  "107516": {
    id: 107516,
    id_time: 315,
    time: "CHA",
    pos: "ATA",
    nome: "ÊNIO",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:1, FS:2},
        10: {pt:5.6, FD:2, FS:7, FC:1},
        11: {pt:1.3, FS:3, I:2},
        12: {pt:"-"},
        13: {pt:8.4, G:1, FD:1, FS:1, CA:1, FC:1},
      }
    }
  },
  "111683": {
    id: 111683,
    id_time: 285,
    time: "INT",
    pos: "GOL",
    nome: "ANTHONI",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:1.6, DE:2, GS:1},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:-0.7, DE:1, GS:2},
        13: {pt:5, FS:1, DE:5, GS:2},
      }
    }
  },
  "121823": {
    id: 121823,
    id_time: 264,
    time: "COR",
    pos: "GOL",
    nome: "KAUÊ",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:4.8, DE:6, GS:3},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:13.6, FS:1, SG:1, DE:7, CA:1},
      }
    }
  },
  "123016": {
    id: 123016,
    id_time: 364,
    time: "REM",
    pos: "MEI",
    nome: "DAVID BRAGA",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:2.2, FS:2, DS:1, FC:1},
        10: {pt:2.2, FS:1, DS:2, CA:1, FC:1},
        11: {pt:5, FS:1, DS:3},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "127273": {
    id: 127273,
    id_time: 283,
    time: "CRU",
    pos: "TEC",
    nome: "ARTUR JORGE",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:9.78, V:1},
        10: {pt:3.68},
        11: {pt:6.78, V:1},
        12: {pt:8.58, V:1},
        13: {pt:7.21, V:1},
      }
    }
  },
  "130209": {
    id: 130209,
    id_time: 287,
    time: "VIT",
    pos: "ATA",
    nome: "RENÊ",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:2.2, FS:2, DS:1, FC:1},
        10: {pt:3.7, FD:1, FS:2, DS:1},
        11: {pt:1.7, FD:1, FS:1},
        12: {pt:2.9, FF:1, FS:2, I:1, DS:1, FC:1},
        13: {pt:12.5, G:1, FF:1, FS:2, DS:2, FC:1},
      }
    }
  },
  "130232": {
    id: 130232,
    id_time: 263,
    time: "BOT",
    pos: "LAT",
    nome: "CAIO ROQUE",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:1.5, DS:1},
        10: {pt:7.5, A:1, FS:2, DS:1},
        11: {pt:3, DS:2},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "141405": {
    id: 141405,
    id_time: 267,
    time: "VAS",
    pos: "LAT",
    nome: "AVELLAR",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:1.5, DS:1},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "141594": {
    id: 141594,
    id_time: 284,
    time: "GRE",
    pos: "LAT",
    nome: "PEDRO GABRIEL",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:2.2, FF:1, DS:2, CA:1, FC:2},
        10: {pt:4.7, SG:1, FC:1},
        11: {pt:3.3, FS:1, SG:1, CA:1, FC:4},
        12: {pt:5.7, FD:1, DS:3},
        13: {pt:6.8, FD:2, SG:1, FC:2},
      }
    }
  },
  "142260": {
    id: 142260,
    id_time: 284,
    time: "GRE",
    pos: "MEI",
    nome: "BERNARDO ZORTEA",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:0},
        10: {pt:1, FF:1, DS:1, FC:1, PC:1},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "147090": {
    id: 147090,
    id_time: 282,
    time: "CAM",
    pos: "LAT",
    nome: "KAUÃ PASCINI",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:5, SG:1},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:1.5, DS:1},
      }
    }
  },
  "147850": {
    id: 147850,
    id_time: 263,
    time: "BOT",
    pos: "TEC",
    nome: "RODRIGO BELLÃO",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:6.24, V:1},
        10: {pt:7.37, V:1},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "148717": {
    id: 148717,
    id_time: 276,
    time: "SAO",
    pos: "ATA",
    nome: "TETÊ",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:0},
        10: {pt:"-"},
        11: {pt:-1.3, CA:1, FC:1},
        12: {pt:-0.3, FC:1},
        13: {pt:"-"},
      }
    }
  },
  "68822": {
    id: 68822,
    id_time: 315,
    time: "CHA",
    pos: "GOL",
    nome: "RAFAEL SANTOS",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:1.2, DE:4, GS:4},
        10: {pt:8.1, DE:7, GS:1},
        11: {pt:4.5, DE:5, GS:2},
        12: {pt:1.2, DE:4, GS:4},
        13: {pt:"-"},
      }
    }
  },
  "79631": {
    id: 79631,
    id_time: 266,
    time: "FLU",
    pos: "ATA",
    nome: "CANO",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:0},
        10: {pt:1.6, FF:2},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "81720": {
    id: 81720,
    id_time: 264,
    time: "COR",
    pos: "ATA",
    nome: "LINGARD",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:2, FD:1, FF:1},
        10: {pt:-2.2, CA:1, FC:4},
        11: {pt:0},
        12: {pt:2, FS:1, DS:1},
        13: {pt:1.5, DS:1},
      }
    }
  },
  "94034": {
    id: 94034,
    id_time: 315,
    time: "CHA",
    pos: "ATA",
    nome: "KEVIN RAMÍREZ",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:1.2, FD:1},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:0.5, FS:1},
        13: {pt:"-"},
      }
    }
  },
  "97868": {
    id: 97868,
    id_time: 265,
    time: "BAH",
    pos: "LAT",
    nome: "IAGO",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:5, SG:1},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "97911": {
    id: 97911,
    id_time: 287,
    time: "VIT",
    pos: "ATA",
    nome: "LUCAS SILVA",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:0},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "103347": {
    id: 103347,
    id_time: 364,
    time: "REM",
    pos: "LAT",
    nome: "MATHEUS ALEXANDRE",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:6.5, DS:1, SG:1},
        11: {pt:"-"},
        12: {pt:0.2, FF:1, FC:2},
        13: {pt:"-"},
      }
    }
  },
  "78946": {
    id: 78946,
    id_time: 276,
    time: "SAO",
    pos: "ZAG",
    nome: "DÓRIA",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:0},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:5, SG:1},
      }
    }
  },
  "88717": {
    id: 88717,
    id_time: 315,
    time: "CHA",
    pos: "TEC",
    nome: "CELSO RODRIGUES",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:4.28},
        11: {pt:"-"},
        12: {pt:3.99},
        13: {pt:"-"},
      }
    }
  },
  "92182": {
    id: 92182,
    id_time: 285,
    time: "INT",
    pos: "ZAG",
    nome: "JUNINHO",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:5, SG:1},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "94514": {
    id: 94514,
    id_time: 2305,
    time: "MIR",
    pos: "ZAG",
    nome: "LUCAS OLIVEIRA",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:1.4, I:1, DS:1},
        11: {pt:0.5, DS:1, CA:1},
        12: {pt:12, G:1, FS:1, DS:3, CA:1},
        13: {pt:0.5, FF:1, FC:1},
      }
    }
  },
  "103179": {
    id: 103179,
    id_time: 263,
    time: "BOT",
    pos: "ATA",
    nome: "CHRIS RAMOS",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:1.6, FF:2},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "107771": {
    id: 107771,
    id_time: 315,
    time: "CHA",
    pos: "TEC",
    nome: "FÁBIO MATIAS",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:2.11},
        12: {pt:3.99},
        13: {pt:3.48},
      }
    }
  },
  "131964": {
    id: 131964,
    id_time: 263,
    time: "BOT",
    pos: "LAT",
    nome: "JHOAN HERNÁNDEZ",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:0},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "141609": {
    id: 141609,
    id_time: 276,
    time: "SAO",
    pos: "ATA",
    nome: "LUCCA",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:0},
        12: {pt:1.2, DS:1, FC:1},
        13: {pt:-0.3, FC:1},
      }
    }
  },
  "147089": {
    id: 147089,
    id_time: 282,
    time: "CAM",
    pos: "ATA",
    nome: "CAUÃ SOARES",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:1.7, FD:1, FS:1},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "149990": {
    id: 149990,
    id_time: 263,
    time: "BOT",
    pos: "TEC",
    nome: "FRANCLIM CARVALHO",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:5.06},
        12: {pt:8.58, V:1},
        13: {pt:6.04},
      }
    }
  },
  "149994": {
    id: 149994,
    id_time: 280,
    time: "RBB",
    pos: "ATA",
    nome: "JHUAN NUNES",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:2.3, FF:1, DS:1},
        12: {pt:"-"},
        13: {pt:"-"},
      }
    }
  },
  "124674": {
    id: 124674,
    id_time: 276,
    time: "SAO",
    pos: "MEI",
    nome: "FELIPE NEGRUCCI",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:-0.6, FC:2},
        13: {pt:"-"},
      }
    }
  },
  "133679": {
    id: 133679,
    id_time: 275,
    time: "PAL",
    pos: "ZAG",
    nome: "BENEDETTI",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:4.7, SG:1, FC:1},
        13: {pt:"-"},
      }
    }
  },
  "140484": {
    id: 140484,
    id_time: 266,
    time: "FLU",
    pos: "ATA",
    nome: "RIQUELME FELIPE",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:1.7, FS:1, DS:1, FC:1},
        13: {pt:"-"},
      }
    }
  },
  "149715": {
    id: 149715,
    id_time: 277,
    time: "SAN",
    pos: "LAT",
    nome: "RAFAEL GONZAGA",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:2.4, DS:2, FC:2},
        13: {pt:"-"},
      }
    }
  },
  "79066": {
    id: 79066,
    id_time: 2305,
    time: "MIR",
    pos: "GOL",
    nome: "ALEX MURALHA",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:-1, CA:1},
        13: {pt:"-"},
      }
    }
  },
  "80061": {
    id: 80061,
    id_time: 262,
    time: "FLA",
    pos: "MEI",
    nome: "SAÚL",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:6.5, A:1, DS:1},
        13: {pt:1.2, DS:1, FC:1},
      }
    }
  },
  "102906": {
    id: 102906,
    id_time: 315,
    time: "CHA",
    pos: "GOL",
    nome: "ANDERSON",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:11.5, FS:1, DE:10, GS:2},
      }
    }
  },
  "110698": {
    id: 110698,
    id_time: 293,
    time: "CAP",
    pos: "GOL",
    nome: "MYCAEL",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:-1, CA:1},
      }
    }
  },
  "113690": {
    id: 113690,
    id_time: 277,
    time: "SAN",
    pos: "GOL",
    nome: "DIÓGENES",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:0.9, DE:3, CA:1, GS:2},
      }
    }
  },
  "130889": {
    id: 130889,
    id_time: 284,
    time: "GRE",
    pos: "MEI",
    nome: "RIQUELME",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:-0.3, FC:1},
      }
    }
  },
  "137618": {
    id: 137618,
    id_time: 285,
    time: "INT",
    pos: "ZAG",
    nome: "CLAYTON SAMPAIO",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:-1, CA:1},
      }
    }
  },
  "145563": {
    id: 145563,
    id_time: 277,
    time: "SAN",
    pos: "ZAG",
    nome: "JOÃO ANANIAS",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:4.5, DS:3},
      }
    }
  },
  "83048": {
    id: 83048,
    id_time: 315,
    time: "CHA",
    pos: "ZAG",
    nome: "RAFAEL THYERE",
    scouts: {
      rdd: {
        1: {pt:"-"},
        2: {pt:"-"},
        3: {pt:"-"},
        4: {pt:"-"},
        5: {pt:"-"},
        6: {pt:"-"},
        7: {pt:"-"},
        8: {pt:"-"},
        9: {pt:"-"},
        10: {pt:"-"},
        11: {pt:"-"},
        12: {pt:"-"},
        13: {pt:-0.3, FC:1},
      }
    }
  },
};