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
                .route("service-name", r -> r.path("/base-url/**")
                        .filters(f -> f.filter(new JwtFilter()))
                        .uri("lb://base-url"))
                .build();
    }
}
