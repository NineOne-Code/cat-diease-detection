import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Stethoscope, Camera, FileText, Shield } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Header with Logo */}
      <header className="px-4 py-6">
        <div className="flex items-center justify-center mb-8">
          <div className="flex items-center space-x-3">
            <CatLogo />
            <div>
              <h1 className="text-2xl font-bold text-gray-800">CatSkin AI</h1>
              <p className="text-sm text-gray-600">Feline Dermatology Assistant</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-4 pb-8">
        {/* Hero Section */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">AI-Powered Cat Skin Disease Detection</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Advanced analysis for common feline skin conditions including Scabies, Ringworm, Fleas, and more. Get
            instant insights to help care for your cat.
          </p>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
            <div className="flex items-center justify-center mb-2">
              <Shield className="h-5 w-5 text-amber-600 mr-2" />
              <span className="font-semibold text-amber-800">Important Notice</span>
            </div>
            <p className="text-sm text-amber-700">
              This app provides educational information only. Always consult a licensed veterinarian for proper
              diagnosis and treatment.
            </p>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="space-y-4 mb-8">
          <Card className="border-l-4 border-l-blue-500">
            <CardHeader className="pb-3">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Stethoscope className="h-5 w-5 text-blue-600" />
                </div>
                <CardTitle className="text-lg">Symptom Analysis</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Input your cat's symptoms and get AI-powered analysis for 8 common skin conditions
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-green-500">
            <CardHeader className="pb-3">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Camera className="h-5 w-5 text-green-600" />
                </div>
                <CardTitle className="text-lg">Visual Assessment</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription>Upload photos of affected areas for enhanced diagnostic insights</CardDescription>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-purple-500">
            <CardHeader className="pb-3">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <FileText className="h-5 w-5 text-purple-600" />
                </div>
                <CardTitle className="text-lg">Detailed Reports</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription>Receive comprehensive analysis reports with care recommendations</CardDescription>
            </CardContent>
          </Card>
        </div>

        {/* CTA Buttons */}
        <div className="space-y-3">
          <Link href="/symptom-checker" className="block">
            <Button className="w-full h-12 text-lg bg-blue-600 hover:bg-blue-700">Start Symptom Analysis</Button>
          </Link>

          <Link href="/conditions" className="block">
            <Button variant="outline" className="w-full h-12 text-lg border-gray-300 bg-transparent">
              Learn About Conditions
            </Button>
          </Link>
        </div>

        {/* Conditions Preview */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Conditions We Analyze</h3>
          <div className="grid grid-cols-2 gap-3">
            {[
              "Scabies",
              "Hair Lice",
              "Ringworm",
              "Fleas",
              "Demodex Cati",
              "Demodex Gatoi",
              "Sporotrichosis",
              "Ear Mites",
            ].map((condition) => (
              <div key={condition} className="bg-white rounded-lg p-3 shadow-sm border">
                <p className="text-sm font-medium text-gray-700">{condition}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

// Custom Cat Logo Component
function CatLogo() {
  return (
    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-white"
      >
        <path d="M12 2L9 5H15L12 2Z" fill="currentColor" />
        <path d="M12 2L15 5H21L18 8L15 5L12 2Z" fill="currentColor" opacity="0.7" />
        <path d="M12 2L9 5H3L6 8L9 5L12 2Z" fill="currentColor" opacity="0.7" />
        <circle cx="12" cy="12" r="8" fill="currentColor" />
        <circle cx="9" cy="10" r="1.5" fill="white" />
        <circle cx="15" cy="10" r="1.5" fill="white" />
        <path d="M12 13L10 15H14L12 13Z" fill="white" />
        <path d="M8 16C8 16 10 18 12 18C14 18 16 16 16 16" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </div>
  )
}
