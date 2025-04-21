
import { PatientFormTabs } from "@/components/PatientForm/PatientFormTabs";
import { PatientProvider } from "@/contexts/PatientContext";
import { Navbar } from "@/components/Layout/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";

// Modern gradient background, responsive and supports dark mode
const Index = () => {
  return (
    <ThemeProvider defaultTheme="light">
      <PatientProvider>
        <div className="min-h-screen flex flex-col relative bg-gradient-to-tr from-[#D6BCFA] via-[#D3E4FD] to-[#E5DEFF] dark:from-[#22223b] dark:via-[#311B92] dark:to-[#22223b]">
          {/* Decorative background shapes */}
          <div className="pointer-events-none absolute -top-56 left-0 w-full h-[420px] z-0 opacity-40 dark:opacity-30 blur-2xl" style={{background: "radial-gradient(circle at 50% 20%, #7E69AB33 0%, #fff0 100%)"}}></div>
          <Navbar />
          <main className="flex-1 container py-6 relative z-10">
            <PatientFormTabs />
          </main>
          <footer className="border-t py-4 text-center text-sm text-muted-foreground relative z-10 bg-white/80 dark:bg-black/30 backdrop-blur">
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
