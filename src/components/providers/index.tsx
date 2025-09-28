import { AppSidebar } from "../common/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "../ui/sidebar";
import { ThemeProvider } from "./components/theme-provider";

interface ProvidersProps {
  children: React.ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <SidebarProvider>
        <div className="flex min-h-screen w-full">
          <AppSidebar />
          <main className="flex-1 w-full overflow-x-hidden">
            <div className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b">
              <SidebarTrigger className="m-4" />
            </div>
            <div className="w-full">{children}</div>
          </main>
        </div>
      </SidebarProvider>
    </ThemeProvider>
  );
}
