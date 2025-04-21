
import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function UpperLimbExamSection({
  upperLimbs,
  handleUpperLimbChange,
}: {
  upperLimbs: any;
  handleUpperLimbChange: (side: "right" | "left", field: string, value: any) => void;
}) {
  return (
    <section className="space-y-4">
      <h3 className="font-semibold text-lg">Membros Superiores</h3>
      {/* MSD */}
      <div>
        <h4 className="font-semibold">MSD (Direito)</h4>
        <div className="flex flex-wrap gap-3 items-center">
          <Label>Inspeção:</Label>
          {["hematoma", "ecchymosis", "perfusion", "hemorrhage"].map(k => (
            <div key={k} className="flex items-center">
              <input
                type="checkbox"
                checked={!!upperLimbs.inspection[k]}
                onChange={e =>
                  handleUpperLimbChange("right", "inspection", {
                    ...upperLimbs.inspection,
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
              checked={!!upperLimbs.palpation.pain}
              onChange={e =>
                handleUpperLimbChange("right", "palpation", {
                  ...upperLimbs.palpation,
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
              value={upperLimbs.palpation.painLocation}
              onChange={e =>
                handleUpperLimbChange("right", "palpation", {
                  ...upperLimbs.palpation,
                  painLocation: e.target.value,
                })
              }
            />
          </div>
          <div className="flex flex-col">
            <Input
              className="w-28"
              placeholder="Sensibilidade"
              value={upperLimbs.palpation.sensitivity}
              onChange={e =>
                handleUpperLimbChange("right", "palpation", {
                  ...upperLimbs.palpation,
                  sensitivity: e.target.value,
                })
              }
            />
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={!!upperLimbs.palpation.tonus}
              onChange={e =>
                handleUpperLimbChange("right", "palpation", {
                  ...upperLimbs.palpation,
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
              value={upperLimbs.palpation.muscularTonus}
              onChange={e =>
                handleUpperLimbChange("right", "palpation", {
                  ...upperLimbs.palpation,
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
              checked={!!upperLimbs.fractures}
              onChange={e =>
                handleUpperLimbChange("right", "fractures", e.target.checked)
              }
            />
            <span className="ml-1">Fraturas</span>
          </div>
          <Input
            className="w-32"
            placeholder="Local"
            value={upperLimbs.fracturesLocation}
            onChange={e =>
              handleUpperLimbChange("right", "fracturesLocation", e.target.value)
            }
          />
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={!!upperLimbs.immobility}
              onChange={e =>
                handleUpperLimbChange("right", "immobility", e.target.checked)
              }
            />
            <span className="ml-1">Imóvel</span>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={!!upperLimbs.other}
              onChange={e =>
                handleUpperLimbChange("right", "other", e.target.checked)
              }
            />
            <span className="ml-1">Outros</span>
            {upperLimbs.other && (
              <Input
                className="ml-1 w-32"
                placeholder="Descreva"
                value={upperLimbs.otherDescription}
                onChange={e =>
                  handleUpperLimbChange("right", "otherDescription", e.target.value)
                }
              />
            )}
          </div>
        </div>
      </div>
      {/* MSE */}
      <div>
        <h4 className="font-semibold">MSE (Esquerdo)</h4>
        {/* Repetir a estrutura acima - depende de como os dados estão estruturados */}
        {/* Por simplicidade, utilize os mesmos inputs acima para o lado esquerdo passados por props diferentes, caso necessário */}
        {/* Implemente conforme o padrão do projeto para não perder conexão com o contexto */}
      </div>
    </section>
  );
}
