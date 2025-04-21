
// Patient data model based on the physical examination form

// Basic patient identification
export interface PatientIdentification {
  name: string;
  birthDate: string;
  age: number;
  gender: 'F' | 'M' | '';
  children: number;
  race: string;
  education: string;
  profession: string;
  civilStatus: string;
  nationality: string;
  housingType: 'Alvenaria' | 'Madeira' | 'Alugada' | 'Própria' | 'Cedida' | 'Outros' | '';
  otherHousingType?: string;
  residentsCount: number;
  hasWater: boolean;
  hasSewage: boolean;
  hasSepticTank: boolean;
  hasElectricity: boolean;
  familyIncome: string;
}

// Habits and customs section
export interface PatientHabits {
  religion: string;
  practicesReligion: boolean;
  smoker: boolean;
  cigarettesPerDay: number;
  drugUser: boolean;
  drugType: string;
  drugFrequency: string;
  alcoholUser: boolean;
  alcoholSocially: boolean;
  alcoholQuantity: string;
  alcoholFrequency: string;
  appetite: 'Preservado' | 'Diminuído' | '';
  mealsPerDay: number;
  preferredFoods: string[];
  feedingProblems: {
    chewing: boolean;
    swallowing: boolean;
    digestion: boolean;
    nausea: boolean;
    pyrosis: boolean;
  };
  dailyWaterIntake: number;
  recreation: {
    tv: boolean;
    newspaper: boolean;
    books: boolean;
    music: boolean;
    other: boolean;
    otherDescription: string;
  };
  physicalActivity: boolean;
  activityType: string;
  activityFrequency: string;
  sleepDifficulties: boolean;
  normalSleepHours: number;
  sexuallyActive: boolean;
  sexFrequency: string;
  sexChanges: string;
  painDuringSex: string;
  contraceptiveUse: string;
}

// Personal medical history
export interface PersonalMedicalHistory {
  chronicDiseases: {
    diabetes: boolean;
    hypertension: boolean;
    kidneyFailure: boolean;
    cancer: boolean;
    obesity: boolean;
    respiratoryDiseases: boolean;
    respiratoryDescription: string;
    heartDiseases: boolean;
    heartDescription: string;
    other: boolean;
    otherDescription: string;
  };
  previousHospitalizations: boolean;
  hospitalizationReason: string;
  hospitalizationDate: string;
  previousSurgeries: boolean;
  surgeryReason: string;
  surgeryDate: string;
  allergies: boolean;
  allergen: string;
  allergyManifestations: string;
  menstrualCycle: 'Regular' | 'Irregular' | '';
  menstrualObservations: string;
  medicationUse: boolean;
  medications: string;
  medicationTime: string;
  vaccineSchedule: boolean;
  ageAppropriateVaccines: boolean;
  observations: string;
}

// Family history
export interface FamilyMedicalHistory {
  diabetes: { has: boolean; relationship: string };
  hypertension: { has: boolean; relationship: string };
  kidneyFailure: { has: boolean; relationship: string };
  cancer: { has: boolean; relationship: string };
  obesity: { has: boolean; relationship: string };
  respiratoryDiseases: { has: boolean; relationship: string; description: string };
  heartDiseases: { has: boolean; relationship: string; description: string };
  other: { has: boolean; relationship: string; description: string };
}

// Chief complaint
export interface ChiefComplaint {
  description: string;
}

// Physical examination - Vital signs and anthropometric data
export interface VitalSigns {
  bloodPressure: string;
  heartRate: number;
  respiratoryRate: number;
  temperature: number;
  weight: number;
  height: number;
  chestCircumference: number;
  waistCircumference: number;
  hipCircumference: number;
  bmi: number;
  observations: string;
}

// Neurological examination
export interface NeurologicalExam {
  glasgowScale: number;
  sedated: boolean;
  pupils: 'Isocóricas' | 'Anisocóricas' | 'Midríase' | 'Miose' | '';
  photoreactivity: boolean;
  consciousnessLevel: 'Consciente' | 'Inconsciente' | 'Orientado' | 'Desorientado' | 'Torporoso' | 'Prostado' | 'Apático' | '';
  emotionalState: 'Medo' | 'Ansioso' | 'Depressivo' | 'Calmo' | 'Agitado' | 'Triste' | 'Alegre' | '';
  selfCare: 'Dependente' | 'Parcialmente dependente' | 'Independente' | '';
}

