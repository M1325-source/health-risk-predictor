package com.example.health_risk_predictor.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.reactive.function.client.WebClient;

@Configuration
public class WebClientConfig {

    @Value("${ML_SERVICE_URL:http://localhost:8000}")
    private String mlServiceUrl;

    @Bean
    public WebClient webClient() {
        return WebClient.create(mlServiceUrl);
    }
}