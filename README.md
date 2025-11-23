# Breast Cancer UI

A modern Next.js web application for breast cancer prediction and result visualization using AI. This project provides a user-friendly interface for uploading medical images, receiving predictions, and viewing results securely.

## Features

- Upload patient details and medical images for prediction
- View AI-generated results and probabilities
- Responsive, clean UI with modern design
- Centralized API path and Axios for API calls
- Environment variable support for API base URL

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/taranggg/breast-cancer-ui.git
cd breast-cancer-ui
code .
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Copy `.env.example` to `.env.local` and update as needed:

```bash
cp .env.example .env.local
```

Edit `.env.local` to set your backend API base URL:

```env
NEXT_PUBLIC_API_BASE_URL=http://localhost:3000
```

Change the URL to your backend API base if needed.

### 4. Run the Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

## Connecting to Backend (BE)

- The frontend expects a backend API running and accessible at the URL set in `NEXT_PUBLIC_API_BASE_URL`.
- Two main endpoints are used:
  - `POST /predict` (for predictions)
  - `GET /health` (for result/status)
- Update the API base URL in `.env.local` to match your backend address.

## API Data Format

### Prediction API (`POST /predict`)

- **Request:**

  - Content-Type: `multipart/form-data`
  - Fields:
    - `name`: string (patient name)
    - `age`: number or string
    - `gender`: string (`Male` or `Female`)
    - `image`: file (medical image)

- **Example Request (FormData):**

```json
{
	"name": "Jane Doe",
	"age": 45,
	"gender": "Female",
	"image": <file>
}
```

- **Response:**

```json
{
  "name": "Jane Doe",
  "age": 45,
  "gender": "Female",
  "prediction": "Benign", // or "Normal", "Malignant"
  "probabilities": {
    "benign": 0.65,
    "malignant": 0.1,
    "normal": 0.25
  }
}
```

### Result API (`GET /health`)

- **Request:**
  - No parameters required
- **Response:**
  - Same format as prediction response above

## Folder Structure

```
breast-cancer-ui/
├── src/
│   ├── app/
│   ├── components/
│   ├── util/
│   └── lib/
├── public/
├── .env.local
├── package.json
├── README.md
└── ...
```

## Customization

- Update API paths in `src/util/apiPath.ts` if backend endpoints change.
- Adjust Axios config in `src/util/axiosInstance.ts` for custom headers or interceptors.

## Contributing

Pull requests and issues are welcome! Please open an issue for bugs or feature requests.

## License

MIT
