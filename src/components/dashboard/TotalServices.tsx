
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users } from "lucide-react";

const TotalServices = () => {
  // Example data - in a real app, this would come from your backend
  const totalAtendimentos = 12458;

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">
          Total de Atendimentos
        </CardTitle>
        <Users className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">
          {totalAtendimentos.toLocaleString()}
        </div>
        <p className="text-xs text-muted-foreground mt-2">
          Atendimentos realizados
        </p>
      </CardContent>
    </Card>
  );
};

export default TotalServices;
