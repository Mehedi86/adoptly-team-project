import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import UserDashboardHeader from "@/components/userDashboardHeader/userDashboardHeader"
import UserSidebar from "@/components/userSidebar/UserSidebar"

export default function Layout({ children }) {
  return (
    <SidebarProvider>
      <UserSidebar />
      <main className="w-full">
        {/* <SidebarTrigger /> */}
        <UserDashboardHeader />
        {children}
      </main>
    </SidebarProvider>
  )
}