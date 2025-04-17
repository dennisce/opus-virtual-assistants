
import { useState } from "react";
import { Search, CalendarRange } from "lucide-react";
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
import { ScrollArea } from "@/components/ui/scroll-area";

interface Message {
  id: number;
  sender: "lead" | "company";
  content: string;
  timestamp: string;
  phoneNumber: string;
}

const ChatHistory = () => {
  const [phoneFilter, setPhoneFilter] = useState("");
  const [dateFilter, setDateFilter] = useState<Date>();

  // Example data - in a real app, this would come from your backend
  const messages: Message[] = [
    {
      id: 1,
      sender: "lead",
      content: "Gostaria de saber mais sobre os planos",
      timestamp: "2024-04-17T10:30:00",
      phoneNumber: "11999999999"
    },
    {
      id: 2,
      sender: "company",
      content: "Claro! Temos diversos planos disponíveis. Qual seria seu interesse principal?",
      timestamp: "2024-04-17T10:31:00",
      phoneNumber: "11999999999"
    },
    {
      id: 3,
      sender: "lead",
      content: "Preciso de um plano para minha empresa",
      timestamp: "2024-04-17T10:32:00",
      phoneNumber: "11999999999"
    }
  ];

  return (
    <div className="space-y-4">
      <div className="flex gap-4 items-center">
        <div className="relative flex-1">
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
              variant={"outline"}
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
              className="pointer-events-auto"
            />
          </PopoverContent>
        </Popover>
      </div>

      <div className="border rounded-lg">
        <ScrollArea className="h-[400px] p-4">
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={cn(
                  "flex",
                  message.sender === "lead" ? "justify-start" : "justify-end"
                )}
              >
                <div
                  className={cn(
                    "rounded-lg px-4 py-2 max-w-[80%]",
                    message.sender === "lead"
                      ? "bg-muted"
                      : "bg-primary text-primary-foreground"
                  )}
                >
                  <p className="text-sm">{message.content}</p>
                  <p className="text-xs mt-1 opacity-70">
                    {new Date(message.timestamp).toLocaleTimeString("pt-BR", {
                      hour: "2-digit",
                      minute: "2-digit"
                    })}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};

export default ChatHistory;
