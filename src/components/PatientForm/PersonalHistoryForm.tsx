
import { useState } from "react";
import FormSection from "./FormSection";
import { HeartPulse } from "lucide-react";
import { usePatient } from "@/contexts/PatientContext";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export function PersonalHistoryForm() {
  const { patient, updatePatient } = usePatient();
  const [isOpen, setIsOpen] = useState(true);
  const values = patient.personalHistory;

  // Boolean radio helpers
  const yesNoItems = [
    { label: "Sim", value: "true" },
    { label: "Não", value: "false" },
  ];

  function handleCheckboxChange(key: keyof typeof values.chronicDiseases) {
    updatePatient("personalHistory", {
      chronicDiseases: {
        ...values.chronicDiseases,
        [key]: !values.chronicDiseases[key],
      },
    });
  }

  return (
    <FormSection
      title="ANTECEDENTES PESSOAIS"
      icon={<HeartPulse className="h-5 w-5" />}
      isOpen={isOpen}
      onToggle={() => setIsOpen(!isOpen)}
    >
      {/* Doenças crônicas */}
      <div>
        <Label className="block mb-2 font-semibold">Doenças crônicas:</Label>
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          <label className="flex items-center gap-2">
            <Checkbox
              checked={values.chronicDiseases.diabetes}
              onCheckedChange={() => handleCheckboxChange("diabetes")}
            />
            DM
          </label>
          <label className="flex items-center gap-2">
            <Checkbox
              checked={values.chronicDiseases.hypertension}
              onCheckedChange={() => handleCheckboxChange("hypertension")}
            />
            HAS
          </label>
          <label className="flex items-center gap-2">
            <Checkbox
              checked={values.chronicDiseases.kidneyFailure}
              onCheckedChange={() => handleCheckboxChange("kidneyFailure")}
            />
            IRC
          </label>
          <label className="flex items-center gap-2">
            <Checkbox
              checked={values.chronicDiseases.cancer}
              onCheckedChange={() => handleCheckboxChange("cancer")}
            />
            Neoplasias
          </label>
          <label className="flex items-center gap-2">
            <Checkbox
              checked={values.chronicDiseases.obesity}
              onCheckedChange={() => handleCheckboxChange("obesity")}
            />
            Obesidade
          </label>
        </div>
      </div>

      {/* Doenças Respiratórias */}
      <div className="mt-4">
        <Label className="font-semibold">Doenças Respiratórias:</Label>
        <div className="flex items-center gap-2 mt-1">
          <Checkbox
            checked={values.chronicDiseases.respiratoryDiseases}
            onCheckedChange={() => handleCheckboxChange("respiratoryDiseases")}
          />
          <Input
            type="text"
            className="w-72"
            placeholder="Descreva"
            value={values.chronicDiseases.respiratoryDescription}
            onChange={(e) =>
              updatePatient("personalHistory", {
                chronicDiseases: {
                  ...values.chronicDiseases,
                  respiratoryDiseases: true,
                  respiratoryDescription: e.target.value,
                },
              })
            }
          />
        </div>
      </div>
      {/* Internações anteriores */}
      <div className="mt-4">
        <Label className="font-semibold">Internações anteriores:</Label>
        <RadioGroup
          className="flex flex-row gap-6 mt-1"
          value={values.previousHospitalizations ? "true" : "false"}
          onValueChange={(val) =>
            updatePatient("personalHistory", { previousHospitalizations: val === "true" })
          }
        >
          {yesNoItems.map((item) => (
            <label key={item.value} className="flex items-center gap-2">
              <RadioGroupItem value={item.value} />
              {item.label}
            </label>
          ))}
        </RadioGroup>
        {values.previousHospitalizations && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
            <Input
              placeholder="Motivo"
              value={values.hospitalizationReason}
              onChange={(e) =>
                updatePatient("personalHistory", { hospitalizationReason: e.target.value })
              }
            />
            <Input
              placeholder="Quando"
              value={values.hospitalizationDate}
              onChange={(e) =>
                updatePatient("personalHistory", { hospitalizationDate: e.target.value })
              }
            />
          </div>
        )}
      </div>
      {/* Cardiopatias */}
      <div className="mt-4">
        <Label className="font-semibold">Cardiopatias:</Label>
        <Input
          type="text"
          placeholder="Descreva"
          value={values.chronicDiseases.heartDiseases ? values.chronicDiseases.heartDescription : ""}
          onChange={(e) =>
            updatePatient("personalHistory", {
              chronicDiseases: {
                ...values.chronicDiseases,
                heartDiseases: true,
                heartDescription: e.target.value,
              },
            })
          }
        />
      </div>
      {/* Outras */}
      <div className="mt-4">
        <Label className="font-semibold">Outras:</Label>
        <Input
          type="text"
          placeholder="Descreva"
          value={values.chronicDiseases.other ? values.chronicDiseases.otherDescription : ""}
          onChange={(e) =>
            updatePatient("personalHistory", {
              chronicDiseases: {
                ...values.chronicDiseases,
                other: true,
                otherDescription: e.target.value,
              },
            })
          }
        />
      </div>
      {/* Cirurgias anteriores */}
      <div className="mt-4">
        <Label className="font-semibold">Cirurgias anteriores:</Label>
        <RadioGroup
          className="flex flex-row gap-6 mt-1"
          value={values.previousSurgeries ? "true" : "false"}
          onValueChange={(val) =>
            updatePatient("personalHistory", { previousSurgeries: val === "true" })
          }
        >
          {yesNoItems.map((item) => (
            <label key={item.value} className="flex items-center gap-2">
              <RadioGroupItem value={item.value} />
              {item.label}
            </label>
          ))}
        </RadioGroup>
        {values.previousSurgeries && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
            <Input
              placeholder="Motivo"
              value={values.surgeryReason}
              onChange={(e) =>
                updatePatient("personalHistory", { surgeryReason: e.target.value })
              }
            />
            <Input
              placeholder="Quando"
              value={values.surgeryDate}
              onChange={(e) =>
                updatePatient("personalHistory", { surgeryDate: e.target.value })
              }
            />
          </div>
        )}
      </div>
      {/* Alergias */}
      <div className="mt-4">
        <Label className="font-semibold">Alergias:</Label>
        <RadioGroup
          className="flex flex-row gap-6 mt-1"
          value={values.allergies ? "true" : "false"}
          onValueChange={(val) =>
            updatePatient("personalHistory", { allergies: val === "true" })
          }
        >
          {yesNoItems.map((item) => (
            <label key={item.value} className="flex items-center gap-2">
              <RadioGroupItem value={item.value} />
              {item.label}
            </label>
          ))}
        </RadioGroup>
        {values.allergies && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
            <Input
              placeholder="Alergeno"
              value={values.allergen}
              onChange={(e) =>
                updatePatient("personalHistory", { allergen: e.target.value })
              }
            />
            <Input
              placeholder="Manifestações"
              value={values.allergyManifestations}
              onChange={(e) =>
                updatePatient("personalHistory", { allergyManifestations: e.target.value })
              }
            />
          </div>
        )}
      </div>
      {/* Ciclo Menstrual */}
      <div className="mt-4">
        <Label className="font-semibold">Ciclo Menstrual:</Label>
        <RadioGroup
          className="flex flex-row gap-6 mt-1"
          value={values.menstrualCycle}
          onValueChange={(val) =>
            updatePatient("personalHistory", { menstrualCycle: val as "Regular" | "Irregular" | "" })
          }
        >
          <label className="flex items-center gap-2">
            <RadioGroupItem value="Regular" />
            Regular
          </label>
          <label className="flex items-center gap-2">
            <RadioGroupItem value="Irregular" />
            Irregular
          </label>
        </RadioGroup>
        <Input
          className="mt-2"
          placeholder="Observações"
          value={values.menstrualObservations}
          onChange={(e) =>
            updatePatient("personalHistory", { menstrualObservations: e.target.value })
          }
        />
      </div>
      {/* Uso de medicamentos */}
      <div className="mt-4">
        <Label className="font-semibold">Uso de medicamentos:</Label>
        <RadioGroup
          className="flex flex-row gap-6 mt-1"
          value={values.medicationUse ? "true" : "false"}
          onValueChange={(val) =>
            updatePatient("personalHistory", { medicationUse: val === "true" })
          }
        >
          {yesNoItems.map((item) => (
            <label key={item.value} className="flex items-center gap-2">
              <RadioGroupItem value={item.value} />
              {item.label}
            </label>
          ))}
        </RadioGroup>
        {values.medicationUse && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
            <Input
              placeholder="Quais"
              value={values.medications}
              onChange={(e) =>
                updatePatient("personalHistory", { medications: e.target.value })
              }
            />
            <Input
              placeholder="Há quanto tempo"
              value={values.medicationTime}
              onChange={(e) =>
                updatePatient("personalHistory", { medicationTime: e.target.value })
              }
            />
          </div>
        )}
      </div>
      {/* Esquema vacinal */}
      <div className="mt-4">
        <Label className="font-semibold">Esquema vacinal:</Label>
        <RadioGroup
          className="flex flex-row gap-6 mt-1"
          value={values.vaccineSchedule ? "true" : "false"}
          onValueChange={(val) =>
            updatePatient("personalHistory", { vaccineSchedule: val === "true" })
          }
        >
          {yesNoItems.map((item) => (
            <label key={item.value} className="flex items-center gap-2">
              <RadioGroupItem value={item.value} />
              {item.label}
            </label>
          ))}
        </RadioGroup>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
          <Label>Adequado para idade:</Label>
          <RadioGroup
            className="flex flex-row gap-6"
            value={values.ageAppropriateVaccines ? "true" : "false"}
            onValueChange={(val) =>
              updatePatient("personalHistory", { ageAppropriateVaccines: val === "true" })
            }
          >
            {yesNoItems.map((item) => (
              <label key={item.value} className="flex items-center gap-2">
                <RadioGroupItem value={item.value} />
                {item.label}
              </label>
            ))}
          </RadioGroup>
          <Textarea
            className="col-span-2"
            placeholder="Observações"
            value={values.observations}
            onChange={(e) =>
              updatePatient("personalHistory", { observations: e.target.value })
            }
          />
        </div>
      </div>
    </FormSection>
  );
}
