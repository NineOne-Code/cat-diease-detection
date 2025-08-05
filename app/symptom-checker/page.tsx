"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, Camera, Upload } from "lucide-react"
import Link from "next/link"

interface Symptom {
  id: string
  label: string
  category: string
}

const symptoms: Symptom[] = [
  // Skin Symptoms
  { id: "itching", label: "Excessive scratching/itching", category: "Skin" },
  { id: "redness", label: "Red or inflamed skin", category: "Skin" },
  { id: "scaling", label: "Flaky or scaly skin", category: "Skin" },
  { id: "lesions", label: "Open sores or lesions", category: "Skin" },
  { id: "bumps", label: "Small bumps or pustules", category: "Skin" },
  { id: "thickening", label: "Thickened skin areas", category: "Skin" },

  // Hair/Fur Symptoms
  { id: "hair_loss", label: "Hair loss (patchy or circular)", category: "Hair" },
  { id: "broken_hair", label: "Broken or brittle hair", category: "Hair" },
  { id: "dull_coat", label: "Dull or greasy coat", category: "Hair" },

  // Parasites
  { id: "visible_fleas", label: "Visible fleas or flea dirt", category: "Parasites" },
  { id: "black_specks", label: "Black specks in fur", category: "Parasites" },
  { id: "moving_specks", label: "Small moving specks", category: "Parasites" },

  // Ear Symptoms
  { id: "ear_scratching", label: "Excessive ear scratching", category: "Ears" },
  { id: "ear_discharge", label: "Dark discharge from ears", category: "Ears" },
  { id: "ear_odor", label: "Strong odor from ears", category: "Ears" },
  { id: "head_shaking", label: "Frequent head shaking", category: "Ears" },

  // Behavioral
  { id: "restlessness", label: "Restlessness or discomfort", category: "Behavior" },
  { id: "appetite_loss", label: "Loss of appetite", category: "Behavior" },
  { id: "lethargy", label: "Unusual lethargy", category: "Behavior" },
]

export default function SymptomChecker() {
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([])
  const [additionalNotes, setAdditionalNotes] = useState("")
  const [images, setImages] = useState<File[]>([])

  const handleSymptomChange = (symptomId: string, checked: boolean) => {
    if (checked) {
      setSelectedSymptoms([...selectedSymptoms, symptomId])
    } else {
      setSelectedSymptoms(selectedSymptoms.filter((id) => id !== symptomId))
    }
  }

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || [])
    setImages([...images, ...files])
  }

  const groupedSymptoms = symptoms.reduce(
    (acc, symptom) => {
      if (!acc[symptom.category]) {
        acc[symptom.category] = []
      }
      acc[symptom.category].push(symptom)
      return acc
    },
    {} as Record<string, Symptom[]>,
  )

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
          <h1 className="text-xl font-semibold text-gray-800">Symptom Checker</h1>
        </div>
      </header>

      <main className="px-4 py-6">
        {/* Instructions */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-lg">How it works</CardTitle>
            <CardDescription>
              Select all symptoms your cat is experiencing. The more accurate information you provide, the better our AI
              analysis will be.
            </CardDescription>
          </CardHeader>
        </Card>

        {/* Symptom Selection */}
        <div className="space-y-6">
          {Object.entries(groupedSymptoms).map(([category, categorySymptoms]) => (
            <Card key={category}>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg text-gray-800">{category} Symptoms</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {categorySymptoms.map((symptom) => (
                    <div key={symptom.id} className="flex items-center space-x-3">
                      <Checkbox
                        id={symptom.id}
                        checked={selectedSymptoms.includes(symptom.id)}
                        onCheckedChange={(checked) => handleSymptomChange(symptom.id, checked as boolean)}
                      />
                      <Label
                        htmlFor={symptom.id}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {symptom.label}
                      </Label>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Photo Upload */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="text-lg flex items-center space-x-2">
              <Camera className="h-5 w-5" />
              <span>Upload Photos (Optional)</span>
            </CardTitle>
            <CardDescription>Photos of affected areas can help improve analysis accuracy</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
                id="image-upload"
              />
              <label htmlFor="image-upload" className="cursor-pointer">
                <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                <p className="text-sm text-gray-600">Tap to upload photos</p>
                <p className="text-xs text-gray-500 mt-1">PNG, JPG up to 10MB each</p>
              </label>
            </div>
            {images.length > 0 && (
              <div className="mt-4">
                <p className="text-sm font-medium text-gray-700 mb-2">{images.length} photo(s) selected</p>
                <div className="flex flex-wrap gap-2">
                  {images.map((image, index) => (
                    <div key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                      {image.name}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Additional Notes */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="text-lg">Additional Information</CardTitle>
            <CardDescription>Any other details about your cat's condition, duration, or recent changes</CardDescription>
          </CardHeader>
          <CardContent>
            <Textarea
              placeholder="e.g., Symptoms started 3 days ago, cat is indoor/outdoor, recent diet changes..."
              value={additionalNotes}
              onChange={(e) => setAdditionalNotes(e.target.value)}
              className="min-h-[100px]"
            />
          </CardContent>
        </Card>

        {/* Analysis Button */}
        <div className="mt-8 pb-8">
          <Link href="/analysis-results">
            <Button
              className="w-full h-12 text-lg bg-blue-600 hover:bg-blue-700"
              disabled={selectedSymptoms.length === 0}
            >
              Analyze Symptoms ({selectedSymptoms.length} selected)
            </Button>
          </Link>
          {selectedSymptoms.length === 0 && (
            <p className="text-sm text-gray-500 text-center mt-2">Please select at least one symptom to continue</p>
          )}
        </div>
      </main>
    </div>
  )
}
