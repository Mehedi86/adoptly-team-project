import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import UserSidebar from "@/components/userSidebar/UserSidebar"

export default function Layout({ children }) {
  return (
    <SidebarProvider>
      <UserSidebar />
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  )
}