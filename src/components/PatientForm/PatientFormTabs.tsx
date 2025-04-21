import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { 
  Save, 
  RefreshCw, 
  UserRound, 
  Coffee, 
  HeartPulse, 
  Users, 
  MessageSquare, 
  Stethoscope 
} from 'lucide-react';
import { usePatient } from '@/contexts/PatientContext';
import { IdentificationForm } from './IdentificationForm';
import { HabitsForm } from './HabitsForm';
import { PersonalHistoryForm } from "./PersonalHistoryForm";
import { FamilyHistoryForm } from "./FamilyHistoryForm";
import { ChiefComplaintForm } from "./ChiefComplaintForm";
import { PhysicalExamForm } from "./PhysicalExamForm";
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';

export function PatientFormTabs() {
  const { savePatient, resetForm, loading } = usePatient();
  const [activeTab, setActiveTab] = useState('identification');
  const { toast } = useToast();
  
  const handleSave = async () => {
    try {
      await savePatient();
    } catch (error) {
      console.error('Error saving patient:', error);
    }
  };
  
  const handleReset = () => {
    resetForm();
  };
  
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold text-medical-blue dark:text-blue-400">
          Formulário de Paciente
        </h1>
        <div className="flex space-x-2">
          <Button 
            variant="outline" 
            onClick={handleReset}
            className="flex items-center space-x-1"
          >
            <RefreshCw className="h-4 w-4 mr-1" />
            <span>Limpar</span>
          </Button>
          <Button 
            onClick={handleSave}
            disabled={loading}
            className="flex items-center space-x-1 bg-medical-blue hover:bg-blue-700"
          >
            <Save className="h-4 w-4 mr-1" />
            <span>{loading ? 'Salvando...' : 'Salvar'}</span>
          </Button>
        </div>
      </div>
      
      <Card>
        <CardContent className="pt-6">
          <Tabs defaultValue="form" className="w-full">
            <TabsList className="w-full mb-4">
              <TabsTrigger value="form" className="flex-1">Formulário</TabsTrigger>
              <TabsTrigger value="preview" className="flex-1">Visualização</TabsTrigger>
            </TabsList>
            
            <TabsContent value="form">
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-7 gap-2">
                  <TabsTrigger value="identification" className="flex items-center">
                    <UserRound className="h-4 w-4 mr-1" />
                    <span className="hidden md:inline">Identificação</span>
                  </TabsTrigger>
                  <TabsTrigger value="habits" className="flex items-center">
                    <Coffee className="h-4 w-4 mr-1" />
                    <span className="hidden md:inline">Hábitos</span>
                  </TabsTrigger>
                  <TabsTrigger value="personalHistory" className="flex items-center">
                    <HeartPulse className="h-4 w-4 mr-1" />
                    <span className="hidden md:inline">Antecedentes</span>
                  </TabsTrigger>
                  <TabsTrigger value="familyHistory" className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    <span className="hidden md:inline">Antecedentes Familiares</span>
                  </TabsTrigger>
                  <TabsTrigger value="chiefComplaint" className="flex items-center">
                    <MessageSquare className="h-4 w-4 mr-1" />
                    <span className="hidden md:inline">Queixa Principal</span>
                  </TabsTrigger>
                  <TabsTrigger value="physicalExam" className="flex items-center">
                    <Stethoscope className="h-4 w-4 mr-1" />
                    <span className="hidden md:inline">Exame Físico</span>
                  </TabsTrigger>
                </TabsList>
                
                <div className="mt-4 space-y-4">
                  <TabsContent value="identification" className="space-y-4 mt-0">
                    <IdentificationForm />
                  </TabsContent>
                  <TabsContent value="habits" className="space-y-4 mt-0">
                    <HabitsForm />
                  </TabsContent>
                  <TabsContent value="personalHistory" className="space-y-4 mt-0">
                    <PersonalHistoryForm />
                  </TabsContent>
                  <TabsContent value="familyHistory" className="space-y-4 mt-0">
                    <FamilyHistoryForm />
                  </TabsContent>
                  <TabsContent value="chiefComplaint" className="space-y-4 mt-0">
                    <ChiefComplaintForm />
                  </TabsContent>
                  <TabsContent value="physicalExam" className="space-y-4 mt-0">
                    <PhysicalExamForm />
                  </TabsContent>
                </div>
              </Tabs>
            </TabsContent>
            
            <TabsContent value="preview">
              <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg border">
                <p className="text-muted-foreground py-8 text-center">
                  Visualização do formulário será implementada em breve.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