// Body care and appearance
export interface BodyCare {
  bodyCare: 'Adequado' | 'Inadequado' | '';
  bodyHygiene: 'Aspersão' | 'Imersão' | 'Horário M' | 'Horário T' | '';
  frequency: number;
  oralHygiene: {
    teeth: boolean;
    noTeeth: boolean;
    partialTeethAbsence: boolean;
    prosthesis: boolean;
    braces: boolean;
    other: boolean;
    otherDescription: string;
    product: string;
    frequency: number;
  };
  appearance: {
    anicteric: boolean;
    icteric: boolean;
    icterusLevel: number;
    acyanotic: boolean;
    cyanotic: boolean;
    cyanosisLevel: number;
    flushed: boolean;
    palid: boolean;
    palidLevel: number;
    hydrated: boolean;
    dehydrated: boolean;
    dehydrationLevel: number;
    edema: boolean;
    edemaLevel: number;
    turgor: 'Preservado' | 'Diminuído' | '';
    turgorLevel: number;
    peripheralPerfusion: 'Preservado' | 'Diminuído' | 'Ausente' | '';
  };
}

// Head and neck examination
export interface HeadAndNeckExam {
  head: {
    normocephalic: boolean;
    microcephalic: boolean;
    macrocephalic: boolean;
    hydrocephalic: boolean;
  };
  skull: {
    symmetrical: boolean;
    asymmetrical: boolean;
  };
  facies: {
    down: boolean;
    basedowian: boolean;
    renal: boolean;
    hippocratic: boolean;
    cushingoid: boolean;
    parkinsonian: boolean;
  };
  eyes: {
    symmetrical: boolean;
    asymmetrical: boolean;
    conjunctivas: {
      hypochromatic: boolean;
      hypochromaticLevel: string;
      normochromatic: boolean;
      normochromaticLevel: string;
      hyperchromatic: boolean;
      hyperchromaticLevel: string;
    };
    tearing: boolean;
    eyeLidEdema: boolean;
    secretion: boolean;
  };
  hairyCover: {
    hair: {
      hygiene: 'Satisfatório' | 'Insatisfatório' | '';
      shine: boolean;
    };
    color: string;
    integrity: boolean;
    breakage: boolean;
    parasites: boolean;
    alopecia: boolean;
  };
  ears: {
    pavilionSymmetry: boolean;
    malformations: boolean;
    integrity: boolean;
    implantation: {
      hygiene: 'Satisfatória' | 'Insatisfatória' | '';
      observations: string;
    };
    externalAuditoryCanal: {
      integrity: boolean;
      hygiene: 'Satisfatória' | 'Insatisfatória' | '';
    };
  };
  nose: {
    symmetry: boolean;
    integrity: boolean;
    nasalFlow: boolean;
    hygiene: 'Satisfatória' | 'Insatisfatória' | '';
    secretion: boolean;
    aspect: string;
    color: string;
    septumDeviation: boolean;
    observations: string;
  };
  mouth: {
    lips: {
      generalAspect: string;
    };
    gums: {
      integrity: boolean;
      edema: boolean;
      dentition: 'Preservada' | 'Ausente' | 'Em formação' | '';
    };
    breath: string;
    tongue: {
      preserved: boolean;
      absent: boolean;
      size: string;
      mobility: 'Preservada' | 'Ausente' | '';
      aspect: 'Saburrosa' | 'Lisa' | '';
    };
  };
  throatAndOropharynx: {
    sialorrhea: boolean;
    moniliasis: boolean;
    fissures: boolean;
    bleeding: boolean;
    purulentPlaques: boolean;
    hyperemia: boolean;
    other: string;
  };
  neck: {
    mobility: string;
    muscleTone: string;
    lymphNodes: {
      location: string;
      size: string;
      consistency: string;
      sensitivity: string;
      skinChanges: string;
    };
  };
}

