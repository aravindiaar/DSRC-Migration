import { useState, useEffect, useRef, useCallback, createContext, useContext } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { queryClient } from "@/lib/queryClient";
import {
  ChevronRight,
  ChevronDown,
  FileText,
  Globe,
  Layout,
  Save,
  RefreshCw,
  Check,
  AlertCircle,
  Eye,
  Edit3,
  Menu,
  X,
  Plus,
  Trash2,
  Image,
  List,
  Package,
  MousePointer,
} from "lucide-react";

const ActiveFieldContext = createContext<string | null>(null);

type FieldDef = {
  key: string;
  label: string;
  type: "text" | "textarea" | "image" | "list" | "list-of-objects" | "object" | "boolean";
  fields?: FieldDef[];
  placeholder?: string;
};

type CollectionDef = {
  id: string;
  label: string;
  apiPath: string;
  putPath: string;
  icon: any;
  previewPath: string;
  fields: FieldDef[];
};

const COLLECTIONS: CollectionDef[] = [
  {
    id: "global",
    label: "Global Settings",
    apiPath: "/api/content/global",
    putPath: "/api/content/global",
    icon: Globe,
    previewPath: "/",
    fields: [
      { key: "siteName", label: "Site Name", type: "text" },
      { key: "logoUrl", label: "Logo URL", type: "image" },
    ],
  },
  {
    id: "home",
    label: "Home Page",
    apiPath: "/api/content/pages/home",
    putPath: "/api/content/pages/home",
    icon: Layout,
    previewPath: "/",
    fields: [
      {
        key: "seo", label: "SEO", type: "object", fields: [
          { key: "title", label: "Page Title", type: "text" },
          { key: "description", label: "Meta Description", type: "textarea" },
        ]
      },
      {
        key: "heroSlides", label: "Hero Slides", type: "list-of-objects", fields: [
          { key: "title", label: "Title", type: "text" },
          { key: "subtitle", label: "Subtitle", type: "textarea" },
          { key: "bgImage", label: "Background Image", type: "image" },
        ]
      },
      {
        key: "whoWeAre", label: "Who We Are Section", type: "object", fields: [
          { key: "sectionTitle", label: "Section Title", type: "text" },
          { key: "paragraphs", label: "Paragraphs", type: "list" },
        ]
      },
      {
        key: "services", label: "Services Section", type: "object", fields: [
          { key: "sectionTitle", label: "Section Title", type: "text" },
          { key: "subtitle", label: "Subtitle", type: "textarea" },
        ]
      },
      {
        key: "testimonials", label: "Testimonials", type: "object", fields: [
          { key: "sectionTitle", label: "Section Title", type: "text" },
          {
            key: "items", label: "Testimonials", type: "list-of-objects", fields: [
              { key: "quote", label: "Quote", type: "textarea" },
              { key: "author", label: "Author", type: "text" },
              { key: "role", label: "Role", type: "text" },
              { key: "image", label: "Photo URL", type: "image" },
            ]
          },
        ]
      },
      {
        key: "careers", label: "Careers Section", type: "object", fields: [
          { key: "sectionTitle", label: "Section Title", type: "text" },
          { key: "heading", label: "Heading", type: "text" },
          { key: "description", label: "Description", type: "textarea" },
        ]
      },
    ],
  },
  {
    id: "services",
    label: "Services Page",
    apiPath: "/api/content/pages/services",
    putPath: "/api/content/pages/services",
    icon: Package,
    previewPath: "/services",
    fields: [
      { key: "seo", label: "SEO", type: "object", fields: [
        { key: "title", label: "Page Title", type: "text" },
        { key: "description", label: "Meta Description", type: "textarea" },
      ]},
      { key: "hero", label: "Hero", type: "object", fields: [
        { key: "title", label: "Title", type: "text" },
        { key: "subtitle", label: "Subtitle", type: "textarea" },
        { key: "bgImage", label: "Background Image", type: "image" },
      ]},
      { key: "coreServices", label: "Core Services Section", type: "object", fields: [
        { key: "title", label: "Title", type: "text" },
        { key: "subtitle", label: "Subtitle", type: "textarea" },
      ]},
      { key: "insights", label: "Insights", type: "object", fields: [
        { key: "title", label: "Section Title", type: "text" },
        { key: "items", label: "Insight Cards", type: "list-of-objects", fields: [
          { key: "title", label: "Title", type: "text" },
          { key: "description", label: "Description", type: "textarea" },
          { key: "icon", label: "Icon (briefcase|thumbs-up|star)", type: "text" },
        ]},
      ]},
      { key: "cta", label: "CTA Section", type: "object", fields: [
        { key: "title", label: "Title", type: "text" },
        { key: "subtitle", label: "Subtitle", type: "textarea" },
      ]},
    ],
  },
  {
    id: "who-we-are",
    label: "Who We Are Page",
    apiPath: "/api/content/pages/who-we-are",
    putPath: "/api/content/pages/who-we-are",
    icon: FileText,
    previewPath: "/who-we-are",
    fields: [
      { key: "seo", label: "SEO", type: "object", fields: [
        { key: "title", label: "Page Title", type: "text" },
        { key: "description", label: "Meta Description", type: "textarea" },
      ]},
      { key: "hero", label: "Hero", type: "object", fields: [
        { key: "title", label: "Title", type: "text" },
        { key: "subtitle", label: "Subtitle", type: "textarea" },
        { key: "bgImage", label: "Background Image", type: "image" },
      ]},
      { key: "intro", label: "Introduction", type: "object", fields: [
        { key: "paragraphs", label: "Paragraphs", type: "list" },
      ]},
      { key: "vision", label: "Vision", type: "object", fields: [
        { key: "title", label: "Title", type: "text" },
        { key: "text", label: "Text", type: "textarea" },
      ]},
      { key: "mission", label: "Mission", type: "object", fields: [
        { key: "title", label: "Title", type: "text" },
        { key: "text", label: "Text", type: "textarea" },
      ]},
      { key: "difference", label: "The DSRC Difference", type: "object", fields: [
        { key: "title", label: "Title", type: "text" },
        { key: "subtitle", label: "Subtitle", type: "textarea" },
        { key: "image", label: "Image URL", type: "image" },
        { key: "stats", label: "Stats", type: "list-of-objects", fields: [
          { key: "value", label: "Value", type: "text" },
          { key: "label", label: "Label", type: "text" },
        ]},
      ]},
      { key: "values", label: "Our Values", type: "object", fields: [
        { key: "title", label: "Title", type: "text" },
        { key: "items", label: "Values", type: "list-of-objects", fields: [
          { key: "title", label: "Title", type: "text" },
          { key: "description", label: "Description", type: "textarea" },
        ]},
      ]},
    ],
  },
  {
    id: "careers",
    label: "Careers Page",
    apiPath: "/api/content/pages/careers",
    putPath: "/api/content/pages/careers",
    icon: FileText,
    previewPath: "/careers",
    fields: [
      { key: "seo", label: "SEO", type: "object", fields: [
        { key: "title", label: "Page Title", type: "text" },
        { key: "description", label: "Meta Description", type: "textarea" },
      ]},
      { key: "hero", label: "Hero", type: "object", fields: [
        { key: "title", label: "Title", type: "text" },
        { key: "subtitle", label: "Subtitle", type: "textarea" },
        { key: "bgImage", label: "Background Image", type: "image" },
      ]},
      { key: "intro", label: "Introduction", type: "object", fields: [
        { key: "heading", label: "Heading", type: "text" },
        { key: "subheading", label: "Subheading", type: "textarea" },
        { key: "question", label: "Question", type: "text" },
        { key: "answer", label: "Answer", type: "text" },
        { key: "paragraphs", label: "Paragraphs", type: "list" },
      ]},
      { key: "highlights", label: "Highlights", type: "list-of-objects", fields: [
        { key: "title", label: "Title", type: "text" },
        { key: "description", label: "Description", type: "textarea" },
      ]},
      { key: "workingAtDsrc", label: "Working at DSRC", type: "object", fields: [
        { key: "title", label: "Title", type: "text" },
        { key: "sections", label: "Sections", type: "list-of-objects", fields: [
          { key: "title", label: "Title", type: "text" },
          { key: "description", label: "Description", type: "textarea" },
        ]},
      ]},
      { key: "cta", label: "CTA Section", type: "object", fields: [
        { key: "title", label: "Title", type: "text" },
        { key: "subtitle", label: "Subtitle", type: "textarea" },
      ]},
    ],
  },
  {
    id: "contact",
    label: "Contact Page",
    apiPath: "/api/content/pages/contact",
    putPath: "/api/content/pages/contact",
    icon: FileText,
    previewPath: "/contact",
    fields: [
      { key: "seo", label: "SEO", type: "object", fields: [
        { key: "title", label: "Page Title", type: "text" },
        { key: "description", label: "Meta Description", type: "textarea" },
      ]},
      { key: "hero", label: "Hero", type: "object", fields: [
        { key: "title", label: "Title", type: "text" },
        { key: "subtitle", label: "Subtitle", type: "textarea" },
        { key: "bgImage", label: "Background Image", type: "image" },
      ]},
      { key: "intro", label: "Introduction", type: "object", fields: [
        { key: "heading", label: "Heading", type: "text" },
        { key: "paragraph", label: "Paragraph", type: "textarea" },
      ]},
      { key: "tabs", label: "Contact Tabs", type: "list-of-objects", fields: [
        { key: "id", label: "ID", type: "text" },
        { key: "label", label: "Label", type: "text" },
        { key: "type", label: "Type (form|office)", type: "text" },
        { key: "description", label: "Description", type: "textarea" },
        { key: "company", label: "Company", type: "text" },
        { key: "address", label: "Address", type: "textarea" },
        { key: "phone", label: "Phone", type: "text" },
        { key: "email", label: "Email", type: "text" },
      ]},
    ],
  },
];

