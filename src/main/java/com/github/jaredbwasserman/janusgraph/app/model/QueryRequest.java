package com.github.jaredbwasserman.janusgraph.app.model;

public class QueryRequest {
    public final String queryString;

    public QueryRequest(String queryString) {
        this.queryString = queryString;
    }
}