// Respiratory system examination
export interface RespiratoryExam {
  thorax: {
    symmetrical: boolean;
    asymmetrical: boolean;
    accessoryMuscles: boolean;
  };
  respirationType: 'Eupneico' | 'Dispneico' | 'Taquipneico' | 'Bradipneico' | 'Ortopneico' | '';
  breasts: {
    symmetrical: boolean;
    asymmetrical: boolean;
    examination: string;
  };
  shape: 'Normal' | 'Protruso' | 'Invertido' | 'Plano' | 'Protruso ao estímulo' | '';
  pulmonaryAuscultation: {
    vesicularSoundsRA: boolean;
    vesicularSoundsRD: boolean;
    vesicularSoundsRE: boolean;
    wheezing: boolean;
    rales: boolean;
    crackles: boolean;
  };
  thoracicExpansibility: 'Preservada' | 'Ausente' | '';
}

// Cardiovascular system examination
export interface CardiovascularExam {
  cardiacRhythm: 'Normocárdico' | 'Bradicárdico' | 'Taquicárdico' | '';
  pulse: 'Taquisfigmo' | 'Bradisfigmo' | 'Rítmico' | 'Arrítmico' | '';
  auscultation: {
    bcnfIn2T: boolean;
    b3Plus: boolean;
    b4Plus: boolean;
    murmurs: boolean;
  };
}

// Digestive system examination
export interface DigestiveExam {
  presence: {
    scars: boolean;
    striae: boolean;
    dilatedVeins: boolean;
    lesions: boolean;
    observations: string;
  };
  abdomen: 'Globoso' | 'Flácido' | 'Plano' | 'Escavado' | 'Distendido' | '';
  bowelSounds: {
    present: boolean;
    decreased: boolean;
    hyperactive: boolean;
    absent: boolean;
  };
  tympanism: {
    present: boolean;
    decreased: boolean;
    absent: boolean;
  };
  visceromegaly: {
    absent: boolean;
    present: boolean;
    location: string;
  };
  elimination: {
    present: boolean;
    absent: boolean;
    days: string;
  };
}

// Genitourinary system examination
export interface GenitourinaryExam {
  hygiene: 'Satisfatória' | 'Insatisfatória' | '';
  integrity: 'Preservada' | 'Ausente' | '';
  urine: {
    clear: boolean;
    cloudy: boolean;
    sediments: boolean;
    hematuria: boolean;
    anuria: boolean;
    polyuria: boolean;
    oliguria: boolean;
    dysuria: boolean;
    polyakiuria: boolean;
  };
}

// Limbs examination
export interface LimbsExam {
  upperLimbs: {
    inspection: {
      hematoma: boolean;
      ecchymosis: boolean;
      perfusion: boolean;
      hemorrhage: boolean;
    };
    palpation: {
      pain: boolean;
      painLocation: string;
      sensitivity: string;
      tonus: boolean;
      muscularTonus: string;
    };
    fractures: boolean;
    fracturesLocation: string;
    immobility: boolean;
    other: boolean;
    otherDescription: string;
  };
  lowerLimbs: {
    inspection: {
      hematoma: boolean;
      ecchymosis: boolean;
      perfusion: boolean;
      hemorrhage: boolean;
    };
    palpation: {
      pain: boolean;
      painLocation: string;
      sensitivity: string;
      tonus: boolean;
      muscularTonus: string;
    };
    fractures: boolean;
    fracturesLocation: string;
    immobility: boolean;
    other: boolean;
    otherDescription: string;
  };
}

// Complete patient record
export interface Patient {
  id: string;
  identification: PatientIdentification;
  habits: PatientHabits;
  personalHistory: PersonalMedicalHistory;
  familyHistory: FamilyMedicalHistory;
  chiefComplaint: ChiefComplaint;
  physicalExam: {
    vitalSigns: VitalSigns;
    neurological: NeurologicalExam;
    bodyCare: BodyCare;
    headAndNeck: HeadAndNeckExam;
    respiratory: RespiratoryExam;
    cardiovascular: CardiovascularExam;
    digestive: DigestiveExam;
    genitourinary: GenitourinaryExam;
    limbs: LimbsExam;
  };
  createdAt: string;
  updatedAt: string;
}

