
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users } from "lucide-react";

const TotalServices = () => {
  const totalAtendimentos = 12458;

  return (
    <Card className="bg-white/80 backdrop-blur-sm border-gray-100/20">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium bg-gradient-to-br from-purple-600 to-blue-600 bg-clip-text text-transparent">
          Total de Atendimentos
        </CardTitle>
        <Users className="h-4 w-4 text-purple-600" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold bg-gradient-to-br from-purple-600 to-blue-600 bg-clip-text text-transparent">
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
