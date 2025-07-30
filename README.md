# File Metadata Microservice

A simple API microservice built with Node.js and Express that allows you to upload a file and receive its metadata. The example homepage provides a simple form for file submission.

This project is a solution to the "File Metadata Microservice" challenge from [freeCodeCamp](https://www.freecodecamp.org/learn/apis-and-microservices/apis-and-microservices-projects/file-metadata-microservice).

---

## ✨ Tech Stack

-   **Backend:** [Node.js](https://nodejs.org/), [Express.js](https://expressjs.com/)
-   **File Handling:** [Multer](https://github.com/expressjs/multer)
-   **Language:** [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

---

## 🚀 How It Works

The microservice has one main endpoint that handles file uploads and returns metadata about the uploaded file.

### Endpoint: `POST /api/fileanalyse`

-   This endpoint accepts a file uploaded via a `multipart/form-data` form.
-   The file must be included in the form field named `upfile`.
-   Upon successful upload, the API returns a JSON object containing the file's name, type, and size in bytes.

---

### 📝 Usage Example

1.  Go to the root URL of the project in your browser.
2.  Use the provided HTML form to select a file from your computer.
3.  Click the "Upload" button.
4.  The API will respond with the file's metadata in JSON format.

---

### 📤 Output Example

-   **Successful Output:**

    ```json
    { "name": "my-file.txt", "type": "text/plain", "size": 123 }
    ```

---

## 💻 Local Development

1.  **Clone the repository:**
    ```bash
    git clone <YOUR_REPOSITORY_URL>
    cd <REPOSITORY_NAME>
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Run the development server:**
    ```bash
    npm start
    ```
    The server will then be running on `http://localhost:3000`.

---
