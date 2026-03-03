import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MapPin, Phone, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface FormField {
  name: string;
  label: string;
  type: string;
  required: boolean;
  options?: string[];
}

interface Office {
  title: string;
  company: string;
  address: string;
  phone?: string;
}

interface ContactProps {
  fields: FormField[];
  offices: Office[];
}

export default function ContactSection({ fields, offices }: ContactProps) {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      toast({
        title: "Message Sent",
        description: "Thank you for reaching out. We'll get back to you shortly.",
      });
      setFormData({});
      setSubmitting(false);
    }, 1000);
  };

  return (
    <section data-testid="contact-section" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          <div className="lg:col-span-3">
            <h2 className="text-2xl font-bold text-foreground mb-8">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {fields.filter((f) => f.type !== "textarea").map((field) => (
                  <div key={field.name}>
                    <Label htmlFor={field.name} className="text-sm font-medium mb-2 block">
                      {field.label}
                      {field.required && <span className="text-destructive ml-0.5">*</span>}
                    </Label>
                    {field.type === "select" ? (
                      <Select
                        value={formData[field.name] || ""}
                        onValueChange={(val) =>
                          setFormData((p) => ({ ...p, [field.name]: val }))
                        }
                      >
                        <SelectTrigger data-testid={`select-${field.name}`}>
                          <SelectValue placeholder={`Select ${field.label}`} />
                        </SelectTrigger>
                        <SelectContent>
                          {field.options?.map((opt) => (
                            <SelectItem key={opt} value={opt}>
                              {opt}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    ) : (
                      <Input
                        id={field.name}
                        type={field.type}
                        required={field.required}
                        data-testid={`input-${field.name}`}
                        value={formData[field.name] || ""}
                        onChange={(e) =>
                          setFormData((p) => ({ ...p, [field.name]: e.target.value }))
                        }
                      />
                    )}
                  </div>
                ))}
              </div>
              {fields
                .filter((f) => f.type === "textarea")
                .map((field) => (
                  <div key={field.name}>
                    <Label htmlFor={field.name} className="text-sm font-medium mb-2 block">
                      {field.label}
                      {field.required && <span className="text-destructive ml-0.5">*</span>}
                    </Label>
                    <Textarea
                      id={field.name}
                      required={field.required}
                      data-testid={`textarea-${field.name}`}
                      rows={5}
                      value={formData[field.name] || ""}
                      onChange={(e) =>
                        setFormData((p) => ({ ...p, [field.name]: e.target.value }))
                      }
                    />
                  </div>
                ))}
              <Button
                type="submit"
                data-testid="button-submit-contact"
                disabled={submitting}
                className="w-full sm:w-auto"
              >
                {submitting ? "Sending..." : "Send Message"}
                <Send className="w-4 h-4 ml-2" />
              </Button>
            </form>
          </div>

          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-foreground mb-8">Office Locations</h2>
            <div className="space-y-6">
              {offices.map((office, idx) => (
                <div
                  key={idx}
                  data-testid={`office-${idx}`}
                  className="p-5 rounded-md bg-muted/30 border border-border"
                >
                  <h3 className="text-sm font-semibold text-foreground mb-2">{office.title}</h3>
                  <p className="text-xs text-muted-foreground font-medium mb-2">{office.company}</p>
                  <div className="flex items-start gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                    <span>{office.address}</span>
                  </div>
                  {office.phone && (
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
                      <Phone className="w-3.5 h-3.5 shrink-0" />
                      <span>{office.phone}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
