import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function LowerLimbExamSection({
  lowerLimbs,
  handleLowerLimbChange,
}: {
  lowerLimbs: any;
  handleLowerLimbChange: (side: "right" | "left", field: string, value: any) => void;
}) {
  return (
    <section className="space-y-4">
      <h3 className="font-semibold text-lg">Membros Inferiores</h3>
      {/* MID */}
      <div>
        <h4 className="font-semibold">MID (Direito)</h4>
        <div className="flex flex-wrap gap-3 items-center">
          <Label>Inspeção:</Label>
          {["hematoma", "ecchymosis", "perfusion", "hemorrhage"].map(k => (
            <div key={k} className="flex items-center">
              <input
                type="checkbox"
                checked={!!lowerLimbs.inspection[k]}
                onChange={e =>
                  handleLowerLimbChange("right", "inspection", {
                    ...lowerLimbs.inspection,
                    [k]: e.target.checked,
                  })
                }
              />
              <span className="ml-1 capitalize">
                {k === "ecchymosis" ? "Equimoses" : k.charAt(0).toUpperCase() + k.slice(1)}
              </span>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-3 items-center">
          <Label>Palpação:</Label>
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={!!lowerLimbs.palpation.pain}
              onChange={e =>
                handleLowerLimbChange("right", "palpation", {
                  ...lowerLimbs.palpation,
                  pain: e.target.checked,
                })
              }
            />
            <span className="ml-1">Dor</span>
          </div>
          <div className="flex flex-col">
            <Input
              className="w-28"
              placeholder="Local da dor"
              value={lowerLimbs.palpation.painLocation}
              onChange={e =>
                handleLowerLimbChange("right", "palpation", {
                  ...lowerLimbs.palpation,
                  painLocation: e.target.value,
                })
              }
            />
          </div>
          <div className="flex flex-col">
            <Input
              className="w-28"
              placeholder="Sensibilidade"
              value={lowerLimbs.palpation.sensitivity}
              onChange={e =>
                handleLowerLimbChange("right", "palpation", {
                  ...lowerLimbs.palpation,
                  sensitivity: e.target.value,
                })
              }
            />
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={!!lowerLimbs.palpation.tonus}
              onChange={e =>
                handleLowerLimbChange("right", "palpation", {
                  ...lowerLimbs.palpation,
                  tonus: e.target.checked,
                })
              }
            />
            <span className="ml-1">Tônus muscular</span>
          </div>
          <div className="flex flex-col">
            <Input
              className="w-32"
              placeholder="Tônus"
              value={lowerLimbs.palpation.muscularTonus}
              onChange={e =>
                handleLowerLimbChange("right", "palpation", {
                  ...lowerLimbs.palpation,
                  muscularTonus: e.target.value,
                })
              }
            />
          </div>
        </div>
        <div className="flex flex-wrap gap-3 items-center">
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={!!lowerLimbs.fractures}
              onChange={e =>
                handleLowerLimbChange("right", "fractures", e.target.checked)
              }
            />
            <span className="ml-1">Fraturas</span>
          </div>
          <Input
            className="w-32"
            placeholder="Local"
            value={lowerLimbs.fracturesLocation}
            onChange={e =>
              handleLowerLimbChange("right", "fracturesLocation", e.target.value)
            }
          />
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={!!lowerLimbs.immobility}
              onChange={e =>
                handleLowerLimbChange("right", "immobility", e.target.checked)
              }
            />
            <span className="ml-1">Imóvel</span>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={!!lowerLimbs.other}
              onChange={e =>
                handleLowerLimbChange("right", "other", e.target.checked)
              }
            />
            <span className="ml-1">Outros</span>
            {lowerLimbs.other && (
              <Input
                className="ml-1 w-32"
                placeholder="Descreva"
                value={lowerLimbs.otherDescription}
                onChange={e =>
                  handleLowerLimbChange("right", "otherDescription", e.target.value)
                }
              />
            )}
          </div>
        </div>
      </div>
      {/* MIE */}
      <div>
        <h4 className="font-semibold">MIE (Esquerdo)</h4>
        <div className="flex flex-wrap gap-3 items-center">
          <Label>Inspeção:</Label>
          {["hematoma", "ecchymosis", "perfusion", "hemorrhage"].map(k => (
            <div key={k} className="flex items-center">
              <input
                type="checkbox"
                checked={!!lowerLimbs.inspection[k]}
                onChange={e =>
                  handleLowerLimbChange("left", "inspection", {
                    ...lowerLimbs.inspection,
                    [k]: e.target.checked,
                  })
                }
              />
              <span className="ml-1 capitalize">
                {k === "ecchymosis" ? "Equimoses" : k.charAt(0).toUpperCase() + k.slice(1)}
              </span>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-3 items-center">
          <Label>Palpação:</Label>
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={!!lowerLimbs.palpation.pain}
              onChange={e =>
                handleLowerLimbChange("left", "palpation", {
                  ...lowerLimbs.palpation,
                  pain: e.target.checked,
                })
              }
            />
            <span className="ml-1">Dor</span>
          </div>
          <div className="flex flex-col">
            <Input
              className="w-28"
              placeholder="Local da dor"
              value={lowerLimbs.palpation.painLocation}
              onChange={e =>
                handleLowerLimbChange("left", "palpation", {
                  ...lowerLimbs.palpation,
                  painLocation: e.target.value,
                })
              }
            />
          </div>
          <div className="flex flex-col">
            <Input
              className="w-28"
              placeholder="Sensibilidade"
              value={lowerLimbs.palpation.sensitivity}
              onChange={e =>
                handleLowerLimbChange("left", "palpation", {
                  ...lowerLimbs.palpation,
                  sensitivity: e.target.value,
                })
              }
            />
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={!!lowerLimbs.palpation.tonus}
              onChange={e =>
                handleLowerLimbChange("left", "palpation", {
                  ...lowerLimbs.palpation,
                  tonus: e.target.checked,
                })
              }
            />
            <span className="ml-1">Tônus muscular</span>
          </div>
          <div className="flex flex-col">
            <Input
              className="w-32"
              placeholder="Tônus"
              value={lowerLimbs.palpation.muscularTonus}
              onChange={e =>
                handleLowerLimbChange("left", "palpation", {
                  ...lowerLimbs.palpation,
                  muscularTonus: e.target.value,
                })
              }
            />
          </div>
        </div>
        <div className="flex flex-wrap gap-3 items-center">
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={!!lowerLimbs.fractures}
              onChange={e =>
                handleLowerLimbChange("left", "fractures", e.target.checked)
              }
            />
            <span className="ml-1">Fraturas</span>
          </div>
          <Input
            className="w-32"
            placeholder="Local"
            value={lowerLimbs.fracturesLocation}
            onChange={e =>
              handleLowerLimbChange("left", "fracturesLocation", e.target.value)
            }
          />
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={!!lowerLimbs.immobility}
              onChange={e =>
                handleLowerLimbChange("left", "immobility", e.target.checked)
              }
            />
            <span className="ml-1">Imóvel</span>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={!!lowerLimbs.other}
              onChange={e =>
                handleLowerLimbChange("left", "other", e.target.checked)
              }
            />
            <span className="ml-1">Outros</span>
            {lowerLimbs.other && (
              <Input
                className="ml-1 w-32"
                placeholder="Descreva"
                value={lowerLimbs.otherDescription}
                onChange={e =>
                  handleLowerLimbChange("left", "otherDescription", e.target.value)
                }
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
