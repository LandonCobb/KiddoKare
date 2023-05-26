package com.johnson.isaac.gateway;

import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class RegConfig {
    @Bean
    public RouteLocator customRouteLocator(RouteLocatorBuilder builder) {
        // uncomment filters to enable jwt filtering
        return builder.routes()
                .route("schedule", r -> r.path("/schedule/**")
//                        .filters(f -> f.filter(new JwtFilter()))
                        .uri("lb://schedule"))
                .route("SitterProfileAPI", r -> r.path("/sitter/signup")
                        .uri("lb://SitterProfileAPI"))
                .route("SitterProfileAPI", r -> r.path("/sitter/**")
                        .filters(f -> f.filter(new JwtFilter()))
                        .uri("lb://SitterProfileAPI"))
                .route("parent-profile-service", r -> r.path("/parent/signup")
                        .uri("lb://parent-profile-service"))
                .route("parent-profile-service", r -> r.path("/parent/**")
                        .filters(f -> f.filter(new JwtFilter()))
                        .uri("lb://parent-profile-service"))
                .route("sitter-auth-service", r -> r.path("/auth/sitter/**")
                        .uri("lb://sitter-auth-service"))
                .route("parent-auth-service", r -> r.path("/auth/parent/**")
                        .uri("lb://parent-auth-service"))
                .build();
    }
}
