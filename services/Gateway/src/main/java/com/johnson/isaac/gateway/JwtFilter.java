package com.johnson.isaac.gateway;

import org.springframework.cloud.gateway.filter.GatewayFilter;
import org.springframework.cloud.gateway.filter.GatewayFilterChain;
import org.springframework.http.HttpStatus;
import org.springframework.web.server.ServerWebExchange;
import reactor.core.publisher.Mono;

public class JwtFilter implements GatewayFilter {

    @Override
    public Mono<Void> filter(ServerWebExchange exchange, GatewayFilterChain chain) {
        String token = exchange.getRequest().getHeaders().get("Authorization").get(0).substring(7);
        JwtUtil jwtUtil = new JwtUtil(token);

        if (jwtUtil.isValid()) {
            // adds the username as a header to the service      hopefully
            return chain.filter(exchange.mutate().request(
                    exchange.getRequest().mutate().header("X-Email", jwtUtil.getBody().getSubject()).build()
            ).build());
        } else {
            exchange.getResponse().setStatusCode(HttpStatus.UNAUTHORIZED);
            return exchange.getResponse().setComplete();
        }
    }
}
