
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { createEmptyPatient, Patient } from '@/models/patient';
import { useToast } from '@/components/ui/use-toast';

interface PatientContextType {
  patient: Patient;
  updatePatient: <K extends keyof Patient>(
    sectionKey: K,
    sectionData: Partial<Patient[K]>
  ) => void;
  savePatient: () => Promise<void>;
  resetForm: () => void;
  loading: boolean;
  currentSection: string;
  setCurrentSection: (section: string) => void;
}

const PatientContext = createContext<PatientContextType | undefined>(undefined);

export function PatientProvider({ children }: { children: ReactNode }) {
  const [patient, setPatient] = useState<Patient>(createEmptyPatient());
  const [loading, setLoading] = useState(false);
  const [currentSection, setCurrentSection] = useState('identification');
  const { toast } = useToast();

  const updatePatient = <K extends keyof Patient>(
    sectionKey: K,
    sectionData: Partial<Patient[K]>
  ) => {
    setPatient((prev) => {
      const prevSectionValue = prev[sectionKey];
      const newSectionValue =
        typeof prevSectionValue === 'object' && prevSectionValue !== null
          ? { ...prevSectionValue, ...sectionData }
          : sectionData;
      const newPatient = { ...prev, [sectionKey]: newSectionValue };
      newPatient.updatedAt = new Date().toISOString();
      localStorage.setItem('currentPatient', JSON.stringify(newPatient));
      return newPatient;
    });
  };

  const savePatient = async () => {
    try {
      setLoading(true);
      localStorage.setItem('savedPatients', JSON.stringify([...(JSON.parse(localStorage.getItem('savedPatients') || '[]')), patient]));
      toast({
        title: "Paciente salvo com sucesso",
        description: "Os dados foram salvos localmente.",
        variant: "default",
      });
      return Promise.resolve();
    } catch (error) {
      toast({
        title: "Erro ao salvar",
        description: "Ocorreu um erro ao salvar os dados do paciente.",
        variant: "destructive",
      });
      return Promise.reject(error);
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setPatient(createEmptyPatient());
    localStorage.removeItem('currentPatient');
    setCurrentSection('identification');
    toast({
      title: "Formulário reiniciado",
      description: "Todos os campos foram limpos.",
    });
  };

  return (
    <PatientContext.Provider
      value={{
        patient,
        updatePatient,
        savePatient,
        resetForm,
        loading,
        currentSection,
        setCurrentSection,
      }}
    >
      {children}
    </PatientContext.Provider>
  );
}

export function usePatient() {
  const context = useContext(PatientContext);
  if (context === undefined) {
    throw new Error('usePatient must be used within a PatientProvider');
  }
  return context;
}
