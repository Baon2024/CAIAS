import { Download, Eye, AlertCircle } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function TicketCard({ ticket, handleDownload }) {
  const [isModalOpen, setIsModalOpen] = React.useState(false)

  return (
    (<Card
      className="w-full max-w-sm overflow-hidden bg-white shadow-lg transition-all hover:shadow-xl">
      <div
        className="h-48 w-full bg-cover bg-center"
        style={{
          backgroundImage: `url(http://localhost:1337${ticket.formalTicketCollegeBackgroundImage?.url})`
        }} />
      <CardContent className="p-4">
        <div className="mb-4 space-y-1">
          <h3 className="text-lg font-semibold text-gray-900">{ticket.formalEventName}</h3>
          <p className="text-sm text-gray-600">{ticket.formalTicketCollege}</p>
        </div>

        <div className="flex flex-col gap-2">
          <Button
            variant="outline"
            className="w-full"
            onClick={() => handleDownload(
              `http://localhost:1337${ticket.formalTicketQRCode.url}`,
              ticket.formalTicketQRCode.url.split('/').pop()
            )}>
            <Download className="mr-2 h-4 w-4" />
            Download Ticket
          </Button>
          
          <Button variant="outline" className="w-full" onClick={() => setIsModalOpen(true)}>
            <Eye className="mr-2 h-4 w-4" />
            View Ticket
          </Button>
          
          <Button variant="outline" className="w-full">
            <AlertCircle className="mr-2 h-4 w-4" />
            Report Problem
          </Button>
        </div>

        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Ticket QR Code</DialogTitle>
            </DialogHeader>
            <div className="flex justify-center p-6">
              <img
                src={`http://localhost:1337${ticket.formalTicketQRCode?.url}`}
                alt="Ticket QR Code"
                className="max-h-96 w-auto rounded-lg" />
            </div>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>)
  );
}

