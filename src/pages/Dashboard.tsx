
import MessageStats from "@/components/dashboard/MessageStats";
import TotalServices from "@/components/dashboard/TotalServices";
import ChatHistory from "@/components/dashboard/ChatHistory";
import ConversionTable from "@/components/dashboard/ConversionTable";
import NavBar from "@/components/NavBar";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <NavBar />
      <section className="py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">Dashboard</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <MessageStats />
            <TotalServices />
          </div>
          <div className="space-y-6">
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-gray-100">
              <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">Chat</h3>
              <ChatHistory />
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-gray-100">
              <ConversionTable />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