const SERVICE_SLUGS = [
  { slug: "platform-product-development", label: "Platform & Product Development" },
  { slug: "application-services", label: "Application Services" },
  { slug: "digital-transformation", label: "Digital Transformation" },
  { slug: "cloud-management", label: "Cloud Management" },
];

const SERVICE_FIELDS: FieldDef[] = [
  { key: "seo", label: "SEO", type: "object", fields: [
    { key: "title", label: "Page Title", type: "text" },
    { key: "description", label: "Meta Description", type: "textarea" },
  ]},
  { key: "hero", label: "Hero", type: "object", fields: [
    { key: "title", label: "Title", type: "text" },
    { key: "subtitle", label: "Subtitle", type: "textarea" },
    { key: "bgImage", label: "Background Image", type: "image" },
  ]},
  { key: "ctaVariant", label: "CTA Style (white|blue)", type: "text" },
  { key: "whyDsrc", label: "Why DSRC Section", type: "object", fields: [
    { key: "title", label: "Title", type: "text" },
    { key: "description", label: "Description", type: "textarea" },
    { key: "items", label: "Icon Boxes", type: "list-of-objects", fields: [
      { key: "title", label: "Title", type: "text" },
      { key: "icon", label: "Icon Image URL", type: "image" },
    ]},
  ]},
  { key: "whyChoose", label: "Why Choose DSRC", type: "object", fields: [
    { key: "title", label: "Title", type: "text" },
    { key: "items", label: "Items", type: "list-of-objects", fields: [
      { key: "title", label: "Title", type: "text" },
      { key: "description", label: "Description", type: "textarea" },
      { key: "icon", label: "Icon Key", type: "text" },
    ]},
  ]},
  { key: "process", label: "Process Steps", type: "object", fields: [
    { key: "title", label: "Title", type: "text" },
    { key: "steps", label: "Steps", type: "list-of-objects", fields: [
      { key: "title", label: "Title", type: "text" },
      { key: "description", label: "Description", type: "textarea" },
    ]},
  ]},
  { key: "caseStudies", label: "Case Studies", type: "list-of-objects", fields: [
    { key: "title", label: "Title", type: "text" },
    { key: "description", label: "Description", type: "textarea" },
    { key: "image", label: "Image URL", type: "image" },
  ]},
  { key: "cta", label: "CTA Section", type: "object", fields: [
    { key: "title", label: "Title", type: "text" },
    { key: "subtitle", label: "Subtitle", type: "textarea" },
  ]},
];

