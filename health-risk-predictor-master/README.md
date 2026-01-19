# Health Risk Predictor (Backend)

A lightweight Java Spring Boot backend that exposes health risk prediction APIs. This repository contains only the backend; contributors are welcome to fork and implement their own custom frontends.

## Technologies
- Java (compatible with Java 17+)
- Spring Boot
- Maven

## Quick Start

Prerequisites:
- Java JDK 17 or later
- Maven 3.6+
- (Optional) Docker

Run locally:
- From project root:
  - With Maven wrapper (recommended if present):
    - `./mvnw spring-boot:run`
  - Or:
    - `mvn spring-boot:run`
- Or build and run jar:
  - `mvn clean package`
  - `java -jar target/*.jar`

Run from IntelliJ:
- Open the project as a Maven project.
- Run the main class `com.example.health_risk_predictor.HealthRiskPredictorApplication`.

Default server: `http://localhost:8080`

## How to Use / Integrate a Frontend

- Base API URL: `http://localhost:8080` (adjust if configured by `server.port`).
- Inspect available controllers in `src/main/java` to discover endpoints and request/response formats.
- Example curl (replace path and query/body with actual endpoints):
  - `curl -X GET "http://localhost:8080/api/your-endpoint?param=value" -H "Accept: application/json"`
- Recommended frontend flow:
  - Fork this repo.
  - Develop frontend against the local backend, configuring a proxy or CORS.
  - Enable CORS on backend controllers if needed (e.g., `@CrossOrigin(origins = "http://localhost:3000")`) or configure global CORS in a `WebMvcConfigurer`.
  - If using authentication, agree on token headers (e.g., `Authorization: Bearer <token>`).

## Configuration

- Application properties: `src/main/resources/application.properties` (or `.yml`).
- Common properties:
  - `server.port` — change the listening port.
  - Database and security settings as required.

## Docker (optional)
Sample build and run commands:
- Build:
  - `docker build -t health-risk-predictor .`
- Run:
  - `docker run -p 8080:8080 health-risk-predictor`

(Provide a `Dockerfile` in the repo if Docker support is needed.)

## Testing
- Run unit tests:
  - `mvn test`

## Contributing
- Fork the repository.
- Create a feature branch.
- Implement your frontend or backend improvements.
- Open a pull request with a clear description of changes.

## License
Include a license file as appropriate (e.g., `MIT`). If none is present, add `LICENSE` to clarify reuse rights.

## Contact
Open issues or PRs on the repository for questions or collaboration details.
