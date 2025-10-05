import AdminSidebar from "@/components/adminSidebar/AdminSidebar"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import UserSidebar from "@/components/userSidebar/UserSidebar"

export default function Layout({ children }) {
  return (
    <SidebarProvider>
      <AdminSidebar />
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  )
}