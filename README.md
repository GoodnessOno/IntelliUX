intelliux\client\src\assets\IntelliUX LOGO.png

# IntelliUX

IntelliUX is an intelligent design assistant that enhances the web application user interface (UI) by providing real-time suggestions, accessibility improvements, and sustainability tips. Leveraging machine learning (ML), IntelliUX analyzes existing UIs and offers recommendations for enhancements tailored to specific user needs and environmental sustainability.

## Features

- **Accessibility Enhancements:**
  - Real-time analysis of UI components to ensure accessibility to people with disabilities (e.g., colour contrast checks, voice-over compatibility).
  
- **Sustainability Tips:**
  - Suggestions for reducing energy consumption by optimizing animations and reducing unnecessary resource usage.
  
- **Personalization:**
  - Options to adapt UIs for different user demographics and needs, improving overall user satisfaction.
  
- **UI Improvement Suggestions:**
  - Provides dynamic, real-time suggestions and integrates directly with the development environment.

## Getting Started

### Prerequisites

- Node.js and npm installed
- Dependencies installed
- Google AI Studio account for ML model training and deployment

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/IntelliUX.git
   cd IntelliUX
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

### Usage

1. Start the development server:
   ```sh
   npm start
   ```

### Example Inputs and Outputs

**Input:** 
```json
{
  "action": "check_color_contrast",
  "foreground_color": "#FFFFFF",
  "background_color": "#0000FF"
}
```

**Output:** 
```json
{
  "contrast_ratio": 8.59,
  "accessibility_compliant": true,
  "suggestions": []
}
```

## Contributing

We welcome contributions from the community! Please read our CONTRIBUTING.md file for more information on how to get started.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Thanks to the contributors who have helped in the development of IntelliUX.
- Special thanks to Google AI Studio for providing the tools and resources to build the ML models used in this project.

## Contact

For any inquiries, please get in touch with ononogbugoodness@gmail.com.


