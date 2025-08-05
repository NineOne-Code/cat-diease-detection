import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Bug, Zap, Microscope, Ear } from "lucide-react"
import Link from "next/link"

interface Condition {
  name: string
  category: "Parasites" | "Fungal" | "Mites" | "Bacterial"
  severity: "Low" | "Medium" | "High"
  contagious: boolean
  description: string
  symptoms: string[]
  causes: string[]
  treatment: string
  prevention: string[]
}

const conditions: Condition[] = [
  {
    name: "Scabies (Sarcoptic Mange)",
    category: "Mites",
    severity: "High",
    contagious: true,
    description: "Highly contagious skin condition caused by Sarcoptes scabiei mites that burrow into the skin.",
    symptoms: ["Intense itching", "Red bumps and rashes", "Hair loss", "Crusty skin", "Secondary bacterial infections"],
    causes: ["Direct contact with infected animals", "Contaminated bedding or grooming tools"],
    treatment: "Prescription antiparasitic medications, medicated baths, and environmental treatment",
    prevention: [
      "Avoid contact with infected animals",
      "Regular grooming",
      "Clean living environment",
      "Quarantine new pets",
    ],
  },
  {
    name: "Hair Lice",
    category: "Parasites",
    severity: "Medium",
    contagious: true,
    description: "Small parasitic insects that live on cat hair and feed on skin debris and oils.",
    symptoms: ["Excessive scratching", "Visible lice or eggs on hair", "Dull, matted coat", "Skin irritation"],
    causes: ["Direct contact with infected animals", "Poor hygiene", "Stress or illness"],
    treatment: "Topical insecticides, medicated shampoos, and environmental cleaning",
    prevention: ["Regular grooming", "Maintain good hygiene", "Avoid overcrowding", "Quarantine infected animals"],
  },
  {
    name: "Ringworm",
    category: "Fungal",
    severity: "Medium",
    contagious: true,
    description: "Fungal infection that affects skin, hair, and nails, causing circular patches of hair loss.",
    symptoms: ["Circular patches of hair loss", "Scaly, crusty skin", "Broken hair shafts", "Red, inflamed skin"],
    causes: ["Fungal spores in environment", "Contact with infected animals", "Compromised immune system"],
    treatment: "Antifungal medications (topical and oral), medicated baths, environmental decontamination",
    prevention: ["Good hygiene", "Avoid contact with infected animals", "Clean environment", "Boost immune system"],
  },
  {
    name: "Fleas",
    category: "Parasites",
    severity: "Medium",
    contagious: true,
    description: "Small, wingless insects that feed on cat blood and can cause severe itching and allergic reactions.",
    symptoms: [
      "Excessive scratching",
      "Visible fleas or flea dirt",
      "Red, irritated skin",
      "Hair loss from scratching",
    ],
    causes: ["Contact with infested animals", "Contaminated environment", "Warm, humid conditions"],
    treatment: "Flea control products, environmental treatment, regular vacuuming",
    prevention: ["Regular flea prevention", "Vacuum regularly", "Treat all pets", "Maintain clean environment"],
  },
  {
    name: "Demodex Cati",
    category: "Mites",
    severity: "Low",
    contagious: false,
    description: "Microscopic mites that normally live in hair follicles but can overgrow in immunocompromised cats.",
    symptoms: ["Patchy hair loss", "Scaly skin", "Mild itching", "Secondary bacterial infections"],
    causes: ["Weakened immune system", "Stress", "Underlying illness", "Genetic predisposition"],
    treatment: "Antiparasitic medications, addressing underlying causes, supportive care",
    prevention: ["Maintain good health", "Reduce stress", "Regular veterinary checkups", "Proper nutrition"],
  },
  {
    name: "Demodex Gatoi",
    category: "Mites",
    severity: "Medium",
    contagious: true,
    description: "Contagious form of demodectic mange that lives in the superficial layers of skin.",
    symptoms: ["Intense itching", "Hair loss", "Red, inflamed skin", "Scaling and crusting"],
    causes: ["Direct contact with infected cats", "Contaminated environment", "Grooming tools"],
    treatment: "Antiparasitic medications, medicated baths, environmental treatment",
    prevention: ["Quarantine infected cats", "Clean grooming tools", "Environmental hygiene", "Regular health checks"],
  },
  {
    name: "Sporotrichosis",
    category: "Fungal",
    severity: "High",
    contagious: true,
    description: "Fungal infection that can affect skin and internal organs, potentially transmissible to humans.",
    symptoms: ["Skin nodules and ulcers", "Swollen lymph nodes", "Respiratory symptoms", "Systemic illness"],
    causes: ["Sporothrix fungus in soil", "Plant material", "Scratches or wounds", "Inhalation of spores"],
    treatment: "Long-term antifungal therapy, supportive care, isolation",
    prevention: ["Avoid contaminated soil", "Protect wounds", "Limit outdoor exposure", "Use protective equipment"],
  },
  {
    name: "Ear Mites",
    category: "Mites",
    severity: "Medium",
    contagious: true,
    description: "Microscopic parasites that live in ear canals, causing intense itching and dark discharge.",
    symptoms: [
      "Intense ear scratching",
      "Dark, coffee-ground discharge",
      "Strong odor",
      "Head shaking",
      "Scratches around ears",
    ],
    causes: ["Direct contact with infected animals", "Contaminated environment", "Poor ear hygiene"],
    treatment: "Ear cleaning, antiparasitic ear drops, systemic medications if severe",
    prevention: ["Regular ear cleaning", "Avoid contact with infected animals", "Good hygiene", "Regular checkups"],
  },
]

