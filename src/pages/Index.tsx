
import { PatientFormTabs } from "@/components/PatientForm/PatientFormTabs";
import { PatientProvider } from "@/contexts/PatientContext";
import { Navbar } from "@/components/Layout/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";

const Index = () => {
  return (
    <ThemeProvider defaultTheme="light">
      <PatientProvider>
        <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
          <Navbar />
          <main className="flex-1 container py-6">
            <PatientFormTabs />
          </main>
          <footer className="border-t py-4 text-center text-sm text-muted-foreground">
            <div className="container">
              &copy; {new Date().getFullYear()} EnfermaForm - Todos os direitos reservados
            </div>
          </footer>
        </div>
      </PatientProvider>
    </ThemeProvider>
  );
};

export default Index;
