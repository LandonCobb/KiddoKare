package com.johnson.isaac.gateway;

import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class RegConfig {
    @Bean
    public RouteLocator customRouteLocator(RouteLocatorBuilder builder) {
        return builder.routes()
                .route("schedule", r -> r.path("/schedule/**")
//                        .filters(f -> f.filter(new JwtFilter()))
                        .uri("lb://schedule"))
                .route("SitterProfileAPI", r -> r.path("/sitter/**")
//                        .filters(f -> f.filter(new JwtFilter()))
                        .uri("lb://SitterProfileAPI"))
                .route("parent-profile-service", r -> r.path("/parent/**")
//                        .filters(f -> f.filter(new JwtFilter()))
                        .uri("lb://parent-profile-service"))
                .build();
    }
}