// Helper function to create a new empty patient record
export function createEmptyPatient(): Patient {
  return {
    id: crypto.randomUUID(),
    identification: {
      name: '',
      birthDate: '',
      age: 0,
      gender: '',
      children: 0,
      race: '',
      education: '',
      profession: '',
      civilStatus: '',
      nationality: '',
      housingType: '',
      residentsCount: 0,
      hasWater: false,
      hasSewage: false,
      hasSepticTank: false,
      hasElectricity: false,
      familyIncome: '',
    },
    habits: {
      religion: '',
      practicesReligion: false,
      smoker: false,
      cigarettesPerDay: 0,
      drugUser: false,
      drugType: '',
      drugFrequency: '',
      alcoholUser: false,
      alcoholSocially: false,
      alcoholQuantity: '',
      alcoholFrequency: '',
      appetite: '',
      mealsPerDay: 0,
      preferredFoods: [],
      feedingProblems: {
        chewing: false,
        swallowing: false,
        digestion: false,
        nausea: false,
        pyrosis: false,
      },
      dailyWaterIntake: 0,
      recreation: {
        tv: false,
        newspaper: false,
        books: false,
        music: false,
        other: false,
        otherDescription: '',
      },
      physicalActivity: false,
      activityType: '',
      activityFrequency: '',
      sleepDifficulties: false,
      normalSleepHours: 0,
      sexuallyActive: false,
      sexFrequency: '',
      sexChanges: '',
      painDuringSex: '',
      contraceptiveUse: '',
    },
    personalHistory: {
      chronicDiseases: {
        diabetes: false,
        hypertension: false,
        kidneyFailure: false,
        cancer: false,
        obesity: false,
        respiratoryDiseases: false,
        respiratoryDescription: '',
        heartDiseases: false,
        heartDescription: '',
        other: false,
        otherDescription: '',
      },
      previousHospitalizations: false,
      hospitalizationReason: '',
      hospitalizationDate: '',
      previousSurgeries: false,
      surgeryReason: '',
      surgeryDate: '',
      allergies: false,
      allergen: '',
      allergyManifestations: '',
      menstrualCycle: '',
      menstrualObservations: '',
      medicationUse: false,
      medications: '',
      medicationTime: '',
      vaccineSchedule: false,
      ageAppropriateVaccines: false,
      observations: '',
    },
    familyHistory: {
      diabetes: { has: false, relationship: '' },
      hypertension: { has: false, relationship: '' },
      kidneyFailure: { has: false, relationship: '' },
      cancer: { has: false, relationship: '' },
      obesity: { has: false, relationship: '' },
      respiratoryDiseases: { has: false, relationship: '', description: '' },
      heartDiseases: { has: false, relationship: '', description: '' },
      other: { has: false, relationship: '', description: '' },
    },
    chiefComplaint: {
      description: '',
    },
    physicalExam: {
      vitalSigns: {
        bloodPressure: '',
        heartRate: 0,
        respiratoryRate: 0,
        temperature: 0,
        weight: 0,
        height: 0,
        chestCircumference: 0,
        waistCircumference: 0,
        hipCircumference: 0,
        bmi: 0,
        observations: '',
      },
      neurological: {
        glasgowScale: 0,
        sedated: false,
        pupils: '',
        photoreactivity: false,
        consciousnessLevel: '',
        emotionalState: '',
        selfCare: '',
      },
      bodyCare: {
        bodyCare: '',
        bodyHygiene: '',
        frequency: 0,
        oralHygiene: {
          teeth: false,
          noTeeth: false,
          partialTeethAbsence: false,
          prosthesis: false,
          braces: false,
          other: false,
          otherDescription: '',
          product: '',
          frequency: 0,
        },
        appearance: {
          anicteric: false,
          icteric: false,
          icterusLevel: 0,
          acyanotic: false,
          cyanotic: false,
          cyanosisLevel: 0,
          flushed: false,
          palid: false,
          palidLevel: 0,
          hydrated: false,
          dehydrated: false,
          dehydrationLevel: 0,
          edema: false,
          edemaLevel: 0,
          turgor: '',
          turgorLevel: 0,
          peripheralPerfusion: '',
        },
      },
      headAndNeck: {
        head: {
          normocephalic: false,
          microcephalic: false,
          macrocephalic: false,
          hydrocephalic: false,
        },
        skull: {
          symmetrical: false,
          asymmetrical: false,
        },
        facies: {
          down: false,
          basedowian: false,
          renal: false,
          hippocratic: false,
          cushingoid: false,
          parkinsonian: false,
        },
        eyes: {
          symmetrical: false,
          asymmetrical: false,
          conjunctivas: {
            hypochromatic: false,
            hypochromaticLevel: '',
            normochromatic: false,
            normochromaticLevel: '',
            hyperchromatic: false,
            hyperchromaticLevel: '',
          },
          tearing: false,
          eyeLidEdema: false,
          secretion: false,
        },
        hairyCover: {
          hair: {
            hygiene: '',
            shine: false,
          },
          color: '',
          integrity: false,
          breakage: false,
          parasites: false,
          alopecia: false,
        },
        ears: {
          pavilionSymmetry: false,
          malformations: false,
          integrity: false,
          implantation: {
            hygiene: '',
            observations: '',
          },
          externalAuditoryCanal: {
            integrity: false,
            hygiene: '',
          },
        },
        nose: {
          symmetry: false,
          integrity: false,
          nasalFlow: false,
          hygiene: '',
          secretion: false,
          aspect: '',
          color: '',
          septumDeviation: false,
          observations: '',
        },
        mouth: {
          lips: {
            generalAspect: '',
          },
          gums: {
            integrity: false,
            edema: false,
            dentition: '',
          },
          breath: '',
          tongue: {
            preserved: false,
            absent: false,
            size: '',
            mobility: '',
            aspect: '',
          },
        },
        throatAndOropharynx: {
          sialorrhea: false,
          moniliasis: false,
          fissures: false,
          bleeding: false,
          purulentPlaques: false,
          hyperemia: false,
          other: '',
        },
        neck: {
          mobility: '',
          muscleTone: '',
          lymphNodes: {
            location: '',
            size: '',
            consistency: '',
            sensitivity: '',
            skinChanges: '',
          },
        },
      },
      respiratory: {
        thorax: {
          symmetrical: false,
          asymmetrical: false,
          accessoryMuscles: false,
        },
        respirationType: '',
        breasts: {
          symmetrical: false,
          asymmetrical: false,
          examination: '',
        },
        shape: '',
        pulmonaryAuscultation: {
          vesicularSoundsRA: false,
          vesicularSoundsRD: false,
          vesicularSoundsRE: false,
          wheezing: false,
          rales: false,
          crackles: false,
        },
        thoracicExpansibility: '',
      },
      cardiovascular: {
        cardiacRhythm: '',
        pulse: '',
        auscultation: {
          bcnfIn2T: false,
          b3Plus: false,
          b4Plus: false,
          murmurs: false,
        },
      },
      digestive: {
        presence: {
          scars: false,
          striae: false,
          dilatedVeins: false,
          lesions: false,
          observations: '',
        },
        abdomen: '',
        bowelSounds: {
          present: false,
          decreased: false,
          hyperactive: false,
          absent: false,
        },
        tympanism: {
          present: false,
          decreased: false,
          absent: false,
        },
        visceromegaly: {
          absent: false,
          present: false,
          location: '',
        },
        elimination: {
          present: false,
          absent: false,
          days: '',
        },
      },
      genitourinary: {
        hygiene: '',
        integrity: '',
        urine: {
          clear: false,
          cloudy: false,
          sediments: false,
          hematuria: false,
          anuria: false,
          polyuria: false,
          oliguria: false,
          dysuria: false,
          polyakiuria: false,
        },
      },
      limbs: {
        upperLimbs: {
          inspection: {
            hematoma: false,
            ecchymosis: false,
            perfusion: false,
            hemorrhage: false,
          },
          palpation: {
            pain: false,
            painLocation: '',
            sensitivity: '',
            tonus: false,
            muscularTonus: '',
          },
          fractures: false,
          fracturesLocation: '',
          immobility: false,
          other: false,
          otherDescription: '',
        },
        lowerLimbs: {
          inspection: {
            hematoma: false,
            ecchymosis: false,
            perfusion: false,
            hemorrhage: false,
          },
          palpation: {
            pain: false,
            painLocation: '',
            sensitivity: '',
            tonus: false,
            muscularTonus: '',
          },
          fractures: false,
          fracturesLocation: '',
          immobility: false,
          other: false,
          otherDescription: '',
        },
      },
    },
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
}
