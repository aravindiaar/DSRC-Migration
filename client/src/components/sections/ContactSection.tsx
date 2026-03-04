import { useState } from "react";
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
import { MapPin, Phone } from "lucide-react";
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
    <section data-testid="contact-section" className="py-16 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          <div className="lg:col-span-3">
            <h2 className="text-xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {fields.filter((f) => f.type !== "textarea").map((field) => (
                  <div key={field.name}>
                    <Label htmlFor={field.name} className="text-sm text-gray-600 mb-1.5 block">
                      {field.label}
                      {field.required && <span className="text-red-500 ml-0.5">*</span>}
                    </Label>
                    {field.type === "select" ? (
                      <Select
                        value={formData[field.name] || ""}
                        onValueChange={(val) =>
                          setFormData((p) => ({ ...p, [field.name]: val }))
                        }
                      >
                        <SelectTrigger data-testid={`select-${field.name}`} className="border-gray-300">
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
                        className="border-gray-300"
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
                    <Label htmlFor={field.name} className="text-sm text-gray-600 mb-1.5 block">
                      {field.label}
                      {field.required && <span className="text-red-500 ml-0.5">*</span>}
                    </Label>
                    <Textarea
                      id={field.name}
                      required={field.required}
                      data-testid={`textarea-${field.name}`}
                      rows={5}
                      className="border-gray-300"
                      value={formData[field.name] || ""}
                      onChange={(e) =>
                        setFormData((p) => ({ ...p, [field.name]: e.target.value }))
                      }
                    />
                  </div>
                ))}
              <button
                type="submit"
                data-testid="button-submit-contact"
                disabled={submitting}
                className="px-8 py-2.5 bg-[#0033a0] text-white text-sm font-medium rounded-sm hover:bg-[#002880] transition-colors disabled:opacity-50"
              >
                {submitting ? "Sending..." : "Submit"}
              </button>
            </form>
          </div>

          <div className="lg:col-span-2">
            <h2 className="text-xl font-bold text-gray-800 mb-6">Office Locations</h2>
            <div className="space-y-5">
              {offices.map((office, idx) => (
                <div
                  key={idx}
                  data-testid={`office-${idx}`}
                  className="pb-5 border-b border-gray-100 last:border-0"
                >
                  <h3 className="text-sm font-bold text-gray-800 mb-1">{office.title}</h3>
                  <p className="text-xs text-gray-500 mb-1">{office.company}</p>
                  <div className="flex items-start gap-1.5 text-sm text-gray-500">
                    <MapPin className="w-3.5 h-3.5 mt-0.5 shrink-0 text-gray-400" />
                    <span>{office.address}</span>
                  </div>
                  {office.phone && (
                    <div className="flex items-center gap-1.5 text-sm text-gray-500 mt-1">
                      <Phone className="w-3.5 h-3.5 shrink-0 text-gray-400" />
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
