import Foundation
import Vision
import AppKit

guard CommandLine.arguments.count > 1 else {
    print("Usage: swift ocr.swift <path-to-image>")
    exit(1)
}

let imagePath = CommandLine.arguments[1]
guard let image = NSImage(contentsOfFile: imagePath) else {
    print("Failed to load image from \(imagePath)")
    exit(1)
}

guard let tiffData = image.tiffRepresentation,
      let bitmap = NSBitmapImageRep(data: tiffData),
      let cgImage = bitmap.cgImage else {
    print("Failed to get CGImage from NSImage")
    exit(1)
}

let requestHandler = VNImageRequestHandler(cgImage: cgImage, options: [:])
let request = VNRecognizeTextRequest { request, error in
    if let error = error {
        print("Error recognizing text: \(error)")
        return
    }
    
    guard let observations = request.results as? [VNRecognizedTextObservation] else { return }
    for observation in observations {
        if let candidate = observation.topCandidates(1).first {
            print(candidate.string)
        }
    }
}

request.recognitionLevel = .accurate
request.recognitionLanguages = ["zh-Hans", "en-US"]

do {
    try requestHandler.perform([request])
} catch {
    print("Failed to perform request: \(error)")
}
