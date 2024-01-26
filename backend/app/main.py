from fastapi import FastAPI, Form
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title='Text Converter App')

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home() -> str:
    return "Working."

@app.post("/convert")
def convert_text(text: str = Form(...)):
    return {"result": text.upper()}