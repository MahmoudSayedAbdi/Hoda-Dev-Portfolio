import { AppSidebar } from "../common/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "../ui/sidebar";
import { ThemeProvider } from "./components/theme-provider";

export default function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <SidebarProvider>
        <AppSidebar />
        <main>
          <SidebarTrigger />
          {children}
        </main>
      </SidebarProvider>
    </ThemeProvider>
  );
}
