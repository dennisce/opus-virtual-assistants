
import { useState } from "react";
import { Search, CalendarRange } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

interface Conversion {
  id: number;
  leadName: string;
  orderDetails: string;
  conversionDate: string;
  phoneNumber: string;
}

const ConversionTable = () => {
  const [phoneFilter, setPhoneFilter] = useState("");
  const [dateFilter, setDateFilter] = useState<Date>();

  const conversions: Conversion[] = [
    {
      id: 1,
      leadName: "Maria Silva",
      phoneNumber: "(11) 99999-8888",
      orderDetails: "Calça jeans R$ 180,00 + Camisa clara R$ 200,00 para Rua das Flores, 123 - Jardim Primavera, São Paulo/SP",
      conversionDate: "17/04/2025"
    },
    {
      id: 2,
      leadName: "João Santos",
      phoneNumber: "(11) 97777-6666",
      orderDetails: "Agendamento realizado para dia 07/08/2025 às 17h para sessão de fotos",
      conversionDate: "16/04/2025"
    },
    {
      id: 3,
      leadName: "Ana Oliveira",
      phoneNumber: "(11) 95555-4444",
      orderDetails: "Pedido de prato feijoada mandiresca com OBSERVAÇÃO: sem pimenta extra",
      conversionDate: "15/04/2025"
    },
    {
      id: 4,
      leadName: "Roberto Martins",
      phoneNumber: "(11) 93333-2222",
      orderDetails: "Kit festa R$ 450,00 (50 salgados + 2 bolos) para Av. Principal, 789 - Centro, São Paulo/SP",
      conversionDate: "15/04/2025"
    },
    {
      id: 5,
      leadName: "Carla Mendes",
      phoneNumber: "(11) 91111-0000",
      orderDetails: "Agendamento de consulta para dia 22/04/2025 às 14h30 OBSERVAÇÃO: primeira consulta",
      conversionDate: "14/04/2025"
    }
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">Conversões Realizadas</h3>
        <div className="flex gap-4 items-center">
          <div className="relative">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Filtrar por telefone"
              value={phoneFilter}
              onChange={(e) => setPhoneFilter(e.target.value)}
              className="pl-9"
            />
          </div>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-[240px] justify-start text-left font-normal",
                  !dateFilter && "text-muted-foreground"
                )}
              >
                <CalendarRange className="mr-2 h-4 w-4" />
                {dateFilter ? format(dateFilter, "dd/MM/yyyy") : <span>Filtrar por data</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={dateFilter}
                onSelect={setDateFilter}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>
      <div className="rounded-lg border bg-card">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nome do Lead</TableHead>
              <TableHead>Número de Telefone</TableHead>
              <TableHead>Detalhes do Pedido</TableHead>
              <TableHead>Data da Conversão</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {conversions.map((conversion) => (
              <TableRow key={conversion.id}>
                <TableCell className="font-medium">{conversion.leadName}</TableCell>
                <TableCell>{conversion.phoneNumber}</TableCell>
                <TableCell>{conversion.orderDetails}</TableCell>
                <TableCell>{conversion.conversionDate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default ConversionTable;
