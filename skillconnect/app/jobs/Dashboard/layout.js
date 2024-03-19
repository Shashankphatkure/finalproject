import { Inter } from "next/font/google";
import DashboardHeaderJobs from "@/components/dashboard-headers/DashboardheadersJobs";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <div className={inter.className}>
      <DashboardHeaderJobs />
      {children}
    </div>
  );
}
