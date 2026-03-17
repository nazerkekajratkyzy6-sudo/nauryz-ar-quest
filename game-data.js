window.GAME = {
  gameCode: "NAURYZ2026",
  durationSeconds: 600, // 10 минут

  floors: {
    floor1: ["M01", "M02", "M03", "M04"],
    floor2: ["M05", "M06", "M07", "M08"],
    floor3: ["M09", "M10", "M11", "M12"],
    final: ["M13"]
  },

  markers: {
    M01: {
      id: "M01",
      title: "Видео 1",
      floor: 1,
      mediaType: "video",
      mediaUrl: "./assets/video1.mp4",
      rare: false,
      bonus: false,
      arShape: "box",
      arColor: "#f59e0b",
      questions: [
        {
          text: "Бейне бойынша жауап жазыңыз.",
          acceptedAnswers: ["шашу"],
          points: 1
        },
        {
          text: "Ұзатылған қыздың соңынан баратын жасау мен сый-сияпат қалай аталады?",
          acceptedAnswers: ["жасау", "приданое"],
          points: 1
        }
      ]
    },

    M02: {
      id: "M02",
      title: "Видео 2",
      floor: 1,
      mediaType: "video",
      mediaUrl: "./assets/video2.mp4",
      rare: false,
      bonus: false,
      arShape: "sphere",
      arColor: "#22c55e",
      questions: [
        {
          text: "Бейне бойынша жауап жазыңыз.",
          acceptedAnswers: [
            "азан шақырып ат қою",
            "ат қою",
            "азанмен ат қою",
            "имянаречение"
          ],
          points: 1
        },
        {
          text: "Сәби алғашқы қадамын басқанда, тез жүріп кетсін деген ниетпен жасалатын салт қалай аталады?",
          acceptedAnswers: ["тұсаукесер", "тусаукесер"],
          points: 1
        }
      ]
    },

    M03: {
      id: "M03",
      title: "Видео 3",
      floor: 1,
      mediaType: "video",
      mediaUrl: "./assets/video3.mp4",
      rare: false,
      bonus: false,
      arShape: "cone",
      arColor: "#3b82f6",
      questions: [
        {
          text: "Бейне бойынша жауап жазыңыз.",
          acceptedAnswers: ["сүйінші", "суйінші", "суйинши"],
          points: 1
        },
        {
          text: "Баланың ата-анасына, ата-әжесіне немесе үлкендерге көрсетілетін құрмет пен ілтипат қалай аталады?",
          acceptedAnswers: ["әдептілік", "әдеп", "ізет", "изет", "уважение"],
          points: 1
        }
      ]
    },

    M04: {
      id: "M04",
      title: "Видео 4",
      floor: 1,
      mediaType: "video",
      mediaUrl: "./assets/video4.mp4",
      rare: true,
      bonus: false,
      arShape: "torus",
      arColor: "#fde047",
      questions: [
        {
          text: "Бейне бойынша жауап жазыңыз.",
          acceptedAnswers: ["ат тергеу"],
          points: 2
        },
        {
          text: "Ұзатылатын қыздың басына кигізілетін, биік әрі әшекейленген қазақтың дәстүрлі бас киімі қалай аталады?",
          acceptedAnswers: ["сәукеле", "саукеле"],
          points: 2
        }
      ]
    },

    M05: {
      id: "M05",
      title: "Аудио 1",
      floor: 2,
      mediaType: "audio",
      mediaUrl: "./assets/audio1.mp3",
      rare: false,
      bonus: false,
      arShape: "box",
      arColor: "#ef4444",
      questions: [
        {
          text: "Аудио бойынша жауап жазыңыз.",
          acceptedAnswers: ["селт еткізер", "селт еткизер"],
          points: 1
        },
        {
          text: "Сыйлықты кім береді? (бір сөз)",
          acceptedAnswers: ["жігіт", "жигит", "парень"],
          points: 1
        }
      ]
    },

    M06: {
      id: "M06",
      title: "Аудио 2",
      floor: 2,
      mediaType: "audio",
      mediaUrl: "./assets/audio2.mp3",
      rare: false,
      bonus: false,
      arShape: "sphere",
      arColor: "#8b5cf6",
      questions: [
        {
          text: "Аудио бойынша жауап жазыңыз.",
          acceptedAnswers: ["наурызнама"],
          points: 1
        },
        {
          text: "Наурызнамадағы алғашқы күн қалай аталады?",
          acceptedAnswers: ["көріс", "көрісу", "амал", "корис", "амал күні"],
          points: 1
        }
      ]
    },

    M07: {
      id: "M07",
      title: "Аудио 3",
      floor: 2,
      mediaType: "audio",
      mediaUrl: "./assets/audio3.mp3",
      rare: false,
      bonus: false,
      arShape: "cone",
      arColor: "#06b6d4",
      questions: [
        {
          text: "Аудио бойынша жауап жазыңыз.",
          acceptedAnswers: ["ұйқышашар", "уйқышашар", "уйкышашар"],
          points: 1
        },
        {
          text: "Жауап ретінде қандай дәстүр жасалады?",
          acceptedAnswers: ["селт еткізер", "селт еткизер"],
          points: 1
        }
      ]
    },

    M08: {
      id: "M08",
      title: "Аудио 4",
      floor: 2,
      mediaType: "audio",
      mediaUrl: "./assets/audio4.mp3",
      rare: false,
      bonus: false,
      arShape: "box",
      arColor: "#84cc16",
      questions: [
        {
          text: "Аудиодан естіген санды жазыңыз.",
          acceptedAnswers: ["7", "жеті", "жети", "семь"],
          points: 1
        },
        {
          text: "Бұл тағам көбіне қандай ыдыста дайындалады?",
          acceptedAnswers: ["қазан", "казан"],
          points: 1
        }
      ]
    },

    M09: {
      id: "M09",
      title: "Фото 1",
      floor: 3,
      mediaType: "image",
      mediaUrl: "./assets/photo1.jpg",
      rare: false,
      bonus: false,
      arShape: "sphere",
      arColor: "#f97316",
      questions: [
        {
          text: "Бұл қандай ойын?",
          acceptedAnswers: ["алтыбақан", "алтыбакан"],
          points: 1
        },
        {
          text: "Бұл ойын көбінесе кімдер арасында ойналады? (бір сөз)",
          acceptedAnswers: ["жастар", "молодежь", "жас"],
          points: 1
        }
      ]
    },

    M10: {
      id: "M10",
      title: "Фото 2",
      floor: 3,
      mediaType: "image",
      mediaUrl: "./assets/photo2.jpg",
      rare: false,
      bonus: false,
      arShape: "cone",
      arColor: "#14b8a6",
      questions: [
        {
          text: "Бұл қандай дәстүр?",
          acceptedAnswers: ["бата беру", "бата"],
          points: 1
        },
        {
          text: "Бұл дәстүрде не беріледі? (бір сөз, материалдық емес)",
          acceptedAnswers: ["тілек", "пожелание", "бата"],
          points: 1
        }
      ]
    },

    M11: {
      id: "M11",
      title: "Фото 3",
      floor: 3,
      mediaType: "image",
      mediaUrl: "./assets/photo3.jpg",
      rare: false,
      bonus: false,
      arShape: "box",
      arColor: "#e879f9",
      questions: [
        {
          text: "Бұл қандай дәстүр?",
          acceptedAnswers: ["дәм тату", "дәмтату", "угощение"],
          points: 1
        },
        {
          text: "Бұл дәстүрдің негізгі мағынасы не? (бір сөз)",
          acceptedAnswers: ["бөлісу", "болису", "делиться", "дележ"],
          points: 1
        }
      ]
    },

    M12: {
      id: "M12",
      title: "Фото 4",
      floor: 3,
      mediaType: "image",
      mediaUrl: "./assets/photo4.jpg",
      rare: true,
      bonus: false,
      arShape: "torus",
      arColor: "#facc15",
      questions: [
        {
          text: "Бұл қандай күн?",
          acceptedAnswers: ["тазару күні", "тазарту күні", "тазару", "день очищения"],
          points: 2
        },
        {
          text: "Бұл күні адамдар нені “тастайды”? (бір сөз, тура емес мағына)",
          acceptedAnswers: ["реніш", "обида", "өкпе", "өкпe"],
          points: 2
        }
      ]
    },

    M13: {
      id: "M13",
      title: "Финалдық бонус",
      floor: 0,
      mediaType: "image",
      mediaUrl: "./assets/photo4.jpg",
      rare: true,
      bonus: true,
      arShape: "octahedron",
      arColor: "#facc15",
      bonusPoints: 5
    }
  }
};