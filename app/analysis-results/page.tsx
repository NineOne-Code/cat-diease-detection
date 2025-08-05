"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, AlertTriangle, Info, Phone, Calendar } from "lucide-react"
import Link from "next/link"

interface AnalysisResult {
  condition: string
  probability: number
  severity: "Low" | "Medium" | "High"
  description: string
  symptoms: string[]
  recommendations: string[]
}

const mockResults: AnalysisResult[] = [
  {
    condition: "Flea Infestation",
    probability: 85,
    severity: "Medium",
    description: "Common external parasites that cause intense itching and skin irritation in cats.",
    symptoms: ["Excessive scratching", "Visible fleas", "Red inflamed skin", "Black specks in fur"],
    recommendations: [
      "Use veterinarian-approved flea treatment",
      "Vacuum and clean all areas where cat spends time",
      "Wash bedding in hot water",
      "Consider treating all pets in household",
    ],
  },
  {
    condition: "Ringworm",
    probability: 45,
    severity: "Medium",
    description: "Fungal infection causing circular patches of hair loss and scaling.",
    symptoms: ["Circular hair loss", "Scaling skin", "Broken hair"],
    recommendations: [
      "Isolate affected cat from other pets",
      "Antifungal medication as prescribed by vet",
      "Disinfect environment thoroughly",
      "Monitor for spread to other areas",
    ],
  },
  {
    condition: "Allergic Dermatitis",
    probability: 30,
    severity: "Low",
    description: "Skin reaction to environmental or food allergens.",
    symptoms: ["Itching", "Red skin", "Possible hair loss"],
    recommendations: [
      "Identify and eliminate potential allergens",
      "Consider hypoallergenic diet trial",
      "Use gentle, fragrance-free products",
      "Monitor for improvement over 2-4 weeks",
    ],
  },
]

export default function AnalysisResults() {
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

  const getProbabilityColor = (probability: number) => {
    if (probability >= 70) return "bg-red-500"
    if (probability >= 40) return "bg-yellow-500"
    return "bg-green-500"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Header */}
      <header className="px-4 py-4 bg-white shadow-sm">
        <div className="flex items-center space-x-3">
          <Link href="/symptom-checker">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <h1 className="text-xl font-semibold text-gray-800">Analysis Results</h1>
        </div>
      </header>

      <main className="px-4 py-6">
        {/* Important Notice */}
        <Card className="mb-6 border-amber-200 bg-amber-50">
          <CardContent className="pt-6">
            <div className="flex items-start space-x-3">
              <AlertTriangle className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-amber-800 mb-1">AI Analysis Complete</p>
                <p className="text-sm text-amber-700">
                  This analysis is for informational purposes only. Please consult a veterinarian for proper diagnosis
                  and treatment.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Results */}
        <div className="space-y-4 mb-8">
          {mockResults.map((result, index) => (
            <Card key={index} className="overflow-hidden">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{result.condition}</CardTitle>
                  <Badge className={getSeverityColor(result.severity)}>{result.severity} Risk</Badge>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Match Probability</span>
                    <span className="font-semibold">{result.probability}%</span>
                  </div>
                  <Progress
                    value={result.probability}
                    className="h-2"
                    style={{
                      background: `linear-gradient(to right, ${getProbabilityColor(result.probability)} 0%, ${getProbabilityColor(result.probability)} ${result.probability}%, #e5e7eb ${result.probability}%, #e5e7eb 100%)`,
                    }}
                  />
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">{result.description}</CardDescription>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm text-gray-800 mb-2">Matching Symptoms:</h4>
                    <div className="flex flex-wrap gap-2">
                      {result.symptoms.map((symptom, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {symptom}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm text-gray-800 mb-2">Recommendations:</h4>
                    <ul className="space-y-1">
                      {result.recommendations.map((rec, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-start">
                          <span className="text-blue-500 mr-2">•</span>
                          {rec}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="space-y-3 pb-8">
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="pt-6">
              <div className="flex items-center space-x-3 mb-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Phone className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-blue-800">Next Steps</h3>
                  <p className="text-sm text-blue-700">Contact your veterinarian for professional care</p>
                </div>
              </div>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">Find Veterinarians Near Me</Button>
            </CardContent>
          </Card>

          <div className="grid grid-cols-2 gap-3">
            <Link href="/symptom-checker">
              <Button variant="outline" className="w-full bg-transparent">
                New Analysis
              </Button>
            </Link>
            <Button variant="outline" className="w-full bg-transparent">
              <Calendar className="h-4 w-4 mr-2" />
              Save Results
            </Button>
          </div>

          <Link href="/conditions">
            <Button variant="ghost" className="w-full">
              <Info className="h-4 w-4 mr-2" />
              Learn More About Conditions
            </Button>
          </Link>
        </div>
      </main>
    </div>
  )
}
