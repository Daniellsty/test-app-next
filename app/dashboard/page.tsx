import { Metadata } from "next";
import { ProductsList } from "@/components/shared";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "User dashboard",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

const Dashboard = () => {
  return <ProductsList />;
};

export default Dashboard;
