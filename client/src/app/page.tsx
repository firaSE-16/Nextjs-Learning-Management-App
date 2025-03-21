import NonDashboardNavbar from "@/components/NonDashboard";
import Image from "next/image";
import Landing from "./(nondashborad)/landing/page";

export default function Home() {
  return (
    <div className=" w-full h-full">
      <NonDashboardNavbar/>
      <main className="px-5">
        <Landing />

      </main>
    </div>
  );
}