export default function ConditionsPage() {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Parasites":
        return <Bug className="h-5 w-5" />
      case "Fungal":
        return <Zap className="h-5 w-5" />
      case "Mites":
        return <Microscope className="h-5 w-5" />
      case "Bacterial":
        return <Ear className="h-5 w-5" />
      default:
        return <Bug className="h-5 w-5" />
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Parasites":
        return "bg-red-100 text-red-800 border-red-200"
      case "Fungal":
        return "bg-purple-100 text-purple-800 border-purple-200"
      case "Mites":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "Bacterial":
        return "bg-green-100 text-green-800 border-green-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "High":
        return "bg-red-100 text-red-800 border-red-200"
      case "Medium":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "Low":
        return "bg-green-100 text-green-800 border-green-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Header */}
      <header className="px-4 py-4 bg-white shadow-sm">
        <div className="flex items-center space-x-3">
          <Link href="/">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <h1 className="text-xl font-semibold text-gray-800">Skin Conditions</h1>
        </div>
      </header>

      <main className="px-4 py-6">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Common Cat Skin Conditions</h2>
          <p className="text-gray-600">
            Learn about the 8 most common feline skin conditions our AI can help identify.
          </p>
        </div>

        <div className="space-y-6 pb-8">
          {conditions.map((condition, index) => (
            <Card key={index} className="overflow-hidden">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-3">
                  <CardTitle className="text-lg pr-4">{condition.name}</CardTitle>
                  <div className="flex flex-col space-y-2">
                    <Badge className={getCategoryColor(condition.category)}>
                      <div className="flex items-center space-x-1">
                        {getCategoryIcon(condition.category)}
                        <span>{condition.category}</span>
                      </div>
                    </Badge>
                    <Badge className={getSeverityColor(condition.severity)}>{condition.severity} Risk</Badge>
                    {condition.contagious && (
                      <Badge className="bg-orange-100 text-orange-800 border-orange-200">Contagious</Badge>
                    )}
                  </div>
                </div>
                <CardDescription className="text-sm leading-relaxed">{condition.description}</CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-sm text-gray-800 mb-2">Common Symptoms:</h4>
                  <div className="flex flex-wrap gap-2">
                    {condition.symptoms.map((symptom, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {symptom}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-sm text-gray-800 mb-2">Causes:</h4>
                  <ul className="space-y-1">
                    {condition.causes.map((cause, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        {cause}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-sm text-gray-800 mb-2">Treatment:</h4>
                  <p className="text-sm text-gray-600">{condition.treatment}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-sm text-gray-800 mb-2">Prevention:</h4>
                  <ul className="space-y-1">
                    {condition.prevention.map((prev, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        {prev}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <Card className="bg-blue-50 border-blue-200">
          <CardContent className="pt-6 text-center">
            <h3 className="font-semibold text-blue-800 mb-2">Ready to Check Your Cat?</h3>
            <p className="text-sm text-blue-700 mb-4">
              Use our AI-powered symptom checker to get insights about your cat's condition.
            </p>
            <Link href="/symptom-checker">
              <Button className="bg-blue-600 hover:bg-blue-700">Start Symptom Analysis</Button>
            </Link>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
