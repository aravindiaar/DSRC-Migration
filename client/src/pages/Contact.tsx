import { useState } from "react";
import { useHead } from "@/hooks/use-head";
import { usePageContent } from "@/lib/content";
import HeroSection from "@/components/sections/HeroSection";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Send } from "lucide-react";

export default function Contact() {
  const { data: page, isLoading } = usePageContent("contact");
  const [activeTab, setActiveTab] = useState("global");
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const { toast } = useToast();

  useHead({
    title: page?.seo?.title || "Contact DSRC",
    description: page?.seo?.description || "",
  });

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

  if (isLoading || !page) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="w-8 h-8 border-4 border-[#0033a0] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  const activeTabData = page.tabs?.find((t: any) => t.id === activeTab);

  return (
    <>
      <HeroSection
        title={page.hero.title}
        subtitle={page.hero.subtitle}
        variant="dark"
        bgImage={page.hero.bgImage}
        breadcrumbs={page.hero.breadcrumbs}
      />

      <section className="py-12 bg-[#f0f4fa]">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-[#0033a0] mb-2">{page.intro.heading}</h2>
          {page.intro.paragraphs.map((p: string, idx: number) => (
            <p key={idx} className="text-[14px] text-gray-500 leading-[1.8]">{p}</p>
          ))}
        </div>
      </section>

      {page.tabs && (
        <section data-testid="contact-tabs" className="bg-white border-b border-gray-200">
          <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap">
              {page.tabs.map((tab: any) => (
                <button
                  key={tab.id}
                  data-testid={`tab-${tab.id}`}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-5 py-4 text-[13px] font-semibold border-b-2 transition-colors cursor-pointer whitespace-nowrap ${
                    activeTab === tab.id
                      ? "border-[#0033a0] text-[#0033a0]"
                      : "border-transparent text-gray-500 hover:text-[#0033a0]"
                  }`}
                >
                  {tab.flag && (
                    <img src={tab.flag} alt={tab.label} className="h-4 w-auto" />
                  )}
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-14 bg-white">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
          {activeTabData?.type === "form" && (
            <div className="max-w-[700px]">
              <p className="text-[15px] text-gray-600 mb-8">{activeTabData.formNote}</p>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {page.form.fields.filter((f: any) => f.type !== "textarea").map((field: any) => (
                    <div key={field.name}>
                      <Label htmlFor={field.name} className="text-sm text-gray-600 mb-1.5 block">
                        {field.label}
                        {field.required && <span className="text-red-500 ml-0.5">*</span>}
                      </Label>
                      {field.type === "select" ? (
                        <Select
                          value={formData[field.name] || ""}
                          onValueChange={(val) => setFormData((p) => ({ ...p, [field.name]: val }))}
                        >
                          <SelectTrigger data-testid={`select-${field.name}`} className="border-gray-300">
                            <SelectValue placeholder={`Select ${field.label}`} />
                          </SelectTrigger>
                          <SelectContent>
                            {field.options?.map((opt: string) => (
                              <SelectItem key={opt} value={opt}>{opt}</SelectItem>
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
                          onChange={(e) => setFormData((p) => ({ ...p, [field.name]: e.target.value }))}
                        />
                      )}
                    </div>
                  ))}
                </div>
                {page.form.fields.filter((f: any) => f.type === "textarea").map((field: any) => (
                  <div key={field.name}>
                    <Label htmlFor={field.name} className="text-sm text-gray-600 mb-1.5 block">
                      {field.label}
                      {field.required && <span className="text-red-500 ml-0.5">*</span>}
                    </Label>
                    <Textarea
                      id={field.name}
                      required={field.required}
                      data-testid={`textarea-${field.name}`}
                      className="border-gray-300 min-h-[120px]"
                      value={formData[field.name] || ""}
                      onChange={(e) => setFormData((p) => ({ ...p, [field.name]: e.target.value }))}
                    />
                  </div>
                ))}
                <Button
                  type="submit"
                  disabled={submitting}
                  data-testid="button-submit"
                  className="bg-[#0033a0] hover:bg-[#002580] text-white px-8 py-2.5 text-sm font-semibold flex items-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  {submitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          )}

          {activeTabData?.type === "office" && (
            <div data-testid="office-info" className="max-w-[600px]">
              <div className="flex items-center gap-3 mb-6">
                {activeTabData.flag && (
                  <img src={activeTabData.flag} alt={activeTabData.label} className="h-8 w-auto" />
                )}
                <h2 className="text-xl font-bold text-[#0033a0]">{activeTabData.label}</h2>
              </div>
              <div className="bg-[#f0f4fa] rounded-lg p-6 border border-blue-100 space-y-3">
                <p className="text-[14px] font-semibold text-[#0033a0]">{activeTabData.company}</p>
                <div className="flex items-start gap-2 text-[14px] text-gray-600">
                  <MapPin className="w-4 h-4 text-[#0033a0] shrink-0 mt-0.5" />
                  <span>{activeTabData.address}</span>
                </div>
                {activeTabData.address2 && (
                  <div className="flex items-start gap-2 text-[14px] text-gray-600">
                    <MapPin className="w-4 h-4 text-[#0033a0] shrink-0 mt-0.5" />
                    <span>{activeTabData.address2}</span>
                  </div>
                )}
              </div>
              <div className="mt-8 p-5 bg-white border border-gray-200 rounded-lg">
                <p className="text-[14px] text-gray-600 mb-4">{activeTabData.description || "Click the button below to submit an enquiry!"}</p>
                <Button
                  onClick={() => setActiveTab("global")}
                  data-testid="button-enquiry"
                  className="bg-[#0033a0] hover:bg-[#002580] text-white px-6 py-2.5 text-sm font-semibold"
                >
                  Submit an Enquiry
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="py-12 bg-[#f5f5f5]">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-[#0033a0] mb-8">OFFICE LOCATIONS</h2>
          <p className="text-[13px] text-gray-500 mb-6">{page.officeHours}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {page.offices.map((office: any, idx: number) => (
              <div key={idx} data-testid={`office-${idx}`} className="bg-white rounded-lg p-5 border border-gray-200 shadow-sm">
                <h3 className="text-[13px] font-bold text-[#0033a0] mb-1">{office.title}</h3>
                <p className="text-[12px] text-gray-500 mb-3">{office.company}</p>
                <div className="flex items-start gap-2 text-[13px] text-gray-600 mb-2">
                  <MapPin className="w-3.5 h-3.5 text-[#0033a0] shrink-0 mt-0.5" />
                  <span>{office.address}</span>
                </div>
                {office.phone && (
                  <div className="flex items-center gap-2 text-[13px] text-gray-600">
                    <Phone className="w-3.5 h-3.5 text-[#0033a0] shrink-0" />
                    <span>{office.phone}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
