
import React from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const cardiacRhythms = ["Normocárdico", "Bradicárdico", "Taquicárdico"];
const pulses = ["Taquisfigmo", "Bradisfigmo", "Rítmico", "Arrítmico"];

export function CardiovascularExamSection({
  cardiovascular,
  handleCardioChange,
}: {
  cardiovascular: any;
  handleCardioChange: (field: string, value: any) => void;
}) {
  return (
    <section className="space-y-4">
      <h3 className="font-semibold text-lg">Sistema Cardiovascular</h3>
      <div>
        <Label>Ritmo cardíaco</Label>
        <RadioGroup
          value={cardiovascular.cardiacRhythm || ""}
          onValueChange={(v) => handleCardioChange("cardiacRhythm", v)}
          className="flex flex-wrap gap-2"
        >
          {cardiacRhythms.map((rh) => (
            <div key={rh} className="flex items-center space-x-2">
              <RadioGroupItem value={rh} id={`rhythm-${rh}`} />
              <Label htmlFor={`rhythm-${rh}`}>{rh}</Label>
            </div>
          ))}
        </RadioGroup>
      </div>
      <div>
        <Label>Pulso</Label>
        <RadioGroup
          value={cardiovascular.pulse || ""}
          onValueChange={(v) => handleCardioChange("pulse", v)}
          className="flex flex-wrap gap-2"
        >
          {pulses.map((p) => (
            <div key={p} className="flex items-center space-x-2">
              <RadioGroupItem value={p} id={`pulse-${p}`} />
              <Label htmlFor={`pulse-${p}`}>{p}</Label>
            </div>
          ))}
        </RadioGroup>
      </div>
      <div>
        <Label>Ausculta</Label>
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={!!cardiovascular.auscultation.bcnfIn2T}
              onChange={e =>
                handleCardioChange("auscultation", {
                  ...cardiovascular.auscultation,
                  bcnfIn2T: e.target.checked,
                })
              }
            />
            <span className="ml-1">BCNF em 2T</span>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={!!cardiovascular.auscultation.b3Plus}
              onChange={e =>
                handleCardioChange("auscultation", {
                  ...cardiovascular.auscultation,
                  b3Plus: e.target.checked,
                })
              }
            />
            <span className="ml-1">B3+</span>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={!!cardiovascular.auscultation.b4Plus}
              onChange={e =>
                handleCardioChange("auscultation", {
                  ...cardiovascular.auscultation,
                  b4Plus: e.target.checked,
                })
              }
            />
            <span className="ml-1">B4+</span>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={!!cardiovascular.auscultation.murmurs}
              onChange={e =>
                handleCardioChange("auscultation", {
                  ...cardiovascular.auscultation,
                  murmurs: e.target.checked,
                })
              }
            />
            <span className="ml-1">Sopros</span>
          </div>
        </div>
      </div>
    </section>
  );
}
