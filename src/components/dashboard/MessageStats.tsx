
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare } from "lucide-react";

const MessageStats = () => {
  // Example data - in a real app, this would come from your backend
  const monthlyStats = {
    current: 750,
    total: 1000,
    percentage: 75
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">
          Mensagens do Mês
        </CardTitle>
        <MessageSquare className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{monthlyStats.current}</div>
        <Progress value={monthlyStats.percentage} className="mt-4" />
        <p className="text-xs text-muted-foreground mt-2">
          {monthlyStats.percentage}% da meta mensal
        </p>
      </CardContent>
    </Card>
  );
};

export default MessageStats;
