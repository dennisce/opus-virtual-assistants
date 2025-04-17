
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const ConversationHistory = () => {
  // Example data - in a real app, this would come from your backend
  const conversations = [
    {
      id: 1,
      lead: "João Silva",
      lastMessage: "Gostaria de saber mais sobre os planos",
      date: "2024-04-17T10:30:00",
      status: "Concluído"
    },
    {
      id: 2,
      lead: "Maria Oliveira",
      lastMessage: "Qual o valor do plano básico?",
      date: "2024-04-17T09:15:00",
      status: "Em andamento"
    },
    {
      id: 3,
      lead: "Carlos Santos",
      lastMessage: "Preciso de ajuda com a integração",
      date: "2024-04-16T16:45:00",
      status: "Concluído"
    }
  ];

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Lead</TableHead>
            <TableHead>Última Mensagem</TableHead>
            <TableHead>Data</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {conversations.map((conv) => (
            <TableRow key={conv.id}>
              <TableCell className="font-medium">{conv.lead}</TableCell>
              <TableCell>{conv.lastMessage}</TableCell>
              <TableCell>
                {new Date(conv.date).toLocaleDateString('pt-BR', {
                  day: '2-digit',
                  month: '2-digit',
                  year: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit'
                })}
              </TableCell>
              <TableCell>{conv.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ConversationHistory;