const TINA_ROOT_TO_COLLECTION: Record<string, string> = {
  whoWeAre: "who-we-are",
  home: "home",
  services: "services",
  careers: "careers",
  contact: "contact",
  global: "global",
};

function getNestedValue(obj: any, path: string[]): any {
  return path.reduce((o, key) => (o && o[key] !== undefined ? o[key] : undefined), obj);
}

type FieldEditorProps = {
  field: FieldDef;
  value: any;
  onChange: (value: any) => void;
  depth?: number;
};

function FieldEditor({ field, value, onChange, depth = 0 }: FieldEditorProps) {
  const activeFieldKey = useContext(ActiveFieldContext);
  const [expanded, setExpanded] = useState(true);
  const isActive = activeFieldKey === field.key;
  const indent = depth * 16;

  const baseInput = "w-full border border-gray-200 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#0033a0] focus:border-[#0033a0]";
  const activeRing = isActive ? " ring-2 ring-[#0033a0] ring-offset-1 rounded" : "";

  if (field.type === "text") {
    return (
      <div
        data-field-key={field.key}
        className={`mb-4${activeRing}`}
        style={{ marginLeft: indent }}
      >
        <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">{field.label}</label>
        <input
          data-testid={`input-${field.key}`}
          type="text"
          className={baseInput}
          value={value ?? ""}
          onChange={e => onChange(e.target.value)}
          placeholder={field.placeholder}
        />
      </div>
    );
  }

  if (field.type === "textarea") {
    return (
      <div
        data-field-key={field.key}
        className={`mb-4${activeRing}`}
        style={{ marginLeft: indent }}
      >
        <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">{field.label}</label>
        <textarea
          data-testid={`textarea-${field.key}`}
          className={`${baseInput} h-24 resize-none`}
          value={value ?? ""}
          onChange={e => onChange(e.target.value)}
          placeholder={field.placeholder}
        />
      </div>
    );
  }

  if (field.type === "image") {
    return (
      <div
        data-field-key={field.key}
        className={`mb-4${activeRing}`}
        style={{ marginLeft: indent }}
      >
        <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
          <Image className="inline w-3 h-3 mr-1" />{field.label}
        </label>
        <div className="flex gap-2 items-start">
          <div className="flex-1">
            <input
              data-testid={`input-image-${field.key}`}
              type="text"
              className={baseInput}
              value={value ?? ""}
              onChange={e => onChange(e.target.value)}
              placeholder="/images/example.jpg"
            />
          </div>
          {value && (
            <img
              src={value}
              alt=""
              className="w-16 h-10 object-cover rounded border border-gray-200 flex-shrink-0"
              onError={e => { (e.target as HTMLImageElement).style.display = "none"; }}
            />
          )}
        </div>
      </div>
    );
  }

  if (field.type === "list") {
    const arr: string[] = Array.isArray(value) ? value : [];
    return (
      <div
        data-field-key={field.key}
        className={`mb-4${activeRing}`}
        style={{ marginLeft: indent }}
      >
        <div className="flex items-center justify-between mb-2">
          <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide">
            <List className="inline w-3 h-3 mr-1" />{field.label}
          </label>
          <button
            data-testid={`btn-add-${field.key}`}
            onClick={() => onChange([...arr, ""])}
            className="text-xs text-[#0033a0] hover:underline flex items-center gap-1"
          >
            <Plus className="w-3 h-3" /> Add
          </button>
        </div>
        <div className="space-y-2">
          {arr.map((item, idx) => (
            <div key={idx} className="flex gap-2">
              <textarea
                data-testid={`list-item-${field.key}-${idx}`}
                className={`${baseInput} flex-1 h-16 resize-none`}
                value={item}
                onChange={e => {
                  const next = [...arr];
                  next[idx] = e.target.value;
                  onChange(next);
                }}
              />
              <button
                data-testid={`btn-remove-${field.key}-${idx}`}
                onClick={() => onChange(arr.filter((_, i) => i !== idx))}
                className="text-red-400 hover:text-red-600 flex-shrink-0 mt-1"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (field.type === "object" && field.fields) {
    return (
      <div
        data-field-key={field.key}
        className={`mb-4${activeRing}`}
        style={{ marginLeft: indent }}
      >
        <button
          data-testid={`toggle-${field.key}`}
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-1 text-xs font-bold text-gray-700 uppercase tracking-wide mb-2 hover:text-[#0033a0]"
        >
          {expanded ? <ChevronDown className="w-3 h-3" /> : <ChevronRight className="w-3 h-3" />}
          {field.label}
          {isActive && <span className="ml-1 text-[#0033a0] font-normal normal-case">← clicked</span>}
        </button>
        {expanded && (
          <div className="border-l-2 border-gray-100 pl-3">
            {field.fields.map(subField => (
              <FieldEditor
                key={subField.key}
                field={subField}
                value={value?.[subField.key]}
                onChange={v => onChange({ ...value, [subField.key]: v })}
                depth={0}
              />
            ))}
          </div>
        )}
      </div>
    );
  }

  if (field.type === "list-of-objects" && field.fields) {
    const arr: any[] = Array.isArray(value) ? value : [];
    return (
      <div
        data-field-key={field.key}
        className={`mb-4${activeRing}`}
        style={{ marginLeft: indent }}
      >
        <div className="flex items-center justify-between mb-2">
          <button
            data-testid={`toggle-list-${field.key}`}
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-1 text-xs font-bold text-gray-700 uppercase tracking-wide hover:text-[#0033a0]"
          >
            {expanded ? <ChevronDown className="w-3 h-3" /> : <ChevronRight className="w-3 h-3" />}
            {field.label} ({arr.length})
            {isActive && <span className="ml-1 text-[#0033a0] font-normal normal-case">← clicked</span>}
          </button>
          <button
            data-testid={`btn-add-obj-${field.key}`}
            onClick={() => {
              const emptyItem: any = {};
              field.fields!.forEach(f => { emptyItem[f.key] = ""; });
              onChange([...arr, emptyItem]);
            }}
            className="text-xs text-[#0033a0] hover:underline flex items-center gap-1"
          >
            <Plus className="w-3 h-3" /> Add
          </button>
        </div>
        {expanded && (
          <div className="space-y-3">
            {arr.map((item, idx) => (
              <div key={idx} className="border border-gray-200 rounded p-3 bg-gray-50">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-semibold text-gray-500">#{idx + 1}</span>
                  <button
                    data-testid={`btn-remove-obj-${field.key}-${idx}`}
                    onClick={() => onChange(arr.filter((_, i) => i !== idx))}
                    className="text-red-400 hover:text-red-600"
                  >
                    <Trash2 className="w-3 h-3" />
                  </button>
                </div>
                {field.fields!.map(subField => (
                  <FieldEditor
                    key={subField.key}
                    field={subField}
                    value={item?.[subField.key]}
                    onChange={v => {
                      const next = [...arr];
                      next[idx] = { ...item, [subField.key]: v };
                      onChange(next);
                    }}
                    depth={0}
                  />
                ))}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  return null;
}

type EditorPanelProps = {
  collection: CollectionDef;
  onPreview: (path: string) => void;
  activeFieldKey: string | null;
};

function EditorPanel({ collection, onPreview, activeFieldKey }: EditorPanelProps) {
  const { data: rawData, isLoading } = useQuery<any>({
    queryKey: [collection.apiPath],
  });

  const [formData, setFormData] = useState<any>(null);
  const [isDirty, setIsDirty] = useState(false);
  const [saveStatus, setSaveStatus] = useState<"idle" | "saving" | "saved" | "error">("idle");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (rawData && !isDirty) {
      setFormData(rawData);
    }
  }, [rawData, isDirty]);

  useEffect(() => {
    if (!activeFieldKey || !scrollRef.current) return;
    const el = scrollRef.current.querySelector(`[data-field-key="${activeFieldKey}"]`);
    if (el) {
      setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "center" }), 80);
    }
  }, [activeFieldKey]);

  const saveMutation = useMutation({
    mutationFn: async (data: any) => {
      const res = await fetch(collection.putPath, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Save failed");
      return res.json();
    },
    onMutate: () => setSaveStatus("saving"),
    onSuccess: () => {
      setSaveStatus("saved");
      setIsDirty(false);
      queryClient.invalidateQueries({ queryKey: [collection.apiPath] });
      setTimeout(() => setSaveStatus("idle"), 3000);
    },
    onError: () => {
      setSaveStatus("error");
      setTimeout(() => setSaveStatus("idle"), 3000);
    },
  });

  const handleFieldChange = useCallback((key: string, value: any) => {
    setFormData((prev: any) => ({ ...prev, [key]: value }));
    setIsDirty(true);
    setSaveStatus("idle");
  }, []);

  if (isLoading || !formData) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="w-6 h-6 border-2 border-[#0033a0] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <ActiveFieldContext.Provider value={activeFieldKey}>
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 bg-white flex-shrink-0">
          <div>
            <h2 className="font-semibold text-gray-800 text-sm">{collection.label}</h2>
            {isDirty && <span className="text-xs text-amber-600">Unsaved changes</span>}
          </div>
          <div className="flex items-center gap-2">
            <button
              data-testid="btn-preview"
              onClick={() => onPreview(collection.previewPath)}
              className="flex items-center gap-1 text-xs px-3 py-1.5 text-gray-600 border border-gray-200 rounded hover:bg-gray-50"
            >
              <Eye className="w-3 h-3" /> Preview
            </button>
            <button
              data-testid="btn-save"
              disabled={!isDirty || saveStatus === "saving"}
              onClick={() => saveMutation.mutate(formData)}
              className={`flex items-center gap-1 text-xs px-3 py-1.5 rounded font-medium transition-colors ${
                !isDirty
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : saveStatus === "saving"
                  ? "bg-blue-100 text-blue-600 cursor-not-allowed"
                  : saveStatus === "saved"
                  ? "bg-green-100 text-green-700"
                  : saveStatus === "error"
                  ? "bg-red-100 text-red-700"
                  : "bg-[#0033a0] text-white hover:bg-[#002280]"
              }`}
            >
              {saveStatus === "saving" && <RefreshCw className="w-3 h-3 animate-spin" />}
              {saveStatus === "saved" && <Check className="w-3 h-3" />}
              {saveStatus === "error" && <AlertCircle className="w-3 h-3" />}
              {saveStatus === "idle" && <Save className="w-3 h-3" />}
              {saveStatus === "saving" ? "Saving..." : saveStatus === "saved" ? "Saved!" : saveStatus === "error" ? "Error" : "Save"}
            </button>
          </div>
        </div>
        <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4">
          {collection.fields.map(field => (
            <FieldEditor
              key={field.key}
              field={field}
              value={formData[field.key]}
              onChange={v => handleFieldChange(field.key, v)}
            />
          ))}
        </div>
      </div>
    </ActiveFieldContext.Provider>
  );
}

function ServiceEditorPanel({ slug, label, onPreview, activeFieldKey }: {
  slug: string;
  label: string;
  onPreview: (path: string) => void;
  activeFieldKey: string | null;
}) {
  const apiPath = `/api/content/services/${slug}`;
  const { data: rawData, isLoading } = useQuery<any>({ queryKey: [apiPath] });
  const [formData, setFormData] = useState<any>(null);
  const [isDirty, setIsDirty] = useState(false);
  const [saveStatus, setSaveStatus] = useState<"idle" | "saving" | "saved" | "error">("idle");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (rawData && !isDirty) setFormData(rawData);
  }, [rawData, isDirty]);

  useEffect(() => {
    if (!activeFieldKey || !scrollRef.current) return;
    const el = scrollRef.current.querySelector(`[data-field-key="${activeFieldKey}"]`);
    if (el) {
      setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "center" }), 80);
    }
  }, [activeFieldKey]);

  const saveMutation = useMutation({
    mutationFn: async (data: any) => {
      const res = await fetch(apiPath, { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      if (!res.ok) throw new Error("Save failed");
      return res.json();
    },
    onMutate: () => setSaveStatus("saving"),
    onSuccess: () => {
      setSaveStatus("saved");
      setIsDirty(false);
      queryClient.invalidateQueries({ queryKey: [apiPath] });
      setTimeout(() => setSaveStatus("idle"), 3000);
    },
    onError: () => {
      setSaveStatus("error");
      setTimeout(() => setSaveStatus("idle"), 3000);
    },
  });

  if (isLoading || !formData) {
    return <div className="flex items-center justify-center h-64"><div className="w-6 h-6 border-2 border-[#0033a0] border-t-transparent rounded-full animate-spin" /></div>;
  }

  return (
    <ActiveFieldContext.Provider value={activeFieldKey}>
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 bg-white flex-shrink-0">
          <div>
            <h2 className="font-semibold text-gray-800 text-sm">{label}</h2>
            {isDirty && <span className="text-xs text-amber-600">Unsaved changes</span>}
          </div>
          <div className="flex items-center gap-2">
            <button data-testid="btn-preview-service" onClick={() => onPreview(`/services/${slug}`)} className="flex items-center gap-1 text-xs px-3 py-1.5 text-gray-600 border border-gray-200 rounded hover:bg-gray-50">
              <Eye className="w-3 h-3" /> Preview
            </button>
            <button
              data-testid="btn-save-service"
              disabled={!isDirty || saveStatus === "saving"}
              onClick={() => saveMutation.mutate(formData)}
              className={`flex items-center gap-1 text-xs px-3 py-1.5 rounded font-medium transition-colors ${!isDirty ? "bg-gray-100 text-gray-400 cursor-not-allowed" : saveStatus === "saving" ? "bg-blue-100 text-blue-600 cursor-not-allowed" : saveStatus === "saved" ? "bg-green-100 text-green-700" : "bg-[#0033a0] text-white hover:bg-[#002280]"}`}
            >
              {saveStatus === "saving" ? <><RefreshCw className="w-3 h-3 animate-spin" /> Saving...</> : saveStatus === "saved" ? <><Check className="w-3 h-3" /> Saved!</> : <><Save className="w-3 h-3" /> Save</>}
            </button>
          </div>
        </div>
        <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4">
          {SERVICE_FIELDS.map(field => (
            <FieldEditor key={field.key} field={field} value={formData[field.key]} onChange={v => { setFormData((p: any) => ({ ...p, [field.key]: v })); setIsDirty(true); setSaveStatus("idle"); }} />
          ))}
        </div>
      </div>
    </ActiveFieldContext.Provider>
  );
}

type NavItem = {
  id: string;
  type: "collection" | "service";
  label: string;
  collectionId?: string;
  slug?: string;
  previewPath: string;
};

export default function AdminCMS() {
  const [selectedItem, setSelectedItem] = useState<NavItem | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>("/");
  const [iframeKey, setIframeKey] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [servicesExpanded, setServicesExpanded] = useState(false);
  const [activeFieldKey, setActiveFieldKey] = useState<string | null>(null);
  const [clickToEditMode, setClickToEditMode] = useState(true);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const serviceNavItems: NavItem[] = SERVICE_SLUGS.map(s => ({
    id: s.slug,
    type: "service" as const,
    label: s.label,
    slug: s.slug,
    previewPath: `/services/${s.slug}`,
  }));

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (!event.data || event.data.type !== "tina-field-selected") return;
      const fieldId: string = event.data.fieldId;
      if (!fieldId) return;

      const parts = fieldId.split("---");
      if (parts.length < 2) return;
      const pathStr = parts[1];
      const segments = pathStr.split(".");
      const root = segments[0];
      const fieldKey = segments[1] || null;

      const collectionId = TINA_ROOT_TO_COLLECTION[root];

      if (collectionId) {
        const col = COLLECTIONS.find(c => c.id === collectionId);
        if (col) {
          setSelectedItem(prev => {
            if (prev?.id !== collectionId) {
              return { id: collectionId, type: "collection", label: col.label, collectionId, previewPath: col.previewPath };
            }
            return prev;
          });
          setActiveFieldKey(fieldKey);
        }
      } else if (root === "serviceDetail") {
        const slug = previewUrl.replace("/services/", "").split("?")[0].split("#")[0];
        const serviceItem = serviceNavItems.find(s => s.slug === slug);
        if (serviceItem) {
          setSelectedItem(prev => prev?.id !== serviceItem.id ? serviceItem : prev);
          setActiveFieldKey(fieldKey);
          setServicesExpanded(true);
        }
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [previewUrl, serviceNavItems]);

  const handlePreview = useCallback((path: string) => {
    setPreviewUrl(path);
    setIframeKey(k => k + 1);
    setActiveFieldKey(null);
  }, []);

  const handleSelectItem = useCallback((item: NavItem) => {
    setSelectedItem(item);
    setActiveFieldKey(null);
    handlePreview(item.previewPath);
  }, [handlePreview]);

  const refreshPreview = useCallback(() => {
    setIframeKey(k => k + 1);
    setActiveFieldKey(null);
  }, []);

  const navItems: NavItem[] = [
    ...COLLECTIONS.map(c => ({
      id: c.id,
      type: "collection" as const,
      label: c.label,
      collectionId: c.id,
      previewPath: c.previewPath,
    })),
  ];

  const collection = selectedItem?.type === "collection"
    ? COLLECTIONS.find(c => c.id === selectedItem.collectionId)
    : null;

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden" data-testid="admin-cms">
      <div className={`${sidebarOpen ? "w-64" : "w-0"} flex-shrink-0 bg-[#1a1a2e] text-white flex flex-col transition-all duration-200 overflow-hidden`}>
        <div className="px-4 py-4 border-b border-white/10 flex-shrink-0">
          <div className="flex items-center gap-2">
            <img src="/images/dsrc-logo.png" alt="DSRC" className="h-7 brightness-0 invert" onError={e => { (e.target as HTMLImageElement).style.display = "none"; }} />
            <div>
              <div className="text-sm font-bold">Content Manager</div>
              <div className="text-xs text-white/50">DSRC CMS</div>
            </div>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto py-3">
          <div className="px-3 mb-1">
            <p className="text-xs font-semibold uppercase tracking-wider text-white/40 px-2 mb-2">Pages</p>
            {navItems.map(item => {
              const Icon = COLLECTIONS.find(c => c.id === item.id)?.icon || FileText;
              return (
                <button
                  key={item.id}
                  data-testid={`nav-${item.id}`}
                  onClick={() => handleSelectItem(item)}
                  className={`w-full flex items-center gap-2 px-2 py-2 rounded text-sm text-left transition-colors ${
                    selectedItem?.id === item.id ? "bg-white/15 text-white" : "text-white/70 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <Icon className="w-4 h-4 flex-shrink-0" />
                  {item.label}
                </button>
              );
            })}
          </div>
          <div className="px-3 mt-2">
            <button
              data-testid="nav-services-expand"
              onClick={() => setServicesExpanded(!servicesExpanded)}
              className="w-full flex items-center justify-between px-2 py-1 text-xs font-semibold uppercase tracking-wider text-white/40 hover:text-white/60"
            >
              <span>Service Pages</span>
              {servicesExpanded ? <ChevronDown className="w-3 h-3" /> : <ChevronRight className="w-3 h-3" />}
            </button>
            {servicesExpanded && serviceNavItems.map(item => (
              <button
                key={item.id}
                data-testid={`nav-service-${item.id}`}
                onClick={() => handleSelectItem(item)}
                className={`w-full flex items-center gap-2 px-2 py-2 rounded text-sm text-left transition-colors ${
                  selectedItem?.id === item.id ? "bg-white/15 text-white" : "text-white/70 hover:bg-white/10 hover:text-white"
                }`}
              >
                <Package className="w-4 h-4 flex-shrink-0" />
                {item.label}
              </button>
            ))}
          </div>
        </div>
        <div className="px-4 py-3 border-t border-white/10 flex-shrink-0">
          <a href="/" target="_blank" rel="noreferrer" className="text-xs text-white/50 hover:text-white/80 flex items-center gap-1">
            <Eye className="w-3 h-3" /> View Live Site
          </a>
        </div>
      </div>

      <div className="flex-1 flex flex-col min-w-0">
        <div className="bg-white border-b border-gray-200 px-4 py-2 flex items-center gap-3 flex-shrink-0">
          <button
            data-testid="btn-toggle-sidebar"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-1.5 rounded hover:bg-gray-100 text-gray-600"
          >
            {sidebarOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
          <Edit3 className="w-4 h-4 text-[#0033a0]" />
          <span className="text-sm font-semibold text-gray-700">
            {selectedItem ? selectedItem.label : "Select a page to edit"}
          </span>
          <div className="ml-auto flex items-center gap-3">
            <button
              data-testid="btn-click-to-edit"
              onClick={() => setClickToEditMode(!clickToEditMode)}
              title={clickToEditMode ? "Click-to-edit ON — click any section in the preview to jump to its field" : "Click-to-edit OFF"}
              className={`flex items-center gap-1.5 text-xs px-2.5 py-1.5 rounded border transition-colors ${
                clickToEditMode
                  ? "bg-[#0033a0]/10 border-[#0033a0]/30 text-[#0033a0] font-medium"
                  : "bg-gray-50 border-gray-200 text-gray-500"
              }`}
            >
              <MousePointer className="w-3 h-3" />
              {clickToEditMode ? "Click-to-edit ON" : "Click-to-edit OFF"}
            </button>
            <span className="text-xs text-gray-400">Preview:</span>
            <code className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-600">{previewUrl}</code>
            <button data-testid="btn-refresh-preview" onClick={refreshPreview} className="p-1.5 rounded hover:bg-gray-100 text-gray-500" title="Refresh preview">
              <RefreshCw className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="flex-1 flex min-h-0">
          {selectedItem && (
            <div className="w-[380px] flex-shrink-0 border-r border-gray-200 bg-white overflow-hidden flex flex-col">
              {selectedItem.type === "collection" && collection ? (
                <EditorPanel
                  collection={collection}
                  onPreview={handlePreview}
                  activeFieldKey={activeFieldKey}
                />
              ) : selectedItem.type === "service" && selectedItem.slug ? (
                <ServiceEditorPanel
                  slug={selectedItem.slug}
                  label={selectedItem.label}
                  onPreview={handlePreview}
                  activeFieldKey={activeFieldKey}
                />
              ) : null}
            </div>
          )}

          <div className="flex-1 bg-gray-100 flex flex-col min-w-0">
            {!selectedItem && (
              <div className="flex-1 flex items-center justify-center">
                <div className="text-center">
                  <Edit3 className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-600 mb-2">Select a page to edit</h3>
                  <p className="text-sm text-gray-400 max-w-sm">
                    Choose a page from the sidebar to edit its content. Changes will be visible in the preview on the right.
                  </p>
                </div>
              </div>
            )}
            <div className={`flex-1 flex flex-col ${!selectedItem ? "hidden" : ""}`}>
              <div className="bg-white border-b border-gray-200 px-3 py-2 flex items-center gap-2 flex-shrink-0">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <div className="flex-1 mx-3 bg-gray-100 rounded px-3 py-1 text-xs text-gray-500 font-mono truncate">
                  {typeof window !== "undefined" ? `${window.location.protocol}//${window.location.hostname}${previewUrl}` : previewUrl}
                </div>
                {clickToEditMode && (
                  <span className="text-xs text-[#0033a0] font-medium flex items-center gap-1 flex-shrink-0">
                    <MousePointer className="w-3 h-3" /> Click any section to edit
                  </span>
                )}
              </div>
              <div className="flex-1 relative">
                <iframe
                  ref={iframeRef}
                  key={iframeKey}
                  src={previewUrl}
                  className="absolute inset-0 w-full h-full border-0"
                  title="Site Preview"
                  data-testid="iframe-preview"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
