from fastapi import FastAPI, UploadFile, File

app = FastAPI()

@app.post("/upload")
async def upload_image(file: UploadFile = File(...)):
    return {"message": "image received"}