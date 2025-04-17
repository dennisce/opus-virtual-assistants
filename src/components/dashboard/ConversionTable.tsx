
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Conversion {
  id: number;
  leadName: string;
  orderDetails: string;
  conversionDate: string;
}

const ConversionTable = () => {
  const conversions: Conversion[] = [
    {
      id: 1,
      leadName: "Maria Silva",
      orderDetails: "Calça jeans R$ 180,00 + Camisa clara R$ 200,00 para Rua das Flores, 123 - Jardim Primavera, São Paulo/SP",
      conversionDate: "17/04/2025"
    },
    {
      id: 2,
      leadName: "João Santos",
      orderDetails: "Agendamento realizado para dia 07/08/2025 às 17h para sessão de fotos",
      conversionDate: "16/04/2025"
    },
    {
      id: 3,
      leadName: "Ana Oliveira",
      orderDetails: "Pedido de prato feijoada mandiresca com OBSERVAÇÃO: sem pimenta extra",
      conversionDate: "15/04/2025"
    },
    {
      id: 4,
      leadName: "Roberto Martins",
      orderDetails: "Kit festa R$ 450,00 (50 salgados + 2 bolos) para Av. Principal, 789 - Centro, São Paulo/SP",
      conversionDate: "15/04/2025"
    },
    {
      id: 5,
      leadName: "Carla Mendes",
      orderDetails: "Agendamento de consulta para dia 22/04/2025 às 14h30 OBSERVAÇÃO: primeira consulta",
      conversionDate: "14/04/2025"
    }
  ];

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold">Conversões Realizadas</h3>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nome do Lead</TableHead>
            <TableHead>Detalhes do Pedido</TableHead>
            <TableHead>Data da Conversão</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {conversions.map((conversion) => (
            <TableRow key={conversion.id}>
              <TableCell className="font-medium">{conversion.leadName}</TableCell>
              <TableCell>{conversion.orderDetails}</TableCell>
              <TableCell>{conversion.conversionDate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ConversionTable;
