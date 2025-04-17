
import MessageStats from "@/components/dashboard/MessageStats";
import TotalServices from "@/components/dashboard/TotalServices";
import ConversationHistory from "@/components/dashboard/ConversationHistory";
import NavBar from "@/components/NavBar";

const Dashboard = () => {
  return (
    <div className="min-h-screen">
      <NavBar />
      {/* Dashboard Section */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <MessageStats />
            <TotalServices />
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Histórico de Conversas</h3>
            <ConversationHistory />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
