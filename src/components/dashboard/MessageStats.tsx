
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle } from "lucide-react";

const MessageStats = () => {
  // Example data - in a real app, this would come from your backend
  const monthlyStats = {
    current: 750,
    total: 1000,
    percentage: 75
  };

  return (
    <Card className="bg-white/80 backdrop-blur-sm border-gray-100/20">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium bg-gradient-to-br from-purple-600 to-blue-600 bg-clip-text text-transparent">
          Mensagens do Mês
        </CardTitle>
        <MessageCircle className="h-4 w-4 text-purple-600" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold bg-gradient-to-br from-purple-600 to-blue-600 bg-clip-text text-transparent">
          {monthlyStats.current}
        </div>
        <Progress value={monthlyStats.percentage} className="mt-4 bg-purple-100">
          <div className="h-full bg-gradient-to-r from-purple-600 to-blue-600" style={{ width: `${monthlyStats.percentage}%` }} />
        </Progress>
        <p className="text-xs text-muted-foreground mt-2">
          {monthlyStats.percentage}% da meta mensal
        </p>
      </CardContent>
    </Card>
  );
};

export default MessageStats;
