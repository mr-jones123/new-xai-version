FROM python:3.11-slim

WORKDIR /app

# Install dependencies first (better caching)
COPY src/app/api/python/requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy application code
COPY src/app/api/python/ .

EXPOSE 8080

# Run with gunicorn for production with better configurations
CMD ["gunicorn", "--bind", "0.0.0.0:8080", "--workers=4", "--timeout=120", "--access-logfile=-", "--error-logfile=-", "app:app"]